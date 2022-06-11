import React, { useEffect } from "react";
import Header from "./Header";
import * as SVG from "components/items/SVG";
import Loader from "components/items/Loader";
import { connect, useDispatch } from "react-redux";
import * as appActions from "store/controllers/appController";
import MainIndex from "./MainIndex";
import Message from "components/items/Message";
import WOW from "wowjs";

const Main = ({ appState, errorMessage, dataInitialized }) => {
  const dispatch = useDispatch();
  new WOW.WOW({
    live: false,
  }).init();

  global.SVG = SVG;

  //init data once it enters to this page
  useEffect(() => {
    dispatch(appActions.fetchAll());

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header></Header>
      {appState === "error" ? (
        <Message text={errorMessage ?? "Error: unknown error"} />
      ) : !dataInitialized || appState === "fetching" ? (
        <Loader />
      ) : (
        <MainIndex />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  appState: state.app.appState,
  errorMessage: state.app.errorMessage,
  dataInitialized: state.app.dataInitialized,
});

export default connect(mapStateToProps, null)(Main);
