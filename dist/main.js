/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

dialog {
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

form {
    padding: 2em;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
}

input, select, textarea {
    padding: 0.25em;
    letter-spacing: 0.05em;
}

form > button {
    font-size: 3em;
    font-weight: bold;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: white;
}

form > button:first-of-type {
    background-color: red;
}

form > button:last-of-type {
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

.field-container:has(textarea) {
    grid-column: span 2;
}

.add-project-button {
    position: fixed;
    top: 5rem;
    right: 5rem;
    height: 5rem;
    width: 5rem;
    border: 5px solid gray;
    border-radius: 10px;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,gDAAgD;IAChD,iBAAiB;IACjB,aAAa;IACb,2CAA2C;IAC3C,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,yBAAyB;IACzB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,mBAAmB;IACnB,gCAAgC;IAChC,qBAAqB;AACzB;;AAEA;IACI;QACI,2CAA2C;IAC/C;IACA;QACI,yCAAyC;IAC7C;AACJ;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,qBAAqB;IACrB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,WAAW;IACX,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,mBAAmB;AACvB","sourcesContent":["html {\n    box-sizing: border-box;\n}\n\n*, *::before, *::after {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n}\n\nbody {\n    position: relative;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    min-height: 100vh;\n    display: grid;\n    grid-template-rows: repeat(auto-fit, 10rem);\n    grid-auto-rows: 10rem;\n}\n\ndialog {\n    font-size: 1rem;\n    text-transform: uppercase;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    border-radius: 10px;\n    transform: translate(-50%, -50%);\n    animation: grow 200ms;\n}\n\n@keyframes grow {\n    from {\n        transform: translate(-50%, -50%) scale(0.9);\n    }\n    to {\n        transform: translate(-50%, -50%) scale(1);\n    }\n}\n\nform {\n    padding: 2em;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2em;\n}\n\ninput, select, textarea {\n    padding: 0.25em;\n    letter-spacing: 0.05em;\n}\n\nform > button {\n    font-size: 3em;\n    font-weight: bold;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: white;\n}\n\nform > button:first-of-type {\n    background-color: red;\n}\n\nform > button:last-of-type {\n    background-color: green;\n}\n\n.field-container {\n    display: grid;\n    gap: 0.25em;\n}\n\n.field-container > label {\n    font-size: 0.75em;\n    letter-spacing: 0.1em;\n}\n\n.field-container > input, .field-container > select {\n    font-size: 1.25em;\n}\n\n.field-container:has(textarea) {\n    grid-column: span 2;\n}\n\n.add-project-button {\n    position: fixed;\n    top: 5rem;\n    right: 5rem;\n    height: 5rem;\n    width: 5rem;\n    border: 5px solid gray;\n    border-radius: 10px;\n}"],"sourceRoot":""}]);
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
const modalFactory = (modalId) => {

    // Store form elements
    const _formHeaders = [];
    const _formFields = [];
    
    // Define private elements
    const _modalDialog = document.createElement("dialog");
    _modalDialog.setAttribute("id", modalId);

    const _modalForm = document.createElement("form");
    _modalForm.setAttribute("method", "dialog");

    const _cancelButton = document.createElement("button");
    _cancelButton.textContent = "Cancel";

    const _confirmButton = document.createElement("button");
    _confirmButton.textContent = "Add";

    // Define private methods
    const _packageField = (field, fieldName) => {

        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("field-container");
        const fieldLabel = document.createElement("label");
        fieldLabel.setAttribute("for", field.id);
        fieldLabel.textContent = fieldName;
    
        fieldContainer.append(fieldLabel, field);
    
        return fieldContainer;
    
    };

    const _fieldFactory = (divType, {inputType, required = false, options = []} = {}) => {

        // Function keyword required to keep context of this within object
        const makeField = function(inputName, inputId) {

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
    const makeTitleField = _fieldFactory("input", {inputType: "text", required: true});

    const makeDescriptionField = _fieldFactory("input", {inputType: "text"});

    const makeDueDateField = _fieldFactory("input", {inputType: "date", required: true});

    const makePriorityField = _fieldFactory("select", {options: ["low", "medium", "high", "urgent"]})

    const makeNotesField = _fieldFactory("textarea");

    // Function keyword required to keep context of this within object
    const makeHeader = function(size, content) {

        const header = document.createElement(size);
        header.textContent = content;

        _formHeaders.push(header);
        return this;

    }

    const build = () => {

        for (let header of _formHeaders) {
            _modalForm.appendChild(header);
        }

        for (let field of _formFields) {
            let packagedField = _packageField(field, field.name);
            _modalForm.appendChild(packagedField);
        }

        _modalForm.appendChild(_cancelButton);
        _modalForm.appendChild(_confirmButton);

        _modalDialog.appendChild(_modalForm)
        return _modalDialog;

    };

    // Clear form
    const clear = () => {
        for (let item of _formFields) {
            if (item.tagName === "SELECT") {
                item.value = item.firstChild.value;
            } else {
                item.value = "";
            }
        }
    };

    // Cancel form
    _cancelButton.addEventListener("click", (event) => {
        event.preventDefault();
        clear();
        _modalDialog.close();
    });

    // Store form information in _modalDialog.information object
    _modalForm.addEventListener("submit", () => {
        _modalDialog.information = {
            title: field.value,
            description: modalDescription.value,
            dueDate: modalDueDate.value,
            priority: modalPriority.value,
            notes: modalNotes.value
        };
        clear();
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


const createProjectModal = (0,_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"])("projectDialog");

const projectModal = (createProjectModal
    .makeHeader("h1", "Create a project!")
    .makeTitleField("Title", "projectTitle")
    .makeDescriptionField("Description", "projectDescription")
    .makeDueDateField("Due", "projectDueDate")
    .makePriorityField("Priority", "projectPriority")
    .makeNotesField("Notes", "projectNotes")
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


const todoModal = (0,_modal_template__WEBPACK_IMPORTED_MODULE_0__["default"])("todoDialog", "todoTitle", "todoDesc", "todoDueDate", "todoPriority", "todoNotes", "todoConfirmButton");

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
        removeFromTodoList
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







const renderBody = (elements) => {
    const stack = elements.slice().reverse();
    document.body.replaceChildren(_modules_modals_project_modal__WEBPACK_IMPORTED_MODULE_5__["default"], addProjectButton, ...stack);
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
    _modules_modals_project_modal__WEBPACK_IMPORTED_MODULE_5__["default"].showModal();
})

_modules_modals_project_modal__WEBPACK_IMPORTED_MODULE_5__["default"].addEventListener("submit", () => {
    const createProject = () => {
        const container = document.createElement("div");
        const title = document.createElement("h1");
        title.textContent = _modules_modals_project_modal__WEBPACK_IMPORTED_MODULE_5__["default"].information.title;
        const description = document.createElement("h2");
        description.textContent = _modules_modals_project_modal__WEBPACK_IMPORTED_MODULE_5__["default"].information.description;
        const dueDate = document.createElement("h3");
        dueDate.textContent = _modules_modals_project_modal__WEBPACK_IMPORTED_MODULE_5__["default"].information.dueDate;
        const priority = document.createElement("h4");
        priority.textContent = _modules_modals_project_modal__WEBPACK_IMPORTED_MODULE_5__["default"].information.priority;
        const notes = document.createElement("p");
        notes.textContent = _modules_modals_project_modal__WEBPACK_IMPORTED_MODULE_5__["default"].information.notes;
        container.append(
            title,
            description,
            dueDate,
            priority,
            notes
        )
        return container;
    }
    bodyElements.push(createProject());
    renderBody(bodyElements);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ21CO0FBQ0Y7QUFDRTtBQUNLO0FBQ007O0FBRTFEO0FBQ0E7QUFDQSxrQ0FBa0MscUVBQVk7QUFDOUM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQVE7QUFDeEI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQSxJQUFJLHFFQUFZO0FBQ2hCLENBQUM7O0FBRUQscUVBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIscUVBQVk7QUFDeEM7QUFDQSxrQ0FBa0MscUVBQVk7QUFDOUM7QUFDQSw4QkFBOEIscUVBQVk7QUFDMUM7QUFDQSwrQkFBK0IscUVBQVk7QUFDM0M7QUFDQSw0QkFBNEIscUVBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFscy9tb2RhbF90ZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RhbHMvcHJvamVjdF9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RhbHMvdG9kb19tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0X29iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvX29iamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xufVxuXG5ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDEwcmVtKTtcbiAgICBncmlkLWF1dG8tcm93czogMTByZW07XG59XG5cbmRpYWxvZyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGFuaW1hdGlvbjogZ3JvdyAyMDBtcztcbn1cblxuQGtleWZyYW1lcyBncm93IHtcbiAgICBmcm9tIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC45KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcbiAgICB9XG59XG5cbmZvcm0ge1xuICAgIHBhZGRpbmc6IDJlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDJlbTtcbn1cblxuaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEge1xuICAgIHBhZGRpbmc6IDAuMjVlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xufVxuXG5mb3JtID4gYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmZvcm0gPiBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG5mb3JtID4gYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG59XG5cbi5maWVsZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAwLjI1ZW07XG59XG5cbi5maWVsZC1jb250YWluZXIgPiBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xufVxuXG4uZmllbGQtY29udGFpbmVyID4gaW5wdXQsIC5maWVsZC1jb250YWluZXIgPiBzZWxlY3Qge1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4uZmllbGQtY29udGFpbmVyOmhhcyh0ZXh0YXJlYSkge1xuICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XG59XG5cbi5hZGQtcHJvamVjdC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDVyZW07XG4gICAgcmlnaHQ6IDVyZW07XG4gICAgaGVpZ2h0OiA1cmVtO1xuICAgIHdpZHRoOiA1cmVtO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0RBQWdEO0lBQ2hELGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsMkNBQTJDO0lBQzNDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtRQUNJLDJDQUEyQztJQUMvQztJQUNBO1FBQ0kseUNBQXlDO0lBQzdDO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maXQsIDEwcmVtKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDEwcmVtO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGFuaW1hdGlvbjogZ3JvdyAyMDBtcztcXG59XFxuXFxuQGtleWZyYW1lcyBncm93IHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwLjkpO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgICB9XFxufVxcblxcbmZvcm0ge1xcbiAgICBwYWRkaW5nOiAyZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZ2FwOiAyZW07XFxufVxcblxcbmlucHV0LCBzZWxlY3QsIHRleHRhcmVhIHtcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xcbn1cXG5cXG5mb3JtID4gYnV0dG9uIHtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuZm9ybSA+IGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG5mb3JtID4gYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZmllbGQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAwLjI1ZW07XFxufVxcblxcbi5maWVsZC1jb250YWluZXIgPiBsYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMC43NWVtO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxufVxcblxcbi5maWVsZC1jb250YWluZXIgPiBpbnB1dCwgLmZpZWxkLWNvbnRhaW5lciA+IHNlbGVjdCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG4uZmllbGQtY29udGFpbmVyOmhhcyh0ZXh0YXJlYSkge1xcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDVyZW07XFxuICAgIHJpZ2h0OiA1cmVtO1xcbiAgICBoZWlnaHQ6IDVyZW07XFxuICAgIHdpZHRoOiA1cmVtO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBncmF5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgbW9kYWxGYWN0b3J5ID0gKG1vZGFsSWQpID0+IHtcblxuICAgIC8vIFN0b3JlIGZvcm0gZWxlbWVudHNcbiAgICBjb25zdCBfZm9ybUhlYWRlcnMgPSBbXTtcbiAgICBjb25zdCBfZm9ybUZpZWxkcyA9IFtdO1xuICAgIFxuICAgIC8vIERlZmluZSBwcml2YXRlIGVsZW1lbnRzXG4gICAgY29uc3QgX21vZGFsRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICBfbW9kYWxEaWFsb2cuc2V0QXR0cmlidXRlKFwiaWRcIiwgbW9kYWxJZCk7XG5cbiAgICBjb25zdCBfbW9kYWxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgX21vZGFsRm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJkaWFsb2dcIik7XG5cbiAgICBjb25zdCBfY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBfY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICAgIGNvbnN0IF9jb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBfY29uZmlybUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG5cbiAgICAvLyBEZWZpbmUgcHJpdmF0ZSBtZXRob2RzXG4gICAgY29uc3QgX3BhY2thZ2VGaWVsZCA9IChmaWVsZCwgZmllbGROYW1lKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmllbGQtY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBmaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBmaWVsZExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBmaWVsZC5pZCk7XG4gICAgICAgIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBmaWVsZE5hbWU7XG4gICAgXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZChmaWVsZExhYmVsLCBmaWVsZCk7XG4gICAgXG4gICAgICAgIHJldHVybiBmaWVsZENvbnRhaW5lcjtcbiAgICBcbiAgICB9O1xuXG4gICAgY29uc3QgX2ZpZWxkRmFjdG9yeSA9IChkaXZUeXBlLCB7aW5wdXRUeXBlLCByZXF1aXJlZCA9IGZhbHNlLCBvcHRpb25zID0gW119ID0ge30pID0+IHtcblxuICAgICAgICAvLyBGdW5jdGlvbiBrZXl3b3JkIHJlcXVpcmVkIHRvIGtlZXAgY29udGV4dCBvZiB0aGlzIHdpdGhpbiBvYmplY3RcbiAgICAgICAgY29uc3QgbWFrZUZpZWxkID0gZnVuY3Rpb24oaW5wdXROYW1lLCBpbnB1dElkKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChkaXZUeXBlKTtcbiAgICAgICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgaW5wdXROYW1lKTtcbiAgICAgICAgICAgIGZpZWxkLnNldEF0dHJpYnV0ZShcImlkXCIsIGlucHV0SWQpO1xuXG4gICAgICAgICAgICBpZiAoZGl2VHlwZSA9PT0gXCJpbnB1dFwiKSB7XG5cbiAgICAgICAgICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGlucHV0VHlwZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGl2VHlwZSA9PT0gXCJzZWxlY3RcIikge1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgb3B0aW9uIG9mIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb24udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQoY3VycmVudE9wdGlvbik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICBmaWVsZC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX2Zvcm1GaWVsZHMucHVzaChmaWVsZCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBtYWtlRmllbGQ7XG5cbiAgICB9O1xuXG4gICAgLy8gRGVmaW5lIHB1YmxpYyBtZXRob2RzXG4gICAgY29uc3QgbWFrZVRpdGxlRmllbGQgPSBfZmllbGRGYWN0b3J5KFwiaW5wdXRcIiwge2lucHV0VHlwZTogXCJ0ZXh0XCIsIHJlcXVpcmVkOiB0cnVlfSk7XG5cbiAgICBjb25zdCBtYWtlRGVzY3JpcHRpb25GaWVsZCA9IF9maWVsZEZhY3RvcnkoXCJpbnB1dFwiLCB7aW5wdXRUeXBlOiBcInRleHRcIn0pO1xuXG4gICAgY29uc3QgbWFrZUR1ZURhdGVGaWVsZCA9IF9maWVsZEZhY3RvcnkoXCJpbnB1dFwiLCB7aW5wdXRUeXBlOiBcImRhdGVcIiwgcmVxdWlyZWQ6IHRydWV9KTtcblxuICAgIGNvbnN0IG1ha2VQcmlvcml0eUZpZWxkID0gX2ZpZWxkRmFjdG9yeShcInNlbGVjdFwiLCB7b3B0aW9uczogW1wibG93XCIsIFwibWVkaXVtXCIsIFwiaGlnaFwiLCBcInVyZ2VudFwiXX0pXG5cbiAgICBjb25zdCBtYWtlTm90ZXNGaWVsZCA9IF9maWVsZEZhY3RvcnkoXCJ0ZXh0YXJlYVwiKTtcblxuICAgIC8vIEZ1bmN0aW9uIGtleXdvcmQgcmVxdWlyZWQgdG8ga2VlcCBjb250ZXh0IG9mIHRoaXMgd2l0aGluIG9iamVjdFxuICAgIGNvbnN0IG1ha2VIZWFkZXIgPSBmdW5jdGlvbihzaXplLCBjb250ZW50KSB7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChzaXplKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gY29udGVudDtcblxuICAgICAgICBfZm9ybUhlYWRlcnMucHVzaChoZWFkZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIGNvbnN0IGJ1aWxkID0gKCkgPT4ge1xuXG4gICAgICAgIGZvciAobGV0IGhlYWRlciBvZiBfZm9ybUhlYWRlcnMpIHtcbiAgICAgICAgICAgIF9tb2RhbEZvcm0uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGZpZWxkIG9mIF9mb3JtRmllbGRzKSB7XG4gICAgICAgICAgICBsZXQgcGFja2FnZWRGaWVsZCA9IF9wYWNrYWdlRmllbGQoZmllbGQsIGZpZWxkLm5hbWUpO1xuICAgICAgICAgICAgX21vZGFsRm9ybS5hcHBlbmRDaGlsZChwYWNrYWdlZEZpZWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9tb2RhbEZvcm0uYXBwZW5kQ2hpbGQoX2NhbmNlbEJ1dHRvbik7XG4gICAgICAgIF9tb2RhbEZvcm0uYXBwZW5kQ2hpbGQoX2NvbmZpcm1CdXR0b24pO1xuXG4gICAgICAgIF9tb2RhbERpYWxvZy5hcHBlbmRDaGlsZChfbW9kYWxGb3JtKVxuICAgICAgICByZXR1cm4gX21vZGFsRGlhbG9nO1xuXG4gICAgfTtcblxuICAgIC8vIENsZWFyIGZvcm1cbiAgICBjb25zdCBjbGVhciA9ICgpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBfZm9ybUZpZWxkcykge1xuICAgICAgICAgICAgaWYgKGl0ZW0udGFnTmFtZSA9PT0gXCJTRUxFQ1RcIikge1xuICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSBpdGVtLmZpcnN0Q2hpbGQudmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIENhbmNlbCBmb3JtXG4gICAgX2NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNsZWFyKCk7XG4gICAgICAgIF9tb2RhbERpYWxvZy5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gU3RvcmUgZm9ybSBpbmZvcm1hdGlvbiBpbiBfbW9kYWxEaWFsb2cuaW5mb3JtYXRpb24gb2JqZWN0XG4gICAgX21vZGFsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcbiAgICAgICAgX21vZGFsRGlhbG9nLmluZm9ybWF0aW9uID0ge1xuICAgICAgICAgICAgdGl0bGU6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IG1vZGFsRGVzY3JpcHRpb24udmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBtb2RhbER1ZURhdGUudmFsdWUsXG4gICAgICAgICAgICBwcmlvcml0eTogbW9kYWxQcmlvcml0eS52YWx1ZSxcbiAgICAgICAgICAgIG5vdGVzOiBtb2RhbE5vdGVzLnZhbHVlXG4gICAgICAgIH07XG4gICAgICAgIGNsZWFyKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWtlSGVhZGVyLFxuICAgICAgICBtYWtlVGl0bGVGaWVsZCxcbiAgICAgICAgbWFrZURlc2NyaXB0aW9uRmllbGQsXG4gICAgICAgIG1ha2VEdWVEYXRlRmllbGQsXG4gICAgICAgIG1ha2VQcmlvcml0eUZpZWxkLFxuICAgICAgICBtYWtlTm90ZXNGaWVsZCxcbiAgICAgICAgYnVpbGRcbiAgICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbEZhY3Rvcnk7IiwiaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tIFwiLi9tb2RhbF90ZW1wbGF0ZVwiO1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0TW9kYWwgPSBtb2RhbEZhY3RvcnkoXCJwcm9qZWN0RGlhbG9nXCIpO1xuXG5jb25zdCBwcm9qZWN0TW9kYWwgPSAoY3JlYXRlUHJvamVjdE1vZGFsXG4gICAgLm1ha2VIZWFkZXIoXCJoMVwiLCBcIkNyZWF0ZSBhIHByb2plY3QhXCIpXG4gICAgLm1ha2VUaXRsZUZpZWxkKFwiVGl0bGVcIiwgXCJwcm9qZWN0VGl0bGVcIilcbiAgICAubWFrZURlc2NyaXB0aW9uRmllbGQoXCJEZXNjcmlwdGlvblwiLCBcInByb2plY3REZXNjcmlwdGlvblwiKVxuICAgIC5tYWtlRHVlRGF0ZUZpZWxkKFwiRHVlXCIsIFwicHJvamVjdER1ZURhdGVcIilcbiAgICAubWFrZVByaW9yaXR5RmllbGQoXCJQcmlvcml0eVwiLCBcInByb2plY3RQcmlvcml0eVwiKVxuICAgIC5tYWtlTm90ZXNGaWVsZChcIk5vdGVzXCIsIFwicHJvamVjdE5vdGVzXCIpXG4gICAgLmJ1aWxkKClcbiAgICApO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TW9kYWw7IiwiaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tIFwiLi9tb2RhbF90ZW1wbGF0ZVwiO1xuXG5jb25zdCB0b2RvTW9kYWwgPSBtb2RhbEZhY3RvcnkoXCJ0b2RvRGlhbG9nXCIsIFwidG9kb1RpdGxlXCIsIFwidG9kb0Rlc2NcIiwgXCJ0b2RvRHVlRGF0ZVwiLCBcInRvZG9Qcmlvcml0eVwiLCBcInRvZG9Ob3Rlc1wiLCBcInRvZG9Db25maXJtQnV0dG9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvTW9kYWw7IiwiY29uc3QgcHJvamVjdCA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgLi4uaXRlbXMpID0+IHtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG5cbiAgICBjb25zdCBzZXRUaXRsZSA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgdGl0bGUgPSBzdHJpbmc7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4gZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgZGVzY3JpcHRpb24gPSBzdHJpbmc7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiBkdWVEYXRlO1xuXG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChkYXRlKSA9PiB7XG4gICAgICAgIGR1ZURhdGUgPSBkYXRlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuXG4gICAgY29uc3Qgc2V0UHJpb3JpdHkgPSAodmFsdWUpID0+IHtcbiAgICAgICAgcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0Tm90ZXMgPSAoKSA9PiBub3RlcztcblxuICAgIGNvbnN0IHNldE5vdGVzID0gKHN0cmluZykgPT4ge1xuICAgICAgICBub3RlcyA9IHN0cmluZztcbiAgICB9O1xuICAgIFxuICAgIGNvbnN0IF90b2RvTGlzdCA9IGl0ZW1zO1xuXG4gICAgY29uc3QgZ2V0VG9kb0xpc3QgPSAoKSA9PiBfdG9kb0xpc3Q7XG5cbiAgICBjb25zdCBhZGRUb1RvZG9MaXN0ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgX3RvZG9MaXN0LnB1c2goaXRlbSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUZyb21Ub2RvTGlzdCA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gX3RvZG9MaXN0LmluZGV4T2YoaXRlbSk7XG4gICAgICAgIF90b2RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXRUaXRsZSxcbiAgICAgICAgc2V0VGl0bGUsXG4gICAgICAgIGdldERlc2NyaXB0aW9uLFxuICAgICAgICBzZXREZXNjcmlwdGlvbixcbiAgICAgICAgZ2V0RHVlRGF0ZSxcbiAgICAgICAgc2V0RHVlRGF0ZSxcbiAgICAgICAgZ2V0UHJpb3JpdHksXG4gICAgICAgIHNldFByaW9yaXR5LFxuICAgICAgICBnZXROb3RlcyxcbiAgICAgICAgc2V0Tm90ZXMsXG4gICAgICAgIGdldFRvZG9MaXN0LFxuICAgICAgICBhZGRUb1RvZG9MaXN0LFxuICAgICAgICByZW1vdmVGcm9tVG9kb0xpc3RcbiAgICB9O1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0OyIsImNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzKSA9PiB7XG5cbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHRpdGxlO1xuXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIHRpdGxlID0gc3RyaW5nO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IGRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAoc3RyaW5nKSA9PiB7XG4gICAgICAgIGRlc2NyaXB0aW9uID0gc3RyaW5nO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcblxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAoZGF0ZSkgPT4ge1xuICAgICAgICBkdWVEYXRlID0gZGF0ZTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0UHJpb3JpdHkgPSAoKSA9PiBwcmlvcml0eTtcblxuICAgIGNvbnN0IHNldFByaW9yaXR5ID0gKHZhbHVlKSA9PiB7XG4gICAgICAgIHByaW9yaXR5ID0gdmFsdWU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldE5vdGVzID0gKCkgPT4gbm90ZXM7XG5cbiAgICBjb25zdCBzZXROb3RlcyA9IChzdHJpbmcpID0+IHtcbiAgICAgICAgbm90ZXMgPSBzdHJpbmc7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRpdGxlLFxuICAgICAgICBzZXRUaXRsZSxcbiAgICAgICAgZ2V0RGVzY3JpcHRpb24sXG4gICAgICAgIHNldERlc2NyaXB0aW9uLFxuICAgICAgICBnZXREdWVEYXRlLFxuICAgICAgICBzZXREdWVEYXRlLFxuICAgICAgICBnZXRQcmlvcml0eSxcbiAgICAgICAgc2V0UHJpb3JpdHksXG4gICAgICAgIGdldE5vdGVzLFxuICAgICAgICBzZXROb3Rlc1xuICAgIH07XG4gICAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvSXRlbTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHBsdXNJY29uIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9wbHVzLnN2Z1wiO1xuaW1wb3J0IHRvZG9JdGVtIGZyb20gXCIuL21vZHVsZXMvdG9kb19vYmplY3RcIjtcbmltcG9ydCBwcm9qZWN0IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdF9vYmplY3RcIjtcbmltcG9ydCB0b2RvTW9kYWwgZnJvbSBcIi4vbW9kdWxlcy9tb2RhbHMvdG9kb19tb2RhbFwiO1xuaW1wb3J0IHByb2plY3RNb2RhbCBmcm9tIFwiLi9tb2R1bGVzL21vZGFscy9wcm9qZWN0X21vZGFsXCI7XG5cbmNvbnN0IHJlbmRlckJvZHkgPSAoZWxlbWVudHMpID0+IHtcbiAgICBjb25zdCBzdGFjayA9IGVsZW1lbnRzLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIGRvY3VtZW50LmJvZHkucmVwbGFjZUNoaWxkcmVuKHByb2plY3RNb2RhbCwgYWRkUHJvamVjdEJ1dHRvbiwgLi4uc3RhY2spO1xufVxuXG5jb25zdCBib2R5RWxlbWVudHMgPSBbXTtcblxuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IHBsdXNJY29uO1xuICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgcmV0dXJuIGJ1dHRvbjtcbn0pKCk7XG5cbnJlbmRlckJvZHkoYm9keUVsZW1lbnRzKTtcblxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHByb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcbn0pXG5cbnByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0TW9kYWwuaW5mb3JtYXRpb24udGl0bGU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RNb2RhbC5pbmZvcm1hdGlvbi5kZXNjcmlwdGlvbjtcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3RNb2RhbC5pbmZvcm1hdGlvbi5kdWVEYXRlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBwcm9qZWN0TW9kYWwuaW5mb3JtYXRpb24ucHJpb3JpdHk7XG4gICAgICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIG5vdGVzLnRleHRDb250ZW50ID0gcHJvamVjdE1vZGFsLmluZm9ybWF0aW9uLm5vdGVzO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIG5vdGVzXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG4gICAgYm9keUVsZW1lbnRzLnB1c2goY3JlYXRlUHJvamVjdCgpKTtcbiAgICByZW5kZXJCb2R5KGJvZHlFbGVtZW50cyk7XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==