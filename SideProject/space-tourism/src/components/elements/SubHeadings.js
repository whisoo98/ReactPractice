import styled, { css } from "styled-components";

const SubHeading1 = styled.div`
    ${({ left, right, top }) => {
        css`
            /* 384,400 km */

            position: absolute;
            height: 32px;
            /* left: 0%;
            right: 51.93%;
            top: calc(50% - 32px / 2 + 20px); */
            left: ${left}%;
            right: ${right}%;
            top: ${top}%;

            font-family: "Bellefair";
            font-style: normal;
            font-weight: 400;
            font-size: 28px;
            line-height: 32px;
            /* identical to box height */
            text-transform: uppercase;

            color: #ffffff;
        `;
    }};
`;

const SubHeading2 = styled.div`
    ${({ left, right, top }) => {
        css`
            /* 384,400 km */

            position: absolute;
            height: 17px;
            left: ${left}%;
            right: ${right}%;
            top: ${top}%;

            font-family: "Barlow Condensed";
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            /* identical to box height */
            letter-spacing: 2.3625px;
            text-transform: uppercase;

            color: #ffffff;
        `;
    }};
`;

export { SubHeading1, SubHeading2 };
