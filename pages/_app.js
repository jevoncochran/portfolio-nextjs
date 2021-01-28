import App from "next/app";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import React from "react";
import store from "../redux/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const appProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    console.log(appProps);

    return { appProps: appProps };
  }

  render() {
    const { Component, appProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...appProps} />
        </PersistGate>
      </Provider>
    );
  }
}

const makeStore = () => store;

export default withRedux(makeStore)(MyApp);
