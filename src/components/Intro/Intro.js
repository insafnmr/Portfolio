import { init } from 'ityped';
import React, { useEffect, useRef } from 'react'
import './intro.scss'

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Web Developer", "Full Stack Developer", "Front End Developer", "Back End Developer"],
        });
    }, []);

    return (
        <div className="intro" id="intro">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6 d-md-block">
                        <div className="intro-image">
                            <img src="images/insaf1.png" alt="Insaf" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="intro-content">
                            <div className="intro-text ">
                                <p>Hi There, I'm</p>
                                <h1>Insaf Nemria</h1>
                                <h3 ref={textRef}></h3>
                            </div>
                            <div className="intro-btn">
                                <a className="btn" href="#contact">Contact Me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}