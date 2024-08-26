import React, { useState } from 'react';
import './Style/Login.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
    const[email, setEmail] = useState("")
    const[password,setPassword]=useState("")
    const[errorMessage, setErrorMessage]=useState("")
    const navigate = useNavigate();
    function Login(){
        const loginuser = {
            email:email,
            password:password,
        };
        axios.post('http://127.0.0.1:8000/api_ott/loginapi/',loginuser)
        .then(response=>{
            setErrorMessage('')
            navigate('/movielist')
        }).catch(error => {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrorMessage(Object.values(error.response.data.errors).join(' '));
            } else if(error.response.data.message){
                setErrorMessage(error.response.data.message)
            }else{
                setErrorMessage('Failed to login user. Please contact admin')
         }
});
    }

    return (
        <>
            <Navbar />
            <div className="background d-flex justify-content-center align-items-center"> 
            <div className="container col-5 mt-5">
                <div className="row">
                    <div className="col-8 offset-2 border rounded bg-white mb-5">
                        <h1 className="text-primary text-center">Login</h1>
                        <div className="form-group">
                            <label className="text-secondary">Email:</label>
                            <input
                                value={email} 
                                onChange={(event) => setEmail(event.target.value)}
                                type="email"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label className="text-secondary">Password:</label>
                            <input
                                value={password} 
                                onChange={(event) => setPassword(event.target.value)}
                                type="password"
                                className="form-control"
                            />
                        </div>
                        {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>}
                        <div className="form-group">
                            <button type='button' onClick={Login} className="btn btn-primary col-12">
                                Login
                            </button>
                            <div className="text-center">
                                <a href="/forgot">Forgot Password</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;
