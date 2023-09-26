import React from 'react';
import '../css/style.css';
import sliderImage from '../img/nguyentrai.png';
import sliderImage1 from '../img/nguyentrai1.png';
import sliderImage2 from '../img/nguyentrai2.png';
import '../bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
 
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleControls" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleControls" data-slide-to="1"></li>
        <li data-target="#carouselExampleControls" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={sliderImage} className="d-block w-80" alt="Slider 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>WELCOME TO NGUYEN TRAI HIGH SCHOOL</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={sliderImage1} className="d-block w-100" alt="Slider 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>WELCOME TO NGUYEN TRAI HIGH SCHOOL</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src={sliderImage2} className="d-block w-100" alt="Slider 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>WELCOME TO NGUYEN TRAI HIGH SCHOOL</h5>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;
