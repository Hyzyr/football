import React from "react";

function ManagerList({ title, items }) {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
  ];
  const formatedDate = React.useMemo(() => {
    let date = new Date(parseInt(title));
    if (!date || isNaN(date)) return null;

    return `${weekdays[date.getDay()]}, ${
      month[date.getMonth()]
    } ${date.getDate()}`;
  }, [title]);
  return (
    <ul className="manager__list">
      <div className="manager__list-title">{formatedDate ?? title}</div>
      {items.map((data, index) => (
        <ManagerListItem key={index} data={data} />
      ))}
    </ul>
  );
}

const ManagerListItem = ({ data }) => {
  const addZero = (n) => {
    if (n > 9) return n;
    return `0${n}`;
  };
  const formatedTime = React.useMemo(() => {
    let date = new Date(parseInt(data.dateUtcEpoch));
    if (!date || isNaN(date)) return null;

    return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;
  }, [data]);

  return (
    <div className="manager__list-item ">
      <div className="manager__list-item-ico">
        <img
          src={global.assetsFolder + data.home?.iconUrl}
          alt={data.home?.threeLetterCode}
        />
      </div>
      <span className="hidden">{data.home?.threeLetterCode}</span>

      <div className="manager__list-item-score">
        {data.hasScore
          ? `${data.home?.score}-${data.away?.score}`
          : formatedTime}
      </div>

      <span className="hidden">{data.home?.threeLetterCode}</span>
      <div className="manager__list-item-ico">
        <img
          src={global.assetsFolder + data.away?.iconUrl}
          alt={data.away?.threeLetterCode}
        />
      </div>
    </div>
  );
};
export default ManagerList;
