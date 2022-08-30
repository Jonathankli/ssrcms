import React from "react";

type settingsType = {
    marginTop: number
    marginBottom: number
    sideSpace: number
}

const defaultSettings: settingsType = {
    marginTop: 20,
    marginBottom: 20,
    sideSpace: 10
}

const Grid = props => {

    const {
        settings: _settings,
        id,
        children
    } = props;

    const settings = {...defaultSettings, ..._settings};

    return (
        <>
            <div style={{
                marginTop: settings.marginTop + "px",
                marginBottom: settings.marginBottom + "px",
            }}>
                <div style={{width: `calc( 50% - ${2*settings.sideSpace}px)`, float: "left", padding: `0 ${settings.sideSpace}px`}}>{children?.[1]}</div>
                <div style={{width: `calc( 50% - ${2*settings.sideSpace}px)`, float: "left", padding: `0 ${settings.sideSpace}px`}}>{children?.[0]}</div>
                <div style={{clear: "both", height: "0"}}></div>
            </div>
        </>
    )
}

export default Grid;