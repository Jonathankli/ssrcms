export const CmsObjectTypes = Object.freeze({
    Headline: "Headline",
    Text: "Text",
})

export default {
    Headline: require("./headline/Headline.js"),
    Text: require("./text/Text.js"),
}