import Header from "../elements/Header";
import douglas from "../../images/crew/image-douglas-hurley.png";
import background_desktop from "../../images/crew/background-crew-desktop.jpg";
import background_mobile from "../../images/crew/background-crew-mobile.jpg";
import background_tablet from "../../images/crew/background-crew-tablet.jpg";
import anousheh from "../../images/crew/image-anousheh-ansari.png";
import mark from "../../images/crew/image-mark-shuttleworth.png";
import victor from "../../images/crew/image-victor-glover.png";
import { styled, css } from "styled-components";
import { Heading3, Heading4 } from "../elements/Headings";
import { BodyText } from "../elements/Texts";
import { SliderHorizontal } from "../elements/Sliders";
import { useState } from "react";
import { useCallback } from "react";

const ContentBox = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    /* min-width: 100vw; */
    aspect-ratio: auto;
    min-height: 140vh;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-color: #0b0d17;
    background-image: url(${background_desktop});
`;

const LeftContentBox = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    /* justify-content: space-around; */
    padding: 17.111% 0px 0px 11.458%;
    /* height: 406px; */
    min-height: 45.111%;
    min-width: 30.833%;

    max-width: 48.674%;
`;

const RightContentBox = styled.div`
    display: flex;
    position: relative;
    aspect-ratio: auto;
    background-size: cover;
    padding: 8.889% 0px 0px 8.048%;
    max-height: 73%;
`;

const Crew = ({ category, idx, onSelect }) => {
    const crews = {
        DOUGLAS: {
            img: douglas,
            heading4: "Commander",
            heading3: "Douglas Hurley",
            body: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        },
        MARK: {
            img: mark,
            heading4: "Mission Specialist ",
            heading3: "MARK SHUTTLEWORTH",
            body: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        },
        VICTOR: {
            img: victor,
            heading4: "PILOT",
            heading3: "Victor Glover",
            body: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        },
        ANOUSHEH: {
            img: anousheh,
            heading4: "Flight Engineer",
            heading3: "Anousheh Ansari",
            body: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        },
    };
    const [crew, setCrew] = useState("DOUGLAS");
    const onSelectCrew = useCallback((crew) => setCrew(crew), []);
    // onSelect("Crew", 2);

    return (
        <ContentBox>
            <Header category={category} idx={idx} onSelect={onSelect}></Header>
            <LeftContentBox>
                <Heading4>{crews[crew].heading4}</Heading4>
                <Heading3>{crews[crew].heading3}</Heading3>
                <BodyText>{crews[crew].body}</BodyText>
                <SliderHorizontal
                    style={{
                        alignContents: "flex-end",
                        // alignItems: "flex-end",
                    }}
                    crew={crew}
                    onSelectCrew={onSelectCrew}
                />
            </LeftContentBox>
            <RightContentBox>
                <img src={crews[crew].img} alt="Not An IMG" />
            </RightContentBox>
        </ContentBox>
    );
};

export default Crew;
