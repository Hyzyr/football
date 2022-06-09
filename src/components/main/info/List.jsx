import React from "react";
import Img from "components/items/Img";

const List = ({
  title,
  subtitles,
  data,
  type = "amount",
  badgesKey = "form",
}) => {
  return (
    <div className="info__inner-list">
      <div className="info__inner-list-title">{title}</div>
      <div className="info__inner-list-subtitle">
        <span>{subtitles[0]}</span>
        <span>{subtitles[1]}</span>
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
            <div className="info__badges">
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
