import React from "react";
import testmonials from "@/public/images/testmonials.svg";
import Image from "next/image";
import right from "@/public/images/right.svg";
import left from "@/public/images/left.svg";
import blue from "@/public/images/blue-circle-2.svg";
import white from "@/public/images/white-circle.svg";

const Testmonials = () => {
  return (
    <>
    
    <div className="hidden my-[60px] lg:flex text-center  flex-col items-center justify-center">
      <h2 className=" text-[#001E6C] mb-6 [font-family:--font-monadi]   text-[30px] mt-2 lg:text-[40px]  ">
        هذه هى أراء العملاء
      </h2>
      <Image src={testmonials} alt="testmon" />
      <div className="flex items-center my-6 justify-center gap-10">
        <Image src={right} alt="icon" />
        <div className="flex items-center gap-2 justify-center">
          <Image src={white} alt="icon" />
          <Image src={white} alt="icon" />
          <Image src={white} alt="icon" />
          <Image src={white} alt="icon" />
          <Image src={blue} alt="icon" />
        </div>

        <Image src={left} alt="icon" />
      </div>
    </div>

    <div>
    <div className="flex lg:hidden my-[60px]  text-center  flex-col items-center justify-center">
      <h2 className=" text-[#001E6C] mb-6 [font-family:--font-monadi]   text-[30px] mt-2 lg:text-[40px]  ">
        هذه هى أراء العملاء
      </h2>
      <Image src={testmonials} alt="testmon" />
      <div className="flex items-center my-6 justify-center gap-10">
        <Image src={right} alt="icon" />
        <div className="flex items-center gap-2 justify-center">
          <Image src={white} alt="icon" />
          <Image src={white} alt="icon" />
          <Image src={white} alt="icon" />
          <Image src={white} alt="icon" />
          <Image src={blue} alt="icon" />
        </div>

        <Image src={left} alt="icon" />
      </div>
    </div>
    </div>
    </>
  );
};

export default Testmonials;
