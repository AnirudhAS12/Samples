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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

document.getElementById('getText').addEventListener('click',getText);
var getText =()=>
{
    console.log("Fetching data...");
    // fetch(sample.txt)
    // .then(function(res){
    //  console.log(res);
    //    return res.text();
    // })
    // .then(function(data){
    //     console.log(data);
    // })

 
    fetch(sample.txt)
    .then((res)=>{res.text()})
    .then((data)=>{
    document.getElementById('output').innerHTML=data;
})
.catch((err)=>{console.log("error")})
    
}

document.getElementById('getUsers').addEventListener('click',getUsers);

var getUsers =()=>
{
    fetch(users.json)
    .then((res)=>{res.json()})
    .then((data)=>{
        let output=`<h2>Users</h2>`;
        data.forEach(function(user) {
            output+=`
            <ul>
            <li> First Name :${user.firstname}</li>
            <li> Second Name :${user.secondname}</li>
            
            </ul>`
        });
        document.getElementById('output').innerHTML=output;
    })
}

document.getElementById('getOnlineAPI').addEventListener('click',getOnlineAPI);

var getOnlineAPI = ()=>
{
    fetch("https://www.cricketapi.com/docs/recent_match_api/")
    .then((res)=>{res.json()})
    .then((data)=>{
        let output=`<h2>Users</h2>`;
        data.forEach(function(post){
            output+=`
            <div>
            <h3>${post.title}</h3>
             <p>${post.description}</p>
           </div>
            `
        });
        document.getElementById('output').innerHTML=output;
    })
}

/***/ })
/******/ ]);