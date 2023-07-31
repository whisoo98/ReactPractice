import styled, { css } from "styled-components";

/* Group */
const CircleBox = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 319px;
    left: 825px;
    width: 450px;
    height: 450px;
`;

const OuterCircle = styled.div`
    /* position: absolute; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 274px;
    height: 274px;

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
        width: 450px;
        height: 450px;
    }
`;

const InnerCircle = styled.div`
    /* position: ; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 274px;
    height: 274px;
    /* top: 200px;
    left: 200px; */
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
    background-color: white;
`;

const Button = () => {
    return (
        <CircleBox>
            <OuterCircle>
                <InnerCircle>EXPLORE</InnerCircle>
            </OuterCircle>
        </CircleBox>
    );
};

export default Button;
