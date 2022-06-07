import React, { useEffect, useState } from "react";
import Header from "./Header";
import * as SVG from "components/items/SVG";
import Loader from "components/items/Loader";
import { connect, useDispatch } from "react-redux";
import * as appActions from "store/controllers/appController";
import MainIndex from "./MainIndex";
import Message from "components/items/Message";

const Main = ({ dataInitialized }) => {
  const dispatch = useDispatch();

  global.SVG = SVG;

  //init data once it enters to this page
  useEffect(() => {
    dispatch(appActions.fetchAll());
  }, []);
  const error = false;

  return (
    <>
      <Header></Header>
      {error ? (
        <Message text="Error: Be carefull next time!" />
      ) : !dataInitialized ? (
        <Loader />
      ) : (
        <MainIndex />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  dataInitialized: state.app.dataInitialized,
});

export default connect(mapStateToProps, null)(Main);
