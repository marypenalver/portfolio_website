import '../styles/globals.css';
import { Analytics } from "@vercel/analytics/next"
import { Atkinson_Hyperlegible, Bakbak_One, Cinzel, Lato, Charm, DM_Serif_Text } from 'next/font/google';
import Navbar from '../components/Navbar';
import Head from 'next/head';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-cinzel',
});
const backbak = Bakbak_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bakbak',
});
const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});
const dm = DM_Serif_Text({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm',
});
const charm = Charm({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-charm',
});
const atkinson = Atkinson_Hyperlegible({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-atkinson',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>

      {/* Apply font variables globally */}
      <div className={`${backbak.variable} ${atkinson.variable} ${cinzel.variable} ${lato.variable} ${dm.variable} ${charm.variable}`}>
        {/* Isolated wrapper for navbar transparency */}
        <div className="nav-wrapper">
          <Navbar />
        </div>

        {/* ✅ Fixed frame applied here */}
        <div className="w-[1440px] min-h-screen mx-auto overflow-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
