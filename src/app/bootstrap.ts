import { BasicTool } from "zotero-plugin-toolkit/dist/basic";
import { config } from "../../package.json";
import Addon from "../addon";
import { configureToolkit } from "./toolkit";

const basicTool = new BasicTool();

export function bootstrapAddon() {
  const ZoteroGlobal = basicTool.getGlobal("Zotero");

  if (ZoteroGlobal[config.addonInstance]) {
    return;
  }

  installGlobals();

  _globalThis.addon = new Addon();
  _globalThis.ztoolkit = addon.data.ztoolkit;
  configureToolkit(addon);

  Zotero[config.addonInstance] = addon;
  addon.hooks.onStartup();
}

function installGlobals() {
  _globalThis.Zotero = basicTool.getGlobal("Zotero");
  _globalThis.ZoteroPane = basicTool.getGlobal("ZoteroPane");
  _globalThis.Zotero_Tabs = basicTool.getGlobal("Zotero_Tabs");
  _globalThis.window = basicTool.getGlobal("window");
  _globalThis.document = basicTool.getGlobal("document");
}
