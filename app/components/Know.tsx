import Image from "next/image";
import React from "react";
import videoPlaceholder from "@/public/images/video-placeholder.svg";

export const Know = () => {
  return (
    <div className="text-center lg:mt-[60px] p-4">
      <h2 className="self-stretch text-[#656866] text-center [font-family:--font-monadi] text-[30px] lg:text-[42px]  leading-[160%]">
        اعرف تدريبات الفطرة
      </h2>
      <p className="flex-[1_0_0] text-[#515151]   text-base font-normal  opacity-80">
        الفطرة ھي بوابتك للراحة والسلام الداخلي اكتشف حال الراحة والاتزان ,
        واستعد الفطرة
      </p>
      <Image src={videoPlaceholder} alt="video" className="mx-auto" />
    </div>
  );
};
