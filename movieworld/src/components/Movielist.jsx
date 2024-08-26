import React, { useEffect, useState } from "react";
import Navbar2 from "./Navbar2";
import { Image } from "react-bootstrap";
import './Style/Movielist.css';
import Search from "./Search";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Movielist() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  function view(id) {
    navigate(`/movieview/${id}`); 
  }

  function fetchMovies() {
    axios.get('http://127.0.0.1:8000/api_ott/listapi')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the movie data!", error);
      });
  } 

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <> 
      <Navbar2 />
      <div className="background d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <span className="top"><Search /></span>
        <div className="container">
          <div className="row">
            {movies.map(movie => (
              <div key={movie.id} className="col-md-4 mb-4 d-flex justify-content-center">   
                <div className="card mx-2 unique-card">
                  <Image className="card-img-top" src={`http://127.0.0.1:8000/${movie.thumbnail}`} alt={movie.title} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <div className="inline-buttons">
                      <button className="btn btn-primary" onClick={() => view(movie.id)}>View</button>
                      <button className="btn btn-primary">+Watch Later</button>
                    </div>
                  </div>
                </div> 
              </div>
            ))}
          </div>
          <div>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  );
}

export default Movielist;
