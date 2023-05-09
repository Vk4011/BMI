import React, { useState } from "react";
import "./Bmi.css";

function Bmi() {
  const [Height, setHeight] = useState("");
  const [Weight, setWeight] = useState("");
  const [bmi, setBmi] = useState('');

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };

  const calculateBMI = (e) => {
    setBmi(parseInt(parseFloat(Weight) / (parseFloat(Height) / 100) ** 2));
  };
  return (
    <>
      <div className="container">
        <div className="form_details">BMI CALCULATOR</div>
        <form id="myForm">
          <div className="h">
            <label htmlFor="height">Height : </label>
            <input
              value={Height}
              onChange={handleHeight}
              placeholder="Enter your Height"
              type="number"
              className="form-control"
              id="height"
            />
          </div>
          <div className="w">
            <label htmlFor="weight">Weight : </label>
            <input
              value={Weight}
              onChange={handleWeight}
              placeholder="Enter your weight"
              type="number"
              className="form-control"
              id="height"
            />
          </div>
          <br />
          <div className="radio-container">
            <div className="radio-wrapper">
              <label className="radio-button">
                <input type="radio" name="radio-group" id="option1" />
                <span className="radio-checkmark" />
                <span className="radio-label">Male</span>
              </label>
            </div>
            <div className="radio-wrapper">
              <label className="radio-button">
                <input type="radio" name="radio-group" id="option2" />
                <span className="radio-checkmark" />
                <span className="radio-label">Female</span>
              </label>
            </div>
          </div>
          <p id="output">Result : {bmi}</p>

        </form>
        <button onClick={calculateBMI}>Calculate</button>
      </div>
    </>
  );
}

export default Bmi;
