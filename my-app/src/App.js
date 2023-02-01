import "./App.css";
import { useState } from "react";
import ProductForm from "./components/ProductForm/ProductForm";
import ProductList from "./components/ProductList/ProductList";
function App() {
  const [products, updateProducts] = useState([]);
  const addProduct = (productInfo) => {
    updateProducts([...products, productInfo]);
  };
  const changeNumber = (index, process) => {
    if (process === "increase") {
      products[index].count++;
      updateProducts([...products]);
    }
    if (process === "decrease") {
      products[index].count -= 1;
      updateProducts([...products]);
    }
  };
  const changeCompleted = (index) => {
    products[index].completed = !products[index].completed;
    products[index].count -= products[index].count;
    updateProducts([...products]);
  };
  return (
    <div className="App">
      <h1>React Shopping List</h1>
      <ProductForm addProduct={addProduct} />
      <ProductList
        products={products}
        changeNumber={changeNumber}
        changeCompleted={changeCompleted}
      />
    </div>
  );
}
export default App;
