import Countdown from "./countdown";
import Time from "../../assets/svg/TIME REMAINING.svg"

export default function Timeout() {
  return (
    <>
      <div className="pt-10 pb-20 border-b-[1px] border-[#4FA366]">
        <p className="text-center font-syne font-[400] text-[26px] md:text-[75px] lg:text-[84px] xl:text-[90px] text-[#54FF7A]">
          COMING SOON
        </p>
        <p className="font-syne font-[400] text-[15px] md:text-[18px] text-[#54FF7A] text-center">
          *all times are in the local time zone (MT)
        </p>
        <img src={Time} alt="" className="mt-10 mx-auto w-[90%] md:w-auto" />


        <Countdown />
      </div>
    </>
  );
}
