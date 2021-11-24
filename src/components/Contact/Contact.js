import React from 'react'
import "./contact.scss";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="container">
                <Zoom>
                    <div className="section-header text-center">
                        <p>Want to hire me ?</p>
                        <h2>Contact Me Via</h2>
                    </div>
                </Zoom>
                <Slide bottom>
                <div className="contact-info">
                    <div className="contact-menu">
                        <p><i className="fa fa-phone"></i> +216 22 289 169</p>
                        <p><i className="fa fa-envelope"></i> insaf.nemria13@gmail.com</p>
                    </div>
                    <div className="contact-social">
                    <a href="https://www.github.com/insafnmr"><i className="fa fa-github fa-3x"></i></a>
                        <a href="https://www.linkedin.com/in/insaf-nemria"><i className="fa fa-linkedin fa-3x"></i></a>
                    </div>
                </div>
                </Slide>
            </div>
        </div>
    )
}
