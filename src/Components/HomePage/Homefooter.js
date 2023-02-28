import React from 'react'
import "./HomePage.css";
export default function Homefooter() {
  return (
    <div>
        <div className="container mt-3 pt-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="d-flex align-items-center">
                            <img src="/img/header-logo-1.png" className="footer-logo" style={{width:"400px"}}></img>
                        </div>
                    </div> 
                    <div className="col-md-7 mt-4 mt-md-0">
                            <div className="row footer-quicklinks">
                                <div className="col-6 col-md-4">
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#" className="unset">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#" className="unset">Safety tips</a>
                                            </li>
                                            <li>
                                                <a href="#" className="unset">Recruitment</a>
                                            </li>
                                            <li>
                                            <a href="#" className="unset">Press Release</a>
                                            </li>
                                        </ul>
                                </div>
                                <div className="col-6 col-md-4">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" className="unset">Tenders</a>
                                        </li>
                                        <li>
                                            <a href="#" className="unset">Martyrs</a>
                                        </li>
                                        <li>
                                            <a href="#" className="unset">Commissionerate</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-md-4">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" className="unset">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#" className="unset">Helplines</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
                <small class="copyright text-center mt-4">
                    <div class="row">
                        <div class="col-4 text-right">Copyright  <span className="text-danger">PTC Khandala </span> 2023. All Rights Reserved.</div>
                        <div class="col-4">Police Training Center, Khandala, Dist – Pune, Tal – Maval Maharashtra, India.</div>
                        <div class="col-4 text-left">
                            <a href="#" target="_blank" class="unset"><span className="text-danger"> Happy Visitors Dot Com – </span><br/>Website Design and Development Company In Kolhapur</a>
                        </div>
                    </div>
                </small>
    </div>
  )
}
