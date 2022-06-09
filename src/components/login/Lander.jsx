import React, { useEffect } from "react";
import WOW from "wowjs";

const Lander = () => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <div className="lander animate ">
        <div className="auto__container">
          <div className="lander__logo  wow  fadeIn ">
            <div className="logo">
              <img
                src={global.assetsFolder + "images/logo-main.png"}
                alt="FantasyCuppy"
              />
            </div>
          </div>
          <div className="lander__inner wow fadeInUp" data-wow-delay=".22s">
            <div className="lander__inner-body">
              <div className="lander__inner-body-content">
                <h3>FantasyCuppy</h3>
                <h1>
                  The best place for <span className="nobr">FPL Managers</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Penatibus fermentum, sit hac lorem at phasellus venenatis
                  pellentesque. Egestas eu non duis pellentesque
                </p>
              </div>
              <div className="lander__inner-body-img">
                <img
                  src={
                    global.assetsFolder +
                    "images/illustrations/football-player.png"
                  }
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="points">
        <div className="auto__container">
          <div className="points__row">
            <div className="points__column  wow fadeInUp" data-wow-delay=".2s">
              <div className="points__column-image">
                <img
                  src={global.assetsFolder + "images/graphics/growth.png"}
                  alt="graphic"
                />
              </div>
              <h4>
                Enhanced <br className="break" /> Stats
              </h4>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Penatibus fermentum, sit hac lorem at phasellus venenatis
                pellentesque. Egestas eu non duis pellentesque{" "}
              </p>
            </div>
            <div className="points__column  wow fadeInUp" data-wow-delay=".3s">
              <div className="points__column-image">
                <img
                  src={global.assetsFolder + "images/graphics/balance.png"}
                  alt="graphic"
                />
              </div>
              <h4>
                FPL Teams <br className="break" />
                Comparison
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Penatibus fermentum, sit hac lorem at phasellus venenatis
                pellentesque. Egestas eu non duis pellentesque{" "}
              </p>
            </div>
            <div className="points__column  wow fadeInUp" data-wow-delay=".4s">
              <div className="points__column-image">
                <img
                  src={global.assetsFolder + "images/graphics/growth2.png"}
                  alt="graphic"
                />
              </div>
              <h4>
                Projected <br className="break" /> Points & Pricing
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Penatibus fermentum, sit hac lorem at phasellus venenatis
                pellentesque. Egestas eu non duis pellentesque{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lander;
