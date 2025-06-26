// app/_components/sections/home/FaqSection.tsx
"use client";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";

 


// กำหนดข้อมูลสำหรับ FAQ
const faqData = [
  {
    question: "WorkStandard ใช้งานยากไหม?",
    answer: "WorkStandard ออกแบบมาให้ใช้งานง่าย แม้คุณจะไม่คุ้นเคยกับเทคโนโลยีก็สามารถเรียนรู้และเริ่มใช้งานได้ทันทีผ่านแอปพลิเคชันมือถือ",
  },
  {
    question: "มีค่าใช้จ่ายในการใช้งานหรือไม่?",
    answer: "เริ่มต้นใช้งาน WorkStandard ได้ฟรีโดยไม่มีค่าใช้จ่าย ไม่ผูกบัตรเครดิต เข้าใช้งานฟีเจอร์ทั้งหมดได้เต็มที่โดยแผนฟรีเสนอราคาได้เดือนละ5ครั้งหลังจากนั้นสามารถเลือกสมัครแพ็กเกจรายเพื่อเสนอราคาได้ไม่จำกัด",
  },
  {
    question: "ข้อมูลของกิจการจะปลอดภัยหรือไม่?",
    answer: "เราให้ความสำคัญกับความปลอดภัยของข้อมูลลูกค้าเป็นอย่างยิ่ง ข้อมูลของคุณจะถูกเข้ารหัสและจัดเก็บอย่างปลอดภัยบนคลาวด์เซิร์ฟเวอร์ที่ได้มาตรฐาน",
  },
  {
    question: "สามารถใช้งานบนคอมพิวเตอร์ได้หรือไม่?",
    answer: "ปัจจุบัน WorkStandard เป็นแอปพลิเคชันสำหรับมือถือ (iOS และ Android) เท่านั้น โดยเรามีแผนที่จะพัฒนาเวอร์ชันสำหรับเดสก์ท็อปในอนาคต",
  }
];

function FaqItem({ item, isOpen, onClick }: { item: { question: string; answer: string }, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out">
      <h2> {/* Changed to h2 for semantic heading within the item */}
        <button
          onClick={onClick}
          className="flex justify-between items-center w-full p-5 sm:p-6 text-left focus:outline-none focus-visible:ring focus-visible:ring-[var(--color-navbar-hover-bg)] focus-visible:ring-opacity-75 group"
          aria-expanded={isOpen}
        >
          <span className="text-base sm:text-lg font-medium text-[var(--color-text-main)]  transition-colors">
            {item.question}
          </span>
          {isOpen ? (
            <MinusCircle className="h-6 w-6 text-[var(--color-navbar-background)] transition-transform duration-300" />
          ) : (
            <PlusCircle className="h-6 w-6 text-[var(--color-text-muted)]  transition-transform duration-300 group-hover:rotate-180" />
          )}
        </button>
      </h2>
      {/* Conditional rendering with smooth transition (Tailwind doesn't do height transition easily, so it's show/hide) */}
      {/* For smooth height transition, you might need a library or custom CSS */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 sm:p-6 pt-0 text-[var(--color-text-muted)] text-sm sm:text-base leading-relaxed">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}


export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    // Section with creamy background and subtle grid on desktop
    <section id="faq" className="bg-[var(--color-background-alt-section)] md:bg-subtle-grid py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-main)]">
            คำถามที่พบบ่อย
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
            ค้นหาคำตอบสำหรับข้อสงสัยของคุณเกี่ยวกับ WorkStandard ได้ที่นี่
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}