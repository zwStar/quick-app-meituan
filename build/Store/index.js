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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(22)
	var $app_template$ = __webpack_require__(26)
	var $app_style$ = __webpack_require__(27)
	var $app_script$ = __webpack_require__(28)
	
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(23)
	var $app_style$ = __webpack_require__(24)
	var $app_script$ = __webpack_require__(25)
	
	$app_define$('@app-component/menu', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "menu"
	  },
	  "id": "menu",
	  "children": [
	    {
	      "type": "list",
	      "attr": {},
	      "classList": [
	        "menu-wrap",
	        "left-wrap"
	      ],
	      "children": [
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": function () {return this.foodsList},
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "leftProduce"
	              },
	              "classList": [
	                "left-item"
	              ],
	              "events": {
	                "click": function (evt) {this.selectedMenu(this.$idx,evt)}
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.$item.name}
	                  },
	                  "classList": [
	                    "menu-name"
	                  ],
	                  "style": {
	                    "fontWeight": function () {return this.selectedIndex===this.$idx?'bold':'normal'}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "list",
	      "attr": {},
	      "classList": [
	        "menu-wrap",
	        "right-wrap"
	      ],
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "title"
	          },
	          "classList": [
	            "title-wrap"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "热销"
	              },
	              "classList": [
	                "title"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": function () {return this.selectedData},
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "rightProduce"
	              },
	              "classList": [
	                "right-item"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.$item.pic_url}
	                  },
	                  "classList": [
	                    "foods-img"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "main-wrap"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.name}
	                      },
	                      "classList": [
	                        "foods-name"
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "foods-info"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "月售706"
	                          },
	                          "classList": [
	                            "seller-num"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "赞20"
	                          },
	                          "classList": [
	                            "praise-num"
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "￥9"
	                      },
	                      "classList": [
	                        "price"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "footer"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "attr": {
	            "value": "另需配送费￥4"
	          },
	          "classList": [
	            "delivery-fee"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "submit"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "15元起送"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = {
	  ".left-wrap": {
	    "width": "230px",
	    "flex": 0
	  },
	  ".left-item": {
	    "flex": 0,
	    "backgroundColor": "#f4f8f7",
	    "paddingTop": "45px",
	    "paddingRight": "36px",
	    "paddingBottom": "45px",
	    "paddingLeft": "36px"
	  },
	  ".left-item text": {
	    "fontSize": "36px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "left-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".right-wrap": {
	    "flexShrink": 1
	  },
	  ".right-wrap .title-wrap": {
	    "alignItems": "center",
	    "marginLeft": "27px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title-wrap"
	        }
	      ]
	    }
	  },
	  ".right-wrap .title-wrap .title": {
	    "height": "120px",
	    "fontSize": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title-wrap"
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
	  ".right-wrap .right-item": {
	    "marginBottom": "76px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right-item"
	        }
	      ]
	    }
	  },
	  ".right-wrap .foods-img": {
	    "width": "215px",
	    "height": "211px",
	    "marginTop": "0px",
	    "marginRight": "27px",
	    "marginBottom": "0px",
	    "marginLeft": "27px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "foods-img"
	        }
	      ]
	    }
	  },
	  ".right-wrap .main-wrap": {
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "main-wrap"
	        }
	      ]
	    }
	  },
	  ".right-wrap .foods-name": {
	    "fontSize": "42px",
	    "fontWeight": "bold",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "foods-name"
	        }
	      ]
	    }
	  },
	  ".right-wrap .foods-info": {
	    "marginTop": "22px",
	    "marginRight": "0px",
	    "marginBottom": "0px",
	    "marginLeft": "70px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "foods-info"
	        }
	      ]
	    }
	  },
	  ".right-wrap .foods-info .seller-num": {
	    "fontSize": "28px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "foods-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "seller-num"
	        }
	      ]
	    }
	  },
	  ".right-wrap .foods-info .praise-num": {
	    "fontSize": "28px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "foods-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "praise-num"
	        }
	      ]
	    }
	  },
	  ".right-wrap .price": {
	    "color": "#ef4838",
	    "fontSize": "40px",
	    "fontWeight": "bold",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "price"
	        }
	      ]
	    }
	  },
	  ".footer": {
	    "position": "fixed",
	    "width": "100%",
	    "height": "145px",
	    "backgroundColor": "#343434",
	    "bottom": "0px",
	    "justifyContent": "space-between"
	  },
	  ".footer .footer-cart-img": {
	    "width": "125px",
	    "height": "140px",
	    "position": "fixed",
	    "left": "60px",
	    "bottom": "37px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "footer"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "footer-cart-img"
	        }
	      ]
	    }
	  },
	  ".footer .delivery-fee": {
	    "color": "#a6a6a6",
	    "fontSize": "37px",
	    "marginLeft": "228px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "footer"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "delivery-fee"
	        }
	      ]
	    }
	  },
	  ".footer .submit": {
	    "width": "310px",
	    "color": "#9f9f9f",
	    "fontSize": "45px",
	    "justifyContent": "center",
	    "backgroundColor": "#2f2f2f",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "footer"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "submit"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.prompt');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	exports.default = {
	    data: {
	        foodsList: [],
	        selectedData: [],
	        id: 0,
	        selectedIndex: 0
	    },
	    onInit: function onInit() {
	        this.getFoods();
	    },
	    getFoods: function () {
	        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	            var response;
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _context.next = 2;
	                            return network.get('v1/food/' + this.id);
	
	                        case 2:
	                            response = _context.sent;
	
	                            response = JSON.parse(response);
	
	                            if (response.status === 200) {
	                                this.foodsList = response.data;
	                                this.selectedData = this.foodsList[this.selectedIndex].spus;
	                            } else {
	                                _system2.default.showToast({
	                                    message: response.message
	                                });
	                            }
	
	                        case 5:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	
	        function getFoods() {
	            return _ref.apply(this, arguments);
	        }
	
	        return getFoods;
	    }(),
	    selectedMenu: function selectedMenu(index) {
	        this.selectedIndex = index;
	        this.selectedData = this.foodsList[index].spus;
	    }
	};}

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "store"
	  },
	  "id": "store",
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "header"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.shopsInfo.pic_url}
	          },
	          "classList": [
	            "header-img"
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "header-info-wrap"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "delivery-info"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return (this.shopsInfo.min_price_tip) + ' |'}
	                  },
	                  "classList": [
	                    "delivery-price"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return (this.shopsInfo.delivery_time_tip) + ' |'}
	                  },
	                  "classList": [
	                    "delivery-time"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.shopsInfo.bulletin}
	              },
	              "classList": [
	                "bulletin"
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "discounts-wrap"
	              ],
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "discount-item"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png"
	                      },
	                      "classList": [
	                        "icon"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": "有机会领取商家代金卷"
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "tabs",
	      "attr": {},
	      "children": [
	        {
	          "type": "tab-bar",
	          "attr": {},
	          "classList": [
	            "tab-bar"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "menu"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "点菜"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "comment"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "评价"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "seller"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "商家"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "tab-content",
	          "attr": {},
	          "children": [
	            {
	              "type": "menu",
	              "attr": {
	                "id": function () {return this.id}
	              },
	              "id": function () {return this.id}
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = {
	  "#store": {
	    "flexDirection": "column"
	  },
	  ".header": {
	    "backgroundColor": "#ffd161",
	    "paddingTop": "30px",
	    "paddingRight": "24px",
	    "paddingBottom": "30px",
	    "paddingLeft": "24px"
	  },
	  ".header-img": {
	    "width": "185px",
	    "height": "190px",
	    "marginRight": "30px"
	  },
	  ".header-info-wrap": {
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  ".header-info-wrap text": {
	    "color": "#fefefe",
	    "fontSize": "33px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "header-info-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".bulletin": {
	    "width": "80%",
	    "lines": 1,
	    "marginTop": "36px",
	    "marginRight": "0px",
	    "marginBottom": "36px",
	    "marginLeft": "0px",
	    "textOverflow": "ellipsis"
	  },
	  ".icon": {
	    "width": "45px",
	    "height": "41px",
	    "marginRight": "30px"
	  },
	  ".tab-bar": {
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#333333"
	  },
	  ".tab-bar .menu": {
	    "justifyContent": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-bar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "menu"
	        }
	      ]
	    }
	  },
	  ".tab-bar .comment": {
	    "justifyContent": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-bar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "comment"
	        }
	      ]
	    }
	  },
	  ".tab-bar .seller": {
	    "justifyContent": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-bar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "seller"
	        }
	      ]
	    }
	  },
	  ".tab-bar text": {
	    "fontSize": "42px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "tab-bar"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _system = $app_require$('@app-module/system.prompt');
	
	var _system2 = _interopRequireDefault(_system);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	exports.default = {
	  data: {
	    id: 0,
	    shopsInfo: {}
	  },
	  onInit: function onInit() {
	    this.getShopsInfo();
	  },
	  getShopsInfo: function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	      var response;
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              _context.next = 2;
	              return network.get('v1/restaurant/' + this.id);
	
	            case 2:
	              response = _context.sent;
	
	              response = JSON.parse(response);
	              if (response.status === 200 || response.status === 1) {
	                this.shopsInfo = response.data;
	              }
	
	            case 5:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, this);
	    }));
	
	    function getShopsInfo() {
	      return _ref.apply(this, arguments);
	    }
	
	    return getShopsInfo;
	  }()
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
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map