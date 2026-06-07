import Events from "../modules/events";
import Views from "../modules/views";
import { registerReaderProgress } from "../features/readerProgress";
import { registerViews } from "../features/views";
import { ZoteroStyleStorage } from "../storage";

export interface FeatureRegistry {
  events: Events;
  views: Views;
}

export async function registerFeatures(
  storage: ZoteroStyleStorage
): Promise<FeatureRegistry> {
  const events = registerReaderProgress(storage);
  const views = await registerViews(storage);

  return { events, views };
}
