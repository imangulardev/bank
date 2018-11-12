(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-register></app-register>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bank';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    height: 50px;\n    background-color: tomato;\n    color: burlywood;\n    margin: auto;\n    text-align: center;\n   \n}\n\n.heading-two{\n    height: 50px;\n    background-color: rgb(109, 27, 13);\n    color: burlywood;\n    margin: auto;\n   \n}\n\n.wraper-inside{\n    margin-top: -18px;\n    text-align: center;\n}\n\n.wraper-main{\n    width: 50%;\n    background-color: beige;\n    /* margin: auto; */\n    /* text-align: center; */\n    /* max-height: 70%; */\n    /* display: inline-block; */\n}\n\n.wraper-in-inside{\n    margin-top: -20px\n}\n\ninput[type=number] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=text ] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=email ] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\nbutton[type=button] {\n    width: 100%;\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\nbutton[type=submit]:hover {\n    background-color: #45a049;\n}\n\ndiv {\n    border-radius: 50px;\n    background-color: #f2f2f2;\n    padding: 20px;\n}\n\n.second-main-wraper{\n    width: 50%;\n    width: 43%;\n    background-color: beige;\n    height: 70%;\n    position: absolute;\n    right: 0px;\n    top: 52px;\n\n}\n\n.tranc{\n    width: 100%;\n    background-color: darkorange;\n    color: black;\n    text-align: center;\n    font-size: 35px;\n}\n\n.heading-two{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Banking Management System</h1>\n<div class= \"wraper-main\">\n  <div class = \"wraper-inside\">\n    <h2 class=\"heading-two\">Open your Bank Account</h2>\n  </div>\n  <div class= \"wraper-in-inside\">\n         \n              <form  name=\"itemForm\">\n                  <label for=\"anumber\">Account Number</label>\n                  <input type=\"number\" id=\"anumber\" name=\"AccountNumber\" placeholder=\"Your account number..\" [(ngModel)]=\"newItem.anumber\">\n              \n                  <label for=\"fname\">First Name</label>\n                  <input type=\"text\" id=\"fname\" name=\"firstname\" placeholder=\"Your name..\" [(ngModel)]=\"newItem.fname\"> \n            \n                  <label for=\"lname\">Last Name</label>\n                  <input type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"Your last name..\" [(ngModel)]=\"newItem.lname\">\n\n                  <label for=\"email\">Email</label>\n                  <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Enter email here!!!\" [(ngModel)]=\"newItem.email\" required>\n                  <label for=\"city\">City</label>\n                 <input type=\"text\" name=\"city\" id=\"city\" [(ngModel)]=\"newItem.city\" placeholder=\"Enter your city\">\n              \n                  <label for=\"gender\">Gender</label><br>\n                  <input type=\"radio\" class=\"male\" value=\"male\" name=\"gender\" id=\"sex\" [(ngModel)]=\"newItem.sex\">Male\n                  <input type=\"radio\" class=\"female\" value=\"female\" name=\"gender\" id=\"sex\" [(ngModel)]=\"newItem.sex\">Female\n                  <br>\n    <!-- Add button to add record -->\n    <button type=\"button\" (click)=\"AddItem()\" class=\"btn btn-default\">Add</button>\n\n              </form>\n           \n\n</div>\n\n</div>\n<div class=\"second-main-wraper\">\n    <h2 class=\"heading-two\">Account Details</h2>\n    <div class=\"panel-body\">\n        \n        <div *ngFor=\"let data of myItems;let i= index\">\n           <span class=\"exchange-alt\"></span>\n           <b><i>Account Number is:~  </i></b>{{data.anumber}} <br><b><i>Account holder's first name is:~  </i></b>{{data.fname}} <br> <b><i>Account holder's last name is:~  </i></b>{{data.lname}} <br><b><i>Account holder's email is:~  </i></b>{{data.email}} <br><b><i>He/She is from:~  </i></b>{{data.city}} <br><b><i>Gender is:~  </i></b>{{data.sex}}\n              <br>\n              <div >\n              <button class=\"tranc\" (click)=\"toggle()\" >  Transacation's <i class=\"fa fa-rupee\"></i>\n              </button>\n              <table *ngIf=\"show\"> \n                <thead>\n                  <tr>\n                    <th>Amount Number</th>\n                    <th>Balance</th>\n                  </tr>\n                  <tr>\n                    <th>{{data.anumber}}</th>\n                    <th>{{balance}}</th>\n                  </tr>\n                </thead>\n                 \n                <button class=\"tranc\" > Fund Transfer <i class=\"fa fa-rupee\"></i></button>\n                  <table>\n                    <thead>\n                      <tr>\n                        <th>\n                          <label for=\"Amount\">Amount</label>\n                          <input type=\"number\"><br>\n                          <label for=\"Select Account Number\">Select Account Number</label>\n                          <select>\n                          <option *ngFor=\"let data of myItems \">{{data.anumber}}</option>\n                          </select>\n                        </th>\n                      </tr>\n                    </thead>\n                  </table>\n              \n              </table>\n              \n            </div>\n        </div>\n        <div *ngIf=\"myItems.length == 0\" >\n          Items Are Empty !!!\n        </div>\n      </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: MyItems, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyItems", function() { return MyItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyItems = /** @class */ (function () {
    function MyItems(Value) {
        this.Value = Value;
    }
    return MyItems;
}());

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.balance = 1000;
        this.show = false;
        this.buttonName = 'Show';
        this.myItems = new Array();
        this.newItem = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.AddItem = function () {
        this.myItems.push(this.newItem);
        this.newItem = {};
    };
    RegisterComponent.prototype.toggle = function () {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/kashyap/Angular/bank/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map