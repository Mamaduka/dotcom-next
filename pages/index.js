import Layout from '@/components/layout';

export default function Home() {
  return (
    <Layout>
      <article className="mb-12 prose entry lg:prose-lg max-w-none">
        <h2 className="">Hi! I’m George</h2>
        <p>
          I’m a developer from Tbilisi, Georgia. I’m working from home almost a
          decade now, even tried digital nomad thingy, but that wasn’t for me.
        </p>
        <p>
          I’m proficient in a handful of programming languages. During the day,
          I’m busy building custom plugins and Gutenberg{' '}
          <a
            href="https://github.com/sortabrilliant/"
            target="_blank"
            rel="noreferrer noopener"
          >
            blocks
          </a>
          .
        </p>
        <p>
          Time to time, I also{' '}
          <a
            href="https://profiles.wordpress.org/mamaduka"
            target="_blank"
            rel="noreferrer noopener"
          >
            contribute
          </a>{' '}
          to WordPress and its sister projects.
        </p>
        <p>
          P.S. This new blog is my latest attempt to practice technical writing.
        </p>
        <p>P.S.S It isn’t going so well 😅</p>
      </article>
    </Layout>
  );
}
