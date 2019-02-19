import styled from "styled-components";
import { ats } from "theme/injectGlobal";
import media from "theme/MediaQuery";

export const HomeFooterDownload = styled.div`
    width: 100%;
    float: left;
    height: 480px;
    padding: 120px 0;
    margin-top: 250px;
    background-image: linear-gradient(
        260deg,
        ${ats.ggreen},
        ${ats.gblue}
    );
    color: #fff;
    ${media.tablet`
        display: none;
   `}
    .phone {
        margin-top: -300px;
    }

    .ant-btn {
        padding: 0 1.5em;
        border-radius: 7px;
        height: 70px;
        border-width: 2px;
        margin-bottom: 2em;
        i {
            font-size: 2em;
            height: 70px;
            line-height: 70px;
            padding-left: 0.25em;
        }
        span {
            height: 70px;
            line-height: 70px;
            display: inline-block;
            font-weight: 500;
            font-size: 1.5rem;
        }
    }
`;
