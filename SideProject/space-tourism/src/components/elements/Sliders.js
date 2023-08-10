import styled, { css } from "styled-components";

const SliderHorizontalBox = styled.div`
    padding: 0;
    margin: 0;
    /* width: 132px; */
    width: 20.952%;
    display: flex;
    justify-content: space-between;
    /* padding-top: 30px; */
    padding-top: 29.557%;
`;

const SliderHorizontalButton = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    background-color: rgba(97, 97, 97, 0.83);
    /* background-color: rgba(97, 97, 97, 0.17); */

    &:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.5);
    }
    ${(props) =>
        props.active &&
        css`
            background-color: rgba(255, 255, 255, 1);
            &:hover {
                cursor: pointer;
                background-color: rgba(255, 255, 255, 1);
            }
        `}
`;

const SliderHorizontal = ({ crew, onSelectCrew }) => {
    const crews = [
        {
            crew: "DOUGLAS",
        },
        { crew: "MARK" },
        { crew: "VICTOR" },
        { crew: "ANOUSHEH" },
    ];
    return (
        <SliderHorizontalBox>
            {crews.map((c) => (
                <SliderHorizontalButton
                    key={c.crew}
                    active={crew === c.crew}
                    onClick={() => onSelectCrew(c.crew)}
                />
            ))}
        </SliderHorizontalBox>
    );
};

const SliderVerticalButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    width: 100%;

    font-family: "Bellefair";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 37px;
    /* identical to box height */

    letter-spacing: 2px;

    box-sizing: border-box;
    mix-blend-mode: normal;
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: #ffffff;
    border-radius: 50%;
    &:hover {
        cursor: pointer;
        box-sizing: border-box;
        border: 1px solid #ffffff;
        color: #ffffff;
    }
    ${(props) =>
        props.active &&
        css`
            color: #0b0d17;
            background: #ffffff;
            border: 0;
            border-radius: 50%;

            &:hover {
                cursor: pointer;
                color: #0b0d17;
                background: #ffffff;
            }
        `}
`;
const SliderVerticalBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 12.698%;
    justify-content: space-between;
    padding: 0;
    margin: 0;
`;

const SliderVertical = ({ onSelectTechnology, technology }) => {
    const technologies = [
        {
            id: "1",
            technology: "LAUNCH_VEHICLE",
        },
        {
            id: "2",
            technology: "SPACEPORT",
        },
        {
            id: "3",
            technology: "SPACE_CAPSULE",
        },
    ];

    return (
        <SliderVerticalBox>
            {technologies.map((t) => (
                <SliderVerticalButton
                    key={t.id}
                    active={t.technology === technology}
                    onClick={() => onSelectTechnology(t.technology)}>
                    {t.id}
                </SliderVerticalButton>
            ))}
        </SliderVerticalBox>
    );
};

/* Oval Copy */

export { SliderHorizontal, SliderVertical };
