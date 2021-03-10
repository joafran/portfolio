import React from 'react';
import '../../styles/contact.css';
import { SiGithub, SiLinkedin, SiGmail } from 'react-icons/si';

const Contact = ({lang}) => {
    
    return (
        <div className="contact-page">
                <div id="contact" className="contact-footer">
                        <h2>{lang ? '¡Mantengámonos en contacto!' : `Let's get in touch!`}</h2>                    
                        <div className="contact-links">
                            <a href="https://github.com/joafran"><SiGithub className="contact-icon"/></a>
                            <a href="https://www.linkedin.com/in/joaquin-franco-3772951b5/"><SiLinkedin className="contact-icon"/></a>
                            <a href="mailto:joafran0016@gmail.com"><SiGmail className="contact-icon"/></a>
                        </div>
                </div>
            </div>
    );
}

export default Contact;