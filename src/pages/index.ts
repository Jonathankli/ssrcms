import { v4 as uuid } from "uuid";

export default {
    title: "Startseite",
    path: "/",
    children: [
        {
            id: uuid(),
            type: "headline",
            settings: { title: "Hochschule Darmstadt" },
            children: []
        },
        {
            id: uuid(),
            type: "dynHeadline",
            settings: { title: "Hochschule Darmstadt Dyn" },
            children: []
        }
    ]
}