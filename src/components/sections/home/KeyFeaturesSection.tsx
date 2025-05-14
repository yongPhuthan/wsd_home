// app/_components/sections/home/KeyFeaturesSection.tsx

// กำหนดข้อมูลสำหรับ Features
const featuresData = [
    {
      title: 'เสนอราคาให้ได้งาน ไม่ต้องตัดราคาลดกำไร',
      description: 'แสดงผลงานและความเชี่ยวชาญการทำงานของคุณในรูปแบบที่น่าสนใจและเข้าใจง่าย ลูกค้าสามารถเห็นคุณภาพของบริการของคุณได้อย่างชัดเจน ช่วยให้พวกเขามีความมั่นใจในการตัดสินใจเลือกบริการของคุณ',
      imageUrl: 'https://placehold.co/800x600/000000/FFFFFF?text=แสดงผลงาน+และมาตรฐาน',
      imageAlt: '[รูปภาพ Mockup แสดงผลงานและมาตรฐานในแอป]',
      layoutOrder: 'imageLeft', // 'imageLeft' หรือ 'imageRight'
    },
    {
      title: 'ติดตามการดูใบเสนอราคาของลูกค้า',
      description: 'การแจ้งเตือนทุกครั้งเมื่อลูกค้าเปิดดูใบเสนอราคา ช่วยให้คุณสามารถติดตามและวางแผนการทำงานร่วมกับลูกค้าได้อย่างมีประสิทธิภาพมากขึ้น',
      imageUrl: 'https://placehold.co/800x600/848484/FFFFFF?text=ติดตามลูกค้าเปิดดู',
      imageAlt: '[รูปภาพ Mockup การแจ้งเตือนสถานะใบเสนอราคาในแอป]',
      layoutOrder: 'imageRight',
    },
    {
      title: 'ระบบใช้งานง่ายลุงช่างก็ทำได้',
      description: 'แอปพลิเคชันที่ใช้งานง่าย ไม่ว่าคุณจะเป็นช่างมือใหม่หรือมือเก๋าก็สามารถสร้างใบเสนอราคาที่มีข้อมูลละเอียดและสวยงามได้อย่างรวดเร็วแม้ในขณะที่คุณอยู่หน้างาน',
      imageUrl: 'https://placehold.co/800x600/4B4B4B/FFFFFF?text=ใบเสนอราคาเน้นคุณค่า',
      imageAlt: '[รูปภาพ Mockup ตัวอย่างใบเสนอราคาจากแอป]',
      layoutOrder: 'imageLeft',
    },
  ];
  
  export default function KeyFeaturesSection() {
    return (
      <section className="py-16 lg:py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold text-text-main sm:text-4xl">
              เป็นมืออาชีพในสายตาลูกค้าและโดดเด่นเหนือคู่แข่ง
            </h2>
            <p className="mt-4 text-lg text-text-light max-w-2xl mx-auto">
              สร้างข้อเสนอที่เน้นคุณค่าและมาตรฐานการทำงานของคุณ ทำให้ลูกค้าเห็นความแตกต่างและมั่นใจในบริการของคุณมากขึ้น
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
  