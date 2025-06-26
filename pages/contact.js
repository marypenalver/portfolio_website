import _Image from 'next/image';
const Image = _Image.default || _Image;

export default function Contact() {
  return (
    <main className="relative flex min-h-screen font-body text-black">
      {/* Left side: Contact info & form */}
      <div className="relative flex-1 bg-[#ffffff] text-black flex flex-col justify-center items-center ">
        {/* Centered CONTACT title */}
        <h1 className="flex justify-center items-center text-9xl font-now mb-12">CONTACT</h1>

        {/* Form */}
        <form className=" text-xs flex flex-col gap-2 w-[400px]">
          <input
            type="text"
            placeholder="[ YOUR NAME ]"
            className="font-dropline bg-transparent p-1 text-center text-black placeholder-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="[ YOUR EMAIL ]"
            className="font-dropline bg-transparent  p-1 text-center text-black placeholder-black focus:outline-none"
          />
          <textarea
            placeholder="[ YOUR MESSAGE ]"
            className="font-dropline bg-transparent p-1 text-center text-black placeholder-black focus:outline-none"
          />
          <button className="font-dropline bg-transparent  p-1 text-center text-black rounded hover:bg-black hover:text-white transition">
            SEND
          </button>
        </form>

        {/* Additional Info */}
        <p className="absolute left-10 top-10 font-dropline text-xs mt-10">INSTAGRAM: MARIAPENALVERR</p>
        <p className="absolute right-10 bottom-5 font-dropline text-xs mt-2">EMAIL: MARYPENALVEROP@GMAIL.COM</p>
      </div>

      {/* Right side: Background image */}
      <div className="relative flex-1 min-h-screen overflow-hidden">
        <Image
          src="/images/street/cheeks.JPG"
          fill
          alt="Background"
          className="object-cover object-[9%_50%]"
        />
      </div>
    </main>
  );
}
