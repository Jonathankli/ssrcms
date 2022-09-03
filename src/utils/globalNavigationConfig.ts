import { CmsObjectTypes } from "../cmsobjects";

const globalNavigationConfig = {
    id: "Global_Navi",
    type: CmsObjectTypes.Navi,
    settings: { 
        links: [
            {href: "/", title: "Startseite"},
            {href: "/szenario1", title: "Szenario 1"},
            {href: "/szenario2", title: "Szenario 2"},
            {href: "/szenario3", title: "Szenario 3"},
            {href: "/szenario4", title: "Szenario 4"},
            {href: "/szenario5", title: "Szenario 5"},
        ]
    },
    children: []
};

export default globalNavigationConfig;