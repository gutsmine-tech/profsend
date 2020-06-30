﻿/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/script/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/script/app.js":
/*!******************************!*\
  !*** ./public/script/app.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./public/script/main.js\");\n/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sub */ \"./public/script/sub.js\");\n/* harmony import */ var _download__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./download */ \"./public/script/download.js\");\n/*\nMIT License\n\nCopyright (c) 2020 gumie\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n*/\n\n\n\n\n\nObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nObject(_sub__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nObject(_download__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack:///./public/script/app.js?");

/***/ }),

/***/ "./public/script/download.js":
/*!***********************************!*\
  !*** ./public/script/download.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return download; });\n/*\nMIT License\n\nCopyright (c) 2020 gumie\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n*/\n\nfunction download() {\n  $(function () {\n    $(\"#download\").click(function () {\n      var name = $(\"#name\").val();\n      $(\"#name, #id, #age, #coment\").on(\"keyup\", function () {\n        var name = $(\"#name\").val();\n      });\n\n      if (name == null || name == \"\") {\n        alert(\"名前が抜けています。\");\n      } else {\n        let canvas = document.getElementById(\"prof\");\n\n        let link = document.createElement(\"a\");\n        link.href = canvas.toDataURL(\"image/png\");\n        link.download = \"prof.png\";\n        link.click();\n      }\n      return false;\n    });\n    $(\"#windl\").click(function () {\n      var dlcanv = document.createElement(\"canvas\");\n      dlcanv.width = 1920;\n      dlcanv.height = 1080;\n      var id = $(\"#id\").val();\n      var age = $(\"#age\").val();\n      var coment = $(\"#coment\").val();\n      var sns = $(\"#snsText\").val();\n      var name = $(\"#name\").val();\n      var e = document.getElementById(\"file\");\n      var color = $(\"#colors\").val();\n\n      var text = $(\"#textColor\").val();\n\n      var comentif = coment == null || typeof coment == \"undefined\" ||\n        coment == \"\";\n      var snsif = sns == null || typeof sns == \"undefined\" || sns == \"\";\n      var ageif = age == null || typeof age == \"undefined\" || age == \"\";\n\n      if (comentif && snsif && ageif) {\n        var e = \"ユーザー名:\\t\" + name + \"\\nID: \\t\" + id;\n      } else if (comentif && snsif) {\n        var e = \"ユーザー名:\\t\" + name + \"\\nID: \\t\" + id + \"\\n 年齢: \\t\" + age;\n      } else if (ageif && snsif) {\n        var e = \"ユーザー名:\\t\" + name + \"\\nID: \\t\" + id + \"\\nコメント: \\t\" + age;\n      } else if (ageif && comentif) {\n        var e = \"ユーザー名:\\t\" + name + \"\\nID: \\t\" + id + \"\\nSNS: \\t\" + sns;\n      } else if (ageif) {\n        var e = \"ユーザー名:\\t\" +\n          name +\n          \"\\nID: \\t\" +\n          id +\n          \"\\nコメント: \\t\" +\n          coment +\n          \"\\nSNS: \\t\" +\n          sns;\n      } else if (comentif) {\n        var e = \"ユーザー名:\\t\" +\n          name +\n          \"\\nID: \\t\" +\n          id +\n          \"\\n 年齢: \\t\" +\n          age +\n          \"\\nSNS: \\t\" +\n          sns;\n      } else if (snsif) {\n        var e = \"ユーザー名:\\t\" +\n          name +\n          \"\\nID: \\t\" +\n          id +\n          \"\\n 年齢: \\t\" +\n          age +\n          \"\\nコメント: \\t\" +\n          coment;\n      } else {\n        var e = \"ユーザー名:\\t\" +\n          name +\n          \"\\nID: \\t\" +\n          id +\n          \"\\n 年齢: \\t\" +\n          age +\n          \"\\nコメント: \\t\" +\n          coment +\n          \"\\nSNS: \\t\" +\n          sns;\n      }\n\n      m.clearRect(0, 0, 500, 300);\n      m.beginPath();\n      m.fillStyle = \"\" + color;\n      m.fillRect(0, 0, 500, 300);\n      m.fillStyle = \"\" + text;\n      m.rect(15, 15, 370, 170);\n      m.lineWidth = 8;\n      m.stroke();\n      var fontSize = 24; // フォントサイズ\n      var lineHeight = 1.1618; // 行の高さ (フォントサイズに対する倍率)\n      var x = 30; // 水平位置\n      var y = 30; // 垂直位置\n      m.font = \"bold \" + o + \"Noto Sans JP\";\n      for (var lines = e.split(\"\\n\"), i = 0, l = lines.length; l > i; i++) {\n        var line = lines[i];\n        var addY = fontSize;\n\n        // 2行目以降の水平位置は行数とlineHeightを考慮する\n        if (i) addY += fontSize * lineHeight * i;\n\n        m.fillText(line, x + 0, y + addY);\n        var a = new Image();\n        (a.src = \"\" + pic), m.drawImage(a, 320, 130, 50, 50);\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack:///./public/script/download.js?");

/***/ }),

/***/ "./public/script/main.js":
/*!*******************************!*\
  !*** ./public/script/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return main; });\n﻿/*\nMIT License\n\nCopyright (c) 2020 gumie\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n*/\n\nfunction main() {\n  $(function () {\n    var o = 35,\n      prof = document.getElementById(\"prof\"),\n      m = prof.getContext(\"2d\");\n    var id = $(\"#id\").val();\n    var age = $(\"#age\").val();\n    var coment = $(\"#coment\").val();\n    var sns = $(\"#snsText\").val();\n    var name = $(\"#name\").val();\n    var id2 = id;\n    var age2 = age;\n    var coment2 = coment;\n    var sns2 = sns;\n    var name2 = name;\n    if ($.cookie(\"id\")) {\n      var id = $.cookie(\"id\");\n      $(\"#id\").val(id);\n    }\n    $.cookie(\"id\", id2);\n\n    if ($.cookie(\"name\")) {\n      var name = $.cookie(\"name\");\n      $(\"#name\").val(name);\n    }\n    $.cookie(\"name\", name2);\n\n    if ($.cookie(\"age\")) {\n      var age = $.cookie(\"age\");\n      $(\"#age\").val(age);\n    }\n    $.cookie(\"age\", age2);\n\n    if ($.cookie(\"coment\")) {\n      var coment = $.cookie(\"coment\");\n      $(\"#coment\").val(coment);\n    }\n    $.cookie(\"coment\", coment2);\n    if ($.cookie(\"sns\")) {\n      var sns = $.cookie(\"sns\");\n      $(\"#sns\").val(sns);\n    }\n    $.cookie(\"sns\", sns2);\n\n    if ($.cookie(\"age\")) {\n      var age = $.cookie(\"age\");\n      $(\"#age\").val(age);\n    }\n    $.cookie(\"age\", age2);\n    setTimeout(function () {\n      $(\".datas\").hide();\n      var data1hide = 0;\n      var data2hide = 0;\n      var data3hide = 0;\n      $(\".delete1\").click(function () {\n        $(\"#name\").val(\"\");\n        i();\n        return false;\n      });\n      $(\".delete2\").click(function () {\n        $(\"#id\").val(\"\");\n        i();\n        return false;\n      });\n      $(\".delete3\").click(function () {\n        $(\"#coment\").val(\"\");\n        i();\n        return false;\n      });\n\n      $(\"#data1Btn,.subData1\").click(function () {\n        $(\".datas\").hide();\n        $(\"#data1\").fadeIn();\n        data1hide = 1;\n        $(\".dataBtn\").hide();\n        return false;\n      });\n      $(\"#data2Btn,.subData2\").click(function () {\n        $(\".datas\").hide();\n\n        $(\"#data2\").fadeIn();\n        $(\".dataBtn\").hide();\n\n        return false;\n      });\n      $(\"#data3Btn,.subData3\").click(function () {\n        $(\".datas\").hide();\n\n        $(\"#data3\").fadeIn();\n        $(\".dataBtn\").hide();\n\n        return false;\n      });\n      $(\".back\").click(function () {\n        $(\".datas\").hide();\n        $(\".dataBtn\").show();\n        return false;\n      });\n      var prof = document.getElementById(\"prof\");\n      var m = prof.getContext(\"2d\");\n      new Image().src = \"\" + pic;\n      var e = document.getElementById(\"file\");\n      var i = function () {\n        setTimeout(function () {\n          var id = $(\"#id\").val();\n          var age = $(\"#age\").val();\n          var coment = $(\"#coment\").val();\n          var sns = $(\"#snsText\").val();\n          var name = $(\"#name\").val();\n          var id2 = id;\n          var age2 = age;\n          var coment2 = coment;\n          var sns2 = sns;\n          var name2 = name;\n          $.cookie(\"id\", id2);\n          $.cookie(\"name\", name2);\n          $.cookie(\"age\", age2);\n          $.cookie(\"coment\", coment2);\n          $.cookie(\"sns\", sns2);\n          $.cookie(\"age\", age2);\n          var comentif = coment == null || typeof coment == \"undefined\" ||\n            coment == \"\";\n          var snsif = sns == null || typeof sns == \"undefined\" || sns == \"\";\n          var ageif = age == null || typeof age == \"undefined\" || age == \"\";\n\n          if (comentif && snsif && ageif) {\n            var e = \"ユーザー名:\\t\" + name + \"\\nID: \\t\" + id;\n          } else if (comentif && snsif) {\n            var e = \"ユーザー名:\\t\" + name + \"\\nID: \\t\" + id + \"\\n 年齢: \\t\" + age;\n          } else if (ageif && snsif) {\n            var e = \"ユーザー名:\\t\" + name + \"\\nID: \\t\" + id + \"\\nコメント: \\t\" + age;\n          } else if (ageif && comentif) {\n            var e = \"ユーザー名:\\t\" + name + \"\\nID: \\t\" + id + \"\\nSNS: \\t\" + sns;\n          } else if (ageif) {\n            var e = \"ユーザー名:\\t\" +\n              name +\n              \"\\nID: \\t\" +\n              id +\n              \"\\nコメント: \\t\" +\n              coment +\n              \"\\nSNS: \\t\" +\n              sns;\n          } else if (comentif) {\n            var e = \"ユーザー名:\\t\" +\n              name +\n              \"\\nID: \\t\" +\n              id +\n              \"\\n 年齢: \\t\" +\n              age +\n              \"\\nSNS: \\t\" +\n              sns;\n          } else if (snsif) {\n            var e = \"ユーザー名:\\t\" +\n              name +\n              \"\\nID: \\t\" +\n              id +\n              \"\\n 年齢: \\t\" +\n              age +\n              \"\\nコメント: \\t\" +\n              coment;\n          } else {\n            var e = \"ユーザー名:\\t\" +\n              name +\n              \"\\nID: \\t\" +\n              id +\n              \"\\n 年齢: \\t\" +\n              age +\n              \"\\nコメント: \\t\" +\n              coment +\n              \"\\nSNS: \\t\" +\n              sns;\n          }\n\n          m.clearRect(0, 0, 500, 300);\n          m.beginPath();\n          m.fillStyle = \"\" + color;\n          m.fillRect(0, 0, 500, 300);\n          m.fillStyle = \"\" + text;\n          m.rect(15, 15, 370, 170);\n          m.lineWidth = 8;\n          m.stroke();\n          var fontSize = 24; // フォントサイズ\n          var lineHeight = 1.1618; // 行の高さ (フォントサイズに対する倍率)\n          var x = 30; // 水平位置\n          var y = 30; // 垂直位置\n          m.font = \"bold \" + o + \"Noto Sans JP\";\n          for (var lines = e.split(\"\\n\"), i = 0, l = lines.length; l > i; i++) {\n            var line = lines[i];\n            var addY = fontSize;\n\n            // 2行目以降の水平位置は行数とlineHeightを考慮する\n            if (i) addY += fontSize * lineHeight * i;\n\n            m.fillText(line, x + 0, y + addY);\n            var a = new Image();\n            (a.src = \"\" + pic), m.drawImage(a, 320, 130, 50, 50);\n          }\n        }, 50);\n      };\n      window.i = i;\n      (m.fillStyle = \"\" + color),\n        m.fillRect(0, 0, 450, 300),\n        (m.fillStyle = \"\" + text),\n        m.rect(15, 15, 370, 170),\n        (m.lineWidth = 8),\n        m.stroke();\n      $(\"#name\").val(), $(\"#id\").val(), $(\"#age\").val(), $(\"#coment\").val();\n      $(\"#snsText\").val();\n      i();\n      $(\".profelem\").on({\n        \"keydown\": i,\n        \"chenge\": i,\n      });\n      $(document).on(\n        {\n          \"keydown\": i,\n          \"chenge\": i,\n        },\n        \".profelem\",\n      );\n      $(\"#colors\").change(function () {\n        (color = $(this).val()), i();\n      }),\n        $(\"#textColor\").change(function () {\n          (text = $(this).val()), i();\n        }),\n        $(\"#idset\").click(function () {\n          var idvalue = $(\"#id\").val();\n          var idtypeVal = Number($(\"#idtype\").val());\n          $(\"#idtext\").html(\n            \"<label for=id>ID：</label>\" +\n              '<input type=\"text\" name=\"formID\" id=\"id\" value=\"' +\n              idvalue +\n              '\" class=\"profelem\" maxlength=\"' +\n              idtypeVal +\n              '\"/>' +\n              '<a href=\"#\" class=\"delete2' +\n              '><i class=\"fas fa-times-circle delete\"></i' +\n              \"></a>\",\n          );\n          i();\n          $(\"#idleng\").html(\"<h5>現在の桁数は\" + idtypeVal + \"です</h5>\");\n        }),\n        e.addEventListener(\"change\", function (e) {\n          var t = e.target.files[0];\n          if (t.type.match(\"image.*\")) {\n            var n = new FileReader();\n            (n.onload = function () {\n              (pic = n.result), i();\n            }), n.readAsDataURL(t);\n          } else alert(\"画像を選択してください\");\n        });\n      $(\"#cookieClear\").click(function () {\n        $.removeCookie(\"name\");\n        $.removeCookie(\"id\");\n        $.removeCookie(\"coment\");\n        $.removeCookie(\"sns\");\n        return false;\n      });\n    });\n  });\n}\n\n\n//# sourceURL=webpack:///./public/script/main.js?");

/***/ }),

/***/ "./public/script/sub.js":
/*!******************************!*\
  !*** ./public/script/sub.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sub; });\n/*\nMIT License\n\nCopyright (c) 2020 gumie\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \"Software\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n*/\n\nfunction sub() {\n  $(function () {\n    var div = $(\"#snsData\");\n    var elems = '<div class=\"input-field col s12\">' +\n      '<input type=\"text\" name=\"formSNS\" id=\"snsText\" class=\"profelem\"  maxlength=\"25\" placeholder=\"\">' +\n      '<label for=\"snsText\">SNS情報：</label>' +\n      \"</div>\";\n    div.html(elems);\n    div.hide();\n    $(\".profelem\").on({\n      \"keydown\": window.i,\n      \"chenge\": window.i,\n    });\n\n    $(\"#snsDataBtn\").click(function () {\n      if (document.getElementById(\"snsText\")) {\n        div.fadeIn;\n      } else {\n        div.fadeOut;\n      }\n      i();\n\n      return false;\n    });\n  });\n}\n\n\n//# sourceURL=webpack:///./public/script/sub.js?");

/***/ })

/******/ });