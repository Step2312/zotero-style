import Views from "../modules/views";
import { ZoteroStyleStorage } from "../storage";

export async function registerViews(storage: ZoteroStyleStorage) {
  const views = new Views(storage);
  const tasks = [
    views.createGraphView(),
    views.renderTitleColumn(),
    views.createTagsColumn(),
    views.createTextTagsColumn(),
    views.createProgressColumn(),
    views.createIFColumn(),
    views.createPublicationTagsColumn(),
    views.createRatingColumn(),
    views.initItemSelectListener(),
    views.addNumberToCollectionTree(),
    views.renderCreatorColumn(),
    views.renderPublicationColumn(),
  ];

  try {
    await Promise.all(tasks);
  } catch (e) {
    ztoolkit.log("ERROR", e);
  }

  await views.registerSwitchColumnsViewUI();
  await views.initTags();
  await views.registerCommands();

  return views;
}
