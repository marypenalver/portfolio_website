import _Image from 'next/image';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
import Link from 'next/link';
const Image = _Image.default || _Image;

export default function Home() {
  const photos = [
    '/portraits/isabeach-11.jpg',  
    '/portraits/isabeach-9.jpg',  
    '/portraits/isabeach-8.jpg',  
    '/portraits/isabeach-14.jpg',       
    '/portraits/isabeach-12.jpg',  
    '/portraits/isabeach-13.jpg',  
    '/portraits/isabeach-10.jpg',
    '/portraits/isabeach-15.jpg',  
  ];

  const [loaded, setLoaded] = useState(Array(photos.length).fill(false));

  return (
<main
  style={{ backgroundColor: '#F5F5F5' }}
  className="relative min-h-screen px-6 py-10 text-gray-900 flex flex-col items-center justify-center"
>
  {/* Portfolio text placed absolutely */}
  <div className="absolute top-60 w-full text-center">
    <Link href="/portrait" className="inline-block">
      <button className="font-dropline bg-transparent p-1 rounded hover:bg-[#F5F5F5] transition">
        PORTFOLIO
      </button>
    </Link>
  </div>

  <div className="absolute left-20 top-20 text-left">
      <p className="font-dropline bg-transparent p-1 rounded hover:bg-[#F5F5F5] transition">
        MARIA PENALVER
      </p>
  </div>

  <div className="absolute right-20 bottom-5 w-full text-right">
      <p className="font-dropline bg-transparent p-1 rounded hover:bg-[#F5F5F5] transition">
        EST. 2025
      </p>
  </div>
  <div className="absolute right-20 top-5 w-full text-right">
      <p className="font-dropline bg-transparent p-1 rounded hover:bg-[#F5F5F5] transition">
        (PORTRAITURE) & (FINE ARTS)
      </p>
  </div>

  {/* Row of photos stays perfectly centered */}
  <div className="flex gap-6 justify-center items-center max-w-full">
    {photos.map((photo, i) => (
      <div key={i} className="flex-shrink-0">
        <Image
          src={`/images${photo}`}
          alt={`gallery-photo-${i}`}
          width={120}
          height={150}
          className={`h-auto cursor-pointer opacity-0 transition-opacity duration-300 ease-in-out ${
            loaded[i] ? 'opacity-100' : ''
          }`}
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
      </div>
    ))}
  </div>
</main>



  );
}
