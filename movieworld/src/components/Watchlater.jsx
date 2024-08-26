import React from "react";
import Navbar2 from "./Navbar2";
import { Image } from "react-bootstrap";
import './Style/Watchlater.css';
import Pagination from "./Pagination";

function Watchlater() {
  return (
    <> 
      <Navbar2 />
      <div className="background1">
      <h1 className="text-center text-white">WatchLater</h1>
      <div className=" d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card mx-2 unique-card">
                <Image className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzaaG4ovnEmLpZD-22JplkEPmdIAqy_kEmfg&s" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Star-Wars:The Force Awakens</h5>
                  <p className="card-text">
                  A new order threatens to destroy the New Republic. Finn, Rey and Poe, backed by the Resistance and the Republic,<br/> must find a way to stop them and find Luke, the last surviving Jedi.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 10 sec ago</small>
                  </p>
                  <div className="inline-buttons">
                    <button className="btn btn-primary">View</button>
                    <button className="btn btn-primary">Remove</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card mx-2">
                <Image className="card-img-top" src="https://preview.redd.it/official-poster-for-dune-part-two-v0-xa07g0z9veec1.jpeg?auto=webp&s=4958c1e30c6785cadaeef6083116fef7b4fa5b07" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Dune:Part Two</h5>
                  <p className="card-text">
                  Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.<br/> Facing a choice between the love of his life and the fate of the universe.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 30 mins ago</small>
                  </p>
                  <div className="inline-buttons">
                    <button className="btn btn-primary">View</button>
                    <button className="btn btn-primary">Remove</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4 d-flex justify-content-center">
              <div className="card mx-2">
                <Image className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVZHQC_9dfw0gXycv_J1YN1nqk1t5mveSAZQ&s" alt="Card image cap" />
                <div className="card-body">
                  <h5 className="card-title">Furiosa: A Mad Max Saga</h5>
                  <p className="card-text">
                  Snatched from the Green Place of Many Mothers, young Furiosa falls into the hands of a great biker horde led by the warlord Dementus.<br/> Sweeping through the Wasteland, they come across the Citadel.<br/>  
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Last updated 10hr ago😇
                    </small>
                  </p>
                  <div className="inline-buttons">
                    <button className="btn btn-primary"><a className="card-link text-white"style={{ textDecoration: 'none' }} href="/views">View</a></button>
                    <button className="btn btn-primary">Remove</button>
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

export default Watchlater;
