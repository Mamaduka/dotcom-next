import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      <article className="mb-12 prose entry lg:prose-lg max-w-none">
        <h2 className="">Hi there, I’m George 👋</h2>
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
      </article>
    </Layout>
  );
}
