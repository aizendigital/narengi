import styled from "styled-components";
import { ats } from "theme/injectGlobal";
import media from "theme/MediaQuery";

export const HomeTopDiv = styled.div`
  width: 100%;
  float: left;
  height: 480px;
  padding-top: 200px;  
  background: url(${({ background }) => background});
  background-size: cover;
  color: #fff;
  text-align: center;
  position: relative;
  ${media.desktop`
      height: auto;
      min-height: 100px;
      padding-top: 40px;  
   `}
  
  .effect{
    content: ' ';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    //background-image: linear-gradient(260deg, ${ats.ggreen}, ${
    ats.gblue
});
    background-image: linear-gradient(180deg,rgba(0,0,0,.85) 0% , rgba(0,0,0,.3) 50%, rgba(0,0,0,.85) 100%);
    //opacity: .85;
    ${media.desktop`
    `}
  }
`;

export const atssearch = {
    size: "60px",
};
export const HomeCoverText = styled.div`
    width: 100%;
    float: left;
    ${media.desktop`
      height: 200px;
   `}
    h1,h2,.h1,.h2 {
        display: block;
        color: #fff;
        margin: 48px 0;
        font-size: 1.85em;
        ${media.tablet`
          font-size: 1.35em;
       `}
        ${media.phone`
          font-size: 1.35em;
       `}
    }
`;

export const HomeSearchBox = styled.div`
    width: 100%;
    float: left;
    min-height: ${atssearch.size};
    ${media.desktop`
        padding : 20px 10px;
        height:78px ;
        background-color: ${ats.gray};
   `}
    &.onScroll {
        ${media.desktop`
           display: none;
        `}
    }
    .ant-select-selection__placeholder,
    .ant-select-search__field__placeholder {
        @media (min-width: 62em) {
            height: ${atssearch.size};
            line-height: ${atssearch.size};
            color: #d8d8d8;
        }
    }
    .ant-input {
        @media (min-width: 62em) {
            border-color: #7d7d7d;
            color: #999;
            height: ${atssearch.size} !important;
            line-height: ${atssearch.size} !important;
            font-size: 1.25rem;
        }
    }
    .ant-select-auto-complete.ant-select .ant-select-selection__rendered {
        @media (min-width: 62em) {
            line-height: ${atssearch.size};
            background: #fff;
        }
    }
    .ant-btn-primary {
        @media (min-width: 62em) {
            height: ${atssearch.size};
            width: ${atssearch.size};
            background-color: ${ats.gray};
        }
    }
`;
