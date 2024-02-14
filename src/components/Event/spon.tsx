import Card5 from "../../assets/png/Group 1635.png";
import Card6 from "../../assets/png/Group 1636.png";
import Card7 from "../../assets/png/Group 1637.png";
import Card8 from "../../assets/png/Group 1638.png";
import Card9 from "../../assets/png/Group 1639.png";
import Card10 from "../../assets/png/Group 1640.png";
import { Link } from "react-router-dom";

export default function Spon() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto border-b-[1px] border-[#6AD585] py-10 lg:py-0">
        <div className="lg:col-span-4 pt-10 xl:pt-14">
          <p className="hidden lg:block font-syne font-[400] text-[#54FF7A] text-[35px] lg:text-[50px] xl:text-[64px] text-center lg:text-start leading-[50px]">
            Sponsors of <br />
            2023
          </p>
          <p className="block lg:hidden font-syne font-[400] text-[#54FF7A] text-[35px] lg:text-[50px] xl:text-[64px] text-center lg:text-start leading-[50px]">
            Sponsors of 2023
          </p>
        </div>
        <div className="col-span-8 lg:pl-10 lg:py-10">
          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[24px]  xl:text-[30px] mt-2 text-white text-center lg:text-start">
            Partner with DeSci Denver by becoming an active sponsor of the
            events and support fellow scientists with consultation, funding or
            more.
          </p>

          <Link
            to="https://airtable.com/apptAi2tFe7I5lDvn/shryNlfnencagSmCO"
            target="_blank"
          >
            <button className="mt-10 text self-center flex gap-2 font-ubuntu font-[700] text-[#152EA0] text-[17px] md:text-[18px]  transition duration-500 ease-in-out transform  bg-[#54FF7A] hover:text-white   rounded-[4px] py-4 px-6 md:px-6 mx-auto lg:mx-0">
              REGISTER AS A SPONSOR
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

      <div className="py-10 md:py-20">
        <div className="grid md:grid-cols-3 gap-5 w-[90%] md:w-[80%] 2xl:w-[50%] mx-auto">
        <div>
            <Link to="https://www.smartcontractresearch.org/" target="_blank" >
            <img src={Card6} alt="" />
            </Link>
          </div>
          <div>
          <Link to="https://www.mfoundation.org/" target="_blank" >

            <img src={Card5} alt="" />
            </Link>
          </div>
          <div>
          <Link to="https://foresight.org/" target="_blank" >

            <img src={Card7} alt="" />
            </Link>
          </div>
        </div>
        {/* <div className="grid md:grid-cols-2 gap-5 w-[90%] md:w-[50%] 2xl:w-[34%] mx-auto mt-5">
          <div>
            <img src={Card} alt="" />
          </div>
          <div>
            <img src={Card7} alt="" />
          </div>
        </div> */}
        <div className="grid md:grid-cols-3 gap-5 w-[90%] md:w-[80%] 2xl:w-[50%] mx-auto mt-5">
        <div>
          <Link to="https://daoplanet.org/" target="_blank" >

            <img src={Card8} alt="" />
            </Link>
          </div>
          <div>
          <Link to="https://schellingpoint.gitcoin.co/" target="_blank" >

            <img src={Card9} alt="" />
            </Link>
          </div>
          <div>
          <Link to="http://ethdenver.com" target="_blank" >

            <img src={Card10} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
