export default function aboutUs() {
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
    "loving family who loves to bake"
  );
  const itemDiv = elFactory("div", { class: "item-div" });
  const main = elFactory("main", { id: "about-us" });

  const imgDiv = elFactory("div", { id: "about-us-img" });
  const descriptionText = elFactory("div", { class: "description-text" });

  const descriptionHeader = elFactory(
    "h2",
    { class: "description-header" },
    "this is us"
  );
  const descriptionMore = elFactory(
    "p",
    { class: "description-text" },
    "loving family who like to bake for the likes of other and to make it accessible, tasty and fun for all those who are involved. the tradition started long time ago and is still alive and will be alive for ever ok cool"
  );

  const img = elFactory("div", {});
  imgDiv.append(img);
  descriptionText.append(descriptionHeader, descriptionMore);

  itemDiv.append(imgDiv, descriptionText);

  main.append(mainText, itemDiv);

  return main;
}
