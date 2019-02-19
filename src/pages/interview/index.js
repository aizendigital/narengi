import React, { PureComponent } from "react";
import DefaultLayout from "layouts/defaultLayout";
import PageSection from "components/pageSection";
import ContactTopCover from "./contactTopCover";
import { Col, Row } from "antd";
import IntlMessages from "utils/intlMessages";


class Interview extends PureComponent {
    render() {
        return (
            <DefaultLayout inner={false}>
                <ContactTopCover />
                <PageSection bg="transparent" padding="30" sectionPadding="30">
                    <div className="container no-padding">
                        <Row
                            type="flex"
                            justify="space-around"
                            gutter={{ xs: 0, sm: 0, md: 0, lg: 64 }}
                        >
                            <Col
                                xs={22}
                                sm={22}
                                md={22}
                                lg={24}
                                className="about-rows"
                            >
                                <div className="h-border right">
                                    <h1>
                                        {" "}
                                        <IntlMessages id="contact.h" />
                                    </h1>
                                    <p>
                                        <IntlMessages id="contact.text" />
                                    </p>
                                </div>
                            </Col>
                            <Col
                                xs={22}
                                sm={22}
                                md={22}
                                lg={12}
                                className="about-rows"
                            >
                                <div className="h-border right">
                                    <p className="bold">
                                        <IntlMessages id="contact.address.1" />
                                        <br />
                                        <br />
                                        <span className="ltr">
                                            {" "}
                                            <IntlMessages id="contact.address.2" />
                                        </span>
                                        <br />
                                        <IntlMessages id="contact.address.3" />
                                    </p>
                                </div>
                            </Col>
                     
                        </Row>
                    </div>
                </PageSection>
            </DefaultLayout>
        );
    }
}
export default Interview;
