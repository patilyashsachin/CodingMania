import React from 'react'
import Navbar from './Navbar'

function About() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="container-fluid">
                <div className="row" style={{paddingTop:'125px'}}>
                    <h2 className="text-center">Get in Touch</h2>
                    <div className="col-sm-4 col-12 text-center mt-5">
                        <i class="fa-solid fa-location-dot fa-2xl mb-3"></i>
                        <h3>Address</h3>
                        <h4 className="fw-normal">Welfield Group Contracting</h4>
                        <h4 className="fw-normal">146, Yuma Street<br></br>Denver Co 80223</h4>
                    </div>
                    <div className="col-sm-4 col-12 text-center mt-5">
                        <i class="fa-solid fa-phone fa-2xl mb-3"></i>
                        <h3>Phone</h3>
                        <h4 className="fw-normal">Welfield Group Contracting</h4>
                        <h4 className="fw-normal">303.428.2001 phone<br></br>303.202.0466 facsimile</h4>
                        <br />
                        <h4 className="fw-normal">Welfield 24/7 Service<br></br>Department</h4>
                        <h4 className="fw-normal">303.428.2011</h4>
                        <br />
                        <h4 className="fw-normal">Wyoming Office</h4>
                        <h4 className="fw-normal">307.757.7967</h4>
                    </div>
                    <div className="col-sm-4 col-12 text-center mt-5">
                        <i class="fa-solid fa-envelope fa-2xl mb-3"></i>
                        <h3>Email</h3>
                        <h4 className="fw-normal">Request for Proposal</h4>
                        <h4 className="fw-normal">info@weifieldgeoup.com</h4>
                        <br />
                        <h4 className="fw-normal">Electrical Service Calls</h4>
                        <h4 className="fw-normal">service@weifieldgeoupcontracting.com</h4>
                        <br />
                        <h4 className="fw-normal">Employment Opportunities</h4>
                        <h4 className="fw-normal">careers@weifieldgeoupcontracting.com</h4>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default About