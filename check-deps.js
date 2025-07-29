// check-deps.js
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const chalk = require("chalk");
const { execSync } = require("child_process");

// Настройки:
const COMPONENTS_DIR = path.join(__dirname, "src", "components", "ui");
const AUTO_INSTALL = false;        // ← true = установить зависимости без вопросов
const ASK_BEFORE_INSTALL = true;  // ← false = не спрашивать

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, fileList);
    } else if (filePath.endsWith(".ts") || filePath.endsWith(".tsx")) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function extractImports(content) {
  const regex = /(?:import|require)\s+(?:[^'"]+from\s+)?["']([^'"]+)["']/g;
  const modules = new Set();
  let match;
  while ((match = regex.exec(content)) !== null) {
    const mod = match[1];
    if (mod.startsWith(".") || mod.startsWith("/") || mod.startsWith("next") || mod.startsWith("react") || mod.startsWith("@types")) continue;
    const parts = mod.split("@");
    const name = mod.startsWith("@")
      ? parts.slice(0, 2).join("@").split("/").slice(0, 2).join("/")
      : mod.split("/")[0];
    modules.add(name);
  }
  return modules;
}

function getInstalledDeps() {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  return { ...pkg.dependencies, ...pkg.devDependencies };
}

function askUser(q) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise(res => rl.question(q, ans => { rl.close(); res(ans); }));
}

(async () => {
  if (!fs.existsSync(COMPONENTS_DIR)) {
    console.error(chalk.red(`❌ Папка не найдена: ${COMPONENTS_DIR}`));
    process.exit(1);
  }

  const files = walkDir(COMPONENTS_DIR);
  const usedDeps = new Set();
  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const deps = extractImports(content);
    deps.forEach(dep => usedDeps.add(dep));
  }

  const installed = getInstalledDeps();
  const installedList = [];
  const missingList = [];

  for (const dep of usedDeps) {
    if (installed[dep]) {
      installedList.push(dep);
    } else {
      missingList.push(dep);
    }
  }

  console.log(chalk.bold("\n📦 Используемые зависимости:\n"));
  installedList.forEach(d => console.log(chalk.green(`+ ${d}`)));
  missingList.forEach(d => console.log(chalk.red(`- ${d}`)));

  if (!missingList.length) {
    console.log(chalk.greenBright("\n✅ Все зависимости уже установлены!\n"));
    return;
  }

  if (AUTO_INSTALL || ASK_BEFORE_INSTALL) {
    const q = ASK_BEFORE_INSTALL
      ? `\nУстановить отсутствующие зависимости? (${missingList.join(" ")}) [y/N]: `
      : "y";
    const ans = ASK_BEFORE_INSTALL ? await askUser(q) : "y";
    if (ans.toLowerCase() === "y") {
      console.log(chalk.yellow("\n📥 Устанавливаю..."));
      try {
        execSync(`npm install ${missingList.join(" ")}`, { stdio: "inherit" });
        console.log(chalk.green("\n✅ Установка завершена."));
      } catch (e) {
        console.error(chalk.red("❌ Ошибка при установке:"), e.message);
      }
    } else {
      console.log(chalk.gray("\n⏭ Установка отменена."));
    }
  }
})();
