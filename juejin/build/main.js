require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getConfig;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__development_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__production_js__ = __webpack_require__(21);



function getConfig() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "production";

    if (name == 'production') {
        return __WEBPACK_IMPORTED_MODULE_1__production_js__["a" /* default */];
    } else {
        return __WEBPACK_IMPORTED_MODULE_0__development_js__["a" /* default */];
    }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default_js__ = __webpack_require__(20);
// let devConfig = require('./default.js');


var proConfig = {
    devEnv: true,
    port: 3002,
    sslModel: false
};
var disConfig = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__default_js__["a" /* default */], proConfig);

/* harmony default export */ __webpack_exports__["a"] = (disConfig);

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nuxt__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie_parser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_index__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(5);





var nuxtConfig = __webpack_require__(24);

var config = Object(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */])("development");

var app = __WEBPACK_IMPORTED_MODULE_1_express___default()();
app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_2_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_3_cookie_parser___default()());
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || config.port;
// app.set('port', port);
// Import Routes
Object(__WEBPACK_IMPORTED_MODULE_4__api_index__["a" /* startRouter */])(app);
process.on('uncaughtException', function (err) {
	fs.writeSync(1, 'Caught exception: ' + err + '\n');
});
//promise错误未处理
process.on('unhandledRejection', function (reason, p) {
	console.log('Unhandled Rejection at:', p, 'reason:', reason);
});
var nuxt = new __WEBPACK_IMPORTED_MODULE_0_nuxt__["Nuxt"](nuxtConfig);
if (true) {
	var builder = new __WEBPACK_IMPORTED_MODULE_0_nuxt__["Builder"](nuxt);
	builder.build();
}
// Add nuxt.js middleware
app.use(nuxt.render);
// Listen the server
app.listen(port, host, function () {
	console.log('Server listening on http://' + host + ':' + port); // eslint-disable-line no-console
});

/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("nuxt");

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startRouter;


function startRouter(app) {

    //实现登陆拦截
    // app.use('/api', jwtAuth)

    app.get('/api', function (req, res) {
        res.json({ message: '欢迎使用justyeh的API服务！' });
    });

    // app.use('/api/user', require('./user'))

    // app.use('/api/post', require('./post'))

    // app.use('/api/tag', require('./tag'))

    // app.use('/api/post/tag', require('./postTag'))
}

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
 * @Author: huangchengdu
 * @Date:   2017-01-13 16:19:01
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2017-01-16 11:00:33
 */

var devConfig = {
    port: 443,
    sslModel: false,
    session: {
        secret: 'session',
        key: 'session',
        maxAge: 2592000
    },
    dbConfig: {
        connectionLimit: 30,
        host: '47.96.6.227',
        user: 'huang303513',
        password: 'huang303513',
        port: '3306',
        database: 'blog'
    },
    devEnv: true
};

/* harmony default export */ __webpack_exports__["a"] = (devConfig);

//这两个文件必须写成comment.js规范。引用他们的第三方库只支持这个规范。

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__development_js__ = __webpack_require__(6);
/*
 * @Author: huangchengdu
 * @Date:   2017-01-14 18:47:32
 * @Last Modified by:   huangchengdu
 * @Last Modified time: 2017-01-15 08:18:01
 */

// let devConfig = require('./default.js');


var proConfig = {
  devEnv: false,
  port: 3002, //如果package.json里面不一样，以这里为准
  sslModel: false
};
var disConfig = Object.assign({}, __WEBPACK_IMPORTED_MODULE_0__development_js__["a" /* default */], proConfig);

/* harmony default export */ __webpack_exports__["a"] = (disConfig);

/***/ }),
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, exports) {

module.exports = {
	/*
  ** Headers of the page
  */
	head: {
		title: '黄成都的技术博客',
		meta: [{
			charset: 'utf-8'
		}, {
			name: 'viewport',
			content: 'width=device-width, initial-scale=1'
		}, {
			hid: 'description',
			name: 'description',
			content: '黄成都的技术博客'
		},
		/*优先使用 IE 最新版本和 Chrome  */
		{
			name: 'renderer',
			content: 'webkit'
		}, {
			'http-equiv': 'X-UA-Compatible',
			content: 'IE=edge'
		},
		/* iOS 设备 */
		{
			name: 'author',
			content: '黄成都'
		}, {
			name: 'apple-mobile-web-app-title',
			content: '黄成都的技术博客'
		}, {
			name: 'apple-mobile-web-app-capable',
			content: 'yes'
		}, {
			name: 'apple-mobile-web-app-status-bar-style',
			content: '#263238'
		},
		/*fullscreen and app mode*/
		{
			name: 'screen-orientation',
			content: 'portrait'
		}, {
			name: 'x5-orientation',
			content: 'portrait'
		}, {
			name: 'full-screen',
			content: 'yes'
		}, {
			name: 'x5-fullscreen',
			content: 'true'
		}, {
			name: 'browsermode',
			content: 'application'
		}, {
			name: 'x5-page-mode',
			content: 'app'
		},
		/*webkit*/
		{
			name: 'theme-color',
			content: '#263238'
		}],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.ico'
		}]
	},
	css: [{
		src: '~assets/less/main.less',
		lang: 'less'
	}],
	/*
  ** Build configuration
  */
	build: {
		vendor: ['axios', 'vue-notification']
		/*
   ** Run ESLint on save
   */
		// extend(config, ctx) {
		// 	if (ctx.dev && ctx.isClient) {
		// 		config.module.rules.push({
		// 			enforce: 'pre',
		// 			test: /\.(js|vue)$/,
		// 			loader: 'eslint-loader',
		// 			exclude: /(node_modules)/
		// 		})
		// 	}
		// }
	},
	loading: {
		color: '#04acf7',
		height: '4px',
		failedColor: 'red'
	},
	//页面的过渡效果
	transition: {
		name: 'page'
	},
	//配置路由
	router: {
		middleware: 'adminAuth'
	},
	//插件
	plugins: [{
		src: '~plugins/axios'
	}, {
		src: '~plugins/vue-notification',
		ssr: false
	}]
};

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map