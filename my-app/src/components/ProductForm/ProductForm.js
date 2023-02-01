import React, { useState } from "react";
import "./ProductForm.css";
function ProductForm({ addProduct }) {
  const [productInfo, setProductInfo] = useState({
    name: "",
    count: 1,
    completed: false,
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (productInfo.name !== "") {
      addProduct(productInfo);
      setProductInfo({ name: "", count: 1, completed: false });
    } else {
      alert("Bir Ürün Giriniz");
    }
  }
  function handleInputChange(e) {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          name="name"
          value={productInfo.name}
        />
        <button type="submit" onClick={handleSubmit}>
          EKLE
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
