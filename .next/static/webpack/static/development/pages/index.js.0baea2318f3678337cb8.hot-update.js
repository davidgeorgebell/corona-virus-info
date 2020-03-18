webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Info.js":
/*!********************************!*\
  !*** ./src/components/Info.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useFetch */ "./src/utils/useFetch.js");
var _jsxFileName = "/Users/david/Desktop/Projects/corona-virus/src/components/Info.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Info(_ref) {
  var url = _ref.url;
  var info = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])(url);
  var error = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])(url);
  if (!info) return null;
  if (error > 0) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Error");
  return __jsx("div", {
    className: "info-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "World Wide:"), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Confirmed:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, info.confirmed ? info.confirmed.value : 'Not available')), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Deaths:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, info.deaths ? info.deaths.value : 'Not available')), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Recovered:"), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, info.recovered ? info.recovered.value : 'Not available')));
}

/***/ })

})
//# sourceMappingURL=index.js.0baea2318f3678337cb8.hot-update.js.map