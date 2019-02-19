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
                    <Row
                        gutter={{ xs: 10, sm: 10, md: 40, lg: 60 }}
                        type="flex"
                        justify="space-between"
                    >
                        <Col
                            xs={{ span: 24, order: 2 }}
                            sm={{ span: 24, order: 2 }}
                            md={{ span: 10, order: 1 }}
                            lg={{ span: 8, order: 1 }}
                        >
                    
                            <br />
                
                        </Col>
                   
                    </Row>
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
