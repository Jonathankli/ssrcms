import { CmsObjectTypes } from "../cmsobjects";
import { v4 as uuid } from "uuid";

export default {
    title: "Startseite",
    path: "/",
    children: [
        {
            id: uuid(),
            type: CmsObjectTypes.Headline,
            settings: { title: "Hochschule Darmstadt" },
            children: []
        },
        {
            id: uuid(),
            type: CmsObjectTypes.DynHeadline,
            settings: { title: "Hochschule Darmstadt Dyn" },
            children: []
        }
    ]
}