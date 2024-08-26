import React, { useState } from 'react';
import './Style/Login.css';
import Navbar from './Navbar';
import {useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setConfirm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    function registerUser() {
        const user = {
            username: username,
            email: email,
            password: password,
            password_confirmation: passwordConf
        };

        axios.post('http://127.0.0.1:8000/api_ott/signupapi/', user)
            .then(response => {
                setErrorMessage(" ");
                navigate('/login');
            })
            .catch(error => {
                if (error.response && error.response.data && error.response.data.errors) {
                    setErrorMessage(Object.values(error.response.data.errors).join(' '));
                } else {
                    setErrorMessage('Failed to connect to API');
                }
            });
    }   
    return (
        <>
           <Navbar/>
        <div className=" background row ml-0">
            <div className="container col-5 mt-5">
                <div className="row mt-5 border bg-white rounded border-primary">
                    <div className="col-8 offset-2">
                        <h1 className='text-center text-primary'>Register</h1>
                        {errorMessage&&<div className='alert alert-danger'>{errorMessage}</div>}
                        <div className="form-group">
                            <label className='text-secondary'>Name:</label>
                            <input value={username} onChange={(event)=>setusername(event.target.value)} 
                                type="text"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className='text-secondary'>Email:</label>
                            <input value={email} onChange={(event)=>setEmail(event.target.value)} 
                                type="email"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className='text-secondary'>Password:</label>
                            <input value={password} onChange={(event)=>setPassword(event.target.value)}
                                type="password"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className='text-secondary'>Confirm Password:</label>
                            <input value={passwordConf} onChange={(event)=>setConfirm(event.target.value)} 
                                 type="password" 
                                className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary col-12" type='submit' onClick={registerUser} >
                                Submit 
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}

export default Signup;