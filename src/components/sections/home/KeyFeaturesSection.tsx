// app/_components/sections/home/KeyFeaturesSection.tsx

// กำหนดข้อมูลสำหรับ Features
const featuresData = [
    {
      title: 'เสนอราคาพร้อมรูปภาพตัวอย่างผลงาน',
      description: 'แนบรูปภาพตัวอย่างผลงานที่คุณเคยทำ ช่วยให้ลูกค้าเห็นภาพชัดและเพิ่มความน่าเชื่อถือจากการแสดงผลงานที่ใกล้เคียงกับความต้องการของลูกค้าได้ง่ายขึ้น',
      imageUrl: '/images/workimage.png',
      imageAlt: '[รูปภาพ Mockup แสดงผลงานและมาตรฐานในแอป]',
      layoutOrder: 'imageLeft', // 'imageLeft' หรือ 'imageRight'
    },
    {
      title: 'เสนอราคาพร้อมมาตรฐานการทำงาน',
      description: 'แสดงมาตรฐานการทำงานที่คุณใช้ในการให้บริการ ช่วยให้ลูกค้าเข้าใจถึงคุณภาพการทำงานที่แตกต่างจากคู่แข่งและสร้างความเชื่อมั่นในบริการของคุณ',
      imageUrl: '/images/standard.png',
      imageAlt: '[รูปภาพ Mockup การแจ้งเตือนสถานะใบเสนอราคาในแอป]',
      layoutOrder: 'imageRight',
    },
    {
      title: 'เสนอราคาพร้อมวัสดุอุปกรณ์และผู้ปฎิบัติงาน',
      description: 'เพิ่มความโปร่งใสในการเสนอราคา โดยระบุวัสดุอุปกรณ์ที่ใช้และผู้ปฎิบัติงานที่เกี่ยวข้อง ช่วยสร้างความแตกต่างและความไว้วางใจในบริการของคุณ',
      imageUrl: '/images/materials.png',
      imageAlt: '[รูปภาพ Mockup ตัวอย่างใบเสนอราคาจากแอป]',
      layoutOrder: 'imageLeft',
    },
  ];
  
  export default function KeyFeaturesSection() {
    return (
      <section id="features" className="py-16 lg:py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold text-text-main sm:text-4xl">
              เป็นมืออาชีพในสายตาลูกค้าและโดดเด่นเหนือคู่แข่ง
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
             ตัวอย่างฟีเจอร์ที่ทำให้ลูกค้าเห็นความแตกต่างและมั่นใจในบริการของคุณมากขึ้น ด้วยการสร้างข้อเสนอที่เป็นมืออาชีพและดูน่าเชื่อถือมากกว่าใคร
            </p>
          </div>
  
          <div className="space-y-12 lg:space-y-16">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  feature.layoutOrder === 'imageRight' ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center bg-ws-white rounded-xl shadow-xl overflow-hidden`}
              >
                <div className="w-full md:w-1/2">
                  <img
                    src={feature.imageUrl}
                    alt={feature.imageAlt}
                    className="w-full h-64 md:h-full object-cover" // ให้รูปภาพเต็มพื้นที่ที่กำหนด
                  />
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-12">
                  <h3 className="text-2xl font-bold text-text-main mb-3">{feature.title}</h3>
                  <p className="text-text-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  