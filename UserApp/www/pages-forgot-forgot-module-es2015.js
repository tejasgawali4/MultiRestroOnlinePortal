(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-forgot-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Forgot Password?' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-logo\">\n    <img src=\"assets/icon.png\" class=\"logo_icon\" alt=\"yoga\">\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" [placeholder]=\"('Email' | translate) || '&nbsp;'\" name=\"email\"\n          #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n      </ion-item>\n      <ion-text color=\"danger\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          {{'Email is required' | translate}}\n        </p>\n      </ion-text>\n\n      <ion-row class=\"ion-no-margin ion-no-padding\" style=\"margin-top: 20px;\">\n        <ion-col class=\"ion-no-margin ion-no-padding\">\n          <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\">\n            {{'Send Link' | translate}}\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/forgot/forgot-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/forgot/forgot-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ForgotPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageRoutingModule", function() { return ForgotPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot.page */ "./src/app/pages/forgot/forgot.page.ts");




const routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPage"]
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/forgot/forgot.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.module.ts ***!
  \***********************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgot-routing.module */ "./src/app/pages/forgot/forgot-routing.module.ts");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/pages/forgot/forgot.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let ForgotPageModule = class ForgotPageModule {
};
ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgot_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
    })
], ForgotPageModule);



/***/ }),

/***/ "./src/app/pages/forgot/forgot.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 30%;\n  margin-bottom: 20px;\n}\n.login-logo .logo_icon {\n  width: 110px !important;\n}\n.login-logo .login-name {\n  margin: 0px;\n  font-size: 1.5rem;\n}\n.login-logo .subTitle {\n  margin: 0px;\n  font-size: 1rem;\n}\n.frgTag {\n  text-align: right;\n  color: var(--ion-color-primary);\n}\n.btn_class {\n  color: white;\n  height: 50px;\n}\n.login-logo img {\n  max-width: 150px;\n}\n.list {\n  margin-bottom: 0;\n}\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n}\nion-item {\n  --ion-background-color:#f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n.createAcc {\n  text-align: center;\n}\n.createAcc .registerTag {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290L0U6XFxURUpBUyBJTVBcXFRFSkFTIEdBV0FMSVxcQXBwc0ZyZWVsYWNpbmdcXGlvbmljNWZvb2RhcHAtMTBcXFVzZXJBcHAvc3JjXFxhcHBcXHBhZ2VzXFxmb3Jnb3RcXGZvcmdvdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNDSjtBREFJO0VBQ0ksdUJBQUE7QUNFUjtBREFJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDRVI7QURBSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRVI7QURDQTtFQUNRLGlCQUFBO0VBQ0EsK0JBQUE7QUNFUjtBREFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNHSjtBRERBO0VBQ0ssZ0JBQUE7QUNJTDtBREZBO0VBQ0ksZ0JBQUE7QUNLSjtBREhBO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0FDTUo7QURKQTtFQUNLLDhCQUFBO0VBQ0QsNkJBQUE7RUFDQSxnQkFBQTtBQ09KO0FESEE7RUFDRyxrQkFBQTtBQ01IO0FETEc7RUFDSywrQkFBQTtFQUNBLGlCQUFBO0FDT1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3Jnb3QvZm9yZ290LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1sb2dvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC5sb2dvX2ljb257XG4gICAgICAgIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubG9naW4tbmFtZXtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbiAgICAuc3ViVGl0bGV7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxufVxuLmZyZ1RhZ3tcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5idG5fY2xhc3N7XG4gICAgY29sb3I6IHdoaXRlIDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4ubG9naW4tbG9nbyBpbWcge1xuICAgICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuLmxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5pb24tbGlzdHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogMHB4O1xufVxuaW9uLWl0ZW17XG4gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2YzZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIFxufVxuXG4uY3JlYXRlQWNje1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgLnJlZ2lzdGVyVGFne1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICB9XG59ICIsIi5sb2dpbi1sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHJpZ2h0OiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMzAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxvZ2luLWxvZ28gLmxvZ29faWNvbiB7XG4gIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWxvZ28gLmxvZ2luLW5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ubG9naW4tbG9nbyAuc3ViVGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uZnJnVGFnIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5idG5fY2xhc3Mge1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5pb24tbGlzdCB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMHB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2YzZjNmMztcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jcmVhdGVBY2Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY3JlYXRlQWNjIC5yZWdpc3RlclRhZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/forgot/forgot.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/forgot/forgot.page.ts ***!
  \*********************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");





let ForgotPage = class ForgotPage {
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
                this.util.showErrorAlert(this.util.translate('Something went wrong'));
            }).catch(error => {
                console.log(error);
                this.util.hide();
                this.util.showErrorAlert(this.util.translate('Something went wrong'));
            });
        }
    }
};
ForgotPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] }
];
ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot/forgot.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot.page.scss */ "./src/app/pages/forgot/forgot.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])
], ForgotPage);



/***/ })

}]);
//# sourceMappingURL=pages-forgot-forgot-module-es2015.js.map