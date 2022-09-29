import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import Question from "../Question/Question";
import Sidepart from "../Sidepart/Sidepart";
import "./Body.css";

const Body = () => {
  const [datas, setSdatas] = useState([]);
  useEffect(() => {
    fetch("data.JSON")
      .then((response) => response.json())
      .then((data) => setSdatas(data));
  }, []);
  return (
    <div className="body-container">
      <div className="body-container-right">
        {datas.map((dt) => (
          <Cards key={dt.id} datas={dt}></Cards>
        ))}
      </div>
      <div className="body-container-left">
        <Sidepart></Sidepart>
      </div>
    </div>
  );
};

export default Body;
