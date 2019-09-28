import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Error404 from "./components/Error404";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import Register from "./components/Register";

const app = (
    <I18nextProvider i18n={i18n}>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route component={Error404} />
        </Switch>
    </BrowserRouter>
    </I18nextProvider>);

ReactDOM.render(app, document.getElementById("root"));
