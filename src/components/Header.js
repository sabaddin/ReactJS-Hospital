import React from "react";
import { Link } from "react-router-dom";
import image from "./asseats/img/14.png";

function Header() {
  return (
    <div className="header">
      <div className="row m-0">
        <div className="Logo col-xl-4 col-lg-12">
          <img src={image} /> 
         
        </div>
        <div className="Menu col-xl-5 col-lg-12">
          <ul>
            <li>
               
              <a href="#"> Baş səhifə </a>
            </li>
            <li>
               
              <a href="#"> Haqqımızda</a>
            </li>
            <li>
               
              <a href="#"> Xidmətlər </a>
            </li>
            <li>
               
              <a href="#"> Həkimlər </a>
            </li>
          </ul> 
        </div> 
        <div className="button col-xl-3 col-lg-12">
          <button className="btn btn-primary"> Axtarış  </button> 
        </div> 
      </div>
    </div>
  );
}

export default Header;
