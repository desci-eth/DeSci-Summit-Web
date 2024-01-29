import Ex from "../../assets/png/ex.png";

export default function Explore() {
  return (
    <>
    <div className="w-[90%] md:w-[97%] 2xl:w-[97%] mx-auto md:border-t-[1px] border-[#4FA366]"></div>
      <div className="grid lg:grid-cols-12 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        <div className="hidden lg:block lg:col-span-4 border-r-[1px] border-[#4FA366]">
          <img src={Ex} alt="" />
        </div>
        <div className="lg:col-span-8 self-center py-10">
          <p className="font-syne font-[400] text-[#54FF7A] text-[35px] md:text-[40px] xl:text-[44px]">
            Explore our past events
          </p>
          <p className="font-syne font-[400] text-[16px] xl:text-[22px] text-white w-[90%] md:w-[80%] mt-3">
            The DeSci Summit, founded in 2021, is the oldest running community
            conference in decentralized science. Our past events have
            established future trends and the direction of science
            entrepreneurship, public goods funding, and open source initiatives.
            <br/><br/>
            From artificially intelligent researchers to alternative models for
            scientific funding and publishing, the future of technology and
            science can be glimpsed at the DeSci Summit
          </p>
          <button className="mt-8 text self-center flex gap-2 font-ubuntu font-[400] text-[#54FF7A] text-[12px] xl:text-[17px] border-[1px] border-[#54FF7A] transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase">
          View Past Events
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
