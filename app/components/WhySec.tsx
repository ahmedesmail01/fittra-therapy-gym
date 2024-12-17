import React from "react";
import largeLogo from "@/public/images/logo-large.svg";
import icon from "@/public/images/blue-circle.svg";

import Image from "next/image";

const WhySec = () => {
  const items = [
    "التعرف على فطرتك وطبيعتك الأصلية ",
    "التخلص من الضغوط النفسية والجسدية",
    "اكتشاف أسرار الاتزان النفسي والشعوري",
    "العيش في اللحظة والتمتع بالحاضر",
    "تحسين تواصلك مع نفسك ومع من حولك",
  ];
  return (
    <div className="w-full lg:my-[96px] my-16 px-4 flex flex-col lg:flex-row items-center lg:gap-40 justify-center">
      <Image src={largeLogo} alt="logo" className="w-[200px] lg:w-auto mb-6" />
      <div>
        <h2 className="text-[#001E6C] text-right [font-family:--font-monadi] text-[30px] lg:text-[40px] font-normal leading-[normal]">
          لماذا برنامج الفطرة؟
        </h2>
        <p className="max-w-[444px] text-[#656866] text-right text-sm  lg:text-base font-semibold leading-[normal]">
          في عالم يعج بالفوضى والانشغال، نبتعد عن أصلنا وعن حالنا الفطري. برنامج
          الفطرة therapy Gym يساعدك على:
        </p>
        {
          items.map((item, index) => (
            <div key={index} className="mt-4 flex items-center gap-4">
              <Image src={icon} alt="icon" />
              <p className="flex-[1_0_0] text-[#515151] text-right  text-base font-normal leading-7 opacity-80">
                {item}
              </p>
            </div>
          ))

          // Add more items as needed, remember to update the items array above as well.
        }
      </div>
    </div>
  );
};

export default WhySec;
