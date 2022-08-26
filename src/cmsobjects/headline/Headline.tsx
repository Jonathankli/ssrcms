import React from "react";

type settingsType = {
    title: string,
    type: keyof React.ReactDOM,
    align: any,
    marginTop: number
    marginBottom: number
}

const defaultSettings: settingsType = {
    title: "Überschrift",
    type: "h1",
    align: "center",
    marginTop: 20,
    marginBottom: 20,
}

const Headline = props => {

    const {
        settings: _settings,
        id
    } = props;

    const settings = {...defaultSettings, ..._settings};
    const HeadlineTag: keyof React.ReactDOM = settings.type;

    return (
        <HeadlineTag style={{
            textAlign: settings.align, 
            marginTop: settings.marginTop + "px",
            marginBottom: settings.marginBottom + "px",
        }}>
            { settings.title }
        </HeadlineTag>
    )
}

export default Headline;