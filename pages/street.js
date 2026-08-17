import _Image from 'next/image';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState, useRef, useEffect, useCallback } from 'react';
const Image = _Image.default || _Image;
import images from "../data/street.json";

export async function getStaticProps(){
  return {props:{images}};
}

const ROW_HEIGHT = 10; // px
const ROW_GAP = 40; // must match gap-10 (40px)

export default function Street({images}) {

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));
  const [spans, setSpans] = useState(Array(images.length).fill(30));
  const sectionRef = useRef(null);

  const calcSpan = useCallback((imgEl, i) => {
    const { naturalWidth, naturalHeight } = imgEl;
    if (!naturalWidth || !naturalHeight) return;
    const el = imgEl.closest('.group');
    if (!el) return;
    const colWidth = el.offsetWidth;
    const scaledHeight = (naturalHeight / naturalWidth) * colWidth;
    const span = Math.ceil((scaledHeight + ROW_GAP) / (ROW_HEIGHT + ROW_GAP));

    setSpans(prev => {
      if (prev[i] === span) return prev;
      const updated = [...prev];
      updated[i] = span;
      return updated;
    });
    setLoaded(prev => {
      if (prev[i]) return prev;
      const updated = [...prev];
      updated[i] = true;
      return updated;
    });
  }, []);

  const recalcAll = useCallback(() => {
    if (!sectionRef.current) return;
    const imgs = sectionRef.current.querySelectorAll('img');
    imgs.forEach((img, i) => {
      if (img.complete) calcSpan(img, i);
    });
  }, [calcSpan]);

  // Catch images already loaded (cache) on mount
  useEffect(() => {
    recalcAll();
  }, [recalcAll]);

  // Recalculate on resize, since column width changes at md breakpoint etc.
  useEffect(() => {
    window.addEventListener('resize', recalcAll);
    return () => window.removeEventListener('resize', recalcAll);
  }, [recalcAll]);

  return (
    <main className="pt-32 min-h-screen px-6 py-10 text-gray-900">
      <section
        ref={sectionRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-10"
        style={{ gridAutoRows: `${ROW_HEIGHT}px` }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className="group overflow-hidden"
            style={{ gridRowEnd: `span ${spans[i]}` }}
          >
            <Image
              src={src}
              alt={`gallery-photo-${i}`}
              width={900}
              height={1200}
              className={`w-full h-auto object-cover cursor-pointer opacity-0 transition duration-500 ease-in-out group-hover:scale-[1.03] ${loaded[i] ? 'opacity-100' : ''}`}
              onClick={() => {
                setIndex(i);
                setIsOpen(true);
              }}
              onLoad={(e) => calcSpan(e.target, i)}
            />
          </div>
        ))}
      </section>

      <Lightbox
        open={isOpen}
        index={index}
        close={() => setIsOpen(false)}
        slides={images.map(p => ({ src: p }))}
        carousel={{ finite: false }}
        styles={{
          container: {
            backgroundColor:'#FAF5ED' 
          }
        }}
      />
    </main>
  );
}