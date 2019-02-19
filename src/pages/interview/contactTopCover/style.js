import styled from "styled-components";

export const Cover = styled.div`
    background: url(${({ background }) => background});
    background-size: cover;
`;
