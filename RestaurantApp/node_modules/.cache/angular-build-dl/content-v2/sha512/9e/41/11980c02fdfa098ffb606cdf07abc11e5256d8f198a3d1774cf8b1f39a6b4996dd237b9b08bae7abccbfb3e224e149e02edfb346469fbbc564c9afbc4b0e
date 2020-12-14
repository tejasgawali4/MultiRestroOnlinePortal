(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n  <div class=\"main_content_div\">\n\n    <div class=\"back_image\" [style.backgroundImage]=\"'url(assets/imgs/back_image.jpg)'\">\n\n    </div>\n    <div class=\"white_div\" [style.backgroundImage]=\"'url('+cover+')'\"></div>\n\n    <div class=\"content_div\">\n      <ion-label class=\"usernane\">{{name}}</ion-label>\n\n      <ion-label class=\"location\">\n        <ion-icon class=\"pin\" name=\"location-outline\"></ion-icon>{{address}}\n      </ion-label>\n\n      <ion-label class=\"location\" style=\"color: black;\">{{open}} - {{close}}</ion-label>\n\n      <div class=\"flex_div\">\n        <ion-label (click)=\"goToAddCategoty()\">{{'Add Category' | translate}}</ion-label>\n        <ion-label (click)=\"AddFoods()\">{{'Add Food' | translate}}</ion-label>\n        <ion-label (click)=\"venueDetails()\">{{'Edit Profile' | translate}}</ion-label>\n      </div>\n\n\n\n      <div class=\"segment_div\">\n        <ion-label [class.active]=\"seg_id == 1\" (click)=\"changeSegment(1)\">{{'Reviews' | translate}}</ion-label>\n        <ion-label [class.active]=\"seg_id == 2\" (click)=\"changeSegment(2)\">{{'Photos' | translate}}</ion-label>\n      </div>\n\n      <div *ngIf=\"seg_id == 1\" class=\"segment_detail\">\n\n        <!-- If rating not available-->\n        <div *ngIf=\"!reviews?.length\">\n          <img src=\"assets/imgs/sleepy.png\" class=\"sleepy\">\n          <ion-label class=\"sleepy_lbl\">{{'You havent review yet.' | translate}}</ion-label>\n        </div>\n        <div class=\"review_card\" *ngFor=\"let item of reviews\">\n\n          <div class=\"user_info\">\n\n            <ion-label class=\"rating\">{{item.rate}}<ion-icon name=\"star\"></ion-icon>\n            </ion-label>\n            <div class=\"user_back\" [style.backgroundImage]=\"'url('+item.uid.cover+')'\"></div>\n            <div style=\"padding-left: 20px;\">\n              <ion-label class=\"username\">{{item.uid.fullname}}</ion-label>\n              <ion-label class=\"city\">{{item.uid.email}}</ion-label>\n            </div>\n          </div>\n\n          <div>\n            <ion-label class=\"comment\">\n              {{item.descriptions}}\n            </ion-label>\n          </div>\n\n          <div class=\"line_div\"></div>\n\n        </div>\n      </div>\n\n      <div *ngIf=\"seg_id == 2\" class=\"segment_detail\">\n        <div *ngIf=\"!images?.length\">\n          <img src=\"assets/imgs/photo_2.png\" class=\"sleepy\">\n          <ion-label class=\"sleepy_lbl\">{{'You have not uploaded any photo yet.' | translate}}</ion-label>\n        </div>\n        <ion-row>\n          <ion-col size=\"4\" *ngFor=\"let item of images\">\n            <div *ngIf=\"item && item !=''\" class=\"bgImg\" [style.backgroundImage]=\"'url('+item+')'\"></div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n\n      <ion-button class=\"logout\" (click)=\"logout()\" expand=\"block\">\n        {{'Logout' | translate}}\n      </ion-button>\n\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/account/account-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/account-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function() { return AccountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.page */ "./src/app/pages/account/account.page.ts");




const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/account/account.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.module.ts ***!
  \*************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-routing.module */ "./src/app/pages/account/account-routing.module.ts");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/pages/account/account.page.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");








let AccountPageModule = class AccountPageModule {
};
AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"]
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "./src/app/pages/account/account.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/account/account.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  width: 100%;\n}\n.main_content_div .line_div {\n  width: 100%;\n  height: 1px;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .back_image {\n  height: 300px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.main_content_div .back_image ion-button {\n  position: absolute;\n  bottom: 20px;\n  right: 20px;\n  --background: white;\n  color: black;\n  font-weight: 600;\n}\n.main_content_div .white_div {\n  height: 90px;\n  width: 90px;\n  background: white;\n  border-radius: 50%;\n  margin: auto;\n  margin-top: -45px;\n  position: relative;\n  border: 4px solid white;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.main_content_div .content_div {\n  padding: 20px;\n}\n.main_content_div .content_div ion-label {\n  display: block;\n}\n.main_content_div .content_div .usernane {\n  text-align: center;\n  font-weight: 600;\n  font-size: 18px;\n}\n.main_content_div .content_div .location {\n  margin-top: 10px;\n  text-align: center;\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .content_div .pin {\n  color: gray;\n}\n.main_content_div .content_div .flex_div {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.main_content_div .content_div .flex_div ion-label {\n  border-bottom: 2px solid var(--ion-color-primary);\n  padding-bottom: 5px;\n}\n.main_content_div .content_div .flex_div1 {\n  margin-top: 20px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.main_content_div .content_div .flex_div1 .gray_div {\n  height: 60px;\n  width: 60px;\n  border-radius: 5px;\n  background: lightgray;\n  position: relative;\n}\n.main_content_div .content_div .flex_div1 .history {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div .content_div .segment_div {\n  display: flex;\n  margin-top: 20px;\n  border-bottom: 1px solid lightgray;\n}\n.main_content_div .content_div .segment_div ion-label {\n  margin-right: 30px;\n  color: gray;\n  padding-bottom: 10px;\n}\n.main_content_div .content_div .segment_div .active {\n  border-bottom: 1px solid red;\n}\n.main_content_div .content_div .bgImg {\n  height: 150px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.main_content_div .content_div .segment_detail {\n  padding-top: 20px;\n}\n.main_content_div .content_div .segment_detail .sleepy {\n  margin: auto;\n  display: block;\n}\n.main_content_div .content_div .segment_detail .sleepy_lbl {\n  display: block;\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .content_div .segment_detail .review_card .user_info {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .content_div .segment_detail .review_card .user_info .rating {\n  position: absolute;\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 7px;\n  color: green;\n  border-radius: 25px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-left: 5px;\n  right: 0;\n  top: 0;\n}\n.main_content_div .content_div .segment_detail .review_card .user_back {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 50%;\n}\n.main_content_div .content_div .segment_detail .review_card .username {\n  font-weight: 600;\n}\n.main_content_div .content_div .segment_detail .review_card .city {\n  color: gray;\n}\n.main_content_div .content_div .segment_detail .review_card .comment {\n  margin-top: 10px;\n  font-size: 13px;\n}\n.main_content_div .content_div .segment_detail .back_image2 {\n  height: 100px;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 10px;\n}\n.main_content_div .content_div .logout {\n  --border-radius: 5px;\n  margin-top: 20px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9FOlxcVEVKQVMgSU1QXFxURUpBUyBHQVdBTElcXEFwcHNGcmVlbGFjaW5nXFxpb25pYzVmb29kYXBwLTEwXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxwYWdlc1xcYWNjb3VudFxcYWNjb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7QURDSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURFSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQVo7QURJSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNGUjtBREtJO0VBQ0ksYUFBQTtBQ0hSO0FESVE7RUFDSSxjQUFBO0FDRlo7QURJUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRlo7QURLUTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0haO0FES1E7RUFDSSxXQUFBO0FDSFo7QURNUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNKWjtBREtZO0VBQ0ksaURBQUE7RUFDQSxtQkFBQTtBQ0hoQjtBRFlRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDVlo7QURZWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDVmhCO0FEYVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQ0FBQTtBQ1hoQjtBRGVRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUNiWjtBRGNZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNaaEI7QURjWTtFQUNJLDRCQUFBO0FDWmhCO0FEZVk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDYmhCO0FEZVE7RUFDSSxpQkFBQTtBQ2JaO0FEY1k7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQ1poQjtBRGNZO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDWmhCO0FEaUJnQjtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDZnBCO0FEaUJvQjtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQ2Z4QjtBRGtCZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDaEJwQjtBRGtCZ0I7RUFDSSxnQkFBQTtBQ2hCcEI7QURrQmdCO0VBQ0ksV0FBQTtBQ2hCcEI7QURrQmdCO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDaEJwQjtBRG1CWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUNqQmhCO0FEcUJRO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDbkJaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluX2NvbnRlbnRfZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmxpbmVfZGl2e1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAuYmFja19pbWFnZXtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGlvbi1idXR0b257XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICByaWdodDogMjBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLndoaXRlX2RpdntcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgYmFja2dyb3VuZDp3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IC00NXB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgLmNvbnRlbnRfZGl2e1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLnVzZXJuYW5le1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIC8vIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmxvY2F0aW9ue1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5waW57XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mbGV4X2RpdntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTs7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIC8vICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgLy8gICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgICAuZmxleF9kaXYxe1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAuZ3JheV9kaXZ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhpc3Rvcnl7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdG9wIDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2VnbWVudF9kaXZ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3RpdmV7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgLmJnSW1ne1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIC5zZWdtZW50X2RldGFpbHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgICAgLnNsZWVweXtcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2xlZXB5X2xibHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICAucmV2aWV3X2NhcmR7XG5cbiAgICAgICAgICAgICAgICAudXNlcl9pbmZve1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgICAgIC5yYXRpbmd7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYjJkOWIyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3YjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCA3cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXNlcl9iYWNre1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnVzZXJuYW1le1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2l0eXtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jb21tZW50e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJhY2tfaW1hZ2Uye1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ291dHtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLm1haW5fY29udGVudF9kaXYge1xuICB3aWR0aDogMTAwJTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5saW5lX2RpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmJhY2tfaW1hZ2Uge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuYmFja19pbWFnZSBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiAyMHB4O1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAud2hpdGVfZGl2IHtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogOTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtNDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiBpb24tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAudXNlcm5hbmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAubG9jYXRpb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnBpbiB7XG4gIGNvbG9yOiBncmF5O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5mbGV4X2RpdiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuZmxleF9kaXYgaW9uLWxhYmVsIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuZmxleF9kaXYxIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLmZsZXhfZGl2MSAuZ3JheV9kaXYge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5mbGV4X2RpdjEgLmhpc3Rvcnkge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5zZWdtZW50X2RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnNlZ21lbnRfZGl2IGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgY29sb3I6IGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5zZWdtZW50X2RpdiAuYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJlZDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuYmdJbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnNlZ21lbnRfZGV0YWlsIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnNlZ21lbnRfZGV0YWlsIC5zbGVlcHkge1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5zZWdtZW50X2RldGFpbCAuc2xlZXB5X2xibCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnNlZ21lbnRfZGV0YWlsIC5yZXZpZXdfY2FyZCAudXNlcl9pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuc2VnbWVudF9kZXRhaWwgLnJldmlld19jYXJkIC51c2VyX2luZm8gLnJhdGluZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2IyZDliMjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3YjtcbiAgcGFkZGluZzogM3B4IDdweDtcbiAgY29sb3I6IGdyZWVuO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnNlZ21lbnRfZGV0YWlsIC5yZXZpZXdfY2FyZCAudXNlcl9iYWNrIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuY29udGVudF9kaXYgLnNlZ21lbnRfZGV0YWlsIC5yZXZpZXdfY2FyZCAudXNlcm5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5zZWdtZW50X2RldGFpbCAucmV2aWV3X2NhcmQgLmNpdHkge1xuICBjb2xvcjogZ3JheTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5jb250ZW50X2RpdiAuc2VnbWVudF9kZXRhaWwgLnJldmlld19jYXJkIC5jb21tZW50IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5zZWdtZW50X2RldGFpbCAuYmFja19pbWFnZTIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmNvbnRlbnRfZGl2IC5sb2dvdXQge1xuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/account/account.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/account/account.page.ts ***!
  \***********************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");






let AccountPage = class AccountPage {
    constructor(router, api, navCtrl, util) {
        this.router = router;
        this.api = api;
        this.navCtrl = navCtrl;
        this.util = util;
        this.seg_id = 1;
        this.reviews = [];
        this.name = '';
        this.images = [];
        this.cover = '';
        this.address = '';
        this.open = '';
        this.close = '';
        this.util.obserProfile().subscribe(data => {
            this.getProfile();
        });
    }
    ngOnInit() {
        this.getReviews();
    }
    getProfile() {
        this.api.getVenueDetails(localStorage.getItem('uid')).then(data => {
            console.log('details', data);
            if (!data) {
                console.log('no data');
                this.util.showSimpleAlert(this.util.translate('Please create your venue profile first'));
                this.router.navigate(['venue-profile']);
            }
            else {
                this.name = data.name;
                this.address = data.address;
                this.cover = data.cover;
                this.images = data.images;
                this.open = data.openTime;
                this.close = data.closeTime;
                if (this.open === 'Invalid date') {
                    this.open = '10:00 AM';
                }
                if (this.close === 'Invalid date') {
                    this.close = '10:00 PM';
                }
            }
        }).catch(error => {
            console.log(error);
            this.util.showToast(this.util.translate('Something went wrong'), 'danger', 'bottom');
        });
    }
    ionViewWillEnter() {
        this.getProfile();
    }
    getReviews() {
        this.api.getMyReviews(localStorage.getItem('uid')).then((data) => {
            console.log('reviews', data);
            if (data) {
                this.reviews = data;
            }
        }).catch(error => {
            console.log(error);
        });
    }
    goToAddCategoty() {
        this.router.navigate(['/category']);
    }
    goToEditProfile() {
        this.router.navigate(['/edit-profile']);
    }
    goToOrder() {
        this.router.navigate(['/orders']);
    }
    AddFoods() {
        this.router.navigate(['/foods']);
    }
    venueDetails() {
        this.router.navigate(['venue-profile']);
    }
    logout() {
        this.api.logout().then(() => {
            this.navCtrl.navigateRoot(['login']);
        });
    }
    changeSegment(val) {
        this.seg_id = val;
    }
};
AccountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
];
AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./account.page.scss */ "./src/app/pages/account/account.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
], AccountPage);



/***/ })

}]);
//# sourceMappingURL=account-account-module-es2015.js.map