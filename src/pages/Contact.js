import React from 'react';
import '../styles/contact.css';
import '../styles/shared.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
    <>
    <section className="contact-hero">
        <div className="contact-heroText">
            <h2> CONTACT US </h2>
            <p> Feel free to use the form below if you have any questions, comments, or concerns</p>
        </div>
    </section>

{/* Contact Form and Information */}
<main className="contact">
    <div className="container">
        <div className="contactInfo">
            <div className="box">
                <div className="icon"><FontAwesomeIcon icon={faLocationDot} /></div>
                <div className="text">
                    <h3>Address</h3>
                    <p> 1234 Grand Line Lane,<br />Charlotte, North Carolina,<br />29512</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                <div className="text">
                    <h3>Email</h3>
                    <p> Contactus@Shonenlift.com</p>
                </div>
            </div>
            <div className="box">
                <div className="icon"><FontAwesomeIcon icon={faPhone} style={{color: "#000000",}} /></div>
                <div className="text">
                    <h3>Phone</h3>
                    <p> (980)-555-222</p>
                </div>
            </div>
        </div>

        <div className="contactForm">
            <form>
                <h2> Send Message</h2>
                <div className="inputBox">
                    <input type="text" name="fullname" required="required" />
                    <span>Full Name</span>
                </div>
                <div className="inputBox">
                    <input type="text" name="email" required="required" />
                    <span>Email</span>
                </div>
                <div className="inputBox">
                    <textarea required="required"></textarea>
                    <span>Type your Message. . .</span>
                </div>
                <div className="inputBox">
                    <input type="submit" name="submit" value="Send" />
                </div>
            </form>
        </div>
    </div>
</main>
</>
    );
}

export default Contact;

