import React, {useState, useEffect} from 'react'
import SubLayout from './SubLayout';
import bg from '../assets/image/office_img1.jpg'

function DocumentResourceCentre() {
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
          <div className="learning_resource">
            <div className="banner">
            <img src={bg} alt="" />
                <div className={bannerScroll ? "banner_card open":"banner_card"}>
                    <div className="banner_card_inner">
                        <div className="banner_item">
                        <p className="banner_title">Document Resource Centre</p>
                        <p>Visit our document resource center in our office complex for private web research, document typing and production, graphic designs, printing and photocopy, NYSC registration and printing, WAEC printings, JAMB registration and printing and so much more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="page_content">
          <div className="page_content_inner">
            <h1>Content coming soon</h1>
          </div>
        </div> */}
        </SubLayout>
    )
}

export default DocumentResourceCentre
