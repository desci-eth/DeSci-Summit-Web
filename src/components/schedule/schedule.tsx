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
            February 26th, 2024{" "}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto  border-b-[1px] border-[#9D84FF] ">
        <div className="lg:col-span-8 py-5 md:py-10 lg:border-r-[1px] border-[#9D84FF] ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            3:00pm - 5:00pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            The Pillars of DeSci
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Decentralized Science is a new catch-phrase but the ideas have been around for much longer. Join us to explore the pillars that hold up DeSci, from community & culture, to novel funding mechanisms. We'll also explore how distributed infrastructure empowers new models for data access, compute resources, and open science publishing.
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
            3:00pm - 5:00pm
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
                BUIDLHUB
              </p>
              <p className="font-syne font-[400] text-[14px] md:text-[16px] text-white">
                National Western Complex <br />
                4655 N Humboldt St, Denver, CO 80216, United States
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
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jelani Clarke, Ph.D. <span className="text-white">DeSci World</span>
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
                  TBD <span className="text-white"></span>
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
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Lisa Wocken <span className="text-white">Token Engineering Commons</span>
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
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Levi Rybaolv <span className="text-white">CoopHive</span>
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
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Chris Hill <span className="text-white">DeSci Labs</span>
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
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Shady El Damaty, Ph.D. <span className="text-white">OpSci</span>
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
            February 27th, 2024{" "}
          </p>
        </div>
      </div>

     

      <div className="grid lg:grid-cols-12 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto  border-b-[1px] border-[#9D84FF] ">
        <div className="lg:col-span-8 py-5 md:py-10 lg:border-r-[1px] border-[#9D84FF] ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            2:00pm - 8:00pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            AuraNova
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            A community sourced event with lightning talks and deep dive panels hosted by AuraSci and Paramita ventures.
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
            2:000pm - 8:00pm
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
                AuraSci Nexus
              </p>
              <p className="font-syne font-[400] text-[14px] md:text-[16px] text-white">
                1261 Delaware St, Denver, CO 80204
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
              <p className="text font-[400] text-[30px] text-white">2:00pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Opening{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Eva <span className="text-white">AuraSci & Paramita</span>
                </p>
              </div>
            </div>            
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">2:12pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Lightning Talk: DeSci 101 & Landscape{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Erin Magennis <span className="text-white">MuseMatrix</span>
                </p>
              </div>
            </div>
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">2:35pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Panel: The Revolution of Open Access Publishing with Blockchain{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Dawinny <span className="text-white">ResearchHub</span><br />
                  Gary <span className="text-white">Arxtect</span><br />
                  Jonathan Kung <span className="text-white">Science Publishing DAO</span><br />
                  Taylor Hulsman <span className="text-white">Molecule</span><br />
                  Erik VanWinkle <span className="text-white">DeSci Labs</span><br />
                </p>
              </div>
            </div>
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:22pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Lightning Talk: Intro to Heto{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Prof. Jialin  <span className="text-white">Adavaita Labs</span>
                </p>
              </div>
            </div> 
          <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:45pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Lightning Talk: The Power of Decentralized Biobanking{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Caspar Barnes  <span className="text-white">Amino Chain</span>
                </p>
              </div>
            </div> 
         <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">4:07pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Panel: Transforming Scientific Collaboration Through Decentralized Platforms{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Josh  <span className="text-white">DeSci World</span><br />
                  Shady El Damaty, Ph.D.  <span className="text-white">OpSci, Holonym</span><br />
                  Shar  <span className="text-white">Qure</span><br />
                  Michael Zargham, Ph.D.  <span className="text-white">Blockscience, Metagov</span><br />
                  Jordan  <span className="text-white">SCINET</span><br />
                </p>
              </div>
            </div>
   <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">4:55pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Lightning Talk: Fund Women's Reproductive Health Research{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jenna  <span className="text-white">AthenaDAO</span>
                </p>
              </div>
            </div>  
   <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">5:17pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Lightning Talk: How to equip Space DAOs in DeSci and DePin with Open Science Marketplaces & Tools{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Manuel Olariu  <span className="text-white">CopernicSpace</span>
                </p>
              </div>
            </div>  
       <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">5:40pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Panel: Crowdfunding Scientific Research{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jenna  <span className="text-white">AthenaDAO</span><br />
                  Brian Magierski  <span className="text-white">CerebrumDAO</span><br />
                  Keith Comito  <span className="text-white">Lifespan.io</span><br />
                  Carlos A. Vera  <span className="text-white">Nerdlabs</span><br />
                </p>
              </div>
            </div>
    <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">6:45pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Visionary Session{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Danette  <span className="text-white">Conexuns</span><br />
                  Jelani  <span className="text-white">DeSci World</span><br />
                  Jonathon  <span className="text-white">The Science Commons Initiative</span><br />
                  Erin Magennis  <span className="text-white">MuseMatrix</span><br />
                  Chris Hill  <span className="text-white">DeSci Labs</span>
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
            March 1st, 2024{" "}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto  border-b-[1px] border-[#9D84FF] ">
      <div className="block md:hidden lg:col-span-8 py-5 md:py-10  ">
          <p className="block lg:hidden text font-[400] text-[35px] text-[#54FF7A]">
            8:30am - 5:00pm
          </p>

          <p className=" font-syne font-[400] text-white text-[42px] lg:text-[50px] xl:text-[64px]  leading-[50px]">
            Technology & Coordination Layers for Open Science
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Join us for our flagship event to hear from academics, researchers, and leading technologists that utilize and develop distributed technology to advance scientific research.
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
                University of Colorado
              </p>
              <p className="font-syne font-[400] text-[14px] md:text-[16px] text-white">
                Jake Jabs Event Center <br />
                1475 Lawrence St, Denver, CO 80202, United States
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
            Technology & Coordination Layers for Open Science
          </p>

          <p className="font-syne font-[500] text-[18px] md:text-[20px] lg:text-[20px]  xl:text-[25px] mt-5 text-white ">
            Join us for our flagship event to hear from academics, researchers, and leading technologists that utilize and develop distributed technology to advance scientific research.
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
              <p className="text font-[400] text-[30px] text-white">8:30am</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Breakfast{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Sponsored by AthenaDAO
                </p>
              </div>
            </div>
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">9:00am</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Welcome Reception{" "}
              </p>
 
            </div>

 


         <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">9:15am</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                DeSci Landscape{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Erin Magennis<span className="text-white">museMatrix</span>
                </p>
              </div>
            </div>


         <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">9:40am</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Coordinating the Decentralized Future{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Levi Rybalov <span className="text-white">CoopHive</span>
                </p>
              </div>
            </div>

         <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">10:05am</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Keynote: Building an AI Platform for Data Generating Agents{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Richard Blythman, Ph.D. <span className="text-white">Algovera</span>
                </p>
              </div>
            </div>

   <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">10:40am</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Re-imagining how we make sense of science with decentralized semantic nanopublishing{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Ronen Tamari, Ph.D. <span className="text-white">Astera Institute</span>
                </p>
              </div>
            </div>



<div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">11:05am</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                  Self-Infrastructuring Knowledge Networks
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Michael Zargham, Ph.D. <span className="text-white">Blockscience, Metagov</span>
                </p>
              </div>
            </div>


<div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">11:30am</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                  Open sourcing scientific research with lab discourse graphs: a case study from our lab
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Matthew Akamatsu, Ph.D. <span className="text-white">University Colorado</span>
                </p>
              </div>
            </div>


<div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">11:55am</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                  Keynote: Unistellar Citizen Science Network: Toward a  Decentralized Digital Telescope Network?

              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Franck Marchis, Ph.D. <span className="text-white">SETI Institute</span>
                </p>
              </div>
            </div>

        <div className="grid">
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">12:30pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Lunch{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Sponsored by BTQ
                </p>                
              </div>
            </div>
            </div>

<div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">1:00pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
              Bridging DeSci & Legacy Health Innovation

              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jason Cross <span className="text-white">Rymedi</span>
                </p>
              </div>
            </div>

<div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">1:25pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
              Panel: Data Consent

              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>

                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Dr. Gennaro D'Urso <span className="text-white"></span>
                </p>                

                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Caspar Barnes <span className="text-white">AminoChain</span>
                </p>           

                                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Ligia Kornowska <span className="text-white">Data Lake</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-white">
                  Moderated by
                </p>  

                                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jason Cross <span className="text-white">Rymedi</span>
                </p>
              </div>
            </div>


<div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">2:10pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
              Fireside Chat

              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jenna <span className="text-white">AthenaDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Joshua Johnson <span className="text-white">University of Colorado</span>
                </p>                
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Laura Minquini <span className="text-white">AthenaDAO</span>
                </p>                
              </div>
            </div>


<div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">2:35pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
              NumFOCUS, The Map of Open Source Science, and DeSci in the Wider Open Movement

              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Jonathan Starr <span className="text-white">NumFOCUS</span>
                </p>
              
              </div>
            </div>


        <div className="grid">
            <div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">2:55pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
                Coffee Break & Networking{" "}
              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Sponsored by Ceramic & Molecule
                </p>                
              </div>
            </div>
            </div>            

<div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:20pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
              Keynote

              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Erik Schultes <span className="text-white">GO FAIR</span>
                </p>
              
              </div>
            </div>


<div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">3:55pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
              Keynote: Findable, Accessible, Interoperable, Reproducible Science

              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speaker
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Phillip Koellinger, Ph.D. <span className="text-white">DeSci Labs</span>
                </p>
              
              </div>
            </div>



<div className="bg-[#132990] p-5">
              <p className="text font-[400] text-[30px] text-white">4:20pm</p>
              <p className="font-syne font-[500] text-[40px] text-white">
              Panel: Funding

              </p>
              <div className="mt-28">
                <p className="font-syne font-[400] text-[24px] text-white">
                  Speakers
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Stefan Adolf <span className="text-white">Molecule</span>
                </p>
              
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                  Brian Magierski <span className="text-white">CerebrumDAO</span>
                </p>
                <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                 Raymond Cheng, Ph.D. <span className="text-white">Kariba Labs</span>
                </p>

                    <p className="font-syne font-[400] text-[18px] text-[#54FF7A]">
                 Joshua Bates <span className="text-white">DeSci World</span>
                </p>

              </div>
            </div>




          </div>

        )}
      </div>

      {/*<div className="grid lg:grid-cols-12 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto  border-b-[1px] border-[#9D84FF] ">
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
      </div>*/}

      {/*<div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
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
      </div>*/}

      {/*<div className="w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto border-b-[1px] border-t-[0px] md:border-y-[1px] lg:border-[#9D84FF] pt-5 pb-10 md:py-10">
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
      </div>*/}
    </>
  );
}
