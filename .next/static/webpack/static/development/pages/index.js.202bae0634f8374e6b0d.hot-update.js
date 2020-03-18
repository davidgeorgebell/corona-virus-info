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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/useFetch */ "./src/utils/useFetch.js");
/* harmony import */ var _Info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Info */ "./src/components/Info.js");

var _jsxFileName = "/Users/david/Desktop/Projects/corona-virus/src/components/CountrySelect.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function CountrySelect() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('GBR'),
      country = _useState[0],
      setCountry = _useState[1];

  var countries = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"])('https://covid19.mathdro.id/api/countries');
  if (!countries) return null;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Showing: ", country), __jsx("select", {
    onChange: function onChange(event) {
      return setCountry(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, Object.entries(countries.countries).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        name = _ref2[0],
        code = _ref2[1];

    return __jsx("option", {
      value: countries.iso3[code],
      key: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, name);
  })), __jsx(_Info__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "https://covid19.mathdro.id/api/countries/".concat(country),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.202bae0634f8374e6b0d.hot-update.js.map