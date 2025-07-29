const fs = require("fs");
const path = require("path");

// Папка с компонентами
const componentsDir = path.join(__dirname, "src/components/ui");

const externalPackages = new Set();

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const importRegex = /^import\s+.*?from\s+['"](.*?)['"]/gm;
  let match;

  while ((match = importRegex.exec(content)) !== null) {
    const source = match[1];
    // Внешняя зависимость — не начинается с ".", "..", "@/..."
    if (!source.startsWith(".") && !source.startsWith("@/") && !source.startsWith("/")) {
      const pkgName = getPackageName(source);
      externalPackages.add(pkgName);
    }
  }
}

function getPackageName(importPath) {
  if (importPath.startsWith("@")) {
    // Например: @radix-ui/react-accordion → @radix-ui/react-accordion
    const [scope, name] = importPath.split("/");
    return `${scope}/${name}`;
  }
  // Например: lucide-react → lucide-react
  return importPath.split("/")[0];
}

function walkDir(dirPath) {
  const entries = fs.readdirSync(dirPath);
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (entry.endsWith(".ts") || entry.endsWith(".tsx")) {
      scanFile(fullPath);
    }
  }
}

// Запускаем обход
walkDir(componentsDir);

// Выводим список внешних зависимостей
console.log("📦 Используемые внешние зависимости:");
console.log([...externalPackages].sort().join("\n"));
