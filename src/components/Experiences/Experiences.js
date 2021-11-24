import React from 'react'
import './experiences.css'
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

export default function Experiences() {

    const experience = [
        {
            id: "1",
            title: "Full Stack JS Developer",
            company: "Go My Code",
            date: "September 2021 - October 2021",
            place: "Sousse",
            desc:
                `Design and development of a web application for real estate management and rental.`
            ,
            technologies: [
                {
                    techIcon: "https://img.icons8.com/color/96/000000/nodejs.png"
                },
                {
                    techIcon: "https://expressjs.com/images/express-facebook-share.png"
                },
                {
                    techIcon: "https://img.icons8.com/color/96/000000/react-native.png"
                },
                {
                    techIcon: "https://img.icons8.com/color/96/000000/redux.png"
                },
                {
                    techIcon: "https://img.icons8.com/color/96/000000/mongodb.png"
                },
            ]
        },
        {
            id: "2",
            title: "Research Memory",
            company: "ISIMM (Higher Institute of Computer Sciences and Mathematics of Monastir) / COSYS Laboratory of IFSTTAR (French Institute for Sciences and Technologies of Transport, Planning and Networks)",
            date: "March 2019 - October 2020",
            place: "Monastir",
            desc:
                "Evaluation of the performances offered to the applications of a cooperative Intelligent Transport System by an ETSI ITS-G5 communication network.",
            technologies: [
                {
                    techIcon: "https://img.icons8.com/color/96/000000/c-plus-plus-logo.png"
                },
                {
                    techIcon: "https://event.dlr.de/wp-content/uploads/2020/05/SUMO-Logo.png"
                },
                {
                    techIcon: "https://lh3.googleusercontent.com/proxy/u7SVB6fJxcv7hZbnBsIflQwCwl7GTzFQcBLmerrZnANcJJsDZueK32B5hohNhvYUqoKStlqy-WEfKYNv-6LIHmuVoFK1"
                },
            ]
        },
        {
            id: "3",
            title: "End of study internship : Mobile Developer",
            company: "TAV-IT: Monastir Habib Bourguiba Airport",
            date: "February 2017 - May 2017",
            place: "Monastir",
            desc:
                `Development of an Android application for managing monitor failures.`,
            technologies: [
                {
                    techIcon: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png"
                },
                {
                    techIcon: "https://img.icons8.com/fluency/96/000000/mysql-logo.png"
                },
                {
                    techIcon: "https://img.icons8.com/offices/80/000000/php-logo.png"
                },
            ]
        },

        {
            id: "4",
            title: "Summer internship",
            company: "Tunisie Télécom",
            date: "June 2016",
            place: "Ksar Hellal",
            desc:
                `Subscriber management. 
            Maintenance of PCs equipment.
            Moving with a maintenance staff of ADSL/landline telephone networks from the operator Tunisie Telecom. `,
        },
        {
            id: "5",
            title: "Summer internship",
            company: "ATE Consulting",
            date: "August 2015",
            place: "Monastir",
            desc:
                "Learning the Java programming language. ",
            technologies: [{
                techIcon: "https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png"
            }]
        },
    ];


    return (
        <div className="experience" id="experience">
            <div className="container">
                <Zoom>
                <div className="section-header text-center">
                    <p>My Resume</p>
                    <h2>Working Experience</h2>
                </div>
                </Zoom>
                {experience.map((exp) => (
                    <Slide left>
                    <div className="timeline">
                        <div className={`timeline-item ${exp.id%2 == 0 ?  "right slideInRight" : "left slideInLeft"}`}>
                            <div className="timeline-text">
                                <div className="timeline-date">{exp.date}</div>
                                <h2>{exp.title}</h2>
                                <h4>{exp.company} , {exp.place}</h4>
                                <p>{exp.desc} </p>
                                <div className="d-flex justify-content-center">
                                    {exp.technologies &&
                                        exp.technologies.map((icon) =>
                                            <img src={icon.techIcon} style={{ width: '10%' }} alt="tech" />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    </Slide>
                ))}
            </div>
        </div>
    )
}
