import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ManagerList from "./ManagerList";

const ManagerInfo = ({ title, fixtures }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (fixtures.fixtures) {
      const gorupedData = {};

      fixtures.fixtures.forEach((item) => {
        if (!gorupedData[item.dateUtcEpoch])
          gorupedData[item.dateUtcEpoch] = [];

        gorupedData[item.dateUtcEpoch].push(item);
      });
      setData(gorupedData);
    }
  }, [fixtures]);
  
  const generateTitle = (date) => {
    return date;
  };
  return (
    <div className="manager__inner-group">
      <div className="manager__title wow animateUp" data-wow-delay={"0s"}>
        <h5>{title}</h5>
      </div>
      <div className="manager__inner-row">
        {Object.keys(data).map((key, index) => (
          <div
            className="manager__inner-column first wow animateUp"
            data-wow-delay={`.${index * 2}s`}
            key={key}
          >
            <ManagerList title={generateTitle(key)} items={data[key]} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  fixtures: state.app.gameweekData,
});

export default connect(mapStateToProps)(ManagerInfo);
