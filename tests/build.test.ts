import { existsSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { describe, expect, it } from 'vitest';

const buildRoot = resolve(__dirname, '../dist');
const base = '/the-zone-site/';
const routes = ['', 'network/', 'glossary/', 'reference/', 'methods/'];
const pages = new Map(routes.map(route => [route, readFileSync(resolve(buildRoot, route, 'index.html'), 'utf-8')]));

describe('deployed pages', () => {
  it('keeps links and assets under the GitHub Pages base and resolves local fragments', () => {
    for (const [route, html] of pages) {
      const pageUrl = new URL(base + route, 'https://dinghaoluo.github.io');
      for (const [, attribute] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
        if (/^[a-z]+:/i.test(attribute)) continue;
        const url = new URL(attribute, pageUrl);
        if (url.origin !== pageUrl.origin) continue;
        expect(url.pathname.startsWith(base), `${route}: ${attribute}`).toBe(true);
        const relativePath = decodeURIComponent(url.pathname.slice(base.length));
        const target = relativePath.endsWith('/') || !relativePath ? relativePath + 'index.html' : relativePath;
        expect(existsSync(resolve(buildRoot, target)), `${route}: ${attribute}`).toBe(true);
        if (!url.hash || !target.endsWith('.html')) continue;
        const targetHtml = readFileSync(resolve(buildRoot, target), 'utf-8');
        const ids = new Set([...targetHtml.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]));
        expect(ids.has(decodeURIComponent(url.hash.slice(1))), `${route}: ${attribute}`).toBe(true);
      }
    }
  });

  it('gives every page one main landmark and unique anchor IDs', () => {
    for (const [route, html] of pages) {
      expect([...html.matchAll(/<main\b/g)], route).toHaveLength(1);
      const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
      expect(ids.includes('main-content'), route).toBe(true);
      expect(new Set(ids).size, route).toBe(ids.length);
    }
  });
});
