import { Link } from "react-router-dom";
import Triangle from "../../assets/svg/Triangle.svg";

export default function Register() {
  return (
    <>
      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto py-5 md:py-10 border-b-[1px] border-[#4FA366]">
        <p className="font-syne font-[400] text-[#54FF7A] text-[40px] md:text-[70px] lg:text-[100px]">
          Register
        </p>
        <p className="font-syne font-[400] text-[18px] md:text-[20px] lg:text-[25px] text-white md:w-[80%] lg:w-[40%]">
          You need to register for each of our partner venues in order to attend
          all the DeSci.Summit events.
        </p>

        <div className="md:flex justify-between">
          <div>
            <Link
              to="https://airtable.com/apptAi2tFe7I5lDvn/shrMx9j7mKJwnxd0J"
              target="_blank"
              className="self-center"
            >
              <a
                id="btn"
                href="https://airtable.com/apptAi2tFe7I5lDvn/shrMx9j7mKJwnxd0J"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 font-ubuntu font-[700] text-[#152EA0] text-[15px] md:text-[18px] transition duration-500 ease-in-out transform bg-[#54FF7A] hover:bg-[#54FF7A] hover:text-white rounded-[4px] py-4 px-4 md:px-8 w-[50%] md:w-auto uppercase mt-10 self-center"
              >
                REGISTER NOW
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 self-center"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </Link>
          </div>

          <div className="self-end mt-5 md:mt-0">
            <p className="flex gap-2 md:gap-3 text font-[400] text-white text-[20px] md:text-[24px]">
              DeSciSummit2024
              <img src={Triangle} alt="Triangle" className=" self-center" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
