export async function onRequest() {
  const res = await fetch('https://medium.com/feed/@bhuvism003', {
    headers: { 'User-Agent': 'Mozilla/5.0' },
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'Failed to fetch feed' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const xml = await res.text();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
