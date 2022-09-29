import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Cards.css";

const Cards = (props) => {
  console.log(props);
  const { id, gymImg, name, time } = props.datas;
  return (
    <div>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" src={gymImg} className="gymimg" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>Time Required : {time}</Card.Text>
          <Button variant="primary">Complete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
