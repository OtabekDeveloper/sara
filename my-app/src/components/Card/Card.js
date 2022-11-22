import React, { useState } from "react";
import "./Card.css";
import imag1 from "../assets/cakeFrist.jpg"
import imag2 from "../assets/cakeScon.jpg"
import imag4 from "../assets/Chocolate-cake.jpg"
import { useCart } from "react-use-cart"
import Modal from "../Modal/Modal"

function Card(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const { addItem } = useCart();
   const Send = (prod) => {
  localStorage.setItem('prod', JSON.stringify(prod))
}
  return (

    <div className="fullCart ">
      <div class="card oneCard " >
        <img src={imag4} class="card-img-center proCardImg " alt="..." />
        <div class="card-body cardBody p-3">
          <h5 class="card-title proCardTitle">{props.title}</h5>
          <p class="card-text proCardText">{props.desc}</p>
          <b className="proCardPrice ">{props.price}<del>20$</del></b><br />
          <a href="#" class="btn btn-primary proCardbtn me-2" onClick={() => { setModalOpen(true); }}>View</a>
          <a href="#" class="btn btn-primary proCardbtn ms-2" onClick={() => addItem(props.item)} >Add</a>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
      </div>
     
    </div>

    // <div>

    //   <div className="ProCard ">
    //     <div className="card proCard">
    //       <div className="card-img">
    //         <img src={imag1} alt="" />
    //       </div>
    //       <div className="card-text proCardText">
    //         <h1 className="card-title proCardTitle">{props.name}</h1>
    //         <p className="card-desc">{props.desc} </p>
    //         <p className="card-price">{props.price}</p>
    //       </div>
    //       <div className="ProCardBtn">
    //         <button className="btn btnSecond">view</button>
    //         <button className="btn btnFrist" onClick={() =>addItem(props.item)} >Add Cart</button>
    //       </div>
    //     </div>
    //   </div>



    // </div>
  );
}

export default Card;
