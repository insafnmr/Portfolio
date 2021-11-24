import React, { useState } from 'react'
import './skills.scss'
import Flash from 'react-reveal/Flash';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

export default function Skills() {

    const technology = [
        {
            id: "1",
            title: "Back-End",
            technologies: [
                {
                    techIcon: "https://img.icons8.com/color/96/000000/nodejs.png"
                },
                {
                    techIcon: "https://expressjs.com/images/express-facebook-share.png"
                },
                {
                    techIcon: "https://img.icons8.com/color/96/000000/javascript--v1.png"
                },
                {
                    techIcon: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png"
                }]
        },
        {
            id: "2",
            title: "Front-End",
            technologies: [
                {
                    techIcon: "https://img.icons8.com/color/96/000000/html-5--v1.png"
                },
                {
                    techIcon: "https://img.icons8.com/color/96/000000/css3.png"
                },
                {
                    techIcon: "https://img.icons8.com/color/96/000000/javascript--v1.png"
                },
                {
                    techIcon: "https://img.icons8.com/color/96/000000/react-native.png"
                },
                {
                    techIcon: "https://img.icons8.com/color/96/000000/redux.png"
                },
                {
                    techIcon: "https://img.icons8.com/color/96/000000/bootstrap.png"
                },
                {
                    techIcon: "https://img.icons8.com/color/96/000000/material-ui.png"
                }]
        },
        {
            id: "3",
            title: "Databases",
            technologies: [
                {
                    techIcon: "https://img.icons8.com/color/96/000000/mongodb.png"
                },
                {
                    techIcon: "https://img.icons8.com/fluency/96/000000/mysql-logo.png"
                }]
        },
        {
            id: "4",
            title: "Version Control",
            technologies: [
                {
                    techIcon: "https://img.icons8.com/color/96/000000/git.png"
                },
                {
                    techIcon: "https://img.icons8.com/material-outlined/96/000000/github.png"
                }]
        },
    ];

    return (
        <div className="skill" id="skills">
            <div className="container">
                <Zoom>
                    <div className="section-header text-center">
                        <p>Technologies that i use</p>
                        <h2>Technologies</h2>
                    </div>
                </Zoom>
                <div className="row">
                    {technology.map((tech) => (
                        <Slide bottom>
                            <div className="col-lg-6">
                                <div className="skill-item">
                                    <div class="skill-icon">
                                        <Flash>
                                            <i> {tech.title} </i>
                                        </Flash>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="d-flex justify-content-center">
                                            {tech.technologies.map((icon) =>
                                                <img src={icon.techIcon} style={{ width: '12%' }} alt="tech" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    ))}
                </div>
            </div>
        </div>
    )
}