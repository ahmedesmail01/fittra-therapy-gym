import React from "react";
import quality from "@/public/images/quality-icon.svg";
import getback from "@/public/images/getback-icon.svg";
import life from "@/public/images/life-icon.svg";
import skills from "@/public/images/skills-icon.svg";
import aware from "@/public/images/aware-icon.svg";
import Image from "next/image";

const WhatYouGain = () => {
  const items = [
    {
      img: aware,
      title: "الوعي والفهم",
      disc: "إدراك معنى الفطرة ودورها في تحسين حياتك تصحيح المفاهيم المغلوطة عن السعادة والراحة والحب",
    },
    {
      img: skills,
      title: "مهارات قراءة المشاعر",
      disc: "التعرف على مشاعرك، تصنيفها، واستغلالها كوسيلة للتوازن",
    },
    {
      img: life,
      title: "الحياة في اللحظة",
      disc: "تعلم الانتباه المستمر والعيش في الحاضر",
    },
    {
      img: getback,
      title: "استعادة التوازن الداخلي",
      disc: "فهم الأدوار الفطرية وكيفية أدائها بتناغم إدراك النعم المحيطة بك وتقديرها",
    },
    {
      img: quality,
      title: "جودة حياة مختلفة",
      disc: "أن ترفع من جودة حياتك عبر إدراكك لدورك وكينونتك والعيش وفق الأحوال الفطرية التي تناسبك وتتماشى مع طبيعتك",
    },
  ];
  return (
    <div className="text-center my-[60px] lg:my-[96px]">
      <h2 className="self-stretch mb-6 text-[rgba(0,30,108,0.90)] text-center [font-family:--font-monadi] text-[30px] lg:text-[42px] font-normal leading-[160%]">
        ما الذي ستكتسبه؟
      </h2>

      <div className="flex gap-10 lg:gap-4 lg:flex-row flex-col items-center justify-center">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="rounded-lg w-[250px] h-[314px] py-10 px-4 bg-white shadow-lg flex flex-col gap-2 items-center justify-start"
          >
            <Image src={item.img} alt={item.title} className="mb-4" />
            <h3 className=" text-[#353535] text-center [font-family:--font-monadi] text-[22px] font-normal leading-[107%]">
              {item.title}
            </h3>
            <p className="self-stretch text-[#7C807D] text-center [font-family:Cairo] text-[15px] font-normal leading-[150%]">
              {item.disc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouGain;
