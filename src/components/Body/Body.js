import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Question from "../Question/Question";
import Sidepart from "../Sidepart/Sidepart";
import "./Body.css";

const Body = () => {
  const [datas, setSdatas] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.JSON")
      .then((response) => response.json())
      .then((data) => setSdatas(data));
  }, []);
  const handleClick = (datas) => {
    // console.log(datas.time);
    const newCart = [...cart, datas];
    setCart(newCart);
  };
  return (
    <div className="body-container">
      <div className="body-container-right">
        {datas.map((dt) => (
          <Cards key={dt.id} datas={dt} handleClick={handleClick}></Cards>
        ))}
      </div>
      <div className="body-container-left">
        <Sidepart cart={cart}></Sidepart>
      </div>
    </div>
  );
};

export default Body;
