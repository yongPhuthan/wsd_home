// src/app/_components/layout/Navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'คุณสมบัติ', href: '/#features' },
  { name: 'ราคา', href: '/#pricing' },
  { name: 'คำถามที่พบบ่อย', href: '/#faq' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // **สำคัญ:** โลโก้นี้ควรจะเป็นเวอร์ชันที่มองเห็นได้ชัดเจนบนพื้นหลังสีดำ
  // เช่น โลโก้สีขาว หรือโลโก้สีอ่อน
  const logoUrl = "/images/whitelogo.png"; // Example: path to a white/light version of your logo

  return (
    // Navbar: Fixed, using navbar variables which are now set to a dark theme
    <nav className="bg-[var(--color-navbar-background)] shadow-md fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={logoUrl}
                alt="WorkStandard Logo"
                width={150} // ปรับขนาดตามโลโก้ของคุณ
                height={40} // ปรับขนาดตามโลโก้ของคุณ
                priority
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  // These text/bg colors will now resolve to the dark theme variables
                className="font-heading font-bold text-[var(--color-navbar-text-secondary)] hover:bg-[var(--color-navbar-hover-bg)] hover:text-[var(--color-navbar-text-primary)] px-3 py-2 rounded-md text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
             
              <Link
                   href="https://wsd.onelink.me/CMH0/zjghaexy"
              target="_blank"
                className="bg-[var(--color-button-navbar-bg)] text-[var(--color-button-navbar-text)] hover:bg-[var(--color-button-navbar-hover-bg)] ml-3 px-4 py-2 rounded-md text-sm font-bold shadow transition-colors"
              >
               สมัครใช้งานฟรี
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
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
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[var(--color-navbar-background)] border-t border-[var(--color-navbar-border)]" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[var(--color-navbar-text-secondary)] hover:bg-[var(--color-navbar-hover-bg)] hover:text-[var(--color-navbar-text-primary)] block px-3 py-2 rounded-md text-base font-bold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://wsd.onelink.me/CMH0/zjghaexy"
              target="_blank"
              className="bg-[var(--color-button-navbar-bg)] text-[var(--color-button-navbar-text)] hover:bg-[var(--color-button-navbar-hover-bg)] block w-full text-center mt-2 px-4 py-2 rounded-md text-base font-bold shadow transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              สมัครใช้งานฟรี
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
