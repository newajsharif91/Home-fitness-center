import React from "react";
import "./Sidepart.css";
import Button from "react-bootstrap/Button";

const Sidepart = ({ cart }) => {
  return (
    <div className="side-section">
      <div className="personal-info">
        <img
          className="personal-img"
          src="https://i.ibb.co/zVCFmB8/DSC3976-copy.jpg"
          alt=""
        />
        <div>
          <p>Newaj Sharif</p>
          <p>Class : X</p>
        </div>
      </div>
      <div className="break">
        <h5>Add a break</h5>
        <div className="break-duration">
          <button className="raise">10 min</button>
          <button className="raise">20 min</button>
          <button className="raise">25 min</button>
          <button className="raise">30 min</button>
        </div>
      </div>
      <div className="details-section">
        <p className="heading">Sdudy Details</p>
        <div className="study-details">
          <small>Total Study Time :</small>
          <small> m</small>
        </div>
        <div className="break-time">
          <small>Break Time :</small>
          <small>lol m</small>
        </div>
      </div>
      <div className="btn-last">
        <Button className="complete-btn" variant="primary">
          Complete
        </Button>{" "}
      </div>
    </div>
  );
};

export default Sidepart;
