function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCategoryCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Categories' | translate}}</ion-title>\n    <ion-button (click)=\"addNewCat()\" fill=\"clear\" color=\"light\" slot=\"end\">\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"mainContent\">\n    <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !categories?.length\">{{'No Category Found' | translate}}</h2>\n    <ion-item *ngFor=\"let item of dummy\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\" *ngFor=\"let item of categories;\" (click)=\"edit(item)\">\n      <ion-label>{{item.name}}</ion-label>\n      <!-- <ion-icon slot=\"end\" name=\"pencil-sharp\"></ion-icon> -->\n      <img src=\"assets/imgs/edit.png\" class=\"edt_icn\">\n    </ion-item>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/category/category-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/category/category-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CategoryPageRoutingModule */

  /***/
  function srcAppPagesCategoryCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function () {
      return CategoryPageRoutingModule;
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


    var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./category.page */
    "./src/app/pages/category/category.page.ts");

    var routes = [{
      path: '',
      component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }];

    var CategoryPageRoutingModule = function CategoryPageRoutingModule() {
      _classCallCheck(this, CategoryPageRoutingModule);
    };

    CategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CategoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/category/category.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/category/category.module.ts ***!
    \***************************************************/

  /*! exports provided: CategoryPageModule */

  /***/
  function srcAppPagesCategoryCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function () {
      return CategoryPageModule;
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


    var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./category-routing.module */
    "./src/app/pages/category/category-routing.module.ts");
    /* harmony import */


    var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./category.page */
    "./src/app/pages/category/category.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var CategoryPageModule = function CategoryPageModule() {
      _classCallCheck(this, CategoryPageModule);
    };

    CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"]],
      declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
    })], CategoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/category/category.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/category/category.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCategoryCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".edt_icn {\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvRTpcXFRFSkFTIElNUFxcVEVKQVMgR0FXQUxJXFxBcHBzRnJlZWxhY2luZ1xcaW9uaWM1Zm9vZGFwcC0xMFxcUmVzdGF1cmFudEFwcC9zcmNcXGFwcFxccGFnZXNcXGNhdGVnb3J5XFxjYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZHRfaWNue1xuICAgIHdpZHRoOiAyMHB4O1xufSIsIi5lZHRfaWNuIHtcbiAgd2lkdGg6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/category/category.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/category/category.page.ts ***!
    \*************************************************/

  /*! exports provided: CategoryPage */

  /***/
  function srcAppPagesCategoryCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryPage", function () {
      return CategoryPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CategoryPage = /*#__PURE__*/function () {
      function CategoryPage(api, alertController, util, router) {
        _classCallCheck(this, CategoryPage);

        this.api = api;
        this.alertController = alertController;
        this.util = util;
        this.router = router;
        this.categories = [];
        this.dummy = Array(50);
        this.getCategories();
      }

      _createClass(CategoryPage, [{
        key: "getCategories",
        value: function getCategories() {
          var _this = this;

          this.api.getVenueCategories(localStorage.getItem('uid')).then(function (data) {
            _this.dummy = [];
            console.log(data);

            if (data) {
              _this.categories = data;
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
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addNewCat",
        value: function addNewCat() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: this.util.translate('Add New!'),
                      inputs: [{
                        name: 'name1',
                        type: 'text',
                        placeholder: this.util.translate('Category Name')
                      }],
                      buttons: [{
                        text: this.util.translate('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: this.util.translate('Ok'),
                        handler: function handler(data) {
                          console.log('Confirm Ok', data);

                          if (data && data.name1 !== '') {
                            console.log('add new');

                            var ids = _this2.util.makeid(10);

                            var param = {
                              uid: localStorage.getItem('uid'),
                              name: data.name1,
                              id: ids
                            };

                            _this2.util.show();

                            _this2.api.addVenueCategoies(localStorage.getItem('uid'), ids, param).then(function (data) {
                              _this2.util.hide();

                              console.log(data);

                              _this2.getCategories();
                            })["catch"](function (error) {
                              _this2.util.hide();

                              _this2.util.errorToast(_this2.util.translate('Something went wrong'));

                              console.log(error);
                            });
                          }
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "edit",
        value: function edit(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: this.util.translate('Edit'),
                      inputs: [{
                        name: 'name1',
                        type: 'text',
                        placeholder: this.util.translate('Category Name'),
                        value: item.name
                      }],
                      buttons: [{
                        text: this.util.translate('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: this.util.translate('Ok'),
                        handler: function handler(data) {
                          console.log('Confirm Ok', data);

                          if (data && data.name1 !== '') {
                            console.log('add new');
                            var param = {
                              uid: localStorage.getItem('uid'),
                              name: data.name1,
                              id: item.id
                            };

                            _this3.util.show();

                            _this3.api.updateVenueCategoies(localStorage.getItem('uid'), item.id, param).then(function (data) {
                              _this3.util.hide();

                              console.log(data);

                              _this3.getCategories();
                            })["catch"](function (error) {
                              _this3.util.hide();

                              _this3.util.errorToast(_this3.util.translate('Something went wrong'));

                              console.log(error);
                            });
                          }
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return CategoryPage;
    }();

    CategoryPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category.page.scss */
      "./src/app/pages/category/category.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])], CategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-category-category-module-es5.js.map