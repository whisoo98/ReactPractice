import desktop_background from "../../images/technology/background-technology-desktop.jpg";
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

const LeftContent = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding: 383px 0px 0px 165px;
    height: 304px;
`;

const LeftContentBox = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    min-width: 444px;
    padding: 0px 0px 0px 80px;
    height: 304px;
`;

const RightContent = styled.div`
    display: flex;
    width: 515px;
    height: 527px;
    padding: 272px 0px 0px 156px;
`;

const Technology = ({ category, idx, onSelect }) => {
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
        <div
            style={{
                // backgroundColor: "black",
                display: "flex",
                backgroundSize: "cover",
                minWidth: "100vw",
                minHeight: "100vh",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${desktop_background})`,
                backgroundColor: `rgba(0, 0, 0, 0.25)`,
                // opacity: 0.25,
                // width: "1440px",
                // height: "900px",
            }}>
            <Header category={category} idx={idx} onSelect={onSelect}></Header>
            <div style={{ display: "flex" }}>
                <LeftContent>
                    <SliderVertical
                        onSelectTechnology={onSelectTechnology}
                        technology={technology}
                    />
                    <LeftContentBox>
                        <NavText>THE TERMINOLOGY…</NavText>
                        <Heading3>{technologies[technology].heading3}</Heading3>
                        <BodyText>{technologies[technology].body}</BodyText>
                    </LeftContentBox>
                </LeftContent>
                <RightContent>
                    <img src={technologies[technology].img} />
                </RightContent>
            </div>
        </div>
    );
};

export default Technology;
