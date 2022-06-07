import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Spinner } from "components/items/Loader";
import { useDispatch } from "react-redux";
import { linkTeam } from "store/controllers/teamController";
import Help from "./Help";

const Popup = () => {
  const [state, setState] = useState("form");
  const [value, setValue] = useState("");
  const [errorShown, setErrorShown] = useState(false);

  const dispatch = useDispatch();

  let addClass = " wow animateUp ";
  if (state === "loading") addClass += " loading";

  const inputDisabled = state === "loading";
  const onChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };
  const onSubmit = () => {
    if (!errorShown) {
      // this is only for test purposes
      setErrorShown(true);
      setState("error");
    } else {
      setState("loading");
      dispatch(linkTeam());
    }
  };
  const onFocus = () => {
    setState("form");
  };

  return (
    <div className={`popup wow ${addClass}`}  data-wow-delay=".2s">
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
          disabled={state !== "form"}
          className="button button--main"
        >
          Submit
        </button>
        {state === "loading" && (
          <div className="popup__content-loader">
            <Spinner />
            <strong>Importing your Team</strong>
          </div>
        )}
        {state === "error" && (
          <div className="popup__content-error">
            Error: somethin went wrong!
          </div>
        )}
      </div>
      {state !== "loading" && <Help />}
    </div>
  );
};


export default Popup;
