import React from 'react'
import Homefooter from './Homefooter'
import "./HomePage.css"

import img3 from "../../img/img.3.jpg";

import { ReactComponent as  CitizenCornerSvg } from "../../img/citizen-corner.svg";

export default function Home() {
  return (
    <div>
        <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
                            <div className="alert alert-primary alert-dismissible fade show mt-3 d-flex align-items-center" style={{flexFlow:"wrap"}}>
                                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                                <div className="flex-grow-1">
                                    <h6 className="mb-0 d-flex align-items-center">
                                        <img src="/img/new.gif" height="30px" className="me-2"></img>
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
            <div className='row d-flex flex-nowrap align-items-center justify-content-between'>
                    <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                        <div className="complaint-section">
                            <div className='d-flex align-items-center'>
                                <img src="img/ourLogo@2x.png" className="our-logo hidden-xs" alt="Mumbai Police"></img>
                                <img src="img/76.jpg" clasName="our-logo hidden-xs" alt="Mumbai Police" style={{marginLeft: "55px",height: "181px"}}></img>
                            </div>
                            <h1 className='main'>Police Training Center</h1>
                            <h5 className='main1'> &nbsp;<strong>सदैव तत्पर, सदैव मदतीस </strong></h5>
                            <h5 className='text-secondary mt-3' style={{fontFamily: "auto"}}>Taking stock of your security round the clock! Dial 100 in case of any emergency. Help us to help you.</h5>
                            <div className='d-flex align-items-center mt-2'>
                            <button className="btn btn-lg btn-primary">From CP′s Desk</button>
                            <button className="btn btn-lg btn-warning text-dark ms-3">Run For Unity</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 ps-5 pe-5 img-slide">
                        <div id="demo" className="carousel slide" data-bs-ride="carousel" style={{transform: "rotateZ(330deg)",backgroundColor: "#f1f4f8"}}>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/img/3.png" alt="Los Angeles" className="d-block" style={{width:"100%" ,transform: "rotate(30deg)"}}></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="/img/11.png" alt="Chicago" className="d-block" style={{width:"100%",transform: "rotate(30deg)"}}></img>
                                </div>
                                <div className="carousel-item">
                                    <img src="/img/12.png" alt="New York" className="d-block" style={{width:"100%",transform: "rotate(30deg)"}}></img>
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
                    <img className="card-img-top mx-auto d-flex" src="/img/img.1.jpg" alt="Card image" style={{width:"100%"}}></img>
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
                                    <CitizenCornerSvg className="mx-auto d-block mb-3" style={{ height: '50px' }}/>
                                    <div className="text-center line-height-1">Citizen Service</div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="service-title">
                                    <img src="/img/goodworks.svg" height="50" className="mx-auto d-block mb-3"></img>
                                    <div className="text-center line-height-1">Our Works</div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="service-title">
                                    <img src="img/smartcollect.svg" height="50" className="mx-auto d-block mb-3"></img>
                                    <div className="text-center line-height-1">Recruitment</div>
                                </div>
                            </div>
                            <div className="service">
                                <div  className="service-title">
                                    <img  src="/img/news.svg" height="50" className="mx-auto d-block mb-3"></img>
                                    <div  className="text-center line-height-1">Press Release</div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="service-title">
                                    <img src="/img/quick-links.svg" height="50" className="mx-auto d-block mb-3"></img>
                                    <div className="text-center line-height-1">Useful Links</div>
                                </div>
                            </div>
                            <div className="service">
                                <div  className="service-title">
                                    <img src="/img/contact-us.svg" height="50" className="mx-auto d-block mb-3"></img>
                                    <div  className="text-center line-height-1">Contact Us</div>
                                </div>
                            </div>
                            <div className="service">
                                <div className="service-title">
                                    <img  src="/img/m-police-2.svg" height="50" className="mx-auto d-block mb-3"></img>
                                    <div  className="text-center line-height-1">Train Service</div>
                            </div>
                            </div>
                            <div className="service">
                                <div className="service-title">
                                    <img src="/img/goodworks.svg" height="50" className="mx-auto d-block mb-3"></img>
                                    <div className="text-center line-height-1">Our Works</div>
                                </div>
                            </div>
                                <div  className="service">
                                    <div  className="service-title">
                                        <img  src="/img/search-svg.svg" height="50" className="mx-auto d-block mb-3"></img>
                                        <div  className="text-center line-height-1">Railway Map</div>
                                    </div>
                                </div>
                                <div className="service">
                                <div  className="service-title">
                                    <img  src="/img/news.svg" height="50" className="mx-auto d-block mb-3"></img>
                                    <div  className="text-center line-height-1">Press Release</div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='col-sm-7 col-md-4 col-xl-3 col-lg-3'>
                    <div className="card" style={{border:"none",backgroundColor: "rgba(217,217,217,1)"}}>
                        <img className="card-img-top mx-auto d-flex" src={img3} alt="Card image" style={{width:"100%"}}></img>
                    <div className="card-body">
                        <h4 className="card-title text-center text-dark" style={{fontWeight:"700"}}>M. M. Makandar</h4>
                        <div className="card-text text-center" style={{fontSize:"1em"}}>Principal Police Training Center, Khandala</div>
                    </div>
                </div>
                </div>
           </div>
        </div>
        <div className='container mt-5 pt-3'>
                <div class="justify-content-center my-5  container">
                        <blockquote class="blockquote text-center mb-5">
                            <h2 class="text-center main">Most Used By PTC Khandala</h2>
                            <p class="sc-dlnjwi dJXsSm">From 'Lost &amp; Found' to 'Tenant Information' and everything in between, we have listed Quick Links of our most used sections here for you.</p>
                        </blockquote>
                        <div>
                            <div class="row">
                                <div class="mt-5 d-flex flex-column align-items-center col">
                                    <a class="quick-links-image-wrapper rounded-circle justify-content-center align-items-center" href="#">
                                    <img alt="[object Object]" src="/img/lost-and-found.svg" width="65" height="67" class="d-inline-block align-top"></img></a>
                                    <p class="text-center mt-3"><span>Lost &amp; Found</span></p>
                            </div>
                                <div class="mt-5 d-flex flex-column align-items-center col">
                                    <a class="quick-links-image-wrapper rounded-circle justify-content-center align-items-center" href="#">
                                    <img alt="[object Object]" src="/img/police-recruitment.svg" width="65" height="67" class="d-inline-block align-top"></img>
                                    </a>
                                    <p class="text-center mt-3">
                                    <span>Police Recruitment</span>
                                    </p>
                                </div>
                                <div class="mt-5 d-flex flex-column align-items-center col">
                                    <a href="#" target="_blank" class="quick-links-image-wrapper rounded-circle justify-content-center align-items-center">
                                    <img alt="[object Object]" src="/img/tenant-information.svg" width="65" height="67" class="d-inline-block align-top"></img>
                                    </a>
                                    <p class="text-center mt-3"><span>Tenant Information</span></p>
                                </div>
                                <div class="mt-5 d-flex flex-column align-items-center col">
                                    <a href="#" target="_blank" class="quick-links-image-wrapper rounded-circle justify-content-center align-items-center">
                                    <img alt="[object Object]" src="/img/missing-person.svg" width="65" height="67" class="d-inline-block align-top"></img>
                                    </a>
                                    <p class="text-center mt-3"><span>Missing Persons</span></p>
                                </div>
                                <div class="mt-5 d-flex flex-column align-items-center col">
                                    <a class="quick-links-image-wrapper rounded-circle justify-content-center align-items-center" href="#">
                                    <img alt="[object Object]" src="/img/accident-compensation.svg" width="65" height="67" class="d-inline-block align-top"></img>
                                    </a>
                                    <p class="text-center mt-3">
                                    <span>Accident Compensation</span>
                                    </p>
                                </div>
                                <div class="mt-5 d-flex flex-column align-items-center col">
                                    <a href="#" target="_blank" class="quick-links-image-wrapper rounded-circle justify-content-center align-items-center">
                                    <img alt="[object Object]" src="/img/stolen-unclaimed-vehicle.svg" width="65" height="67" class="d-inline-block align-top"></img>
                                    </a>
                                    <p class="text-center mt-3">
                                    <span>Stolen &amp; Unclaimed Vehicles</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
        </div>
                <div className="container  mt-3 pt-5 pb-3 khandala-sec">
                        <div className="row">
                            <div className="col-12 col-md-4 mt-5 col d-flex align-items-center">
                                <div className="col">
                                    <div className="sp-section">
                                    <img alt="contact Sp" src="/img/img.5.jpg" className="d-block align-center sp-section-img"></img>
                                    <a href="#civil-speech" className="btn border-radius-50 sp-section-buttons d-none btn btn-primary">Engage with CP</a>
                                    </div>
                                </div>
                            </div>
                        <div className="col-12 col-md-8 mt-5 col">
                            <div className="row">
                                    <div className="col-12 col-md-2 justify-content-center col">
                                        <img alt="quote" src="/img/quote.svg" width="85" height="59" className="d-block align-top rounded-circle m-auto"></img>
                                    </div>
                                    <div className="col-12 col-md-10 col">
                                        <h2 className='head-text-start'>PTC Khandala</h2>
                                        <p className="pt-2" style={{color: "rgb(149, 149, 149)"}}>Namaskar, Khandala</p><p style={{color: "rgb(149, 149, 149)"}}>The Police training Centre, Khandala was established in the year 1960 <span style={{fontWeight: "bold", color: "rgb(250, 166, 82)"}}>informed and educated </span> and it is situated in the Sahyadri ranges of Maval Tahsil of Pune district. The institute is approximately at an altitude of 1000 meters from mean sea level and acquires 46 acres of land. Over the years, 63 batches of men and 28 batches of women Police Constable have been trained successfully  nd without fear or favor. We strive to create a <span style={{fontWeight: "bold", color: "rgb(250, 166, 82)"}}>fear-free environment</span> that is conducive to growth and development of our beautiful city.</p><p style={{color: "rgb(149, 149, 149)"}}> from this training center and they are rendering excellent service for the Maharashtra Police department Till now this institute has trained total no. of 37208 police men & women constables.<span style={{fontWeight: "bold", color: "rgb(250, 166, 82)"}}>4 broad areas</span>: Frontline Policing, Community Engagement, Comprehensive Investigations and Use of Technology.</p><p style={{color: "rgb(149, 149, 149)"}}><br/><strong>Director General Of Police ( Training and Special Units ), Maharashtra State</strong><span className="speech-bubble" style={{display: "block" ,background: "0% 0% no-repeat padding-box padding-box rgb(229, 229, 229)", padding: "10px",marginTop: "20px", borderRadius: "8px", minHeight: "68px"}}>Shri. Sanjay Kuma Director General Of Police  Training and Special Units</span></p>
                                    </div>
                            </div>
                        </div>
                        </div>
                </div>
                <section class="container col6">
                    <div class="container4">
                        <div class="shape">
                            <h1>Our Trainers are well Qualified</h1>
                            <p>We don't like to brag, but we don't mind letting our customers do it for us.<br/> Here are a few nice things folks have said about our themes over the years</p>
                        </div>
                        <div class="row shape1">
                                <div class="col-sm-6 col-md-6 col-xl-6 col-lg-6 text d-flex align-items-center justify-content-center" style={{borderRadius: "0px 150px 150px 0px",backgroundColor:"rgb(232 243 218)"}}>
                                <div>
                                    <h1>Indoor Training</h1>
                                    <p>"Indoor and Outdoor basic training for women police constables is imparted for a period of 09 months."</p>
                                    <div className='text-center'>
                                        <button className='btn btn-outline-primary btn-md text-center'>View more</button>
                                    </div>
                                </div>
                                </div>
                                <div class="col-sm-6 col-md-6 col-xl-6 col-lg-6 text d-flex align-items-center justify-content-center">
                                    <div>
                                        <h1>Outdoor Training</h1>
                                        <p>"The trainees mainly belong to various remote and tribal districts of Maharashtra like Nagpur, Gadchiroli, Chandrapur, Gondia, etc."</p>
                                        <div className='text-center'>
                                            <button className='btn btn-outline-primary btn-md text-center'>View more</button>
                                        </div>
                                    </div>
                            </div>
                            <i class='fas fa-arrow-alt-circle-left' id="prev" style={{color:"royalblue"}}></i>
                            <i class='fas fa-arrow-alt-circle-right' id="next" style={{color:"royalblue"}}></i>
                        </div>
                     </div>
                </section>
                <div className='container-fluid mt-5 gallery'>
                <h2 className='text-secondary d-flex align-items-center justify-content-center py-5' style={{fontWeight:"700"}}> Police Training Center Khandala Gallery</h2>
                    <div className='row'>
                      <div className='col-xl-3 col-lg-3 col-sm-6 col-md-6'>
                            <img src="img/a-5.png" alt="galleryimage" style={{width:"350px",height:"300px",borderRadius:"6px"}}></img>
                      </div>
                      <div className='col-xl-3 col-lg-3 col-sm-6 col-md-6'>
                            <img src="img/a-2.png" alt="galleryimage" style={{width:"350px",height:"300px",borderRadius:"6px"}}></img>
                      </div>
                      <div className='col-xl-3 col-lg-3 col-sm-6 col-md-6'>
                            <img src="img/a-3.png" alt="galleryimage" style={{width:"350px",height:"300px",borderRadius:"6px"}}></img>
                      </div>
                      <div className='col-xl-3 col-lg-3 col-sm-6 col-md-6'>
                            <img src="img/a-4.png" alt="galleryimage" style={{width:"350px",height:"300px",borderRadius:"6px"}}></img>
                      </div>
                    </div>
                </div>
        <Homefooter/>
    </div>
  )
}

