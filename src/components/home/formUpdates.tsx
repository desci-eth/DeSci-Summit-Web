import React, { useState } from "react";
import Forms from "../../assets/png/form.png";
import Mailjet from "node-mailjet";
import { config } from "process";

export default function Form() {
  const [email, setEmail] = useState("");

  const MJ_APIKEY_PUBLIC: string = "ad3b0abbc8b181c14a4aa58dc8368ac1";
  const MJ_APIKEY_PRIVATE: string = "f134b585f1dabf0b4f4630b8a0c849a6";

  const handleSubscribe = async (e: any) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // const apiEndpoint = 'https://api.mailjet.com/v3/REST/contact';
    // const data = {
    //     "IsExcludedFromCampaigns": "true",
    //     "Name": "New Contact",
    //     "Email": email
    // };

    const mailjet = new Mailjet({
      apiKey: process.env.MJ_APIKEY_PUBLIC || MJ_APIKEY_PUBLIC,
      apiSecret: process.env.MJ_APIKEY_PRIVATE || MJ_APIKEY_PRIVATE,
      options:{
        headers:{
            "Access-Control-Allow-Origin":"*"
        },
        proxy: {
            protocol: 'https',
            host: '127.0.0.1',
            port: 8080,
            auth: {
              username: 'test',
              password: 'password'
        }
      }
      },
      
    });
    const request = mailjet.post("contact", { version: "v3" }).request({
      IsExcludedFromCampaigns: "true",
      Name: "New Contact",
      Email: email,
    });
    request
      .then((result: any) => {
        console.log(result.body);
      })
      .catch((err: any) => {
        console.log(err.statusCode);
      });

    // try {
    //     const response = await axios.post(apiEndpoint, data, {
    //         auth: {
    //             username: MJ_APIKEY_PUBLIC, // Replace with your Mailjet public API key
    //             password: MJ_APIKEY_PRIVATE
    //         },
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });

    //     console.log('Subscription successful:', response.data);
    //     // You can add more code here to handle successful subscription
    // } catch (error) {
    //     console.error('Error in subscription:', error);
    //     // You can add more code here to handle errors
    // }
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
