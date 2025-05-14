// src/app/_components/layout/Navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image'; // Import Image component from Next.js

const navItems = [
  { name: 'Product', href: '/product' },
  { name: 'Invoices', href: '/invoices' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
];

export default function Navbar() {

  // Placeholder logo URL - replace with your actual logo path
  const logoUrl = "/images/blacklogo.png"; // Dark logo on white bg

  return (
    // Navbar: Fixed, white background, shadow
    <nav className="bg-[var(--color-navbar-background)]  fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Image Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logoUrl}
                
                alt="WorkStandard Logo"
                width={150} // Specify width
                height={40} // Specify height
                priority // Optional: if logo is critical for LCP
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[var(--color-navbar-text-secondary)] hover:bg-[var(--color-navbar-hover-bg)] hover:text-[var(--color-navbar-text-primary)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-[var(--color-navbar-text-secondary)] hover:bg-[var(--color-navbar-hover-bg)] hover:text-[var(--color-navbar-text-primary)] px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup" // Or app download link
                className="bg-[var(--color-button-navbar-bg)] text-[var(--color-button-navbar-text)] hover:bg-[var(--color-button-navbar-hover-bg)] ml-3 px-4 py-2 rounded-md text-sm font-medium shadow transition-colors"
              >
                Get App
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-navbar-text-secondary)] hover:text-[var(--color-navbar-text-primary)] hover:bg-[var(--color-navbar-hover-bg)] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--color-navbar-text-primary)]"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">เปิดเมนูหลัก</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6 text-[var(--color-navbar-text-primary)]" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6 text-[var(--color-navbar-text-primary)]" aria-hidden="true" />
              )}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-navbar-background)] border-t border-[var(--color-navbar-border)]" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--color-navbar-text-secondary)] hover:bg-[var(--color-navbar-hover-bg)] hover:text-[var(--color-navbar-text-primary)] block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="text-[var(--color-navbar-text-secondary)] hover:bg-[var(--color-navbar-hover-bg)] hover:text-[var(--color-navbar-text-primary)] block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-[var(--color-button-navbar-bg)] text-[var(--color-button-navbar-text)] hover:bg-[var(--color-button-navbar-hover-bg)] block w-full text-center mt-2 px-4 py-2 rounded-md text-base font-medium shadow transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get App
            </Link>
          </div>
        </div>
      )} */}
    </nav>
  );
}
