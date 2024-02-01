import Navbar from "../components/Navbar/navbar";
// import Banner from "../assets/png/banner.png";
import Banner from "../assets/png/banner.png";
import Card from "../assets/png/Group 1627.png"
import Card2 from "../assets/png/Group 1628.png"
import Counter from "../components/home/counter";
import Query from "../components/home/query";
import Denver from "../components/home/denver";
import Technology from "../components/home/technology";
import FormUpdates from "../components/home/formUpdates";
import Events from "../components/home/events";
import Leadership from "../components/home/leadership";
import Support from "../components/home/support";
import ImageSlider from "../components/home/imageSlider";
import ImageTwoSlider from "../components/home/imagesTwoSlider";
import Explore from "../components/home/explore";
import Register from "../components/home/register";
import Footer from "../components/Footer/footer";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="grid md:grid-cols-12 w-[90%] md:w-[95%] 2xl:w-[80%] mx-auto pt-10">
        <div className="md:col-span-9">
          <p className="font-syne font-[400] text-[38px] md:text-[50px] lg:text-[65px] xl:text-[95px] text-white leading-[50px] md:leading-[65px] lg:leading-[85px] xl:leading-[118px]">
            Distributed <br /> coordination for
            <br />
          <span className="text-[#54FF7A]">  global science impact </span>
          </p>
          <div className="mt-5 hidden md:block">
          <p className="font-syne font-[400] text-[#54FF7A] text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px]"> <span className="md:text-[18px] lg:text-[24px] xl:text-[30px]"> Brought to you by </span></p>
          <div className="flex gap-5 w-[80%] 2xl:w-[60%] mt-5">
           <Link to="https://opsci.xyz" target="_blank">
            <img src={Card} alt="" />
            </Link>
           <Link to="https://thesciencecommons.org/" target="_blank">

            <img src={Card2} alt="" />
            </Link>
          </div>
          </div>
        </div>
        <div className="md:col-span-3 mt-8">
        <img src={Banner} alt="" />
        <div className="mt-5 block md:hidden">
          <p className="mt-8 font-syne font-[400] text-[#54FF7A] text-[13px] md:text-[14px] lg:text-[16px] xl:text-[20px] "><span className="text-[18px]">Brought to you by</span></p>
          <div className="md:flex gap-5 md:w-[35%] mt-5">
            <img src={Card} alt="" />
            <img src={Card2} alt="" className="mt-5" />
          </div>
          </div>
        </div>
      </div>
      <Counter/>
      <Query/>
      <Denver/>
      <Technology/>
      <Query/>
      <FormUpdates/>
      <Events/>
      <Leadership/>
      <Support/>
      <ImageSlider/>
      <ImageTwoSlider/>
      <Explore/>
      <Query/>
      <Register/>
      <Footer/>


    </>
  );
};

export default Landing;
