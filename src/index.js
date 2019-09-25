import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Error404 from "./components/Error404";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const app = (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route component={Error404} />
        </Switch>
    </BrowserRouter>);
let locale = document.getElementById("locale").value;
localStorage.setItem("locale", locale === undefined ? "en":locale);
ReactDOM.render(app, document.getElementById("root"));
