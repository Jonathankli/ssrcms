import { CmsObjectTypes } from "../cmsobjects";
import { v4 as uuid } from "uuid";

export default {
    title: "404",
    path: "/404",
    children: [
        {
            id: uuid(),
            type: CmsObjectTypes.Headline,
            settings: { title: "404" },
            children: []
        },
    ]
}