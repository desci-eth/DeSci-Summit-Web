import Slider from "react-slick";
import EventImg from "../../assets/png/event-img.png";
import EventImg2 from "../../assets/png/event-img2.png";
import EventImg3 from "../../assets/png/event-img3.png";

export default function EventSlider() {

    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "130px", // Adjust padding as needed
        slidesToShow: 1, // Show three slides at a time
        speed: 500,
        responsive: [
            {
                breakpoint: 1150, // Mobile breakpoint
                settings: {
                  arrows: true,
                  centerMode: true,
                  centerPadding: "80px", // Adjust padding for mobile as needed
                  slidesToShow: 1, // Show one slide at a time on mobile
                },
              },
          {
            breakpoint: 768, // Mobile breakpoint
            settings: {
              arrows: false,
              dots:true,
              centerMode: true,
              centerPadding: "120px", // Adjust padding for mobile as needed
              slidesToShow: 1, // Show one slide at a time on mobile
            },
          },
          {
            breakpoint: 576, // Mobile breakpoint
            settings: {
              arrows: false,
              dots:true,
              centerMode: true,
              centerPadding: "80px", // Adjust padding for mobile as needed
              slidesToShow: 1, // Show one slide at a time on mobile
            },
          },
        ],
      };
  return (

    
    <>
        <Slider {...settings} className="events ">
              <div>
                <img src={EventImg} alt=""  />
              </div>
              <div>
                <img src={EventImg2} alt="" />
              </div>
              <div>
                <img src={EventImg3} alt="" />
              </div>


            </Slider>
    </>
  )
}
