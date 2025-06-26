

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-bakbak)', 'sans-serif'],
        body: ['var(--font-lato)', 'sans-serif'],
        dm: ['var(--font-dm)', 'serif'],
        cinzel: ['var(--font-cinzel)', 'serif'],
        charm: ['var(--font-charm)', 'cursive'],
        now: ['Now', 'sans-serif'],
        atkinson: ['var(--font-atkinson)', 'sans-serif'],
        dropline: ['dropline','sans-serif'],
        logam: ['logam','sans-serif'],
        ougkeh_round: ['ougkeh_round','sans-serif'],
        ougkeh: ['ougkeh','sans-serif'],
        stardos: ['stardos','sans-serif'],
        stardos_bold: ['stardos_bold','sans-serif'],
        stardos: ['stardos','sans-serif'],
      },
    },
  },
  plugins: [],
};
