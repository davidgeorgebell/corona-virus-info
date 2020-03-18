webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/utils/useFetch.js":
/*!*******************************!*\
  !*** ./src/utils/useFetch.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFetch; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useFetch(url) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      info = _useState[0],
      setInfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      error = _useState2[0],
      setError = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log('Mounting or Updating');

    var fetchData = function fetchData() {
      var res, json;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchData$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(fetch(url));

            case 3:
              res = _context.sent;
              _context.next = 6;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

            case 6:
              json = _context.sent;
              setInfo(json);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setError(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 10]], Promise);
    };

    fetchData();
  }, [url]);
  return {
    error: error,
    info: info
  };
}

/***/ })

})
//# sourceMappingURL=index.js.ccf19d4c453167d3bf6e.hot-update.js.map