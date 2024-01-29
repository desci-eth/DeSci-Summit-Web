import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import { useEffect, useState } from "react";

interface CompletedProps {}

const Completed: React.FC<CompletedProps> = () => {
  return <span>The countdown is complete</span>;
};

interface RenderByUsingReactChildProps {}

const RenderByUsingReactChild: React.FC<RenderByUsingReactChildProps> = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 910);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 910);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <FlipClockCountdown
    to={new Date("2024-02-23").getTime() + 24 * 3600 * 1000 + 5000}

      digitBlockStyle={{
        width: 100,
        height: 150,
        fontSize: 110,
        backgroundColor: "#1833b0",
        fontFamily: '"Share Tech", sans-serif',
      }} // changed here
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
    >
      <Completed />
    </FlipClockCountdown>
  );
};

export default function Countdown() {
  return (
    <div className="mt-10 ">
      <RenderByUsingReactChild />
    </div>
  );
}
