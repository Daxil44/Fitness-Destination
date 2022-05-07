import { useState } from "react";
import React from "react";
import "./BMICalculator.css";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiValue, setBmiValue] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  //calculation of BMI value
  const heigthInMeters = height / 100;
  const BMI = weight / (heigthInMeters * heigthInMeters);
  const roundedOfBMI = BMI.toFixed(2);

  function displayBMIValue() {
    if (bmiValue) {
      return (
        <div>
          <h1>BMI: {roundedOfBMI}</h1>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  //Popup Bar Calculation
  function suggestWeight() {
    if (roundedOfBMI <= 18) {
      return showWeight(10, 18);
    } else if (roundedOfBMI > 18 && roundedOfBMI <= 25) {
      return showWeight(18, 25);
    } else if (roundedOfBMI > 25 && roundedOfBMI <= 30) {
      return showWeight(25, 30);
    } else if (roundedOfBMI > 30) {
      return showWeight(30, 40);
    }
  }

  //calculate range of BMI
  function showWeight(lowBMI, highBMI) {
    const lowestWeight = lowBMI * (heigthInMeters * heigthInMeters);
    const highestWeight = highBMI * (heigthInMeters * heigthInMeters);
    return (
      <p>
        The suggested weight for your {height} cm height is in the range of{" "}
        <strong>
          {Math.round(lowestWeight)} - {Math.round(highestWeight)} kgs.
        </strong>
      </p>
    );
  }
  

  return (
    <div className="wrapper">
      <p>
        <strong>Units:</strong> Metric
      </p>
      <div>
        <label className="labell">Weight:</label>
        <input className="inputt"
          type="text"
          onChange={(e) => [setWeight(e.target.value), setIsExpanded(false)]}
          placeholder="Kilograms"
          required
        ></input>
      </div>
      <div>
        <label className="labell">Height:</label>
        <input
        className="inputt"
          type="text"
          onChange={(e) => [setHeight(e.target.value), setIsExpanded(false)]}
          placeholder="Centimeters"
          required
        ></input>
      </div>

      <button
      className="buttonn"
        type="submit"
        onClick={() => [setBmiValue(roundedOfBMI), setIsExpanded(true)]}
      >
        Calculate
      </button>

      {/* show the POPUP only if all the value are displayed */}
      {isExpanded && weight !== "" && height !== "" && (
        <div className="popup">
          {displayBMIValue()}
          {suggestWeight()}
          <div
            id={roundedOfBMI <= 18 ? "highlight" : "1"}
            className="weight-boxes"
          >
            <div>&#60; 18 BMI</div>
            <div>Underweight</div>
          </div>
          <div
            id={roundedOfBMI > 18 && roundedOfBMI <= 25 ? "highlight" : "2"}
            className="weight-boxes"
          >
            <div>18 - 25 BMI</div>
            <div>Normal</div>
          </div>
          <div
            id={roundedOfBMI > 25 && roundedOfBMI <= 30 ? "highlight" : "3"}
            className="weight-boxes"
          >
            <div>25 - 30 BMI</div>
            <div>Overweight</div>
          </div>
          <div
            id={roundedOfBMI > 30 ? "highlight" : "4"}
            className="weight-boxes"
          >
            <div>30+ BMI</div>
            <div>Obese</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
