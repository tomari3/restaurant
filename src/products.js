export default function products() {
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

  const mainText = elFactory(
    "h1",
    { class: "main-text" },
    "take a look around our pastries"
  );
  const itemDiv = elFactory("div", { class: "item-div" });
  const main = elFactory("main", { id: "products" });

  const leftBtn = elFactory("button", { id: "left-btn" }, "⁖");
  const rightBtn = elFactory("button", { id: "right-btn" }, "⁖");
  const overlayText = elFactory(
    "h1",
    { class: "img-header" },
    "french croissant"
  );
  const descriptionText = elFactory(
    "p",
    { class: "description-text" },
    "this delicious croissant was unfortunately hard-coded into this website, our bakery sure plans to make it's description dynamic in future projects, stay tuned! "
  );
  const currentImage = elFactory("div", {});
  const img1 = elFactory("div", { class: "img-container" });
  const imgDesc = elFactory("div", { class: "img-desc" });

  imgDesc.append(overlayText, descriptionText);
  currentImage.append(img1, imgDesc);
  itemDiv.append(leftBtn, currentImage, rightBtn);

  main.append(mainText, itemDiv);

  return main;
}
