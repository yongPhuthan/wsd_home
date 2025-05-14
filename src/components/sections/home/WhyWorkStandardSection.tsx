// src/app/_components/sections/home/WhyWorkStandardSection.tsx
import { Briefcase, TrendingUp,Target } from 'lucide-react'; // Import relevant icons

interface Benefit {
  icon: React.ElementType;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Briefcase,
    title: 'ยกระดับความเป็นมืออาชีพ',
    description: 'สร้างความน่าเชื่อถือด้วยเอกสารที่เป็นระบบ สวยงาม และถูกต้อง ตั้งแต่ใบเสนอราคาจนถึงใบแจ้งหนี้ ทำให้ลูกค้ามั่นใจในบริการของคุณ',
  },
  {
    icon: Target,
    title: 'เพิ่มความสามารถในการแข่งขัน', // เนื้อหาที่คุณอัปเดต
    description: 'หลีกเลี่ยงสงครามการตัดราคาและลดกำไร เพิ่มโอกาสในการปิดการขายด้วยการเสนอราคาที่เน้นคุณค่าและมาตรฐานการทำงาน', // เนื้อหาที่คุณอัปเดต
  },
  {
    icon: TrendingUp,
    title: 'สร้างการเติบโตอย่างยั่งยืน', // เนื้อหาที่คุณอัปเดต
    description: 'ให้คุณมีเวลามากขึ้นในการทำงานที่ดีที่สุดให้กับลูกค้า พัฒนาคุณภาพบริการของคุณอย่างต่อเนื่อง สร้างการเติบโตของกิจการอย่างมั่นคง', // เนื้อหาที่คุณอัปเดต
  },
];

export default function WhyWorkStandardSection() {
  return (
    // Section with creamy background and subtle grid on desktop
    <section className="bg-[var(--color-background-alt-section)] md:bg-subtle-grid py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-main)]">
           WorkStandard ช่วยให้ธุรกิจของคุณเติบโตได้อย่างไร
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            เปลี่ยนวิธีการทำงานของคุณด้วยระบบเสนอราคาออนไลน์ที่ใช้งานง่ายและมีประสิทธิภาพ 
            ช่วยให้คุณสร้างข้อเสนออย่างมืออาชีพในไม่กี่นาที
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="flex-shrink-0 mb-4">
                {/* Icon Styling: Changed to a contrasting color */}
                <benefit.icon className="h-12 w-12 text-[var(--color-text-main)]" /> {/* CHANGED: Using --color-text-main for icon color */}
                {/* Alternative: Use a specific accent color if defined, e.g., text-blue-600 or text-[var(--accent-primary)] */}
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold text-[var(--color-text-main)] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-base text-[var(--color-text-muted)] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
