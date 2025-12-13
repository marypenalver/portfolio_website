import _Image from 'next/image';
import Link from 'next/link';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
const Image = _Image.default || _Image;
import images from "../../data/production/michaeljfox.json";

export async function getStaticProps(){
  return {props:{images}};
}
export default function MichaelJFox({images}) {
  
  const [isOpen,setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  
  return (
    <main className=" pt-32 min-h-screen px-6 py-10 text-gray-900">
      <Link href="/production" className = "font-dropline block px-10 pb-8">
        BACK
      </Link>
      <section className=" grid grid-cols-1 justify-items-center">
        {images.map((src, i) => (
          <div 
          key={src} 
          className="w-[40%] mx-auto"
          >
      <Image
        src={src}
        alt={`gallery-photo-${i}`}
        width={800}
        height={1200}
        className={`mb-20 cursor-pointer h-auto opacity-0 transition-opacity duration-300 ease-in-out ${loaded[i] ? 'opacity-100' : ''}`}
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
      <p className="text-center text-xs font-mono tracking-widest uppercase whitespace-pre-wrap">
<u>Photographer:</u> Mark Seliger<br></br>
<u>Executive Producer:</u> Ruth Levy <br></br>
<u>Producer:</u> Madi Overstreet<br></br> <br></br>
<u>Production Assistant:</u> Maria Penalver<br></br> <br></br>
<u>Digi Tech:</u> Will Foerster<br></br>
<u>Photo Assistants:</u> Reggie Desilus, Jonas Søndergaard<br></br>
<u>Magazine:</u> People Magazine <br></br>
<u>Subject:</u> Michael J. Fox<br></br>
<u>Wardrobe Stylist:</u> Chloe Harstein<br></br>
<u>Groomer:</u> Lori Penske<br></br>
<u>Post-Production:</u> Rachel Crowe
</p>
      <Lightbox
        open={isOpen}
        index={index}
        close={() => setIsOpen(false)}
        slides={images.map(p => ({ src: p }))}
        styles={{
          container: {
            backgroundColor:'#FAF5ED' 
          }
        }}
      />
    </main>

  );
}