import { config } from "../../package.json";
import { unregisterToolkitResources } from "./toolkit";

export function cleanupAddon(notifierID?: string) {
  unregisterNotifier(notifierID);
  unregisterToolkitResources();
  removeInjectedUI();
  disposeAddonGlobal();
}

function unregisterNotifier(notifierID?: string) {
  if (notifierID) {
    Zotero.Notifier.unregisterObserver(notifierID);
  }
}

function removeInjectedUI() {
  document.querySelector("#zotero-style-show-hide-graph-view")?.remove();

  const tagSelector = document.querySelector(".tag-selector") as
    | HTMLDivElement
    | undefined;
  if (tagSelector) {
    tagSelector.style.display = "";
  }
}

function disposeAddonGlobal() {
  addon.data.alive = false;
  delete Zotero[config.addonInstance];
}
