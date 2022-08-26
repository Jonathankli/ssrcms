import React from "react";
import useNavigate from "../../frontend/hooks/useNavigate";

type settingsType = {
    links: Array<{ href: string, title: string }>
}

const defaultSettings: settingsType = {
    links: [],
}

const Navi = props => {

    const {
        settings: _settings,
        id
    } = props;

    const settings = {...defaultSettings, ..._settings};
    const navigate = useNavigate();

    return (
        <div style={{
            padding: "20px 0",
            backgroundColor: "#D1BC8A",
        }}>
            <ul style={{display: "table", margin: "auto", listStyle: "none"}}>
                {settings.links.map((link, i) => (
                    <li key={i} onClick={navigate.bind(this, link.href)} style={{float: "left", padding: "0 20px", cursor: "pointer"}}>{ link.title }</li>
                ))}
            </ul>
            <div style={{clear: "both", height: "0"}}></div>
        </div>
    )
}

export default Navi;