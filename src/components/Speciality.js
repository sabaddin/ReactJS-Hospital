import React from "react";
import image2 from "./asseats/img/4.png";
import image3 from "./asseats/img/6.jpg";
import image4 from "./asseats/img/3.jpg";
import OwlCarousel from "react-owl-carousel2";

function Speciality() {

  const options = {
    loop: false,
    margin:10,
    nav: false,
    dots: false,
    navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    }
  };

  return (
    <div className="Speciality">
      <div className="Our">
        <h1> Our Speciality </h1>
      </div>

      <OwlCarousel options={options} className="carusel">

        <div className="photo3">
          <img src={image2} alt="" />
          <div className="Patology">
            <h3> Patologiya Laboratoriyası</h3>
            <div className="patLab">
              <p> (2001 rəyləri) </p>
              <button className="btn btn-primary">
                <a href=""> Çox Məlumat </a>
              </button>
            </div>
          </div>
        </div>

        <div className="photo3">
          <img src={image4} alt="" />
          <div className="Patology">
            <h3> Patologiya Laboratoriyası </h3>
            <div className="patLab">
              <p> (2001 rəyləri) </p>
              <button className="btn btn-primary">
                <a href=""> Çox Məlumat </a>
              </button>
            </div>
          </div>
        </div>

        <div className="photo3">
          <img src={image2} alt="" />
          <div className="Patology">
            <h3> Patologiya Laboratoriyası </h3>
            <div className="patLab">
              <p> (2001 rəyləri) </p>
              <button className="btn btn-primary">
                <a href=""> Çox Məlumat </a>
              </button>
            </div>
          </div>
        </div>

        <div className="photo3">
          <img src={image3} alt="" />
          <div className="Patology">
            <h3> Patologiya Laboratoriyası </h3>
            <div className="patLab">
              <p> (2001 rəyləri) </p>
              <button className="btn btn-primary">
                <a href=""> Çox Məlumat </a>
              </button>
            </div>
          </div>
        </div>

        <div className="photo3">
          <img src={image4} alt="" />
          <div className="Patology">
            <h3> Patologiya Laboratoriyası </h3>
            <div className="patLab">
              <p> (2001 rəyləri) </p>
              <button className="btn btn-primary">
                <a href=""> Çox Məlumat </a>
              </button>
            </div>
          </div>
        </div>
        
        <div className="photo3">
          <img src={image2} alt="" />
          <div className="Patology">
            <h3> Patologiya Laboratoriyası</h3>
            <div className="patLab">
              <p> (2001 rəyləri) </p>
              <button className="btn btn-primary">
                <a href=""> Çox Məlumat </a>
              </button>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Speciality;
