import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./config/ReactotronConfig";

import { store, presistor } from "~/store";
import Routes from "./routes";
import History from "./services/history";

import GlobalStyles from "./styles/global";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={presistor}>
                <Router history={History}>
                    <Routes />
                    <GlobalStyles />
                    <ToastContainer autoClose={3000} />
                </Router>
            </PersistGate>
        </Provider>
    );
}

export default App;
