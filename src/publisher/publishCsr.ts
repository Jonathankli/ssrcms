import fs from "fs";
import pathGenerator from "../utils/pathGenerator";
import parseObjectTree, { ParseType } from "../utils/objectTreeParser";
import rendererPage from "../utils/renderer";

const publishPage = async (page, pagePath) => {
    
    try {
    
        const { components } = await parseObjectTree(page, ParseType.CSR);
    
        await fs.promises.mkdir(pathGenerator("/csr"+page.path), { recursive: true });
        await fs.promises.writeFile(pathGenerator("/csr"+page.path, "pageData.json"), JSON.stringify(page));

        const html = `
            <!DOCTYPE html>
            <html lang="de">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <script>
                    var initCmsObjectTree = ${JSON.stringify(components)};
                </script>
                <script defer src="assets/bundleCsr.js"></script>
            </head>
            <body style="padding: 0; margin: 0;">
                <div id="root"></div>
            </body>
            </html>
        `;

        await fs.promises.writeFile(pathGenerator("/csr"+page.path, "index.html"), html);
    
    } catch (error) {
        console.log("Error in Page: " + page.title, error);
    }

}

const publish = async pages => {
    console.log("Start Publish...");
    const promises = pages.map(page => {
        const pageData = require(page).default;
        console.log("Publish: " + pageData.title);
        return publishPage(pageData, page);
    });
    await Promise.allSettled(promises);

    console.log("Done Publishing.");

}

export default publish;