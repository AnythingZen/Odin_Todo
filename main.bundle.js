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
    color: var(--font-color-title);
}

/* class to be created */
.toDoContainer {
    min-height: 75vh;
    grid-column: 2 / -1;
    grid-row: 2 / -1;

    padding: 0 35px;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 20px;
}

.toDoCards {
    position: relative;
    border: 1px solid var(--bg-color-sidebar);
    background: linear-gradient(var(--bg-color-sidebar), var(--bg-color-topbar));

    max-height: 400px;
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

.workspaceWrapper {
    margin-top: 50px;
    padding: 10px;
    border-top: 2px dotted var(--bg-color-topbar);
}

.workspace {
    color : var(--font-color-general);
    width: 100%;
    text-align: center;
}

.workspace:hover {
    cursor: pointer;
    color: var(--bg-color-topbar);
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,6BAA6B;IAC7B,gCAAgC;;IAEhC,qBAAqB;IACrB,2BAA2B;IAC3B,0BAA0B;;IAE1B,2BAA2B;IAC3B,6BAA6B;;IAE7B,aAAa;AACjB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;EAEE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,aAAa;AACjB;;AAEA;IACI,qCAAqC;IACrC,aAAa;IACb,8BAA8B;IAC9B,4BAA4B;;AAEhC;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;;IAEhB,yCAAyC;;IAEzC,aAAa;IACb,iDAAiD;AACrD;;AAEA;IACI,aAAa;IACb,sBAAsB;;IAEtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;;IAEb,eAAe;IACf,QAAQ;IACR,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,wCAAwC;;IAExC,gDAAgD;IAChD,6CAA6C;;IAE7C,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;;IAEnB,YAAY;;IAEZ,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,WAAW;;IAEX,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,mBAAmB;IACnB,WAAW;;IAEX,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,8BAA8B;AAClC;;AAEA,wBAAwB;AACxB;IACI,gBAAgB;IAChB,mBAAmB;IACnB,gBAAgB;;IAEhB,eAAe;;IAEf,aAAa;IACb,2DAA2D;IAC3D,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,yCAAyC;IACzC,4EAA4E;;IAE5E,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;;IAEb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,0BAA0B;IAC1B,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,kBAAkB;;IAElB,QAAQ;IACR,SAAS;IACT,gCAAgC;;IAEhC,aAAa;IACb,WAAW;;IAEX,kBAAkB;IAClB,2CAA2C;IAC3C,yCAAyC;;AAE7C;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;;IAEnB,SAAS;;AAEb;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,qBAAqB,EAAE,0BAA0B;IACjD,qBAAqB;IACrB,gBAAgB;;AAEpB;;AAEA;;IAEI,aAAa;IACb,SAAS;;IAET,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,aAAa;;IAEb,kBAAkB;IAClB,wCAAwC;AAC5C;;AAEA;IACI,eAAe;IACf,2CAA2C;AAC/C;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,6CAA6C;AACjD;;AAEA;IACI,iCAAiC;IACjC,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,6BAA6B;AACjC","sourcesContent":[":root {\n    --priority-color-high: #f5986a;\n    --priority-color-mid: #eff371;\n    --priority-color-normal: #90f551;\n\n    --bg-color-all: black;\n    --bg-color-sidebar: #5e63b6;\n    --bg-color-topbar: #a393eb;\n\n    --font-color-title: #27296d;\n    --font-color-general: #f5c7f7;\n\n    --color: #000;\n}\n\n* {\n    box-sizing: border-box;\n}\n\ninput, button,\ntextarea, select {\n  font-family: inherit;\n  font-size: inherit;\n}\n\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    height: 100vh;\n}\n\n.hero {\n    background-color: var(--bg-color-all);\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    grid-template-rows: 1fr auto;\n\n}\n\n.sideBar {\n    grid-column: 1 / 2;\n    grid-row: 1 / -1;\n\n    background-color: var(--bg-color-sidebar);\n\n    padding: 20px;\n    box-shadow: 2px 0px 2px var(--font-color-general);\n}\n\n.sidetextWrapper {\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n    justify-content: center;\n}\n\n.sideBarAddWork, .sideBarAddProj {\n    display: flex;\n    \n    font-size: 20px;\n    gap: 5px;\n    color: var(--font-color-general);\n}\n\n.sideBarAddWork {\n    margin-top: 20vh;\n}\n\n.sideBarAddWork:hover, .sideBarAddProj:hover {\n    cursor: pointer;\n    color: var(--bg-color-topbar);\n}\n\n.topRow {\n    grid-row: 1 / 2;\n    grid-column: 2 / -1;\n    background-color: var(--bg-color-topbar);\n    \n    border-bottom: 1px solid var(--bg-color-sidebar);\n    box-shadow: 0 2px 2px var(--bg-color-sidebar);\n    \n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n\n    height: 25vh;\n\n    margin-bottom: 35px;\n}\n\n.topRowLeft {\n    font-size: 20px;\n    width: 40vw;\n\n    display: flex;\n}\n\n.searchLogo:hover {\n    cursor: pointer;\n}\n\n.searchBar {\n    border: 1px solid var(--bg-color-sidebar);\n    border-radius: 12px;\n    width: 100%;\n\n    padding-left: 20px;\n}\n\n.topRowRight > label, .topRowRight > select {\n    font-weight: bold;\n    font-size: 20px;\n    color: var(--font-color-title);\n}\n\n/* class to be created */\n.toDoContainer {\n    min-height: 75vh;\n    grid-column: 2 / -1;\n    grid-row: 2 / -1;\n\n    padding: 0 35px;\n\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\n    gap: 20px;\n}\n\n.toDoCards {\n    position: relative;\n    border: 1px solid var(--bg-color-sidebar);\n    background: linear-gradient(var(--bg-color-sidebar), var(--bg-color-topbar));\n\n    max-height: 400px;\n    border-radius: 8px;\n    padding: 20px;\n\n    display: flex;\n    flex-direction: column;\n}\n\n.toDoCards::before {\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 20px;\n    height: 100%;\n    border-radius: 8px 0 0 8px;\n    background-color: var(--color);\n}\n\n.toDoCards > div {\n    padding: 20px;\n    height: 100%;\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.toDoCards > div > p {\n    margin : 0;\n}\n\n.popUpTodo {\n    position: absolute;\n\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    padding: 25px;\n    width: 50vw;\n\n    border-radius: 8px;\n    border: 5px solid var(--font-color-general);\n    background-color: var(--bg-color-sidebar);\n\n}\n\n.popUpWrapper {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    gap: 10px;\n\n}\n\n.popUpDesc {\n    height: 20vh;\n    overflow-wrap: break-word;\n    word-wrap: break-word; /* in case older browser */\n    white-space: pre-wrap;\n    resize: vertical;\n\n}\n\n.popUpTitle, .popUpDesc, .popUpCalender,\n.popUpPriorityWrapper {\n    display: flex;\n    gap: 10px;\n\n    border-radius: 8px;\n    padding-top: 10px;\n}\n\n.popUpSubmit {\n    font-size: 25px;\n    padding: 10px;\n\n    border-radius: 8px;\n    background-color: var(--bg-color-topbar);\n}\n\n.popUpSubmit:hover {\n    cursor: pointer;\n    background-color: var(--font-color-general);\n}\n\n.workspaceWrapper {\n    margin-top: 50px;\n    padding: 10px;\n    border-top: 2px dotted var(--bg-color-topbar);\n}\n\n.workspace {\n    color : var(--font-color-general);\n    width: 100%;\n    text-align: center;\n}\n\n.workspace:hover {\n    cursor: pointer;\n    color: var(--bg-color-topbar);\n}"],"sourceRoot":""}]);
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

    newWorkspace.style.fontSize = '25px'
    newWorkspace.style.fontWeight = 'bold'

    workspaceWrapper.appendChild(newWorkspace)
    return newWorkspace
}

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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOMContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMContent.js */ "./src/DOMContent.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes.js */ "./src/classes.js");





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

let selectedWorkspace = getWorkspace()

function clearToDoContainer () {
    toDoContainer.innerHTML = ""
}

function getWorkspace() {
    let name = prompt('Name of workspace: ');
    while (!name) name = prompt('NAME WORKSPACE PLEASE!')
    const workspace = new _classes_js__WEBPACK_IMPORTED_MODULE_2__.Workspace(name);
    _classes_js__WEBPACK_IMPORTED_MODULE_2__.Manager.appendToStorage(workspace);
    const workspaceElement = (0,_DOMContent_js__WEBPACK_IMPORTED_MODULE_1__.createWorkspaceDOM)(name, workspaceWrapper);
    workspaceElement.dataset.id = workspace.id; 
    
    // object of Workspace
    return workspace;
}

const addTodo = document.querySelector('.sideBarAddWork')
const addWorkspace = document.querySelector('.sideBarAddProj')

// adding new workspace when Create workspace is pressed
addWorkspace.addEventListener('click', () => {
    clearToDoContainer()
    selectedWorkspace = getWorkspace()
})
// adding todo to that specfic workspace
addTodo.addEventListener('click', () => {
    ;(0,_DOMContent_js__WEBPACK_IMPORTED_MODULE_1__.createPopUpTodo)(hero, (formProps) => {
        const newTodo = new _classes_js__WEBPACK_IMPORTED_MODULE_2__.Todo(formProps)
        const todoCard = newTodo.appendToProject(toDoContainer) 
        selectedWorkspace ? selectedWorkspace.appendToWorkspace(todoCard)
        : alert('Select a workspace to add Todo!') 
    })
})
// retrieving cards when workspace is pressed
workspaceWrapper.addEventListener('click', (event) => {
    clearToDoContainer()
    const workID = event.target.dataset.id
    selectedWorkspace = _classes_js__WEBPACK_IMPORTED_MODULE_2__.Manager.getWorkspaceById(workID)
    
    // displaying cards in that workspace
    if (selectedWorkspace) {
        selectedWorkspace.cardsStorage.forEach(card => {
            toDoContainer.appendChild(card)
        })
    }
})


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxJQUFJLGdFQUFlO0FBQ25CLDRCQUE0Qiw2Q0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluX3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbl90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9ET01Db250ZW50LmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9jbGFzc2VzLmpzIiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gICAgLS1wcmlvcml0eS1jb2xvci1oaWdoOiAjZjU5ODZhO1xuICAgIC0tcHJpb3JpdHktY29sb3ItbWlkOiAjZWZmMzcxO1xuICAgIC0tcHJpb3JpdHktY29sb3Itbm9ybWFsOiAjOTBmNTUxO1xuXG4gICAgLS1iZy1jb2xvci1hbGw6IGJsYWNrO1xuICAgIC0tYmctY29sb3Itc2lkZWJhcjogIzVlNjNiNjtcbiAgICAtLWJnLWNvbG9yLXRvcGJhcjogI2EzOTNlYjtcblxuICAgIC0tZm9udC1jb2xvci10aXRsZTogIzI3Mjk2ZDtcbiAgICAtLWZvbnQtY29sb3ItZ2VuZXJhbDogI2Y1YzdmNztcblxuICAgIC0tY29sb3I6ICMwMDA7XG59XG5cbioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0LCBidXR0b24sXG50ZXh0YXJlYSwgc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuaW1nLFxucGljdHVyZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5oZXJvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1hbGwpO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XG5cbn1cblxuLnNpZGVCYXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMSAvIC0xO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3Itc2lkZWJhcik7XG5cbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDJweCAwcHggMnB4IHZhcigtLWZvbnQtY29sb3ItZ2VuZXJhbCk7XG59XG5cbi5zaWRldGV4dFdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zaWRlQmFyQWRkV29yaywgLnNpZGVCYXJBZGRQcm9qIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIFxuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBnYXA6IDVweDtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcbn1cblxuLnNpZGVCYXJBZGRXb3JrIHtcbiAgICBtYXJnaW4tdG9wOiAyMHZoO1xufVxuXG4uc2lkZUJhckFkZFdvcms6aG92ZXIsIC5zaWRlQmFyQWRkUHJvajpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1iZy1jb2xvci10b3BiYXIpO1xufVxuXG4udG9wUm93IHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAtMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci10b3BiYXIpO1xuICAgIFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1iZy1jb2xvci1zaWRlYmFyKTtcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggdmFyKC0tYmctY29sb3Itc2lkZWJhcik7XG4gICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaGVpZ2h0OiAyNXZoO1xuXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cblxuLnRvcFJvd0xlZnQge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB3aWR0aDogNDB2dztcblxuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zZWFyY2hMb2dvOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2hCYXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLXNpZGViYXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi50b3BSb3dSaWdodCA+IGxhYmVsLCAudG9wUm93UmlnaHQgPiBzZWxlY3Qge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci10aXRsZSk7XG59XG5cbi8qIGNsYXNzIHRvIGJlIGNyZWF0ZWQgKi9cbi50b0RvQ29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiA3NXZoO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gLTE7XG4gICAgZ3JpZC1yb3c6IDIgLyAtMTtcblxuICAgIHBhZGRpbmc6IDAgMzVweDtcblxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4udG9Eb0NhcmRzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctY29sb3Itc2lkZWJhcik7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHZhcigtLWJnLWNvbG9yLXNpZGViYXIpLCB2YXIoLS1iZy1jb2xvci10b3BiYXIpKTtcblxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udG9Eb0NhcmRzOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcik7XG59XG5cbi50b0RvQ2FyZHMgPiBkaXYge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbn1cblxuLnRvRG9DYXJkcyA+IGRpdiA+IHAge1xuICAgIG1hcmdpbiA6IDA7XG59XG5cbi5wb3BVcFRvZG8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgd2lkdGg6IDUwdnc7XG5cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1zaWRlYmFyKTtcblxufVxuXG4ucG9wVXBXcmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGdhcDogMTBweDtcblxufVxuXG4ucG9wVXBEZXNjIHtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC8qIGluIGNhc2Ugb2xkZXIgYnJvd3NlciAqL1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICByZXNpemU6IHZlcnRpY2FsO1xuXG59XG5cbi5wb3BVcFRpdGxlLCAucG9wVXBEZXNjLCAucG9wVXBDYWxlbmRlcixcbi5wb3BVcFByaW9yaXR5V3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5wb3BVcFN1Ym1pdCB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3ItdG9wYmFyKTtcbn1cblxuLnBvcFVwU3VibWl0OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcbn1cblxuLndvcmtzcGFjZVdyYXBwZXIge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItdG9wOiAycHggZG90dGVkIHZhcigtLWJnLWNvbG9yLXRvcGJhcik7XG59XG5cbi53b3Jrc3BhY2Uge1xuICAgIGNvbG9yIDogdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi53b3Jrc3BhY2U6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tYmctY29sb3ItdG9wYmFyKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLGdDQUFnQzs7SUFFaEMscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQiwwQkFBMEI7O0lBRTFCLDJCQUEyQjtJQUMzQiw2QkFBNkI7O0lBRTdCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDRCQUE0Qjs7QUFFaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCOztJQUVoQix5Q0FBeUM7O0lBRXpDLGFBQWE7SUFDYixpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTs7SUFFYixlQUFlO0lBQ2YsUUFBUTtJQUNSLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHdDQUF3Qzs7SUFFeEMsZ0RBQWdEO0lBQ2hELDZDQUE2Qzs7SUFFN0MsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7O0lBRW5CLFlBQVk7O0lBRVosbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7O0lBRVgsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLFdBQVc7O0lBRVgsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUEsd0JBQXdCO0FBQ3hCO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7O0lBRWhCLGVBQWU7O0lBRWYsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLDRFQUE0RTs7SUFFNUUsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhOztJQUViLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXOztJQUVYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQzs7SUFFaEMsYUFBYTtJQUNiLFdBQVc7O0lBRVgsa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyx5Q0FBeUM7O0FBRTdDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixTQUFTOztBQUViOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUIsRUFBRSwwQkFBMEI7SUFDakQscUJBQXFCO0lBQ3JCLGdCQUFnQjs7QUFFcEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLFNBQVM7O0lBRVQsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhOztJQUViLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLXByaW9yaXR5LWNvbG9yLWhpZ2g6ICNmNTk4NmE7XFxuICAgIC0tcHJpb3JpdHktY29sb3ItbWlkOiAjZWZmMzcxO1xcbiAgICAtLXByaW9yaXR5LWNvbG9yLW5vcm1hbDogIzkwZjU1MTtcXG5cXG4gICAgLS1iZy1jb2xvci1hbGw6IGJsYWNrO1xcbiAgICAtLWJnLWNvbG9yLXNpZGViYXI6ICM1ZTYzYjY7XFxuICAgIC0tYmctY29sb3ItdG9wYmFyOiAjYTM5M2ViO1xcblxcbiAgICAtLWZvbnQtY29sb3ItdGl0bGU6ICMyNzI5NmQ7XFxuICAgIC0tZm9udC1jb2xvci1nZW5lcmFsOiAjZjVjN2Y3O1xcblxcbiAgICAtLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaW5wdXQsIGJ1dHRvbixcXG50ZXh0YXJlYSwgc2VsZWN0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbn1cXG5cXG5pbWcsXFxucGljdHVyZSB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlcm8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1hbGwpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XFxuXFxufVxcblxcbi5zaWRlQmFyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIC0xO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1zaWRlYmFyKTtcXG5cXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm94LXNoYWRvdzogMnB4IDBweCAycHggdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcXG59XFxuXFxuLnNpZGV0ZXh0V3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2lkZUJhckFkZFdvcmssIC5zaWRlQmFyQWRkUHJvaiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcXG59XFxuXFxuLnNpZGVCYXJBZGRXb3JrIHtcXG4gICAgbWFyZ2luLXRvcDogMjB2aDtcXG59XFxuXFxuLnNpZGVCYXJBZGRXb3JrOmhvdmVyLCAuc2lkZUJhckFkZFByb2o6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1iZy1jb2xvci10b3BiYXIpO1xcbn1cXG5cXG4udG9wUm93IHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIC0xO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci10b3BiYXIpO1xcbiAgICBcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJnLWNvbG9yLXNpZGViYXIpO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAycHggdmFyKC0tYmctY29sb3Itc2lkZWJhcik7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiAyNXZoO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xcbn1cXG5cXG4udG9wUm93TGVmdCB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgd2lkdGg6IDQwdnc7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zZWFyY2hMb2dvOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2VhcmNoQmFyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctY29sb3Itc2lkZWJhcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxufVxcblxcbi50b3BSb3dSaWdodCA+IGxhYmVsLCAudG9wUm93UmlnaHQgPiBzZWxlY3Qge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci10aXRsZSk7XFxufVxcblxcbi8qIGNsYXNzIHRvIGJlIGNyZWF0ZWQgKi9cXG4udG9Eb0NvbnRhaW5lciB7XFxuICAgIG1pbi1oZWlnaHQ6IDc1dmg7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gLTE7XFxuICAgIGdyaWQtcm93OiAyIC8gLTE7XFxuXFxuICAgIHBhZGRpbmc6IDAgMzVweDtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MDBweCwgMWZyKSk7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnRvRG9DYXJkcyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmctY29sb3Itc2lkZWJhcik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS1iZy1jb2xvci1zaWRlYmFyKSwgdmFyKC0tYmctY29sb3ItdG9wYmFyKSk7XFxuXFxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50b0RvQ2FyZHM6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDAgMCA4cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcXG59XFxuXFxuLnRvRG9DYXJkcyA+IGRpdiB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLnRvRG9DYXJkcyA+IGRpdiA+IHAge1xcbiAgICBtYXJnaW4gOiAwO1xcbn1cXG5cXG4ucG9wVXBUb2RvIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgd2lkdGg6IDUwdnc7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgdmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3Itc2lkZWJhcik7XFxuXFxufVxcblxcbi5wb3BVcFdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgZ2FwOiAxMHB4O1xcblxcbn1cXG5cXG4ucG9wVXBEZXNjIHtcXG4gICAgaGVpZ2h0OiAyMHZoO1xcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC8qIGluIGNhc2Ugb2xkZXIgYnJvd3NlciAqL1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxuXFxufVxcblxcbi5wb3BVcFRpdGxlLCAucG9wVXBEZXNjLCAucG9wVXBDYWxlbmRlcixcXG4ucG9wVXBQcmlvcml0eVdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi5wb3BVcFN1Ym1pdCB7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci10b3BiYXIpO1xcbn1cXG5cXG4ucG9wVXBTdWJtaXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3ItZ2VuZXJhbCk7XFxufVxcblxcbi53b3Jrc3BhY2VXcmFwcGVyIHtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXRvcDogMnB4IGRvdHRlZCB2YXIoLS1iZy1jb2xvci10b3BiYXIpO1xcbn1cXG5cXG4ud29ya3NwYWNlIHtcXG4gICAgY29sb3IgOiB2YXIoLS1mb250LWNvbG9yLWdlbmVyYWwpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ud29ya3NwYWNlOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tYmctY29sb3ItdG9wYmFyKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgTWFnbmlmeSBmcm9tICcuL2Fzc2V0cy9tYWduaWZ5LnN2ZydcbmltcG9ydCBBZGRMb2dvIGZyb20gJy4vYXNzZXRzL2FkZC5zdmcnXG5cbi8vIEhlbHBlciBmdW5jdGlvbiBmb3Igc3Znc1xuY29uc3QgY3JlYXRlU2lkZURpdiA9IChsb2dvc3JjLCB0ZXh0LCB3aWR0aCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpXG5cbiAgICBsb2dvLnNyYyA9IGxvZ29zcmNcbiAgICBsb2dvLnN0eWxlLndpZHRoID0gd2lkdGhcbiAgICBkaXYuaW5uZXJIVE1MID0gdGV4dFxuICAgIGRpdi5hcHBlbmRDaGlsZChsb2dvKVxuXG4gICAgcmV0dXJuIGRpdlxufVxuXG4vLyBTZXBlcmF0ZSBpbnRvIHRvcCBiYXJcbi8vIEZlYXR1cmVzOiB0byBzb3J0IGJ5IGRhdGUvcHJpb3JpdHlcbmV4cG9ydCBmdW5jdGlvbiB0b3BCYXJET00gKHBhcmVudENvbnRhaW5lcikge1xuICAgIGNvbnN0IHJvd0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbGVmdFNpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHJpZ2h0U2lkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCBzZWFyY2hMb2dvID0gY3JlYXRlU2lkZURpdihNYWduaWZ5LCBudWxsLCAnMjVweCcpXG4gICAgY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHNlYXJjaEJhci5wbGFjZWhvbGRlciA9ICdUcnkgc2VhcmNoaW5nIHRpdGxlIG9mIHlvdXIgdGFzayEnXG5cbiAgICByb3dDb250YWluZXIuY2xhc3NOYW1lID0gJ3RvcFJvdydcbiAgICBsZWZ0U2lkZS5jbGFzc05hbWUgPSAndG9wUm93TGVmdCdcbiAgICByaWdodFNpZGUuY2xhc3NOYW1lID0gJ3RvcFJvd1JpZ2h0J1xuICAgIHNlYXJjaExvZ28uY2xhc3NOYW1lID0gJ3NlYXJjaExvZ28nXG4gICAgc2VhcmNoQmFyLmNsYXNzTmFtZSA9ICdzZWFyY2hCYXInXG5cbiAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocm93Q29udGFpbmVyKVxuXG4gICAgcm93Q29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRTaWRlKVxuICAgIHJvd0NvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodFNpZGUpXG5cbiAgICBsZWZ0U2lkZS5hcHBlbmRDaGlsZChzZWFyY2hMb2dvKVxuICAgIGxlZnRTaWRlLmFwcGVuZENoaWxkKHNlYXJjaEJhcilcblxuICAgIGNvbnN0IGRyb3Bkb3duSFRNTCA9IGBcbiAgICA8bGFiZWwgZm9yPVwic29ydEJ5XCI+U29ydCBCeTwvbGFiZWw+XG4gICAgPHNlbGVjdCBuYW1lPVwic29ydEJ5XCIgaWQ9XCJzb3J0QnlcIj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJ5UHJpb3JpdHlcIj5Qcmlvcml0eTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYnlEYXRlXCI+RGF0ZTwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PmBcblxuICAgIHJpZ2h0U2lkZS5pbm5lckhUTUwgPSBkcm9wZG93bkhUTUxcbn1cbi8vIFNpZGUgYmFyXG4vLyBGZWF0dXJlczogdG8gY3JlYXRlIHdvcmtzcGFjZXMgYW5kIG5hdiBkaWZmIHdvcmtzcGFjZSBcbmV4cG9ydCBmdW5jdGlvbiBzaWRlQmFyRE9NIChwYXJlbnRDb250YWluZXIpIHtcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0ZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICBjb25zdCB0b2RvTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdG9kb05hbWUuaW5uZXJIVE1MID0gJ0JhY2tMb2dzJ1xuICAgIHRvZG9OYW1lLnN0eWxlLmZvbnRTaXplID0gJzQ4cHgnXG4gICAgdG9kb05hbWUuc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJ1xuICAgIHRvZG9OYW1lLnN0eWxlLmNvbG9yID0gJ3ZhcigtLWZvbnQtY29sb3ItdGl0bGUpJ1xuXG4gICAgY29uc3QgYWRkV29yayA9IGNyZWF0ZVNpZGVEaXYoQWRkTG9nbywgJzxwPkFkZCBUb0RvPC9wPicsICczMHB4JylcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gY3JlYXRlU2lkZURpdihBZGRMb2dvLCAnPHA+Q3JlYXRlIFdvcmtzcGFjZTwvcD4nLCAnMzBweCcpXG5cbiAgICBzaWRlQmFyLmNsYXNzTmFtZSA9ICdzaWRlQmFyJ1xuICAgIHRleHRXcmFwcGVyLmNsYXNzTmFtZSA9ICdzaWRlVGV4dFdyYXBwZXInXG4gICAgYWRkV29yay5jbGFzc05hbWUgPSAnc2lkZUJhckFkZFdvcmsnXG4gICAgYWRkUHJvamVjdC5jbGFzc05hbWUgPSAnc2lkZUJhckFkZFByb2onXG5cbiAgICBwYXJlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2lkZUJhcilcbiAgICBzaWRlQmFyLmFwcGVuZENoaWxkKHRleHRXcmFwcGVyKVxuICAgIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKHRvZG9OYW1lKVxuICAgIHRleHRXcmFwcGVyLmFwcGVuZENoaWxkKGFkZFdvcmspXG4gICAgdGV4dFdyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdClcbn1cbi8vIENlbnRyZSB0b2RvIGxpc3RzXG4vLyBGZWF0dXJlczogdG8gbWFrZSB0b2RvIGxpc3RzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2FyZERPTSAocGFyZW50Q29udGFpbmVyKSB7XG4gICAgY29uc3QgdG9Eb0NhcmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0b0RvVGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRvRG9Db3VudGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBcbiAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCB0b0RvRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIFxuICAgIHRvRG9DYXJkcy5jbGFzc05hbWUgPSAndG9Eb0NhcmRzJ1xuICAgIHRvRG9UaXRsZS5jbGFzc05hbWUgPSAndG9Eb1RpdGxlJ1xuICAgIHRvRG9EZXNjLmNsYXNzTmFtZSA9ICd0b0RvRGVzYydcbiAgICB0b0RvQ291bnRkb3duLmNsYXNzTmFtZSA9ICd0b0RvQ291bnRkb3duJ1xuXG4gICAgdG9Eb1RpdGxlLnN0eWxlLmZvbnRTaXplID0gJzI2cHgnXG4gICAgdG9Eb1RpdGxlLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCdcbiAgICB0b0RvVGl0bGUuc3R5bGUuY29sb3IgPSAndmFyKC0tZm9udC1jb2xvci10aXRsZSknXG5cbiAgICB0b0RvRGVzYy5zdHlsZS5mb250U2l6ZSA9ICcyMHB4J1xuICAgIHRvRG9EZXNjLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCdcbiAgICB0b0RvRGVzYy5zdHlsZS5jb2xvciA9ICd2YXIoLS1mb250LWNvbG9yLWdlbmVyYWwpJ1xuXG4gICAgdG9Eb0NvdW50ZG93bi5zdHlsZS5mb250U2l6ZSA9ICcyMHB4J1xuICAgIHRvRG9Db3VudGRvd24uc3R5bGUuZm9udFdlaWdodCA9ICdib2xkJ1xuICAgIHRvRG9Db3VudGRvd24uc3R5bGUuY29sb3IgPSAndmFyKC0tZm9udC1jb2xvci1nZW5lcmFsKSdcblxuICAgIHBhcmVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b0RvQ2FyZHMpXG4gICAgdG9Eb0NhcmRzLmFwcGVuZENoaWxkKHRvRG9UZXh0cylcblxuICAgIHRvRG9UZXh0cy5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpXG4gICAgdG9Eb1RleHRzLmFwcGVuZENoaWxkKHRvRG9EZXNjKVxuICAgIHRvRG9UZXh0cy5hcHBlbmRDaGlsZCh0b0RvQ291bnRkb3duKVxuXG5cbiAgICByZXR1cm4gdG9Eb0NhcmRzXG59XG5cbmZ1bmN0aW9uIGdldERhdGUgKCkge1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxuICAgIGNvbnN0IGRheSA9IGN1cnJlbnREYXRlLmdldERhdGUoKVxuICAgIGNvbnN0IG1vbnRoID0gY3VycmVudERhdGUuZ2V0TW9udGgoKSArIDFcbiAgICBjb25zdCB5ZWFyID0gY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKVxuXG4gICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWBcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5wdXRCYXIgKGNsYXNzTmFtZSwgbGFiZWxUZXh0LCBpbnB1dFR5cGUsIHZhbHVlID0gbnVsbCkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNvbnN0IGxhYmVsSW5wdXRCb3ggPSBjbGFzc05hbWUgPT0gJ3BvcFVwRGVzYycgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpIDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG5cbiAgICBsYWJlbC5mb3IgPSBjbGFzc05hbWVcbiAgICBsYWJlbC5pbm5lckhUTUwgPSBsYWJlbFRleHRcbiAgICBsYWJlbC5zdHlsZS5mb250U2l6ZSA9ICcyNXB4J1xuICAgIGxhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCdcblxuICAgIGlmIChpbnB1dFR5cGUgPT09ICdkYXRlJyB8fCBpbnB1dFR5cGUgPT09ICdyYWRpbycpIGxhYmVsSW5wdXRCb3gudmFsdWUgPSB2YWx1ZVxuXG4gICAgbGFiZWxJbnB1dEJveC5uYW1lID0gY2xhc3NOYW1lXG4gICAgaWYgKGxhYmVsSW5wdXRCb3gubm9kZU5hbWUgPT09ICdJTlBVVCcpIGxhYmVsSW5wdXRCb3gudHlwZSA9IGlucHV0VHlwZVxuICAgIGxhYmVsSW5wdXRCb3guY2xhc3NOYW1lID0gY2xhc3NOYW1lXG4gICAgbGFiZWxJbnB1dEJveC5zdHlsZS5mb250U2l6ZSA9ICcyNXB4J1xuXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbClcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsSW5wdXRCb3gpXG5cbiAgICByZXR1cm4gd3JhcHBlclxufVxuXG4vLyBQb3AgdXAgRE9NIGZvciBtYWtpbmcgVG9EbyBjYXJkc1xuLy8gVG8gYmUgYXBwZW5kZWQgdG8gLmhlcm9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQb3BVcFRvZG8gKHBhcmVudENvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBwb3BVcFRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBjb25zdCBwb3BVcFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHBvcFVwU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBwb3BVcFN1Ym1pdC50eXBlID0gJ3N1Ym1pdCdcbiAgICBwb3BVcFN1Ym1pdC5pbm5lckhUTUwgPSAnQWRkIFRvIERvIScgXG5cbiAgICBjb25zdCBwb3BVcFRpdGxlID0gY3JlYXRlSW5wdXRCYXIoJ3BvcFVwVGl0bGUnLCAnVGFzaycsICd0ZXh0JylcbiAgICBjb25zdCBwb3BVcERlc2MgPSBjcmVhdGVJbnB1dEJhcigncG9wVXBEZXNjJywgJ0Rlc2NyaXB0aW9uJywgJ3RleHQnKVxuICAgIGNvbnN0IHBvcFVwQ2FsZW5kZXIgPSBjcmVhdGVJbnB1dEJhcigncG9wVXBDYWxlbmRlcicsICdUYXNrIEVuZHMnLCAnZGF0ZScsIGdldERhdGUoKSlcblxuICAgIGNvbnN0IHBvcFVwUHJpb3JpdHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBwb3BVcE5vcm1hbCA9IGNyZWF0ZUlucHV0QmFyKCdwb3BVcFByaW9yaXR5JywgJ05vcm1hbCcsICdyYWRpbycsICdub3JtYWwnKVxuICAgIGNvbnN0IHBvcFVwTWVkaXVtID0gY3JlYXRlSW5wdXRCYXIoJ3BvcFVwUHJpb3JpdHknLCAnTWVkaXVtJywgJ3JhZGlvJywgJ21lZGl1bScpXG4gICAgY29uc3QgcG9wVXBIaWdoID0gY3JlYXRlSW5wdXRCYXIoJ3BvcFVwUHJpb3JpdHknLCAnSGlnaCcsICdyYWRpbycsICdoaWdoJylcbiAgICBcbiAgICBwb3BVcFRvZG8uY2xhc3NOYW1lID0gJ3BvcFVwVG9kbydcbiAgICBwb3BVcFdyYXBwZXIuY2xhc3NOYW1lID0gJ3BvcFVwV3JhcHBlcidcbiAgICBwb3BVcFN1Ym1pdC5jbGFzc05hbWUgPSAncG9wVXBTdWJtaXQnXG4gICAgcG9wVXBQcmlvcml0eVdyYXBwZXIuY2xhc3NOYW1lID0gJ3BvcFVwUHJpb3JpdHlXcmFwcGVyJ1xuXG4gICAgcGFyZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHBvcFVwVG9kbylcbiAgICBwb3BVcFRvZG8uYXBwZW5kQ2hpbGQocG9wVXBXcmFwcGVyKVxuICAgIHBvcFVwV3JhcHBlci5hcHBlbmRDaGlsZChwb3BVcFRpdGxlKVxuICAgIHBvcFVwV3JhcHBlci5hcHBlbmRDaGlsZChwb3BVcERlc2MpXG4gICAgcG9wVXBXcmFwcGVyLmFwcGVuZENoaWxkKHBvcFVwQ2FsZW5kZXIpXG4gICAgcG9wVXBXcmFwcGVyLmFwcGVuZENoaWxkKHBvcFVwUHJpb3JpdHlXcmFwcGVyKVxuICAgIHBvcFVwV3JhcHBlci5hcHBlbmRDaGlsZChwb3BVcFN1Ym1pdClcblxuICAgIHBvcFVwUHJpb3JpdHlXcmFwcGVyLmFwcGVuZENoaWxkKHBvcFVwTm9ybWFsKVxuICAgIHBvcFVwUHJpb3JpdHlXcmFwcGVyLmFwcGVuZENoaWxkKHBvcFVwTWVkaXVtKVxuICAgIHBvcFVwUHJpb3JpdHlXcmFwcGVyLmFwcGVuZENoaWxkKHBvcFVwSGlnaClcblxuXG4gICAgcG9wVXBUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXRcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSlcbiAgICAgICAgY29uc3QgZm9ybVByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKVxuXG4gICAgICAgIGNhbGxiYWNrKGZvcm1Qcm9wcylcbiAgICAgICAgcG9wVXBUb2RvLnJlbW92ZSgpXG5cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlV29ya3NwYWNlRE9NICh3b3Jrc3BhY2VOYW1lLCB3b3Jrc3BhY2VXcmFwcGVyKSB7XG4gICAgY29uc3QgbmV3V29ya3NwYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBuZXdXb3Jrc3BhY2UuaW5uZXJIVE1MID0gd29ya3NwYWNlTmFtZVxuICAgIG5ld1dvcmtzcGFjZS5jbGFzc05hbWUgPSAnd29ya3NwYWNlJ1xuXG4gICAgbmV3V29ya3NwYWNlLnN0eWxlLmZvbnRTaXplID0gJzI1cHgnXG4gICAgbmV3V29ya3NwYWNlLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCdcblxuICAgIHdvcmtzcGFjZVdyYXBwZXIuYXBwZW5kQ2hpbGQobmV3V29ya3NwYWNlKVxuICAgIHJldHVybiBuZXdXb3Jrc3BhY2Vcbn0iLCJpbXBvcnQgeyBjcmVhdGVDYXJkRE9NIH0gZnJvbSBcIi4vRE9NQ29udGVudC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKGZvcm1Qcm9wcykge1xuICAgIHRoaXMudGl0bGUgPSBmb3JtUHJvcHMucG9wVXBUaXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZm9ybVByb3BzLnBvcFVwRGVzYztcbiAgICB0aGlzLmRhdGUgPSBmb3JtUHJvcHMucG9wVXBDYWxlbmRlciB8fCAnMCc7IC8vIE9wdGlvbmFsIGRhdGVcbiAgICB0aGlzLnByaW9yaXR5ID0gZm9ybVByb3BzLnBvcFVwUHJpb3JpdHkgfHwgJ25vcm1hbCc7IC8vIERlZmF1bHQgcHJpb3JpdHlcbiAgfVxuXG4gIGFwcGVuZFRvUHJvamVjdCh0b0RvQ29udGFpbmVyKSB7XG4gICAgLy8gcGFyZW50IGNvbnRhaW5lciB0byBiZSB1cGRhdGVkIHdpdGggd29ya3NwYWNlIGNvbnRhaW5lciBpbnN0ZWFkXG4gICAgY29uc3QgdG9kb0NhcmQgPSBjcmVhdGVDYXJkRE9NKHRvRG9Db250YWluZXIpO1xuICAgIHRoaXMucG9wdWxhdGVDYXJkKHRvZG9DYXJkKTtcbiAgICByZXR1cm4gdG9kb0NhcmQ7XG4gIH1cblxuICBwb3B1bGF0ZUNhcmQoY2FyZEVsZW1lbnQpIHtcbiAgICBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb1RpdGxlJykuaW5uZXJUZXh0ID0gdGhpcy50aXRsZTtcbiAgICBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudG9Eb0Rlc2MnKS5pbm5lclRleHQgPSB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b0RvQ291bnRkb3duJykuaW5uZXJUZXh0ID0gYFxuICAgICAgICBZb3UgaGF2ZSAqJHt0aGlzLmRhdGUuc3BsaXQoJy0nKS5wb3AoKSAtIHRoaXMudG9kYXlEYXRlKCl9KiBkYXlzIGxlZnQhYDtcbiAgICB0aGlzLnNldFByaW9yaXR5Q29sb3IoY2FyZEVsZW1lbnQpO1xuICB9XG5cbiAgc2V0UHJpb3JpdHlDb2xvcihjYXJkRWxlbWVudCkge1xuXG4gICAgICAgIHN3aXRjaCh0aGlzLnByaW9yaXR5KSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2hpZ2gnOlxuICAgICAgICAgICAgICAgIGNhcmRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWNvbG9yJywgJ3ZhcigtLXByaW9yaXR5LWNvbG9yLWhpZ2gpJylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnbWVkaXVtJzpcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb2xvcicsICd2YXIoLS1wcmlvcml0eS1jb2xvci1taWQpJylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSAnbm9ybWFsJzpcbiAgICAgICAgICAgICAgICBjYXJkRWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jb2xvcicsICd2YXIoLS1wcmlvcml0eS1jb2xvci1ub3JtYWwpJylcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gIH1cblxuICB0b2RheURhdGUgKCkge1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxuICAgIHJldHVybiBjdXJyZW50RGF0ZS5nZXREYXRlKClcbiAgfVxufVxuXG4vLyBoYW5kbGVzIGFsbCB0b2RvIGNhcmRzXG5leHBvcnQgY2xhc3MgV29ya3NwYWNlIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICB0aGlzLmlkID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KTsgLy8gR2VuZXJhdGUgdW5pcXVlIElEXG4gICAgdGhpcy5jYXJkc1N0b3JhZ2UgPSBbXVxuICB9XG5cbiAgYXBwZW5kVG9Xb3Jrc3BhY2UgKHRvZG8pIHtcbiAgICB0aGlzLmNhcmRzU3RvcmFnZS5wdXNoKHRvZG8pXG4gIH1cblxuICAvLyBmdW5jdGlvbiB0byBoYW5kbGUgc29ydGluZyBieSBkYXRlcy9wcmlvcml0eVxufVxuXG4vLyBoYW5kbGVzIGFsbCBwcm9qZWN0c1xuZXhwb3J0IGNsYXNzIE1hbmFnZXIge1xuICBzdGF0aWMgc3RvcmFnZSA9IFtdXG5cbiAgc3RhdGljIGFwcGVuZFRvU3RvcmFnZSAod29ya3NwYWNlKSB7XG4gICAgTWFuYWdlci5zdG9yYWdlLnB1c2god29ya3NwYWNlKVxuICB9XG5cbiAgc3RhdGljIGdldFdvcmtzcGFjZUJ5SWQod29ya3NwYWNlSWQpIHtcbiAgICByZXR1cm4gTWFuYWdlci5zdG9yYWdlLmZpbmQod3MgPT4gd3MuaWQgPT09IHdvcmtzcGFjZUlkKTtcbiAgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyB0b3BCYXJET00sIHNpZGVCYXJET00sIGNyZWF0ZVdvcmtzcGFjZURPTSwgfSBmcm9tICcuL0RPTUNvbnRlbnQuanMnO1xuaW1wb3J0IHsgY3JlYXRlUG9wVXBUb2RvIH0gZnJvbSBcIi4vRE9NQ29udGVudC5qc1wiO1xuaW1wb3J0IHsgTWFuYWdlciwgVG9kbywgV29ya3NwYWNlIH0gZnJvbSBcIi4vY2xhc3Nlcy5qc1wiO1xuXG4vLyBnbG9iYWwgdmFyaWFibGVzXG5jb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKVxudG9wQmFyRE9NKGhlcm8pXG5zaWRlQmFyRE9NKGhlcm8pXG5jb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbnRvRG9Db250YWluZXIuY2xhc3NOYW1lID0gJ3RvRG9Db250YWluZXInXG5oZXJvLmFwcGVuZENoaWxkKHRvRG9Db250YWluZXIpXG5cbmNvbnN0IHdvcmtzcGFjZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxud29ya3NwYWNlV3JhcHBlci5jbGFzc05hbWUgPSAnd29ya3NwYWNlV3JhcHBlcidcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyJykuYXBwZW5kQ2hpbGQod29ya3NwYWNlV3JhcHBlcilcblxubGV0IHNlbGVjdGVkV29ya3NwYWNlID0gZ2V0V29ya3NwYWNlKClcblxuZnVuY3Rpb24gY2xlYXJUb0RvQ29udGFpbmVyICgpIHtcbiAgICB0b0RvQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCJcbn1cblxuZnVuY3Rpb24gZ2V0V29ya3NwYWNlKCkge1xuICAgIGxldCBuYW1lID0gcHJvbXB0KCdOYW1lIG9mIHdvcmtzcGFjZTogJyk7XG4gICAgd2hpbGUgKCFuYW1lKSBuYW1lID0gcHJvbXB0KCdOQU1FIFdPUktTUEFDRSBQTEVBU0UhJylcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSBuZXcgV29ya3NwYWNlKG5hbWUpO1xuICAgIE1hbmFnZXIuYXBwZW5kVG9TdG9yYWdlKHdvcmtzcGFjZSk7XG4gICAgY29uc3Qgd29ya3NwYWNlRWxlbWVudCA9IGNyZWF0ZVdvcmtzcGFjZURPTShuYW1lLCB3b3Jrc3BhY2VXcmFwcGVyKTtcbiAgICB3b3Jrc3BhY2VFbGVtZW50LmRhdGFzZXQuaWQgPSB3b3Jrc3BhY2UuaWQ7IFxuICAgIFxuICAgIC8vIG9iamVjdCBvZiBXb3Jrc3BhY2VcbiAgICByZXR1cm4gd29ya3NwYWNlO1xufVxuXG5jb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVCYXJBZGRXb3JrJylcbmNvbnN0IGFkZFdvcmtzcGFjZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlQmFyQWRkUHJvaicpXG5cbi8vIGFkZGluZyBuZXcgd29ya3NwYWNlIHdoZW4gQ3JlYXRlIHdvcmtzcGFjZSBpcyBwcmVzc2VkXG5hZGRXb3Jrc3BhY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJUb0RvQ29udGFpbmVyKClcbiAgICBzZWxlY3RlZFdvcmtzcGFjZSA9IGdldFdvcmtzcGFjZSgpXG59KVxuLy8gYWRkaW5nIHRvZG8gdG8gdGhhdCBzcGVjZmljIHdvcmtzcGFjZVxuYWRkVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGVQb3BVcFRvZG8oaGVybywgKGZvcm1Qcm9wcykgPT4ge1xuICAgICAgICBjb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oZm9ybVByb3BzKVxuICAgICAgICBjb25zdCB0b2RvQ2FyZCA9IG5ld1RvZG8uYXBwZW5kVG9Qcm9qZWN0KHRvRG9Db250YWluZXIpIFxuICAgICAgICBzZWxlY3RlZFdvcmtzcGFjZSA/IHNlbGVjdGVkV29ya3NwYWNlLmFwcGVuZFRvV29ya3NwYWNlKHRvZG9DYXJkKVxuICAgICAgICA6IGFsZXJ0KCdTZWxlY3QgYSB3b3Jrc3BhY2UgdG8gYWRkIFRvZG8hJykgXG4gICAgfSlcbn0pXG4vLyByZXRyaWV2aW5nIGNhcmRzIHdoZW4gd29ya3NwYWNlIGlzIHByZXNzZWRcbndvcmtzcGFjZVdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjbGVhclRvRG9Db250YWluZXIoKVxuICAgIGNvbnN0IHdvcmtJRCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkXG4gICAgc2VsZWN0ZWRXb3Jrc3BhY2UgPSBNYW5hZ2VyLmdldFdvcmtzcGFjZUJ5SWQod29ya0lEKVxuICAgIFxuICAgIC8vIGRpc3BsYXlpbmcgY2FyZHMgaW4gdGhhdCB3b3Jrc3BhY2VcbiAgICBpZiAoc2VsZWN0ZWRXb3Jrc3BhY2UpIHtcbiAgICAgICAgc2VsZWN0ZWRXb3Jrc3BhY2UuY2FyZHNTdG9yYWdlLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICB0b0RvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpXG4gICAgICAgIH0pXG4gICAgfVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==