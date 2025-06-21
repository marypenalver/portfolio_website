import _Image from 'next/image';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
const Image = _Image.default || _Image;

export default function Street() {
  const photos = [
  //----------------Maybes------------
  '/street/manwaiting.jpg',
 // '/street/double_exposure/dbExposure5.jpg',
 
 '/street/chinatown.jpg',
  '/street/double_exposure/dbExposure8.jpg',
  '/street/double_exposure/dbExposure21.jpg',
  '/street/double_exposure/dbExposure29.jpg',
  '/street/violin.jpg',
  '/street/subway.jpg',
  '/street/jax.jpg',
  '/street/chinatown2.jpg',
  '/street/max.jpg',
  '/street/double_exposure/dbExposure30.jpg',
  '/street/firefighter.jpg',
  '/street/nyc-2.jpg',
  '/street/greece.jpg',
  '/street/sherrif.jpg',
  '/street/cascade.jpg',
  '/street/double_exposure/dbExposure9.jpg',
  '/street/skate.jpg',
  '/street/baby.jpg',
  '/street/subway-2.jpg',
  '/street/double_exposure/dbExposure31.jpg',
  '/street/sherrif2.jpg',
  '/street/sax.jpg',
  '/street/train.jpg',
  '/street/double_exposure/dbExposure33.jpg',
  '/street/skatemom.jpg',
  '/street/nyc.jpg',
  '/street/double_exposure/dbExposure35.jpg',
  '/street/double_exposure/dbExposure5.jpg',


  ];
  const [isOpen,setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  
  return (
    <main className="min-h-screen px-6 py-10 bg-white text-gray-900">
      {/* <section className="grid grid-cols-2 md:grid-cols-3 gap-4 "> */}
      <section className="columns-3 md:columns-4 gap-12">
        {photos.map((photo, i) => (
        <img
            
            key={i}
            src={`/images/${photo}`}
            alt={`gallery-photo-${i}`}
            className="mb-12 w-full cursor-pointer "
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
