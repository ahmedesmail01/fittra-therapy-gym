import React from "react";
import facebook from "@/public/images/facebook.svg";
import x from "@/public/images/x.svg";
import youtube from "@/public/images/youtube.svg";
import company from "@/public/images/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="flex items-center justify-center gap-10 lg:gap-24 mb-10">
        {items.map((item) => (
          <div
            key={item.title}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <p className="hidden lg:block text-[#3722D1] [font-feature-settings:'dlig'_on] font-bold text-sm  leading-5 tracking-[0.21px]">
              {item.title}
            </p>
            <Image src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
      <bdi className="text-[#3722D1] text-center  text-sm font-medium leading-[25px] tracking-[-0.14px] opacity-70">
        © 2024 All Rights Reserved - Mange The Now
      </bdi>
    </div>
  );
};

const items = [
  {
    img: facebook,
    title: "Facebook",
  },
  {
    img: x,
    title: "X",
  },
  {
    img: youtube,
    title: "YouTube",
  },
  {
    img: company,
    title: "Company",
  },
];

export default Footer;
