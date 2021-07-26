import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import SubLayout from "./SubLayout";


function About() {

  useEffect(()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  },[])
  return (
    <SubLayout>
      <div className="about">
        <div className="about_inner">
          <div className="about_intro">
            <div className="right">
              <div className="right_inner">
                <img src="\image\office_img1.jpg" alt="" srcset="" />
              </div>
            </div>

            <div className="bg_about_back_line"></div>
            <div className="bg_about_back"></div>
            <div className="bg_about_back shift_right"></div>

            <div className="left">
              <Fade bottom>
                <h3 className="title">Hi, Welcome to Space Innovation Tech Hub</h3>
                <div className="title_line"></div>
                <p className="sub_title">
                Space Innovation is the stop-point for technology development and innovation in Makurdi Benue state of Nigeria and it is also a statement of fact that this will be the largest Innovation Hub in Northern Nigeria as it regards experience, human resources, and geography.
                </p>
              </Fade>
              <Fade bottom>
                
               <p> Space Hub is designed to cater for the deficiency of technology enthusiasm of Mid-Belt Nigeria and the entire Northern Nigeria.</p>
              </Fade>

            </div>
          </div>


          <div className="about_staffs">
            <h3>Our Vision and Goal</h3>
          
          <div className="about_staffs_inner">
             
              <div className="staff_info">
              <p>
                The goal of this center is to be the access point for technology and innovation development of global repute and practice.
                </p>
                
              </div>
          </div>
      </div>

      <div className="about_staffs">
            <h3>Our Objective</h3>
          
          <div className="about_staffs_inner">
             
              <div className="staff_info staff_info_p">
            
                <p>
                Create a mobile development center for beginners and expert to connect.
                Create freelance support for independent start-up individuals through funding and partnership.
                </p>
                <p>
                  Create an open-source innovation and development in technology.
                Connect more people to modern technology and innovation.
                Train and retrain in Information technology.
                </p>
                <p>
                  Promote nano technology and nano innovation through education.
                  Sales and services in modern technology and equipment.
                </p>
              </div>
          </div>
      </div>

          <div className="about_staffs">
            <h3>Core Service</h3>
       
            <div className="about_staffs_inner">
             
             <div className="staff_info staff_info_grid staff_info_p">
           
               <p>
               IT co-worker space
               </p>
               <p>
               Mobile app development
               </p>
               <p>
               Software development
               </p>
               <p>IT Training</p>
               <p>IT Innovation and Development Support</p>
               <p>Domain Sales</p>
               <p> Server Sales</p>
               <p> Server Management</p>
               <p>Computer sales and service</p>
               <p>Start-up Support</p>
               <p>Digital Marketing</p>
               <p>Customer Service Support</p>
             </div>
         </div>
      </div>

      <div className="about_staffs ">
            <h3 className="staff_management">Our Management</h3>
       
          <div className="about_staffs_inner">
              <div className="staff_img">
              <img src="\image\office_img1.jpg" alt="" srcset="" />
              </div>
              <div className="staff_info">
                <h4>Name: <span>Mr Wonder SuperMan</span></h4>
              <h4>Position: <span>C.E.O</span></h4>
				<p>
					I am a 25 year old Nigerian software developer with science and art background. I love to spend my free time creating python game for kids, playing and going on long walks with my Cat. I love coding, fantasy and romance literature and
					series. 
				</p>
                <Link to="about-user"><button>Read More</button></Link>
              </div>
          </div>
      </div>
        </div>
       
      </div>
      
    </SubLayout>
  );
}

export default About;
