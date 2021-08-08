import Head from 'next/head';
import Layout from '@/components/layout';
import PostDate from '@/components/date';
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
        <meta name="description" content={post.excerpt} />
      </Head>
      <article className="mb-12 max-w-none">
        <header>
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="font-mono text-sm text-gray-700">
              <PostDate dateString={post.date} />
            </dd>
          </dl>
        </header>
        <section
          className="prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'slug',
    'date',
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
