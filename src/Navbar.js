import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div style={{position:"sticky", position:"fixed", zIndex:"1", width:"100%"}}>
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container-fluid">
                <span class='fs-4' style={{color:"rgb(126,34,206)", fontWeight:"700"}}>&lt;/&gt;CodingMania</span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto fs-5 fw-normal name">
                            <li class="nav-item">
                                <Link to="/Home" style={{ textDecoration: 'none' }}><a className="nav-link active">Home</a></Link>
                            </li>
                        <li class="nav-item">
                            <Link to="/About" style={{ textDecoration: 'none' }}><a className="nav-link active">About</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/Contact" style={{ textDecoration: 'none' }}><a className="nav-link active">Contact</a></Link>
                        </li>
                        
                        {/* <Link to="Login"><button type="button" class="btn btn-primary btn-sm m-auto me-2 rounded border-0 mt-2" style={{backgroundColor:"rgb(126,34,206)", fontSize:"18px"}}>Login</button></Link>
                        <Link to="Signup"><button type="button" class="btn btn-primary btn-sm m-auto rounded border-0 mt-2" style={{backgroundColor:"rgb(126,34,206)", fontSize:"18px"}}>Signup</button></Link> */}
                    </ul>
                </div>
            </div>
        </nav>


        <nav class="navbar navbar-expand-lg navbar-light border-top shadow-sm p-1 bg-body rounded">
            <div class="container-fluid">
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="icon">
                        <Link to="/Home"><a class="nav-link" href="#" style={{color:"rgb(126,34,206)"}}><i class="fa-solid fa-house fa-xl"></i></a></Link>
                    </div>
                    <div className="navbar-nav m-auto fw-bold d-flex">
                        <a class="nav-link me-3" href="#" style={{color:"rgb(126,34,206)"}}>HTML</a>
                        <a class="nav-link me-3" href="#" style={{color:"rgb(126,34,206)"}}>CSS</a>
                        <a class="nav-link me-3" href="#" style={{color:"rgb(126,34,206)"}}>JS</a>
                        <a class="nav-link me-3" href="#" style={{color:"rgb(126,34,206)"}}>C</a>
                        <a class="nav-link me-3" href="#" style={{color:"rgb(126,34,206)"}}>C++</a>
                        <a class="nav-link me-3" href="#" style={{color:"rgb(126,34,206)"}}>Java</a>
                        <a class="nav-link me-3" href="#" style={{color:"rgb(126,34,206)"}}>Python</a>
                        <a class="nav-link me-3" href="#" style={{color:"rgb(126,34,206)"}}>PHP</a>
                        <a class="nav-link" href="#" style={{color:"rgb(126,34,206)"}}>React JS</a>
                    </div>

                    <div>
                        <a class="nav-link" href="#" style={{color:"rgb(126,34,206)"}}><i class="fa-solid fa-magnifying-glass fa-lg"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar