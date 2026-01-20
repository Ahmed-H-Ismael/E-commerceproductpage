import { useState } from "react";

export function ProductDetails({ handleCart, nuItem, setnuItem }) {
  function handleminus() {
    if (nuItem < 1) {
      return;
    } else {
      setnuItem((nu) => nu - 1);
    }
  }
  function handleAdd() {
    setnuItem((nu) => nu + 1);
  }
  function addCart() {
    const yourCard = {
      name: "Fall Limited Edition Sneakers",
      price: Number(125),
      numberItem: Number(nuItem),
      img: `${process.env.PUBLIC_URL}/images/image-product-1-thumbnail.jpg`,
      total: nuItem * 125,
    };
    handleCart(yourCard);
  }
  return (
    <div className="details">
      <p class="company">SNEAKER COMPANY</p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p class="desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>

      <div class="price">
        <div className="price-p">
          <p class="new">
            $125.00<span class="badge">50%</span>
          </p>
        </div>
        <span class="old">$250.00</span>
      </div>

      <div class="actions">
        <div class="counter">
          <button onClick={handleminus}>-</button>
          <span>{nuItem}</span>
          <button onClick={handleAdd}>+</button>
        </div>
        <button class="add" onClick={addCart}>
          🛒 Add to cart
        </button>
      </div>
    </div>
  );
}
