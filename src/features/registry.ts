import Views from "../modules/views";
import { registerViews } from "./views";
import { ZoteroStyleStorage } from "../storage";

export interface FeatureRegistry {
  views: Views;
}

export async function registerFeatures(
  storage: ZoteroStyleStorage
): Promise<FeatureRegistry> {
  const views = await registerViews(storage);

  return { views };
}
