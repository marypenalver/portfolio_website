// import Image from 'next/image';
import _Image from 'next/image';
const Image = _Image.default || _Image;

export default function Home() {
  const photos = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg'];

  return (
    <main className="min-h-screen px-6 py-10 bg-white text-gray-900">
      {/* Hero Section */}
      {/* <section className="text-center mb-12">
        <h1 className="font-heading text-3xl">Maria Penalver Photography</h1>
      </section> */}

      {/* Image Gallery */}
      <section className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((fileName, i) => (
            <div key={i} className="overflow-hidden rectangle-md shadow">
              <Image
                src={`/images/${fileName}`}
                alt={`Photo ${i + 1}`}
                width={400}
                height={500}
                className="w-auto h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}


