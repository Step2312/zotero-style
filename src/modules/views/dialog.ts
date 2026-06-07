import { config } from "../../../package.json";

export function openStyleDialog(
  io: {
    attributes: {};
    element: XUL.Element;
    hooks: { accept?: Function; cancel?: Function };
  },
  width: number,
  height: number
) {
  // @ts-ignore
  window.openDialog(
    `chrome://${config.addonRef}/content/dialog.xul`,
    "zotero-style",
    `chrome,centerscreen,width=${width},height=${height},alwaysRaised=yes,resizable=yes`,
    io
  );
}
