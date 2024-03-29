import React from "react";
import ReactDOM from "react-dom";
import Loadable from "react-loadable";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "src/store";
import registerServiceWorker from "./registerServiceWorker";

const AppBundle = (
    <ReduxProvider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ReduxProvider>
);
window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(AppBundle, document.getElementById("root"));
    });
};
registerServiceWorker();
