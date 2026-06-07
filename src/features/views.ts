import Views from "../modules/views";
import { ZoteroStyleStorage } from "../storage";
import { registerViewCommands, registerViewExtensions } from "./viewExtensions";

export async function registerViews(storage: ZoteroStyleStorage) {
  const views = new Views(storage);
  await registerViewExtensions(views);
  await registerViewCommands(views);

  return views;
}
