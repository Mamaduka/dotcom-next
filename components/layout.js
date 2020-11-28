import Head from 'next/head';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Layout({ children }) {
  return (
    <div id="page" className="min-h-screen flex flex-col">
      <Head>
        <title>George Mamadashvili</title>
        <meta name="description" content="A web developer extraordinaire" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" />
      </Head>
      <Header />
      <main
        id="site-content"
        className="flex-grow flex-shrink-0 px-6 sm:px-12 lg:px-16 mx-auto w-full max-w-4xl"
        role="main"
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
