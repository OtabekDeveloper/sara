import React from "react";
import './Home.css'
import data from '../home/data.json'
import Carusel from "../../components/carusel/Carusel";
import Card from "../../components/Card/Card";
import cake_1 from '../../components/assets/cake_1.png'
import cake_2 from '../../components/assets/cake_2.png'
import cake_3 from '../../components/assets/cake_3.png'
import cake3 from '../../components/assets/cake3.png'
import cake4 from '../../components/assets/cake4.png'
import cake5 from '../../components/assets/cake5.png'
import cake6 from '../../components/assets/cake6.png'
import cake7 from '../../components/assets/cake7.png'
import cake8 from '../../components/assets/cake8.png'
// import cake9 from '../../assets/cake9.png'

function Home() {
  return (
    <>
      <div className="container">
      <div id="carouselExampleControls" className="carousel slide tort" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cake_1} className="d-block w-100  kichkina" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cake_2} className="d-block w-100 kichkina" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={cake_3} className="d-block w-100 kichkina" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
     
      <div className="row row-cols-1 row-cols-md-3 g-4 pastga">
  <div className="col">
    <div className="card h-100">
      <img src={cake3} className="card-img-top toliq" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={cake4} className="card-img-top toliq" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={cake5} className="card-img-top toliq" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={cake6} className="card-img-top toliq" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={cake7} className="card-img-top toliq" alt="..."/>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={cake8} className="card-img-top toliq" alt="..."/>
    </div>
  </div>
</div>

<Carusel />

<div className="row">
        
        {data.map((item, index) => {

          var car = item.descrption.slice(0, 39) + "..."

          // expected output: "the lazy dog."
          return (
            <div className="my-2 col-md-3">
              <Card
                title={item.title}
                desc={car}
                price={item.price}
                key={index}
                item={item}
              />
            </div>
          )
        })}


      </div>

       

{/*     
      <div className="container">
        <div className="col-md-4">
        <img src={cake_2} className=" birinchi" alt="..." />
          <img src={cake_1} className=" birinchi" alt="..." />
        
        </div>
        <div className="col-md-4">
        <img src={cake_3} className=" birinchi" alt="..." />
          <img src={cake_2} className=" birinchi" alt="..." />
        
        </div>
        <div className="col-md-4">
        <img src={cake_3} className=" birinchi" alt="..." />
          <img src={cake_2} className=" birinchi" alt="..." />
        
        </div>
      </div> */}
        {/* <div className="rasmlar_2">
          
        </div> */}
      </div>
    
    </>
  )
}

export default Home

