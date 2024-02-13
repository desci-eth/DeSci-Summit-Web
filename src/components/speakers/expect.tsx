import Eframe from "../../assets/png/eframe.png"

export default function Expect() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto border-b-[1px] border-[#6AD585] py-10 lg:py-0 ">
        <div className="lg:col-span-8 self-center ">
          
          <p className="font-syne font-[400]  text-[30px] md:text-[48px] text-[#54FF7A]">
            What can I expect?
          </p>
          <p className=" font-syne font-[400] text-[20px] lg:text-[20px]  xl:text-[30px]  text-white mt-4 md:w-[90%] 2xl:w-[80%]">
            You can expect to hear from researchers, web3 natives, DeSci
            advocates and skeptics, DAO engineers, and projects building tools
            intended to augment the workflow of researchers.
          </p>
          <p className=" font-syne font-[400] text-[20px] lg:text-[20px]  xl:text-[30px]  text-white mt-4 md:w-[90%] 2xl:w-[80%]">
            Themes range from
            <span className="underline ml-[4px]">onboarding scientists</span>,
            <span className="underline ml-[4px]"> the state of DeSci tooling</span>,
            <span className="underline ml-[4px]">
            the future of scientific societies
            </span>
            , <span className="underline ml-[4px]">empowering patient groups</span>,
            <span className="underline ml-[4px]">DeSci DAOs</span>, and so much more.
          </p>
          <p className=" font-syne font-[400] text-[20px] lg:text-[20px]  xl:text-[30px]  text-white mt-4 md:w-[90%] 2xl:w-[80%]">
            Join us from February 27th through March 2nd for a thrilling
            exploration of all things DeSci
          </p>
        </div>
        <div className="lg:border-l-[1px] border-[#6AD585] lg:col-span-4 mt-8 lg:mt-0">
        <img src={Eframe} alt="" />
        </div>
      </div>





    </>
  );
}
