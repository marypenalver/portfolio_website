import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
import _Image from 'next/image';
const Image = _Image.default || _Image;

export default function Graduation() {
  const photos = [
    
  ];
  const [isOpen,setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(Array(photos.length).fill(false));


  return (
    <main className="pt-32 min-h-screen px-6 py-10 bg-white text-gray-900">
      {/* <section className="grid grid-cols-2 md:grid-cols-3 gap-4 "> */}
      <h1> Published Projects</h1>
      <section className="columns-3 md:columns-4 gap-12">
      {photos.map((photo, i) => (
  <Image
    key={i}
    src={`/images${photo}`}
    alt={`gallery-photo-${i}`}
    width={800}
    height={1200}
    className={`mb-12 w-full cursor-pointer h-auto opacity-0 transition-opacity duration-700 ease-in-out ${loaded[i] ? 'opacity-100' : ''}`}
    style={{ transitionDelay: `${i * 100}ms` }}
    onClick={() => {
      setIndex(i);
      setIsOpen(true);
    }}
    onLoad={() =>
      setLoaded(prev => {
        const updated = [...prev];
        updated[i] = true;
        return updated;
      })
    }
    placeholder="blur"
    blurDataURL={`/images${photo}`}
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
