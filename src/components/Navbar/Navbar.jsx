import React from 'react'
import {Link} from 'react-router-dom';
import img2 from '../../images/Scenery [3840x2160]_.jpg'
import { NavLink } from 'react-router-dom'
function Navbar() {
    const user=true;
    return (
    <>
        <nav className="navbar navbar-light navbar-expand-lg bg-light">
            <div className="container">
            <NavLink className="navbar-brand ms-5" to="/">
               <span className=" m-2"><i className="fa-brands fa-square-facebook facebook"></i></span>
               <span className=" m-2"><i className="fa-brands fa-instagram instagram"></i></span>
               <span className=" m-2"><i className="fa-brands fa-square-twitter twitter"></i></span>
               <span className=" m-2"><i className="fa-brands fa-telegram telegram"></i></span>
            </NavLink>
                <button className="navbar-toggler z-index" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="headerNav collapse navbar-collapse " id="navbarSupportedContent">
                
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item align-self-center ">
                            <NavLink className="nav-link active NavLinks" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item align-self-center">
                            <NavLink className="nav-link fs-1 active NavLinks" aria-current="page" to="/">W&V</NavLink>
                        </li>
                        <li className="nav-item align-self-center">
                            <NavLink className="nav-link NavLinks" aria-current="page" to="/write">Write</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav   mb-2 mb-lg-0 text-center">
                        <li className="nav-item align-self-center ">
                            <NavLink className="nav-link ms-3 " aria-current="page" to="/"><i className="fa-solid fa-magnifying-glass"></i></NavLink>
                        </li>
                        <li className="nav-item align-self-center ms-1">
                            <NavLink className="nav-link ms-3" to="/settings">{user?(<img src={img2} className="Userimg" alt="Userimg"/>):(
                                <div className="d-flex">
                                <Link to="/login" className="nav-link ">LOGIN</Link> <Link to="/register" className="nav-link ">RESGISTER</Link>
                                </div>
                            )}</NavLink>
                        </li>
                        <li className="nav-item align-self-center ">
                        <NavLink className="nav-link ms-3" to="/login">{user&&"LOGOUT"}</NavLink>
                        </li>
                    </ul>  
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;