import { Link } from "react-router-dom";
import Frame from "../../assets/png/Frame.png";
import Frame2 from "../../assets/png/Frame2.png";

export default function Denver() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-5 md:gap-20 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto pt-5 pb-5 lg:pb-0 lg:pt-16 ">
        <div className="block lg:hidden">
          <p className="font-syne font-[400] text-[32px] md:text-[50px] xl:text-[64px] text-white">
            23 Feb — Mar 1 2024
          </p>
          <p className="font-syne font-[400] text-[32px] md:text-[50px] xl:text-[64px] text-white">
            Denver, Colorado
          </p>


        </div>

        <div className="self-center">
          <img src={Frame} alt="" className="hidden md:block" />
          <img src={Frame2} alt="" className="block md:hidden w-[95%]" />
          <div className="flex md:justify-center lg:hidden gap-5 mt-5 md:mt-10">
            <button id="btn" className="text  font-ubuntu font-[400] text-white text-[15px] md:text-[18px] border-[1px] border-white transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-4 px-4 md:px-8 w-[50%] md:w-auto   uppercase">
              Become a Speaker
            </button>

<a
  id="btn"
  href="https://airtable.com/apptAi2tFe7I5lDvn/shrMx9j7mKJwnxd0J"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 font-ubuntu font-[700] text-[#152EA0] text-[15px] md:text-[18px] transition duration-500 ease-in-out transform bg-[#54FF7A] hover:bg-[#54FF7A] hover:text-white rounded-[4px] py-4 px-4 md:px-8 w-[50%] md:w-auto uppercase mt-10 self-center"
>
  Register Now
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4 self-center"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
    />
  </svg>
</a>
          </div>
        </div>
        <div className="hidden lg:block">
          <p className="font-syne font-[400] text-[50px] xl:text-[64px] text-white">
            23 Feb — Mar 1 2024
          </p>
          <p className="font-syne font-[400] text-[50px] xl:text-[64px] text-white">
            Denver, Colorado
          </p>

          <div className="flex gap-5 mt-5 xl:mt-10">
          <Link
              to="https://airtable.com/apptAi2tFe7I5lDvn/shrzCFRCa3n8Fk7fL"
              target="_blank"
            >
            <button className="text  font-ubuntu font-[400] text-white text-[12px] lg:text-[16px] xl:text-[18px] border-[1px] border-white transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-4 px-8   uppercase">
              Become a Speaker
            </button>
            </Link>


            <Link
              to="https://airtable.com/apptAi2tFe7I5lDvn/shrMx9j7mKJwnxd0J"
              target="_blank"
              className="self-center"
            >
            <button className="text self-center flex gap-2 font-ubuntu font-[700] text-[#152EA0] text-[12px] lg:text-[16px] xl:text-[18px]  transition duration-500 ease-in-out transform  bg-[#54FF7A] hover:text-white   rounded-[4px] py-4 px-8 uppercase">
              REGISTER NOW
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4  h-4  self-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
