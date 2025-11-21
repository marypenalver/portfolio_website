import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full backdrop-filter-none flex flex-col md:flex-row justify-between items-center px-6 py-6 bg-transparent z-50 absolute top-0">
      <Link href="/" className="font-now lg:text-2xl sm:text-sm text-black mb-2 md:mb-0">MARIA PENALVER</Link>
      <div className="flex flex-wrap justify-center gap-4 text-sm font-body">
        {/* <Link href="/" className="text-black no-underline">HOME</Link> */}
        {/* <Link href="/production" className="text-black no-underline">PRODUCTION</Link> */}
        <Link href="/portrait" className="text-black no-underline">PORTRAITS</Link>
        <Link href="/street" className="text-black no-underline">STREET</Link>
        <Link href="/graduation" className="text-black no-underline">GRADUATION</Link>
        {/* <Link href="/about" className="text-black no-underline">ABOUT</Link> */}
        {/* <Link href="/contact" className="text-black no-underline">CONTACT</Link> */}
       
      </div>
    </nav>
  );
}


{/* <nav className="bg-transparent backdrop-filter-none z-50 absolute top-0 left-0 w-full"> */}


