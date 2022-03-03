export default function recipes() {
  const elFactory = (type, attributes, ...children) => {
    const el = document.createElement(type);
    for (let key in attributes) {
      el.setAttribute(key, attributes[key]);
    }
    children.forEach((child) => {
      if (typeof child === "string") {
        el.appendChild(document.createTextNode(child));
      } else {
        el.appendChild(child);
      }
    });
    return el;
  };

  const mainText = elFactory("h1", { class: "main-text" }, "page main text");
  const itemDiv = elFactory("div", { class: "item-div" });
  const main = elFactory("main", { id: "recipes" });

  const leftBtn = elFactory("button", { id: "left-btn" });
  const rightBtn = elFactory("button", { id: "right-btn" });
  const overlayText = elFactory(
    "h1",
    { class: "overlay-text" },
    "Image Description"
  );
  const descriptionText = elFactory(
    "p",
    { class: "description-text" },
    "More Description"
  );
  itemDiv.append(leftBtn, overlayText, descriptionText, rightBtn);

  main.append(mainText, itemDiv);

  return main;
}
