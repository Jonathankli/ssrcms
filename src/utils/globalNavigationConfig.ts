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
            {href: "/csr", title: "CSR", reload: true},
            {href: "/", title: "Default", reload: true},
        ]
    },
    children: []
};

export default globalNavigationConfig;