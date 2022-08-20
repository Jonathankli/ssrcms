export const CmsObjectTypes = Object.freeze({
    headline: "headline",
    dynHeadline: "dynHeadline",
})

export default {
    headline: require("./headline/Headline.js"),
    dynHeadline: require("./dynHeadline/Headline.js"),
}