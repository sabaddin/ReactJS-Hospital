import React from "react";
import image from "./asseats/img/photo1.jpg";

function Reputation() {
  return (
    <div className="page2">
      <div className="reputation">
        <div className="row">
          <div className="text col-xl-6 col-lg-12">
            <h1>A heritage in care. A reputation in excellence.</h1>

            <h6>
              Apollo hosbital provides exellent service by prioritizing the
              safty and securty of patients.
            </h6>
            <div className="icon1">
              <a href="">
                <i class="fas fa-play-circle fa-5x"></i>
              </a>
              <h3>
                <a href="#">Watch video about Us</a>
              </h3>
              <div className="apointment"></div>
            </div>
          </div>
          <div className="photo1 col-xl-6 col-lg-12">
            <img src={image} />
          </div>
        </div>
      </div>
      <div className="apointmentheader">
        <h4>Book an appointment</h4>
      </div>
      <div className="appointment">
        <div>
          <p>Zaman</p>
          <select name="" id="">
            <input type="date" min="2021-01-01" max="2022-01-01"/>
          </select>
        </div>
        <div className="vaxt"></div>
        <div>
          <p>Yer</p>
          <select name="" id="">
            <option value="nəsimi">Nəsimi</option>
            <option value="Nizami">Nizami</option>
            <option value="Suraxanı">Suraxanı</option>
            <option value="Memar Əcəmi">Memar Əcəmi</option>
          </select>
          <div className="Location"></div>
        </div>

        <div>
          <p>Xidmet</p>
          <select name="" id="">
            <option value="">Rehabilitasiya</option>
            <option value="">Travmatoloq</option>
            <option value="">Genekolog</option>
            <option value="">Nervpotolog</option>
            <option value="">Urologiya</option>
          </select>
          <div className="services"></div>
        </div>
        <div>
          <a href="">
            <button className="btn btn-primary">Rezervasya</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Reputation;
