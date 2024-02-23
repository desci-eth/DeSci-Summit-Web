import Lead from "../../assets/png/lead.png";
import Lead2 from "../../assets/png/lead2.png";
import Lead3 from "../../assets/png/lead3.png";
import Lead4 from "../../assets/png/lead4.png";
import Lead5 from "../../assets/png/lead5.png";
import Lead6 from "../../assets/png/lead6.png";
import Lead7 from "../../assets/png/lead7.png";
import Lead8 from "../../assets/png/lead8.png";
import Lead9 from "../../assets/png/lead9.png";
import Lead10 from "../../assets/png/lead10.png";

export default function Leadership() {
  return (
    <>
      <p className="lead font-[400] text-[#54FF7A] text-[20px] md:text-[30px] text-center md:mt-5">
        past and present
      </p>
      <p className="lead font-[400] text-white text-[25px] md:text-[50px] text-center">
        with leadership from
      </p>

      <div className="py-10 lg:border-b-[1px] border-[#4FA366] w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5  gap-5">
          <div className="bg-[#1833B0] border-[1px] border-transparent hover:border-[#54FF7A] py-5 rounded-lg">
            <img src={Lead3} alt="" className="mx-auto w-[180px] h-[180px]" />
            <p className="lead font-[400] text-[20px] text-white text-center mt-5">
              Jonathan Starr
            </p>
            <p className="lead font-[400] text-[15px] text-white text-center mt-2">
              2023-24
            </p>
          </div>


          <div className="bg-[#1833B0] border-[1px] border-transparent hover:border-[#54FF7A] py-5 rounded-lg">
            <img src={Lead2} alt="" className="mx-auto w-[180px] h-[180px]" />
            <p className="lead font-[400] text-[20px] text-white text-center mt-5">
              Shady El Damaty, Ph.D.
            </p>
            <p className="lead font-[400] text-[15px] text-white text-center mt-2">
              2022-24
            </p>
          </div>

          <div className="bg-[#1833B0] border-[1px] border-transparent hover:border-[#54FF7A] py-5 rounded-lg">
            <img src={Lead10} alt="" className="mx-auto w-[180px] h-[180px]" />
            <p className="lead font-[400] text-[20px] text-white text-center mt-5">
              Michael Ferreyros
            </p>
            <p className="lead font-[400] text-[15px] text-white text-center mt-2">
              2023-24
            </p>
          </div>

          <div className="bg-[#1833B0] border-[1px] border-transparent hover:border-[#54FF7A] py-5 rounded-lg">
            <img src={Lead9} alt="" className="mx-auto w-[180px] h-[180px]" />
            <p className="lead font-[400] text-[20px] text-white text-center mt-5">
              Elijah Spinah, Ph.D.
            </p>
            <p className="lead font-[400] text-[15px] text-white text-center mt-2">
              2023-24
            </p>
          </div>

          <div className="bg-[#1833B0] border-[1px] border-transparent hover:border-[#54FF7A] py-5 rounded-lg">
            <img src={Lead} alt="" className="mx-auto w-[180px] h-[180px]" />
            <p className="lead font-[400] text-[20px] text-white text-center mt-5">
              Joshua Bate
            </p>
            <p className="lead font-[400] text-[15px] text-white text-center mt-2">
              2023-24
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5  gap-5 mt-5">
          <div className="bg-[#1833B0] border-[1px] border-transparent hover:border-[#54FF7A] py-5 rounded-lg">
            <img src={Lead7} alt="" className="mx-auto w-[180px] h-[180px]" />
            <p className="lead font-[400] text-[20px] text-white text-center mt-5">
            Tammy Francis, Ph.D.
            </p>
            <p className="lead font-[400] text-[15px] text-white text-center mt-2">
              2023
            </p>
          </div>

          <div className="bg-[#1833B0] border-[1px] border-transparent hover:border-[#54FF7A] py-5 rounded-lg">
            <img src={Lead8} alt="" className="mx-auto w-[180px] h-[180px]" />
            <p className="lead font-[400] text-[20px] text-white text-center mt-5">
              Ariella Coler-Reilly
            </p>
            <p className="lead font-[400] text-[15px] text-white text-center mt-2">
              2023
            </p>
          </div>
     
          <div className="bg-[#1833B0] border-[1px] border-transparent hover:border-[#54FF7A] py-5 rounded-lg">
            <img src={Lead5} alt="" className="mx-auto w-[180px] h-[180px]" />
            <p className="lead font-[400] text-[20px] text-white text-center mt-5">
              Jelani Clarke, Ph.D.
            </p>
            <p className="lead font-[400] text-[15px] text-white text-center mt-2">
              2023-24
            </p>
          </div>

          <div className="bg-[#1833B0] border-[1px] border-transparent hover:border-[#54FF7A] py-5 rounded-lg">
            <img src={Lead6} alt="" className="mx-auto w-[180px] h-[180px]" />
            <p className="lead font-[400] text-[20px] text-white text-center mt-5">
              Allison Duettmann
            </p>
            <p className="lead font-[400] text-[15px] text-white text-center mt-2">
              2022
            </p>
          </div>

          <div className="bg-[#1833B0] border-[1px] border-transparent hover:border-[#54FF7A] py-5 rounded-lg">
            <img src={Lead4} alt="" className="mx-auto w-[180px] h-[180px]" />
            <p className="lead font-[400] text-[20px] text-white text-center mt-5">
              Eugene Leventhal
            </p>
            <p className="lead font-[400] text-[15px] text-white text-center mt-2">
              2022
            </p>
          </div>

        </div>


      </div>
    </>
  );
}
