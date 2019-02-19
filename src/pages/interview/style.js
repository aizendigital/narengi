import styled from "styled-components";
import media from "theme/MediaQuery";

export const Photo_1 = styled.div`
    display: inline-block;
    position: relative;
    .ats-circle {
        position: absolute;
        width: 100%;
        height: 100%;
        right: 20px;
        top: -20px;
        border-radius: 7px;
        z-index: -1;
        ${media.tablet` 
                 width: 300%;
                 right: 50px;
            `}
    }
    img {
        width: 380px;
        border-radius: 7px;
        ${media.tablet` 
                 width: 80%;
         `}
    }
`;
