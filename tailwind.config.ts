import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF8F4',
        charcoal: '#1C1C1C',
        gold: '#C9A96E',
        'gold-light': '#E8D5B0',
        'gold-dark': '#A8854A',
        // Category colours
        services: '#8B6355',      // warm brown
        product: '#4A6B8A',       // steel blue
        boutique: '#6B8C6B',      // sage green
        admin: '#7A7068',         // warm grey
        diamonds: '#7B6B9A',      // soft purple
        deliveries: '#7A7355',    // khaki
        'client-experience': '#9A6B70', // dusty rose
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
