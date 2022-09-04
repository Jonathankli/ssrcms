import { Request, Response } from "express";
import pathGenerator from "../../utils/pathGenerator";
import fs from "fs";
import path from "path";

const csrController = async (req: Request, res: Response) => {
    const sitePath = pathGenerator(req.originalUrl);

    await fs.promises.access(sitePath).catch(err => {
        res.status(404).sendFile(path.join(__dirname, "..", "..", "..", "build", "404", "index.html"));
        return;
    })

    res.sendFile(path.join(sitePath, "index.html"))
}

export default csrController;