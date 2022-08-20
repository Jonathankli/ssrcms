import express from 'express'
import pathGenerator from "../utils/pathGenerator";
import fs from "fs";
import path from "path";
import parseObjectTree, { ParseType } from '../utils/objectTreeParser';
import rendererPage from '../renderer/renderer';
const app = express();
const port = 3000

app.use("/assets", express.static(path.join(__dirname, "..", "..", "build", "assets")));

app.get('*', async (req, res) => {
    const sitePath = pathGenerator(req.originalUrl);

    await fs.promises.access(sitePath).catch(err => {
        res.sendFile(path.join(__dirname, "..", "..", "build", "404", "index.html"));
        return;
    })

    const files = await fs.promises.readdir(sitePath);
    if(files.includes("index.html")) {
        res.sendFile(path.join(sitePath, "index.html"))
        return;
    }

    const pageData = (await fs.promises.readFile(path.join(sitePath, "pageData.json"))).toString();
    const { data, components, usesSsg, usesSsr } = await parseObjectTree(JSON.parse(pageData), ParseType.SSR);

    let combinedData = data;
    
    if(usesSsg) {
        const ssgData = await fs.promises.readFile(path.join(sitePath, "data.json"));
        combinedData = {
            ...JSON.parse(ssgData.toString()),
            ...combinedData
        }        
    }

    const html = rendererPage(components, combinedData);

    res.send(html);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

