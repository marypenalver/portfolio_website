import '../styles/globals.css';
import { Bakbak_One, Cinzel, Lato, Charm, DM_Serif_Text } from 'next/font/google';
import Navbar from '../components/Navbar';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-cinzel',
});
const backbak = Bakbak_One({
  subsets:['latin'],
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
})

const charm = Charm({
  subsets:['latin'],
  weight:['400'],
  variable:'--font-charm'
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${backbak.variable} ${cinzel.variable}`}>
      <Navbar/>
      <Component {...pageProps} />
    </main>
  );
}
