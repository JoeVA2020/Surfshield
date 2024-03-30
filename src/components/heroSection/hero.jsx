import React, { useState, useRef } from "react";
import "./hero.css";

function HeroBG() {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
  const popupRef = useRef(null); // Ref for the popup

  const handleClick = () => {
    setShowPopup(true); // Set showPopup state to true when button is clicked
    // Smooth scroll to the section where the popup is located
    popupRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClose = () => {
    setShowPopup(false); // Set showPopup state to false to close the popup
    popupRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="BG">
        <h1>
          SCAN THE <span className="rot">WEBSITES</span> THAT YOU ARE WORRIED
          ABOUT
        </h1>

        <div className="space">
          <div className="SCANCOLO">
            <input type="text" placeholder="Enter or paste link here" />
            <button onClick={handleClick}>SCAN IT</button>
          </div>

          <p>Try our demo to see the magic</p>
        </div>
        {/* start of POPUP */}
        <div className={`popUp ${showPopup ? "show" : ""}`} ref={popupRef}>
          <div className="report">
            <div className="reportHeadBox">
              <h1 className="reportHead">Vulnerability Test report</h1>
            </div>
            {/*scan data */}
            <div className="scanData">
              <div className="blocks">
                <div className="riskRating">
                  <h3>Risk Rating</h3>
                </div>
                <div className="overallRisk">
                  <h3>Overall Risk</h3>
                </div>
              </div>
                <div className="scanInfo">
                <h3>Scan Information</h3>
                </div>
            </div>
          </div>

          <a className="knowMore">Know more</a>
          {/* Link to show detailed report */}
          {/* <button className="closeButton" onClick={handleClose}>
            Close
          </button> */}
          <div class="outer" onClick={handleClose}>
            <div class="inner">
              <label>close</label>
            </div>
          </div>
        </div>
        {/*End of POPUP */}
      </div>
    </>
  );
}
export default HeroBG;
