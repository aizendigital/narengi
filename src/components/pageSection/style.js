import styled from "styled-components";
import media from "theme/MediaQuery";

const Style = styled.div`
    width: 100%;
    float: left;
    background: ${({ background }) => background};
    padding: ${({ padding }) => padding}px 0;
    .section-box {
        padding: ${({ sectionPadding }) => sectionPadding}px 0;
        ${media.tablet`
                padding:${({ sectionPadding }) => sectionPadding / 2}px 0;
       `}
    }
`;

export default Style;
