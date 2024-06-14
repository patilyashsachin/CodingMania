import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Home() {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const isLoggedIn = true; 
        if (isLoggedIn) {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 2000);
        }
    }, []);

    return (
        <div>

            {showPopup && (
                <div className="alert alert-success" role="alert" style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: '1000' }}>
                    Logged In Successfully
                </div>
            )}
            <Navbar />
            <div className="container-fluid" style={{ paddingTop: "112px" }}>
                <div className="row">
                    <div className="col-sm-6 col-12 p-5">
                        <h1>Welcome to <b style={{ color: 'rgb(126,34,206)' }}>CodingMania</b></h1>
                        <h4><i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis magni ad velit itaque! Sapiente reiciendis est recusandae ipsa ullam repudiandae, quibusdam harum a enim cupiditate. Expedita dolor praesentium in itaque?</i></h4>
                        <div className='mt-4'>
                            <Link to="/Courses"><button type="button" className="btn btn-dark me-3 fw-bolder mt-2">Explore Courses</button></Link>
                            <Link to="/ExploreBlog"><button type="button" className="btn text-dark fw-bolder mt-2" style={{ backgroundColor: "rgb(209,213,219)" }}>Explore Blog</button></Link>
                        </div>
                    </div>
                    <div className="col-sm-6 col-12 pe-">
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80" alt="Image" style={{ width: '100%', height: '400px' }} />
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row mt-5 justify-content-around">
                    <h1 className='text-center'>Recommended Courses</h1>
                    <div className="col-lg-3 col-12 mt-4">
                        <div className="card border-0 shadow mb-5 bg-body rounded">
                            <img src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/python-100-days-of-code-1/7wnove7K-ZQ-HD.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span className="">FREE COURSE</span>
                                <h5>Python Tutorial - 100 Days of Code</h5>
                                <p className='fw-normal'>Python is one of the most demanded programming languages in the job market. Surprisingly, it is equally easy to learn and master Python. Let's commit our 100 days of code to python!</p>
                                <a href="#" className="btn rounded-pill text-light" style={{ backgroundColor: "rgb(126,34,206)" }}>Start Watching</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 mt-4">
                        <div className="card border-0 shadow mb-5 bg-body rounded">
                            <img src="https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span className="">FREE COURSE</span>
                                <h5>Ultimate JavaScript Course</h5>
                                <p className='fw-normal'>This latest JavaScript course comes with premium curriculum that covers everything from basics to advance. On top of that, you will get my handwritten notes of JS for completely free. What are you waiting for?</p>
                                <a href="#" className="btn rounded-pill text-light" style={{ backgroundColor: "rgb(126,34,206)" }}>Start Watching</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-12 mt-4">
                        <div className="card border-0 shadow mb-5 bg-body rounded">
                            <img src="https://codewithharry.nyc3.cdn.digitaloceanspaces.com/assets/090fefe24d23d47584f6ddc7eb5a241e.png" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span className="">FREE COURSE</span>
                                <h5>React JS Tutorials For Beginners</h5>
                                <p className='fw-normal'>React is a free and open-source front-end JavaScript library. This series will cover React from starting to the end. We will learn react from the ground up! On top of that, you will get my handwritten notes of React</p>
                                <a href="#" className="btn rounded-pill text-light" style={{ backgroundColor: "rgb(126,34,206)" }}>Start Watching</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row justify-content-around">
                    <h1 className='text-center'>Testimonials</h1>
                    <div className="col-sm-5 col-12 p-3 mt-3" style={{ backgroundColor: "rgb(243,244,246)" }}>
                        <i className="fa-solid fa-quote-right fa-2x"></i>
                        <h4 className='fw-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, error aperiam. Dolorum porro consectetur quae suscipit. Enim optio quaerat minima molestiae non praesentium, asperiores aliquid.</h4>
                        <h5>Mohit Kumar</h5>
                        <h6 className='text-secondary'>Web Developer</h6>
                    </div>
                    <div className="col-sm-5 col-12 p-3 mt-3" style={{ backgroundColor: "rgb(243,244,246)" }}>
                        <i className="fa-solid fa-quote-right fa-2x"></i>
                        <h4 className='fw-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, error aperiam. Dolorum porro consectetur quae suscipit. Enim optio quaerat minima molestiae non praesentium, asperiores aliquid.</h4>
                        <h5>Rakesh Shetty</h5>
                        <h6 className='text-secondary'>Web Developer</h6>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
