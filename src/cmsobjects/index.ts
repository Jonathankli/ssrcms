export const CmsObjectTypes = Object.freeze({
    Headline: "Headline",
    DynHeadline: "DynHeadline",
})

export default {
    Headline: require("./headline/Headline.js"),
    DynHeadline: require("./dynHeadline/Headline.js"),
}