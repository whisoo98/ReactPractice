import Header from "../elements/Header";
import background_desktop from "../../images/home/background-home-desktop.jpg";
// import Pictures from "../elements/Pictures";
import { Heading1, Heading5 } from "../elements/Headings";
import { BodyText } from "../elements/Texts";
import Button from "../elements/Button";
import { styled } from "styled-components";
import Chpater from "../elements/Chapter";
import { NavLink, useLocation, useParams } from "react-router-dom";

const ContentBox = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    aspect-ratio: auto;
    /* min-width: 100vw; */
    min-height: 140vh;
    width: 100%;
    height: 100%;
    background-color: #0b0d17;
    background-image: url(${background_desktop});
    background-size: cover;
`;

const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 31.25%;
    height: 42.45%;
    padding: 12.153% 0% 0% 11.458%;
`;

const Home = ({ category, idx, onSelect }) => {
    return (
        <ContentBox>
            <Header category={category} idx={idx} onSelect={onSelect}></Header>
            <LeftBox>
                <Heading5>SO, YOU WANT TO TRAVEL TO</Heading5>
                <Heading1>SPACE</Heading1>
                <BodyText>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </BodyText>
            </LeftBox>
            <NavLink to="/Destination">
                <Button />
            </NavLink>
        </ContentBox>
    );
};

export default Home;
