import React, { Component } from "react";
import Style from "./style";
import { Icon } from "antd";
import IntlMessages from "utils/intlMessages";

class Loading extends Component {
    render() {
        const { isLoading } = this.props;
        const baseLoading = (
            <div>
                <Icon type="loading" />
            </div>
        );
        if (isLoading) {
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
