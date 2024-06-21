"use strict";
(self["webpackChunkodin_todo"] = self["webpackChunkodin_todo"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --priority-color-high: #f5986a;
    --priority-color-mid: #eff371;
    --priority-color-normal: #90f551;

    --bg-color-all: black;
    --bg-color-sidebar: #5e63b6;
    --bg-color-topbar: #a393eb;

    --font-color-title: #27296d;
    --font-color-general: #f5c7f7;

    --color: #000;
}

* {
    box-sizing: border-box;
}

input, button,
textarea, select {
  font-family: inherit;
  font-size: inherit;
}

img,
picture {
  max-width: 100%;
  display: block;
}

body {
    margin: 0;
    padding: 0;
    height: 100vh;
}

.hero {
    background-color: var(--bg-color-all);
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr auto;

}

.sideBar {
    grid-column: 1 / 2;
    grid-row: 1 / -1;

    background-color: var(--bg-color-sidebar);

    padding: 20px;
    box-shadow: 2px 0px 2px var(--font-color-general);
}

.sidetextWrapper {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
}

.sideBarAddWork, .sideBarAddProj {
    display: flex;
    
    font-size: 20px;
    gap: 5px;
    color: var(--font-color-general);
}

.sideBarAddWork {
    margin-top: 20vh;
}

.sideBarAddWork:hover, .sideBarAddProj:hover {
    cursor: pointer;
    color: var(--bg-color-topbar);
}

.topRow {
    grid-row: 1 / 2;
    grid-column: 2 / -1;
    background-color: var(--bg-color-topbar);
    
    border-bottom: 1px solid var(--bg-color-sidebar);
    box-shadow: 0 2px 2px var(--bg-color-sidebar);
    
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 25vh;

    margin-bottom: 35px;
}

.topRowLeft {
    font-size: 20px;
    width: 40vw;

    display: flex;
}

.searchLogo:hover {
    cursor: pointer;
}

.searchBar {
    border: 1px solid var(--bg-color-sidebar);
    border-radius: 12px;
    width: 100%;

    padding-left: 20px;
}

.topRowRight > label, .topRowRight > select {
    font-weight: bold;
    font-size: 20px;
    color: var(--font-color-general);
}

/* class to be created */
.toDoContainer {
    min-height: 75vh;
    grid-column: 2 / -1;
    grid-row: 2 / -1;

    padding: 0 35px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.toDoCards {
    position: relative;
    border: 1px solid var(--bg-color-sidebar);
    background: linear-gradient(var(--bg-color-sidebar), var(--bg-color-topbar));
    max-height: 300px;

    border-radius: 8px;
    padding: 20px;

    display: flex;
    flex-direction: column;
}

.toDoCards::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 100%;
    border-radius: 8px 0 0 8px;
    background-color: var(--color);
}

.toDoCards > div {
    padding: 20px;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 10px;
}

.toDoCards > div > p {
    margin : 0;
}

.popUpTodo {
    position: absolute;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 25px;
    width: 50vw;

    border-radius: 8px;
    border: 5px solid var(--font-color-general);
    background-color: var(--bg-color-sidebar);

}

.popUpWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;

}

.popUpDesc {
    height: 20vh;
    overflow-wrap: break-word;
    word-wrap: break-word; /* in case older browser */
    white-space: pre-wrap;
    resize: vertical;

}

.popUpTitle, .popUpDesc, .popUpCalender,
.popUpPriorityWrapper {
    display: flex;
    gap: 10px;

    border-radius: 8px;
    padding-top: 10px;

}

.popUpSubmit {
    font-size: 25px;
    padding: 10px;

    border-radius: 8px;
    background-color: var(--bg-color-topbar);
}

.popUpSubmit:hover {
    cursor: pointer;
    background-color: var(--font-color-general);
}

.workspace:hover {
    cursor: pointer;
    color: var(--bg-color-topbar);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,6BAA6B;IAC7B,gCAAgC;;IAEhC,qBAAqB;IACrB,2BAA2B;IAC3B,0BAA0B;;IAE1B,2BAA2B;IAC3B,6BAA6B;;IAE7B,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;EAEE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;;AAEhC;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;;IAEhB,yCAAyC;;IAEzC,aAAa;IACb,iDAAiD;AACrD;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;;IAEb,eAAe;IACf,QAAQ;IACR,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,wCAAwC;;IAExC,gDAAgD;IAChD,6CAA6C;;IAE7C,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;;IAEnB,YAAY;;IAEZ,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,WAAW;;IAEX,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,mBAAmB;IACnB,WAAW;;IAEX,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,gCAAgC;AACpC;;AAEA,wBAAwB;AACxB;IACI,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;;IAEhB,eAAe;;IAEf,aAAa;IACb,2DAA2D;IAC3D,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,yCAAyC;IACzC,4EAA4E;IAC5E,iBAAiB;;IAEjB,kBAAkB;IAClB,aAAa;;IAEb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,0BAA0B;IAC1B,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;;IAElB,QAAQ;IACR,SAAS;IACT,gCAAgC;;IAEhC,aAAa;IACb,WAAW;;IAEX,kBAAkB;IAClB,2CAA2C;IAC3C,yCAAyC;;AAE7C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,SAAS;;AAEb;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,qBAAqB,EAAE,0BAA0B;IACjD,qBAAqB;IACrB,gBAAgB;;AAEpB;;AAEA;;IAEI,aAAa;IACb,SAAS;;IAET,kBAAkB;IAClB,iBAAiB;;AAErB;;AAEA;IACI,eAAe;IACf,aAAa;;IAEb,kBAAkB;IAClB,wCAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,2CAA2C;AAC/C;;AAEA;IACI,eAAe;IACf,6BAA6B;AACjC","sourcesContent":[":root {\n    --priority-color-high: #f5986a;\n    --priority-color-mid: #eff371;\n    --priority-color-normal: #90f551;\n\n    --bg-color-all: black;\n    --bg-color-sidebar: #5e63b6;\n    --bg-color-topbar: #a393eb;\n\n    --font-color-title: #27296d;\n    --font-color-general: #f5c7f7;\n\n    --color: #000;\n}\n\n* {\n    box-sizing: border-box;\n}\n\ninput, button,\ntextarea, select {\n  font-family: inherit;\n  font-size: inherit;\n}\n\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n}\n\n.hero {\n    background-color: var(--bg-color-all);\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr auto;\n\n}\n\n.sideBar {\n    grid-column: 1 / 2;\n    grid-row: 1 / -1;\n\n    background-color: var(--bg-color-sidebar);\n\n    padding: 20px;\n    box-shadow: 2px 0px 2px var(--font-color-general);\n}\n\n.sidetextWrapper {\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n    justify-content: center;\n}\n\n.sideBarAddWork, .sideBarAddProj {\n    display: flex;\n    \n    font-size: 20px;\n    gap: 5px;\n    color: var(--font-color-general);\n}\n\n.sideBarAddWork {\n    margin-top: 20vh;\n}\n\n.sideBarAddWork:hover, .sideBarAddProj:hover {\n    cursor: pointer;\n    color: var(--bg-color-topbar);\n}\n\n.topRow {\n    grid-row: 1 / 2;\n    grid-column: 2 / -1;\n    background-color: var(--bg-color-topbar);\n    \n    border-bottom: 1px solid var(--bg-color-sidebar);\n    box-shadow: 0 2px 2px var(--bg-color-sidebar);\n    \n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    height: 25vh;\n\n    margin-bottom: 35px;\n}\n\n.topRowLeft {\n    font-size: 20px;\n    width: 40vw;\n\n    display: flex;\n}\n\n.searchLogo:hover {\n    cursor: pointer;\n}\n\n.searchBar {\n    border: 1px solid var(--bg-color-sidebar);\n    border-radius: 12px;\n    width: 100%;\n\n    padding-left: 20px;\n}\n\n.topRowRight > label, .topRowRight > select {\n    font-weight: bold;\n    font-size: 20px;\n    color: var(--font-color-general);\n}\n\n/* class to be created */\n.toDoContainer {\n    min-height: 75vh;\n    grid-column: 2 / -1;\n    grid-row: 2 / -1;\n\n    padding: 0 35px;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 20px;\n}\n\n.toDoCards {\n    position: relative;\n    border: 1px solid var(--bg-color-sidebar);\n    background: linear-gradient(var(--bg-color-sidebar), var(--bg-color-topbar));\n    max-height: 300px;\n\n    border-radius: 8px;\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.toDoCards::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 20px;\n    height: 100%;\n    border-radius: 8px 0 0 8px;\n    background-color: var(--color);\n}\n\n.toDoCards > div {\n    padding: 20px;\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.toDoCards > div > p {\n    margin : 0;\n}\n\n.popUpTodo {\n    position: absolute;\n\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    padding: 25px;\n    width: 50vw;\n\n    border-radius: 8px;\n    border: 5px solid var(--font-color-general);\n    background-color: var(--bg-color-sidebar);\n\n}\n\n.popUpWrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    gap: 10px;\n\n}\n\n.popUpDesc {\n    height: 20vh;\n    overflow-wrap: break-word;\n    word-wrap: break-word; /* in case older browser */\n    white-space: pre-wrap;\n    resize: vertical;\n\n}\n\n.popUpTitle, .popUpDesc, .popUpCalender,\n.popUpPriorityWrapper {\n    display: flex;\n    gap: 10px;\n\n    border-radius: 8px;\n    padding-top: 10px;\n\n}\n\n.popUpSubmit {\n    font-size: 25px;\n    padding: 10px;\n\n    border-radius: 8px;\n    background-color: var(--bg-color-topbar);\n}\n\n.popUpSubmit:hover {\n    cursor: pointer;\n    background-color: var(--font-color-general);\n}\n\n.workspace:hover {\n    cursor: pointer;\n    color: var(--bg-color-topbar);\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/DOMContent.js":
/*!***************************!*\
  !*** ./src/DOMContent.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCardDOM: () => (/* binding */ createCardDOM),
/* harmony export */   createPopUpTodo: () => (/* binding */ createPopUpTodo),
/* harmony export */   createWorkspaceDOM: () => (/* binding */ createWorkspaceDOM),
/* harmony export */   sideBarDOM: () => (/* binding */ sideBarDOM),
/* harmony export */   topBarDOM: () => (/* binding */ topBarDOM)
/* harmony export */ });
/* harmony import */ var _assets_magnify_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/magnify.svg */ "./src/assets/magnify.svg");
/* harmony import */ var _assets_add_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/add.svg */ "./src/assets/add.svg");



// Helper function for svgs
const createSideDiv = (logosrc, text, width) => {
    const div = document.createElement('div')
    const logo = new Image()

    logo.src = logosrc
    logo.style.width = width
    div.innerHTML = text
    div.appendChild(logo)

    return div
}

// Seperate into top bar
// Features: to sort by date/priority
function topBarDOM (parentContainer) {
    const rowContainer = document.createElement('div')
    const leftSide = document.createElement('div')
    const rightSide = document.createElement('div')

    const searchLogo = createSideDiv(_assets_magnify_svg__WEBPACK_IMPORTED_MODULE_0__, null, '25px')
    const searchBar = document.createElement('input')
    searchBar.placeholder = 'Try searching title of your task!'

    rowContainer.className = 'topRow'
    leftSide.className = 'topRowLeft'
    rightSide.className = 'topRowRight'
    searchLogo.className = 'searchLogo'
    searchBar.className = 'searchBar'

    parentContainer.appendChild(rowContainer)

    rowContainer.appendChild(leftSide)
    rowContainer.appendChild(rightSide)

    leftSide.appendChild(searchLogo)
    leftSide.appendChild(searchBar)

    const dropdownHTML = `
    <label for="sortBy">Sort By</label>
    <select name="sortBy" id="sortBy">
        <option value="byPriority">Priority</option>
        <option value="byDate">Date</option>
    </select>`

    rightSide.innerHTML = dropdownHTML
}
// Side bar
// Features: to create workspaces and nav diff workspace 
function sideBarDOM (parentContainer) {
    const sideBar = document.createElement('div')
    const textWrapper = document.createElement('div')

    const todoName = document.createElement('div')
    todoName.innerHTML = 'BackLogs'
    todoName.style.fontSize = '48px'
    todoName.style.fontWeight = 'bold'
    todoName.style.color = 'var(--font-color-title)'

    const addWork = createSideDiv(_assets_add_svg__WEBPACK_IMPORTED_MODULE_1__, '<p>Add ToDo</p>', '30px')
    const addProject = createSideDiv(_assets_add_svg__WEBPACK_IMPORTED_MODULE_1__, '<p>Create Workspace</p>', '30px')

    sideBar.className = 'sideBar'
    textWrapper.className = 'sideTextWrapper'
    addWork.className = 'sideBarAddWork'
    addProject.className = 'sideBarAddProj'

    parentContainer.appendChild(sideBar)
    sideBar.appendChild(textWrapper)
    textWrapper.appendChild(todoName)
    textWrapper.appendChild(addWork)
    textWrapper.appendChild(addProject)
}
// Centre todo lists
// Features: to make todo lists
function createCardDOM (parentContainer) {
    const toDoCards = document.createElement('div')
    const toDoTexts = document.createElement('div')
    const toDoCountdown = document.createElement('p')
    
    const toDoTitle = document.createElement('p')
    const toDoDesc = document.createElement('p')
    
    toDoCards.className = 'toDoCards'
    toDoTitle.className = 'toDoTitle'
    toDoDesc.className = 'toDoDesc'
    toDoCountdown.className = 'toDoCountdown'

    toDoTitle.style.fontSize = '26px'
    toDoTitle.style.fontWeight = 'bold'
    toDoTitle.style.color = 'var(--font-color-title)'

    toDoDesc.style.fontSize = '20px'
    toDoDesc.style.fontWeight = 'bold'
    toDoDesc.style.color = 'var(--font-color-general)'

    toDoCountdown.style.fontSize = '20px'
    toDoCountdown.style.fontWeight = 'bold'
    toDoCountdown.style.color = 'var(--font-color-general)'

    parentContainer.appendChild(toDoCards)
    toDoCards.appendChild(toDoTexts)

    toDoTexts.appendChild(toDoTitle)
    toDoTexts.appendChild(toDoDesc)
    toDoTexts.appendChild(toDoCountdown)


    return toDoCards
}

function getDate () {
    const currentDate = new Date()
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    const year = currentDate.getFullYear()

    return `${year}-${month}-${day}`
}

function createInputBar (className, labelText, inputType, value = null) {
    const label = document.createElement('label')
    const labelInputBox = className == 'popUpDesc' ? document.createElement('textarea') : document.createElement('input')
    const wrapper = document.createElement('div'); 

    label.for = className
    label.innerHTML = labelText
    label.style.fontSize = '25px'
    label.style.fontWeight = 'bold'

    if (inputType === 'date' || inputType === 'radio') labelInputBox.value = value

    labelInputBox.name = className
    if (labelInputBox.nodeName === 'INPUT') labelInputBox.type = inputType
    labelInputBox.className = className
    labelInputBox.style.fontSize = '25px'

    wrapper.appendChild(label)
    wrapper.appendChild(labelInputBox)

    return wrapper
}

// Pop up DOM for making ToDo cards
// To be appended to .hero
function createPopUpTodo (parentContainer, callback) {
    const popUpTodo = document.createElement('form')
    const popUpWrapper = document.createElement('div')
    const popUpSubmit = document.createElement('button')
    popUpSubmit.type = 'submit'
    popUpSubmit.innerHTML = 'Add To Do!' 

    const popUpTitle = createInputBar('popUpTitle', 'Task', 'text')
    const popUpDesc = createInputBar('popUpDesc', 'Description', 'text')
    const popUpCalender = createInputBar('popUpCalender', 'Task Ends', 'date', getDate())

    const popUpPriorityWrapper = document.createElement('div')
    const popUpNormal = createInputBar('popUpPriority', 'Normal', 'radio', 'normal')
    const popUpMedium = createInputBar('popUpPriority', 'Medium', 'radio', 'medium')
    const popUpHigh = createInputBar('popUpPriority', 'High', 'radio', 'high')
    
    popUpTodo.className = 'popUpTodo'
    popUpWrapper.className = 'popUpWrapper'
    popUpSubmit.className = 'popUpSubmit'
    popUpPriorityWrapper.className = 'popUpPriorityWrapper'

    parentContainer.appendChild(popUpTodo)
    popUpTodo.appendChild(popUpWrapper)
    popUpWrapper.appendChild(popUpTitle)
    popUpWrapper.appendChild(popUpDesc)
    popUpWrapper.appendChild(popUpCalender)
    popUpWrapper.appendChild(popUpPriorityWrapper)
    popUpWrapper.appendChild(popUpSubmit)

    popUpPriorityWrapper.appendChild(popUpNormal)
    popUpPriorityWrapper.appendChild(popUpMedium)
    popUpPriorityWrapper.appendChild(popUpHigh)


    popUpTodo.addEventListener('submit', (e) => {
        e.preventDefault()
        const form = e.target
        const formData = new FormData(form)
        const formProps = Object.fromEntries(formData)

        callback(formProps)
        popUpTodo.remove()

    })
}

function createWorkspaceDOM (workspaceName, workspaceWrapper) {
    const newWorkspace = document.createElement('div')
    newWorkspace.innerHTML = workspaceName
    newWorkspace.className = 'workspace'

    newWorkspace.style.fontSize = '18px'
    newWorkspace.style.fontWeight = 'bold'
    newWorkspace.style.color = 'var(--font-color-general)'

    workspaceWrapper.appendChild(newWorkspace)
    return newWorkspace
}
// Subsequent import : import { fn name } from 'file_path'

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Manager: () => (/* binding */ Manager),
/* harmony export */   Todo: () => (/* binding */ Todo),
/* harmony export */   Workspace: () => (/* binding */ Workspace)
/* harmony export */ });
/* harmony import */ var _DOMContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMContent.js */ "./src/DOMContent.js");


class Todo {
  constructor(formProps) {
    this.title = formProps.popUpTitle;
    this.description = formProps.popUpDesc;
    this.date = formProps.popUpCalender || '0'; // Optional date
    this.priority = formProps.popUpPriority || 'normal'; // Default priority
  }

  appendToProject(toDoContainer) {
    // parent container to be updated with workspace container instead
    const todoCard = (0,_DOMContent_js__WEBPACK_IMPORTED_MODULE_0__.createCardDOM)(toDoContainer);
    this.populateCard(todoCard);
    return todoCard;
  }

  populateCard(cardElement) {
    cardElement.querySelector('.toDoTitle').innerText = this.title;
    cardElement.querySelector('.toDoDesc').innerText = this.description;
    cardElement.querySelector('.toDoCountdown').innerText = `
        You have *${this.date.split('-').pop() - this.todayDate()}* days left!`;
    this.setPriorityColor(cardElement);
  }

  setPriorityColor(cardElement) {

        switch(this.priority) {

            case 'high':
                cardElement.style.setProperty('--color', 'var(--priority-color-high)')
                break
            case 'medium':
                cardElement.style.setProperty('--color', 'var(--priority-color-mid)')
                break
            case 'normal':
                cardElement.style.setProperty('--color', 'var(--priority-color-normal)')
                break
        }
  }

  todayDate () {
    const currentDate = new Date()
    return currentDate.getDate()
  }
}

// handles all todo cards
class Workspace {
  constructor(name) {
    this.name = name
    this.id = Math.random().toString(36).substring(2, 15); // Generate unique ID
    this.cardsStorage = []
  }

  appendToWorkspace (todo) {
    this.cardsStorage.push(todo)
  }

  // function to handle sorting by dates/priority
}

// handles all projects
class Manager {
  static storage = []

  static appendToStorage (workspace) {
    Manager.storage.push(workspace)
  }

  static getWorkspaceById(workspaceId) {
    return Manager.storage.find(ws => ws.id === workspaceId);
  }
}


/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createWorkspace: () => (/* binding */ createWorkspace),
/* harmony export */   promptWorkspaceName: () => (/* binding */ promptWorkspaceName)
/* harmony export */ });
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes */ "./src/classes.js");



function promptWorkspaceName() {
    const name = prompt('Name of workspace: ');
    return name;
}

function createWorkspace(name) {
    const project = new _classes__WEBPACK_IMPORTED_MODULE_0__.Workspace(name);
    _classes__WEBPACK_IMPORTED_MODULE_0__.Manager.appendToStorage(project);
    return project;
}

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOMContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMContent.js */ "./src/DOMContent.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");
/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper.js */ "./src/helper.js");






// global variables
const hero = document.querySelector('.hero')
;(0,_DOMContent_js__WEBPACK_IMPORTED_MODULE_1__.topBarDOM)(hero)
;(0,_DOMContent_js__WEBPACK_IMPORTED_MODULE_1__.sideBarDOM)(hero)
const toDoContainer = document.createElement('div')
toDoContainer.className = 'toDoContainer'
hero.appendChild(toDoContainer)

const workspaceWrapper = document.createElement('div')
workspaceWrapper.className = 'workspaceWrapper'
document.querySelector('.sideBar').appendChild(workspaceWrapper)

const addTodo = document.querySelector('.sideBarAddWork')
const addWorkspace = document.querySelector('.sideBarAddProj')
let selectedWorkspace = getWorkspace()

function clearToDoContainer () {
    toDoContainer.innerHTML = ""
}

function getWorkspace() {
    const name = (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.promptWorkspaceName)();
    const workspace = (0,_helper_js__WEBPACK_IMPORTED_MODULE_3__.createWorkspace)(name);
    const workspaceElement = (0,_DOMContent_js__WEBPACK_IMPORTED_MODULE_1__.createWorkspaceDOM)(workspace, workspaceWrapper);
    workspaceElement.dataset.id = workspace.id; 
    
    // object of Workspace
    return workspace;
}

// handlers for event listeners
function handleAddWorkspace () {
    clearToDoContainer()
    selectedWorkspace = getWorkspace()
}

function handleAddTodo () {
    (0,_DOMContent_js__WEBPACK_IMPORTED_MODULE_1__.createPopUpTodo)(hero, (formProps) => {
        const newTodo = new _classes_js__WEBPACK_IMPORTED_MODULE_2__.Todo(formProps)
        const todoCard = newTodo.appendToProject(toDoContainer) 

        selectedWorkspace.appendToWorkspace(todoCard)   
    })
}

function handleWorkspaceClicked (event) {
    clearToDoContainer()
    const workID = event.target.dataset.id
    selectedWorkspace = _classes_js__WEBPACK_IMPORTED_MODULE_2__.Manager.getWorkspaceById(workID)
    
    // displaying cards in that workspace
    selectedWorkspace.cardsStorage.forEach(card => {
        toDoContainer.appendChild(card)
    })
}

// adding new workspace when Create workspace is pressed
addWorkspace.addEventListener('click', handleAddWorkspace())
// adding todo to that specfic workspace
addTodo.addEventListener('click', handleAddTodo())

// retrieving cards when workspace is pressed
workspaceWrapper.addEventListener('click', handleWorkspaceClicked(event))


/***/ }),

/***/ "./src/assets/add.svg":
/*!****************************!*\
  !*** ./src/assets/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e7d62fe4cd33707d017.svg";

/***/ }),

/***/ "./src/assets/magnify.svg":
/*!********************************!*\
  !*** ./src/assets/magnify.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "54ff7732bb1a5ff166c6.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvRE9NQ29udGVudC5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1wcmlvcml0eS1jb2xvci1oaWdoOiAjZjU5ODZhO1xuICAgIC0tcHJpb3JpdHktY29sb3ItbWlkOiAjZWZmMzcxO1xuICAgIC0tcHJpb3JpdHktY29sb3Itbm9ybWFsOiAjOTBmNTUxO1xuXG4gICAgLS1iZy1jb2xvci1hbGw6IGJsYWNrO1xuICAgIC0tYmctY29sb3Itc2lkZWJhcjogIzVlNjNiNjtcbiAgICAtLWJnLWNvbG9yLXRvcGJhcjogI2EzOTNlYjtcblxuICAgIC0tZm9udC1jb2xvci10aXRsZTogIzI3Mjk2ZDtcbiAgICAtLWZvbnQtY29sb3ItZ2VuZXJhbDogI2Y1YzdmNztcblxuICAgIC0tY29sb3I6ICMwMDA7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0LCBidXR0b24sXG50ZXh0YXJlYSwgc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuaW1nLFxucGljdHVyZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1hbGwpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG5cbn1cblxuLnNpZGVCYXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMSAvIC0xO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3Itc2lkZWJhcik7XG5cbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAwcHggMnB4IHZhcigtLWZvbnQtY29sb3ItZ2VuZXJhbCk7XG59XG5cbi5zaWRldGV4dFdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zaWRlQmFyQWRkV29yaywgLnNpZGVCYXJBZGRQcm9qIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBnYXA6IDVweDtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcbn1cblxuLnNpZGVCYXJBZGRXb3JrIHtcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xufVxuXG4uc2lkZUJhckFkZFdvcms6aG92ZXIsIC5zaWRlQmFyQWRkUHJvajpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1iZy1jb2xvci10b3BiYXIpO1xufVxuXG4udG9wUm93IHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci10b3BiYXIpO1xuICAgIFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1zaWRlYmFyKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggdmFyKC0tYmctY29sb3Itc2lkZWJhcik7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiAyNXZoO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLnRvcFJvd0xlZnQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB3aWR0aDogNDB2dztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zZWFyY2hMb2dvOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2hCYXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLXNpZGViYXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi50b3BSb3dSaWdodCA+IGxhYmVsLCAudG9wUm93UmlnaHQgPiBzZWxlY3Qge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcbn1cblxuLyogY2xhc3MgdG8gYmUgY3JlYXRlZCAqL1xuLnRvRG9Db250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDc1dmg7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcbiAgICBncmlkLXJvdzogMiAvIC0xO1xuXG4gICAgcGFkZGluZzogMCAzNXB4O1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi50b0RvQ2FyZHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1zaWRlYmFyKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tYmctY29sb3Itc2lkZWJhciksIHZhcigtLWJnLWNvbG9yLXRvcGJhcikpO1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50b0RvQ2FyZHM6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcbn1cblxuLnRvRG9DYXJkcyA+IGRpdiB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4udG9Eb0NhcmRzID4gZGl2ID4gcCB7XG4gICAgbWFyZ2luIDogMDtcbn1cblxuLnBvcFVwVG9kbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXG4gICAgcGFkZGluZzogMjVweDtcbiAgICB3aWR0aDogNTB2dztcblxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yLWdlbmVyYWwpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLXNpZGViYXIpO1xuXG59XG5cbi5wb3BVcFdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgZ2FwOiAxMHB4O1xuXG59XG5cbi5wb3BVcERlc2Mge1xuICAgIGhlaWdodDogMjB2aDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgLyogaW4gY2FzZSBvbGRlciBicm93c2VyICovXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIHJlc2l6ZTogdmVydGljYWw7XG5cbn1cblxuLnBvcFVwVGl0bGUsIC5wb3BVcERlc2MsIC5wb3BVcENhbGVuZGVyLFxuLnBvcFVwUHJpb3JpdHlXcmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcblxufVxuXG4ucG9wVXBTdWJtaXQge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLXRvcGJhcik7XG59XG5cbi5wb3BVcFN1Ym1pdDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3ItZ2VuZXJhbCk7XG59XG5cbi53b3Jrc3BhY2U6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tYmctY29sb3ItdG9wYmFyKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGdDQUFnQzs7SUFFaEMscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQiwwQkFBMEI7O0lBRTFCLDJCQUEyQjtJQUMzQiw2QkFBNkI7O0lBRTdCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztJQUVoQix5Q0FBeUM7O0lBRXpDLGFBQWE7SUFDYixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixlQUFlO0lBQ2YsUUFBUTtJQUNSLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHdDQUF3Qzs7SUFFeEMsZ0RBQWdEO0lBQ2hELDZDQUE2Qzs7SUFFN0MsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7O0lBRW5CLFlBQVk7O0lBRVosbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7O0lBRVgsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLFdBQVc7O0lBRVgsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQ0FBZ0M7QUFDcEM7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0lBRWhCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLDRFQUE0RTtJQUM1RSxpQkFBaUI7O0lBRWpCLGtCQUFrQjtJQUNsQixhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXOztJQUVYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQzs7SUFFaEMsYUFBYTtJQUNiLFdBQVc7O0lBRVgsa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyx5Q0FBeUM7O0FBRTdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixTQUFTOztBQUViOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUIsRUFBRSwwQkFBMEI7SUFDakQscUJBQXFCO0lBQ3JCLGdCQUFnQjs7QUFFcEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFNBQVM7O0lBRVQsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTs7SUFFYixrQkFBa0I7SUFDbEIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXByaW9yaXR5LWNvbG9yLWhpZ2g6ICNmNTk4NmE7XFxuICAgIC0tcHJpb3JpdHktY29sb3ItbWlkOiAjZWZmMzcxO1xcbiAgICAtLXByaW9yaXR5LWNvbG9yLW5vcm1hbDogIzkwZjU1MTtcXG5cXG4gICAgLS1iZy1jb2xvci1hbGw6IGJsYWNrO1xcbiAgICAtLWJnLWNvbG9yLXNpZGViYXI6ICM1ZTYzYjY7XFxuICAgIC0tYmctY29sb3ItdG9wYmFyOiAjYTM5M2ViO1xcblxcbiAgICAtLWZvbnQtY29sb3ItdGl0bGU6ICMyNzI5NmQ7XFxuICAgIC0tZm9udC1jb2xvci1nZW5lcmFsOiAjZjVjN2Y3O1xcblxcbiAgICAtLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaW5wdXQsIGJ1dHRvbixcXG50ZXh0YXJlYSwgc2VsZWN0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1hbGwpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuXFxufVxcblxcbi5zaWRlQmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1zaWRlYmFyKTtcXG5cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDBweCAycHggdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcXG59XFxuXFxuLnNpZGV0ZXh0V3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZUJhckFkZFdvcmssIC5zaWRlQmFyQWRkUHJvaiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcXG59XFxuXFxuLnNpZGVCYXJBZGRXb3JrIHtcXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcXG59XFxuXFxuLnNpZGVCYXJBZGRXb3JrOmhvdmVyLCAuc2lkZUJhckFkZFByb2o6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1iZy1jb2xvci10b3BiYXIpO1xcbn1cXG5cXG4udG9wUm93IHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci10b3BiYXIpO1xcbiAgICBcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLXNpZGViYXIpO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggdmFyKC0tYmctY29sb3Itc2lkZWJhcik7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiAyNXZoO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbn1cXG5cXG4udG9wUm93TGVmdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZWFyY2hMb2dvOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoQmFyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctY29sb3Itc2lkZWJhcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50b3BSb3dSaWdodCA+IGxhYmVsLCAudG9wUm93UmlnaHQgPiBzZWxlY3Qge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcXG59XFxuXFxuLyogY2xhc3MgdG8gYmUgY3JlYXRlZCAqL1xcbi50b0RvQ29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogNzV2aDtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAtMTtcXG5cXG4gICAgcGFkZGluZzogMCAzNXB4O1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4udG9Eb0NhcmRzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1zaWRlYmFyKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWJnLWNvbG9yLXNpZGViYXIpLCB2YXIoLS1iZy1jb2xvci10b3BiYXIpKTtcXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRvRG9DYXJkczo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3IpO1xcbn1cXG5cXG4udG9Eb0NhcmRzID4gZGl2IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udG9Eb0NhcmRzID4gZGl2ID4gcCB7XFxuICAgIG1hcmdpbiA6IDA7XFxufVxcblxcbi5wb3BVcFRvZG8ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB3aWR0aDogNTB2dztcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLS1mb250LWNvbG9yLWdlbmVyYWwpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1zaWRlYmFyKTtcXG5cXG59XFxuXFxuLnBvcFVwV3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBnYXA6IDEwcHg7XFxuXFxufVxcblxcbi5wb3BVcERlc2Mge1xcbiAgICBoZWlnaHQ6IDIwdmg7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgLyogaW4gY2FzZSBvbGRlciBicm93c2VyICovXFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG5cXG59XFxuXFxuLnBvcFVwVGl0bGUsIC5wb3BVcERlc2MsIC5wb3BVcENhbGVuZGVyLFxcbi5wb3BVcFByaW9yaXR5V3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG5cXG59XFxuXFxuLnBvcFVwU3VibWl0IHtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLXRvcGJhcik7XFxufVxcblxcbi5wb3BVcFN1Ym1pdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcXG59XFxuXFxuLndvcmtzcGFjZTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWJnLWNvbG9yLXRvcGJhcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IE1hZ25pZnkgZnJvbSAnLi9hc3NldHMvbWFnbmlmeS5zdmcnXG5pbXBvcnQgQWRkTG9nbyBmcm9tICcuL2Fzc2V0cy9hZGQuc3ZnJ1xuXG4vLyBIZWxwZXIgZnVuY3Rpb24gZm9yIHN2Z3NcbmNvbnN0IGNyZWF0ZVNpZGVEaXYgPSAobG9nb3NyYywgdGV4dCwgd2lkdGgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKVxuXG4gICAgbG9nby5zcmMgPSBsb2dvc3JjXG4gICAgbG9nby5zdHlsZS53aWR0aCA9IHdpZHRoXG4gICAgZGl2LmlubmVySFRNTCA9IHRleHRcbiAgICBkaXYuYXBwZW5kQ2hpbGQobG9nbylcblxuICAgIHJldHVybiBkaXZcbn1cblxuLy8gU2VwZXJhdGUgaW50byB0b3AgYmFyXG4vLyBGZWF0dXJlczogdG8gc29ydCBieSBkYXRlL3ByaW9yaXR5XG5leHBvcnQgZnVuY3Rpb24gdG9wQmFyRE9NIChwYXJlbnRDb250YWluZXIpIHtcbiAgICBjb25zdCByb3dDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGxlZnRTaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCByaWdodFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3Qgc2VhcmNoTG9nbyA9IGNyZWF0ZVNpZGVEaXYoTWFnbmlmeSwgbnVsbCwgJzI1cHgnKVxuICAgIGNvbnN0IHNlYXJjaEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBzZWFyY2hCYXIucGxhY2Vob2xkZXIgPSAnVHJ5IHNlYXJjaGluZyB0aXRsZSBvZiB5b3VyIHRhc2shJ1xuXG4gICAgcm93Q29udGFpbmVyLmNsYXNzTmFtZSA9ICd0b3BSb3cnXG4gICAgbGVmdFNpZGUuY2xhc3NOYW1lID0gJ3RvcFJvd0xlZnQnXG4gICAgcmlnaHRTaWRlLmNsYXNzTmFtZSA9ICd0b3BSb3dSaWdodCdcbiAgICBzZWFyY2hMb2dvLmNsYXNzTmFtZSA9ICdzZWFyY2hMb2dvJ1xuICAgIHNlYXJjaEJhci5jbGFzc05hbWUgPSAnc2VhcmNoQmFyJ1xuXG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHJvd0NvbnRhaW5lcilcblxuICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0U2lkZSlcbiAgICByb3dDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRTaWRlKVxuXG4gICAgbGVmdFNpZGUuYXBwZW5kQ2hpbGQoc2VhcmNoTG9nbylcbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChzZWFyY2hCYXIpXG5cbiAgICBjb25zdCBkcm9wZG93bkhUTUwgPSBgXG4gICAgPGxhYmVsIGZvcj1cInNvcnRCeVwiPlNvcnQgQnk8L2xhYmVsPlxuICAgIDxzZWxlY3QgbmFtZT1cInNvcnRCeVwiIGlkPVwic29ydEJ5XCI+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJieVByaW9yaXR5XCI+UHJpb3JpdHk8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJ5RGF0ZVwiPkRhdGU8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5gXG5cbiAgICByaWdodFNpZGUuaW5uZXJIVE1MID0gZHJvcGRvd25IVE1MXG59XG4vLyBTaWRlIGJhclxuLy8gRmVhdHVyZXM6IHRvIGNyZWF0ZSB3b3Jrc3BhY2VzIGFuZCBuYXYgZGlmZiB3b3Jrc3BhY2UgXG5leHBvcnQgZnVuY3Rpb24gc2lkZUJhckRPTSAocGFyZW50Q29udGFpbmVyKSB7XG4gICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGV4dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgdG9kb05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRvZG9OYW1lLmlubmVySFRNTCA9ICdCYWNrTG9ncydcbiAgICB0b2RvTmFtZS5zdHlsZS5mb250U2l6ZSA9ICc0OHB4J1xuICAgIHRvZG9OYW1lLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCdcbiAgICB0b2RvTmFtZS5zdHlsZS5jb2xvciA9ICd2YXIoLS1mb250LWNvbG9yLXRpdGxlKSdcblxuICAgIGNvbnN0IGFkZFdvcmsgPSBjcmVhdGVTaWRlRGl2KEFkZExvZ28sICc8cD5BZGQgVG9EbzwvcD4nLCAnMzBweCcpXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IGNyZWF0ZVNpZGVEaXYoQWRkTG9nbywgJzxwPkNyZWF0ZSBXb3Jrc3BhY2U8L3A+JywgJzMwcHgnKVxuXG4gICAgc2lkZUJhci5jbGFzc05hbWUgPSAnc2lkZUJhcidcbiAgICB0ZXh0V3JhcHBlci5jbGFzc05hbWUgPSAnc2lkZVRleHRXcmFwcGVyJ1xuICAgIGFkZFdvcmsuY2xhc3NOYW1lID0gJ3NpZGVCYXJBZGRXb3JrJ1xuICAgIGFkZFByb2plY3QuY2xhc3NOYW1lID0gJ3NpZGVCYXJBZGRQcm9qJ1xuXG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHNpZGVCYXIpXG4gICAgc2lkZUJhci5hcHBlbmRDaGlsZCh0ZXh0V3JhcHBlcilcbiAgICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZCh0b2RvTmFtZSlcbiAgICB0ZXh0V3JhcHBlci5hcHBlbmRDaGlsZChhZGRXb3JrKVxuICAgIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKGFkZFByb2plY3QpXG59XG4vLyBDZW50cmUgdG9kbyBsaXN0c1xuLy8gRmVhdHVyZXM6IHRvIG1ha2UgdG9kbyBsaXN0c1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhcmRET00gKHBhcmVudENvbnRhaW5lcikge1xuICAgIGNvbnN0IHRvRG9DYXJkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdG9Eb1RleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0b0RvQ291bnRkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgXG4gICAgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgdG9Eb0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBcbiAgICB0b0RvQ2FyZHMuY2xhc3NOYW1lID0gJ3RvRG9DYXJkcydcbiAgICB0b0RvVGl0bGUuY2xhc3NOYW1lID0gJ3RvRG9UaXRsZSdcbiAgICB0b0RvRGVzYy5jbGFzc05hbWUgPSAndG9Eb0Rlc2MnXG4gICAgdG9Eb0NvdW50ZG93bi5jbGFzc05hbWUgPSAndG9Eb0NvdW50ZG93bidcblxuICAgIHRvRG9UaXRsZS5zdHlsZS5mb250U2l6ZSA9ICcyNnB4J1xuICAgIHRvRG9UaXRsZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnXG4gICAgdG9Eb1RpdGxlLnN0eWxlLmNvbG9yID0gJ3ZhcigtLWZvbnQtY29sb3ItdGl0bGUpJ1xuXG4gICAgdG9Eb0Rlc2Muc3R5bGUuZm9udFNpemUgPSAnMjBweCdcbiAgICB0b0RvRGVzYy5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnXG4gICAgdG9Eb0Rlc2Muc3R5bGUuY29sb3IgPSAndmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKSdcblxuICAgIHRvRG9Db3VudGRvd24uc3R5bGUuZm9udFNpemUgPSAnMjBweCdcbiAgICB0b0RvQ291bnRkb3duLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCdcbiAgICB0b0RvQ291bnRkb3duLnN0eWxlLmNvbG9yID0gJ3ZhcigtLWZvbnQtY29sb3ItZ2VuZXJhbCknXG5cbiAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQodG9Eb0NhcmRzKVxuICAgIHRvRG9DYXJkcy5hcHBlbmRDaGlsZCh0b0RvVGV4dHMpXG5cbiAgICB0b0RvVGV4dHMuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKVxuICAgIHRvRG9UZXh0cy5hcHBlbmRDaGlsZCh0b0RvRGVzYylcbiAgICB0b0RvVGV4dHMuYXBwZW5kQ2hpbGQodG9Eb0NvdW50ZG93bilcblxuXG4gICAgcmV0dXJuIHRvRG9DYXJkc1xufVxuXG5mdW5jdGlvbiBnZXREYXRlICgpIHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbiAgICBjb25zdCBkYXkgPSBjdXJyZW50RGF0ZS5nZXREYXRlKClcbiAgICBjb25zdCBtb250aCA9IGN1cnJlbnREYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgY29uc3QgeWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKClcblxuICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0QmFyIChjbGFzc05hbWUsIGxhYmVsVGV4dCwgaW5wdXRUeXBlLCB2YWx1ZSA9IG51bGwpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjb25zdCBsYWJlbElucHV0Qm94ID0gY2xhc3NOYW1lID09ICdwb3BVcERlc2MnID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuXG4gICAgbGFiZWwuZm9yID0gY2xhc3NOYW1lXG4gICAgbGFiZWwuaW5uZXJIVE1MID0gbGFiZWxUZXh0XG4gICAgbGFiZWwuc3R5bGUuZm9udFNpemUgPSAnMjVweCdcbiAgICBsYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnXG5cbiAgICBpZiAoaW5wdXRUeXBlID09PSAnZGF0ZScgfHwgaW5wdXRUeXBlID09PSAncmFkaW8nKSBsYWJlbElucHV0Qm94LnZhbHVlID0gdmFsdWVcblxuICAgIGxhYmVsSW5wdXRCb3gubmFtZSA9IGNsYXNzTmFtZVxuICAgIGlmIChsYWJlbElucHV0Qm94Lm5vZGVOYW1lID09PSAnSU5QVVQnKSBsYWJlbElucHV0Qm94LnR5cGUgPSBpbnB1dFR5cGVcbiAgICBsYWJlbElucHV0Qm94LmNsYXNzTmFtZSA9IGNsYXNzTmFtZVxuICAgIGxhYmVsSW5wdXRCb3guc3R5bGUuZm9udFNpemUgPSAnMjVweCdcblxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWwpXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbElucHV0Qm94KVxuXG4gICAgcmV0dXJuIHdyYXBwZXJcbn1cblxuLy8gUG9wIHVwIERPTSBmb3IgbWFraW5nIFRvRG8gY2FyZHNcbi8vIFRvIGJlIGFwcGVuZGVkIHRvIC5oZXJvXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUG9wVXBUb2RvIChwYXJlbnRDb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgcG9wVXBUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgY29uc3QgcG9wVXBXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBwb3BVcFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgcG9wVXBTdWJtaXQudHlwZSA9ICdzdWJtaXQnXG4gICAgcG9wVXBTdWJtaXQuaW5uZXJIVE1MID0gJ0FkZCBUbyBEbyEnIFxuXG4gICAgY29uc3QgcG9wVXBUaXRsZSA9IGNyZWF0ZUlucHV0QmFyKCdwb3BVcFRpdGxlJywgJ1Rhc2snLCAndGV4dCcpXG4gICAgY29uc3QgcG9wVXBEZXNjID0gY3JlYXRlSW5wdXRCYXIoJ3BvcFVwRGVzYycsICdEZXNjcmlwdGlvbicsICd0ZXh0JylcbiAgICBjb25zdCBwb3BVcENhbGVuZGVyID0gY3JlYXRlSW5wdXRCYXIoJ3BvcFVwQ2FsZW5kZXInLCAnVGFzayBFbmRzJywgJ2RhdGUnLCBnZXREYXRlKCkpXG5cbiAgICBjb25zdCBwb3BVcFByaW9yaXR5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgcG9wVXBOb3JtYWwgPSBjcmVhdGVJbnB1dEJhcigncG9wVXBQcmlvcml0eScsICdOb3JtYWwnLCAncmFkaW8nLCAnbm9ybWFsJylcbiAgICBjb25zdCBwb3BVcE1lZGl1bSA9IGNyZWF0ZUlucHV0QmFyKCdwb3BVcFByaW9yaXR5JywgJ01lZGl1bScsICdyYWRpbycsICdtZWRpdW0nKVxuICAgIGNvbnN0IHBvcFVwSGlnaCA9IGNyZWF0ZUlucHV0QmFyKCdwb3BVcFByaW9yaXR5JywgJ0hpZ2gnLCAncmFkaW8nLCAnaGlnaCcpXG4gICAgXG4gICAgcG9wVXBUb2RvLmNsYXNzTmFtZSA9ICdwb3BVcFRvZG8nXG4gICAgcG9wVXBXcmFwcGVyLmNsYXNzTmFtZSA9ICdwb3BVcFdyYXBwZXInXG4gICAgcG9wVXBTdWJtaXQuY2xhc3NOYW1lID0gJ3BvcFVwU3VibWl0J1xuICAgIHBvcFVwUHJpb3JpdHlXcmFwcGVyLmNsYXNzTmFtZSA9ICdwb3BVcFByaW9yaXR5V3JhcHBlcidcblxuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZChwb3BVcFRvZG8pXG4gICAgcG9wVXBUb2RvLmFwcGVuZENoaWxkKHBvcFVwV3JhcHBlcilcbiAgICBwb3BVcFdyYXBwZXIuYXBwZW5kQ2hpbGQocG9wVXBUaXRsZSlcbiAgICBwb3BVcFdyYXBwZXIuYXBwZW5kQ2hpbGQocG9wVXBEZXNjKVxuICAgIHBvcFVwV3JhcHBlci5hcHBlbmRDaGlsZChwb3BVcENhbGVuZGVyKVxuICAgIHBvcFVwV3JhcHBlci5hcHBlbmRDaGlsZChwb3BVcFByaW9yaXR5V3JhcHBlcilcbiAgICBwb3BVcFdyYXBwZXIuYXBwZW5kQ2hpbGQocG9wVXBTdWJtaXQpXG5cbiAgICBwb3BVcFByaW9yaXR5V3JhcHBlci5hcHBlbmRDaGlsZChwb3BVcE5vcm1hbClcbiAgICBwb3BVcFByaW9yaXR5V3JhcHBlci5hcHBlbmRDaGlsZChwb3BVcE1lZGl1bSlcbiAgICBwb3BVcFByaW9yaXR5V3JhcHBlci5hcHBlbmRDaGlsZChwb3BVcEhpZ2gpXG5cblxuICAgIHBvcFVwVG9kby5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm0pXG4gICAgICAgIGNvbnN0IGZvcm1Qcm9wcyA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtRGF0YSlcblxuICAgICAgICBjYWxsYmFjayhmb3JtUHJvcHMpXG4gICAgICAgIHBvcFVwVG9kby5yZW1vdmUoKVxuXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVdvcmtzcGFjZURPTSAod29ya3NwYWNlTmFtZSwgd29ya3NwYWNlV3JhcHBlcikge1xuICAgIGNvbnN0IG5ld1dvcmtzcGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbmV3V29ya3NwYWNlLmlubmVySFRNTCA9IHdvcmtzcGFjZU5hbWVcbiAgICBuZXdXb3Jrc3BhY2UuY2xhc3NOYW1lID0gJ3dvcmtzcGFjZSdcblxuICAgIG5ld1dvcmtzcGFjZS5zdHlsZS5mb250U2l6ZSA9ICcxOHB4J1xuICAgIG5ld1dvcmtzcGFjZS5zdHlsZS5mb250V2VpZ2h0ID0gJ2JvbGQnXG4gICAgbmV3V29ya3NwYWNlLnN0eWxlLmNvbG9yID0gJ3ZhcigtLWZvbnQtY29sb3ItZ2VuZXJhbCknXG5cbiAgICB3b3Jrc3BhY2VXcmFwcGVyLmFwcGVuZENoaWxkKG5ld1dvcmtzcGFjZSlcbiAgICByZXR1cm4gbmV3V29ya3NwYWNlXG59XG4vLyBTdWJzZXF1ZW50IGltcG9ydCA6IGltcG9ydCB7IGZuIG5hbWUgfSBmcm9tICdmaWxlX3BhdGgnIiwiaW1wb3J0IHsgY3JlYXRlQ2FyZERPTSB9IGZyb20gXCIuL0RPTUNvbnRlbnQuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3Rvcihmb3JtUHJvcHMpIHtcbiAgICB0aGlzLnRpdGxlID0gZm9ybVByb3BzLnBvcFVwVGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGZvcm1Qcm9wcy5wb3BVcERlc2M7XG4gICAgdGhpcy5kYXRlID0gZm9ybVByb3BzLnBvcFVwQ2FsZW5kZXIgfHwgJzAnOyAvLyBPcHRpb25hbCBkYXRlXG4gICAgdGhpcy5wcmlvcml0eSA9IGZvcm1Qcm9wcy5wb3BVcFByaW9yaXR5IHx8ICdub3JtYWwnOyAvLyBEZWZhdWx0IHByaW9yaXR5XG4gIH1cblxuICBhcHBlbmRUb1Byb2plY3QodG9Eb0NvbnRhaW5lcikge1xuICAgIC8vIHBhcmVudCBjb250YWluZXIgdG8gYmUgdXBkYXRlZCB3aXRoIHdvcmtzcGFjZSBjb250YWluZXIgaW5zdGVhZFxuICAgIGNvbnN0IHRvZG9DYXJkID0gY3JlYXRlQ2FyZERPTSh0b0RvQ29udGFpbmVyKTtcbiAgICB0aGlzLnBvcHVsYXRlQ2FyZCh0b2RvQ2FyZCk7XG4gICAgcmV0dXJuIHRvZG9DYXJkO1xuICB9XG5cbiAgcG9wdWxhdGVDYXJkKGNhcmRFbGVtZW50KSB7XG4gICAgY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9UaXRsZScpLmlubmVyVGV4dCA9IHRoaXMudGl0bGU7XG4gICAgY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnRvRG9EZXNjJykuaW5uZXJUZXh0ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb0NvdW50ZG93bicpLmlubmVyVGV4dCA9IGBcbiAgICAgICAgWW91IGhhdmUgKiR7dGhpcy5kYXRlLnNwbGl0KCctJykucG9wKCkgLSB0aGlzLnRvZGF5RGF0ZSgpfSogZGF5cyBsZWZ0IWA7XG4gICAgdGhpcy5zZXRQcmlvcml0eUNvbG9yKGNhcmRFbGVtZW50KTtcbiAgfVxuXG4gIHNldFByaW9yaXR5Q29sb3IoY2FyZEVsZW1lbnQpIHtcblxuICAgICAgICBzd2l0Y2godGhpcy5wcmlvcml0eSkge1xuXG4gICAgICAgICAgICBjYXNlICdoaWdoJzpcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb2xvcicsICd2YXIoLS1wcmlvcml0eS1jb2xvci1oaWdoKScpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ21lZGl1bSc6XG4gICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY29sb3InLCAndmFyKC0tcHJpb3JpdHktY29sb3ItbWlkKScpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgIGNhc2UgJ25vcm1hbCc6XG4gICAgICAgICAgICAgICAgY2FyZEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY29sb3InLCAndmFyKC0tcHJpb3JpdHktY29sb3Itbm9ybWFsKScpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICB9XG5cbiAgdG9kYXlEYXRlICgpIHtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcbiAgICByZXR1cm4gY3VycmVudERhdGUuZ2V0RGF0ZSgpXG4gIH1cbn1cblxuLy8gaGFuZGxlcyBhbGwgdG9kbyBjYXJkc1xuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5pZCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSk7IC8vIEdlbmVyYXRlIHVuaXF1ZSBJRFxuICAgIHRoaXMuY2FyZHNTdG9yYWdlID0gW11cbiAgfVxuXG4gIGFwcGVuZFRvV29ya3NwYWNlICh0b2RvKSB7XG4gICAgdGhpcy5jYXJkc1N0b3JhZ2UucHVzaCh0b2RvKVxuICB9XG5cbiAgLy8gZnVuY3Rpb24gdG8gaGFuZGxlIHNvcnRpbmcgYnkgZGF0ZXMvcHJpb3JpdHlcbn1cblxuLy8gaGFuZGxlcyBhbGwgcHJvamVjdHNcbmV4cG9ydCBjbGFzcyBNYW5hZ2VyIHtcbiAgc3RhdGljIHN0b3JhZ2UgPSBbXVxuXG4gIHN0YXRpYyBhcHBlbmRUb1N0b3JhZ2UgKHdvcmtzcGFjZSkge1xuICAgIE1hbmFnZXIuc3RvcmFnZS5wdXNoKHdvcmtzcGFjZSlcbiAgfVxuXG4gIHN0YXRpYyBnZXRXb3Jrc3BhY2VCeUlkKHdvcmtzcGFjZUlkKSB7XG4gICAgcmV0dXJuIE1hbmFnZXIuc3RvcmFnZS5maW5kKHdzID0+IHdzLmlkID09PSB3b3Jrc3BhY2VJZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1hbmFnZXIsIFdvcmtzcGFjZSB9IGZyb20gXCIuL2NsYXNzZXNcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJvbXB0V29ya3NwYWNlTmFtZSgpIHtcbiAgICBjb25zdCBuYW1lID0gcHJvbXB0KCdOYW1lIG9mIHdvcmtzcGFjZTogJyk7XG4gICAgcmV0dXJuIG5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVXb3Jrc3BhY2UobmFtZSkge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgV29ya3NwYWNlKG5hbWUpO1xuICAgIE1hbmFnZXIuYXBwZW5kVG9TdG9yYWdlKHByb2plY3QpO1xuICAgIHJldHVybiBwcm9qZWN0O1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgdG9wQmFyRE9NLCBzaWRlQmFyRE9NLCBjcmVhdGVXb3Jrc3BhY2VET00sIH0gZnJvbSAnLi9ET01Db250ZW50LmpzJztcbmltcG9ydCB7IGNyZWF0ZVBvcFVwVG9kbyB9IGZyb20gXCIuL0RPTUNvbnRlbnQuanNcIjtcbmltcG9ydCB7IE1hbmFnZXIsIFRvZG8gfSBmcm9tIFwiLi9jbGFzc2VzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVXb3Jrc3BhY2UsIHByb21wdFdvcmtzcGFjZU5hbWUgfSBmcm9tICcuL2hlbHBlci5qcyc7XG5cbi8vIGdsb2JhbCB2YXJpYWJsZXNcbmNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpXG50b3BCYXJET00oaGVybylcbnNpZGVCYXJET00oaGVybylcbmNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxudG9Eb0NvbnRhaW5lci5jbGFzc05hbWUgPSAndG9Eb0NvbnRhaW5lcidcbmhlcm8uYXBwZW5kQ2hpbGQodG9Eb0NvbnRhaW5lcilcblxuY29uc3Qgd29ya3NwYWNlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG53b3Jrc3BhY2VXcmFwcGVyLmNsYXNzTmFtZSA9ICd3b3Jrc3BhY2VXcmFwcGVyJ1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXInKS5hcHBlbmRDaGlsZCh3b3Jrc3BhY2VXcmFwcGVyKVxuXG5jb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJBZGRXb3JrJylcbmNvbnN0IGFkZFdvcmtzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyQWRkUHJvaicpXG5sZXQgc2VsZWN0ZWRXb3Jrc3BhY2UgPSBnZXRXb3Jrc3BhY2UoKVxuXG5mdW5jdGlvbiBjbGVhclRvRG9Db250YWluZXIgKCkge1xuICAgIHRvRG9Db250YWluZXIuaW5uZXJIVE1MID0gXCJcIlxufVxuXG5mdW5jdGlvbiBnZXRXb3Jrc3BhY2UoKSB7XG4gICAgY29uc3QgbmFtZSA9IHByb21wdFdvcmtzcGFjZU5hbWUoKTtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSBjcmVhdGVXb3Jrc3BhY2UobmFtZSk7XG4gICAgY29uc3Qgd29ya3NwYWNlRWxlbWVudCA9IGNyZWF0ZVdvcmtzcGFjZURPTSh3b3Jrc3BhY2UsIHdvcmtzcGFjZVdyYXBwZXIpO1xuICAgIHdvcmtzcGFjZUVsZW1lbnQuZGF0YXNldC5pZCA9IHdvcmtzcGFjZS5pZDsgXG4gICAgXG4gICAgLy8gb2JqZWN0IG9mIFdvcmtzcGFjZVxuICAgIHJldHVybiB3b3Jrc3BhY2U7XG59XG5cbi8vIGhhbmRsZXJzIGZvciBldmVudCBsaXN0ZW5lcnNcbmZ1bmN0aW9uIGhhbmRsZUFkZFdvcmtzcGFjZSAoKSB7XG4gICAgY2xlYXJUb0RvQ29udGFpbmVyKClcbiAgICBzZWxlY3RlZFdvcmtzcGFjZSA9IGdldFdvcmtzcGFjZSgpXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFkZFRvZG8gKCkge1xuICAgIGNyZWF0ZVBvcFVwVG9kbyhoZXJvLCAoZm9ybVByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1RvZG8gPSBuZXcgVG9kbyhmb3JtUHJvcHMpXG4gICAgICAgIGNvbnN0IHRvZG9DYXJkID0gbmV3VG9kby5hcHBlbmRUb1Byb2plY3QodG9Eb0NvbnRhaW5lcikgXG5cbiAgICAgICAgc2VsZWN0ZWRXb3Jrc3BhY2UuYXBwZW5kVG9Xb3Jrc3BhY2UodG9kb0NhcmQpICAgXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gaGFuZGxlV29ya3NwYWNlQ2xpY2tlZCAoZXZlbnQpIHtcbiAgICBjbGVhclRvRG9Db250YWluZXIoKVxuICAgIGNvbnN0IHdvcmtJRCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkXG4gICAgc2VsZWN0ZWRXb3Jrc3BhY2UgPSBNYW5hZ2VyLmdldFdvcmtzcGFjZUJ5SWQod29ya0lEKVxuICAgIFxuICAgIC8vIGRpc3BsYXlpbmcgY2FyZHMgaW4gdGhhdCB3b3Jrc3BhY2VcbiAgICBzZWxlY3RlZFdvcmtzcGFjZS5jYXJkc1N0b3JhZ2UuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgdG9Eb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKVxuICAgIH0pXG59XG5cbi8vIGFkZGluZyBuZXcgd29ya3NwYWNlIHdoZW4gQ3JlYXRlIHdvcmtzcGFjZSBpcyBwcmVzc2VkXG5hZGRXb3Jrc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRXb3Jrc3BhY2UoKSlcbi8vIGFkZGluZyB0b2RvIHRvIHRoYXQgc3BlY2ZpYyB3b3Jrc3BhY2VcbmFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBZGRUb2RvKCkpXG5cbi8vIHJldHJpZXZpbmcgY2FyZHMgd2hlbiB3b3Jrc3BhY2UgaXMgcHJlc3NlZFxud29ya3NwYWNlV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVdvcmtzcGFjZUNsaWNrZWQoZXZlbnQpKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9