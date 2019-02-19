import React, { Component } from "react";
import Style from "./style";
import { Icon } from "antd";
import IntlMessages from "utils/intlMessages";

class Loading extends Component {
    render() {
        const { isLoading, timedOut, pastDelay, error } = this.props;
        const baseLoading = (
            <div>
              
                <Icon type="loading" />
            </div>
        );
        if (isLoading) {
            if (timedOut) {
                return (
                    <Style>
                        <div className="loader-box">
                            {baseLoading}
                            <IntlMessages id="loading.tmieout" />
                        </div>
                    </Style>
                );
            } else if (pastDelay) {
                return (
                    <Style>
                        <div className="loader-box">
                            {baseLoading}
                            <IntlMessages id="loading" />
                        </div>
                    </Style>
                );
            } else {
                return (
                    <Style>
                        <div className="loader-box">
                            {baseLoading}
                            <IntlMessages id="loading" />
                        </div>
                    </Style>
                );
            }
        } else if (error) {
            return (
                <Style>
                    <div className="loader-box">
                        {baseLoading}
                        <IntlMessages id="loading.failed" />
                    </div>
                </Style>
            );
        } else {
            return (
                <Style>
                    <div className="loader-box">
                        {baseLoading}
                        <IntlMessages id="loading" />
                    </div>
                </Style>
            );
        }
    }
}
export default Loading;
