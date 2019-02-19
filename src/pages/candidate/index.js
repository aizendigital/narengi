import React, { PureComponent } from "react";
import DefaultLayout from "layouts/defaultLayout";
import PageSection from "components/pageSection";
import { Row } from "antd";

class Place extends PureComponent {
    renderFarm = items => {
        return items.map((item, index) => {
            return (
                <div key={index}>
                    <div className="article-image" id={"image_" + index}>
                        
                    </div>
                    <div className="article-text">
                        <p>{item.text}</p>
                    </div>
                </div>
            );
        });
    };
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
                                    gutter={{ xs: 10, sm: 10, md: 20, lg: 20 }}
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

export default Place;
