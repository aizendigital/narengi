import React, { PureComponent } from "react";
import { Col, Row } from "antd";
import {
    FooterWrapper,
} from "./style.js";
import IntlMessages from "utils/intlMessages";


class Footer extends PureComponent {
    render() {
        const { landing } = this.props;
        return (
            <FooterWrapper className={landing ? "landing" : ""}>
                <div className="ats-circle" />
                <div className="container">
                    <Row gutter={10} type="flex" justify="center">
                        <Col span={24}>
                            <div className="copyright">
                                <IntlMessages id="footer.copyright" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </FooterWrapper>
        );
    }
}
export default Footer;
