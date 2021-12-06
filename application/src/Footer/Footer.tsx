import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Footer/Footer.css"
const Footer = () => {
    return (
        <React.Fragment>
            <div className="footer-distributed"  >

<div className="footer-left">
    <img src="Imagess/logoo.png" />
    <h3>About&nbsp;<br /><span>ReCV</span></h3>

    <p className="footer-links">
        <a href="#">Home</a>
        |
        <a href="#">Blog</a>
        |
        <a href="#">About</a>
        |
        <a href="#">Contact</a>
    </p>

    <p className ="footer-company-name">© 2021 ReCV.</p>
</div>

<div className="footer-center">
    <div>
        <i className="fa fa-map-marker"></i>
        <p><span>NH-2,GLA UNIVERSITY
            </span>
            MATHURA - 205001</p>
    </div>

    <div>
        <i className="fa fa-phone"></i>
        <p>+91 22-27782183</p>
    </div>
    <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:support@bonvoyage.com">support@ReCV.com</a></p>
    </div>
</div>
<div className="footer-right">
    <p className="footer-company-about">
        <span>About the Page</span>
        We offer best Resume and CV templates that will make your life easy in making resume.
    </p>
    <div className="footer-icons">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-youtube"></i></a>
    </div>
</div>
</div>
            
        </React.Fragment>
    );
}
export default Footer;