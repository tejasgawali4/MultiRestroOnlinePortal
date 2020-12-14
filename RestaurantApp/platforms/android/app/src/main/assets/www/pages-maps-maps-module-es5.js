function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maps-maps-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMapsMapsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{'Choose your Location' | translate}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"div_map\" #map></div>\n  <ion-button (click)=\"submit()\" expand=\"block\">\n    {{'Submit' | translate}}\n  </ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/maps/maps-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/maps/maps-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: MapsPageRoutingModule */

  /***/
  function srcAppPagesMapsMapsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsPageRoutingModule", function () {
      return MapsPageRoutingModule;
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


    var _maps_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./maps.page */
    "./src/app/pages/maps/maps.page.ts");

    var routes = [{
      path: '',
      component: _maps_page__WEBPACK_IMPORTED_MODULE_3__["MapsPage"]
    }];

    var MapsPageRoutingModule = function MapsPageRoutingModule() {
      _classCallCheck(this, MapsPageRoutingModule);
    };

    MapsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MapsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/maps/maps.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/maps/maps.module.ts ***!
    \*******************************************/

  /*! exports provided: MapsPageModule */

  /***/
  function srcAppPagesMapsMapsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsPageModule", function () {
      return MapsPageModule;
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


    var _maps_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./maps-routing.module */
    "./src/app/pages/maps/maps-routing.module.ts");
    /* harmony import */


    var _maps_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./maps.page */
    "./src/app/pages/maps/maps.page.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var MapsPageModule = function MapsPageModule() {
      _classCallCheck(this, MapsPageModule);
    };

    MapsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _maps_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapsPageRoutingModule"]],
      declarations: [_maps_page__WEBPACK_IMPORTED_MODULE_6__["MapsPage"]]
    })], MapsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/maps/maps.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/maps/maps.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMapsMapsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".div_map {\n  height: 80vh;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwcy9FOlxcVEVKQVMgSU1QXFxURUpBUyBHQVdBTElcXEFwcHNGcmVlbGFjaW5nXFxpb25pYzVmb29kYXBwLTEwXFxSZXN0YXVyYW50QXBwL3NyY1xcYXBwXFxwYWdlc1xcbWFwc1xcbWFwcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21hcHMvbWFwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUc7RUFDSyxZQUFBO0VBQ0EsV0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFwcy9tYXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgIC5kaXZfbWFwe1xuICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH0iLCIuZGl2X21hcCB7XG4gIGhlaWdodDogODB2aDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/maps/maps.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/maps/maps.page.ts ***!
    \*****************************************/

  /*! exports provided: MapsPage */

  /***/
  function srcAppPagesMapsMapsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapsPage", function () {
      return MapsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/android-permissions/ngx */
    "./node_modules/@ionic-native/android-permissions/ngx/index.js");
    /* harmony import */


    var _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/diagnostic/ngx */
    "./node_modules/@ionic-native/diagnostic/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/location-accuracy/ngx */
    "./node_modules/@ionic-native/location-accuracy/ngx/index.js");

    var MapsPage = /*#__PURE__*/function () {
      function MapsPage(platform, androidPermissions, diagnostic, geolocation, navCtrl, locationAccuracy) {
        _classCallCheck(this, MapsPage);

        this.platform = platform;
        this.androidPermissions = androidPermissions;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.locationAccuracy = locationAccuracy;
      }

      _createClass(MapsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.getLocation();
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this = this;

          this.platform.ready().then(function () {
            if (_this.platform.is('android')) {
              _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(function (result) {
                return console.log('Has permission?', result.hasPermission);
              }, function (err) {
                return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
              });

              _this.grantRequest();
            } else {
              _this.locationAccuracy.canRequest().then(function (canRequest) {
                console.log('canRequest', canRequest);
              });

              _this.grantRequest();
            }
          });
        }
      }, {
        key: "grantRequest",
        value: function grantRequest() {
          var _this2 = this;

          this.diagnostic.isLocationEnabled().then(function (data) {
            if (data) {
              _this2.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('resp', resp);

                  _this2.loadmap(resp.coords.latitude, resp.coords.longitude, _this2.mapEle);
                }
              });
            } else {
              _this2.diagnostic.switchToLocationSettings();

              _this2.geolocation.getCurrentPosition({
                maximumAge: 3000,
                timeout: 10000,
                enableHighAccuracy: false
              }).then(function (resp) {
                if (resp) {
                  console.log('ress,', resp);

                  _this2.loadmap(resp.coords.latitude, resp.coords.longitude, _this2.mapEle);
                }
              });
            }
          }, function (error) {
            console.log('errir', error);
          })["catch"](function (error) {
            console.log('error', error);
          });
        }
      }, {
        key: "loadmap",
        value: function loadmap(lat, lng, mapElement) {
          var location = new google.maps.LatLng(lat, lng);
          var style = [{
            featureType: 'all',
            elementType: 'all',
            stylers: [{
              saturation: -100
            }]
          }];
          var mapOptions = {
            zoom: 15,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: false,
            overviewMapControl: false,
            center: location,
            mapTypeControl: false,
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Foodfire5']
            }
          };
          this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
          var mapType = new google.maps.StyledMapType(style, {
            name: 'Grayscale'
          });
          this.map.mapTypes.set('Foodfire5', mapType);
          this.map.setMapTypeId('Foodfire5');
          this.addMarker(location);
          this.getAddress(lat, lng);
        }
      }, {
        key: "getAddress",
        value: function getAddress(lat, lng) {
          var _this3 = this;

          var geocoder = new google.maps.Geocoder();
          var location = new google.maps.LatLng(lat, lng);
          geocoder.geocode({
            'location': location
          }, function (results, status) {
            console.log(results);
            _this3.address = results[0].formatted_address;
            _this3.lat = lat;
            _this3.lng = lng;
          });
        }
      }, {
        key: "addMarker",
        value: function addMarker(location) {
          var _this4 = this;

          console.log('location =>', location);
          var icon = {
            url: 'assets/icon/marker.png',
            scaledSize: new google.maps.Size(50, 50)
          };
          this.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: icon,
            draggable: true,
            animation: google.maps.Animation.DROP
          });
          google.maps.event.addListener(this.marker, 'dragend', function () {
            console.log(_this4.marker);

            _this4.getDragAddress(_this4.marker);
          });
        }
      }, {
        key: "getDragAddress",
        value: function getDragAddress(event) {
          var _this5 = this;

          var geocoder = new google.maps.Geocoder();
          var location = new google.maps.LatLng(event.position.lat(), event.position.lng());
          geocoder.geocode({
            'location': location
          }, function (results, status) {
            console.log(results);
            _this5.address = results[0].formatted_address;
            _this5.lat = event.position.lat();
            _this5.lng = event.position.lng();
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          localStorage.setItem('newAddress', this.address);
          localStorage.setItem('newLng', this.lng);
          localStorage.setItem('newLat', this.lat);
          this.navCtrl.back();
        }
      }]);

      return MapsPage;
    }();

    MapsPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"]
      }, {
        type: _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], MapsPage.prototype, "mapEle", void 0);
    MapsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-maps',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./maps.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./maps.page.scss */
      "./src/app/pages/maps/maps.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"], _ionic_native_diagnostic_ngx__WEBPACK_IMPORTED_MODULE_4__["Diagnostic"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__["LocationAccuracy"]])], MapsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-maps-maps-module-es5.js.map