import _Image from 'next/image';
import Link from 'next/link';
import 'yet-another-react-lightbox/styles.css';
import Lightbox from 'yet-another-react-lightbox';
import { useState } from 'react';

const Image = _Image.default || _Image;

export default function Production() {
    // Reverted image sizes to what they are on disk, Next.js handles optimization
    const images = [
        {
            src: "/images/production/NYMLorde/lorde.jpg",
            alt: "Lorde x New York Magazine",
            href: "/productionGalleries/NYMLorde",
            caption: "Lorde x New York Magazine",
            gridClasses: "col-span-2 sm:col-span-3", // Largest item
            maxWidth: "max-w-md", // Set a max width for this specific image
            imageWidth: 1000,
            imageHeight: 1500
        },
        {
            src: "/images/production/NYMLindsayLohan/lindsay.jpg",
            alt: "Lindsay Lohan x New York Magazine",
            href: "/productionGalleries/NYMLindsayLohan",
            caption: "Lindsay Lohan x New York Magazine",
            gridClasses: "col-span-2 sm:col-span-3", 
            maxWidth: "max-w-md", 
            imageWidth: 1000,
            imageHeight: 1500
        },
        {
            src: "/images/production/NYMParkerPosey/parker.jpg",
            alt: "Parker Posey x New York Magazine",
            href: "/productionGalleries/NYMParkerPosey",
            caption: "Parker Posey x New York Magazine",
            gridClasses: "col-span-2 sm:col-span-3", 
            maxWidth: "max-w-md", 
            imageWidth: 1000,
            imageHeight: 1500
        },
        {
            src: "/images/production/NYMAdam/adam.jpg",
            alt: "Adam Scott x New York Magazine",
            href: "/productionGalleries/NYMAdamScott",
            caption: "Adam Scott x New York Magazine",
            gridClasses: "col-span-2 sm:col-span-3", 
            maxWidth: "max-w-md", 
            imageWidth: 1000,
            imageHeight: 1500
        },
        {
            src: "/images/production/NYMLola/lola.jpg",
            alt: "Lola Tung x New York Magazine",
            href: "/productionGalleries/NYMLolaTung",
            caption: "Lola Tung x New York Magazine",
            gridClasses: "col-span-2 sm:col-span-3", 
            maxWidth: "max-w-md", 
            imageWidth: 1000,
            imageHeight: 1500
        },
        {
            src: "/images/production/NYMOwenCooper/owen.jpg",
            alt: "Owen Cooper x New York Magazine",
            href: "/productionGalleries/NYMOwenCooper",
            caption: "Owen Cooper x New York Magazine",
            gridClasses: "col-span-2 sm:col-span-3", 
            maxWidth: "max-w-md", 
            imageWidth: 1000,
            imageHeight: 1500
        },
        {
            src: "/images/production/NYMWunmi/wunmi.jpg",
            alt: "Wunmi Mosaku x New York Magazine",
            href: "/productionGalleries/NYMWunmiMosaku",
            caption: "Wunmi Mosaku x New York Magazine",
            gridClasses: "col-span-2 sm:col-span-3", 
            maxWidth: "max-w-md", 
            imageWidth: 1000,
            imageHeight: 1500
        },
        {
            src: "/images/production/NYMClaire/claire.jpg",
            alt: "Claire Danes x New York Magazine",
            href: "/productionGalleries/NYMClaireDanes",
            caption: "Claire Danes x New York Magazine",
            gridClasses: "col-span-2 sm:col-span-3", 
            maxWidth: "max-w-md", 
            imageWidth: 1000,
            imageHeight: 1500
        },
        
        {
            src: "/images/production/NYMRachel/rachel.jpg",
            alt: "Rachel Zegler x New York Magazine",
            href: "/productionGalleries/NYMRachelZegler",
            caption: "Rachel Zegler x New York Magazine",
            gridClasses: "col-span-2 sm:col-span-3", 
            maxWidth: "max-w-md",
            imageWidth: 1000,
            imageHeight: 1500
        },
        {
            src: "/images/production/adweek/adweek.jpg",
            alt: "Jimmy Fallon x Adweek",
            href: "/productionGalleries/adweek",
            caption: "Jimmy Fallon x Adweek",
            gridClasses: "col-span-2 sm:col-span-3",
            maxWidth: "max-w-md", 
            imageWidth: 1000, 
            imageHeight: 1500
        },
        {
            src: "/images/production/nicholashoult/nicholashoult.jpg",
            alt: "Nicholas Hoult x Jaeger Le Coultre",
            href: "/productionGalleries/nicholashoult",
            caption: "Nicholas Hoult x Jaeger Le Coultre",
            gridClasses: "col-span-2 sm:col-span-3",
            maxWidth: "max-w-md",
            imageWidth: 600,
            imageHeight: 900
        },
        {
            src: "/images/production/chesscast/chesscast.jpg",
            alt: "Chess Cast x Vanity Fair",
            href: "/productionGalleries/chesscast",
            caption: '"Chess" Cast x Vanity Fair', 
            gridClasses: "col-span-3",
            maxWidth: "max-w-md", 
            imageWidth: 500,
            imageHeight: 500
        },
        {
            src: "/images/production/michellewilliams/michellewilliams.jpg",
            alt: "Michelle Williams x 'Anna Christie'",
            href: "/productionGalleries/michellewilliams",
            caption: "Michelle Williams x 'Anna Christie'",
            gridClasses: "col-span-3",
            maxWidth: "max-w-md", 
            imageWidth: 500,
            imageHeight: 500
        },
        {
            src: "/images/production/michaeljfox/michaeljfox.jpg",
            alt: "Michael J Fox x People Magazine",
            href: "/productionGalleries/michaeljfox",
            caption: "Michael J. Fox x People Magazine",
            gridClasses: "col-span-2 sm:col-span-3", 
            maxWidth: "max-w-md", 
            imageWidth: 1000,
            imageHeight: 1500
        },
    ];

    const [loaded, setLoaded] = useState(Array(images.length).fill(false));
    return (
        // Added max-w-7xl to constrain the content and center it
        <main className="pt-32 min-h-screen px-6 py-10 text-gray-900 mx-auto max-w-7xl">
            {/* Using a tight grid (grid-cols-6) and auto-flow-dense helps create the loose packing */}
            <section className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-12 gap-x-16 gap-y-16 auto-rows-min">
                {images.map((image, i) => (
                    // Center the content within the grid cell
                    <div
                        key={i}
                        className={`${image.gridClasses} ${image.offsetClasses} flex flex-col items-start justify-start `}
                    >
                        <Link 
                            href={image.href} 
                            className={`block w-full ${image.maxWidth} overflow-hidden group`}
                        >
                            <div className="w-full relative">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.imageWidth}
                                    height={image.imageHeight}
                                    className={`w-full opacity-0 transition duration-500 ease-in-out group-hover:scale-[1.03] ${loaded[i] ? 'opacity-100' : ''}`}
                                    onLoad={() =>
                                        setLoaded(prev => {
                                          const updated = [...prev];
                                          updated[i] = true;
                                          return updated;
                                        })
                                      }
                                    // Sizing based on the max-width we set and the number of columns
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        </Link>
                        
                        {/* Caption Placement */}
                        <div className="mt-2 text-left text-xs font-mono tracking-widest uppercase">
                            [{image.caption}]
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}