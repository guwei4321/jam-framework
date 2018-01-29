/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

﻿__webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(1), __webpack_require__(2), __webpack_require__(3), __webpack_require__(4), __webpack_require__(5), __webpack_require__(6), __webpack_require__(7),__webpack_require__(8), __webpack_require__(9)]; ((function (cUIMask, cUIAlert, cUIToast, cUILoading, UIImageSlider, cUISwitch, cUIInputClear,  jMap, jSet) {
  window.jam = {
    cUIMask: cUIMask,
    cUIAlert: cUIAlert,
    cUIToast: cUIToast,
    cUILoading: cUILoading,
    UIImageSlider: UIImageSlider,
    cUISwitch: cUISwitch,
    cUIInputClear: cUIInputClear,
    jMap: jMap,
    jSet: jSet
  }
    // const items = new jSet([1, 2, 3, 4, 5]);
    // console.log(items)
    // // console.log(items.keys())
    // // console.log()
    // // for (let item of items.values()) console.log(item);
    // // console.log(items.forEach())
    // var sMap = new jMap([
    //     ['name', '张三'],
    //     ['title', 'Author']
    // ]);
    // sMap.set(1, 'aaa')
    // sMap.set(1, 'bbb')
    // sMap.set(['a'],222);
    // console.log(sMap)
    // var data = [
    //     { id: 1, src: 'imagesDEMO/slider-1.jpg', href: './res/img/1.jpg' },
    //     { id: 2, src: 'imagesDEMO/slider-2.jpg', href: './res/img/2.jpg' },
    //     { id: 3, src: 'imagesDEMO/slider-3.jpg', href: './res/img/3.jpg' },
    //     { id: 4, src: 'imagesDEMO/slider-4.jpg', href: './res/img/4.jpg' }
    // ];
    // new cUIInputClear($('.input-text'));
    // new cUISwitch({
    //     checked: true,
    //     rootBox: $('.switch-wrap')
    // });
    // new cUISwitch({
    //     checked: false,
    //     rootBox: $('.switch-wrap')
    // });
    // // var data = [
    // //     { id: 1 },
    // //     { id: 2 },
    // //     { id: 3 },
    // //     { id: 4 }
    // // ];
    // var imgSlider02 = new UIImageSlider({
    //     images: data,
    //     autoPlay: true,
    //     loop: true,
    //     imageSize: {
    //         width: '360px',
    //         height: '202px'
    //     },
    //     showArrows: true,
    //     showNav: true,
    //     // datamodel: {
    //         // data: data,
    //     //     itemFn: function (item) {
    //     //         return '<img data-src="' + item.src + '" src="' + item.src + '">';
    //     //     }
    //     // },
    //     // createNav: function () {
    //     //     if (this.sliderNav) return;
    //     //     var nav = '<div class="cui-navContainer cui-slide-nav-new" style="background: #f2f2f2; color: rgb(20, 145, 197); position: absolute;  bottom: 0;">';
    //     //     for (var i = 0; i < this.itemNum; i++) {
    //     //         nav += '<span class="cui-slide-nav-item" data-index="' + i + '"></span>';
    //     //     }
    //     //     nav += '</div>';
    //     //     this.sliderNav = $(nav);
    //     //     this.sliderNav.find('span').width(this.wrapper.width() / this.itemNum - 1);
    //     //     this.$el.append(this.sliderNav);
    //     //     this.setzIndexTop(this.sliderNav);
    //     //     this._setNavIndex(this.datamodel.index);
    //     // },
    //     container: $('.demo02')
    // });
    // imgSlider02.play();

    // // var mask = new cUIMask({
    // //     classNames: ['opacitymask']
    // // });

    // // mask.show();

    // var alert = new cUIAlert({
    //     showTitle: true,
    //     title: '头部',
    //     message: '内容',
    //     needMask: true,
    //     needMaskHide: true,
    //     disableScroll: false,
    //     buttons: [
    //         {
    //             text: '确定',
    //             click: function () {
    //                 this.hide();
    //             }
    //         },
    //         {
    //             type: 'cancel',
    //             text: '取消',
    //             click: function () {
    //                 this.hide();
    //             }
    //         }
    //     ]
    // });
    // console.log(alert)
    // var alert1 = new cUIAlert({
    //     showTitle: true,
    //     title: '头部1',
    //     message: '内容1',
    //     needMask: true,
    //     needMaskHide: true,
    //     disableScroll: false,
    //     prefix: 'xxx-',
    //     buttons: [
    //         {
    //             text: '确定1',
    //             click: function () {
    //                 this.hide();
    //             }
    //         },
    //         {
    //             type: 'cancel',
    //             text: '取1消',
    //             click: function () {
    //                 this.hide();
    //             }
    //         }
    //     ]
    // });
    // // alert.show()

    // var loading = new cUILoading({
    //     rootBox : $('#loading-wrap'),
    //     backgroundColor: 'rgba(0, 255, 153, .6)'
    // })
    // // loading.show();

    // // var pp = new cUIWarning({
    // //     warningtitle: 'hi'
    // // });
    // // pp.show();

    // // var warHead = new cUIWarning({
    // //     warningtitle : '123',
    // //     needMask: true
    // // })
    // // warHead.show();
    // // var scroolList = new cUIScrollRadio();
    // // scroolList.show();
    // var toast = new cUIToast({
    //     title: '带蒙版，点击蒙版不关闭，3秒关闭',
    //     disableScroll: true,
    //     sleep: 3,
    //     needMaskHide: false,
    //     // prefix: 'xxxx-',
    //     delayCallback: function(){
    //         console.log('关闭')
    //     }
    // });
    // $('#button0').on('click', function(){
    //     loading.show(function () {
    //     });
    //     // toast.hide(function (){
    //     //     console.log(12312)
    //     // })
    // })
    // $('#button1').on('click', function () {
    //     toast.show();
    // })
    // $('#button2').on('click', function () {
    //     alert.show();
    // })

    // toast.hide(function () {
    //     console.log(11312)
    // });
}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)
// })();

/***/ })
/******/ ]);