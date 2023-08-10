import styled, { css } from "styled-components";

/* Group */
const CircleBox = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    /* top: 343px; */
    top: 55%;
    left: 69.514%;
    transition: outline 0.2s linear;
    outline: 0px solid rgba(255, 255, 255, 0.1);
    aspect-ratio: 1 / 1;
    width: 15.625%;

    /* height: 50%; */
    color: #0b0d17;
    background-color: #ffffff;
    padding: 0;
    margin: 0;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
        color: #0b0d17;
        outline-width: 88px;
    }
`;

const OuterCircle = styled.div`
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    width: 50%;

    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    /* identical to box height */
    letter-spacing: 2px;

    margin: 0;
    padding: 0;
    border-radius: 50%;
    color: #0b0d17;
    background-color: rgba(255, 255, 255, 0.1);
    &:hover {
        width: 100%;
        cursor: pointer;
    }
`;

const InnerCircle = styled.div`
    /* position: ; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* aspect-ratio: 1 / 1;
    width: 100%; */
    /* top: 200px;
    left: 200px; */
    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    /* identical to box height */
    letter-spacing: 2px;

    /* margin: 0;
    padding: 0;
    border-radius: 50%;
    color: #0b0d17;
    background-color: white; */
    /* &:hover {
        width: 50%;
        cursor: pointer;
    } */
`;

const Button = () => {
    return (
        <CircleBox>
            {/* <OuterCircle> */}
            <InnerCircle>EXPLORE</InnerCircle>
            {/* </OuterCircle> */}
        </CircleBox>
    );
};

export default Button;
