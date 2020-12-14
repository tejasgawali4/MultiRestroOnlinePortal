function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-foods-foods-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/foods/foods.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/foods/foods.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFoodsFoodsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Foods' | translate}}</ion-title>\n    <ion-button (click)=\"addnew()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"mainContent\">\n    <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !categories?.length\">{{'No Foods Found' | translate}}</h2>\n    <ion-item *ngFor=\"let item of dummy\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <div *ngFor=\"let item of categories\">\n      <ion-label class=\"head_lbl\">{{item.name}}</ion-label>\n\n      <div *ngFor=\"let food of foods;\">\n        <span *ngIf=\"item.id == food.cid.id\" class=\"card_div\" (click)=\"foodsInfo(food)\">\n          <!-- <div class=\"back_image\" [style.backgroundImage]=\"'url('+food.cover+')'\"></div> -->\n          <img [src]=\"food.cover\" class=\"back_image\" alt=\"\">\n          <div class=\"content_div\">\n            <ion-label class=\"title\">{{food.name}}</ion-label>\n            <ion-label class=\"small\">{{food.desc}}</ion-label>\n            <ion-label *ngIf=\"food.veg\" class=\"veg\">Veg</ion-label>\n            <ion-label *ngIf=\"!food.veg\" class=\"nonVeg\">Non Veg</ion-label>\n\n            <ion-label class=\"title\">{{getCurrency()}} {{food.price}}</ion-label>\n          </div>\n        </span>\n      </div>\n\n    </div>\n\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/foods/foods-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/foods/foods-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: FoodsPageRoutingModule */

  /***/
  function srcAppPagesFoodsFoodsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodsPageRoutingModule", function () {
      return FoodsPageRoutingModule;
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


    var _foods_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./foods.page */
    "./src/app/pages/foods/foods.page.ts");

    var routes = [{
      path: '',
      component: _foods_page__WEBPACK_IMPORTED_MODULE_3__["FoodsPage"]
    }];

    var FoodsPageRoutingModule = function FoodsPageRoutingModule() {
      _classCallCheck(this, FoodsPageRoutingModule);
    };

    FoodsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FoodsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/foods/foods.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/foods/foods.module.ts ***!
    \*********************************************/

  /*! exports provided: FoodsPageModule */

  /***/
  function srcAppPagesFoodsFoodsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodsPageModule", function () {
      return FoodsPageModule;
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


    var _foods_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./foods-routing.module */
    "./src/app/pages/foods/foods-routing.module.ts");
    /* harmony import */


    var _foods_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./foods.page */
    "./src/app/pages/foods/foods.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var FoodsPageModule = function FoodsPageModule() {
      _classCallCheck(this, FoodsPageModule);
    };

    FoodsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _foods_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodsPageRoutingModule"]],
      declarations: [_foods_page__WEBPACK_IMPORTED_MODULE_6__["FoodsPage"]]
    })], FoodsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/foods/foods.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/foods/foods.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFoodsFoodsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainContent {\n  padding: 20px;\n}\n.mainContent .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  display: block;\n  margin-bottom: 10px;\n}\n.mainContent .card_div {\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n.mainContent .card_div .back_image {\n  width: 90px;\n  height: 90px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.mainContent .card_div .content_div {\n  padding-left: 20px;\n}\n.mainContent .card_div .content_div ion-label {\n  display: flex;\n}\n.mainContent .card_div .content_div .title {\n  font-weight: 600;\n  font-size: 16px;\n}\n.mainContent .card_div .content_div .small {\n  color: gray;\n  font-size: 14px;\n}\n.mainContent .card_div .content_div .veg {\n  color: green;\n}\n.mainContent .card_div .content_div .nonVeg {\n  color: red;\n}\n.mainContent .card_div .content_div .lonveg {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9vZHMvRTpcXFRFSkFTIElNUFxcVEVKQVMgR0FXQUxJXFxBcHBzRnJlZWxhY2luZ1xcaW9uaWM1Zm9vZGFwcC0xMFxcUmVzdGF1cmFudEFwcC9zcmNcXGFwcFxccGFnZXNcXGZvb2RzXFxmb29kcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Zvb2RzL2Zvb2RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjtBRHlDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ3ZDUjtBRDRDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUMxQ1I7QUQyQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDekNaO0FEMkNRO0VBQ0ksa0JBQUE7QUN6Q1o7QUQwQ1k7RUFDSSxhQUFBO0FDeENoQjtBRDJDWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ3pDaEI7QUQyQ1k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ3pDaEI7QUQyQ1k7RUFDSSxZQUFBO0FDekNoQjtBRDJDWTtFQUNJLFVBQUE7QUN6Q2hCO0FEMkNZO0VBQ0ksK0JBQUE7QUN6Q2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9vZHMvZm9vZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5Db250ZW50e1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLy8gLmNhdGVOYW1le1xuICAgIC8vICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIC8vICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAvLyAgICAgY29sb3I6IGJsYWNrO1xuICAgIC8vICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyB9XG4gICAgLy8gLmZvb2Rze1xuICAgIC8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLy8gICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLy8gICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTRweCAycHggbGlnaHRncmV5O1xuICAgIC8vICAgICAuYmdDb3ZlcntcbiAgICAvLyAgICAgICAgIHdpZHRoOiA5MHB4O1xuICAgIC8vICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgIC8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIC8vICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAvLyAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLy8gICAgIH0gXG4gICAgLy8gICAgIC5uYW1le1xuICAgIC8vICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgLy8gICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAuZGVzY3JpcHRpb257XG4gICAgLy8gICAgICAgICBtYXJnaW46IDBweDtcbiAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAucHJpY2V7XG4gICAgLy8gICAgICAgICBtYXJnaW46IDBweDtcbiAgICAvLyAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICAuY2F0ZXtcbiAgICAvLyAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIC8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cblxuXG4gICAgLmhlYWRfbGJse1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuXG5cbiAgICAuY2FyZF9kaXZ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggIDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgLmJhY2tfaW1hZ2V7XG4gICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50X2RpdntcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxse1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC52ZWd7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5vblZlZ3tcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxvbnZlZ3tcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuIiwiLm1haW5Db250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluQ29udGVudCAuaGVhZF9sYmwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuYmFja19pbWFnZSB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY29udGVudF9kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY29udGVudF9kaXYgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm1haW5Db250ZW50IC5jYXJkX2RpdiAuY29udGVudF9kaXYgLnNtYWxsIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNvbnRlbnRfZGl2IC52ZWcge1xuICBjb2xvcjogZ3JlZW47XG59XG4ubWFpbkNvbnRlbnQgLmNhcmRfZGl2IC5jb250ZW50X2RpdiAubm9uVmVnIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5tYWluQ29udGVudCAuY2FyZF9kaXYgLmNvbnRlbnRfZGl2IC5sb252ZWcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/foods/foods.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/foods/foods.page.ts ***!
    \*******************************************/

  /*! exports provided: FoodsPage */

  /***/
  function srcAppPagesFoodsFoodsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodsPage", function () {
      return FoodsPage;
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


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    var FoodsPage = /*#__PURE__*/function () {
      function FoodsPage(router, api, util) {
        _classCallCheck(this, FoodsPage);

        this.router = router;
        this.api = api;
        this.util = util;
        this.foods = [];
        this.categories = [];
        this.dummy = Array(50);
      }

      _createClass(FoodsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getFoods();
        }
      }, {
        key: "getFoods",
        value: function getFoods() {
          var _this = this;

          this.api.getVenueCategories(localStorage.getItem('uid')).then(function (data) {
            console.log(data);
            _this.dummy = [];

            if (data) {
              _this.categories = data;

              _this.api.getFoods(localStorage.getItem('uid')).then(function (data) {
                console.log(data);

                if (data) {
                  _this.foods = data;
                }
              }, function (error) {
                console.log(error);
                _this.dummy = [];

                _this.util.errorToast(_this.util.translate('Something went wrong'));
              })["catch"](function (error) {
                _this.dummy = [];
                console.log(error);

                _this.util.errorToast(_this.util.translate('Something went wrong'));
              });
            }
          }, function (error) {
            console.log(error);
            _this.dummy = [];

            _this.util.errorToast(_this.util.translate('Something went wrong'));
          })["catch"](function (error) {
            console.log(error);
            _this.dummy = [];

            _this.util.errorToast(_this.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "addnew",
        value: function addnew() {
          this.router.navigate(['/add-new-foods']);
        }
      }, {
        key: "foodsInfo",
        value: function foodsInfo(item) {
          console.log(item);
          var navData = {
            queryParams: {
              id: item.id
            }
          };
          this.router.navigate(['add-new-foods'], navData);
        }
      }, {
        key: "getCurrency",
        value: function getCurrency() {
          return this.util.getCurrecySymbol();
        }
      }]);

      return FoodsPage;
    }();

    FoodsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }];
    };

    FoodsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-foods',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./foods.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/foods/foods.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./foods.page.scss */
      "./src/app/pages/foods/foods.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])], FoodsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-foods-foods-module-es5.js.map