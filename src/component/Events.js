import React, {useState, useEffect} from 'react'
import bg from '../assets/image/office_img1.jpg'
import SubLayout from './SubLayout';

function Events() {
    const [bannerScroll, setBannerScroll] = useState(false);

    useEffect(()=>{
      window.scrollTo({top:0, behavior:'smooth'})
    },[])
    
  const banner_on_scroll = () => {
    if (window.scrollY >= 50) {
      setBannerScroll(true);
    } else {
      setBannerScroll(false);
    }
  };

  window.addEventListener("scroll", banner_on_scroll);

    return (
        <SubLayout>
          <div className="event">
            <div className="banner">
            <img src={bg} alt="" />
                <div className={bannerScroll ? "banner_card open":"banner_card"}>
                    <div className="banner_card_inner">
                        <div className="banner_item">
                        <p className="banner_title">Events</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non in ducimus laboriosam, assumenda magni maiores labore at error temporibus nisi sunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="page_content">
          <div className="page_content_inner">
            <h1>Content coming soon</h1>
          </div>
        </div>
        </SubLayout>
    )
}

export default Events
