import Header from "../elements/Header";
import douglas from "../../images/crew/image-douglas-hurley.png";
import desktop_background from "../../images/crew/background-crew-desktop.jpg";
import mobile_background from "../../images/crew/background-crew-mobile.jpg";
import tablet_background from "../../images/crew/background-crew-tablet.jpg";
import anousheh from "../../images/crew/image-anousheh-ansari.png";
import mark from "../../images/crew/image-mark-shuttleworth.png";
import victor from "../../images/crew/image-victor-glover.png";
import { styled, css } from "styled-components";
import { Heading3, Heading4 } from "../elements/Headings";
import { BodyText } from "../elements/Texts";
import { SliderHorizontal } from "../elements/Sliders";
import { useState } from "react";
import { useCallback } from "react";

const LeftContent = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 400px 0px 0px 165px;
    height: 406px;
`;

const RightContent = styled.div`
    display: flex;

    padding: 180px 0px 0px 81.43px;
    height: 80%;
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
    return (
        <div
            style={{
                // backgroundColor: "black",
                backgroundSize: "cover",
                minWidth: "100vw",
                minHeight: "100vh",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${desktop_background})`,
                alignItems: "flex-end",
                backgroundColor: `rgba(0, 0, 0, 0.25)`,
                // opacity: 0.25,
                // width: "1440px",
                // height: "900px",
            }}>
            <Header category={category} idx={idx} onSelect={onSelect}></Header>
            <div
                style={{
                    display: "flex",
                }}>
                <LeftContent>
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
                </LeftContent>
                <RightContent>
                    <img src={crews[crew].img} />
                </RightContent>
            </div>
        </div>
    );
};

export default Crew;
