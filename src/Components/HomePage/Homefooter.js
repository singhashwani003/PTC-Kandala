import React from 'react'
import "./HomePage.css";
import HeaderLogo from "../../img/header-logo-1.png";
export default function Homefooter() {
  return (
    <div>
        <div className='container-fluid mt-5 pt-3'>
            <iframe width="100%" height="508" id="gmap_canvas" src="https://goo.gl/maps/UsB6qLMAmLJRHrdM7" frameborder="0"  marginheight="0" marginwidth="0"></iframe>
        </div>
        <div className="container-fluid pt-5 pb-3" style={{backgroundColor:"#faa652" ,paddingLeft:"3rem",paddingRight:"3rem"}}>
                <div className="row">
                    <div className="col-md-5">
                        <div className="d-flex align-items-center">
                            <img src={HeaderLogo} className="footer-logo" style={{width:"400px"}}></img>
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
                <small className="copyright text-center pt-3">
                    <div className="row">
                        <div className="col-4 text-right">Copyright  <span className="text-danger">PTC Khandala </span> 2023. All Rights Reserved.</div>
                        <div className="col-4">Police Training Center, Khandala, Dist – Pune, Tal – Maval Maharashtra, India.</div>
                        <div className="col-4 text-left">
                            <a href="#" target="_blank" className="unset"><span className="text-danger"> Happy Visitors Dot Com – </span><br/>Website Design and Development Company In Kolhapur</a>
                        </div>
                    </div>
                </small>
    </div>
  )
}
