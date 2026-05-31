import { writeFileSync } from 'fs';
import { DOMParser } from '@xmldom/xmldom';

const MEDIUM_USER = 'bhuvism003';

async function main() {
  try {
    const res = await fetch(`https://medium.com/feed/@${MEDIUM_USER}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' },
    });
    const text = await res.text();
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    const items = Array.from(xml.getElementsByTagName('item'));
    const posts = items.slice(0, 5).map(item => ({
      title: item.getElementsByTagName('title')[0]?.textContent || 'Untitled',
      href: item.getElementsByTagName('link')[0]?.textContent || `https://medium.com/@${MEDIUM_USER}`,
      date: new Date(item.getElementsByTagName('pubDate')[0]?.textContent).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    }));
    writeFileSync('public/medium-posts.json', JSON.stringify(posts, null, 2));
    console.log(`Fetched ${posts.length} Medium posts`);
  } catch (e) {
    console.warn('Could not fetch Medium posts:', e.message);
    // write empty array so the site still builds
    writeFileSync('public/medium-posts.json', '[]');
  }
}

main();
