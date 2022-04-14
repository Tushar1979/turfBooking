import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Bg1 from "../images/slider/banner/bannerBG1.jpg"
import Bg2 from "../images/slider/banner/bannerBG2.jpg"
import AboutUs from "../components/aboutUs";
import ContactUs from "../components/contactUs";
import Member from "../components/member";
function SampleNextArrow(props) {
    console.log(props);
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} NextArrow`}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} PrevArrow`}
        style={{ ...style}}
        onClick={onClick}
      />
    );
  }
export default function Home(props){
    const settings = {
        autoplay:true,
        autoplaySpeed:10000,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover:false,
        pauseOnDotsHover:true,
        cssEase:'linear',
        draggable:false,
        arrows: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>
    };
    return(
        <>
            <div className="Banner-Slider">
                <Slider {...settings}>
                    <div class="item">
                        <div class="img-fill">
                            <img src={Bg1} alt="" />
                            <div class="info">
                                <div>
                                    <h3>Awesome Transtions With CSS3</h3>
                                    <h5>Donec id ornare dui. Aenean tristique condimentum elit, quis blandit nisl varius sit amet. Sed eleifend felis quis massa viverra</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="img-fill">
                            <img src={Bg2} alt="" />
                            <div class="info">
                                <div>
                                    <h3>Awesome Transtions With CSS3</h3>
                                    <h5>Donec id ornare dui. Aenean tristique condimentum elit, quis blandit nisl varius sit amet. Sed eleifend felis quis massa viverra</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
            <AboutUs />
            <Member />
            <ContactUs/>
        </>
    );
}