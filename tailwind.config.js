const path = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    path.join(__dirname, './src/**/*.{js,jsx,ts,tsx}'),
    path.join(__dirname, './preview/**/*.{js,jsx,ts,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--ui-primary)',
          hover: 'var(--ui-primary-hover)',
          active: 'var(--ui-primary-active)',
          muted: 'var(--ui-primary-muted)',
          ring: 'var(--ui-primary-ring)',
        },
        surface: {
          DEFAULT: 'var(--ui-surface)',
          subtle: 'var(--ui-surface-subtle)',
          muted: 'var(--ui-surface-muted)',
        },
        fg: {
          DEFAULT: 'var(--ui-fg)',
          muted: 'var(--ui-fg-muted)',
          subtle: 'var(--ui-fg-subtle)',
        },
        border: {
          DEFAULT: 'var(--ui-border)',
          strong: 'var(--ui-border-strong)',
        },
        destructive: {
          DEFAULT: '#EF4444',
          hover: '#DC2626',
          muted: 'rgba(239, 68, 68, 0.12)',
        },
        success: {
          DEFAULT: '#10B981',
          muted: 'rgba(16, 185, 129, 0.12)',
        },
        warning: {
          DEFAULT: '#F59E0B',
          muted: 'rgba(245, 158, 11, 0.12)',
        },
        info: {
          DEFAULT: '#6366F1',
          muted: 'rgba(99, 102, 241, 0.12)',
        },
      },
      borderRadius: {
        'ui': 'var(--ui-radius)',
        'ui-lg': 'var(--ui-radius-lg)',
        'ui-xl': 'var(--ui-radius-xl)',
      },
      borderWidth: {
        'ui': 'var(--ui-border-width)',
      },
      boxShadow: {
        'ui': '0 1px 2px rgba(15, 23, 42, 0.04)',
        'ui-md': '0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -2px rgba(15, 23, 42, 0.04)',
        'ui-lg': '0 12px 28px -4px rgba(15, 23, 42, 0.12), 0 4px 12px -2px rgba(15, 23, 42, 0.06)',
        'ui-glow': '0 0 0 1px rgba(99, 102, 241, 0.08), 0 4px 14px -2px rgba(99, 102, 241, 0.2)',
      },
      fontFamily: {
        sans: ['-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif'],
      },
    },
  },
  plugins: [],
};
