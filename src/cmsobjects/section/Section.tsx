import React from "react";

type settingsType = {
    color: any,
    paddingTop: number
    paddingBottom: number
}

const defaultSettings: settingsType = {
    color: "rgba(0,0,0,0)",
    paddingTop: 20,
    paddingBottom: 20,
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
                backgroundColor: settings.color,
                paddingTop: settings.paddingTop + "px",
                paddingBottom: settings.paddingBottom + "px",
            }}>
                <div style={{maxWidth: "900px", margin: "auto"}}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Section;