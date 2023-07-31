import { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */

const tailwindConfig: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default tailwindConfig;
