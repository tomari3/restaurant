export default function mainPage() {
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

  const textDiv = elFactory("div", { class: "text-div" });
  const introText = elFactory(
    "p",
    { id: "text-intro" },
    "introducing fresh flavour pairing"
  );
  const mainText = elFactory(
    "h1",
    { class: "main-text" },
    "baked",
    elFactory("span", {}, " with love, "),
    "just for you!"
  );

  const img1 = elFactory("div", { class: "img-container" });
  const img2 = elFactory("div", { class: "img-container" });
  const img3 = elFactory("div", { class: "img-container" });
  const img4 = elFactory("div", { class: "img-container" });
  const img5 = elFactory("div", { class: "img-container" });

  const imgDiv = elFactory("div", { class: "img-div" });
  const main = elFactory("main", { id: "main-page" });

  textDiv.append(introText, mainText);
  imgDiv.append(img1, img2, img3, img4, img5);

  main.append(textDiv, imgDiv);

  return main;
}
