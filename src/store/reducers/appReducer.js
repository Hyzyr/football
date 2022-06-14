import * as actions from "../interfaces/appInterface";

const initialState = {
  appState: "",
  errorMessage: "",
  userLogged: false,
  userName: "",
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
    case actions.setAppState:
      return {
        ...state,
        appState: action.state,
      };
    case actions.setStateError:
      return {
        ...state,
        appState: "error",
        errorMessage: action.data,
      };
    case actions.setErrorMessage:
      return {
        ...state,
        errorMessage: action.data,
      };
    case actions.setUserLogged:
      return {
        ...state,
        userLogged: action.state,
        userName: action.user ?? "",
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
