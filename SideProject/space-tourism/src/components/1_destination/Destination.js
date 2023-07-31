import Header from "../elements/Header";
import moon from "../../images/destination/image-moon.png";
import mars from "../../images/destination/image-mars.png";
import europa from "../../images/destination/image-europa.png";
import titan from "../../images/destination/image-titan.png";
import desktop_background from "../../images/destination/background-destination-desktop.jpg";
// import Pictures from "../elements/Pictures";
import { Heading1, Heading2, Heading5 } from "../elements/Headings";
import { BodyText } from "../elements/Texts";
import Chpater from "../elements/Chapter";
import Pictures from "../elements/Pictures";
import { useState } from "react";
import { useCallback } from "react";
import styled, { css } from "styled-components";
import Taps from "../elements/Taps";
import { SubHeading1, SubHeading2 } from "../elements/SubHeadings";

const ContentBox = styled.div`
    display: flex;
    padding: 310px 0px 0px 157px;
    width: 445px;
    height: 472px;
    justify-content: space-between;
    flex-direction: column;
`;

const Line = styled.div`
    /* position: absolute; */
    width: 444px;
    /* height: 10px; */
    height: 1px;
    /* top: 88px; */
    /* margin: auto 0; */

    background: #ffffff;
    /* background: red; */
    mix-blend-mode: normal;
    opacity: 0.25;
`;

const SubHeadingBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 153px;
    height: 61px;
`;

const SubHeadingList = styled.div`
    display: flex;
    justify-content: space-between;

    width: 365px;
    height: 61px;
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
    const onSelectPlanet = useCallback((planet) => setPlanet(planet), [planet]);

    return (
        <div
            style={{
                // backgroundColor: "black",
                display: "flex",
                backgroundSize: "cover",
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${desktop_background})`,
                // backgroundImage: `url(${Pictures.destination.desktop_background})`,
                alignItems: "flex-end",
                // width: "1440px",
                // height: "900px",
            }}>
            <Header category={category} idx={idx} onSelect={onSelect}></Header>
            <img
                style={{
                    padding: "343px 0px 0px 230px",
                    width: "445px",
                    height: "445px",
                    // background: "red",
                }}
                src={content[planet].img}
            />
            <ContentBox>
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
            </ContentBox>
        </div>
    );
};

export default Destination;
