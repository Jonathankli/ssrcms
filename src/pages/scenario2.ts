import { CmsObjectTypes } from "../cmsobjects";
import { v4 as uuid } from "uuid";
import globalNavigationConfig from "../utils/globalNavigationConfig";

export default {
    title: "Blog",
    path: "/szenario2",
    children: [
        globalNavigationConfig,
        {
            id: uuid(),
            type: CmsObjectTypes.Article,
            settings: { articleId: 4 },
            children: []
        },
    ]
}