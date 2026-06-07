import Views from "../modules/views";

export async function registerViewExtensions(views: Views) {
  const registrations = [
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
    await Promise.all(registrations);
  } catch (e) {
    ztoolkit.log("ERROR", e);
  }
}

export async function registerViewCommands(views: Views) {
  await views.registerSwitchColumnsViewUI();
  await views.initTags();
  await views.registerCommands();
}
