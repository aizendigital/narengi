import React, { PureComponent } from "react";
import DefaultLayout from "layouts/defaultLayout";
import PageSection from "components/pageSection";
import {Row } from "antd";

class Job extends PureComponent {

    render() {
        return (
            <DefaultLayout inner={true} noStickyDownload>
                <div id="main-inner">
                    <PageSection bg="#fff" padding="10" sectionPadding="20">
                        <div className="section-box">
                            <div className="container no-padding">
                                <Row
                                    type="flex"
                                    justify="start"
                                    gutter={{ xs: 0, sm: 0, md: 20, lg: 20 }}
                                >
                                
                              
                               
                                </Row>
                          
                            </div>
                        </div>
                    </PageSection>
                </div>
            </DefaultLayout>
        );
    }
}

export default Job;
