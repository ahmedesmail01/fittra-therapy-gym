import React from "react";

const Register = () => {
  return (
    <div className="text-center px-4  flex flex-col my-[60px] justify-center items-center">
      <h2 className="self-stretch mb-2 text-[rgba(0,30,108,0.90)] text-center [font-family:--font-monadi] text-[30px] lg:text-[42px] font-normal leading-[160%]">
        سجل الان
      </h2>
      <bdi className="text-[rgba(40,7,13,0.80)] mb-10">
        {" "}
        مع therapy Gym الفطرة الحياة أكثر هدوءًا، أعمق معنى، وسعادة مستدامة
      </bdi>
      <div className="py-6 px-12 lg:w-[580px] gap-4 flex flex-col justify-center items-center [font-family:--font-monadi] text-[#656866]  border border-[#412dd3] rounded-3xl ">
        <p>سجل الأن </p>
        <p>
          وشاهد النسخة المسجلة من المحاضرة
          <span className="text-blue-400"> (مجاناً)</span>
        </p>
        <a
          href="https://mtnlive.mtninstitute.net/ar/register?course_id=26cf0e53-1a52-4e09-8464-d3f54f0b3673"
          className="flex text-nowrap justify-center items-center gap-2.5 w-full  text-white text-2xl [background:linear-gradient(91deg,#0A47E5_0.1%,#06277F_100.1%)] px-20 py-[12px] rounded-[5px] border-2 border-solid "
        >
          سجل الان
        </a>
      </div>
    </div>
  );
};

export default Register;
