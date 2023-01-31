import React from 'react'
import "./ProductList.css"
function ProductList(props) {
  let counter=0;
  props.products.map((item)=>{return counter += item.count})
  return (
    <div>
        <ul>
            {props.products.map((item,index)=>{return <li key={index}>{item.name} <div className='changeButton'> <span className='decreaseSpan' onClick={()=>{props.changeNumber(index,"decrease")}}>-</span> {item.count} <span className='increaseSpan' onClick={()=>{props.changeNumber(index,"increase")}}>+</span></div> </li>})}
            <li>TOPLAM <div className='changeButton'>{counter}</div> </li>
        </ul>
    </div>
  )
}

export default ProductList