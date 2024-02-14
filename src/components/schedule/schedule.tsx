import React, { useState } from "react";

export default function Schedule() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };

  const toggleDropdown6 = () => {
    setIsOpen6(!isOpen6);
  };

  const toggleDropdown7 = () => {
    setIsOpen7(!isOpen7);
  };

  return (
    <>
      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto border-b-[1px] border-t-[0px] md:border-b-[1px] lg:border-[#9D84FF] pt-5 pb-10 md:py-10">
        <button className="font-syne font-[400] text-[#152EA0] text-[60px] md:text-[70px] bg-[#54FF7A] py-1 px-10 rounded-t-[4px]">
          Day 1
        </button>
        <div className="flex justify-center py-2 gap-1 bg-white rounded-r-[4px] rounded-bl-[4px] w-[90%] md:w-[40%] xl:w-[25%] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-[#152EA0] self-center cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          <p className="text font-[400] text-[#152EA0] text-[22px] md:text-[28px]">
            February 23, 2024{" "}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto  border-b-[1px] border-[#9D84FF] ">
        <div className="lg:col-span-8 py-5 md:py-10 lg:border-r-[1px] border-[#9D84FF] ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            9:50am - 12:05pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            DAOs in DeSci
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
            commodo sed. Faucibus sit ornare aliquam enim proin nisi commodo
            tristique vel. Semper vestibulum vitae sed arcu eget eget quis.
            Lacus eget vitae dignissim nunc vitae in lacus condimentum nunc.
          </p>

          <button
            onClick={toggleDropdown}
            className=" mt-5 text self-center hidden lg:flex  gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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

        <div className="lg:col-span-4 pb-5 lg:pb-0 lg:pt-5 ">
          <p className="hidden lg:block text font-[400] text-[35px] text-[#54FF7A]">
            9:50am - 12:05pm
          </p>

          <div className="bg-[#2c43a9] p-5 w-[100%] xl:w-[70%] flex gap-2 lg:mt-10 rounded-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div>
              <p className="flex gap-2 font-syne font-[400] text-[32px] text-white">
                DAODenver
              </p>
              <p className="font-syne font-[400] text-[14px] md:text-[16px] text-white">
                The Catalyst Event Center <br />
                1881 35th Street, Denver, CO 80216
              </p>
            </div>
          </div>
          <button
            onClick={toggleDropdown}
            className="mt-5 text self-center flex lg:hidden  ml-auto gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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
      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        {isOpen && (
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:00pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Opening{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jelani Clarke <span className="text-white">DeSCi World</span>
                </p>
              </div>
            </div>
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:15pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Funding & Incentives{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>

            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:40pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Ownership & Communities{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>

            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">4:05pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Data Management & Compute{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>

            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">4:30pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Publishing & Access{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>

            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">4:55pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Closing{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto border-b-[1px] border-t-[0px] md:border-y-[1px] lg:border-[#9D84FF] pt-5 pb-10 md:py-10">
        <button className="font-syne font-[400] text-[#152EA0] text-[60px] md:text-[70px] bg-[#54FF7A] py-1 px-10 rounded-t-[4px]">
          Day 2
        </button>
        <div className="flex justify-center py-2 gap-1 bg-white rounded-r-[4px] rounded-bl-[4px] w-[90%] md:w-[40%] xl:w-[25%] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-[#152EA0] self-center cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          <p className="text font-[400] text-[#152EA0] text-[22px] md:text-[28px]">
            February 24, 2024{" "}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto  border-b-[1px] border-[#9D84FF] ">
     
      <div className="block md:hidden lg:col-span-8 py-5 md:py-10  ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            9:50am - 12:05pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            DAOs in DeSci
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
            commodo sed. Faucibus sit ornare aliquam enim proin nisi commodo
            tristique vel. Semper vestibulum vitae sed arcu eget eget quis.
            Lacus eget vitae dignissim nunc vitae in lacus condimentum nunc.
          </p>

          <button
            onClick={toggleDropdown2}
            className=" mt-5 text self-center hidden lg:flex  gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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
        <div className="lg:col-span-4 pb-5 lg:pb-0 lg:pt-5 lg:border-r-[1px] border-[#9D84FF]">
          <p className="hidden lg:block text font-[400] text-[35px] text-[#54FF7A]">
            9:50am - 12:05pm
          </p>

          <div className="bg-[#2c43a9] p-5 w-[100%] xl:w-[70%] flex gap-2 lg:mt-10 rounded-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div>
              <p className="flex gap-2 font-syne font-[400] text-[32px] text-white">
                DAODenver
              </p>
              <p className="font-syne font-[400] text-[14px] md:text-[16px] text-white">
                The Catalyst Event Center <br />
                1881 35th Street, Denver, CO 80216
              </p>
            </div>
          </div>
          <button
            onClick={toggleDropdown2}
            className="mt-5 text self-center flex lg:hidden  ml-auto gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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

        
        <div className="hidden md:block lg:col-span-8 py-5 md:py-10  ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            9:50am - 12:05pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            DAOs in DeSci
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
            commodo sed. Faucibus sit ornare aliquam enim proin nisi commodo
            tristique vel. Semper vestibulum vitae sed arcu eget eget quis.
            Lacus eget vitae dignissim nunc vitae in lacus condimentum nunc.
          </p>

          <button
            onClick={toggleDropdown2}
            className=" mt-5 text self-center hidden lg:flex  gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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

      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        {isOpen2 && (
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:00pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Opening{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jelani Clarke <span className="text-white">DeSCi World</span>
                </p>
              </div>
            </div>
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:15pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Funding & Incentives{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-12 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto  border-b-[1px] border-[#9D84FF] ">
        <div className="lg:col-span-8 py-5 md:py-10 lg:border-r-[1px] border-[#9D84FF] ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            12:30am - 15:05pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            DAOs in DeSci
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
            commodo sed. Faucibus sit ornare aliquam enim proin nisi commodo
            tristique vel. Semper vestibulum vitae sed arcu eget eget quis.
            Lacus eget vitae dignissim nunc vitae in lacus condimentum nunc.
          </p>

          <button
            onClick={toggleDropdown4}
            className=" mt-5 text self-center hidden lg:flex  gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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

        <div className="lg:col-span-4 pb-5 lg:pb-0 lg:pt-5 ">
          <p className="hidden lg:block text font-[400] text-[35px] text-[#54FF7A]">
            12:30am - 15:05pm
          </p>

          <div className="bg-[#2c43a9] p-5 w-[100%] xl:w-[70%] flex gap-2 lg:mt-10 rounded-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div>
              <p className="flex gap-2 font-syne font-[400] text-[32px] text-white">
                DAODenver
              </p>
              <p className="font-syne font-[400] text-[14px] md:text-[16px] text-white">
                The Catalyst Event Center <br />
                1881 35th Street, Denver, CO 80216
              </p>
            </div>
          </div>
          <button
          onClick={toggleDropdown4}
          className="mt-5 text self-center flex lg:hidden  ml-auto gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase">
            SHOW DETAILS
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
      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        {isOpen4 && (
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:00pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Opening{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jelani Clarke <span className="text-white">DeSCi World</span>
                </p>
              </div>
            </div>
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:15pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Funding & Incentives{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-12 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto  border-b-[1px] border-[#9D84FF] ">
      <div className="block md:hidden lg:col-span-8 py-5 md:py-10  ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            15:25am - 18:00pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            DAOs in DeSci
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
            commodo sed. Faucibus sit ornare aliquam enim proin nisi commodo
            tristique vel. Semper vestibulum vitae sed arcu eget eget quis.
            Lacus eget vitae dignissim nunc vitae in lacus condimentum nunc.
          </p>

          <button
            onClick={toggleDropdown3}
            className=" mt-5 text self-center hidden lg:flex  gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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
        <div className="lg:col-span-4 pb-5 lg:pb-0 lg:pt-5 lg:border-r-[1px] border-[#9D84FF]">
          <p className="hidden lg:block text font-[400] text-[35px] text-[#54FF7A]">
            15:25am - 18:00pm
          </p>

          <div className="bg-[#2c43a9] p-5 w-[100%] xl:w-[70%] flex gap-2 lg:mt-10 rounded-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div>
              <p className="flex gap-2 font-syne font-[400] text-[32px] text-white">
                DAODenver
              </p>
              <p className="font-syne font-[400] text-[14px] md:text-[16px] text-white">
                The Catalyst Event Center <br />
                1881 35th Street, Denver, CO 80216
              </p>
            </div>
          </div>
          <button
            onClick={toggleDropdown3}
            className="mt-5 text self-center flex lg:hidden  ml-auto gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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
        <div className="hidden md:block lg:col-span-8 py-5 md:py-10  ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            15:25am - 18:00pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            DAOs in DeSci
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
            commodo sed. Faucibus sit ornare aliquam enim proin nisi commodo
            tristique vel. Semper vestibulum vitae sed arcu eget eget quis.
            Lacus eget vitae dignissim nunc vitae in lacus condimentum nunc.
          </p>

          <button
            onClick={toggleDropdown3}
            className=" mt-5 text self-center hidden lg:flex  gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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

      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        {isOpen3 && (
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:00pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Opening{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jelani Clarke <span className="text-white">DeSCi World</span>
                </p>
              </div>
            </div>
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:15pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Funding & Incentives{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto border-b-[1px] border-t-[0px] md:border-y-[1px] lg:border-[#9D84FF] pt-5 pb-10 md:py-10">
        <button className="font-syne font-[400] text-[#152EA0] text-[60px] md:text-[70px] bg-[#54FF7A] py-1 px-10 rounded-t-[4px]">
          Day 3
        </button>
        <div className="flex justify-center py-2 gap-1 bg-white rounded-r-[4px] rounded-bl-[4px] w-[90%] md:w-[40%] xl:w-[25%] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-[#152EA0] self-center cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          <p className="text font-[400] text-[#152EA0] text-[22px] md:text-[28px]">
            February 25, 2024{" "}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto  border-b-[1px] border-[#9D84FF] ">
      <div className="block md:hidden lg:col-span-8 py-5 md:py-10  ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            9:50am - 12:05pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            DAOs in DeSci
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
            commodo sed. Faucibus sit ornare aliquam enim proin nisi commodo
            tristique vel. Semper vestibulum vitae sed arcu eget eget quis.
            Lacus eget vitae dignissim nunc vitae in lacus condimentum nunc.
          </p>

          <button
            onClick={toggleDropdown5}
            className=" mt-5 text self-center hidden lg:flex  gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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
   
        <div className="lg:col-span-4 pb-5 lg:pb-0 lg:pt-5 lg:border-r-[1px] border-[#9D84FF]">
          <p className="hidden lg:block text font-[400] text-[35px] text-[#54FF7A]">
            9:50am - 12:05pm
          </p>

          <div className="bg-[#2c43a9] p-5 w-[100%] xl:w-[70%] flex gap-2 lg:mt-10 rounded-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div>
              <p className="flex gap-2 font-syne font-[400] text-[32px] text-white">
                DAODenver
              </p>
              <p className="font-syne font-[400] text-[14px] md:text-[16px] text-white">
                The Catalyst Event Center <br />
                1881 35th Street, Denver, CO 80216
              </p>
            </div>
          </div>
          <button
            onClick={toggleDropdown5}
            className="mt-5 text self-center flex lg:hidden  ml-auto gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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
        <div className="hidden md:block lg:col-span-8 py-5 md:py-10  ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            9:50am - 12:05pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            DAOs in DeSci
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
            commodo sed. Faucibus sit ornare aliquam enim proin nisi commodo
            tristique vel. Semper vestibulum vitae sed arcu eget eget quis.
            Lacus eget vitae dignissim nunc vitae in lacus condimentum nunc.
          </p>

          <button
            onClick={toggleDropdown5}
            className=" mt-5 text self-center hidden lg:flex  gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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

      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        {isOpen5 && (
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:00pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Opening{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jelani Clarke <span className="text-white">DeSCi World</span>
                </p>
              </div>
            </div>
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:15pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Funding & Incentives{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid lg:grid-cols-12 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto  border-b-[1px] border-[#9D84FF] ">
        <div className="lg:col-span-8 py-5 md:py-10 lg:border-r-[1px] border-[#9D84FF] ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            12:30am - 15:05pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            DAOs in DeSci
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
            commodo sed. Faucibus sit ornare aliquam enim proin nisi commodo
            tristique vel. Semper vestibulum vitae sed arcu eget eget quis.
            Lacus eget vitae dignissim nunc vitae in lacus condimentum nunc.
          </p>

          <button
            onClick={toggleDropdown6}
            className=" mt-5 text self-center hidden lg:flex  gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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

        <div className="lg:col-span-4 pb-5 lg:pb-0 lg:pt-5 ">
          <p className="hidden lg:block text font-[400] text-[35px] text-[#54FF7A]">
            12:30am - 15:05pm
          </p>

          <div className="bg-[#2c43a9] p-5 w-[100%] xl:w-[70%] flex gap-2 lg:mt-10 rounded-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div>
              <p className="flex gap-2 font-syne font-[400] text-[32px] text-white">
                DAODenver
              </p>
              <p className="font-syne font-[400] text-[14px] md:text-[16px] text-white">
                The Catalyst Event Center <br />
                1881 35th Street, Denver, CO 80216
              </p>
            </div>
          </div>
          <button
          onClick={toggleDropdown6}
          className="mt-5 text self-center flex lg:hidden  ml-auto gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase">
            SHOW DETAILS
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

      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        {isOpen6 && (
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:00pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Opening{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jelani Clarke <span className="text-white">DeSCi World</span>
                </p>
              </div>
            </div>
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:15pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Funding & Incentives{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto border-b-[1px] border-t-[0px] md:border-y-[1px] lg:border-[#9D84FF] pt-5 pb-10 md:py-10">
        <button className="font-syne font-[400] text-[#152EA0] text-[60px] md:text-[70px] bg-[#54FF7A] py-1 px-10 rounded-t-[4px]">
          Day 4
        </button>
        <div className="flex justify-center py-2 gap-1 bg-white rounded-r-[4px] rounded-bl-[4px] w-[90%] md:w-[40%] xl:w-[25%] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-[#152EA0] self-center cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          <p className="text font-[400] text-[#152EA0] text-[22px] md:text-[28px]">
            February 26, 2024{" "}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto  ">
        <div className="lg:col-span-8 py-5 md:py-10 lg:border-r-[1px] border-[#9D84FF] ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            9:50am - 12:05pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            DAOs in DeSci
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Lorem ipsum dolor sit amet consectetur. Nunc arcu turpis in nunc
            commodo sed. Faucibus sit ornare aliquam enim proin nisi commodo
            tristique vel. Semper vestibulum vitae sed arcu eget eget quis.
            Lacus eget vitae dignissim nunc vitae in lacus condimentum nunc.
          </p>

          <button
            onClick={toggleDropdown7}
            className=" mt-5 text self-center hidden lg:flex  gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase"
          >
            SHOW DETAILS
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

        <div className="lg:col-span-4 pb-5 lg:pb-0 lg:pt-5 ">
          <p className="hidden lg:block text font-[400] text-[35px] text-[#54FF7A]">
            9:50am - 12:05pm
          </p>

          <div className="bg-[#2c43a9] p-5 w-[100%] xl:w-[70%] flex gap-2 lg:mt-10 rounded-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mt-3 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div>
              <p className="flex gap-2 font-syne font-[400] text-[32px] text-white">
                DAODenver
              </p>
              <p className="font-syne font-[400] text-[14px] md:text-[16px] text-white">
                The Catalyst Event Center <br />
                1881 35th Street, Denver, CO 80216
              </p>
            </div>
          </div>
          <button
            onClick={toggleDropdown7}
          
          className="mt-5 text self-center flex lg:hidden  ml-auto gap-2 font-ubuntu font-[400] text-white text-[12px] xl:text-[18px] 2xl:text-[20px] border-[1px] border-whites transition duration-500 ease-in-out transform  hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3 px-4 uppercase">
            SHOW DETAILS
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

      <div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        {isOpen7 && (
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:00pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Opening{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jelani Clarke <span className="text-white">DeSCi World</span>
                </p>
              </div>
            </div>
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:15pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Funding & Incentives{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>

            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:15pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Funding & Incentives{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>

            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:15pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Funding & Incentives{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>

            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:15pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Funding & Incentives{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Loretta Dynamite <span className="text-white">SpaceDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Clay Replica <span className="text-white">CookieDAO</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
