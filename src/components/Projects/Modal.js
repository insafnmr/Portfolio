import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ModalPic = ({ project }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a class="btn" onClick={handleShow} data-lightbox="portfolio"><i className="fa fa-image fa-2x"></i></a>

            <Modal style={{ backgroundColor: 'transparent' }} show={show} onHide={handleClose} animation={false} >
                <Modal.Header className="d-flex justify-content-end">
                    <i className="fa fa-times animation" onClick={handleClose}></i>
                </Modal.Header >
                <Modal.Body className="modal-content-body">
                    <Carousel
                        infiniteLoop={true}
                        autoPlay={true}
                    >
                        {project.images.map((img) =>
                            <img src={img.imgSrc} className="img-responsive img-thumbnail" />)
                        }
                    </Carousel>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default ModalPic
