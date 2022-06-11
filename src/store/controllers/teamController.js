import { teamObject, teamObject2 } from "./tetsData";
import * as actions from "../interfaces/teamInterface";

const waiter = async (timout = 1000) => {
  const prom = new Promise((myResolve) => {
    setTimeout(() => myResolve(), timout);
  });
  return prom;
};

export const linkTeam =
  (teamId, errorMessage = null) =>
  async (dispatch, getState) => {
    dispatch({
      type: actions.setFieldState,
      state: "loading",
    });
    await waiter();
    if (errorMessage) {
      dispatch({
        type: actions.setStateError,
        message: errorMessage,
      });

      return;
    }

    let newTeamData =
      getState().team.teamData !== teamObject ? teamObject : teamObject2;
    dispatch({
      type: actions.setTeamData,
      data: newTeamData,
    });
    dispatch({
      type: actions.setHasTeam,
      state: true,
    });
    dispatch({
      type: actions.setFieldState,
      state: "",
    });
  };

export const clearTeamError = () => (dispatch) => {
  dispatch({
    type: actions.setFieldState,
    state: "",
  });
  dispatch({
    type: actions.setErrorMessage,
    message: "",
  });
};
