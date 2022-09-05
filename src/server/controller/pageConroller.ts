import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import rendererPage from "../../utils/renderer";
import parseObjectTree, { ParseType } from "../..//utils/objectTreeParser";
import pathGenerator from "../../utils/pathGenerator";

export const getPageData = async (req: Request, res: Response) => {

    const { path: _path } = req.query;

    if(!_path) {
        res.status(400).json({
            status: "bad_request",
            message: "path param required.",
        });
        return;
    }

    const sitePath = pathGenerator(_path);

    await fs.promises.access(sitePath).catch(err => {
        res.status(404).sendFile(path.join(__dirname, "..", "..", "..", "build", "404", "index.html"));
        return;
    })

    const initData = JSON.parse((await fs.promises.readFile(path.join(sitePath, "data.json"))).toString());
    const pageData = JSON.parse((await fs.promises.readFile(path.join(sitePath, "pageData.json"))).toString());
    const { data, components, usesSsg, usesSsr, usesIsr } = await parseObjectTree(pageData, ParseType.REQUEST, initData);
    
    let _data = data;
    if(usesSsg || usesIsr) {
        _data = {
            ...initData,
            ...data, 
        }
    }

    const formattedData = {}
    Object.keys(_data).forEach(key => {
        formattedData[key] = _data[key].data;
    });

    res.status(200).json({
        status: "success",
        data: {
            components,
            pageData: formattedData,
            title: pageData.title
        }
    });

    const html = rendererPage(components, _data, pageData.title);

    if(!usesSsr) {      
        await fs.promises.writeFile(path.join(sitePath, "index.html"), html);
        await fs.promises.writeFile(path.join(sitePath, "data.json"), JSON.stringify(_data));
    }
    
}
export const getPageDataCsr = async (req: Request, res: Response) => {

    const { path: _path } = req.query;

    if(!_path) {
        res.status(400).json({
            status: "bad_request",
            message: "path param required.",
        });
        return;
    }

    const sitePath = pathGenerator(_path);

    await fs.promises.access(sitePath).catch(err => {
        res.status(404).sendFile(path.join(__dirname, "..", "..", "..", "build", "404", "index.html"));
        return;
    })

    const pageData = JSON.parse((await fs.promises.readFile(path.join(sitePath, "pageData.json"))).toString());
    const { components } = await parseObjectTree(pageData, ParseType.CSR);

    res.status(200).json({
        status: "success",
        data: {
            components,
            title: pageData.title
        }
    });
    
}