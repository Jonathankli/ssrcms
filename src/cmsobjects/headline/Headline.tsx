import axios from "axios";
import React from "react";
import styled from "styled-components"

export default props => {

    const {
        settings,
        data
    } = props;

    return (
        <Headline>{ settings.title } { data.name }</Headline>
    )
}

const Headline = styled.h1`
    color: red;
`

export const getSsgData = async settings => {
    return {
        name: await axios.get("https://random-data-api.com/api/v2/users").then(res => res.data.first_name)
    }
}  
