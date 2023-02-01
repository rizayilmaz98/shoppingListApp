import React from "react";
import "./ProductList.css";
function ProductList(props) {
  let counter = 0;
  props.products.map((item) => {
    return (counter += item.count);
  });
  return (
    <div>
      <ul>
        {props.products.map((item, index) => {
          return (
            <li
              key={index}
              className={item.completed === true ? "lineThrough" : "lineNone"}
            >
              {" "}
              <div className="productName">
                <input
                  type="checkbox"
                  onClick={() => {
                    props.changeCompleted(index);
                    counter = counter - item.count;
                  }}
                />{" "}
                {item.name}
              </div>{" "}
              <div className="changeButton">
                {" "}
                <span
                  className="decreaseSpan"
                  onClick={() => {
                    props.changeNumber(index, "decrease");
                  }}
                >
                  -
                </span>{" "}
                {item.count}{" "}
                <span
                  className="increaseSpan"
                  onClick={() => {
                    props.changeNumber(index, "increase");
                  }}
                >
                  +
                </span>
              </div>{" "}
            </li>
          );
        })}
        <li>
          TOPLAM <div className="changeButton">{counter}</div>{" "}
        </li>
      </ul>
    </div>
  );
}

export default ProductList;
