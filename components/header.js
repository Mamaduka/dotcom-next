import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header id="site-header" className="flex-shrink-0" role="banner">
      <div className="flex justify-between px-6 sm:px-12 lg:px-16 pt-6 pb-12 mx-auto max-w-4xl">
        <div className="flex items-center">
          <Link href="/">
            <a rel="home">
              <Image
                src="/images/george.png"
                width="64"
                height="64"
                className="rounded-full"
                alt="George Mamadashvili"
              />
            </a>
          </Link>
          <span className="h-6 border-solid border-l border-gray-400 ml-3" />
          <h1 className="text-lg text-gray-800 ml-3">George Mamadashvili</h1>
        </div>
      </div>
    </header>
  );
}
