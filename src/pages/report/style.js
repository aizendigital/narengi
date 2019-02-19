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
export const Photo_2 = styled.div`
    margin: 50px 0 0 0;
    display: inline-block;
    ${media.tablet`
            margin: 30px 0 0 0;
           width: 40%;
   `}
    img {
        border-radius: 50%;
        width: 285px;
        ${media.desktop` 
         width: 100%;
     `}
    }
`;
export const Photo_3 = styled.div`
    margin: 210px 0 0 0;
    display: inline-block;
    position: relative;
    ${media.tablet`
          margin: 40px 0 0 0;
           width: 40%;
   `}
    .ats-circle {
        position: absolute;
        width: 170%;
        height: 170%;
        right: 50px;
        bottom: 50px;
        z-index: -1;
        ${media.tablet` 
                width: 90%;
                height: 90%;
                right: 110px;
                bottom: 100px;
            `}
    }

    img {
        width: 180px;
        border-radius: 50%;
        ${media.desktop`
                  width: 100%;
         `}
    }
`;
export const Photo_4 = styled.div`
    display: inline-block;
    position: relative;
    ${media.tablet`
           width: 40%;
   `}
    .ats-circle {
        position: absolute;
        width: 180%;
        height: 180%;
        left: 100%;
        top: 100px;
        z-index: -1;
        ${media.tablet` 
                width: 150%;
                height: 150%;
                left: 110%;
                top: auto;
                bottom: 25px
            `}
    }

    img {
        width: 180px;
        border-radius: 50%;
        ${media.desktop`
                  width: 100%;
        `}
    }
`;
export const Photo_5 = styled.div`
    margin: 40px 0 0 0;
    display: inline-block;
    position: relative;
    ${media.tablet`
          margin: 0 0 0 0;
          width: 40%;
   `}
    .ats-circle {
        position: absolute;
        width: 50%;
        height: 50%;
        left: -50px;
        top: -10px;
        ${media.tablet` 
                right: 120%:
                left: auto;
                top: -10px;
            `}
    }

    img {
        width: 260px;
        border-radius: 50%;
        ${media.desktop`
                  width: 100%;
         `}
    }
`;
