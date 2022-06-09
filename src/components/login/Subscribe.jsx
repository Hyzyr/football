import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLogged } from "store/interfaces/appInterface";

const Subscribe = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const inputChange = (e) => {
    setValue(e.target.value);
  };
  const subscribeButton = () => {
    dispatch({
      type: setUserLogged,
      state: true,
      user: value,
    });
    navigate("/");
  };

  return (
    <>
      <div className="subscribe">
        <div className="auto__container">
          <div className="subscribe__inner">
            <div className="subscribe__inner-title  wow  fadeIn">
              <h2>Subscribe</h2>
              <h2>for launching updates</h2>
            </div>
            <div className="subscribe__inner-form  wow  fadeInUp">
              <div className="subscribeInput">
                <input
                  type="text"
                  value={value}
                  placeholder="Email address"
                  onChange={inputChange}
                />
                <button onClick={subscribeButton} disabled={value === ""}>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="auto__container">
          <div className="banner__inner">
            <img
              src={global.assetsFolder + "images/illustrations/people.png"}
              alt="banner"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
