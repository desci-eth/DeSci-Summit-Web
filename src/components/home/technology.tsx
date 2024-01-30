import Tech from "../../assets/png/tech.png";

export default function Technology() {
  return (
    <>
      <div className="grid lg:grid-cols-12 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto border-t-[1px] border-[#4FA366] mt-10">
        <div className="block lg:hidden ">
          <img src={Tech} alt="" />
        </div>

        <div className="lg:col-span-8 lg:border-r-[1px] border-[#4FA366] pb-10 pt-0 md:py-10">
          <p className="hidden md:block font-syne font-[400] text-[#54FF7A] text-[40px] xl:text-[48px] leading-[50px] xl:leading-[60px] ">
            Technology & Coordination
            <br />
            Layers for Open Science
            <br />
            Networks
          </p>

          <p className="block md:hidden font-syne font-[400] text-[#54FF7A] text-[32px] leading-[40px] ">
            Technology &
            <br />
            Coordination Layers
            <br />
            for Open Science
            <br />
            Networks
          </p>
          <p className="font-syne font-[400] text-[18px] text-white mt-5 w-[60%] xl:w-[50%]">
            The future of science will be open source, pluralistic, & impact
            driven through the adoption of decentralized web and artificial
            intelligence technology
          </p>
          <button className="mt-5 text self-center flex gap-2 font-ubuntu font-[400] text-[#54FF7A] text-[17px] border-[1px] border-[#54FF7A] transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase">
            See 2024 Schedule
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
        <div className="hidden lg:block lg:col-span-4 ">
          <img src={Tech} alt="" className="xl:w-[75%] mx-auto" />
        </div>
      </div>
    </>
  );
}
