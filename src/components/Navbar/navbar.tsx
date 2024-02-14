import React, { useState } from "react"; import Logo
from "../../assets/svg/logo.svg"; import { HiMenuAlt3 }
from "react-icons/hi"; import { Link } from "react-router-dom";

export default function Navbar() { const [isOpen, setIsOpen] = useState
(false);

  const toggleDropdown = () => { setIsOpen(!isOpen); };

  return ( <> <div className="grid grid-cols-2 lg:grid-cols-12 w-
  [90%] md:w-[97%] 2xl:w-[80%] mx-auto py-5"> <div
  className="lg:col-span-2"> <img src={Logo} alt="" /> </div> <div
  className="lg:col-span-10 hidden lg:flex justify-end gap-10 "> <Link
  to="/" className="mt-[9.4px] xl:mt-0 xl:self-center"> <button
  className="self-center font-syne font-[400] text-[#EFEBFF] text-
  [12px] xl:text-[18px] 2xl:text-[20px] uppercase"> Home </button>
  </Link>
          <div className="self-center"> <button onClick=
          {toggleDropdown} className="self-center flex gap-1 font-syne
          font-[400] text-[#EFEBFF] text-[12px] xl:text-
          [18px] 2xl:text-[20px] uppercase"
            > <Link to="/speakers" className="self-center"> SPEAKERS
              </Link> <svg xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" strokeWidth=
              {1.5} stroke="currentColor" className="w-4 xl:w-5 h-4
              xl:h-5 self-center"
              >{isOpen ? ( <path strokeLinecap="round"
                strokeLinejoin="round" d="M4.75 15.75l7.5-7.5 7.5 7.5"
                  /> ) : ( <path strokeLinecap="round"
                     strokeLinejoin="round" d="m19.5 8.25-7.5
                     7.5-7.5-7.5"
                  /> )} </svg> </button>{isOpen && ( <div
                     className="origin-top-right  absolute  mt-2 w-
                     [150px] rounded-md shadow-md bg-[#1833b0]"> <div
                     className="pb-1" role="menu"
                     aria-orientation="vertical"
                     aria-labelledby="options-menu"
                > <div className="relative p-3"> <input type="text"
                  className="font-syne font-[400] text-
                  [12px] text-white bg-[#152EA0] w-full outline-none
                  px-2 py-[2px]"
                    /> <svg xmlns="http://www.w3.org/2000/svg"
                       fill="none" viewBox="0 0 24 24" strokeWidth=
                       {1.5} stroke="currentColor" className="w-3 h-3
                       text-white absolute right-4 top-5"
                    > <path strokeLinecap="round" strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196
                      5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      /> </svg> </div> <div className="h-
                         [160px] overflow-y-scroll">
                    
                    <p onClick={() => setIsOpen
                    (false)} className="font-syne font-[400] text-
                    [15px] text-white text-center py-1 hover:bg-
                    [#152EA0] hover:text-[#54FF7A] border-b-
                    [#213fc7] border-b-[2px] border-l-
                    [2px] border-l-transparent hover:border-l-
                    [#54FF7A] cursor-pointer"
                    >{" "} 2021{" "} </p> <p onClick={() => setIsOpen
                      (false)} className="font-syne font-[400] text-
                      [15px] text-white text-center py-1 hover:bg-
                      [#152EA0] hover:text-[#54FF7A] border-b-
                      [#213fc7] border-b-[2px] border-l-
                      [2px] border-l-transparent hover:border-l-
                      [#54FF7A] cursor-pointer"
                    >{" "} 2022{" "} </p> <p onClick={() => setIsOpen
                      (false)} className="font-syne font-[400] text-
                      [15px] text-white text-center py-1 hover:bg-
                      [#152EA0] hover:text-[#54FF7A] border-b-
                      [#213fc7] border-b-[2px] border-l-
                      [2px] border-l-transparent hover:border-l-
                      [#54FF7A] cursor-pointer"
                    >{" "} 2023{" "} </p>

                  </div> </div> </div> )} </div> <Link to="/schedule"
                  className="self-center"> <button
                  className="self-center flex gap-1 font-syne font-
                  [400] text-[#EFEBFF] text-[12px] xl:text-
                  [18px] 2xl:text-[20px] uppercase"> SCHEDULE <svg
                  xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" strokeWidth=
                  {1.5} stroke="currentColor" className="w-4 xl:w-5 h-4
                  xl:h-5 self-center"
              > <path strokeLinecap="round" strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                /> </svg> </button> </Link>
          {/* <button className="self-center flex gap-1 font-syne font-
          [400] text-[#EFEBFF] text-[12px] xl:text-[18px] 2xl:text-
          [20px] uppercase"> SPONSORS <svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0
          24 24" strokeWidth={1.5} stroke="currentColor" className="w-4
          xl:w-5 h-4 xl:h-5 self-center"
            > <path strokeLinecap="round" strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
              /> </svg> </button> <button className="self-center flex
                 gap-1 font-syne font-[400] text-[#EFEBFF] text-
                 [12px] xl:text-[18px] 2xl:text-[20px] uppercase"> PAST
                 EVENTS <svg xmlns="http://www.w3.org/2000/svg"
                 fill="none" viewBox="0 0 24 24" strokeWidth=
                 {1.5} stroke="currentColor" className="w-4 xl:w-5 h-4
                 xl:h-5 self-center"
            > <path strokeLinecap="round" strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
              /> </svg> </button> */}

                {/*TODO TODO TODO uncomment when past events page is complete with content*/}

{/*<Link to="/event" className="self-center">
          <button className="self-center flex gap-1 font-syne font-[400] text-[#EFEBFF] text-[12px] xl:text-[18px] 2xl:text-[20px] uppercase">
            PAST EVENTS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 xl:w-5 h-4 xl:h-5 self-center"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          </Link>  */}    
      <Link
      to="https://scios.desci.community"
      target="_blank" className="self-center"
          > <button className=" text self-center  font-ubuntu font-
            [400] text-white text-[12px] xl:text-[18px] 2xl:text-
            [20px] border-[1px] border-white transition duration-500
            ease-in-out transform     rounded-[4px] py-3 px-4
            uppercase"> SciOS Workshops
              
            </button> </Link>

      <Link
      to="https://airtable.com/app0wgQCdFBk4sZ4j/pagd4da0BL96BQfRM/form"
      target="_blank" className="self-center"
          > <button className=" text self-center  font-ubuntu font-
            [400] text-white text-[12px] xl:text-[18px] 2xl:text-
            [20px] border-[1px] border-white transition duration-500
            ease-in-out transform     rounded-[4px] py-3 px-4
            uppercase"> hacker house

          <Link
          to="https://airtable.com/apptAi2tFe7I5lDvn/shrMx9j7mKJwnxd0J"
          target="_blank" className="self-center"
          > <button className="text self-center flex gap-2 font-ubuntu
            font-[400] text-[#54FF7A] text-[12px] xl:text-
            [18px] 2xl:text-[20px] border-[1px] border-
            [#54FF7A] transition duration-500 ease-in-out transform
            hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3
            px-4 uppercase"> REGISTER NOW <svg
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0
            24 24" strokeWidth={2.5} stroke="currentColor"
            className="w-4 xl:w-5 h-4 xl:h-5 self-center"
              > <path strokeLinecap="round" strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                /> </svg> </button> </Link> </div> <div className="block
                   lg:hidden self-center ml-auto"> <HiMenuAlt3
                   className="text-[30px] text-white " /> </div> </div>
                   </> ); }
