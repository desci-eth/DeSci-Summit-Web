import Tech from "../../assets/png/purp.png";
import Card from "../../assets/png/Group 1627.png"
import Card2 from "../../assets/png/Group 1628.png"

export default function Distribute() {
  return (
    <>
      <div className="bg-[#132990] w-[100%] md:w-[97%] 2xl:w-[80%] mx-auto border-b-[1px] border-[#4FA366]">
        <div className="grid lg:grid-cols-12  lg:border-b-[1px] border-[#9D84FF] mt-10">
          <div className="lg:col-span-8 pt-[40px] md:pt-[55px] xl:pt-[80px] w-[90%] mx-auto">
            <p className=" font-syne font-[400] text-white text-[32px] md:text-[40px] xl:text-[72px] leading-[45px] md:leading-[50px] xl:leading-[80px] ">
              Distributed
              <br />
              coordination for
              <br />
              global science impact
            </p>
          </div>
          <div className=" lg:col-span-4 lg:border-l-[1px] border-[#9D84FF] relative">
            <img src={Tech} alt="" className="w-[90%] mx-auto lg:mx-0 md:w-[70%] h-full lg:h-[95%] lg:mt-[17px]" />
            <p className="text font-[700] text-[25px] md:text-[48px] lg:text-[30px] xl:text-[48px] text-white absolute top-[50%] md:top-[40%] lg:top-28 xl:top-44 left-14">
              DeSciDenver.2023
            </p>
          </div>
        </div>

        <div className="px-5 pt-10 pb-5 lg:pb-0">
          <p className="font-syne font-[400] text-[20px] xl:text-[25px] text-white">
            Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
            commodo sed. Faucibus sit ornare aliquam enim proin nisi commodo
            tristique vel. Semper vestibulum vitae sed arcu eget eget quis.
            Lacus eget vitae dignissim nunc vitae in lacus condimentum nunc.
          </p>

          <button className=" ml-auto text self-center hidden lg:flex gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase">
            See 2023
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

          <div className="md:flex gap-5 md:w-[25%] py-5">
            <img src={Card} alt="" />
            <img src={Card2} alt="" className="mt-5 lg:mt-0" />
          </div>

          <button className=" text self-center flex lg:hidden gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase">
            See 2023
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
