import Head from 'next/head';
import Layout from '@/components/layout';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdown';

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title} | George Mamadashvili</title>
        <link
          href="https://unpkg.com/prismjs@1.24.1/themes/prism-okaidia.css"
          rel="stylesheet"
        />
      </Head>
      <article
        className="mb-12 prose entry lg:prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'excerpt',
    'content',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
