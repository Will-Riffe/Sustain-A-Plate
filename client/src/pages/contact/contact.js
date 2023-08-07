import React, { useState } from 'react';
import './contact.css';

function Contact() {
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted!');
        setMessageSent(true);
    };

    return (
        <div>
            <section id="contact" className="contact-section">
                <h2>Contact Us</h2>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
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
                    {messageSent && <p>Thank you! Your message has been sent.</p>}
                </div>
            </section>
        </div>
    );
}

export default Contact;
