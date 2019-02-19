import React, { PureComponent } from "react";
import DefaultLayout from "layouts/defaultLayout";
import PageSection from "components/pageSection";
import { Row } from "antd";


class Interview extends PureComponent {
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
                        </Row>
                    </div>
                </PageSection>
            </DefaultLayout>
        );
    }
}
export default Interview;
