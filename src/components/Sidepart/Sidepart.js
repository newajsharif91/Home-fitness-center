import React from "react";
import "./Sidepart.css";
import Button from "react-bootstrap/Button";

const Sidepart = () => {
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
          <button>10 min</button>
          <button>20 min</button>
          <button>25 min</button>
          <button>30 min</button>
        </div>
      </div>
      <div className="details-section">
        <p className="heading">Sdudy Details</p>
        <div className="study-details">
          <small>Total Study Time :</small>
          <small></small>
        </div>
        <div className="break-time">
          <small>Break Time</small>
          <small></small>
        </div>
      </div>
      <Button className="Complete-btn" variant="primary">
        Complete
      </Button>{" "}
    </div>
  );
};

export default Sidepart;
