import React from 'react';
import Navbar2 from './Navbar2';
import './Style/Login.css'

function Resetpassword() {
  return (
    <>
      <Navbar2 />
      <div className='background'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card mt-5">
              <div className="card-body bg-secondary">
                <form>
                  <div className="form-group">
                    <label className="font-weight-bold" htmlFor="new-password">New Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="new-password" 
                      placeholder="Enter your Password" 
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label className="font-weight-bold" htmlFor="confirm-password">Confirm Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="confirm-password" 
                      placeholder="Enter your Password" 
                      required 
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}


export default Resetpassword;
