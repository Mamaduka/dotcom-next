export default function Footer() {
  return (
    <footer className="flex-shrink-0 px-6 py-8 bg-gray-200 w-full">
      <div className="flex mx-auto max-w-3xl justify-between">
        <nav className="font-medium text-gray-800">
          <ul className="flex list-none p-0 m-0">
            <li className="mr-4">
              <a className="hover:text-red-500" href="https://twitter.com/Mamaduka">twitter</a>
            </li>
            <li className="mr-4">
              <a className="hover:text-red-500" href="https://github.com/Mamaduka">github</a>
            </li>
          </ul>
        </nav>
        <span className="font-medium text-gray-800">powered by Next.js</span>
      </div>
    </footer>
  )
}
