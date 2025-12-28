import fs from "fs";
import path from "path";

export function loadFromDir(relativeDir) {
  const dirPath = path.join(process.cwd(), relativeDir);
  const files = fs.readdirSync(dirPath);

  return files.map((file) => {
    const filePath = path.join(dirPath, file);
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  });
}

export function loadModels() {
  return loadFromDir("src/content/models");
}

export function loadTools() {
  return loadFromDir("src/content/tools");
}
