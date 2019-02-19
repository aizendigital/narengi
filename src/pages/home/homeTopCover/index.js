import React, { PureComponent } from "react";
import { Col, Row } from "antd";
import { imagePath } from "utils/assetUtils";
import { HomeCoverText, HomeTopDiv } from "./style";

class HomeTopCover extends PureComponent {
    constructor(props) {
        super(props);
        this.jssearch = React.createRef();
    }
    componentDidMount() {
        window.addEventListener("scroll", this.headerOnScroll);
        window.addEventListener("load", this.headerOnScroll);
    }
    render() {
        const { image, text } = this.props;
        return (
            <HomeTopDiv background={imagePath(image)}>
                <div className="effect" />
                <div className="container no-padding">
                    <Row type="flex" justify="center">
                        <Col
                            xs={{ span: 22, order: 1 }}
                            sm={{ span: 22, order: 1 }}
                            md={{ span: 22, order: 1 }}
                            lg={{ span: 12, order: 2 }}
                        >
                            <HomeCoverText>
                                <span className="h1">{text}</span>
                            </HomeCoverText>
                        </Col>
                    </Row>
                </div>
            </HomeTopDiv>
        );
    }
}

export default HomeTopCover;
