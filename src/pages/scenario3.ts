import { CmsObjectTypes } from "../cmsobjects";
import { v4 as uuid } from "uuid";
import globalNavigationConfig from "../utils/globalNavigationConfig";

export default {
    title: "Startseite",
    path: "/szenario3",
    children: [
        globalNavigationConfig,
        {
            id: uuid(),
            type: CmsObjectTypes.Headline,
            settings: { title: "Angebote Für Protugal" },
            children: []
        },
        {
            id: uuid(),
            type: CmsObjectTypes.Section,
            settings: {},
            children: [
                {
                    id: uuid(),
                    type: CmsObjectTypes.Grid,
                    settings: {},
                    children: [
                        {
                            id: uuid(),
                            type: CmsObjectTypes.Teaser,
                            settings: {
                                hotelId: 4
                            },
                            children: []
                        },
                        {
                            id: uuid(),
                            type: CmsObjectTypes.Teaser,
                            settings: {
                                hotelId: 14
                            },
                            children: []
                        },
                    ]
                },
            ]
        },
        {
            id: uuid(),
            type: CmsObjectTypes.Section,
            settings: {},
            children: [
                {
                    id: uuid(),
                    type: CmsObjectTypes.Grid,
                    settings: {},
                    children: [
                        {
                            id: uuid(),
                            type: CmsObjectTypes.Text,
                            settings: { text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." },
                            children: []
                        },
                        {
                            id: uuid(),
                            type: CmsObjectTypes.Text,
                            settings: { text: "Lorem ipsum dolor sit amet, consetetur sadipscing erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." },
                            children: []
                        },
                    ]
                },
            ]
        },
        {
            id: uuid(),
            type: CmsObjectTypes.Section,
            settings: {},
            children: [
                {
                    id: uuid(),
                    type: CmsObjectTypes.Grid,
                    settings: {},
                    children: [
                        {
                            id: uuid(),
                            type: CmsObjectTypes.Teaser,
                            settings: {
                                hotelId: 24
                            },
                            children: []
                        },
                        {
                            id: uuid(),
                            type: CmsObjectTypes.Teaser,
                            settings: {
                                hotelId: 34
                            },
                            children: []
                        },
                    ]
                },
            ]
        },
    ]
}