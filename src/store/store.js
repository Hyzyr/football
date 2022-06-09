import thunk from "redux-thunk";
import appReducer from "./reducers/appReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import teamReducer from "./reducers/teamReducer";

const rootReducer = combineReducers({
  app: appReducer,
  team: teamReducer,
});

// eslint-disable-next-line
export const store = createStore(rootReducer, applyMiddleware(thunk));
