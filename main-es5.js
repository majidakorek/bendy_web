function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about-us/about-us.component.ts":
  /*!************************************************!*\
    !*** ./src/app/about-us/about-us.component.ts ***!
    \************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mnav_mnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mnav/mnav.component */
    "./src/app/mnav/mnav.component.ts");
    /* harmony import */


    var _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mfooter/mfooter.component */
    "./src/app/mfooter/mfooter.component.ts");

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
      return new (t || AboutUsComponent)();
    };

    AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutUsComponent,
      selectors: [["about-us"]],
      decls: 81,
      vars: 0,
      consts: [[1, "bg"], [1, "tb"], ["data-wow-duration", "1s", "data-wow-delay", ".4s", 1, "single_works", "wow", "fadeInUp"], [1, "abouth"], ["data-wow-duration", "1s", "data-wow-delay", ".3s", 1, "wow", "fadeInLeft"], ["src", "../../assets/about/about.jpg", 1, "img-left"], ["data-wow-duration", "1.2s", "data-wow-delay", ".4s", 1, "par", "wow", "fadeInUp"], ["data-wow-duration", "1.2s", "data-wow-delay", ".5s", 1, "wow", "fadeInLeft"], [1, "container"], [1, "row"], [1, "col-md-4"], [1, "category", "mb-10"], [1, "htcatthumb"], ["src", "../../assets/about/Untitled-2.jpg", "alt", "about images"], [1, "about1"], ["src", "../../assets/about/Untitled-1.png", "alt", "about images"], ["src", "../../assets/about/c.jpg", "alt", "about images"], ["data-wow-duration", "1s", "data-wow-delay", ".4s", 1, "about", "single_works", "wow", "fadeInUp"], [1, "abouth1"], [1, "pcontact"], ["id", "index-gallery"], [1, "item"], ["src", "../../assets/about/locaion.jpg", "alt", ""], [1, "pcont1"], ["src", "../../assets/about/phone.jpg", "alt", ""], ["src", "../../assets/about/pobox.jpg", "alt", ""], [1, "col-md-6", "col-lg-4"], [1, "abouth3"], [1, "form-inline"], [1, "col"], [1, "fname"], ["type", "text", "id", "email", "placeholder", "Enter your name", "name", "name", 1, "form-control1"], ["type", "text", "id", "email", "placeholder", "Enter your email", "name", "email", 1, "form-control1"], [1, "fmessage"], ["type", "text", "placeholder", "Enter your message", "name", "pswd", 1, "form-control2"], ["type", "submit", 1, "fbtn"]],
      template: function AboutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "I always think good design is suitable for everyone. For this reason, co-founders and creative employees are committed from the start to working with the best designers to create quality straw products that are fashionable and available to a wide audience. This founding principle continues to motivate us today.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Founder");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Director");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Have any questions or requests? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "1st floor, Sara Complex,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " MarElias street, Mina,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Tripoli, Lebanon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " +961-81890569 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " +961-65890569");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " P.o.box: 1715,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Tripoli-Lebanon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Contact Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "form", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Send message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "mfooter");
        }
      },
      directives: [_mnav_mnav_component__WEBPACK_IMPORTED_MODULE_1__["MnavComponent"], _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_2__["MfooterComponent"]],
      styles: [".bg[_ngcontent-%COMP%]{\r\n    background: url('untitled1.svg') no-repeat;\r\n    background-position-y: 5%;\r\n    \r\n}\r\n@media(max-width:995px){\r\n    .bg[_ngcontent-%COMP%]{\r\n        background-position-y: 0%; \r\n    }\r\n}\r\n.tb[_ngcontent-%COMP%]{\r\n   margin-left: 12%;\r\n    width: 70%;\r\n}\r\n@media(max-width:900px){\r\n    .tb[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]{\r\n display: block;\r\n \r\n    }\r\n}\r\n.abouth[_ngcontent-%COMP%]{\r\n    color: #f69320;\r\n    margin-top: 70%;\r\n}\r\n.abouth1[_ngcontent-%COMP%]{\r\n    color: #f69320;\r\n    margin-top: 30%;\r\n}\r\n@media(max-width:900px){\r\n    .abouth1[_ngcontent-%COMP%]{\r\n        margin-top: 30%;\r\n    }\r\n}\r\n.par[_ngcontent-%COMP%]{\r\n    color: black;\r\n    font-size: 15pt;\r\n    font-family: \"roboto\",sans-serif;\r\n    margin-left: 10%;\r\n}\r\n@media(max-width:900px){\r\n    .par[_ngcontent-%COMP%]{\r\n margin-left: 0%;  \r\n margin-top: 10%;\r\n \r\n    }\r\n}\r\n.category[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    position: relative;\r\n    \r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n    margin-bottom: 50px;\r\n    margin-left: 12%;\r\n}\r\n@media(max-width:765px){\r\n    .container[_ngcontent-%COMP%] {\r\n        margin:auto;\r\n        width: 50%;\r\n    }\r\n}\r\n.mb-10[_ngcontent-%COMP%] {\r\n    margin-bottom: 10px\r\n}\r\n.block[_ngcontent-%COMP%]{\r\n    margin-top: 150px;\r\n}\r\n.about[_ngcontent-%COMP%]{\r\n    \r\n    color: black;\r\n    font-size: 20pt;\r\n    font-family: \"candara\",sans-serif;\r\n    text-align: left;\r\n    margin: 12%;\r\n\r\n}\r\n.about1[_ngcontent-%COMP%]{\r\n    \r\n    color: black;\r\n    font-size: 20pt;\r\n    font-family: \"candara\",sans-serif;\r\n    text-align: left;\r\n    \r\n\r\n}\r\n@media(max-width:770px){\r\n    .about[_ngcontent-%COMP%]{\r\n        text-align: center;\r\n    }\r\n}\r\n.pcontact[_ngcontent-%COMP%]{\r\n    color: black;\r\n   margin-bottom: 8%;\r\n    font-size: 20pt;\r\n    font-family: \"candara\",sans-serif;\r\n}\r\n.pcont1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    font-size: 12pt;\r\n    font-family: \"roboto\",sans-serif;\r\n    \r\n}\r\n.item[_ngcontent-%COMP%]{\r\n    \r\n    text-align:center;\r\n    display:block;\r\n    background-color: transparent;\r\n    border: 1px solid transparent;\r\n    margin-right: 10%;\r\n    margin-bottom: 1px;\r\n    float:left;\r\n  }\r\n#index-gallery[_ngcontent-%COMP%]{\r\n    width:70%;\r\n    margin: auto;\r\n  }\r\n@media(max-width:1100px){\r\n    #index-gallery[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n}\r\n@media(max-width:770px){\r\n    #index-gallery[_ngcontent-%COMP%]{\r\n        display: grid ;\r\n    }\r\n}\r\n.abouth3[_ngcontent-%COMP%]{\r\n    color: black;\r\n    margin-left: 30%;\r\n    margin-top: 100%;\r\n}\r\n@media(max-width:760px){\r\n    .abouth3[_ngcontent-%COMP%]{\r\n        width: 50%;\r\n        margin: auto;\r\n    }\r\n\r\n}\r\n.rowa[_ngcontent-%COMP%]{\r\n      margin-top: 100px;\r\n      margin-left: 175px;\r\n     margin-bottom: 100px;\r\n}\r\n.aimg[_ngcontent-%COMP%]{\r\n   padding-right: 30%;\r\n   \r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    margin-top: 30px;\r\n}\r\n.pcontact1[_ngcontent-%COMP%]{\r\n    color: black;\r\n    margin-left: 15px;\r\n    font-size: 20pt;\r\n    font-family: \"candara\",sans-serif;\r\n}\r\n.row4[_ngcontent-%COMP%]{\r\n    margin-left: 380px;\r\n}\r\n.rowc[_ngcontent-%COMP%]{\r\n    margin-left: 150px;\r\n}\r\n.fname[_ngcontent-%COMP%]{\r\n    margin-left: 38%;\r\n   margin-right: 100px;\r\n    margin-bottom: 10px;\r\n    width: 300px;\r\n    \r\n    \r\n}\r\n.form-control1[_ngcontent-%COMP%]{\r\n        display: block;\r\n        margin-left: 20%;\r\n        padding-top: 2px;\r\n        padding-bottom: 2px;\r\n        padding-left: 20px;\r\n        margin-bottom: 15px;\r\n        width: 200px;\r\n        font-size: 1rem;\r\n        line-height: 1.5;\r\n        color: white;\r\n        background-color: #f69320;\r\n        background-clip: padding-box;\r\n        border: 0px solid #f69320;\r\n        border-radius: 20px;\r\n        transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out\r\n}\r\n.fmessage[_ngcontent-%COMP%]{\r\n    margin-left: 0px;\r\n    \r\n   \r\n    width: 250px;\r\n\r\n}\r\n.form-control2[_ngcontent-%COMP%]{\r\n    display: block;\r\n    padding-top: 2px;\r\n    padding-bottom: 50px;\r\n    padding-left: 20px;\r\n    margin-top: 28px;\r\n    margin-bottom: 15px;\r\n    width: 200px;\r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    color: white;\r\n    background-color: #f69320;\r\n    background-clip: padding-box;\r\n    border: 0px solid #f69320;\r\n    border-radius: 10px;\r\n    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out\r\n}\r\n.fbtn[_ngcontent-%COMP%]{\r\n    \r\n    margin-top: 50px;\r\n    width: 120px;\r\n    height: 30px;\r\n    \r\n    font-weight: 400;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    vertical-align: middle;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    border: 1px solid transparent;\r\n    padding-top: 2px ; \r\n    font-size: 1rem;\r\n    line-height: 1.5;\r\n    border-radius: 20px;\r\n    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\r\n     color: #fff;\r\n        background-color: #f69320;\r\n        border-color: #f69320\r\n   \r\n}\r\n.fbtn[_ngcontent-%COMP%]:hover {\r\n\r\n}\r\n@media(max-width:770px){\r\n.fname[_ngcontent-%COMP%]{\r\n    margin-left: 20%;\r\n    margin-right: 30px;\r\n}\r\n}\r\n@media(max-width:715px){\r\n    .fname[_ngcontent-%COMP%]{\r\n        margin-left: 20%;\r\n       width: 210px;\r\n    }\r\n    .fmessage[_ngcontent-%COMP%]{\r\n        width: 200px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBDQUF3RDtJQUN4RCx5QkFBeUI7O0FBRTdCO0FBQ0E7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKO0FBRUE7R0FDRyxnQkFBZ0I7SUFDZixVQUFVO0FBQ2Q7QUFFQTtJQUNJO0NBQ0gsY0FBYzs7SUFFWDtBQUNKO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFHQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO0NBQ0gsZUFBZTtDQUNmLGVBQWU7O0lBRVo7QUFDSjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7QUFFdEI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxVQUFVO0lBQ2Q7QUFDSjtBQUVBO0lBQ0k7QUFDSjtBQVlBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBTUE7O0lBRUksWUFBWTtJQUNaLGVBQWU7SUFDZixpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLFdBQVc7O0FBRWY7QUFFQTs7SUFFSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlDQUFpQztJQUNqQyxnQkFBZ0I7OztBQUdwQjtBQUlBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjtBQUtBO0lBQ0ksWUFBWTtHQUNiLGlCQUFpQjtJQUNoQixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDO0FBTUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdDQUFnQzs7QUFFcEM7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7QUFFQTtJQUNFLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7QUFFRjtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKO0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUdBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsWUFBWTtJQUNoQjs7QUFFSjtBQUdBO01BQ00saUJBQWlCO01BQ2pCLGtCQUFrQjtLQUNuQixvQkFBb0I7QUFDekI7QUFFQTtHQUNHLGtCQUFrQjs7QUFFckI7QUFTQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUtBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFPQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0dBQ2pCLG1CQUFtQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTs7O0FBR2hCO0FBRUE7UUFDUSxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1oseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CO0FBQ1I7QUFFQTtJQUNJLGdCQUFnQjs7O0lBR2hCLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CO0FBQ0o7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7O0lBRVosZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlJQUFpSTtLQUNoSSxXQUFXO1FBQ1IseUJBQXlCO1FBQ3pCOztBQUVSO0FBRUE7O0FBRUE7QUFHQTtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtPQUNqQixZQUFZO0lBQ2Y7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2JnL3VudGl0bGVkMS5zdmcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogNSU7XHJcbiAgICBcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjk5NXB4KXtcclxuICAgIC5iZ3tcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDAlOyBcclxuICAgIH1cclxufVxyXG5cclxuLnRie1xyXG4gICBtYXJnaW4tbGVmdDogMTIlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5MDBweCl7XHJcbiAgICAudGIsdGQsdHJ7XHJcbiBkaXNwbGF5OiBibG9jaztcclxuIFxyXG4gICAgfVxyXG59XHJcbi5hYm91dGh7XHJcbiAgICBjb2xvcjogI2Y2OTMyMDtcclxuICAgIG1hcmdpbi10b3A6IDcwJTtcclxufVxyXG4uYWJvdXRoMXtcclxuICAgIGNvbG9yOiAjZjY5MzIwO1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5MDBweCl7XHJcbiAgICAuYWJvdXRoMXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG9cIixzYW5zLXNlcmlmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOjkwMHB4KXtcclxuICAgIC5wYXJ7XHJcbiBtYXJnaW4tbGVmdDogMCU7ICBcclxuIG1hcmdpbi10b3A6IDEwJTtcclxuIFxyXG4gICAgfVxyXG59XHJcblxyXG4uY2F0ZWdvcnkge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyJTtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjVweCl7XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46YXV0bztcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWItMTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmJsb2Nre1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uYWJvdXR7XHJcbiAgICBcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIGZvbnQtZmFtaWx5OiBcImNhbmRhcmFcIixzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbjogMTIlO1xyXG5cclxufVxyXG5cclxuLmFib3V0MXtcclxuICAgIFxyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiY2FuZGFyYVwiLHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzcwcHgpe1xyXG4gICAgLmFib3V0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLnBjb250YWN0e1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICBtYXJnaW4tYm90dG9tOiA4JTtcclxuICAgIGZvbnQtc2l6ZTogMjBwdDtcclxuICAgIGZvbnQtZmFtaWx5OiBcImNhbmRhcmFcIixzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLnBjb250MXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTJwdDtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiLHNhbnMtc2VyaWY7XHJcbiAgICBcclxufVxyXG5cclxuLml0ZW17XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gICNpbmRleC1nYWxsZXJ5e1xyXG4gICAgd2lkdGg6NzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MTEwMHB4KXtcclxuICAgICNpbmRleC1nYWxsZXJ5e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjc3MHB4KXtcclxuICAgICNpbmRleC1nYWxsZXJ5e1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQgO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWJvdXRoM3tcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDAlO1xyXG59XHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NjBweCl7XHJcbiAgICAuYWJvdXRoM3tcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG4ucm93YXtcclxuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNzVweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG5cclxuLmFpbWd7XHJcbiAgIHBhZGRpbmctcmlnaHQ6IDMwJTtcclxuICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ucm93e1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLnBjb250YWN0MXtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB0O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiY2FuZGFyYVwiLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5yb3c0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM4MHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5yb3dje1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcblxyXG4uZm5hbWV7XHJcbiAgICBtYXJnaW4tbGVmdDogMzglO1xyXG4gICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wxe1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2OTMyMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlcjogMHB4IHNvbGlkICNmNjkzMjA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0XHJcbn1cclxuXHJcbi5mbWVzc2FnZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBcclxuICAgXHJcbiAgICB3aWR0aDogMjUwcHg7XHJcblxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sMntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2OTMyMDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZjY5MzIwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXRcclxufVxyXG5cclxuLmZidG57XHJcbiAgICBcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIHBhZGRpbmctdG9wOiAycHggOyBcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNjkzMjA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjY5MzIwXHJcbiAgIFxyXG59XHJcblxyXG4uZmJ0bjpob3ZlciB7XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3NzBweCl7XHJcbi5mbmFtZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo3MTVweCl7XHJcbiAgICAuZm5hbWV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwJTtcclxuICAgICAgIHdpZHRoOiAyMTBweDtcclxuICAgIH1cclxuICAgIC5mbWVzc2FnZXtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'about-us',
          templateUrl: './about-us.component.html',
          styleUrls: ['./about-us.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'AppKA';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".slider_area[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n   \r\n}\r\n\r\n.ADanimation[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksV0FBVzs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlcl9hcmVhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxufVxyXG5cclxuLkFEYW5pbWF0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _mbutton_mbutton_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mbutton/mbutton.component */
    "./src/app/mbutton/mbutton.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mnav_mnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./mnav/mnav.component */
    "./src/app/mnav/mnav.component.ts");
    /* harmony import */


    var _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mfooter/mfooter.component */
    "./src/app/mfooter/mfooter.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _homeaccess_homeaccess_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./homeaccess/homeaccess.component */
    "./src/app/homeaccess/homeaccess.component.ts");
    /* harmony import */


    var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./homepage/homepage.component */
    "./src/app/homepage/homepage.component.ts");
    /* harmony import */


    var _wear_wear_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./wear/wear.component */
    "./src/app/wear/wear.component.ts");
    /* harmony import */


    var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./about-us/about-us.component */
    "./src/app/about-us/about-us.component.ts");
    /* harmony import */


    var _souvenir_souvenir_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./souvenir/souvenir.component */
    "./src/app/souvenir/souvenir.component.ts");
    /* harmony import */


    var _ourproducts_ourproducts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./ourproducts/ourproducts.component */
    "./src/app/ourproducts/ourproducts.component.ts");
    /* harmony import */


    var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./notfound/notfound.component */
    "./src/app/notfound/notfound.component.ts");

    var routes = [{
      path: '',
      component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"]
    }, {
      path: 'homeaccess',
      component: _homeaccess_homeaccess_component__WEBPACK_IMPORTED_MODULE_8__["HomeaccessComponent"]
    }, {
      path: 'homepage',
      component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"]
    }, {
      path: 'ourproducts',
      component: _ourproducts_ourproducts_component__WEBPACK_IMPORTED_MODULE_13__["OurproductsComponent"]
    }, {
      path: 'wear',
      component: _wear_wear_component__WEBPACK_IMPORTED_MODULE_10__["WearComponent"]
    }, {
      path: 'souvenir',
      component: _souvenir_souvenir_component__WEBPACK_IMPORTED_MODULE_12__["SouvenirComponent"]
    }, {
      path: 'aboutncontact',
      component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"]
    }, {
      path: '**',
      component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotfoundComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _mbutton_mbutton_component__WEBPACK_IMPORTED_MODULE_3__["MbuttonComponent"], _mnav_mnav_component__WEBPACK_IMPORTED_MODULE_5__["MnavComponent"], _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_6__["MfooterComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"], _homeaccess_homeaccess_component__WEBPACK_IMPORTED_MODULE_8__["HomeaccessComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"], _wear_wear_component__WEBPACK_IMPORTED_MODULE_10__["WearComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"], _souvenir_souvenir_component__WEBPACK_IMPORTED_MODULE_12__["SouvenirComponent"], _ourproducts_ourproducts_component__WEBPACK_IMPORTED_MODULE_13__["OurproductsComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotfoundComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _mbutton_mbutton_component__WEBPACK_IMPORTED_MODULE_3__["MbuttonComponent"], _mnav_mnav_component__WEBPACK_IMPORTED_MODULE_5__["MnavComponent"], _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_6__["MfooterComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"], _homeaccess_homeaccess_component__WEBPACK_IMPORTED_MODULE_8__["HomeaccessComponent"], _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_9__["HomepageComponent"], _wear_wear_component__WEBPACK_IMPORTED_MODULE_10__["WearComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"], _souvenir_souvenir_component__WEBPACK_IMPORTED_MODULE_12__["SouvenirComponent"], _ourproducts_ourproducts_component__WEBPACK_IMPORTED_MODULE_13__["OurproductsComponent"], _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_14__["NotfoundComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/homeaccess/homeaccess.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/homeaccess/homeaccess.component.ts ***!
    \****************************************************/

  /*! exports provided: HomeaccessComponent */

  /***/
  function srcAppHomeaccessHomeaccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeaccessComponent", function () {
      return HomeaccessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mnav_mnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mnav/mnav.component */
    "./src/app/mnav/mnav.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mfooter/mfooter.component */
    "./src/app/mfooter/mfooter.component.ts");

    var HomeaccessComponent = /*#__PURE__*/function () {
      function HomeaccessComponent() {
        _classCallCheck(this, HomeaccessComponent);
      }

      _createClass(HomeaccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeaccessComponent;
    }();

    HomeaccessComponent.ɵfac = function HomeaccessComponent_Factory(t) {
      return new (t || HomeaccessComponent)();
    };

    HomeaccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeaccessComponent,
      selectors: [["homeaccess"]],
      decls: 37,
      vars: 24,
      consts: [[1, "bg"], [1, "slider_area"], ["autoplay", "", "muted", "", "loop", "", 1, "ADanimation"], ["src", "../../assets/HOme acce/home2.avi"], [1, "row"], [3, "imgSrc", "price"], ["aria-label", "Page navigation example", 1, "homeaccessbnav"], [1, "pagination"], [1, "page-item"], ["href", "#", 1, "page-link"]],
      template: function HomeaccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nav", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mfooter");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/dSAFDa.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/dsD.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/S.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/sa.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/saaaaaa.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/sasd.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/ss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/sss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/sssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/ssssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/sssssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/Untitled-4.jpg")("price", "LBP50,000");
        }
      },
      directives: [_mnav_mnav_component__WEBPACK_IMPORTED_MODULE_1__["MnavComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"], _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_3__["MfooterComponent"]],
      styles: [".row[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 80%;\r\n}\r\n\r\n\r\n.slider_area[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n   \r\n}\r\n\r\n\r\n.ADanimation[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  \r\n}\r\n\r\n\r\n.bg[_ngcontent-%COMP%]{\r\n    background: url('home acc.svg') no-repeat;\r\n    \r\n    background-position-y: 0px;\r\n    \r\n\r\n}\r\n\r\n\r\n.row2[_ngcontent-%COMP%]{\r\n    margin-top: 100px;\r\n    margin-left: 15%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZWFjY2Vzcy9ob21lYWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOzs7QUFHQTtJQUNJLGtCQUFrQjs7QUFFdEI7OztBQUVBO0lBQ0ksV0FBVzs7QUFFZjs7O0FBSUE7SUFDSSx5Q0FBdUQ7O0lBRXZELDBCQUEwQjs7O0FBRzlCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lYWNjZXNzL2hvbWVhY2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG5cclxuLnNsaWRlcl9hcmVhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxufVxyXG5cclxuLkFEYW5pbWF0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iZy9ob21lIGFjYy5zdmcpIG5vLXJlcGVhdDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwcHg7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbi5yb3cye1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeaccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'homeaccess',
          templateUrl: './homeaccess.component.html',
          styleUrls: ['./homeaccess.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/homepage/homepage.component.ts":
  /*!************************************************!*\
    !*** ./src/app/homepage/homepage.component.ts ***!
    \************************************************/

  /*! exports provided: HomepageComponent */

  /***/
  function srcAppHomepageHomepageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mnav_mnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mnav/mnav.component */
    "./src/app/mnav/mnav.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../mfooter/mfooter.component */
    "./src/app/mfooter/mfooter.component.ts");

    var HomepageComponent = /*#__PURE__*/function () {
      function HomepageComponent() {
        _classCallCheck(this, HomepageComponent);
      }

      _createClass(HomepageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomepageComponent;
    }();

    HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)();
    };

    HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["homepage"]],
      decls: 27,
      vars: 18,
      consts: [[1, "slider_area"], ["autoplay", "", "muted", "", "loop", "", 1, "ADanimation"], ["src", "../assets/animation/AD.mp4"], [1, "bg"], [1, "row2"], [1, "col-md-6", "col-lg-4"], ["data-wow-duration", "1s", "data-wow-delay", ".4s", 1, "single_works", "wow", "fadeInUp"], [1, "row"], [3, "imgSrc", "price"], [1, "divm"], [1, "nav", "nav-pills", "nav-fill"], ["routerLink", "/ourproducts", 1, "nav-item", "nav-link1"]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "New Arrivals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "product", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "product", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "product", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "product", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "product", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "product", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "product", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "product", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "product", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nav", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "More Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mfooter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/homepg/sssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/homepg/sssssssssa.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/homepg/sssssssssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/homepg/Untitled-3.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/homepg/Untitled-3s.jpg")("price", "$50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/homepg/Untitled-3ss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/homepg/Untitled-3sssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/homepg/Untitled-3sssssssssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/homepg/Untitled-4.jpg")("price", "LBP50,000");
        }
      },
      directives: [_mnav_mnav_component__WEBPACK_IMPORTED_MODULE_1__["MnavComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_4__["MfooterComponent"]],
      styles: [".row[_ngcontent-%COMP%]{\r\n     margin: auto;\r\n     width: 80%;\r\n }\r\n \r\n\r\n\r\n  .slider_area[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n   \r\n}\r\n \r\n\r\n\r\n  .ADanimation[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  \r\n}\r\n \r\n\r\n\r\n  .divm[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 50%;\r\n    padding: 10px;\r\n  }\r\n \r\n\r\n\r\n  .row2[_ngcontent-%COMP%]{\r\n      margin-top: 100px;\r\n      margin-left: 17.5%;\r\n  }\r\n \r\n\r\n\r\n  .bg[_ngcontent-%COMP%]{\r\n      background: url('bg.svg') no-repeat;\r\n      background-size: cover;\r\n      padding-top: 10%;\r\n      padding-bottom: 10%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0NBQ0M7S0FDSSxZQUFZO0tBQ1osVUFBVTtDQUNkOzs7O0VBSUM7SUFDRSxrQkFBa0I7O0FBRXRCOzs7O0VBRUE7SUFDSSxXQUFXOztBQUVmOzs7O0VBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7RUFDZjs7OztFQUVBO01BQ0ksaUJBQWlCO01BQ2pCLGtCQUFrQjtFQUN0Qjs7OztFQUVBO01BQ0ksbUNBQWlEO01BQ2pELHNCQUFzQjtNQUN0QixnQkFBZ0I7TUFDaEIsbUJBQW1CO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gLnJvd3tcclxuICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgd2lkdGg6IDgwJTtcclxuIH1cclxuIFxyXG5cclxuXHJcbiAgLnNsaWRlcl9hcmVhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBcclxufVxyXG5cclxuLkFEYW5pbWF0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbn1cclxuXHJcbi5kaXZtIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLnJvdzJ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTcuNSU7XHJcbiAgfVxyXG5cclxuICAuYmd7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmcvYmcuc3ZnKSBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMCU7XHJcbiAgfVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'homepage',
          templateUrl: './homepage.component.html',
          styleUrls: ['./homepage.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mbutton/mbutton.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/mbutton/mbutton.component.ts ***!
    \**********************************************/

  /*! exports provided: MbuttonComponent */

  /***/
  function srcAppMbuttonMbuttonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MbuttonComponent", function () {
      return MbuttonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MbuttonComponent = /*#__PURE__*/function () {
      function MbuttonComponent() {
        _classCallCheck(this, MbuttonComponent);

        this.btnname = '';
      }

      _createClass(MbuttonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MbuttonComponent;
    }();

    MbuttonComponent.ɵfac = function MbuttonComponent_Factory(t) {
      return new (t || MbuttonComponent)();
    };

    MbuttonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MbuttonComponent,
      selectors: [["mbutton"]],
      inputs: {
        btnname: "btnname"
      },
      decls: 3,
      vars: 1,
      consts: [[1, "Mbutton"]],
      template: function MbuttonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.btnname);
        }
      },
      styles: [".Mbutton[_ngcontent-%COMP%]  {\r\n    background-color: white;\r\n    border: 1.5px solid black;\r\n    border-radius: 16px;\r\n    font-style: normal;\r\n    font-family: candara ;\r\n    color:#f69320;\r\n    padding: 16px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    transition-duration: 0.4s;\r\n    cursor: pointer;\r\n \r\n    \r\n}\r\n\r\n.Mbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: relative;\r\n    transition-duration: 0.4s;\r\n   \r\n  }\r\n\r\n.Mbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\r\n    content: '\\00bb';\r\n    position: absolute;\r\n    opacity: 0;\r\n    top: 0;\r\n    right: -20px;\r\n    transition-duration: 0.4s;\r\n  }\r\n\r\n.Mbutton[_ngcontent-%COMP%]:hover {\r\n    background-color: #f69320;\r\n    border: 2px;\r\n    color: white;\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\r\n    \r\n  }\r\n\r\n.Mbutton[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n    padding-right: 25px;\r\n  }\r\n\r\n.Mbutton[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:after {\r\n    opacity: 1;\r\n    right: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWJ1dHRvbi9tYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsZUFBZTs7O0FBR25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIseUJBQXlCOztFQUUzQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixZQUFZO0lBQ1oseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUVBQXlFOztFQUUzRTs7QUFJQTtJQUNFLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLFVBQVU7SUFDVixRQUFRO0VBQ1YiLCJmaWxlIjoic3JjL2FwcC9tYnV0dG9uL21idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5NYnV0dG9uICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC1mYW1pbHk6IGNhbmRhcmEgO1xyXG4gICAgY29sb3I6I2Y2OTMyMDtcclxuICAgIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiBcclxuICAgIFxyXG59XHJcblxyXG4uTWJ1dHRvbiBzcGFuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAuTWJ1dHRvbiBzcGFuOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdcXDAwYmInO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAtMjBweDtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XHJcbiAgfVxyXG5cclxuICAuTWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjY5MzIwO1xyXG4gICAgYm9yZGVyOiAycHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMTZweCAwIHJnYmEoMCwwLDAsMC4yNCksMCAxN3B4IDUwcHggMCByZ2JhKDAsMCwwLDAuMTkpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuIFxyXG4gIFxyXG4gIC5NYnV0dG9uOmhvdmVyIHNwYW4ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLk1idXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MbuttonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mbutton',
          templateUrl: './mbutton.component.html',
          styleUrls: ['./mbutton.component.css']
        }]
      }], function () {
        return [];
      }, {
        btnname: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/mfooter/mfooter.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/mfooter/mfooter.component.ts ***!
    \**********************************************/

  /*! exports provided: MfooterComponent */

  /***/
  function srcAppMfooterMfooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MfooterComponent", function () {
      return MfooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MfooterComponent = /*#__PURE__*/function () {
      function MfooterComponent() {
        _classCallCheck(this, MfooterComponent);
      }

      _createClass(MfooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MfooterComponent;
    }();

    MfooterComponent.ɵfac = function MfooterComponent_Factory(t) {
      return new (t || MfooterComponent)();
    };

    MfooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MfooterComponent,
      selectors: [["mfooter"]],
      decls: 82,
      vars: 0,
      consts: [[1, "footer"], [1, "footer_top"], [1, "container"], [1, "page-footer", "font-small", "mdb-color", "pt-4"], [1, "container", "text-center", "text-md-left"], [1, "row", "text-center", "text-md-left", "mt-3", "pb-3"], [1, "w-100", "clearfix", "d-md-none"], [1, "col-md-2", "col-lg-2", "col-xl-2", "mx-auto", "mt-3"], [1, "fT", "text-uppercase", "mb-4", "font-weight-bold"], [1, "fp"], ["routerLink", "/homeaccess", 1, "fl"], ["routerLink", "/wear", 1, "fl"], ["routerLink", "/souvenir", 1, "fl"], [1, "col-md-4", "col-lg-3", "col-xl-3", "mx-auto", "mt-3"], [1, "col-md-3", "col-lg-2", "col-xl-2", "mx-auto", "mt-3"], ["href", "#!", 1, "fl"], [1, "rowy", "d-flex", "align-items-center"], [1, "col-md-7", "col-lg-8"], [1, "social_icons_rounded"], ["href", "#", 1, "gap", "f_facebook"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "#", 1, "gap", "t_twitter"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["href", "#", 1, "gap", "g_google"], ["aria-hidden", "true", 1, "fa", "fa-google-plus"], ["href", "#", 1, "gap", "instagram"], ["aria-hidden", "true", 1, "fa", "fa-instagram"], [1, "col-md-5", "col-lg-4", "ml-lg-0"], [1, ""], [1, "rowt", "col-xl-4", "col-md-6", "col-lg-5"], ["data-wow-duration", "1s", "data-wow-delay", ".3s", 1, "footer_widget", "wow", "fadeInUp"], ["action", "#", 1, "newsletter_form"], ["type", "text", "placeholder", "Enter your mail"], ["type", "submit"], [1, "leftbcorner"], ["src", "../../assets/bottomimg/Untitled-6.png", 1, "leftbimg"]],
      template: function MfooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "footer", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Furniture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Bags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Shoes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Souvenir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " 1st floor, Sara Complex, MarElias street, Mina, Tripoli, Lebanon.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " www.Bendy.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " +961-81890569 /");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "+961-65890569");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " P.o.box: 1715, Tripoli-Lebanon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "hr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h6", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Customer Service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Track your order");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Site Map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "form", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Register now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".page-footer[_ngcontent-%COMP%]{\r\n    margin-right: 20%;\r\n    \r\n}\r\n\r\n\r\n\r\n.leftbcorner[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n\r\n\r\n.leftbimg[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    height: auto;\r\n    width: 20%;\r\n}\r\n\r\n\r\n\r\n.fT[_ngcontent-%COMP%]{\r\n    \r\n    font-family: \"candara bold\", sans-serif;\r\n    color: #f69320;\r\n}\r\n\r\n\r\n\r\n.fp[_ngcontent-%COMP%]{\r\ncolor: black;\r\nfont-family: \"roboto\",sans-serif;\r\n  }\r\n\r\n\r\n\r\n.fl[_ngcontent-%COMP%]{\r\n    font-family: \"roboto\",sans-serif;\r\n}\r\n\r\n\r\n\r\n.fl[_ngcontent-%COMP%]:hover{\r\n    color: #f69320;\r\n    \r\n      }\r\n\r\n\r\n\r\n.social_icons_rounded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    list-style: none;\r\n    margin-top: 10px;\r\n    \r\n}\r\n\r\n\r\n\r\n.social_icons_rounded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    border-radius: 50%;\r\n    line-height: 40px;\r\n    color: #e0e0e0;\r\n    height: 40px;\r\n    width: 40px;\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n    border: 1px solid #e0e0e0\r\n}\r\n\r\n\r\n\r\n.social_icons_rounded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 16px\r\n}\r\n\r\n\r\n\r\n.f_facebook[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n    background: #f69320;\r\n    border: 1px solid #f69320\r\n}\r\n\r\n\r\n\r\n.t_twitter[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n    background: #f69320;\r\n    border: 1px solid #f69320\r\n}\r\n\r\n\r\n\r\n.g_google[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n    background: #f69320;\r\n    border: 1px solid #f69320\r\n}\r\n\r\n\r\n\r\n.instagram[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n    background: #f69320;\r\n    border: 1px solid #f69320\r\n}\r\n\r\n\r\n\r\n.gap[_ngcontent-%COMP%] {\r\n    margin-left: 15px\r\n}\r\n\r\n\r\n\r\n.rowy[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 47%;\r\n}\r\n\r\n\r\n\r\n.rowt[_ngcontent-%COMP%]{\r\n   margin-left: 26%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWZvb3Rlci9tZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7O0FBRXJCOzs7O0FBSUE7SUFDSSxrQkFBa0I7QUFDdEI7Ozs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0FBQ2Q7Ozs7QUFJQTs7SUFFSSx1Q0FBdUM7SUFDdkMsY0FBYztBQUNsQjs7OztBQUVBO0FBQ0EsWUFBWTtBQUNaLGdDQUFnQztFQUM5Qjs7OztBQUVGO0lBQ0ksZ0NBQWdDO0FBQ3BDOzs7O0FBRUU7SUFDRSxjQUFjOztNQUVaOzs7O0FBR047SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjs7QUFFcEI7Ozs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkI7QUFDSjs7OztBQUVBO0lBQ0k7QUFDSjs7OztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQjtBQUNKOzs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CO0FBQ0o7Ozs7QUFNQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkI7QUFDSjs7OztBQU1BO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQjtBQUNKOzs7O0FBRUE7SUFDSTtBQUNKOzs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOzs7O0FBRUE7R0FDRyxnQkFBZ0I7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tZm9vdGVyL21mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLWZvb3RlcntcclxuICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuLmxlZnRiY29ybmVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubGVmdGJpbWd7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcblxyXG5cclxuLmZUe1xyXG4gICAgXHJcbiAgICBmb250LWZhbWlseTogXCJjYW5kYXJhIGJvbGRcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZjY5MzIwO1xyXG59XHJcblxyXG4uZnB7XHJcbmNvbG9yOiBibGFjaztcclxuZm9udC1mYW1pbHk6IFwicm9ib3RvXCIsc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4uZmx7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG9cIixzYW5zLXNlcmlmO1xyXG59ICBcclxuXHJcbiAgLmZsOmhvdmVye1xyXG4gICAgY29sb3I6ICNmNjkzMjA7XHJcbiAgICBcclxuICAgICAgfVxyXG5cclxuXHJcbi5zb2NpYWxfaWNvbnNfcm91bmRlZCB1bCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnNvY2lhbF9pY29uc19yb3VuZGVkIHVsIGxpIGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UwZTBlMFxyXG59XHJcblxyXG4uc29jaWFsX2ljb25zX3JvdW5kZWQgdWwgbGkgYSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweFxyXG59XHJcblxyXG4uZl9mYWNlYm9vazpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmNjkzMjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjY5MzIwXHJcbn1cclxuXHJcbi50X3R3aXR0ZXI6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjY5MzIwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y2OTMyMFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmdfZ29vZ2xlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2Y2OTMyMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNjkzMjBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5pbnN0YWdyYW06aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjY5MzIwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y2OTMyMFxyXG59XHJcblxyXG4uZ2FwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4XHJcbn1cclxuXHJcblxyXG4ucm93eXtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA0NyU7XHJcbn1cclxuXHJcbi5yb3d0e1xyXG4gICBtYXJnaW4tbGVmdDogMjYlO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MfooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mfooter',
          templateUrl: './mfooter.component.html',
          styleUrls: ['./mfooter.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/mnav/mnav.component.ts":
  /*!****************************************!*\
    !*** ./src/app/mnav/mnav.component.ts ***!
    \****************************************/

  /*! exports provided: MnavComponent */

  /***/
  function srcAppMnavMnavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MnavComponent", function () {
      return MnavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MnavComponent = /*#__PURE__*/function () {
      function MnavComponent() {
        _classCallCheck(this, MnavComponent);
      }

      _createClass(MnavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MnavComponent;
    }();

    MnavComponent.ɵfac = function MnavComponent_Factory(t) {
      return new (t || MnavComponent)();
    };

    MnavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MnavComponent,
      selectors: [["mnav"]],
      decls: 48,
      vars: 0,
      consts: [[1, "header-area"], ["id", "sticky-header", 1, "main-header-area"], [1, "container-fluid"], [1, "header_bottom_border"], [1, "row", "align-items-center"], [1, "col-xl-3", "col-lg-2"], [1, "logo"], ["routerLink", "/homepage"], ["src", "../assets/logo.png", "alt", "", 2, "height", "48px", "width", "95px"], [1, "col-xl-6", "col-lg-7"], [1, "main-menu", "d-none", "d-lg-block"], ["id", "navigation"], ["routerLink", "/ourproducts"], [1, "ti-angle-down"], [1, "submenu"], ["routerLink", "/homeaccess"], ["routerLink", "/wear"], ["routerLink", "/souvenir"], ["routerLink", "/aboutncontact"], [1, "col-xl-3", "col-lg-3", "d-none", "d-lg-block"], [1, "col-12"], [1, "mobile_menu", "d-block", "d-lg-none"]],
      template: function MnavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Our Products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Home Accesories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Furniture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Accessories");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Shoes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Bags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Souvenir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".header-area[_ngcontent-%COMP%]   .main-header-area[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #f69320;\r\n  border: 2px;\r\n  color: white;\r\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\r\n  padding: 16px 32px;\r\n \r\n}\r\n.header-area[_ngcontent-%COMP%]   .main-header-area[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color:#f69320;\r\n  font-size: 15px;\r\n  text-transform: capitalize;\r\n  font-weight: 500;\r\n  display: inline-block;\r\n  border-radius: 10px;\r\n  padding: 20px;\r\n  font-family: \"Roboto\", sans-serif;\r\n  position: relative;\r\n  text-transform: capitalize;\r\n  border: 2px;\r\n  color: white;\r\n  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\n.header-area[_ngcontent-%COMP%]   .main-header-area[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .submenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  padding: 10px 15px;\r\n  position: inherit;\r\n  transition: 0.3s;\r\n  display: block;\r\n  color: #000;\r\n  border-radius: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW5hdi9tbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFO0FBQzVFO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUVBQXlFO0VBQ3pFLGtCQUFrQjs7QUFFcEI7QUFHQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlFQUF5RTtBQUMzRTtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUlqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tbmF2L21uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGxpbmUgMjE1LCAuLi8uLi9BcmFmYXRoL0NML0RlY2VtYmVyLzIzNC4gRmluYW5jZS9IVE1ML3Njc3MvX2hlYWRlci5zY3NzICovXHJcbi5oZWFkZXItYXJlYSAubWFpbi1oZWFkZXItYXJlYSAubG9nbyAubWFpbi1tZW51IHVsIGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNjkzMjA7XHJcbiAgYm9yZGVyOiAycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjI0KSwwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbiAgcGFkZGluZzogMTZweCAzMnB4O1xyXG4gXHJcbn1cclxuXHJcblxyXG4uaGVhZGVyLWFyZWEgLm1haW4taGVhZGVyLWFyZWEgLm1haW4tbWVudSB1bCBsaSBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmNjkzMjA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgYm9yZGVyOiAycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNnB4IDAgcmdiYSgwLDAsMCwwLjI0KSwwIDE3cHggNTBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XHJcbn1cclxuXHJcbi5oZWFkZXItYXJlYSAubWFpbi1oZWFkZXItYXJlYSAubWFpbi1tZW51IHVsIGxpIC5zdWJtZW51IGxpIGEge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAwLjNzO1xyXG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzAwMDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MnavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mnav',
          templateUrl: './mnav.component.html',
          styleUrls: ['./mnav.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/notfound/notfound.component.ts":
  /*!************************************************!*\
    !*** ./src/app/notfound/notfound.component.ts ***!
    \************************************************/

  /*! exports provided: NotfoundComponent */

  /***/
  function srcAppNotfoundNotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function () {
      return NotfoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotfoundComponent = /*#__PURE__*/function () {
      function NotfoundComponent() {
        _classCallCheck(this, NotfoundComponent);
      }

      _createClass(NotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotfoundComponent;
    }();

    NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) {
      return new (t || NotfoundComponent)();
    };

    NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotfoundComponent,
      selectors: [["notfound"]],
      decls: 1,
      vars: 0,
      consts: [["src", "../../assets/pgnotfound.png", 2, "width", "100%", "height", "100%"]],
      template: function NotfoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'notfound',
          templateUrl: './notfound.component.html',
          styleUrls: ['./notfound.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/ourproducts/ourproducts.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ourproducts/ourproducts.component.ts ***!
    \******************************************************/

  /*! exports provided: OurproductsComponent */

  /***/
  function srcAppOurproductsOurproductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OurproductsComponent", function () {
      return OurproductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mnav_mnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mnav/mnav.component */
    "./src/app/mnav/mnav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../mfooter/mfooter.component */
    "./src/app/mfooter/mfooter.component.ts");

    var OurproductsComponent = /*#__PURE__*/function () {
      function OurproductsComponent() {
        _classCallCheck(this, OurproductsComponent);
      }

      _createClass(OurproductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OurproductsComponent;
    }();

    OurproductsComponent.ɵfac = function OurproductsComponent_Factory(t) {
      return new (t || OurproductsComponent)();
    };

    OurproductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OurproductsComponent,
      selectors: [["ourproducts"]],
      decls: 64,
      vars: 72,
      consts: [[1, "bg"], [1, "rowy"], [1, "col-lg-12"], [1, "section_title", "text-center", "mb-90"], ["data-wow-duration", "1s", "data-wow-delay", ".1s", 1, "wow", "fadeInUp"], ["data-wow-duration", "1s", "data-wow-delay", ".2s", 1, "wow", "fadeInUp"], [1, "divo"], [1, "nav", "nav-pills"], ["routerLink", "/homeaccess", 1, "nav-item", "nav-link"], ["routerLink", "/wear", 1, "nav-item", "nav-link"], ["routerLink", "/souvenir", 1, "nav-item", "nav-link"], [1, "row"], [3, "imgSrc", "price"]],
      template: function OurproductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Our Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nav", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Wear");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Souvenir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "product", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mfooter");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/dSAFDa.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/dsD.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/S.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/sa.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/saaaaaa.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/sasd.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/ss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/sss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/sssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/ssssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/sssssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/HOme acce/Untitled-4.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/a.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/afvgsdg.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/as.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/bfggfx.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/bfgnfg.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/bnfgtnfgt.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/gfngf.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/nfgnfgxngf.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/Untitled-2.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/Untitled-4.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/Untitled-4dbgdf.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/Untitled-254.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/d.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/bsdggf.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/dsvsdv.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/fgnbdfgnfgnf.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/jdtygyjmgmndtyyjmfgmk.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/s.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/ss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/sss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/ssssa.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/ssssssssssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/sssssssssssssssssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/Untitled.jpg")("price", "LBP50,000");
        }
      },
      directives: [_mnav_mnav_component__WEBPACK_IMPORTED_MODULE_1__["MnavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _product_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"], _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_4__["MfooterComponent"]],
      styles: [".row[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 80%;\r\n}\r\n\r\n.divo[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 90%;\r\n    padding: 10px;\r\n    padding-left: 30px;\r\n    \r\n}\r\n\r\n@media (min-width: 601px){\r\n    .divo[_ngcontent-%COMP%]{\r\n        margin-left: 15%;\r\n    }\r\n}\r\n\r\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n    border-radius: .25rem;\r\n    border: solid white;\r\n    margin-top: 10px;\r\n    margin-left: 50px;\r\n    padding-left: 100px;\r\n    padding-right: 100px;\r\n    background-color: #f69320;\r\n    \r\n\r\n}\r\n\r\n.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\r\n    border-radius: .25rem;\r\n    border: solid white;\r\n    margin-top: 10px;\r\n    margin-left: 50px;\r\n    padding-left: 100px;\r\n    padding-right: 100px;\r\n    background-color: white;\r\n    color: #f69320;\r\n    \r\n}\r\n\r\n@media (max-width:1350px){\r\n    .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n        padding-right: 70px;\r\n        padding-left: 70px;\r\n    }\r\n}\r\n\r\n@media (max-width:970px){\r\n    .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{\r\n        padding-right: 50px;\r\n        padding-left: 50px;\r\n        margin-left: 30px;\r\n    }\r\n}\r\n\r\n@media (max-width:750px){\r\n    .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n        padding-right: 40px;\r\n        padding-left: 40px;\r\n        margin-left: 10px;\r\n    }\r\n}\r\n\r\n@media (max-width:600px){\r\n    .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover, .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n        width: 400px;\r\n        margin-left: 10px;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.rowy[_ngcontent-%COMP%]{\r\n    width: 90%;\r\n    margin: auto;\r\n}\r\n\r\n.bg[_ngcontent-%COMP%]{\r\n    background: url('our product.svg') no-repeat;\r\n    background-position-y: 0.8%;\r\n    \r\n}\r\n\r\n@media(max-width:1010px){\r\n    .bg[_ngcontent-%COMP%]{\r\n        background-position-y: 0%; \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VycHJvZHVjdHMvb3VycHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHlCQUF5Qjs7O0FBRzdCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGNBQWM7O0FBRWxCOztBQUdBO0lBQ0k7O1FBRUksbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7O1FBRUksbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJOztRQUVJLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7SUFDSTs7UUFFSSxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKOztBQUlBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSw0Q0FBMEQ7SUFDMUQsMkJBQTJCOztBQUUvQjs7QUFDQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9vdXJwcm9kdWN0cy9vdXJwcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvd3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5kaXZve1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDYwMXB4KXtcclxuICAgIC5kaXZve1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlcjogc29saWQgd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjY5MzIwO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4ubmF2LXBpbGxzIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXI6IHNvbGlkIHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogI2Y2OTMyMDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTM1MHB4KXtcclxuICAgIC5uYXYtcGlsbHMgLm5hdi1saW5rOmhvdmVyLFxyXG4gICAgLm5hdi1waWxscyAubmF2LWxpbmt7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNzBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjk3MHB4KXtcclxuICAgIC5uYXYtcGlsbHMgLm5hdi1saW5rOmhvdmVyLFxyXG4gICAgICAubmF2LXBpbGxzIC5uYXYtbGlua3tcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzUwcHgpe1xyXG4gICAgLm5hdi1waWxscyAubmF2LWxpbms6aG92ZXIsXHJcbiAgICAubmF2LXBpbGxzIC5uYXYtbGluayB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgIC5uYXYtcGlsbHMgLm5hdi1saW5rOmhvdmVyLFxyXG4gICAgLm5hdi1waWxscyAubmF2LWxpbmsge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuLnJvd3l7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iZy9vdXIgcHJvZHVjdC5zdmcpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMC44JTtcclxuICAgIFxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6MTAxMHB4KXtcclxuICAgIC5iZ3tcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDAlOyBcclxuICAgIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurproductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ourproducts',
          templateUrl: './ourproducts.component.html',
          styleUrls: ['./ourproducts.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product/product.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/product/product.component.ts ***!
    \**********************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductComponent = /*#__PURE__*/function () {
      function ProductComponent() {
        _classCallCheck(this, ProductComponent);

        this.imgSrc = '';
        this.price = '';
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductComponent;
    }();

    ProductComponent.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)();
    };

    ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["product"]],
      inputs: {
        imgSrc: "imgSrc",
        price: "price"
      },
      decls: 10,
      vars: 2,
      consts: [[1, "row"], ["data-wow-duration", "1.2s", "data-wow-delay", ".5s", 1, "wow", "fadeInLeft"], [1, "col-md-12"], [1, "hovereffect"], ["alt", "", 3, "src"], [1, "overlay"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.price);
        }
      },
      styles: [".hovereffect[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    float: left;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-align: center;\r\n\tcursor: default;\r\n\tborder-radius: 10px;\r\n}\r\n.hovereffect[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    left: 0;\r\n\ttop: auto;\r\n\tbottom: 0;\r\n\tpadding: 1em;\r\n\theight: 4.75em;\r\n\tbackground: #f69320;\r\n\tcolor: white;\r\n\ttransition: transform 0.35s;\r\n\ttransform: translate3d(0,100%,0);\r\n\tvisibility: hidden;\r\n\t\r\n\r\n}\r\n.hovereffect[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n\ttransition: transform 0.35s;\r\n}\r\n.hovereffect[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\ntransform: translate3d(0,-10%,0);\r\n}\r\n.hovereffect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    text-align: center;\r\n    position: relative;\r\n    font-size: 17px;\r\n    padding: 10px;\r\n    background: #f69320;\r\n\tfloat: left;\r\n\tmargin: 0px;\r\n\tdisplay: inline-block;\r\n\tborder-radius: 10px;\r\n}\r\n.hovereffect[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    text-align: center;\r\n    position: relative;\r\n    font-size: 10px;\r\n    padding: 10px;\r\n\tbackground:#f69320;\r\n    opacity: 90%;\r\n\tfloat: left;\r\n\tmargin-left: 5px;\r\n\tdisplay: inline-block;\r\n\tborder-radius: 10px;\r\n}\r\n.hovereffect[_ngcontent-%COMP%]   a.info[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    padding: 7px 14px;\r\n    text-transform: uppercase;\r\n\tcolor: #fff;\r\n\tborder: 1px solid #fff;\r\n\tmargin: 50px 0 0 0;\r\n\tbackground-color: transparent;\r\n\t\r\n}\r\n.hovereffect[_ngcontent-%COMP%]   a.info[_ngcontent-%COMP%]:hover {\r\n\tbox-shadow: 0 0 5px #fff;\r\n\t\r\n}\r\n.hovereffect[_ngcontent-%COMP%]   p.icon-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tfloat: right;\r\n\tcolor: #f69320;\r\n\tfont-size: 15px;\r\n\tfont-family: bold;\r\n\t\r\n\t\r\n}\r\n\r\n.hovereffect[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .hovereffect[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .hovereffect[_ngcontent-%COMP%]   p.icon-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\ttransition: transform 0.35s;\r\n\ttransform: translate3d(0,200%,0);\r\n\tvisibility: visible;\r\n}\r\n.hovereffect[_ngcontent-%COMP%]   p.icon-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\r\n\tdisplay: inline-block;\r\n\tpadding: 8px 10px;\r\n\tspeak: none;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\n.hovereffect[_ngcontent-%COMP%]:hover   .overlay[_ngcontent-%COMP%], .hovereffect[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%], .hovereffect[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .hovereffect[_ngcontent-%COMP%]:hover   p.icon-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\ttransform: translate3d(0,0,0);\r\n}\r\n.hovereffect[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\r\n transition-delay: 0.05s;\r\n    \r\n}\r\n.hovereffect[_ngcontent-%COMP%]:hover   h1[_ngcontent-%COMP%] {\r\n transition-delay: 0.05s;\r\n    \r\n}\r\n.hovereffect[_ngcontent-%COMP%]:hover   p.icon-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\r\n\ttransition-delay: 0.1s;\r\n}\r\n.hovereffect[_ngcontent-%COMP%]:hover   p.icon-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\r\n\ttransition-delay: 0.15s;\r\n}\r\n.hovereffect[_ngcontent-%COMP%]:hover   p.icon-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\r\n\ttransition-delay: 0.2s;\r\n}\r\n.row[_ngcontent-%COMP%]{\r\n    margin-top: 40px;\r\n\tpadding-left: 100px;\r\n\tpadding-right: 100px;\r\n\tmargin-bottom: 100px;\r\n\tmargin-left: 10%;\r\n}\r\n.img-responsive[_ngcontent-%COMP%]{\r\n\tborder-radius: 10px;\r\n\twidth: 250px;\r\n\theight: 250px;\r\n}\r\n@media (min-width:601px){\r\n\t.img-responsive[_ngcontent-%COMP%]{\r\n\t\twidth: 150px;\r\n\t\theight: 150px;\r\n\t}\r\n\t.row[_ngcontent-%COMP%]{\r\n\t\tpadding-left: 50px;\r\n\tpadding-right: 50px;\r\n\t\r\n\t\r\n}\r\n\t\r\n}\r\n@media (min-width:971px){\r\n\t.img-responsive[_ngcontent-%COMP%]{\r\n\t\twidth: 250px;\r\n\t\theight: 250px;\r\n\t}\r\n\t.row[_ngcontent-%COMP%]{\r\n\t\tpadding-left: 70px;\r\n\tpadding-right: 70px;\r\n\t\r\n\t\r\n}\r\n\t\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNyQixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixPQUFPO0NBQ1YsU0FBUztDQUNULFNBQVM7Q0FDVCxZQUFZO0NBQ1osY0FBYztDQUNkLG1CQUFtQjtDQUNuQixZQUFZO0NBRVosMkJBQTJCO0NBRTNCLGdDQUFnQztDQUNoQyxrQkFBa0I7OztBQUduQjtBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtDQUVyQiwyQkFBMkI7QUFDNUI7QUFFQTtBQUVDLGdDQUFnQztBQUNqQztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0NBQ3RCLFdBQVc7Q0FDWCxXQUFXO0NBQ1gscUJBQXFCO0NBQ3JCLG1CQUFtQjtBQUNwQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0NBQ2hCLGtCQUFrQjtJQUNmLFlBQVk7Q0FDZixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtDQUNyQixtQkFBbUI7QUFDcEI7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtDQUM1QixXQUFXO0NBQ1gsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQiw2QkFBNkI7O0FBRTlCO0FBQ0E7Q0FDQyx3QkFBd0I7O0FBRXpCO0FBR0E7Q0FDQyxZQUFZO0NBQ1osY0FBYztDQUNkLGVBQWU7Q0FDZixpQkFBaUI7OztBQUdsQjtBQUVBOzs7RUFHRTtBQUVGOzs7Q0FJQywyQkFBMkI7Q0FFM0IsZ0NBQWdDO0NBQ2hDLG1CQUFtQjtBQUNwQjtBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLGlCQUFpQjtDQUNqQixXQUFXO0NBQ1gsbUNBQW1DO0NBQ25DLGtDQUFrQztBQUNuQztBQUdBOzs7O0NBS0MsNkJBQTZCO0FBQzlCO0FBRUE7Q0FFSSx1QkFBdUI7O0FBRTNCO0FBRUE7Q0FFSSx1QkFBdUI7O0FBRTNCO0FBRUE7Q0FFQyxzQkFBc0I7QUFDdkI7QUFFQTtDQUVDLHVCQUF1QjtBQUN4QjtBQUVBO0NBRUMsc0JBQXNCO0FBQ3ZCO0FBRUE7SUFDSSxnQkFBZ0I7Q0FDbkIsbUJBQW1CO0NBQ25CLG9CQUFvQjtDQUNwQixvQkFBb0I7Q0FDcEIsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLGFBQWE7QUFDZDtBQUdBO0NBQ0M7RUFDQyxZQUFZO0VBQ1osYUFBYTtDQUNkO0NBQ0E7RUFDQyxrQkFBa0I7Q0FDbkIsbUJBQW1COzs7QUFHcEI7O0FBRUE7QUFFQTtDQUNDO0VBQ0MsWUFBWTtFQUNaLGFBQWE7Q0FDZDtDQUNBO0VBQ0Msa0JBQWtCO0NBQ25CLG1CQUFtQjs7O0FBR3BCOztBQUVBIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG92ZXJlZmZlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y3Vyc29yOiBkZWZhdWx0O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmhvdmVyZWZmZWN0IC5vdmVybGF5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGxlZnQ6IDA7XHJcblx0dG9wOiBhdXRvO1xyXG5cdGJvdHRvbTogMDtcclxuXHRwYWRkaW5nOiAxZW07XHJcblx0aGVpZ2h0OiA0Ljc1ZW07XHJcblx0YmFja2dyb3VuZDogI2Y2OTMyMDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjM1cztcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zNXM7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMTAwJSwwKTtcclxuXHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHJcblxyXG59XHJcblxyXG4uaG92ZXJlZmZlY3QgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xyXG59XHJcblxyXG4uaG92ZXJlZmZlY3Q6aG92ZXIgaW1nIHtcclxuLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTEwJSwwKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsLTEwJSwwKTtcclxufVxyXG5cclxuLmhvdmVyZWZmZWN0IGgyIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjY5MzIwO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uaG92ZXJlZmZlY3QgaDEge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHRiYWNrZ3JvdW5kOiNmNjkzMjA7XHJcbiAgICBvcGFjaXR5OiA5MCU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuXHJcbi5ob3ZlcmVmZmVjdCBhLmluZm8ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogN3B4IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcblx0bWFyZ2luOiA1MHB4IDAgMCAwO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFxyXG59XHJcbi5ob3ZlcmVmZmVjdCBhLmluZm86aG92ZXIge1xyXG5cdGJveC1zaGFkb3c6IDAgMCA1cHggI2ZmZjtcclxuXHRcclxufVxyXG5cclxuXHJcbi5ob3ZlcmVmZmVjdCBwLmljb24tbGlua3MgYSB7XHJcblx0ZmxvYXQ6IHJpZ2h0O1xyXG5cdGNvbG9yOiAjZjY5MzIwO1xyXG5cdGZvbnQtc2l6ZTogMTVweDtcclxuXHRmb250LWZhbWlseTogYm9sZDtcclxuXHRcclxuXHRcclxufVxyXG5cclxuLyouaG92ZXJlZmZlY3Q6aG92ZXIgcC5pY29uLWxpbmtzIGE6aG92ZXIsXHJcbi5ob3ZlcmVmZmVjdDpob3ZlciBwLmljb24tbGlua3MgYTpmb2N1cyB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG59Ki9cclxuXHJcbi5ob3ZlcmVmZmVjdCBoMixcclxuLmhvdmVyZWZmZWN0IGgxLFxyXG4uaG92ZXJlZmZlY3QgcC5pY29uLWxpbmtzIGEge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zNXM7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMzVzO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDIwMCUsMCk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDIwMCUsMCk7XHJcblx0dmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmhvdmVyZWZmZWN0IHAuaWNvbi1saW5rcyBhIHNwYW46YmVmb3JlIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogOHB4IDEwcHg7XHJcblx0c3BlYWs6IG5vbmU7XHJcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuXHJcbi5ob3ZlcmVmZmVjdDpob3ZlciAub3ZlcmxheSxcclxuLmhvdmVyZWZmZWN0OmhvdmVyIGgyLFxyXG4uaG92ZXJlZmZlY3QgaDEsXHJcbi5ob3ZlcmVmZmVjdDpob3ZlciBwLmljb24tbGlua3MgYSB7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsMCwwKTtcclxufVxyXG5cclxuLmhvdmVyZWZmZWN0OmhvdmVyIGgyIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XHJcbiAgICBcclxufVxyXG5cclxuLmhvdmVyZWZmZWN0OmhvdmVyIGgxIHtcclxuXHQtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XHJcbiAgICBcclxufVxyXG5cclxuLmhvdmVyZWZmZWN0OmhvdmVyIHAuaWNvbi1saW5rcyBhOm50aC1jaGlsZCgzKSB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG5cdHRyYW5zaXRpb24tZGVsYXk6IDAuMXM7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdDpob3ZlciBwLmljb24tbGlua3MgYTpudGgtY2hpbGQoMikge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XHJcblx0dHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XHJcbn1cclxuXHJcbi5ob3ZlcmVmZmVjdDpob3ZlciBwLmljb24tbGlua3MgYTpmaXJzdC1jaGlsZCB7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xyXG5cdHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcbn1cclxuXHJcbi5yb3d7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG5cdHBhZGRpbmctbGVmdDogMTAwcHg7XHJcblx0cGFkZGluZy1yaWdodDogMTAwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcblx0bWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLmltZy1yZXNwb25zaXZle1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdGhlaWdodDogMjUwcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo2MDFweCl7XHJcblx0LmltZy1yZXNwb25zaXZle1xyXG5cdFx0d2lkdGg6IDE1MHB4O1xyXG5cdFx0aGVpZ2h0OiAxNTBweDtcclxuXHR9XHJcblx0LnJvd3tcclxuXHRcdHBhZGRpbmctbGVmdDogNTBweDtcclxuXHRwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG5cdFxyXG5cdFxyXG59XHJcblx0XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjk3MXB4KXtcclxuXHQuaW1nLXJlc3BvbnNpdmV7XHJcblx0XHR3aWR0aDogMjUwcHg7XHJcblx0XHRoZWlnaHQ6IDI1MHB4O1xyXG5cdH1cclxuXHQucm93e1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA3MHB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDcwcHg7XHJcblx0XHJcblx0XHJcbn1cclxuXHRcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'product',
          templateUrl: './product.component.html',
          styleUrls: ['./product.component.css']
        }]
      }], function () {
        return [];
      }, {
        imgSrc: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        price: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/souvenir/souvenir.component.ts":
  /*!************************************************!*\
    !*** ./src/app/souvenir/souvenir.component.ts ***!
    \************************************************/

  /*! exports provided: SouvenirComponent */

  /***/
  function srcAppSouvenirSouvenirComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SouvenirComponent", function () {
      return SouvenirComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mnav_mnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mnav/mnav.component */
    "./src/app/mnav/mnav.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mfooter/mfooter.component */
    "./src/app/mfooter/mfooter.component.ts");

    var SouvenirComponent = /*#__PURE__*/function () {
      function SouvenirComponent() {
        _classCallCheck(this, SouvenirComponent);
      }

      _createClass(SouvenirComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SouvenirComponent;
    }();

    SouvenirComponent.ɵfac = function SouvenirComponent_Factory(t) {
      return new (t || SouvenirComponent)();
    };

    SouvenirComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SouvenirComponent,
      selectors: [["souvenir"]],
      decls: 37,
      vars: 24,
      consts: [[1, "bg"], [1, "slider_area"], ["autoplay", "", "muted", "", "loop", "", 1, "ADanimation"], ["src", "../../assets/Souvenir/home4.mp4"], [1, "row"], [3, "imgSrc", "price"], ["aria-label", "Page navigation example", 1, "homeaccessbnav"], [1, "pagination"], [1, "page-item"], ["href", "#", 1, "page-link"]],
      template: function SouvenirComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nav", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mfooter");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/d.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/bsdggf.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/dsvsdv.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/fgnbdfgnfgnf.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/jdtygyjmgmndtyyjmfgmk.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/s.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/ss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/sss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/ssssa.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/ssssssssssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/sssssssssssssssssssss.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Souvenir1/Untitled.jpg")("price", "LBP50,000");
        }
      },
      directives: [_mnav_mnav_component__WEBPACK_IMPORTED_MODULE_1__["MnavComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"], _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_3__["MfooterComponent"]],
      styles: [".row[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 80%;\r\n}\r\n\r\n\r\n.slider_area[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n   \r\n}\r\n\r\n\r\n.ADanimation[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  \r\n}\r\n\r\n\r\n.bg[_ngcontent-%COMP%]{\r\n    background: url('souvenir.svg') no-repeat;\r\n    \r\n    background-position-x: 0px;\r\n    background-position-y: 110px;\r\n\r\n}\r\n\r\n\r\n.leftbcorner[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n\r\n.leftbimg[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    height: auto;\r\n    width: 20%;\r\n}\r\n\r\n\r\n.divm[_ngcontent-%COMP%] {\r\n    margin: auto;\r\n    width: 80%;\r\n   \r\n    border: solid black;\r\n  }\r\n\r\n\r\n.fT[_ngcontent-%COMP%]{\r\n    \r\n    font-family: \"candara bold\", sans-serif;\r\n    color: #f69320;\r\n}\r\n\r\n\r\n.fp[_ngcontent-%COMP%]{\r\ncolor: black;\r\nfont-family: \"roboto\",sans-serif;\r\n  }\r\n\r\n\r\n.fl[_ngcontent-%COMP%]{\r\n    font-family: \"roboto\",sans-serif;\r\n}\r\n\r\n\r\n.fl[_ngcontent-%COMP%]:hover{\r\n    color: #f69320;\r\n    \r\n      }\r\n\r\n\r\n.social_icons_rounded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    list-style: none;\r\n    margin-top: 10px;\r\n    \r\n}\r\n\r\n\r\n.social_icons_rounded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    float: left;\r\n    border-radius: 50%;\r\n    line-height: 40px;\r\n    color: #e0e0e0;\r\n    height: 40px;\r\n    width: 40px;\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n    border: 1px solid #e0e0e0\r\n}\r\n\r\n\r\n.social_icons_rounded[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 16px\r\n}\r\n\r\n\r\n.f_facebook[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n    background: #f69320;\r\n    border: 1px solid #f69320\r\n}\r\n\r\n\r\n.t_twitter[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n    background: #f69320;\r\n    border: 1px solid #f69320\r\n}\r\n\r\n\r\n.g_google[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n    background: #f69320;\r\n    border: 1px solid #f69320\r\n}\r\n\r\n\r\n.instagram[_ngcontent-%COMP%]:hover {\r\n    color: #fff;\r\n    background: #f69320;\r\n    border: 1px solid #f69320\r\n}\r\n\r\n\r\n.gap[_ngcontent-%COMP%] {\r\n    margin-left: 15px\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc291dmVuaXIvc291dmVuaXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7O0FBRUE7SUFDSSxXQUFXOztBQUVmOzs7QUFJQTtJQUNJLHlDQUF1RDs7SUFFdkQsMEJBQTBCO0lBQzFCLDRCQUE0Qjs7QUFFaEM7OztBQUtBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0FBQ2Q7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7O0lBRVYsbUJBQW1CO0VBQ3JCOzs7QUFHRjs7SUFFSSx1Q0FBdUM7SUFDdkMsY0FBYztBQUNsQjs7O0FBRUE7QUFDQSxZQUFZO0FBQ1osZ0NBQWdDO0VBQzlCOzs7QUFFRjtJQUNJLGdDQUFnQztBQUNwQzs7O0FBRUU7SUFDRSxjQUFjOztNQUVaOzs7QUFHTjtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZ0JBQWdCOztBQUVwQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CO0FBQ0o7OztBQUVBO0lBQ0k7QUFDSjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CO0FBQ0o7OztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQjtBQUNKOzs7QUFNQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkI7QUFDSjs7O0FBTUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CO0FBQ0o7OztBQUVBO0lBQ0k7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NvdXZlbmlyL3NvdXZlbmlyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuXHJcbi5zbGlkZXJfYXJlYXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgXHJcbn1cclxuXHJcbi5BRGFuaW1hdGlvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG59XHJcblxyXG5cclxuXHJcbi5iZ3tcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmcvc291dmVuaXIuc3ZnKSBuby1yZXBlYXQ7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMTBweDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5sZWZ0YmNvcm5lcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmxlZnRiaW1ne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG5cclxuLmRpdm0ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgXHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuXHJcblxyXG4uZlR7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBcImNhbmRhcmEgYm9sZFwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNmNjkzMjA7XHJcbn1cclxuXHJcbi5mcHtcclxuY29sb3I6IGJsYWNrO1xyXG5mb250LWZhbWlseTogXCJyb2JvdG9cIixzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbi5mbHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90b1wiLHNhbnMtc2VyaWY7XHJcbn0gIFxyXG5cclxuICAuZmw6aG92ZXJ7XHJcbiAgICBjb2xvcjogI2Y2OTMyMDtcclxuICAgIFxyXG4gICAgICB9XHJcblxyXG5cclxuLnNvY2lhbF9pY29uc19yb3VuZGVkIHVsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIFxyXG59XHJcblxyXG4uc29jaWFsX2ljb25zX3JvdW5kZWQgdWwgbGkgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgY29sb3I6ICNlMGUwZTA7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTBlMGUwXHJcbn1cclxuXHJcbi5zb2NpYWxfaWNvbnNfcm91bmRlZCB1bCBsaSBhIGkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4XHJcbn1cclxuXHJcbi5mX2ZhY2Vib29rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2Y2OTMyMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNjkzMjBcclxufVxyXG5cclxuLnRfdHdpdHRlcjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmNjkzMjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjY5MzIwXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4uZ19nb29nbGU6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjY5MzIwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y2OTMyMFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmluc3RhZ3JhbTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmNjkzMjA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjY5MzIwXHJcbn1cclxuXHJcbi5nYXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHhcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SouvenirComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'souvenir',
          templateUrl: './souvenir.component.html',
          styleUrls: ['./souvenir.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/wear/wear.component.ts":
  /*!****************************************!*\
    !*** ./src/app/wear/wear.component.ts ***!
    \****************************************/

  /*! exports provided: WearComponent */

  /***/
  function srcAppWearWearComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WearComponent", function () {
      return WearComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mnav_mnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mnav/mnav.component */
    "./src/app/mnav/mnav.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../mfooter/mfooter.component */
    "./src/app/mfooter/mfooter.component.ts");

    var WearComponent = /*#__PURE__*/function () {
      function WearComponent() {
        _classCallCheck(this, WearComponent);
      }

      _createClass(WearComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WearComponent;
    }();

    WearComponent.ɵfac = function WearComponent_Factory(t) {
      return new (t || WearComponent)();
    };

    WearComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WearComponent,
      selectors: [["wear"]],
      decls: 37,
      vars: 24,
      consts: [[1, "bg"], [1, "slider_area"], ["autoplay", "", "muted", "", "loop", "", 1, "ADanimation"], ["src", "../../assets/wear/home3.mp4"], [1, "row"], [3, "imgSrc", "price"], ["aria-label", "Page navigation example", 1, "homeaccessbnav"], [1, "pagination"], [1, "page-item"], ["href", "#", 1, "page-link"]],
      template: function WearComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mnav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "source", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "product", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nav", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mfooter");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/a.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/afvgsdg.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/as.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/bfggfx.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/bfgnfg.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/bnfgtnfgt.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/gfngf.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/nfgnfgxngf.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/Untitled-2.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/Untitled-4.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/Untitled-4dbgdf.jpg")("price", "LBP50,000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imgSrc", "../../assets/Wear1/Untitled-254.jpg")("price", "LBP50,000");
        }
      },
      directives: [_mnav_mnav_component__WEBPACK_IMPORTED_MODULE_1__["MnavComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"], _mfooter_mfooter_component__WEBPACK_IMPORTED_MODULE_3__["MfooterComponent"]],
      styles: [".row[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width: 80%;\r\n}\r\n\r\n.slider_area[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n   \r\n}\r\n\r\n.ADanimation[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n  \r\n}\r\n\r\n.bg[_ngcontent-%COMP%]{\r\n    background: url('wear.svg') no-repeat;\r\n    background-size: cover;\r\n   width: 100%;\r\n    background-position:bottom ;\r\n    position: relative;\r\n    bottom: 0px;\r\n    left: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vhci93ZWFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxxQ0FBbUQ7SUFDbkQsc0JBQXNCO0dBQ3ZCLFdBQVc7SUFDViwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC93ZWFyL3dlYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3d7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uc2xpZGVyX2FyZWF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG59XHJcblxyXG4uQURhbmltYXRpb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICBcclxufVxyXG5cclxuLmJne1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iZy93ZWFyLnN2Zykgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbSA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WearComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'wear',
          templateUrl: './wear.component.html',
          styleUrls: ['./wear.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Maya\Desktop\bendy_web\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map