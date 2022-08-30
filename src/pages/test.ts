import { CmsObjectTypes } from "../cmsobjects";
import { v4 as uuid } from "uuid";

export default {
    title: "Test",
    path: "/test",
    children: [
        {
            id: "Global_Navi",
            type: CmsObjectTypes.Navi,
            settings: { links: [
                {href: "/", title: "Startseite"},
                {href: "/test", title: "Test"},
                {href: "/404", title: "404"},
            ]},
            children: []
        },
        {
            id: uuid(),
            type: CmsObjectTypes.Headline,
            settings: { title: "Testseite" },
            children: []
        },
    ]
}