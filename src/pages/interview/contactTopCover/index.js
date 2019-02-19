import React, { PureComponent } from "react";
import { Col, Row } from "antd";
import { imagePath } from "utils/assetUtils";
import { Cover } from "./style";
import IntlMessages from "utils/intlMessages";

class ContactTopCover extends PureComponent {
    render() {
        return (
            <Cover
                background={imagePath("cover-placeholder.jpg")}
                className="cover-image"
            >
                <div className="effect" />
                <div className="container no-padding">
                    <Row type="flex" justify="center" align="middle">
                        <Col
                            xs={{ span: 22 }}
                            sm={{ span: 20 }}
                            md={{ span: 18 }}
                            lg={{ span: 16 }}
                        >
                            <span className="h1">
                                <IntlMessages id="contact.h.cover" />
                            </span>
                            <span className="h4">
                                <IntlMessages id="contact.cover.text" />
                            </span>
                        </Col>
                    </Row>
                </div>
            </Cover>
        );
    }
}
export default ContactTopCover;
