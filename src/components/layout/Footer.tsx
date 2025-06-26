// src/app/_components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

// const footerSections = [
//   {
//     title: 'Product',
//     links: [
//       { name: 'Features', href: '/features' },
//       { name: 'Invoices', href: '/invoices' },
//       // Add more relevant links
//     ],
//   },
//   {
//     title: 'Company',
//     links: [
//       { name: 'About Us', href: '/about' },
//       { name: 'Contact', href: '/contact' },
//     ],
//   },
//   {
//     title: 'Resources',
//     links: [
//       { name: 'Blog', href: '/blog' },
//       { name: 'Help Center', href: '/help' },
//     ],
//   },
//   {
//     title: 'Legal',
//     links: [
//       { name: 'Privacy Policy', href: '/privacy' },
//       { name: 'Terms of Service', href: '/terms' },
//     ],
//   },
// ];



export default function Footer() {
  // Replace with your actual logo path for the footer (should be visible on dark background)
  const footerLogoUrl = "/images/whitelogo.png"; // Example: A white or light-colored version of your logo

  return (
    // Use footer-specific CSS variables or Tailwind classes mapped to them
    <footer className="bg-[var(--color-footer-background)] border-t border-footer-border"> {/* Or bg-[var(--color-footer-background)] etc. */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Top section with logo and navigation links */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            {/* Footer Logo */}
            <Link href="/" className="inline-block">
              <Image
                src={footerLogoUrl} // Use a logo suitable for dark backgrounds
                alt="WorkStandard Footer Logo"
                width={120} // Adjust size as needed
                height={32} // Adjust size as needed
              />
            </Link>
          

          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
               
                {/* <ul role="list" className="mt-4 space-y-3">
                  {footerSections[0].links.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-[var(--color-footer-text)] hover:text-footer-hover-text">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul> */}
              </div>
              <div className="mt-12 md:mt-0">
                {/* <ul role="list" className="mt-4 space-y-3">
                  {footerSections[1].links.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-[var(--color-footer-text)] hover:text-footer-hover-text">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>

                {/* <ul role="list" className="mt-4 space-y-3">
                  {footerSections[2].links.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-[var(--color-footer-text)] hover:text-footer-hover-text">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul> */}
              </div>
              <div className="mt-12 md:mt-0">
   
                {/* <ul role="list" className="mt-4 space-y-3">
                  {footerSections[3].links.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-base text-[var(--color-footer-text)] hover:text-footer-hover-text">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom section for copyright */}
        <div className="mt-12 border-t border-footer-border pt-8">
          <p className="text-base text-[var(--color-footer-text)] xl:text-center">
            &copy; {new Date().getFullYear()} WorkStandard , Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
