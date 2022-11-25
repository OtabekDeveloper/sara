import "./Carusel.css"
import imag1 from "../../view/assets/banana.jpg"
import imag2 from "../../view/assets/cake.jpg"
import imag3 from "../../view/assets/krem.jpg"
import Modal from "../Modal/Modal"
import React, { useState } from "react";

function Carusel() {
  const [modalOpen, setModalOpen] = useState(false);
    return(
        <>
        <div className="container">
           <div id="carouselExampleIndicators" className="carousel slide CaruselImg" data-bs-ride="carousel">
          <div className="carousel-indicators caruselIndicator">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item  active">
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={imag1} className="img-fluid CaruselImg  p-2" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body cardBody ms-3">
                      <h5 className="card-title proCardTitle ts">Milliy Taom</h5>
                      <p className="card-text proCardText ds">Lorem ipsum dolor sit amet.</p>
                      <b className="proCardPrice ps" >30/<del>20$</del></b><br />
                      <a href="#" className="btn btn-primary proCardbtn me-2" onClick={() => { setModalOpen(true); }}>View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={imag2} className="img-fluid CaruselImg  p-2" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body cardBody ms-4">
                      <h5 className="card-title proCardTitle ts">Milliy Taom</h5>
                      <p className="card-text proCardText ds">Lorem ipsum dolor sit amet.</p>
                      <b className="proCardPrice  ps">30/<del>20$</del></b><br />
                      <a href="#" className="btn btn-primary proCardbtn me-2" onClick={() => { setModalOpen(true); }}>View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card mb-3" >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={imag3} className="img-fluid CaruselImg p-2" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body cardBody ms-4">
                      <h5 className="card-title proCardTitle ts">Milliy Taom</h5>
                      <p className="card-text proCardText ds">Lorem ipsum dolor sit amet.</p>
                      <b className="proCardPrice  ps">30/<del>20$</del></b><br />
                      <a href="#" className="btn btn-primary proCardbtn me-2" onClick={() => { setModalOpen(true); }}>View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
          </div>
          <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="visually-hidden">Next</span>
          </button>
          </div>
          </div>  
        </>
    )
}
export default Carusel