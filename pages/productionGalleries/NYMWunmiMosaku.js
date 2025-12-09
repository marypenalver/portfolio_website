import _Image from 'next/image';
import Link from 'next/link';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';
const Image = _Image.default || _Image;
import images from "../../data/production/NYMWunmiMosaku.json";

export async function getStaticProps(){
  return {props:{images}};
}
export default function WunmiMosaku({images}) {
  
  const [isOpen,setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  
  return (
    <main className=" pt-32 min-h-screen px-6 py-10 text-gray-900">
      <Link href="/production" className = "font-dropline block px-10 pb-8">
        BACK
      </Link>
      <section className="flex justify-center">
        {images.map((src, i) => (
          <div key={src} >
      <Image
        src={src}
        alt={`gallery-photo-${i}`}
        width={800}
        height={1200}
        className={`w-170 mb-20 w-full cursor-pointer h-auto opacity-0 transition-opacity duration-300 ease-in-out ${loaded[i] ? 'opacity-100' : ''}`}
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
<u>Location:</u> Smashbox Studios, Los Angeles <br></br>
<u>Photographer:</u> Mark Seliger<br></br>
<u>Executive Producer:</u> Ruth Levy <br></br>
<u>Producers:</u> Madi Overstreet, Madison Shelpuk<br></br> <br></br>
<u>Production Assistant: (not on set) </u> Maria Penalver<br></br> <br></br>
<u>Digi Tech:</u> Milan<br></br>
<u>Photo Assistants:</u> Will Foerster, Embry Lopez<br></br>
<u>Magazine:</u> New York Magazine <br></br>
<u>Subject:</u> Adam Scott<br></br>
<u>Wardrobe Stylist:</u> Daniel Edley <br></br>
<u>Wardrobe Assistant:</u> Rachel Liner <br></br>
<u>Hair:</u> Hair by Kim Verbeck using Balmain Hair<br></br>
<u>Make-up:</u> Makeup by Elle Favorule<br></br>
<u>Prop Stylist:</u> Lux Wright<br></br>
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