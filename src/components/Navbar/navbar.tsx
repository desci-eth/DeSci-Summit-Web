import React, { Fragment, useState } from "react";
import Logo from "../../assets/svg/logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdowns = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <>
      <div
        className="grid grid-cols-2 lg:grid-cols-12 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto py-5 "
      >
        <div className="lg:col-span-2">
          {" "}
          <img src={Logo} alt="" />
        </div>
        <div className="lg:col-span-10 hidden lg:flex justify-end gap-10 ">
          <Link to="/" className="mt-[9.4px] xl:mt-0 xl:self-center">
            <button className="self-center font-syne font-[400] text-[#EFEBFF] lg:text-[14px] xl:text-[18px]  2xl:text-[20px] uppercase">
              Home
            </button>
          </Link>
          <div className="self-center">
            <button
              onClick={toggleDropdown}
              className="self-center flex gap-1 font-syne font-[400] text-[#EFEBFF] lg:text-[14px] xl:text-[18px]  2xl:text-[20px] uppercase"
            >
              <Link to="/speakers" className="self-center">
                SPEAKERS
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 xl:w-5 h-4 xl:h-5 self-center ">
                {/* {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.75 15.75l7.5-7.5 7.5 7.5"
                  />
                ) : ( */}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5
                     7.5-7.5-7.5"
                />
                {/* )} */}
              </svg>
            </button>
            {/* {isOpen && (
              <div
                className="origin-top-right  absolute  mt-2 w-
                     [150px] rounded-md shadow-md bg-[#1833b0]"
              >
                {" "}
                <div
                  className="pb-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {" "}
                  <div className="relative p-3">
                    {" "}
                    <input
                      type="text"
                      className="font-syne font-[400] text-
                  [12px] text-white bg-[#152EA0] w-full outline-none
                  px-2 py-[2px]"
                    />{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3
                       text-white absolute right-4 top-5"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196
                      5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div
                    className="h-
                         [160px] overflow-y-scroll"
                  >
                   <Link to="/speakers2021">
                    <p
                      onClick={() => setIsOpen(false)}
                      className="font-syne font-[400] text-
                    [15px] text-white text-center py-1 hover:bg-
                    [#152EA0] hover:text-[#54FF7A] border-b-
                    [#213fc7] border-b-[2px] border-l-
                    [2px] border-l-transparent hover:border-l-
                    [#54FF7A] cursor-pointer"
                    >
                      {" "}
                      2021{" "}
                    </p>{" "}
                    </Link>
                   <Link to="/speakers2022">

                    <p
                      onClick={() => setIsOpen(false)}
                      className="font-syne font-[400] text-
                      [15px] text-white text-center py-1 hover:bg-
                      [#152EA0] hover:text-[#54FF7A] border-b-
                      [#213fc7] border-b-[2px] border-l-
                      [2px] border-l-transparent hover:border-l-
                      [#54FF7A] cursor-pointer"
                    >
                      {" "}
                      2022{" "}
                    </p>{" "}
                    </Link>
                   <Link to="/speakers2023">

                    <p
                      onClick={() => setIsOpen(false)}
                      className="font-syne font-[400] text-
                      [15px] text-white text-center py-1 hover:bg-
                      [#152EA0] hover:text-[#54FF7A] border-b-
                      [#213fc7] border-b-[2px] border-l-
                      [2px] border-l-transparent hover:border-l-
                      [#54FF7A] cursor-pointer"
                    >
                      {" "}
                      2023{" "}
                    </p>
                    </Link>
                  </div>{" "}
                </div>{" "}
              </div>
            )} */}
          </div>
          <div className="self-center">
            <button
              onClick={toggleDropdowns}
              className="self-center flex gap-1 font-syne font-
                  [400] text-[#EFEBFF] lg:text-[14px] xl:text-[18px] 
                   2xl:text-[20px] uppercase"
            >
              <Link to="/schedule" className="self-center">
                SCHEDULE
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 xl:w-5 h-4
                  xl:h-5 self-center"
              >
                {isOpen2 ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.75 15.75l7.5-7.5 7.5 7.5"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5
                     7.5-7.5-7.5"
                  />
                )}
              </svg>
            </button>

            {isOpen2 && (
              <div
                className="origin-top-right  absolute  mt-2 w-
                     [150px] rounded-md shadow-md bg-[#1833b0]"
              >
                {" "}
                <div
                  className="pb-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  {" "}
                  <div className="relative p-3">
                    {" "}
                    <input
                      type="text"
                      className="font-syne font-[400] text-
                  [12px] text-white bg-[#152EA0] w-full outline-none
                  px-2 py-[2px]"
                    />{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3
                       text-white absolute right-4 top-5"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196
                      5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />{" "}
                    </svg>{" "}
                  </div>{" "}
                  <div
                    className="h-
                         [160px] overflow-y-scroll"
                  >
                    <p
                      onClick={() => setIsOpen2(false)}
                      className="font-syne font-[400] text-
                    [15px] text-white text-center py-1 hover:bg-
                    [#152EA0] hover:text-[#54FF7A] border-b-
                    [#213fc7] border-b-[2px] border-l-
                    [2px] border-l-transparent hover:border-l-
                    [#54FF7A] cursor-pointer"
                    >
                      {" "}
                      2021{" "}
                    </p>{" "}
                    <p
                      onClick={() => setIsOpen2(false)}
                      className="font-syne font-[400] text-
                      [15px] text-white text-center py-1 hover:bg-
                      [#152EA0] hover:text-[#54FF7A] border-b-
                      [#213fc7] border-b-[2px] border-l-
                      [2px] border-l-transparent hover:border-l-
                      [#54FF7A] cursor-pointer"
                    >
                      {" "}
                      2022{" "}
                    </p>{" "}
                    <p
                      onClick={() => setIsOpen2(false)}
                      className="font-syne font-[400] text-
                      [15px] text-white text-center py-1 hover:bg-
                      [#152EA0] hover:text-[#54FF7A] border-b-
                      [#213fc7] border-b-[2px] border-l-
                      [2px] border-l-transparent hover:border-l-
                      [#54FF7A] cursor-pointer"
                    >
                      {" "}
                      2023{" "}
                    </p>
                  </div>{" "}
                </div>{" "}
              </div>
            )}
          </div>
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
            target="_blank"
            className="self-center"
          >
            <button
              className=" text self-center  font-ubuntu font-
            [400] text-white text-[14px] xl:text-[18px] 2xl:text-
            [20px] border-[1px] border-white transition duration-500
            ease-in-out transform     rounded-[4px] py-3 px-4
            uppercase"
            >
              SciOS Workshops
            </button>
          </Link>
          <Link
            to="https://airtable.com/app0wgQCdFBk4sZ4j/pagd4da0BL96BQfRM/form"
            target="_blank"
            className="self-center"
          >
            <button
              className=" text self-center  font-ubuntu font-
            [400] text-white text-[14px] xl:text-[18px] 2xl:text-
            [20px] border-[1px] border-white transition duration-500
            ease-in-out transform     rounded-[4px] py-3 px-4
            uppercase"
            >
              hacker house
            </button>
          </Link>
          <Link
            to="https://airtable.com/apptAi2tFe7I5lDvn/shrMx9j7mKJwnxd0J"
            target="_blank"
            className="self-center"
          >
            <button
              className="text self-center flex gap-2 font-ubuntu
            font-[400] text-[#54FF7A] lg:text-[14px] xl:text-[18px] 
             2xl:text-[20px] border-[1px] border-
            [#54FF7A] transition duration-500 ease-in-out transform
            hover:bg-[#54FF7A] hover:text-white   rounded-[4px] py-3
            px-4 uppercase"
            >
              REGISTER NOW
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0
            24 24"
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
          </Link>
        </div>
        <div
          onClick={() => setOpen(true)}
          className="block lg:hidden self-center ml-auto relative z-10">
          <HiMenuAlt3 className="text-[30px] text-white " />
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative " onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-hidden  z-10">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-0">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-full">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-4 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        {/* <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button> */}
                      </div>
                    </Transition.Child>
                    <div className="flex w-[100%] ml-auto h-full flex-col overflow-y-scroll  bg-[#152ea0] shadow-xl ">
                      <div className=" container grid grid-cols-1 py-1 ">
                        <div className="flex justify-between px-5 border-b-[1px] border-white py-2 ">
                          <img src={Logo} alt="" />

                          <div className="w-[50%] px-3"></div>
                          <button
                            type="button"
                            className=" rounded-md text-white  focus:outline-none"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                          </button>
                        </div>

                        <div className=" mx-auto text-center">
                          <Link to="/" className="xl:self-center">
                            <button
                              className="self-center font-syne font-[400] text-[#EFEBFF] text-
  [12px] xl:text-[18px] 2xl:text-[20px] uppercase mt-10"
                            >
                              Home
                            </button>
                          </Link>
                          <div className="self-center mt-5">
                            <button
                              onClick={toggleDropdown}
                              className="self-center flex mx-auto gap-1 font-syne
          font-[400] text-[#EFEBFF] text-[15px] xl:text-
          [18px] 2xl:text-[20px] uppercase"
                            >
                              <Link to="/speakers" className="self-center">
                                SPEAKERS
                              </Link>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 xl:w-5 h-4
              xl:h-5 self-center"
                              >
                                {isOpen ? (
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.75 15.75l7.5-7.5 7.5 7.5"
                                  />
                                ) : (
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m19.5 8.25-7.5
                     7.5-7.5-7.5"
                                  />
                                )}
                              </svg>
                            </button>
                            {isOpen && (
                              <div
                                className="origin-top-right  absolute  mt-2 w-
                     [150px] rounded-md shadow-md bg-[#1833b0]"
                              >
                                {" "}
                                <div
                                  className="pb-1"
                                  role="menu"
                                  aria-orientation="vertical"
                                  aria-labelledby="options-menu"
                                >
                                  {" "}
                                  <div className="relative p-3">
                                    {" "}
                                    <input
                                      type="text"
                                      className="font-syne font-[400] text-
                  [12px] text-white bg-[#152EA0] w-full outline-none
                  px-2 py-[2px]"
                                    />{" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth={1.5}
                                      stroke="currentColor"
                                      className="w-3 h-3
                       text-white absolute right-4 top-5"
                                    >
                                      {" "}
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196
                      5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                      />{" "}
                                    </svg>{" "}
                                  </div>{" "}
                                  <div
                                    className="h-
                         [160px] overflow-y-scroll"
                                  >
                                    <p
                                      onClick={() => setIsOpen(false)}
                                      className="font-syne font-[400] text-
                    [15px] text-white text-center py-1 hover:bg-
                    [#152EA0] hover:text-[#54FF7A] border-b-
                    [#213fc7] border-b-[2px] border-l-
                    [2px] border-l-transparent hover:border-l-
                    [#54FF7A] cursor-pointer"
                                    >
                                      {" "}
                                      2021{" "}
                                    </p>{" "}
                                    <p
                                      onClick={() => setIsOpen(false)}
                                      className="font-syne font-[400] text-
                      [15px] text-white text-center py-1 hover:bg-
                      [#152EA0] hover:text-[#54FF7A] border-b-
                      [#213fc7] border-b-[2px] border-l-
                      [2px] border-l-transparent hover:border-l-
                      [#54FF7A] cursor-pointer"
                                    >
                                      {" "}
                                      2022{" "}
                                    </p>{" "}
                                    <p
                                      onClick={() => setIsOpen(false)}
                                      className="font-syne font-[400] text-
                      [15px] text-white text-center py-1 hover:bg-
                      [#152EA0] hover:text-[#54FF7A] border-b-
                      [#213fc7] border-b-[2px] border-l-
                      [2px] border-l-transparent hover:border-l-
                      [#54FF7A] cursor-pointer"
                                    >
                                      {" "}
                                      2023{" "}
                                    </p>
                                  </div>{" "}
                                </div>{" "}
                              </div>
                            )}
                          </div>
                          <Link to="/schedule" className="self-center ">
                            <button
                              className="self-center flex gap-1 font-syne font-
                  [400] text-[#EFEBFF] text-[15px] xl:text-
                  [18px] 2xl:text-[20px] uppercase mt-5 mx-auto"
                            >
                              SCHEDULE
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 xl:w-5 h-4
                  xl:h-5 self-center"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                              </svg>
                            </button>
                          </Link>
                          <Link
                            to="https://scios.desci.community"
                            target="_blank"
                            className="self-center mt-5"
                          >
                            <button
                              className=" text self-center  font-ubuntu font-
            [400] text-white text-[15px] xl:text-[18px] 2xl:text-
            [20px] border-[1px] border-white transition duration-500
            ease-in-out transform     rounded-[4px] py-3 px-4
            uppercase mt-5"
                            >
                              SciOS Workshops
                            </button>
                          </Link>
                          <br />
                          <Link
                            to="https://airtable.com/app0wgQCdFBk4sZ4j/pagd4da0BL96BQfRM/form"
                            target="_blank"
                            className="self-center mt-5"
                          >
                            <button
                              className=" text self-center  font-ubuntu font-
            [400] text-white text-[15px] xl:text-[18px] 2xl:text-
            [20px] border-[1px] border-white transition duration-500
            ease-in-out transform  mt-5   rounded-[4px] py-3 px-6
            uppercase"
                            >
                              hacker house
                            </button>
                          </Link>
                          <br />
                          <Link
                            to="https://airtable.com/apptAi2tFe7I5lDvn/shrMx9j7mKJwnxd0J"
                            target="_blank"
                            className="self-center mt-5"
                          >
                            <button
                              className="text self-center flex gap-2 font-ubuntu
            font-[400] text-[#54FF7A] text-[15px] xl:text-
            [18px] 2xl:text-[20px] border-[1px] border-
            [#54FF7A] transition duration-500 ease-in-out transform
            hover:bg-[#54FF7A] hover:text-white mt-5  rounded-[4px] py-3
            px-4 uppercase"
                            >
                              REGISTER NOW
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0
            24 24"
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
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
