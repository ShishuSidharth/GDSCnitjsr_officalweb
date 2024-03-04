import "../App.css";
import "../index.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import {  responsive } from "./dataEvents";
import eventImage from "../pics/Header (1).png"; // Import your event image
import { useEffect, useState } from "react";
import axios from "axios";
import Llogo from '../img/gdsc bracket left.svg'
import Rlogo from '../img/gdsc bracket right.svg'
export default function Events() {
  const [productData,setproductdata]=useState([])
  const baseurl = 'localhost:3080/';


// Remove any leading slashes from thumbnailPath

// const color = [
//   "#34A853",
//   "#F9AB00",
//   "#4285F4",
  
// ];

// Now the color array contains more than 10 colors



const options = { year: 'numeric', month: 'short', day: 'numeric' };




  const product = productData.map((item) => (
    <Product
      name1={new Date(item.date).toLocaleDateString('en-US', options)}
      name2={item.startTime+"-"+item.endTime}
      url={`${item.thumbnailurl}`}
      price={item.price}
      description1={item.title}
      description2={item.category}
      clr = {item.color}
    />
  ));
  const fetchdata = async ()=>{
              const response= await axios.get('https://gds-cnitjsr-officalweb.vercel.app/api/v1/displayevents')
              console.log(response.data)
              setproductdata(response.data)
  }
  useEffect(()=>{
     fetchdata()

},[])

  return (
    <div className="App" id="events">
        <div className="flex justify-center items-center">
        
        <img src={Llogo}/>
        <h1 className=" font-Patrick sm:text-[64px] text-[30px] " >Events</h1>          
        <img src={Rlogo}/>
        
                </div>
      <p className="sm:text-[24px] text-[16px] font-Lato  text-[#5F6368] self-center mt-[44px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <br/>
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
