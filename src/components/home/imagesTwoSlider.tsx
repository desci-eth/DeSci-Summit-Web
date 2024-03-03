import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from "../../assets/png/icon8.png";
import Icon2 from "../../assets/png/icon9.png";
import Icon3 from "../../assets/png/icon10.png";
import Icon4 from "../../assets/png/icon11.png";
import Icon5 from "../../assets/png/icon12.png";
import Icon6 from "../../assets/png/icon13.png";
import Icon7 from "../../assets/png/icon14.png";
import Icon8 from "../../assets/png/icon15.png";
import Icon9 from "../../assets/png/icon16.png";
import Icon10 from "../../assets/png/icon22.png";
import Icon11 from "../../assets/png/icon23.png";
import Icon12 from "../../assets/png/icon24.png";
import Icon13 from "../../assets/png/icon25.png";
import { Link } from 'react-router-dom';

interface ResponsiveSetting {
  breakpoint: number;
  settings: {
    slidesToShow: number;
  };
}

interface Settings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  arrows:boolean;
  centerMode: boolean;
  centerPadding: string;
  responsive: ResponsiveSetting[];
}

const ImageTwoSlider: React.FC = () => {
  const settings: Settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 3000,
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 200,
    centerPadding: ' 60px', 
    responsive: [

      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7.5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className=" my-5 ">
      <div >
        <div className='items-center'>
       
           <Link
              to="https://curecoin.net/"
              target="_blank"
            >
        <img src={Icon} alt="" className="h-auto w-[60%] md:w-[50%] 2xl:w-[40%]" />
     </Link>

      </div>
      </div>

      <div >
        <div className='items-end'>
       
           <Link
              to="https://openimpact.foundation/"
              target="_blank"
            >
        <img src={Icon10} alt="" className="h-auto w-[80%] md:w-[70%] mt-2 lg:mt-5" />
     </Link>

      </div>
      </div>   



      <div >
        <div className='items-center'>
           <Link
              to="https://gridcoin.us/"
              target="_blank"
            >
        <img src={Icon11} alt="" className="h-auto w-[80%] md:w-[70%] mt-4 md:mt-3 lg:mt-8" />
      </Link>
      </div>
      </div>
     

      <div >
        <div className='items-center'>
           <Link
              to="https://coophive.network/"
              target="_blank"
            >
        <img src={Icon12} alt="" className="h-auto w-[80%] md:w-[70%] mt-4 md:mt-3 lg:mt-8" />
      </Link>
      </div>
      </div>
     

      <div >
        <div className='items-center'>
           <Link
              to="https://btq.com/"
              target="_blank"
            >
        <img src={Icon13} alt="" className="h-auto w-[80%] md:w-[70%] mt-2 md:mt-2 lg:mt-6 xl:mt-5" />
      </Link>
      </div>
      </div>
     


      <div >
        <div className='items-center'>
           <Link
              to="https://www.joinef.com/"
              target="_blank"
            >
        <img src={Icon3} alt="" className="h-auto w-[60%] md:w-[50%] 2xl:w-[40%] lg:mt-4 xl:mt-0" />
      </Link>
      </div>
      </div>
     
      <div >
        <div className='items-center'>
           <Link
              to="https://www.impact-finance.io/"
              target="_blank"
            >
        <img src={Icon4} alt="" className="h-auto w-[60%] md:w-[50%] 2xl:w-[40%] lg:mt-3 xl:mt-0" />
      </Link>
      </div>
      </div>
     
      <div >
        <div className='items-center'>
           <Link
              to="https://www.lobby3.org/"
              target="_blank"
            >
        <img src={Icon5} alt="" className="h-auto w-[60%] md:w-[50%] 2xl:w-[40%]" />
      </Link>
      </div>
      </div>
    
      <div >
        <div className='items-center'>
           <Link
              to="https://www.lateral.io/desci"
              target="_blank"
            >
        <img src={Icon6} alt="" className="h-auto w-[60%] md:w-[50%] 2xl:w-[40%]" />
      </Link>
      </div>
      </div>
    
      <div>
     
     <div> 
      <div className="items-center">
         <Link
              to="https://orangedao.xyz/"
              target="_blank"
            >
      <img src={Icon7} alt="" className="h-auto w-[60%] md:w-[50%] 2xl:w-[40%]" />
      </Link>
      </div>
      
    </div>
      </div>
    
      <div> 
      <div className="items-center">
         <Link
              to="https://www.lunco.space/"
              target="_blank"
            >
      <img src={Icon8} alt="" className="h-auto w-[60%] md:w-[50%] 2xl:w-[40%]" />
      </Link>
      </div>
      
    </div>


    <div> 
      <div className="items-center">
         <Link
              to="https://www.meddao.xyz/"
              target="_blank"
            >
      <img src={Icon9} alt="" className="h-auto w-[60%] md:w-[70%] mt-3 2xl:w-[40%]" />
      </Link>
      </div>
      
    </div>

    </Slider>
  );
}; 

export default ImageTwoSlider;
