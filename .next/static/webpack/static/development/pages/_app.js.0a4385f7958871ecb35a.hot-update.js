webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/postcss-loader/src??__nextjs_postcss!./src/styles.css ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ":root {\n  --bg: #001122;\n  --alpha: #addb67;\n  --bravo: #c792ea;\n  --charlie: #f78c6c;\n  --delta: #82aaff;\n  --border: #d6deeb;\n  --mainFont: 'Inconsolata', monospace;\n}\nbody {\n  font-family: var(--mainFont);\n  max-width: 100vw;\n  max-height: 100vh;\n  margin: auto;\n  background: var(--bg);\n  color: var(--alpha);\n  font-size: 20px;\n}\nh1,\nh2,\nh3,\nh3,\nh4 {\n  color: var(--bravo);\n}\n.layout {\n  margin: 0;\n  padding: 0 20px;\n  border: 1px solid var(--border);\n}\n.info {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 30px;\n}\n.info__section {\n  display: grid;\n  padding: 2rem;\n  margin-bottom: 1rem;\n  align-items: center;\n  justify-items: center;\n  text-align: center;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n}\n.info__section span {\n  font-size: 2rem;\n  font-weight: bold;\n}\n.index__sub {\n  color: var(--charlie);\n}\n.index__title {\n  text-align: center;\n  color: var(--delta);\n}\n\n.selector {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-align: center;\n  color: var(--delta);\n  text-decoration: underline;\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 1.5rem;\n  font-weight: bold;\n  background-color: var(--charlie);\n  font-family: var(--mainFont);\n  max-width: 100%;\n  width: 100%;\n  height: 5rem;\n  cursor: pointer;\n}\n.selector__option {\n  cursor: pointer;\n  color: var(--border);\n}\n@media (max-width: 800px) {\n  .info {\n    grid-template-columns: 1fr;\n  }\n}\n", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,oCAAoC;AACtC;AACA;EACE,4BAA4B;EAC5B,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;AACjB;AACA;;;;;EAKE,mBAAmB;AACrB;AACA;EACE,SAAS;EACT,eAAe;EACf,+BAA+B;AACjC;AACA;EACE,aAAa;EACb,qCAAqC;EACrC,cAAc;AAChB;AACA;EACE,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;EACnB,+BAA+B;AACjC;AACA;EACE,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,0BAA0B;EAC1B,mBAAmB;EACnB,eAAe;EACf,+BAA+B;EAC/B,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,gCAAgC;EAChC,4BAA4B;EAC5B,eAAe;EACf,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;AACA;EACE,eAAe;EACf,oBAAoB;AACtB;AACA;EACE;IACE,0BAA0B;EAC5B;AACF","file":"styles.css","sourcesContent":[":root {\n  --bg: #001122;\n  --alpha: #addb67;\n  --bravo: #c792ea;\n  --charlie: #f78c6c;\n  --delta: #82aaff;\n  --border: #d6deeb;\n  --mainFont: 'Inconsolata', monospace;\n}\nbody {\n  font-family: var(--mainFont);\n  max-width: 100vw;\n  max-height: 100vh;\n  margin: auto;\n  background: var(--bg);\n  color: var(--alpha);\n  font-size: 20px;\n}\nh1,\nh2,\nh3,\nh3,\nh4 {\n  color: var(--bravo);\n}\n.layout {\n  margin: 0;\n  padding: 0 20px;\n  border: 1px solid var(--border);\n}\n.info {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 30px;\n}\n.info__section {\n  display: grid;\n  padding: 2rem;\n  margin-bottom: 1rem;\n  align-items: center;\n  justify-items: center;\n  text-align: center;\n  border-radius: 10px;\n  border: 1px solid var(--border);\n}\n.info__section span {\n  font-size: 2rem;\n  font-weight: bold;\n}\n.index__sub {\n  color: var(--charlie);\n}\n.index__title {\n  text-align: center;\n  color: var(--delta);\n}\n\n.selector {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  text-align: center;\n  color: var(--delta);\n  text-decoration: underline;\n  margin-bottom: 1rem;\n  padding: 0.5rem;\n  border: 1px solid var(--border);\n  border-radius: 4px;\n  font-size: 1.5rem;\n  font-weight: bold;\n  background-color: var(--charlie);\n  font-family: var(--mainFont);\n  max-width: 100%;\n  width: 100%;\n  height: 5rem;\n  cursor: pointer;\n}\n.selector__option {\n  cursor: pointer;\n  color: var(--border);\n}\n@media (max-width: 800px) {\n  .info {\n    grid-template-columns: 1fr;\n  }\n}\n"]}]);


/***/ })

})
//# sourceMappingURL=_app.js.0a4385f7958871ecb35a.hot-update.js.map