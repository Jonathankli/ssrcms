import { CmsObjectTypes } from "../cmsobjects";
import { v4 as uuid } from "uuid";

export default {
    title: "Test",
    path: "/test",
    children: [
        {
            id: uuid(),
            type: CmsObjectTypes.Headline,
            settings: { title: "Testseite" },
            children: []
        },
    ]
}