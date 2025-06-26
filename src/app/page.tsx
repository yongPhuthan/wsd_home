// app/page.tsx (Updated to use new section components)

import HeroSection from '../components/sections/home/HeroSection';
import KeyFeaturesSection from '../components/sections/home/KeyFeaturesSection';
import FaqSection from '../components/sections/home/FaqSection';
import WhyWorkStandardSection from '../components/sections/home/WhyWorkStandardSection';
import PricingSection from '../components/sections/home/PricingSection';
import PainPointsSection from '../components/sections/home/PainPointsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <KeyFeaturesSection />
        <WhyWorkStandardSection />
      <PricingSection />
      {/* <TestimonialsSection /> */}
      <FaqSection />
    </>
  );
}
