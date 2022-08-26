export const CmsObjectTypes = Object.freeze({
    Headline: "Headline",
    Text: "Text",
    Section: "Section",
    Grid: "Grid",
})

export default {
    Headline: require("./headline/Headline.js"),
    Text: require("./text/Text.js"),
    Section: require("./section/Section.js"),
    Grid: require("./grid/Grid.js"),
}