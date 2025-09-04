import fs from "fs";
import path from "path";
const ALLOWED = new Set([".jpg",".tiff",".jpeg",".gif",".png"]);
export function listImagesFrom(folderUnderPublic){
    const abs = path.join(process.cwd(),"public", folderUnderPublic);

    const files = fs.readdirSync(abs,{withFileTypes: true})
        .filter((d) =>d.isFile())
        .map((d) => d.name)
        .filter((name) => ALLOWED.has(path.extname(name).toLowerCase()))
    return files.map((name => `/${folderUnderPublic}/${name}`));

}