import React from 'react'
import Navbar from './Navbar'

function Contact() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="container" style={{paddingTop:'200px'}}>
            <div className="row shadow p-3 mb-5 bg-body rounded text-center p-5" style={{backgroundColor:'rgb(243,244,246)'}}>
                <h2 className='mt-2'>Feel free to contact me!</h2>
                <img src="https://www.codewithharry.com/img/logo-blue.png" alt="" style={{width:"150px"}} className='m-auto mt-5' />
                <div className='d-flex justify-content-center mt-5'>
                    <div>
                        <a href="#" style={{ color: 'inherit' }} className="text-decoration-none me-3"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="#" style={{ color: 'inherit' }} className="text-decoration-none me-3"><i className="fab fa-twitter fa-2x"></i></a>
                        <a href="#" style={{ color: 'inherit' }} className="text-decoration-none me-3"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="#" style={{ color: 'inherit' }} className="text-decoration-none me-3"><i className="fab fa-github fa-2x"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact