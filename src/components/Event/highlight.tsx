import High from "../../assets/png/high.png"

export default function Highlight() {
  return (
    <>
    <div className="border-b-[1px] border-[#4FA366] py-5 md:py-10 lg:py-0">
      <div className="grid lg:grid-cols-2 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        <div className=" self-center">
          <p className="hidden lg:block font-syne font-[400] text-[#54FF7A] text-[30px] md:text-[40px] xl:text-[48px] leading-[60px] ">
            Highlights of <br /> 2023
          </p>
          <p className="block lg:hidden font-syne font-[400] text-[#54FF7A] text-[30px] md:text-[40px] xl:text-[48px] leading-[60px] ">
            Highlights of 2023
          </p>
          <p className="font-syne font-[400] text-[20px] xl:text-[25px] text-white mt-2 md:w-[80%]">
            Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
            commodo sed. Faucibus sit ornare aliquam enim proin nisi commodo
            tristique vel. Semper vestibulum vitae sed arcu eget eget.
          </p>
        </div>
        <div className="lg:p-5 lg:border-l-[1px] border-[#4FA366] mt-5 lg:mt-0">
            <img src={High} alt="" />
        </div>
      </div>
      </div>
    </>
  );
}
