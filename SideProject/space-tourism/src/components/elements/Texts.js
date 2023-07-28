import styled, { css } from "styled-components";

const NavText = styled.div`
    ${(left, right, top) => {
        css`
            position: absolute;
            height: 19px;
            left: 0%;
            right: 89.04%;
            top: calc(50% - 19px / 2 + 20px);

            font-family: "Barlow Condensed";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: 2.7px;

            color: #ffffff;
        `;
    }}
`;

const BodyText = styled.div`
    ${(left, right, top) => {
        css`
            position: absolute;
            height: 384px;
            left: ${left}%;
            right: ${right}%;
            top: ${top};

            font-family: "Barlow";
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 32px;

            color: #ffffff;
        `;
    }}
`;

export { NavText, BodyText };
