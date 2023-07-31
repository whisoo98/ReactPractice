import Header from "../elements/Header";
import images from "../../images/home/background-home-desktop.jpg";
// import Pictures from "../elements/Pictures";
import { Heading1, Heading5 } from "../elements/Headings";
import { BodyText } from "../elements/Texts";
import Button from "../elements/Button";

const Home = ({ category, idx, onSelect }) => {
    return (
        <div
            style={{
                // backgroundColor: "black",
                backgroundSize: "cover",
                minWidth: "100vw",
                minHeight: "100vh",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${images})`,
                alignItems: "flex-end",
                // width: "1440px",
                // height: "900px",
            }}>
            <Header category={category} idx={idx} onSelect={onSelect}></Header>
            {/* <img src={"../../images/home/background-home-desktop.jpg"} alt="Not An Page" /> */}
            <div
                style={{
                    position: "absolute",
                    top: "387px",
                    left: "165px",
                    width: "450px",
                    height: "382px",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                }}>
                <Heading5>SO, YOU WANT TO TRAVEL TO</Heading5>
                <Heading1>SPACE</Heading1>
                <BodyText>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </BodyText>
            </div>
            <Button />
        </div>
    );
};

export default Home;
