function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-category-add-category-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-category/add-category.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-category/add-category.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddCategoryAddCategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Food Category</ion-title>\n    <ion-button (click)=\"addnew()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n    <div class=\"back_image\"></div>\n    <ion-input type=\"text\" placeholder=\"Category Name\"></ion-input>\n\n    <ion-button (click)=\"addnew()\" expand=\"block\">\n      Add Category\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/add-category/add-category-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/add-category/add-category-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AddCategoryPageRoutingModule */

  /***/
  function srcAppPagesAddCategoryAddCategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryPageRoutingModule", function () {
      return AddCategoryPageRoutingModule;
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


    var _add_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-category.page */
    "./src/app/pages/add-category/add-category.page.ts");

    var routes = [{
      path: '',
      component: _add_category_page__WEBPACK_IMPORTED_MODULE_3__["AddCategoryPage"]
    }];

    var AddCategoryPageRoutingModule = function AddCategoryPageRoutingModule() {
      _classCallCheck(this, AddCategoryPageRoutingModule);
    };

    AddCategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddCategoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/add-category/add-category.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/add-category/add-category.module.ts ***!
    \***********************************************************/

  /*! exports provided: AddCategoryPageModule */

  /***/
  function srcAppPagesAddCategoryAddCategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryPageModule", function () {
      return AddCategoryPageModule;
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


    var _add_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-category-routing.module */
    "./src/app/pages/add-category/add-category-routing.module.ts");
    /* harmony import */


    var _add_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-category.page */
    "./src/app/pages/add-category/add-category.page.ts");

    var AddCategoryPageModule = function AddCategoryPageModule() {
      _classCallCheck(this, AddCategoryPageModule);
    };

    AddCategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddCategoryPageRoutingModule"]],
      declarations: [_add_category_page__WEBPACK_IMPORTED_MODULE_6__["AddCategoryPage"]]
    })], AddCategoryPageModule);
    /***/
  },

  /***/
  "./src/app/pages/add-category/add-category.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/add-category/add-category.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddCategoryAddCategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main_content_div {\n  padding: 20px;\n}\n.main_content_div .back_image {\n  height: 300px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n.main_content_div ion-input {\n  border-radius: 5px;\n  border: 1px solid lightgray;\n  margin-top: 20px;\n  --padding-start: 8px;\n}\n.main_content_div ion-button {\n  --border-radius: 5px;\n  font-weight: 600;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWNhdGVnb3J5L0U6XFxURUpBUyBJTVBcXFRFSkFTIEdBV0FMSVxcQXBwc0ZyZWVsYWNpbmdcXGlvbmljNWZvb2RhcHAtMTBcXFJlc3RhdXJhbnRBcHAvc3JjXFxhcHBcXHBhZ2VzXFxhZGQtY2F0ZWdvcnlcXGFkZC1jYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKO0FEQUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQ0k7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ0NSO0FERUk7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1jYXRlZ29yeS9hZGQtY2F0ZWdvcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXZ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG5cbiAgICBpb24taW5wdXR7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQgOiA4cHg7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbntcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxufSIsIi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5iYWNrX2ltYWdlIHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/add-category/add-category.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/add-category/add-category.page.ts ***!
    \*********************************************************/

  /*! exports provided: AddCategoryPage */

  /***/
  function srcAppPagesAddCategoryAddCategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryPage", function () {
      return AddCategoryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddCategoryPage = /*#__PURE__*/function () {
      function AddCategoryPage() {
        _classCallCheck(this, AddCategoryPage);
      }

      _createClass(AddCategoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addnew",
        value: function addnew() {}
      }]);

      return AddCategoryPage;
    }();

    AddCategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-category.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-category/add-category.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-category.page.scss */
      "./src/app/pages/add-category/add-category.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AddCategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-add-category-add-category-module-es5.js.map