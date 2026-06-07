import { config } from "../../../package.json";

export function addItemTreeStyle() {
  document.querySelector("#odd-even-row-style")?.remove();
  const oddColor = Zotero.Prefs.get(`${config.addonRef}.titleColumn.odd`) as string;
  const evenColor = Zotero.Prefs.get(`${config.addonRef}.titleColumn.even`) as string;
  const selectedColor = Zotero.Prefs.get(`${config.addonRef}.titleColumn.selected`) as string;

  const styles = ztoolkit.UI.createElement(document, "style", {
    id: "odd-even-row-style",
    properties: {
      innerHTML:
        `
          [id^=item-tree-main-default-row]:nth-child(odd) {
            background-color: ${oddColor} !important;
          }
          [id^=item-tree-main-default-row]:nth-child(even) {
            background-color: ${evenColor} !important;
          }
          #zotero-items-tree .virtualized-table .row.selected, #zotero-items-tree .virtualized-table .row:active {
            ${selectedColor && selectedColor.length ? `background-color: ${selectedColor} !important` : ""}
          }
          #zotero-items-tree .virtualized-table .row:hover {
            ${selectedColor && selectedColor.length ? `background-color: ${selectedColor} !important` : ""}
          }
          .tag-box .tag-swatch {
            position: absolute;
            display: inline-block;
            height: .9em;
            width: .9em;
            border-radius: 100%;
            font-size: 1em;
          }
          .tag-box {
            display: inline-block;
            position: relative;
            height: 1em;
            line-height: 1em;
          }
          @-webkit-keyframes rotate{from{-webkit-transform: rotate(0deg)}
              to{-webkit-transform: rotate(360deg)}
          }
          @-moz-keyframes rotate{from{-moz-transform: rotate(0deg)}
              to{-moz-transform: rotate(359deg)}
          }
          @-o-keyframes rotate{from{-o-transform: rotate(0deg)}
              to{-o-transform: rotate(359deg)}
          }
          @keyframes rotate{from{transform: rotate(0deg)}
              to{transform: rotate(359deg)}
          }
          ` +
        (Zotero.isMac
          ? ""
          : `
          #zotero-style-show-hide-graph-view .toolbarbutton-icon {
            width: 16px;
            height: 16px;
          }
          `),
    },
  });
  document.documentElement.appendChild(styles);
}
