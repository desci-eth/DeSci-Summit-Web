import React from "react";
import Lay from "../../assets/png/lay.png";
import Lay2 from "../../assets/png/lay2.png";
import Lay3 from "../../assets/png/lay3.png";
import Lay4 from "../../assets/png/lay4.png";
import Lay5 from "../../assets/png/lay5.png";
import Lay6 from "../../assets/png/lay6.png";
import Lay7 from "../../assets/png/lay7.png";
import Lay8 from "../../assets/png/lay8.png";
import Lay9 from "../../assets/png/lay9.png";
import Lay10 from "../../assets/png/lay10.png";
import Lay11 from "../../assets/png/lay11.png";
import Lay12 from "../../assets/png/lay12.png";

export default function Gallery() {
  return (
    <>
      <div className="py-5 border-b-[1px] border-[#4FA366] ">
        <p className="text-center font-syne font-[400] text-[#54FF7A] text-[30px] md:text-[40px] xl:text-[48px] leading-[60px] ">
          Photo Gallery
        </p>
        <p className="font-syne font-[400] text-[20px] xl:text-[25px] text-white mt-2  text-center mx-auto">
          Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
          commodo sed. <br /> Faucibus sit ornare aliquam enim proin nisi
          commodo tristique vel.
        </p>

        <div className="hidden xl:flex gap-2 w-[90%] lg:w-[97%] 2xl:w-[60%] mx-auto mt-10">
          <div>
            <div className="flex gap-2">
              <img src={Lay} alt="" className="w-[343px] h-[223px]" />
              <img src={Lay2} alt="" className="w-[100%] h-[223px]" />
            </div>
            <div className="flex gap-2 mt-2">
              <img src={Lay7} alt="" className="w-[289px] h-[352px]" />
              <div>
                <img src={Lay8} alt="" className=" w-[266px] h-[171px]" />
                <img
                  src={Lay9}
                  alt=""
                  className=" w-[266px] h-[171px] mt-[10px]"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="flex gap-2">
              <div className="flex gap-2">
                <img src={Lay3} alt="" className="w-[237px] h-[338px]" />
                <div>
                  <img src={Lay4} alt="" className="w-[193px] h-[164px]" />
                  <img
                    src={Lay5}
                    alt=""
                    className="w-[193px] h-[164px] mt-[10px]"
                  />
                </div>
              </div>

              <div>
                <img src={Lay6} alt="" className="w-[466px] h-[338px]" />
              </div>
            </div>

            <div className="flex gap-2  mt-2">
              <img src={Lay10} alt="" className="w-[212px] h-[239px] " />
              <img src={Lay11} alt="" className="w-[342px] h-[239px] " />
              <img src={Lay12} alt="" className="w-[342px] h-[239px] " />
            </div>
          </div>

        </div>

        <div className="grid xl:hidden grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 w-[90%] lg:w-[97%] 2xl:w-[60%] mx-auto mt-10">
         <div>
           <img src={Lay} alt="" className="w-full" />
         </div>
         <div>
           <img src={Lay2} alt="" className="w-full" />
         </div>
         <div>
           <img src={Lay3} alt="" className="w-full" />
         </div>
         <div>
           <img src={Lay4} alt="" className="w-full" />
         </div>
         <div>
           <img src={Lay5} alt="" className="w-full" />
         </div>
         <div>
           <img src={Lay6} alt="" className="w-full" />
         </div>
         <div>
           <img src={Lay7} alt="" className="w-full" />
         </div>
         <div>
           <img src={Lay8} alt="" className="w-full" />
         </div>
         <div>
           <img src={Lay9} alt="" className="w-full" />
         </div>
         <div>
           <img src={Lay10} alt="" className="w-full" />
         </div>
         <div>
           <img src={Lay11} alt="" className="w-full" />
         </div>
         <div>
           <img src={Lay12} alt="" className="w-full" />
         </div>
        </div>

      </div>
    </>
  );
}
