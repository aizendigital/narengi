import React, { Component, Fragment } from "react";
import { IntlProvider } from "react-intl";
import AppLocale from "languageProvider";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import RouterComponent from "src/router";
import config from "src/config";
import GlobalStyle from "theme/injectGlobal";

class App extends Component {
    render() {
        const currentAppLocale = AppLocale[config.language];
        return (
            <Fragment>
                <GlobalStyle />
                <IntlProvider
                    locale={config.language}
                    messages={currentAppLocale.messages}
                >
                    <RouterComponent />
                </IntlProvider>
            </Fragment>
        );
    }
}
export default withRouter(
    connect(
        null,
        null
    )(App)
);
