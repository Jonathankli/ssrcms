import { CmsObjectTypes } from "../cmsobjects";
import { v4 as uuid } from "uuid";
import globalNavigationConfig from "../utils/globalNavigationConfig";

export default {
    title: "Startseite",
    path: "/szenario4",
    children: [
        globalNavigationConfig,
        {
            id: uuid(),
            type: CmsObjectTypes.Hoteldetail,
            settings: {
                hotelId: 4,
            },
            children: []
        }
    ]
}