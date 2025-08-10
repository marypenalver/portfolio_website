import Head from "next/head";
import _Image from "next/image";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import Link from "next/link";
const Image = _Image.default || _Image;

export default function Home() {
  const photos = [
    "/portraits/isabeach-11.jpg",
    "/portraits/isabeach-9.jpg",
    "/portraits/isabeach-8.jpg",
    "/portraits/isabeach-14.jpg",
    "/portraits/isabeach-12.jpg",
    "/portraits/isabeach-13.jpg",
    "/portraits/isabeach-10.jpg",
    "/portraits/isabeach-15.jpg",
  ];

  const [loaded, setLoaded] = useState(Array(photos.length).fill(false));

  // layout constants (match Tailwind gap-6 = 24px)
  const N = photos.length;
  const GAP = 24; // px

  return (
    <>
      {/* Stop iOS from “zooming” your layout */}
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </Head>

      <main
        style={{ backgroundColor: "#F5F5F5" }}
        className="relative min-h-screen px-6 py-10 text-gray-900 flex items-center justify-center overflow-hidden"
      >
        {/* UI text */}
        <div className="absolute top-60 w-full text-center">
          <Link href="/portrait" className="inline-block">
            <button className="font-dropline bg-transparent p-1 rounded hover:bg-[#F5F5F5] transition">
              PORTFOLIO
            </button>
          </Link>
        </div>

        <div className="absolute left-5 sm:left-20 top-20 text-left">
          <p className="font-dropline p-1">MARIA PENALVER</p>
        </div>

        <div className="absolute right-5 sm:right-20 bottom-5 text-right">
          <p className="font-dropline p-1">EST. 2025</p>
        </div>

        <div className="absolute right-5 sm:right-20 top-5 text-right">
          <p className="font-dropline p-1">(PORTRAITURE) & (FINE ARTS)</p>
        </div>

        {/* Film-strip row: fits ALL images on one line, always */}
        <div
          className="flex items-center justify-center gap-6"
          style={{
            // Row width clamps to viewport on mobile, capped on desktop
            width: "min(92vw, 1200px)",
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                // Each item = (rowWidth - totalGaps) / N
                flex: `0 0 calc((100% - ${(N - 1) * GAP}px) / ${N})`,
              }}
            >
              <Image
                src={`/images${photo}`}
                alt={`gallery-photo-${i}`}
                width={800}
                height={1200}
                sizes={`${Math.ceil(92 / N)}vw`} // helps Next pick the right src
                className={`w-full h-auto object-contain cursor-pointer opacity-0 transition-opacity duration-300 ease-in-out ${
                  loaded[i] ? "opacity-100" : ""
                }`}
                onLoad={() =>
                  setLoaded((prev) => {
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
    </>
  );
}
