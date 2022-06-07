import React, { useState } from "react";
import { info as infoSVG } from "components/items/SVG";

const Help = ({ infoIcon, text = null }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`help ${open ? "active" : ""}`}>
      <div className="help__text" onClick={() => setOpen(!open)}>
        {infoIcon ? infoSVG : <span className="custIcon custIcon--down"></span>}
        {text ?? "How to get my FPL Id?"}
      </div>
      <ul className="help__content">
        <div className="help__content-item">
          <span className="step">Step 1</span>
          <p>Login to the FPL site.</p>
        </div>
        <div className="help__content-item">
          <span className="step">Step 2</span>
          <p>Click on the “Points” tab.</p>
        </div>
        <div className="help__content-item">
          <span className="step">Step 3</span>
          <p>
            Look at the browser URL, number right after /event is your FPL ID.
          </p>
        </div>
      </ul>
    </div>
  );
};
export default Help;
