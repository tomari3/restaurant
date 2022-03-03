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
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mainPage)
/* harmony export */ });
function mainPage() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxxQ0FBcUMsbUJBQW1CO0FBQ3hEO0FBQ0E7QUFDQSxNQUFNLGtCQUFrQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0JBQW9CO0FBQzFCO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUEsa0NBQWtDLHdCQUF3QjtBQUMxRCxrQ0FBa0Msd0JBQXdCO0FBQzFELGtDQUFrQyx3QkFBd0I7QUFDMUQsa0NBQWtDLHdCQUF3QjtBQUMxRCxrQ0FBa0Msd0JBQXdCOztBQUUxRCxvQ0FBb0Msa0JBQWtCO0FBQ3RELG1DQUFtQyxpQkFBaUI7O0FBRXBEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21haW5QYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpblBhZ2UoKSB7XG4gIGNvbnN0IGVsRmFjdG9yeSA9ICh0eXBlLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZWw7XG4gIH07XG5cbiAgY29uc3QgdGV4dERpdiA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzOiBcInRleHQtZGl2XCIgfSk7XG4gIGNvbnN0IGludHJvVGV4dCA9IGVsRmFjdG9yeShcbiAgICBcInBcIixcbiAgICB7IGlkOiBcInRleHQtaW50cm9cIiB9LFxuICAgIFwiaW50cm9kdWNpbmcgZnJlc2ggZmxhdm91ciBwYWlyaW5nXCJcbiAgKTtcbiAgY29uc3QgbWFpblRleHQgPSBlbEZhY3RvcnkoXG4gICAgXCJoMVwiLFxuICAgIHsgY2xhc3M6IFwibWFpbi10ZXh0XCIgfSxcbiAgICBcImJha2VkXCIsXG4gICAgZWxGYWN0b3J5KFwic3BhblwiLCB7fSwgXCIgd2l0aCBsb3ZlLCBcIiksXG4gICAgXCJqdXN0IGZvciB5b3UhXCJcbiAgKTtcblxuICBjb25zdCBpbWcxID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW1nLWNvbnRhaW5lclwiIH0pO1xuICBjb25zdCBpbWcyID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW1nLWNvbnRhaW5lclwiIH0pO1xuICBjb25zdCBpbWczID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW1nLWNvbnRhaW5lclwiIH0pO1xuICBjb25zdCBpbWc0ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW1nLWNvbnRhaW5lclwiIH0pO1xuICBjb25zdCBpbWc1ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW1nLWNvbnRhaW5lclwiIH0pO1xuXG4gIGNvbnN0IGltZ0RpdiA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzOiBcImltZy1kaXZcIiB9KTtcbiAgY29uc3QgbWFpbiA9IGVsRmFjdG9yeShcIm1haW5cIiwgeyBpZDogXCJtYWluLXBhZ2VcIiB9KTtcblxuICB0ZXh0RGl2LmFwcGVuZChpbnRyb1RleHQsIG1haW5UZXh0KTtcbiAgaW1nRGl2LmFwcGVuZChpbWcxLCBpbWcyLCBpbWczLCBpbWc0LCBpbWc1KTtcblxuICBtYWluLmFwcGVuZCh0ZXh0RGl2LCBpbWdEaXYpO1xuXG4gIHJldHVybiBtYWluO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9