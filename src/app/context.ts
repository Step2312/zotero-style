import ZoteroToolkit from "zotero-plugin-toolkit/dist";
import Events from "../modules/events";
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
  events?: Events;
  views?: Views;
}

export function createAddonData(): AddonData {
  return {
    alive: true,
    env: __env__,
    ztoolkit: new ZoteroToolkit(),
  };
}
