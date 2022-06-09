import React, { useEffect, useState } from "react";
import { Spinner } from "components/items/Loader";
import Help from "./Help";

const Popup = ({ state, errorMessage, submitFunc }) => {
  const [currentState, setCurrentState] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    setCurrentState(state);
  }, [state]);

  let addClass = " fadeInUp ";
  if (currentState === "loading") addClass += " loading";

  const inputDisabled = currentState === "loading";
  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const onSubmit = () => {
    submitFunc(value);
  };
  const onFocus = () => {
    setCurrentState("");
  };

  return (
    <div className={`popup wow ${addClass}`} data-wow-delay=".2s">
      <div className="popup__image">
        <img
          src={
            global.assetsFolder + "images/illustrations/football-player2.png"
          }
          alt="player"
        />
      </div>
      <div className="popup__content">
        <h5>Link your Team</h5>
        <label htmlFor="teamInput">Enter FPL ID and Import your Team</label>
        <div className="customInput" id="teamInput">
          <input
            type="text"
            placeholder="Enter FPL ID"
            disabled={inputDisabled}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
          />
        </div>
        <button
          onClick={onSubmit}
          disabled={currentState !== ""}
          className="button button--main"
        >
          Submit
        </button>
        {currentState === "loading" && (
          <div className="popup__content-loader">
            <Spinner />
            <strong>Importing your Team</strong>
          </div>
        )}
        {currentState === "error" && (
          <div className="popup__content-error">Error: {errorMessage}</div>
        )}
      </div>
      {currentState !== "loading" && <Help />}
    </div>
  );
};

const PopupSmall = ({ state, errorMessage, onClose }) => {
  const close = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={`popup  popup--small wow ${state}`} data-wow-delay=".2s">
      <button className="popup__close" onClick={close}>
        <span className="custIcon custIcon--cross"></span>
      </button>
      <div className="popup__content">
        {state === "loading" && (
          <>
            <Spinner />
            <strong>Importing your Team</strong>
          </>
        )}
        {state === "error" && (
          <>
            <strong>Oops... Something went wrong</strong>
            <strong>{errorMessage}</strong>
          </>
        )}
      </div>
    </div>
  );
};

export { PopupSmall };
export default Popup;
