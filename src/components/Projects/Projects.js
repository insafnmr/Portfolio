import React, { useEffect, useState } from 'react'
import ListProjects from './ListProjects';
import './projects.scss'
import Modal from './Modal'
import { allProjects, mobileProjects, webProjects } from '../../data';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

export default function Projects() {

    const [selected, setSelected] = useState("all");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "all",
            title: "All",
        },
        {
            id: "web",
            title: "Web Apps",
        },
        {
            id: "mobile",
            title: "Mobile Apps",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(allProjects);
                break;
            case "web":
                setData(webProjects);
                break;
            case "mobile":
                setData(mobileProjects);
                break;
            default:
                setData(allProjects);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <div className="container">
                <Zoom>
                    <div className="section-header text-center" >
                        <p>My Projects</p>
                        <h2>My Portfolio</h2>
                    </div>
                </Zoom>
                <div className="row">
                    <div className="col-12">
                        <ul id="portfolio-filter">
                            {list.map((item) => (
                                <ListProjects
                                    title={item.title}
                                    active={selected === item.id}
                                    setSelected={setSelected}
                                    id={item.id}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="portfolio">
                    <div className="container">
                        <div className="row">
                            {data.map((d) => (
                                <Slide bottom>
                                    <div className="col-lg-6">
                                        <div className="portfolio-item">
                                            <div className="portfolio-img">
                                                <img src={d.imgCover} className="img-thumbnail" alt="Image" />
                                            </div>
                                            <div className="portfolio-text">
                                                <h2>{d.title}</h2>
                                                <p>
                                                    {d.desc}
                                                </p>
                                                {d.technology.map((tech) =>
                                                    <span> {tech} </span>)}
                                                <div className="portfolio-social">
                                                    {d.demo &&
                                                        <a className="btn" href={`${d.demo}`}> Demo </a>}
                                                    <Modal project={d} />
                                                    {d.github && <a className="btn" href=""><i className="fa fa-github fa-2x"></i></a>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Slide>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
