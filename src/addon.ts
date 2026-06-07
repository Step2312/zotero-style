import ZoteroToolkit from "zotero-plugin-toolkit/dist"
import hooks from "./hooks";
import Events from "./modules/events";
import Views from "./modules/views";
import { ZoteroStyleStorage } from "./storage";

class Addon {
  public data: {
    alive: boolean;
    // Env type, see build.js
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
  };
  // Lifecycle hooks
  public hooks: typeof hooks;
 
  constructor() {
    this.data = {
      alive: true,
      env: __env__,
      ztoolkit: new ZoteroToolkit(),
    };
    this.hooks = hooks;
  }
}

export default Addon;
