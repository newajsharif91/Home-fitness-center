import React, { useEffect, useState } from "react";
import "./BreakTimeButton.css";

const BreackTimeButton = ({ handleAddBreak, needTime }) => {
  return (
    <div className="">
      <button onClick={() => handleAddBreak(needTime.time)} className="raise">
        {needTime.time}m
      </button>
    </div>
  );
};

export default BreackTimeButton;
