import React from "react";
import image1 from "./asseats/img/12.jpg";
import image2 from "./asseats/img/13.jpg";
import Tilt from 'react-tilt'

function Provide() {
  return (
    <div className="provide">
      <div className="row m-0">
        <div className="img1 col-6">
          <Tilt options={{ max : 15 }}>
            <img src={image1} alt="" />
          </Tilt>
        </div>

        <div className="txt1 col-6">
          <h2>Provide the bestservice for you</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore
            veniam libero rerum impedit, ex dolorum similique ducimus.{" "}
          </h4>
          <div className="icon3">
            <a href="">
              <i class="fas fa-play-circle fa-5x"></i>
            </a>
            <h3>
              <a href="#">Watch video about Us</a>
            </h3>
            <div className="apointment"></div>
          </div>
        </div>
      </div>
      <div className="row m-0">
        <div className="txt1 col-6">
          <h2>Fastest emergency departments.</h2>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio labore
            veniam libero rerum impedit, ex dolorum similique ducimus.{" "}
          </h4>
          <div className="icon3">
            <a href="">
              <i class="fas fa-play-circle fa-5x"></i>
            </a>
            <h3>
              <a href="#">Watch video about Us</a>
            </h3>
            <div className="apointment"></div>
          </div>
        </div>

        <div className="img1 col-6">
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Provide;
