const fs = require("fs");
const path = require("path");

const EXTENSIONS = [".js", ".ts", ".jsx", ".tsx"];
const IGNORE_DIRS = ["node_modules", ".next", "dist", "build"];
const IGNORE_FILES = ["package.json", "package-lock.json", "yarn.lock"];

// Строгая регулярка: ищет строки `import ... from '...'` и удаляет только версию после @
const importRegex = /^(import\s.+?from\s+["'])(@?[^"'@]+(?:\/[^"'@]+)*?)@\d+(?:\.\d+)*(["'])/gm;
const sideEffectRegex = /^(import\s+["'])(@?[^"'@]+(?:\/[^"'@]+)*?)@\d+(?:\.\d+)*(["'])/gm;

function walk(dir, callback) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!IGNORE_DIRS.includes(entry.name)) walk(fullPath, callback);
    } else if (
      EXTENSIONS.includes(path.extname(entry.name)) &&
      !IGNORE_FILES.includes(entry.name)
    ) {
      callback(fullPath);
    }
  });
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");

  const replaced = content
    .replace(importRegex, `$1$2$3`)        // обрабатывает import ... from '...'
    .replace(sideEffectRegex, `$1$2$3`);  // обрабатывает import '...'

  if (replaced !== content) {
    fs.writeFileSync(filePath, replaced, "utf-8");
    console.log(`🛠 Обновлен: ${filePath}`);
  }
}

function run() {
  const rootDir = process.cwd();
  console.log(`🔍 Сканирование каталога: ${rootDir}`);
  walk(rootDir, processFile);
  console.log("✅ Завершено.");
}

run();
