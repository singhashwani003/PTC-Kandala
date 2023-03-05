import React from 'react'
import "./Navbar.css"
import Facebook from "../../img/facebook.png";
import Twiter from "../../img/twitter.png";
import Youtube from "../../img/youtube.png";
import Instagram from "../../img/instagram.png";
import HeaderLogo from "../../img/header-logo-1.png";
export default function Navbar() {
  return (
    <div>
        <nav className="navbar logobar border-bottom">
            <div className="container">
                <div className="d-flex align-items-center justify-content-center w-100">
                        <div className="d-flex flex-column">
                            <a className="navbar-brand py-3 me-0 active ">
                                 <img src={HeaderLogo} className="img-fluid"></img></a>
                        </div>
                        <div className="ms-auto d-flex align-items-center flex-column">
                           <div className='d-flex flex-row align-items-center'>
                                    <form action="/action_page.php">
                                        <input type="submit" role="button" disabled="disabled" value="English" className="btn pr-2" style={{border:"none"}}></input>
                                    </form> 
                                    <span>/</span> 
                                    <form action="/action_page.php">
                                        <input type="submit" role="button" value="मराठी" className="btn pr-2 font-weight-bold text-primary"></input>
                                    </form>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                            </div>
                            <ul  className="navbar-nav d-none d-lg-flex">
                                <li className="nav-item">
                                    <div className="nav-link">
                                         <span className="me-2">Follow Us</span>
                                    <a href="#" target="_blank">
                                         <img src={Facebook} height="22" className="me-3"></img>
                                    </a>
                                    <a  href="#" target="_blank">
                                    <img src={Twiter} height="26" className="me-3"></img>
                                    </a>
                                    <a href="#" target="_blank">
                                    <img src={Youtube} height="28" className="me-3"></img>
                                    </a> 
                                    <a  href="#" target="_blank">
                                    <img src={Instagram} height="24"></img>
                                    </a>
                                    </div>
                                </li>
                                </ul>
                        </div>
                    </div>
                    <div className="text-center" style={{width: "100%"}}>
                        <a  href="#" target="_blank">
                        Police Training Center, Khandala, Dist – Pune, Tal – Maval
                        </a>
                     </div>
                     </div>
        </nav>
        <nav className="navbar navbar-expand-sm border-bottom p-4" style={{backgroundColor: "#9261aa"}}>
                <div className="container-sm">
                    <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav d-flex flex-wrap">
                                <li className="nav-item pe-3">
                                    <a className="nav-link x-text" href="#">Home</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link  x-text" href="#">About PTC</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link  x-text" href="#">In Service Courses</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link x-text" href="#">Training</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link x-text" href="#">Trainees Courses</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link x-text" href="#">Achievement</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link x-text" href="#">Social Responsibilities</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link x-text" href="#">Gallery</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link x-text" href="#">E-Libraries</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link x-text" href="#">Enquiry</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link x-text" href="#">Contact-Us</a>
                                </li>
                            </ul>
                    </div>
                </div>
        </nav>
    </div>
  )
}
