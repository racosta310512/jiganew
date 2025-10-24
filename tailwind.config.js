/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  safelist: [
    'bg-jiga-blue',
    'bg-jiga-green',
    'bg-security-orange',
    'text-jiga-blue', 
    'text-jiga-green',
    'text-security-orange',
    'border-jiga-blue',
    'border-jiga-green',
    'border-security-orange',
    'bg-neon-purple',
    'bg-electric-yellow',
  ],

  theme: {
    extend: {
      colors: {
        'jiga-blue': '#0066CC',
        'jiga-green': '#00CC88',
        'tech-gray': '#2D3748',
        'security-orange': '#FF6B00',
        'electric-yellow': '#FFD700',
        'neon-purple': '#8A2BE2',
        'dark-space': '#0A0A0F',
        'carbon-gray': '#1A1A2E',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite', // ✅ Este nombre está bien
        'typewriter': 'typewriter 2s steps(11) forwards',
        'bounce-slow': 'bounce 3s infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        typewriter: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { transform: 'translateY(100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}