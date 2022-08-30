import { Request, Response } from "express";
import pathGenerator from "../../utils/pathGenerator";
import fs from "fs";
import path from "path";
import parseObjectTree, { ParseType } from '../../utils/objectTreeParser';
import rendererPage from '../../utils/renderer';

const renderController = async (req: Request, res: Response) => {
    const sitePath = pathGenerator(req.originalUrl);

    await fs.promises.access(sitePath).catch(err => {
        res.status(404).sendFile(path.join(__dirname, "..", "..", "..", "build", "404", "index.html"));
        return;
    })

    const ssgData = JSON.parse((await fs.promises.readFile(path.join(sitePath, "data.json"))).toString());
    const pageData = JSON.parse((await fs.promises.readFile(path.join(sitePath, "pageData.json"))).toString());
    const { data, components, usesSsg, usesSsr, usesIsr } = await parseObjectTree(pageData, ParseType.REQUEST, ssgData);

    if(!usesSsr && !Object.keys(data).length) {
        res.sendFile(path.join(sitePath, "index.html"))
        return;
    }

    let combinedData = data;
    
    if(usesSsg || usesIsr) {
        combinedData = {
            ...ssgData,
            ...combinedData
        }     
    }

    const html = rendererPage(components, combinedData, pageData.title);

    res.send(html);

    if(!usesSsr) {      
        await fs.promises.writeFile(path.join(sitePath, "index.html"), html);
        await fs.promises.writeFile(path.join(sitePath, "data.json"), JSON.stringify({
            ...ssgData,
            ...combinedData
        }));
    }
}

export default renderController;