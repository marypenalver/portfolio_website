import _Image from 'next/image';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
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
  const [isOpen,setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  
  return (
    <main className="min-h-screen px-6 py-10 bg-white text-gray-900">
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, i) => (
        <img
            key={i}
            src={`/images/${photo}`}
            alt={`gallery-photo-${i}`}
            className="cursor-pointer rounded-lg object-cover"
            onClick={() => {
              setIndex(i);
              setIsOpen(true);
            }}
        />
         ))}
      </section>

      <Lightbox
        open={isOpen}
        index={index}
        close={() => setIsOpen(false)}
        slides={photos.map(p => ({ src: `/images/${p}` }))}
      />
    </main>

  );
}
