import Views from "../modules/views";

export async function handleReaderTabSelected(views: Views | undefined) {
  if (!views) {
    return;
  }

  window.setTimeout(async () => {
    ztoolkit.log("select reader tab");
    const reader = await ztoolkit.Reader.getReader();
    views.modifyAnnotationColors(reader);
  });
}
