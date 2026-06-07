import ZoteroToolkit from "zotero-plugin-toolkit/dist";
import Views from "../modules/views";
import { ZoteroStyleStorage } from "../storage";

export interface AddonData {
  alive: boolean;
  env: "development" | "production";
  ztoolkit: ZoteroToolkit;
  locale?: {
    stringBundle: any;
  };
  prefs?: {
    window: Window;
  };
  storage?: ZoteroStyleStorage;
  views?: Views;
}

export function createAddonData(): AddonData {
  return {
    alive: true,
    env: __env__,
    ztoolkit: new ZoteroToolkit(),
  };
}
