import { Link } from "react-router-dom";
import Card from "../../assets/png/Group 1627.png";
import Card2 from "../../assets/png/Group 1628.png";
import Card3 from "../../assets/png/Group 1630.png";
import Card4 from "../../assets/png/Group 1631.png";


export default function Brought() {
  return (
    <>
      <div className="py-10 md:border-b-[1px] border-[#4FA366] w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        <p className="hidden md:block lead font-[400] text-[#54FF7A] md:text-[50px] lg:text-[70px] xl:text-[80px] text-center">
        This year brought <br/> to you by
        </p>

        <p className="block md:hidden lead font-[400] text-[#54FF7A] text-[45px]  text-center">
        This year <br/> brought to you <br/>  by
        </p>

        <div className="md:w-[60%] xl:w-[50%] mx-auto pt-10">
          <div className="md:flex gap-5">
           <Link to="https://opsci.xyz" target="_blank" className="md:w-[50%]">

            <img src={Card} alt=""  />
            </Link>
           <Link to="https://thesciencecommons.org/" target="_blank" className="md:w-[50%]">

            <img src={Card2} alt="" className=" mt-5 md:mt-0" />
            </Link>
          </div>
          <p className="lead font-[400] text-[20px] md:text-[30px] text-white py-5 md:py-10 text-center">
            with <span className="text-[#54FF7A]"> support from, </span>
          </p>
          <div className="md:flex gap-5 ">
           <Link to="https://desci.world/" target="_blank" className="md:w-[50%]">

            <img src={Card4} alt="" />
            </Link>
           <Link to="https://desci.com" target="_blank" className="md:w-[50%]">

            <img src={Card3} alt="" className=" mt-5 md:mt-0" />
            </Link>
          </div>
        </div>
      </div>
      <div></div>

    </>
  );
}
