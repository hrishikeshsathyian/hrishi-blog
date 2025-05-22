import Link from 'next/link';


export default function Navbar() {
  return (
    <header className="w-full p-4 shadow-sm border-b border-blue-300">
      <nav className="mx-auto flex items-center justify-between">
        <Link href="/" className="text-md font-bold pl-10 ">
          hrishikeshsathyian
        </Link>
        <div className="space-x-5 pr-16">
          <Link href="/blog" className='text-gray-300 hover:bg-gray-700 hover:text-white p-3 rounded-md text-sm font-bold'>Blog</Link>
          <Link href="/projects" className='text-gray-300 hover:bg-gray-700 hover:text-white p-3 rounded-md text-sm font-bold'>Projects</Link>
          <Link href="/about" className='text-gray-300 hover:bg-gray-700 hover:text-white p-3 rounded-md text-sm font-bold'>About</Link>
        </div>
      </nav>
    </header>
  );
}
