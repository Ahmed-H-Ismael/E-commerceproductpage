import "./App.css";
import { Navbar } from "./Navbar";
import { Product } from "./Product";
import { ProductDetails } from "./ProductDetais";
import { useState } from "react";
export default function App() {
  const [nuItem, setnuItem] = useState(0);
  const [cart, setCart] = useState(null);
  const [activecart, setActivecart] = useState(false);
  function handleActiveCart() {
    setActivecart((prev) => !prev);
  }
  function handleCart(newItem) {
    if (newItem.numberItem === 0) {
      return;
    } else {
      setCart(newItem);
    }
  }
  function handleDelete() {
    setCart(null);
    setnuItem(0);
  }
  function handleCheckout() {
    setCart(null);
    setnuItem(0);
    setActivecart((active) => !active);
  }
  return (
    <div className="App">
      <div className="container">
        <Navbar
          cart={cart}
          handleDelete={handleDelete}
          handleCheckout={handleCheckout}
          handleActiveCart={handleActiveCart}
          activecart={activecart}
          nuItem={nuItem}
        />
        <div className="product">
          <Product />
          <ProductDetails
            handleCart={handleCart}
            nuItem={nuItem}
            setnuItem={setnuItem}
          />
        </div>
      </div>
    </div>
  );
}
