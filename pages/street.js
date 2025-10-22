import _Image from 'next/image';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
const Image = _Image.default || _Image;
import images from "../data/street.json";

export async function getStaticProps(){
  return {props:{images}};
}
export default function Street({images}) {
  
  const [isOpen,setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  
  return (
    <main className=" pt-32 min-h-screen px-6 py-10 bg-#BC0032 text-gray-900">
      {/* <section className="grid grid-cols-2 md:grid-cols-3 gap-4 "> */}
        <section className="columns-3 md:columns-4 gap-40">
        {images.map((src, i) => (
          <div key={src} >
      <Image
        src={src}
        alt={`gallery-photo-${i}`}
        width={800}
        height={1200}
        className={`mb-20 w-full cursor-pointer h-auto opacity-0 transition-opacity duration-300 ease-in-out ${loaded[i] ? 'opacity-100' : ''}`}
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
      />
      </div>
      ))}
      </section>

      <Lightbox
        open={isOpen}
        index={index}
        close={() => setIsOpen(false)}
        slides={images.map(p => ({ src: p }))}
      />
    </main>

  );
}