import React from 'react'
import image1 from "./asseats/img/7.jpg"
import image2 from "./asseats/img/8.jpg"
import image3 from "./asseats/img/9.jpg"
import image4 from "./asseats/img/10.jpg"
import image5 from "./asseats/img/11.jpg"

function Covid() {
    return (
        <div className="Covid">
           

            
            <div className="covidhead">
                <h1>
                    COVİD-19 TEST VƏ VAKSİNASYA
                </h1>

              <div className="Test">
                <div className="row m-0">
                    
                    <div className="pcr col">
                    <img src={image1} alt="" />
                    <h6>TƏCİLİ TEST</h6>
                    </div>
                    
                    
                    <div className="pcr col">
                    <img src={image2} alt="" />
                    <h6>PCR TESTİ</h6>
                    </div>
                   
                    <div className="pcr col">
                    <img src={image3} alt="" />
                    <h6>AVTO SÜRÜCÜLƏRİN TESTLƏRİ</h6>
                    </div>
                    
                    <div className="pcr col">
                    <img src={image4} alt="" />
                    <h6>VAKSİNASYA</h6>
                    </div>
                    
                    <div className="pcr col">
                    <img src={image5} alt="" />
                    <h6>TAM MCU</h6>
                    </div>
                   

                </div>
              </div>
            </div>
            <div className="buton">
                <button className="btn btn-primary"><a href="Register">Qeydiyyat</a></button>
            </div>
            
        </div>
    )
}

export default Covid
