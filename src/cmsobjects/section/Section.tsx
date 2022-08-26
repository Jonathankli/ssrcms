import React from "react";

type settingsType = {
    color: any,
    marginTop: number
    marginBottom: number
}

const defaultSettings: settingsType = {
    color: "rgba(0,0,0,0)",
    marginTop: 20,
    marginBottom: 20,
}

const Section = props => {

    const {
        settings: _settings,
        id,
        children
    } = props;

    const settings = {...defaultSettings, ..._settings};

    return (
        <>
            <div style={{
                color: settings.color,
                marginTop: settings.marginTop + "px",
                marginBottom: settings.marginBottom + "px",
            }}>
                <div style={{maxWidth: "900px", margin: "auto"}}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Section;