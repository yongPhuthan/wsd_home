// src/app/_components/sections/home/PricingSection.tsx
"use client"; // Required for useState

import { useState, useMemo } from 'react';
import { CheckCircle, Star } from 'lucide-react'; // Added Star icon

const features = [
  'สร้างใบเสนอราคาและใบแจ้งหนี้ไม่จำกัด',
  'ระบบติดตามการดูใบเสนอราคา',
  'จัดการข้อมูลลูกค้าและผู้ติดต่อ',
  'จำนวนมาตรฐานการทำงานไม่จำกัด',
  'จำนวนวัสดุและอุปกรณ์ไม่จำกัด',
  'ระบบการรับประกันคุณภาพงาน',
  'จำนวนผู้ปฎิบัติงานสูงสุด 3 คน',
];

type PlanType = 'yearly' | 'monthly' | 'weekly';

interface PlanDetails {
  id: PlanType;
  name: string; // Name for the button
  displayName: string; // Name for the card title
  priceFull: number;
  pricePerMonth: number;
  billingCycleText: string; // e.g., "/ปี", "/เดือน", "/สัปดาห์"
  fullPriceText: string; // e.g., "ชำระครั้งเดียว ฿8,990"
  saveAmount?: string;
  isMostPopular?: boolean; // To highlight the yearly plan
}

const plans: PlanDetails[] = [
  // {
  //   id: 'yearly',
  //   name: 'รายปี', // Removed "(คุ้มที่สุด)" from button name
  //   displayName: 'แพ็กเกจรายปี',
  //   priceFull: 4990,
  //   pricePerMonth: Math.round(4990 / 12), // Approx 749
  //   billingCycleText: '/ปี',
  //   fullPriceText: `ชำระครั้งเดียว ฿5,489`,
  //   saveAmount: 'ประหยัดสูงสุด!',
  //   isMostPopular: true,
  // },
  {
    id: 'monthly',
    name: 'รายเดือน',
    displayName: 'แพ็กเกจรายเดือน',
    priceFull: 499,
    pricePerMonth: 499,
    billingCycleText: '/เดือน',
    fullPriceText: `ชำระ ฿499 ทุกเดือน`,
    isMostPopular: true,
  },
  {
    id: 'weekly',
    name: 'รายสัปดาห์',
    displayName: 'แพ็กเกจรายสัปดาห์',
    priceFull: 149,
    pricePerMonth: Math.round(149 * (52 / 12)), // Approx 1296
    billingCycleText: '/สัปดาห์',
    fullPriceText: `ชำระ ฿ 149 ทุกสัปดาห์`,
  },
];

export default function PricingSection() {
  const [selectedPlanId, setSelectedPlanId] = useState<PlanType>('monthly'); // Default to monthly plan

  const selectedPlan = useMemo(() => {
    return plans.find(p => p.id === selectedPlanId) || plans[0];
  }, [selectedPlanId]);

  return (
    <section id="pricing"  className="bg-[var(--color-background-default)] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-main)]">
              ทดลองใช้งานฟรีไม่ต้องใช้บัตรเครดิต
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
           เลือกแพ็กเกจที่เหมาะกับธุรกิจของคุณ
          </p>
        </div>

        <div className="max-w-lg mx-auto lg:max-w-xl">
          <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-[var(--color-border-default)] relative">
            {/* Most Popular Badge for Yearly Plan */}
            {selectedPlan.isMostPopular && (
              <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-orange-500 text-white shadow-lg">
                  <Star className="w-4 h-4 mr-1.5" />
                  คุ้มค่าที่สุด
                </span>
              </div>
            )}

            {/* Plan Selector Buttons */}
            <div className="flex justify-center mb-8 mt-4 space-x-2 sm:space-x-3 bg-[var(--color-background-alt-section)] p-1 rounded-lg">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`w-full py-2.5 px-2 sm:px-4 text-sm sm:text-base font-medium rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--color-navbar-background)] focus:ring-opacity-50
                    ${selectedPlanId === plan.id
                      ? 'bg-[var(--color-navbar-background)] text-[var(--color-navbar-text-primary)] shadow-md'
                      : 'text-[var(--color-text-muted)] hover:bg-gray-200'
                    }
                  `}
                >
                  {plan.name}
                </button>
              ))}
            </div>

            {/* Special Offer Banner - Adjusted Styling */}
            <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center mb-6 text-sm font-medium">
              <p>✨ ทดลองใช้งานฟรี! ไม่ใช้บัตรเครดิต ✨</p>
            </div>

            <h3 className="text-2xl font-semibold text-[var(--color-text-main)] text-center">
              {selectedPlan.displayName}
            </h3>

            {/* Main Price Display (Per Month) */}
            <div className="mt-4 text-center text-[var(--color-text-main)]">
              <span className="text-5xl font-extrabold">฿{selectedPlan.pricePerMonth.toLocaleString()}</span>
              <span className="text-xl font-medium text-[var(--color-text-muted)]">/เดือน</span>
            </div>

            {/* Full Price Information */}
            <p className="mt-1 text-sm text-center text-[var(--color-text-muted)]">
              {selectedPlan.fullPriceText} {selectedPlan.billingCycleText !== '/เดือน' ? `(เฉลี่ย ฿${selectedPlan.pricePerMonth.toLocaleString()}/เดือน)` : ''}
            </p>

            {/* Save Amount - Enhanced Styling */}
            {selectedPlan.saveAmount && (
              <div className="mt-3 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                  {selectedPlan.saveAmount}
                </span>
              </div>
            )}
            <p className="mt-2 text-sm text-center text-[var(--color-text-muted)]">
              (ราคานี้ยังไม่รวมภาษีมูลค่าเพิ่ม 7%)
            </p>

            <a
             href="https://wsd.onelink.me/CMH0/zjghaexy"
              target="_blank"
              className="mt-8 block w-full bg-[var(--color-footer-background)] text-[var(--color-footer-text)] hover:bg-opacity-90 py-3.5 px-6 text-lg font-semibold text-center rounded-lg shadow-md transition-colors"
            >
              เริ่มต้นทดลองใช้ฟรี
            </a>

            <ul className="mt-10 space-y-4 text-sm">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500 mr-2.5 mt-0.5" />
                  <span className="text-[var(--color-text-muted)]">{feature}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-[var(--color-text-main)]">
            เริ่มต้นยกระดับธุรกิจของคุณ
          </p>
          <a
                href="https://wsd.onelink.me/CMH0/zjghaexy"
              target="_blank"
            className="mt-4 inline-block text-lg font-semibold text-[var(--color-text-main)] hover:underline"
          >
            รับสิทธิ์ทดลองใช้งานฟรีทันที &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
