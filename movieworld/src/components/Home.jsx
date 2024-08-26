import React from 'react';
import './Style/Home.css';
import { Image, Button } from 'react-bootstrap';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid p-0">
        <div className="row m-0">
          <div className="col-12 text-center position-relative vh-100">
            <h1 className="position-absolute w-100 text-light" style={{ top: '20px', zIndex: 2 }}>Welcome to MyApp</h1>
            <p className="position-absolute w-100 text-light col-5" style={{ top: '80px', zIndex: 3 }}>
              Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device. Depending on your plan, you can also download TV shows and movies to your Android phone or tablet, iPhone, iPad, or Google Chromebook device and watch without an internet connection.
            </p>
            <Image
              src='https://i.pinimg.com/736x/81/d6/1c/81d61c9b333a7471a027616521515fda.jpg'
              alt="Welcome Banner"
              className="img-fluid full-screen-img"
            />
            <div className="position-absolute w-100 d-flex justify-content-center" style={{ top: '40%', transform: 'translateY(-50%)', zIndex: 2 }}>
              <Button className='bg-primary'><a className='text-white card-link' href='/login'>Signup</a></Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
