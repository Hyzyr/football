import React, { useEffect, useState } from "react";
import CountDown from "components/items/CountDown";
import { connect } from "react-redux";
import Field from "./Field";
import Help from "./Help";
import WOW from "wowjs";

const Manager = ({ hasTeam, meta, gameweek, children }) => {
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <div className="manager fadeInUp ">
        <div className="auto__container">
          <div className="manager__inner">
            <div className="manager__inner-field">
              <ManagerTitle date={gameweek?.deadlineUtcDateEpoch} />
              {hasTeam && <ManagerTeamDetails data={meta} />}

              <div className="manager__inner-field-body">
                <Field />
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
const ManagerTitle = ({ date }) => {
  return (
    <div className="manager__title">
      <h5>Gameweek</h5>
      <h5 className="timer">
        {global.SVG.clock}
        <CountDown date={date} />
      </h5>
    </div>
  );
};
const ManagerTeamDetails = ({ data }) => {
  const [drop, setDrop] = useState(false);

  const toggleDrop = () => {
    setDrop(!drop);
  };
  return (
    <div className="manager__inner-field-details">
      <div className="manager__inner-field-details-header">
        <strong>Your Team</strong>

        <div className={`manager__drop ${drop ? "active" : ""}`}>
          <button
            className={`button ${drop ? "button--main" : "button--outline"}`}
            onClick={toggleDrop}
          >
            Change Team
          </button>
          <div className="manager__drop-box">
            <Help infoIcon text={"How to find my FPL id?"} />
            <div className="customInput">
              <input type="text" placeholder="Enter FPL ID" />
            </div>
            <button className="button button--main">Submit</button>
          </div>
        </div>
      </div>
      <div className="manager__inner-field-details-row">
        <div className="manager__inner-field-details-label">
          <span>Name</span>
          <strong>{data?.name ?? ""}</strong>
        </div>
        <div className="manager__inner-field-details-label">
          <span>Total Budget</span>
          <strong>{`£${data?.budgetTotal}M` ?? ""}</strong>
        </div>
        <div className="manager__inner-field-details-label">
          <span>Money Remaining</span>
          <strong>{`£${data?.budgetRemaining}M` ?? ""}</strong>
        </div>
        <div className="manager__inner-field-details-label">
          <span>Points</span>
          <strong>{data?.pointsTotal ?? ""}</strong>
        </div>
        <div className="manager__inner-field-details-label">
          <span>Points this GW</span>
          <strong>{data?.pointsGameweek ?? ""}</strong>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hasTeam: state.team.hasTeam,
  meta: state.team.teamData?.meta,
  gameweek: state.app.gameweekData?.meta,
});

export { default as ManagerInfo } from "./ManagerInfo";
export default connect(mapStateToProps, null)(Manager);
