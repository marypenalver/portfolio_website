import _Image from 'next/image';
import {useState} from 'react';

const Image = _Image.default || _Image;



export default function Contact() {
    // state variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();             //won't refresh the page

        const res = await fetch('api/contact',{
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({name, email, message}),
        });

        if(res.ok){
            alert('Message sent!');
            setName(' ');
            setEmail(' ');
            setMessage(' ');
        }
        else
            alert('Failed to send message.');
    }

  return (
    <main className="relative flex min-h-screen font-body text-black">
      {/* Left side: Contact info & form */}
      <div className="relative flex-1 bg-[#F5F5F5] text-black flex flex-col justify-center items-center ">
        {/* Centered CONTACT title */}
        <p className=" text-xs mb-7 font-dropline bg-transparent p-1 text-center text-black placeholder-black focus:outline-none"> get in touch </p> 

        {/* Form */}
        <form onSubmit={handleSubmit} className=" text-xs flex flex-col gap-2 w-[400px]">
          <input
            type="text"
            placeholder="[ YOUR NAME ]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="font-dropline bg-transparent p-1 text-center text-black placeholder-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="[ YOUR EMAIL ]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="font-dropline bg-transparent  p-1 text-center text-black placeholder-black focus:outline-none"
          />
          <textarea
            placeholder="[ YOUR MESSAGE ]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="font-dropline bg-transparent p-1 text-center text-black placeholder-black focus:outline-none"
          />
          <button type="submit" className="font-dropline bg-transparent  p-1 text-center text-black rounded hover:bg-#F5F5F5 hover:text-black transition">
            SEND
          </button>
        </form>

        {/* Additional Info */}
        <p className="absolute left-10 top-20 font-dropline text-xs mt-10">INSTAGRAM: MARIAPENALVERR</p>
        <p className="absolute right-10 bottom-7 font-dropline text-xs mt-2">EMAIL: CONTACT.MARIAPENALVER@GMAIL.COM</p>
      </div>

      {/* Right side: Background image */}
      <div className="relative flex-1 min-h-screen overflow-hidden">
        <Image
          src="/images/contact/39.jpg"
          fill
          alt="Background"
          className="object-cover object-[25%_50%]"
        />
      </div>
    </main>
  );
}
