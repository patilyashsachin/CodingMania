import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (showPopup) {
            setTimeout(() => setShowPopup(false), 2000);
        }
    }, [showPopup]);

    const collectData = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch("http://localhost:3001/", {
                method: 'post',
                body: JSON.stringify({ name, email, message }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const result = await response.json();
            console.log(result);
            setName('');
            setEmail('');
            setMessage('');
            setShowPopup(true);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container" style={{ paddingTop: '120px' }}>
                <div className="row shadow p-3 mb-5 bg-body rounded p-5" style={{ backgroundColor: 'rgb(243,244,246)' }}>
                    <h2 className='mt-2 text-center'>Register</h2>
                    {showPopup && (
                        <div className="popup">
                            <div className="popup-content">
                                <h5 className='text-success'>Registration Successful!</h5>
                            </div>
                        </div>
                    )}
                    <form className="p-5" onSubmit={collectData}>
                        <div className="mb-2">
                            <label htmlFor="nameInput" className="form-label">Name</label>
                            <input type="text" className="form-control form-control-lg" id="nameInput" name="name" aria-describedby="emailHelp" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="emailInput" className="form-label">Email address</label>
                            <input type="email" className="form-control form-control-lg" id="emailInput" name="email" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="messageInput" className="form-label">Message</label>
                            <textarea className="form-control form-control-lg" id="messageInput" name="message" aria-describedby="emailHelp" value={message} onChange={(e) => setMessage(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary border-0" style={{ backgroundColor: "rgb(126,34,206)", fontSize: "18px" }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
