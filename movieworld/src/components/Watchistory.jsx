import React from "react";
import Navbar2 from "./Navbar2";
import { Image } from "react-bootstrap";
import './Style/Watchlater.css';
import Pagination from "./Pagination";

function Watchistory() {
  return (
    <> 
      <Navbar2 />
      <div className="background1">
      <h1 className="text-center text-white">WatchHistory</h1>
      <div className=" d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card mx-2 unique-card">
                <Image className="card-img-top" src="https://wallpapercave.com/wp/wp11632591.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">JohnWick: 4</h5>
                  <p className="card-text">
                  With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as<br/> he seeks out the most powerful players in the underworld
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 10 sec ago</small>
                  </p>
                  <div className="inline-buttons">
                    <button className="btn btn-primary">View</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card mx-2">
                <Image className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTtqsW10yPbvI3IOV620bGEfOpGo8s1_Sykw&s" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Fastfive</h5>
                  <p className="card-text">
                  Luke Hobbs, a federal agent linked to the US Diplomatic Security Service, follows Mia, Brian and Dominic,<br/> seeking to detain them, as they strategise to steal $100 million dollars from a corrupt mogul.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 30 mins ago</small>
                  </p>
                  <div className="inline-buttons">
                    <button className="btn btn-primary">View</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card mx-2">
                <Image className="card-img-top" src="https://i.pinimg.com/736x/c6/db/8e/c6db8e7f759af2566b2076e10f197439.jpg" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">BeetileJuice</h5>
                  <p className="card-text">
                  Three generations of the Deetz family return home to Winter River after an unexpected family tragedy. Still haunted by Beetlejuice, Lydia's life soon<br/> gets turned upside down when her rebellious teenage daughter discovers.  
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 10hr ago😇
                    </small>
                  </p>
                  <div className="inline-buttons">
                    <button className="btn btn-primary"><a className="card-link text-white"style={{ textDecoration: 'none' }} href="/views">View</a></button>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Pagination/>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Watchistory;
