import background_desktop from "../../images/technology/background-technology-desktop.jpg";
import mobile_background from "../../images/technology/background-technology-mobile.jpg";
import tablet_background from "../../images/technology/background-technology-tablet.jpg";
import launch_vehicle_landscape from "../../images/technology/image-launch-vehicle-landscape.jpg";
import space_capsule_landscape from "../../images/technology/image-space-capsule-landscape.jpg";
import spaceport_landscape from "../../images/technology/image-spaceport-landscape.jpg";
import launch_vehicle_portrait from "../../images/technology/image-launch-vehicle-portrait.jpg";
import space_capsule_portrait from "../../images/technology/image-space-capsule-portrait.jpg";
import spaceport_portrait from "../../images/technology/image-spaceport-portrait.jpg";
import { styled } from "styled-components";
import Header from "../elements/Header";
import { SliderVertical } from "../elements/Sliders";
import { Heading3, Heading4, Heading5 } from "../elements/Headings";
import { BodyText, NavText } from "../elements/Texts";
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
const LeftContent = styled.div`
    position: relative;
    display: flex;
    /* justify-content: space-around; */
    flex-direction: row;
    padding: 17.153% 0px 0px 11.458%;
    height: 33.778%;
    max-width: 43.75%;
`;

const LeftContentBox = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    max-width: 74.603%;
    padding: 0px 0px 0px 12.698%;
`;

const RightContent = styled.div`
    position: relative;
    display: flex;
    /* width: 515px;
    height: 527px; */
    width: 35.764%;
    height: 58.556%;

    padding: 15.111% 0px 0px 7.5%;
`;

const Technology = ({ category, idx, onSelect }) => {
    // onSelect("Technology", 3);
    const technologies = {
        LAUNCH_VEHICLE: {
            img: launch_vehicle_portrait,
            heading3: "LAUNCH VEHICLE",
            body: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        },
        SPACEPORT: {
            img: spaceport_portrait,
            heading3: "SPACEPORT",
            body: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        },
        SPACE_CAPSULE: {
            img: space_capsule_portrait,
            heading3: "SPACE CAPSULE",
            body: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        },
    };
    const [technology, setTechnology] = useState("LAUNCH_VEHICLE");
    const onSelectTechnology = useCallback(
        (technology) => setTechnology(technology),
        []
    );
    return (
        <ContentBox>
            <Header category={category} idx={idx} onSelect={onSelect}></Header>
            <LeftContent>
                <SliderVertical
                    onSelectTechnology={onSelectTechnology}
                    technology={technology}
                />
                <LeftContentBox>
                    <NavText>THE TERMINOLOGY…</NavText>
                    <Heading3>{technologies[technology].heading3}</Heading3>
                    <BodyText style={{ maxWidth: "95%" }}>
                        {technologies[technology].body}
                    </BodyText>
                </LeftContentBox>
            </LeftContent>
            <RightContent>
                <img src={technologies[technology].img} alt="Not An Img" />
            </RightContent>
        </ContentBox>
    );
};

export default Technology;
