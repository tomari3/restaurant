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
  !*** ./src/about-us.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutUs)
/* harmony export */ });
function aboutUs() {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXRVcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLG9CQUFvQjtBQUMxQjtBQUNBO0FBQ0EscUNBQXFDLG1CQUFtQjtBQUN4RCxtQ0FBbUMsZ0JBQWdCOztBQUVuRCxvQ0FBb0Msb0JBQW9CO0FBQ3hELDZDQUE2QywyQkFBMkI7O0FBRXhFO0FBQ0E7QUFDQSxNQUFNLDZCQUE2QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkJBQTJCO0FBQ2pDO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2Fib3V0LXVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRVcygpIHtcbiAgY29uc3QgZWxGYWN0b3J5ID0gKHR5cGUsIGF0dHJpYnV0ZXMsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIGZvciAobGV0IGtleSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjaGlsZCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBlbDtcbiAgfTtcblxuICBjb25zdCBtYWluVGV4dCA9IGVsRmFjdG9yeShcbiAgICBcImgxXCIsXG4gICAgeyBjbGFzczogXCJtYWluLXRleHRcIiB9LFxuICAgIFwibG92aW5nIGZhbWlseSB3aG8gbG92ZXMgdG8gYmFrZVwiXG4gICk7XG4gIGNvbnN0IGl0ZW1EaXYgPSBlbEZhY3RvcnkoXCJkaXZcIiwgeyBjbGFzczogXCJpdGVtLWRpdlwiIH0pO1xuICBjb25zdCBtYWluID0gZWxGYWN0b3J5KFwibWFpblwiLCB7IGlkOiBcImFib3V0LXVzXCIgfSk7XG5cbiAgY29uc3QgaW1nRGl2ID0gZWxGYWN0b3J5KFwiZGl2XCIsIHsgaWQ6IFwiYWJvdXQtdXMtaW1nXCIgfSk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uVGV4dCA9IGVsRmFjdG9yeShcImRpdlwiLCB7IGNsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIiB9KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkhlYWRlciA9IGVsRmFjdG9yeShcbiAgICBcImgyXCIsXG4gICAgeyBjbGFzczogXCJkZXNjcmlwdGlvbi1oZWFkZXJcIiB9LFxuICAgIFwidGhpcyBpcyB1c1wiXG4gICk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uTW9yZSA9IGVsRmFjdG9yeShcbiAgICBcInBcIixcbiAgICB7IGNsYXNzOiBcImRlc2NyaXB0aW9uLXRleHRcIiB9LFxuICAgIFwibG92aW5nIGZhbWlseSB3aG8gbGlrZSB0byBiYWtlIGZvciB0aGUgbGlrZXMgb2Ygb3RoZXIgYW5kIHRvIG1ha2UgaXQgYWNjZXNzaWJsZSwgdGFzdHkgYW5kIGZ1biBmb3IgYWxsIHRob3NlIHdobyBhcmUgaW52b2x2ZWQuIHRoZSB0cmFkaXRpb24gc3RhcnRlZCBsb25nIHRpbWUgYWdvIGFuZCBpcyBzdGlsbCBhbGl2ZSBhbmQgd2lsbCBiZSBhbGl2ZSBmb3IgZXZlciBvayBjb29sXCJcbiAgKTtcblxuICBjb25zdCBpbWcgPSBlbEZhY3RvcnkoXCJkaXZcIiwge30pO1xuICBpbWdEaXYuYXBwZW5kKGltZyk7XG4gIGRlc2NyaXB0aW9uVGV4dC5hcHBlbmQoZGVzY3JpcHRpb25IZWFkZXIsIGRlc2NyaXB0aW9uTW9yZSk7XG5cbiAgaXRlbURpdi5hcHBlbmQoaW1nRGl2LCBkZXNjcmlwdGlvblRleHQpO1xuXG4gIG1haW4uYXBwZW5kKG1haW5UZXh0LCBpdGVtRGl2KTtcblxuICByZXR1cm4gbWFpbjtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==