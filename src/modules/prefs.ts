import { config } from "../../package.json";

export function registerPrefs() {
  const prefOptions = {
    pluginID: config.addonID,
    src: rootURI + "chrome/content/preferences.xhtml",
    label: "Style",
    image: `chrome://${config.addonRef}/content/icons/favicon@32x32.png`,
    extraDTD: [`chrome://${config.addonRef}/locale/overlay.dtd`],
    defaultXUL: true,
  };
  ztoolkit.PreferencePane.register(prefOptions);
}

export function registerPrefsScripts(_window: Window) {
  addon.data.prefs = {
    window: _window,
  };
}
