import React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import store from "~/store";
import Routes from "./routes";
import History from "./services/history";

import GlobalStyles from "./styles/global";

function App() {
    return (
        <Provider store={store}>
            <Router history={History}>
                <Routes />
                <GlobalStyles />
            </Router>
        </Provider>
    );
}

export default App;
