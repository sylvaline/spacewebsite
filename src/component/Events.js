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
          <div className="event_inner">
                          <div className="event_items">
                            <h3>Full Career Developer</h3>
                            <p>This programme is designed for people who are interested in becoming a professional developer in any of the programming languages, e.g.Software Development, Mobile App Development, Web Development etc.</p>
                          </div>

                          <div className="event_items">
                            <h3>Professional Training</h3>
                            <p>These types of training can be in the form of workshops, seminars and outdoor training for corporate establishments, government parastatals, multinationals, and private executives. These trainings are Data Analytics, Ethical Hacking, Data Science, Data Security, VPN Management, CCNA, CCNP etc.</p>
                          </div>

                          <div className="event_items">
                            <h3>Part Time Training</h3>
                            <p>This type of training captures special events and training that can last for a specified timeline and may have no further extensions. These trainings could be seasonal based on popular demands and requests, like bootcamps, seminars, workshops etc.</p>
                          </div>

                          <div className="event_items">
                            <h3 className="event_item_header">ABOUT BOOT CAMPS</h3>
                            <p>Our bootcamp programmes are fundamentals of programming, web designs, digital marketing, and basic computer operations. All bootcamp programs have a maximum of 4 weeks of intensive training and at the end all participants receive a certificate of completion.</p>
                            <p>Students who graduated from these courses are given concessions to be admitted into our intimate and advanced program on related courses of completion.</p>
                          </div>

                          <div className="event_items">
                            <h3>Bootcamp Event Calendar</h3>
                            <p>The bootcamps are in three phases: first the beginners’ phase which is the fundamentals of the desired training program, secondly there would be another phase for intermediate and the final stage is the advanced program of the desired course. </p>

                            <p>The programs are designed for every quarter of the year. Quarter 1 will be between January to April, quarter 2 will be between May to August and quarter 3 will between September to December. What this means is that within each of the three quarters there will be one bootcamp for every available program offered in Space Innovation Hub training programmes.</p>

                            <p>The admission for this program runs for the first one week before it is closed for admission.</p>
                          </div>

                          <div className="event_items">
                            <h3>Kids-n-Kode (Programming Bootcamp for Kids)</h3>
                            <p>With kids-n-kode we designed a summer programme on coding fundamentals for children within the age of 7 – 14 that are still in primary school or awaiting college entry. This programme has a minimum duration of 4 weeks and a maximum duration of 6 weeks depending on the length of the holidays the pupil has.</p>
                            <p><span>Code Mania (General Programming Bootcamp)</span>
                            Code mania is an acceleration bootcamp program for adults who want to take advantage of our quarterly programs to become professional developers. The bootcamp last for 4 weeks with an option to enrol into full time course programming training.
                            </p>
                          </div>

                          <div className="event_items">
                            <h3>Full Career Developer</h3>
                            <p>This programme is designed for people who are interested in becoming a professional developer in any of the programming languages, e.g.Software Development, Mobile App Development, Web Development etc.</p>
                          </div>

                          <div className="event_items">
                            <h3>Never Too Old to Code (Adult and Working-Class Bootcamp)</h3>
                            <p>This is a special bootcamp for civil servants, public servants and individuals who have interest in computer programming for the purpose of data science and data analytics. The program is designed to last for at least 6 weeks from the duration of admission to 8 weeks for extended fare with no extra charge.</p>
                          </div>

                          <div className="event_items">
                            <h3>Java SE Bootcamp</h3>
                            <p>Java SE bootcamp targets specifically the fundamentals of Java programming. It is expected that after this bootcamp, the mentee would have been able to code using either Intellij, Netbeans or Eclipes.</p>
                          </div>

                          <div className="event_items">
                            <h3>Python Bootcamp</h3>
                            <p>The python bootcamp is designed specifically for those who aspire to be backend developers and data scientists. The course like every other boot camp program will last for at least 4 weeks.</p>
                          </div>

                          <div className="event_items">
                            <h3>Web Design Bootcamp</h3>
                            <p>Participants are expected to learn the fundamentals of web designing, web systems security and web hosting. Like every other program this bootcamp will last for 4 weeks with no extension.</p>
                          </div>

                          <div className="event_items">
                            <h3>Computer Operations</h3>
                            <p>This programme is designed for people who are interested in becoming a professional developer in any of the programming languages, e.g.Software Development, Mobile App Development, Web Development etc.</p>
                          </div>

                          <div className="event_items">
                            <h3>Training Duration </h3>
                            <p>All bootcamp programmes are a minimum of 4 weeks and possible 2 weeks of extension.</p>
                          </div>

                          <div className="event_items">
                            <h3>Full Career Developer</h3>
                            <p>This programme is designed for people who are interested in becoming a professional developer in any of the programming languages, e.g.Software Development, Mobile App Development, Web Development etc.</p>
                          </div>

                          <div className="event_items">
                            <h3>Full Career Developer</h3>
                            <p>This programme is designed for people who are interested in becoming a professional developer in any of the programming languages, e.g.Software Development, Mobile App Development, Web Development etc.</p>
                          </div>
                        </div>
            
          </div>
        </div>
        </SubLayout>
    )
}

export default Events
