const TOKEN_URL = 'https://api.amazon.com/auth/o2/token';
const API_URL = 'https://creatorsapi.amazon/catalog/v1/getItems';
let cachedToken = null;
let tokenExpiresAt = 0;

async function getAccessToken(env) {
  if (cachedToken && Date.now() < tokenExpiresAt - 60_000) return cachedToken;
  const clientId = env.AMAZON_CREDENTIAL_ID;
  const clientSecret = env.AMAZON_CREDENTIAL_SECRET;
  if (!clientId || !clientSecret) throw new Error('Amazon Creators API credentials are not configured.');

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      scope: 'creatorsapi::default'
    })
  });

  if (!response.ok) throw new Error(`Amazon token request failed: ${response.status}`);
  const data = await response.json();
  cachedToken = data.access_token;
  tokenExpiresAt = Date.now() + Number(data.expires_in || 3600) * 1000;
  return cachedToken;
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const asin = (url.searchParams.get('asin') || '').trim().toUpperCase();

  if (!/^[A-Z0-9]{10}$/.test(asin)) {
    return Response.json({ error: 'A valid 10-character Amazon ASIN is required.' }, { status: 400 });
  }

  try {
    const token = await getAccessToken(env);
    const partnerTag = env.AMAZON_PARTNER_TAG;
    if (!partnerTag) throw new Error('Amazon partner tag is not configured.');

    const amazonResponse = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'x-marketplace': 'www.amazon.com'
      },
      body: JSON.stringify({
        itemIds: [asin],
        itemIdType: 'ASIN',
        partnerTag,
        marketplace: 'www.amazon.com',
        resources: [
          'images.primary.large',
          'itemInfo.title',
          'itemInfo.byLineInfo',
          'itemInfo.features',
          'itemInfo.productInfo',
          'browseNodeInfo.browseNodes',
          'offersV2.listings.price'
        ]
      })
    });

    const data = await amazonResponse.json();
    if (!amazonResponse.ok) {
      return Response.json({ error: 'Amazon product lookup is temporarily unavailable.', details: data }, { status: amazonResponse.status });
    }

    const item = data.itemsResult?.items?.[0];
    if (!item) return Response.json({ error: 'Product not found.' }, { status: 404 });

    return Response.json(item, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    return Response.json({
      error: error instanceof Error ? error.message : 'Product lookup failed.'
    }, { status: 503 });
  }
}
