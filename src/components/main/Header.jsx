import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLogged } from "store/interfaces/appInterface";

const Header = () => {
  const [drop, setDrop] = useState(false);
  const [menu, setMenu] = useState(false);
  const [sticky, setSticky] = useState(false);
  const dropButton = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch({
      type: setUserLogged,
      state: false,
    });
    navigate("/login");
  };

  const burgerClick = () => {
    if (!menu) setDrop(false);

    setMenu(!menu);
  };
  const dropClick = () => {
    if (!drop) setMenu(false);
    setDrop(!drop);
  };

  const navClick = () => {
    setMenu(false);
    setDrop(false);
  };

  const closeDrop = useCallback((e) => {
    if (e.srcElement !== dropButton.current) setDrop(false);
  }, []);

  const makeSticky = useCallback(() => {
    let sticky = window.screen.height;
    if (window.pageYOffset > sticky || window.pageYOffset > 500) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }, []);

  useEffect(() => {
    if (drop) window.addEventListener("click", closeDrop);
    else {
      window.removeEventListener("click", closeDrop);
    }
  }, [drop, closeDrop]);

  useEffect(() => {
    window.addEventListener("scroll", makeSticky);

    return () => window.removeEventListener("scroll", makeSticky);
  }, [makeSticky]);

  return (
    <>
      <header className={`header ${sticky ? "sticky" : "fadeInDown"}`}>
        <div className="auto__container">
          <div className="header__inner">
            <div className="header__inner-logo">
              <button
                className={`burger ${menu ? "active" : ""}`}
                onClick={burgerClick}
              >
                <span></span>
              </button>
              <div className="header__inner-logo-img">
                <img
                  src={global.assetsFolder + "images/logo.png"}
                  alt="FantasyCuppy"
                />
              </div>
            </div>
            <div className={`header__inner-nav ${menu ? "active" : ""}`}>
              <a
                className="header__inner-nav-link"
                onClick={navClick}
                href="#overview"
              >
                Overview
              </a>
              <a
                className="header__inner-nav-link"
                onClick={navClick}
                href="#stats"
              >
                Stats
              </a>
              <a
                className="header__inner-nav-link"
                onClick={navClick}
                href="#form"
              >
                Transfers
              </a>
              <a
                className="header__inner-nav-link"
                onClick={navClick}
                href="#fdr"
              >
                FDR
              </a>
            </div>
            <div className="header__inner-user">
              <div className="header__inner-user-avatar">
                <span className="letter">R</span>
              </div>
              <div className="header__inner-user-title">Ronnie Abs</div>
              <div className="header__inner-user-drop">
                <button
                  ref={dropButton}
                  onClick={dropClick}
                  className={`header__inner-user-drop-button ${
                    drop ? "active" : ""
                  }`}
                >
                  <span className="custIcon custIcon--bottom"></span>
                </button>
                <div
                  className={`header__inner-user-drop-box ${
                    drop ? "active" : ""
                  }`}
                >
                  <button onClick={logout}>{global.SVG.out} Logout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="headerSpace"></div>
    </>
  );
};

export default Header;
