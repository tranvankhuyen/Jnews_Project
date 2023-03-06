import Footer from "../components/Footer";
import React from "react";

import ScrollTimeline from "../components/ScrollTimeline";
import ExpandCard from "../components/ExpandCard";
import Slider from "../components/Slider";
import BreadCrumb from "../components/BreadCrumb";
import CulturePart from "../components/CulturePart";
import Scrollbackbutton from "../components/Scrollbackbutton";
// import ScrollTimeline from "../components/ScrollTimeline";

export default function Culture() {
  return (
    <div className="h-[40000px] bg-white dark:bg-gray-900 ">
      <BreadCrumb />

      {/* <!-- Phong tục--> */}
      <div id="vanhoa">
      <h1 className=" hover:text-blue-600 pl-7 font-bold lg:text-2xl md:text-3xl text-4xl dark:text-gray-200  md:py-[9px] py-[30px]">
        税関
        </h1>
        
        <CulturePart />
      </div>
      <div className="h-7"></div>
      {/* <!-- Am thuc  --> */}
      <div id="amthuc" className="pt-11">
        <h1 className="  py-[9px]   pl-7 lg:text-2xl md:text-3xl text-4xl font-bold hover:text-blue-600 dark:text-gray-200">
          和食
        </h1>

        <ExpandCard />
      </div>
      {/* <!-- Trang phuc --> */}
      <div id="trangphuc" className="lg:h-[700px] md:h-[700px] h-[850px] pt-11 ">
        <h1 className="   py-[9px] pl-7 lg:text-2xl md:text-3xl text-4xl font-bold hover:text-blue-600 dark:text-gray-200">
        衣服
        </h1>

       
            <Slider />
          </div>

      {/* <!-- Lễ Hội  --> */}
      <div id="lehoi" className="h-[1000px] ">
        <h1 className="   py-[9px]  pl-7 lg:text-2xl md:text-3xl text-4xl font-bold  hover:text-blue-600 dark:text-gray-200">
        祭日／祝日
        </h1>

        <ScrollTimeline />
      </div>

      {/* <!-- .........................................................Footer ..............................................................--> */}

      <footer className="h-56 ">
        <Footer />
      </footer>
      <div className="h-96"></div>
      <Scrollbackbutton />
    </div>
  );
}
