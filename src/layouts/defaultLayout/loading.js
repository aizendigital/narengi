import React, { Fragment, PureComponent } from "react";

class Loading extends PureComponent {
    render() {
        const { loading } = this.props;
        console.log(this.props);
        return (
            <Fragment>
                <div style={{ background: "red" }}>loading</div>
            </Fragment>
        );
    }
}
export default Loading;
