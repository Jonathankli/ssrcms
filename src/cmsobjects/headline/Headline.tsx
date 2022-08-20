import axios from "axios";
import React from "react";

export default props => {

    const {
        settings,
        data
    } = props;

    return (
        <h1>{ settings.title } { data.name }</h1>
    )
}

export const getSsgData = async settings => {
    return {
        name: await axios.get("https://random-data-api.com/api/v2/users").then(res => res.data.first_name)
    }
}  