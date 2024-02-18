import { Link } from "react-router-dom";
import Ficon from "../../assets/svg/ficon.svg";
import Ficon2 from "../../assets/svg/ficon2.svg";
import Ficon3 from "../../assets/svg/ficon3.svg";
import Ficon4 from "../../assets/svg/ficon4.svg";
import Ficon5 from "../../assets/svg/ficon5.svg";
import Ficon6 from "../../assets/svg/ficon6.svg";

export default function Footer() {
  return (
    <>
      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto py-5">
        <p className="font-syne font-[400] text-[14px] text-white">
          Get in touch
        </p>
        <div className="md:flex justify-between mt-5">
          <div className="flex justify-between md:justify-start gap-5 md:gap-10">
            <Link
              to="https://github.com/desci-eth"
              target="_blank"
              className="self-center"
            >
              <img src={Ficon} alt="" className="cursor-pointer" />
            </Link>
            <Link
              to="https://t.me/+f7T6hpOQI8cwOWRh"
              target="_blank"
              className="self-center"
            >
              <img src={Ficon2} alt="" className="cursor-pointer" />
            </Link>
            <Link
              to="https://twitter.com/descieth"
              target="_blank"
              className="self-center"
            >
              <img src={Ficon3} alt="" className="cursor-pointer" />
            </Link>
            <img src={Ficon4} alt="" className="cursor-pointer" />
            <img src={Ficon5} alt="" className="cursor-pointer" />
            <img src={Ficon6} alt="" className="cursor-pointer" />

            <a href="mailto:hello@opscientia.com" className="self-center">
              <p className="hidden lg:block self-center font-syne font-[400] text-[18px] text-white">
                hello@opscientia.com
              </p>
            </a>
          </div>

          <div className="self-center border-t-[1px] md:border-t-[0px] border-[#4FA366] mt-5 md:mt-0">
            <Link to="https://app.ens.domains/summit.desci.eth">
              <p className="font-syne font-[400] text-[18px] text-white mt-5 md:mt-0">
                DESCI SUMMIT © 2024
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
