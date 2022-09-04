import publish from "./publish";
import publishCsr from "./publishCsr";
import fs from "fs";
import path from "path";

if(process.argv.length < 3) {    
    const pages = fs.readdirSync(path.join(__dirname, "..", "pages")).filter(page => {
        const p = page.split(".");
        return p.length === 2 && p.pop() === "js";
    }) 
    .map(file => path.join(__dirname, "..", "pages", file));
    publish(pages);
    publishCsr(pages);
} else {
    const page = path.join(__dirname, "..", "pages", process.argv[2]);
    publish([page]);
    publishCsr([page]);
}

