function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
  /***/
  "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js ***!
    \*************************************************************************************************/

  /*! exports provided: PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, ɵa, ɵb */

  /***/
  function node_modulesNgxBootstrap__ivy_ngcc__PaginationFesm2015NgxBootstrapPaginationJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagerComponent", function () {
      return PagerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationComponent", function () {
      return PaginationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationConfig", function () {
      return PaginationConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationModule", function () {
      return PaginationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return PAGER_CONTROL_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return PAGINATION_CONTROL_VALUE_ACCESSOR;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Provides default values for Pagination and pager components
     */


    var _c0 = function _c0(a0, a1) {
      return {
        "pull-right": a0,
        "float-right": a1
      };
    };

    function PaginationComponent_li_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.selectPage(1, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.getText("first"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function PaginationComponent_li_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.selectPage(ctx_r7.page - 1, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.getText("previous"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function PaginationComponent_li_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var pg_r9 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.selectPage(pg_r9.number, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pg_r9 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r9.active)("disabled", ctx_r2.disabled && !pg_r9.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", pg_r9.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function PaginationComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.selectPage(ctx_r12.page + 1, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.noNext() || ctx_r3.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.getText("next"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function PaginationComponent_li_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.selectPage(ctx_r14.totalPages, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.noNext() || ctx_r4.disabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.getText("last"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var PaginationConfig = function PaginationConfig() {
      _classCallCheck(this, PaginationConfig);

      this.main = {
        maxSize: void 0,
        itemsPerPage: 10,
        boundaryLinks: false,
        directionLinks: true,
        firstText: 'First',
        previousText: 'Previous',
        nextText: 'Next',
        lastText: 'Last',
        pageBtnClass: '',
        rotate: true
      };
      this.pager = {
        itemsPerPage: 15,
        previousText: '« Previous',
        nextText: 'Next »',
        pageBtnClass: '',
        align: true
      };
    };

    PaginationConfig.ɵfac = function PaginationConfig_Factory(t) {
      return new (t || PaginationConfig)();
    };

    PaginationConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PaginationConfig,
      factory: PaginationConfig.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var PAGER_CONTROL_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

      /* tslint:disable-next-line: no-use-before-declare */
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return PagerComponent;
      }),
      multi: true
    };

    var PagerComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} elementRef
       * @param {?} paginationConfig
       * @param {?} changeDetection
       */
      function PagerComponent(elementRef, paginationConfig, changeDetection) {
        _classCallCheck(this, PagerComponent);

        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */

        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */

        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;

        if (!this.config) {
          this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
      }
      /**
       * maximum number of items per page. If value less than 1 will display all items on one page
       * @return {?}
       */


      _createClass(PagerComponent, [{
        key: "configureOptions",

        /**
         * @param {?} config
         * @return {?}
         */
        value: function configureOptions(config) {
          this.config = Object.assign({}, config);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
          } // watch for maxSize


          this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
          this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
          this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : this.config.boundaryLinks;
          this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : this.config.directionLinks;
          this.pageBtnClass = typeof this.pageBtnClass !== 'undefined' ? this.pageBtnClass : this.config.pageBtnClass; // base class

          this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
          this.totalPages = this.calculateTotalPages(); // this class

          this.pages = this.getPages(this.page, this.totalPages);
          this.inited = true;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.page = value;
          this.pages = this.getPages(this.page, this.totalPages);
        }
        /**
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getText",
        value: function getText(key) {
          // tslint:disable-next-line:no-any
          return (
            /** @type {?} */
            this["".concat(key, "Text")] ||
            /** @type {?} */
            this.config["".concat(key, "Text")]
          );
        }
        /**
         * @return {?}
         */

      }, {
        key: "noPrevious",
        value: function noPrevious() {
          return this.page === 1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "noNext",
        value: function noNext() {
          return this.page === this.totalPages;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} page
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "selectPage",
        value: function selectPage(page, event) {
          if (event) {
            event.preventDefault();
          }

          if (!this.disabled) {
            if (event && event.target) {
              // tslint:disable-next-line:no-any

              /** @type {?} */
              var target = event.target;
              target.blur();
            }

            this.writeValue(page);
            this.onChange(this.page);
          }
        } // Create page object used in template

        /**
         * @protected
         * @param {?} num
         * @param {?} text
         * @param {?} active
         * @return {?}
         */

      }, {
        key: "makePage",
        value: function makePage(num, text, active) {
          return {
            text: text,
            number: num,
            active: active
          };
        }
        /**
         * @protected
         * @param {?} currentPage
         * @param {?} totalPages
         * @return {?}
         */

      }, {
        key: "getPages",
        value: function getPages(currentPage, totalPages) {
          /** @type {?} */
          var pages = []; // Default page limits

          /** @type {?} */

          var startPage = 1;
          /** @type {?} */

          var endPage = totalPages;
          /** @type {?} */

          var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

          if (isMaxSized) {
            if (this.rotate) {
              // Current page is displayed in the middle of the visible ones
              startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
              endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

              if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - this.maxSize + 1;
              }
            } else {
              // Visible pages are paginated with maxSize
              startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

              endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
          } // Add page number links


          for (var num = startPage; num <= endPage; num++) {
            /** @type {?} */
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
          } // Add links to move between page sets


          if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
              /** @type {?} */
              var previousPageSet = this.makePage(startPage - 1, '...', false);
              pages.unshift(previousPageSet);
            }

            if (endPage < totalPages) {
              /** @type {?} */
              var nextPageSet = this.makePage(endPage + 1, '...', false);
              pages.push(nextPageSet);
            }
          }

          return pages;
        } // base class

        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "calculateTotalPages",
        value: function calculateTotalPages() {
          /** @type {?} */
          var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
          return Math.max(totalPages || 0, 1);
        }
      }, {
        key: "itemsPerPage",
        get: function get() {
          return this._itemsPerPage;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._itemsPerPage = v;
          this.totalPages = this.calculateTotalPages();
        }
        /**
         * total number of items in all pages
         * @return {?}
         */

      }, {
        key: "totalItems",
        get: function get() {
          return this._totalItems;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._totalItems = v;
          this.totalPages = this.calculateTotalPages();
        }
        /**
         * @return {?}
         */

      }, {
        key: "totalPages",
        get: function get() {
          return this._totalPages;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._totalPages = v;
          this.numPages.emit(v);

          if (this.inited) {
            this.selectPage(this.page);
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "page",
        set: function set(value) {
          /** @type {?} */
          var _previous = this._page;
          this._page = value > this.totalPages ? this.totalPages : value || 1;
          this.changeDetection.markForCheck();

          if (_previous === this._page || typeof _previous === 'undefined') {
            return;
          }

          this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
          });
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._page;
        }
      }]);

      return PagerComponent;
    }();

    PagerComponent.ɵfac = function PagerComponent_Factory(t) {
      return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PagerComponent,
      selectors: [["pager"]],
      inputs: {
        itemsPerPage: "itemsPerPage",
        totalItems: "totalItems",
        maxSize: "maxSize",
        rotate: "rotate",
        boundaryLinks: "boundaryLinks",
        directionLinks: "directionLinks",
        pageBtnClass: "pageBtnClass",
        align: "align",
        firstText: "firstText",
        previousText: "previousText",
        nextText: "nextText",
        lastText: "lastText",
        disabled: "disabled"
      },
      outputs: {
        numPages: "numPages",
        pageChanged: "pageChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGER_CONTROL_VALUE_ACCESSOR])],
      decls: 7,
      vars: 24,
      consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]],
      template: function PagerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_2_listener($event) {
            return ctx.selectPage(ctx.page - 1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_5_listener($event) {
            return ctx.selectPage(ctx.page + 1, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noPrevious())("previous", ctx.align);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.align, ctx.align));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("previous"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noNext())("next", ctx.align);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c0, ctx.align, ctx.align));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("next"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      encapsulation: 2
    });
    /** @nocollapse */

    PagerComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: PaginationConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    PagerComponent.propDecorators = {
      align: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      boundaryLinks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      directionLinks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      firstText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      previousText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nextText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      lastText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rotate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageBtnClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      numPages: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      pageChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      itemsPerPage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      totalItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'pager',
          template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
          providers: [PAGER_CONTROL_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: PaginationConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        numPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        pageChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemsPerPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        totalItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boundaryLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        directionLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageBtnClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        firstText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previousText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lastText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var PAGINATION_CONTROL_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],

      /* tslint:disable-next-line: no-use-before-declare */
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return PaginationComponent;
      }),
      multi: true
    };

    var PaginationComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} elementRef
       * @param {?} paginationConfig
       * @param {?} changeDetection
       */
      function PaginationComponent(elementRef, paginationConfig, changeDetection) {
        _classCallCheck(this, PaginationComponent);

        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */

        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */

        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;

        if (!this.config) {
          this.configureOptions(paginationConfig.main);
        }
      }
      /**
       * maximum number of items per page. If value less than 1 will display all items on one page
       * @return {?}
       */


      _createClass(PaginationComponent, [{
        key: "configureOptions",

        /**
         * @param {?} config
         * @return {?}
         */
        value: function configureOptions(config) {
          this.config = Object.assign({}, config);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
          } // watch for maxSize


          this.maxSize = typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
          this.rotate = typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
          this.boundaryLinks = typeof this.boundaryLinks !== 'undefined' ? this.boundaryLinks : this.config.boundaryLinks;
          this.directionLinks = typeof this.directionLinks !== 'undefined' ? this.directionLinks : this.config.directionLinks;
          this.pageBtnClass = typeof this.pageBtnClass !== 'undefined' ? this.pageBtnClass : this.config.pageBtnClass; // base class

          this.itemsPerPage = typeof this.itemsPerPage !== 'undefined' ? this.itemsPerPage : this.config.itemsPerPage;
          this.totalPages = this.calculateTotalPages(); // this class

          this.pages = this.getPages(this.page, this.totalPages);
          this.inited = true;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.page = value;
          this.pages = this.getPages(this.page, this.totalPages);
        }
        /**
         * @param {?} key
         * @return {?}
         */

      }, {
        key: "getText",
        value: function getText(key) {
          // tslint:disable-next-line:no-any
          return (
            /** @type {?} */
            this["".concat(key, "Text")] ||
            /** @type {?} */
            this.config["".concat(key, "Text")]
          );
        }
        /**
         * @return {?}
         */

      }, {
        key: "noPrevious",
        value: function noPrevious() {
          return this.page === 1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "noNext",
        value: function noNext() {
          return this.page === this.totalPages;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} page
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "selectPage",
        value: function selectPage(page, event) {
          if (event) {
            event.preventDefault();
          }

          if (!this.disabled) {
            if (event && event.target) {
              // tslint:disable-next-line:no-any

              /** @type {?} */
              var target = event.target;
              target.blur();
            }

            this.writeValue(page);
            this.onChange(this.page);
          }
        } // Create page object used in template

        /**
         * @protected
         * @param {?} num
         * @param {?} text
         * @param {?} active
         * @return {?}
         */

      }, {
        key: "makePage",
        value: function makePage(num, text, active) {
          return {
            text: text,
            number: num,
            active: active
          };
        }
        /**
         * @protected
         * @param {?} currentPage
         * @param {?} totalPages
         * @return {?}
         */

      }, {
        key: "getPages",
        value: function getPages(currentPage, totalPages) {
          /** @type {?} */
          var pages = []; // Default page limits

          /** @type {?} */

          var startPage = 1;
          /** @type {?} */

          var endPage = totalPages;
          /** @type {?} */

          var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages; // recompute if maxSize

          if (isMaxSized) {
            if (this.rotate) {
              // Current page is displayed in the middle of the visible ones
              startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
              endPage = startPage + this.maxSize - 1; // Adjust if limit is exceeded

              if (endPage > totalPages) {
                endPage = totalPages;
                startPage = endPage - this.maxSize + 1;
              }
            } else {
              // Visible pages are paginated with maxSize
              startPage = (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1; // Adjust last page if limit is exceeded

              endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
          } // Add page number links


          for (var num = startPage; num <= endPage; num++) {
            /** @type {?} */
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
          } // Add links to move between page sets


          if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
              /** @type {?} */
              var previousPageSet = this.makePage(startPage - 1, '...', false);
              pages.unshift(previousPageSet);
            }

            if (endPage < totalPages) {
              /** @type {?} */
              var nextPageSet = this.makePage(endPage + 1, '...', false);
              pages.push(nextPageSet);
            }
          }

          return pages;
        } // base class

        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "calculateTotalPages",
        value: function calculateTotalPages() {
          /** @type {?} */
          var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
          return Math.max(totalPages || 0, 1);
        }
      }, {
        key: "itemsPerPage",
        get: function get() {
          return this._itemsPerPage;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._itemsPerPage = v;
          this.totalPages = this.calculateTotalPages();
        }
        /**
         * total number of items in all pages
         * @return {?}
         */

      }, {
        key: "totalItems",
        get: function get() {
          return this._totalItems;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._totalItems = v;
          this.totalPages = this.calculateTotalPages();
        }
        /**
         * @return {?}
         */

      }, {
        key: "totalPages",
        get: function get() {
          return this._totalPages;
        }
        /**
         * @param {?} v
         * @return {?}
         */
        ,
        set: function set(v) {
          this._totalPages = v;
          this.numPages.emit(v);

          if (this.inited) {
            this.selectPage(this.page);
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "page",
        set: function set(value) {
          /** @type {?} */
          var _previous = this._page;
          this._page = value > this.totalPages ? this.totalPages : value || 1;
          this.changeDetection.markForCheck();

          if (_previous === this._page || typeof _previous === 'undefined') {
            return;
          }

          this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
          });
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._page;
        }
      }]);

      return PaginationComponent;
    }();

    PaginationComponent.ɵfac = function PaginationComponent_Factory(t) {
      return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaginationComponent,
      selectors: [["pagination"]],
      inputs: {
        itemsPerPage: "itemsPerPage",
        totalItems: "totalItems",
        maxSize: "maxSize",
        rotate: "rotate",
        boundaryLinks: "boundaryLinks",
        directionLinks: "directionLinks",
        pageBtnClass: "pageBtnClass",
        align: "align",
        firstText: "firstText",
        previousText: "previousText",
        nextText: "nextText",
        lastText: "lastText",
        disabled: "disabled"
      },
      outputs: {
        numPages: "numPages",
        pageChanged: "pageChanged"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGINATION_CONTROL_VALUE_ACCESSOR])],
      decls: 6,
      vars: 6,
      consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "innerHTML", "click"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]],
      template: function PaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 2, 3, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 2, 3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 2, 5, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 2, 3, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 2, 3, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      encapsulation: 2
    });
    /** @nocollapse */

    PaginationComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: PaginationConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    PaginationComponent.propDecorators = {
      align: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      boundaryLinks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      directionLinks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      firstText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      previousText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nextText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      lastText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rotate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageBtnClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      numPages: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      pageChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      itemsPerPage: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      totalItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'pagination',
          template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\n       [innerHTML]=\"getText('first')\"></a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\n       [innerHTML]=\"getText('previous')\"></a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled&&!pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\n       [innerHTML]=\"pg.text\"></a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\n       [innerHTML]=\"getText('next')\"></a></li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\n       [innerHTML]=\"getText('last')\"></a></li>\n</ul>\n",
          providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: PaginationConfig
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        numPages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        pageChanged: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        itemsPerPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        totalItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        maxSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        boundaryLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        directionLinks: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageBtnClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        align: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        firstText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previousText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        nextText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lastText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var PaginationModule =
    /*#__PURE__*/
    function () {
      function PaginationModule() {
        _classCallCheck(this, PaginationModule);
      }

      _createClass(PaginationModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: PaginationModule,
            providers: [PaginationConfig]
          };
        }
      }]);

      return PaginationModule;
    }();

    PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PaginationModule
    });
    PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PaginationModule_Factory(t) {
        return new (t || PaginationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaginationModule, {
        declarations: function declarations() {
          return [PagerComponent, PaginationComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [PagerComponent, PaginationComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          declarations: [PagerComponent, PaginationComponent],
          exports: [PagerComponent, PaginationComponent]
        }]
      }], null, null);
    })(); //# sourceMappingURL=ngx-bootstrap-pagination.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js":
  /*!**************************************************************************************!*\
    !*** ./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js ***!
    \**************************************************************************************/

  /*! exports provided: InfiniteScrollDirective, InfiniteScrollModule */

  /***/
  function node_modulesNgxInfiniteScroll__ivy_ngcc__ModulesNgxInfiniteScrollJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function () {
      return InfiniteScrollDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfiniteScrollModule", function () {
      return InfiniteScrollModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} selector
     * @param {?} scrollWindow
     * @param {?} defaultElement
     * @param {?} fromRoot
     * @return {?}
     */


    function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
      /** @type {?} */
      var hasWindow = window && !!window.document && window.document.documentElement;
      /** @type {?} */

      var container = hasWindow && scrollWindow ? window : defaultElement;

      if (selector) {
        /** @type {?} */
        var containerIsString = selector && hasWindow && typeof selector === 'string';
        container = containerIsString ? findElement(selector, defaultElement.nativeElement, fromRoot) : selector;

        if (!container) {
          throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
        }
      }

      return container;
    }
    /**
     * @param {?} selector
     * @param {?} customRoot
     * @param {?} fromRoot
     * @return {?}
     */


    function findElement(selector, customRoot, fromRoot) {
      /** @type {?} */
      var rootEl = fromRoot ? window.document : customRoot;
      return rootEl.querySelector(selector);
    }
    /**
     * @param {?} prop
     * @return {?}
     */


    function inputPropChanged(prop) {
      return prop && !prop.firstChange;
    }
    /**
     * @return {?}
     */


    function hasWindowDefined() {
      return typeof window !== 'undefined';
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var VerticalProps = {
      clientHeight: "clientHeight",
      offsetHeight: "offsetHeight",
      scrollHeight: "scrollHeight",
      pageYOffset: "pageYOffset",
      offsetTop: "offsetTop",
      scrollTop: "scrollTop",
      top: "top"
    };
    /** @type {?} */

    var HorizontalProps = {
      clientHeight: "clientWidth",
      offsetHeight: "offsetWidth",
      scrollHeight: "scrollWidth",
      pageYOffset: "pageXOffset",
      offsetTop: "offsetLeft",
      scrollTop: "scrollLeft",
      top: "left"
    };

    var AxisResolver =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} vertical
       */
      function AxisResolver() {
        var vertical = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        _classCallCheck(this, AxisResolver);

        this.vertical = vertical;
        this.propsMap = vertical ? VerticalProps : HorizontalProps;
      }
      /**
       * @return {?}
       */


      _createClass(AxisResolver, [{
        key: "clientHeightKey",
        value: function clientHeightKey() {
          return this.propsMap.clientHeight;
        }
        /**
         * @return {?}
         */

      }, {
        key: "offsetHeightKey",
        value: function offsetHeightKey() {
          return this.propsMap.offsetHeight;
        }
        /**
         * @return {?}
         */

      }, {
        key: "scrollHeightKey",
        value: function scrollHeightKey() {
          return this.propsMap.scrollHeight;
        }
        /**
         * @return {?}
         */

      }, {
        key: "pageYOffsetKey",
        value: function pageYOffsetKey() {
          return this.propsMap.pageYOffset;
        }
        /**
         * @return {?}
         */

      }, {
        key: "offsetTopKey",
        value: function offsetTopKey() {
          return this.propsMap.offsetTop;
        }
        /**
         * @return {?}
         */

      }, {
        key: "scrollTopKey",
        value: function scrollTopKey() {
          return this.propsMap.scrollTop;
        }
        /**
         * @return {?}
         */

      }, {
        key: "topKey",
        value: function topKey() {
          return this.propsMap.top;
        }
      }]);

      return AxisResolver;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */

    /**
     * @record
     */

    /**
     * @record
     */

    /**
     * @record
     */

    /**
     * @param {?} alwaysCallback
     * @param {?} shouldFireScrollEvent
     * @param {?} isTriggeredCurrentTotal
     * @return {?}
     */


    function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
      if (alwaysCallback && shouldFireScrollEvent) {
        return true;
      }

      if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
        return true;
      }

      return false;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} __0
     * @return {?}
     */


    function createResolver(_ref) {
      var windowElement = _ref.windowElement,
          axis = _ref.axis;
      return createResolverWithContainer({
        axis: axis,
        isWindow: isElementWindow(windowElement)
      }, windowElement);
    }
    /**
     * @param {?} resolver
     * @param {?} windowElement
     * @return {?}
     */


    function createResolverWithContainer(resolver, windowElement) {
      /** @type {?} */
      var container = resolver.isWindow || windowElement && !windowElement.nativeElement ? windowElement : windowElement.nativeElement;
      return Object.assign({}, resolver, {
        container: container
      });
    }
    /**
     * @param {?} windowElement
     * @return {?}
     */


    function isElementWindow(windowElement) {
      /** @type {?} */
      var isWindow = ['Window', 'global'].some(function (obj) {
        return Object.prototype.toString.call(windowElement).includes(obj);
      });
      return isWindow;
    }
    /**
     * @param {?} isContainerWindow
     * @param {?} windowElement
     * @return {?}
     */


    function getDocumentElement(isContainerWindow, windowElement) {
      return isContainerWindow ? windowElement.document.documentElement : null;
    }
    /**
     * @param {?} element
     * @param {?} resolver
     * @return {?}
     */


    function calculatePoints(element, resolver) {
      /** @type {?} */
      var height = extractHeightForElement(resolver);
      return resolver.isWindow ? calculatePointsForWindow(height, element, resolver) : calculatePointsForElement(height, element, resolver);
    }
    /**
     * @param {?} height
     * @param {?} element
     * @param {?} resolver
     * @return {?}
     */


    function calculatePointsForWindow(height, element, resolver) {
      var axis = resolver.axis,
          container = resolver.container,
          isWindow = resolver.isWindow;

      var _extractHeightPropKey = extractHeightPropKeys(axis),
          offsetHeightKey = _extractHeightPropKey.offsetHeightKey,
          clientHeightKey = _extractHeightPropKey.clientHeightKey; // scrolled until now / current y point

      /** @type {?} */


      var scrolled = height + getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow); // total height / most bottom y point

      /** @type {?} */

      var nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
      /** @type {?} */

      var totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) + nativeElementHeight;
      return {
        height: height,
        scrolled: scrolled,
        totalToScroll: totalToScroll,
        isWindow: isWindow
      };
    }
    /**
     * @param {?} height
     * @param {?} element
     * @param {?} resolver
     * @return {?}
     */


    function calculatePointsForElement(height, element, resolver) {
      var axis = resolver.axis,
          container = resolver.container; // perhaps use container.offsetTop instead of 'scrollTop'

      /** @type {?} */

      var scrolled = container[axis.scrollTopKey()];
      /** @type {?} */

      var totalToScroll = container[axis.scrollHeightKey()];
      return {
        height: height,
        scrolled: scrolled,
        totalToScroll: totalToScroll,
        isWindow: false
      };
    }
    /**
     * @param {?} axis
     * @return {?}
     */


    function extractHeightPropKeys(axis) {
      return {
        offsetHeightKey: axis.offsetHeightKey(),
        clientHeightKey: axis.clientHeightKey()
      };
    }
    /**
     * @param {?} __0
     * @return {?}
     */


    function extractHeightForElement(_ref2) {
      var container = _ref2.container,
          isWindow = _ref2.isWindow,
          axis = _ref2.axis;

      var _extractHeightPropKey2 = extractHeightPropKeys(axis),
          offsetHeightKey = _extractHeightPropKey2.offsetHeightKey,
          clientHeightKey = _extractHeightPropKey2.clientHeightKey;

      return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
    }
    /**
     * @param {?} elem
     * @param {?} isWindow
     * @param {?} offsetHeightKey
     * @param {?} clientHeightKey
     * @return {?}
     */


    function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
      if (isNaN(elem[offsetHeightKey])) {
        /** @type {?} */
        var docElem = getDocumentElement(isWindow, elem);
        return docElem ? docElem[clientHeightKey] : 0;
      } else {
        return elem[offsetHeightKey];
      }
    }
    /**
     * @param {?} elem
     * @param {?} axis
     * @param {?} isWindow
     * @return {?}
     */


    function getElementOffsetTop(elem, axis, isWindow) {
      /** @type {?} */
      var topKey = axis.topKey(); // elem = elem.nativeElement;

      if (!elem.getBoundingClientRect) {
        // || elem.css('none')) {
        return;
      }

      return elem.getBoundingClientRect()[topKey] + getElementPageYOffset(elem, axis, isWindow);
    }
    /**
     * @param {?} elem
     * @param {?} axis
     * @param {?} isWindow
     * @return {?}
     */


    function getElementPageYOffset(elem, axis, isWindow) {
      /** @type {?} */
      var pageYOffset = axis.pageYOffsetKey();
      /** @type {?} */

      var scrollTop = axis.scrollTopKey();
      /** @type {?} */

      var offsetTop = axis.offsetTopKey();

      if (isNaN(window[pageYOffset])) {
        return getDocumentElement(isWindow, elem)[scrollTop];
      } else if (elem.ownerDocument) {
        return elem.ownerDocument.defaultView[pageYOffset];
      } else {
        return elem[offsetTop];
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} container
     * @param {?} distance
     * @param {?} scrollingDown
     * @return {?}
     */


    function shouldFireScrollEvent(container, distance, scrollingDown) {
      /** @type {?} */
      var remaining;
      /** @type {?} */

      var containerBreakpoint;

      if (container.totalToScroll <= 0) {
        return false;
      }
      /** @type {?} */


      var scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;

      if (scrollingDown) {
        remaining = (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
        containerBreakpoint = distance.down / 10;
      } else {
        /** @type {?} */
        var totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
        remaining = container.scrolled / totalHiddenContentHeight;
        containerBreakpoint = distance.up / 10;
      }
      /** @type {?} */


      var shouldFireEvent = remaining <= containerBreakpoint;
      return shouldFireEvent;
    }
    /**
     * @param {?} lastScrollPosition
     * @param {?} container
     * @return {?}
     */


    function isScrollingDownwards(lastScrollPosition, container) {
      return lastScrollPosition < container.scrolled;
    }
    /**
     * @param {?} lastScrollPosition
     * @param {?} container
     * @param {?} distance
     * @return {?}
     */


    function getScrollStats(lastScrollPosition, container, distance) {
      /** @type {?} */
      var scrollDown = isScrollingDownwards(lastScrollPosition, container);
      return {
        fire: shouldFireScrollEvent(container, distance, scrollDown),
        scrollDown: scrollDown
      };
    }
    /**
     * @param {?} position
     * @param {?} scrollState
     * @return {?}
     */

    /**
     * @param {?} totalToScroll
     * @param {?} scrollState
     * @return {?}
     */

    /**
     * @param {?} scrollState
     * @return {?}
     */

    /**
     * @param {?} scroll
     * @param {?} scrollState
     * @param {?} triggered
     * @param {?} isScrollingDown
     * @return {?}
     */

    /**
     * @param {?} totalToScroll
     * @param {?} scrollState
     * @param {?} isScrollingDown
     * @return {?}
     */

    /**
     * @param {?} scrollState
     * @param {?} scrolledUntilNow
     * @param {?} totalToScroll
     * @return {?}
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ScrollState =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} __0
       */
      function ScrollState(_ref3) {
        var totalToScroll = _ref3.totalToScroll;

        _classCallCheck(this, ScrollState);

        this.lastScrollPosition = 0;
        this.lastTotalToScroll = 0;
        this.totalToScroll = 0;
        this.triggered = {
          down: 0,
          up: 0
        };
        this.totalToScroll = totalToScroll;
      }
      /**
       * @param {?} position
       * @return {?}
       */


      _createClass(ScrollState, [{
        key: "updateScrollPosition",
        value: function updateScrollPosition(position) {
          return this.lastScrollPosition = position;
        }
        /**
         * @param {?} totalToScroll
         * @return {?}
         */

      }, {
        key: "updateTotalToScroll",
        value: function updateTotalToScroll(totalToScroll) {
          if (this.lastTotalToScroll !== totalToScroll) {
            this.lastTotalToScroll = this.totalToScroll;
            this.totalToScroll = totalToScroll;
          }
        }
        /**
         * @param {?} scrolledUntilNow
         * @param {?} totalToScroll
         * @return {?}
         */

      }, {
        key: "updateScroll",
        value: function updateScroll(scrolledUntilNow, totalToScroll) {
          this.updateScrollPosition(scrolledUntilNow);
          this.updateTotalToScroll(totalToScroll);
        }
        /**
         * @param {?} scroll
         * @param {?} isScrollingDown
         * @return {?}
         */

      }, {
        key: "updateTriggeredFlag",
        value: function updateTriggeredFlag(scroll, isScrollingDown) {
          if (isScrollingDown) {
            this.triggered.down = scroll;
          } else {
            this.triggered.up = scroll;
          }
        }
        /**
         * @param {?} totalToScroll
         * @param {?} isScrollingDown
         * @return {?}
         */

      }, {
        key: "isTriggeredScroll",
        value: function isTriggeredScroll(totalToScroll, isScrollingDown) {
          return isScrollingDown ? this.triggered.down === totalToScroll : this.triggered.up === totalToScroll;
        }
      }]);

      return ScrollState;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} config
     * @return {?}
     */


    function createScroller(config) {
      var scrollContainer = config.scrollContainer,
          scrollWindow = config.scrollWindow,
          element = config.element,
          fromRoot = config.fromRoot;
      /** @type {?} */

      var resolver = createResolver({
        axis: new AxisResolver(!config.horizontal),
        windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
      });
      /** @type {?} */

      var scrollState = new ScrollState({
        totalToScroll: calculatePoints(element, resolver)
      });
      /** @type {?} */

      var options = {
        container: resolver.container,
        throttle: config.throttle
      };
      /** @type {?} */

      var distance = {
        up: config.upDistance,
        down: config.downDistance
      };
      return attachScrollEvent(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(calculatePoints(element, resolver));
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (positionStats) {
        return toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref4) {
        var stats = _ref4.stats;
        return scrollState.updateScroll(stats.scrolled, stats.totalToScroll);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_ref5) {
        var fire = _ref5.fire,
            scrollDown = _ref5.scrollDown,
            totalToScroll = _ref5.stats.totalToScroll;
        return shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown));
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (_ref6) {
        var scrollDown = _ref6.scrollDown,
            totalToScroll = _ref6.stats.totalToScroll;
        scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(toInfiniteScrollAction));
    }
    /**
     * @param {?} options
     * @return {?}
     */


    function attachScrollEvent(options) {
      /** @type {?} */
      var obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(options.container, 'scroll'); // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
      // Let's avoid calling the function unless needed.
      // See https://github.com/orizens/ngx-infinite-scroll/issues/198

      if (options.throttle) {
        obs = obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sampleTime"])(options.throttle));
      }

      return obs;
    }
    /**
     * @param {?} lastScrollPosition
     * @param {?} stats
     * @param {?} distance
     * @return {?}
     */


    function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
      var _getScrollStats = getScrollStats(lastScrollPosition, stats, distance),
          scrollDown = _getScrollStats.scrollDown,
          fire = _getScrollStats.fire;

      return {
        scrollDown: scrollDown,
        fire: fire,
        stats: stats
      };
    }
    /** @type {?} */


    var InfiniteScrollActions = {
      DOWN: '[NGX_ISE] DOWN',
      UP: '[NGX_ISE] UP'
    };
    /**
     * @param {?} response
     * @return {?}
     */

    function toInfiniteScrollAction(response) {
      var scrollDown = response.scrollDown,
          currentScrollPosition = response.stats.scrolled;
      return {
        type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
        payload: {
          currentScrollPosition: currentScrollPosition
        }
      };
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var InfiniteScrollDirective =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} element
       * @param {?} zone
       */
      function InfiniteScrollDirective(element, zone) {
        _classCallCheck(this, InfiniteScrollDirective);

        this.element = element;
        this.zone = zone;
        this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1.5;
        this.infiniteScrollThrottle = 150;
        this.infiniteScrollDisabled = false;
        this.infiniteScrollContainer = null;
        this.scrollWindow = true;
        this.immediateCheck = false;
        this.horizontal = false;
        this.alwaysCallback = false;
        this.fromRoot = false;
      }
      /**
       * @return {?}
       */


      _createClass(InfiniteScrollDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (!this.infiniteScrollDisabled) {
            this.setup();
          }
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(_ref7) {
          var infiniteScrollContainer = _ref7.infiniteScrollContainer,
              infiniteScrollDisabled = _ref7.infiniteScrollDisabled,
              infiniteScrollDistance = _ref7.infiniteScrollDistance;

          /** @type {?} */
          var containerChanged = inputPropChanged(infiniteScrollContainer);
          /** @type {?} */

          var disabledChanged = inputPropChanged(infiniteScrollDisabled);
          /** @type {?} */

          var distanceChanged = inputPropChanged(infiniteScrollDistance);
          /** @type {?} */

          var shouldSetup = !disabledChanged && !this.infiniteScrollDisabled || disabledChanged && !infiniteScrollDisabled.currentValue || distanceChanged;

          if (containerChanged || disabledChanged || distanceChanged) {
            this.destroyScroller();

            if (shouldSetup) {
              this.setup();
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "setup",
        value: function setup() {
          var _this = this;

          if (hasWindowDefined()) {
            this.zone.runOutsideAngular(function () {
              _this.disposeScroller = createScroller({
                fromRoot: _this.fromRoot,
                alwaysCallback: _this.alwaysCallback,
                disable: _this.infiniteScrollDisabled,
                downDistance: _this.infiniteScrollDistance,
                element: _this.element,
                horizontal: _this.horizontal,
                scrollContainer: _this.infiniteScrollContainer,
                scrollWindow: _this.scrollWindow,
                throttle: _this.infiniteScrollThrottle,
                upDistance: _this.infiniteScrollUpDistance
              }).subscribe(function (payload) {
                return _this.zone.run(function () {
                  return _this.handleOnScroll(payload);
                });
              });
            });
          }
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "handleOnScroll",
        value: function handleOnScroll(_ref8) {
          var type = _ref8.type,
              payload = _ref8.payload;

          switch (type) {
            case InfiniteScrollActions.DOWN:
              return this.scrolled.emit(payload);

            case InfiniteScrollActions.UP:
              return this.scrolledUp.emit(payload);

            default:
              return;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroyScroller();
        }
        /**
         * @return {?}
         */

      }, {
        key: "destroyScroller",
        value: function destroyScroller() {
          if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
          }
        }
      }]);

      return InfiniteScrollDirective;
    }();

    InfiniteScrollDirective.ɵfac = function InfiniteScrollDirective_Factory(t) {
      return new (t || InfiniteScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    InfiniteScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: InfiniteScrollDirective,
      selectors: [["", "infiniteScroll", ""], ["", "infinite-scroll", ""], ["", "data-infinite-scroll", ""]],
      inputs: {
        infiniteScrollDistance: "infiniteScrollDistance",
        infiniteScrollUpDistance: "infiniteScrollUpDistance",
        infiniteScrollThrottle: "infiniteScrollThrottle",
        infiniteScrollDisabled: "infiniteScrollDisabled",
        infiniteScrollContainer: "infiniteScrollContainer",
        scrollWindow: "scrollWindow",
        immediateCheck: "immediateCheck",
        horizontal: "horizontal",
        alwaysCallback: "alwaysCallback",
        fromRoot: "fromRoot"
      },
      outputs: {
        scrolled: "scrolled",
        scrolledUp: "scrolledUp"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]()]
    });
    /** @nocollapse */

    InfiniteScrollDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    InfiniteScrollDirective.propDecorators = {
      scrolled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      scrolledUp: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      infiniteScrollDistance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      infiniteScrollUpDistance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      infiniteScrollThrottle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      infiniteScrollDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      infiniteScrollContainer: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scrollWindow: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      immediateCheck: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      horizontal: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      alwaysCallback: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fromRoot: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteScrollDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        scrolled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        scrolledUp: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        infiniteScrollDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infiniteScrollUpDistance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infiniteScrollThrottle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infiniteScrollDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infiniteScrollContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        scrollWindow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        immediateCheck: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        horizontal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        alwaysCallback: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fromRoot: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var InfiniteScrollModule = function InfiniteScrollModule() {
      _classCallCheck(this, InfiniteScrollModule);
    };

    InfiniteScrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InfiniteScrollModule
    });
    InfiniteScrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InfiniteScrollModule_Factory(t) {
        return new (t || InfiniteScrollModule)();
      },
      providers: [],
      imports: [[]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InfiniteScrollModule, {
        declarations: [InfiniteScrollDirective],
        exports: [InfiniteScrollDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteScrollModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [InfiniteScrollDirective],
          exports: [InfiniteScrollDirective],
          imports: [],
          providers: []
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Angular library starter.
     * Build an Angular library compatible with AoT compilation & Tree shaking.
     * Written by Roberto Simonetti.
     * MIT license.
     * https://github.com/robisim74/angular-library-starter
     */

    /**
     * Entry point for all public APIs of the package.
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-infinite-scroll.js.map

    /***/

  },

  /***/
  "./src/app/directory/components/directory.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/directory/components/directory.component.ts ***!
    \*************************************************************/

  /*! no static exports found */

  /***/
  function srcAppDirectoryComponentsDirectoryComponentTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"), __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! ../../reducers */
    "./src/app/reducers/index.ts"), __webpack_require__(
    /*! ../../strings */
    "./src/app/strings/index.ts"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(
    /*! ../directory.service */
    "./src/app/directory/directory.service.ts"), __webpack_require__(
    /*! src/app/shared/shared.actions */
    "./src/app/shared/shared.actions.ts"), __webpack_require__(
    /*! src/app/shared/shared.models */
    "./src/app/shared/shared.models.ts"), __webpack_require__(
    /*! src/app/chart/chart.actions */
    "./src/app/chart/chart.actions.ts"), __webpack_require__(
    /*! ../../chart/chart.reducers */
    "./src/app/chart/chart.reducers.ts"), __webpack_require__(
    /*! src/app/core/services/analytics.service */
    "./src/app/core/services/analytics.service.ts"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! ../directory.service */
    "./src/app/directory/directory.service.ts"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! src/app/core/services/analytics.service */
    "./src/app/core/services/analytics.service.ts"), __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"), __webpack_require__(
    /*! ng-inline-svg */
    "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js"), __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"), __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js"), __webpack_require__(
    /*! ../../shared/components/spinner.component */
    "./src/app/shared/components/spinner.component.ts"), __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js"), __webpack_require__(
    /*! ../../shared/components/directory-box/directory-box.component */
    "./src/app/shared/components/directory-box/directory-box.component.ts"), __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, rxjs_1, operators_1, store_1, fromRoot, Resources, angular_l10n_1, directory_service_1, shared_actions_1, shared_models_1, chart_actions_1, fromChart, analytics_service_1, i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function DirectoryComponent_div_9_ul_3_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r1366 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "li", 19);
          i0.ɵɵelementStart(1, "a", 20);
          i0.ɵɵlistener("click", function DirectoryComponent_div_9_ul_3_li_1_Template_a_click_1_listener($event) {
            i0.ɵɵrestoreView(_r1366);
            var ctx_r1365 = i0.ɵɵnextContext(3);
            return ctx_r1365.openColumns();
          });
          i0.ɵɵtext(2, "Columns");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }
      }

      function DirectoryComponent_div_9_ul_3_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r1368 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "li", 19);
          i0.ɵɵelementStart(1, "a", 20);
          i0.ɵɵlistener("click", function DirectoryComponent_div_9_ul_3_li_3_Template_a_click_1_listener($event) {
            i0.ɵɵrestoreView(_r1368);
            var ctx_r1367 = i0.ɵɵnextContext(3);
            return ctx_r1367.showLink();
          });
          i0.ɵɵtext(2);
          i0.ɵɵpipe(3, "translate");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1364 = i0.ɵɵnextContext(3);
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 1, ctx_r1364.Resources.StaffDirStrings.LNK.ShowDirLink, ctx_r1364.locale.language));
        }
      }

      function DirectoryComponent_div_9_ul_3_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "ul", 17);
          i0.ɵɵtemplate(1, DirectoryComponent_div_9_ul_3_li_1_Template, 3, 0, "li", 18);
          i0.ɵɵpipe(2, "async");
          i0.ɵɵtemplate(3, DirectoryComponent_div_9_ul_3_li_3_Template, 4, 4, "li", 18);
          i0.ɵɵpipe(4, "async");
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1362 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(2, 2, ctx_r1362.chartMeta$).isAdmin);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(4, 4, ctx_r1362.preloadedData$).isSharePointOnline);
        }
      }

      function DirectoryComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 13);
          i0.ɵɵelementStart(1, "a", 14);
          i0.ɵɵelement(2, "img", 15);
          i0.ɵɵelementEnd();
          i0.ɵɵtemplate(3, DirectoryComponent_div_9_ul_3_Template, 5, 6, "ul", 16);
          i0.ɵɵelementEnd();
        }
      }

      function DirectoryComponent_toc_spinner_12_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelement(0, "toc-spinner");
        }
      }

      function DirectoryComponent_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r1373 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 24);
          i0.ɵɵelementStart(1, "toc-directory-box", 25);
          i0.ɵɵlistener("info", function DirectoryComponent_div_13_div_2_Template_toc_directory_box_info_1_listener($event) {
            i0.ɵɵrestoreView(_r1373);
            var ctx_r1372 = i0.ɵɵnextContext(2);
            return ctx_r1372.onInfo($event);
          });
          i0.ɵɵpipe(2, "async");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var i_r1371 = ctx.index;
          var ctx_r1369 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("user", ctx_r1369.users[i_r1371])("chartId", ctx_r1369.chartId)("chartMeta", i0.ɵɵpipeBind1(2, 3, ctx_r1369.chartMeta$));
        }
      }

      function DirectoryComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r1375 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 21);
          i0.ɵɵlistener("scrolled", function DirectoryComponent_div_13_Template_div_scrolled_0_listener($event) {
            i0.ɵɵrestoreView(_r1375);
            var ctx_r1374 = i0.ɵɵnextContext();
            return ctx_r1374.onScrollDown();
          })("scrolledUp", function DirectoryComponent_div_13_Template_div_scrolledUp_0_listener($event) {
            i0.ɵɵrestoreView(_r1375);
            var ctx_r1376 = i0.ɵɵnextContext();
            return ctx_r1376.onScrollUp();
          });
          i0.ɵɵelementStart(1, "div", 22);
          i0.ɵɵtemplate(2, DirectoryComponent_div_13_div_2_Template, 3, 5, "div", 23);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1358 = i0.ɵɵnextContext();
          i0.ɵɵproperty("infiniteScrollDistance", 2)("infiniteScrollUpDistance", 1.5)("infiniteScrollThrottle", 50)("scrollWindow", true);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngForOf", ctx_r1358.users);
        }
      }

      function DirectoryComponent_div_14_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r1381 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 24);
          i0.ɵɵelementStart(1, "toc-directory-box", 25);
          i0.ɵɵlistener("info", function DirectoryComponent_div_14_div_2_Template_toc_directory_box_info_1_listener($event) {
            i0.ɵɵrestoreView(_r1381);
            var ctx_r1380 = i0.ɵɵnextContext(2);
            return ctx_r1380.onInfo($event);
          });
          i0.ɵɵpipe(2, "async");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var user_r1378 = ctx.$implicit;
          var ctx_r1377 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("user", user_r1378)("chartId", ctx_r1377.chartId)("chartMeta", i0.ɵɵpipeBind1(2, 3, ctx_r1377.chartMeta$));
        }
      }

      function DirectoryComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 26);
          i0.ɵɵelementStart(1, "div", 22);
          i0.ɵɵtemplate(2, DirectoryComponent_div_14_div_2_Template, 3, 5, "div", 23);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1359 = i0.ɵɵnextContext();
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngForOf", ctx_r1359.searchPage);
        }
      }

      function DirectoryComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r1383 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 27);
          i0.ɵɵelementStart(1, "pagination", 28);
          i0.ɵɵlistener("pageChanged", function DirectoryComponent_div_15_Template_pagination_pageChanged_1_listener($event) {
            i0.ɵɵrestoreView(_r1383);
            var ctx_r1382 = i0.ɵɵnextContext();
            return ctx_r1382.onPageChanged($event);
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1360 = i0.ɵɵnextContext();
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("totalItems", ctx_r1360.allUsers.length)("itemsPerPage", ctx_r1360.displayPageSize);
        }
      }

      function DirectoryComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r1385 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 27);
          i0.ɵɵelementStart(1, "pagination", 28);
          i0.ɵɵlistener("pageChanged", function DirectoryComponent_div_16_Template_pagination_pageChanged_1_listener($event) {
            i0.ɵɵrestoreView(_r1385);
            var ctx_r1384 = i0.ɵɵnextContext();
            return ctx_r1384.onPageChangedSearchResults($event);
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1361 = i0.ɵɵnextContext();
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("totalItems", ctx_r1361.searchResults.length)("itemsPerPage", ctx_r1361.displayPageSize);
        }
      }

      var REQUEST_PAGE_SIZE = 15;
      var DISPLAY_PAGE_SIZE = 9;

      var DirectoryComponent =
      /*#__PURE__*/
      function () {
        function DirectoryComponent(locale, directoryService, store, analytics) {
          var _this2 = this;

          _classCallCheck(this, DirectoryComponent);

          this.locale = locale;
          this.directoryService = directoryService;
          this.store = store;
          this.analytics = analytics;
          this.useInfinityScrollForEverything = true;
          this.Resources = Resources;
          this.displayPageSize = DISPLAY_PAGE_SIZE;
          this.users = [];
          this.searchResults = [];
          this.searchPage = [];
          this.allUsers = [];
          this.nextPageUrl = '';
          this.nextPageUrl$ = new rxjs_1.Subject();
          this.scrollDown$ = new rxjs_1.Subject();
          this.preloadedData = null;
          this.isPaginationNeeded = false;
          this.searchString = '';
          this.searchStringEmitter = new core_1.EventEmitter();
          this.hasFullData = false;
          this.isLoading = true;
          this.unsubscribe = new rxjs_1.Subject();
          store.pipe(store_1.select(fromRoot.getChartId), operators_1.takeUntil(this.unsubscribe)).subscribe(function (x) {
            _this2.chartId = x;

            _this2.analytics.send('Directory', {
              chartId: x
            });
          });
          this.chartMeta$ = store.pipe(store_1.select(fromRoot.getChartMeta));
          this.preloadedData$ = store.pipe(store_1.select(fromRoot.getPreloadedData));
          this.preloadedData$.pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(function (x) {
            return _this2.preloadedData = x;
          });
        }

        _createClass(DirectoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.searchStringEmitter.pipe(operators_1.debounceTime(200), operators_1.takeUntil(this.unsubscribe), operators_1.withLatestFrom(this.chartMeta$)).subscribe(function (_ref9) {
              var _ref10 = _slicedToArray(_ref9, 2),
                  searchString = _ref10[0],
                  chartMeta = _ref10[1];

              _this3.searchString = searchString;

              if (searchString.length > 2 || _this3.hasFullData && searchString.length > 0) {
                if (_this3.hasFullData) {
                  var lowerSearchString = searchString.toLowerCase();
                  _this3.searchResults = _this3.allUsers.filter(function (x) {
                    return x.DisplayName.toLowerCase().indexOf(lowerSearchString) !== -1 || x.Email && x.Email.toLowerCase().indexOf(lowerSearchString) !== -1 || x.JobTitle && x.JobTitle.toLowerCase().indexOf(lowerSearchString) !== -1 || x.TOC_Fields[chartMeta.EmailColumn] && x.TOC_Fields[chartMeta.EmailColumn].toLowerCase().indexOf(lowerSearchString) !== -1 || x.TOC_Fields[chartMeta.JobTitleColumn] && x.TOC_Fields[chartMeta.JobTitleColumn].toLowerCase().indexOf(lowerSearchString) !== -1 || x.TOC_Fields[chartMeta.GroupColumn] && x.TOC_Fields[chartMeta.GroupColumn].toLowerCase().indexOf(lowerSearchString) !== -1 || x.TOC_Fields[chartMeta.PhoneColumn] && x.TOC_Fields[chartMeta.PhoneColumn].toLowerCase().indexOf(lowerSearchString) !== -1 || x.TOC_Fields[chartMeta.NameColumn] && x.TOC_Fields[chartMeta.NameColumn].toLowerCase().indexOf(lowerSearchString) !== -1;
                  });
                  _this3.searchPage = _this3.searchResults.slice(0, DISPLAY_PAGE_SIZE);
                } else {
                  var request = {
                    nextPageUrl: '',
                    pageSize: REQUEST_PAGE_SIZE,
                    chartId: _this3.chartId,
                    searchString: searchString
                  };

                  if (_this3.searchResults.length === 0) {
                    _this3.isLoading = true;
                  }

                  _this3.directoryService.getDirectory(request).pipe(operators_1.takeUntil(_this3.unsubscribe)).subscribe(function (response) {
                    _this3.searchResults = response.users;
                    _this3.searchPage = _this3.searchResults.slice(0, DISPLAY_PAGE_SIZE);
                    _this3.isLoading = false;
                  });
                }
              }

              if (searchString.length === 0) {
                _this3.searchResults = [];
                _this3.searchPage = [];
                _this3.isLoading = false;
              }
            });
            this.nextPageUrl$.pipe(operators_1.filter(function (x) {
              return x !== null;
            }, operators_1.takeUntil(this.unsubscribe))).subscribe(function (x) {
              return console.log('next page url VALUE', x);
            });
            var zipped$ = rxjs_1.zip(this.scrollDown$, this.nextPageUrl$.pipe(operators_1.filter(function (x) {
              return x !== null;
            }))).pipe(operators_1.distinct(function (_ref11) {
              var _ref12 = _slicedToArray(_ref11, 2),
                  _ = _ref12[0],
                  nextPageUrl = _ref12[1];

              return nextPageUrl;
            }));
            zipped$.pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(function (_ref13) {
              var _ref14 = _slicedToArray(_ref13, 2),
                  _ = _ref14[0],
                  nextPageUrl = _ref14[1];

              console.log('handler for', nextPageUrl);

              if (_this3.searchString.length > 0) {
                return;
              }

              if (_this3.hasFullData) {
                _this3.users = [].concat(_toConsumableArray(_this3.users), _toConsumableArray(_this3.allUsers.slice(_this3.users.length, _this3.users.length + DISPLAY_PAGE_SIZE)));

                _this3.nextPageUrl$.next('' + _this3.users.length);

                return;
              }

              console.log('request');
              var request = {
                nextPageUrl: nextPageUrl,
                pageSize: REQUEST_PAGE_SIZE,
                chartId: _this3.chartId
              };

              _this3.directoryService.getDirectory(request).subscribe(function (x) {
                _this3.users = [].concat(_toConsumableArray(_this3.users), _toConsumableArray(x.users));
                _this3.isLoading = false;

                if (x.nextPageUrl !== null) {
                  _this3.nextPageUrl$.next(x.nextPageUrl);
                }

                if (x.isFullData) {
                  if (_this3.users.length > DISPLAY_PAGE_SIZE) {
                    _this3.allUsers = _this3.users;
                    _this3.hasFullData = true;
                    _this3.users = _this3.allUsers.slice(0, DISPLAY_PAGE_SIZE);

                    if (_this3.users.length < _this3.allUsers.length) {
                      console.log('emitting new next page url');

                      _this3.nextPageUrl$.next('' + _this3.users.length);
                    }
                  } else {
                    _this3.isPaginationNeeded = false;
                  }
                } //check if container size doesn't have scroll


                setTimeout(function () {
                  if (window.innerWidth > document.documentElement.clientWidth) {
                    console.log('ENOUGH');
                  } else {
                    console.log('not enough');

                    _this3.scrollDown$.next();
                  }
                }, 0);
              });
            });
            this.nextPageUrl$.next('');
            this.scrollDown$.next();
            this.nodeInformation$ = this.store.select(fromChart.getInformationResults);
            this.nodeInformation$.pipe(operators_1.takeUntil(this.unsubscribe), operators_1.skip(1), operators_1.withLatestFrom(this.store.select(fromRoot.getSharedOpenedModalNames))).subscribe(function (_ref15) {
              var _ref16 = _slicedToArray(_ref15, 2),
                  infoResults = _ref16[0],
                  openedModalNames = _ref16[1];

              if (openedModalNames && openedModalNames.length > 0) {
                //do not open modals if one is already open
                return;
              }

              if (infoResults && infoResults.Data && infoResults.Data.VacantPosition) {
                _this3.store.dispatch(new shared_actions_1.DialogShow({
                  dialogName: shared_models_1.SharedModals.CreatePosition,
                  options: {
                    initialState: {
                      isEditMode: false,
                      editedPosition: infoResults.Data.VacantPosition
                    }
                  }
                }));
              } else {
                _this3.store.dispatch(new shared_actions_1.DialogShow({
                  dialogName: shared_models_1.SharedModals.InformationResults
                }));
              }
            });
          }
        }, {
          key: "onPageChanged",
          value: function onPageChanged($event) {
            var startItem = ($event.page - 1) * $event.itemsPerPage;
            var endItem = $event.page * $event.itemsPerPage;
            this.users = this.allUsers.slice(startItem, endItem);
          }
        }, {
          key: "onPageChangedSearchResults",
          value: function onPageChangedSearchResults($event) {
            var startItem = ($event.page - 1) * $event.itemsPerPage;
            var endItem = $event.page * $event.itemsPerPage;
            this.searchPage = this.searchResults.slice(startItem, endItem);
          }
        }, {
          key: "createNextPageUrl",
          value: function createNextPageUrl($event) {
            this.nextPageUrl$.next($event);
          }
        }, {
          key: "onScrollDown",
          value: function onScrollDown() {
            this.scrollDown$.next();
          }
        }, {
          key: "onScrollUp",
          value: function onScrollUp() {}
        }, {
          key: "onInfo",
          value: function onInfo(id) {
            this.store.dispatch(new chart_actions_1.InfoOpen(id));
          }
        }, {
          key: "openColumns",
          value: function openColumns() {
            this.store.dispatch(new shared_actions_1.DialogShow({
              dialogName: shared_models_1.SharedModals.OverviewColumns
            }));
          }
        }, {
          key: "showLink",
          value: function showLink() {
            var link = this.preloadedData.sharePointRedirectLinkForDirectory.replace('SUBSTITUTE_CHART_ID', this.chartId);
            this.store.dispatch(new shared_actions_1.DialogShow({
              dialogName: shared_models_1.SharedModals.ShowDirectoryLink,
              options: {
                initialState: {
                  link: link
                }
              }
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe.next();
            this.unsubscribe.complete();
          }
        }]);

        return DirectoryComponent;
      }();

      exports.DirectoryComponent = DirectoryComponent;

      DirectoryComponent.ɵfac = function DirectoryComponent_Factory(t) {
        return new (t || DirectoryComponent)(i0.ɵɵdirectiveInject(angular_l10n_1.L10N_LOCALE), i0.ɵɵdirectiveInject(i1.DirectoryService), i0.ɵɵdirectiveInject(i2.Store), i0.ɵɵdirectiveInject(i3.AnalyticsService));
      };

      DirectoryComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: DirectoryComponent,
        selectors: [["toc-directory"]],
        decls: 17,
        vars: 16,
        consts: [[1, "container"], [1, "card"], [1, "card-body"], [1, "row", "toolbar"], [1, "mr-3", "offset-4", "col-8", "offset-sm-6", "col-sm-6", "offset-md-6", "col-md-6", "col-lg-4", "offset-lg-8", "toolbar-right"], [1, "search"], ["type", "text", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], [1, "btn-search", 3, "inlineSVG"], ["class", "dropdown directory-dropdown", "dropdown", "", 4, "ngIf"], [4, "ngIf"], ["class", "row directory", "infiniteScroll", "", 3, "infiniteScrollDistance", "infiniteScrollUpDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled", "scrolledUp", 4, "ngIf"], ["class", "row directory", 4, "ngIf"], ["class", "pagination-wrapper", 4, "ngIf"], ["dropdown", "", 1, "dropdown", "directory-dropdown"], ["dropdownToggle", "", "role", "button", "aria-haspopup", "true", "aria-expanded", "false", 1, "directory-menu-toggle", "btn"], ["src", "/Images/three-dots.svg", 1, "svg", "nav-04"], ["class", "dropdown-menu", 4, "dropdownMenu"], [1, "dropdown-menu"], ["class", "dropdown-item", 4, "ngIf"], [1, "dropdown-item"], [3, "click"], ["infiniteScroll", "", 1, "row", "directory", 3, "infiniteScrollDistance", "infiniteScrollUpDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled", "scrolledUp"], [1, "row"], ["class", "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-6", "col-lg-6", "col-xl-4", "mb-3"], [1, "", 3, "user", "chartId", "chartMeta", "info"], [1, "row", "directory"], [1, "pagination-wrapper"], [3, "totalItems", "itemsPerPage", "pageChanged"]],
        template: function DirectoryComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵelementStart(5, "div", 5);
            i0.ɵɵelementStart(6, "input", 6);
            i0.ɵɵlistener("ngModelChange", function DirectoryComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.searchStringEmitter.emit($event);
            });
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(8, "button", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, DirectoryComponent_div_9_Template, 4, 0, "div", 8);
            i0.ɵɵpipe(10, "async");
            i0.ɵɵpipe(11, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(12, DirectoryComponent_toc_spinner_12_Template, 1, 0, "toc-spinner", 9);
            i0.ɵɵtemplate(13, DirectoryComponent_div_13_Template, 3, 5, "div", 10);
            i0.ɵɵtemplate(14, DirectoryComponent_div_14_Template, 3, 1, "div", 11);
            i0.ɵɵtemplate(15, DirectoryComponent_div_15_Template, 2, 2, "div", 12);
            i0.ɵɵtemplate(16, DirectoryComponent_div_16_Template, 2, 2, "div", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngModel", ctx.searchString)("placeholder", i0.ɵɵpipeBind2(7, 9, ctx.Resources.UXChartStrings.TXT.SearchEmp, ctx.locale.language));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("inlineSVG", "Images/search-icon.svg");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(10, 12, ctx.chartMeta$).isAdmin || i0.ɵɵpipeBind1(11, 14, ctx.preloadedData$).isSharePointOnline);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.isLoading);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.searchString.length === 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.searchPage.length > 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isPaginationNeeded && ctx.searchString.length === 0);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.searchString.length > 0);
          }
        },
        directives: [i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.InlineSVGDirective, i6.NgIf, i7.BsDropdownDirective, i7.BsDropdownToggleDirective, i7.BsDropdownMenuDirective, i8.SpinnerComponent, i9.InfiniteScrollDirective, i6.NgForOf, i10.DirectoryBoxComponent, i11.PaginationComponent],
        pipes: [i12.L10nTranslatePipe, i6.AsyncPipe],
        styles: [".box-row {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.margin-row {\n  margin-bottom: 20px;\n}\n\n.toolbar {\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.toolbar-right {\n  display: -webkit-box;\n  display: flex;\n}\n\na.directory-menu-toggle {\n  padding-left: 20px;\n  padding-right: 10px;\n}\n\n.search {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.directory {\n  padding-top: 12px;\n}\n\n.btn-search {\n  position: absolute;\n  right: 50px;\n  bottom: 8px;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  cursor: pointer;\n}\n\n[role=button] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlyZWN0b3J5L2NvbXBvbmVudHMvQzpcXGRldlxcY2hhcnRcXFRlYW1PcmdDaGFydC5XZWJVSS5EaXJlY3RvcnlBcHBcXFRlYW1PcmdDaGFydC5XZWJVSS5EaXJlY3RvcnlBcHBcXGNsaWVudC9zcmNcXGFwcFxcZGlyZWN0b3J5XFxjb21wb25lbnRzXFxkaXJlY3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RpcmVjdG9yeS9jb21wb25lbnRzL2RpcmVjdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUNBLDJDQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO1VBQUEsWUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGlyZWN0b3J5L2NvbXBvbmVudHMvZGlyZWN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJveC1yb3cge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuLm1hcmdpbi1yb3cge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4udG9vbGJhci1yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5hLmRpcmVjdG9yeS1tZW51LXRvZ2dsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmRpcmVjdG9yeSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG5cclxuLmJ0bi1zZWFyY2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbiAgICBib3R0b206IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuW3JvbGU9J2J1dHRvbiddIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIuYm94LXJvdyB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLm1hcmdpbi1yb3cge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udG9vbGJhciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4udG9vbGJhci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmEuZGlyZWN0b3J5LW1lbnUtdG9nZ2xlIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uc2VhcmNoIHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZGlyZWN0b3J5IHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi5idG4tc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTBweDtcbiAgYm90dG9tOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuW3JvbGU9YnV0dG9uXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(DirectoryComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'toc-directory',
            templateUrl: './directory.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./directory.component.scss']
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: core_1.Inject,
              args: [angular_l10n_1.L10N_LOCALE]
            }]
          }, {
            type: i1.DirectoryService
          }, {
            type: i2.Store
          }, {
            type: i3.AnalyticsService
          }];
        }, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/directory/directory-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/directory/directory-routing.module.ts ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function srcAppDirectoryDirectoryRoutingModuleTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"), __webpack_require__(
    /*! ./components/directory.component */
    "./src/app/directory/components/directory.component.ts"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, router_1, directory_component_1, i0, i1) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var routes = [{
        path: ':chartId',
        component: directory_component_1.DirectoryComponent
      }];

      var DirectoryRoutingModule = function DirectoryRoutingModule() {
        _classCallCheck(this, DirectoryRoutingModule);
      };

      exports.DirectoryRoutingModule = DirectoryRoutingModule;
      DirectoryRoutingModule.ɵmod = i0.ɵɵdefineNgModule({
        type: DirectoryRoutingModule
      });
      DirectoryRoutingModule.ɵinj = i0.ɵɵdefineInjector({
        factory: function DirectoryRoutingModule_Factory(t) {
          return new (t || DirectoryRoutingModule)();
        },
        imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DirectoryRoutingModule, {
          imports: [i1.RouterModule],
          exports: [router_1.RouterModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        i0.ɵsetClassMetadata(DirectoryRoutingModule, [{
          type: core_1.NgModule,
          args: [{
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
          }]
        }], null, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/directory/directory.effects.ts":
  /*!************************************************!*\
    !*** ./src/app/directory/directory.effects.ts ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function srcAppDirectoryDirectoryEffectsTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, effects_1, i0, i1) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var DirectoryEffects = function DirectoryEffects(actions$) {
        _classCallCheck(this, DirectoryEffects);

        this.actions$ = actions$;
      };

      exports.DirectoryEffects = DirectoryEffects;

      DirectoryEffects.ɵfac = function DirectoryEffects_Factory(t) {
        return new (t || DirectoryEffects)(i0.ɵɵinject(i1.Actions));
      };

      DirectoryEffects.ɵprov = i0.ɵɵdefineInjectable({
        token: DirectoryEffects,
        factory: DirectoryEffects.ɵfac
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(DirectoryEffects, [{
          type: core_1.Injectable
        }], function () {
          return [{
            type: i1.Actions
          }];
        }, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/directory/directory.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/directory/directory.module.ts ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function srcAppDirectoryDirectoryModuleTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"), __webpack_require__(
    /*! ./directory-routing.module */
    "./src/app/directory/directory-routing.module.ts"), __webpack_require__(
    /*! ./components/directory.component */
    "./src/app/directory/components/directory.component.ts"), __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"), __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js"), __webpack_require__(
    /*! ./directory.effects */
    "./src/app/directory/directory.effects.ts"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js"), __webpack_require__(
    /*! ./directory.reducers */
    "./src/app/directory/directory.reducers.ts"), __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"), __webpack_require__(
    /*! ngx-bootstrap/typeahead */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js"), __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js"), __webpack_require__(
    /*! ./directory.service */
    "./src/app/directory/directory.service.ts"), __webpack_require__(
    /*! ng-inline-svg */
    "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js"), __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js"), __webpack_require__(
    /*! ng-inline-svg */
    "./node_modules/ng-inline-svg/__ivy_ngcc__/lib_esmodule/index.js"), __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, common_1, directory_routing_module_1, directory_component_1, effects_1, pagination_1, directory_effects_1, store_1, ngx_infinite_scroll_1, fromDirectory, forms_1, typeahead_1, dropdown_1, angular_l10n_1, popover_1, directory_service_1, ng_inline_svg_1, shared_module_1, i0, i1, i2, i3, i4, i5) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var DirectoryModule = function DirectoryModule() {
        _classCallCheck(this, DirectoryModule);
      };

      exports.DirectoryModule = DirectoryModule;
      DirectoryModule.ɵmod = i0.ɵɵdefineNgModule({
        type: DirectoryModule
      });
      DirectoryModule.ɵinj = i0.ɵɵdefineInjector({
        factory: function DirectoryModule_Factory(t) {
          return new (t || DirectoryModule)();
        },
        providers: [directory_service_1.DirectoryService],
        imports: [[common_1.CommonModule, forms_1.FormsModule, typeahead_1.TypeaheadModule, popover_1.PopoverModule, angular_l10n_1.L10nTranslationModule, directory_routing_module_1.DirectoryRoutingModule, ngx_infinite_scroll_1.InfiniteScrollModule, shared_module_1.SharedModule, dropdown_1.BsDropdownModule.forRoot(), ng_inline_svg_1.InlineSVGModule.forRoot({
          baseUrl: '/'
        }), pagination_1.PaginationModule.forRoot(), store_1.StoreModule.forFeature(fromDirectory.featureKey, fromDirectory.reducer), effects_1.EffectsModule.forFeature([directory_effects_1.DirectoryEffects])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DirectoryModule, {
          declarations: [directory_component_1.DirectoryComponent],
          imports: [common_1.CommonModule, forms_1.FormsModule, typeahead_1.TypeaheadModule, popover_1.PopoverModule, angular_l10n_1.L10nTranslationModule, directory_routing_module_1.DirectoryRoutingModule, ngx_infinite_scroll_1.InfiniteScrollModule, shared_module_1.SharedModule, i1.BsDropdownModule, i2.InlineSVGModule, i3.PaginationModule, i4.StoreFeatureModule, i5.EffectsFeatureModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        i0.ɵsetClassMetadata(DirectoryModule, [{
          type: core_1.NgModule,
          args: [{
            declarations: [directory_component_1.DirectoryComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule, typeahead_1.TypeaheadModule, popover_1.PopoverModule, angular_l10n_1.L10nTranslationModule, directory_routing_module_1.DirectoryRoutingModule, ngx_infinite_scroll_1.InfiniteScrollModule, shared_module_1.SharedModule, dropdown_1.BsDropdownModule.forRoot(), ng_inline_svg_1.InlineSVGModule.forRoot({
              baseUrl: '/'
            }), pagination_1.PaginationModule.forRoot(), store_1.StoreModule.forFeature(fromDirectory.featureKey, fromDirectory.reducer), effects_1.EffectsModule.forFeature([directory_effects_1.DirectoryEffects])],
            exports: [],
            providers: [directory_service_1.DirectoryService]
          }]
        }], null, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/directory/directory.reducers.ts":
  /*!*************************************************!*\
    !*** ./src/app/directory/directory.reducers.ts ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function srcAppDirectoryDirectoryReducersTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, store_1) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.featureKey = 'directory';
      exports.initialState = {};
      var directoryReducer = store_1.createReducer(exports.initialState);

      function reducer(state, action) {
        return directoryReducer(state, action);
      }

      exports.reducer = reducer;
      exports.selectDirectory = store_1.createFeatureSelector(exports.featureKey);
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/directory/directory.service.ts":
  /*!************************************************!*\
    !*** ./src/app/directory/directory.service.ts ***!
    \************************************************/

  /*! no static exports found */

  /***/
  function srcAppDirectoryDirectoryServiceTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, http_1, i0, i1) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var DirectoryService =
      /*#__PURE__*/
      function () {
        function DirectoryService(http) {
          _classCallCheck(this, DirectoryService);

          this.http = http;
          this.API_PATH = '/api/directory/data/';
        }

        _createClass(DirectoryService, [{
          key: "getDirectory",
          value: function getDirectory(request) {
            return this.http.post("".concat(this.API_PATH, "/").concat(request.chartId), request);
          }
        }]);

        return DirectoryService;
      }();

      exports.DirectoryService = DirectoryService;

      DirectoryService.ɵfac = function DirectoryService_Factory(t) {
        return new (t || DirectoryService)(i0.ɵɵinject(i1.HttpClient));
      };

      DirectoryService.ɵprov = i0.ɵɵdefineInjectable({
        token: DirectoryService,
        factory: DirectoryService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(DirectoryService, [{
          type: core_1.Injectable
        }], function () {
          return [{
            type: i1.HttpClient
          }];
        }, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  }
}]);
//# sourceMappingURL=2-es5.js.map