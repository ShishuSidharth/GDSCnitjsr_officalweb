import React from "react";
// import './index.css'

export default function Product(props) {

  return (
    <div className="card">
      <div className="product-container">
        <img className="product--image" src={props.url} alt="product image" />
        <div className="rectangular-box" style={{ backgroundColor: props.clr }}>
          {props.description1}
        </div>
        <div className="rectangular-box2" style={{ backgroundColor: props.clr }}>
          {props.description2}
        </div>
      </div>
      <div className="h-[20px]"></div>
      <b><h5 className="">DATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TIME</h5></b>
      <h4>{props.name1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.name2}</h4>
{console.log(props.description)}
      
      <p>
      <a href={`${props.description}`}><button style={{ backgroundColor: props.clr, margin:'20px'}}>Learn More</button></a>
      </p>
    </div>
  );
}
