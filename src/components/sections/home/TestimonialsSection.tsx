// app/_components/sections/home/TestimonialsSection.tsx

// กำหนดข้อมูลสำหรับ Testimonials
const testimonialsData = [
    {
      quote: "แอปนี้ช่วยให้ผมจัดการงานเสนอราคาได้ง่ายขึ้นเยอะเลยครับ ลูกค้าก็ประทับใจความเป็นมืออาชีพของเรามากขึ้น",
      author: "ช่าง A, กรุงเทพฯ",
      // imageUrl: "https://placehold.co/100x100/C1C1C1/FFFFFF?text=A", // Optional image
    },
    {
      quote: "ชอบฟีเจอร์แจ้งเตือนเวลาลูกค้าเปิดดูใบเสนอราคามาก ทำให้ตามงานได้ถูกจังหวะ ปิดการขายได้เร็วขึ้นครับ",
      author: "ผู้รับเหมา B, เชียงใหม่",
      // imageUrl: "https://placehold.co/100x100/C1C1C1/FFFFFF?text=B",
    },
    {
      quote: "การมีโปรไฟล์ผลงานในแอปช่วยสร้างความน่าเชื่อถือได้ดีมาก ลูกค้าใหม่ๆ กล้าตัดสินใจจ้างงานเรามากขึ้น",
      author: "ทีมช่าง C, ภูเก็ต",
      // imageUrl: "https://placehold.co/100x100/C1C1C1/FFFFFF?text=C",
    },
  ];
  
  export default function TestimonialsSection() {
    return (
      <section className="py-16 bg-ws-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-main sm:text-4xl">
              เสียงจากผู้ใช้งานจริง
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              ฟังความคิดเห็นจากผู้ที่ใช้งาน WorkStandard และสัมผัสประสบการณ์ที่ดีขึ้นในการทำงาน
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((testimonial, index) => (
              <div key={index} className="bg-background-alt p-6 rounded-lg shadow-md">
                {/* Optional: Add image here if imageUrl is present */}
                {/* {testimonial.imageUrl && (
                  <img src={testimonial.imageUrl} alt={`รูปภาพของ ${testimonial.author}`} className="w-16 h-16 rounded-full mx-auto mb-4" />
                )} */}
                <p className="text-text-light italic">&quot;{testimonial.quote}&quot;</p>
                <p className="mt-4 font-bold text-text-main">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  