import styled, { css } from "styled-components";

/* EARTH */
const Heading1 = styled.div`
    /* position: absolute; */
    position: relative;
    height: 10.75rem;

    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 9.375rem;
    line-height: 10.75rem;
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
    height: 4rem;

    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 4rem;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    color: #ffffff;
    padding-bottom: 6.65%;
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
    padding: 0;
    margin: 0;
    color: #ffffff;
    opacity: 0.5042;
    padding-bottom: 3.695%;
`;

const Heading5 = styled.div`
    /* SO, YOU WANT TO TRAV */

    /* position: absolute; */
    position: relative;
    height: 2rem;

    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2rem;
    /* identical to box height */
    letter-spacing: 4.725px;

    color: #d0d6f9;
`;

export { Heading1, Heading2, Heading3, Heading4, Heading5 };
