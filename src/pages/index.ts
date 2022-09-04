import { CmsObjectTypes } from "../cmsobjects";
import { v4 as uuid } from "uuid";
import globalNavigationConfig from "../utils/globalNavigationConfig";

export default {
    title: "Startseite",
    path: "/",
    children: [
        globalNavigationConfig,
        {
            id: uuid(),
            type: CmsObjectTypes.Headline,
            settings: { title: "Bachelor Prototyp" },
            children: []
        },
        {
            id: uuid(),
            type: CmsObjectTypes.Section,
            settings: {},
            children: [
                {
                    id: uuid(),
                    type: CmsObjectTypes.Text,
                    settings: { text: "Dies ist der Prototy, welcher im laufe einer Bachelorarbeit an der Hochschule Darmstadt entstanden ist. Dieser Prototyp untersuch Serverseitiges Rendern in einem Content Management System." },
                    children: []  
                },
            ]
        }
    ]
}