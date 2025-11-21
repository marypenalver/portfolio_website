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
    <main className="  flex min-h-screen font-body text-black justify-center items-center ">
      <Image
        src= "/images/contact/me.jpg"
        width={800}
        height = {1200}
        className="w-80 h-auto ml-60"
        />
      {/* Left side: Contact info & form */}
        <span class="p-7 border border-[rgb(65,53,6)] bg-[rgb(65,53,6)] inline-block">
        {/* Centered CONTACT title */}
        <p className=" text-xl mb-7 font-heading bg-transparent p-1 text-center text-black placeholder-black focus:outline-none"> get in touch </p> 

        {/* Form */}
        <form onSubmit={handleSubmit} className=" text-xs flex flex-col gap-2 w-[400px] ">
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
        </span>
        {/* Additional Info */}
        <div class="w-[400px] left-10 top-20">
    <p className="absolute left-10 top-10 font-dropline text-white text-xs mt-10">
        <span class="p-4 border border-[rgb(65,53,6)] bg-[rgb(65,53,6)] inline-block">
            INSTAGRAM: MARIAPENALVERR
        </span>
    </p>
        <p className="absolute left-20 bottom-10 font-dropline text-xs mt-2">EMAIL: CONTACT.MARIAPENALVER@GMAIL.COM</p>
        <p className="absolute right-20 bottom-10 font-dropline text-xs mt-2">WEBSITE DEVELOPED BY ME USING NEXT.JS & TAILWIND</p>
        </div>

    </main>
  );
}
