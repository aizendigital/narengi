import React from "react";
import IntlMessages from "utils/intlMessages";
import { Button, Col, Icon, Row } from "antd";
import { imagePath } from "utils/assetUtils";
import { HomeFooterDownload } from "./style";
import config from "src/config";

const HomeFooterDl = () => {
    return (
        <HomeFooterDownload>
            <div className="container">
                <Row
                    type="flex"
                    justify="start"
                    align="bottom"
                    gutter={{ md: 30, lg: 30 }}
                >
                    <Col xs={24} sm={24} md={8}>
                        <img
                            src={imagePath("iPhone.png")}
                            className="phone"
                            alt=""
                        />
                    </Col>
                    <Col xs={24} sm={24} md={16}>
                        <p className="slogan">
                            <IntlMessages id="home.footerDownload" />
                        </p>
                        <Row
                            type="flex"
                            justify="start"
                            gutter={{ md: 20, lg: 20 }}
                        >
                            <Col span={12}>
                                <Button
                                    className="btn-white-outline"
                                    ghost
                                    block
                                    href={config.AppStore}
                                >
                                    <Icon type="apple" theme="filled" />
                                    <span>
                                        <IntlMessages id="home.footerDownload.AppStore" />
                                    </span>
                                </Button>
                            </Col>
                            <Col span={12}>
                                <Button
                                    className="btn-white-outline"
                                    ghost
                                    block
                                    href={config.googleStore}
                                >
                                    <Icon type="android" theme="filled" />
                                    <span>
                                        <IntlMessages id="home.footerDownload.GooglePlay" />
                                    </span>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </HomeFooterDownload>
    );
};
export default HomeFooterDl;
