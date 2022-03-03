export default function contact() {
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

  const mainText = elFactory("h1", { class: "main-text" }, "how to reach us");
  const itemDiv = elFactory("div", { class: "item-div" });
  const main = elFactory("main", { id: "contact" });

  const mapDiv = elFactory("div", { id: "map-div" });
  const map = elFactory("h1", { id: "map" }, "MAP");
  mapDiv.append(map);
  const descriptionText = elFactory("div", { class: "info-container" });
  const phoneNumbers = elFactory("div", { class: "info" });
  const addresses = elFactory("div", { class: "info" });

  const numbersDiv = elFactory("div", { class: "numbers-div" });
  const phoneHeader = elFactory("h2", { class: "info-header" }, "call us");
  const number1 = elFactory("p", { class: "number" }, "055-9275391");
  const number2 = elFactory("p", { class: "number" }, "04-99123456");
  numbersDiv.append(number1, number2);
  phoneNumbers.append(phoneHeader, numbersDiv);

  const addressDiv = elFactory("div", { class: "address-div" });
  const addressHeader = elFactory(
    "h2",
    { class: "address-header" },
    "come meet us"
  );
  const address1 = elFactory(
    "p",
    { class: "address" },
    "here and there boulevard, 23st, Michigan"
  );
  const address2 = elFactory(
    "p",
    { class: "address" },
    "somewhere else, different address street, 12st"
  );

  addressDiv.append(address1, address2);
  addresses.append(addressHeader, addressDiv);

  descriptionText.append(phoneNumbers, addresses);
  itemDiv.append(mapDiv, descriptionText);

  main.append(mainText, itemDiv);

  return main;
}
