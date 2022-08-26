import { Request, Response } from "express";
import fs from "fs";
import path from "path";
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

    const pageData = JSON.parse((await fs.promises.readFile(path.join(sitePath, "pageData.json"))).toString());
    const { data, components, usesSsg, usesSsr } = await parseObjectTree(pageData, ParseType.SSR);
    
    let _data = data;
    if(usesSsg) {
        _data = {
            ...JSON.parse((await fs.promises.readFile(path.join(sitePath, "data.json"))).toString()),
            ...data, 
        }
    }

    res.status(200).json({
        status: "success",
        data: {
            components,
            pageData: _data,
            title: pageData.title
        }
    });
    
}