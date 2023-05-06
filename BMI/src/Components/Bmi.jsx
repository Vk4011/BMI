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
    <br />
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
      <button>Calculate</button>
    </form>
</div>

 
 
 </>
  )
}

export default Bmi