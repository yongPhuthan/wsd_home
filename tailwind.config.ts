// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  // Content paths are still crucial for Tailwind to know where to look for class usage.
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // For Tailwind v4, darkMode is often handled by CSS variables and @media.
  // The 'media' strategy here aligns with that.
  darkMode: 'media',
  theme: {
    // The theme object can be kept minimal or extend with things
    // not easily defined purely in CSS or for JS access.
    // For "CSS-first", we are defining colors as CSS variables in globals.css.
    // We *could* still map them here if we want to use semantic Tailwind classes
    // that resolve to these CSS variables, but let's try direct usage first.
    extend: {
      fontFamily: {
        // Make the CSS variable for font available to Tailwind's font utilities if needed.
        sans: ['var(--font-family-sans)', 'Arial', 'Helvetica', 'sans-serif'],
      },
      // If you want to create utility classes like 'bg-navbar' that point to CSS vars:
      // colors: {
      //   'navbar-background': 'var(--color-navbar-background)',
      //   'navbar-text': 'var(--color-navbar-text-primary)',
      // }
      // But the primary approach for v4 is to use the vars directly in arbitrary values,
      // or create helper classes in your CSS.
    },
  },
  plugins: [
    // Add any Tailwind plugins you need, e.g., require('@tailwindcss/forms')
  ],
};
export default config;
