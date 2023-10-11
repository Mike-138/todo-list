/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `dialog {
    font-size: 1rem;
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    animation: grow 200ms;
}

@keyframes grow {
    from {
        transform: translate(-50%, -50%) scale(0.9);
    }
    to {
        transform: translate(-50%, -50%) scale(1);
    }
}

/* The modal form is designed to be a dynamic 2 column grid */
form[method="dialog"] {
    padding: 2em;
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 2em;
}

input, select, textarea {
    padding: 0.25em;
    letter-spacing: 0.05em;
}

form[method="dialog"] > button {
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: white;
}

form[method="dialog"] > button:first-of-type {
    background-color: red;
}

form[method="dialog"] > button:last-of-type {
    background-color: green;
}

.field-container {
    display: grid;
    gap: 0.25em;
}

.field-container > label {
    font-size: 0.75em;
    letter-spacing: 0.1em;
}

.field-container > input, .field-container > select {
    font-size: 1.25em;
}

.wide {
    grid-column: span 2;
}

.wide.center {
    justify-self: center;
}`, "",{"version":3,"sources":["webpack://./src/styles/modal.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,mBAAmB;IACnB,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;IACI;QACI,2CAA2C;IAC/C;IACA;QACI,yCAAyC;IAC7C;AACJ;;AAEA,6DAA6D;AAC7D;IACI,YAAY;IACZ,wBAAwB;IACxB,yCAAyC;IACzC,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,qBAAqB;IACrB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB","sourcesContent":["dialog {\n    font-size: 1rem;\n    text-transform: uppercase;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    border-radius: 10px;\n    transform: translate(-50%, -50%);\n    animation: grow 200ms;\n}\n\n@keyframes grow {\n    from {\n        transform: translate(-50%, -50%) scale(0.9);\n    }\n    to {\n        transform: translate(-50%, -50%) scale(1);\n    }\n}\n\n/* The modal form is designed to be a dynamic 2 column grid */\nform[method=\"dialog\"] {\n    padding: 2em;\n    display: grid !important;\n    grid-template-columns: 1fr 1fr !important;\n    gap: 2em;\n}\n\ninput, select, textarea {\n    padding: 0.25em;\n    letter-spacing: 0.05em;\n}\n\nform[method=\"dialog\"] > button {\n    font-size: 3em;\n    font-weight: bold;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: white;\n}\n\nform[method=\"dialog\"] > button:first-of-type {\n    background-color: red;\n}\n\nform[method=\"dialog\"] > button:last-of-type {\n    background-color: green;\n}\n\n.field-container {\n    display: grid;\n    gap: 0.25em;\n}\n\n.field-container > label {\n    font-size: 0.75em;\n    letter-spacing: 0.1em;\n}\n\n.field-container > input, .field-container > select {\n    font-size: 1.25em;\n}\n\n.wide {\n    grid-column: span 2;\n}\n\n.wide.center {\n    justify-self: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
    box-sizing: border-box;
}

*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

body {
    position: relative;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    min-height: 100vh;
    display: grid;
    grid-template-rows: repeat(auto-fit, 10rem);
    grid-auto-rows: 10rem;
}

.add-project-button {
    position: fixed;
    top: 5rem;
    right: 5rem;
    height: 5rem;
    width: 5rem;
    border: 5px solid gray;
    border-radius: 10px;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gDAAgD;IAChD,iBAAiB;IACjB,aAAa;IACb,2CAA2C;IAC3C,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,WAAW;IACX,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,mBAAmB;AACvB","sourcesContent":["html {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nbody {\n    position: relative;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 10rem);\n    grid-auto-rows: 10rem;\n}\n\n.add-project-button {\n    position: fixed;\n    top: 5rem;\n    right: 5rem;\n    height: 5rem;\n    width: 5rem;\n    border: 5px solid gray;\n    border-radius: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/modal.css":
/*!******************************!*\
  !*** ./src/styles/modal.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/modals/modal_template.js":
/*!**********************************************!*\
  !*** ./src/modules/modals/modal_template.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/modal.css */ "./src/styles/modal.css");



const modalFactory = (modalId) => {

    // Store form elements
    const _formHeaders = [];
    const _formFields = [];
    
    // Define private properties
    const _info = {};

    const _modalDialog = document.createElement("dialog");
    _modalDialog.setAttribute("id", modalId);

    const _modalForm = document.createElement("form");
    _modalForm.setAttribute("method", "dialog");

    const _cancelButton = document.createElement("button");
    _cancelButton.textContent = "Cancel";

    const _confirmButton = document.createElement("button");
    _confirmButton.textContent = "Add";

    // Define private methods
    const _packageField = (field) => {

        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("field-container");
        const fieldLabel = document.createElement("label");
        fieldLabel.setAttribute("for", field.id);
        // Capitalize label name in DOM
        fieldLabel.textContent = field.name[0].toUpperCase() + field.name.slice(1);

        if (field.tagName === "TEXTAREA") {

            fieldContainer.classList.add("wide");

        }
    
        fieldContainer.append(fieldLabel, field);
    
        return fieldContainer;
    
    };

    const _fieldFactory = (divType, inputName, {inputType, required = false, options = []} = {}) => {

        // Function keyword over arrow function to attach "this" to an object and not to the outer function where it is defined
        const makeField = function(inputId) {

            const field = document.createElement(divType);
            field.setAttribute("name", inputName);
            field.setAttribute("id", inputId);

            if (divType === "input") {

                field.setAttribute("type", inputType);

            } else if (divType === "select") {

                for (let option of options) {
                    let currentOption = document.createElement("option");
                    currentOption.setAttribute("value", option);
                    currentOption.textContent = option.toUpperCase();
                    field.appendChild(currentOption);
                }

            }
    
            if (required) {
                field.setAttribute("required", "");
            }
            
            _formFields.push(field);
            return this;

        };

        return makeField;

    };

    // Define public methods
    const getHtml = () => _modalDialog;

    const getInfo = () => _info;

    const makeTitleField = _fieldFactory("input", "title", {inputType: "text", required: true});

    const makeDescriptionField = _fieldFactory("input", "description", {inputType: "text"});

    const makeDueDateField = _fieldFactory("input", "due", {inputType: "date", required: true});

    const makePriorityField = _fieldFactory("select", "priority", {options: ["low", "medium", "high", "urgent"]})

    const makeNotesField = _fieldFactory("textarea", "notes");

    // Function keyword over arrow function to attach "this" to an object and not to the outer function where it is defined
    const makeHeader = function(size, content) {

        const header = document.createElement(size);
        header.textContent = content;
        header.classList.add("wide", "center");

        _formHeaders.push(header);
        return this;

    }

    const build = () => {

        for (let header of _formHeaders) {
            _modalForm.appendChild(header);
        }

        for (let field of _formFields) {
            let packagedField = _packageField(field);
            _modalForm.appendChild(packagedField);
        }

        _modalForm.appendChild(_cancelButton);
        _modalForm.appendChild(_confirmButton);

        _modalDialog.appendChild(_modalForm)

        return {
            getHtml,
            getInfo
        };

    };

    const __setInfo = () => {
        for (let field of _formFields) {
            _info[field.name] = field.value;
        }
    }

    const __clearForm = () => {
        for (let field of _formFields) {
            if (field.tagName === "SELECT") {
                field.value = field.firstChild.value;
            } else {
                field.value = "";
            }
        }
    };

    // Cancel form
    _cancelButton.addEventListener("click", (event) => {
        event.preventDefault();
        __clearForm();
        _modalDialog.close();
    });

    // Store form information in info object
    _modalDialog.addEventListener("submit", () => {
        __setInfo();
        __clearForm();
    });

    return {
        makeHeader,
        makeTitleField,
        makeDescriptionField,
        makeDueDateField,
        makePriorityField,
        makeNotesField,
        build
    };

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalFactory);

/***/ }),

/***/ "./src/modules/modals/project_modal.js":
/*!*********************************************!*\
  !*** ./src/modules/modals/project_modal.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal_template */ "./src/modules/modals/modal_template.js");


const projectModal = ((0,_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"])("projectDialog")
    .makeHeader("h1", "Create a project!")
    .makeTitleField("projectTitle")
    .makeDescriptionField("projectDescription")
    .makeDueDateField("projectDueDate")
    .makePriorityField("projectPriority")
    .makeNotesField("projectNotes")
    .build()
    );

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectModal);

/***/ }),

/***/ "./src/modules/modals/todo_modal.js":
/*!******************************************!*\
  !*** ./src/modules/modals/todo_modal.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal_template */ "./src/modules/modals/modal_template.js");


const todoModal = ((0,_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"])("todoDialog")
    .makeHeader("h1", "Create a task!")
    .makeTitleField("todoTitle")
    .makeDescriptionField("todoDescription")
    .makeDueDateField("todoDueDate")
    .makePriorityField("todoPriority")
    .makeNotesField("todoNotes")
    .build()
    );

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoModal);

/***/ }),

/***/ "./src/modules/project_object.js":
/*!***************************************!*\
  !*** ./src/modules/project_object.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const project = (title, description, dueDate, priority, notes, ...items) => {

    const _createContainer = (tag) => {
        const addContent = (content) => {
            const container = document.createElement(tag);
            container.textContent = content;
            return container;
        };
        return addContent;
    };

    const _addTitleElement = _createContainer("h1");

    const _addSubtitleElement = _createContainer("h2")

    const _addKeyElement = _createContainer("h4")

    const _addBodyElement = _createContainer("p");

    const getTitle = () => title;

    const setTitle = (string) => {
        title = string;
    };

    const getDescription = () => description;

    const setDescription = (string) => {
        description = string;
    };

    const getDueDate = () => dueDate;

    const setDueDate = (date) => {
        dueDate = date;
    };

    const getPriority = () => priority;

    const setPriority = (value) => {
        priority = value;
    };

    const getNotes = () => notes;

    const setNotes = (string) => {
        notes = string;
    };
    
    const _todoList = items;

    const getTodoList = () => _todoList;

    const addToTodoList = (item) => {
        _todoList.push(item);
    };

    const removeFromTodoList = (item) => {
        const index = _todoList.indexOf(item);
        _todoList.splice(index, 1);
    };

    const fromObject = function(obj) {
        const { title = "", description = "", due = "", priority = "", notes = "" } = obj;
        setTitle(title);
        setDescription(description);
        setDueDate(due);
        setPriority(priority);
        setNotes(notes);
        return this;
    }

    const createCard = () => {

        const container = document.createElement("div");
        container.classList.add("project");

        const title = _addTitleElement(getTitle());
        title.classList.add("title");

        const description = _addSubtitleElement(getDescription());
        description.classList.add("description");

        const dueDate = _addKeyElement(getDueDate());
        dueDate.classList.add("due");

        const priority = _addKeyElement(getPriority());
        priority.classList.add("priority");

        const notes = _addBodyElement(getNotes());
        notes.classList.add("notes");

        container.append(
            title,
            description,
            dueDate,
            priority,
            notes
        );

        return container;
    };

    return {
        getTitle,
        setTitle,
        getDescription,
        setDescription,
        getDueDate,
        setDueDate,
        getPriority,
        setPriority,
        getNotes,
        setNotes,
        getTodoList,
        addToTodoList,
        removeFromTodoList,
        fromObject,
        createCard
    };

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);

/***/ }),

/***/ "./src/modules/todo_object.js":
/*!************************************!*\
  !*** ./src/modules/todo_object.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todoItem = (title, description, dueDate, priority, notes) => {

    const getTitle = () => title;

    const setTitle = (string) => {
        title = string;
    };

    const getDescription = () => description;

    const setDescription = (string) => {
        description = string;
    };

    const getDueDate = () => dueDate;

    const setDueDate = (date) => {
        dueDate = date;
    };

    const getPriority = () => priority;

    const setPriority = (value) => {
        priority = value;
    };

    const getNotes = () => notes;

    const setNotes = (string) => {
        notes = string;
    };

    return {
        getTitle,
        setTitle,
        getDescription,
        setDescription,
        getDueDate,
        setDueDate,
        getPriority,
        setPriority,
        getNotes,
        setNotes
    };
    
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoItem);

/***/ }),

/***/ "./src/assets/icons/plus.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/plus.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/icons/plus.svg */ "./src/assets/icons/plus.svg");
/* harmony import */ var _modules_todo_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/todo_object */ "./src/modules/todo_object.js");
/* harmony import */ var _modules_project_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/project_object */ "./src/modules/project_object.js");
/* harmony import */ var _modules_modals_todo_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modals/todo_modal */ "./src/modules/modals/todo_modal.js");
/* harmony import */ var _modules_modals_project_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modals/project_modal */ "./src/modules/modals/project_modal.js");







const projectHtml = _modules_modals_project_modal__WEBPACK_IMPORTED_MODULE_5__["default"].getHtml();
const projectInfo = _modules_modals_project_modal__WEBPACK_IMPORTED_MODULE_5__["default"].getInfo();

const renderBody = (elements) => {
    const stack = elements.slice().reverse();
    document.body.replaceChildren(projectHtml, addProjectButton, ...stack);
}

const bodyElements = [];

const addProjectButton = (() => {
    const button = document.createElement("button");
    button.classList.add("add-project-button");
    const image = new Image();
    image.src = _assets_icons_plus_svg__WEBPACK_IMPORTED_MODULE_1__;
    button.appendChild(image);
    return button;
})();

renderBody(bodyElements);

addProjectButton.addEventListener("click", () => {
    projectHtml.showModal();
})

projectHtml.addEventListener("submit", () => {
    let newProject = (0,_modules_project_object__WEBPACK_IMPORTED_MODULE_3__["default"])().fromObject(projectInfo);
    let newProjectCard = newProject.createCard();
    bodyElements.push(newProjectCard);
    renderBody(bodyElements);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyx1RkFBdUYsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksa0NBQWtDLHNCQUFzQixnQ0FBZ0MseUJBQXlCLGVBQWUsZ0JBQWdCLDBCQUEwQix1Q0FBdUMsNEJBQTRCLEdBQUcscUJBQXFCLFlBQVksc0RBQXNELE9BQU8sVUFBVSxvREFBb0QsT0FBTyxHQUFHLDZGQUE2RixtQkFBbUIsK0JBQStCLGdEQUFnRCxlQUFlLEdBQUcsNkJBQTZCLHNCQUFzQiw2QkFBNkIsR0FBRyxzQ0FBc0MscUJBQXFCLHdCQUF3Qiw0QkFBNEIsZ0NBQWdDLG1CQUFtQixHQUFHLG9EQUFvRCw0QkFBNEIsR0FBRyxtREFBbUQsOEJBQThCLEdBQUcsc0JBQXNCLG9CQUFvQixrQkFBa0IsR0FBRyw4QkFBOEIsd0JBQXdCLDRCQUE0QixHQUFHLHlEQUF5RCx3QkFBd0IsR0FBRyxXQUFXLDBCQUEwQixHQUFHLGtCQUFrQiwyQkFBMkIsR0FBRyxtQkFBbUI7QUFDMTdEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RXZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sdUZBQXVGLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxnQ0FBZ0MsNkJBQTZCLEdBQUcsNEJBQTRCLGdCQUFnQixpQkFBaUIsMEJBQTBCLEdBQUcsVUFBVSx5QkFBeUIsdURBQXVELHdCQUF3QixvQkFBb0Isa0RBQWtELDRCQUE0QixHQUFHLHlCQUF5QixzQkFBc0IsZ0JBQWdCLGtCQUFrQixtQkFBbUIsa0JBQWtCLDZCQUE2QiwwQkFBMEIsR0FBRyxtQkFBbUI7QUFDeDNCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDbEMxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2JnQzs7O0FBR2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRCwyQ0FBMkMsSUFBSTs7QUFFL0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLDREQUE0RCxrQ0FBa0M7O0FBRTlGLHdFQUF3RSxrQkFBa0I7O0FBRTFGLDREQUE0RCxrQ0FBa0M7O0FBRTlGLG1FQUFtRSw2Q0FBNkM7O0FBRWhIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQzlLaUI7O0FBRTVDLHNCQUFzQiwyREFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQ1ppQjs7QUFFNUMsbUJBQW1CLDJEQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUNaeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isb0VBQW9FO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQzNIdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDbUI7QUFDRjtBQUNFO0FBQ0s7QUFDTTs7QUFFMUQsb0JBQW9CLHFFQUFZO0FBQ2hDLG9CQUFvQixxRUFBWTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQVE7QUFDeEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxQkFBcUIsbUVBQU87QUFDNUI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9tb2RhbC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL21vZGFsLmNzcz8wN2JlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RhbHMvbW9kYWxfdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWxzL3Byb2plY3RfbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWxzL3RvZG9fbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdF9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb19vYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgZGlhbG9nIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgYW5pbWF0aW9uOiBncm93IDIwMG1zO1xufVxuXG5Aa2V5ZnJhbWVzIGdyb3cge1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjkpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgIH1cbn1cblxuLyogVGhlIG1vZGFsIGZvcm0gaXMgZGVzaWduZWQgdG8gYmUgYSBkeW5hbWljIDIgY29sdW1uIGdyaWQgKi9cbmZvcm1bbWV0aG9kPVwiZGlhbG9nXCJdIHtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAhaW1wb3J0YW50O1xuICAgIGdhcDogMmVtO1xufVxuXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogMC4yNWVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG59XG5cbmZvcm1bbWV0aG9kPVwiZGlhbG9nXCJdID4gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmZvcm1bbWV0aG9kPVwiZGlhbG9nXCJdID4gYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuZm9ybVttZXRob2Q9XCJkaWFsb2dcIl0gPiBidXR0b246bGFzdC1vZi10eXBlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cblxuLmZpZWxkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6IDAuMjVlbTtcbn1cblxuLmZpZWxkLWNvbnRhaW5lciA+IGxhYmVsIHtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG59XG5cbi5maWVsZC1jb250YWluZXIgPiBpbnB1dCwgLmZpZWxkLWNvbnRhaW5lciA+IHNlbGVjdCB7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbi53aWRlIHtcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xufVxuXG4ud2lkZS5jZW50ZXIge1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tb2RhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSwyQ0FBMkM7SUFDL0M7SUFDQTtRQUNJLHlDQUF5QztJQUM3QztBQUNKOztBQUVBLDZEQUE2RDtBQUM3RDtJQUNJLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIseUNBQXlDO0lBQ3pDLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpYWxvZyB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgYW5pbWF0aW9uOiBncm93IDIwMG1zO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3cge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuOSk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxuICAgIH1cXG59XFxuXFxuLyogVGhlIG1vZGFsIGZvcm0gaXMgZGVzaWduZWQgdG8gYmUgYSBkeW5hbWljIDIgY29sdW1uIGdyaWQgKi9cXG5mb3JtW21ldGhvZD1cXFwiZGlhbG9nXFxcIl0ge1xcbiAgICBwYWRkaW5nOiAyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyICFpbXBvcnRhbnQ7XFxuICAgIGdhcDogMmVtO1xcbn1cXG5cXG5pbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYSB7XFxuICAgIHBhZGRpbmc6IDAuMjVlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcXG59XFxuXFxuZm9ybVttZXRob2Q9XFxcImRpYWxvZ1xcXCJdID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZm9ybVttZXRob2Q9XFxcImRpYWxvZ1xcXCJdID4gYnV0dG9uOmZpcnN0LW9mLXR5cGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbmZvcm1bbWV0aG9kPVxcXCJkaWFsb2dcXFwiXSA+IGJ1dHRvbjpsYXN0LW9mLXR5cGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmZpZWxkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMC4yNWVtO1xcbn1cXG5cXG4uZmllbGQtY29udGFpbmVyID4gbGFiZWwge1xcbiAgICBmb250LXNpemU6IDAuNzVlbTtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xcbn1cXG5cXG4uZmllbGQtY29udGFpbmVyID4gaW5wdXQsIC5maWVsZC1jb250YWluZXIgPiBzZWxlY3Qge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLndpZGUge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4ud2lkZS5jZW50ZXIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDEwcmVtKTtcbiAgICBncmlkLWF1dG8tcm93czogMTByZW07XG59XG5cbi5hZGQtcHJvamVjdC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDVyZW07XG4gICAgcmlnaHQ6IDVyZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0RBQWdEO0lBQ2hELGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDEwcmVtKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDEwcmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDVyZW07XFxuICAgIHJpZ2h0OiA1cmVtO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi4vLi4vc3R5bGVzL21vZGFsLmNzc1wiO1xuXG5cbmNvbnN0IG1vZGFsRmFjdG9yeSA9IChtb2RhbElkKSA9PiB7XG5cbiAgICAvLyBTdG9yZSBmb3JtIGVsZW1lbnRzXG4gICAgY29uc3QgX2Zvcm1IZWFkZXJzID0gW107XG4gICAgY29uc3QgX2Zvcm1GaWVsZHMgPSBbXTtcbiAgICBcbiAgICAvLyBEZWZpbmUgcHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgY29uc3QgX2luZm8gPSB7fTtcblxuICAgIGNvbnN0IF9tb2RhbERpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgX21vZGFsRGlhbG9nLnNldEF0dHJpYnV0ZShcImlkXCIsIG1vZGFsSWQpO1xuXG4gICAgY29uc3QgX21vZGFsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIF9tb2RhbEZvcm0uc2V0QXR0cmlidXRlKFwibWV0aG9kXCIsIFwiZGlhbG9nXCIpO1xuXG4gICAgY29uc3QgX2NhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgX2NhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgICBjb25zdCBfY29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgX2NvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuXG4gICAgLy8gRGVmaW5lIHByaXZhdGUgbWV0aG9kc1xuICAgIGNvbnN0IF9wYWNrYWdlRmllbGQgPSAoZmllbGQpID0+IHtcblxuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmaWVsZC1jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGZpZWxkTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGZpZWxkLmlkKTtcbiAgICAgICAgLy8gQ2FwaXRhbGl6ZSBsYWJlbCBuYW1lIGluIERPTVxuICAgICAgICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gZmllbGQubmFtZVswXS50b1VwcGVyQ2FzZSgpICsgZmllbGQubmFtZS5zbGljZSgxKTtcblxuICAgICAgICBpZiAoZmllbGQudGFnTmFtZSA9PT0gXCJURVhUQVJFQVwiKSB7XG5cbiAgICAgICAgICAgIGZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ3aWRlXCIpO1xuXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kKGZpZWxkTGFiZWwsIGZpZWxkKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGZpZWxkQ29udGFpbmVyO1xuICAgIFxuICAgIH07XG5cbiAgICBjb25zdCBfZmllbGRGYWN0b3J5ID0gKGRpdlR5cGUsIGlucHV0TmFtZSwge2lucHV0VHlwZSwgcmVxdWlyZWQgPSBmYWxzZSwgb3B0aW9ucyA9IFtdfSA9IHt9KSA9PiB7XG5cbiAgICAgICAgLy8gRnVuY3Rpb24ga2V5d29yZCBvdmVyIGFycm93IGZ1bmN0aW9uIHRvIGF0dGFjaCBcInRoaXNcIiB0byBhbiBvYmplY3QgYW5kIG5vdCB0byB0aGUgb3V0ZXIgZnVuY3Rpb24gd2hlcmUgaXQgaXMgZGVmaW5lZFxuICAgICAgICBjb25zdCBtYWtlRmllbGQgPSBmdW5jdGlvbihpbnB1dElkKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXZUeXBlKTtcbiAgICAgICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgaW5wdXROYW1lKTtcbiAgICAgICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0SWQpO1xuXG4gICAgICAgICAgICBpZiAoZGl2VHlwZSA9PT0gXCJpbnB1dFwiKSB7XG5cbiAgICAgICAgICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGlucHV0VHlwZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGl2VHlwZSA9PT0gXCJzZWxlY3RcIikge1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQoY3VycmVudE9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX2Zvcm1GaWVsZHMucHVzaChmaWVsZCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBtYWtlRmllbGQ7XG5cbiAgICB9O1xuXG4gICAgLy8gRGVmaW5lIHB1YmxpYyBtZXRob2RzXG4gICAgY29uc3QgZ2V0SHRtbCA9ICgpID0+IF9tb2RhbERpYWxvZztcblxuICAgIGNvbnN0IGdldEluZm8gPSAoKSA9PiBfaW5mbztcblxuICAgIGNvbnN0IG1ha2VUaXRsZUZpZWxkID0gX2ZpZWxkRmFjdG9yeShcImlucHV0XCIsIFwidGl0bGVcIiwge2lucHV0VHlwZTogXCJ0ZXh0XCIsIHJlcXVpcmVkOiB0cnVlfSk7XG5cbiAgICBjb25zdCBtYWtlRGVzY3JpcHRpb25GaWVsZCA9IF9maWVsZEZhY3RvcnkoXCJpbnB1dFwiLCBcImRlc2NyaXB0aW9uXCIsIHtpbnB1dFR5cGU6IFwidGV4dFwifSk7XG5cbiAgICBjb25zdCBtYWtlRHVlRGF0ZUZpZWxkID0gX2ZpZWxkRmFjdG9yeShcImlucHV0XCIsIFwiZHVlXCIsIHtpbnB1dFR5cGU6IFwiZGF0ZVwiLCByZXF1aXJlZDogdHJ1ZX0pO1xuXG4gICAgY29uc3QgbWFrZVByaW9yaXR5RmllbGQgPSBfZmllbGRGYWN0b3J5KFwic2VsZWN0XCIsIFwicHJpb3JpdHlcIiwge29wdGlvbnM6IFtcImxvd1wiLCBcIm1lZGl1bVwiLCBcImhpZ2hcIiwgXCJ1cmdlbnRcIl19KVxuXG4gICAgY29uc3QgbWFrZU5vdGVzRmllbGQgPSBfZmllbGRGYWN0b3J5KFwidGV4dGFyZWFcIiwgXCJub3Rlc1wiKTtcblxuICAgIC8vIEZ1bmN0aW9uIGtleXdvcmQgb3ZlciBhcnJvdyBmdW5jdGlvbiB0byBhdHRhY2ggXCJ0aGlzXCIgdG8gYW4gb2JqZWN0IGFuZCBub3QgdG8gdGhlIG91dGVyIGZ1bmN0aW9uIHdoZXJlIGl0IGlzIGRlZmluZWRcbiAgICBjb25zdCBtYWtlSGVhZGVyID0gZnVuY3Rpb24oc2l6ZSwgY29udGVudCkge1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoc2l6ZSk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwid2lkZVwiLCBcImNlbnRlclwiKTtcblxuICAgICAgICBfZm9ybUhlYWRlcnMucHVzaChoZWFkZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkID0gKCkgPT4ge1xuXG4gICAgICAgIGZvciAobGV0IGhlYWRlciBvZiBfZm9ybUhlYWRlcnMpIHtcbiAgICAgICAgICAgIF9tb2RhbEZvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGZpZWxkIG9mIF9mb3JtRmllbGRzKSB7XG4gICAgICAgICAgICBsZXQgcGFja2FnZWRGaWVsZCA9IF9wYWNrYWdlRmllbGQoZmllbGQpO1xuICAgICAgICAgICAgX21vZGFsRm9ybS5hcHBlbmRDaGlsZChwYWNrYWdlZEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9tb2RhbEZvcm0uYXBwZW5kQ2hpbGQoX2NhbmNlbEJ1dHRvbik7XG4gICAgICAgIF9tb2RhbEZvcm0uYXBwZW5kQ2hpbGQoX2NvbmZpcm1CdXR0b24pO1xuXG4gICAgICAgIF9tb2RhbERpYWxvZy5hcHBlbmRDaGlsZChfbW9kYWxGb3JtKVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXRIdG1sLFxuICAgICAgICAgICAgZ2V0SW5mb1xuICAgICAgICB9O1xuXG4gICAgfTtcblxuICAgIGNvbnN0IF9fc2V0SW5mbyA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgX2Zvcm1GaWVsZHMpIHtcbiAgICAgICAgICAgIF9pbmZvW2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBfX2NsZWFyRm9ybSA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgX2Zvcm1GaWVsZHMpIHtcbiAgICAgICAgICAgIGlmIChmaWVsZC50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XG4gICAgICAgICAgICAgICAgZmllbGQudmFsdWUgPSBmaWVsZC5maXJzdENoaWxkLnZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWVsZC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQ2FuY2VsIGZvcm1cbiAgICBfY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgX19jbGVhckZvcm0oKTtcbiAgICAgICAgX21vZGFsRGlhbG9nLmNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBTdG9yZSBmb3JtIGluZm9ybWF0aW9uIGluIGluZm8gb2JqZWN0XG4gICAgX21vZGFsRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgICBfX3NldEluZm8oKTtcbiAgICAgICAgX19jbGVhckZvcm0oKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1ha2VIZWFkZXIsXG4gICAgICAgIG1ha2VUaXRsZUZpZWxkLFxuICAgICAgICBtYWtlRGVzY3JpcHRpb25GaWVsZCxcbiAgICAgICAgbWFrZUR1ZURhdGVGaWVsZCxcbiAgICAgICAgbWFrZVByaW9yaXR5RmllbGQsXG4gICAgICAgIG1ha2VOb3Rlc0ZpZWxkLFxuICAgICAgICBidWlsZFxuICAgIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsRmFjdG9yeTsiLCJpbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gXCIuL21vZGFsX3RlbXBsYXRlXCI7XG5cbmNvbnN0IHByb2plY3RNb2RhbCA9IChtb2RhbEZhY3RvcnkoXCJwcm9qZWN0RGlhbG9nXCIpXG4gICAgLm1ha2VIZWFkZXIoXCJoMVwiLCBcIkNyZWF0ZSBhIHByb2plY3QhXCIpXG4gICAgLm1ha2VUaXRsZUZpZWxkKFwicHJvamVjdFRpdGxlXCIpXG4gICAgLm1ha2VEZXNjcmlwdGlvbkZpZWxkKFwicHJvamVjdERlc2NyaXB0aW9uXCIpXG4gICAgLm1ha2VEdWVEYXRlRmllbGQoXCJwcm9qZWN0RHVlRGF0ZVwiKVxuICAgIC5tYWtlUHJpb3JpdHlGaWVsZChcInByb2plY3RQcmlvcml0eVwiKVxuICAgIC5tYWtlTm90ZXNGaWVsZChcInByb2plY3ROb3Rlc1wiKVxuICAgIC5idWlsZCgpXG4gICAgKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1vZGFsOyIsImltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSBcIi4vbW9kYWxfdGVtcGxhdGVcIjtcblxuY29uc3QgdG9kb01vZGFsID0gKG1vZGFsRmFjdG9yeShcInRvZG9EaWFsb2dcIilcbiAgICAubWFrZUhlYWRlcihcImgxXCIsIFwiQ3JlYXRlIGEgdGFzayFcIilcbiAgICAubWFrZVRpdGxlRmllbGQoXCJ0b2RvVGl0bGVcIilcbiAgICAubWFrZURlc2NyaXB0aW9uRmllbGQoXCJ0b2RvRGVzY3JpcHRpb25cIilcbiAgICAubWFrZUR1ZURhdGVGaWVsZChcInRvZG9EdWVEYXRlXCIpXG4gICAgLm1ha2VQcmlvcml0eUZpZWxkKFwidG9kb1ByaW9yaXR5XCIpXG4gICAgLm1ha2VOb3Rlc0ZpZWxkKFwidG9kb05vdGVzXCIpXG4gICAgLmJ1aWxkKClcbiAgICApO1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvTW9kYWw7IiwiY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgLi4uaXRlbXMpID0+IHtcblxuICAgIGNvbnN0IF9jcmVhdGVDb250YWluZXIgPSAodGFnKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZENvbnRlbnQgPSAoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhZGRDb250ZW50O1xuICAgIH07XG5cbiAgICBjb25zdCBfYWRkVGl0bGVFbGVtZW50ID0gX2NyZWF0ZUNvbnRhaW5lcihcImgxXCIpO1xuXG4gICAgY29uc3QgX2FkZFN1YnRpdGxlRWxlbWVudCA9IF9jcmVhdGVDb250YWluZXIoXCJoMlwiKVxuXG4gICAgY29uc3QgX2FkZEtleUVsZW1lbnQgPSBfY3JlYXRlQ29udGFpbmVyKFwiaDRcIilcblxuICAgIGNvbnN0IF9hZGRCb2R5RWxlbWVudCA9IF9jcmVhdGVDb250YWluZXIoXCJwXCIpO1xuXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB0aXRsZTtcblxuICAgIGNvbnN0IHNldFRpdGxlID0gKHN0cmluZykgPT4ge1xuICAgICAgICB0aXRsZSA9IHN0cmluZztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcblxuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKHN0cmluZykgPT4ge1xuICAgICAgICBkZXNjcmlwdGlvbiA9IHN0cmluZztcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IGR1ZURhdGU7XG5cbiAgICBjb25zdCBzZXREdWVEYXRlID0gKGRhdGUpID0+IHtcbiAgICAgICAgZHVlRGF0ZSA9IGRhdGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4gcHJpb3JpdHk7XG5cbiAgICBjb25zdCBzZXRQcmlvcml0eSA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICBwcmlvcml0eSA9IHZhbHVlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXROb3RlcyA9ICgpID0+IG5vdGVzO1xuXG4gICAgY29uc3Qgc2V0Tm90ZXMgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIG5vdGVzID0gc3RyaW5nO1xuICAgIH07XG4gICAgXG4gICAgY29uc3QgX3RvZG9MaXN0ID0gaXRlbXM7XG5cbiAgICBjb25zdCBnZXRUb2RvTGlzdCA9ICgpID0+IF90b2RvTGlzdDtcblxuICAgIGNvbnN0IGFkZFRvVG9kb0xpc3QgPSAoaXRlbSkgPT4ge1xuICAgICAgICBfdG9kb0xpc3QucHVzaChpdGVtKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlRnJvbVRvZG9MaXN0ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBfdG9kb0xpc3QuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgX3RvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGZyb21PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgY29uc3QgeyB0aXRsZSA9IFwiXCIsIGRlc2NyaXB0aW9uID0gXCJcIiwgZHVlID0gXCJcIiwgcHJpb3JpdHkgPSBcIlwiLCBub3RlcyA9IFwiXCIgfSA9IG9iajtcbiAgICAgICAgc2V0VGl0bGUodGl0bGUpO1xuICAgICAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbik7XG4gICAgICAgIHNldER1ZURhdGUoZHVlKTtcbiAgICAgICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpO1xuICAgICAgICBzZXROb3Rlcyhub3Rlcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUNhcmQgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gX2FkZFRpdGxlRWxlbWVudChnZXRUaXRsZSgpKTtcbiAgICAgICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gX2FkZFN1YnRpdGxlRWxlbWVudChnZXREZXNjcmlwdGlvbigpKTtcbiAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBfYWRkS2V5RWxlbWVudChnZXREdWVEYXRlKCkpO1xuICAgICAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVcIik7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBfYWRkS2V5RWxlbWVudChnZXRQcmlvcml0eSgpKTtcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuXG4gICAgICAgIGNvbnN0IG5vdGVzID0gX2FkZEJvZHlFbGVtZW50KGdldE5vdGVzKCkpO1xuICAgICAgICBub3Rlcy5jbGFzc0xpc3QuYWRkKFwibm90ZXNcIik7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBub3Rlc1xuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgICAgIHNldERlc2NyaXB0aW9uLFxuICAgICAgICBnZXREdWVEYXRlLFxuICAgICAgICBzZXREdWVEYXRlLFxuICAgICAgICBnZXRQcmlvcml0eSxcbiAgICAgICAgc2V0UHJpb3JpdHksXG4gICAgICAgIGdldE5vdGVzLFxuICAgICAgICBzZXROb3RlcyxcbiAgICAgICAgZ2V0VG9kb0xpc3QsXG4gICAgICAgIGFkZFRvVG9kb0xpc3QsXG4gICAgICAgIHJlbW92ZUZyb21Ub2RvTGlzdCxcbiAgICAgICAgZnJvbU9iamVjdCxcbiAgICAgICAgY3JlYXRlQ2FyZFxuICAgIH07XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7IiwiY29uc3QgdG9kb0l0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMpID0+IHtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgdGl0bGUgPSBzdHJpbmc7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBzdHJpbmc7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuXG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgICAgIGR1ZURhdGUgPSBkYXRlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAodmFsdWUpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Tm90ZXMgPSAoKSA9PiBub3RlcztcblxuICAgIGNvbnN0IHNldE5vdGVzID0gKHN0cmluZykgPT4ge1xuICAgICAgICBub3RlcyA9IHN0cmluZztcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VGl0bGUsXG4gICAgICAgIHNldFRpdGxlLFxuICAgICAgICBnZXREZXNjcmlwdGlvbixcbiAgICAgICAgc2V0RGVzY3JpcHRpb24sXG4gICAgICAgIGdldER1ZURhdGUsXG4gICAgICAgIHNldER1ZURhdGUsXG4gICAgICAgIGdldFByaW9yaXR5LFxuICAgICAgICBzZXRQcmlvcml0eSxcbiAgICAgICAgZ2V0Tm90ZXMsXG4gICAgICAgIHNldE5vdGVzXG4gICAgfTtcbiAgICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9JdGVtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgcGx1c0ljb24gZnJvbSBcIi4vYXNzZXRzL2ljb25zL3BsdXMuc3ZnXCI7XG5pbXBvcnQgdG9kb0l0ZW0gZnJvbSBcIi4vbW9kdWxlcy90b2RvX29iamVjdFwiO1xuaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0X29iamVjdFwiO1xuaW1wb3J0IHRvZG9Nb2RhbCBmcm9tIFwiLi9tb2R1bGVzL21vZGFscy90b2RvX21vZGFsXCI7XG5pbXBvcnQgcHJvamVjdE1vZGFsIGZyb20gXCIuL21vZHVsZXMvbW9kYWxzL3Byb2plY3RfbW9kYWxcIjtcblxuY29uc3QgcHJvamVjdEh0bWwgPSBwcm9qZWN0TW9kYWwuZ2V0SHRtbCgpO1xuY29uc3QgcHJvamVjdEluZm8gPSBwcm9qZWN0TW9kYWwuZ2V0SW5mbygpO1xuXG5jb25zdCByZW5kZXJCb2R5ID0gKGVsZW1lbnRzKSA9PiB7XG4gICAgY29uc3Qgc3RhY2sgPSBlbGVtZW50cy5zbGljZSgpLnJldmVyc2UoKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlcGxhY2VDaGlsZHJlbihwcm9qZWN0SHRtbCwgYWRkUHJvamVjdEJ1dHRvbiwgLi4uc3RhY2spO1xufVxuXG5jb25zdCBib2R5RWxlbWVudHMgPSBbXTtcblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHBsdXNJY29uO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn0pKCk7XG5cbnJlbmRlckJvZHkoYm9keUVsZW1lbnRzKTtcblxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RIdG1sLnNob3dNb2RhbCgpO1xufSlcblxucHJvamVjdEh0bWwuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG4gICAgbGV0IG5ld1Byb2plY3QgPSBwcm9qZWN0KCkuZnJvbU9iamVjdChwcm9qZWN0SW5mbyk7XG4gICAgbGV0IG5ld1Byb2plY3RDYXJkID0gbmV3UHJvamVjdC5jcmVhdGVDYXJkKCk7XG4gICAgYm9keUVsZW1lbnRzLnB1c2gobmV3UHJvamVjdENhcmQpO1xuICAgIHJlbmRlckJvZHkoYm9keUVsZW1lbnRzKTtcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9