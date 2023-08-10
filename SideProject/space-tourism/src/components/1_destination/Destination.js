import Header from "../elements/Header";
import moon from "../../images/destination/image-moon.png";
import mars from "../../images/destination/image-mars.png";
import europa from "../../images/destination/image-europa.png";
import titan from "../../images/destination/image-titan.png";
import background_desktop from "../../images/destination/background-destination-desktop.jpg";
// import Pictures from "../elements/Pictures";
import { Heading2 } from "../elements/Headings";
import { BodyText } from "../elements/Texts";
import { useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";
import Taps from "../elements/Taps";
import { SubHeading1, SubHeading2 } from "../elements/SubHeadings";
import { useLocation } from "react-router-dom";

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

const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* max-width: 30.903%;
    max-height: 49.444%;
    min-width: 445px;
    min-height: 445px; */
    width: 30.903%;
    height: 49.444%;
    padding: 207px 0% 0% 15.972%;
    background-size: cover;
`;

const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30.903%;
    height: 52.444%;
    padding: 174px 0px 0px 17.444%;
    /* background-color: blue; */
`;

const Line = styled.div`
    width: 100%;
    position: relative;
    /* width: 100px; */
    height: 1px;
    /* height: 1px; */
    /* background: red; */
    background: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.25;
    margin-top: 6%;
    /* margin-top: 11.441%; */
`;

const SubHeadingBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    /* min-width: 42.466%; */
    height: 100%;
    & + & {
        padding-left: 5rem;
    }
`;

const SubHeadingList = styled.div`
    display: flex;
    /* justify-content: space-between; */

    height: 12.924%;
    padding-top: 5.932%;
`;

const Destination = ({ category, idx, onSelect }) => {
    const content = {
        MOON: {
            img: moon,
            heading2: "MOON",
            body: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            subheading2_left: "AVG. DISTANCE",
            subheading1_left: "384,400 KM",

            subheading2_right: "EST. TRAVEL TIME",
            subheading1_right: "3 DAYS",
        },
        MARS: {
            img: mars,
            heading2: "MARS",
            body: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            subheading2_left: "AVG. DISTANCE",
            subheading1_left: "225 MIL. KM",

            subheading2_right: "EST. TRAVEL TIME",
            subheading1_right: "9 MONTHS",
        },
        EUROPA: {
            img: europa,
            heading2: "EUROPA",
            body: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            subheading2_left: "AVG. DISTANCE",
            subheading1_left: "628 MIL. KM",

            subheading2_right: "EST. TRAVEL TIME",
            subheading1_right: "3 YEARS",
        },
        TITAN: {
            img: titan,
            heading2: "TITAN",
            body: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            subheading2_left: "AVG. DISTANCE",
            subheading1_left: "1.6 BIL. KM",

            subheading2_right: "EST. TRAVEL TIME",
            subheading1_right: "7 YEARS",
        },
    };
    const [planet, setPlanet] = useState("MOON");
    const onSelectPlanet = useCallback((planet) => setPlanet(planet), []);
    // onSelect("Destination", 1);

    return (
        <ContentBox>
            <Header category={category} idx={idx} onSelect={onSelect}></Header>
            <LeftBox>
                <img
                    src={content[planet].img}
                    alt="Not an Img"
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                />
            </LeftBox>
            <RightBox>
                <Taps planet={planet} onSelectPlanet={onSelectPlanet} />
                <Heading2>{content[planet].heading2}</Heading2>
                <BodyText>{content[planet].body}</BodyText>
                <Line />
                <SubHeadingList>
                    <SubHeadingBox>
                        <SubHeading2>
                            {content[planet].subheading2_left}
                        </SubHeading2>
                        <SubHeading1>
                            {content[planet].subheading1_left}
                        </SubHeading1>
                    </SubHeadingBox>
                    <SubHeadingBox>
                        <SubHeading2>
                            {content[planet].subheading2_right}
                        </SubHeading2>
                        <SubHeading1>
                            {content[planet].subheading1_right}
                        </SubHeading1>
                    </SubHeadingBox>
                </SubHeadingList>
            </RightBox>
        </ContentBox>
    );
};

export default Destination;
