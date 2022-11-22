import Card from "../../components/Card/Card.js";
import Carusel from "../../components/carusel/Carusel.js";
import "./Product.css";
import data from "./data.json"

function Product() {
 

  return (
    <>
      <div className="Product container mt-3">
        <Carusel/>  
        <div className="fillter container navbar-expand-lg navbar-light bg-light">
          <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Cakes</a></li>
                <li><a class="dropdown-item" href="#">Malina Cake</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#" >Yo can buy</a></li>
              </ul>
            </li>
          </ul>
          <div className="filterInputs">
          <div class="input-group filterInput mb-2  mb-lg-0 mb-3">
            <input type="text" class="form-control" placeholder="....." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span class="input-group-text" id="basic-addon2">dan</span>
          </div>
          <div class="input-group filterInput mb-2 ms-3 mb-lg-0 mb-3">
            <input type="text" class="form-control" placeholder="....." aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span class="input-group-text" id="basic-addon2">gacha</span>
          </div>
          </div>
          <div className="filterSearch">
          <form class="d-flex ms-2 ">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn searchButton btn-outline-success" type="submit">Search</button>
      </form>
      </div>
        </div>
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

      </div>
    </>
  )
}
export default Product
