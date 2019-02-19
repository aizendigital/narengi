import { createGlobalStyle } from "styled-components";
import media from "theme/MediaQuery";

export const ats = {
    gray: "#3c404b",
    lblue: "#2cc3f0",
    ggreen: "#8de7c1",
    gblue: "#44caf2",
    grayTitle: "#7d7d7d",
    green: "#45d799",
    cardRadis: "5px",
    red: "#e77b63",
};
const GlobalStyle = createGlobalStyle`
    
    #main-content{
        float: left;
        width: 100%;
        background: #ffc;
    }
    .ltr{
        direction: ltr;
        text-align: left;
    }
    .center{
      text-align: center;
    }
    .left{
        float: left;
    }
    .right{
        float: right;
    }
    body {
      overflow-x: hidden;
      direction: rtl;
      font-size: 1em;
      line-height: 1.6;
    }
    h1,h2,h3,h4,h5{
      color: ${ats.grayTitle};
    }
    h1{
      ${media.tablet`
        font-size: 1.25rem;
      `}
    }
  
    .blue{
      color: ${ats.lblue} !important;
    }
    .gray{
      color: ${ats.gray} !important;
    }
    .red{
      color: ${ats.red} !important;
    }

    img{
      max-width: 100%;
    }
    ul , li {
      padding: 0;
      list-style: none;
    }
    .container {
        width: 100%;
        max-width: 992px;
        margin:0 auto;
        position: relative;
        padding: 0 1rem;     
    }
    .no-padding{
      padding: 0 !important;
    }
    .padder{
      padding: 0 1em !important; 
      position: relative;
      ${media.tablet`
        h1{
          padding: 0 0 1em 45px ;
        } 
      `} 
    }

     .pstatic{
     position: static !important;
     }
    #root{
      width: 100%;
      float: left;
      overflow: hidden;
    }
    #main{
      width: 100%;
      float: left;
    }
    .landing-main{
        background-color: ${ats.gray};
        min-height: 100vh;
    }
    #main-inner{
      width: 100%;
      float: left;
      padding-top: 80px;
      min-height: 700px;
      ${media.desktop`
         padding-top: 130px;
     `}
    }
`;
export default GlobalStyle;
