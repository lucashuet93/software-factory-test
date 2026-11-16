const { readFile } = require('node:fs/promises');
const { join } = require('node:path');
const { test } = require('node:test');
const assert = require('node:assert/strict');

test('the page contains a banner placeholder', async () => {
  const html = await readFile(join(__dirname, '..', 'index.html'), 'utf8');
  assert.match(html, /<[^>]+\bid=["']banner["'][^>]*>/);
});
