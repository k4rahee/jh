/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  // Existing index.css already provides a full reset + base styles, so we
  // disable Tailwind's preflight to avoid clobbering the bespoke design.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      // Design tokens mapped to the CSS variables defined in index.css.
      colors: {
        paper: { DEFAULT: 'var(--paper)', 2: 'var(--paper-2)' },
        ink: { DEFAULT: 'var(--ink)', 2: 'var(--ink-2)' },
        mute: { DEFAULT: 'var(--mute)', 2: 'var(--mute-2)' },
        dark: { DEFAULT: 'var(--dark)', 2: 'var(--dark-2)' },
        cream: 'var(--cream)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: 'var(--sans)',
        kr: 'var(--kr)',
        mono: 'var(--mono)',
        serif: 'var(--serif)',
      },
    },
  },
  plugins: [],
}
