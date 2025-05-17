import _Image from 'next/image';
const Image = _Image.default || _Image;

export default function Home() {
  const photos = [
    'isa10.jpg',        // landscape, goes early
    'isa13.jpg',       // landscape, goes early
    'isa23.jpg',
    'isa2.jpg',
    'isa3.jpg',
    'isa21.jpg',
    'isa11.jpg', //h
    'isa5.jpg',
    'isa32.jpg',
    'isa30.jpg',
    'isa33.jpg',
    'isa7.jpg', //h
    'isa20.jpg',
    'isa15.jpg',
    'isa19.jpg',
  ];
  

  return (
    <main className="min-h-screen px-6 py-10 bg-white text-gray-900">
      <section className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((src, i) => (
          <img
            key={i}
            src={`/images/${src}`}
            alt={`gallery-photo-${i}`}
            className="w-full mb-4 rounded-lg object-cover"
          />
        ))}
      </section>
    </main>
  );
}
