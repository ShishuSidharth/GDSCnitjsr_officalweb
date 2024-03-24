import React from "react";
// import './index.css'

export default function Product(props) {

  return (
    <div className="card ">
      <div className="product-container">
        <img className="product--image" src={props.url} alt="product image" />
        <div className="rectangular-box h-fit" style={{ backgroundColor: props.clr }}>
          {props.description1}
        </div>
        <div className="rectangular-box2 h-fit" style={{ backgroundColor: props.clr }}>
          {props.description2}
        </div>
        <br /><br />
      </div>
      <div className="mt-[20px]">
      <b><h5 >DATE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TIME</h5></b>
      <h4>{props.name1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.name2}</h4>
      </div>
{console.log(props.description)}
      
      <p className="m-[20px]">
        <button style={{ backgroundColor: props.clr }}><a href={`${props.description}`}>Learn More</a></button>
      </p>
    </div>
  );
}
