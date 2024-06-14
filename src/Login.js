import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false); 
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Success") {
                    navigate('/Home');
                } else {
                    setShowError(true); 
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="container position-absolute top-50 start-50 translate-middle">
                <div className="row justify-content-around d-flex border shadow p-3 mb-5 bg-body rounded mt-3">
                    <h1 className='text-center' style={{ color: 'rgb(126,34,206)' }}>CodingMania</h1>
                    <div className='col-md-4 col-12'>
                        <img src="https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=667&amp;q=80&quot" alt="" style={{ maxWidth: "100%", maxHeight: "100%", paddingTop: '80px' }} />
                    </div>
                    <div className='col-md-4 col-12'>
                        <h2 className="text-center mt-5">Login</h2>
                        <form className="p-5" onSubmit={handleSubmit}>
                            <div class="mb-2">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control form-control form-control-lg" id="emailInput" name="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Password</label>
                                <input type="password" class="form-control form-control form-control-lg" id="passwordInput" name="password" aria-describedby="emailHelp"
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit" class="btn btn-primary border-0" style={{ backgroundColor: "rgb(126,34,206)", fontSize: "18px" }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            {showError && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error:</strong> Login unsuccessful. Please check your credentials and try again.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setShowError(false)}></button>
                </div>
            )}
        </div>
    )
}

export default Login;
