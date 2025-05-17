import _Image from 'next/image';
const Image = _Image.default || _Image;

export default function Contact() {
    return (
        <main className="text-center font-body min-h-screen px-6 py-20 bg-white text-gray-900">
            <div>
                <h1>Let's get in touch</h1>
                <p>Phone: (786) 774-7552</p>
                <p>Email: marypenalverop@gmail.com</p>
            </div>
            <div className="flex justify-center">
                <Image
                    src="/images/manwaiting.jpg"
                    width={500}
                    height={700}
                    className="py-12 object-cover"
                    alt="Contact"
                />
            </div>
        </main>
    );
}
