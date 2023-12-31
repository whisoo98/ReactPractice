import styled, { css } from "styled-components";
import logo from "../../images/shared/logo.svg";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import Chpater from "./Chapter";

const HeaderBackground = styled.div`
    /* Group 21 */
    position: relative;
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: row; */
    /* align-content: center; */
    align-items: center;
    /* justify-content: space-around; */

    /* position: absolute; */
    /* width: 1385px;
    height: 96px;
    left: 55px;
    top: 40px; */
    min-width: calc(100% - 3.82%);
    /* width: 100%; */
    height: 96px;
    left: 3.82%;
    top: 6.22%;
    padding: 0px;
    margin: 0px;
    /* left: 0px;
            top: 0px; */

    /* Rectangle */

    /* left: 0%;
            right: 0%;
            top: 0%;
            bottom: 40%; */

    /* background-color: #FFFFFF; */
    /* background-color: #979797; */
    /* opacity: 0.04; */
    /* background-color: red; */
    /* Note: backdrop-filter has minimal browser support */
`;

const Logo = styled.img.attrs({
    src: `${logo}`,
})`
    display: relative;
    /* left: 55px; */
    margin: auto 0;
    /* width: 48px;
    height: 48px; */
    /* width: 3.33vw;
    height: 5.33vh; */
    &:hover {
        cursor: pointer;
    }
`;

const Line = styled.div`
    /* position: absolute; */
    position: relative;
    /* width: calc(473px / 1440px); */
    width: 32.85%;
    /* height: 10px; */
    height: 1px;
    /* left: calc(64px / 1440px); */
    left: 4.45%;
    padding-left: 4.444%;
    /* left: 11.6%; */
    /* top: 88px; */
    margin: auto 0;
    z-index: 1;
    background: #ffffff;
    /* background: red; */
    mix-blend-mode: normal;
    opacity: 0.25;
`;

const HeaderCategoryTitle = styled.div`
    display: flex;
    /* justify-content: space-evenly; */

    /* width: 1rem; */
    /* margin: auto 0; */
    height: 19px;
    padding: 0;
`;

const HeaderCategoryWord = styled.div`
    /* ACTIVE */

    height: 19px;
    /* left: 34.52%;
    right: 3.57%;
    top: calc(50% - 19px / 2); */
    /* margin-right: 2px; */

    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
    text-transform: uppercase;
    margin-left: 10px;
    margin-right: auto;
    padding: 0;

    color: #ffffff;
    /* background-color: black; */
`;

const HeaderCategoryNumber = styled.div`
    /* 00 */

    height: 19px;
    /* left: 0%;
    right: 78.57%;
    top: calc(50% - 19px / 2); */

    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.1875rem;
    letter-spacing: 2.7px;

    margin-left: auto;
    padding: 0;

    color: #ffffff;
    /* background-color: black; */
`;

const HeaderCategoryBackground = styled.div`
    /* position: absolute; */
    display: flex;
    justify-content: center;
    /* align-content: center; */
    /* align-items: center; */
    width: 57.64%;
    height: 96px;
    /* left: 610px */
    /* top: 40px; */
    margin-left: auto;

    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.7742px);
`;
const HeaderCategoryBox = styled.div`
    /* width: 100vh; */
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: space-evenly; */
    position: relative;
    top: 39px;
    height: 57px;
    padding: 0px;
    box-sizing: border-box;
    &:hover {
        border-bottom: solid 3px;
        /* Rectangle Copy */
        cursor: pointer;
        /* background: #ffffff; */
        /* background: blue; */

        mix-blend-mode: normal;
        /* border-bottom-color: #ffffff;    
        opacity: 0.5; */
        border-bottom-color: rgba(255, 255, 255, 0.5);
    }
    ${(props) =>
        props.active &&
        css`
            border-bottom: solid 3px;
            border-bottom-color: #ffffff;
            &:hover {
                border-bottom: solid 3px;
                cursor: pointer;

                mix-blend-mode: normal;
                border-bottom-color: #ffffff;
            }
        `}
    /* margin-bottom: 38px; */
    /* margin: 39px 0px 0px 0px; */
    /* margin: 0px; */
    /* background-color: black; */
    & + & {
        margin-left: 5rem;
    }
`;

const HeaderCategory = ({ category, onSelect }) => {
    const navigate = useNavigate();
    const categoties = [
        {
            number: "0",
            word: "Home",
        },
        {
            number: "1",
            word: "Destination",
        },
        {
            number: "2",
            word: "Crew",
        },
        {
            number: "3",
            word: "Technology",
        },
    ];

    const { pathname } = useLocation();
    category = pathname.split("/")[1];
    
    if (category === "") category = "Home";
    return (
        <HeaderCategoryBackground>
            {categoties.map((c) => (
                <HeaderCategoryBox
                    key={c.number}
                    active={category === c.word}
                    onClick={() => {
                        c.number === "0"
                            ? onSelect(c.word, null)
                            : onSelect(c.word, c.number);
                        c.word === "Home"
                            ? navigate("/")
                            : navigate(`/${c.word}`);
                    }}>
                    <HeaderCategoryTitle>
                        <HeaderCategoryNumber>
                            {"0" + c.number}
                        </HeaderCategoryNumber>
                        <HeaderCategoryWord>{c.word}</HeaderCategoryWord>
                    </HeaderCategoryTitle>
                </HeaderCategoryBox>
            ))}
        </HeaderCategoryBackground>
    );
};

const Header = ({ onSelect, idx, category }) => {
    return (
        <HeaderBackground>
            <NavLink to="/Home">
                <Logo logo={logo} />
            </NavLink>
            <Line />
            <HeaderCategory onSelect={onSelect} category={category} />
            {category === "" || category === "Home" ? null : (
                <Chpater idx={idx} />
            )}
        </HeaderBackground>
    );
};

export default Header;
