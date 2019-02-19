import React, { PureComponent } from "react";
import { HeaderWrapper } from "./style";
import { Col, Row } from "antd";
import PropTypes from "prop-types";

const MenuItems = [
    {
        url: "/job",
        text: "topmenu.h1",
        
    },
    {
        url: "/candidate",
        text: "topmenu.h2",
        
    },
    {
        url: "/report",
        text: "topmenu.h3",
    },
    {
        url: "/interview",
        text: "topmenu.h4",
    },
    {
        url: "/setting",
        text: "topmenu.h5",
    },
];
class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.jsheader = React.createRef();
    }
    componentDidMount() {
        window.addEventListener("scroll", this.headerOnScroll);
        window.addEventListener("load", this.headerOnScroll);
    }
    headerOnScroll = () => {
        const distanceY =
                window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 20,
            headerEl = this.jsheader.current;
        if (distanceY > shrinkOn) {
            headerEl.classList.add("onScroll");
        } else {
            headerEl.classList.remove("onScroll");
        }
    };
    render() {
        const { inner } = this.props;
        return (
            <HeaderWrapper ref={this.jsheader} className={inner ? "inner" : ""}>
                <div className="container pstatic">
                    <Row
                        gutter={{ xs: 0, sm: 0, md: 10, lg: 10 }}
                        type="flex"
                        justify="space-between"
                    >
                        <Col
                            xs={{ span: 1, order: 1 }}
                            sm={{ span: 1, order: 1 }}
                            md={{ span: 1, order: 1 }}
                            lg={{ span: 10, order: 1 }}
                            className={"pstatic"}
                        >
                            <div items={MenuItems} />
                        </Col>
                    </Row>
                </div>
            </HeaderWrapper>
        );
    }
}
Header.contextTypes = {
    intl: PropTypes.object.isRequired,
};
export default Header;
