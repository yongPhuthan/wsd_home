import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // เปิดใช้งาน Strict Mode ของ React เพื่อช่วยตรวจจับปัญหาที่อาจเกิดขึ้น
  swcMinify: true, // ใช้ SWC (Speedy Web Compiler) ของ Next.js เพื่อ minify โค้ด ทำให้ build เร็วขึ้น
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co', // อนุญาตให้ใช้รูปภาพจาก placehold.co สำหรับ mockups
      },
      // เพิ่ม domain อื่นๆ ที่จะใช้รูปภาพในอนาคตได้ที่นี่
    ]
  },
};

export default nextConfig;
