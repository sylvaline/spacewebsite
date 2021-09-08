import React, {useState, useEffect} from 'react'
import bg from '../assets/image/office_img1.jpg'
import SubLayout from './SubLayout';

function InnovationWatch() {
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
          <div className="our_innovations">
            <div className="banner">
            <img src={bg} alt="" />
                <div className={bannerScroll ? "banner_card open":"banner_card"}>
                    <div className="banner_card_inner">
                        <div className="banner_item">
                        <h2>Our Innovations</h2>
                        <p>Innovating is one of the key factors in the vision of Space Innovation Hub. We believe in solving problems and the best way to solve problems is by attempting to make it simpler and almost inconsequential.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="page_content">
          <div className="innovation_header">
          <h2>Some of our innovations</h2>
        <p> We developed the simplest to handle tech challenges that mitigate the African business space by helping to put more business online through our cloud and web service delivery through Naira360 Cloud Service, also through SpingShot Social Network platform and FlickCamp microblogging social network platform among few.</p>
          </div>
          <div className="page_content_inner">

            
          <div className="innovation_images">
          <a href='https://spingshot.com/' alt='spingshot' target="blank"  ><img src="\image\sping8.jpg"  alt="" />
            </a>
          </div>
          <div className="innovation_images">
          <a href='https://spingshot.com/' alt='spingshot' target="blank"  ><img src="\image\sping8.jpg"  alt="" />
            </a>
          </div>
          <div className="innovation_images">
          <a href='https://spingshot.com/' alt='spingshot' target="blank"  ><img src="\image\sping8.jpg" alt="" />
            </a>
          </div>
          </div>
        </div>
        </SubLayout>
    )
}

export default InnovationWatch
