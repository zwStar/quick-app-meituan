(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(16)
	var $app_style$ = __webpack_require__(17)
	var $app_script$ = __webpack_require__(18)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "location"
	  },
	  "id": "location",
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "search-wrap"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "input-wrap"
	          ],
	          "children": [
	            {
	              "type": "input",
	              "attr": {
	                "type": "text"
	              },
	              "classList": [
	                "input"
	              ],
	              "events": {
	                "change": function (evt) {this.change(evt)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "btn-wrap"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "搜索"
	              },
	              "classList": [
	                "search"
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "show": function () {return this.addressLists.length===0}
	      },
	      "classList": [
	        "location-now"
	      ],
	      "events": {
	        "click": "locationNow"
	      },
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "点击定位当前位置"
	          },
	          "classList": [
	            "text"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "list",
	      "attr": {},
	      "children": [
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": function () {return this.addressLists},
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "address-item"
	              },
	              "classList": [
	                "address-item"
	              ],
	              "events": {
	                "click": function (evt) {this.selectAddress(this.$item,evt)}
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.$item.title}
	                  },
	                  "classList": [
	                    "title"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.$item.address}
	                  },
	                  "classList": [
	                    "address"
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 17:
/***/ function(module, exports) {

	module.exports = {
	  "#location": {
	    "flexDirection": "column",
	    "backgroundColor": "#f4f4f4"
	  },
	  ".search-wrap": {
	    "paddingTop": "35px",
	    "paddingRight": "35px",
	    "paddingBottom": "35px",
	    "paddingLeft": "35px"
	  },
	  ".search-wrap .input-wrap": {
	    "borderRadius": "25px",
	    "marginRight": "30px",
	    "backgroundColor": "#efeef4",
	    "flex": 1,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "search-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "input-wrap"
	        }
	      ]
	    }
	  },
	  ".search-wrap .input-wrap .input": {
	    "width": "80%",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "search-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "input-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "input"
	        }
	      ]
	    }
	  },
	  ".search-wrap .btn-wrap": {
	    "width": "190px",
	    "height": "90px",
	    "backgroundColor": "#919191",
	    "justifyContent": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "search-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "btn-wrap"
	        }
	      ]
	    }
	  },
	  ".location-now": {
	    "height": "150px",
	    "backgroundColor": "#ffffff",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  ".location-now .text": {
	    "fontSize": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "location-now"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "text"
	        }
	      ]
	    }
	  },
	  ".address-item": {
	    "flexDirection": "column",
	    "paddingLeft": "40px",
	    "backgroundColor": "#ffffff",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#9f9f9f"
	  },
	  ".address-item .title": {
	    "marginTop": "20px",
	    "fontSize": "38px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "address-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".address-item .address": {
	    "color": "#a3a3a3",
	    "marginTop": "30px",
	    "marginRight": "0px",
	    "marginBottom": "30px",
	    "marginLeft": "0px",
	    "fontSize": "38px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "address-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "address"
	        }
	      ]
	    }
	  }
	}

/***/ },

/***/ 18:
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.prompt');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.router');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	exports.default = {
	    data: {
	        addressLists: []
	    },
	    change: function change(evt) {
	        var keyword = evt.value;
	        if (!keyword) {
	            this.addressLists = [];
	        }
	        this.suggestionAddress(keyword);
	    },
	    suggestionAddress: function () {
	        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(keyword) {
	            var response;
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _context.next = 2;
	                            return network.get('v1/suggestion?keyword=' + keyword);
	
	                        case 2:
	                            response = _context.sent;
	
	                            response = JSON.parse(response);
	                            this.addressLists = response.data.data;
	
	                        case 5:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	
	        function suggestionAddress(_x) {
	            return _ref.apply(this, arguments);
	        }
	
	        return suggestionAddress;
	    }(),
	    locationNow: function locationNow() {
	        this.$app.$def.lng = '';
	        this.$app.$def.lat = '';
	        _system4.default.push({
	            uri: '/Index'
	        });
	    },
	    selectAddress: function selectAddress(item) {
	        var location = item.location;
	        this.$app.$def.location = {
	            lng: location.lng,
	            lat: location.lat,
	            address: location.title
	        };
	        _system4.default.push({
	            uri: '/Index'
	        });
	    }
	};
	
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	    return moduleOwn[acc];
	})) {
	    throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	    moduleOwn.data = {};
	    moduleOwn._descriptor = {};
	    accessors.forEach(function (acc) {
	        var accType = _typeof(moduleOwn[acc]);
	        if (accType === 'object') {
	            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	            for (var name in moduleOwn[acc]) {
	                moduleOwn._descriptor[name] = { access: acc };
	            }
	        } else if (accType === 'function') {
	            console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	        }
	    });
	}}

/***/ }

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map