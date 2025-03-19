import React, { useState } from "react";

const TrafficLight = () => {

  //set up my hooks
  const [light, setLight] = useState("");
  const [additionSwitch, setAdditionSwitch] = useState(0);
  const [addLightBtn, setAddLightBtn] = useState("Add Light");
  const [lightColors, setLightColors] = useState(["red", "yellow", "green"]);
  console.log(light);
  console.log(additionSwitch);

  // check if there is an additional color and switch the additional color state
  let lightAddition = () => {
    if (additionSwitch === 0) {
      setAdditionSwitch(1);
      setAddLightBtn("Remove Light");
    } else {
      setAdditionSwitch(0);
      setAddLightBtn("Add Light");
    }
  };

  // check actual color and changes to the next color
  let actualLight = () => {
    if (light === "red") {
      setLight("yellow");
    }
    if (light === "yellow") {
      setLight("green");
    }
    if (light === "green") {
      if (additionSwitch === 1) {
        setLight("purple");
      } else {
        setLight("red");
      }
    }
    if (light === "purple" || light === "") {
      setLight("red");
    }
  };

  // returns the traffic light HTML, lights and buttons
  return (
    <div>
      <div id="trafficTop">
        <div className="container">

          <div className="row tfFrame d-flex flex-column justify-content-center">
            {lightColors.map((color, index) =>
              <div key={index}
                onClick={() => setLight(color)}
                className={color + " light" + (light === color
                  ? " selected" + light
                  : "")}>
              </div>)}

            {additionSwitch === 0 ? "" : <div className={"purple light" + (light === "purple" ? " selectedPurple" : "")} onClick={() => setLight("purple")}></div>}
          </div>

          <div className="row col-12 d-flex justify-content-center">
            <button className="stateChangeBtn btn btn-primary" onClick={actualLight}>Change State</button>
          </div>

          <div className="row col-12 d-flex justify-content-center">
            <button className="stateChangeBtn btn btn-primary" onClick={lightAddition}>{addLightBtn}</button>
          </div>

        </div>
      </div >
    </div >
  );
};

export default TrafficLight;
