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

	__webpack_require__(1)
	__webpack_require__(5)
	var $app_template$ = __webpack_require__(9)
	var $app_style$ = __webpack_require__(10)
	var $app_script$ = __webpack_require__(11)
	
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
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(2)
	var $app_style$ = __webpack_require__(3)
	var $app_script$ = __webpack_require__(4)
	
	$app_define$('@app-component/shops', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "list",
	  "attr": {
	    "scrollpage": "true"
	  },
	  "classList": [
	    "shops-wrap"
	  ],
	  "events": {
	    "scrollbottom": "loadMoreData"
	  },
	  "children": [
	    {
	      "type": "block",
	      "attr": {},
	      "repeat": function () {return this.shopsData},
	      "children": [
	        {
	          "type": "list-item",
	          "attr": {
	            "type": "shopsItem"
	          },
	          "classList": [
	            "shops-item"
	          ],
	          "events": {
	            "click": function (evt) {this.entryStore(evt)}
	          },
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.$item.pic_url}
	              },
	              "classList": [
	                "shops-image"
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "shops-detail"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.$item.name}
	                  },
	                  "classList": [
	                    "item-name"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "shops-message"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "shops-info-left"
	                      ],
	                      "children": [
	                        {
	                          "type": "rating",
	                          "attr": {
	                            "rating": function () {return this.$item.wm_poi_score}
	                          },
	                          "classList": [
	                            "rating"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.month_sales_tip}
	                          },
	                          "classList": [
	                            "sell-num"
	                          ]
	                        }
	                      ]
	                    },
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
	                            "value": function () {return (this.$item.delivery_time_tip) + '/'}
	                          },
	                          "classList": [
	                            "deliver-time"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.distance}
	                          },
	                          "classList": [
	                            "distance"
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
	                    "price-message"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return (this.$item.min_price_tip) + ' |'}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return (this.$item.shipping_fee_tip) + ' |'}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.average_price_tip}
	                      }
	                    }
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "active-message"
	                  ],
	                  "children": [
	                    {
	                      "type": "block",
	                      "attr": {},
	                      "repeat": function () {return this.$item.discounts2},
	                      "children": [
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "active-item"
	                          ],
	                          "shown": function () {return this.$idx<2},
	                          "children": [
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": function () {return this.$item.icon_url}
	                              },
	                              "classList": [
	                                "discount-icon"
	                              ]
	                            },
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": function () {return (this.$item.info) + (this.$idx)}
	                              }
	                            }
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
	      ]
	    },
	    {
	      "type": "list-item",
	      "attr": {
	        "type": "loadStatus"
	      },
	      "classList": [
	        "load-status"
	      ],
	      "children": [
	        {
	          "type": "progress",
	          "attr": {
	            "type": "circular",
	            "show": function () {return this.hasMoreData}
	          }
	        },
	        {
	          "type": "text",
	          "attr": {
	            "show": function () {return this.hasMoreData},
	            "value": "加载更多···"
	          },
	          "classList": [
	            "loading"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "show": function () {return !this.hasMoreData},
	            "value": "没有更多了~"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  ".shops-wrap": {
	    "marginTop": "0px",
	    "marginRight": "30px",
	    "marginBottom": "0px",
	    "marginLeft": "30px"
	  },
	  ".shops-item": {
	    "marginTop": "95px"
	  },
	  ".shops-image": {
	    "width": "216px",
	    "height": "165px",
	    "marginRight": "18px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#333333",
	    "borderRightColor": "#333333",
	    "borderBottomColor": "#333333",
	    "borderLeftColor": "#333333"
	  },
	  ".item-name": {
	    "fontSize": "45px",
	    "fontWeight": "bold"
	  },
	  ".rating": {
	    "width": "170px",
	    "height": "25px"
	  },
	  ".shops-message": {
	    "justifyContent": "space-between"
	  },
	  ".shops-detail": {
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  ".shops-info-left": {
	    "alignItems": "center"
	  },
	  ".shops-detail text": {
	    "fontSize": "32px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "shops-detail"
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
	  ".active-message": {
	    "flexDirection": "column"
	  },
	  ".active-message .active-item": {
	    "marginTop": "10px",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "active-message"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "active-item"
	        }
	      ]
	    }
	  },
	  ".active-message .discount-icon": {
	    "width": "44px",
	    "height": "44px",
	    "marginRight": "16px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "active-message"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "discount-icon"
	        }
	      ]
	    }
	  },
	  ".load-status": {
	    "justifyContent": "center",
	    "marginTop": "30px",
	    "marginRight": "0px",
	    "marginBottom": "30px",
	    "marginLeft": "0px"
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _system = $app_require$('@app-module/system.prompt');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.router');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }
	
	exports.default = {
	    data: {
	        navList: [{
	            name: '综合排序'
	        }, {
	            name: '销量最高'
	        }, {
	            name: '距离最近'
	        }, {
	            name: '筛选'
	        }],
	        shopsData: [],
	        hasMoreData: true,
	        page: 1,
	        limit: 4 },
	    props: ['test', 'lng'],
	    onInit: function onInit() {
	        this.fetchShops();
	        this.fetchShops();
	    },
	    locationChange: function locationChange() {
	        this.fetchShops();
	    },
	    fetchShops: function () {
	        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	            var response;
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _context.next = 2;
	                            return network.get('v1/restaurants?offset=0&limit=4&lng=113.26627&lat=23.13171');
	
	                        case 2:
	                            response = _context.sent;
	
	                            response = JSON.parse(response);
	                            this.shopsData = this.shopsData.concat(response.data);
	
	                        case 5:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	
	        function fetchShops() {
	            return _ref.apply(this, arguments);
	        }
	
	        return fetchShops;
	    }(),
	    loadMoreData: function loadMoreData() {
	        _system2.default.showToast({
	            message: '底部'
	        });
	        this.fetchShops();
	    },
	    entryStore: function entryStore() {
	        _system4.default.push({
	            uri: '/Store',
	            params: { id: 222 }
	        });
	    }
	};}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(6)
	var $app_style$ = __webpack_require__(7)
	var $app_script$ = __webpack_require__(8)
	
	$app_define$('@app-component/navs', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})


/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "nav"
	  },
	  "id": "nav",
	  "children": [
	    {
	      "type": "swiper",
	      "attr": {},
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "nav-wrap"
	          ],
	          "children": [
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": function () {return this.categoryList1},
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "nav-item"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.$item.url}
	                      },
	                      "classList": [
	                        "img"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.name}
	                      },
	                      "classList": [
	                        "category-name"
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
	            "nav-wrap"
	          ],
	          "children": [
	            {
	              "type": "block",
	              "attr": {},
	              "repeat": function () {return this.categoryList2},
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "nav-item"
	                  ],
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.$item.url}
	                      },
	                      "classList": [
	                        "img"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.name}
	                      },
	                      "classList": [
	                        "category-name"
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
	  ]
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = {
	  "#nav": {
	    "height": "466px"
	  },
	  ".nav-wrap": {
	    "flexWrap": "wrap"
	  },
	  ".nav-item": {
	    "width": "25%",
	    "flexDirection": "column",
	    "alignItems": "center"
	  },
	  ".nav-item .img": {
	    "width": "115px",
	    "height": "115px",
	    "marginTop": "55px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "nav-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "img"
	        }
	      ]
	    }
	  },
	  ".nav-item .category-name": {
	    "marginTop": "18px",
	    "fontSize": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "nav-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "category-name"
	        }
	      ]
	    }
	  }
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: {
	        categoryList1: [{
	            name: '美食',
	            url: 'http://p1.meituan.net/jungle/bd3ea637aeaa2fb6120b6938b5e468a13442.png',
	            type: 'food'
	        }, {
	            name: '美团超市',
	            url: 'http://p0.meituan.net/94.0.100/jungle/6b93ee96be3df7cf2bb6e661280b047d3975.png',
	            type: 'supermarket'
	        }, {
	            name: '生鲜果蔬',
	            url: 'http://p0.meituan.net/94.0.100/jungle/f33ed552c52b4466b6308a2c14dbc62d4882.png',
	            type: 'fruit'
	        }, {
	            name: '下午茶',
	            url: 'http://p0.meituan.net/94.0.100/jungle/af6cf63a5dfeb3557bf3099b03002ec34124.png',
	            type: 'tea'
	        }, {
	            name: '正餐优选',
	            url: 'http://p1.meituan.net/94.0.100/jungle/1543bbcb048218424e2420a6934e17b24236.png',
	            type: 'dinner'
	        }, {
	            name: '汉堡披萨',
	            url: 'http://p1.meituan.net/94.0.100/jungle/0e63b86b4ff14d214c1999a979fd21d14273.png',
	            type: 'pizza'
	        }, {
	            name: '跑腿代购',
	            url: 'http://p1.meituan.net/94.0.100/jungle/b40b7d72233f7a76dd9d97af40b4b8975414.png',
	            type: 'buyOnSomebody'
	        }, {
	            name: '快餐简餐',
	            url: 'http://p0.meituan.net/94.0.100/jungle/deeea00bb23e4fae31ea154678c7a8003838.png',
	            type: 'fastFood'
	        }],
	        categoryList2: [{
	            name: '地方菜',
	            url: 'http://p1.meituan.net/94.0.100/jungle/b6033c2f9aa26cdf37ea24fb1346d2dc4690.png',
	            type: 'localDish'
	        }, {
	            name: '炸鸡美食',
	            url: 'http://p0.meituan.net/94.0.100/jungle/0ce9a33a4accc536ac9e2d8d91951c924673.png',
	            type: 'chicken'
	        }, {
	            name: '免配送费',
	            url: 'http://p0.meituan.net/94.0.100/jungle/f5ef975cae40ecc1a21dae61f44575d59129.png',
	            type: 'freeDeliver'
	        }]
	    }
	};}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "index"
	  },
	  "id": "index",
	  "children": [
	    {
	      "type": "tabs",
	      "attr": {},
	      "children": [
	        {
	          "type": "tab-content",
	          "attr": {},
	          "classList": [
	            "tab-content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "index-content"
	              ],
	              "children": [
	                {
	                  "type": "navs",
	                  "attr": {}
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "title-wrap"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "content"
	                      ],
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {},
	                          "classList": [
	                            "line"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": "附近商家"
	                          },
	                          "classList": [
	                            "title"
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {},
	                          "classList": [
	                            "line"
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
	                    "shops-nav"
	                  ],
	                  "children": [
	                    {
	                      "type": "block",
	                      "attr": {},
	                      "repeat": function () {return this.navList},
	                      "children": [
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.name}
	                          },
	                          "classList": [
	                            "item-name"
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                },
	                {
	                  "type": "shops",
	                  "attr": {}
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "order-content"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "order"
	                  }
	                }
	              ]
	            }
	          ]
	        },
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
	                "bar-item"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../assets/index.png"
	                  },
	                  "classList": [
	                    "img"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "首页"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "bar-item"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../assets/order.png"
	                  },
	                  "classList": [
	                    "img"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "订单"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "bar-item"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../assets/home.png"
	                  },
	                  "classList": [
	                    "img"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "我的"
	                  }
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
/* 10 */
/***/ function(module, exports) {

	module.exports = {
	  "#index": {
	    "flexDirection": "column"
	  },
	  ".index-content": {
	    "flexDirection": "column"
	  },
	  ".title-wrap": {
	    "marginTop": "37px",
	    "marginRight": "0px",
	    "marginBottom": "37px",
	    "marginLeft": "0px"
	  },
	  ".title-wrap .content": {
	    "width": "100%",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
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
	          "v": "content"
	        }
	      ]
	    }
	  },
	  ".title-wrap .content .line": {
	    "width": "85px",
	    "fontWeight": "bold",
	    "borderBottomWidth": "1px",
	    "borderBottomColor": "#e4e4e4",
	    "_meta": {
	      "ruleDef": [
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
	          "v": "content"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "line"
	        }
	      ]
	    }
	  },
	  ".title-wrap .content .title": {
	    "fontSize": "44px",
	    "fontWeight": "bold",
	    "textAlign": "center",
	    "marginTop": "0px",
	    "marginRight": "30px",
	    "marginBottom": "0px",
	    "marginLeft": "30px",
	    "_meta": {
	      "ruleDef": [
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
	          "v": "content"
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
	  ".shops-nav": {
	    "height": "115px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#e4e4e4",
	    "borderRightColor": "#e4e4e4",
	    "borderBottomColor": "#e4e4e4",
	    "borderLeftColor": "#e4e4e4"
	  },
	  ".shops-nav .item-name": {
	    "fontSize": "38px",
	    "textAlign": "center",
	    "flex": 1,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "shops-nav"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item-name"
	        }
	      ]
	    }
	  },
	  ".tab-bar": {
	    "height": "150px",
	    "backgroundColor": "#fafafa"
	  },
	  ".tab-bar .bar-item": {
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "alignItems": "center",
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
	          "v": "bar-item"
	        }
	      ]
	    }
	  },
	  ".tab-bar .bar-item .img": {
	    "width": "70px",
	    "height": "70px",
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
	          "v": "bar-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "img"
	        }
	      ]
	    }
	  },
	  ".tab-bar .bar-item text": {
	    "fontSize": "32px",
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
	          "v": "bar-item"
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
/* 11 */
/***/ function(module, exports) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = {
	    data: {
	        navList: [{
	            name: '综合排序'
	        }, {
	            name: '销量最高'
	        }, {
	            name: '距离最近'
	        }, {
	            name: '筛选'
	        }]
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