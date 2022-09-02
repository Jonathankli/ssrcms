import { CmsObjectTypes } from "../cmsobjects";
import { v4 as uuid } from "uuid";

export default {
    title: "Startseite",
    path: "/",
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
            settings: { title: "Hochschule Darmstadt" },
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
                                hotelId: 40930
                            },
                            children: []
                        },
                        {
                            id: uuid(),
                            type: CmsObjectTypes.Teaser,
                            settings: {
                                hotelId: 136581
                            },
                            children: []
                        },
                    ]
                },
            ]
        },
    ]
}