import styled from "styled-components";
import { ats } from "theme/injectGlobal";

export const FooterWrapper = styled.div`
    width: 100%;
    min-height: 100px;
    background: ${ats.gray};
    padding: 4rem 1rem 1.5rem 1rem;
    color: #fff;
    text-align: center;
    font-size: 0.9em;
    float: left;
    position: relative;
    .ats-circle {
        display: none;
    }
    .footer-logo-text {
        width: 100%;
        text-align: center;
        font-size: 0.9em;
    }
    .footer-logo {
        display: block;
        width: 100%;
        margin: 1.5rem 0;
        a {
            display: block;
            width: 100%;
            svg {
                width: 100%;
                max-width: 250px;
                fill: #fff;
            }
        }
    }
    .footer-icons {
        display: block;
        width: 100%;
        margin: 1em 0;
        a {
            display: inline-block;
            margin: 0 1.5rem;
            max-width: 36px;
            color: ${ats.lblue};
            i {
                font-size: 2rem;
                svg * {
                    stroke: ${ats.lblue};
                }
            }
        }
    }
    .copyright {
        width: 100%;
        text-align: center;
        margin-top: 2.5rem;
        font-size: 0.85em;
    }
    &.landing {
        @media (min-width: 62em) {
            color: ${ats.gray};
            .footer-menu {
                li {
                    a {
                        color: ${ats.gray};
                        &:hover {
                            color: ${ats.lblue};
                        }
                    }
                }
            }
            .footer-logo {
                a {
                    svg {
                        fill: ${ats.gray};
                    }
                }
            }
            .footer-icons {
                a {
                    color: ${ats.gray};
                    i {
                        font-size: 2rem;
                        svg * {
                            stroke: ${ats.gray};
                        }
                    }
                }
            }
            .ats-circle {
                display: inline-block;
                position: absolute;
                left: 0;
                top: 0;
                border-radius: 0;
                width: 100%;
                height: 100%;
            }
        }
    }
`;
