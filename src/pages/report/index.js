import React, { PureComponent } from "react";
import DefaultLayout from "layouts/defaultLayout";
import PageSection from "components/pageSection";
import {  Col, Row } from "antd";


class Report extends PureComponent {
    render() {
        return (
            <DefaultLayout inner={false}>
                <PageSection bg="transparent" padding="30" sectionPadding="30">
                    <div className="container">
                        <Row
                            type="flex"
                            justify="space-around"
                            gutter={{ xs: 32, sm: 32, md: 64, lg: 64 }}
                        >
                            <Col
                                xs={23}
                                sm={23}
                                md={23}
                                lg={24}
                                className="about-rows"
                            >
                                <div className="h-border right">
                                    <span className="h2">
                                    </span>
                                    <p>
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
export default Report;
