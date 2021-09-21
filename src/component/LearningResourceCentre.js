import React, {useState, useEffect} from 'react'
import bg from '../assets/image/office_img1.jpg'
import SubLayout from './SubLayout';

function LearningResourceCentre() {
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
                        <p className="banner_title">Learning Resource Centre</p>
                        <p>Our learning resource centers offer a catalogue of professional and career training programmes.  </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="page_content">
          <div className="page_content_inner">
            <div className="learning_res">
              <div className="learning_res_intro">
              <h2>How does our</h2>
              <h2 className="learning_res_intro_h2">Learning Resource work?</h2>
              <p>You have to pick one or more of the courses we offer and you will get the best learning experience</p>
              </div>
              <div className="learning_item_section">
              <div className="learning_item">
                <h3>Mobile App Development Training</h3>
              <p> This training is between 12 to 18 weeks of training with specific outlines like Mobile App Development Benninger, Mobile App Development Intermediate and Mobile App Development Master Class.</p>
              <p><span>Class of Training</span></p>
              <ul>
                <li> iOS Development</li>
                <li> Android Development</li>
              </ul>
              </div>


              <div className="learning_item">
                <h3>Web App Development</h3>
              <p>This programme will be between 12weeks to 14weeks.</p>
              
              <ul>
                <li> Frontend Development and Design -React, WordPress etc</li>
                <li> Backend Development -Python, Java Script, C#,PHP etct</li>
              </ul>
              </div>

              <div className="learning_item">
              <h3>Software Development</h3>
              <p></p>
              <ul>
                <li> Web based software development</li>
                <li> Local server softwares</li>
              </ul>
              </div>


              <div className="learning_item">
                <h3>Networking Training</h3>
              <p> This training shall be between 10 to 14 weeks.</p>
              <p><span>Class of Training</span></p>
              <ul>
              <li> Data Science</li>
                <li> Data Analytics</li>
                <li>  Mikrotik Training</li>
                
              </ul>

              <p><span>Data Science and Security</span></p>
              <ul>
              <li> CCNA/CCNP</li>
                <li> Radio Frequency Training</li>
                <li>  Ethical Hacking</li>
                <li> Security Analyst</li>
                <li>  Certified Network Defender</li>
                <li>Etc</li>
              </ul>
              </div>
              </div>

            </div>
          </div>
        </div>
        </SubLayout>
    )
}

export default LearningResourceCentre
