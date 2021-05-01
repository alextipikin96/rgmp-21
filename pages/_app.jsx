import React from "react";
import { Provider } from "react-redux";
import App from "../src/components/App";
import { useStore } from "../src/redux/makeState";
import "../public/scss/globalStyles.scss";

export default function AppNext({ Component, pageProps }) {
  const store = useStore();

  return (
    <Provider store={store}>
      <App>
        <Component {...pageProps} />
      </App>
    </Provider>
  );
}
