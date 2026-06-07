import fs from "fs";
import path from "path";
import type { BuildOptions } from "esbuild";
import { Config } from "zotero-plugin-scaffold";
import pkg from "../package.json" with { type: "json" };

const buildDir = "builds";

export default function loadConfig(isDevBuild = false) {
  const define = {
    author: pkg.author,
    description: pkg.description,
    homepage: pkg.homepage,
    buildVersion: pkg.version,
    buildTime: "{{buildTime}}",
    ...pkg.config,
  };

  const bootstrapBundle: BuildOptions = {
    entryPoints: ["src/index.ts"],
    define: {
      __env__: JSON.stringify(isDevBuild ? "development" : "production"),
    },
    bundle: true,
    outfile: path.join(buildDir, "addon/chrome/content/scripts/index.js"),
    target: "firefox102",
  };

  const prefsBundle: BuildOptions = {
    entryPoints: ["addon/prefs.js"],
    define: {
      __env__: JSON.stringify(isDevBuild ? "development" : "production"),
    },
    bundle: true,
    outfile: path.join(buildDir, "addon/prefs.js"),
    target: "firefox102",
  };

  const graphUIBundle: BuildOptions = {
    entryPoints: ["src/ui/graph/index.tsx"],
    bundle: true,
    outfile: path.join(buildDir, "addon/chrome/content/dist/assets/app.js"),
    loader: {
      ".css": "css",
    },
    target: "firefox102",
    format: "iife",
  };

  return Config.loadConfig({
    source: ["src", "addon"],
    name: pkg.config.addonName,
    id: pkg.config.addonID,
    namespace: pkg.name,
    xpiName: pkg.name,
    dist: buildDir,
    updateURL: pkg.config.updaterdf,
    xpiDownloadLink: pkg.config.releasepage,
    build: {
      assets: ["addon/**/*", "!addon/install.rdf", "!addon/chrome.manifest"],
      define,
      esbuildOptions: [bootstrapBundle, prefsBundle, graphUIBundle],
      fluent: {
        dts: false,
      },
      prefs: {
        prefix: "extensions.zotero.zoterostyle",
        dts: false,
      },
      makeManifest: {
        enable: true,
        template: {
          manifest_version: 2,
          name: pkg.config.addonName,
          version: pkg.version,
          description: pkg.description,
          homepage_url: pkg.homepage,
          author: pkg.author,
          icons: {
            "32": "chrome/content/icons/favicon@32x32.png",
            "48": "chrome/content/icons/favicon.png",
            "96": "chrome/content/icons/favicon.png",
          },
          applications: {
            zotero: {
              id: pkg.config.addonID,
              update_url: pkg.config.updaterdf,
              strict_min_version: "7.0",
              strict_max_version: "10.1",
            },
          },
        },
      },
      makeUpdateJson: {
        updates: [],
        hash: false,
      },
      hooks: {
        "build:bundle": () => {
          prepareLegacyGraphEngine();
        },
        "build:done": () => {
          fs.copyFileSync(
            path.join(buildDir, "update.json"),
            path.join("update.json")
          );
        },
      },
    },
  });
}

function prepareLegacyGraphEngine() {
  const legacyBundle = path.join(
    buildDir,
    "addon/chrome/content/dist/assets/index.js"
  );
  const engineBundle = path.join(
    buildDir,
    "addon/chrome/content/dist/assets/graph-engine.js"
  );

  const source = fs.readFileSync(legacyBundle, "utf8");
  const marker = "window.data =";
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) {
    throw new Error("Unable to extract graph engine from legacy bundle.");
  }

  fs.writeFileSync(engineBundle, source.slice(0, markerIndex));
}
