import React from 'react'
import ContactForm from "./ContactForm";


function MobileContact() {
    return (
        <div className="contact_us">
        <div className="contact_us_inner">
          
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
    )
}

export default MobileContact
