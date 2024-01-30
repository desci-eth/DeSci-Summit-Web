import VideoOne from "./videoone";
import VideoThree from "./videothree";
import VideoTwo from "./videotwo";

export default function Events() {
  return (
    <>
      <div className="lg:border-b-[1px] border-[#4FA366] py-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        <p className="hidden lg:block font-syne font-[400] text-[#54FF7A] text-[60px] ">
          Catch events from past years,
        </p>
        <p className="block lg:hidden font-syne font-[400] text-[#54FF7A] text-[30px] ">
          Recoded Videos
        </p>
        <div className="grid md:grid-cols-3 mt-5 lg:mt-10 gap-5">
          <div>
            <VideoOne />
          </div>

          <div>
            <VideoTwo />
          </div>

          <div>
            <VideoThree />
          </div>
        </div>
        <button
          id=""
          className="mt-10 text self-center flex justify-center gap-2 font-ubuntu font-[400] text-[#152EA0] text-[15px] xl:text-[18px]  transition duration-500 ease-in-out transform  bg-[#54FF7A] hover:text-white   rounded-[4px] py-4 px-2 md:px-6 w-[90%] md:w-auto mx-auto  uppercase"
        >
          See Archive of Past Years
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
        </button>
      </div>
    </>
  );
}
