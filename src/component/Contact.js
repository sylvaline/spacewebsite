import React, {useEffect} from 'react'
import ContactForm from "./ContactForm";
import MapSection from './Maps'
import { Link } from "react-router-dom";

function Contact() {

  useEffect(()=>{
    window.scrollTo({top:0, behavior:'smooth'})
  },[])

    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
      }
    
    return (
      <div className="contact_us">
      <div className="contact_us_inner">
        <div className="address">
        <h1>
              <Link to="/">Space Innovation</Link>
            </h1>
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
        <div className="contact_form">
          <h2>Contact Us</h2>
          <p>No 36 Uke wende, High Level, Makurdi. Benue State.</p>
          <div className="form_div">
            <ContactForm />
          </div>
        </div>
        <div className="map">
        <MapSection location={location} zoomLevel={17} />
        </div>
      </div>
    </div>
    )
}

export default Contact
