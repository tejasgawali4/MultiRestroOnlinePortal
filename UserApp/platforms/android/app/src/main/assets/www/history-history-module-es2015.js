(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'Recent Orders' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mainContent\">\n    <div *ngFor=\"let item of dummy\">\n      <ion-list>\n        <ion-item>\n          <ion-thumbnail slot=\"start\">\n            <ion-skeleton-text animated></ion-skeleton-text>\n          </ion-thumbnail>\n          <ion-label>\n            <h3>\n              <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n            </h3>\n            <p>\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n            </p>\n            <p>\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n            </p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class=\"noData\" *ngIf=\"!haveItems && !dummy?.length\">\n      <img src=\"assets/runing.gif\" alt=\"\" class=\"noDataImg\">\n      <ion-label>{{\"You haven't ordered anything\" | translate}}</ion-label>\n      <ion-label>{{'Please order your favourite food' | translate}} </ion-label>\n      <ion-button (click)=\"getCart()\" expand=\"block\" fill=\"outline\">\n        {{'Browse your favourite restaurants' | translate}}\n      </ion-button>\n    </div>\n    <div class=\"haveData\">\n\n      <div class=\"card_div\" *ngFor=\"let item of myOrders\" (click)=\"goToHistoryDetail(item.id)\">\n\n        <div class=\"resto_detail\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url('+item.vid.cover+')'\"></div>\n          <div style=\"margin-left: 20px;\">\n            <ion-label class=\"res_name\">{{item.vid.name}}</ion-label>\n            <ion-label class=\"res_location\">\n              {{item.vid.address}}\n            </ion-label>\n          </div>\n        </div>\n\n        <div class=\"line_div\"></div>\n        <div class=\"order_detail\">\n          <ion-label class=\"head_gray\">{{'ITEMS' | translate}}</ion-label>\n          <div class=\"small_lbl\">\n            <span *ngFor=\"let order of item.order;let ol = index\">\n              <div *ngIf=\"!order.selectedItem || !order.selectedItem.length\" class=\"border_bottom\">\n                {{order.name}} X {{order.quantiy}} <span *ngIf=\"ol !=item.order.length\">,</span>\n              </div>\n\n              <div *ngFor=\"let subItems of order.selectedItem;let j = index\" class=\"subNames\">\n                <ion-label class=\"food_title\">{{order.name}} X {{order.selectedItem[j].total}}</ion-label>\n                <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n                  <p class=\"sub_name\">\n                    - {{addods.name}}\n                  </p>\n                  <p class=\"sub_name\">\n                    {{getCurrency()}} {{addods.value}}\n                  </p>\n                </div>\n              </div>\n            </span>\n          </div>\n          <ion-label class=\"head_gray\">{{'ORDERED ON' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{getDate(item.time)}} </ion-label>\n          <ion-label class=\"head_gray\">{{'TOTAL AMOUNT' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\"> {{getCurrency()}} {{item.grandTotal}}</ion-label>\n        </div>\n\n        <div class=\"line_div\"></div>\n\n        <div class=\"status_detail\" *ngIf=\"item.status =='completed' || item.status == 'delivered'\">\n          <div class=\"deliver_div\">\n            {{'Delivered' | translate}}\n          </div>\n        </div>\n        <div class=\"status_detail\" *ngIf=\"item.status =='rejected' || item.status == 'cancel'\">\n          <div class=\"deliver_div\">\n            {{'Your Order is' | translate}} {{item.status}}\n          </div>\n        </div>\n        <div class=\"status_detail\"\n          *ngIf=\"item.status =='created' || item.status =='ongoing' || item.status === 'accepted'\">\n          <div class=\"deliver_div\">\n            {{'Your Order is' | translate}} {{item.status}}\n          </div>\n          <div class=\"repeat_div\" style=\"color: green;\">\n            <ion-icon name=\"map-outline\"></ion-icon>{{'Track Order' | translate}}\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/history/history-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/history/history-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageRoutingModule", function() { return HistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");




const routes = [
    {
        path: '',
        component: _history_page__WEBPACK_IMPORTED_MODULE_3__["HistoryPage"]
    }
];
let HistoryPageRoutingModule = class HistoryPageRoutingModule {
};
HistoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/history/history.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.module.ts ***!
  \*************************************************/
/*! exports provided: HistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function() { return HistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-routing.module */ "./src/app/pages/history/history-routing.module.ts");
/* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let HistoryPageModule = class HistoryPageModule {
};
HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _history_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistoryPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })
], HistoryPageModule);



/***/ }),

/***/ "./src/app/pages/history/history.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/history/history.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainContent {\n  padding: 20px;\n}\n.mainContent ion-label {\n  display: block !important;\n}\n.mainContent .noData {\n  text-align: center;\n  margin-top: 30%;\n}\n.mainContent .noData .noDataImg {\n  width: 100%;\n}\n.mainContent .haveData .myOrders {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  padding: 10px;\n}\n.mainContent .haveData .myOrders .restInfo .cover {\n  height: 50px;\n  width: 50px;\n  border-radius: 5px;\n  position: absolute;\n  left: 20px;\n}\n.mainContent .haveData .myOrders .restInfo .restName {\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: black;\n  text-transform: capitalize;\n  display: block;\n}\n.mainContent .haveData .myOrders .restInfo .deliveryAddress {\n  font-size: 0.7rem;\n  display: block;\n  color: gray;\n}\n.mainContent .haveData .card_div {\n  width: 100%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 0.5px solid lightgray;\n}\n.mainContent .haveData .card_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.mainContent .haveData .card_div .resto_detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.mainContent .haveData .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 5px;\n  min-width: 50px;\n}\n.mainContent .haveData .card_div .resto_detail .res_name {\n  font-weight: 600;\n}\n.mainContent .haveData .card_div .resto_detail .res_location {\n  color: lightgray;\n  font-size: 14px;\n}\n.mainContent .haveData .card_div .order_detail .head_gray {\n  color: lightgray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.mainContent .haveData .card_div .order_detail .small_lbl {\n  font-size: 12px;\n  font-weight: 600;\n}\n.mainContent .haveData .card_div .order_detail .border_bottom {\n  border-bottom: 1px dashed lightgray;\n  padding: 5px 0px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.mainContent .haveData .card_div .order_detail .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.mainContent .haveData .card_div .order_detail .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.mainContent .haveData .card_div .order_detail .subNames .flex_titles {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.mainContent .haveData .card_div .order_detail .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.mainContent .haveData .card_div .status_detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  color: lightgray;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGlzdG9yeS9FOlxcVEVKQVMgSU1QXFxURUpBUyBHQVdBTElcXEFwcHNGcmVlbGFjaW5nXFxpb25pYzVmb29kYXBwLTEwXFxVc2VyQXBwL3NyY1xcYXBwXFxwYWdlc1xcaGlzdG9yeVxcaGlzdG9yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7QURBSTtFQUNJLHlCQUFBO0FDRVI7QURBSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0VSO0FEQVE7RUFDSSxXQUFBO0FDRVo7QURFUTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQVo7QURFZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQXBCO0FERWdCO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNBcEI7QURFZ0I7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQXBCO0FETVE7RUFDSSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDSlo7QURNWTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSmhCO0FETVk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSmhCO0FETWdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNKcEI7QURPZ0I7RUFDRSxnQkFBQTtBQ0xsQjtBRE9nQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0xwQjtBRHNCZ0I7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BCcEI7QURzQmdCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDcEJwQjtBRHNCZ0I7RUFDSSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDcEJwQjtBRHNCZ0I7RUFDSSxtQ0FBQTtFQUNBLG1CQUFBO0FDcEJwQjtBRHFCb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNuQnhCO0FEcUJvQjtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNuQnhCO0FEb0J3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2xCNUI7QUR1Qlk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDckJoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkNvbnRlbnR7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5ub0RhdGF7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMzAlO1xuICAgICAgICBcbiAgICAgICAgLm5vRGF0YUltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5oYXZlRGF0YXtcbiAgICAgICAgLm15T3JkZXJze1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIC5yZXN0SW5mb3tcbiAgICAgICAgICAgICAgICAuY292ZXJ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVzdE5hbWV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZWxpdmVyeUFkZHJlc3N7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZF9kaXZ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgICAgICAgICAubGluZV9kaXZ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yZXN0b19kZXRhaWx7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAuYmFja19pbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAucmVzX25hbWV7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwOyAgXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAucmVzX2xvY2F0aW9ue1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAub3JkZXJfZGV0YWlse1xuICAgICAgICAgICAgLy8gICAgIC5oZWFkX2dyYXl7XG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIC8vICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgLy8gICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLm9yZGVyX2RldGFpbHtcbiAgICAgICAgICAgICAgICAuaGVhZF9ncmF5e1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvcmRlcl9ib3R0b217XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuc3ViTmFtZXN7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICAgICAgICAgICAgICAuZm9vZF90aXRsZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5mbGV4X3RpdGxlc3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLnN1Yl9uYW1le1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RhdHVzX2RldGFpbHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgICAgICAgICAgLy8gLnJhdGVfbGJse1xuICAgICAgICAgICAgICAgIC8vICAgICBiYWNrZ3JvdW5kOiAjYjJkOWIyO1xuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjN2JkYjdiO1xuICAgICAgICAgICAgICAgIC8vICAgICBwYWRkaW5nOiAwcHggN3B4O1xuICAgICAgICAgICAgICAgIC8vICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAvLyAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIubWFpbkNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLm1haW5Db250ZW50IGlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG4ubWFpbkNvbnRlbnQgLm5vRGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzAlO1xufVxuLm1haW5Db250ZW50IC5ub0RhdGEgLm5vRGF0YUltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAubXlPcmRlcnMge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLm15T3JkZXJzIC5yZXN0SW5mbyAuY292ZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjBweDtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLm15T3JkZXJzIC5yZXN0SW5mbyAucmVzdE5hbWUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAubXlPcmRlcnMgLnJlc3RJbmZvIC5kZWxpdmVyeUFkZHJlc3Mge1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiBncmF5O1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAuY2FyZF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IC5saW5lX2RpdiB7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLnJlc19uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLnJlc19sb2NhdGlvbiB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLmhlYWRfZ3JheSB7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLmJvcmRlcl9ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluQ29udGVudCAuaGF2ZURhdGEgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLnN1Yk5hbWVzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zdWJOYW1lcyAuZm9vZF90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zdWJOYW1lcyAuZmxleF90aXRsZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFpbkNvbnRlbnQgLmhhdmVEYXRhIC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zdWJOYW1lcyAuZmxleF90aXRsZXMgLnN1Yl9uYW1lIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLm1haW5Db250ZW50IC5oYXZlRGF0YSAuY2FyZF9kaXYgLnN0YXR1c19kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/history/history.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/history/history.page.ts ***!
  \***********************************************/
/*! exports provided: HistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function() { return HistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__);







let HistoryPage = class HistoryPage {
    constructor(api, util, router, adb) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.adb = adb;
        this.haveItems = false;
        this.myOrders = [];
        this.dummy = Array(50);
        if (localStorage.getItem('uid')) {
            this.adb.collection('orders', ref => ref.where('userId', '==', localStorage.getItem('uid'))).snapshotChanges().subscribe(data => {
                if (data) {
                    this.getMyOrders();
                }
            });
        }
        this.util.subscribeLoggedIn().subscribe(data => {
            this.getMyOrders();
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.validate();
        });
    }
    getMyOrders() {
        this.api.getMyOrders(localStorage.getItem('uid')).then((data) => {
            console.log('my orders', data);
            if (data && data.length) {
                this.haveItems = true;
                data.forEach(element => {
                    element.time = new Date(element.time);
                });
                data.sort((a, b) => b.time - a.time);
                this.myOrders = data;
                this.myOrders.forEach(element => {
                    element.order = JSON.parse(element.order);
                });
                console.log('my order==>', this.myOrders);
            }
            this.dummy = [];
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    validate() {
        this.api.checkAuth().then((user) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (user) {
                localStorage.setItem('uid', user.uid);
                this.getMyOrders();
            }
            else {
                this.router.navigate(['login']);
            }
        })).catch(error => {
            console.log(error);
        });
    }
    getCart() {
        this.router.navigate(['/tabs']);
    }
    goToHistoryDetail(orderId) {
        const navData = {
            queryParams: {
                id: orderId
            }
        };
        this.router.navigate(['/history-detail'], navData);
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(date).format('llll');
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
HistoryPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
];
HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        angularfire2_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
], HistoryPage);



/***/ })

}]);
//# sourceMappingURL=history-history-module-es2015.js.map