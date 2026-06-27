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
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 md:block">
       <div className="absolute inset-0 hidden md:flex pointer-events-none">
        <p className=" absolute top-[46%] left-[6%] text-[400%] font-now text-black tracking-widest text-center leading-none">
        CONTACT
        </p>
      </div>

      <div className="relative md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10">
        <Image
          src="/images/contact/me.jpg"
          width={800}
          height={1200}
          className={`w-72 md:w-80 h-auto opacity-0 transition duration-500 ease-in-out  ${loaded ? 'opacity-100' : ''}`}
          alt="Contact image"
          onLoad={() =>
            setLoaded(true)} 
        />
      </div>
        <form onSubmit={handleSubmit} className="hidden md:flex absolute top-[45%] left-2/3  text-xs flex flex-col gap-2 w-[400px] ">
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
            className="font-dropline bg-transparent p-1 text-center text-black placeholder-black focus:outline-none"
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
    <p className="hidden md:block absolute text-center bottom-10 font-dropline text-black text-xs mt-10">
            INSTAGRAM: MARIAPENALVERR
    </p>
        <p className="hidden md:block absolute right-[42%] bottom-10 font-dropline text-xs mt-10">EMAIL: MARIAAPENALVER@GMAIL.COM</p>
        <p className="hidden md:block absolute right-[10%] bottom-10 font-dropline text-xs mt-10">PRODUCTION. PHOTOGRAPHY. WEB DEVELOPMENT</p>
      {/* mobile only */}
      <div className="mt-6 flex flex-col gap-2 text-center text-xs font-dropline md:hidden">
        <p>INSTAGRAM: MARIAPENALVERR</p>
        <p>EMAIL: MARIAAPENALVER@GMAIL.COM</p> <br></br><br></br><br></br>
        <p>PRODUCTION. PHOTOGRAPHY. WEB DEVELOPMENT</p>
</div>
    </main>
  );
}
