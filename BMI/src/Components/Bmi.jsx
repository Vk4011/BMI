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
  let height = parseFloat(document.getElementById( 'height' ). value);
  let weight = parseFloat(document.getElementById( 'weight' ).value);
  let showOutput = document.getElementById( 'output');
  let classification;
  let bmiRange = weight/ (height / 100) ** 2 ;
  bmiRange= bmiRange.toFixed(2);
  
  if(bmiRange < 16){
    classification = 'Severe Thinness';
  }else if(bmiRange > 16 && bmiRange < 17){
    classification = 'Moderate Thinness';
  }else if(bmiRange > 17 && bmiRange < 18.5){
    classification = 'Mild Thinness';
  }else if(bmiRange > 18.5 && bmiRange < 25){
    classification = 'Normal';
  }else if(bmiRange > 25 && bmiRange < 30){
    classification = 'Over Weight';
  }else if(bmiRange > 30 && bmiRange < 34){
    classification = 'Obese class I';
  }else if(bmiRange > 35 && bmiRange < 40){
    classification = 'Obese class II';
  }else if (bmiRange > 40){
    classification = 'Obese class III';
  }
  showOutput.innerHTML = `BMI Range: ${bmiRange} | ${classification}`;
  
  
}