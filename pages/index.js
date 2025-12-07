import Head from "next/head";
import _Image from "next/image";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import Link from "next/link";

const Image = _Image.default || _Image;
import images from "../data/home.json";

export async function getStaticProps(){
  return {props:{images}};
}
export default function Home({images}) {

  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(Array(images.length).fill(false));

  const N = images.length;
  const GAP = 24; // px
  const base = "/images"; // consistent prefix

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </Head>

      <main
        className=" bg-#FAF5ED relative min-h-screen px-6 py-10 text-gray-900 flex items-center justify-center overflow-hidden"
      >
        {/* Top text */}
        <div className="absolute bottom-32 w-full text-center">
        <Link 
            href="/portrait"
            className=" underline decoration-1 font-dropline bg-transparent rounded hover:bg-transparent transition inline-block"
          >
            PORTFOLIO 
          </ Link> 
        </div>

        <div className="absolute text-black mb-2 md:mb-0 px-6 py-6 z-50 absolute top-0 left-0">
        <p className="font-now lg:text-2xl sm:text-sm ">MARIA PENALVER  </p> 
        </div>

        <div className="absolute right-5 sm:right-20 bottom-5 text-right">
          <p className="font-dropline p-1">EST. 2025</p>
        </div>

        <div className="absolute right-5 sm:right-20 top-5 text-right">
          <p className="font-dropline p-1">(PORTRAITURE) & (FINE ARTS)</p>
        </div>

        {/* Film-strip row */}
        <div
          className="flex items-center justify-center gap-6"
          style={{ width: "min(92vw, 1200px)" }}
        >
          {images.map((src, i) => (
            <div
              key={src}
              className="flex-shrink-0"
              style={{
                flex: `0 0 calc((100% - ${(N - 1) * GAP}px) / ${N})`,
              }}
            >
              <Image
                src={src}
                alt={`gallery-photo-${i}`}
                width={800}
                height={1200}
                sizes={`${Math.ceil(92 / N)}vw`}
                className={`w-full h-auto object-contain cursor-pointer opacity-0 transition-opacity duration-300 ease-in-out ${
                  loaded[i] ? "opacity-100" : ""
                }`}
                onClick={() => {
                  setIndex(i);
                  setIsOpen(true);
                }}
                onLoad={() =>
                  setLoaded((prev) => {
                    const updated = [...prev];
                    updated[i] = true;
                    return updated;
                  })
                }
              />
            </div>
          ))}
        </div>

        <Lightbox
          open={isOpen}
          index={index}
          close={() => setIsOpen(false)}
          slides={images.map(p => ({ src: p}))}
          styles={{
            container: {
              backgroundColor:'#FAF5ED'
            }
          }}
        />
      </main>
    </>
  );
}
