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
            src: "/images/production/adweek.jpg",
            alt: "Jimmy Fallon x Adweek",
            href: "/productionGalleries/adweek",
            caption: "Jimmy Fallon x Adweek",
            // Increased column count for a tighter horizontal layout
            gridClasses: "col-span-1 sm:col-span-2",
            offsetClasses:"mt-[16%] -ml-6",
            maxWidth: "max-w-xs", // Set a max width for this specific image
            imageWidth: 800, 
            imageHeight: 1200
        },
        {
            src: "/images/production/nicholashoult.jpg",
            alt: "Nicholas Hoult x Jaeger Le Coultre",
            href: "/productionGalleries/nicholashoult",
            caption: "Nicholas Hoult x Jaeger Le Coultre",
            gridClasses: "col-span-4",
            offsetClasses:"mt-0 ml-[30%]",
            maxWidth: "max-w-xs", // Define a very small max width
            imageWidth: 600,
            imageHeight: 900
        },
        {
            src: "/images/production/chesscast.jpg",
            alt: "Chess Cast x Vanity Fair",
            href: "/production/chesscast",
            caption: '"Chess" Cast x Vanity Fair', 
            gridClasses: "col-span-3",
            offsetClasses:"mt-[30%]",
            maxWidth: "max-w-[300px]", // Medium small square
            imageWidth: 500,
            imageHeight: 500
        },
        {
            src: "/images/production/michaeljfox.jpg",
            alt: "Michael J Fox x People Magazine",
            href: "/production/michaeljfox",
            caption: "Michael J. Fox x People Magazine",
            gridClasses: "col-span-2 sm:col-span-3", // Largest item
            maxWidth: "max-w-md", // Set a max width for this specific image
            imageWidth: 1000,
            imageHeight: 1500
        },
    ];

    const [loaded, setLoaded] = useState(Array(images.length).fill(false));
    const handleLoad = (index) => {
        const updated = [...loaded];
        updated[index] = true;
        setLoaded(updated);
      };

    return (
        // Added max-w-7xl to constrain the content and center it
        <main className="pt-32 min-h-screen px-6 py-10 text-gray-900 mx-auto max-w-7xl">
            {/* Using a tight grid (grid-cols-6) and auto-flow-dense helps create the loose packing */}
            <section className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-12 gap-x-16 gap-y-16 auto-rows-min">
                {images.map((image, i) => (
                    // Center the content within the grid cell
                    <div
                        key={i}
                        className={`${image.gridClasses} ${image.offsetClasses} flex flex-col items-start justify-start cursor-pointer`}
                    >
                        <Link 
                            href={image.href} 
                            // ❗ Key Change 1: Set a max-width on the link/wrapper
                            // This ensures the image respects this maximum size
                            className={`block w-full ${image.maxWidth} overflow-hidden group`}
                        >
                            <div className="w-full">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.imageWidth}
                                    height={image.imageHeight}
                                    // ❗ Key Change 2: Removed h-full and object-cover to prevent cropping
                                    className={`w-full transition-transform duration-500 ease-in-out group-hover:scale-[1.03] 
                                        opacity-0 ${loaded[i] ? 'opacity-100' : ''}`}
                                    onLoad={() => handleLoad(i)}
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