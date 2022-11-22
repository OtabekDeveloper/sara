import React from "react";
import "./cartModal.css";

function CartModal({ setOpenCartModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenCartModal(false);
            }}
          >
            x
          </button>
        </div>
        <div className="cartBody">
        <form  className="">
                  
                  <div className="royxat1 p-2">
                    <div>
                      <h5 >Заполните список</h5>
                    </div>
                    <div className="modal-body">
                      <div className="form-group ">
                        <label htmlFor="exampleInputEmail1">Имя</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Введите имя"
                         
                          name="name"
                        />
                      </div>
                      <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">Номер телефона</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Введите номер телефона"
                          
                          name="tel"
                        />
                      </div>
                      <div className="form-group my-3">
                        <label htmlFor="exampleInputEmail1">Адресс</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Введите адресс"
                          
                          name="adress"x
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="submit"
                        className="btn  btnbuy btn-lg "
                      >
                        Заказать
                      </button>
                    </div>
                  </div>
               
              </form>

        </div>
        
        
        <div className="footer">
          
        </div>
      </div>
    </div>
  );
}

export default CartModal;