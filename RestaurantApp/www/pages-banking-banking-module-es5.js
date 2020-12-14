function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-banking-banking-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banking/banking.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banking/banking.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBankingBankingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Confirm Bank' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"div_inner_slider\" *ngIf=\"!cid\">\n    <p class=\"head_lbl\">{{'Enter Card Details' |  translate}}</p>\n    <ion-input type=\"text\" [(ngModel)]=\"name\" [placeholder]=\"('Your name' | translate )\" class=\"bordered\"></ion-input>\n    <ion-input type=\"email\" [(ngModel)]=\"email\"  [placeholder]=\"('Your name' | translate )\" class=\"bordered\"></ion-input>\n    <ion-input type=\"number\" [(ngModel)]=\"number\" [placeholder]=\"('Card Number' | translate )\" class=\"bordered\"></ion-input>\n    <ion-row class=\"ion-no-padding\" style=\"margin-top: 20px;\">\n      <ion-col size=\"5.5\" class=\"bordered\">\n        <ion-datetime pickerFormat=\"MM/YYYY\" [(ngModel)]=\"date\" [min]=\"getMin()\" [max]=\"getMax()\"\n          displayFormat=\"MM/YYYY\" [placeholder]=\"('Expire Date' | translate )\">\n        </ion-datetime>\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"5.5\" class=\"bordered\">\n        <ion-input [(ngModel)]=\"cvc\" type=\"number\" [placeholder]=\"('CVC' | translate )\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <div class=\"instructions\">\n      <p class=\"bold\">{{'Instructions' | translate}}</p>\n      <p class=\"normal\">{{'This is Testing Mode use following details' | translate}} </p>\n      <p class=\"info\">{{'Card Number' | translate}} : 4242 4242 4242 4242</p>\n      <p class=\"info\">{{'CVC' | translate}} : 220</p>\n      <p class=\"info\">{{'Expire Date' | translate}} : {{'Future Years' | translate}}</p>\n    </div>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"onslide2()\" style=\"padding-right: 10px;\">\n      <ion-fab-button color=\"primary\">\n        <ion-icon name=\"arrow-forward\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n  <div class=\"div_inner_slider\" *ngIf=\"cid\">\n    <p class=\"head_lbl\">{{'Enter Bank Details' | translate}}</p>\n    <ion-input type=\"text\" [(ngModel)]=\"account_holder_name\" [placeholder]=\"('Account Holdername' | translate )\" class=\"bordered\">\n    </ion-input>\n    <ion-input type=\"number\" [(ngModel)]=\"routing_number\" [placeholder]=\"('Routing Number' | translate )\" class=\"bordered\">\n    </ion-input>\n    <ion-input type=\"number\" [(ngModel)]=\"account_number\" [placeholder]=\"('Account Number' | translate )\" class=\"bordered\">\n    </ion-input>\n    <div class=\"instructions\">\n      <p class=\"bold\">{{'Instructions' | translate}}</p>\n      <p class=\"normal\">{{'This is Testing Mode use following details' | translate}} </p>\n      <p class=\"info\">{{'Routing number' | translate}} : 11 00 00 000</p>\n      <p class=\"info\">{{'Account number' | translate}} : 000 123 456 789</p>\n    </div>\n    <ion-button style=\"margin-top: 20px;\" (click)=\"createBankInfo()\" expand=\"block\" shape=\"round\">\n      {{'Submit' | translate}}\n    </ion-button>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/banking/banking-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/banking/banking-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: BankingPageRoutingModule */

  /***/
  function srcAppPagesBankingBankingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankingPageRoutingModule", function () {
      return BankingPageRoutingModule;
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


    var _banking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./banking.page */
    "./src/app/pages/banking/banking.page.ts");

    var routes = [{
      path: '',
      component: _banking_page__WEBPACK_IMPORTED_MODULE_3__["BankingPage"]
    }];

    var BankingPageRoutingModule = function BankingPageRoutingModule() {
      _classCallCheck(this, BankingPageRoutingModule);
    };

    BankingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BankingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/banking/banking.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/banking/banking.module.ts ***!
    \*************************************************/

  /*! exports provided: BankingPageModule */

  /***/
  function srcAppPagesBankingBankingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankingPageModule", function () {
      return BankingPageModule;
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


    var _banking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./banking-routing.module */
    "./src/app/pages/banking/banking-routing.module.ts");
    /* harmony import */


    var _banking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./banking.page */
    "./src/app/pages/banking/banking.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var BankingPageModule = function BankingPageModule() {
      _classCallCheck(this, BankingPageModule);
    };

    BankingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _banking_routing_module__WEBPACK_IMPORTED_MODULE_5__["BankingPageRoutingModule"]],
      declarations: [_banking_page__WEBPACK_IMPORTED_MODULE_6__["BankingPage"]]
    })], BankingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/banking/banking.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/banking/banking.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBankingBankingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_inner_slider .head_lbl {\n  font-weight: bold;\n  text-align: center;\n  font-size: 1.5rem;\n}\n.div_inner_slider .bordered {\n  border-bottom: 1px solid lightgray;\n}\n.div_inner_slider .bordered ion-datetime {\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n}\n.div_inner_slider .instructions {\n  margin-top: 20px;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.div_inner_slider .instructions .normal {\n  font-size: 1rem;\n}\n.div_inner_slider .instructions .info {\n  margin: 0px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmFua2luZy9FOlxcVEVKQVMgSU1QXFxURUpBUyBHQVdBTElcXEFwcHNGcmVlbGFjaW5nXFxpb25pYzVmb29kYXBwLTEwXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxwYWdlc1xcYmFua2luZ1xcYmFua2luZy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhbmtpbmcvYmFua2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksa0NBQUE7QUNBUjtBRENRO0VBQ0csa0JBQUE7RUFDQSxxQkFBQTtBQ0NYO0FERUk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRENRO0VBQ0ksZUFBQTtBQ0NaO0FEQ1E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmFua2luZy9iYW5raW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZfaW5uZXJfc2xpZGVye1xuICAgIC5oZWFkX2xibHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuICAgIC5ib3JkZXJlZHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgaW9uLWRhdGV0aW1lIHtcbiAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmluc3RydWN0aW9uc3tcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAubm9ybWFse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB9XG4gICAgICAgIC5pbmZve1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi5kaXZfaW5uZXJfc2xpZGVyIC5oZWFkX2xibCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuLmRpdl9pbm5lcl9zbGlkZXIgLmJvcmRlcmVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5kaXZfaW5uZXJfc2xpZGVyIC5ib3JkZXJlZCBpb24tZGF0ZXRpbWUge1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5kaXZfaW5uZXJfc2xpZGVyIC5pbnN0cnVjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGl2X2lubmVyX3NsaWRlciAuaW5zdHJ1Y3Rpb25zIC5ub3JtYWwge1xuICBmb250LXNpemU6IDFyZW07XG59XG4uZGl2X2lubmVyX3NsaWRlciAuaW5zdHJ1Y3Rpb25zIC5pbmZvIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiBncmF5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/banking/banking.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/banking/banking.page.ts ***!
    \***********************************************/

  /*! exports provided: BankingPage */

  /***/
  function srcAppPagesBankingBankingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankingPage", function () {
      return BankingPage;
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


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var BankingPage = /*#__PURE__*/function () {
      function BankingPage(api, util, navCtrl) {
        _classCallCheck(this, BankingPage);

        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
      }

      _createClass(BankingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getMin",
        value: function getMin() {
          return moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
        }
      }, {
        key: "getMax",
        value: function getMax() {
          return moment__WEBPACK_IMPORTED_MODULE_2__().add('15', 'years').format('YYYY-MM-DD');
        }
      }, {
        key: "updateRest",
        value: function updateRest(body) {
          this.api.updateVenue(body).then(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "onslide2",
        value: function onslide2() {
          var _this = this;

          console.log(this.number, this.date, this.cvc);

          if (!this.number || !this.date || !this.cvc || !this.email || !this.name) {
            this.util.errorToast('All Fields are required');
            return false;
          }

          var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

          if (!emailfilter.test(this.email)) {
            this.util.errorToast('Please enter valid email');
            return false;
          }

          var month = moment__WEBPACK_IMPORTED_MODULE_2__(this.date).format('MM');
          var year = moment__WEBPACK_IMPORTED_MODULE_2__(this.date).format('YYYY');
          var param = {
            'card[number]': this.number,
            'card[exp_month]': month,
            'card[exp_year]': year,
            'card[cvc]': this.cvc
          };
          console.log('parms', param);
          this.util.show();
          this.api.httpPost('https://api.stripe.com/v1/tokens', param).subscribe(function (data) {
            console.log(data);

            if (data && data.id) {
              _this.token = data.id;
              var customer = {
                description: 'Customer for food app',
                source: _this.token,
                email: _this.email
              };

              _this.api.httpPost('https://api.stripe.com/v1/customers', customer).subscribe(function (customer) {
                console.log(customer);

                _this.util.hide();

                if (customer && customer.id) {
                  _this.cid = customer.id;
                  var cid = {
                    uid: localStorage.getItem('uid'),
                    cid: _this.cid
                  };

                  _this.updateRest(cid);
                }
              }, function (error) {
                _this.util.hide();

                console.log();

                if (error && error.error && error.error.error && error.error.error.message) {
                  _this.util.showErrorAlert(error.error.error.message);

                  return false;
                }

                _this.util.errorToast('Error \n Something went wrong');
              });
            } else {
              _this.util.hide();
            }
          }, function (error) {
            console.log(error);

            _this.util.hide();

            console.log();

            if (error && error.error && error.error.error && error.error.error.message) {
              _this.util.showErrorAlert(error.error.error.message);

              return false;
            }

            _this.util.errorToast('Error \n Something went wrong');
          });
        }
      }, {
        key: "createBankInfo",
        value: function createBankInfo() {
          var _this2 = this;

          if (!this.account_holder_name || !this.account_number || !this.routing_number) {
            this.util.errorToast('All Fields are required');
            return false;
          }

          console.log(this.account_holder_name, this.account_number, this.routing_number);
          var param = {
            'bank_account[country]': 'US',
            'bank_account[currency]': 'usd',
            'bank_account[account_holder_name]': this.account_holder_name,
            'bank_account[account_holder_type]': 'individual',
            'bank_account[routing_number]': this.routing_number,
            'bank_account[account_number]': '000' + this.account_number
          };
          this.util.show();
          this.api.httpPost('https://api.stripe.com/v1/tokens', param).subscribe(function (data) {
            console.log(data);

            if (data && data.id) {
              _this2.bid = data.id;
              var bank = {
                source: _this2.bid
              };

              _this2.api.httpPost('https://api.stripe.com/v1/customers/' + _this2.cid, bank).subscribe(function (backRespone) {
                console.log(backRespone);

                _this2.util.hide();

                var bid = {
                  uid: localStorage.getItem('uid'),
                  bid: backRespone.default_source
                };

                _this2.updateRest(bid);

                _this2.util.showToast('Account Created with stripe', 'success', 'bottom');

                _this2.navCtrl.back();
              }, function (error) {
                _this2.util.hide();

                console.log();

                if (error && error.error && error.error.error && error.error.error.message) {
                  _this2.util.showErrorAlert(error.error.error.message);

                  return false;
                }

                _this2.util.errorToast('Error \n Something went wrong');
              });
            }
          }, function (error) {
            console.log(error);

            _this2.util.hide();

            console.log();

            if (error && error.error && error.error.error && error.error.error.message) {
              _this2.util.showErrorAlert(error.error.error.message);

              return false;
            }

            _this2.util.errorToast('Error \n Something went wrong');
          });
        }
      }]);

      return BankingPage;
    }();

    BankingPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }];
    };

    BankingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-banking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./banking.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/banking/banking.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./banking.page.scss */
      "./src/app/pages/banking/banking.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]])], BankingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-banking-banking-module-es5.js.map