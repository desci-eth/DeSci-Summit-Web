import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useEffect, useState } from "react";
import Time from "../../assets/svg/TIME REMAINING.svg";



interface CompletedProps {}

const Completed: React.FC<CompletedProps> = () => {
  return (
 <>
    </>
  )
};

interface RenderByUsingReactChildProps {}

const RenderByUsingReactChild: React.FC<RenderByUsingReactChildProps> = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 910);
  const [isCountdownComplete, setIsCountdownComplete] = useState(false); // State to track countdown completion

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 910);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isCountdownComplete ? ( // Conditional rendering based on isCountdownComplete
        <Completed />
      ) : (
        <div className="pt-10 ">
          <p className="text-center font-syne font-[400] text-[26px] md:text-[75px] lg:text-[84px] xl:text-[90px] text-[#54FF7A] leading-[35px] md:leading-[90px]">
          COMING SOON
          </p>
          <p className="font-syne font-[400] text-[15px] md:text-[18px] text-[#54FF7A] text-center">
            *all times are in the local time zone (MT)
          </p>
          <img src={Time} alt="" className="mt-10 mx-auto w-[90%] md:w-auto" />
        </div>
      )}
      <FlipClockCountdown
        to={new Date("2024-02-22").getTime() + 24 * 3600 * 1000 + 5000}

        digitBlockStyle={{
          width: 100,
          height: 150,
          fontSize: 110,
          marginTop: "40px",
          backgroundColor: "#1833b0",
          fontFamily: '"Share Tech", sans-serif',
        }}
        labelStyle={{
          fontSize: 20,
          fontWeight: 400,
          color: "#54FF7A",
          textTransform: "uppercase",
          fontFamily: '"Share Tech", sans-serif',
        }}
        separatorStyle={{ color: "white", size: "20px" }}
        dividerStyle={{ color: "#152ea0", height: 4 }}
        duration={0.5}
        onComplete={() => setIsCountdownComplete(true)} // Set the countdown completion state to true when the countdown finishes
      />
    </>
  );
};

export default function Countdown() {
  return (
    <div className="mt-10 ">
      <RenderByUsingReactChild />
    </div>
  );
}
