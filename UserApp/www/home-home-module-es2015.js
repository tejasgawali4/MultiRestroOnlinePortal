(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\n  <!-- <ion-toolbar [hidden]=\"headerHidden\" class=\"animated fadeInDown\" *ngIf=\"haveLocation\"> -->\n  <ion-toolbar>\n    <div class=\"deliveryAddress\">\n      <img src=\"assets/pin.png\" alt=\"\" class=\"pin\" (click)=\"changeLocation()\">\n      <p class=\"address\" (click)=\"changeLocation()\"> {{cityName | slice:0:25}}</p>\n      <div class=\"userPhoto\" [style.backgroundImage]=\"'url('+ profile +')'\" *ngIf=\"profile\"></div>\n      <div class=\"userPhoto\" [style.backgroundImage]=\"'url(assets/user.png)'\" *ngIf=\"!profile\"></div>\n    </div>\n    <div class=\"div_searchbar\">\n      <ion-searchbar animated=\"true\" mode=\"ios\" [placeholder]=\"('Search Restaurants' | translate) || '&nbsp;'\"\n        (ionChange)=\"onSearchChange($event)\" [debounce]=\"250\" class=\"search_bar\"></ion-searchbar>\n    </div>\n  </ion-toolbar>\n  <div class=\"chips_div animated fadeInDown\" *ngIf=\"allRest?.length\">\n    <ion-label class=\"chip\" *ngFor=\"let item of chips;let i = index\" (click)=\"addFilter(i)\">{{item}}</ion-label>\n  </div>\n  <ion-item>\n    <ion-label> <span *ngIf=\"!nearme\">{{'Near Me' | translate}}</span> <span\n        *ngIf=\"nearme\">{{'All Rest' | translate}}</span> </ion-label>\n    <ion-toggle slot=\"end\" (ionChange)=\"nearMe()\" [(ngModel)]=\"nearme\"></ion-toggle>\n  </ion-item>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" (ionScroll)=\"onScroll($event)\">\n  <div class=\"main_content_div\">\n    <ion-slides [options]=\"slideOpts\" *ngIf=\"banners?.length && allRest?.length\">\n      <ion-slide *ngFor=\"let item of banners\" (click)=\"openOffers(item)\">\n        <div class=\"back_image\" [ngStyle]=\"{'background-image':'url('+item.banner+')'}\">\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <div class=\"noData\" *ngIf=\"!dummy?.length && !allRest?.length\" [style.backgroundImage]=\"'url(assets/nothing.jpg)'\">\n\n    </div>\n    <p style=\"font-weight: bold;text-align: center;\" *ngIf=\"!dummy?.length && !allRest?.length\">\n      {{'No Restaurants Found!' | translate}}\n    </p>\n    <div *ngFor=\"let item of dummy\">\n      <ion-list>\n        <ion-item>\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"card_div\">\n      <ion-row [className]=\"item && item.status =='close' ? 'cardClosed ion-no-padding':'card ion-no-padding'\"\n        *ngFor=\"let item of allRest\">\n        <ion-col size=\"4\">\n          <div class=\"image_div\" (click)=\"openMenu(item)\" [style.backgroundImage]=\"'url('+item.cover+')'\"></div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <div class=\"desc_div\" (click)=\"openMenu(item)\">\n            <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n            <ion-label class=\"small_lbl\">{{getCusine(item.cusine)}}</ion-label>\n            <ion-label class=\"small_lbl\">{{item.dishPrice}}{{getCurrency()}} {{'per person' | translate}} |\n              {{item.time}}\n              {{'min' | translate}}</ion-label>\n\n          </div>\n        </ion-col>\n        <ion-col size=\"2\">\n          <div class=\"ratting\">\n            <ion-label class=\"rateNumber\">{{item.ratting}}</ion-label>\n          </div>\n          <p class=\"closed\" *ngIf=\"item && item.status =='close'\">{{'Closed' | translate}}</p>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/UserGuard/auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/UserGuard/auth.guard.ts ***!
  \*****************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");



let UserGuard = class UserGuard {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    canActivate(next, state) {
        const selectedCity = localStorage.getItem('selectedCity');
        console.log('selectedCity', localStorage.getItem('selectedCity'));
        if (selectedCity && selectedCity != null && selectedCity !== 'null') {
            return true;
        }
        this.navCtrl.navigateRoot(['/cities']);
        return false;
    }
};
UserGuard.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
UserGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], UserGuard);



/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_UserGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/UserGuard/auth.guard */ "./src/app/UserGuard/auth.guard.ts");





const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        canActivate: [src_app_UserGuard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["UserGuard"]]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar:last-child {\n  --border-width: 0px;\n}\n\n.animated {\n  background-repeat: no-repeat;\n  background-position: left top;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n  }\n}\n\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n\n.header-md:after {\n  background: none;\n}\n\n.deliveryAddress {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 20px 10px 0px 10px;\n}\n\n.deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.deliveryAddress .userPhoto {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.div_searchbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 8px;\n}\n\n.div_searchbar .search_bar {\n  padding: 0px;\n  width: 100%;\n}\n\n.chips_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  overflow: scroll;\n  scrollbar-width: none;\n  /* Firefox */\n  -ms-overflow-style: none;\n  /* Internet Explorer 10+ */\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.chips_div ::-webkit-scrollbar {\n  width: 0px;\n  background: transparent;\n}\n\n.chips_div ::-webkit-scrollbar-thumb {\n  background: transparent;\n}\n\n.chips_div .chip {\n  border-radius: 3px;\n  padding: 5px 20px;\n  margin-right: 10px;\n  white-space: nowrap;\n  color: lightgray;\n  font-size: 12px;\n  font-weight: bold;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.chips_div .selected {\n  border-radius: 3px;\n  padding: 5px 20px;\n  margin-right: 10px;\n  white-space: nowrap;\n  background: var(--ion-color-primary);\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n\n.heading {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\n.heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div {\n  padding: 16px;\n}\n\n.main_content_div .back_image {\n  height: 150px;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  width: 100%;\n  border-radius: 20px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.main_content_div .noData {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 100%;\n  height: 250px;\n}\n\n.main_content_div .heading {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n\n.main_content_div .heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div .slider_div .card {\n  margin-top: 15px;\n}\n\n.main_content_div .slider_div .card .back_image {\n  height: 200px;\n  width: 250px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  position: relative;\n}\n\n.main_content_div .slider_div .card .back_image .time_lbl {\n  padding: 10px;\n  position: absolute;\n  background: white;\n  bottom: 15px;\n  right: 15px;\n  border-radius: 25px;\n  font-size: 12px;\n}\n\n.main_content_div .slider_div .card .heading_lbl {\n  font-size: 20px;\n  display: block;\n  margin-top: 10px;\n  text-align: left;\n}\n\n.main_content_div .slider_div .card .price_rating {\n  display: -webkit-box;\n  display: flex;\n  height: 25px;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.main_content_div .slider_div .card .price_rating .rating {\n  color: var(--ion-color-primary);\n  font-size: 15px;\n  margin-left: 10px;\n}\n\n.main_content_div .slider_div .card .price_rating .red_lbl {\n  color: var(--ion-color-primary);\n  font-size: 12px;\n}\n\n.main_content_div .slider_div .card .price_rating .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div .card_div .heading {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n\n.main_content_div .card_div .heading .heading_lbl {\n  font-size: 20px;\n  display: block;\n  text-align: left;\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .card_div .heading .small_lbl {\n  font-size: 12px;\n  color: lightgray;\n}\n\n.main_content_div .card_div .card {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.main_content_div .card_div .card .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.main_content_div .card_div .card .desc_div .heading_lbl {\n  font-size: 1rem;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .card .desc_div .small_lbl {\n  font-size: 0.8rem;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .card .ratting {\n  background: green;\n  padding: 2px 5px;\n  text-align: center;\n}\n\n.main_content_div .card_div .card .ratting .rateNumber {\n  color: white;\n  font-size: 0.8rem;\n}\n\n.main_content_div .card_div .cardClosed {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  background: #ebebeb;\n  margin: 10px 0px;\n  border-radius: 15px;\n}\n\n.main_content_div .card_div .cardClosed .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.main_content_div .card_div .cardClosed .desc_div .heading_lbl {\n  font-size: 1rem;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .cardClosed .desc_div .small_lbl {\n  font-size: 0.8rem;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.main_content_div .card_div .cardClosed .ratting {\n  background: green;\n  padding: 2px 5px;\n  text-align: center;\n}\n\n.main_content_div .card_div .cardClosed .ratting .rateNumber {\n  color: white;\n  font-size: 0.8rem;\n}\n\n.main_content_div .card_div .cardClosed .closed {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n  border-radius: 5px;\n  font-size: 1rem;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9FOlxcVEVKQVMgSU1QXFxURUpBUyBHQVdBTElcXEFwcHNGcmVlbGFjaW5nXFxpb25pYzVmb29kYXBwLTEwXFxVc2VyQXBwL3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBQTtBQ0FKOztBREVDO0VBQ0csNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUk7RUFDSTtJQUNJLFVBQUE7SUFDQSxvQ0FBQTtFQ0NWO0VEQ007SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7RUNDVjtBQUNGOztBREVJO0VBQ0E7SUFDSSxVQUFBO0lBQ0Esb0NBQUE7WUFBQSw0QkFBQTtFQ0FOO0VERUU7SUFDSSxVQUFBO0lBQ0EsZ0NBQUE7WUFBQSx3QkFBQTtFQ0FOO0FBQ0Y7O0FER0k7RUFDSSxrQ0FBQTtFQUNBLDBCQUFBO0FDRFI7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FEQUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0VSOztBREFJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNFUjs7QURBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNFUjs7QURDQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDQ1I7O0FESUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQXVCLFlBQUE7RUFDdkIsd0JBQUE7RUFBMkIsMEJBQUE7RUFDM0Isa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURBSTtFQUNJLFVBQUE7RUFDQSx1QkFBQTtBQ0VSOztBREFJO0VBQ0ksdUJBQUE7QUNFUjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDRVI7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENJO0VBQ0ksZUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDQVI7O0FERUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURFSTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FDQVI7O0FERUk7RUFDSSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQVI7O0FERUk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQ0FSOztBREVRO0VBQ0ksZUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDRFo7O0FER1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNEWjs7QURPUTtFQUNJLGdCQUFBO0FDTFo7O0FETVk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNKaEI7O0FETWdCO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0pwQjs7QURRWTtFQUNJLGVBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1BoQjs7QURTWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDUGhCOztBRFFnQjtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTnBCOztBRFFnQjtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtBQ05wQjs7QURTZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNQcEI7O0FEZVE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQ2JaOztBRGVZO0VBQ0ksZUFBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDZGhCOztBRGdCWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ2RoQjs7QURrQlE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDaEJaOztBRGtCWTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNoQmhCOztBRG1CZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDakJwQjs7QURtQmdCO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2pCcEI7O0FEcUJZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDbkJoQjs7QURvQmdCO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDbEJwQjs7QURzQlE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDcEJaOztBRHFCWTtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNuQmhCOztBRHNCZ0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDcEJwQjs7QURzQmdCO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3BCcEI7O0FEd0JZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDdEJoQjs7QUR1QmdCO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDckJwQjs7QUR3Qlk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUN0QmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXRvb2xiYXI6bGFzdC1jaGlsZCB7XG4gICAgLS1ib3JkZXItd2lkdGg6IDBweDtcbn1cbiAuYW5pbWF0ZWQge1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gICAgfVxuICAgIFxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBAa2V5ZnJhbWVzIGZhZGVJbkRvd24ge1xuICAgIDAlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gICAgfVxuICAgIFxuICAgIC5mYWRlSW5Eb3duIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG59XG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLmRlbGl2ZXJ5QWRkcmVzc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgLnBpbntcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gICAgLmFkZHJlc3N7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICAgIC51c2VyUGhvdG97XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbn1cbi5kaXZfc2VhcmNoYmFye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuXG4gICAgLnNlYXJjaF9iYXJ7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgXG59XG5cbi5jaGlwc19kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwcHg7IFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuY2hpcHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMjBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLnNlbGVjdGVke1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG59XG5cbi5oZWFkaW5ne1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXG4gICAgLmhlYWRpbmdfbGJse1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC5zbWFsbF9sYmx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgLy8vL2ZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgfVxufVxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5ub0RhdGF7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICB9XG4gICAgLmhlYWRpbmd7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1ib2xkO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbGlkZXJfZGl2e1xuICAgICAgICAuY2FyZHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgLnRpbWVfbGJse1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tcmVndWxhcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIC8vZm9udC1mYW1pbHk6IG9wZW4tYm9sZDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJpY2VfcmF0aW5ne1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7ICAgICBcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7OyAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLnJhdGluZ3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnJlZF9sYmx7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgLy9mb250LWZhbWlseTogb3Blbi1yZWd1bGFyOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmRfZGl2e1xuICAgICAgICAuaGVhZGluZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLWJvbGQ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAvL2ZvbnQtZmFtaWx5OiBvcGVuLXJlZ3VsYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgLy8gcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY19kaXZ7XG4gICAgICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdHRpbmd7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLnJhdGVOdW1iZXJ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jYXJkQ2xvc2Vke1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY19kaXZ7XG4gICAgICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdHRpbmd7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgLnJhdGVOdW1iZXJ7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsb3NlZHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImlvbi10b29sYmFyOmxhc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xufVxuXG4uYW5pbWF0ZWQge1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbn1cbi5mYWRlSW5Eb3duIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG59XG5cbi5oZWFkZXItbWQ6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uZGVsaXZlcnlBZGRyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4IDEwcHggMHB4IDEwcHg7XG59XG4uZGVsaXZlcnlBZGRyZXNzIC5waW4ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLmRlbGl2ZXJ5QWRkcmVzcyAuYWRkcmVzcyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbWFyZ2luOiAwcHg7XG59XG4uZGVsaXZlcnlBZGRyZXNzIC51c2VyUGhvdG8ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmRpdl9zZWFyY2hiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uZGl2X3NlYXJjaGJhciAuc2VhcmNoX2JhciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGlwc19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XG4gIC8qIEZpcmVmb3ggKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY2hpcHNfZGl2IDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5jaGlwc19kaXYgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmNoaXBzX2RpdiAuY2hpcCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY2hpcHNfZGl2IC5zZWxlY3RlZCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbi5oZWFkaW5nIC5oZWFkaW5nX2xibCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uaGVhZGluZyAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLm1haW5fY29udGVudF9kaXYgLm5vRGF0YSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkaW5nIC5oZWFkaW5nX2xibCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuaGVhZGluZyAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogbGlnaHRncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQgLmJhY2tfaW1hZ2UgLnRpbWVfbGJsIHtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm90dG9tOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IC5jYXJkIC5wcmljZV9yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLnNsaWRlcl9kaXYgLmNhcmQgLnByaWNlX3JhdGluZyAucmF0aW5nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zbGlkZXJfZGl2IC5jYXJkIC5wcmljZV9yYXRpbmcgLnJlZF9sYmwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc2xpZGVyX2RpdiAuY2FyZCAucHJpY2VfcmF0aW5nIC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5oZWFkaW5nIC5oZWFkaW5nX2xibCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmhlYWRpbmcgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkIC5pbWFnZV9kaXYge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkIC5kZXNjX2RpdiAuaGVhZGluZ19sYmwge1xuICBmb250LXNpemU6IDFyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkIC5kZXNjX2RpdiAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkIC5yYXR0aW5nIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIHBhZGRpbmc6IDJweCA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY2FyZCAucmF0dGluZyAucmF0ZU51bWJlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmNhcmRDbG9zZWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY2FyZENsb3NlZCAuaW1hZ2VfZGl2IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY2FyZENsb3NlZCAuZGVzY19kaXYgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY2FyZENsb3NlZCAuZGVzY19kaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAuY2FyZENsb3NlZCAucmF0dGluZyB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmNhcmRDbG9zZWQgLnJhdHRpbmcgLnJhdGVOdW1iZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5jYXJkQ2xvc2VkIC5jbG9zZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICByaWdodDogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/diagnostic/ngx */ "./node_modules/@ionic-native/diagnostic/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);












let HomePage = class HomePage {
    constructor(platform, androidPermissions, diagnostic, geolocation, router, api, util, apis, modalController, navCtrl) {
        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.router = router;
        this.api = api;
        this.util = util;
        this.apis = apis;
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.allRest = [];
        this.chips = [];
        // address: any;
        this.dummyRest = [];
        this.dummy = Array(50);
        this.nearme = false;
        this.banners = [];
        this.slideOpts = {
            slidesPerView: 1.7,
        };
        const currentLng = this.util.getLanguage();
        console.log('current language --->', currentLng);
        this.chips = [this.util.translate('Ratting 4.0+'), this.util.translate('Fastest Delivery'), this.util.translate('Cost')];
        // ['Ratting 4.0+', 'Fastest Delivery', 'Cost'];
        this.haveLocation = false;
        if (this.platform.is('ios')) {
            this.plt = 'ios';
        }
        else {
            this.plt = 'android';
        }
        this.api.getBanners().then(data => {
            console.log(data);
            this.banners = data;
        }).catch(error => {
            console.log(error);
        });
        const city = JSON.parse(localStorage.getItem('selectedCity'));
        console.log(city);
        if (city && city.name) {
            this.cityName = city.name;
            this.cityId = city.id;
            this.getRest();
        }
    }
    addFilter(index) {
        console.log(index);
        if (index === 0) {
            console.log('rating');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["orderBy"])(this.allRest, 'ratting', 'desc');
        }
        else if (index === 1) {
            console.log('fast');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["orderBy"])(this.allRest, 'time', 'asc');
        }
        else {
            console.log('cost');
            this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["orderBy"])(this.allRest, 'dishPrice', 'asc');
        }
        this.allRest = Object(lodash__WEBPACK_IMPORTED_MODULE_10__["uniqBy"])(this.allRest, 'id');
    }
    ionViewWillEnter() {
        this.getLocation();
        this.getProfile();
    }
    // getAddressMy() {
    //   const add = JSON.parse(localStorage.getItem('deliveryAddress'));
    //   if (add && add.address) {
    //     this.address = add.address;
    //     this.lat = add.lat;
    //     this.lng = add.lng;
    //   }
    //   return this.address;
    // }
    getLocation() {
        this.platform.ready().then(() => {
            if (this.platform.is('android')) {
                this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(result => console.log('Has permission?', result.hasPermission), err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION));
                this.grantRequest();
            }
            else if (this.platform.is('ios')) {
                this.grantRequest();
            }
            else {
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
                    if (resp) {
                        console.log('resp', resp);
                        this.lat = resp.coords.latitude;
                        this.lng = resp.coords.longitude;
                        // this.getAddress(this.lat, this.lng);
                    }
                }).catch(error => {
                    console.log(error);
                    this.grantRequest();
                });
            }
        });
    }
    grantRequest() {
        this.diagnostic.isLocationEnabled().then((data) => {
            if (data) {
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
                    if (resp) {
                        console.log('resp', resp);
                        this.lat = resp.coords.latitude;
                        this.lng = resp.coords.longitude;
                        // this.getAddress(this.lat, this.lng);
                    }
                }).catch(error => {
                    console.log(error);
                });
            }
            else {
                this.diagnostic.switchToLocationSettings();
                this.geolocation.getCurrentPosition({ maximumAge: 3000, timeout: 10000, enableHighAccuracy: false }).then((resp) => {
                    if (resp) {
                        console.log('ress,', resp);
                        this.lat = resp.coords.latitude;
                        this.lng = resp.coords.longitude;
                        // this.getAddress(this.lat, this.lng);
                    }
                }).catch(error => {
                    console.log(error);
                });
            }
        }, error => {
            console.log('errir', error);
            this.dummy = [];
        }).catch(error => {
            console.log('error', error);
            this.dummy = [];
        });
    }
    ngOnInit() {
        console.log('init');
    }
    // getAddress(lat, lng) {
    //   setTimeout(() => {
    //     this.haveLocation = true;
    //     const geocoder = new google.maps.Geocoder();
    //     const location = new google.maps.LatLng(lat, lng);
    //     geocoder.geocode({ 'location': location }, (results, status) => {
    //       console.log(results);
    //       console.log('status', status)
    //       if (results && results.length) {
    //         this.address = results[0].formatted_address;
    //         this.lat = lat;
    //         this.lng = lng;
    //         const address = {
    //           address: this.address,
    //           lat: this.lat,
    //           lng: this.lng,
    //           id: ''
    //         };
    //         localStorage.setItem('deliveryAddress', JSON.stringify(address));
    //       } else {
    //         this.dummy = [];
    //         this.util.errorToast('Something went wrong please try again later');
    //       }
    //     });
    //     localStorage.setItem('myLat', this.lat);
    //     localStorage.setItem('myLng', this.lng);
    //     this.getRest();
    //   }, 1000);
    // }
    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
        console.log(lat1, lon1, lat2, lon2);
        const earthRadiusKm = 6371;
        const dLat = this.degreesToRadians(lat2 - lat1);
        const dLon = this.degreesToRadians(lon2 - lon1);
        lat1 = this.degreesToRadians(lat1);
        lat2 = this.degreesToRadians(lat2);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;
    }
    getTime(time) {
        return moment__WEBPACK_IMPORTED_MODULE_9__(time).format('mm');
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //   const modal = await this.modalController.create({
            //     component: ChooseAddressPage
            //   });
            //   return await modal.present();
            yield this.router.navigate(['choose-address']);
        });
    }
    nearMe() {
        this.dummy = Array(50);
        this.allRest = [];
        if (this.nearme) {
            this.dummyRest.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                const distance = yield this.distanceInKmBetweenEarthCoordinates(this.lat, this.lng, element.lat, element.lng);
                console.log('distance', distance);
                // Distance
                if (distance < 10) {
                    this.allRest.push(element);
                }
            }));
            this.dummy = [];
        }
        else {
            this.allRest = this.dummyRest;
            this.dummy = [];
        }
    }
    getRest() {
        this.dummy = Array(10);
        this.api.getVenues().then(data => {
            console.log(data);
            if (data && data.length) {
                this.allRest = [];
                data.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (element && element.isClose === false && element.city === this.cityId) {
                        element.time = moment__WEBPACK_IMPORTED_MODULE_9__(element.time).format('HH');
                        this.allRest.push(element);
                        this.dummyRest.push(element);
                    }
                }));
                this.dummy = [];
            }
            else {
                this.allRest = [];
                this.dummy = [];
            }
        }, error => {
            console.log(error);
            this.dummy = [];
        }).catch(error => {
            console.log(error);
            this.dummy = [];
        });
    }
    openMenu(item) {
        if (item && item.status === 'close') {
            return false;
        }
        const navData = {
            queryParams: {
                id: item.uid
            }
        };
        this.router.navigate(['category'], navData);
    }
    openOffers(item) {
        const navData = {
            queryParams: {
                id: item.restId
            }
        };
        this.router.navigate(['category'], navData);
    }
    onSearchChange(event) {
        console.log(event.detail.value);
        this.allRest = this.dummyRest.filter((ele) => {
            return ele.name.toLowerCase().includes(event.detail.value.toLowerCase());
        });
    }
    getCusine(cusine) {
        return cusine.join('-');
    }
    onScroll(event) {
        if (event.detail.deltaY > 0 && this.headerHidden)
            return;
        if (event.detail.deltaY < 0 && !this.headerHidden)
            return;
        if (event.detail.deltaY > 80) {
            this.headerHidden = true;
        }
        else {
            this.headerHidden = false;
        }
    }
    getProfile() {
        if (localStorage.getItem('uid')) {
            this.apis.getProfile(localStorage.getItem('uid')).then((data) => {
                console.log(data);
                if (data && data.cover) {
                    this.profile = data.cover;
                }
                if (data && data.status === 'deactive') {
                    localStorage.removeItem('uid');
                    this.api.logout().then(data => {
                        console.log(data);
                    });
                    this.router.navigate(['login']);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire({
                        title: 'Error',
                        text: 'Your are blocked please contact administrator',
                        icon: 'error',
                        showConfirmButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'Need Help?',
                        backdrop: false,
                        background: 'white'
                    }).then(data => {
                        if (data && data.value) {
                            this.router.navigate(['inbox']);
                        }
                    });
                }
            }, err => {
                console.log('Err', err);
            }).catch(e => {
                console.log('Err', e);
            });
        }
    }
    chipChange(item) {
        this.allRest = this.dummyRest;
        console.log(item);
        if (item === 'Fastest Delivery') {
            this.allRest.sort((a, b) => {
                a = new Date(a.time);
                b = new Date(b.time);
                return a > b ? -1 : a < b ? 1 : 0;
            });
        }
        if (item === 'Ratting 4.0+') {
            this.allRest = [];
            this.dummyRest.forEach(ele => {
                if (ele.ratting >= 4) {
                    this.allRest.push(ele);
                }
            });
        }
        if (item === 'Cost') {
            this.allRest.sort((a, b) => {
                a = a.time;
                b = b.time;
                return a > b ? -1 : a < b ? 1 : 0;
            });
        }
    }
    changeLocation() {
        this.navCtrl.navigateRoot(['cities']);
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissions"] },
    { type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__["Diagnostic"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"],
        _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__["AndroidPermissions"],
        _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_3__["Diagnostic"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map