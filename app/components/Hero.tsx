import Image from "next/image";
import React from "react";
import heroImgDisk from "@/public/images/Hero-img-disktop.png";
import heroImgMob from "@/public/images/Hero-img-mob.png";
import logoWhite from "@/public/images/logo-white.svg";

const Hero = () => {
  return (
    <div className="relative w-full flex lg:justify-start justify-center lg:mt-[48px] bg-[#f5f5f5] px-4">
      {/* Desktop Image */}
      <Image
        src={heroImgDisk}
        alt="hero image"
        className="w-full hidden md:block rounded-3xl object-cover"
        style={{ maxHeight: "610px" }}
      />

      {/* Mobile Image */}
      <Image
        src={heroImgMob}
        alt="hero image"
        className="w-full block md:hidden rounded-3xl object-cover"
        style={{ maxHeight: "688px" }}
      />

      {/* Overlay Content */}
      <div className="absolute  bottom-0   flex flex-col justify-center items-center lg:text-start text-center text-white">
        <div className=" text-center  lg:text-start flex flex-col gap-4 justify-center  lg:justify-start  lg:p-[48px] p-4 w-full h-full">
          <Image
            src={logoWhite}
            alt="logo-white"
            className=" lg:mb-6 mx-auto lg:mx-0  lg:w-[200px] lg:h-[200px] "
            width={200} // Adjust width as needed
            height={100} // Adjust height as needed
          />
          <h1 className="[font-family:--font-monadi] text-lg lg:text-3xl leading-tight">
            <span className="text-4xl lg:text-5xl">حياة</span> <br /> يملؤها
            الراحة و الاتزان و السعادة
          </h1>
          <p className="text-xls lg:text-2xl"> مع برنامج الفطرة Therapy Gym</p>
          <p className="max-w-[700px] hidden lg:block lg:mb-6 text-white text-right  text-2xl font-medium leading-[160%]">
            برنامج الفطرة يساعدك على اكتشاف مفهوم الفطرة وفهمها بعمق، لتعيش
            بتناغم مع ذاتك وحياتك ومتوافقا مع فطرتك وطبيعتك
          </p>
          <a
            href="https://mtnlive.mtninstitute.net/ar/register?course_id=26cf0e53-1a52-4e09-8464-d3f54f0b3673"
            className="flex w-[257px] h-[75px] text-xl justify-center text-blue-500 font-bold items-center gap-2.5 [background:#F5F5F5]  rounded-[15px] border-2 border-solid border-white"
          >
            أشترك الان
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
