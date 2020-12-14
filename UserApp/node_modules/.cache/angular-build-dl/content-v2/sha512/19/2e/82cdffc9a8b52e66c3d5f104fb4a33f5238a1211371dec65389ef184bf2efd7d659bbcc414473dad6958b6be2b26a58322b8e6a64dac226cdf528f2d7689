(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content #content>\n  <div class=\"mainContent\">\n    <div class=\"restContent\" [style.backgroundImage]=\"'url('+cover+')'\">\n      <div class=\"btnss\">\n        <ion-icon (click)=\"back()\" class=\"backIcon\" color=\"light\" slot=\"start\" name=\"arrow-back-outline\"></ion-icon>\n        <ion-label class=\"moreInfo\" (click)=\"openDetails()\">{{'View more' | translate}}</ion-label>\n      </div>\n    </div>\n    <div class=\"foodsContent\">\n      <ion-label class=\"restname\">{{name}}</ion-label>\n      <ion-label class=\"cusine\">{{getCusine(cusine)}}</ion-label>\n      <div class=\"ratting\">\n        <ion-icon [name]=\"totalRatting >= 1 ? 'star-outline':'star'\" [color]=\"totalRatting >= 1 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 2 ? 'star-outline':'star'\" [color]=\"totalRatting >= 2 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 3 ? 'star-outline':'star'\" [color]=\"totalRatting >= 3 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 4 ? 'star-outline':'star'\" [color]=\"totalRatting >= 4 ? 'warning':'medium'\">\n        </ion-icon>\n        <ion-icon [name]=\"totalRatting >= 5 ? 'star-outline':'star'\" [color]=\"totalRatting >= 5 ? 'warning':'medium'\">\n        </ion-icon>\n        ({{ratting}} {{'Rattings' | translate}})\n      </div>\n      <div class=\"deliveryAddress\">\n        <img src=\"assets/pin.png\" alt=\"\" class=\"pin\">\n        <p class=\"address\"> {{getAddress()}}</p>\n\n      </div>\n      <div class=\"vegSection\">\n        <ion-label>{{'Veg Only' | translate}}</ion-label>\n        <ion-toggle color=\"success\" mode=\"ios\" (ionChange)=\"statusChange()\" [(ngModel)]=\"veg\"></ion-toggle>\n      </div>\n      <div *ngFor=\"let item of dummy\">\n        <ion-list>\n          <ion-item>\n            <ion-thumbnail slot=\"start\">\n              <ion-skeleton-text animated></ion-skeleton-text>\n            </ion-thumbnail>\n            <ion-label>\n              <h3>\n                <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n              </h3>\n              <p>\n                <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n              </p>\n              <p>\n                <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n              </p>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </div>\n      <div *ngFor=\"let cate of categories\">\n        <ion-label class=\"cateTitle\" [id]=\"cate.id\">{{cate.name}}</ion-label>\n        <div class=\"card_div\">\n\n          <div class=\"card\" *ngFor=\"let item of foods;let i = index\">\n            <div *ngIf=\"cate.id == item.cid.id\" class=\"mainCat\">\n              <img [src]=\"item.cover\" alt=\"\" class=\"image_div\">\n              <div class=\"desc_div\">\n                <ion-label class=\"heading_lbl\">{{item.name}}</ion-label>\n                <div class=\"ratting\">\n                  <ion-icon [name]=\"item.ratting >= 1 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 1 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 2 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 2 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 3 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 3 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 4 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 4 ? 'warning':'medium'\">\n                  </ion-icon>\n                  <ion-icon [name]=\"item.ratting >= 5 ? 'star-outline':'star'\"\n                    [color]=\"item.ratting >= 5 ? 'warning':'medium'\">\n                  </ion-icon>\n                  ({{item.totalRatting ? item.totalRatting:0}}. {{'Rattings' | translate}})\n                </div>\n                <ion-label class=\"small_lbl\">{{item.desc}}</ion-label>\n                <ion-label class=\"small_lbl\">{{getCurrency()}} {{item.price}}</ion-label>\n              </div>\n              <div class=\"cartBtn\" *ngIf=\"item.quantiy <= 0\">\n                <ion-label class=\"btns\" (click)=\"add(i)\">{{'Add' | translate}}</ion-label>\n                <!-- <ion-button (click)=\"add(i)\" size=\"small\" expand=\"block\" fill=\"outline\" shape=\"round\">\n                  {{'Add' | translate}}\n                </ion-button> -->\n              </div>\n              <div class=\"cartBtn2\" *ngIf=\"item.quantiy > 0\">\n                <ion-button (click)=\"removeQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"remove\"></ion-icon>\n                </ion-button>\n                <p class=\"qunitity\">{{item.quantiy}}</p>\n                <ion-button (click)=\"addQ(i)\" fill=\"clear\" size=\"small\">\n                  <ion-icon name=\"add\"></ion-icon>\n                </ion-button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- <app-popover></app-popover> -->\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"presentPopover($event)\">\n    <ion-fab-button color=\"light\" mode=\"ios\">\n      <ion-icon name=\"list\" color=\"primary\"></ion-icon>\n      <ion-label color=\"primary\">{{'Menu' | translate}}</ion-label>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n<ion-footer *ngIf=\"totalItem >0\">\n  <ion-toolbar color=\"primary\">\n    <ion-label color=\"light\">{{totalItem}} {{'ITEM' | translate}}</ion-label>\n    <ion-label color=\"light\"> {{getCurrency()}} {{totalPrice}} {{'plus taxes' | translate}}</ion-label>\n    <ion-button (click)=\"viewCart()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"end\" name=\"arrow-forward-outline\"></ion-icon>\n      {{'View Cart' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/category/category-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/category/category-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CategoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function() { return CategoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.page */ "./src/app/pages/category/category.page.ts");




const routes = [
    {
        path: '',
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
    }
];
let CategoryPageRoutingModule = class CategoryPageRoutingModule {
};
CategoryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/pages/category/category-routing.module.ts");
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.page */ "./src/app/pages/category/category.page.ts");
/* harmony import */ var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");










let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"]
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
    })
], CategoryPageModule);



/***/ }),

/***/ "./src/app/pages/category/category.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  --border-radius:10px;\n  --padding:10px;\n  width: 80px;\n}\n\nion-label {\n  display: block;\n}\n\nion-toolbar {\n  padding: 0px 10px;\n  font-weight: bold;\n}\n\nion-toolbar ion-button {\n  font-weight: bold;\n}\n\n.mainContent .restContent {\n  width: 100%;\n  height: 200px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.mainContent .restContent .btnss {\n  background-image: linear-gradient(-230deg, #17181a63, #827777) !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  width: 100%;\n  padding: 10px;\n  height: 150px;\n}\n\n.mainContent .restContent .btnss .backIcon {\n  font-size: 2rem;\n}\n\n.mainContent .restContent .btnss .moreInfo {\n  color: white;\n  font-weight: bold;\n}\n\n.mainContent .foodsContent {\n  position: absolute;\n  background: white;\n  height: 100%;\n  top: 100px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  width: 100%;\n  padding: 10px;\n}\n\n.mainContent .foodsContent .restname {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .cusine {\n  font-size: 1rem;\n  color: lightgray;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .ratting {\n  font-size: 1rem;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .deliveryAddress {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px 10px 0px 10px;\n}\n\n.mainContent .foodsContent .deliveryAddress .pin {\n  width: 25px;\n  height: 25px;\n}\n\n.mainContent .foodsContent .deliveryAddress .address {\n  font-size: 1rem;\n  margin: 0px;\n}\n\n.mainContent .foodsContent .vegSection {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px;\n}\n\n.mainContent .foodsContent .cateTitle {\n  font-size: 1.2rem;\n  font-weight: bold;\n  color: black;\n  padding-left: 10px;\n}\n\n.mainContent .foodsContent .card_div .card {\n  display: -webkit-box;\n  display: flex;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat {\n  width: 100%;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 5px 10px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .image_div {\n  border-radius: 10px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 80px !important;\n  height: 80px !important;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div {\n  margin-left: 20px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .heading_lbl {\n  font-size: 14px;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .ratting {\n  font-size: 10px;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .desc_div .small_lbl {\n  font-size: 8px;\n  color: lightgray;\n  display: block;\n  text-align: left;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn {\n  position: absolute;\n  right: 15px;\n  width: 60px;\n  background: white;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn .btns {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 10px;\n  padding: 2px;\n  font-size: 12px;\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn2 {\n  position: absolute;\n  right: 15px;\n  width: 80px;\n  display: -webkit-box;\n  display: flex;\n  background: white;\n}\n\n.mainContent .foodsContent .card_div .card .mainCat .cartBtn2 .qunitity {\n  font-weight: bold;\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvRTpcXFRFSkFTIElNUFxcVEVKQVMgR0FXQUxJXFxBcHBzRnJlZWxhY2luZ1xcaW9uaWM1Zm9vZGFwcC0xMFxcVXNlckFwcC9zcmNcXGFwcFxccGFnZXNcXGNhdGVnb3J5XFxjYXRlZ29yeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3J5L2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNHLGlCQUFBO0VBQ0EsaUJBQUE7QUNHSDs7QURGRztFQUNJLGlCQUFBO0FDSVA7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0VSOztBRERRO0VBQ0kseUVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDR1o7O0FERlk7RUFJSSxlQUFBO0FDQ2hCOztBRENZO0VBSUksWUFBQTtFQUNBLGlCQUFBO0FDRmhCOztBRE9JO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFFQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDTlI7O0FET1E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTFo7O0FET1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xaOztBRE9RO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDTFo7O0FET1E7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwyQkFBQTtBQ0xaOztBRE1ZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNKaEI7O0FETVk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0poQjs7QURPUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxhQUFBO0FDTFo7O0FET1E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTFo7O0FEUVk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNOaEI7O0FET2dCO0VBQ0ksV0FBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDTHBCOztBRE1vQjtFQUNJLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0p4Qjs7QURNb0I7RUFDSSxpQkFBQTtBQ0p4Qjs7QURLd0I7RUFFSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSjVCOztBRE13QjtFQUVJLGVBQUE7QUNMNUI7O0FET3dCO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTDVCOztBRFNvQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ1B4Qjs7QURRd0I7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FDTjVCOztBRFNvQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxpQkFBQTtBQ1B4Qjs7QURRd0I7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUNONUIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbntcbiAgICAtLWJvcmRlci1yYWRpdXNcdDoxMHB4O1xuICAgIC0tcGFkZGluZzoxMHB4O1xuICAgIHdpZHRoOiA4MHB4O1xufVxuaW9uLWxhYmVse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLXRvb2xiYXIge1xuICAgcGFkZGluZzogMHB4IDEwcHg7XG4gICBmb250LXdlaWdodDogYm9sZDtcbiAgIGlvbi1idXR0b24ge1xuICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgfVxufVxuLm1haW5Db250ZW50e1xuICAgIFxuICAgIC5yZXN0Q29udGVudHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgLmJ0bnNze1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0yMzBkZWcsICMxNzE4MWE2MywgIzgyNzc3NykgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAuYmFja0ljb257XG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIC8vIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgLy8gdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tb3JlSW5mb3tcbiAgICAgICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgLy8gdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgLmZvb2RzQ29udGVudHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIC5yZXN0bmFtZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmN1c2luZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyYXk7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJhdHRpbmd7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlbGl2ZXJ5QWRkcmVzc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDEwcHggMHB4IDEwcHg7XG4gICAgICAgICAgICAucGlue1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hZGRyZXNze1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBcbiAgICAgICAgLnZlZ1NlY3Rpb257XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfSBcbiAgICAgICAgLmNhdGVUaXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNhcmRfZGl2e1xuICAgICAgICAgICAgLmNhcmR7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAubWFpbkNhdHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6NXB4IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIC5pbWFnZV9kaXZ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmRlc2NfZGl2e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGluZ19sYmx7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJhdHRpbmd7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLnNtYWxsX2xibHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY2FydEJ0bntcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG5ze1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcnRCdG4ye1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5xdW5pdGl0eXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4iLCJpb24tZmFiLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czoxMHB4O1xuICAtLXBhZGRpbmc6MTBweDtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweCAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1haW5Db250ZW50IC5yZXN0Q29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbkNvbnRlbnQgLnJlc3RDb250ZW50IC5idG5zcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMjMwZGVnLCAjMTcxODFhNjMsICM4Mjc3NzcpICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbi5tYWluQ29udGVudCAucmVzdENvbnRlbnQgLmJ0bnNzIC5iYWNrSWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5tYWluQ29udGVudCAucmVzdENvbnRlbnQgLmJ0bnNzIC5tb3JlSW5mbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAxMDBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLnJlc3RuYW1lIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jdXNpbmUge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5yYXR0aW5nIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuZGVsaXZlcnlBZGRyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweCAxMHB4IDBweCAxMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmRlbGl2ZXJ5QWRkcmVzcyAucGluIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5kZWxpdmVyeUFkZHJlc3MgLmFkZHJlc3Mge1xuICBmb250LXNpemU6IDFyZW07XG4gIG1hcmdpbjogMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLnZlZ1NlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY2F0ZVRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmltYWdlX2RpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmRlc2NfZGl2IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmRlc2NfZGl2IC5oZWFkaW5nX2xibCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ubWFpbkNvbnRlbnQgLmZvb2RzQ29udGVudCAuY2FyZF9kaXYgLmNhcmQgLm1haW5DYXQgLmRlc2NfZGl2IC5yYXR0aW5nIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5kZXNjX2RpdiAuc21hbGxfbGJsIHtcbiAgZm9udC1zaXplOiA4cHg7XG4gIGNvbG9yOiBsaWdodGdyYXk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5jYXJ0QnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5jYXJ0QnRuIC5idG5zIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLm1haW5Db250ZW50IC5mb29kc0NvbnRlbnQgLmNhcmRfZGl2IC5jYXJkIC5tYWluQ2F0IC5jYXJ0QnRuMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi5tYWluQ29udGVudCAuZm9vZHNDb250ZW50IC5jYXJkX2RpdiAuY2FyZCAubWFpbkNhdCAuY2FydEJ0bjIgLnF1bml0aXR5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/category/category.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/category/category.page.ts ***!
  \*************************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _variations_variations_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../variations/variations.page */ "./src/app/pages/variations/variations.page.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");









let CategoryPage = class CategoryPage {
    constructor(route, api, util, navCtrl, alertController, router, popoverController, modalCtrl) {
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.popoverController = popoverController;
        this.modalCtrl = modalCtrl;
        this.cover = '';
        this.cusine = [];
        this.foods = [];
        this.dummyFoods = [];
        this.categories = [];
        this.dummy = Array(50);
        this.veg = true;
        this.totalItem = 0;
        this.totalPrice = 0;
        this.deliveryAddress = '';
        this.foodIds = [];
        this.cart = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log('data=>', data);
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.getVenueDetails();
            }
        });
    }
    getAddress() {
        const address = JSON.parse(localStorage.getItem('deliveryAddress'));
        if (address && address.address) {
            this.deliveryAddress = address.address;
        }
        return this.deliveryAddress;
    }
    getVenueDetails() {
        // Venue Details
        this.api.getVenueDetails(this.id).then(data => {
            console.log(data);
            if (data) {
                this.name = data.name;
                this.descritions = data.descritions;
                this.cover = data.cover;
                this.address = data.address;
                this.ratting = data.ratting ? data.ratting : 0;
                this.totalRatting = data.totalRatting ? data.totalRatting : 2;
                this.dishPrice = data.dishPrice;
                this.time = data.time;
                this.cusine = data.cusine;
                const vid = localStorage.getItem('vid');
                console.log('id', vid, this.id);
                if (vid && vid !== this.id) {
                    this.dummy = [];
                    this.presentAlertConfirm();
                    return false;
                }
                this.getCates();
                this.getFoods();
            }
        }, error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    getCates() {
        this.api.getVenueCategories(this.id).then(cate => {
            console.log(cate);
            if (cate) {
                this.categories = cate;
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    getFoods() {
        this.api.getFoods(this.id).then(foods => {
            console.log(foods);
            if (foods) {
                // if()
                this.dummy = [];
                this.foods = [];
                this.dummyFoods = [];
                foods.forEach(element => {
                    if (element && element.status === true) {
                        const info = {
                            cid: {
                                id: element.cid.id,
                            },
                            cover: element.cover,
                            desc: element.desc,
                            id: element.id,
                            name: element.name,
                            price: element.price,
                            ratting: element.ratting,
                            uid: element.uid,
                            veg: element.veg,
                            quantiy: 0,
                            size: element.size,
                            variations: element.variations,
                            totalRatting: element.totalRatting ? element.totalRatting : 0,
                            selectedItem: []
                        };
                        this.foods.push(info);
                        this.dummyFoods.push(info);
                        this.foodIds.push(element.id);
                    }
                });
                console.log('myfoods', this.foods);
                if (!this.foods.length || this.foods.length === 0) {
                    this.util.errorToast(this.util.translate('No Foods found'));
                    this.navCtrl.back();
                    return false;
                }
                this.changeStatus();
                this.checkCart();
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    checkCart() {
        const userCart = localStorage.getItem('userCart');
        if (userCart && userCart !== 'null' && userCart !== undefined && userCart !== 'undefined') {
            const cart = JSON.parse(userCart);
            console.log('carrt', cart);
            console.log(this.foodIds);
            cart.forEach(element => {
                if (this.foodIds.includes(element.id)) {
                    const index = this.foods.findIndex(x => x.id === element.id);
                    console.log('index---<', index);
                    this.foods[index].quantiy = element.quantiy;
                    this.foods[index].selectedItem = element.selectedItem;
                }
            });
            this.calculate();
        }
    }
    back() {
        this.navCtrl.navigateRoot(['tabs']);
    }
    getCusine(cusine) {
        return cusine.join('-');
    }
    add(index) {
        this.api.checkAuth().then((user) => {
            if (user) {
                const vid = localStorage.getItem('vid');
                if (vid && vid !== this.id) {
                    this.presentAlertConfirm();
                    return false;
                }
                if (this.foods[index].variations && this.foods[index].variations.length) {
                    console.log('open modal');
                    this.openVariations(index);
                }
                else {
                    this.foods[index].quantiy = 1;
                    this.calculate();
                }
            }
            else {
                this.router.navigate(['login']);
            }
        }).catch(error => {
            console.log(error);
        });
    }
    statusChange() {
        console.log('status', this.veg);
        this.changeStatus();
    }
    calculate() {
        // this.dummy = [];
        // console.log('khaliiii', this.dummy);
        // console.log(this.foods);
        // let item = this.foods.filter(x => x.quantiy > 0);
        // console.log(item);
        // this.totalPrice = 0;
        // this.totalItem = 0;
        // item.forEach(element => {
        //   this.totalItem = this.totalItem + element.quantiy;
        //   this.totalPrice = this.totalPrice + (parseFloat(element.price) * parseInt(element.quantiy));
        // });
        // this.totalPrice = parseFloat(this.totalPrice).toFixed(2);
        // console.log('total item', this.totalItem);
        // if (this.totalItem === 0) {
        //   this.totalItem = 0;
        //   this.totalPrice = 0;
        // }
        this.dummy = [];
        console.log('khaliiii', this.dummy);
        console.log(this.foods);
        let item = this.foods.filter(x => x.quantiy > 0);
        this.foods.forEach(element => {
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
                // this.totalPrice = this.totalPrice + (subPrice * parseInt(element.quantiy));
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
        console.log('total item', this.totalItem);
        if (this.totalItem === 0) {
            this.totalItem = 0;
            this.totalPrice = 0;
        }
    }
    setData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const vid = localStorage.getItem('vid');
            console.log('leaving the planet', vid, this.id);
            console.log('total item', this.totalItem);
            if (vid && vid === this.id && this.totalPrice > 0) {
                localStorage.setItem('vid', this.id);
                yield localStorage.setItem('foods', JSON.stringify(this.foods));
                localStorage.setItem('categories', JSON.stringify(this.categories));
                localStorage.setItem('dummyItem', JSON.stringify(this.dummyFoods));
                localStorage.setItem('totalItem', this.totalItem);
                localStorage.setItem('totalPrice', this.totalPrice);
            }
            else if (!vid && this.totalItem > 0) {
                localStorage.setItem('vid', this.id);
                yield localStorage.setItem('foods', JSON.stringify(this.foods));
                localStorage.setItem('categories', JSON.stringify(this.categories));
                localStorage.setItem('dummyItem', JSON.stringify(this.dummyFoods));
                localStorage.setItem('totalItem', this.totalItem);
                localStorage.setItem('totalPrice', this.totalPrice);
            }
            else if (this.totalItem == 0) {
                this.totalItem = 0;
                this.totalPrice = 0;
            }
        });
    }
    ionViewWillLeave() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.setData();
        });
    }
    changeStatus() {
        this.foods = this.dummyFoods.filter(x => x.veg === this.veg);
    }
    // addQ(index) {
    //   this.foods[index].quantiy = this.foods[index].quantiy + 1;
    //   this.calculate();
    // }
    // removeQ(index) {
    //   if (this.foods[index].quantiy !== 0) {
    //     this.foods[index].quantiy = this.foods[index].quantiy - 1;
    //   } else {
    //     this.foods[index].quantiy = 0;
    //   }
    //   this.calculate();
    // }
    openVariations(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _variations_variations_page__WEBPACK_IMPORTED_MODULE_1__["VariationsPage"],
                cssClass: 'custom_modal2',
                componentProps: {
                    name: this.name,
                    food: this.foods[index]
                }
            });
            modal.onDidDismiss().then((data) => {
                console.log('from variations', data.data);
                console.log('data.data', data.role);
                let isValid = false;
                if (data.role === 'new') {
                    this.foods[index].quantiy = 1;
                    const carts = {
                        item: data.data,
                        total: 1
                    };
                    this.foods[index].selectedItem.push(carts);
                    isValid = true;
                }
                else if (data.role === 'sameChoice') {
                    this.foods[index].selectedItem = data.data;
                    this.foods[index].quantiy = this.foods[index].selectedItem.length;
                    isValid = true;
                }
                else if (data.role === 'newCustom') {
                    const carts = {
                        item: data.data,
                        total: 1
                    };
                    this.foods[index].selectedItem.push(carts);
                    this.foods[index].quantiy = this.foods[index].quantiy + 1;
                    isValid = true;
                }
                else if (data.role === 'remove') {
                    console.log('number', data.data);
                    this.foods[index].quantiy = 0;
                    this.foods[index].selectedItem = [];
                    isValid = true;
                }
                else {
                    console.log('empy');
                }
                if (isValid) {
                    console.log('isValid', isValid);
                    this.calculate();
                }
            });
            return yield modal.present();
        });
    }
    addQ(index) {
        console.log('foooduieeeee===========>>', this.foods[index]);
        if (this.foods[index].variations && this.foods[index].variations.length) {
            this.openVariations(index);
        }
        else {
            this.foods[index].quantiy = this.foods[index].quantiy + 1;
            this.calculate();
        }
    }
    removeQ(index) {
        if (this.foods[index].quantiy !== 0) {
            if (this.foods[index].quantiy >= 1 && !this.foods[index].size) {
                this.foods[index].quantiy = this.foods[index].quantiy - 1;
            }
            else {
                this.openVariations(index);
            }
        }
        else {
            this.foods[index].quantiy = 0;
        }
        this.calculate();
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: this.util.translate('Warning'),
                message: this.util.translate(`you already have item's in cart with different restaurant`),
                buttons: [
                    {
                        text: this.util.translate('Cancel'),
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: this.util.translate('Clear cart'),
                        handler: () => {
                            console.log('Confirm Okay');
                            localStorage.removeItem('vid');
                            this.dummy = Array(10);
                            localStorage.removeItem('categories');
                            localStorage.removeItem('dummyItem');
                            localStorage.removeItem('foods');
                            this.totalItem = 0;
                            this.totalPrice = 0;
                            this.getCates();
                            this.getFoods();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    viewCart() {
        console.log('viewCart');
        this.setData();
        this.navCtrl.navigateRoot(['tabs/tab3']);
    }
    presentPopover(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.categories.length <= 0) {
                return false;
            }
            const popover = yield this.popoverController.create({
                component: src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                event: ev,
                componentProps: { data: this.categories },
                mode: 'ios',
            });
            popover.onDidDismiss().then(data => {
                console.log(data.data);
                if (data && data.data) {
                    const yOffset = document.getElementById(data.data.id).offsetTop;
                    const yHOffset = document.getElementById(data.data.id).offsetHeight;
                    console.log(yOffset + ' : ' + yHOffset);
                    this.content.scrollToPoint(0, yOffset, 1000);
                }
            });
            yield popover.present();
        });
    }
    openDetails() {
        const navData = {
            queryParams: {
                id: this.id
            }
        };
        this.router.navigate(['rest-details'], navData);
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
CategoryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('content', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CategoryPage.prototype, "content", void 0);
CategoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category.page.scss */ "./src/app/pages/category/category.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
], CategoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-category-category-module-es2015.js.map