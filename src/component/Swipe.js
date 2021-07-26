import React, {useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from '../assets/image/bg1.png'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";


// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

function Swipe() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        
        spaceBetween={10}
        // navigation={true}
        className="mySwiper2"
      >
        
        <SwiperSlide>
        <Link to="/about-user">
        <div className="swiper_style">
          <img src="\image\office_img1.jpg" alt="" srcset="" />
            <div className="swiper_content">
              <h1>Hello</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore modi error sapiente reprehenderit dolorem necessitatibus autem aspernatur perspiciatis temporibus laudantium consectetur cupiditate accusantium vel voluptatum repellendus, maiores cumque exercitationem?</p>
            </div>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/about-user">
        <div className="swiper_style">
          <img src="\image\office_img2.jpg" alt="" srcset="" />
            <div className="swiper_content">
              <h1>Hello</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore modi error sapiente reprehenderit dolorem necessitatibus autem aspernatur perspiciatis temporibus laudantium consectetur cupiditate accusantium vel voluptatum repellendus, maiores cumque exercitationem?</p>
            </div>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/about-user">
        <div className="swiper_style">
          <img src="\image\office_img1.jpg" alt="" srcset="" />
            <div className="swiper_content">
              <h1>Hello</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore modi error sapiente reprehenderit dolorem necessitatibus autem aspernatur perspiciatis temporibus laudantium consectetur cupiditate accusantium vel voluptatum repellendus, maiores cumque exercitationem?</p>
            </div>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/about-user">
        <div className="swiper_style">
          <img src="\image\office_img2.jpg" alt="" srcset="" />
            <div className="swiper_content">
              <h1>Hello</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore modi error sapiente reprehenderit dolorem necessitatibus autem aspernatur perspiciatis temporibus laudantium consectetur cupiditate accusantium vel voluptatum repellendus, maiores cumque exercitationem?</p>
            </div>
          </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to="/about-user">
        <div className="swiper_style">
          <img src="\image\office_img1.jpg" alt="" srcset="" />
            <div className="swiper_content">
              <h1>Hello</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore modi error sapiente reprehenderit dolorem necessitatibus autem aspernatur perspiciatis temporibus laudantium consectetur cupiditate accusantium vel voluptatum repellendus, maiores cumque exercitationem?</p>
            </div>
          </div>
        </Link>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default Swipe;
