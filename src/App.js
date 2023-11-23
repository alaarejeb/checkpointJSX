import React from "react";
import { Card } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import UserImage from "./UserImage";
import red2Image from "./Image/red2.png"; 
import "./styles.css";
// 

const App = () => {
  var firstName = ""; 
  // this is a prompt function for the user to write there name
const dd=()=> {let a=(prompt("Your name"));
firstName=a}
dd()

  return (
    /* bringing in all the components  */
    <div className="App">
      <Card className="product-card">
        <Image  className="product-image" />
        <Card.Body className="product-details">
          <Name />
          <Price  />
          <Description  />
        </Card.Body>
      </Card>
            {/* this will display the name or there  */}
      <p className="hello">Hello, {firstName ? firstName : "there"}!</p>
      {firstName && <UserImage image={red2Image} />}

      
      
    </div>
  );
};

export default App;

