import Img from "components/items/Img";
import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Popup, { PopupSmall } from "./Popup";
import { linkTeam, clearTeamError } from "store/controllers/teamController";

const Field = ({ hasTeam, players, state, errorMessage }) => {
  const [errorShown, setErrorShown] = useState(false); // this is only for test purposes
  const dispatch = useDispatch();

  const onSubmit = (value) => {
    if (!errorShown) {
      // this is only for test purposes
      setErrorShown(true);
      dispatch(linkTeam(null, "Error happend"));
    } else {
      dispatch(linkTeam(null));
    }
  };
  const closePopup = () => {
    dispatch(clearTeamError());
  };

  return (
    <div className="field">
      <div className="field__body">
        <div className="field__body-items">
          <div className="field__body-items-gate top">
            <img
              src={global.assetsFolder + "images/objects/gate.svg"}
              alt="gate"
            />
          </div>
          <div className="field__body-items-circle">
            <img
              src={global.assetsFolder + "images/objects/circle.svg"}
              alt="circle"
            />
          </div>
          <div className="field__body-items-gate bottom">
            <img
              src={global.assetsFolder + "images/objects/gate.svg"}
              alt="gate"
            />
          </div>
        </div>
        {hasTeam && (
          <div className="field__body-team">
            {Object.keys(players).map((key) => {
              if (key.toUpperCase() === "S") return null;
              return (
                <div className="field__body-team-row" key={key}>
                  {players[key].map((player, i) => (
                    <Player player={player} key={i} />
                  ))}
                </div>
              );
            })}
          </div>
        )}
        <div
          className={`field__body-popup ${
            state !== "" || !hasTeam ? "active" : ""
          }`}
          id="field-popup"
        >
          {state !== "" && hasTeam && (
            <PopupSmall
              state={state}
              errorMessage={errorMessage}
              onClose={closePopup}
            />
          )}
          {!hasTeam && (
            <Popup
              submitFunc={onSubmit}
              state={state}
              errorMessage={errorMessage}
            />
          )}
        </div>
      </div>
      <FieldCells hasTeam={hasTeam} data={players ? players["S"] : null} />
    </div>
  );
};
const FieldCells = ({ hasTeam, data }) => {
  return (
    <div className="field__cells">
      <div className="field__cells-row">
        <div className="field__cells-row-cell">
          {hasTeam && <Player player={data[0]} />}
        </div>
        <div className="field__cells-row-cell">
          {hasTeam && <Player player={data[1]} />}
        </div>
      </div>
      <div className="field__cells-row">
        <div className="field__cells-row-cell">
          {hasTeam && <Player player={data[2]} />}
        </div>
        <div className="field__cells-row-cell">
          {hasTeam && <Player player={data[3]} />}
        </div>
      </div>
    </div>
  );
};
const Player = ({ player }) => {
  return (
    <div className="field__player wow fadeInUp">
      <div className="field__player-image">
        <Img src={player.shirtUrl} alt="shirt" />
      </div>
      <strong className="field__player-title">{player.name}</strong>
      <PlayerFdr data={player.fdr} />
    </div>
  );
};
const PlayerFdr = ({ data }) => {
  return (
    <div className="field__player-fdr ">
      {data.map((item, groupIndex) => (
        <div className="field__player-fdr-group" key={groupIndex}>
          {item.map((fdr, fdrIndex) => (
            <div className="field__player-fdr-item" key={fdrIndex}>
              <span>
                {!fdr.displayShortName || fdr.opponentId === 0 ? (
                  <>&nbsp;</>
                ) : (
                  fdr.displayShortName
                )}
              </span>
              <span
                className="color"
                style={{ backgroundColor: `#${fdr.difficultyHexCode}` }}
              ></span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  state: state.team.fieldState,
  errorMessage: state.team.errorMessage,
  hasTeam: state.team.hasTeam,
  players: state.team.teamData?.players,
});

export default connect(mapStateToProps, null)(Field);
