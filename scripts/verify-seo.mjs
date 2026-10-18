import assert from 'node:assert/strict';
import fs from 'node:fs';

const robots = fs.readFileSync('dist/robots.txt', 'utf8');
assert.match(robots, /User-agent:\s*\*/);
assert.match(robots, /Allow:\s*\//);
assert.match(robots, /Sitemap:\s*https:\/\/smakologia\.com\/sitemap-index\.xml/);

const sitemapIndex = fs.readFileSync('dist/sitemap-index.xml', 'utf8');
assert.match(sitemapIndex, /https:\/\/smakologia\.com\/sitemap-0\.xml/);

const sitemap0 = fs.readFileSync('dist/sitemap-0.xml', 'utf8');
assert.match(sitemap0, /<loc>https:\/\/smakologia\.com\/<\/loc>/);

const html = fs.readFileSync('dist/index.html', 'utf8');
assert.match(html, /<link rel="canonical" href="https:\/\/smakologia\.com\/"/);
assert.match(html, /<meta name="robots" content="index, follow/);
assert.match(html, /<meta name="geo\.region" content="PL-24"/);
assert.match(html, /<meta name="geo\.placename" content="Będzin"/);

const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
assert.ok(jsonLdMatch, 'Missing application/ld+json script tag');

const parsed = JSON.parse(jsonLdMatch[1]);
assert.equal(parsed['@context'], 'https://schema.org');
assert.ok(
  Array.isArray(parsed['@graph']) && parsed['@graph'].length >= 5,
  'Invalid @graph in JSON-LD',
);

const types = parsed['@graph'].map((node) => node['@type']);
for (const expectedType of ['WebSite', 'MedicalBusiness', 'Person', 'WebPage', 'FAQPage']) {
  assert.ok(types.includes(expectedType), `Missing Schema.org @type: ${expectedType}`);
}

console.log('✓ Google Robots (robots.txt): OK');
console.log('✓ XML Sitemaps (sitemap-index.xml & sitemap-0.xml): OK');
console.log('✓ Canonical URL, Meta Robots & Regional Geo Tags (PL-24 / Będzin): OK');
console.log(`✓ Schema.org JSON-LD @graph (${types.join(', ')}): OK`);
