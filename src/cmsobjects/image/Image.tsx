import React from "react";

type settingsType = {
    src: string,
    alt: string,
    height: number,
}

const defaultSettings: settingsType = {
    src: "",
    alt: "Bild",
    height: 300
}

const Image = props => {

    const {
        settings: _settings,
    } = props;

    const settings = {...defaultSettings, ..._settings};

    return (
        <div style={{
            width: "100%",
            height: settings.height + "px"
        }}>
            <img src={settings.src} alt={settings.alt} style={{
                width: "100%";
                height: "100%";
                objectFit: "cover"
            }}/>
        </div>
    )
}

export default Image;