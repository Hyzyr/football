import { teamObject } from "store/controllers/tetsData.js";
import * as actions from "../interfaces/teamInterface.js";

const initialState = {
  hasTeam: true,
  teamData: teamObject,
  fieldState: "",
  errorMessage: "",
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.setFieldState:
      return {
        ...state,
        fieldState: action.state,
      };
    case actions.setStateError:
      return {
        ...state,
        fieldState: "error",
        errorMessage: action.message,
      };
    case actions.setErrorMessage:
      return {
        ...state,
        errorMessage: action.message,
      };
    case actions.setHasTeam:
      return {
        ...state,
        hasTeam: action.state,
      };
    case actions.setTeamData:
      return {
        ...state,
        teamData: action.data,
      };

    default:
      break;
  }

  return state;
};

export default teamReducer;
