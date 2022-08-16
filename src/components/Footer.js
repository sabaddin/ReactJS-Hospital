import React from 'react'
import image from "./asseats/img/14.png"

function Footer() {
    return (
    <div>
        <div className="footer">
            <div className="row m-0">
                <div className="Logo2 col-4">
                <img src={image} alt=""/>
                <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem?</h5>
                <a href=""><i class="fab fa-instagram fa-2x"></i></a>  <a href=""><i class="fab fa-linkedin fa-2x"></i></a> 
                
                </div>
                <div className="Menu1 col-8">
                <li className="menu2">
                    <a href="Home">Home</a>
                    <a href="Home">About us</a>
                    <a href="Home">Services</a>
                    <a href="Home">Pharmacy</a>

                </li>
                <li className="menu2">
                    <a href="Home">Facility</a>
                    <a href="Home">Privacy</a>
                    <a href="Home">Terms & Conditions</a>
                    <a href="Home">Privacy policy</a>

                </li>
                </div>
                
            </div>
            <div className="Contact">
            <div className="row m-0">
                <div className="contacttxt col-4">
                    <h1>Contact us</h1>
                </div>

                <div className="iconfoot col-8">
                    <div className ="services1 col">
                         <a href=""><i class="fas fa-briefcase-medical fa-3x "></i></a>
                         <p> 24 Hours Emergency</p>
                        <h3>2-098-19</h3>
                    </div>
                   <div className ="services1 col">
                       <a href=""><i class="fas fa-ambulance fa-3x"></i></a>
                       <p> Custemer Services</p>
                        <h3>2-222-19</h3>
                   </div>
                    
                </div>
            </div>
            </div>
        </div>
        
    </div>
    )
}

export default Footer
