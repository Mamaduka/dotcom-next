---
title: 'Hello Markdown'
excerpt: 'Testing new remark powered blog'
---

## Using Prism with Next.js

```js
// lib/api.js

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // Sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
```
