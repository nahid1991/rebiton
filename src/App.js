import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import './styles/App.css';
import { withTranslation, Trans } from "react-i18next";


class App extends Component {
  render() {
      const { t, i18n } = this.props;
      return (
          <div className='App'>
              <h1><Trans>{t("Hi")}</Trans></h1>
              <p><Trans>{t("This is rebiton")}</Trans></p>
          </div>
      );
  }
}

export default hot(module)(withTranslation("translations")(App));
