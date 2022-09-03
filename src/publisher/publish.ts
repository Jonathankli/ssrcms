import fs from "fs";
import pathGenerator from "../utils/pathGenerator";
import parseObjectTree, { ParseType } from "../utils/objectTreeParser";
import rendererPage from "../utils/renderer";

const publishPage = async (page, pagePath) => {
    
    try {
        
        const { data, components, usesSsg, usesSsr } = await parseObjectTree(page, ParseType.PUBLISH);
    
        await fs.promises.mkdir(pathGenerator(page.path), { recursive: true });
        await fs.promises.writeFile(pathGenerator(page.path, "data.json"), JSON.stringify(data));
        await fs.promises.writeFile(pathGenerator(page.path, "pageData.json"), JSON.stringify(page));
        
        if(!usesSsr) {
            const html = rendererPage(components, data, page.title);
            await fs.promises.writeFile(pathGenerator(page.path, "index.html"), html);
        }
    
        if(usesSsr && fs.existsSync(pathGenerator(page.path, "index.html"))) {
            await fs.promises.unlink(pathGenerator(page.path, "index.html"));
        }

    } catch (error) {
        console.log("Error in Page: " + page.title, error);
    }

}

const publish = async pages => {
    console.log("Start Publish...");
    const promises = pages.map(page => {
        const pageData = require(page).default;
        console.log("Publish: " + pageData.title);
        publishPage(pageData, page);
    });
    await Promise.allSettled(promises);

    console.log("Done Publishing.");

}

export default publish;