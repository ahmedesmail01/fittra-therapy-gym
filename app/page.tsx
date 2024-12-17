import Advantages from "./components/Advantages";
import DrAhmed from "./components/DrAhmed";
import Duration from "./components/Duration";
import Footer from "./components/Footer";
import ForWho from "./components/ForWho";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { Know } from "./components/Know";
import Register from "./components/Register";
import Testmonials from "./components/Testmonials";
import WhatYouGain from "./components/WhatYouGain";
import WhySec from "./components/WhySec";

export default function Home() {
  return (
    <main
      dir="rtl"
      className="bg-[#f5f5f5] flex flex-col gap-4 [font-family:--font-cairo]"
    >
      <Header />
      <Hero />
      <WhySec />
      <Know />
      <WhatYouGain />
      <DrAhmed />
      <Advantages />
      <Testmonials />
      <ForWho />
      <Duration />
      <Register />
      <Footer />
    </main>
  );
}
