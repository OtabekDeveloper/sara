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
           <div id="carouselExampleIndicators" class="carousel slide CaruselImg" data-bs-ride="carousel">
          <div class="carousel-indicators caruselIndicator">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item  active">
              <div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={imag1} class="img-fluid CaruselImg  p-2" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body cardBody ms-3">
                      <h5 class="card-title proCardTitle ts">Milliy Taom</h5>
                      <p class="card-text proCardText ds">Lorem ipsum dolor sit amet.</p>
                      <b className="proCardPrice ps" >30/<del>20$</del></b><br />
                      <a href="#" class="btn btn-primary proCardbtn me-2" onClick={() => { setModalOpen(true); }}>View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={imag2} class="img-fluid CaruselImg  p-2" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body cardBody ms-4">
                      <h5 class="card-title proCardTitle ts">Milliy Taom</h5>
                      <p class="card-text proCardText ds">Lorem ipsum dolor sit amet.</p>
                      <b className="proCardPrice  ps">30/<del>20$</del></b><br />
                      <a href="#" class="btn btn-primary proCardbtn me-2" onClick={() => { setModalOpen(true); }}>View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={imag3} class="img-fluid CaruselImg p-2" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body cardBody ms-4">
                      <h5 class="card-title proCardTitle ts">Milliy Taom</h5>
                      <p class="card-text proCardText ds">Lorem ipsum dolor sit amet.</p>
                      <b className="proCardPrice  ps">30/<del>20$</del></b><br />
                      <a href="#" class="btn btn-primary proCardbtn me-2" onClick={() => { setModalOpen(true); }}>View</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
          </div>
          <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="visually-hidden">Next</span>
          </button>
          
        </div>
        </>
    )
}
export default Carusel