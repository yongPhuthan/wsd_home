// src/app/_components/sections/home/HeroSection.tsx
// import { Apple, Smartphone } from 'lucide-react'; // Not needed if using image badges
import Image from 'next/image'; // Import Next.js Image component

export default function HeroSection() {
  const appStoreBadgeUrl = "/images/appstore.png";
  const googlePlayBadgeUrl = "/images/googleplay.png"; 
  const heroBannerUrl = "/images/home/HeroBanner.png"; // Placeholder for the hero image

  return (
    <section className="bg-[var(--color-background-default)] text-[var(--color-text-main)] md:bg-subtle-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center py-25 md:py-24 lg:py-20"> {/* Adjusted padding */}
          {/* Text Content Column (Left) */}
          <div className="md:w-1/2 lg:w-3/5 text-center md:text-left mb-12 md:mb-0 md:pr-8 lg:pr-16">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">ระบบเสนอราคาออนไลน์</span>
              <span className="block text-[var(--color-text-muted)] mt-2">สำหรับช่างและผู้รับเหมา</span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg sm:text-xl text-[var(--color-text-muted)]">
              เพิ่มโอกาสปิดการขายและยกระดับธุรกิจของคุณให้เป็นมืออาชีพในสายตาลูกค้า  WorkStandard ระบบเสนอราคาออนไลน์ที่ใช้งานง่าย สะดวก รวดเร็ว ดาวน์โหลดแอปพลิเคชันได้แล้ววันนี้
            </p>
            {/* App Store and Google Play Badges */}
            <div className="mt-8 md:mt-10 flex flex-col items-center md:items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="https://apps.apple.com/your-app-id" // Replace with your App Store link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform transition-transform hover:scale-105" // Added hover effect
              >
                <Image
                  src={appStoreBadgeUrl} // Use the variable
                  alt="Download on the App Store"
                  width={160} // Adjust width as needed (typical App Store badge width is around 120-180px)
                  height={53} // Adjust height (typical App Store badge height is around 40-60px)
                  // layout="intrinsic" // or "fixed" or "responsive" depending on your image and needs
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=your.app.package" // Replace with your Google Play link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform transition-transform hover:scale-105" // Added hover effect
              >
                <Image
                  src={googlePlayBadgeUrl} // Use the variable
                  alt="Get it on Google Play"
                  width={160} // Adjust width (Google Play badges are often wider)
                  height={53} // Adjust height
                  // layout="intrinsic"
                />
              </a>
            </div>
          </div>

          {/* Image Column (Right) */}
          <div className="md:w-1/2 lg:w-2/6 mt-10 md:mt-0 flex justify-center md:justify-end">
            <img
              src={heroBannerUrl}
              alt="WorkStandard App Screenshot Mockup"
              className="rounded-lg shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
