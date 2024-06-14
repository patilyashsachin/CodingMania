import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function Signup() {

        const[name,setName] = useState()
        const[email,setEmail] = useState()
        const[password,setPassword] = useState()
        const navigate = useNavigate()

        const handleSubmit = (e) =>{
            e.preventDefault()
            axios.post('http://localhost:3001/Registration',{name, email, password})
            .then(result => {
                console.log(result);
                navigate('/Login'); 
            })
            .catch(err => console.log(err))
        }

  return (
    <div>
        <div className="container position-absolute top-50 start-50 translate-middle">
                <div className="row justify-content-around border shadow p-3 bg-body rounded d-flex">
                    <h1 className='text-center' style={{color:'rgb(126,34,206)'}}>CodingMania</h1>
                            <div className='col-md-4 col-12'>
                                <img src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=667&amp;q=80&quot" alt="" style={{maxWidth:"100%", height:"auto", paddingTop:'100px'}} className=''/>
                            </div>
                            <div className='col-md-4 col-12'>
                                <h3 className="text-center mt-5">Signup</h3>
                                <form className="p-5" onSubmit={handleSubmit}>
                                    <div class="mb-2">
                                        <label for="exampleInputEmail1" class="form-label">Name</label>
                                        <input type="text" class="form-control form-control form-control-lg" id="nameInput" name="name" aria-describedby="emailHelp" onChange={(e)=> setName(e.target.value)}/>
                                    </div>
                                    <div class="mb-2">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control form-control form-control-lg" id="emailInput" name="email" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)}/>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Password</label>
                                        <input type="password" class="form-control form-control form-control-lg" id="passwordInput" name="password" aria-describedby="emailHelp"
                                        onChange={(e)=> setPassword(e.target.value)}/>
                                    </div>
                                    <button type="submit" class="btn btn-primary border-0" style={{backgroundColor:"rgb(126,34,206)", fontSize:"18px"}}>Submit</button>
                                    <p className='mt-3'>Already a User? <Link to="Login" className='fs-5'>Login</Link></p>
                                </form>
                            </div>
                </div>
            </div>
    </div>
  )
}

export default Signup