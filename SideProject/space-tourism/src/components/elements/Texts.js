import styled, { css } from "styled-components";

const NavText = styled.div`
    height: 1.1875rem;

    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.1875rem;
    letter-spacing: 2.7px;

    color: #d0d6f9;
`;

const BodyText = styled.div`
    /* position: absolute; */
    position: relative;
    /* height: 384px; */
    /* width: 100%; */
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    /* font-size: 1.125rem; */
    line-height: 32px;
    color: #d0d6f9;
    padding: 0;
    margin: 0;
    max-width: 444px;
    /* background-color: red; */
`;

export { NavText, BodyText };
