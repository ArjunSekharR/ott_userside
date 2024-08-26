import React from 'react';
import Navbar2 from './Navbar2';
import './Style/Login.css';

function Myplan() {
  return (
    <>
      <Navbar2 />
      <div className="background1">
        <div className="adjust">
          <div className="card text-center myplan-card">
            <div className="card-header mb-5">
              <h2>My Plan</h2>
            </div>
            <div className="card-body">
              <h5 className="card-title">Monthly Plan</h5>
              <div className='d-flex justify-content-center mb-5'>
                <p className="card-text">You Can Watch Unlimited Movies for a Month</p>
              </div>
            </div>
            <div className="card-footer text-muted">
              <p className="text-dark">Rs 499</p>
            </div>
          </div>
          <table className="table table-bordered table-striped table-dark myplan-table">
            <thead>
              <tr>
                <th>Plan Name</th>
                <th>Date</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Weekly</td>
                <td>4-June/2023</td>
                <td>149 Rs</td>
                <td><button className='btn btn-primary'>Download</button></td>
              </tr>
              <tr>
                <td>Weekly</td>
                <td>2-October/2023</td>
                <td>149 Rs</td>
                <td><button className='btn btn-primary'>Download</button></td>
              </tr>
              <tr>
                <td>6months</td>
                <td>12-January/2024</td>
                <td>799 Rs</td>
                <td><button className='btn btn-primary'>Download</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Myplan;
