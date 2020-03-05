function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3], {
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

    var PaginationConfig =
    /*@__PURE__*/
    function () {
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
      return PaginationConfig;
    }();
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
    /*@__PURE__*/
    function () {
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
      return PagerComponent;
    }();
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
    /*@__PURE__*/
    function () {
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
      return PaginationComponent;
    }();

    var PaginationModule =
    /*@__PURE__*/
    function () {
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
      return PaginationModule;
    }();

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

    var InfiniteScrollDirective =
    /*@__PURE__*/
    function () {
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
      return InfiniteScrollDirective;
    }();

    var InfiniteScrollModule =
    /*@__PURE__*/
    function () {
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
      return InfiniteScrollModule;
    }();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InfiniteScrollModule, {
        declarations: [InfiniteScrollDirective],
        exports: [InfiniteScrollDirective]
      });
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

  }
}]);