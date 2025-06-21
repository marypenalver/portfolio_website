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
    '/portraits/sink1.jpg',
    '/portraits/osotc.jpg',    
    '/portraits/shannon-15.jpg', 
    '/portraits/betweenlines.jpg', 
    '/portraits/shannon-6.jpg', 
    '/portraits/strike_rw24/celine.jpg', 
    '/portraits/isabeach2.jpg', 
    '/portraits/lastMillenium1.jpg', 
    '/portraits/isa/isaBeach.jpg',
    '/portraits/isa/beach.jpg',
    '/portraits/cassidy.jpg',
    '/portraits/ariel.jpg',
    '/portraits/ariel2.jpg',
    '/portraits/knight2.jpg',
    '/portraits/flowers.jpg',
    '/portraits/isabeach.jpg',
    '/portraits/isabeach3.jpg',
    '/portraits/osotc2.jpg',
    '/portraits/lastMillenium2.jpg'
    

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
