import React from 'react'
import Homefooter from './Homefooter'
import "./HomePage.css"
export default function Home() {
  return (
    <div>
        <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-6 offset-md-3">
                            <div class="alert alert-primary alert-dismissible fade show mt-3 d-flex align-items-center" style={{flexFlow:"wrap"}}>
                                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                                <div class="flex-grow-1">
                                    <h6 class="mb-0 d-flex align-items-center">
                                        <img src="/img/new.gif" height="30px" class="me-2"></img>
                                        <div className='text-dark'>Recruitment 2021 - Latest Updates<br/>पोलीस भरती २०२१ - महत्वाचा सूचना</div>
                                    </h6>
                                </div>
                                <div class="mt-2">
                                    <button class="btn btn-dark text-white me-2" role="button">Click here / इथे क्लिक करा</button>
                                </div>
                            </div>
                    </div> 
                    <div class="col-12 col-md-6 offset-md-3">
                        <div class="alert alert-primary alert-dismissible fade show mt-3 d-flex align-items-center" style={{flexFlow: "wrap"}}>
                            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
                            <div class="flex-grow-1">
                                <h6 class="mb-0 d-flex align-items-center">
                                    <div className='text-dark'> मुंबई लोहमार्ग पोलीस मुख्यालय, घाटकोपर जलतरण तलाव, <br/>फुटबॉल मैदान व सिंथेटिक अ&zwj;ॅथलेटिक्स </div>
                                </h6>
                            </div> 
                            <div class="mt-2">
                            <a href="#" target="_blank" tag="button" role="button" class="btn btn-dark text-white me-2">Click here / इथे क्लिक करा</a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        <div className='container-fluid khandala pt-5 pb-5 border-bottom'>
           <div className='row d-flex justify-content-around align-items-center'>
                <div className='col-sm-5 col-md-3 col-xl-3 col-lg-3'>
                <div className="card" style={{border:"none"}}>
                    <img className="card-img-top mx-auto d-flex" src="/img/img.1.jpg" alt="Card image" style={{width:"100%"}}></img>
                    <div className="card-body">
                    <h4 className="card-title text-center text-dark" style={{fontWeight:"700"}}>Sanjay Kumar</h4>
                    <div className="card-text text-center" style={{fontSize:"1em"}}>Director General Of Police ( Training and Special Units ), Maharashtra State</div>
                    </div>
               </div>
                </div>
                <div className='col-sm-12 col-md-5 col-xl-6 col-lg-6'>
                    <img className="d-flex mx-auto" src="/img/img.2.jpg" alt="Card image" style={{width:"100%"}}></img>
                </div>
                <div className='col-sm-7 col-md-4 col-xl-3 col-lg-3'>
                    <div className="card" style={{border:"none"}}>
                        <img className="card-img-top mx-auto d-flex" src="/img/img.3.jpg" alt="Card image" style={{width:"100%"}}></img>
                    <div className="card-body">
                        <h4 className="card-title text-center text-dark" style={{fontWeight:"700"}}>M. M. Makandar</h4>
                        <div className="card-text text-center" style={{fontSize:"1em"}}>Principal Police Training Center, Khandala</div>
                    </div>
                </div>
                </div>
           </div>
        </div>
        <div className='container mt-3 pt-5 pb-5'>
            <div className='row d-flex justify-content-between'>
                <div className='col-sm-12 col-md-6 col-xl-6'>
                <h1 className='head-text-start'>PTC Khandala</h1>
                    <p className='text-para'>The Police training Centre, Khandala was established in the year 1960 and it is situated in the Sahyadri 
                    ranges of Maval Tahsil of Pune district. The institute is approximately at an altitude of 1000 meters from mean
                     sea level and acquires 46 acres of land. Over the years, 63 batches of men and 28 batches of women Police 
                     Constable have been trained successfully from this training center and they are rendering excellent service for 
                     the Maharashtra Police department Till now this institute has trained total no. of 37208 police men &amp;
                      women constables.</p>
                </div>
                <div className='col-sm-12 col-md-5 col-xl-5'>
                    <img src="/img/img.5.jpg" style={{width:"100%"}}></img>
                </div>
            </div>
        </div>
        <Homefooter/>
    </div>
  )
}

