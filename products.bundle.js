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
  !*** ./src/products.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ products)
/* harmony export */ });
function products() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxvQkFBb0I7QUFDMUI7QUFDQTtBQUNBLHFDQUFxQyxtQkFBbUI7QUFDeEQsbUNBQW1DLGdCQUFnQjs7QUFFbkQsd0NBQXdDLGdCQUFnQjtBQUN4RCx5Q0FBeUMsaUJBQWlCO0FBQzFEO0FBQ0E7QUFDQSxNQUFNLHFCQUFxQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkJBQTJCO0FBQ2pDO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsa0NBQWtDLHdCQUF3QjtBQUMxRCxxQ0FBcUMsbUJBQW1COztBQUV4RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3Byb2R1Y3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZHVjdHMoKSB7XG4gIGNvbnN0IGVsRmFjdG9yeSA9ICh0eXBlLCBhdHRyaWJ1dGVzLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgICB9XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2hpbGQpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZWw7XG4gIH07XG5cbiAgY29uc3QgbWFpblRleHQgPSBlbEZhY3RvcnkoXG4gICAgXCJoMVwiLFxuICAgIHsgY2xhc3M6IFwibWFpbi10ZXh0XCIgfSxcbiAgICBcInRha2UgYSBsb29rIGFyb3VuZCBvdXIgcGFzdHJpZXNcIlxuICApO1xuICBjb25zdCBpdGVtRGl2ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiaXRlbS1kaXZcIiB9KTtcbiAgY29uc3QgbWFpbiA9IGVsRmFjdG9yeShcIm1haW5cIiwgeyBpZDogXCJwcm9kdWN0c1wiIH0pO1xuXG4gIGNvbnN0IGxlZnRCdG4gPSBlbEZhY3RvcnkoXCJidXR0b25cIiwgeyBpZDogXCJsZWZ0LWJ0blwiIH0sIFwi4oGWXCIpO1xuICBjb25zdCByaWdodEJ0biA9IGVsRmFjdG9yeShcImJ1dHRvblwiLCB7IGlkOiBcInJpZ2h0LWJ0blwiIH0sIFwi4oGWXCIpO1xuICBjb25zdCBvdmVybGF5VGV4dCA9IGVsRmFjdG9yeShcbiAgICBcImgxXCIsXG4gICAgeyBjbGFzczogXCJpbWctaGVhZGVyXCIgfSxcbiAgICBcImZyZW5jaCBjcm9pc3NhbnRcIlxuICApO1xuICBjb25zdCBkZXNjcmlwdGlvblRleHQgPSBlbEZhY3RvcnkoXG4gICAgXCJwXCIsXG4gICAgeyBjbGFzczogXCJkZXNjcmlwdGlvbi10ZXh0XCIgfSxcbiAgICBcInRoaXMgZGVsaWNpb3VzIGNyb2lzc2FudCB3YXMgdW5mb3J0dW5hdGVseSBoYXJkLWNvZGVkIGludG8gdGhpcyB3ZWJzaXRlLCBvdXIgYmFrZXJ5IHN1cmUgcGxhbnMgdG8gbWFrZSBpdCdzIGRlc2NyaXB0aW9uIGR5bmFtaWMgaW4gZnV0dXJlIHByb2plY3RzLCBzdGF5IHR1bmVkISBcIlxuICApO1xuICBjb25zdCBjdXJyZW50SW1hZ2UgPSBlbEZhY3RvcnkoXCJkaXZcIiwge30pO1xuICBjb25zdCBpbWcxID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW1nLWNvbnRhaW5lclwiIH0pO1xuICBjb25zdCBpbWdEZXNjID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgY2xhc3M6IFwiaW1nLWRlc2NcIiB9KTtcblxuICBpbWdEZXNjLmFwcGVuZChvdmVybGF5VGV4dCwgZGVzY3JpcHRpb25UZXh0KTtcbiAgY3VycmVudEltYWdlLmFwcGVuZChpbWcxLCBpbWdEZXNjKTtcbiAgaXRlbURpdi5hcHBlbmQobGVmdEJ0biwgY3VycmVudEltYWdlLCByaWdodEJ0bik7XG5cbiAgbWFpbi5hcHBlbmQobWFpblRleHQsIGl0ZW1EaXYpO1xuXG4gIHJldHVybiBtYWluO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9