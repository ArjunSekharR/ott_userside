import React, { useEffect, useState } from 'react';
import Navbar2 from './Navbar2';
import './Style/style.css';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Image } from 'react-bootstrap';

function Movieview() {
  const { id } = useParams();
  console.log("Movie ID:", id);
  const [movie, setMovie] = useState({});
  const [rating, setRating] = useState(0);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api_ott/movieview/${id}`).then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the movie data!", error);
      });
  }, [id]);

  return (
    <>
      <Navbar2 />
      <div className="background1 row ml-0 justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">{movie.title}</h5>
                  <Image className="card-img-top mb-3" src={`http://127.0.0.1:8000/${movie.thumbnail}`} alt={movie.moviename} />
                  <p className="card-text">{movie.description}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  {movie.video ? (
                    <video style={{ width: '100%', height: 'auto' }} controls>
                      <source id="player" src={`http://127.0.0.1:8000/${movie.video}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <p>Video not available</p>
                  )}
                  <div className="d-flex justify-content-center my-3">
                    <Rating
                      initialRating={rating}
                      onChange={(rate) => setRating(rate)}
                      emptySymbol={<FaStar color='#ccc' size={30} />}
                      fullSymbol={<FaStar color="#ffc107" size={30} />}
                    />
                  </div>
                  <button className="btn btn-danger mb-3" onClick={() => setRating(0)}>Clear Rating</button>
                  <div className="text-center mb-3">
                    <Link to="/movielist" className="btn btn-primary">Back to List</Link>
                  </div>
                  <div className="text-center">
                    <Link to="#" className="btn btn-success">Play Movie</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movieview;
