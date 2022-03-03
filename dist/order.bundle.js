/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/order.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ order)
/* harmony export */ });
function order() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxxQ0FBcUMsb0JBQW9CO0FBQ3pELHFDQUFxQyxtQkFBbUI7QUFDeEQsbUNBQW1DLGFBQWE7O0FBRWhEO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQSxNQUFNLHNCQUFzQjtBQUM1QjtBQUNBO0FBQ0EseUNBQXlDLG9CQUFvQjtBQUM3RCxxQ0FBcUMsbUJBQW1CO0FBQ3hELHlDQUF5QyxvQkFBb0I7QUFDN0Q7QUFDQTtBQUNBLE1BQU0sb0JBQW9CO0FBQzFCO0FBQ0E7QUFDQSwwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCx3Q0FBd0Msa0JBQWtCO0FBQzFEO0FBQ0Esd0NBQXdDLDJCQUEyQjtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhDQUE4QywrQkFBK0I7QUFDN0UsbUNBQW1DO0FBQ25DLHdDQUF3QyxxQkFBcUI7QUFDN0Q7QUFDQTtBQUNBLE1BQU0sdUJBQXVCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3RELHdDQUF3QyxlQUFlO0FBQ3ZEO0FBQ0E7QUFDQSxNQUFNLGtCQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxtQkFBbUI7O0FBRXhEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL29yZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gb3JkZXIoKSB7XG4gIGNvbnN0IGVsRmFjdG9yeSA9ICh0eXBlLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZWw7XG4gIH07XG5cbiAgY29uc3QgbWFpblRleHQgPSBlbEZhY3RvcnkoXCJoMVwiLCB7IGNsYXNzOiBcIm1haW4tdGV4dFwiIH0sIFwiaG9tZSBzd2VldCBob21lXCIpO1xuICBjb25zdCBpdGVtRGl2ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiaXRlbS1kaXZcIiB9KTtcbiAgY29uc3QgbWFpbiA9IGVsRmFjdG9yeShcIm1haW5cIiwgeyBpZDogXCJvcmRlclwiIH0pO1xuXG4gIGNvbnN0IG9ubGluZU9yZGVyU2VjdGlvbiA9IGVsRmFjdG9yeShcInNlY3Rpb25cIiwge1xuICAgIGlkOiBcIm9ubGluZS1vcmRlci1jb250YWluZXJcIixcbiAgfSk7XG4gIGNvbnN0IG9ubGluZVRpdGxlID0gZWxGYWN0b3J5KFwiaDJcIiwge30sIFwiZWFzaWx5IG9yZGVyIG9ubGluZVwiKTtcbiAgY29uc3QgaXRlbUhlYWRlciA9IGVsRmFjdG9yeShcbiAgICBcImgzXCIsXG4gICAgeyBjbGFzczogXCJpdGVtLWhlYWRlclwiIH0sXG4gICAgXCJncmVhdCBwaWVjZSBvZiBkb3VnaFwiXG4gICk7XG4gIGNvbnN0IG1lbnVJdGVtRGl2ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwibWVudS1pdGVtXCIgfSk7XG4gIGNvbnN0IG1lbnVJbWcgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzczogXCJtZW51LWltZ1wiIH0pO1xuICBjb25zdCBtZW51VGV4dERpdiA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzOiBcIm1lbnUtdGV4dFwiIH0pO1xuICBjb25zdCBtZW51VGV4dCA9IGVsRmFjdG9yeShcbiAgICBcInBcIixcbiAgICB7IGNsYXNzOiBcIm1lbnUtdGV4dFwiIH0sXG4gICAgXCJ0aGlzIGlzIGFuIGV4YW1wbGUsIHlvdSBjYW50IGFjdHVhbGx5IG9yZGVyLCBidW1tZXIuLiBJIGtub3dcIlxuICApO1xuICBjb25zdCBhZGRCdXR0b24gPSBlbEZhY3RvcnkoXCJidXR0b25cIiwgeyBjbGFzczogXCJhZGQtYnV0dG9uXCIgfSwgXCJhZGRcIik7XG4gIGNvbnN0IGFtb3VudCA9IGVsRmFjdG9yeShcImlucHV0XCIsIHtcbiAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgIGNsYXNzOiBcImFtb3VudFwiLFxuICAgIHZhbHVlOiBcIjFcIixcbiAgfSk7XG5cbiAgY29uc3QgaW1nQnV0dG9ucyA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzOiBcImltZy1idG5cIiB9KTtcbiAgaW1nQnV0dG9ucy5hcHBlbmQoYW1vdW50LCBhZGRCdXR0b24pO1xuICBjb25zdCBpbWdBbmRUZXh0ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW1nLWFuZC10ZXh0LWRpdlwiIH0pO1xuICBtZW51VGV4dERpdi5hcHBlbmQobWVudVRleHQsIGltZ0J1dHRvbnMpO1xuICBpbWdBbmRUZXh0LmFwcGVuZChpdGVtSGVhZGVyLCBtZW51SW1nKTtcbiAgbWVudUl0ZW1EaXYuYXBwZW5kKGltZ0FuZFRleHQsIG1lbnVUZXh0RGl2KTtcbiAgbGV0IG1lbnVJdGVtRGl2MSA9IG1lbnVJdGVtRGl2LmNsb25lTm9kZSh0cnVlKTtcbiAgbGV0IG1lbnVJdGVtRGl2MiA9IG1lbnVJdGVtRGl2LmNsb25lTm9kZSh0cnVlKTtcbiAgbGV0IG1lbnVJdGVtRGl2MyA9IG1lbnVJdGVtRGl2LmNsb25lTm9kZSh0cnVlKTtcbiAgbGV0IG1lbnVJdGVtRGl2NCA9IG1lbnVJdGVtRGl2LmNsb25lTm9kZSh0cnVlKTtcbiAgb25saW5lT3JkZXJTZWN0aW9uLmFwcGVuZChcbiAgICBvbmxpbmVUaXRsZSxcbiAgICBtZW51SXRlbURpdixcbiAgICBtZW51SXRlbURpdjEsXG4gICAgbWVudUl0ZW1EaXYyLFxuICAgIG1lbnVJdGVtRGl2M1xuICApO1xuXG4gIGNvbnN0IHBob25lU2VjdGlvbiA9IGVsRmFjdG9yeShcInNlY3Rpb25cIiwgeyBpZDogXCJwaG9uZS1kZXRhaWxzLWNvbnRhaW5lclwiIH0pO1xuICBjb25zdCBjYWxsVXMgPSBlbEZhY3RvcnkoXCJoMlwiLCB7fSwgXCJvciBjYWxsIHVzXCIpO1xuICBjb25zdCBkZXRhaWxzRGl2ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgaWQ6IFwicGhvbmUtZGV0YWlsc1wiIH0pO1xuICBjb25zdCBwaG9uZU51bWJlcnMgPSBlbEZhY3RvcnkoXG4gICAgXCJwXCIsXG4gICAgeyBjbGFzczogXCJwaG9uZS1udW1iZXJcIiB9LFxuICAgIFwiMDUyLTgzNzUzOTJcIixcbiAgICBcIjA0LTk0ODY2MjJcIlxuICApO1xuICBjb25zdCBtYXliZUFycml2ZSA9IGVsRmFjdG9yeShcImgyXCIsIHsgaWQ6IFwiYXJyaXZlXCIgfSwgXCJvciBjb21lIG1lZXQgdXNcIik7XG4gIGNvbnN0IGFkZHJlc3NEaXYgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBpZDogXCJhZGRyZXNzXCIgfSk7XG4gIGNvbnN0IGFkZHJlc3MgPSBlbEZhY3RvcnkoXG4gICAgXCJwXCIsXG4gICAgeyBjbGFzczogXCJhZGRyZXNzXCIgfSxcbiAgICBcIlRoaXMgcGxhY2UgYm91bGV2YXJkIDIzdGggbWFpbiBzdHJlZXRcIlxuICApO1xuICBhZGRyZXNzRGl2LmFwcGVuZChtYXliZUFycml2ZSwgYWRkcmVzcyk7XG4gIGRldGFpbHNEaXYuYXBwZW5kKHBob25lTnVtYmVycyk7XG4gIHBob25lU2VjdGlvbi5hcHBlbmQoY2FsbFVzLCBkZXRhaWxzRGl2LCBtYXliZUFycml2ZSk7XG5cbiAgY29uc3QgdGV4dERpdiA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzOiBcInRleHQtZGl2XCIgfSk7XG5cbiAgdGV4dERpdi5hcHBlbmQobWFpblRleHQpO1xuICBpdGVtRGl2LmFwcGVuZChvbmxpbmVPcmRlclNlY3Rpb24pO1xuXG4gIG1haW4uYXBwZW5kKHRleHREaXYsIGl0ZW1EaXYpO1xuXG4gIHJldHVybiBtYWluO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9