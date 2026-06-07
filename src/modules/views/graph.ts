import { config } from "../../../package.json";
import GraphView from "../graphView";

export async function createGraphView() {
  if (!Zotero.Prefs.get(`${config.addonRef}.function.graphView.enable`) as boolean) {
    return;
  }
  await new GraphView().init();
}
