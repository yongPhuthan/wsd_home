// app/page.tsx (Updated to use new section components)

import HeroSection from '../components/sections/home/HeroSection';
import KeyFeaturesSection from '../components/sections/home/KeyFeaturesSection';
import FaqSection from '../components/sections/home/FaqSection';
import PricingSection from '../components/sections/home/PricingSection';
import WhyWorkStandardSection from '../components/sections/home/WhyWorkStandardSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <KeyFeaturesSection />
        <WhyWorkStandardSection />
      {/* <PricingSection /> */}
      {/* <TestimonialsSection /> */}
      <FaqSection />
    </>
  );
}
