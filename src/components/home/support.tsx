import Card from "../../assets/png/Group 1627.png";
import Card2 from "../../assets/png/Group 1628.png";
import Card3 from "../../assets/png/Group 1630.png";
import Card4 from "../../assets/png/Group 1631.png";
import Card5 from "../../assets/png/Group 1635.png";
import Card6 from "../../assets/png/Group 1636.png";
import Card7 from "../../assets/png/Group 1637.png";
import Card8 from "../../assets/png/Group 1638.png";
import Card9 from "../../assets/png/Group 1639.png";
import Card10 from "../../assets/png/Group 1640.png";

export default function Support() {
  return (
    <>
      <div className="pt-0 pb-10 lg:py-10 border-b-[1px] border-[#4FA366] w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        <p className="hidden md:block font-syne font-[400] text-[#54FF7A] text-[40px] lg:text-[48px] leading-[60px] ">
         <span className="text-[60px] lg:text-[64px]">Brought to you by </span>
          
        </p>
        <p className="block md:hidden font-syne font-[400] text-[#54FF7A] text-[30px] leading-[40px] ">
        <span className="text-[35px]">   Brought to you by </span>
        
        </p>

        <div className=" md:w-[60%] mx-auto pt-10">
          <div className="md:flex gap-5">
            <img src={Card} alt="" className="md:w-[50%]" />
            <img src={Card2} alt="" className="md:w-[50%] mt-5 md:mt-0" />
          </div>
          <p className="lead font-[400] text-[30px] text-white pt-5 text-center">
            with <span className="text-[#54FF7A]"> support from, </span>
          </p>
          <div className="md:flex gap-5 mt-5">
            <img src={Card4} alt="" className="md:w-[50%]" />
            <img src={Card3} alt="" className="md:w-[50%] mt-5 md:mt-0" />
          </div>
        </div>
      </div>
      <div></div>
      <div className="py-10 lg:border-b-[1px] border-[#4FA366] w-[90%] md:w-[97%] 2xl:w-[50%] mx-auto">
        <div className="lg:flex justify-between">
          <div>
            <p className="text-center lg:text-start hidden lg:block font-syne font-[400] text-[#54FF7A] text-[40px] lg:text-[48px] leading-[60px] ">
              With past and present
              <br />
              support from,
            </p>
            <p className="text-center lg:text-start block lg:hidden font-syne font-[400] text-[#54FF7A] text-[30px] md:text-[48px] leading-[40px] md:leading-[60px]">
              With past and
              <br />
              present support from,
            </p>
          </div>
          <div>
           <a href="mailto:hello@opscientia.com?subject=Interest in
          Sponsoring DeSci Summit&body=Dear DeSci Summit
          team,%0D%0A%0D%0AI am interested in learning more about
          how to sponsor the event." className="mt-5 lg:mt-10 text self-center flex justify-center gap-2 font-ubuntu font-[700] text-[#152EA0] text-[15px] xl:text-[18px]  transition duration-500 ease-in-out transform  bg-[#54FF7A] hover:text-white   rounded-[4px] py-4 md:px-20  w-[100%] md:w-auto mx-auto lg:ml-auto  uppercase "
            > Interested in Sponsoring? <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" strokeWidth=
              {1.5} stroke="currentColor" className="w-5 h-5
              self-center"
            > <path strokeLinecap="round" strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              /> </svg> </a>
            {/*<button
              id=""
              className="mt-5 lg:mt-10 text self-center flex justify-center gap-2 font-ubuntu font-[700] text-[#152EA0] text-[15px] xl:text-[18px]  transition duration-500 ease-in-out transform  bg-[#54FF7A] hover:text-white   rounded-[4px] py-4 md:px-20  w-[100%] md:w-auto mx-auto lg:ml-auto  uppercase"
            >
              Interested in Sponsoring?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>*/}
          </div>
        </div>
      </div>

      <div className="pt-0 pb-8 md:py-10">
        <div className="grid md:grid-cols-3 gap-5 w-[90%] md:w-[80%] 2xl:w-[50%] mx-auto">
          
          <div>
            <img src={Card6} alt="" />
          </div>
          <div>
            <img src={Card5} alt="" />
          </div>
          <div>
            <img src={Card7} alt="" />
          </div>
        </div>
        {/* <div className="grid md:grid-cols-2 gap-5 w-[90%] md:w-[50%] 2xl:w-[34%] mx-auto mt-5">
          <div>
            <img src={Card} alt="" />
          </div>
          <div>
            <img src={Card7} alt="" />
          </div>
        </div> */}
        <div className="grid md:grid-cols-3 gap-5 w-[90%] md:w-[80%] 2xl:w-[50%] mx-auto mt-5">
          <div>
            <img src={Card8} alt="" />
          </div>
          <div>
            <img src={Card9} alt="" />
          </div>
          <div>
            <img src={Card10} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
