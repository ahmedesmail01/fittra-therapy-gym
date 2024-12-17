import Image from "next/image";
import React from "react";
import drAhmed from "@/public/images/drAhmed.svg";
import drAhmedMob from "@/public/images/drAhmedMob.svg";

const DrAhmed = () => {
  return (
    <div className="w-full  p-4 lg:px-[90px] flex items-center justify-center mt-[60px] lg:my-[96px]">
      <div className="flex flex-col-reverse lg:flex-row lg:h-[655px] lg:w-auto w-[350px] items-start justify-center">
        <div className="lg:bg-white bg-none !h-full lg:rounded-tr-[40px] lg:rounded-br-[40px] lg:py-5 px-4">
          <h2 className=" text-[#001E6C] mb-6  text-right text-[30px] mt-2 lg:text-[40px] font-bold ">
            د/أحمد الدملاوي
          </h2>
          {data.map((item, idx) => (
            <div key={idx}>
              <bdi className="lg:pl-16  text-[#7C807D] text-right block mb-4 lg:mb-5 text-base font-normal leading-[160%]">
                {item}
              </bdi>
            </div>
          ))}
        </div>
        <Image
          src={drAhmed}
          alt="dr ahmed"
          className="hidden lg:block h-[655px]"
        />
        <Image
          src={drAhmedMob}
          alt="dr ahmed"
          className="block lg:hidden h-auto"
        />
      </div>
    </div>
  );
};

export default DrAhmed;

const data = [
  "د.أحمد الدملاوي طبیب متمرس تخرج من كلیة الطب جامعة عین شمس عام 1982",
  " وُیُعد د.أحمد استشاریاً مشھوراً في مجال التحول الفطري والتطویر والاستشفاء الذاتي حیث كرس في حیاتھ أكثر من ٢٥ عاماعاماً في التدریب على اتزان الشعورالإنساني وتصنیفھ وتنظیمھ.",
  "یعد د/أحمد الطبیب الوحید في العالم العربي الذي یعتمد في تشخیص وعلاج عملائھ على منظور علاجي وتدریبي ینبع من تشخیص النفس بالألوان وتشخیص المرض بالسبب النفسي لھ , منذ عام 2012 حتى الآن.",
  " أستاذ مدرب علم المیتاھیلث ونائب رئیس الجمعیة العالمیة للمیتا مادیسون بالولایات المتحدة الأمریكیة IMMA® (سابقاً) ",
  ". علم المیتاھیلث ھو منظور جدید للطب ینبع من منظور الشفاء ولیس المرضحاصل على درجة ماجستیر في إدارة الأعمال من ESLSCA®حاصل على شھادة تدریب الممارسین من المعھد الدولى للألوان بجریس بألمانیا ومؤسسة لوشر للتشخیص بالألوان بسویسرا",
  "قام بدراسات علیا في الھندسة الطبیة من جامعة واشنطن بالولایات المتحدة الأمریكیة عام 1990.",
  " Landmark Education® 1992-1993 في مؤسسة ontology درس علم النفس",
  "بالولایات المتحدة الأمریكیة و2006-2007 بالمملكة المتحدة.",
  "أعد ونشر العدید من الأبحاث في مجال الأشعة التشخیصیة بجامعة واشنطن بسیاتل",
];
