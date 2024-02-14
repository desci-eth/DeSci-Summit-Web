import Navbar from "../components/Navbar/navbar";
import EventSlider from "../components/Event/event-slider";
import Distribute from "../components/Event/distribute";
import Highlight from "../components/Event/highlight";
import Gallery from "../components/Event/gallery";
import Spon from "../components/Event/spon";
import Speakerss from "../components/Event/speakerss";
import ImageSlider from "../components/home/imageSlider";
import ImageTwoSlider from "../components/home/imagesTwoSlider";
import Register from "../components/home/register";
import Footer from "../components/Footer/footer";
import Qwq from "../assets/png/qwq.png"

export default function Event() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="grid grid-cols-1 lg:grid-cols-2 w-[100%] lg:w-[97%] 2xl:w-[80%] mx-auto">
          <div className="w-[90%] md:w-[97%] lg:w-full mx-auto mt-5 lg:mt-0">
            <p className="font-syne font-[400] text-[35px] md:text-[80px] lg:text-[75px] xl:text-[96px]  text-[#54FF7A]">
              Past Events
            </p>
            <p className=" font-syne font-[400] text-[16px] md:text-[20px] lg:text-[18px] xl:text-[24px] 2xl:text-[40px] text-white mt-4">
              The DeSci Summit, founded in 2021, is the oldest running community
              conference in decentralized science. Our past events have
              established future trends and the direction of science
              entrepreneurship, public goods funding, and open source
              initiatives. From artificially intelligent researchers to
              alternative models for scientific funding and publishing, the
              future of technology and science can be glimpsed at the DeSci
              Summit.
            </p>
          </div>

          <div className="w-full lg:w-[80%] mx-auto self-center   mt-10">
            <EventSlider />
          </div>
        </div>
        <img src={Qwq} alt="" className="w-[80%] md:w-[50%] absolute top-0 right-0 -z-10" />
        <Distribute />
        <Highlight />
        <Gallery />
        <Speakerss />
        <Spon />
        <ImageSlider />
        <ImageTwoSlider />
        <div className="lg:pt-10  lg:border-b-[1px] border-[#4FA366] w-[90%] md:w-[97%] 2xl:w-[80%] mx-auto"></div>
        <Register />
        <Footer />
      </div>
    </>
  );
}
