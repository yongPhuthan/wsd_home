# Homepage Structure

> Entry: `src/app/page.tsx`

## 1. Hero Section
- **Component**: `Hero.tsx`
- **Content**:
  - Headline (H1): “สร้างใบเสนอราคาคุณภาพ ด้วย Work Standard”
  - Subheadline: “ระบบออนไลน์สำหรับช่างและธุรกิจบริการ ที่เน้นงานมืออาชีพเหนือราคา”
  - CTA Button: “เริ่มใช้งานฟรี”
  - Background Image: `public/images/hero.png`

## 2. Key Features/Benefits
- **Component**: `Features.tsx`
- **Layout**: 3–4 cards in row, alternating image/text order.

### Feature Card Template:
- **Title**: e.g. “นำเสนอผลงานและมาตรฐานอย่างมืออาชีพ”
- **Description**: จาก brandbook content.
- **Mockup Image**: placeholder on right or left.

1. **นำเสนอผลงานและมาตรฐานอย่างมืออาชีพ**
   - Text Left / Image Right
   - Desc: “สร้างความแตกต่าง...มืออาชีพของคุณก่อนตัดสินใจ”

2. **สร้างใบเสนอราคาที่เน้นคุณค่า หลีกเลี่ยงการตัดราคา**
   - Image Left / Text Right
   - Desc: “ระบบของเราช่วยให้...ไม่ต้องลดคุณภาพเพื่อแข่งราคา”

3. **ติดตามการดูรายละเอียดของลูกค้า**
   - Text Left / Image Right
   - Desc: “ไม่พลาดทุกความเคลื่อนไหว...เพิ่มโอกาสในการปิดการขาย”

## 3. Portfolio Showcase
- **Component**: `Portfolio.tsx`
- **Content**: Carousel/Grid of past work mockups with lightbox.

## 4. Pricing Preview (optional)
- **Component**: `PricingCard.tsx`
- **Content**: ราคา Free vs Premium (499 บาท/เดือน).

## 5. Testimonials
- **Component**: `Testimonials.tsx`
- **Content**: Quotes fromผู้ใช้ ตัวอย่างภาพและข้อความ.

## 6. Call to Action
- **Component**: `CTA.tsx`
- **Content**: Reinforce main CTA, link to signup.

## 7. Footer
- **Component**: `Footer.tsx`
- **Content**: ลิงก์ นโยบาย ความเป็นส่วนตัว, Social icons.