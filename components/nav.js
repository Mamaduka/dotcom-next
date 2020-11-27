import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex items-center font-semibold text-lg text-gray-800">
      <ul className="flex list-none p-0 m-0">
        <li>
          <Link href="/about">
            <a className="hover:text-red-500">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
