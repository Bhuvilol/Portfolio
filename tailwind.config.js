/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/ui/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        hacker: {
          bg: '#0a0a0f',
          surface: '#13131d',
          border: '#1e1e2e',
          text: '#f0f0f5',
          muted: '#8b95a5',
          green: '#00ff99',
          cyan: '#00d4ff',
          red: '#ff4444',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
