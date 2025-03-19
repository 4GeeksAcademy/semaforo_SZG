import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("");
  const [additionSwitch, setAdditionSwitch] = useState(0);
  const [addColorBtn, setAddColorBtn] = useState("Add Color");

  console.log(color);
  console.log(additionSwitch);

  let colorAddition = () => {
    if (additionSwitch === 0) {
      setAdditionSwitch(1);
      setAddColorBtn("Remove Color");
    } else {
      setAdditionSwitch(0);
      setAddColorBtn("Add Color");
    }
  };

  let actualColor = () => {
    if (color === "red") {
      setColor("yellow");
    }
    if (color === "yellow") {
      setColor("green");
    }
    if (color === "green") {
      if (additionSwitch === 1) {
        setColor("purple");
      } else {
        setColor("red");
      }
    }
    if (color === "purple" || color === "") {
      setColor("red");
    }
  };
  return (
    <div>
      <div id="trafficTop">
        <div className="container">
          <div className="row tfFrame d-flex flex-column justify-content-center">
            <div className={"red light" + (color === "red" ? " selectedRed" : "")} onClick={() => setColor("red")}>
            </div>
            <div className={"yellow light" + (color === "yellow" ? " selectedYellow" : "")} onClick={() => setColor("yellow")}
            >
            </div>
            <div className={"green light" + (color === "green" ? " selectedGreen" : "")} onClick={() => setColor("green")}
            ></div>
            {additionSwitch === 0 ?
              "" :
              <div className={"purple light" + (color === "purple" ? " selectedPurple" : "")} onClick={() => setColor("purple")}></div>}

          </div>
          <div className="row col-12 d-flex justify-content-center">
            <button className="stateChangeBtn btn btn-primary" onClick={actualColor}>Change State</button>
          </div>
          <div className="row col-12 d-flex justify-content-center">
            <button className="stateChangeBtn btn btn-primary" onClick={colorAddition}>{addColorBtn}</button>
          </div>
        </div>
      </div >
    </div >
  );
};

export default TrafficLight;
