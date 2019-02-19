import React from "react";
import { Row } from "antd";
import { HomeFooterDownload } from "./style";

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
                </Row>
            </div>
        </HomeFooterDownload>
    );
};
export default HomeFooterDl;
