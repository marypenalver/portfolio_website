import fs from "fs";
import path from "path";

const folders = ["graduation", "portraits", "street", "home",
//production portfolio
"production/chesscast", 
"production/adweek",
"production/nicholashoult",
"production/NYMLorde", 
"production/NYMLindsayLohan",
"production/NYMParkerPosey", 
"production/NYMAdamScott",
"production/NYMClaireDanes",
"production/NYMLolaTung", 
"production/NYMOwenCooper",
"production/NYMRachelZegler", 
"production/NYMWunmiMosaku",
"production/michaeljfox",
"production/michellewilliams",
"production/bowenyang"
]; // image folders
const basePath = path.join(process.cwd(), "public/images");

folders.forEach(folder => {
  const dir = path.join(basePath, folder);

  if (!fs.existsSync(dir)) {
    console.warn(`⚠️ Skipping missing folder: ${dir}`);
    fs.writeFileSync(path.join(process.cwd(), "data", `${folder}.json`), "[]");
    return;
  }

  const files = fs
    .readdirSync(dir)
    .filter(f => /\.(jpg|avif|jpeg|png|webp)$/i.test(f))
    .sort()
    .map(f => `/images/${folder}/${f}`); // ✅ prepend full path

  const outputPath = path.join(process.cwd(), "data", `${folder}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(files, null, 2));
  console.log(`✅ Generated ${outputPath}`);
});
