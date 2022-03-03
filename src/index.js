import "./style.css";
import _ from "lodash";
import aboutUs from "./about-us";
import contact from "./contact";
import mainPage from "./mainpage";
import products from "./products";
import order from "./order";

(function Main() {
  const body = document.body;

  let pages = {
    current: [mainPage(), order(), products(), aboutUs(), contact()],
  };

  let myCompany = {
    name: "Strawberry pickles",
  };

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

  function header() {
    const contact = elFactory("button", { class: "header-link" }, "contact");
    const aboutUs = elFactory("button", { class: "header-link" }, "about us");
    const products = elFactory("button", { class: "header-link" }, "products");
    const order = elFactory("button", { class: "header-link" }, "order");
    const headerLogo = elFactory("h1", { id: "header-logo" }, myCompany.name);
    const linkList = elFactory(
      "div",
      { class: "link-list" },
      order,
      products,
      aboutUs,
      contact
    );
    const header = elFactory(
      "header",
      { class: "main-header" },
      headerLogo,
      linkList
    );
    return header;
  }

  function footer() {
    const odinLink = elFactory(
      "a",
      {
        href: "https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page",
        class: "footer-link",
      },
      "The Odin Project"
    );
    const githubLink = elFactory(
      "a",
      { href: "#", class: "footer-link" },
      "Github"
    );
    const inspoLink = elFactory(
      "a",
      { href: "https://www.nutmegnginger.com/", class: "footer-link" },
      'inspired by "Nutmeg n Ginger"'
    );

    const credit = elFactory(
      "a",
      { class: "footer-link" },
      "images from unsplash link in README"
    );
    const footer = elFactory("footer", {});

    footer.append(odinLink, githubLink, inspoLink, credit);

    return footer;
  }

  let contentDiv = elFactory("div", { id: "page" });
  contentDiv.append(pages.current[3]);

  let mainDiv = elFactory("div", { id: "content" });
  mainDiv.append(header(), contentDiv, footer());
  body.append(mainDiv);

  function switchPages(page, selector) {
    let pageArray = Array.from(pages.current);
    let pageNumber = pageArray
      .map(function (x) {
        return x.id;
      })
      .indexOf(page);

    let element = document.querySelector(selector);
    element.addEventListener("click", (e) => {
      contentDiv.textContent = "";
      contentDiv.append(pages.current[pageNumber]);
    });
  }

  switchPages("main-page", "#header-logo");
  switchPages("order", "button.header-link:nth-child(1)");
  switchPages("products", "button.header-link:nth-child(2)");
  switchPages("about-us", "button.header-link:nth-child(3)");
  switchPages("contact", "button.header-link:nth-child(4)");
})();
