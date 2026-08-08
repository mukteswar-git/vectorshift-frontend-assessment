/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        foreground: '#0F172A',

        surface: '#FFFFFF',
        'surface-muted': '#F1F5F9',

        border: '#E2E8F0',
        'border-strong': '#CBD5E1',

        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          foreground: '#FFFFFF',
        },

        secondary: {
          DEFAULT: '#EEF2FF',
          foreground: '#3730A3',
        },

        muted: {
          DEFAULT: '#F1F5F9',
          foreground: '#64748B',
        },

        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },

        node: {
          input: '#2563EB',
          output: '#7C3AED',
          llm: '#8B5CF6',
          text: '#0F766E',
          default: '#475569',
        },
      },

      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },

      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },

      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },

      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.05)',
        node: '0 2px 8px rgba(15, 23, 42, 0.08)',
        'node-hover': '0 6px 18px rgba(15, 23, 42, 0.12)',
      },
    },
  },

  plugins: [],
};