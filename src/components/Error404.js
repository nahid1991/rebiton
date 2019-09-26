import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withTranslation, Trans } from "react-i18next";

class Error404 extends Component {
    render() {
        const { t, i18n } = this.props;
        return (
            <div>
                <pre>Error 404.</pre>
                <h1>{t("You must be lost!")}</h1>
                <p>{t("You can go back to homepage ")}<Link to="/">{t("here")}</Link>.</p>
            </div>
        );
    }
}

export default (withTranslation("translations")(Error404));
