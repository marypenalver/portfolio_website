import fs from "fs";
import path from "path";

const folders = ["graduation", "portraits", "street", "home"]; //image folders
const basePath = path.join(process.cwd(), "public/images");

folders.forEach(folder => {
  const dir = path.join(basePath, folder);
  const files = fs
    .readdirSync(dir)
    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
    .sort();

  const outputPath = path.join(process.cwd(), "data", `${folder}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(files, null, 2));
  console.log(`✅ Generated ${outputPath}`);
});
