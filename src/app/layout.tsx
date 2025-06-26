// src/app/layout.tsx
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'; // For body font
import localFont from 'next/font/local';   // For local heading font
import './globals.css'; // Ensure globals.css is imported
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';


// 1. Load Poppins for the body text
const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '700'], // Regular 400, Bold 700
  display: 'swap',
  variable: '--font-poppins', // This will create a CSS variable '--font-poppins'
});

// 2. Load your local SukhumvitSet font for headings
//    Adjust the 'src' path to where your font file is located relative to this layout.tsx file.
//    If layout.tsx is in 'src/app/', and fonts are in 'src/assets/fonts/', path would be '../assets/fonts/...'
//    If fonts are in 'public/fonts/', the path might need to be relative or absolute depending on setup.
//    For simplicity, assuming fonts are in a folder at the same level as 'app' or within 'src'.
//    Let's assume you created a 'fonts' folder inside 'src': src/fonts/SukhumvitSet-Bold.woff2
const sukhumvitSetHeading = localFont({
  src: [
    {
      path: '../fonts/SukhumvitSet-Bold.ttf', // **ADJUST THIS PATH** to your font file
                                               // Example: If fonts are in public/fonts, this might be '../../public/fonts/SukhumvitSet-Bold.woff2'
                                               // Or if fonts are in src/assets/fonts: '../assets/fonts/SukhumvitSet-Bold.woff2'
      weight: '700', // Or 'bold'
    },
      {
      path: '../fonts/SukhumvitSet-Medium.ttf', // **ADJUST THIS PATH** to your Medium font file
      weight: '500', // '500' typically corresponds to Medium weight
      style: 'normal',
    },
    // If you have other weights/styles for SukhumvitSet, add them here:
    // {
    //   path: '../fonts/SukhumvitSet-Regular.woff2', // **ADJUST PATH**
    //   weight: '400',
    //   style: 'normal',
    // },
  ],
  display: 'swap', // Recommended for font loading performance
 variable: '--font-sukhumvit-set', // This will create a CSS variable '--font-sukhumvit-set'
});

export const metadata: Metadata = {
  title: 'WorkStandard - Professional Invoicing & Payments',
  description: 'Modern invoicing and payment solutions for professionals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply the CSS variables from next/font to the html tag
    // This makes them available globally in your CSS.
    <html lang="th" className={`${poppins.variable} ${sukhumvitSetHeading.variable}`}>
      <body className="antialiased">
        {/*
          The font-family for body and headings will now be picked up
          from globals.css where they reference these CSS variables:
          --font-family-sans: var(--font-poppins), ...;
          --font-family-heading: var(--font-sukhumvit-set), ...;
        */}
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
