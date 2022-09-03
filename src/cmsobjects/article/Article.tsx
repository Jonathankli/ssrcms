import axios from "axios";
import React, { useEffect } from "react";
import Helmet from "react-helmet";

const Article = props => {

    const {
        data
    } = props;

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
            <h1 style={{textAlign: "center"}}>{data.title}</h1>
            <span>{data.author}, {data.updatedAt} </span>
            <p>{data.text}</p>
        </>

    )
}

export const getSsgData = async settings => {
    return await axios.get(`https://bachelor-api.herokuapp.com/api/blog/article/${settings.articleId}`)
        .then(res => res.data);
}

export default Article;