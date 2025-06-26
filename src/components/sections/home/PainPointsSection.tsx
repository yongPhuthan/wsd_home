// src/app/_components/sections/home/PainPointsSection.tsx
import { XCircle } from 'lucide-react'; // Using XCircle for a clear "avoidance" message

interface PainPoint {
  icon: React.ElementType;
  title: string;
  description: string;
}

const painPoints: PainPoint[] = [
  {
    icon: XCircle,
    title: 'คู่แข่งตัดราคา',
    description: 'ต้องลดกำไรเพื่อสู้กับสงครามราคา ทำให้ได้งานที่ไม่คุ้มค่าเหนื่อยหรือขาดทุนหากมีปัญหาหน้างานแม้เพียงเล็กน้อย',
  },
  {
    icon: XCircle,
    title: 'ค่าโฆษณาแพงแต่ปิดการขายยาก',
    description: 'โฆษณาออนไลน์ในหมวดธุรกิจบริการมีค่าใช้จ่ายสูง แต่ปิดการขายได้ยากจากวิธีการเสนอราคาแบบเดิมๆ',
  },
  {
    icon: XCircle,
    title: 'เชี่ยวชาญในสิ่งที่ทำแต่ลูกค้าไม่เห็นคุณค่า',
    description: 'คุณมีความเชี่ยวชาญในงานที่ทำ แต่ไม่สามารถสื่อสารคุณค่าและมาตรฐานการทำงานให้ลูกค้าเห็นได้อย่างชัดเจน ทำให้ลูกค้าไม่เห็นความแตกต่างกับคู่แข่ง',
  },
];

export default function PainPointsSection() {
  return (
    // Section with creamy background and subtle grid on desktop
    <section className="bg-[var(--color-background-alt-section)] md:bg-subtle-grid py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-main)]">
            ปัญหาที่ธุรกิจรับเหมาและธุรกิจบริการต้องเผชิญ
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            ปัญหาเหล่านี้อาจทำให้คุณต้องลดกำไรและเสียโอกาสในการเติบโตของกิจการ
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div
              key={index}
              // Card with border, larger padding and subtle shadow
              className="bg-white rounded-xl border border-[var(--color-border-default)] p-8 text-center flex flex-col items-center"
            >
              <div className="flex-shrink-0 mb-5">
                {/* CHANGED:
                  - fill-[var(--color-text-main)] makes the circle part black.
                  - stroke-[var(--color-background-default)] makes the 'X' lines inside the circle white (same as card background).
                */}
                <point.icon className="h-12 w-12 fill-[var(--color-text-main)] stroke-[var(--color-background-default)]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-text-main)] mb-2">
                  {point.title}
                </h3>
                <p className="text-base text-[var(--color-text-muted)]">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
