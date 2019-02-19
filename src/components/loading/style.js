import styled from "styled-components";
import { ats } from "theme/injectGlobal";

const Style = styled.div`
    width: 100%;
    background: ${ats.gray};
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    text-align: center;
    color: #fff;
    .loader-box {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 250px;
        min-height: 50px;
        .loader-image {
            width: 100%;
            float: left;
            margin-bottom: 20px;
            padding: 0 15px;
            svg {
                width: 100%;
            }
        }

        i {
            padding-left: 10px;
            display: inline-block;
            font-size: 1.2em;
        }
    }
`;

export default Style;
