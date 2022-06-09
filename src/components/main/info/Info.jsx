import React from "react";
import Slider from "react-slick";

const Info = ({
  anchor,
  title,
  shortName,
  moreButtonFunc,
  children,
  showButton = true,
}) => {
  return (
    <>
      <div className="anchor" id={anchor}></div>
      <div className="info">
        <div className="auto__container">
          <div className="info__inner">
            <div className="info__inner-title">
              <h3>{title}</h3>
              {showButton && (
                <button onClick={moreButtonFunc}>
                  See all&nbsp;{shortName && <span>{shortName}</span>}
                  {global.SVG.arrowRight}
                </button>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export const Row = ({ title = null, cols, children }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: cols,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: cols === 3 ? 2.2 : 2,
          slidesToScroll: 1,
          //   infinite: true,
          //   dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.1,
        },
      },
    ],
  };

  return (
    <>
      {title && <div className="info__inner-sliderTitle">{title}</div>}
      <div className="info__inner-slider">
        <Slider {...settings}>{children}</Slider>
      </div>
    </>
  );
};

export default Info;
