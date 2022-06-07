import * as actions from "../interfaces/teamInterface.js";

const initialState = {
  hasTeam: false,
  teamData: null,
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
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
