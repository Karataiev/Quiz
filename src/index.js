import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./containers/App/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);
