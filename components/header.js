import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header id="site-header" className="flex-shrink-0" role="banner">
      <div className="flex justify-between max-w-4xl px-6 pt-6 pb-12 mx-auto sm:px-12 lg:px-16">
        <div className="flex items-center">
          <Link href="/">
            <a rel="home">
              <Image
                src="/images/george.jpeg"
                width="64"
                height="64"
                className="rounded-full"
                alt="George Mamadashvili"
              />
            </a>
          </Link>
          <span className="h-6 ml-3 border-l border-gray-400 border-solid" />
          <h1 className="ml-3 text-lg text-gray-800">George Mamadashvili</h1>
        </div>
      </div>
    </header>
  );
}
