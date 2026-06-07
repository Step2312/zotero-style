import { config } from "../../package.json";
import { initLocale } from "../modules/locale";
import { registerPrefs, registerPrefsScripts } from "../preferences";
import { FeatureRegistry, registerFeatures } from "../features/registry";
import { createStorage, ZoteroStyleStorage } from "../storage";
import { cleanupAddon } from "./cleanup";

export class ZoteroStyleRuntime {
  private notifierID?: string;
  private storage?: ZoteroStyleStorage;
  private features?: FeatureRegistry;

  public async onStartup() {
    registerPrefs();
    this.registerNotifier();

    ztoolkit.ProgressWindow.setIconURI(
      "default",
      `chrome://${config.addonRef}/content/icons/favicon.png`
    );

    await this.waitForZotero();
    initLocale();

    this.storage = await createStorage();
    if (!this.storage) {
      return;
    }

    addon.data.storage = this.storage;
    ztoolkit.log(this.storage);

    this.features = await registerFeatures(this.storage);
    addon.data.views = this.features.views;

    this.refreshItemTree();
  }

  public onShutdown() {
    try {
      ztoolkit.log("zotero style onShutdown");
      cleanupAddon(this.notifierID);
    } catch (e) {
      console.log("ERROR onShutdown", e);
    }
  }

  public async onNotify(
    event: string,
    type: string,
    ids: Array<string>,
    extraData: { [key: string]: any }
  ) {
    ztoolkit.log("notify", event, type, ids, extraData);
  }

  public async onPrefsEvent(type: string, data: { [key: string]: any }) {
    switch (type) {
      case "load":
        registerPrefsScripts(data.window);
        break;
      default:
        return;
    }
  }

  private async waitForZotero() {
    await Promise.all([
      Zotero.initializationPromise,
      Zotero.unlockPromise,
      Zotero.uiReadyPromise,
    ]);
  }

  private registerNotifier() {
    window.addEventListener(
      "unload",
      () => {
        cleanupAddon(this.notifierID);
      },
      false
    );
  }

  private refreshItemTree() {
    try {
      ZoteroPane.itemsView.tree._columns._updateVirtualizedTable();
      ztoolkit.ItemTree.refresh();
    } catch {}
  }
}

const runtime = new ZoteroStyleRuntime();

export default runtime;
