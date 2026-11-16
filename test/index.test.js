const { readFile } = require('node:fs/promises');
const { join } = require('node:path');
const { test } = require('node:test');
const assert = require('node:assert/strict');

test('the page starts with a responsive blue Hello World banner', async () => {
  const html = await readFile(join(__dirname, '..', 'index.html'), 'utf8');
  assert.match(html, /<body>\s*<header class="banner">\s*<h1>Hello World<\/h1>/);
  assert.match(html, /background-color:\s*#0056b3/i);
  assert.match(html, /color:\s*#fff/i);
  assert.match(html, /padding:\s*clamp\(/i);
  assert.match(html, /font-size:\s*clamp\(/i);
  assert.doesNotMatch(html, /<a\b/i);
});
