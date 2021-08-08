---
title: 'Hello Markdown'
excerpt: 'Testing new remark powered blog'
date: '2021-08-08'
---

## Using Prism with Next.js

Testing SSR **markdown** files with syntax highlighting.

```js
// lib/docs.js

import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.md$/, '');
  const docsDirectory = join(process.cwd(), 'docs');
  const fullPath = join(docsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}
```
