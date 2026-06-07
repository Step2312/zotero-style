import { config } from "../../package.json";
import AddonItem from "../modules/item";
import LocalStorage from "../modules/localStorage";

export type ZoteroStyleStorage = AddonItem | LocalStorage;

export async function createStorage(): Promise<ZoteroStyleStorage | undefined> {
  const storageIn = Zotero.Prefs.get(`${config.addonRef}.storage.in`) as string;

  if (storageIn == "note") {
    Zotero._AddonItemGlobal = Zotero._AddonItemGlobal || new AddonItem();
    const addonItem = Zotero._AddonItemGlobal;
    if (!addonItem.item) {
      await addonItem.init();
    }
    return addonItem;
  }

  if (storageIn == "file") {
    const storage = new LocalStorage(
      Zotero.Prefs.get(`${config.addonRef}.storage.filename`) as string
    );
    await storage.lock.promise;
    return storage;
  }
}
