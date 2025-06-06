import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-10 py-12">
        <Link href="/" className="font-heading text-3xl text-black">MARIA PENALVER</Link>
        <div className="flex gap-7 text-sm font-body">
          <Link href="/" className="font-body text-black no-underline">HOME</Link>
          <Link href="/street" className="text-black no-underline">STREET</Link>
          <Link href="/graduation" className="text-black no-underline">GRADUATION</Link>
          <Link href="/about" className="text-black no-underline">ABOUT</Link>
          <Link href="/contact" className="text-black no-underline">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}

