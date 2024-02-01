import Navbar from "../components/Navbar/navbar"; import Sbanner
from "../assets/png/sbanner.png"; import Triangle
from "../assets/svg/Triangle.svg"; import Dot
from "../assets/svg/dot.svg"; import Bancor
from "../assets/png/bancor.png"; import Brought
from "../components/schedule/brought"; import Register
from "../components/home/register"; import Footer
from "../components/Footer/footer"; import Timeout
from "../components/schedule/timeout";

export default function Schedule() { return ( <> <div
className="relative"> <Navbar /> <div className="grid md:grid-cols-2 w-
[90%] md:w-[97%] 2xl:w-[80%] mx-auto md:border-b-[1px] lg:border-
[#9D84FF] pb-5"> <div className="mt-5 md:mt-14"> <p
className="font-syne font-[400] text-[70px] md:text-[80px] lg:text-
[90px] xl:text-[96px] text-[#54FF7A]"> Schedule </p> <p className="flex
gap-3  text font-[400] text-white text-[20px] md:text-[30px] lg:text-
[32px] "> DeSciSummit2024 <img src={Triangle} alt="" /> <img src=
{Dot} alt="" /> </p> <p className="hidden md:block font-syne font-
[400] text-[35px] lg:text-[45px] xl:text-[56px] text-white mt-4">
February 25th - March 1st, 2024 </p>

          <div className="md:flex gap-5 mt-5"> 

          <a href="https://t.co/1xTBOCaLgK" target="_blank"
          rel="noopener noreferrer" className="mt-5 text text-center
          inline-flex gap-2 font-ubuntu font-normal text-
          [#152EA0] text-[17px] uppercase transition duration-500
          ease-in-out transform  bg-[#54FF7A] hover:text-white rounded-
          [4px] py-4 px-6 md:px-6 "
            > apply to speak <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" strokeWidth=
              {1.5} stroke="currentColor" className="w-4  h-4"
            > <path strokeLinecap="round" strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              /> </svg> </a>

          <a href="mailto:hello@opscientia.com?subject=Interest in
          Sponsoring DeSci Summit&body=Dear DeSci Summit
          team,%0D%0A%0D%0AI am interested in learning more about
          how to sponsor the event." className="mt-5 text text-center
          inline-flex items-center gap-2 font-ubuntu font-
          [400] text-[#54FF7A] text-[17px] border-[1px] border-
          [#54FF7A] transition duration-500 ease-in-out transform
          hover:bg-[#54FF7A] hover:text-white rounded-[4px] py-4
          px-6 md:px-6 uppercase"
            > Sponsorships <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" strokeWidth=
              {1.5} stroke="currentColor" className="w-4 h-4
              self-center"
            > <path strokeLinecap="round" strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              /> </svg> </a>




            {/*<button className="mt-5 md:mt-0 text flex gap-2
            font-ubuntu font-[400] text-[#54FF7A] text-[17px] border-
            [1px] border-[#54FF7A] transition duration-500 ease-in-out
            transform hover:bg-[#54FF7A] hover:text-white   rounded-
            [4px] py-4 px-8 md:px-6   uppercase"> sponsorships <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0
            24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-4  h-4  self-center"
              > <path strokeLinecap="round" strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                /> </svg> </button>*/} </div> </div>

        <div className="hidden md:block"> <img src={Sbanner} alt="" />
        </div> </div> <img src={Bancor} alt="" className="absolute
        top-0 right-0 block md:hidden" /> </div> <Timeout/> <Brought/>
        <Register/> <Footer/> </> ); }
