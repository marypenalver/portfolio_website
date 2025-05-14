import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-red border-b-2 border-black">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-12 py-9">
        <Link href="/" className="font-heading text-3xl text-black">Maria Penalver</Link>
        <div className="flex gap-16 text-xl font-body">
          <Link href="/" className="font-body text-black no-underline">Home</Link>
          <Link href="/portfolio" className="text-black no-underline">Portfolio</Link>
          <Link href="/about" className="text-black no-underline">About</Link>
          <Link href="/contact" className="text-black no-underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

