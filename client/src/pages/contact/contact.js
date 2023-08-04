import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className="contactBody">
            <section id="contact" className="contact-section">
                <h2>Contact Us</h2>
                <div className="contact-form">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" required />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    );
}


export default Contact;