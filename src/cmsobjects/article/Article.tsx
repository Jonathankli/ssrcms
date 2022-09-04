import axios from "axios";
import React, { useEffect } from "react";
import Helmet from "react-helmet";

const Article = props => {

    const {
        data
    } = props;

    const date = new Date(data.created_at);

    return (
        <>
            <Helmet>
                <title>{data.title}</title>
            </Helmet>
            <div style={{width: "100%", height: "400px"}}>
                <img src={data.image} alt={data.title} style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}/>
            </div>
            <h1 style={{textAlign: "center", margin: "auto", maxWidth: "900px", paddingTop: "20px"}}>{data.title}</h1>
            <p style={{textAlign: "center"}}>{data.author}, {date.getDay()}.{date.getMonth()}.{date.getFullYear()} </p>
            <p style={{margin: "auto", maxWidth: "900px"}}>{data.text}</p>
        </>

    )
}

export const getSsgData = async settings => {
    return await axios.get(`https://bachelor-api.herokuapp.com/api/blog/article/${settings.articleId}`)
        .then(res => res.data);
}

export default Article;