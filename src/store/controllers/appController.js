import * as actions from "../interfaces/appInterface";
import {
  topTransfersObject,
  topPlayersObject,
  topTeamsObject,
  topTeamsFormObject,
  topTeamsFdrObject,
  fixturesObjectMax,
} from "./tetsData";

const waiter = async () => {
  const prom = new Promise((myResolve) => {
    setTimeout(() => myResolve(), 0);
  });
  return prom;
};

export const fetchAll = () => async (dispatch, getState) => {
  // starts fetching
  dispatch({
    type: actions.setAppState,
    state: "fetching",
  });

  // simulate wait
  await waiter();
  
  // show error for testing
  const userName = getState().app.userName;
  if (userName.startsWith("error:")) {
    dispatch({
      type: actions.setStateError,
      data: userName,
    });
    return;
  }
 
  dispatch({
    type: actions.setGameweekData,
    // data: fixturesObject,
    data: fixturesObjectMax,
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
  dispatch({
    type: actions.setAppState,
    state: "",
  });
};
