import React from 'react'
import Navbar from './Navbar'

function Blog() {
  return (
    <div>
        <Navbar/>
        <div className="container-fluid p-4">
            <h1 style={{paddingTop:"105px"}}>Coding Articles</h1>
            <div class="card w-75 mt-4 border-0 shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h2 class="card-title fw-bold">How to host a Next.js app in Production on an Ubuntu VPS</h2>
                    <p class="card-text fs-5">Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting.</p>
                    <a href="#" class="btn text-white fw-bold" style={{backgroundColor:"rgb(126,34,206)"}}>Read More</a>
                </div>
            </div>

            <div class="card w-75 mt-4 border-0 shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h2 class="card-title fw-bold">A Comprehensive Guide to Using Stackry for International Shopping</h2>
                    <p class="card-text fs-5">In today's interconnected world, the desire for cutting-edge tech gadgets, unique international products, and exclusive US deals has reached an unprecedented level. However, many consumers face the challenge of obtaining products not readily available in their home country. This is where Stackry emerges as a revolutionary solution, simplifying the process of ordering from the US and having it shipped effortlessly to India.</p>
                    <a href="#" class="btn text-white fw-bold" style={{backgroundColor:"rgb(126,34,206)"}}>Read More</a>
                </div>
            </div>

            <div class="card w-75 mt-4 border-0 shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h2 class="card-title fw-bold">How Algorithmic Trading Systems Work</h2>
                    <p class="card-text fs-5">In India, the popularity of online trading has helped transform the financial landscape. This has led to over 20% of all trading is now done via mobile through trading apps. In line with this, another development many traders have highlighted is the use of algorithmic trading systems to take advantage of ever-changing market opportunities. To date, algorithmic trading systems are used in up to 60% of all trading volume.</p>
                    <a href="#" class="btn text-white fw-bold" style={{backgroundColor:"rgb(126,34,206)"}}>Read More</a>
                </div>
            </div>

            <div class="card w-75 mt-4 border-0 shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h2 class="card-title fw-bold">Build an Email Validator with HTML, CSS, and JavaScript</h2>
                    <p class="card-text fs-5">Learn how to create a responsive Email Validator using HTML, CSS, and JavaScript. This step-by-step guide walks you through integrating the Email Validation API to validate email addresses effectively. Perfect for beginners and experts alike!</p>
                    <a href="#" class="btn text-white fw-bold" style={{backgroundColor:"rgb(126,34,206)"}}>Read More</a>
                </div>
            </div>

            <div class="card w-75 mt-4 border-0 shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h2 class="card-title fw-bold">[Solved] python was not found; run without arguments to install from the microsoft store, or...</h2>
                    <p class="card-text fs-5">Encountered the 'Python was not found' error on your Windows system? Our step-by-step guide walks you through the process to locate and set Python paths, ensuring smooth execution. With clear instructions, images, and videos, you'll resolve this issue in no time. Dive in to get Python up and running on your system!</p>
                    <a href="#" class="btn text-white fw-bold" style={{backgroundColor:"rgb(126,34,206)"}}>Read More</a>
                </div>
            </div>

            <div class="card w-75 mt-4 border-0 shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h2 class="card-title fw-bold">How to find the Python Installation Path on Windows?</h2>
                    <p class="card-text fs-5">Discover how to locate the Python installation path on your Windows system using two effective methods: the traditional Command Prompt and the modern Terminal. Whether you're troubleshooting or setting up environment variables, this guide provides clear, step-by-step instructions with visuals to help you find the information you need. Explore now!
</p>
                    <a href="#" class="btn text-white fw-bold" style={{backgroundColor:"rgb(126,34,206)"}}>Read More</a>
                </div>
            </div>

            <div class="card w-75 mt-4 border-0 shadow p-3 mb-5 bg-body rounded">
                <div class="card-body">
                    <h2 class="card-title fw-bold">How to Generate Random Numbers in C Language</h2>
                    <p class="card-text fs-5">A comprehensive guide to generating random numbers in C using the rand() and srand() functions, with examples and output.</p>
                    <a href="#" class="btn text-white fw-bold" style={{backgroundColor:"rgb(126,34,206)"}}>Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog