import Person from "../../assets/png/person.png";
import Person2 from "../../assets/png/person2.png";
import Person3 from "../../assets/png/person3.png";
import Person4 from "../../assets/png/person4.png";
import Mob from "../../assets/png/mob.png";
import Mob2 from "../../assets/png/mob2.png";
import Mob3 from "../../assets/png/mob3.png";
import Mob4 from "../../assets/png/mob4.png";
import Social from "../../assets/svg/social.svg";
import Social2 from "../../assets/svg/social2.svg";
import Social3 from "../../assets/svg/social3.svg";

export default function SpeakerOne() {
  return (
    <>
      <div className="w-[85%] md:w-[97%] 2xl:w-[80%] mx-auto pb-5 md:pb-0 pt-10">
        <p className="text-center md:text-start font-syne font-[400] text-[26px] md:text-[75px] lg:text-[84px] xl:text-[90px] text-[#54FF7A]">
          2021 SPEAKERS
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 mt-5 md:mt-10">
          <div className="md:border-r-[1px] md:border-b-[1px] md:border-[#9D84FF] md:p-5">
            <img
              src={Person}
              alt=""
              className="hidden md:block rounded-[8px]"
            />
            <img src={Mob} alt="" className="block md:hidden rounded-[8px]" />
            <div className="pt-5">
              <p className="lead font-[500] text-[#54FFBF] text-[20px]">
                Laura Minquini
              </p>
              <p className="lead font-[500] text-white text-[16px]">
                AthenaDAO
              </p>
              <p className="lead font-[500] text-white text-[12px]">Founder</p>
              <p className="lead font-[500] text-white text-[16px]">2022</p>
              <div className="flex gap-5 mt-1">
                <img src={Social} alt="" className="cursor-pointer" />
                <img src={Social2} alt="" className="cursor-pointer" />
                <img src={Social3} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="lg:border-r-[1px] md:border-b-[1px] md:border-[#9D84FF] mt-10 md:mt-0 md:p-5">
            <img
              src={Person2}
              alt=""
              className="hidden md:block rounded-[8px]"
            />
            <img src={Mob2} alt="" className="block md:hidden rounded-[8px]" />
            <div className="pt-5">
              <p className="lead font-[500] text-[#54FFBF] text-[20px]">
                Shady El Damaty
              </p>
              <p className="lead font-[500] text-white text-[16px]">
                OpSci Society
              </p>
              <p className="lead font-[500] text-white text-[12px]">
                President{" "}
              </p>
              <p className="lead font-[500] text-white text-[16px]">2022</p>
              <div className="flex gap-5 mt-1">
                <img src={Social} alt="" className="cursor-pointer" />
                <img src={Social2} alt="" className="cursor-pointer" />
                <img src={Social3} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="md:border-r-[1px] md:border-b-[1px] md:border-[#9D84FF] mt-10 md:mt-0 md:p-5">
            <img
              src={Person3}
              alt=""
              className="hidden md:block rounded-[8px]"
            />
            <img src={Mob3} alt="" className="block md:hidden rounded-[8px]" />
            <div className="pt-5">
              <p className="lead font-[500] text-[#54FFBF] text-[20px]">
                Michael Fisher
              </p>
              <p className="lead font-[500] text-white text-[16px]">DBDAO</p>
              <p className="lead font-[500] text-white text-[12px]">Founder</p>
              <p className="lead font-[500] text-white text-[16px]">2022</p>
              <div className="flex gap-5 mt-1">
                <img src={Social} alt="" className="cursor-pointer" />
                <img src={Social2} alt="" className="cursor-pointer" />
                <img src={Social3} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className=" md:border-b-[1px] md:border-[#9D84FF] mt-10 md:mt-0 md:p-5">
            <img
              src={Person4}
              alt=""
              className="hidden md:block rounded-[8px]"
            />
            <img src={Mob4} alt="" className="block md:hidden rounded-[8px]" />
            <div className="pt-5">
              <p className="lead font-[500] text-[#54FFBF] text-[20px]">
                Laurence Ion
              </p>
              <p className="lead font-[500] text-white text-[16px]">VitaDAO</p>
              <p className="lead font-[500] text-white text-[12px]">
                Dealflow Steward
              </p>
              <p className="lead font-[500] text-white text-[16px]">2022</p>
              <div className="flex gap-5 mt-1">
                <img src={Social} alt="" className="cursor-pointer" />
                <img src={Social2} alt="" className="cursor-pointer" />
                <img src={Social3} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="md:border-r-[1px] md:border-b-[1px] md:border-[#9D84FF] mt-10 md:mt-0 md:p-5">
            <img
              src={Person}
              alt=""
              className="hidden md:block rounded-[8px]"
            />
            <img src={Mob} alt="" className="block md:hidden rounded-[8px]" />
            <div className="pt-5">
              <p className="lead font-[500] text-[#54FFBF] text-[20px]">
                Laura Minquini
              </p>
              <p className="lead font-[500] text-white text-[16px]">
                AthenaDAO
              </p>
              <p className="lead font-[500] text-white text-[12px]">Founder</p>
              <p className="lead font-[500] text-white text-[16px]">2022</p>
              <div className="flex gap-5 mt-1">
                <img src={Social} alt="" className="cursor-pointer" />
                <img src={Social2} alt="" className="cursor-pointer" />
                <img src={Social3} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="lg:border-r-[1px] md:border-b-[1px] md:border-[#9D84FF] mt-10 md:mt-0 md:p-5">
            <img
              src={Person2}
              alt=""
              className="hidden md:block rounded-[8px]"
            />
            <img src={Mob2} alt="" className="block md:hidden rounded-[8px]" />
            <div className="pt-5">
              <p className="lead font-[500] text-[#54FFBF] text-[20px]">
                Shady El Damaty
              </p>
              <p className="lead font-[500] text-white text-[16px]">
                OpSci Society
              </p>
              <p className="lead font-[500] text-white text-[12px]">
                President{" "}
              </p>
              <p className="lead font-[500] text-white text-[16px]">2022</p>
              <div className="flex gap-5 mt-1">
                <img src={Social} alt="" className="cursor-pointer" />
                <img src={Social2} alt="" className="cursor-pointer" />
                <img src={Social3} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="md:border-r-[1px] md:border-b-[1px] md:border-[#9D84FF] mt-10 md:mt-0 md:p-5">
            <img
              src={Person3}
              alt=""
              className="hidden md:block rounded-[8px]"
            />
            <img src={Mob3} alt="" className="block md:hidden rounded-[8px]" />
            <div className="pt-5">
              <p className="lead font-[500] text-[#54FFBF] text-[20px]">
                Michael Fisher
              </p>
              <p className="lead font-[500] text-white text-[16px]">DBDAO</p>
              <p className="lead font-[500] text-white text-[12px]">Founder</p>
              <p className="lead font-[500] text-white text-[16px]">2022</p>
              <div className="flex gap-5 mt-1">
                <img src={Social} alt="" className="cursor-pointer" />
                <img src={Social2} alt="" className="cursor-pointer" />
                <img src={Social3} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className=" md:border-b-[1px] md:border-[#9D84FF] mt-10 md:mt-0 md:p-5">
            <img
              src={Person4}
              alt=""
              className="hidden md:block rounded-[8px]"
            />
            <img src={Mob4} alt="" className="block md:hidden rounded-[8px]" />
            <div className="pt-5">
              <p className="lead font-[500] text-[#54FFBF] text-[20px]">
                Laurence Ion
              </p>
              <p className="lead font-[500] text-white text-[16px]">VitaDAO</p>
              <p className="lead font-[500] text-white text-[12px]">
                Dealflow Steward
              </p>
              <p className="lead font-[500] text-white text-[16px]">2022</p>
              <div className="flex gap-5 mt-1">
                <img src={Social} alt="" className="cursor-pointer" />
                <img src={Social2} alt="" className="cursor-pointer" />
                <img src={Social3} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="md:border-r-[1px]  md:border-[#4FA366] mt-10 md:mt-0 md:p-5">
            <img
              src={Person}
              alt=""
              className="hidden md:block rounded-[8px]"
            />
            <img src={Mob} alt="" className="block md:hidden rounded-[8px]" />
            <div className="pt-5">
              <p className="lead font-[500] text-[#54FFBF] text-[20px]">
                Laura Minquini
              </p>
              <p className="lead font-[500] text-white text-[16px]">
                AthenaDAO
              </p>
              <p className="lead font-[500] text-white text-[12px]">Founder</p>
              <p className="lead font-[500] text-white text-[16px]">2022</p>
              <div className="flex gap-5 mt-1">
                <img src={Social} alt="" className="cursor-pointer" />
                <img src={Social2} alt="" className="cursor-pointer" />
                <img src={Social3} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="lg:border-r-[1px]  md:border-[#4FA366] mt-10 md:mt-0 md:p-5">
            <img
              src={Person2}
              alt=""
              className="hidden md:block rounded-[8px]"
            />
            <img src={Mob2} alt="" className="block md:hidden rounded-[8px]" />
            <div className="pt-5">
              <p className="lead font-[500] text-[#54FFBF] text-[20px]">
                Shady El Damaty
              </p>
              <p className="lead font-[500] text-white text-[16px]">
                OpSci Society
              </p>
              <p className="lead font-[500] text-white text-[12px]">
                President{" "}
              </p>
              <p className="lead font-[500] text-white text-[16px]">2022</p>
              <div className="flex gap-5 mt-1">
                <img src={Social} alt="" className="cursor-pointer" />
                <img src={Social2} alt="" className="cursor-pointer" />
                <img src={Social3} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="md:border-r-[1px]  md:border-[#4FA366] mt-10 md:mt-0 md:p-5">
            <img
              src={Person3}
              alt=""
              className="hidden md:block rounded-[8px]"
            />
            <img src={Mob3} alt="" className="block md:hidden rounded-[8px]" />
            <div className="pt-5">
              <p className="lead font-[500] text-[#54FFBF] text-[20px]">
                Michael Fisher
              </p>
              <p className="lead font-[500] text-white text-[16px]">DBDAO</p>
              <p className="lead font-[500] text-white text-[12px]">Founder</p>
              <p className="lead font-[500] text-white text-[16px]">2022</p>
              <div className="flex gap-5 mt-1">
                <img src={Social} alt="" className="cursor-pointer" />
                <img src={Social2} alt="" className="cursor-pointer" />
                <img src={Social3} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-0 md:p-5">
            <img
              src={Person4}
              alt=""
              className="hidden md:block rounded-[8px]"
            />
            <img src={Mob4} alt="" className="block md:hidden rounded-[8px]" />
            <div className="pt-5">
              <p className="lead font-[500] text-[#54FFBF] text-[20px]">
                Laurence Ion
              </p>
              <p className="lead font-[500] text-white text-[16px]">VitaDAO</p>
              <p className="lead font-[500] text-white text-[12px]">
                Dealflow Steward
              </p>
              <p className="lead font-[500] text-white text-[16px]">2022</p>
              <div className="flex gap-5 mt-1">
                <img src={Social} alt="" className="cursor-pointer" />
                <img src={Social2} alt="" className="cursor-pointer" />
                <img src={Social3} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
