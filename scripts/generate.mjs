import fs from "fs";

const customTokensDir = "./tokens/custom/";
const logoBaseURI =
  "https://raw.githubusercontent.com/rango-exchange/rango-token-list/main/tokens/custom";

const projectsList = fs.readdirSync(customTokensDir);
const template = JSON.parse(fs.readFileSync("./templates/token-list.json"));

const projects = [];
for (let i = 0; i < projectsList.length; i++) {
  const projectName = projectsList[i];
  const projectTokens = JSON.parse(
    fs.readFileSync(`${customTokensDir}${projectName}/manifest.json`)
  );
  for (const token of projectTokens) {
    token["logoURI"] = `${logoBaseURI}/${projectName}/icon.png`;
  }
  projects.push(projectTokens);
}

template["tokens"] = projects
  .flat()
  .sort((t1, t2) => (t1.chainId > t2.chainId ? 1 : -1));
template["timestamp"] = new Date();

fs.writeFileSync(
  "./dest/rango-custom-tokens.json",
  JSON.stringify(template, undefined, 2)
);
