import { config } from "../../package.json";
import AddonItem from "../modules/item";

export type ZoteroStyleStorage = AddonItem;

export async function createStorage(): Promise<ZoteroStyleStorage | undefined> {
  Zotero.Prefs.set(`${config.addonRef}.storage.in`, "note");
  Zotero._AddonItemGlobal = Zotero._AddonItemGlobal || new AddonItem();
  const addonItem = Zotero._AddonItemGlobal;
  if (!addonItem.item) {
    await addonItem.init();
  }
  return addonItem;
}
