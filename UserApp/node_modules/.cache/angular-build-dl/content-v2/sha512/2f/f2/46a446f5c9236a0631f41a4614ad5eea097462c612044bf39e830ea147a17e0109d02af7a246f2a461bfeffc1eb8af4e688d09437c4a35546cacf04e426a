(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cities-cities-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cities/cities.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cities/cities.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>{{'Select City' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"noData\" *ngIf=\"!dummy?.length && !cities?.length\" [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n  </div>\n  <p class=\"ion-text-center\" *ngIf=\"!dummy?.length && !cities?.length\">{{'No Cities Found' | translate}}</p>\n  <div *ngFor=\"let item of dummy\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div>\n    <ion-list>\n      <ion-radio-group [(ngModel)]=\"selectedCity\">\n        <ion-item *ngFor=\"let item of cities\">\n          <ion-label>{{item.name}}</ion-label>\n          <ion-radio mode=\"md\" slot=\"start\" [value]=\"item.id\"></ion-radio>\n        </ion-item>\n\n      </ion-radio-group>\n    </ion-list>\n  </div>\n  <div class=\"btns\">\n    <img src=\"assets/imgs/en.png\" (click)=\"changeLng('en')\"\n      [ngClass]=\"getClassName() == 'en' ? 'flagActive':'flagDeactive'\" alt=\"\">\n    <img src=\"assets/imgs/spanish.png\" (click)=\"changeLng('spanish')\"\n      [ngClass]=\"getClassName() == 'spanish' ? 'flagActive':'flagDeactive'\" alt=\"\">\n  </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"selectedCity\" (click)=\"goNext()\">\n    <ion-fab-button>\n      <ion-icon name=\"arrow-forward-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/cities/cities-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/cities/cities-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CitiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesPageRoutingModule", function() { return CitiesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cities_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cities.page */ "./src/app/pages/cities/cities.page.ts");




const routes = [
    {
        path: '',
        component: _cities_page__WEBPACK_IMPORTED_MODULE_3__["CitiesPage"]
    }
];
let CitiesPageRoutingModule = class CitiesPageRoutingModule {
};
CitiesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CitiesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cities/cities.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/cities/cities.module.ts ***!
  \***********************************************/
/*! exports provided: CitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesPageModule", function() { return CitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _cities_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cities-routing.module */ "./src/app/pages/cities/cities-routing.module.ts");
/* harmony import */ var _cities_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cities.page */ "./src/app/pages/cities/cities.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let CitiesPageModule = class CitiesPageModule {
};
CitiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cities_routing_module__WEBPACK_IMPORTED_MODULE_5__["CitiesPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_cities_page__WEBPACK_IMPORTED_MODULE_6__["CitiesPage"]]
    })
], CitiesPageModule);



/***/ }),

/***/ "./src/app/pages/cities/cities.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/cities/cities.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.btns {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 0px;\n  margin-top: 70px;\n}\n\n.btns .flagActive {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  border: 2px solid var(--ion-color-primary);\n  margin: 0px 10px;\n}\n\n.btns .flagDeactive {\n  height: 45px;\n  width: 45px;\n  margin: 0px 10px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2l0aWVzL0U6XFxURUpBUyBJTVBcXFRFSkFTIEdBV0FMSVxcQXBwc0ZyZWVsYWNpbmdcXGlvbmljNWZvb2RhcHAtMTBcXFVzZXJBcHAvc3JjXFxhcHBcXHBhZ2VzXFxjaXRpZXNcXGNpdGllcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NpdGllcy9jaXRpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBRENBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEREk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtBQ0dSOztBRERJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpdGllcy9jaXRpZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vRGF0YXtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xufVxuLmJ0bnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAuZmxhZ0FjdGl2ZXtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgfVxuICAgIC5mbGFnRGVhY3RpdmV7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IC41O1xuICAgIH1cbn0gICAiLCIubm9EYXRhIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG4uYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgbWFyZ2luLXRvcDogNzBweDtcbn1cbi5idG5zIC5mbGFnQWN0aXZlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG59XG4uYnRucyAuZmxhZ0RlYWN0aXZlIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/cities/cities.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/cities/cities.page.ts ***!
  \*********************************************/
/*! exports provided: CitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CitiesPage", function() { return CitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");






let CitiesPage = class CitiesPage {
    constructor(api, util, navCtrl, translate) {
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.cities = [];
        this.dummy = Array(10);
        this.dummyList = [];
        const lng = localStorage.getItem('language');
        if (!lng || lng === null) {
            localStorage.setItem('language', 'en');
        }
        this.translate.use(localStorage.getItem('language'));
        this.getCities();
    }
    getCities() {
        this.api.getCities().then((data) => {
            console.log(data);
            this.dummy = [];
            if (data && data.length) {
                data.forEach(element => {
                    if (element && element.status === 'active') {
                        this.cities.push(element);
                        this.dummyList.push(element);
                    }
                });
            }
        }).catch(error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
            this.dummy = [];
        });
    }
    ngOnInit() {
    }
    goNext() {
        console.log('next', this.selectedCity);
        const data = this.cities.filter(x => x.id === this.selectedCity);
        console.log(data);
        localStorage.setItem('selectedCity', JSON.stringify(data[0]));
        this.util.publishLocation('data');
        this.navCtrl.navigateRoot(['/tabs']);
    }
    getClassName() {
        return localStorage.getItem('language');
    }
    changeLng(lng) {
        localStorage.setItem('language', lng);
        this.translate.use(lng);
    }
};
CitiesPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
CitiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cities',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cities.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cities/cities.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cities.page.scss */ "./src/app/pages/cities/cities.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]])
], CitiesPage);



/***/ })

}]);
//# sourceMappingURL=pages-cities-cities-module-es2015.js.map