import styled from "styled-components";
import { ats } from "theme/injectGlobal";
import media from "theme/MediaQuery";

export const HeaderWrapper = styled.div`
    -moz-transition: linear 250ms 0s;
    -o-transition: linear 250ms 0s;
    -webkit-transition: linear 250ms;
    -webkit-transition-delay: 0s;
    transition: linear 250ms 0s;
    width: 100%;
    position: fixed;
    z-index: 999;
    height: 80px;
    background: transparent;
    padding: 20px 0;
    color: #fff;
    #headerSearch {
        display: none;
    }

    ${media.desktop`
    padding:12px 1em;
    height: 64px;
`}
    &:hover {
        background: ${ats.gray};
    }
    &.onScroll,
    &.inner {
        background: ${ats.gray};
        ${media.desktop`
         height: auto;
         min-height: 80px;
     `}
        ${media.tablet`
    padding:12px .5em;
    `}
    #headerSearch {
            display: block;
            ${media.desktop`
           margin-top: 1em;
        `}
        }
    }
`;
export const HeaderLogo = styled.div`
    display: block;
    float: left;
    a {
        display: inline-block;
        padding: 5px 0;
        img {
            max-height: 40px;
        }
    }
`;
