import React from 'react';
import './Style/Login.css'

function Forgotpassword() { 
    return (
        <div className="background d-flex justify-content-center align-items-center">
            <div className="container col-5 mt-5">
                <div className="row">
                    <div className="col-8 offset-2 border rounded bg-white mb-5 ">
                        <h3 className='text-primary text-center'>ForgetPassword</h3>
                        <div className="form-group">
                            <label className='text-secondary'>Email: </label>
                            <input
                                type="email"
                                className="form-control"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary  col-12">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forgotpassword;