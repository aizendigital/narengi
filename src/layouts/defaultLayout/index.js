import React, { PureComponent } from "react";
import Footer from "./footer";
import Header from "./header";

class DefaultLayout extends PureComponent {
    render() {
        const { inner } = this.props;
        return (
            <div id="main">
                <Header inner={inner} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
export default DefaultLayout;
