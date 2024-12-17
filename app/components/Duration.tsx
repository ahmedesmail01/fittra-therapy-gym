import React from "react";
import calendar from "@/public/images/calendar.svg";
import file from "@/public/images/file.svg";
import contact from "@/public/images/contact.svg";
import Image from "next/image";

const Duration = () => {
  return (
    <div className="text-center my-[60px]">
      <h2 className="mb-6  text-[rgba(0,30,108,0.90)] text-center  [font-family:--font-monadi] text-[30px] lg:text-[42px] font-normal leading-[160%]">
        مدة البرنامج وجدوله
      </h2>
      <div className="flex items-center lg:flex-row flex-col justify-center gap-20 lg:gap-32">
        {items.map((i, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center items-center gap-4 "
          >
            <div className="p-6 rounded-full mb-4 bg-[#eaf0ff] shadow-sm ">
              <Image src={i.img} alt={i.title} className="" />
            </div>
            <h3 className="self-stretch text-[#001E6C] text-center text-2xl font-bold leading-6">
              {i.title}
            </h3>
            <p className="max-w-[180px] text-[rgba(40,7,13,0.80)]">{i.disc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const items = [
  {
    img: calendar,
    title: "المدة",
    disc: "المدةالبرنامج شهر كامل.",
  },
  {
    img: file,
    title: "كل لقاء يشمل",
    disc: "شرح المفاهيم و مناقشات تفاعلية و تمارين عملية.",
  },
  {
    img: contact,
    title: "عدد اللقاءات",
    disc: "4 لقاءات، لقاء واحد كل أسبوع.",
  },
];

export default Duration;
