function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOrdersOrdersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>{{'Our Orders' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"segment_div\">\n      <ion-label [class.active]=\"seg_id == 1\" (click)=\"onClick(1)\">{{'New Order' | translate}}</ion-label>\n      <ion-label [class.active]=\"seg_id == 2\" (click)=\"onClick(2)\">{{'Ongoing Order' | translate}}</ion-label>\n      <ion-label [class.active]=\"seg_id == 3\" (click)=\"onClick(3)\">{{'Past Order' | translate}}</ion-label>\n    </div>\n\n    <div class=\"centent_div\" *ngIf=\"seg_id == 1\">\n      <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !newOrders?.length\">{{'No New Orders' | translate}}</h2>\n      <ion-item *ngFor=\"let item of dummy\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      <div class=\"card_div\" *ngFor=\"let item of newOrders\" (click)=\"goToOrderDetail(item.id)\">\n\n        <div class=\"resto_detail\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url('+getProfilePic(item.uid)+')'\"></div>\n          <div style=\"margin-left: 10px;\">\n            <ion-label class=\"res_name\">{{item.uid.fullname}}</ion-label>\n            <ion-label class=\"res_location\">{{item.time}}</ion-label>\n            <ion-label class=\"res_location\">{{item.id}}</ion-label>\n          </div>\n\n          <!-- <div class=\"order_id\">\n            <ion-label>{{'Order ID' | translate}}</ion-label>\n            <ion-label style=\"font-size:.8rem\">{{item.id}}</ion-label>\n          </div> -->\n        </div>\n\n        <div class=\"line_div\"></div>\n\n        <div class=\"order_detail\">\n          <ion-label class=\"head_gray\">{{'ITEMS' | translate}}</ion-label>\n          <!-- <div class=\"small_lbl\">\n            <ion-label *ngFor=\"let order of item.order\">{{order.quantiy}} X {{order.name}} <span\n                class=\"prize\">{{getCurrency()}}{{order.price}}</span></ion-label>\n          </div> -->\n          <div class=\"small_lbl\">\n            <span *ngFor=\"let order of item.order;let ol = index\">\n              <div *ngIf=\"!order.selectedItem || !order.selectedItem.length\" class=\"border_bottom\">\n                {{order.name}} X {{order.quantiy}} <span *ngIf=\"ol !=item.order.length\">,</span>\n              </div>\n\n              <div *ngFor=\"let subItems of order.selectedItem;let j = index\" class=\"subNames\">\n                <ion-label class=\"food_title\">{{order.name}} X {{order.selectedItem[j].total}}</ion-label>\n                <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n                  <p class=\"sub_name\">\n                    - {{addods.name}}\n                  </p>\n                  <p class=\"sub_name\">\n                    {{getCurrency()}} {{addods.value}}\n                  </p>\n                </div>\n              </div>\n            </span>\n          </div>\n          <ion-label class=\"head_gray\">{{'ORDERED ON' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{item.time}} </ion-label>\n          <ion-label class=\"head_gray\">{{'TOTAL AMOUNT' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{getCurrency()}}{{item.grandTotal}}</ion-label>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"centent_div\" *ngIf=\"seg_id == 2\">\n      <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !onGoingOrders?.length\">{{'No New Orders' | translate}}</h2>\n      <ion-item *ngFor=\"let item of dummy\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      <div class=\"card_div\" *ngFor=\"let item of onGoingOrders\" (click)=\"goToOrderDetail(item.id)\">\n\n        <div class=\"resto_detail\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url('+getProfilePic(item.uid)+')'\"></div>\n          <div style=\"margin-left: 10px;\">\n            <ion-label class=\"res_name\">{{item.uid.fullname}}</ion-label>\n            <ion-label class=\"res_location\">{{item.time}}</ion-label>\n            <ion-label class=\"res_location\">{{item.id}}</ion-label>\n          </div>\n\n          <!-- <div class=\"order_id\">\n            <ion-label>{{'Order ID' | translate}}</ion-label>\n            <ion-label style=\"font-size:.8rem\">{{item.id}}</ion-label>\n          </div> -->\n        </div>\n\n        <div class=\"line_div\"></div>\n\n        <div class=\"order_detail\">\n          <ion-label class=\"head_gray\">{{'ITEMS' | translate}}</ion-label>\n          <!-- <div class=\"small_lbl\">\n            <ion-label *ngFor=\"let order of item.order\">{{order.quantiy}} X {{order.name}} <span\n                class=\"prize\">{{getCurrency()}}{{order.price}}</span></ion-label>\n          </div> -->\n          <div class=\"small_lbl\">\n            <span *ngFor=\"let order of item.order;let ol = index\">\n              <div *ngIf=\"!order.selectedItem || !order.selectedItem.length\" class=\"border_bottom\">\n                {{order.name}} X {{order.quantiy}} <span *ngIf=\"ol !=item.order.length\">,</span>\n              </div>\n\n              <div *ngFor=\"let subItems of order.selectedItem;let j = index\" class=\"subNames\">\n                <ion-label class=\"food_title\">{{order.name}} X {{order.selectedItem[j].total}}</ion-label>\n                <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n                  <p class=\"sub_name\">\n                    - {{addods.name}}\n                  </p>\n                  <p class=\"sub_name\">\n                    {{getCurrency()}} {{addods.value}}\n                  </p>\n                </div>\n              </div>\n            </span>\n          </div>\n          <ion-label class=\"head_gray\">{{'ORDERED ON' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{item.time}} </ion-label>\n          <ion-label class=\"head_gray\">{{'TOTAL AMOUNT' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{getCurrency()}}{{item.grandTotal}}</ion-label>\n        </div>\n\n      </div>\n    </div>\n\n    <div class=\"centent_div\" *ngIf=\"seg_id == 3\">\n      <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !oldOrders?.length\">{{'No New Orders' | translate}}</h2>\n      <ion-item *ngFor=\"let item of dummy\">\n        <ion-thumbnail slot=\"start\">\n          <ion-skeleton-text animated></ion-skeleton-text>\n        </ion-thumbnail>\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n          </h3>\n          <p>\n            <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n          </p>\n          <p>\n            <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n          </p>\n        </ion-label>\n      </ion-item>\n      <div class=\"card_div\" *ngFor=\"let item of oldOrders\" (click)=\"goToOrderDetail(item.id)\">\n\n        <div class=\"resto_detail\">\n          <div class=\"back_image\" [style.backgroundImage]=\"'url('+getProfilePic(item.uid)+')'\"></div>\n          <div style=\"margin-left: 10px;\">\n            <ion-label class=\"res_name\">{{item.uid.fullname}}</ion-label>\n            <ion-label class=\"res_location\">{{item.time}}</ion-label>\n            <ion-label class=\"res_location\">{{item.id}}</ion-label>\n          </div>\n\n          <!-- <div class=\"order_id\">\n            <ion-label>{{'Order ID' | translate}}</ion-label>\n            <ion-label style=\"font-size:.8rem\">{{item.id}}</ion-label>\n          </div> -->\n        </div>\n\n        <div class=\"line_div\"></div>\n\n        <div class=\"order_detail\">\n          <ion-label class=\"head_gray\">{{'ITEMS' | translate}}</ion-label>\n          <!-- <div class=\"small_lbl\">\n            <ion-label *ngFor=\"let order of item.order\">{{order.quantiy}} X {{order.name}} <span\n                class=\"prize\">{{getCurrency()}}{{order.price}}</span></ion-label>\n          </div> -->\n          <div class=\"small_lbl\">\n            <span *ngFor=\"let order of item.order;let ol = index\">\n              <div *ngIf=\"!order.selectedItem || !order.selectedItem.length\" class=\"border_bottom\">\n                {{order.name}} X {{order.quantiy}} <span *ngIf=\"ol !=item.order.length\">,</span>\n              </div>\n\n              <div *ngFor=\"let subItems of order.selectedItem;let j = index\" class=\"subNames\">\n                <ion-label class=\"food_title\">{{order.name}} X {{order.selectedItem[j].total}}</ion-label>\n                <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n                  <p class=\"sub_name\">\n                    - {{addods.name}}\n                  </p>\n                  <p class=\"sub_name\">\n                    {{getCurrency()}} {{addods.value}}\n                  </p>\n                </div>\n              </div>\n            </span>\n          </div>\n          <ion-label class=\"head_gray\">{{'ORDERED ON' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{item.time}} </ion-label>\n          <ion-label class=\"head_gray\">{{'TOTAL AMOUNT' | translate}}</ion-label>\n          <ion-label class=\"small_lbl\">{{getCurrency()}}{{item.grandTotal}}</ion-label>\n        </div>\n\n      </div>\n    </div>\n\n\n\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/orders/orders-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/orders/orders-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: OrdersPageRoutingModule */

  /***/
  function srcAppPagesOrdersOrdersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function () {
      return OrdersPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./orders.page */
    "./src/app/pages/orders/orders.page.ts");

    var routes = [{
      path: '',
      component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }];

    var OrdersPageRoutingModule = function OrdersPageRoutingModule() {
      _classCallCheck(this, OrdersPageRoutingModule);
    };

    OrdersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OrdersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/orders/orders.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/orders/orders.module.ts ***!
    \***********************************************/

  /*! exports provided: OrdersPageModule */

  /***/
  function srcAppPagesOrdersOrdersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function () {
      return OrdersPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./orders-routing.module */
    "./src/app/pages/orders/orders-routing.module.ts");
    /* harmony import */


    var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./orders.page */
    "./src/app/pages/orders/orders.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var OrdersPageModule = function OrdersPageModule() {
      _classCallCheck(this, OrdersPageModule);
    };

    OrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]],
      declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })], OrdersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/orders/orders.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/orders/orders.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOrdersOrdersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  width: 100%;\n}\n.main_content_div .segment_div {\n  display: flex;\n  margin-top: 20px;\n  border-bottom: 1px solid lightgray;\n  justify-content: space-around;\n}\n.main_content_div .segment_div ion-label {\n  color: gray;\n  padding-bottom: 10px;\n  width: 100%;\n  text-align: center;\n}\n.main_content_div .segment_div .active {\n  border-bottom: 1px solid red;\n}\n.main_content_div .centent_div {\n  padding: 20px;\n}\n.main_content_div .centent_div ion-label {\n  display: block;\n}\n.main_content_div .card_div {\n  width: 100%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 0.5px solid lightgray;\n}\n.main_content_div .card_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: lightgray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n  font-size: 0.6rem;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .card_div .order_detail .head_gray {\n  color: lightgray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div .order_detail .border_bottom {\n  border-bottom: 1px dashed lightgray;\n  padding: 5px 0px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .card_div .order_detail .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .card_div .order_detail .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .card_div .order_detail .subNames .flex_titles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.main_content_div .card_div .order_detail .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.main_content_div .card_div .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJzL0U6XFxURUpBUyBJTVBcXFRFSkFTIEdBV0FMSVxcQXBwc0ZyZWVsYWNpbmdcXGlvbmljNWZvb2RhcHAtMTBcXFJlc3RhdXJhbnRBcHAvc3JjXFxhcHBcXHBhZ2VzXFxvcmRlcnNcXG9yZGVycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL29yZGVycy9vcmRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FDQ1I7QURBUTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0VaO0FEQVE7RUFDSSw0QkFBQTtBQ0VaO0FERUk7RUFDSSxhQUFBO0FDQVI7QURFUTtFQUNJLGNBQUE7QUNBWjtBRElJO0VBQ0ksV0FBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0ZSO0FESVE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZaO0FESVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRlo7QURJWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNGaEI7QURLWTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0hkO0FES1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNIaEI7QURNWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDSmhCO0FES2dCO0VBQ0csaUJBQUE7QUNIbkI7QURTWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUGhCO0FEU1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNQaEI7QURVYTtFQUNHLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNSaEI7QURVWTtFQUNJLG1DQUFBO0VBQ0EsbUJBQUE7QUNSaEI7QURTZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNQcEI7QURTZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ1BwQjtBRFFvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ054QjtBRFdZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUNUaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlcnMvb3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLnNlZ21lbnRfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZle1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jZW50ZW50X2RpdntcbiAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2FyZF9kaXZ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgICAgIC5saW5lX2RpdntcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAucmVzdG9fZGV0YWlse1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBcbiAgICAgICAgICAgIC5iYWNrX2ltYWdle1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZXNfbmFtZXtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgIFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgLnJlc19sb2NhdGlvbntcbiAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9yZGVyX2lke1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjZyZW07XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub3JkZXJfZGV0YWlse1xuICAgICAgICAgICAgLmhlYWRfZ3JheXtcbiAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgIC5ib3JkZXJfYm90dG9te1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN1Yk5hbWVze1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICAgICAgLmZvb2RfdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mbGV4X3RpdGxlc3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICAuc3ViX25hbWV7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaXple1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zZWdtZW50X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuLm1haW5fY29udGVudF9kaXYgLnNlZ21lbnRfZGl2IGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5zZWdtZW50X2RpdiAuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jZW50ZW50X2RpdiB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2VudGVudF9kaXYgaW9uLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAubGluZV9kaXYge1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX25hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLnJlc3RvX2RldGFpbCAucmVzX2xvY2F0aW9uIHtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5yZXN0b19kZXRhaWwgLm9yZGVyX2lkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xuICBmb250LXNpemU6IDAuNnJlbTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAucmVzdG9fZGV0YWlsIC5vcmRlcl9pZCBpb24tbGFiZWwge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5oZWFkX2dyYXkge1xuICBjb2xvcjogbGlnaHRncmF5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLm9yZGVyX2RldGFpbCAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLmJvcmRlcl9ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4IDBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zdWJOYW1lcyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNhcmRfZGl2IC5vcmRlcl9kZXRhaWwgLnN1Yk5hbWVzIC5mb29kX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5zdWJOYW1lcyAuZmxleF90aXRsZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY2FyZF9kaXYgLm9yZGVyX2RldGFpbCAuc3ViTmFtZXMgLmZsZXhfdGl0bGVzIC5zdWJfbmFtZSB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jYXJkX2RpdiAub3JkZXJfZGV0YWlsIC5wcml6ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/orders/orders.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/orders/orders.page.ts ***!
    \*********************************************/

  /*! exports provided: OrdersPage */

  /***/
  function srcAppPagesOrdersOrdersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrdersPage", function () {
      return OrdersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var OrdersPage = /*#__PURE__*/function () {
      function OrdersPage(api, util, router, adb) {
        var _this = this;

        _classCallCheck(this, OrdersPage);

        this.api = api;
        this.util = util;
        this.router = router;
        this.adb = adb;
        this.seg_id = 1;
        this.newOrders = [];
        this.onGoingOrders = [];
        this.oldOrders = [];
        this.dummy = Array(50);

        if (localStorage.getItem('uid')) {
          this.adb.collection('orders', function (ref) {
            return ref.where('restId', '==', localStorage.getItem('uid'));
          }).snapshotChanges().subscribe(function (data) {
            console.log('---->', data);

            if (data) {
              _this.getOrders();
            }
          });
        }
      }

      _createClass(OrdersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('init');
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log('ngAfterViewInit');
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          console.log('enter');
          this.newOrders = [];
          this.onGoingOrders = [];
          this.oldOrders = [];
          this.dummy = Array(50);
          this.api.getVenueDetails(localStorage.getItem('uid')).then(function (data) {
            console.log(data);

            if (!data) {
              console.log('no data');

              _this2.util.showSimpleAlert('Please create your venue profile first');

              _this2.router.navigate(['venue-profile']);

              _this2.dummy = [];
            } else if (data.status === 'close') {
              _this2.router.navigate(['login']);

              localStorage.removeItem('uid');
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: _this2.util.translate('Error'),
                text: _this2.util.translate('Your are blocked please contact administrator'),
                icon: 'error',
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: _this2.util.translate('Need Help?'),
                backdrop: false,
                background: 'white'
              }).then(function (data) {
                if (data && data.value) {
                  _this2.router.navigate(['inbox']);
                }
              });
            } else {
              _this2.getOrders();
            }
          })["catch"](function (error) {
            _this2.dummy = [];
            console.log(error);

            _this2.util.errorToast(_this2.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "onClick",
        value: function onClick(val) {
          this.seg_id = val;
        }
      }, {
        key: "goToOrderDetail",
        value: function goToOrderDetail(ids) {
          console.log(ids);
          var navData = {
            queryParams: {
              id: ids
            }
          };
          this.router.navigate(['/order-detail'], navData);
        }
      }, {
        key: "getOrders",
        value: function getOrders() {
          var _this3 = this;

          console.log('vid', localStorage.getItem('uid'));
          this.dummy = Array(50);
          this.api.getMyOrders(localStorage.getItem('uid')).then(function (data) {
            _this3.dummy = [];
            console.log('orders', data);

            if (data && data.length > 0) {
              _this3.newOrders = [];
              _this3.onGoingOrders = [];
              _this3.oldOrders = [];
              data.forEach(function (element) {
                element.order = JSON.parse(element.order);

                if (element.status === 'created') {
                  _this3.newOrders.push(element);
                } else if (element.status === 'accepted' || element.status === 'ongoing') {
                  _this3.onGoingOrders.push(element);
                } else if (element.status === 'delivered' || element.status === 'cancel' || element.status === 'rejected') {
                  _this3.oldOrders.push(element);
                }
              });
              console.log('new order', _this3.newOrders);
            }
          }, function (err) {
            console.log(err);
            _this3.dummy = [];

            _this3.util.errorToast(_this3.util.translate('Something went wrong'));
          })["catch"](function (e) {
            console.log(e);
            _this3.dummy = [];

            _this3.util.errorToast(_this3.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "getProfilePic",
        value: function getProfilePic(item) {
          return item && item.cover ? item.cover : 'assets/imgs/user.jpg';
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          return this.util.getCurrecySymbol();
        }
      }]);

      return OrdersPage;
    }();

    OrdersPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }];
    };

    OrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orders',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orders.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orders.page.scss */
      "./src/app/pages/orders/orders.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])], OrdersPage);
    /***/
  }
}]);
//# sourceMappingURL=orders-orders-module-es5.js.map