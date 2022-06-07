import * as actions from "../interfaces/appInterface";

const initialState = {
  userLogged: false,
  dataInitialized: false,
  gameweekData: {},
  topTransfers: {},
  topPlayers: {},
  topTeams: {},
  topTeamsForm: {},
  topTeamsFdr: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.setUserLogged:
      return {
        ...state,
        userLogged: action.state,
      };
    case actions.setDataInitialized:
      return {
        ...state,
        dataInitialized: action.state,
      };

    case actions.setGameweekData:
      return {
        ...state,
        gameweekData: action.data,
      };
    case actions.setTopTransfers:
      return {
        ...state,
        topTransfers: action.data,
      };
    case actions.setTopPlayers:
      return {
        ...state,
        topPlayers: action.data,
      };
    case actions.setTopTeams:
      return {
        ...state,
        topTeams: action.data,
      };
    case actions.setTopTeamsForm:
      return {
        ...state,
        topTeamsForm: action.data,
      };
    case actions.setTopTeamsFdr:
      return {
        ...state,
        topTeamsFdr: action.data,
      };

    default:
      break;
  }

  return state;
};

export default appReducer;
