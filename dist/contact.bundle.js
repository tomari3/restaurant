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
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLHFDQUFxQyxvQkFBb0I7QUFDekQscUNBQXFDLG1CQUFtQjtBQUN4RCxtQ0FBbUMsZUFBZTs7QUFFbEQsb0NBQW9DLGVBQWU7QUFDbkQsZ0NBQWdDLFdBQVc7QUFDM0M7QUFDQSw2Q0FBNkMseUJBQXlCO0FBQ3RFLDBDQUEwQyxlQUFlO0FBQ3pELHVDQUF1QyxlQUFlOztBQUV0RCx3Q0FBd0Msc0JBQXNCO0FBQzlELHdDQUF3QyxzQkFBc0I7QUFDOUQsbUNBQW1DLGlCQUFpQjtBQUNwRCxtQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7O0FBRUEsd0NBQXdDLHNCQUFzQjtBQUM5RDtBQUNBO0FBQ0EsTUFBTSx5QkFBeUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGtCQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sa0JBQWtCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgY29uc3QgZWxGYWN0b3J5ID0gKHR5cGUsIGF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBlbDtcbiAgfTtcblxuICBjb25zdCBtYWluVGV4dCA9IGVsRmFjdG9yeShcImgxXCIsIHsgY2xhc3M6IFwibWFpbi10ZXh0XCIgfSwgXCJob3cgdG8gcmVhY2ggdXNcIik7XG4gIGNvbnN0IGl0ZW1EaXYgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzczogXCJpdGVtLWRpdlwiIH0pO1xuICBjb25zdCBtYWluID0gZWxGYWN0b3J5KFwibWFpblwiLCB7IGlkOiBcImNvbnRhY3RcIiB9KTtcblxuICBjb25zdCBtYXBEaXYgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBpZDogXCJtYXAtZGl2XCIgfSk7XG4gIGNvbnN0IG1hcCA9IGVsRmFjdG9yeShcImgxXCIsIHsgaWQ6IFwibWFwXCIgfSwgXCJNQVBcIik7XG4gIG1hcERpdi5hcHBlbmQobWFwKTtcbiAgY29uc3QgZGVzY3JpcHRpb25UZXh0ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5mby1jb250YWluZXJcIiB9KTtcbiAgY29uc3QgcGhvbmVOdW1iZXJzID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW5mb1wiIH0pO1xuICBjb25zdCBhZGRyZXNzZXMgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzczogXCJpbmZvXCIgfSk7XG5cbiAgY29uc3QgbnVtYmVyc0RpdiA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzOiBcIm51bWJlcnMtZGl2XCIgfSk7XG4gIGNvbnN0IHBob25lSGVhZGVyID0gZWxGYWN0b3J5KFwiaDJcIiwgeyBjbGFzczogXCJpbmZvLWhlYWRlclwiIH0sIFwiY2FsbCB1c1wiKTtcbiAgY29uc3QgbnVtYmVyMSA9IGVsRmFjdG9yeShcInBcIiwgeyBjbGFzczogXCJudW1iZXJcIiB9LCBcIjA1NS05Mjc1MzkxXCIpO1xuICBjb25zdCBudW1iZXIyID0gZWxGYWN0b3J5KFwicFwiLCB7IGNsYXNzOiBcIm51bWJlclwiIH0sIFwiMDQtOTkxMjM0NTZcIik7XG4gIG51bWJlcnNEaXYuYXBwZW5kKG51bWJlcjEsIG51bWJlcjIpO1xuICBwaG9uZU51bWJlcnMuYXBwZW5kKHBob25lSGVhZGVyLCBudW1iZXJzRGl2KTtcblxuICBjb25zdCBhZGRyZXNzRGl2ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiYWRkcmVzcy1kaXZcIiB9KTtcbiAgY29uc3QgYWRkcmVzc0hlYWRlciA9IGVsRmFjdG9yeShcbiAgICBcImgyXCIsXG4gICAgeyBjbGFzczogXCJhZGRyZXNzLWhlYWRlclwiIH0sXG4gICAgXCJjb21lIG1lZXQgdXNcIlxuICApO1xuICBjb25zdCBhZGRyZXNzMSA9IGVsRmFjdG9yeShcbiAgICBcInBcIixcbiAgICB7IGNsYXNzOiBcImFkZHJlc3NcIiB9LFxuICAgIFwiaGVyZSBhbmQgdGhlcmUgYm91bGV2YXJkLCAyM3N0LCBNaWNoaWdhblwiXG4gICk7XG4gIGNvbnN0IGFkZHJlc3MyID0gZWxGYWN0b3J5KFxuICAgIFwicFwiLFxuICAgIHsgY2xhc3M6IFwiYWRkcmVzc1wiIH0sXG4gICAgXCJzb21ld2hlcmUgZWxzZSwgZGlmZmVyZW50IGFkZHJlc3Mgc3RyZWV0LCAxMnN0XCJcbiAgKTtcblxuICBhZGRyZXNzRGl2LmFwcGVuZChhZGRyZXNzMSwgYWRkcmVzczIpO1xuICBhZGRyZXNzZXMuYXBwZW5kKGFkZHJlc3NIZWFkZXIsIGFkZHJlc3NEaXYpO1xuXG4gIGRlc2NyaXB0aW9uVGV4dC5hcHBlbmQocGhvbmVOdW1iZXJzLCBhZGRyZXNzZXMpO1xuICBpdGVtRGl2LmFwcGVuZChtYXBEaXYsIGRlc2NyaXB0aW9uVGV4dCk7XG5cbiAgbWFpbi5hcHBlbmQobWFpblRleHQsIGl0ZW1EaXYpO1xuXG4gIHJldHVybiBtYWluO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9