// src/app/_components/sections/home/HeroSection.tsx
import Image from 'next/image'; // Import Next.js Image component

export default function HeroSection() {
  // Ensure these images are in your /public folder
  const appStoreBadgeUrl = "/images/appstore.png";
  const googlePlayBadgeUrl = "/images/googleplay.png";
  const heroBannerUrl = "/images/home/HeroBanner.png";

  return (
    <section className="bg-[var(--color-background-default)] text-[var(--color-text-main)] md:bg-subtle-grid overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center py-20 sm:py-24">
          
          {/* Left Column: Text Content */}
          <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
            
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="block">ระบบเสนอราคา</span>
              <span className="block text-[var(--color-text-muted)] mt-2">สำหรับช่างและผู้รับเหมา</span>
            </h1>

            {/* Image for Mobile and Tablet (Visible on screens smaller than md) */}
            <div className="mt-8 mb-8 md:hidden">
              <img
                src={heroBannerUrl}
                alt="WorkStandard App on Mobile"
                className="rounded-lg shadow-xl max-w-xs sm:max-w-sm mx-auto" // Smaller size for mobile
              />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg sm:text-xl text-[var(--color-text-muted)]">
              เพิ่มโอกาสปิดการขายและยกระดับธุรกิจของคุณให้เป็นมืออาชีพในสายตาลูกค้า
            </p>
            
            {/* App Store and Google Play Badges */}
            <div className="mt-8 md:mt-10 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 md:justify-start">
              <a
                href="https://apps.apple.com/us/app/workstandard/id6736366137"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform transition-transform hover:scale-105"
              >
                <Image
                  src={appStoreBadgeUrl}
                  alt="Download on the App Store"
                  width={160}
                  height={53}
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.workstandard.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform transition-transform hover:scale-105"
              >
                <Image
                  src={googlePlayBadgeUrl}
                  alt="Get it on Google Play"
                  width={160}
                  height={53}
                />
              </a>
            </div>

          </div>

          {/* Right Column: Image for Desktop (Hidden on screens smaller than md) */}
          <div className="hidden md:flex md:w-1/2 lg:w-2/5 justify-end pl-8">
            <img
              src={heroBannerUrl}
              alt="WorkStandard App Screenshot Mockup"
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
