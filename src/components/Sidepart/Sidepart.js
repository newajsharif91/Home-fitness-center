import React, { useEffect, useState } from "react";
import "./Sidepart.css";
import Button from "react-bootstrap/Button";
import BreackTimeButton from "../Breat-time/BreackTimeButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidepart = ({ cart }) => {
  let total = 0;
  for (const t of cart) {
    total = total + t.time;
  }

  // Break Time
  const [needTimes, setNeedTimes] = useState([]);
  useEffect(() => {
    fetch("breakTime.JSON")
      .then((response) => response.json())
      .then((data) => setNeedTimes(data));
  }, []);

  // Send it to break time
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("fhakatime");
    setTimes(storedData);
  }, []);

  const handleAddBreak = (needTimespera) => {
    setTimes(needTimespera);
    localStorage.setItem("fhakatime", needTimespera);
    setTimes(setTimes);
  };

  // Toastify
  function notify() {
    toast.dark("Hey 👋, You are completed your daily task.");
  }

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
          {needTimes.map((needTime) => (
            <BreackTimeButton
              key={needTime.id}
              needTime={needTime}
              handleAddBreak={handleAddBreak}
            ></BreackTimeButton>
          ))}
        </div>
      </div>
      <div className="details-section">
        <p className="heading">Sdudy Details</p>
        <div className="study-details">
          <small>Total Study Time :</small>
          <small>{total} m</small>
        </div>
        <div className="break-time">
          <small>Break Time :</small>
          <small>{times}m</small>
        </div>
      </div>
      <div className="btn-last">
        <Button onClick={notify} className="complete-btn" variant="primary">
          Complete
        </Button>{" "}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Sidepart;
