// app/_components/layout/Header.tsx
import Navbar from './Navbar'; // Import Navbar component

export default function Header() {
  return (
    // Header ทำหน้าที่เป็น semantic wrapper
    // Styling หลักๆ เช่น sticky, background color จะถูกจัดการโดย Navbar
    <header className="w-full">
      <Navbar />
      {/* หากในอนาคตมี Announcement Bar หรือ elements อื่นๆ ที่ต้องการให้อยู่ใน Header 
        แต่แยกจาก Navbar ก็สามารถเพิ่มเข้ามาในส่วนนี้ได้
        ตัวอย่าง:
        <div className="bg-interactive-accent text-text-primary-on-dark text-center py-2 text-sm">
          Special Announcement!
        </div>
      */}
    </header>
  );
}
