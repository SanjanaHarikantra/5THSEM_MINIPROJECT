// src/pages/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-content">
                <div className="contact-info">
                    <h3>Our Address</h3>
                    <p>123 Military Base Road</p>
                    <p>Defence City, 45678</p>
                    <p>Email: info@military.org</p>
                    <p>Phone: (123) 456-7890</p>
                </div>
                
                <div className="contact-form">
                    <h3>Get in Touch</h3>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                
                <div className="map">
                    <iframe
                        title="location-map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.513281850679!2d144.96430291569192!3d-37.81821717975145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1d342c3%3A0xd1338d28038dc340!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1614287733677!5m2!1sen!2sus"
                        width="100%"
                        height="250"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
