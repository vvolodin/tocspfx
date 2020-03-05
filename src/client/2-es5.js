function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
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
          var _this = this;

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
            _this.chartId = x;

            _this.analytics.send('Directory', {
              chartId: x
            });
          });
          this.chartMeta$ = store.pipe(store_1.select(fromRoot.getChartMeta));
          this.preloadedData$ = store.pipe(store_1.select(fromRoot.getPreloadedData));
          this.preloadedData$.pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(function (x) {
            return _this.preloadedData = x;
          });
        }

        _createClass(DirectoryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.searchStringEmitter.pipe(operators_1.debounceTime(200), operators_1.takeUntil(this.unsubscribe), operators_1.withLatestFrom(this.chartMeta$)).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  searchString = _ref2[0],
                  chartMeta = _ref2[1];

              _this2.searchString = searchString;

              if (searchString.length > 2 || _this2.hasFullData && searchString.length > 0) {
                if (_this2.hasFullData) {
                  var lowerSearchString = searchString.toLowerCase();
                  _this2.searchResults = _this2.allUsers.filter(function (x) {
                    return x.DisplayName.toLowerCase().indexOf(lowerSearchString) !== -1 || x.Email && x.Email.toLowerCase().indexOf(lowerSearchString) !== -1 || x.JobTitle && x.JobTitle.toLowerCase().indexOf(lowerSearchString) !== -1 || x.TOC_Fields[chartMeta.EmailColumn] && x.TOC_Fields[chartMeta.EmailColumn].toLowerCase().indexOf(lowerSearchString) !== -1 || x.TOC_Fields[chartMeta.JobTitleColumn] && x.TOC_Fields[chartMeta.JobTitleColumn].toLowerCase().indexOf(lowerSearchString) !== -1 || x.TOC_Fields[chartMeta.GroupColumn] && x.TOC_Fields[chartMeta.GroupColumn].toLowerCase().indexOf(lowerSearchString) !== -1 || x.TOC_Fields[chartMeta.PhoneColumn] && x.TOC_Fields[chartMeta.PhoneColumn].toLowerCase().indexOf(lowerSearchString) !== -1 || x.TOC_Fields[chartMeta.NameColumn] && x.TOC_Fields[chartMeta.NameColumn].toLowerCase().indexOf(lowerSearchString) !== -1;
                  });
                  _this2.searchPage = _this2.searchResults.slice(0, DISPLAY_PAGE_SIZE);
                } else {
                  var request = {
                    nextPageUrl: '',
                    pageSize: REQUEST_PAGE_SIZE,
                    chartId: _this2.chartId,
                    searchString: searchString
                  };

                  if (_this2.searchResults.length === 0) {
                    _this2.isLoading = true;
                  }

                  _this2.directoryService.getDirectory(request).pipe(operators_1.takeUntil(_this2.unsubscribe)).subscribe(function (response) {
                    _this2.searchResults = response.users;
                    _this2.searchPage = _this2.searchResults.slice(0, DISPLAY_PAGE_SIZE);
                    _this2.isLoading = false;
                  });
                }
              }

              if (searchString.length === 0) {
                _this2.searchResults = [];
                _this2.searchPage = [];
                _this2.isLoading = false;
              }
            });
            this.nextPageUrl$.pipe(operators_1.filter(function (x) {
              return x !== null;
            }, operators_1.takeUntil(this.unsubscribe))).subscribe(function (x) {
              return console.log('next page url VALUE', x);
            });
            var zipped$ = rxjs_1.zip(this.scrollDown$, this.nextPageUrl$.pipe(operators_1.filter(function (x) {
              return x !== null;
            }))).pipe(operators_1.distinct(function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  _ = _ref4[0],
                  nextPageUrl = _ref4[1];

              return nextPageUrl;
            }));
            zipped$.pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                  _ = _ref6[0],
                  nextPageUrl = _ref6[1];

              console.log('handler for', nextPageUrl);

              if (_this2.searchString.length > 0) {
                return;
              }

              if (_this2.hasFullData) {
                _this2.users = [].concat(_toConsumableArray(_this2.users), _toConsumableArray(_this2.allUsers.slice(_this2.users.length, _this2.users.length + DISPLAY_PAGE_SIZE)));

                _this2.nextPageUrl$.next('' + _this2.users.length);

                return;
              }

              console.log('request');
              var request = {
                nextPageUrl: nextPageUrl,
                pageSize: REQUEST_PAGE_SIZE,
                chartId: _this2.chartId
              };

              _this2.directoryService.getDirectory(request).subscribe(function (x) {
                _this2.users = [].concat(_toConsumableArray(_this2.users), _toConsumableArray(x.users));
                _this2.isLoading = false;

                if (x.nextPageUrl !== null) {
                  _this2.nextPageUrl$.next(x.nextPageUrl);
                }

                if (x.isFullData) {
                  if (_this2.users.length > DISPLAY_PAGE_SIZE) {
                    _this2.allUsers = _this2.users;
                    _this2.hasFullData = true;
                    _this2.users = _this2.allUsers.slice(0, DISPLAY_PAGE_SIZE);

                    if (_this2.users.length < _this2.allUsers.length) {
                      console.log('emitting new next page url');

                      _this2.nextPageUrl$.next('' + _this2.users.length);
                    }
                  } else {
                    _this2.isPaginationNeeded = false;
                  }
                } //check if container size doesn't have scroll


                setTimeout(function () {
                  if (window.innerWidth > document.documentElement.clientWidth) {
                    console.log('ENOUGH');
                  } else {
                    console.log('not enough');

                    _this2.scrollDown$.next();
                  }
                }, 0);
              });
            });
            this.nextPageUrl$.next('');
            this.scrollDown$.next();
            this.nodeInformation$ = this.store.select(fromChart.getInformationResults);
            this.nodeInformation$.pipe(operators_1.takeUntil(this.unsubscribe), operators_1.skip(1), operators_1.withLatestFrom(this.store.select(fromRoot.getSharedOpenedModalNames))).subscribe(function (_ref7) {
              var _ref8 = _slicedToArray(_ref7, 2),
                  infoResults = _ref8[0],
                  openedModalNames = _ref8[1];

              if (openedModalNames && openedModalNames.length > 0) {
                //do not open modals if one is already open
                return;
              }

              if (infoResults && infoResults.Data && infoResults.Data.VacantPosition) {
                _this2.store.dispatch(new shared_actions_1.DialogShow({
                  dialogName: shared_models_1.SharedModals.CreatePosition,
                  options: {
                    initialState: {
                      isEditMode: false,
                      editedPosition: infoResults.Data.VacantPosition
                    }
                  }
                }));
              } else {
                _this2.store.dispatch(new shared_actions_1.DialogShow({
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
        styles: [".box-row {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.margin-row {\n  margin-bottom: 20px;\n}\n\n.toolbar {\n  padding-bottom: 12px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.toolbar-right {\n  display: -webkit-box;\n  display: flex;\n}\n\na.directory-menu-toggle {\n  padding-left: 20px;\n  padding-right: 10px;\n}\n\n.search {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n\n.directory {\n  padding-top: 12px;\n}\n\n.btn-search {\n  position: absolute;\n  right: 50px;\n  bottom: 8px;\n  background-color: transparent;\n  outline: none;\n  border: none;\n  cursor: pointer;\n}\n\n[role=button] {\n  cursor: pointer;\n}"],
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