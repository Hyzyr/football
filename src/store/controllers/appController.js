import { setTeamData } from "store/interfaces/teamInterface";
import * as actions from "../interfaces/appInterface";
import {
  fixturesObject,
  topTransfersObject,
  topPlayersObject,
  topTeamsObject,
  topTeamsFormObject,
  topTeamsFdrObject,
  teamObject,
} from "./tetsData";

const waiter = async () => {
  const prom = new Promise((myResolve) => {
    setTimeout(() => myResolve(), 0);
  });
  return prom;
};

export const fetchAll = () => async (dispatch, getState) => {
  await waiter();

  dispatch({
    type: setTeamData,
    data: teamObject,
  });
  dispatch({
    type: actions.setGameweekData,
    data: fixturesObject,
  });
  dispatch({
    type: actions.setTopTransfers,
    data: topTransfersObject,
  });
  dispatch({
    type: actions.setTopPlayers,
    data: topPlayersObject,
  });
  dispatch({
    type: actions.setTopTeams,
    data: topTeamsObject,
  });
  dispatch({
    type: actions.setTopTeamsForm,
    data: topTeamsFormObject,
  });
  dispatch({
    type: actions.setTopTeamsFdr,
    data: topTeamsFdrObject,
  });

  /// after all data fetched set initialized to true
  dispatch({
    type: actions.setDataInitialized,
    state: true,
  });
};
