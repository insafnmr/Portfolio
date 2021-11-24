import React from 'react'
import './listProjects.scss'

// export default function ListProjects({ project }) {
//     return (
//         <>
//             {project.map((pro) => (
//                 <>
//                     {/* // <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-1 wow fadeInUp" data-wow-delay="0.0s">
//                 //     <div className="portfolio-wrap">
//                 //         <div className="portfolio-img">
//                 //             <img src={pro.images[0].imgSrc} alt="Image" />
//                 //         </div>
//                 //         <div className="portfolio-text">
//                 //             <h3>{pro.title}</h3>
//                 //             <Modal pro={pro} />
//                 //         </div>
//                 //     </div>
//                 // </div> */}

//                     {pro.type === "web" && (
//                         <div class="col-lg-6 wow fadeInUp filter-1" data-wow-delay="0.0s">
//                             <div class="team-item">
//                                 <div class="team-img">
//                                     <img src={pro.images[0].imgSrc} className="img-thumbnail" alt="Image" />
//                                 </div>
//                                 <div class="team-text">
//                                     <h2>{pro.title}</h2>
//                                     <p>
//                                         {pro.desc}
//                                     </p>
//                                     <a href={`${pro.demo}`}> Demo </a>

//                                     <Modal project={pro} />
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                     {pro.type === "mobile" && (
//                         <div class="col-lg-6 wow fadeInUp filter-2" data-wow-delay="0.0s">
//                             <div class="team-item">
//                                 <div class="team-img">
//                                     <img src={pro.images[0].imgSrc} className="img-thumbnail" alt="Image" />
//                                 </div>
//                                 <div class="team-text">
//                                     <h2>{pro.title}</h2>
//                                     <h4>{pro.demo}</h4>
//                                     <p>
//                                         {pro.desc}
//                                     </p>
//                                     <Modal project={pro} />
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </>
//             ))}
//         </>
//     )
// }

export default function ListProjects({ id, title, active, setSelected }) {
    return (
        <li
            className={active ? "listProjects active" : "listProjects"}
            onClick={() => setSelected(id)}
        >
            {title}
        </li>
    );
}
