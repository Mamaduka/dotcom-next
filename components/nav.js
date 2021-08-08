import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="flex items-center text-lg font-semibold text-gray-800">
      <ul className="flex p-0 m-0 list-none">
        <li>
          <Link href="/about">
            <a className="hover:text-red-500">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
