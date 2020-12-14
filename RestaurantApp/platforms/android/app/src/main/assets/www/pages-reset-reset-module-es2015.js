(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-reset-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Forgot Password?' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/icon.png\" class=\"logo_icon\" alt=\"yoga\">\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" [placeholder]=\"('Email' | translate )\" name=\"email\" #email=\"ngModel\" spellcheck=\"false\"\n          autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          {{'Email is required' | translate}}\n        </p>\n      </ion-text>\n\n      <ion-row class=\"ion-no-margin ion-no-padding\" style=\"margin-top: 20px;\">\n        <ion-col class=\"ion-no-margin ion-no-padding\">\n          <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\">\n            {{'Send Link' | translate}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/reset/reset-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/reset/reset-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ResetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageRoutingModule", function() { return ResetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.page */ "./src/app/pages/reset/reset.page.ts");




const routes = [
    {
        path: '',
        component: _reset_page__WEBPACK_IMPORTED_MODULE_3__["ResetPage"]
    }
];
let ResetPageRoutingModule = class ResetPageRoutingModule {
};
ResetPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResetPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reset/reset.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/reset/reset.module.ts ***!
  \*********************************************/
/*! exports provided: ResetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPageModule", function() { return ResetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reset-routing.module */ "./src/app/pages/reset/reset-routing.module.ts");
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset.page */ "./src/app/pages/reset/reset.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let ResetPageModule = class ResetPageModule {
};
ResetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _reset_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPageRoutingModule"]
        ],
        declarations: [_reset_page__WEBPACK_IMPORTED_MODULE_6__["ResetPage"]]
    })
], ResetPageModule);



/***/ }),

/***/ "./src/app/pages/reset/reset.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/reset/reset.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 30%;\n  margin-bottom: 20px;\n}\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n.btn_class {\n  color: white;\n  height: 50px;\n}\n.login-logo img {\n  max-width: 150px;\n}\n.list {\n  margin-bottom: 0;\n}\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n}\nion-item {\n  --ion-background-color:#f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n.createAcc {\n  text-align: center;\n}\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzZXQvRTpcXFRFSkFTIElNUFxcVEVKQVMgR0FXQUxJXFxBcHBzRnJlZWxhY2luZ1xcaW9uaWM1Zm9vZGFwcC0xMFxcUmVzdGF1cmFudEFwcC9zcmNcXGFwcFxccGFnZXNcXHJlc2V0XFxyZXNldC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jlc2V0L3Jlc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNNLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQ1I7QURBUTtFQUNJLHVCQUFBO0FDRVo7QURBUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ0VaO0FEQVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0VaO0FEQ0k7RUFDUSxpQkFBQTtFQUNBLCtCQUFBO0FDRVo7QURBSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDR1I7QURESTtFQUNLLGdCQUFBO0FDSVQ7QURGSTtFQUNJLGdCQUFBO0FDS1I7QURISTtFQUNJLGtDQUFBO0VBQ0EsV0FBQTtBQ01SO0FESkk7RUFDSyw4QkFBQTtFQUNELDZCQUFBO0VBQ0EsZ0JBQUE7QUNPUjtBREhHO0VBQ0ksa0JBQUE7QUNNUDtBRExPO0VBQ0ssK0JBQUE7RUFDQSxpQkFBQTtBQ09aIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzZXQvcmVzZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAubG9naW4tbG9nbyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLmxvZ29faWNvbntcbiAgICAgICAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5sb2dpbi1uYW1le1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuc3ViVGl0bGV7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZnJnVGFne1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjp2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC5idG5fY2xhc3N7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSA7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG4gICAgLmxvZ2luLWxvZ28gaW1nIHtcbiAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgfVxuICAgIC5saXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgaW9uLWxpc3R7XG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2YzZjNmMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIFxuICAgIH1cbiAgXG4gICAuY3JlYXRlQWNje1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAucmVnaXN0ZXJUYWd7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgIH1cbiAgIH0gIiwiLmxvZ2luLWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAzMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubG9naW4tbG9nbyAubG9nb19pY29uIHtcbiAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tbG9nbyAubG9naW4tbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5sb2dpbi1sb2dvIC5zdWJUaXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5mcmdUYWcge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmJ0bl9jbGFzcyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ubG9naW4tbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjNmM2YzO1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNyZWF0ZUFjYyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jcmVhdGVBY2MgLnJlZ2lzdGVyVGFnIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/reset/reset.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/reset/reset.page.ts ***!
  \*******************************************/
/*! exports provided: ResetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPage", function() { return ResetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");





let ResetPage = class ResetPage {
    constructor(navCtrl, util, api) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.api = api;
        this.login = { email: '' };
        this.submitted = false;
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
            this.util.show();
            this.api.resetPassword(this.login.email).then((data) => {
                this.util.hide();
                this.util.showToast(this.util.translate('Reset Password link is sent to your email'), 'dark', 'bottom');
                console.log('sent', data);
                this.navCtrl.back();
            }, error => {
                console.log(error);
                this.util.hide();
                this.util.errorToast(this.util.translate('Something went wrong'));
            }).catch(error => {
                console.log(error);
                this.util.hide();
                this.util.errorToast(this.util.translate('Something went wrong'));
            });
        }
    }
};
ResetPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] }
];
ResetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset.page.scss */ "./src/app/pages/reset/reset.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])
], ResetPage);



/***/ })

}]);
//# sourceMappingURL=pages-reset-reset-module-es2015.js.map