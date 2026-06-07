import Events from "../modules/events";
import { ZoteroStyleStorage } from "../storage";

export function registerReaderProgress(storage: ZoteroStyleStorage) {
  const events = new Events(storage);
  events.onInit();
  return events;
}
