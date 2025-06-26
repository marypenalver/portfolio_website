import _Image from 'next/image';
const Image = _Image.default || _Image;

export default function About() {
    return (
        <main className="pt-20 min-h-screen px-6 py-10 bg-white text-gray-900">
            <section className="flex items-center px-12 gap-12">
                <Image
                    src="/images/aboutme.jpg"
                    width={500}
                    height={700}
                    className="py-12 object-cover"
                    alt="About me"
                />
                <div>
                    {/* <h1 className=" font-now text-3xl font-bold mb-4">ABOUT ME</h1> */}
                    <p className="font-body text-large max-w-md">
                        21 y/o photographer from Fort Lauderdale, FL. Passionate on combining my love for 
                        technical photography and visual story telling. I specialize in editorial portraiture, street photography, 
                        and graduation shoots. 
                    </p>
                </div>
            </section>
        </main>
    );
}

