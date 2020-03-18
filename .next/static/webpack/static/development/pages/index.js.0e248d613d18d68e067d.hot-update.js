webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/CountrySelect.js":
/*!*****************************************!*\
  !*** ./src/components/CountrySelect.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountrySelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useFetch */ "./src/utils/useFetch.js");
var _jsxFileName = "/Users/david/Desktop/Projects/corona-virus/src/components/CountrySelect.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function CountrySelect() {
  var countries = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])('https://covid19.mathdro.id/api/countries');
  console.log(countries);
  if (!countries) return __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Loading");
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Countries:"), __jsx("select", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, Object.entries(countries.countries.map(function (country) {
    __jsx("option", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, country);
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.0e248d613d18d68e067d.hot-update.js.map