import Image from "next/image";
import React from "react";
import bottom from "@/public/images/bottom.png";
import top from "@/public/images/top.png";
import arrow from "@/public/images/arrow.svg";

const ForWho = () => {
  return (
    <div className="w-full flex text-center lg:mb-[96px] mb-[60px] lg:flex-row-reverse flex-col gap-10 items-center justify-center ">
      <div className="relative w-[280px]  lg:mx-0 mx-auto lg:w-[500px] lg:h-[460px] h-[360px] flex items-center justify-center">
        <Image
          src={bottom}
          alt="img"
          className="absolute lg:w-full w-[350px]"
        />
        <Image
          src={top}
          alt="img"
          className="absolute z-10 lg:w-auto w-[100px]"
        />
      </div>
      <div className="lg:w-[700px] w-[350px] px-1">
        <h2 className="self-stretch lg:mb-6 text-[rgba(0,30,108,0.90)] text-center lg:text-start [font-family:--font-monadi] text-[30px] lg:text-[42px] font-normal leading-[160%]">
          لمن هذا البرنامج
        </h2>
        <div className="flex lg:flex-row flex-col lg:items-center items-start gap-4 mb-12 justify-start flex-wrap">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image src={arrow} alt="icon" />
              <p className="lg:w-[280px] text-start max-w-[280px] w-full text-wrap ">
                {item}
              </p>
            </div>
          ))}
        </div>
        <a
          href="https://mtnlive.mtninstitute.net/ar/register?course_id=26cf0e53-1a52-4e09-8464-d3f54f0b3673"
          className="flex text-nowrap text-white font-bold w-[80px] lg:w-[219px] h-[46px] justify-center items-center gap-2.5  [background:linear-gradient(91deg,#0A47E5_0.1%,#06277F_100.1%)] !px-14 lg:px-20 py-[18px] rounded-lg border-2 border-solid  "
        >
          أشترك الان
        </a>
      </div>
    </div>
  );
};

export default ForWho;

const items = [
  " لكل من يريد أن يعيش وفقا لفطرته",
  "كل من يبحث عن الاتزان والراحة والسلام",
  "كل من يبحث عن الثقة وتحقيق الذات",
  "كل من يشعر بالضغط والانهيار في حياته الغير متوافقة مع فطرته",
  " كل تائه يسعى ليجد دوره الحقيقي في الحياة",
  "كل من يريد أن يعيش متناغما مع ذاته وفطرته ",
];
