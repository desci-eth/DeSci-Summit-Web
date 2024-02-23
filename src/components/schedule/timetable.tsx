import Tt from "../../assets/svg/tt.svg";
import Tt2 from "../../assets/svg/tt2.svg";
import Tt3 from "../../assets/svg/tt3.svg";

export default function Timetable() {
  return (
    <>
      <div className="hidden md:grid grid-cols-3 border-b-[1px] border-[#54FF7A] w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        <div className="border-r-[1px] border-[#54FF7A] py-5">
          <p className="font-syne flex gap-1 font-[400] text-[#54FF7A] text-[22px] md:text-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8  cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            February 26, 2024{" "}
          </p>
          <img src={Tt3} alt="" className="mt-10" />

          <button className="mr-5 text self-center mt-10 ml-auto flex gap-2 font-ubuntu font-[400] text-[#54FF7A] text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-[#54FF7A] transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase">
            VIEW EVENT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 xl:w-5 h-4 xl:h-5 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="border-r-[1px] border-[#54FF7A] p-5">
          <p className="font-syne flex gap-1 font-[400] text-[#54FF7A] text-[22px] md:text-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8  cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            February 26, 2024{" "}
          </p>
          <img src={Tt2} alt="" className="mt-10" />

          <button className="mr-5 text self-center mt-10 ml-auto flex gap-2 font-ubuntu font-[400] text-[#54FF7A] text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-[#54FF7A] transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase">
            VIEW EVENT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 xl:w-5 h-4 xl:h-5 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        <div className="p-5">
          <p className="font-syne flex gap-1 font-[400] text-[#54FF7A] text-[22px] md:text-[24px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8  cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            February 26, 2024{" "}
          </p>
          <img src={Tt} alt="" className="mt-10" />

          <button className="mr-5 text self-center mt-10 ml-auto flex gap-2 font-ubuntu font-[400] text-[#54FF7A] text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-[#54FF7A] transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase">
            VIEW EVENT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 xl:w-5 h-4 xl:h-5 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
