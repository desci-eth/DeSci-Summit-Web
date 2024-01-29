import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from "../../assets/png/icon.png";
import Icon2 from "../../assets/png/icon2.png";
import Icon3 from "../../assets/png/icon3.png";
import Icon4 from "../../assets/png/icon4.png";
import Icon5 from "../../assets/png/icon5.png";
import Icon6 from "../../assets/png/icon6.png";
import Icon7 from "../../assets/png/icon7.png";
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

const ImageSlider: React.FC = () => {
  const settings: Settings = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
    centerMode: true,
    centerPadding: ' 60px', 
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5.5,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="md:mt-10">
      <div >
        <div className='items-center'>
        <Link
              to="https://www.weavechain.com/"
              target="_blank"
            >
        <img src={Icon} alt="" className="w-[80%] 2xl:w-[60%] h-auto" />
        </Link>
      </div>
      </div>

      <div >
        <div className='items-center'>
          <Link
              to="https://www.airfoil.studio/"
              target="_blank"
            >
        <img src={Icon2} alt="" className="w-[70%] 2xl:w-[50%] h-auto" />
      </Link>
      </div>
      </div>
      <div >
        <div className='items-center'>
          <Link
              to="https://www.molecule.xyz/"
              target="_blank"
            >
        <img src={Icon3} alt="" className="w-[70%] 2xl:w-[50%] h-auto" />
      </Link>
      </div>
      </div>
      <div >
        <div className='items-center'>
          <Link
              to="https://www.bio.xyz/"
              target="_blank"
            >
        <img src={Icon4} alt="" className="w-[70%] 2xl:w-[50%] h-auto mt-1 md:mt-2" />
      </Link>
      </div>
      </div>
      <div >
        <div className='items-center'>
          <Link
              to="https://www.vitadao.com/"
              target="_blank"
            >
        <img src={Icon5} alt="" className="w-[70%] 2xl:w-[50%] h-auto mt-[6px] md:mt-3" />
      </Link>
      </div>
      </div>
      <div >
        <div className='items-center'>
          <Link
              to="https://fluence.network/"
              target="_blank"
            >
        <img src={Icon6} alt="" className="w-[60%] 2xl:w-[40%] h-auto mt-1 md:mt-2" />
      </Link>
      </div>
      </div>
     
     <div> 
      <div className="items-center">
        <Link
              to="https://desci.com/"
              target="_blank"
            >
      <img src={Icon7} alt="" className="w-[70%] 2xl:w-[50%] h-auto mt-1 md:mt-1" />
      </Link>
      </div>
    </div>
    

    </Slider>
  );
}; 

export default ImageSlider;
