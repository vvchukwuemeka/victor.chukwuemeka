import React from 'react';
import "./Contact.css"

const Contact = () => {
  return (
    <div id="contact">
        <span className="contactPageTitle">Contact Me</span>
        <span className="contactDesc">Please fill the form below lets discuss with you</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder='Your Name' />
            <input type="email" className="email" placeholder='Your Email' />
            <textarea className='msg' name="message"rows="5" placeholder='Your Message'></textarea>
            <button type="submit" value="send" className="submitBtn">submit</button>
            <div className="links">
                <img src="./images/linkedin img.png" alt="Linkedin" className="linkImg" />
                <img src="./images/github img.jpg" alt="GitHub" className="linkImg" />

            </div>
        </form>


    </div>
  )
}

export default Contact