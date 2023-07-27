import styled from "styled-components";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
import axios from "axios";
import usePromise from "../lib/usePromise";

const API_KEY = "39b70b80c9f74338bf5a65431568452e";
const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleArticle = {
    title: "title",
    description: "description",
    url: "https://google.com",
    urlToImage: "https://via.placeholder.com/160",
};

const NewsList = ({ category }) => {
    const [loading, response, error] = usePromise(() => {
        const query = category === "all" ? "" : `&category=${category}`;
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=${API_KEY}`
        );
    }, [category]);

    if (loading) {
        return <NewsListBlock>Waiting...</NewsListBlock>;
    }
    if (!response) {
        return null;
    }
    if (error) {
        return <NewsListBlock>ERROR!</NewsListBlock>;
    }
    const { articles } = response.data;
    return (
        <NewsListBlock>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article} />
            ))}
            <NewsItem article={sampleArticle} />
        </NewsListBlock>
    );
};

export default NewsList;
