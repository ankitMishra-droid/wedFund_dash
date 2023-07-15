import React from "react";
import { Link } from "react-router-dom";
import logo from '../Images/Group1.png';
import '../style/style.css';


const NavBar = () =>{

    return(
        <>
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg bg-body navbar-light" style={{background:"light"}}>
                <div className="container">
                <Link className="navbar-brand" to="/"><img className="logo" src={logo} alt="Logo" /></Link>
                    {/* <button className="navbar-toggler" type="button" dat-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link ms-auto" aria-current="page" to="/dashboard">Dashboard</Link>
                            </li>
                        </ul>
                    {/* </div> */}
                </div>
            </nav>
        </div>
        </>
    )
}

export default NavBar