import Layout from '@/components/layout';
import Date from '@/components/date';
import { getAllPosts } from '@/lib/api';

// Temp flag for production.
const SHOW_POSTS = true;

export default function Home({ posts, hasPosts }) {
  return (
    <Layout>
      <section className="mb-12 prose prose-blue entry lg:prose-lg max-w-none">
        <h2>Blog, I’m George 👋</h2>
        <p>
          I’m a developer from Tbilisi, Georgia. I’m working from home for
          almost a decade now, I even tried the digital nomad thingy, but that
          wasn’t for me.
        </p>
        <p>
          I like building things. I’m also an audiobook worm and a very amateur
          climber.
        </p>
        <p>
          Currently, I’m{' '}
          <a
            href="https://profiles.wordpress.org/mamaduka"
            target="_blank"
            rel="noreferrer noopener"
          >
            contributing
          </a>{' '}
          full-time to the WordPress Core Block Editor, aka Gutenberg. GoDaddy
          sponsors my work on this fantastic project.
        </p>
      </section>
      {hasPosts && (
        <section>
          <h1 className="text-2xl font-bold mb-7 lg:text-3xl">Blog</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.slug} className="space-y-1">
                <a
                  className="text-xl font-medium text-blue-600 lg:text-2xl hover:underline"
                  href={`posts/${post.slug}`}
                >
                  {post.title}
                </a>
                <p className="text-lg text-gray-700">{post.excerpt}</p>
                <p className="font-mono text-sm text-gray-700">
                  <Date dateString={post.date} />
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts(['title', 'slug', 'excerpt', 'date']);
  return {
    props: {
      posts,
      hasPosts: !!posts?.length && SHOW_POSTS,
    },
  };
}
