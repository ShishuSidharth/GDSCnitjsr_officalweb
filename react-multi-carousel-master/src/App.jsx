import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import eventImage from "../src/pics/Header (1).png"; // Import your event image

export default function App() {
  const product = productData.map((item) => (
    <Product
      name1={item.name1}
      name2={item.name2}
      url={item.imageurl}
      price={item.price}
      description1={item.description1}
      description2={item.description2}
      clr = {item.clr}
    />
  ));

  return (
    <div className="App">
         <h1>
        <img src={eventImage} alt="Events" className="event-image" />
      </h1>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#555' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}
