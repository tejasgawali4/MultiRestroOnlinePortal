(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"mainContent\">\n    <div class=\"noData\" *ngIf=\"!cart?.length\">\n      <img src=\"assets/runing.gif\" alt=\"\" class=\"noDataImg\">\n      <ion-label>{{'Your Cart is Empty' | translate}}</ion-label>\n      <ion-label>{{'Please add your favourite food' | translate}} </ion-label>\n      <ion-button (click)=\"getCart()\" expand=\"block\" fill=\"outline\">\n        {{'Browse your favourite restaurants' | translate}}\n      </ion-button>\n    </div>\n    <div *ngIf=\"cart?.length\">\n      <ion-row style=\"padding-bottom: 10px; border-bottom: 1px solid lightgray;\">\n        <ion-col size=\"4\">\n          <div class=\"image_div\" [style.backgroundImage]=\"'url('+cover+')'\"></div>\n        </ion-col>\n        <ion-col size=\"8\">\n          <ion-label class=\"restname\">{{name}}</ion-label>\n          <ion-label class=\"address\">{{address}}</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <div *ngIf=\"cart?.length\">\n        <div class=\"card_div\">\n          <div class=\"card\" *ngFor=\"let item of cart;let i = index\">\n            <!-- Single -->\n            <div class=\"mainCat\" *ngIf=\"item.quantiy > 0 && !item.selectedItem?.length\">\n              <img [src]=\"item.cover\" class=\"image_div\" alt=\"\">\n              <div class=\"desc_div\">\n                <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n                <div class=\"ratting\">\n                  <ion-icon [name]=\"item.ratting >= 1 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 1 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 2 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 2 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 3 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 3 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 4 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 4 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 5 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 5 ? 'warning':'medium'\">\n                  </ion-icon>\n                  ({{totalRatting}} {{'Rattings' | translate}})\n                </div>\n                <ion-label class=\"small_lbl\">{{item.desc}}</ion-label>\n                <ion-label class=\"small_lbl\">{{getCurrency()}} {{item.price}}</ion-label>\n              </div>\n              <div class=\"cartBtn2\">\n                <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"remove\"></ion-icon>\n                </ion-button>\n                <p class=\"qunitity\">{{item.quantiy}}</p>\n                <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n\n            <!-- End Of Sinle -->\n\n\n            <!-- Add-ons Product -->\n            <div *ngIf=\"item.quantiy > 0 && item.selectedItem?.length\">\n              <div class=\"mainCat\" *ngFor=\"let subItems of item.selectedItem;let j = index\">\n                <img [src]=\"item.cover\" class=\"image_div\" alt=\"\">\n                <div class=\"desc_div2\">\n                  <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n                  <p *ngFor=\"let addods of subItems.item\" style=\"margin: 0px;font-size: 10px;color: black;\">\n                    - {{addods.name}}\n                    <span style=\"color: black;\"> {{getCurrency()}} {{addods.value}}</span>\n                  </p>\n                </div>\n                <div class=\"cartBtn2\">\n                  <ion-button (click)=\"removeQAddos(i,j)\" fill=\"clear\" size=\"small\">\n                    <ion-icon name=\"remove\"></ion-icon>\n                  </ion-button>\n                  <p class=\"qunitity\">{{subItems.total}}</p>\n                  <ion-button (click)=\"addQAddos(i,j)\" fill=\"clear\" size=\"small\">\n                    <ion-icon name=\"add\"></ion-icon>\n                  </ion-button>\n                </div>\n              </div>\n            </div>\n            <!-- End Of Add-ons Product -->\n          </div>\n        </div>\n        <div class=\"coupones\" (click)=\"openCoupon()\">\n          <img src=\"assets/discount.png\" class=\"badge\" />\n          <ion-label class=\"title\">{{'Apply coupon code' | translate}} <br>\n            <p *ngIf=\"coupon\">{{'Coupon Applied' | translate}}</p>\n          </ion-label>\n        </div>\n        <div class=\"billing\">\n          <div class=\"singleRow\">\n            <ion-label class=\"headerTitle\">{{'Item Total'}}</ion-label>\n            <ion-label class=\"price\">{{getCurrency()}} {{totalPrice}}</ion-label>\n          </div>\n          <div class=\"singleRow\">\n            <ion-label class=\"headerTitle\">{{'Taxes & Charges' | translate}}</ion-label>\n            <ion-label class=\"price\">{{getCurrency()}} {{serviceTax}}</ion-label>\n          </div>\n          <div class=\"singleRow\">\n            <ion-label class=\"headerTitle\">{{'Delivery Charges' | translate}}</ion-label>\n            <ion-label class=\"price\">{{getCurrency()}} {{deliveryCharge}}</ion-label>\n          </div>\n          <div class=\"singleRow\" *ngIf=\"coupon\">\n            <ion-label class=\"headerTitle\">{{'Dicount' | translate}}</ion-label>\n            <ion-label class=\"price\">{{getCurrency()}} {{dicount}}</ion-label>\n          </div>\n          <div class=\"singleRow\">\n            <ion-label class=\"headerTotal boldClass\">{{'Grand Total' | translate}}</ion-label>\n            <ion-label class=\"priceTotal boldClass\">{{getCurrency()}} {{grandTotal}}</ion-label>\n          </div>\n        </div>\n        <p class=\"instructions\">\n          {{'Orders once placed cannot be cancelled and are non-refundable' | translate}}\n        </p>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"cart?.length\">\n  <ion-toolbar color=\"primary\">\n    <ion-label color=\"light\">{{totalItem}} {{'ITEM' | translate}}</ion-label>\n    <ion-label color=\"light\">{{getCurrency()}}{{grandTotal}} {{'plus taxes' | translate}}</ion-label>\n    <ion-button (click)=\"checkout()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      {{'Checkout' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/cart/cart-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/cart/cart-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CartPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function() { return CartPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.page */ "./src/app/pages/cart/cart.page.ts");




const routes = [
    {
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }
];
let CartPageRoutingModule = class CartPageRoutingModule {
};
CartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CartPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cart/cart.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-routing.module */ "./src/app/pages/cart/cart-routing.module.ts");
/* harmony import */ var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart.page */ "./src/app/pages/cart/cart.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");








let CartPageModule = class CartPageModule {
};
CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })
], CartPageModule);



/***/ }),

/***/ "./src/app/pages/cart/cart.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/cart/cart.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  display: block;\n}\n\nion-toolbar {\n  padding: 0px 10px;\n  font-weight: bold;\n}\n\nion-toolbar ion-button {\n  font-weight: bold;\n}\n\n.mainContent {\n  padding: 20px 0px;\n}\n\n.mainContent ion-label {\n  display: block;\n}\n\n.mainContent .noData {\n  text-align: center;\n  margin-top: 30%;\n}\n\n.mainContent .noData .noDataImg {\n  width: 100%;\n}\n\n.mainContent .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100px;\n}\n\n.mainContent .restname {\n  margin-top: 10px;\n  font-size: 1rem;\n  color: black;\n  font-weight: bold;\n}\n\n.mainContent .address {\n  font-size: 0.8rem;\n  color: lightgray;\n}\n\n.mainContent .deliveryAddress {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px 10px 0px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n\n.mainContent .deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.mainContent .deliveryAddress .changeAddress {\n  color: var(--ion-color-primary);\n}\n\n.mainContent .card_div {\n  padding-top: 10px;\n}\n\n.mainContent .card_div .card {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 5px 10px;\n}\n\n.mainContent .card_div .card .mainCat {\n  display: -webkit-box;\n  display: flex;\n  margin-bottom: 5px;\n}\n\n.mainContent .card_div .card .mainCat .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 80px;\n  height: 80px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div {\n  margin-left: 20px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .heading_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .ratting {\n  font-size: 10px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div .small_lbl {\n  font-size: 10px;\n  color: black;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .desc_div2 {\n  margin-left: 20px;\n}\n\n.mainContent .card_div .card .mainCat .desc_div2 .heading_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn {\n  position: absolute;\n  right: 15px;\n  width: 60px;\n  background: white;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: -webkit-box;\n  display: flex;\n  background: white;\n}\n\n.mainContent .card_div .card .mainCat .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n\n.mainContent .coupones {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px 10px;\n  background: #f3f3f3;\n  margin-top: 10px;\n}\n\n.mainContent .coupones .badge {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .coupones .title {\n  padding: 0px 10px;\n  color: var(--ion-color-primary);\n}\n\n.mainContent .billing {\n  padding: 5px 10px;\n}\n\n.mainContent .billing .singleRow {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px 0px;\n  border-bottom: 1px dashed lightgray;\n}\n\n.mainContent .billing .singleRow .headerTitle {\n  font-size: 0.8rem;\n}\n\n.mainContent .billing .singleRow .boldClass {\n  font-weight: bold;\n}\n\n.mainContent .billing .singleRow .headerTotal {\n  font-size: 1rem;\n}\n\n.mainContent .billing .singleRow .priceTotal {\n  font-size: 1rem;\n}\n\n.mainContent .billing .singleRow .price {\n  font-size: 0.8rem;\n}\n\n.mainContent .instructions {\n  color: var(--ion-color-primary);\n  padding: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9FOlxcVEVKQVMgSU1QXFxURUpBUyBHQVdBTElcXEFwcHNGcmVlbGFjaW5nXFxpb25pYzVmb29kYXBwLTEwXFxVc2VyQXBwL3NyY1xcYXBwXFxwYWdlc1xcY2FydFxcY2FydC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEpBO0VBQ0ksY0FBQTtBQzdKSjs7QUQrSkE7RUFDRyxpQkFBQTtFQUNBLGlCQUFBO0FDNUpIOztBRDZKRztFQUNJLGlCQUFBO0FDM0pQOztBRDhKQTtFQUNJLGlCQUFBO0FDM0pKOztBRDRKSTtFQUNJLGNBQUE7QUMxSlI7O0FENEpJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDMUpSOztBRDRKUTtFQUNJLFdBQUE7QUMxSlo7O0FENkpLO0VBQ0csbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQzNKUjs7QUQ2Skk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUMzSlI7O0FENkpJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQzNKUjs7QUQ2Skk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUMzSlI7O0FENEpRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUMxSlo7O0FENEpRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUMxSlo7O0FENEpRO0VBQ0ksK0JBQUE7QUMxSlo7O0FENkpPO0VBQ0ksaUJBQUE7QUMzSlg7O0FENEpZO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0FDMUpaOztBRDJKWTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0FDekpoQjs7QUQwSmdCO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3hKcEI7O0FEMEpnQjtFQUNJLGlCQUFBO0FDeEpwQjs7QUR5Sm9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3ZKeEI7O0FEeUpvQjtFQUNJLGVBQUE7QUN2SnhCOztBRHlKb0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3ZKeEI7O0FEMkpnQjtFQUNJLGlCQUFBO0FDekpwQjs7QUQwSm9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3hKeEI7O0FEMkpnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ3pKcEI7O0FEMkpnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQ3pKcEI7O0FEMEpvQjtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ3hKeEI7O0FEOEpJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDNUpSOztBRDZKUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDM0paOztBRDZKUTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7QUMzSlo7O0FEOEpJO0VBQ0ksaUJBQUE7QUM1SlI7O0FENkpRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7QUMzSlo7O0FENEpZO0VBQ0ksaUJBQUE7QUMxSmhCOztBRDRKWTtFQUNJLGlCQUFBO0FDMUpoQjs7QUQ0Slk7RUFDSSxlQUFBO0FDMUpoQjs7QUQ0Slk7RUFDSSxlQUFBO0FDMUpoQjs7QUQ0Slk7RUFDSSxpQkFBQTtBQzFKaEI7O0FEOEpJO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtBQzVKUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tbGFiZWx7XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyB9XG4vLyBpb24tdG9vbGJhciB7XG4vLyAgICBwYWRkaW5nOiAwcHggMTBweDtcbi8vICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgaW9uLWJ1dHRvbiB7XG4vLyAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICB9XG4vLyB9XG4vLyAubWFpbkNvbnRlbnR7XG4vLyAgICAgcGFkZGluZzogMjBweCAwcHg7XG4vLyAgICAgaW9uLWxhYmVse1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICB9XG4vLyAgICAgLm5vRGF0YXtcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgIFxuLy8gICAgICAgICAubm9EYXRhSW1ne1xuLy8gICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgIC5pbWFnZV9kaXZ7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbi8vICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIGhlaWdodDogMTAwcHg7XG4vLyAgICAgfVxuLy8gICAgIC5yZXN0bmFtZXtcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuLy8gICAgICAgICBjb2xvcjogYmxhY2s7XG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gICAgIH1cbi8vICAgICAuYWRkcmVzc3tcbi8vICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4vLyAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4vLyAgICAgfVxuLy8gICAgIC5kZWxpdmVyeUFkZHJlc3N7XG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICAgICAgLnBpbntcbi8vICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuLy8gICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIC5hZGRyZXNze1xuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuLy8gICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLmNoYW5nZUFkZHJlc3N7XG4vLyAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbi8vICAgICAgICAgfVxuLy8gICAgIH0gXG4vLyAgICAgICAgLmNhcmRfZGl2e1xuLy8gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbi8vICAgICAgICAgICAgIC5jYXJke1xuLy8gICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICAgIC5tYWluQ2F0e1xuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbi8vICAgICAgICAgICAgICAgICBwYWRkaW5nOjVweCAxMHB4O1xuLy8gICAgICAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4vLyAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgLmRlc2NfZGl2e1xuLy8gICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIC5yYXR0aW5ne1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIC5zbWFsbF9sYmx7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIC5jYXJ0QnRue1xuLy8gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIC5jYXJ0QnRuMntcbi8vICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuLy8gICAgICAgICAgICAgICAgICAgICAucXVuaXRpdHl7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICAuY291cG9uZXN7XG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICAgICAgLmJhZGdle1xuLy8gICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgLnRpdGxle1xuLy8gICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4vLyAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vICAgICAuYmlsbGluZ3tcbi8vICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4vLyAgICAgICAgIC5zaW5nbGVSb3d7XG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4vLyAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbi8vICAgICAgICAgICAgIC5oZWFkZXJUaXRsZXtcbi8vICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIC5ib2xkQ2xhc3N7XG4vLyAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAuaGVhZGVyVG90YWx7XG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgLnByaWNlVG90YWx7XG4vLyAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgLnByaWNle1xuLy8gICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIC5pbnN0cnVjdGlvbnN7XG4vLyAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuLy8gICAgIH1cbi8vIH1cblxuXG5pb24tbGFiZWx7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5pb24tdG9vbGJhciB7XG4gICBwYWRkaW5nOiAwcHggMTBweDtcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICB9XG59XG4ubWFpbkNvbnRlbnR7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm5vRGF0YXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XG4gICAgICAgIFxuICAgICAgICAubm9EYXRhSW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuICAgIC5yZXN0bmFtZXtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuYWRkcmVzc3tcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgfVxuICAgIC5kZWxpdmVyeUFkZHJlc3N7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgLnBpbntcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5hZGRyZXNze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYW5nZUFkZHJlc3N7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbiAgICAgICAgfVxuICAgIH0gXG4gICAgICAgLmNhcmRfZGl2e1xuICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIC5jYXJke1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIHBhZGRpbmc6NXB4IDEwcHg7XG4gICAgICAgICAgICAubWFpbkNhdHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAuaW1hZ2VfZGl2e1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kZXNjX2RpdntcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIC5oZWFkaW5nX2xibHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAucmF0dGluZ3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuc21hbGxfbGJse1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGVzY19kaXYye1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRpbmdfbGJse1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jYXJ0QnRue1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jYXJ0QnRuMntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAucXVuaXRpdHl7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY291cG9uZXN7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgLmJhZGdle1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmlsbGluZ3tcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIC5zaW5nbGVSb3d7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgIC5oZWFkZXJUaXRsZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib2xkQ2xhc3N7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaGVhZGVyVG90YWx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNlVG90YWx7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnByaWNle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5pbnN0cnVjdGlvbnN7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIH1cbn1cblxuIiwiaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubWFpbkNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4IDBweDtcbn1cbi5tYWluQ29udGVudCBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluQ29udGVudCAubm9EYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMCU7XG59XG4ubWFpbkNvbnRlbnQgLm5vRGF0YSAubm9EYXRhSW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWFpbkNvbnRlbnQgLmltYWdlX2RpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG59XG4ubWFpbkNvbnRlbnQgLnJlc3RuYW1lIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1haW5Db250ZW50IC5hZGRyZXNzIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGNvbG9yOiBsaWdodGdyYXk7XG59XG4ubWFpbkNvbnRlbnQgLmRlbGl2ZXJ5QWRkcmVzcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHggMTBweCAwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluQ29udGVudCAuZGVsaXZlcnlBZGRyZXNzIC5waW4ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuLm1haW5Db250ZW50IC5kZWxpdmVyeUFkZHJlc3MgLmFkZHJlc3Mge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMHB4O1xufVxuLm1haW5Db250ZW50IC5kZWxpdmVyeUFkZHJlc3MgLmNoYW5nZUFkZHJlc3Mge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5pbWFnZV9kaXYge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYgLmhlYWRpbmdfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmRlc2NfZGl2IC5yYXR0aW5nIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYgLnNtYWxsX2xibCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmRlc2NfZGl2MiB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuZGVzY19kaXYyIC5oZWFkaW5nX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5jYXJ0QnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuY2FydEJ0bjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB3aWR0aDogODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5jYXJ0QnRuMiAucXVuaXRpdHkge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm1haW5Db250ZW50IC5jb3Vwb25lcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5tYWluQ29udGVudCAuY291cG9uZXMgLmJhZGdlIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cbi5tYWluQ29udGVudCAuY291cG9uZXMgLnRpdGxlIHtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4ubWFpbkNvbnRlbnQgLmJpbGxpbmcge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5tYWluQ29udGVudCAuYmlsbGluZyAuc2luZ2xlUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG59XG4ubWFpbkNvbnRlbnQgLmJpbGxpbmcgLnNpbmdsZVJvdyAuaGVhZGVyVGl0bGUge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5tYWluQ29udGVudCAuYmlsbGluZyAuc2luZ2xlUm93IC5ib2xkQ2xhc3Mge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluQ29udGVudCAuYmlsbGluZyAuc2luZ2xlUm93IC5oZWFkZXJUb3RhbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5tYWluQ29udGVudCAuYmlsbGluZyAuc2luZ2xlUm93IC5wcmljZVRvdGFsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm1haW5Db250ZW50IC5iaWxsaW5nIC5zaW5nbGVSb3cgLnByaWNlIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4ubWFpbkNvbnRlbnQgLmluc3RydWN0aW9ucyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/cart/cart.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/cart/cart.page.ts ***!
  \*****************************************/
/*! exports provided: CartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPage", function() { return CartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let CartPage = class CartPage {
    constructor(api, router, util, navCtrl, chMod) {
        this.api = api;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.chMod = chMod;
        this.haveItems = false;
        this.vid = '';
        this.totalPrice = 0;
        this.totalItem = 0;
        this.serviceTax = 0;
        this.deliveryCharge = 5;
        this.grandTotal = 0;
        this.deliveryAddress = '';
        this.totalRatting = 0;
        this.cart = [];
        this.util.getCouponObservable().subscribe(data => {
            if (data) {
                console.log(data);
                this.coupon = data;
                console.log('coupon', this.coupon);
                console.log(this.totalPrice);
                localStorage.setItem('coupon', JSON.stringify(data));
                this.calculate();
            }
        });
    }
    ngOnInit() {
    }
    getAddress() {
        const add = JSON.parse(localStorage.getItem('deliveryAddress'));
        if (add && add.address) {
            this.deliveryAddress = add.address;
        }
        return this.deliveryAddress;
    }
    getVenueDetails() {
        // Venue Details
        this.api.getVenueDetails(this.vid).then(data => {
            console.log(data);
            if (data) {
                this.name = data.name;
                this.descritions = data.descritions;
                this.cover = data.cover;
                this.address = data.address;
                this.time = data.time;
                this.totalRatting = data.totalRatting;
            }
        }, error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    validate() {
        this.api.checkAuth().then((user) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (user) {
                const id = yield localStorage.getItem('vid');
                console.log('id', id);
                if (id) {
                    this.vid = id;
                    this.getVenueDetails();
                    // const foods = await localStorage.getItem('foods');
                    // if (foods) {
                    //   this.foods = await JSON.parse(foods);
                    //   let recheck = await this.foods.filter(x => x.quantiy > 0);
                    //   console.log('vid', this.vid);
                    //   console.log('foods', this.foods);
                    //   if (this.vid && this.foods && recheck.length > 0) {
                    //     this.haveItems = true;
                    //     this.calculate();
                    //     this.chMod.detectChanges();
                    //   }
                    // }
                    const cart = localStorage.getItem('userCart');
                    try {
                        if (cart && cart !== 'null' && cart !== undefined && cart !== 'undefined') {
                            this.cart = JSON.parse(localStorage.getItem('userCart'));
                            this.calculate();
                        }
                        else {
                            this.cart = [];
                        }
                    }
                    catch (error) {
                        console.log(error);
                        this.cart = [];
                    }
                    console.log('========================>', this.cart);
                }
                else {
                    this.haveItems = false;
                    this.chMod.detectChanges();
                }
                this.chMod.detectChanges();
                return true;
            }
            else {
                this.router.navigate(['login']);
            }
        })).catch(error => {
            console.log(error);
        });
    }
    ionViewWillEnter() {
        this.validate();
    }
    getCart() {
        this.navCtrl.navigateRoot(['tabs/tab1']);
    }
    addQ(index) {
        this.cart[index].quantiy = this.cart[index].quantiy + 1;
        this.calculate();
    }
    removeQ(index) {
        if (this.cart[index].quantiy !== 0) {
            this.cart[index].quantiy = this.cart[index].quantiy - 1;
        }
        else {
            this.cart[index].quantiy = 0;
        }
        localStorage.setItem('userCart', JSON.stringify(this.foods));
        this.calculate();
    }
    addQAddos(i, j) {
        console.log(this.cart[i].selectedItem[j]);
        this.cart[i].selectedItem[j].total = this.cart[i].selectedItem[j].total + 1;
        this.calculate();
    }
    removeQAddos(i, j) {
        console.log(this.cart[i].selectedItem[j]);
        if (this.cart[i].selectedItem[j].total !== 0) {
            this.cart[i].selectedItem[j].total = this.cart[i].selectedItem[j].total - 1;
            if (this.cart[i].selectedItem[j].total === 0) {
                const newCart = [];
                this.cart[i].selectedItem.forEach(element => {
                    if (element.total > 0) {
                        newCart.push(element);
                    }
                });
                console.log('newCart', newCart);
                this.cart[i].selectedItem = newCart;
                this.cart[i].quantiy = newCart.length;
            }
        }
        this.calculate();
    }
    /// NEW calc
    calculate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.foods);
            // new
            let item = this.cart.filter(x => x.quantiy > 0);
            this.cart.forEach(element => {
                if (element.quantiy === 0) {
                    element.selectedItem = [];
                }
            });
            console.log('item=====>>', item);
            this.totalPrice = 0;
            this.totalItem = 0;
            this.cart = [];
            console.log('cart emplth', this.cart, item);
            item.forEach(element => {
                this.totalItem = this.totalItem + element.quantiy;
                console.log('itemsss----->>>', element);
                if (element && element.selectedItem && element.selectedItem.length > 0) {
                    let subPrice = 0;
                    element.selectedItem.forEach(subItems => {
                        subItems.item.forEach(realsItems => {
                            subPrice = subPrice + (realsItems.value);
                        });
                        subPrice = subPrice * subItems.total;
                    });
                    this.totalPrice = this.totalPrice + subPrice;
                }
                else {
                    this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
                }
                this.cart.push(element);
            });
            localStorage.removeItem('userCart');
            console.log('carrrrrrr---->>>', this.cart);
            localStorage.setItem('userCart', JSON.stringify(this.cart));
            this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
            // new
            console.log('total item', this.totalItem);
            console.log('=====>', this.totalPrice);
            const tax = (parseFloat(this.totalPrice) * 21) / 100;
            this.serviceTax = tax.toFixed(2);
            console.log('tax->', this.serviceTax);
            this.deliveryCharge = 5;
            this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
            this.grandTotal = this.grandTotal.toFixed(2);
            if (this.coupon && this.coupon.code && this.totalPrice >= this.coupon.min) {
                if (this.coupon.type === '%') {
                    console.log('per');
                    function percentage(num, per) {
                        return (num / 100) * per;
                    }
                    const totalPrice = percentage(parseFloat(this.totalPrice).toFixed(2), this.coupon.discout);
                    console.log('============>>>>>>>>>>>>>>>', totalPrice);
                    this.dicount = totalPrice.toFixed(2);
                    this.totalPrice = parseFloat(this.totalPrice) - totalPrice;
                    // this.totalPrice = totalPrice;
                    console.log('------------>>>>', this.totalPrice);
                    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                    const tax = (parseFloat(this.totalPrice) * 21) / 100;
                    this.serviceTax = tax.toFixed(2);
                    console.log('tax->', this.serviceTax);
                    this.deliveryCharge = 5;
                    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                    this.grandTotal = this.grandTotal.toFixed(2);
                }
                else {
                    console.log('curreny');
                    const totalPrice = parseFloat(this.totalPrice) - this.coupon.discout;
                    console.log('============>>>>>>>>>>>>>>>', totalPrice);
                    this.dicount = this.coupon.discout;
                    this.totalPrice = totalPrice;
                    console.log('------------>>>>', this.totalPrice);
                    this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
                    const tax = (parseFloat(this.totalPrice) * 21) / 100;
                    this.serviceTax = tax.toFixed(2);
                    console.log('tax->', this.serviceTax);
                    this.deliveryCharge = 5;
                    this.grandTotal = parseFloat(this.totalPrice) + parseFloat(this.serviceTax) + parseFloat(this.deliveryCharge);
                    this.grandTotal = this.grandTotal.toFixed(2);
                }
            }
            else {
                console.log('not satisfied');
                this.coupon = null;
                localStorage.removeItem('coupon');
            }
            console.log('grand totla', this.grandTotal);
            if (this.totalItem === 0) {
                const lng = localStorage.getItem('language');
                const selectedCity = localStorage.getItem('selectedCity');
                yield localStorage.clear();
                localStorage.setItem('language', lng);
                localStorage.setItem('selectedCity', selectedCity);
                this.totalItem = 0;
                this.totalPrice = 0;
                this.haveItems = false;
            }
        });
    }
    // NEW calc
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
    changeAddress() {
        const navData = {
            queryParams: {
                from: 'cart'
            }
        };
        this.router.navigate(['choose-address'], navData);
    }
    checkout() {
        console.log('check', this.grandTotal < 0);
        if (this.grandTotal < 0) {
            this.util.errorToast(this.util.translate('Something went wrong'));
            return false;
        }
        const navData = {
            queryParams: {
                from: 'cart'
            }
        };
        this.router.navigate(['choose-address'], navData);
        // this.router.navigate(['payments']);
    }
    openCoupon() {
        const navData = {
            queryParams: {
                restId: this.vid,
                name: this.name,
                totalPrice: this.totalPrice
            }
        };
        this.router.navigate(['coupons'], navData);
    }
};
CartPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.page.scss */ "./src/app/pages/cart/cart.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], CartPage);



/***/ })

}]);
//# sourceMappingURL=cart-cart-module-es2015.js.map