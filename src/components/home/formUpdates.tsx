import React, { useState } from "react";
import Forms from "../../assets/png/form.png";
import axios from "axios";
import { toastManage } from "../../toastManage";

export default function Form() {
  const [email, setEmail] = useState("");

  const handleSubscribe = async (e: any) => {
    e.preventDefault();

    await axios("https://api.canguard.de/user/mailjet", {
      method: "post",

      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name: "New Contact",
        email: email,
      },
    })
      .then(() => {
        toastManage.success("User Subscribed Successfully");
      })
      .catch(() => {
        toastManage.error("Sorry, unable to subscribe!");
      });
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-10 w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto border-b-[1px] border-[#4FA366] pb-10 lg:pb-0">
        <div className="lg:border-r-[1px] border-[#4FA366]  pt-10 ">
          <img src={Forms} alt="" />
        </div>
        <div className="self-center">
          <p className=" font-syne font-[400] text-[#54FF7A] text-[30px] md:text-[40px] xl:text-[48px] leading-[60px] ">
            Sign up for updates
          </p>
          <p className="font-syne font-[400] text-[20px] xl:text-[25px] text-white mt-2 md:w-[80%]">
            Continuing a tradition of permissionless coordination for
            decentralized science at the biggest web3 community conference.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="mt-5 md:mt-10 relative  md:w-[80%]"
          >
            <input
              required
              type="email"
              placeholder="Enter your email"
              className="font-[400] font-syne text-[#879BF4] placeholder-[#879BF4] text-[16px] rounded-md p-4 md:p-5 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-[5px] top-[5px] md:top-[5px] text font-[400] text-[#152EA0] text-[15px] bg-[#54FF7A] py-3 md:py-4 px-4 md:px-6 rounded-md"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
