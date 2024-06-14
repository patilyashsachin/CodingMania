import React from 'react'

function Footer() {
  return (
    <div>
        <div className="container-fluid border-top mt-5">
            <div className="row p-2">
                <div className="col-12 col-sm-8 d-flex">
                    <h4 className='fw-normal mt-2'>CodingMania</h4>
                    <p className='pt-3 ps-3'>Copyright © 2024 CodingMania.com</p>
                </div>
                <div className="col-12 col-sm-4 d-flex justify-content-end  mt-2">
                    <a href="#" style={{ color: 'inherit' }} className="text-decoration-none me-3"><i className="fab fa-facebook fa-2x"></i></a>
                    <a href="#" style={{ color: 'inherit' }} className="text-decoration-none me-3"><i className="fab fa-twitter fa-2x"></i></a>
                    <a href="#" style={{ color: 'inherit' }} className="text-decoration-none me-3"><i className="fab fa-instagram fa-2x"></i></a>
                    <a href="#" style={{ color: 'inherit' }} className="text-decoration-none me-3"><i className="fab fa-github fa-2x"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer