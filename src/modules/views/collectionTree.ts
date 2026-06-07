import { config } from "../../../package.json";

export async function addNumberToCollectionTree(cache: { [key: string]: any }) {
  if (!Zotero.Prefs.get(`${config.addonRef}.function.addNumberToCollectionTree.enable`) as boolean) {
    return;
  }

  try {
    ztoolkit.patch(
      ZoteroPane.collectionsView,
      "renderItem",
      config.addonRef,
      (original) =>
        (index: number, selection: object, oldDiv: HTMLDivElement, columns: any[]) => {
          const div = original.call(ZoteroPane.collectionsView, index, selection, oldDiv, columns);
          const row = ZoteroPane.collectionsView.getRow(index);
          const ref = row.ref!;
          if (index > 0) {
            let key: string;
            try {
              key = JSON.stringify(ref.key || ref) + "collection-add-number";
            } catch {
              return div;
            }
            window.setTimeout(async () => {
              const getCollectionAllItemNumber = async (c: any) => {
                let s = (await c.getChildItems()).length;
                if (c.hasChildCollections()) {
                  const cs = c.getChildCollections();
                  for (let i = 0; i < cs.length; i++) {
                    s += await getCollectionAllItemNumber(cs[i]);
                  }
                }
                return s;
              };
              const setText = (text: string | undefined, force: boolean = false) => {
                if (text && ((!force && text != cache[key]) || force)) {
                  cache[key] = text;
                  const primary = div.querySelector(".primary");
                  const numberNode = primary.querySelector(".number");
                  if (numberNode) {
                    numberNode.innerHTML = text;
                  } else {
                    ztoolkit.UI.appendElement(
                      {
                        tag: "span",
                        classList: [config.addonRef],
                        styles: {
                          display: "inline-block",
                          flex: "1",
                        },
                      },
                      primary
                    );
                    ztoolkit.UI.appendElement(
                      {
                        tag: "span",
                        classList: [config.addonRef, "number"],
                        styles: {
                          marginRight: "6px",
                        },
                        properties: {
                          innerHTML: text,
                        },
                      },
                      primary
                    );
                  }
                }
              };

              if (key in cache) {
                setText(cache[key], true);
              }

              const modeKey = `${config.addonRef}.addNumberToCollectionTree.mode`;
              const mode = Number(Zotero.Prefs.get(modeKey) as string);
              let text: string | undefined = undefined;
              if (ref._ObjectType == "Collection") {
                const collection = ref;
                const childItemNumber = (await collection.getChildItems()).length;
                const offspringItemNumber = await getCollectionAllItemNumber(collection);
                switch (mode) {
                  case 0:
                    text = childItemNumber;
                    break;
                  case 1:
                    text = offspringItemNumber;
                    break;
                  case 2:
                    text =
                      childItemNumber != offspringItemNumber
                        ? `<span style="opacity: 0.5; margin-right: 6px;">${childItemNumber}</span>${offspringItemNumber}`
                        : childItemNumber;
                    break;
                  case 3:
                    text =
                      childItemNumber != offspringItemNumber
                        ? `<span style="opacity: 0.5; margin-right: 6px;">${offspringItemNumber}</span>${childItemNumber}`
                        : childItemNumber;
                    break;
                  default:
                    break;
                }
              } else {
                text = "";
              }
              setText(text as string);
            });
          }
          return div;
        }
    );
  } catch {}
}
