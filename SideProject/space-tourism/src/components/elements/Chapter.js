import styled, { css } from "styled-components";

const ChapterNumber = styled.div`
    /* 01 */

    /* position: absolute;
    height: 34px;
    left: 0%;
    right: 93.19%;
    top: calc(50% - 34px / 2); */

    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    /* identical to box height */
    letter-spacing: 4.725px;

    mix-blend-mode: normal;
    /* color: #ffffff;
    opacity: 0.25; */
    color: rgba(255, 255, 255, 0.25);
`;

const ChapterWord = styled.div`
    /* Pick your destinatio */
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 34px;
    /* identical to box height */
    letter-spacing: 4.725px;
    text-transform: uppercase;
    color: #ffffff;
`;
const ChapterBox = styled.div`
    position: absolute;
    top: 212px;
    left: 166.5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 34px;
`;

const Chpater = ({ idx }) => {
    const chapter_words = [
        "Pick your destination",
        "Meet your crew",
        "SPACE LAUNCH 101",
    ];
    console.log(idx);
    return (
        <ChapterBox>
            {idx === null ? null : (
                <ChapterNumber>{"0" + String(idx)}</ChapterNumber>
            )}
            <ChapterWord>{chapter_words[idx - 1]}</ChapterWord>
        </ChapterBox>
    );
};

export default Chpater;
