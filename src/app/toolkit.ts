import { config } from "../../package.json";
import Addon from "../addon";

export function configureToolkit(addonInstance: Addon) {
  const toolkit = addonInstance.data.ztoolkit;

  toolkit.basicOptions.log.prefix = `[${config.addonName}]`;
  toolkit.basicOptions.log.disableConsole =
    addonInstance.data.env === "production";
  toolkit.UI.basicOptions.ui.enableElementJSONLog = false;
}

export function unregisterToolkitResources() {
  ztoolkit.unregisterAll();
  ztoolkit.UI.unregisterAll();
  ztoolkit.ItemTree.unregisterAll();
}
