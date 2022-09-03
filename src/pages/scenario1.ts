import { CmsObjectTypes } from "../cmsobjects";
import { v4 as uuid } from "uuid";
import globalNavigationConfig from "../utils/globalNavigationConfig";

export default {
    title: "Landingpage",
    path: "/szenario1",
    children: [
        globalNavigationConfig,
        {
            id: uuid(),
            type: CmsObjectTypes.Headline,
            settings: { title: "Das ist die Test GmbH" },
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
            settings: {
                color: "#ccc"
            },
            children: [
                {
                    id: uuid(),
                    type: CmsObjectTypes.Headline,
                    settings: { title: "Werde teil des Teams", type: "h2" },
                    children: []
                },
                {
                    id: uuid(),
                    type: CmsObjectTypes.Grid,
                    settings: {},
                    children: [
                        {
                            id: uuid(),
                            type: CmsObjectTypes.Image,
                            settings: {
                                src: "https://picsum.photos/id/1/200/300",
                                alt: "Arbeit"
                            },
                            children: []
                        },
                        {
                            id: uuid(),
                            type: CmsObjectTypes.Text,
                            settings: {
                                text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
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
                    type: CmsObjectTypes.Headline,
                    settings: { title: "Teamwork!", type: "h2" },
                    children: []
                },
                {
                    id: uuid(),
                    type: CmsObjectTypes.Text,
                    settings: {
                        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                    },
                    children: []
                },
            ]
        },
    ]
}