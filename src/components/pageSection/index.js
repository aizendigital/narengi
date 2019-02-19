import React, { PureComponent } from "react";
import Style from "./style";

class PageSection extends PureComponent {
    render() {
        const { bg, padding, sectionPadding, children } = this.props;
        return (
            <Style
                padding={padding}
                background={bg}
                sectionPadding={sectionPadding}
            >
                {children}
            </Style>
        );
    }
}
export default PageSection;
