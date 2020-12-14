(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/icon.png\" class=\"logo_icon\" alt=\"foodies\">\n    <p class=\"login-name\">{{'Login' | translate}}</p>\n    <p class=\"subTitle\">{{'Enter your login detail to' | translate}} <br>\n      {{'access your account' | translate}}</p>\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" type=\"email\" [placeholder]=\"('Email' | translate) || '&nbsp;'\" name=\"email\"\n          #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          {{'Email is required' | translate}}\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" [placeholder]=\"('password' | translate) || '&nbsp;'\"\n          type=\"password\" #password=\"ngModel\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-text color=\"danger\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          {{'Password is required' | translate}}\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row class=\"ion-no-margin ion-no-padding\">\n      <ion-col class=\"ion-no-margin ion-no-padding\">\n        <p class=\"frgTag\" (click)=\"resetPass()\">{{'Forgot Password?' | translate}}</p>\n        <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\" [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\"> {{'Log In' | translate}}</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </form>\n  <p class=\"createAcc\" (click)=\"register()\">{{'Dont have an account?' | translate}}\n    <span class=\"registerTag\">{{'Sign up' | translate}}</span>\n  </p>\n  <div class=\"btns\">\n    <img src=\"assets/imgs/en.png\" (click)=\"changeLng('en')\"\n      [ngClass]=\"getClassName() == 'en' ? 'flagActive':'flagDeactive'\" alt=\"\">\n    <img src=\"assets/imgs/spanish.png\" (click)=\"changeLng('spanish')\"\n      [ngClass]=\"getClassName() == 'spanish' ? 'flagActive':'flagDeactive'\" alt=\"\">\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header {\n  --box-shadow:none;\n}\n\nion-footer {\n  --box-shadow:none;\n}\n\nion-toolbar {\n  border-color: none !important;\n}\n\nion-toolbar ion-title {\n  --color: white;\n}\n\n.login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 20%;\n  margin-bottom: 20px;\n}\n\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n\n.btn_class {\n  color: white;\n  height: 50px;\n}\n\n.login-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n}\n\nion-item {\n  --ion-background-color:#f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n\n.createAcc {\n  text-align: center;\n}\n\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.btns {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 0px;\n}\n\n.btns .flagActive {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-primary);\n  margin: 0px 10px;\n}\n\n.btns .flagDeactive {\n  height: 45px;\n  width: 45px;\n  margin: 0px 10px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRTpcXFRFSkFTIElNUFxcVEVKQVMgR0FXQUxJXFxBcHBzRnJlZWxhY2luZ1xcaW9uaWM1Zm9vZGFwcC0xMFxcVXNlckFwcC9zcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksNkJBQUE7QUNHSjs7QURGSTtFQUNJLGNBQUE7QUNJUjs7QUREQTtFQUNRLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSVI7O0FESFE7RUFDSSx1QkFBQTtBQ0taOztBREhRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDS1o7O0FESFE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0taOztBREZJO0VBQ1EsaUJBQUE7RUFDQSwrQkFBQTtBQ0taOztBREhJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNNUjs7QURKSTtFQUNLLGdCQUFBO0FDT1Q7O0FETEk7RUFDSSxnQkFBQTtBQ1FSOztBRE5JO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0FDU1I7O0FEUEk7RUFDSyw4QkFBQTtFQUNELDZCQUFBO0VBQ0EsZ0JBQUE7QUNVUjs7QURORztFQUNLLGtCQUFBO0FDU1I7O0FEUk87RUFDSywrQkFBQTtFQUVBLGlCQUFBO0FDU1o7O0FETkE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0FDU0o7O0FEUkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ1VSOztBRFJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNVUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5pb24tZm9vdGVye1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xufVxuaW9uLXRvb2xiYXJ7XG4gICAgYm9yZGVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgfVxufVxuLmxvZ2luLWxvZ28ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIC5sb2dvX2ljb257XG4gICAgICAgICAgICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAubG9naW4tbmFtZXtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cbiAgICAgICAgLnN1YlRpdGxle1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZyZ1RhZ3tcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cbiAgICAuYnRuX2NsYXNze1xuICAgICAgICBjb2xvcjogd2hpdGUgO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIC5sb2dpbi1sb2dvIGltZyB7XG4gICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgICAubGlzdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIGlvbi1saXN0e1xuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgaW9uLWl0ZW17XG4gICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmM2YzZjM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBcbiAgICB9XG4gIFxuICAgLmNyZWF0ZUFjY3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICAgICAucmVnaXN0ZXJUYWd7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICB9XG4gICB9IFxuLmJ0bnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgLmZsYWdBY3RpdmV7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIH1cbiAgICAuZmxhZ0RlYWN0aXZle1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICB9XG59ICAgIiwiaW9uLWhlYWRlciB7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubG9naW4tbG9nbyAubG9nb19pY29uIHtcbiAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tbG9nbyAubG9naW4tbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5sb2dpbi1sb2dvIC5zdWJUaXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5mcmdUYWcge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmJ0bl9jbGFzcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubG9naW4tbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNyZWF0ZUFjYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jcmVhdGVBY2MgLnJlZ2lzdGVyVGFnIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuLmJ0bnMgLmZsYWdBY3RpdmUge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiAwcHggMTBweDtcbn1cbi5idG5zIC5mbGFnRGVhY3RpdmUge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBtYXJnaW46IDBweCAxMHB4O1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");









let LoginPage = class LoginPage {
    constructor(router, api, util, navCtrl, translate, oneSignal) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.oneSignal = oneSignal;
        this.login = { email: '', password: '' };
        this.submitted = false;
        this.isLogin = false;
        const lng = localStorage.getItem('language');
        if (!lng || lng === null) {
            localStorage.setItem('language', 'en');
        }
        this.translate.use(localStorage.getItem('language'));
        this.oneSignal.getIds().then((data) => {
            console.log('iddddd==========', data);
            localStorage.setItem('fcm', data.userId);
        });
    }
    ngOnInit() {
    }
    onLogin(form) {
        console.log('form', form);
        this.submitted = true;
        if (form.valid) {
            const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailfilter.test(this.login.email)) {
                this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
                return false;
            }
            console.log('login');
            this.isLogin = true;
            this.api.login(this.login.email, this.login.password).then((userData) => {
                console.log(userData);
                this.api.getProfile(userData.uid).then((info) => {
                    console.log(info);
                    if (info && info.status === 'active') {
                        localStorage.setItem('uid', userData.uid);
                        localStorage.setItem('help', userData.uid);
                        this.isLogin = false;
                        this.util.publishLoggedIn('LoggedIn');
                        // this.navCtrl.back();
                        this.router.navigate(['/']);
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            title: this.util.translate('Error'),
                            text: this.util.translate('Your are blocked please contact administrator'),
                            icon: 'error',
                            showConfirmButton: true,
                            showCancelButton: true,
                            confirmButtonText: this.util.translate('Need Help?'),
                            backdrop: false,
                            background: 'white'
                        }).then(data => {
                            if (data && data.value) {
                                localStorage.setItem('help', userData.uid);
                                this.router.navigate(['inbox']);
                            }
                        });
                    }
                }).catch(err => {
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                });
            }).catch(err => {
                if (err) {
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            }).then(el => this.isLogin = false);
        }
    }
    resetPass() {
        this.router.navigate(['/forgot']);
    }
    register() {
        this.router.navigate(['register']);
    }
    getClassName() {
        return localStorage.getItem('language');
    }
    changeLng(lng) {
        localStorage.setItem('language', lng);
        this.translate.use(lng);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] },
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"],
        _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map