import styled, { css } from "styled-components";

const ChapterNumber = styled.div`
    font-family: "Barlow Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    /* identical to box height */
    letter-spacing: 4.725px;

    mix-blend-mode: normal;
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
    /* position: absolute; */
    position: relative;
    display: flex;
    top: 79.167%;
    /* top: 212px; */
    left: 4.45%;
    justify-content: space-around;
    align-items: center;
    height: 34px;
    padding: 0;
    margin: 0;
    padding-left: 4.444%;
    /* padding-top: 23.556%; */
    /* padding-top: 100%; */
`;

const Chpater = ({ idx }) => {
    const chapter_words = [
        "\u00A0\u00A0Pick your destination",
        "\u00A0\u00A0Meet your crew",
        "\u00A0\u00A0SPACE LAUNCH 101",
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
