// src/App.js

import React from "react";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import UserImage from "./UserImage";
import product from "./product";
import red2Image from "./Image/red2.png"; 
import "./styles.css";

const App = () => {
  const firstName = "Alaa Rejeb"; 

  return (
    <div className="App">
      <Card className="product-card">
        <Image image={product.image} className="product-image" />
        <Card.Body className="product-details">
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </Card.Body>
      </Card>
      <p className="greeting animate__animated animate__fadeIn">Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <UserImage image={red2Image} />} 
    </div>
  );
};

export default App;
