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

	var $app_template$ = __webpack_require__(19)
	var $app_style$ = __webpack_require__(20)
	var $app_script$ = __webpack_require__(21)
	
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

/***/ 19:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {
	    "id": "search"
	  },
	  "id": "search",
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
	      "type": "list",
	      "attr": {},
	      "children": [
	        {
	          "type": "block",
	          "attr": {},
	          "repeat": function () {return this.shopsLists},
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "shops-item"
	              },
	              "classList": [
	                "shops-item"
	              ],
	              "events": {
	                "click": function (evt) {this.entryShops(this.$item.id,evt)}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.$item.pic_url}
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
	                    "name"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return (this.$item.delivery_time_tip) + '送达'}
	                  },
	                  "classList": [
	                    "delivery-time"
	                  ]
	                },
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../assets/right-icon.png"
	                  },
	                  "classList": [
	                    "right-icon"
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

/***/ 20:
/***/ function(module, exports) {

	module.exports = {
	  "#search": {
	    "flexDirection": "column"
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
	  ".shops-item": {
	    "marginTop": "20px",
	    "marginRight": "0px",
	    "marginBottom": "20px",
	    "marginLeft": "0px",
	    "alignItems": "center"
	  },
	  ".shops-item .img": {
	    "width": "150px",
	    "height": "150px",
	    "marginTop": "0px",
	    "marginRight": "20px",
	    "marginBottom": "0px",
	    "marginLeft": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "shops-item"
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
	  ".shops-item .name": {
	    "flex": 1,
	    "fontSize": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "shops-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "name"
	        }
	      ]
	    }
	  },
	  ".shops-item .delivery-time": {
	    "marginRight": "50px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "shops-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "delivery-time"
	        }
	      ]
	    }
	  },
	  ".shops-item .right-icon": {
	    "width": "14px",
	    "height": "24px",
	    "marginRight": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "shops-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "right-icon"
	        }
	      ]
	    }
	  }
	}

/***/ },

/***/ 21:
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
	        shopsLists: []
	    },
	    onInit: function onInit() {
	        var data = {
	            "status": 200,
	            "data": [{
	                "id": 33,
	                "name": "伏牛炸鸡汉堡",
	                "month_sales": 173,
	                "month_sales_tip": "月售173笔",
	                "wm_poi_score": 1.5,
	                "delivery_score": 3.1,
	                "quality_score": 1.3,
	                "pack_score": 1.8,
	                "food_score": 0.7,
	                "delivery_time_tip": "50分钟",
	                "third_category": "中式简餐",
	                "pic_url": "http://p0.meituan.net/xianfu/55493399bb1c6e4884ff9456f92a391119693.jpg",
	                "shopping_time_start": "8:00",
	                "shopping_time_end": "24:00",
	                "min_price": 10,
	                "min_price_tip": "起送 ￥10",
	                "shipping_fee": 0,
	                "shipping_fee_tip": "配送 ￥0",
	                "bulletin": "理工专送，新旧男生宿舍下单都送到宿舍楼上。女生下楼领取。1点半到4点接受预订单。",
	                "address": "东莞市大岭山镇元岭村元岭综合市场1140号铺位",
	                "call_center": "15024098870",
	                "distance": "",
	                "average_price_tip": "人均20",
	                "comment_number": 49,
	                "lng": "113.854364",
	                "lat": "22.902121",
	                "created_at": "2018-04-05T05:08:44.533Z",
	                "discounts2": [{
	                    "info": "满20减18;满45减40;满60减53",
	                    "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
	                    "promotion_type": 2
	                }, {
	                    "info": "折扣商品7.33折起",
	                    "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
	                    "promotion_type": 2
	                }, {
	                    "info": "新用户立减2元,首次使用银行卡支付最高再减3元",
	                    "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
	                    "promotion_type": 2
	                }],
	                "__v": 0
	            }, {
	                "id": 41,
	                "name": "麦香堡炸鸡汉堡",
	                "month_sales": 56,
	                "month_sales_tip": "月售56笔",
	                "wm_poi_score": 2.9,
	                "delivery_score": 4.3,
	                "quality_score": 3.9,
	                "pack_score": 2.1,
	                "food_score": 2.3,
	                "delivery_time_tip": "50分钟",
	                "third_category": "中式简餐",
	                "pic_url": "http://p1.meituan.net/xianfu/d98fa9158a14a74280b9ca3890e4e56826624.jpg",
	                "shopping_time_start": "8:00",
	                "shopping_time_end": "24:00",
	                "min_price": 20,
	                "min_price_tip": "起送 ￥20",
	                "shipping_fee": 3,
	                "shipping_fee_tip": "配送 ￥3",
	                "bulletin": "从10月7号起所有套餐餐品均不能更换，请各位新老客户谅解",
	                "address": "东莞市大朗镇佛子凹村佛兴路184号12号铺位",
	                "call_center": "13392708560/076981198860",
	                "distance": "",
	                "average_price_tip": "人均20",
	                "comment_number": 41,
	                "lng": "113.895561",
	                "lat": "22.931701",
	                "created_at": "2018-04-05T05:08:44.533Z",
	                "discounts2": [{
	                    "info": "满20减18;满45减40;满60减53",
	                    "icon_url": "http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png",
	                    "promotion_type": 2
	                }, {
	                    "info": "折扣商品7.33折起",
	                    "icon_url": "http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png",
	                    "promotion_type": 2
	                }, {
	                    "info": "新用户立减2元,首次使用银行卡支付最高再减3元",
	                    "icon_url": "http://p0.meituan.net/xianfu/019d1bbb1310b1531e6af6172c9a5095581.png",
	                    "promotion_type": 2
	                }],
	                "__v": 0
	            }],
	            "message": "搜索餐馆成功"
	        };
	        this.shopsLists = data.data;
	    },
	    change: function change(evt) {
	        var keyword = evt.value;
	        if (!keyword) {
	            this.addressLists = [];
	        }
	        this.searchShops(keyword);
	    },
	    searchShops: function () {
	        var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(keyword) {
	            var response;
	            return regeneratorRuntime.wrap(function _callee$(_context) {
	                while (1) {
	                    switch (_context.prev = _context.next) {
	                        case 0:
	                            _context.next = 2;
	                            return network.get('v1/search/restaurant?keyword=' + keyword);
	
	                        case 2:
	                            response = _context.sent;
	
	                            response = JSON.parse(response);
	                            if (!response.data.length) {
	                                this.shopsLists = [];
	                                _system2.default.showToast({
	                                    message: '搜索不到，请输入汉堡试试'
	                                });
	                            } else {
	                                this.shopsLists = response.data;
	                            }
	
	                        case 5:
	                        case 'end':
	                            return _context.stop();
	                    }
	                }
	            }, _callee, this);
	        }));
	
	        function searchShops(_x) {
	            return _ref.apply(this, arguments);
	        }
	
	        return searchShops;
	    }(),
	    entryShops: function entryShops(id) {
	        _system4.default.push({
	            uri: '/Store',
	            params: {
	                id: id
	            }
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