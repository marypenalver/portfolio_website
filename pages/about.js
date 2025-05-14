import _Image from 'next/image';
const Image = _Image.default || _Image;

export default function About() {
    return (
        <section className="flex items-center px-8 gap-12">
            <Image
                src="/images/aboutme.jpg"
                width={500}
                height={700}
                className="py-12 object-cover"
                alt="About me"
            />
            <div>
                <h1 className=" font-heading text-3xl font-bold mb-4">About Me</h1>
                <p className="text-lg max-w-md font-body">
                    I'm a photographer and computer science student passionate about combining visual art and technology.
                    I've been shooting both film and digital for over six years and love telling stories through images.
                </p>
            </div>
        </section>
    );
}

