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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    code: 'GB'
  }),
      selectedCountry = _useState[0],
      setCountry = _useState[1];

  var countries = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_2__["default"])('https://covid19.mathdro.id/api/countries', {});
  if (!countries) return null;
  var countryArr = Object.entries(countries.countries).map(function (_ref) {
    var _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return {
      name: "".concat(key),
      code: "".concat(value)
    };
  });
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("select", {
    onChange: function onChange(event) {
      return setCountry(event.target.value);
    },
    defaultValue: selectedCountry.code,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, countryArr.map(function (country) {
    return __jsx("option", {
      value: country.code,
      key: country.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, country.name);
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.27e8941672098e1acf4d.hot-update.js.map