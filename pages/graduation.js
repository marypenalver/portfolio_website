import _Image from 'next/image';
const Image = _Image.default || _Image;

export default function Graduation() {
  const photos = [
    '/grads/try-093.jpg',
    '/grads/try-084.jpg',
    '/grads/IMG_1444.jpg',
    '/grads/IMG_1535.jpg',
    '/grads/IMG_1722.jpg',
    '/grads/IMG_4634.jpg',
    '/grads/IMG_4860.jpg',
    '/grads/IMG_4812.jpg',
    '/grads/IMG_5002.jpg',
    '/grads/IMG_5036.jpg',
    '/grads/IMG_5335.jpg',
    '/grads/IMG_6888-2.jpg',
    '/grads/IMG_6950.jpg',
    '/grads/IMG_7112.jpg',
    '/grads/IMG_7150.jpg',
    '/grads/IMG_7911.jpg',
    '/grads/IMG_8533.jpg',
    '/grads/IMG_9647.jpg',
    '/grads/IMG_9769.jpg'
  ];

  return (
    <main className="min-h-screen px-6 py-10 bg-white text-gray-900">
      <section className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {photos.map((src, i) => (
          <img
            key={i}
            src={`/images/${src}`}
            alt={`gallery-photo-${i}`}
            className="w-full mb-4 object-cover"
          />
        ))}
      </section>
    </main>
  );
}
