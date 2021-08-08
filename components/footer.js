export default function Footer() {
  return (
    <footer className="flex-shrink-0 w-full px-6 py-8 bg-gray-200">
      <div className="flex justify-between max-w-3xl mx-auto">
        <nav className="font-medium text-gray-800">
          <ul className="flex p-0 m-0 list-none">
            <li className="mr-4">
              <a className="underline" href="https://twitter.com/Mamaduka">
                twitter
              </a>
            </li>
            <li className="mr-4">
              <a className="underline" href="https://github.com/Mamaduka">
                github
              </a>
            </li>
          </ul>
        </nav>
        <span className="font-medium text-gray-800">powered by Next.js</span>
      </div>
    </footer>
  );
}
