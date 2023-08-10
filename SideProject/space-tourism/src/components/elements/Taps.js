import styled, { css } from "styled-components";

const TapBackground = styled.div`
    display: flex;
    justify-content: space-between;
    width: 285px;
    padding: 0px;
    margin: 0px;
`;

const TapBox = styled.div`
    height: 34px;
    /* padding: 0px; */
    /* margin: 0px; */
    box-sizing: border-box;
    &:hover {
        border-bottom: solid 3px;
        border-bottom-color: rgba(255, 255, 255, 0.5);
        mix-blend-mode: normal;
        cursor: pointer;
    }
    // active 일때 hover되어도 색은 변하지 않는지 확인해야함
    ${(props) =>
        props.active &&
        css`
            border-bottom: solid 3px;
            border-color: #ffffff;
            /* border-bottom-color: red; */
            &:hover {
                border-bottom: solid 3px;
                border-color: #ffffff;
            }
        `}
`;

const TapWord = styled.div`
    /* MOON */

    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;

    color: #d0d6f9;

    ${(props) =>
        props.active &&
        css`
            color: #ffffff;
        `}
`;

const Taps = ({ planet, onSelectPlanet }) => {
    const planets = [
        {
            planet: "MOON",
        },
        {
            planet: "MARS",
        },
        {
            planet: "EUROPA",
        },
        {
            planet: "TITAN",
        },
    ];
    return (
        <TapBackground>
            {planets.map((p) => (
                <TapBox
                    key={p.id}
                    active={planet === p.planet}
                    onClick={() => onSelectPlanet(p.planet)}>
                    <TapWord active={planet === p.planet}>{p.planet}</TapWord>
                </TapBox>
            ))}
        </TapBackground>
    );
};

export default Taps;
