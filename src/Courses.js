import React from 'react'
import Navbar from './Navbar'
import {Link } from 'react-router-dom'

function Courses() {
  return (
    <div>
        <Navbar></Navbar>
        <h1 className='text-center' style={{color:"rgb(126,34,206)", paddingTop:"120px"}}>Premium Courses</h1>
        <div className="container-fluid">
            <div className="row justify-content-around mt-2">
            <div className="col-md-4 col-12 mt-4">
                    <div className="card border-0 shadow mb-5 bg-body rounded">
                        <img src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <span className="">COURSE</span>
                        <h5>Python Tutorial - 100 Days of Code</h5>
                        <p className='fw-normal'>Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python, you will get my handwritten notes completely. Let's commit our 100 days of code to python!</p>
                            <Link to="/Register"><a href="" class="btn rounded-pill text-light" style={{backgroundColor:"rgb(126,34,206)"}}>Register Now</a></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mt-4">
                <div class="card border-0 shadow mb-5 bg-body rounded">
                        <img src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/sanity-tutorial-in-hindi-1/Sanity-Thumb.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <span className="">COURSE</span>
                        <h5>Ultimate JavaScript Course</h5>
                        <p className='fw-normal'>This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy</p>
                            <Link to="/Register"><a href="" class="btn rounded-pill text-light" style={{backgroundColor:"rgb(126,34,206)"}}>Register Now</a></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mt-4">
                <div class="card border-0 shadow mb-5 bg-body rounded">
                        <img src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/strapi-tutorial-in-hindi-1/Strapi-Thumb.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <span className="">COURSE</span>
                        <h5>React JS Tutorials For Beginners</h5>
                        <p className='fw-normal'>React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up! On top of that, you will get my handwritten notes of React</p>
                            <Link to="/Register"><a href="" class="btn rounded-pill text-light" style={{backgroundColor:"rgb(126,34,206)"}}>Register Now</a></Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row justify-content-around mt-2">
            <div className="col-md-4 col-12 mt-4">
                    <div className="card border-0 shadow mb-5 bg-body rounded">
                        <img src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/python-100-days-of-code-1/7wnove7K-ZQ-HD.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <span className="">COURSE</span>
                        <h5>Python Tutorial - 100 Days of Code</h5>
                        <p className='fw-normal'>Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python you will get my handwritten notes completely. Let's commit our 100 days of code to python!</p>
                            <Link to="/Register"><a href="" class="btn rounded-pill text-light" style={{backgroundColor:"rgb(126,34,206)"}}>Register Now</a></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mt-4">
                <div class="card border-0 shadow mb-5 bg-body rounded">
                        <img src="https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/e1c843acc10c59c60504cd438a082c6d.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <span className="">COURSE</span>
                        <h5>Ultimate JavaScript Course</h5>
                        <p className='fw-normal'>This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for? Just Enroll Buddy</p>
                            <Link to="/Register"><a href="" class="btn rounded-pill text-light" style={{backgroundColor:"rgb(126,34,206)"}}>Register Now</a></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-12 mt-4">
                <div class="card border-0 shadow mb-5 bg-body rounded">
                        <img src="https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png" class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <span className="">COURSE</span>
                        <h5>React JS Tutorials For Beginners</h5>
                        <p className='fw-normal'>React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up! On top of that, you will get my handwritten notes of React</p>
                            <Link to="/Register"><a href="" class="btn rounded-pill text-light" style={{backgroundColor:"rgb(126,34,206)"}}>Register Now</a></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-around p-3">
            <div className="col-md-4 col-12">
                <div class="card border-0 shadow mb-5 bg-body rounded">
                    <img src="https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/62f60049963012281edcc77dd2ec031b.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <span className="">COURSE</span>
                        <h5>React JS Tutorials For Beginners</h5>
                        <p className='fw-normal'>React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up! On top of that, you will get my handwritten notes of React</p>
                        <Link to="/Register"><a href="" class="btn rounded-pill text-light" style={{backgroundColor:"rgb(126,34,206)"}}>Register Now</a></Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Courses;