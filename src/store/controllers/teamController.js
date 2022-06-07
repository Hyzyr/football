import { teamObject } from "./tetsData";
import * as actions from "../interfaces/teamInterface";

const waiter = async () => {
  const prom = new Promise((myResolve) => {
    setTimeout(() => myResolve(), 1000);
  });
  return prom;
};

export const linkTeam = () => async (dispatch, getState) => {
  await waiter();

  dispatch({
    type: actions.setTeamData,
    data: teamObject,
  });
  dispatch({
    type: actions.setHasTeam,
    state: true,
  });
};
