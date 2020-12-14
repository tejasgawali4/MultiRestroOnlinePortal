(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-detail-order-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" color=\"dark\" mode=\"md\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{'Order Details' | translate}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"printOrder()\">\n        <ion-icon slot=\"start\" name=\"print-outline\"></ion-icon>\n        {{'Print' | translate}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div *ngIf=\"loaded\" class=\"main_content_div\">\n\n\n    <div class=\"card_div\">\n      <div class=\"resto_detail\">\n        <div class=\"back_image\" [style.backgroundImage]=\"'url('+userPic+')'\"></div>\n        <div style=\"margin-left: 10px;\">\n          <ion-label class=\"res_name\">{{userName}}</ion-label>\n          <ion-label class=\"res_location\">{{time}}</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"orderId\">\n      <div class=\"order_id\">\n        <ion-label>{{'Order ID' | translate}}</ion-label>\n        <ion-label>{{id}}</ion-label>\n      </div>\n    </div>\n    <div class=\"line_div\"></div>\n\n\n    <div class=\"card_div2\" *ngIf=\"phone\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"call\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{phone}}</ion-label>\n        </div>\n        <div>\n          <ion-button (click)=\"call()\" size=\"small\" fill=\"outline\">{{'Call' | translate}}</ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"card_div2\" *ngIf=\"userEmail\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"mail\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{userEmail}}</ion-label>\n        </div>\n        <div>\n          <ion-button (click)=\"email()\" size=\"small\" fill=\"outline\">{{'Email' | translate}}</ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"card_div2\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"location\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{deliveryAddress}}</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"card_div2\">\n      <div class=\"personal_detail\">\n        <div *ngIf=\"status != 'delivered'  && status != 'cancel' && status !='reject' && status !='created' \">\n          <ion-button (click)=\"goToTracker()\" size=\"small\" fill=\"outline\">{{'Navigate' | translate}}</ion-button>\n        </div>\n      </div>\n    </div>\n\n    <span *ngFor=\"let item of orders\">\n\n      <div *ngFor=\"let subItems of item.selectedItem;let j = index\" class=\"subNames\">\n        <ion-label class=\"food_title\">\n          {{item.name}} X\n          {{item.selectedItem[j].total}}</ion-label>\n        <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n          <p class=\"sub_name\">\n            - {{addods.name}}\n          </p>\n          <p class=\"sub_name\">\n            {{getCurrency()}} {{addods.value}}\n          </p>\n        </div>\n      </div>\n\n      <div class=\"card_div4\" *ngIf=\"!item.selectedItem || !item.selectedItem.length\">\n        <div class=\"flex_div\">\n          <ion-label class=\"food_title\">{{item.name}} X {{item.quantiy}} </ion-label>\n          <ion-label class=\"food_price\">{{getCurrency()}}{{item.quantiy * item.price}}</ion-label>\n        </div>\n\n      </div>\n\n    </span>\n\n    <div class=\"card_div2\">\n\n      <div class=\"order_detail\">\n        <ion-label class=\"small_lbl2\">{{'SubTotal' | translate}}<span class=\"prize1\">{{getCurrency()}}{{total}}</span>\n        </ion-label>\n        <ion-label class=\"small_lbl2\">{{'Delivery Charge' | translate}}<span class=\"prize1\">{{getCurrency()}}5</span>\n        </ion-label>\n        <ion-label class=\"small_lbl2\">{{'Service Tax' | translate}}<span\n            class=\"prize1\">{{getCurrency()}}{{serviceTax}}</span>\n        </ion-label>\n        <ion-label class=\"small_lbl2\">{{'Total' | translate}}<span class=\"prize1\">{{getCurrency()}}{{grandTotal}}</span>\n        </ion-label>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn_div\" *ngIf=\"status == 'created'\">\n      <ion-button (click)=\"changeStatus('rejected')\" size=\"small\" class=\"reject\">\n        {{'Reject Order' | translate}}\n      </ion-button>\n      <ion-button (click)=\"changeStatus('accepted')\" size=\"small\" class=\"accept\">\n        {{'Accept Order' | translate}}\n      </ion-button>\n    </div>\n\n    <div class=\"status_div\" *ngIf=\"status == 'accepted' || status == 'ongoing' \">\n      <div style=\"width: 200px;\">\n        <ion-select placeholder=\"Choose Status\" [(ngModel)]=\"changeStatusOrder\">\n          <ion-select-option value=\"ongoing\">{{'Ongoing' |  translate}}</ion-select-option>\n          <ion-select-option value=\"cancel\">{{'Cancel' | translate}}</ion-select-option>\n          <ion-select-option value=\"delivered\">{{'Delivered' | translate}}</ion-select-option>\n        </ion-select>\n      </div>\n\n      <div>\n        <ion-button (click)=\"changeOrderStatus()\" size=\"small\">\n          {{'Update Status' | translate}}\n        </ion-button>\n      </div>\n    </div>\n\n    <ion-label class=\"green\" *ngIf=\"status == 'delivered'\">{{'Order Status' | translate}} :\n      {{'Order Delivered' | translate}}</ion-label>\n    <ion-label class=\"red\" *ngIf=\"status == 'cancel'\">{{'Order Cancelled by user' | translate}}</ion-label>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/order-detail/order-detail-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageRoutingModule", function() { return OrderDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/pages/order-detail/order-detail.page.ts");




const routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailPage"]
    }
];
let OrderDetailPageRoutingModule = class OrderDetailPageRoutingModule {
};
OrderDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-detail-routing.module */ "./src/app/pages/order-detail/order-detail-routing.module.ts");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/pages/order-detail/order-detail.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailPageRoutingModule"]
        ],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]]
    })
], OrderDetailPageModule);



/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .card_div {\n  padding: 20px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .orderId {\n  padding: 10px 20px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div4 {\n  border-bottom: 1px dashed lightgray;\n  padding: 10px 20px;\n}\n.main_content_div .card_div4 .flex_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div4 .flex_div .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .card_div4 .flex_div .food_price {\n  font-size: 15px;\n}\n.main_content_div .card_div4 .flex_div .fav_lbl {\n  color: red;\n  font-size: 12px;\n  border: 1px solid red;\n  border-radius: 25px;\n  padding: 2px 10px;\n}\n.main_content_div .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding: 20px;\n}\n.main_content_div .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .subNames .food_title .veg {\n  height: 12px;\n  width: 12px;\n}\n.main_content_div .subNames .food_title .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .subNames .flex_titles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.main_content_div .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.main_content_div .card_div2 {\n  padding: 10px 20px;\n}\n.main_content_div .card_div2 .personal_detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div2 .personal_detail ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .card_div2 .personal_detail ion-button {\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .personal_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div2 .order_detail .head_gray {\n  color: gray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n}\n.main_content_div .card_div2 .order_detail .prize1 {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div .accept {\n  --background: green;\n}\n.status_div {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n}\n.status_div ion-select {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-top: 3px;\n  --padding-bottom:3px;\n  width: 100%;\n}\n.status_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.green {\n  display: block;\n  text-align: center;\n  color: green;\n  font-weight: 600;\n}\n.red {\n  display: block;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXItZGV0YWlsL0U6XFxURUpBUyBJTVBcXFRFSkFTIEdBV0FMSVxcQXBwc0ZyZWVsYWNpbmdcXGlvbmljNWZvb2RhcHAtMTBcXFJlc3RhdXJhbnRBcHAvc3JjXFxhcHBcXHBhZ2VzXFxvcmRlci1kZXRhaWxcXG9yZGVyLWRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVyLWRldGFpbC9vcmRlci1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDQ1I7QURFSTtFQUNJLGNBQUE7QUNBUjtBREdJO0VBQ0ksYUFBQTtBQ0RSO0FER1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRFo7QURHWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNEaEI7QURJWTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZkO0FESVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0ZoQjtBREtZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDSGhCO0FES2dCO0VBQ0csaUJBQUE7QUNIbkI7QURTSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUFI7QURVSTtFQUNHLG1DQUFBO0VBQ0Esa0JBQUE7QUNSUDtBRFNRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNQWjtBRFFZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDTmhCO0FEUVk7RUFDSSxlQUFBO0FDTmhCO0FEUVk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ05oQjtBRFVJO0VBQ0ksbUNBQUE7RUFDQSxhQUFBO0FDUlI7QURTUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ1BaO0FEUVk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ05oQjtBRFFZO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNOaEI7QURTUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDUFo7QURRWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ05oQjtBRGFJO0VBQ0ksa0JBQUE7QUNYUjtBRFlRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ1ZaO0FEWVk7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7QUNWaEI7QURZWTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7QUNWaEI7QURZYTtFQUNDLGdCQUFBO0VBQ0EsZUFBQTtBQ1ZkO0FEZVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDYmhCO0FEZVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNiaEI7QURnQlk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNkaEI7QURpQlk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNmaEI7QURtQlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2pCaEI7QUR1QkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUNwQko7QURzQkk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ3BCUjtBRHNCSTtFQUNJLG1CQUFBO0FDcEJSO0FEd0JBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDckJKO0FEdUJJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FDckJSO0FEd0JJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQ3RCUjtBRDBCQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ3ZCSjtBRHlCQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUN0QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlci1kZXRhaWwvb3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmxpbmVfZGl2e1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICB9XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuY2FyZF9kaXZ7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgLnJlc3RvX2RldGFpbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXG4gICAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVzX25hbWV7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICBcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIC5yZXNfbG9jYXRpb257XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAub3JkZXJfaWR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5vcmRlcklke1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7ICBcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5jYXJkX2RpdjR7XG4gICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAuZmxleF9kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC5mb29kX3RpdGxle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb29kX3ByaWNle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mYXZfbGJse1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICB9XG4gICAgLnN1Yk5hbWVze1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgLmZvb2RfdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIC52ZWd7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhdGVfbGJse1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiMmQ5YjI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3YjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZmxleF90aXRsZXN7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC5zdWJfbmFtZXtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuICAgIC5jYXJkX2RpdjJ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgLnBlcnNvbmFsX2RldGFpbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIC5yZXNfbmFtZXtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgIFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG5cbiAgICAgICAgLm9yZGVyX2RldGFpbHtcbiAgICAgICAgICAgIC5oZWFkX2dyYXl7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpemV7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5wcml6ZTF7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNtYWxsX2xibDJ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJ0bl9kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgfVxuICAgIC5hY2NlcHR7XG4gICAgICAgIC0tYmFja2dyb3VuZDogZ3JlZW47XG4gICAgfVxufVxuXG4uc3RhdHVzX2RpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW9uLXNlbGVjdHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbSA6M3B4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9ue1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG59XG5cbi5ncmVlbntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ucmVke1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saW5lX2RpdiB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAuYmFja19pbWFnZSB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5yZXNfbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5yZXNfbG9jYXRpb24ge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLm9yZGVyX2lkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLm9yZGVyX2lkIGlvbi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1haW5fY29udGVudF9kaXYgLm9yZGVySWQge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjQge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2NCAuZmxleF9kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXY0IC5mbGV4X2RpdiAuZm9vZF90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXY0IC5mbGV4X2RpdiAuZm9vZF9wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjQgLmZsZXhfZGl2IC5mYXZfbGJsIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnN1Yk5hbWVzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuc3ViTmFtZXMgLmZvb2RfdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLnN1Yk5hbWVzIC5mb29kX3RpdGxlIC52ZWcge1xuICBoZWlnaHQ6IDEycHg7XG4gIHdpZHRoOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLnN1Yk5hbWVzIC5mb29kX3RpdGxlIC5yYXRlX2xibCB7XG4gIGJhY2tncm91bmQ6ICNiMmQ5YjI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YmRiN2I7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLnN1Yk5hbWVzIC5mbGV4X3RpdGxlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zdWJOYW1lcyAuZmxleF90aXRsZXMgLnN1Yl9uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLnBlcnNvbmFsX2RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLnBlcnNvbmFsX2RldGFpbCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdjIgLnBlcnNvbmFsX2RldGFpbCBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5wZXJzb25hbF9kZXRhaWwgLnJlc19uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5oZWFkX2dyYXkge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2MiAub3JkZXJfZGV0YWlsIC5zbWFsbF9sYmwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLnByaXplIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMzVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLnByaXplMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYyIC5vcmRlcl9kZXRhaWwgLnNtYWxsX2xibDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idG5fZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYnRuX2RpdiBpb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMzBweDtcbn1cbi5idG5fZGl2IC5hY2NlcHQge1xuICAtLWJhY2tncm91bmQ6IGdyZWVuO1xufVxuXG4uc3RhdHVzX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN0YXR1c19kaXYgaW9uLXNlbGVjdCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtLXBhZGRpbmctdG9wOiAzcHg7XG4gIC0tcGFkZGluZy1ib3R0b206M3B4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGF0dXNfZGl2IGlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogNjAwO1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmdyZWVuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/order-detail/order-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _select_drivers_select_drivers_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../select-drivers/select-drivers.page */ "./src/app/pages/select-drivers/select-drivers.page.ts");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "./node_modules/@ionic-native/printer/ngx/index.js");









let OrderDetailPage = class OrderDetailPage {
    constructor(router, route, api, util, navCtrl, printer, modalController) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.printer = printer;
        this.modalController = modalController;
        this.orders = [];
        this.drivers = [];
        this.dummyDriver = [];
        this.orderString = [];
        this.loaded = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log(data);
            this.id = data.id;
            console.log('thisidd', this.id);
            this.getOrder();
        });
    }
    back() {
        this.util.publishNewAddress('hello');
        this.navCtrl.back();
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _select_drivers_select_drivers_page__WEBPACK_IMPORTED_MODULE_7__["SelectDriversPage"],
                backdropDismiss: false,
                showBackdrop: true,
                componentProps: {
                    item: this.dummyDriver
                }
            });
            modal.onDidDismiss().then((data) => {
                console.log(data);
                if (data && data.role === 'selected') {
                    this.drivers = data.data;
                    if (this.drivers && this.drivers.length) {
                        this.placeOrder();
                    }
                }
            });
            yield modal.present();
        });
    }
    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    placeOrder() {
        const param = {
            driverId: this.drivers[0].uid,
            dId: this.drivers[0].uid,
            status: 'accepted'
        };
        const value = 'accepted';
        this.util.show(this.util.translate('Please wait'));
        this.api.updateOrder(this.id, param).then((data) => {
            const parm = {
                current: 'busy',
            };
            this.api.updateProfile(this.drivers[0].uid, parm).then((data) => {
                console.log(data);
            }).catch(error => {
                console.log(error);
            });
            if (this.drivers[0] && this.drivers[0].fcm_token !== '') {
                this.api.sendNotification(this.util.translate('New Order Received '), this.util.translate('New Order'), this.drivers[0].fcm_token).subscribe((data) => {
                    console.log('send notifications', data);
                }, error => {
                    console.log(error);
                });
            }
            console.log('data', data);
            const msg = this.util.translate('Your Order is ') + value + this.util.translate(' By ') + this.restName;
            this.api.sendNotification(msg, 'Order ' + value, this.token).subscribe((data) => {
                console.log(data);
                this.util.hide();
                this.navCtrl.back();
            }, error => {
                this.util.hide();
                console.log('err', error);
            });
            this.util.publishNewAddress('hello');
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: this.util.translate('success'),
                text: this.util.translate('Order status changed to ') + value,
                icon: 'success',
                timer: 2000,
                backdrop: false,
                background: 'white'
            });
            this.navCtrl.back();
        }).catch(error => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
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
    getDrivers() {
        this.api.getDrivers().then((data) => {
            console.log('drivers', data);
            this.dummyDriver = [];
            this.drivers = [];
            if (data && data.length > 0) {
                data.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const distance = yield this.distanceInKmBetweenEarthCoordinates(this.userLat, this.userLng, parseFloat(element.lat), parseFloat(element.lng));
                    console.log(distance);
                    // if (element.current === 'active' && element.status === 'active') {
                    element.distance = distance ? distance : 10;
                    this.dummyDriver.push(element);
                    // }
                }));
                data.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const distance = yield this.distanceInKmBetweenEarthCoordinates(this.userLat, this.userLng, parseFloat(element.lat), parseFloat(element.lng));
                    if (distance < 10 && element.current === 'active' && element.status === 'active') {
                        this.drivers.push(element);
                    }
                }));
            }
        }).catch(error => {
            console.log(error);
        });
    }
    getOrder() {
        this.api.getOrderById(this.id).then((data) => {
            this.loaded = true;
            console.log(data);
            if (data) {
                this.grandTotal = data.grandTotal;
                this.orders = JSON.parse(data.order);
                this.serviceTax = data.serviceTax;
                this.status = data.status;
                this.time = data.time;
                this.total = data.total;
                this.address = data.vid.address;
                this.restName = data.vid.name;
                this.deliveryAddress = data.address.address;
                if (data && data.vid && data.vid.lat) {
                    this.userLat = data.vid.lat;
                    this.userLng = data.vid.lng;
                }
                this.userName = data.uid.fullname;
                this.phone = data.uid.phone;
                this.token = data.uid.fcm_token;
                this.userEmail = data.uid.email;
                this.paid = data.paid;
                this.userPic = data.uid && data.uid.cover ? data.uid.cover : 'assets/imgs/user.jpg';
                console.log('this', this.orders);
                this.getDrivers();
                this.orders.forEach(element => {
                    console.log('ele,me=====>', element);
                    if (element && element.selectedItem && element.selectedItem.length > 0) {
                        console.log('======>>');
                        let items = '';
                        element.selectedItem.forEach((subItems, j) => {
                            const subDatas = [];
                            items = '<div style="border-bottom:1px dashed lightgray"> <p style="font-weight:bold"> ' + element.name + ' X ' +
                                element.selectedItem[j].total + '##ITEWS## </p></div>';
                            subItems.item.forEach((addons, k) => {
                                subDatas.push('<div style="display:flex;flex-direction:row;justify-content:space-between"> <p style="font-weight:bold;color:gray;margin:0px;"> -' +
                                    addons.name + '</p> <p style="font-weight:bold;color:gray;margin:0px;">' + this.getCurrency() + ' ' + addons.value + '</p> </div> ');
                            });
                            const subOrders = subDatas.join('');
                            const info = items.replace('##ITEWS##', subOrders);
                            this.orderString.push(info);
                        });
                        console.log('news --->>', items);
                    }
                    else {
                        const items = '<div style="border-bottom:1px dashed lightgray;display:flex;flex-direction:row;justify-content:space-between"> <p style="font-weight:bold"> ' +
                            element.name + ' X ' +
                            element.quantiy + ' </p> <p style="font-weight:bold">' + element.price + this.getCurrency() + '</p> </div>';
                        this.orderString.push(items);
                    }
                });
                console.log('orderstring', this.orderString);
            }
        }, error => {
            this.loaded = true;
            this.util.errorToast(this.util.translate('Something went wrong'));
            console.log('error in orders', error);
        }).catch(error => {
            this.loaded = true;
            this.util.errorToast(this.util.translate('Something went wrong'));
            console.log('error in order', error);
        });
    }
    goToTracker() {
        const navData = {
            queryParams: {
                id: this.id
            }
        };
        this.router.navigate(['/tracker'], navData);
    }
    changeStatus(value) {
        if (value === 'accepted') {
            console.log('accepted', this.drivers);
            this.presentModal();
        }
        else {
            this.util.show(this.util.translate('Please wait'));
            this.api.updateOrderStatus(this.id, value).then((data) => {
                console.log('data', data);
                const msg = this.util.translate('Your Order is ') + value + this.util.translate(' By ') + this.restName;
                this.api.sendNotification(msg, 'Order ' + value, this.token).subscribe((data) => {
                    console.log(data);
                    this.util.hide();
                    this.navCtrl.back();
                }, error => {
                    this.util.hide();
                    console.log('err', error);
                });
                this.util.publishNewAddress('hello');
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: this.util.translate('success'),
                    text: this.util.translate('Order status changed to ') + value,
                    icon: 'success',
                    timer: 2000,
                    backdrop: false,
                    background: 'white'
                });
                this.navCtrl.back();
            }).catch(error => {
                console.log(error);
                this.util.hide();
                this.util.errorToast(this.util.translate('Something went wrong'));
            });
        }
    }
    changeOrderStatus() {
        console.log('order status', this.changeStatusOrder);
        if (this.changeStatusOrder) {
            this.changeStatus(this.changeStatusOrder);
        }
    }
    call() {
        if (this.phone) {
            window.open('tel:' + this.phone);
        }
        else {
            this.util.errorToast(this.util.translate('Number not found'));
        }
    }
    email() {
        if (this.userEmail) {
            window.open('mailto:' + this.userEmail);
        }
        else {
            this.util.errorToast(this.util.translate('Email not found'));
        }
    }
    printOrder() {
        const options = {
            name: 'Foodie Order Summary',
            duplex: false,
        };
        const order = this.orderString.join('');
        const content = '<div style="padding: 20px;display: flex;flex-direction: column;"> <img src="assets/icon.png" style="text-align: center; height: 100px;width: 100px;" alt=""> <h2 style="text-align: center;">Foodies Order Summary</h2> <p style="float: left;margin:0px;"><b>' +
            this.id + '</b></p> <p style="float: left;margin:0px;"><b>' + this.restName + '</b></p> <p style="float: left;margin:0px;"><b>' + this.userName + '</b></p> <p style="float: left;margin:0px;">' + this.time + ' </p> <p style="font-weight: bold;margin:0px;">' + this.util.translate('ITEMS') + '</p> ' + order + ' <p style="border-bottom: 1px solid black;margin:0px;"><span style="float: left;font-weight: bold;">' + this.util.translate('SubTotal') + '</span> <span style="float: right;font-weight: bold;">' + this.getCurrency() + this.total + '</span> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Delivery Charge') + '</span> <span style="float: right;font-weight: bold;">' + this.getCurrency() + '5</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Service Tax') + '</span> <span style="float: right;font-weight: bold;">' + this.getCurrency() +
            this.serviceTax + '</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Total') + '</span> <span style="float: right;font-weight: bold;">' + this.getCurrency() + this.grandTotal + '</span> </p> <h1 style="text-align: center;text-transform: uppercase;">' + this.paid + '</h1> </div>';
        this.printer.print(content, options).then((data) => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
OrderDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__["Printer"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
OrderDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./order-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./order-detail.page.scss */ "./src/app/pages/order-detail/order-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_8__["Printer"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])
], OrderDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-detail-order-detail-module-es2015.js.map