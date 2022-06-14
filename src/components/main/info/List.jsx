import React, { useEffect, useState } from "react";
import Img from "components/items/Img";
import { useRef } from "react";

const List = ({
  title,
  subtitles,
  data,
  type = "amount",
  badgesKey = "form",
}) => {
  const [badgesStyle, setBadgesStyle] = useState({
    width: "unset",
  });
  const listDom = useRef(null);

  // calc Best Width for badges wrapper
  const calcWidth = () => {
    if (type === "badges" && listDom.current) {
      let width = "auto";

      const badges = listDom.current.querySelectorAll(".info__badges");
      badges.forEach((wrapper) => {
        if (width === "auto" || wrapper.clientWidth > width) {
          width = wrapper.clientWidth;
        }
      });

      return {
        minWidth: width,
      };
    }
  };
  /// recalc width on resize
  useEffect(() => {
    if (type === "badges" && listDom.current)
      new ResizeObserver(() => setBadgesStyle(calcWidth())).observe(
        listDom.current
      );
    // eslint-disable-next-line
  }, []);

  /// calc on start or recalc width on dependecies change
  useEffect(() => {
    setBadgesStyle(calcWidth());

    // eslint-disable-next-line
  }, [type, data, listDom]);

  return (
    <div className="info__inner-list" ref={listDom}>
      <div className="info__inner-list-title">{title}</div>
      <div className="info__inner-list-subtitle">
        <span>{subtitles[0]}</span>
        {type !== "badges" && <span>{subtitles[1]}</span>}
        {type === "badges" && <span style={badgesStyle}>{subtitles[1]}</span>}
      </div>
      {data.map((item, index) => (
        <div className="info__inner-list-item" key={index}>
          <div className="info__team">
            <div className="info__team-ico">
              <Img src={item.teamIconUrl} alt="team-ico" />
            </div>
            <div className="info__inner-list-item-text">
              <span>{item.name}</span>
            </div>
          </div>
          {type === "amount" && (
            <div className="info__inner-list-item-text">
              <span>{item.amount}</span>
            </div>
          )}
          {type === "badges" && (
            <div className="info__badges" style={badgesStyle}>
              {item[badgesKey] &&
                item[badgesKey]?.map((badge, i) => (
                  <span
                    className="badge"
                    style={{
                      background: `#${badge.hexColor}`,
                    }}
                    key={i}
                  >
                    {badge.letter}
                  </span>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default List;
