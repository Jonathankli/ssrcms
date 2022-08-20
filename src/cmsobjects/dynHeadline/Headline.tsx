import axios from "axios";
import React, { useState } from "react";

export default props => {

    const {
        settings,
        data
    } = props;
    const [state, setState] = useState("hallo");
    console.log(state);

    return (
        <>
            <h1>{ settings.title } { data.name }</h1>
            <input type="text" value={state} onChange={e => setState(e.target.value)} />
        </>
    )
}

export const getSsgData = async settings => {
    return {
        name: await axios.get("https://random-data-api.com/api/v2/users").then(res => res.data.first_name)
    }
}  

export const FILEPATH = __filename;