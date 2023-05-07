import React from 'react'
import './Bmi.css'

function Bmi() {

  
  return (
 <>
<div className="container">
  <div className="form_details">BMI CALCULATOR</div>
  <form id="myForm">
    <div className="h">
      <label htmlFor="height">Height : </label>
      <input placeholder="Enter your Height" type="number" className="form-control" id="height" />
    </div>
    <div className="w">
      <label htmlFor="weight">Weight : </label>
      <input placeholder="Enter your weight" type="number" className="form-control" id="height" />
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
    <p id="output">Result : </p>

      <button type="submit" onclick="calculateBMI()">Calculate</button>

    </form>
</div>

 
 
 </>
  )
}

export default Bmi

function calculateBMI( ) {
  let height = parseFloat(document.getElementById("height"). value);
  let weight = parseFloat(document.getElementById("weight").value);
  let showOutput = document.getElementById('output');
  let bmi = weight/ (height / 100) ** 2 ;
  
  
  showOutput.innerHTML = `Result : ${bmi}`;
  
  
}