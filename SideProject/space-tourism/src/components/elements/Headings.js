import styled, { css } from "styled-components";

/* EARTH */
const Heading1 = styled.div`
    /* position: absolute; */
    position: relative;
    height: 172px;

    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 150px;
    line-height: 172px;
    /* identical to box height */

    color: #ffffff;
`;

/* VENUS */
const Heading2 = styled.div`
    height: 115px;

    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 100px;
    line-height: 115px;
    /* identical to box height */

    color: #ffffff;
`;

/* JUPITER & SATURN */
const Heading3 = styled.div`
    height: 64px;

    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 64px;
    text-transform: uppercase;

    color: #ffffff;
`;

/* URANUS, NEPTUNE, & P */
const Heading4 = styled.div`
    height: 37px;

    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    /* identical to box height */
    text-transform: uppercase;

    color: #ffffff;
`;

const Heading5 = styled.div`
    /* SO, YOU WANT TO TRAV */

    /* position: absolute; */
    position: relative;
    height: 34px;

    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    /* identical to box height */
    letter-spacing: 4.725px;

    color: #d0d6f9;
`;

export { Heading1, Heading2, Heading3, Heading4, Heading5 };
