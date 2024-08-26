import React, { useEffect, useState } from 'react'
import Navbar2 from './Navbar2'
import './Style/Login.css'
import axios from 'axios'

function Subscription() {
  var [planview,setPlanView] = useState([])

  function fetchplanview(){
    axios.get('http://127.0.0.1:8000/api_ott/my_plan').then(response=>{
      setPlanView(response.data)
    })
  }
  useEffect(()=>{
    fetchplanview();
  },[])

  return (
    <>
      <Navbar2/>
      <div className="background d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="row">
            {planview.map(planview=>(
            <div className="col-md-4 mb-4 d-flex justify-content-center" key={planview.id}>
              <div className="card mx-2 unique-card bg-secondary">
                <div className="card-body">
                  <h5 className="card-title text-center">{planview.plan_name}</h5>
                  <h6 className="card-title text-center">{planview.description}</h6>
                  <h6 className="card-title text-center">{planview.duration}</h6>
                  <h6 className="card-title text-center">{planview.duration}</h6>
                  <div className="inline-buttons d-flex justify-content-center">
                    <button className="btn btn-dark">Click to Pay</button>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscription
