import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <Link href="/" className="font-heading text-2xl text-black mb-2 md:mb-0">MARIA PENALVER</Link>
        <div className="flex flex-wrap justify-center gap-4 text-sm font-body">
          <Link href="/" className="text-black no-underline">HOME</Link>
          <Link href="/street" className="text-black no-underline">STREET</Link>
          <Link href="/graduation" className="text-black no-underline">GRADUATION</Link>
          <Link href="/about" className="text-black no-underline">ABOUT</Link>
          <Link href="/contact" className="text-black no-underline">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}


