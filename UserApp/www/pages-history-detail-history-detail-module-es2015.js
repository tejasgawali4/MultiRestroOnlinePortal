(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-detail-history-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-detail/history-detail.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-detail/history-detail.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <div class=\"header_div\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n      </ion-buttons>\n      <!-- <ion-label class=\"support_lbl\">Support</ion-label> -->\n    </div>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"chat()\" color=\"danger\">\n        <ion-icon slot=\"end\" name=\"chatbox-ellipses-outline\"></ion-icon>\n        {{'Support' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div class=\"main_content_div\" *ngIf=\"loaded\">\n    <ion-label class=\"header_lbl\">{{'Order Summary' | translate}}</ion-label>\n    <ion-label class=\"res_location\">{{'This order with' | translate}} {{restName}} {{'was' | translate}} {{status}}\n    </ion-label>\n\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"res_location\">{{address}}</ion-label>\n\n    <div class=\"flex_div\">\n      <ion-label class=\"res_name\" style=\"margin-top: 0px;\">{{'Your Order' | translate}}</ion-label>\n      <ion-label class=\"fav_lbl\" (click)=\"trackMyOrder()\" *ngIf=\"status =='ongoing' || status =='accepted' \">\n        {{'Track Order' | translate}}\n      </ion-label>\n    </div>\n\n    <!-- <div class=\"line_div\"></div> -->\n\n    <span *ngFor=\"let item of orders\">\n\n      <div *ngFor=\"let subItems of item.selectedItem;let j = index\" class=\"subNames\">\n        <ion-label class=\"food_title\">\n          {{item.name}} X\n          {{item.selectedItem[j].total}}</ion-label>\n        <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n          <p class=\"sub_name\">\n            - {{addods.name}}\n          </p>\n          <p class=\"sub_name\">\n            {{getCurrency()}} {{addods.value}}\n          </p>\n        </div>\n      </div>\n\n      <div class=\"card_div\" *ngIf=\"!item.selectedItem || !item.selectedItem.length\">\n        <div class=\"flex_div\">\n          <ion-label class=\"food_title\">{{item.name}} X {{item.quantiy}} </ion-label>\n          <ion-label class=\"food_price\">{{getCurrency()}}{{item.quantiy * item.price}}</ion-label>\n        </div>\n\n      </div>\n\n    </span>\n\n    <ion-label style=\"margin-top: 5px; font-weight: 600px;\">{{'Item Total' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{total}}</span>\n    </ion-label>\n    <ion-label style=\"margin-top: 5px; font-weight: 600px;\" *ngIf=\"coupon\">{{'Coupon Discout' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{dicount}}</span>\n    </ion-label>\n    <ion-label style=\"margin-top: 5px; font-size: 14px\">{{'Delivery Charge' | translate}} <span\n        class=\"prise_lbl\">{{getCurrency()}}{{serviceTax}}</span>\n    </ion-label>\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"res_name\">{{'Order Detail' | translate}}</ion-label>\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"head_gray\">{{'Order Number' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{id}}</ion-label>\n    <ion-label class=\"head_gray\">{{'Payment' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{'Paid' | translate}} ; <span *ngIf=\"paid =='cod'\">COD</span> <span\n        *ngIf=\"paid =='stripe'\">{{'Using Card' | translate}}</span> </ion-label>\n    <ion-label class=\"head_gray\">{{'Date' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{time}}</ion-label>\n    <ion-label class=\"head_gray\">{{'Deliver to' | translate}}</ion-label>\n    <ion-label class=\"small_lbl\">{{deliveryAddress}}</ion-label>\n\n    <div class=\"line_div\"></div>\n\n    <ion-label class=\"red_lbl\" *ngIf=\"status =='created' ||status =='ongoing' || status =='accepted' \" (click)=\"call()\">\n      {{'Call' | translate}} {{restName}}</ion-label>\n\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn_div\">\n      <ion-button *ngIf=\"status ==='delivered'\" (click)=\"presentAlertConfirm()\" size=\"small\" class=\"ratae\">\n        <ion-icon name=\"star\" color=\"light\" slot=\"start\"></ion-icon>\n        {{'Rate Order' | translate}}\n      </ion-button>\n      <ion-button *ngIf=\"status === 'created' ||status === 'ongoing' || status === 'accepted' \" (click)=\"changeStatus()\"\n        size=\"small\" class=\"reject\">\n        {{'Cancel Order' | translate}}\n      </ion-button>\n    </div>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/history-detail/history-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: HistoryDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPageRoutingModule", function() { return HistoryDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _history_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-detail.page */ "./src/app/pages/history-detail/history-detail.page.ts");




const routes = [
    {
        path: '',
        component: _history_detail_page__WEBPACK_IMPORTED_MODULE_3__["HistoryDetailPage"]
    }
];
let HistoryDetailPageRoutingModule = class HistoryDetailPageRoutingModule {
};
HistoryDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/history-detail/history-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: HistoryDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPageModule", function() { return HistoryDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _history_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-detail-routing.module */ "./src/app/pages/history-detail/history-detail-routing.module.ts");
/* harmony import */ var _history_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history-detail.page */ "./src/app/pages/history-detail/history-detail.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let HistoryDetailPageModule = class HistoryDetailPageModule {
};
HistoryDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryDetailPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_history_detail_page__WEBPACK_IMPORTED_MODULE_6__["HistoryDetailPage"]]
    })
], HistoryDetailPageModule);



/***/ }),

/***/ "./src/app/pages/history-detail/history-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header_div .support_lbl {\n  margin-right: 20px;\n  color: red;\n}\n.main_content_div {\n  width: 100%;\n  padding: 20px;\n}\n.main_content_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .header_lbl {\n  font-weight: 600;\n  font-size: 22px;\n}\n.main_content_div .res_name {\n  margin-top: 20px;\n  font-weight: 600;\n  font-size: 18px;\n}\n.main_content_div .res_location {\n  font-size: 14px;\n  width: 90%;\n}\n.main_content_div .flex_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-top: 20px;\n}\n.main_content_div .flex_div .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .flex_div .food_price {\n  font-size: 15px;\n}\n.main_content_div .flex_div .fav_lbl {\n  color: red;\n  font-size: 12px;\n  border: 1px solid red;\n  border-radius: 25px;\n  padding: 2px 10px;\n}\n.main_content_div .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .subNames .food_title .veg {\n  height: 12px;\n  width: 12px;\n}\n.main_content_div .subNames .food_title .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .subNames .flex_titles {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.main_content_div .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.main_content_div .card_div {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .card_div .upper_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .card_div .upper_div .veg {\n  width: 12px;\n  height: 12px;\n}\n.main_content_div .card_div .lower_div {\n  margin-top: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.main_content_div .card_div .lower_div .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .prise_lbl {\n  position: absolute;\n  right: 20px;\n}\n.main_content_div .head_gray {\n  color: gray;\n  font-size: 13px;\n}\n.main_content_div .small_lbl {\n  font-size: 12px;\n  font-weight: 600;\n  margin-bottom: 15px;\n}\n.main_content_div .red_lbl {\n  color: red;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.btn_div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div .ratae {\n  --background: var(--ion-color-warning);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yeS1kZXRhaWwvRTpcXFRFSkFTIElNUFxcVEVKQVMgR0FXQUxJXFxBcHBzRnJlZWxhY2luZ1xcaW9uaWM1Zm9vZGFwcC0xMFxcVXNlckFwcC9zcmNcXGFwcFxccGFnZXNcXGhpc3RvcnktZGV0YWlsXFxoaXN0b3J5LWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnktZGV0YWlsL2hpc3RvcnktZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7QURDSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0NSO0FER0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0FKO0FERUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0FSO0FER0k7RUFDSSxjQUFBO0FDRFI7QURJSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FESUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FESUk7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQ0ZSO0FES0k7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGdCQUFBO0FDSFI7QURJUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0ZaO0FESVE7RUFDSSxlQUFBO0FDRlo7QURJUTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDRlo7QURNSTtFQUNJLG1DQUFBO0VBQ0EsbUJBQUE7QUNKUjtBREtRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDSFo7QURJWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDRmhCO0FESVk7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZoQjtBREtRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0haO0FESVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGaEI7QURPSTtFQUNJLG1DQUFBO0VBQ0EsbUJBQUE7QUNMUjtBRE1RO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0paO0FETVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0poQjtBRFFRO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ05aO0FET1k7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0xoQjtBRFVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDUlI7QURXSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDVFI7QURXSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVFI7QURXSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNUUjtBRGFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1ZKO0FEWUk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ1ZSO0FEWUk7RUFDSSxzQ0FBQTtBQ1ZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaGlzdG9yeS1kZXRhaWwvaGlzdG9yeS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcl9kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5zdXBwb3J0X2xibHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogcmVkO1xuICAgIH1cbn1cblxuLm1haW5fY29udGVudF9kaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC5saW5lX2RpdntcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmhlYWRlcl9sYmx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gICAgLnJlc19uYW1le1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC5yZXNfbG9jYXRpb257XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDsgICAgICAgXG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuXG4gICAgLmZsZXhfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIC5mb29kX3RpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb2RfcHJpY2V7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZhdl9sYmx7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN1Yk5hbWVze1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgLmZvb2RfdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIC52ZWd7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGVfbGJse1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiMmQ5YjI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3YjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZmxleF90aXRsZXN7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC5zdWJfbmFtZXtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmRfZGl2e1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgLnVwcGVyX2RpdntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAudmVne1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5sb3dlcl9kaXZ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7O1xuICAgICAgICAgICAgLnJhdGVfbGJse1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiMmQ5YjI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3YjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wcmlzZV9sYmx7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLmhlYWRfZ3JheXtcbiAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgLnNtYWxsX2xibHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbiAgICAucmVkX2xibHtcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbn1cblxuLmJ0bl9kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgfVxuICAgIC5yYXRhZXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7O1xuICAgIH1cbn1cbiIsIi5oZWFkZXJfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhlYWRlcl9kaXYgLnN1cHBvcnRfbGJsIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmxpbmVfZGl2IHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5oZWFkZXJfbGJsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlc19uYW1lIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlc19sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDkwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mbGV4X2RpdiAuZm9vZF90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmZvb2RfcHJpY2Uge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZmxleF9kaXYgLmZhdl9sYmwge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgcGFkZGluZzogMnB4IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc3ViTmFtZXMge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zdWJOYW1lcyAuZm9vZF90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc3ViTmFtZXMgLmZvb2RfdGl0bGUgLnZlZyB7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc3ViTmFtZXMgLmZvb2RfdGl0bGUgLnJhdGVfbGJsIHtcbiAgYmFja2dyb3VuZDogI2IyZDliMjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3YjtcbiAgcGFkZGluZzogM3B4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc3ViTmFtZXMgLmZsZXhfdGl0bGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1haW5fY29udGVudF9kaXYgLnN1Yk5hbWVzIC5mbGV4X3RpdGxlcyAuc3ViX25hbWUge1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAudXBwZXJfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAudXBwZXJfZGl2IC52ZWcge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5sb3dlcl9kaXYge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLmxvd2VyX2RpdiAucmF0ZV9sYmwge1xuICBiYWNrZ3JvdW5kOiAjYjJkOWIyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjN2JkYjdiO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5wcmlzZV9sYmwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmhlYWRfZ3JheSB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnJlZF9sYmwge1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5idG5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnRuX2RpdiBpb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMzBweDtcbn1cbi5idG5fZGl2IC5yYXRhZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/history-detail/history-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/history-detail/history-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: HistoryDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPage", function() { return HistoryDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let HistoryDetailPage = class HistoryDetailPage {
    constructor(route, api, router, util, alertController, navCtrl) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.util = util;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.orders = [];
        this.coupon = false;
        this.loaded = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log('data=>', data);
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getOrder();
            }
        });
    }
    getOrder() {
        this.api.getOrderById(this.id).then((data) => {
            this.loaded = true;
            console.log(data);
            if (data) {
                this.orderData = data;
                this.grandTotal = data.grandTotal;
                this.orders = JSON.parse(data.order);
                this.serviceTax = data.serviceTax;
                this.status = data.status;
                this.time = data.time;
                if (data && data.dId && data.dId.fullname) {
                    this.dname = data.dId.fullname;
                    this.driverFCM = data.dId.fcm_token;
                    console.log('driver FCM-------->', this.driverFCM);
                    this.dId = data.dId.uid;
                }
                this.total = data.total;
                this.address = data.vid.address;
                this.restName = data.vid.name;
                this.deliveryAddress = data.address.address;
                this.paid = data.paid;
                console.log('this', this.orders);
                this.getRest(data.vid.uid);
                this.coupon = data.appliedCoupon;
                this.dicount = data.dicount;
                // if (this.status === 'delivered') {
                //   this.presentAlertConfirm();
                // }
            }
        }, error => {
            console.log('error in orders', error);
            this.loaded = true;
            this.util.errorToast('Something went wrong');
        }).catch(error => {
            console.log('error in order', error);
            this.loaded = true;
            this.util.errorToast('Something went wrong');
        });
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'How was your experience?',
                message: 'Rate ' + this.restName + ' and ' + this.dname,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.util.setOrders(this.orderData);
                            this.router.navigate(['rate']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getRest(id) {
        this.api.getProfile(id).then((data) => {
            console.log(data);
            this.restFCM = data.fcm_token;
            console.log('rest FCM------------->', this.restFCM);
            if (data && data.phone) {
                this.restPhone = data.phone;
            }
        }, error => {
            console.log('error in orders', error);
            this.util.errorToast('Something went wrong');
        }).catch(error => {
            console.log('error in order', error);
            this.util.errorToast('Something went wrong');
        });
    }
    trackMyOrder() {
        const navData = {
            queryParams: {
                id: this.id
            }
        };
        this.router.navigate(['/tracker'], navData);
        //
    }
    call() {
        if (this.restPhone) {
            window.open('tel:' + this.restPhone);
        }
    }
    chat() {
        this.router.navigate(['inbox']);
    }
    changeStatus() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: this.util.translate('Are you sure?'),
            text: this.util.translate('To Cancel this order'),
            showCancelButton: true,
            cancelButtonText: this.util.translate('Cancel'),
            showConfirmButton: true,
            confirmButtonText: this.util.translate('Yes'),
            backdrop: false,
            background: 'white'
        }).then((data) => {
            console.log(data);
            if (data && data.value) {
                this.util.show();
                this.api.updateOrderStatus(this.id, 'cancel').then((data) => {
                    this.util.hide();
                    const message = this.util.translate('Order ') + this.id + ' ' + this.util.translate(' cancelled by user');
                    const title = this.util.translate('Order cancelled');
                    this.api.sendNotification(message, title, this.driverFCM).subscribe(data => {
                        console.log(data);
                    });
                    this.api.sendNotification(message, title, this.restFCM).subscribe(data => {
                        console.log(data);
                    });
                    if (this.dId && this.dname) {
                        const parm = {
                            current: 'active',
                        };
                        this.api.updateProfile(this.dId, parm).then((data) => {
                            console.log('driver status cahcnage----->', data);
                        }).catch(error => {
                            console.log(error);
                        });
                    }
                    this.navCtrl.back();
                }, error => {
                    this.util.hide();
                    console.log(error);
                    this.util.errorToast('Something went wrong');
                }).catch(error => {
                    this.util.hide();
                    console.log(error);
                    this.util.errorToast('Something went wrong');
                });
            }
        });
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
HistoryDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
HistoryDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history-detail/history-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history-detail.page.scss */ "./src/app/pages/history-detail/history-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])
], HistoryDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-history-detail-history-detail-module-es2015.js.map