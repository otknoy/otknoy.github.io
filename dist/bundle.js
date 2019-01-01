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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/twitter-widgets/index.js":
/*!***********************************************!*\
  !*** ./node_modules/twitter-widgets/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function(window) {\n\tvar TwitterWidgetsLoader = {\n\t\tsrc: 'https://platform.twitter.com/widgets.js',\n\t\tloading: false,\n\t\tlisteners: [],\n\t\tinterval: 50,\n\n\t\tload: function(callback) {\n\t\t\tvar _this = this;\n\n\t\t\tif(callback) {\n\t\t\t\tthis.listeners.push(callback);\n\t\t\t}\n\n\t\t\tif (window.twttr && window.twttr.widgets) {\n\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t_this._done();\n\t\t\t\t});\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tif (this.loading) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tthis.loading = true;\n\n\t\t\tvar script = document.createElement('script');\n\t\t\tscript.type = 'text/javascript';\n\t\t\tscript.src = this.src;\n\t\t\tscript.addEventListener('error', function() {\n\t\t\t\t_this._done(new Error('Twitter widgets JS failed to load. Is there an ad blocker enabled?'));\n\t\t\t});\n\t\t\tdocument.body.appendChild(script);\n\n\t\t\tthis._poll();\n\t\t},\n\n\t\t_poll: function() {\n\t\t\tif (window.twttr && window.twttr.widgets) {\n\t\t\t\treturn this._done();\n\t\t\t}\n\n\t\t\tvar _this = this;\n\n\t\t\tsetTimeout(function() {\n\t\t\t\t_this._poll();\n\t\t\t}, this.interval);\n\t\t},\n\n\t\t_done: function(error) {\n\t\t\twhile (this.listeners.length) {\n\t\t\t\tthis.listeners.pop()(error, window.twttr);\n\t\t\t}\n\t\t}\n\t};\n\n\tif ( true && module.exports) {\n\t\tmodule.exports = TwitterWidgetsLoader;\n\t} else {\n\t\twindow.TwitterWidgetsLoader = TwitterWidgetsLoader;\n\t}\n})(window);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvdHdpdHRlci13aWRnZXRzL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3R3aXR0ZXItd2lkZ2V0cy9pbmRleC5qcz83NTk4Il0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbih3aW5kb3cpIHtcblx0dmFyIFR3aXR0ZXJXaWRnZXRzTG9hZGVyID0ge1xuXHRcdHNyYzogJ2h0dHBzOi8vcGxhdGZvcm0udHdpdHRlci5jb20vd2lkZ2V0cy5qcycsXG5cdFx0bG9hZGluZzogZmFsc2UsXG5cdFx0bGlzdGVuZXJzOiBbXSxcblx0XHRpbnRlcnZhbDogNTAsXG5cblx0XHRsb2FkOiBmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcblxuXHRcdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdFx0dGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh3aW5kb3cudHd0dHIgJiYgd2luZG93LnR3dHRyLndpZGdldHMpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRfdGhpcy5fZG9uZSgpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5sb2FkaW5nKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuXHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXHRcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0Jztcblx0XHRcdHNjcmlwdC5zcmMgPSB0aGlzLnNyYztcblx0XHRcdHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRfdGhpcy5fZG9uZShuZXcgRXJyb3IoJ1R3aXR0ZXIgd2lkZ2V0cyBKUyBmYWlsZWQgdG8gbG9hZC4gSXMgdGhlcmUgYW4gYWQgYmxvY2tlciBlbmFibGVkPycpKTtcblx0XHRcdH0pO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG5cdFx0XHR0aGlzLl9wb2xsKCk7XG5cdFx0fSxcblxuXHRcdF9wb2xsOiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICh3aW5kb3cudHd0dHIgJiYgd2luZG93LnR3dHRyLndpZGdldHMpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuX2RvbmUoKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0X3RoaXMuX3BvbGwoKTtcblx0XHRcdH0sIHRoaXMuaW50ZXJ2YWwpO1xuXHRcdH0sXG5cblx0XHRfZG9uZTogZnVuY3Rpb24oZXJyb3IpIHtcblx0XHRcdHdoaWxlICh0aGlzLmxpc3RlbmVycy5sZW5ndGgpIHtcblx0XHRcdFx0dGhpcy5saXN0ZW5lcnMucG9wKCkoZXJyb3IsIHdpbmRvdy50d3R0cik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gVHdpdHRlcldpZGdldHNMb2FkZXI7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LlR3aXR0ZXJXaWRnZXRzTG9hZGVyID0gVHdpdHRlcldpZGdldHNMb2FkZXI7XG5cdH1cbn0pKHdpbmRvdyk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/twitter-widgets/index.js\n");

/***/ }),

/***/ "./src/components/interest.js":
/*!************************************!*\
  !*** ./src/components/interest.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MyInterest extends HTMLElement {\n  constructor() {\n    super();\n\n    const shadowRoot = this.attachShadow({mode: 'open'});\n    shadowRoot.innerHTML = this.template();\n  }\n\n  template() {\n    return `\n<div>\n  <h2>Interest</h2>\n\n  <ul>\n\t  <li><strong>Information Retrieval</strong></li>\n\t  <li>Human Computer Interaction</li>\n\t  <li>Natural Language Processing</li>\n\t  <li>Machine Learning</li>\n  </ul>\n</div>\n`;\n  }\n}\n\ncustomElements.define('my-interest', MyInterest);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pbnRlcmVzdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ludGVyZXN0LmpzP2MyNzgiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTXlJbnRlcmVzdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgc2hhZG93Um9vdC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKCk7XG4gIH1cblxuICB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gYFxuPGRpdj5cbiAgPGgyPkludGVyZXN0PC9oMj5cblxuICA8dWw+XG5cdCAgPGxpPjxzdHJvbmc+SW5mb3JtYXRpb24gUmV0cmlldmFsPC9zdHJvbmc+PC9saT5cblx0ICA8bGk+SHVtYW4gQ29tcHV0ZXIgSW50ZXJhY3Rpb248L2xpPlxuXHQgIDxsaT5OYXR1cmFsIExhbmd1YWdlIFByb2Nlc3Npbmc8L2xpPlxuXHQgIDxsaT5NYWNoaW5lIExlYXJuaW5nPC9saT5cbiAgPC91bD5cbjwvZGl2PlxuYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWludGVyZXN0JywgTXlJbnRlcmVzdCk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/interest.js\n");

/***/ }),

/***/ "./src/components/profile.js":
/*!***********************************!*\
  !*** ./src/components/profile.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MyProfile extends HTMLElement {\n  constructor() {\n    super();\n\n    const profile = {\n      name: 'Naoya Otsuka',\n      mail: 'otknoy@gmail.com',\n      github: 'otknoy',\n      twitter: 'otknoy',\n      facebook: 'naoya.otsuka.9'\n    };\n\n    const shadowRoot = this.attachShadow({mode: 'open'});\n    shadowRoot.innerHTML = this.template(profile);\n  }\n\n  template(profile) {\n    return `\n<div>\n  <h2>Profile</h2>\n  <ul>\n    <li>${profile.name}</li>\n    <li>${profile.mail}</li>\n    <li><a href=\"https://github.com/${profile.github}\">GitHub</a></li>\n    <li><a href=\"https://twitter.com/${profile.twitter}\">Twitter</a></li>\n    <li><a href=\"https://www.facebook.com/${profile.facebook}\">Facebook</a></li>\n  </ul>\n</div>\n`;\n  }\n}\n\ncustomElements.define('my-profile', MyProfile);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wcm9maWxlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvZmlsZS5qcz9iYjFjIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE15UHJvZmlsZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IHByb2ZpbGUgPSB7XG4gICAgICBuYW1lOiAnTmFveWEgT3RzdWthJyxcbiAgICAgIG1haWw6ICdvdGtub3lAZ21haWwuY29tJyxcbiAgICAgIGdpdGh1YjogJ290a25veScsXG4gICAgICB0d2l0dGVyOiAnb3Rrbm95JyxcbiAgICAgIGZhY2Vib29rOiAnbmFveWEub3RzdWthLjknXG4gICAgfTtcblxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgc2hhZG93Um9vdC5pbm5lckhUTUwgPSB0aGlzLnRlbXBsYXRlKHByb2ZpbGUpO1xuICB9XG5cbiAgdGVtcGxhdGUocHJvZmlsZSkge1xuICAgIHJldHVybiBgXG48ZGl2PlxuICA8aDI+UHJvZmlsZTwvaDI+XG4gIDx1bD5cbiAgICA8bGk+JHtwcm9maWxlLm5hbWV9PC9saT5cbiAgICA8bGk+JHtwcm9maWxlLm1haWx9PC9saT5cbiAgICA8bGk+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb2ZpbGUuZ2l0aHVifVwiPkdpdEh1YjwvYT48L2xpPlxuICAgIDxsaT48YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS8ke3Byb2ZpbGUudHdpdHRlcn1cIj5Ud2l0dGVyPC9hPjwvbGk+XG4gICAgPGxpPjxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vJHtwcm9maWxlLmZhY2Vib29rfVwiPkZhY2Vib29rPC9hPjwvbGk+XG4gIDwvdWw+XG48L2Rpdj5cbmA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1wcm9maWxlJywgTXlQcm9maWxlKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/profile.js\n");

/***/ }),

/***/ "./src/components/skill.js":
/*!*********************************!*\
  !*** ./src/components/skill.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MySkill extends HTMLElement {\n  constructor() {\n    super();\n\n    const skills = [\n      'Java, SpringBoot',\n      'Node.js, express',\n      'Golang',\n      'Python'\n    ];\n\n    const shadowRoot = this.attachShadow({mode: 'open'});\n    shadowRoot.innerHTML = this.template(skills);\n  }\n\n  template(skills) {\n    return `\n<div>\n  <h2>Skill</h2>\n  <ul>\n    ${skills.map(e => this.item(e)).join('')}\n  </ul>\n</div>\n`;\n  }\n\n  item(text) {\n    return `<li>${text}</li>`;\n  }\n}\n\ncustomElements.define('my-skill', MySkill);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9za2lsbC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NraWxsLmpzP2NmOGEiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTXlTa2lsbCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IHNraWxscyA9IFtcbiAgICAgICdKYXZhLCBTcHJpbmdCb290JyxcbiAgICAgICdOb2RlLmpzLCBleHByZXNzJyxcbiAgICAgICdHb2xhbmcnLFxuICAgICAgJ1B5dGhvbidcbiAgICBdO1xuXG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICBzaGFkb3dSb290LmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUoc2tpbGxzKTtcbiAgfVxuXG4gIHRlbXBsYXRlKHNraWxscykge1xuICAgIHJldHVybiBgXG48ZGl2PlxuICA8aDI+U2tpbGw8L2gyPlxuICA8dWw+XG4gICAgJHtza2lsbHMubWFwKGUgPT4gdGhpcy5pdGVtKGUpKS5qb2luKCcnKX1cbiAgPC91bD5cbjwvZGl2PlxuYDtcbiAgfVxuXG4gIGl0ZW0odGV4dCkge1xuICAgIHJldHVybiBgPGxpPiR7dGV4dH08L2xpPmA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1za2lsbCcsIE15U2tpbGwpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/skill.js\n");

/***/ }),

/***/ "./src/components/twitter.js":
/*!***********************************!*\
  !*** ./src/components/twitter.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const TwitterWidgetsLoader = __webpack_require__(/*! twitter-widgets */ \"./node_modules/twitter-widgets/index.js\");\n\nclass TwitterTimeline extends HTMLElement {\n  constructor() {\n    super();\n\n    this.attachShadow({mode: 'open'});\n  }\n\n  static get observedAttributes() {\n    return ['account'];\n  }\n\n  connectedCallback() {\n    TwitterWidgetsLoader.load((err, twttr) => {\n      if (err) {\n        console.log(err);\n        return;\n      }\n\n      const dataSource = {\n        sourceType: 'profile',\n        screenName: 'otknoy'\n      };\n      const target = this.shadowRoot.getElementById('twitter-timeline');\n      const options = {\n        height: 480,\n      };\n\n      twttr.widgets.createTimeline(dataSource, target, options);\n    });\n  }\n\n  attributeChangedCallback(attributeName, oldValue, newValue) {\n    switch (attributeName) {\n    case 'account':\n      this.render(newValue);\n    }\n  }\n\n  render(account) {\n    this.shadowRoot.innerHTML = `<div id=\"twitter-timeline\"></div>`;\n  }\n}\ncustomElements.define('twitter-timeline', TwitterTimeline);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90d2l0dGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdHdpdHRlci5qcz9hNzg0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFR3aXR0ZXJXaWRnZXRzTG9hZGVyID0gcmVxdWlyZSgndHdpdHRlci13aWRnZXRzJyk7XG5cbmNsYXNzIFR3aXR0ZXJUaW1lbGluZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbJ2FjY291bnQnXTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIFR3aXR0ZXJXaWRnZXRzTG9hZGVyLmxvYWQoKGVyciwgdHd0dHIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRhU291cmNlID0ge1xuICAgICAgICBzb3VyY2VUeXBlOiAncHJvZmlsZScsXG4gICAgICAgIHNjcmVlbk5hbWU6ICdvdGtub3knXG4gICAgICB9O1xuICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCd0d2l0dGVyLXRpbWVsaW5lJyk7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBoZWlnaHQ6IDQ4MCxcbiAgICAgIH07XG5cbiAgICAgIHR3dHRyLndpZGdldHMuY3JlYXRlVGltZWxpbmUoZGF0YVNvdXJjZSwgdGFyZ2V0LCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhhdHRyaWJ1dGVOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICBzd2l0Y2ggKGF0dHJpYnV0ZU5hbWUpIHtcbiAgICBjYXNlICdhY2NvdW50JzpcbiAgICAgIHRoaXMucmVuZGVyKG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoYWNjb3VudCkge1xuICAgIHRoaXMuc2hhZG93Um9vdC5pbm5lckhUTUwgPSBgPGRpdiBpZD1cInR3aXR0ZXItdGltZWxpbmVcIj48L2Rpdj5gO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3R3aXR0ZXItdGltZWxpbmUnLCBUd2l0dGVyVGltZWxpbmUpO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/twitter.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_profile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profile.js */ \"./src/components/profile.js\");\n/* harmony import */ var _components_profile_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_profile_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_interest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/interest.js */ \"./src/components/interest.js\");\n/* harmony import */ var _components_interest_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_interest_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_skill_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/skill.js */ \"./src/components/skill.js\");\n/* harmony import */ var _components_skill_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_skill_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_twitter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/twitter.js */ \"./src/components/twitter.js\");\n/* harmony import */ var _components_twitter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_twitter_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY29tcG9uZW50cy9wcm9maWxlLmpzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL2ludGVyZXN0LmpzJztcbmltcG9ydCAnLi9jb21wb25lbnRzL3NraWxsLmpzJztcblxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdHdpdHRlci5qcyc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });