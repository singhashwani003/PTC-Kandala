import React from 'react'
import Homefooter from './Homefooter'
import New from "../../img/new.gif";
import OurLogo from "../../img/ourLogo@2x.png";
import Image1 from "../../img/3.png";
import Image2 from "../../img/11.png";
import Image3 from "../../img/12.png";
import Image4 from "../../img/img.1.jpg";
import OurLogo1 from "../../img/76.jpg"
import CitizenCorner from "../../img/citizen-corner.svg"
import GoodWorks from "../../img/goodworks.svg"
import SmartCollect from "../../img/smartcollect.svg"
import News1 from "../../img/news.svg"
import QuickLink from "../../img/quick-links.svg"
import ContactUs from "../../img/contact-us.svg"
import MPolice from "../../img/m-police-2.svg"
import Search from "../../img/search-svg.svg"
import Image5 from "../../img/img.3.jpg"
import CountUp from "react-countup";
import LostFound from "../../img/lost-and-found.svg";
import PoliceRequiter from "../../img/police-recruitment.svg";
import TenantInfo from "../../img/tenant-information.svg";
import Missing from "../../img/missing-person.svg";
import Accident from "../../img/accident-compensation.svg";
import Stolen from "../../img/stolen-unclaimed-vehicle.svg";
import ContactSp from "../../img/img.5.jpg";
import Quote from "../../img/quote.svg";
import A5 from "../../img/a-2.png";
import A2 from "../../img/a-2.png";
import A3 from "../../img/a-3.png";
import A4 from "../../img/a-4.png";
import IGP from "../../img/img.3.jpg"
import "./HomePage.css"

import img3 from "../../img/img.3.jpg";

import { ReactComponent as  CitizenCornerSvg } from "../../img/citizen-corner.svg";

export default function Home() {
  return (
    <div>
        <div className="container-fluid">
                <div className='row'>
                    <div className="col-12 col-md-6 offset-md-3">
                            <div className="alert alert-primary alert-dismissible fade show mt-3 d-flex align-items-center" style={{flexFlow:"wrap"}}>
                                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                <div className="flex-grow-1">
                                    <h6 className="mb-0 d-flex align-items-center">
                                        <img src={New} height="30px" className="me-2"></img>
                                        <div className='text-dark'>Recruitment 2021 - Latest Updates<br/>पोलीस भरती २०२१ - महत्वाचा सूचना</div>
                                    </h6>
                                </div>
                                <div className="mt-2">
                                    <button className="btn btn-dark text-white me-2" role="button">Click here / इथे क्लिक करा</button>
                                </div>
                            </div>
                    </div> 
                    <div className="col-12 col-md-6 offset-md-3">
                        <div className="alert alert-primary alert-dismissible fade show mt-3 d-flex align-items-center" style={{flexFlow: "wrap"}}>
                            <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                            <div className="flex-grow-1">
                                <h6 className="mb-0 d-flex align-items-center">
                                    <div className='text-dark'> मुंबई लोहमार्ग पोलीस मुख्यालय, घाटकोपर जलतरण तलाव, <br/>फुटबॉल मैदान व सिंथेटिक अ&zwj;ॅथलेटिक्स </div>
                                </h6>
                            </div> 
                            <div className="mt-2">
                            <a href="#" target="_blank" tag="button" role="button" className="btn btn-dark text-white me-2">Click here / इथे क्लिक करा</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        <div className='container pt-3 mt-5' style={{backgroundColor:"#eef5f9"}}>
            <div className='row d-flex align-items-center justify-content-between'>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <div className="complaint-section">
                            <div className='d-flex align-items-center'>
                                <img src={OurLogo} className="our-logo hidden-xs" alt="Mumbai Police"></img>
                                <img src={OurLogo1} className="our-logo hidden-xs slider" alt="Mumbai Police" style={{marginLeft: "55px",height: "181px"}}></img>
                            </div>
                            <h1 className='main'>Police Training Center</h1>
                            <h5 className='main1'> &nbsp;<strong>सदैव तत्पर, सदैव मदतीस </strong></h5>
                            <h5 className='text-secondary mt-3' style={{fontFamily: "auto"}}>Taking stock of your security round the clock! Dial 100 in case of any emergency. Help us to help you.</h5>
                            <div className='d-flex align-items-center mt-2'>
                            <button className="btn btn-md btn-primary">From CP′s Desk</button>
                            <button className="btn btn-md btn-warning text-dark ms-3">Run For Unity</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 img-slide">
                        <div id="demo" className="carousel slide img1" data-bs-ride="carousel" style={{transform: "rotateZ(330deg)",backgroundColor: "#f1f4f8"}}>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Image1} alt="Los Angeles" className="d-block img1" style={{width:"100%" ,transform: "rotate(30deg)"}}></img>
                                </div>
                                <div className="carousel-item">
                                    <img src={Image2} alt="Chicago" className="d-block img1" style={{width:"100%",transform: "rotate(30deg)"}}></img>
                                </div>
                                <div className="carousel-item">
                                    <img src={Image3} alt="New York" className="d-block img1" style={{width:"100%",transform: "rotate(30deg)"}}></img>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon "></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                            <span className="carousel-control-next-icon "></span>
                            </button>
                     </div>
                </div>
            </div>
        </div>

        <div className='container-fluid khandala pt-5 pb-5 border-bottom'>
           <div className='row d-flex justify-content-around align-items-center'>
                <div className='col-sm-5 col-md-3 col-xl-3 col-lg-3'>
                <div className="card" style={{border:"none", backgroundColor: "rgba(217,217,217,1)"}}>
                    <img className="card-img-top mx-auto d-flex" src={Image4} alt="Card image" style={{width:"100%"}}></img>
                    <div className="card-body">
                    <h4 className="card-title text-center text-dark" style={{fontWeight:"700"}}>Sanjay Kumar</h4>
                    <div className="card-text text-center" style={{fontSize:"1em"}}>Director General Of Police ( Training and Special Units ), Maharashtra State</div>
                    </div>
               </div>
                </div>
                <div className='col-sm-12 col-md-5 col-xl-6 col-lg-6 services-holder'>
                    <div className="d-flex flex-wrap justify-content-center">
                            <div className="service">
                                <div className="service-title">
                                    <img src="/img/citizen-corner.svg" height="50" className="mx-auto d-block mb-3"></img>
                                    <div className="text-center line-height-1">Citizen Service</div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="service-title">
                                    <img src={GoodWorks} height="50" className="mx-auto d-block mb-3"></img>
                                    <div className="text-center line-height-1">Our Works</div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="service-title">
                                    <img src={SmartCollect} height="50" className="mx-auto d-block mb-3"></img>
                                    <div className="text-center line-height-1">Recruitment</div>
                                </div>
                            </div>
                            <div className="service">
                                <div  className="service-title">
                                    <img  src={News1} height="50" className="mx-auto d-block mb-3"></img>
                                    <div  className="text-center line-height-1">Press Release</div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="service-title">
                                    <img src={QuickLink} height="50" className="mx-auto d-block mb-3"></img>
                                    <div className="text-center line-height-1">Useful Links</div>
                                </div>
                            </div>
                            <div className="service">
                                <div  className="service-title">
                                    <img src={ContactUs} height="50" className="mx-auto d-block mb-3"></img>
                                    <div  className="text-center line-height-1">Contact Us</div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="service-title">
                                    <img  src={MPolice} height="50" className="mx-auto d-block mb-3"></img>
                                    <div  className="text-center line-height-1">Train Service</div>
                            </div>
                            </div>
                            <div className="service">
                                <div className="service-title">
                                    <img src={GoodWorks} height="50" className="mx-auto d-block mb-3"></img>
                                    <div className="text-center line-height-1">Our Works</div>
                                </div>
                            </div>
                                <div  className="service">
                                    <div  className="service-title">
                                        <img  src={Search} height="50" className="mx-auto d-block mb-3"></img>
                                        <div  className="text-center line-height-1">Railway Map</div>
                                    </div>
                                </div>
                                <div className="service">
                                <div  className="service-title">
                                    <img  src={News1} height="50" className="mx-auto d-block mb-3"></img>
                                    <div  className="text-center line-height-1">Press Release</div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='col-sm-7 col-md-4 col-xl-3 col-lg-3'>
                    <div className="card" style={{border:"none",backgroundColor: "rgba(217,217,217,1)"}}>
                        <img className="card-img-top mx-auto d-flex" src={IGP} alt="Card image" style={{width:"100%"}}></img>
                    <div className="card-body">
                        <h4 className="card-title text-center text-dark" style={{fontWeight:"700"}}>M. M. Makandar</h4>
                        <div className="card-text text-center" style={{fontSize:"1em"}}>Principal Police Training Center, Khandala</div>
                    </div>
                </div>
                </div>
           </div>
        </div>

        <div className='container mt-5 pt-3'>
                <div className="justify-content-center my-5  container">
                        <blockquote className="blockquote text-center mb-5">
                            <h2 className="text-center main">Most Used By PTC Khandala</h2>
                            <p className="sc-dlnjwi dJXsSm">From 'Lost &amp; Found' to 'Tenant Information' and everything in between, we have listed Quick Links of our most used sections here for you.</p>
                        </blockquote>
                        <div>
                            <div className="row">
                                <div className="mt-5 d-flex flex-column align-items-center col">
                                    <a className="quick-links-image-wrapper rounded-circle justify-content-center align-items-center" href="#">
                                    <img alt="[object Object]" src={LostFound} width="65" height="67" className="d-inline-block align-top"></img></a>
                                    <p className="text-center mt-3"><span>Lost &amp; Found</span></p>
                            </div>
                                <div className="mt-5 d-flex flex-column align-items-center col">
                                    <a className="quick-links-image-wrapper rounded-circle justify-content-center align-items-center" href="#">
                                    <img alt="[object Object]" src={PoliceRequiter} width="65" height="67" className="d-inline-block align-top"></img>
                                    </a>
                                    <p className="text-center mt-3">
                                    <span>Police Recruitment</span>
                                    </p>
                                </div>
                                <div className="mt-5 d-flex flex-column align-items-center col">
                                    <a href="#" target="_blank" className="quick-links-image-wrapper rounded-circle justify-content-center align-items-center">
                                    <img alt="[object Object]" src={TenantInfo} width="65" height="67" className="d-inline-block align-top"></img>
                                    </a>
                                    <p className="text-center mt-3"><span>Tenant Information</span></p>
                                </div>
                                <div className="mt-5 d-flex flex-column align-items-center col">
                                    <a href="#" target="_blank" className="quick-links-image-wrapper rounded-circle justify-content-center align-items-center">
                                    <img alt="[object Object]" src={Missing} width="65" height="67" className="d-inline-block align-top"></img>
                                    </a>
                                    <p className="text-center mt-3"><span>Missing Persons</span></p>
                                </div>
                                <div className="mt-5 d-flex flex-column align-items-center col">
                                    <a className="quick-links-image-wrapper rounded-circle justify-content-center align-items-center" href="#">
                                    <img alt="[object Object]" src={Accident} width="65" height="67" className="d-inline-block align-top"></img>
                                    </a>
                                    <p className="text-center mt-3">
                                    <span>Accident Compensation</span>
                                    </p>
                                </div>
                                <div className="mt-5 d-flex flex-column align-items-center col">
                                    <a href="#" target="_blank" className="quick-links-image-wrapper rounded-circle justify-content-center align-items-center">
                                    <img alt="[object Object]" src={Stolen} width="65" height="67" className="d-inline-block align-top"></img>
                                    </a>
                                    <p className="text-center mt-3">
                                    <span>Stolen &amp; Unclaimed Vehicles</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
        </div>

                <div className="container-fluid mt-3 pt-5 pb-3 khandala-sec">
                        <div className="row">
                            <div className="col-12 col-md-5 mt-5 col d-flex align-items-center">
                                <div className="col">
                                    <div className="sp-section">
                                    <img alt="contact Sp" src={ContactSp} className="d-block align-center sp-section-img"></img>
                                    <a href="#civil-speech" className="btn border-radius-50 sp-section-buttons d-none btn btn-primary">Engage with CP</a>
                                    </div>
                                </div>
                            </div>
                        <div className="col-12 col-md-7 mt-5 col">
                            <div className="row">
                                    <div className="col-12 col-md-2 justify-content-center col">
                                        <img alt="quote" src={Quote} width="85" height="59" className="d-block align-top rounded-circle m-auto"></img>
                                    </div>
                                    <div className="col-12 col-md-10 col">
                                        <h2 className='head-text-start'>PTC Khandala</h2>
                                        <p className="pt-2" style={{color: "rgb(149, 149, 149)"}}>Namaskar, Khandala</p><p style={{color: "rgb(149, 149, 149)"}}>The Police training Centre, Khandala was established in the year 1960 <span style={{fontWeight: "bold", color: "rgb(250, 166, 82)"}}>informed and educated </span> and it is situated in the Sahyadri ranges of Maval Tahsil of Pune district. The institute is approximately at an altitude of 1000 meters from mean sea level and acquires 46 acres of land. Over the years, 63 batches of men and 28 batches of women Police Constable have been trained successfully  nd without fear or favor. We strive to create a <span style={{fontWeight: "bold", color: "rgb(250, 166, 82)"}}>fear-free environment</span> that is conducive to growth and development of our beautiful city.</p><p style={{color: "rgb(149, 149, 149)"}}> from this training center and they are rendering excellent service for the Maharashtra Police department Till now this institute has trained total no. of 37208 police men & women constables.<span style={{fontWeight: "bold", color: "rgb(250, 166, 82)"}}>4 broad areas</span>: Frontline Policing, Community Engagement, Comprehensive Investigations and Use of Technology.</p><p style={{color: "rgb(149, 149, 149)"}}><br/><strong>Director General Of Police ( Training and Special Units ), Maharashtra State</strong><span className="speech-bubble" style={{display: "block" ,background: "0% 0% no-repeat padding-box padding-box rgb(229, 229, 229)", padding: "10px",marginTop: "20px", borderRadius: "8px", minHeight: "68px"}}>Shri. Sanjay Kuma Director General Of Police  Training and Special Units</span></p>
                                    </div>
                            </div>
                        </div>
                        </div>
                </div>

                <section className="container col6">
                    <div className="container4">
                        <div className="shape">
                            <h1>Our Trainers are well Qualified</h1>
                            <p>We don't like to brag, but we don't mind letting our customers do it for us.<br/> Here are a few nice things folks have said about our themes over the years</p>
                        </div>
                        <div className="row shape2" style={{margintop: "3rem",
                            boxShadow:"4px 4px 40px rgba(150, 121, 121, 0.6)",
                            boxSizing: "border-box",
                            width: "100%",
                            height: "350px",
                            marginLeft: "auto",
                            marginRight: "auto",
                            backgroundColor: "white",
                            borderRadius: "6px"}}>
                                <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 text d-flex align-items-center justify-content-center shape3" style={{borderRadius: "0px 150px 150px 0px",backgroundColor:"rgb(232 243 218)"}}>
                                <div>
                                    <h1>Indoor Training</h1>
                                    <p>"Indoor and Outdoor basic training for women police constables is imparted for a period of 09 months."</p>
                                    <div className='text-center'>
                                        <button className='btn btn-outline-primary btn-md text-center'>View more</button>
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-xl-6 col-lg-6 text d-flex align-items-center justify-content-center">
                                    <div>
                                        <h1>Outdoor Training</h1>
                                        <p>"The trainees mainly belong to various remote and tribal districts of Maharashtra like Nagpur, Gadchiroli, Chandrapur, Gondia, etc."</p>
                                        <div className='text-center'>
                                            <button className='btn btn-outline-primary btn-md text-center'>View more</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                     </div>
                </section>

                <div className="container my-5 py-5">
                    <div className="section-title">
                        <h2>Facts</h2>
                    <p>The Police training Centre, Khandala was established in the year 1960 informed and educated and it is situated in the Sahyadri ranges of Maval Tahsil of Pune district. The institute is approximately at an altitude of 1000 meters from mean sea level and acquires 46 acres of land. Over the years, 63 batches of men and 28 batches of women Police Constable have been trained successfully</p>
                        </div>
                    <div className="row no-gutters">
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                             <div className="count-box"><i className="bi bi-emoji-smile"></i> 
                                <span><CountUp end ={232} /></span><p><strong>Happy Clients</strong> consequuntur quae</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box"><i className="bi bi-journal-richtext"></i><span><CountUp end ={521} /></span><p>
                                <strong>Projects</strong> adipisci atque cum quia aut</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box"> 
                                <i className="bi bi-headset"></i> 
                                <span><CountUp end ={1453} /></span><p>
                                <strong>Hours Of Support</strong> aut commodi quaerat</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box"> 
                                <i className="bi bi-people"></i> 
                                <span><CountUp end ={1453} /></span>
                                <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='container-fluid mt-5 gallery1'>
                <h2 className='text-secondary d-flex align-items-center justify-content-center pb-5 mb-3' style={{fontWeight:"700"}}> Police Training Center Khandala Gallery</h2>
                    <div className='row'>
                      <div className='col-xl-3 col-lg-3 col-sm-12 col-md-6 max mt-3'>
                            <img src={A5} alt="galleryimage" style={{width:"100%",height:"300px",borderRadius:"6px"}}></img>
                      </div>
                      <div className='col-xl-3 col-lg-3 col-sm-12 col-md-6 max mt-3'>
                            <img src={A2} alt="galleryimage" style={{width:"100%",height:"300px",borderRadius:"6px"}}></img>
                      </div>
                      <div className='col-xl-3 col-lg-3 col-sm-12 col-md-6 max mt-3'>
                            <img src={A3} alt="galleryimage" style={{width:"100%",height:"300px",borderRadius:"6px"}}></img>
                      </div>
                      <div className='col-xl-3 col-lg-3 col-sm-12 col-md-6 max mt-3'>
                            <img src={A4} alt="galleryimage" style={{width:"100%",height:"300px",borderRadius:"6px"}}></img>
                      </div>
                    </div>
                </div>
            <button type="button" class="floating-button" data-bs-toggle="modal" data-bs-target="#myModal"><i className='fas fa-phone' style={{fontSize:"25px",color:"white"}}></i></button>
                <div className="modal" id="myModal">
  <div class="modal-dialog modal-md">
        <div class="modal-content" style={{backgroundColor:"rgba(217,217,217,1)"}}>
            <div class="modal-header">
                <h2 class="modal-title">Contact-us</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
            <div className='row justify-content-between'>
            <div className='col-6'>
                <p>SMS your grievance on</p>
                <p>Traffic Whatsapp Helpline</p>
                <p>Mumbai Police Elder Line</p>
                <p>Police Control Room</p>
                <p>Alert Citizen</p>
                <p>Cyber helpline</p>
            </div>
            <div className='col-6'>
                <p>7738133133 , 7738144144</p>
                <p>8454999999</p>
                <p>1090</p>
                <p>100</p>
                <p>103</p>
                <p>9820810007</p>
            </div>
            </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
  </div>
</div>
</div>
 <Homefooter/>
    </div>
  )
}

