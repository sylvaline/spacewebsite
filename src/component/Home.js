import React, { useEffect} from "react";
import { Link } from "react-router-dom";
// import Typical from "react-typical";
import Wave from 'react-wavify'
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Float from "./Float";
import ContactForm from "./ContactForm";
import Contact from "./Contact";
import { gsap, } from 'gsap'

function Home() {

  useEffect(()=>{
  
    window.scrollTo({top:0, behavior:'smooth'})
    
  },[])

  let tl = gsap.timeline({
    defaults: {duration:1, scaleY:1.1, ease: "elastic.out(1, 0.3)"}
});


useEffect(()=>{
    setInterval(()=>{
        tl.to(".welcome_text", {
            scaleY:1,
            stagger:0.2
        }).to(".welcome_text", {
            scaleY:.8,
            stagger:"-.2"
        });
    }, 1000)
   
})

  return (
    <div className="home">
       
      <div className="landing_page">
        <div className="landing_page_inner">
          <div className="landing_page_info">
          <div className="type_writing">
          
          <Slide left>
          {/* <Typical
            steps={[
              "Welcome to Space Innovation Hub,",
              1000,
              "Your one stop for technological advancement.",
              1000,
            ]}
            loop={Infinity}
            wrapper="h1"
          /> */}

        <div className="welcome_text_div">
        <div className="welcome_text_1">
        <h1 className="welcome_text">Welcome </h1>
        <h1 className="welcome_text">to </h1>
        <h1 className="welcome_text">Space </h1>
        </div>
        
        <div className="welcome_text_1">
        <h1 className="welcome_text">Innovation </h1>
        <h1 className="welcome_text">Hub,</h1>
        <h1 className="welcome_text">your </h1>
        </div>
          <div className="welcome_text_2">
          <h1 className="welcome_text">one </h1>
          <h1 className="welcome_text">stop </h1>
          <h1 className="welcome_text">for </h1>
          </div>
          <div className="welcome_text_2">
          <h1 className="welcome_text">technological </h1>
          <h1 className="welcome_text">advancement.</h1>
        </div>
        
        </div>
       
          </Slide>
          </div>
          <Slide left>
          <div className="more_landing_page_info">
            <p><span>SpingShot</span> is our latest innovation, sit amet consectetur adipisicing elit. Praesentium voluptates totam iure molestiae porro</p>
            <div className="landing_btns">
           
            <a href='https://spingshot.com/' alt='spingshot' target="blank" className="landing_white_btn" ><span >See SpingShot</span>
            </a>
            <Link to='/our-innovations' ><button>Our innovations</button></Link>
            </div>
          </div>
          </Slide>
          </div>
          <Slide right>
          <div className="space_innovations">
            <div className="space_innovations_inner">
              
              <img className="top_img" src="\image\sping8-removebg-preview.png" alt="" />
              <img className="bottom_img" src="\image\splash__1_-removebg-preview.png" alt="" />
            </div>
          </div>
          </Slide>
        </div>
      </div>
      <Wave
        className="wave"
        fill="#00b9fe"
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
          speed: 0.1,
          points: 5
        }}
      />
      <div className="home_main window">
        <div className="home_main_inner">
          <div className="home_content first_content">
            <div  className="home_content_inner">
            
             
                <div className="right">
                  <div className="right_inner">
                  <img src="\image\laptop1.jpg" alt="" srcset="" />
                  </div>
                </div>
             
              <div className="bg_about_back_line"></div>
               <div className="bg_about_back"></div>
               <div className="bg_about_back shift_right"></div>
         
               <div className="left">
              
              <Fade top>
                <h3 className="title">Hi, we’re Space Innovation Hub </h3>
                <div className="title_line"></div>
                <h4 className="sub_title">Space Innovation is the stop-point for technology development and innovation in Makurdi Benue state of Nigeria</h4>
              </Fade>
              <Fade bottom>
                <p>
                It is also a statement of fact that this will be the largest Innovation Hub in Northern Nigeria as it regards experience, human resources, and geography.
                </p>
                <p>
                Space Hub is designed to cater for the deficiency of technology enthusiasm of Mid-Belt Nigeria and the entire Northern Nigeria.
                </p>
                
              </Fade>

              <Fade right>
              <div className="left_btn">
                <Link to="/about">
                <button>Meet the team</button>
                </Link>
              </div>
            </Fade>
            
            </div>
             
              </div>
              
          </div>

          
          <div className="home_work_content">
          <h3>OUR WORK</h3>
              <h1>Areas Of Focus</h1>
            <div className="home_work_content_inner">
              
              <div className="first_col">
                <div className="fimg f2">
                <Link to="/our-innovations">
                <div className="card">
            <img src="\image\man.jpg" alt="" srcset="" />
            <div className="open">
              <div className="open_inner">
                <Slide bottom>
                  <h2>
                    {" "}
                    Our Innovations
                  </h2>

                </Slide>
              </div>
            </div>
          </div>
          </Link>
                </div>
                <div className="fimg f3">
                <Link to="/learning-resource-centre">
                <div className="card">
            <img src="\image\woman.jpg" alt="" srcset="" />
            <div className="open">
              <div className="open_inner">
                <Slide bottom>
                  <h2>
                    {" "}
                   Learning Resource Centre
                  </h2>
                  
                </Slide>
              </div>
            </div>
          </div>
          </Link>
                </div>
              </div>
              <div className="second_col">
              <div className="simg s1">
              <Link to="/document-resource-centre">
              <div className="card">
            <img src="\image\man.jpg" alt="" srcset="" />
            <div className="open">
              <div className="open_inner">
                <Slide bottom>
                  <h2>
                    {" "}
                    Document Resource Centre
                  </h2>
                  
                  
                </Slide>
              </div>
            </div>
          </div>
          </Link>
                </div>
                <div className="simg s2">
                <Link to="/innovation-support">
                <div className="card">
            <img src="\image\woman.jpg" alt="" srcset="" />
            <div className="open">
              <div className="open_inner">
                <Slide bottom>
                  <h2>
                    {" "}
                    Innovation Support
                  </h2>
                 
                </Slide>
              </div>
            </div>
          </div>
          </Link>
                </div>
               
              </div>
              <div className="third_col">
              <div className="timg">
              <Link to="/startup-funding">
              <div className="card">
            <img src="\image\office_img2.jpg" alt="" srcset="" />
            <div className="open">
              <div className="open_inner">
                <Slide bottom>
                  <h2>
                    {" "}
                    Startup Funding
                  </h2>

                  
                
                </Slide>
              </div>
            </div>
          </div>
          </Link>
                </div>
                <div className="timg">
                <Link to="/co-working">
                <div className="card">
            <img src="\image\man.jpg" alt="" srcset="" />
            <div className="open">
              <div className="open_inner">
                <Slide bottom>
                  <h2>
                    {" "}
                    Co-working Space
                  </h2>

                </Slide>
              </div>
            </div>
          </div>
          </Link>
                </div>
                
                
              </div>
            </div>
          </div>
         
          
          <div className="home_event">
              <h3>OUR EVENTS</h3>
              <h1>Events and Calender </h1>
            <div className="home_event_inner">
              <div className="home_event_left">
              <img src="\image\man.jpg" alt="" srcset="" />
              </div>
              <div className="home_event_right">
                <h2>Our events and Calender</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut accusantium suscipit, aliquid culpa rem magnam beatae ducimus incidunt. Illo illum saepe voluptas quam sed ea reprehenderit voluptate iure rem.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut accusantium suscipit, aliquid culpa rem magnam beatae ducimus incidunt. Illo illum saepe voluptas quam sed ea reprehenderit voluptate iure rem.</p>
              </div>
            </div>
          </div>
          <div className="home_stratege">
        <h3>OUR STRATEGY</h3>
        <h1>Strategies for Innovations</h1>
        <div className="home_stratege_inner">
          <div className="training">
            <div className="stratege_card">
            <div className="icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
              <h2>TRAINING</h2>
              
              <p>Fundamentally, to learn how to become a software developer is the same as to pursue any career path: hard work will truly determine success, not talent.</p>
              <p>We provide training for individuals and organisation with no knowledge on web/mobile application development to a self dependent level. </p>
            </div>
          </div>
          <div className="out_sourcing">
          <div className="stratege_card">
          <div className="icon">
          <i class="fab fa-creative-commons-share"></i>
          </div>
              <h2>OUTSOURCING</h2>
              <p>
              Satisfied clients and successfully-completed projects is our focus, We provide the best technicians, risk minimisation, cost savings, for software development.
              </p>
              <p>with extra attention and deadline consideration to deliver high standards that speak of your business quality</p>
              
          </div>
          </div>
          <div className="mentorship">
          <div className="stratege_card">
          <div className="icon">
          <i className="fas fa-chalkboard-teacher"></i>
          </div>
              <h2>MENTORSHIP</h2>
              <p>Mentoring can be a powerful tool for change and growth. Under the right mentor, a mentee is able to expand their capabilities and realize their potential. </p>
              <p>At Space Innovation, we are committed to supporting and improving technology in Africa, hence the idea of providing a quality mentorship program.</p>
          </div>
          </div>
        </div>
         
      </div>    
          <Contact />
        </div>
      </div>

     

      {/* For mobile only */}

      <div className="mobile_landing_page">
        <div className="mobile_landing_page_inner">
          <div className="mobile_landing_page_info">
          <div className="mobile_type_writing">
          
          <Slide right>
          {/* <Typical
            steps={[
              "Welcome to Space Innovation Hub,",
              1000,
              "Your one stop for technological advancement.",
              1000,
            ]}
            loop={Infinity}
            wrapper="h1"
          /> */}
        <div className="welcome_text_div">
        <div className="welcome_text_1">
        <h1 className="welcome_text">Welcome </h1>
       
        </div>

        <div className="welcome_text_1">
        <h1 className="welcome_text">to </h1>
        <h1 className="welcome_text">Space </h1>
        <h1 className="welcome_text">Innovation </h1>
       
        </div>
      
        <div className="welcome_text_1">
        <h1 className="welcome_text">Hub,</h1>
        <h1 className="welcome_text">your </h1>
        <h1 className="welcome_text">one </h1>
        </div>
       
          <div className="welcome_text_2">
          <h1 className="welcome_text">stop </h1>
          <h1 className="welcome_text">for </h1>
          <h1 className="welcome_text">technological </h1>
          </div>
          
        <div className="welcome_text_2">
          <h1 className="welcome_text">advancement.</h1>
        </div>
        </div>
          </Slide>
          </div>

          <Slide left>
          <div className="mobile_space_innovations">
            <div className="mobile_space_innovations_inner">
            <img className="bottom_img" src="\image\splash__1_-removebg-preview.png" alt="" />
              <img className="top_img" src="\image\sping8-removebg-preview.png" alt="" />
            </div>
          </div>
          </Slide>
          <Slide right>
          <div className="more_landing_page_info_inner">
            <p> <span>SpingShot</span> is our latest innovation, sit amet consectetur adipisicing elit. Praesentium voluptates totam iure molestiae porro</p>
            <div className="mobile_landing_btns">
           
            <a href='https://spingshot.com/' alt='spingshot' target="blank"><button>More on SpingShot</button></a>
            </div>
          </div>
          </Slide>
          </div>
          
          
        </div>
      </div>
      <Wave
        className="mobile_wave"
        fill="#00b9fe"
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
          speed: 0.1,
          points: 5
        }}
      />
      
      <div className="home_main mobile">
        <div className="home_main_inner">
          <div className="home_content first_content">
            <div  className="home_content_inner">
            
               <div className="left">
              
           
              
              {/* <Slide bottom>
          <div className="type_writing">
          <Typical
            steps={[
              "Welcome to Space Innovation,",
              1000,
              "We are the future of tech in Nigeria.",
              1000,
            ]}
            loop={Infinity}
            wrapper="h1"
          />
          </div>
          </Slide> */}
          <Slide bottom>
          <h3 className="title">Hi, we’re Space Innovation Hub </h3>
                <div className="title_line"></div>
                <h4 className="sub_title">Space Innovation is the stop-point for technology development and innovation in Makurdi Benue state of Nigeria</h4>
              </Slide>
              <Slide bottom>
              <p>
                It is also a statement of fact that this will be the largest Innovation Hub in Northern Nigeria as it regards experience, human resources, and geography.
                </p>
                <p>
                Space Hub is designed to cater for the deficiency of technology enthusiasm of Mid-Belt Nigeria and the entire Northern Nigeria.
                </p>
                
              </Slide>
            <Slide right>
              <div className="left_btn">
                <Link to="/about">
                <button>Meet the team</button>
                </Link>
              </div>
            </Slide>
            </div>
             
             
              </div>
              
          </div>

          
          <div className="home_work_content">
          <h3>OUR WORK</h3>
              <h1>Areas Of Focus</h1>
            <div className="home_work_content_inner">
              
              <div className="first_col">
                <div className="fimg f2">
                <Link to="/our-innovations">
                <div className="card">
                <img src="\image\man.jpg" alt="" srcset="" />
            <div className="open">
              <div className="open_inner">
                <Slide bottom>
                  <h2>
                    {" "}
                    Our Innovations
                  </h2>

                </Slide>
              </div>
            </div>
          </div>
          </Link>
                </div>
                <div className="fimg f3">
                <Link to="/learning-resource-centre">
                <div className="card">
                <img src="\image\woman.jpg" alt="" srcset="" />
            <div className="open">
              <div className="open_inner">
                <Slide bottom>
                  <h2>
                    {" "}
                   Learning Resource Centre
                  </h2>
                  
                </Slide>
              </div>
            </div>
          </div>
          </Link>
                </div>
              </div>
              <div className="second_col">
              <div className="simg s1">
              <Link to="/document-resource-centre">
              <div className="card">
              <img src="\image\man.jpg" alt="" srcset="" />
            <div className="open">
              <div className="open_inner">
                <Slide bottom>
                  <h2>
                    {" "}
                    Document Resource Centre
                  </h2>
                  
                  
                </Slide>
              </div>
            </div>
          </div>
          </Link>
                </div>
                <div className="simg s2">
                <Link to="/innovation-support">
                <div className="card">
                <img src="\image\woman.jpg" alt="" srcset="" />
            <div className="open">
              <div className="open_inner">
                <Slide bottom>
                  <h2>
                    {" "}
                    Innovation Support
                  </h2>
                </Slide>
              </div>
            </div>
          </div>
          </Link>
                </div>
               
              </div>
              <div className="third_col">
              <div className="timg">
              <Link to="/startup-funding">
              <div className="card">
              <img src="\image\man.jpg" alt="" srcset="" />
            <div className="open">
              <div className="open_inner">
                <Slide bottom>
                  <h2>
                    {" "}
                    Startup Funding
                  </h2>

                </Slide>
              </div>
            </div>
          </div>
          </Link>
                </div>
                <div className="timg">
                <Link to="/co-working">
                <div className="card">
                <img src="\image\man.jpg" alt="" srcset="" />
            <div className="open">
              <div className="open_inner">
                <Slide bottom>
                  <h2>
                    {" "}
                    Co-working Space
                  </h2>

                </Slide>
              </div>
            </div>
          </div>
          </Link>
                </div>
                
                
              </div>
            </div>
          </div>
         
          
          <div className="home_event">
              <h3>OUR EVENTS</h3>
              <h1>Events and Calender </h1>
            <div className="home_event_inner">
              <Slide left>
              <div className="home_event_left">
              <img src="\image\man.jpg" alt="" srcset="" />
              </div>
              </Slide>
              <Slide left>
              <div className="home_event_right">
                <h2>Our events and Calender</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut accusantium suscipit, aliquid culpa rem magnam beatae ducimus incidunt. Illo illum saepe voluptas quam sed ea reprehenderit voluptate iure rem.</p>
              </div>
              </Slide>
            </div>
          </div>
          
          <div className="home_stratege">
        <h3>OUR STRATEGY</h3>
        <h1>Strategies for Innovations</h1>
        <div className="home_stratege_inner">
        <Slide left>
          <div className="training">
            <div className="stratege_card">
            <div className="icon">
            <i className="fas fa-graduation-cap"></i>
            </div>
              <h2>TRAINING</h2>
              <p>Fundamentally, to learn how to become a software developer is the same as to pursue any career path: hard work will truly determine success, not talent.</p>
              <p>We provide training for individuals and organisation with no knowledge on web/mobile application development to a self dependent level. </p>
            </div>
          </div>
          </Slide>
          <Slide left >
          <div className="out_sourcing">
          <div className="stratege_card">
          <div className="icon">
          <i class="fab fa-creative-commons-share"></i>
          </div>
              <h2>OUTSOURCING</h2>
              <p>
              Satisfied clients and successfully-completed projects is our focus, We provide the best technicians, risk minimisation, cost savings, for software development.
              </p>
              <p>with extra attention and deadline consideration to deliver high standards that speak of your business quality</p>
          </div>
          </div>
          </Slide>
          <Slide left >
          <div className="mentorship">
          <div className="stratege_card">
          <div className="icon">
          <i className="fas fa-chalkboard-teacher"></i>
          </div>
              <h2>MENTORSHIP</h2>
              <p>Mentoring can be a powerful tool for change and growth. Under the right mentor, a mentee is able to expand their capabilities and realize their potential. </p>
              <p>At Space Innovation, we are committed to supporting and improving technology in Africa, hence the idea of providing a quality mentorship program.</p>
          </div>
          </div>
          </Slide>
        </div>
         
      </div>    
      <div className="home_contact_us">
        <div className="home_contact_us_inner">
          
          <div className="contact_form">
            <h2>Contact Us</h2>
            <p>No 36 Uke wende, High Level, Makurdi. Benue State.</p>
            <div className="form_div">
              <ContactForm />
            </div>
          </div>
          <div className="map">
          {/* <MapSection location={location} zoomLevel={17} /> */}
          </div>
          <div className="address">

              <p>
              <a
                    href="mailto:okekesylvaline.com?subject=From Space Innovation Tech Hub websit"
                    alt="Email Space Innovation Tech Hub"
                  >
                    admin@spaceinnovationTH.com
                  </a>
              </p>
              <p>
              <a
                    href="tel:08167424880"
                    alt="call Space Innovation Tech Hub"
                  >
                    08025363537
                  </a>
              </p>
              <p>
              <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
              </p>
          </div>
        </div>
      </div> 
      
        </div>
      </div>
      
      <Float />
    </div>
  );
}

export default Home;
