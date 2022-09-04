export const CmsObjectTypes = Object.freeze({
    Headline: "Headline",
    Text: "Text",
    Section: "Section",
    Image: "Image",
    Grid: "Grid",
    Navi: "Navi",
    Teaser: "Teaser",
    Article: "Article",
    Hoteldetail: "Hoteldetail",
})

export default {
    Headline: require("./headline/Headline.js"),
    Text: require("./text/Text.js"),
    Section: require("./section/Section.js"),
    Grid: require("./grid/Grid.js"),
    Navi: require("./navi/Navi.js"),
    Teaser: require("./teaser/Teaser.js"),
    Image: require("./image/Image.js"),
    Article: require("./article/Article.js"),
    Hoteldetail: require("./hoteldetail/Hoteldetail.js"),
}