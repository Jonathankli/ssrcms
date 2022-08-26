export const CmsObjectTypes = Object.freeze({
    Headline: "Headline",
    Text: "Text",
    Section: "Section",
})

export default {
    Headline: require("./headline/Headline.js"),
    Text: require("./text/Text.js"),
    Section: require("./text/Section.js"),
}