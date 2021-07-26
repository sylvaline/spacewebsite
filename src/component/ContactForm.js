import React, { useState } from 'react'

function ContactForm() {

    const [contact_sent, setContact_sent] = useState(false)

    const [contact, setContact] = useState({
        name : '',
        email : '',
        phone : '',
        message : ''
    })
    

    const handleChange = (e)=>{
        setContact({
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const {name, email, phone, message} = contact

        const new_message = {
            name,
            email,
            phone,
            message
        }

       

        console.log(new_message)
    }

    if(contact_sent){
        return (
            <div className="form_div">
            <h2>Thanks for contacting us!</h2>
        </div>
        )
    } else{
        return (
            
               <div className="form_div">
               <form className="" onSubmit={handleSubmit}>
               <div className="form_style">
               <input type="text" placeholder="Name:" value={contact.name} name="name " onChange={handleChange} />
               </div>
               <div className="form_style">
               <input type="email" placeholder="Email:" value={contact.email} name="email " onChange={handleChange} />
               </div>
               <div className="form_style">
               <input type="phone" placeholder="Phone:" value={contact.phone} name=" phone" onChange={handleChange} />
               </div>
               <textarea cols="30" rows="10" placeholder="Message:"value={contact.message} name="message" onChange={handleChange}></textarea>
               <div className="form_btn">
               <button onClick={()=> setContact_sent(true)}>Send Message</button>
               </div>
           </form>
           </div>
        )
    }
}

export default ContactForm
