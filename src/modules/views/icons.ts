import { config } from "../../../package.json";

export function replaceCellIcon(item: Zotero.Item, cellSpan: HTMLSpanElement) {
  const iconSpan = cellSpan.querySelector(".cell-icon") as HTMLSpanElement;
  const res = item.attachmentPath?.match(/\.(\w+)$/);
  if (!res || res.length != 2) {
    return;
  }

  switch (res[1]) {
    case "jpeg":
    case "png":
    case "jpg":
    case "gif":
      iconSpan.style.backgroundImage = `url(chrome://${config.addonRef}/content/icons/picture.png)`;
      break;
    case "zip":
    case "gz":
    case "tar":
      iconSpan.style.backgroundImage = `url(chrome://${config.addonRef}/content/icons/zip.png)`;
      break;
    case "doc":
    case "docx":
    case "docm":
      iconSpan.style.backgroundImage = `url(chrome://${config.addonRef}/content/icons/word.png)`;
      break;
    case "pptx":
    case "ppt":
    case "pptm":
      iconSpan.style.backgroundImage = `url(chrome://${config.addonRef}/content/icons/ppt.png)`;
      break;
    case "xls":
    case "xlsx":
    case "xltx":
      iconSpan.style.backgroundImage = `url(chrome://${config.addonRef}/content/icons/excel.png)`;
      break;
    default:
      break;
  }
}
