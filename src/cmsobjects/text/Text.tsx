import React from "react";

type settingsType = {
    text: string,
    align: any,
    color: any,
    marginTop: number
    marginBottom: number
}

const defaultSettings: settingsType = {
    text: "Lorem ipsum",
    align: "center",
    color: "black",
    marginTop: 20,
    marginBottom: 20,
}

const Text = props => {

    const {
        settings: _settings,
        id
    } = props;

    const settings = {...defaultSettings, ..._settings};

    return (
        <p style={{
            textAlign: settings.align, 
            marginTop: settings.marginTop + "px",
            marginBottom: settings.marginBottom + "px",
            color: settings.color
        }}>
            { settings.text }
        </p>
    )
}

export default Text;