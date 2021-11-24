import React from 'react'
import './footer.scss'
import Fade from 'react-reveal/Fade';

export default function Footer() {
    return (
        <Fade>
            <div className="footer">
                <div >
                    <div className="container copyright">
                        <p>&copy; 2021 <a href="/">IN-Portfolio</a>, All Rights Reserved </p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
