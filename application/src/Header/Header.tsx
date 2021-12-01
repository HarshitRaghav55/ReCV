import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <React.Fragment>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-light bg-primary my-1">
                <div className="container-fluid ">
                    {/* <a className="navbar-brand me-3 text-white" href="#">ReCV</a> */}
                    <Link to = "/" className="navbar-brand me-3 text-white" >ReCV</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                {/* <a className="nav-link text-white" href="/Resume">Resume</a> */}
                                <Link to = "/Resume" className="nav-link text-white" >Resume</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">CV</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Jobs</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    About us
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">Meta</a></li>
                                    <li><a className="dropdown-item" href="#">Instagram</a></li>
                                    <li><a className="dropdown-item" href="#">....</a></li>
                                </ul>
                            </li>
                            <li>
                                <button className="btn btn-outline-light text-warning">Log-in</button>
                                <Link to = "/SignUp" >
                                <button className="btn btn-outline-light text-warning mx-1" >Sign-up</button>
                            </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
export default Header;