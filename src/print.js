export default function mainPage() {
  const mainText = elFactory("h1", { class: "main-text" }, "page main text");
  const itemDiv = elFactory("div", { class: "item-div" });
  const main = elFactory("main", {});

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
