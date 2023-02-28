import React from 'react'
import "./Navbar.css"
export default function Navbar() {
  return (
    <div>
        <nav className="navbar logobar navbar-light bg-white border-bottom">
            <div className="container">
                <div className="d-flex align-items-center justify-content-center w-100">
                        <div className="d-flex flex-column">
                            <a className="navbar-brand py-3 me-0 active ">
                                 <img src="/img/header-logo-1.png" className="img-fluid"></img></a>
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
                                         <img src="/img/facebook.png" height="22" className="me-3"></img>
                                    </a>
                                    <a  href="#" target="_blank">
                                    <img src="/img/twitter.png" height="26" className="me-3"></img>
                                    </a>
                                    <a href="#" target="_blank">
                                    <img src="/img/youtube.png" height="28" className="me-3"></img>
                                    </a> 
                                    <a  href="#" target="_blank">
                                    <img src="/img/instagram.png" height="24"></img>
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
        <nav className="navbar navbar-expand-sm navbar-light bg-light border-bottom p-4">
                <div className="container-sm">
                    <div className="collapse navbar-collapse" id="mynavbar">
                            <ul className="navbar-nav d-flex flex-wrap">
                                <li className="nav-item pe-3">
                                    <a className="nav-link" href="#" >Home</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link" href="#">About PTC</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link" href="#">In Service Courses</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link" href="#">Training</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link" href="#">Trainees Courses</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link" href="#">Achievement</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link" href="#">Social Responsibilities</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link" href="#">Gallery</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link" href="#">E-Libraries</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link" href="#">Enquiry</a>
                                </li>
                                <li className="nav-item pe-3">
                                    <a className="nav-link" href="#">Contact-Us</a>
                                </li>
                            </ul>
                    </div>
                </div>
        </nav>
    </div>
  )
}
