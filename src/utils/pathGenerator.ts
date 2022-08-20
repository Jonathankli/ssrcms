import path from "path";

const pathGenerator = (_path, file: string = "") => {
    if(_path == "/") {
        return path.join(__dirname, "..", "..", "build", "index", file);
    }
    return path.join(__dirname, "..", "..", "build", ..._path.split("/"), file);
}

export default pathGenerator;