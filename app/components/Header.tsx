import Image from "next/image";
import React from "react";
import logo from "@/public/images/logo.svg";

const Header = () => {
  const navLinks = [
    {
      title: "أعرف تدريبات الفطرة",
      target: "#",
    },
    {
      title: "مميزات الكورس",
      target: "#",
    },
    {
      title: "مميزات الكورس",
      target: "#",
    },

    {
      title: "لمن  هذا الكورس",
      target: "#",
    },
  ];

  return (
    <div className="w-full flex items-center py-4 justify-between bg-white px-4 lg:px-10">
      <Image src={logo} alt="logo" />
      <ul className=" hidden lg:flex gap-4 items-center justify-center">
        {
          navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.target}
                className="text-sm sm:text-base hover:text-gray-600"
              >
                {link.title}
              </a>
            </li>
          ))
          // Add more links as needed (e.g., sign in, sign up, etc.) and handle their target URLs accordingly.
        }
      </ul>
      <div>
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

export default Header;
