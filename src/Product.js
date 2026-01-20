import { useState } from "react";

const sneakersthumbnail = [
  `${process.env.PUBLIC_URL}/images/image-product-1-thumbnail.jpg`,
  `${process.env.PUBLIC_URL}/images/image-product-2-thumbnail.jpg`,
  `${process.env.PUBLIC_URL}/images/image-product-3-thumbnail.jpg`,
  `${process.env.PUBLIC_URL}/images/image-product-4-thumbnail.jpg`,
];
const sneakers = [
  `${process.env.PUBLIC_URL}/images/image-product-1.jpg`,
  `${process.env.PUBLIC_URL}/images/image-product-2.jpg`,
  `${process.env.PUBLIC_URL}/images/image-product-3.jpg`,
  `${process.env.PUBLIC_URL}/images/image-product-4.jpg`,
];
export function Product() {
  const [active, setActive] = useState(0);
  const [img, setImg] = useState(0);
  const [overlay, setProductOverLay] = useState(false);
  function handlePic() {
    setProductOverLay((p) => !p);
  }
  function handleClose() {
    setProductOverLay(false);
  }
  function handleProduct(img) {
    setImg(img);
    setActive(img);
  }
  function handleProductRight() {
    if (img === 3) {
      setImg(0);
    } else {
      setImg((img) => (img = img + 1));
    }
  }
  return (
    <>
      <div className="product-imgs">
        <ProductItem
          handleProductRight={handleProductRight}
          handleProduct={handleProduct}
          active={active}
          img={img}
          handlePic={handlePic}
        />
      </div>
      {overlay && (
        <ProductOverlay
          img={img}
          handleProductRight={handleProductRight}
          handleProduct={handleProduct}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
function ProductItem({
  handleProductRight,
  handleProduct,
  active,
  handlePic,
  img,
}) {
  return (
    <div>
      <div className="product-img">
        <button className="btn btn-right" onClick={handleProductRight}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        <button className="btn btn-left" onClick={handleProductRight}>
          <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              stroke-width="3"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
        </button>
        {
          <img
            srcSet={` ${sneakers[img]} 480w,
                ${sneakers[img]} 800w,
                ${sneakers[img]} 1200w`}
            sizes="(max-width: 600px) 480px,
            (max-width: 900px) 800px,1200px"
            src={sneakers[img]}
            alt="sneakers"
            onClick={handlePic}
          />
        }
      </div>
      <div className="product-img-thumb">
        {Array.from({ length: 4 }, (_, img) => (
          <img
            key={img}
            src={`${process.env.PUBLIC_URL}/images/image-product-${img + 1}-thumbnail.jpg`}
            alt="sneakers"
            className={`img-thumb ${active === img ? "active" : ""}`}
            onClick={(e) => handleProduct(img)}
          />
        ))}
      </div>
    </div>
  );
}
function ProductOverlay({
  handleProductRight,
  handleProduct,
  active,
  handleClose,
  img,
}) {
  return (
    <div className="productOverlay">
      <div className="thumb">
        <span class="closeoverlay" onClick={handleClose}>
          &times;
        </span>
        <ProductItem
          img={img}
          handleProductRight={handleProductRight}
          handleProduct={handleProduct}
          active={active}
        />
      </div>
    </div>
  );
}
