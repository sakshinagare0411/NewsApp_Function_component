import React, { Component } from "react";
import image1 from './p1.avif';
import image2 from './p2.avif';
import image3 from './p3.avif';

export default class Carsoule extends Component {
  render() {
    return (
      <div id="carouselExample" className="carousel slide position-relative" style={{ height: '100vh' }}>
        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100">
            <img src={image1} className="d-block w-100 h-100 object-fit-cover" alt="..." />
          </div>
          <div className="carousel-item h-100">
            <img src={image2} className="d-block w-100 h-100 object-fit-cover" alt="..." />
          </div>
          <div className="carousel-item h-100">
            <img src={image3} className="d-block w-100 h-100 object-fit-cover" alt="..." />
          </div>
        </div>
        <div className="carousel-caption d-none d-md-block">
          <h1>Welcome to Our Website</h1>
          <p>Your description or tagline goes here.</p>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
