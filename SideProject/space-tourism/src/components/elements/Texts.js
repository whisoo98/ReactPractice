import styled, { css } from "styled-components";

const NavText = styled.div`
    height: 19px;

    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;

    color: #d0d6f9;
`;

const BodyText = styled.div`
    /* position: absolute; */
    position: relative;
    /* height: 384px; */
    width: 444px;
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;

    color: #d0d6f9;
`;

export { NavText, BodyText };
