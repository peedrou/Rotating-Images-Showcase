import React from "react";
import handleRight from "../../functions/handleRight";
import handleLeft from "../../functions/handleLeft";
import { useState } from "react";
import "./main.scss";

function Main() {
  const [showRight, setShowRight] = useState(true);
  const [showLeft, setShowLeft] = useState(true);
  const handleShowRight = () => {
    if (document.querySelector('[data-status="last"]') != null) {
      setShowRight(false);
    } else {
      setShowLeft(true);
    }
  };
  const handleShowLeft = () => {
    if (document.querySelector('[data-status="first"]') != null) {
      setShowLeft(false);
    } else {
      setShowRight(true);
    }
  };

  return (
    <div className="super-div">
      <div className="main-wrapper">
        <div className="cards-wrapper">
          <div
            className="card1"
            data-index="0"
            data-status="previous"
            is-card="yes"
          ></div>
          <div
            className="card2"
            data-index="1"
            data-status="active"
            is-card="yes"
          ></div>
          <div
            className="card3"
            data-index="2"
            data-status="next"
            is-card="yes"
          ></div>
          <div
            className="card4"
            data-index="3"
            data-status="unknown"
            is-card="yes"
          ></div>
          <div
            className="card5"
            data-index="4"
            data-status="unknown"
            is-card="yes"
          ></div>
          <div
            className="card6"
            data-index="5"
            data-status="unknown"
            is-card="yes"
          ></div>
          <div
            className="card7"
            data-index="6"
            data-status="unknown"
            is-card="yes"
          ></div>
          <div
            className="card8"
            data-index="7"
            data-status="unknown"
            is-card="yes"
          ></div>
          <div
            className="card9"
            data-index="8"
            data-status="unknown"
            is-card="yes"
          ></div>
          <div
            className="card10"
            data-index="9"
            data-status="unknown"
            is-card="yes"
          ></div>
        </div>
        <div className="buttons">
          {showLeft ? (
            <h1
              className="left-button"
              onClick={() => {
                handleLeft();
                handleShowLeft();
              }}
            >
              &lt;
            </h1>
          ) : null}
          {showRight ? (
            <h1
              className="right-button"
              onClick={() => {
                handleRight();
                handleShowRight();
              }}
            >
              &gt;
            </h1>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Main;
