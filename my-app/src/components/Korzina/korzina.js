import "./korzina.css"
import imag from "../assets/cakeFrist.jpg"
import { CartProvider, useCart } from "react-use-cart";
import CartModal from "../modalCart/cartModal"
import React, { useState } from "react";

function Korzina() {
  const [CartModalOpen, setCartModalOpen] = useState(false);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal, 
    // itemTotal
  } = useCart();

  if (isEmpty) return <p>Your cart is empty</p>;
    return(
        <>
<div className="coverr container">
<h1>Mahsulotlar ({totalUniqueItems})</h1>
        <div className="cart ">
          <div className="fulllcart ">
            {items.map((item) => (
              <>
               <div className="around">
               <div className="oneCart">
                 <img className="cartImg" src={imag} alt="" /> 
                 <div className="cartText">
                 <h3 className="card-title cartTitle">{item.title}</h3>
                 <p className="cartDesc text-muted">{item.price}$</p>
                 </div>
                 <div className="cartAmount">
                 <button type="button" class="btn btn-light cartBttn"  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                 <h5 className="cartAmuntNum">{item.quantity}</h5>
                 <button type="button" class="btn btn-light cartBttn" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                 <button type="button" class="btn btn-light cartBtn" onClick={() => removeItem(item.id)}>Clear</button>
               </div>
               <h1 className="fullAmount ">{item.itemTotal}</h1>
              
               </div>     
               </div>
              
             
               </>
              
            ))}
            <div className="allSumma ">
         <button class="btn olishButton btn-outline-success" type="submit" onClick={() => { setCartModalOpen(true); }}>Sotib Olish</button> 
        <h1 className="cartTiitle">Umumiy Narx: {cartTotal}</h1>
        {CartModalOpen && <CartModal setCartModalOpen={setCartModalOpen} />}
        </div>
        </div>
       </div>
       </div>
        </>
    )
}
export default Korzina