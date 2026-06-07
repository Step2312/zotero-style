import { exit, argv } from "process";
import { Build } from "zotero-plugin-scaffold";
import loadConfig from "./config.mts";

main().catch((error) => {
  console.error(error);
  exit(1);
});

async function main() {
  const isDevBuild = argv.includes("--dev");
  const config = await loadConfig(isDevBuild);
  const builder = new Build(config);
  await builder.run();
}
