import _Image from 'next/image';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
const Image = _Image.default || _Image;
export default function Home() {
  const photos = [
  //----------------Maybes------------
    //'/portraits/isa/isa10.jpg',        // landscape, goes early
    //'/portraits/isa/isa11.jpg', //h
    //'/portraits/isa/isa23.jpg',
    //'/portraits/lasting_impressions/chassan2.jpg',  //h
    //'/portraits/lasting_impressions/chassan10.jpg', //h
    //'/portraits/isa/isa20.jpg',
    '/portraits/isa/isa13.jpg',      
    //'/portraits/isa/isa30.jpg',
    //'/portraits/isa/isa33.jpg',
    '/portraits/isa/isa21.jpg',
    '/portraits/isa/isa19.jpg',
    //'/portraits/isa/isa32.jpg',
    '/portraits/lasting_impressions/chassan16.jpg',  //h
    '/portraits/lasting_impressions/chassan20.jpg',  
    '/portraits/strike_rw24/tux.jpg', 
    '/portraits/isaO.jpg',   
    '/portraits/betweenlines2.jpg',         
    '/portraits/strike_rw24/netguy.jpg',
    '/portraits/knight1.jpg',
    '/portraits/tyriq.jpg',
    '/portraits/lasting_impressions/chassan7.jpg', 
    '/portraits/sink.jpg',
    '/portraits/osotc.jpg',    
    '/portraits/shannon-15.jpg', 
    '/portraits/jonah.jpg', 
    '/portraits/shannon-6.jpg', 
    '/portraits/strike_rw24/celine.jpg', 
    '/portraits/lastMillenium1.jpg', 
    '/portraits/isabeach2.jpg',
    '/portraits/isabeach-1.jpg',
   // '/portraits/isa/beach.jpg',
    '/portraits/cassidy.jpg',
    '/portraits/ariel.jpg',
    '/portraits/ariel2.jpg',
    '/portraits/knight2.jpg',
    '/portraits/flowers.jpg',
    '/portraits/isabeach.jpg',
    '/portraits/isabeach-2.jpg',
    '/portraits/osotc2.jpg',
    '/portraits/lastMillenium2.jpg'
    

  ];
  const [isOpen,setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(Array(photos.length).fill(false));

  
  return (
    <main className=" pt-32 min-h-screen px-6 py-10 bg-white text-gray-900">
      {/* <section className="grid grid-cols-2 md:grid-cols-3 gap-4 "> */}
        <section className="columns-3 md:columns-4 gap-12">
        {photos.map((photo, i) => (
      <Image
        key={i}
        src={`/images${photo}`}
        alt={`gallery-photo-${i}`}
        width={800}
        height={1200}
        className={`mb-12 w-full cursor-pointer h-auto opacity-0 transition-opacity duration-300 ease-in-out ${loaded[i] ? 'opacity-100' : ''}`}
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