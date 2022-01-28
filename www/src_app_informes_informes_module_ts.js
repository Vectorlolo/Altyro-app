(self["webpackChunkaltyro_app"] = self["webpackChunkaltyro_app"] || []).push([["src_app_informes_informes_module_ts"],{

/***/ 6065:
/*!*****************************************************!*\
  !*** ./src/app/informes/informes-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformesPageRoutingModule": () => (/* binding */ InformesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _informes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informes.page */ 6788);




const routes = [
    {
        path: '',
        component: _informes_page__WEBPACK_IMPORTED_MODULE_0__.InformesPage
    }
];
let InformesPageRoutingModule = class InformesPageRoutingModule {
};
InformesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InformesPageRoutingModule);



/***/ }),

/***/ 8756:
/*!*********************************************!*\
  !*** ./src/app/informes/informes.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformesPageModule": () => (/* binding */ InformesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _informes_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informes-routing.module */ 6065);
/* harmony import */ var _informes_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informes.page */ 6788);







let InformesPageModule = class InformesPageModule {
};
InformesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _informes_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformesPageRoutingModule
        ],
        declarations: [_informes_page__WEBPACK_IMPORTED_MODULE_1__.InformesPage]
    })
], InformesPageModule);



/***/ }),

/***/ 6788:
/*!*******************************************!*\
  !*** ./src/app/informes/informes.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformesPage": () => (/* binding */ InformesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_informes_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./informes.page.html */ 5752);
/* harmony import */ var _informes_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informes.page.scss */ 5209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);




let InformesPage = class InformesPage {
    constructor() { }
    ngOnInit() {
    }
};
InformesPage.ctorParameters = () => [];
InformesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-informes',
        template: _raw_loader_informes_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_informes_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InformesPage);



/***/ }),

/***/ 5209:
/*!*********************************************!*\
  !*** ./src/app/informes/informes.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".tamano {\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.text {\n  font-size: 15px;\n  font-weight: bold;\n  width: 107px;\n  margin-left: 236px;\n  margin-top: -8px;\n}\n\nh2 {\n  border-bottom: 3px solid #000000;\n  border-width: 3px;\n}\n\n.icon {\n  width: 37px;\n  margin-left: 27%;\n}\n\n.card {\n  border-radius: 5px;\n  background: #9a01cc;\n  display: flex;\n  width: 281px;\n  margin-left: 12%;\n  margin-top: 26px;\n  height: 52px;\n}\n\n.card2 {\n  background: #e6b2f1;\n  display: flex;\n  width: 281px;\n  margin-left: 12%;\n  margin-top: 3px;\n  height: 52px;\n}\n\n.textflee {\n  text-align: right;\n  font-size: 14px;\n  margin-top: -15px;\n  margin-right: 42px;\n}\n\n.textfle {\n  font-size: 14px;\n  margin-left: 40px;\n  margin-top: 31px;\n}\n\n.style {\n  color: white;\n  font-size: 12px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 3px;\n}\n\nth, td {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUdBO0VBRUUsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDRSxnQkFBQTtBQURKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBREY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtBQUpGIiwiZmlsZSI6ImluZm9ybWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YW1hbm97XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cblxuLnRleHR7XG4gXG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDdweDtcbiAgICBtYXJnaW4tbGVmdDogMjM2cHg7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuaDJ7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwMDAwO1xuICBib3JkZXItd2lkdGg6IDNweDtcbn1cblxuLmljb257XG4gIHdpZHRoOiAzN3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNyU7XG59XG4uY2FyZHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjOWEwMWNjO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMjgxcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMiU7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG4gIGhlaWdodDogNTJweDtcbn1cblxuXG4uY2FyZDJ7XG4gIGJhY2tncm91bmQ6ICNlNmIyZjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAyODFweDtcbiAgbWFyZ2luLWxlZnQ6IDEyJTtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBoZWlnaHQ6IDUycHg7XG59XG5cblxuICAgXG4udGV4dGZsZWV7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDQycHg7XG59XG5cbi50ZXh0Zmxle1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAzMXB4O1xufVxuXG5cbi5zdHlsZXtcbiAgY29sb3I6IHdoaXRlOyBcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzcHhcbn1cblxudGgsIHRkIHtcbiAgcGFkZGluZzogNXB4O1xufVxuIl19 */");

/***/ }),

/***/ 5752:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/informes/informes.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header style=\"height: 30px; background-color: white;\">\n  <ion-icon onclick=\"history.back()\" style=\"margin-top: 17px;\n  margin-left: 15px;\n  color: #b111d4;\n  font-size: 27px;\" name=\"arrow-back-outline\"></ion-icon>\n <!-- <ion-toolbar style=\"height: 40px;\" >\n  <ion-title style=\"font-weight: bold; font-size: 20px;text-align: left;\n  margin-top: 10px;\" >Informe</ion-title>\n </ion-toolbar> -->\n <ion-text style=\"color: black;\">\n  <h1 style=\"text-align: left;margin: 30px;\" class=\"tamano\" >Informe</h1>\n</ion-text>\n <ion-text style=\"color: black;\">\n  <h1 style=\"text-align: right;\" class=\"text\">Semana Actual</h1>\n  <h2  style=\"text-align: right;\" class=\"text\" ></h2>\n</ion-text>\n</ion-header>\n\n<ion-content>\n\n  <table style=\"margin-left: 7%;margin-top: 43%;\" >\n    <tbody>\n      <tr>\n        <td  style=\"font-weight: bold; border-bottom: 6px solid #b111d4; font-size: 13px;\" >Fecha</td>\n        <td style=\"font-weight: bold;margin-right: 6px; border-bottom: 6px solid #b111d4;font-size: 13px\">Retiros</td>\n        <td style=\"font-weight: bold;margin-right: 6px; border-bottom: 6px solid #b111d4;font-size: 13px\" >Entregas</td>\n        <td style=\"font-weight: bold;margin-right: 6px; border-bottom: 6px solid #b111d4;font-size: 13px\">Provincia</td>\n          <td style=\"font-weight: bold;margin-right: 6px; border-bottom: 6px solid #b111d4;font-size: 13px\">Total</td>\n      </tr>\n      <tr style=\"font-size: 13px;\" >\n        <td>Lunes</td>\n        <td>3</td>\n        <td>30</td>\n        <td>12</td>\n        <td>$92.400</td>\n      </tr>\n      <tr  style=\"font-size: 13px;\">\n        <td>Martes</td>\n        <td>0</td>\n        <td>3</td>\n        <td>3</td>\n        <td>$50.000</td>\n      </tr>\n      <tr  style=\"font-size: 13px;\">\n        <td >Miércoles</td>\n        <td  >10</td>\n        <td>20</td>\n        <td>0</td>\n        <td>$45.800</td>\n      </tr>\n      <tr  style=\"font-size: 13px;\">\n        <td >Jueves</td>\n        <td>7</td>\n        <td>49</td>\n        <td>5</td>\n        <td>$438.600</td>\n      </tr>\n      <tr  style=\"font-size: 13px;\">\n        <td>Viernes</td>\n        <td>2</td>\n        <td>32</td>\n        <td>0</td>\n        <td>$70.200</td>\n      </tr>\n      <tr  style=\"font-size: 13px;\">\n        <td >Sábado</td>\n        <td>4</td>\n        <td>28</td>\n        <td>0</td>\n        <td>$30.200</td>\n      </tr>\n    </tbody>\n  </table>\n\n\n  <div class=\"textfle\" >Semana Anterior</div>\n\n  <div class=\"textflee\" >Semana Siguiente</div>\n  <ion-icon class=\"icon\"  name=\"chevron-back-outline\"></ion-icon>\n  <ion-icon class=\"icon\" name=\"chevron-forward-outline\"></ion-icon>\n\n <div class=\"card\">\n   <ion-col>\n     <p class=\"style\" >TOTAL<br>\n      Semana</p>\n   </ion-col>\n   <ion-col>\n    <p class=\"style\" >TOTAL<br>\n     Mes Actual</p>\n  </ion-col>\n  <ion-col>\n    <p class=\"style\" >TOTAL<br>\n      Mes Anterior</p>\n  </ion-col>\n  </div>\n\n  <div class=\"card2\">\n    <ion-col>\n      <p style=\"font-weight: bold;font-size: 13px;text-align: center;\">$300.000 </p>\n    </ion-col>\n    <ion-col>\n      <p style=\"font-weight: bold;font-size: 13px;text-align: center;\">$1.250.000 </p>\n   </ion-col>\n   <ion-col >\n    <p style=\"font-weight: bold;font-size: 13px;text-align: center;\">\n      $1.130.000\n    </p>\n   </ion-col>\n   </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_informes_informes_module_ts.js.map