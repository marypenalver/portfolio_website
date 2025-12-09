import _Image from 'next/image';
import {useState} from 'react';

const Image = _Image.default || _Image;



export default function Contact() {
    // state variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loaded, setLoaded] = useState(false);
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
    <main className="relative flex min-h-screen justify-center items-center ">
       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p className="  text-[16rem] font-now text-black tracking-widest text-center leading-none">
        CONTACT
        </p>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          src="/images/contact/me.jpg"
          width={800}
          height={1200}
          className={`w-80 h-auto opacity-0 transition duration-500 ease-in-out  ${loaded ? 'opacity-100' : ''}`}
          alt="Contact image"
          onLoad={() =>
            setLoaded(true)} 
        />
      </div>

        {/* Form
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
        </form> */}
        {/* Additional Info */}
    <p className="absolute text-center bottom-10 font-dropline text-black text-xs mt-10">
            INSTAGRAM: MARIAPENALVERR
    </p>
        <p className="absolute left-20 bottom-10 font-dropline text-xs mt-2">EMAIL: CONTACT.MARIAPENALVER@GMAIL.COM</p>
        <p className="absolute right-20 bottom-10 font-dropline text-xs mt-2">WEBSITE DEVELOPED BY ME USING NEXT.JS & TAILWIND</p>
      
    </main>
  );
}
