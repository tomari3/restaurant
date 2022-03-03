export default function order() {
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

  const mainText = elFactory("h1", { class: "main-text" }, "home sweet home");
  const itemDiv = elFactory("div", { class: "item-div" });
  const main = elFactory("main", { id: "order" });

  const onlineOrderSection = elFactory("section", {
    id: "online-order-container",
  });
  const onlineTitle = elFactory("h2", {}, "easily order online");
  const itemHeader = elFactory(
    "h3",
    { class: "item-header" },
    "great piece of dough"
  );
  const menuItemDiv = elFactory("div", { class: "menu-item" });
  const menuImg = elFactory("div", { class: "menu-img" });
  const menuTextDiv = elFactory("div", { class: "menu-text" });
  const menuText = elFactory(
    "p",
    { class: "menu-text" },
    "this is an example, you cant actually order, bummer.. I know"
  );
  const addButton = elFactory("button", { class: "add-button" }, "add");
  const amount = elFactory("input", {
    type: "number",
    class: "amount",
    value: "1",
  });

  const imgButtons = elFactory("div", { class: "img-btn" });
  imgButtons.append(amount, addButton);
  const imgAndText = elFactory("div", { class: "img-and-text-div" });
  menuTextDiv.append(menuText, imgButtons);
  imgAndText.append(itemHeader, menuImg);
  menuItemDiv.append(imgAndText, menuTextDiv);
  let menuItemDiv1 = menuItemDiv.cloneNode(true);
  let menuItemDiv2 = menuItemDiv.cloneNode(true);
  let menuItemDiv3 = menuItemDiv.cloneNode(true);
  let menuItemDiv4 = menuItemDiv.cloneNode(true);
  onlineOrderSection.append(
    onlineTitle,
    menuItemDiv,
    menuItemDiv1,
    menuItemDiv2,
    menuItemDiv3
  );

  const phoneSection = elFactory("section", { id: "phone-details-container" });
  const callUs = elFactory("h2", {}, "or call us");
  const detailsDiv = elFactory("div", { id: "phone-details" });
  const phoneNumbers = elFactory(
    "p",
    { class: "phone-number" },
    "052-8375392",
    "04-9486622"
  );
  const maybeArrive = elFactory("h2", { id: "arrive" }, "or come meet us");
  const addressDiv = elFactory("div", { id: "address" });
  const address = elFactory(
    "p",
    { class: "address" },
    "This place boulevard 23th main street"
  );
  addressDiv.append(maybeArrive, address);
  detailsDiv.append(phoneNumbers);
  phoneSection.append(callUs, detailsDiv, maybeArrive);

  const textDiv = elFactory("div", { class: "text-div" });

  textDiv.append(mainText);
  itemDiv.append(onlineOrderSection);

  main.append(textDiv, itemDiv);

  return main;
}
