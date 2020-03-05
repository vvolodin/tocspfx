function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! no static exports found */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"), __webpack_require__(
    /*! ./components/appearance.component */
    "./src/app/admin/components/appearance.component.ts"), __webpack_require__(
    /*! ./components/security.component */
    "./src/app/admin/components/security.component.ts"), __webpack_require__(
    /*! ./components/information-sources.component */
    "./src/app/admin/components/information-sources.component.ts"), __webpack_require__(
    /*! ./components/account.component */
    "./src/app/admin/components/account.component.ts"), __webpack_require__(
    /*! ./components/api.component */
    "./src/app/admin/components/api.component.ts"), __webpack_require__(
    /*! ./components/api-guide.component */
    "./src/app/admin/components/api-guide.component.ts"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, router_1, appearance_component_1, security_component_1, information_sources_component_1, account_component_1, api_component_1, api_guide_component_1, i0, i1) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var routes = [{
        path: '',
        children: [{
          path: '',
          children: [{
            path: '',
            component: appearance_component_1.AppearanceComponent
          }, {
            path: 'security',
            component: security_component_1.SecurityComponent
          }, {
            path: 'informationsources',
            component: information_sources_component_1.InformationSourcesComponent
          }, {
            path: 'account',
            component: account_component_1.AccountComponent
          }, {
            path: 'api',
            component: api_component_1.ApiComponent
          }, {
            path: 'api-guide',
            component: api_guide_component_1.ApiGuideComponent
          }]
        }]
      }];

      var AdminRoutingModule = function AdminRoutingModule() {
        _classCallCheck(this, AdminRoutingModule);
      };

      exports.AdminRoutingModule = AdminRoutingModule;
      AdminRoutingModule.ɵmod = i0.ɵɵdefineNgModule({
        type: AdminRoutingModule
      });
      AdminRoutingModule.ɵinj = i0.ɵɵdefineInjector({
        factory: function AdminRoutingModule_Factory(t) {
          return new (t || AdminRoutingModule)();
        },
        imports: [[router_1.RouterModule.forChild(routes)], router_1.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AdminRoutingModule, {
          imports: [i1.RouterModule],
          exports: [router_1.RouterModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        i0.ɵsetClassMetadata(AdminRoutingModule, [{
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
  "./src/app/admin/admin.actions.ts":
  /*!****************************************!*\
    !*** ./src/app/admin/admin.actions.ts ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function srcAppAdminAdminActionsTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, store_1) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.loadCompositeModel = store_1.createAction('[Admin] Load composite model');
      exports.loadCompositeModelSuccess = store_1.createAction('[Admin] Load composite model success', store_1.props());
      exports.loadCompositeModelFailure = store_1.createAction('[Admin] Load composite model failure');
      exports.loadCompanyGroups = store_1.createAction('[Admin] Load company groups');
      exports.loadCompanyGroupsSuccess = store_1.createAction('[Admin] Load company groups success', store_1.props());
      exports.loadCompanyGroupsFailure = store_1.createAction('[Admin] Load company groups failure');
      exports.loadCharts = store_1.createAction('[Admin] Load charts');
      exports.loadChartsSuccess = store_1.createAction('[Admin] Load charts success', store_1.props());
      exports.loadChartsFailure = store_1.createAction('[Admin] Load charts failure');
      exports.loadCacheSetting = store_1.createAction('[Admin] Load cache setting');
      exports.loadCacheSettingSuccess = store_1.createAction('[Admin] Load cache setting success', store_1.props());
      exports.loadCacheSettingFailure = store_1.createAction('[Admin] Load cache setting failure');
      exports.setAppearanceFormFromCompositeModel = store_1.createAction('[Admin] Set appearance form from model', store_1.props());
      exports.saveAppearance = store_1.createAction('[Admin] Save appearance', store_1.props());
      exports.saveAppearanceFailure = store_1.createAction('[Admin] Save appearance failure');
      exports.saveAppearanceSuccess = store_1.createAction('[Admin] Save appearance success');
      exports.saveCreators = store_1.createAction('[Admin] Save chart creators', store_1.props());
      exports.saveCreatorsSuccess = store_1.createAction('[Admin] Save chart creators success', store_1.props());
      exports.saveCreatorsFailure = store_1.createAction('[Admin] Save chart creators failure');
      exports.createSecurityGroup = store_1.createAction('[Admin] Create security group', store_1.props());
      exports.createSecurityGroupSuccess = store_1.createAction('[Admin] Create security group success', store_1.props());
      exports.createSecurityGroupFailure = store_1.createAction('[Admin] Create security group failure');
      exports.removeSecurityGroup = store_1.createAction('[Admin] Remove security group', store_1.props());
      exports.removeSecurityGroupSuccess = store_1.createAction('[Admin] Remove security group success', store_1.props());
      exports.removeSecurityGroupFailure = store_1.createAction('[Admin] Remove security group failure');
      exports.addSecurityGroupEntry = store_1.createAction('[Admin] Add security group entry', store_1.props());
      exports.addSecurityGroupEntrySuccess = store_1.createAction('[Admin] Add security group entry success', store_1.props());
      exports.addSecurityGroupEntryFailure = store_1.createAction('[Admin] Add security group entry failure');
      exports.removeSecurityGroupEntry = store_1.createAction('[Admin] Remove security group entry', store_1.props());
      exports.removeSecurityGroupEntrySuccess = store_1.createAction('[Admin] Remove security group entry success', store_1.props());
      exports.removeSecurityGroupEntryFailure = store_1.createAction('[Admin] Remove security group entry failure');
      exports.saveGlobalExternalSetting = store_1.createAction('[Admin] Save global external users setting', store_1.props());
      exports.saveGlobalExternalSettingSuccess = store_1.createAction('[Admin] Save global external users setting success', store_1.props());
      exports.saveGlobalExternalSettingFailure = store_1.createAction('[Admin] Save global external users setting failure');
      exports.saveExternalUsersSetting = store_1.createAction('[Admin] Save external users setting', store_1.props());
      exports.saveExternalUsersSettingSuccess = store_1.createAction('[Admin] Save external users setting success', store_1.props());
      exports.saveExternalUsersSettingFailure = store_1.createAction('[Admin] Save external users setting failure', store_1.props());
      exports.saveChart = store_1.createAction('[Admin] Save security chart', store_1.props());
      exports.saveChartSuccess = store_1.createAction('[Admin] Save security chart success', store_1.props());
      exports.saveChartFailure = store_1.createAction('[Admin] Save security chart failure', store_1.props());
      exports.saveAdminEmail = store_1.createAction('[Admin] Save admin email', store_1.props());
      exports.saveAdminEmailSuccess = store_1.createAction('[Admin] Save admin email success', store_1.props());
      exports.saveAdminEmailFailure = store_1.createAction('[Admin] Save admin email failure');
      exports.saveCacheSetting = store_1.createAction('[Admin] Save cache setting', store_1.props());
      exports.saveCacheSettingSuccess = store_1.createAction('[Admin] Save cache setting success', store_1.props());
      exports.saveCacheSettingFailure = store_1.createAction('[Admin] Save cache setting failure');
      exports.loadInformationSource = store_1.createAction('[Admin] Load information source', store_1.props());
      exports.loadInformationSourceSuccess = store_1.createAction('[Admin] Load information source success', store_1.props());
      exports.loadInformationSourceFailure = store_1.createAction('[Admin] Load information source failure');
      exports.getSharePointLists = store_1.createAction('[Admin] Get SP lists');
      exports.getSharePointListsSuccess = store_1.createAction('[Admin] Get SP lists success', store_1.props());
      exports.getSharePointListsFailure = store_1.createAction('[Admin] Get SP lists failure');
      exports.getSharePointListFields = store_1.createAction('[Admin] Get SP list fields', store_1.props());
      exports.getSharePointListFieldsSuccess = store_1.createAction('[Admin] Get SP list fields success', store_1.props());
      exports.getSharePointListFieldsFailure = store_1.createAction('[Admin] Get SP list fields failure');
      exports.saveInformationSource = store_1.createAction('[Admin] Save information source', store_1.props());
      exports.saveInformationSourceSuccess = store_1.createAction('[Admin] Save information source success', store_1.props());
      exports.saveInformationSourceFailure = store_1.createAction('[Admin] Save information source failure');
      exports.deleteInformationSource = store_1.createAction('[Admin] Delete information source', store_1.props());
      exports.deleteInformationSourceSuccess = store_1.createAction('[Admin] Delete information source success', store_1.props());
      exports.deleteInformationSourceFailure = store_1.createAction('[Admin] Delete information source failure');
      exports.testInformationSource = store_1.createAction('[Admin] Test information source', store_1.props());
      exports.testInformationSourceSuccess = store_1.createAction('[Admin] Test information source success', store_1.props());
      exports.testInformationSourceFailure = store_1.createAction('[Admin] Test information source failure');
      exports.clearSavedSourceId = store_1.createAction('[Admin] Clear saved source id');
      exports.loadApiKeys = store_1.createAction('[Admin] Load API keys');
      exports.loadApiKeysSuccess = store_1.createAction('[Admin] Load API keys success', store_1.props());
      exports.loadApiKeysFailure = store_1.createAction('[Admin] Load API keys failure');
      exports.createApiKey = store_1.createAction('[Admin] Create API key');
      exports.createApiKeySuccess = store_1.createAction('[Admin] Create API key success', store_1.props());
      exports.createApiKeyFailure = store_1.createAction('[Admin] Create API key failure');
      exports.revokeApiKey = store_1.createAction('[Admin] Revoke API key', store_1.props());
      exports.revokeApiKeySuccess = store_1.createAction('[Admin] Revoke API key success', store_1.props());
      exports.revokeApiKeyFailure = store_1.createAction('[Admin] Revoke API key failure');
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/admin/admin.effects.ts":
  /*!****************************************!*\
    !*** ./src/app/admin/admin.effects.ts ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function srcAppAdminAdminEffectsTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! ./admin.actions */
    "./src/app/admin/admin.actions.ts"), __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"), __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"), __webpack_require__(
    /*! ../shared/shared.actions */
    "./src/app/shared/shared.actions.ts"), __webpack_require__(
    /*! ./services/admin.service */
    "./src/app/admin/services/admin.service.ts"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"), __webpack_require__(
    /*! ./services/admin.service */
    "./src/app/admin/services/admin.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, effects_1, core_1, AdminActions, rxjs_1, operators_1, shared_actions_1, admin_service_1, i0, i1, i2) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var AdminEffects = function AdminEffects(actions$, adminService) {
        var _this = this;

        _classCallCheck(this, AdminEffects);

        this.actions$ = actions$;
        this.adminService = adminService;
        this.loadCompositeModel$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.loadCompositeModel), operators_1.switchMap(function () {
            return _this.adminService.loadAdminCompositeData().pipe(operators_1.map(function (data) {
              return AdminActions.loadCompositeModelSuccess({
                model: data
              });
            }));
          }), operators_1.catchError(function () {
            return rxjs_1.of(AdminActions.loadCompositeModelFailure()).pipe(operators_1.mergeMap(function (x) {
              return [x, new shared_actions_1.ToastError('Failed to load page data')];
            }));
          }));
        });
        this.loadCompanyGroups$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.loadCompanyGroups), operators_1.switchMap(function () {
            return _this.adminService.loadCompanyGroups().pipe(operators_1.map(function (data) {
              return AdminActions.loadCompanyGroupsSuccess({
                entries: data
              });
            }));
          }), operators_1.catchError(function () {
            return rxjs_1.of(AdminActions.loadCompanyGroupsFailure()).pipe(operators_1.mergeMap(function (x) {
              return [x, new shared_actions_1.ToastError('Failed to load company groups list')];
            }));
          }));
        });
        this.loadCharts$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.loadCharts), operators_1.switchMap(function () {
            return _this.adminService.loadSecurityCharts().pipe(operators_1.map(function (data) {
              return AdminActions.loadChartsSuccess({
                charts: data
              });
            }));
          }), operators_1.catchError(function () {
            return rxjs_1.of(AdminActions.loadChartsFailure()).pipe(operators_1.mergeMap(function (x) {
              return [x, new shared_actions_1.ToastError('Failed to load charts list')];
            }));
          }));
        });
        this.loadCacheSetting$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.loadCacheSetting), operators_1.switchMap(function () {
            return _this.adminService.loadCacheSetting().pipe(operators_1.map(function (data) {
              return AdminActions.loadCacheSettingSuccess({
                value: data
              });
            }), operators_1.catchError(function () {
              return rxjs_1.of(AdminActions.loadCacheSettingFailure()).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to load cache setting')];
              }));
            }));
          }));
        });
        this.saveAppearance$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.saveAppearance), operators_1.switchMap(function (action) {
            return _this.adminService.saveAppearance(action.form).pipe(operators_1.map(function (data) {
              return AdminActions.saveAppearanceSuccess();
            }));
          }));
        });
        this.saveCreators$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.saveCreators), operators_1.switchMap(function (action) {
            return _this.adminService.postCreators(action.creators).pipe(operators_1.map(function (data) {
              return AdminActions.saveCreatorsSuccess({
                creators: data
              });
            }));
          }));
        });
        this.createSecurityGroup$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.createSecurityGroup), operators_1.mergeMap(function (action) {
            return _this.adminService.addSecurityGroup(action.name).pipe(operators_1.map(function (data) {
              return AdminActions.createSecurityGroupSuccess({
                group: data
              });
            }));
          }), operators_1.catchError(function () {
            return rxjs_1.of(AdminActions.createSecurityGroupFailure()).pipe(operators_1.mergeMap(function (x) {
              return [x, new shared_actions_1.ToastError('Could not save security group')];
            }));
          }));
        });
        this.removeSecurityGroup$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.removeSecurityGroup), operators_1.mergeMap(function (action) {
            return _this.adminService.removeSecurityGroup(action.id).pipe(operators_1.map(function (data) {
              return AdminActions.removeSecurityGroupSuccess({
                groups: data
              });
            }));
          }), operators_1.catchError(function () {
            return rxjs_1.of(AdminActions.removeSecurityGroupFailure()).pipe(operators_1.mergeMap(function (x) {
              return [x, new shared_actions_1.ToastError('Failed to remove security group')];
            }));
          }));
        });
        this.addSecurityGroupEntry$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.addSecurityGroupEntry), operators_1.mergeMap(function (action) {
            return _this.adminService.addSecurityGroupEntry(action.entry).pipe(operators_1.map(function (data) {
              return AdminActions.addSecurityGroupEntrySuccess({
                group: data
              });
            }));
          }), operators_1.catchError(function () {
            return rxjs_1.of(AdminActions.addSecurityGroupEntryFailure()).pipe(operators_1.mergeMap(function (x) {
              return [x, new shared_actions_1.ToastError('Failed to add security group entry')];
            }));
          }));
        });
        this.removeSecurityGroupEntry$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.removeSecurityGroupEntry), operators_1.mergeMap(function (action) {
            return _this.adminService.removeSecurityGroupEntry(action.id).pipe(operators_1.map(function (data) {
              return AdminActions.removeSecurityGroupEntrySuccess({
                group: data
              });
            }));
          }), operators_1.catchError(function () {
            return rxjs_1.of(AdminActions.removeSecurityGroupEntryFailure()).pipe(operators_1.mergeMap(function (x) {
              return [x, new shared_actions_1.ToastError('Failed to remove security group entry')];
            }));
          }));
        });
        this.saveGlobalExternalUsersSetting$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.saveGlobalExternalSetting), operators_1.switchMap(function (action) {
            return _this.adminService.saveGlobalExternalUsersSetting(action.value).pipe(operators_1.map(function (data) {
              return AdminActions.saveGlobalExternalSettingSuccess({
                value: data
              });
            }));
          }), operators_1.catchError(function () {
            return rxjs_1.of(AdminActions.saveGlobalExternalSettingFailure()).pipe(operators_1.mergeMap(function (x) {
              return [x, new shared_actions_1.ToastError('Failed to save settings')];
            }));
          }));
        });
        this.saveExternalUsersSetting$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.saveExternalUsersSetting), operators_1.mergeMap(function (action) {
            return _this.adminService.saveExternalUsersSetting(action.chart).pipe(operators_1.map(function (data) {
              return AdminActions.saveExternalUsersSettingSuccess({
                chart: data
              });
            }), operators_1.catchError(function () {
              return rxjs_1.of(AdminActions.saveExternalUsersSettingFailure({
                chart: action.chart
              })).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to save settings')];
              }));
            }));
          }));
        });
        this.saveSecurityChart$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.saveChart), operators_1.mergeMap(function (action) {
            return _this.adminService.saveSecurityChart(action.chart).pipe(operators_1.map(function (data) {
              return AdminActions.saveChartSuccess({
                chart: data
              });
            }), operators_1.catchError(function () {
              return rxjs_1.of(AdminActions.saveChartFailure({
                chart: action.chart
              })).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to save settings')];
              }));
            }));
          }));
        });
        this.saveAdminEmail$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.saveAdminEmail), operators_1.mergeMap(function (action) {
            return _this.adminService.saveAdminEmail(action.AdminEmail, action.CompanyName).pipe(operators_1.map(function (data) {
              return AdminActions.saveAdminEmailSuccess({
                AdminEmail: action.AdminEmail,
                CompanyName: action.CompanyName
              });
            }), operators_1.catchError(function () {
              return rxjs_1.of(AdminActions.saveAdminEmailFailure()).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to save settings')];
              }));
            }));
          }));
        });
        this.saveCacheSetting$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.saveCacheSetting), operators_1.mergeMap(function (action) {
            return _this.adminService.saveCacheSetting(action.value).pipe(operators_1.mergeMap(function (data) {
              return [AdminActions.saveCacheSettingSuccess({
                value: data
              }), new shared_actions_1.ToastSuccess('')];
            }), operators_1.catchError(function () {
              return rxjs_1.of(AdminActions.saveCacheSettingFailure()).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to save settings')];
              }));
            }));
          }));
        });
        this.loadInformationSource$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.loadInformationSource), operators_1.mergeMap(function (action) {
            return _this.adminService.getInfoSource(action.sourceId).pipe(operators_1.map(function (data) {
              return AdminActions.loadInformationSourceSuccess({
                source: data
              });
            }), operators_1.catchError(function (error) {
              return rxjs_1.of(AdminActions.loadInformationSourceFailure()).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to load information source')];
              }));
            }));
          }));
        });
        this.getSharePointLists$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.getSharePointLists), operators_1.switchMap(function () {
            return _this.adminService.getSharePointLists().pipe(operators_1.map(function (data) {
              return AdminActions.getSharePointListsSuccess({
                lists: data
              });
            }), operators_1.catchError(function (error) {
              return rxjs_1.of(AdminActions.getSharePointListsFailure()).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to load SharePoint lists')];
              }));
            }));
          }));
        });
        this.getSharePointListFields$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.getSharePointListFields), operators_1.mergeMap(function (action) {
            return _this.adminService.getSharePointListFields(action.id).pipe(operators_1.map(function (data) {
              return AdminActions.getSharePointListFieldsSuccess({
                fields: data
              });
            }), operators_1.catchError(function (error) {
              return rxjs_1.of(AdminActions.getSharePointListFieldsFailure()).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to load SharePoint list fields')];
              }));
            }));
          }));
        });
        this.saveInformationSource$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.saveInformationSource), operators_1.mergeMap(function (action) {
            return _this.adminService.saveInformationSource(action.source).pipe(operators_1.mergeMap(function (data) {
              return [AdminActions.saveInformationSourceSuccess({
                id: action.source.InformationSourceId,
                result: data
              }), AdminActions.loadCompositeModel()];
            }), operators_1.catchError(function (error) {
              return rxjs_1.of(AdminActions.saveInformationSourceFailure()).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to save information source')];
              }));
            }));
          }));
        });
        this.deleteInformationSource$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.deleteInformationSource), operators_1.mergeMap(function (action) {
            return _this.adminService.deleteInformationSource(action.id).pipe(operators_1.map(function (data) {
              return AdminActions.deleteInformationSourceSuccess({
                id: action.id,
                result: data
              });
            }), operators_1.catchError(function (error) {
              return rxjs_1.of(AdminActions.deleteInformationSourceFailure()).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to delete information source')];
              }));
            }));
          }));
        });
        this.testInformationSource$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.testInformationSource), operators_1.switchMap(function (action) {
            return _this.adminService.testInformationSource(action.id).pipe(operators_1.mergeMap(function (data) {
              var actions = [AdminActions.testInformationSourceSuccess({
                result: data
              })];

              if (data.startsWith('ERROR')) {
                actions.push(new shared_actions_1.ToastError(data));
              } else {
                actions.push(new shared_actions_1.ToastSuccess(data));
              }

              return actions;
            }), operators_1.catchError(function (error) {
              return rxjs_1.of(AdminActions.testInformationSourceFailure()).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to test information source')];
              }));
            }));
          }));
        });
        this.loadApiKeys$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.loadApiKeys), operators_1.switchMap(function (action) {
            return _this.adminService.loadApiKeys().pipe(operators_1.map(function (data) {
              return AdminActions.loadApiKeysSuccess({
                apiKeys: data
              });
            }), operators_1.catchError(function (error) {
              return rxjs_1.of(AdminActions.loadApiKeysFailure()).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to load API keys')];
              }));
            }));
          }));
        });
        this.createApiKey$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.createApiKey), operators_1.switchMap(function (action) {
            return _this.adminService.createApiKey().pipe(operators_1.map(function (data) {
              return AdminActions.createApiKeySuccess({
                apiKey: data
              });
            }), operators_1.catchError(function (error) {
              return rxjs_1.of(AdminActions.createApiKeyFailure()).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to create an API key')];
              }));
            }));
          }));
        });
        this.revokeApiKey$ = effects_1.createEffect(function () {
          return _this.actions$.pipe(effects_1.ofType(AdminActions.revokeApiKey), operators_1.switchMap(function (action) {
            return _this.adminService.revokeApiKey(action.id).pipe(operators_1.map(function (data) {
              return AdminActions.revokeApiKeySuccess({
                id: action.id
              });
            }), operators_1.catchError(function (error) {
              return rxjs_1.of(AdminActions.revokeApiKeyFailure()).pipe(operators_1.mergeMap(function (x) {
                return [x, new shared_actions_1.ToastError('Failed to revoke an API key')];
              }));
            }));
          }));
        });
      };

      exports.AdminEffects = AdminEffects;

      AdminEffects.ɵfac = function AdminEffects_Factory(t) {
        return new (t || AdminEffects)(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i2.AdminService));
      };

      AdminEffects.ɵprov = i0.ɵɵdefineInjectable({
        token: AdminEffects,
        factory: AdminEffects.ɵfac
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(AdminEffects, [{
          type: core_1.Injectable
        }], function () {
          return [{
            type: i1.Actions
          }, {
            type: i2.AdminService
          }];
        }, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function srcAppAdminAdminModuleTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"), __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"), __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js"), __webpack_require__(
    /*! ngx-bootstrap/typeahead */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js"), __webpack_require__(
    /*! ./admin.reducers */
    "./src/app/admin/admin.reducers.ts"), __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js"), __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts"), __webpack_require__(
    /*! ./components/appearance.component */
    "./src/app/admin/components/appearance.component.ts"), __webpack_require__(
    /*! ./components/security.component */
    "./src/app/admin/components/security.component.ts"), __webpack_require__(
    /*! ./admin.effects */
    "./src/app/admin/admin.effects.ts"), __webpack_require__(
    /*! ./services/admin.service */
    "./src/app/admin/services/admin.service.ts"), __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts"), __webpack_require__(
    /*! ngrx-forms */
    "./node_modules/ngrx-forms/__ivy_ngcc__/fesm2015/ngrx-forms.js"), __webpack_require__(
    /*! ./components/account.component */
    "./src/app/admin/components/account.component.ts"), __webpack_require__(
    /*! ./components/information-sources.component */
    "./src/app/admin/components/information-sources.component.ts"), __webpack_require__(
    /*! ./components/api.component */
    "./src/app/admin/components/api.component.ts"), __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js"), __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js"), __webpack_require__(
    /*! ./components/api-guide.component */
    "./src/app/admin/components/api-guide.component.ts"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"), __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, common_1, store_1, effects_1, forms_1, ng2_file_upload_1, typeahead_1, fromAdmin, ngx_color_picker_1, shared_module_1, appearance_component_1, security_component_1, admin_effects_1, admin_service_1, admin_routing_module_1, ngrx_forms_1, account_component_1, information_sources_component_1, api_component_1, tooltip_1, ngx_clipboard_1, api_guide_component_1, i0, i1, i2, i3) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var AdminModule = function AdminModule() {
        _classCallCheck(this, AdminModule);
      };

      exports.AdminModule = AdminModule;
      AdminModule.ɵmod = i0.ɵɵdefineNgModule({
        type: AdminModule
      });
      AdminModule.ɵinj = i0.ɵɵdefineInjector({
        factory: function AdminModule_Factory(t) {
          return new (t || AdminModule)();
        },
        providers: [admin_service_1.AdminService],
        imports: [[common_1.CommonModule, admin_routing_module_1.AdminRoutingModule, store_1.StoreModule.forFeature('admin', fromAdmin.reducer), effects_1.EffectsModule.forFeature([admin_effects_1.AdminEffects]), tooltip_1.TooltipModule.forRoot(), ng2_file_upload_1.FileUploadModule, forms_1.FormsModule, ngrx_forms_1.NgrxFormsModule, shared_module_1.SharedModule, typeahead_1.TypeaheadModule, ngx_color_picker_1.ColorPickerModule, ngx_clipboard_1.ClipboardModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AdminModule, {
          declarations: [appearance_component_1.AppearanceComponent, security_component_1.SecurityComponent, account_component_1.AccountComponent, information_sources_component_1.InformationSourcesComponent, api_component_1.ApiComponent, api_guide_component_1.ApiGuideComponent],
          imports: [common_1.CommonModule, admin_routing_module_1.AdminRoutingModule, i1.StoreFeatureModule, i2.EffectsFeatureModule, i3.TooltipModule, ng2_file_upload_1.FileUploadModule, forms_1.FormsModule, ngrx_forms_1.NgrxFormsModule, shared_module_1.SharedModule, typeahead_1.TypeaheadModule, ngx_color_picker_1.ColorPickerModule, ngx_clipboard_1.ClipboardModule]
        });
      })();
      /*@__PURE__*/


      (function () {
        i0.ɵsetClassMetadata(AdminModule, [{
          type: core_1.NgModule,
          args: [{
            imports: [common_1.CommonModule, admin_routing_module_1.AdminRoutingModule, store_1.StoreModule.forFeature('admin', fromAdmin.reducer), effects_1.EffectsModule.forFeature([admin_effects_1.AdminEffects]), tooltip_1.TooltipModule.forRoot(), ng2_file_upload_1.FileUploadModule, forms_1.FormsModule, ngrx_forms_1.NgrxFormsModule, shared_module_1.SharedModule, typeahead_1.TypeaheadModule, ngx_color_picker_1.ColorPickerModule, ngx_clipboard_1.ClipboardModule],
            declarations: [appearance_component_1.AppearanceComponent, security_component_1.SecurityComponent, account_component_1.AccountComponent, information_sources_component_1.InformationSourcesComponent, api_component_1.ApiComponent, api_guide_component_1.ApiGuideComponent],
            providers: [admin_service_1.AdminService]
          }]
        }], null, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/admin/admin.reducers.ts":
  /*!*****************************************!*\
    !*** ./src/app/admin/admin.reducers.ts ***!
    \*****************************************/

  /*! no static exports found */

  /***/
  function srcAppAdminAdminReducersTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! ./admin.actions */
    "./src/app/admin/admin.actions.ts"), __webpack_require__(
    /*! ngrx-forms */
    "./node_modules/ngrx-forms/__ivy_ngcc__/fesm2015/ngrx-forms.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, tslib_1, store_1, AdminActions, ngrx_forms_1) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var APPEARANCE_FORM_ID = 'appearance_form_id';
      exports.initialAppearanceFormState = ngrx_forms_1.createFormGroupState(APPEARANCE_FORM_ID, {
        brandColor: '#000000',
        theme: 'Light',
        footerText: ''
      });
      exports.initialState = {
        compositeModel: null,
        isFetching: false,
        appearanceForm: exports.initialAppearanceFormState,
        selectedSecurityGroupId: 0,
        availableEntries: null,
        charts: null,
        chartRequests: {},
        chartExternalRequests: {},
        disableCacheSetting: null,
        selectedSourceInfo: null,
        deletedSourceId: null,
        savedSourceId: null,
        sharePointLists: [],
        sharePointListFields: [],
        apiKeys: []
      };
      var adminReducer = store_1.createReducer(exports.initialState, ngrx_forms_1.onNgrxForms(), store_1.on(AdminActions.setAppearanceFormFromCompositeModel, function (state, _ref) {
        var model = _ref.model;
        return Object.assign(Object.assign({}, state), {
          appearanceForm: ngrx_forms_1.createFormGroupState(APPEARANCE_FORM_ID, Object.assign(Object.assign({}, exports.initialAppearanceFormState), {
            brandColor: model.Settings.CustomColour,
            theme: model.Settings.CustomThemeName,
            footerText: model.Settings.CustomFooterText
          }))
        });
      }), store_1.on(AdminActions.saveAppearanceSuccess, function (state) {
        window.location.reload();
        return state;
      }), store_1.on(AdminActions.loadCompositeModel, function (state) {
        return Object.assign(Object.assign({}, state), {
          isFetching: true
        });
      }), store_1.on(AdminActions.loadCompositeModelFailure, function (state) {
        return Object.assign(Object.assign({}, state), {
          isFetching: false
        });
      }), store_1.on(AdminActions.loadCompositeModelSuccess, function (state, _ref2) {
        var model = _ref2.model;
        return Object.assign(Object.assign({}, state), {
          compositeModel: model,
          isFetching: false
        });
      }), store_1.on(AdminActions.saveCreatorsSuccess, function (state, _ref3) {
        var creators = _ref3.creators;
        return Object.assign(Object.assign({}, state), {
          compositeModel: Object.assign(Object.assign({}, state.compositeModel), {
            Creators: creators
          })
        });
      }), store_1.on(AdminActions.createSecurityGroupSuccess, function (state, _ref4) {
        var group = _ref4.group;
        return Object.assign(Object.assign({}, state), {
          selectedSecurityGroupId: group.Id,
          compositeModel: Object.assign(Object.assign({}, state.compositeModel), {
            SecurityGroups: [].concat(_toConsumableArray(state.compositeModel.SecurityGroups), [group])
          })
        });
      }), store_1.on(AdminActions.removeSecurityGroupSuccess, function (state, _ref5) {
        var groups = _ref5.groups;
        return Object.assign(Object.assign({}, state), {
          compositeModel: Object.assign(Object.assign({}, state.compositeModel), {
            SecurityGroups: groups
          })
        });
      }), store_1.on(AdminActions.loadCompanyGroupsSuccess, function (state, _ref6) {
        var entries = _ref6.entries;
        return Object.assign(Object.assign({}, state), {
          availableEntries: entries
        });
      }), store_1.on(AdminActions.addSecurityGroupEntrySuccess, AdminActions.removeSecurityGroupEntrySuccess, function (state, _ref7) {
        var group = _ref7.group;
        return Object.assign(Object.assign({}, state), {
          compositeModel: Object.assign(Object.assign({}, state.compositeModel), {
            SecurityGroups: state.compositeModel.SecurityGroups.map(function (x) {
              if (x.Id === group.Id) {
                return group;
              }

              return x;
            })
          })
        });
      }), store_1.on(AdminActions.saveGlobalExternalSettingSuccess, function (state, _ref8) {
        var value = _ref8.value;
        return Object.assign(Object.assign({}, state), {
          compositeModel: Object.assign(Object.assign({}, state.compositeModel), {
            GlobalExternalUsersSetting: value
          })
        });
      }), store_1.on(AdminActions.saveExternalUsersSettingSuccess, function (state, _ref9) {
        var chart = _ref9.chart;

        var _a = state.chartExternalRequests,
            _b = chart.id,
            value = _a[_b],
            requests = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);

        return Object.assign(Object.assign({}, state), {
          charts: state.charts.map(function (x) {
            if (x.id === chart.id) {
              //this particular API does not return the full chart view model, only id and areExternalUsersAllowed fields
              return Object.assign(Object.assign({}, x), {
                areExternalUsersAllowed: chart.areExternalUsersAllowed
              });
            }

            return x;
          }),
          chartExternalRequests: requests
        });
      }), store_1.on(AdminActions.saveExternalUsersSetting, function (state, _ref10) {
        var chart = _ref10.chart;
        return Object.assign(Object.assign({}, state), {
          chartExternalRequests: Object.assign(Object.assign({}, state.chartExternalRequests), _defineProperty({}, chart.id, {}))
        });
      }), store_1.on(AdminActions.saveChart, function (state, _ref11) {
        var chart = _ref11.chart;
        return Object.assign(Object.assign({}, state), {
          chartRequests: Object.assign(Object.assign({}, state.chartExternalRequests), _defineProperty({}, chart.id, {}))
        });
      }), store_1.on(AdminActions.saveChartSuccess, AdminActions.saveChartFailure, function (state, _ref12) {
        var chart = _ref12.chart;

        var _a = state.chartRequests,
            _b = chart.id,
            value = _a[_b],
            requests = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);

        return Object.assign(Object.assign({}, state), {
          chartRequests: requests,
          charts: state.charts.map(function (x) {
            if (x.id === chart.id) {
              return chart;
            }

            return x;
          })
        });
      }), store_1.on(AdminActions.loadChartsSuccess, function (state, _ref13) {
        var charts = _ref13.charts;
        return Object.assign(Object.assign({}, state), {
          charts: charts.map(function (x) {
            var chart = Object.assign({}, x);
            return chart;
          })
        });
      }), store_1.on(AdminActions.saveAdminEmailSuccess, function (state, _ref14) {
        var AdminEmail = _ref14.AdminEmail,
            CompanyName = _ref14.CompanyName;
        return Object.assign(Object.assign({}, state), {
          compositeModel: Object.assign(Object.assign({}, state.compositeModel), {
            AdminEmailAndCompanyName: {
              AdminEmail: AdminEmail,
              CompanyName: CompanyName
            }
          })
        });
      }), store_1.on(AdminActions.loadCacheSettingSuccess, function (state, _ref15) {
        var value = _ref15.value;
        return Object.assign(Object.assign({}, state), {
          disableCacheSetting: value
        });
      }), store_1.on(AdminActions.saveCacheSettingSuccess, function (state, _ref16) {
        var value = _ref16.value;
        return Object.assign(Object.assign({}, state), {
          disableCacheSetting: value
        });
      }), store_1.on(AdminActions.loadInformationSourceSuccess, function (state, _ref17) {
        var source = _ref17.source;
        return Object.assign(Object.assign({}, state), {
          selectedSourceInfo: source
        });
      }), store_1.on(AdminActions.deleteInformationSourceSuccess, function (state, _ref18) {
        var id = _ref18.id,
            result = _ref18.result;
        return Object.assign(Object.assign({}, state), {
          deletedSourceId: result ? id : null
        });
      }), store_1.on(AdminActions.saveInformationSourceSuccess, function (state, _ref19) {
        var id = _ref19.id,
            result = _ref19.result;

        if (result) {
          return Object.assign(Object.assign({}, state), {
            savedSourceId: id
          });
        }

        return state;
      }), store_1.on(AdminActions.clearSavedSourceId, function (state) {
        return Object.assign(Object.assign({}, state), {
          savedSourceId: null
        });
      }), store_1.on(AdminActions.getSharePointListsSuccess, function (state, _ref20) {
        var lists = _ref20.lists;
        return Object.assign(Object.assign({}, state), {
          sharePointLists: lists
        });
      }), store_1.on(AdminActions.getSharePointListFieldsSuccess, function (state, _ref21) {
        var fields = _ref21.fields;
        return Object.assign(Object.assign({}, state), {
          sharePointListFields: fields
        });
      }), store_1.on(AdminActions.loadApiKeysSuccess, function (state, _ref22) {
        var apiKeys = _ref22.apiKeys;
        return Object.assign(Object.assign({}, state), {
          apiKeys: apiKeys
        });
      }), store_1.on(AdminActions.createApiKeySuccess, function (state, _ref23) {
        var apiKey = _ref23.apiKey;
        return Object.assign(Object.assign({}, state), {
          apiKeys: [].concat(_toConsumableArray(state.apiKeys), [apiKey])
        });
      }), store_1.on(AdminActions.revokeApiKeySuccess, function (state, _ref24) {
        var id = _ref24.id;
        return Object.assign(Object.assign({}, state), {
          apiKeys: state.apiKeys.filter(function (x) {
            return x.Id !== id;
          })
        });
      }));

      function reducer(state, action) {
        return adminReducer(state, action);
      }

      exports.reducer = reducer;

      exports.selectAdmin = function (state) {
        return state.admin;
      };

      exports.selectCompositeModel = store_1.createSelector(exports.selectAdmin, function (state) {
        return state.compositeModel;
      });
      exports.selectAppearanceFormState = store_1.createSelector(exports.selectAdmin, function (state) {
        return state.appearanceForm;
      });
      exports.selectSelectedSecurityGroupId = store_1.createSelector(exports.selectAdmin, function (state) {
        return state.selectedSecurityGroupId;
      });
      exports.selectAvailableEntries = store_1.createSelector(exports.selectAdmin, function (s) {
        return s.availableEntries;
      });
      exports.selectCharts = store_1.createSelector(exports.selectAdmin, function (s) {
        return s.charts;
      });
      exports.selectChartRequests = store_1.createSelector(exports.selectAdmin, function (s) {
        return s.chartRequests;
      });
      exports.selectChartExternalRequests = store_1.createSelector(exports.selectAdmin, function (s) {
        return s.chartExternalRequests;
      });
      exports.selectDisableCacheSetting = store_1.createSelector(exports.selectAdmin, function (s) {
        return s.disableCacheSetting;
      });
      exports.selectSelectedSourceInfo = store_1.createSelector(exports.selectAdmin, function (s) {
        return s.selectedSourceInfo;
      });
      exports.selectApiKeys = store_1.createSelector(exports.selectAdmin, function (s) {
        return s.apiKeys;
      });
      exports.selectDeletedSourceId = store_1.createSelector(exports.selectAdmin, function (state) {
        return state.deletedSourceId;
      });
      exports.selecteSavedSourceId = store_1.createSelector(exports.selectAdmin, function (s) {
        return s.savedSourceId;
      });
      exports.selectSharePointLists = store_1.createSelector(exports.selectAdmin, function (state) {
        return state.sharePointLists;
      });
      exports.selectSharePointListFields = store_1.createSelector(exports.selectAdmin, function (state) {
        return state.sharePointListFields;
      });
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/admin/components/account.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/components/account.component.ts ***!
    \*******************************************************/

  /*! no static exports found */

  /***/
  function srcAppAdminComponentsAccountComponentTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(
    /*! ../../strings */
    "./src/app/strings/index.ts"), __webpack_require__(
    /*! ../admin.reducers */
    "./src/app/admin/admin.reducers.ts"), __webpack_require__(
    /*! ../admin.actions */
    "./src/app/admin/admin.actions.ts"), __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"), __webpack_require__(
    /*! src/app/shared/shared.models */
    "./src/app/shared/shared.models.ts"), __webpack_require__(
    /*! src/app/shared/shared.actions */
    "./src/app/shared/shared.actions.ts"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"), __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, angular_l10n_1, Resources, fromAdmin, AdminActions, rxjs_1, store_1, operators_1, shared_models_1, shared_actions_1, i0, i1, i2, i3, i4) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var AccountComponent =
      /*#__PURE__*/
      function () {
        function AccountComponent(locale, store) {
          var _this2 = this;

          _classCallCheck(this, AccountComponent);

          this.locale = locale;
          this.store = store;
          this.Resources = Resources;
          this.adminEmail = '';
          this.companyName = '';
          this.unsubscribe = new rxjs_1.Subject();
          this.disableCacheSetting$ = this.store.pipe(store_1.select(fromAdmin.selectDisableCacheSetting));
          this.disableCacheSetting$.pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(function (x) {
            if (x === null) {
              _this2.store.dispatch(AdminActions.loadCacheSetting());
            }
          });
          this.model$ = store.pipe(store_1.select(fromAdmin.selectCompositeModel));
          this.model$.pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(function (model) {
            if (model === null) {
              _this2.store.dispatch(AdminActions.loadCompositeModel());

              return;
            }

            _this2.adminEmail = model.AdminEmailAndCompanyName.AdminEmail;
            _this2.companyName = model.AdminEmailAndCompanyName.CompanyName;
          });
        }

        _createClass(AccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "saveCacheSetting",
          value: function saveCacheSetting($event) {
            this.store.dispatch(AdminActions.saveCacheSetting({
              value: $event
            }));
          }
        }, {
          key: "saveAdminEmail",
          value: function saveAdminEmail() {
            this.store.dispatch(AdminActions.saveAdminEmail({
              AdminEmail: this.adminEmail,
              CompanyName: this.companyName
            }));
          }
        }, {
          key: "deleteAccount",
          value: function deleteAccount() {
            var confirmationOptions = {
              cancelButtonText: Resources.Strings.BUTTON.Cancel,
              text: Resources.Strings.TXT.DeleteAccountConfirmationText,
              title: Resources.Strings.TXT.DeleteAccountConfirmationDialogTitle,
              successButtonText: Resources.Strings.BTN.DeleteAccountConfirmation,
              //successAction: new SaveColumnSettings(this.columnSettings)
              callback: function callback() {
                document.getElementById('delete-account-form').submit();
              }
            };
            this.store.dispatch(new shared_actions_1.DialogShow({
              dialogName: shared_models_1.SharedModals.ConfirmationDialog,
              options: {
                options: confirmationOptions
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

        return AccountComponent;
      }();

      exports.AccountComponent = AccountComponent;

      AccountComponent.ɵfac = function AccountComponent_Factory(t) {
        return new (t || AccountComponent)(i0.ɵɵdirectiveInject(angular_l10n_1.L10N_LOCALE), i0.ɵɵdirectiveInject(i1.Store));
      };

      AccountComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: AccountComponent,
        selectors: [["toc-admin-account"]],
        decls: 52,
        vars: 49,
        consts: [[1, "container"], [1, "card"], [1, "section-heading"], ["ng-disabled", "saving", "translate", "common.SAVE_CHANGES", 1, "btn", "btn-success", 3, "click"], [1, "suffix"], ["type", "text", "ng-disabled", "saving", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "row", "horizontal-form"], [1, "col"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "customCheck1", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customCheck1", 1, "custom-control-label"], ["id", "delete-account-button-ng", 1, "btn", "btn-danger", 3, "click"], [1, "row"], [1, "col-md-12"], ["id", "delete-account-form", "method", "POST", "action", "/account/delete"], [1, "alert", "alert-danger", 2, "padding", "5px"]],
        template: function AccountComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵelementStart(5, "button", 3);
            i0.ɵɵlistener("click", function AccountComponent_Template_button_click_5_listener($event) {
              return ctx.saveAdminEmail();
            });
            i0.ɵɵtext(6, "Save Changes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 4);
            i0.ɵɵtext(8);
            i0.ɵɵpipe(9, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "input", 5);
            i0.ɵɵlistener("ngModelChange", function AccountComponent_Template_input_ngModelChange_10_listener($event) {
              return ctx.companyName = $event;
            });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 1);
            i0.ɵɵelementStart(12, "div", 2);
            i0.ɵɵtext(13);
            i0.ɵɵpipe(14, "translate");
            i0.ɵɵelementStart(15, "button", 3);
            i0.ɵɵlistener("click", function AccountComponent_Template_button_click_15_listener($event) {
              return ctx.saveAdminEmail();
            });
            i0.ɵɵtext(16, "Save Changes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 4);
            i0.ɵɵtext(18);
            i0.ɵɵpipe(19, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "input", 5);
            i0.ɵɵlistener("ngModelChange", function AccountComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.adminEmail = $event;
            });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 1);
            i0.ɵɵelementStart(22, "div", 2);
            i0.ɵɵtext(23);
            i0.ɵɵpipe(24, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 4);
            i0.ɵɵtext(26);
            i0.ɵɵpipe(27, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 6);
            i0.ɵɵelementStart(29, "div", 7);
            i0.ɵɵelementStart(30, "div", 8);
            i0.ɵɵelementStart(31, "input", 9);
            i0.ɵɵlistener("ngModelChange", function AccountComponent_Template_input_ngModelChange_31_listener($event) {
              return ctx.saveCacheSetting($event);
            });
            i0.ɵɵpipe(32, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "label", 10);
            i0.ɵɵtext(34);
            i0.ɵɵpipe(35, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 1);
            i0.ɵɵelementStart(37, "div", 2);
            i0.ɵɵtext(38);
            i0.ɵɵpipe(39, "translate");
            i0.ɵɵelementStart(40, "button", 11);
            i0.ɵɵlistener("click", function AccountComponent_Template_button_click_40_listener($event) {
              return ctx.deleteAccount();
            });
            i0.ɵɵtext(41);
            i0.ɵɵpipe(42, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 4);
            i0.ɵɵtext(44);
            i0.ɵɵpipe(45, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(46, "div", 12);
            i0.ɵɵelementStart(47, "div", 13);
            i0.ɵɵelement(48, "form", 14);
            i0.ɵɵelementStart(49, "p", 15);
            i0.ɵɵtext(50);
            i0.ɵɵpipe(51, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(4, 14, "admin.TXT_Company", ctx.locale.language), " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 17, "admin.TXT_CompanyDesc", ctx.locale.language));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.companyName);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(14, 20, "admin.TXT_Admin", ctx.locale.language), " ");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(19, 23, "admin.TXT_AdminDesc", ctx.locale.language));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.adminEmail);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(24, 26, "admin.TXT_Data", ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(27, 29, "admin.TXT_DataDesc", ctx.locale.language));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", i0.ɵɵpipeBind1(32, 32, ctx.disableCacheSetting$));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(35, 34, "admin.TXT_DataLab", ctx.locale.language));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(39, 37, "admin.TXT_Delete", ctx.locale.language), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(42, 40, "admin.TXT_Delete", ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(45, 43, "admin.TXT_DeleteDesc", ctx.locale.language));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(51, 46, "admin.TXT_DeleteDesc2", ctx.locale.language), " ");
          }
        },
        directives: [i2.L10nTranslateDirective, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i3.CheckboxControlValueAccessor, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm],
        pipes: [i2.L10nTranslatePipe, i4.AsyncPipe],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(AccountComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'toc-admin-account',
            templateUrl: 'account.component.html'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: core_1.Inject,
              args: [angular_l10n_1.L10N_LOCALE]
            }]
          }, {
            type: i1.Store
          }];
        }, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/admin/components/api-guide.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/admin/components/api-guide.component.ts ***!
    \*********************************************************/

  /*! no static exports found */

  /***/
  function srcAppAdminComponentsApiGuideComponentTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, i0) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var ApiGuideComponent =
      /*#__PURE__*/
      function () {
        function ApiGuideComponent() {
          _classCallCheck(this, ApiGuideComponent);
        }

        _createClass(ApiGuideComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ApiGuideComponent;
      }();

      exports.ApiGuideComponent = ApiGuideComponent;

      ApiGuideComponent.ɵfac = function ApiGuideComponent_Factory(t) {
        return new (t || ApiGuideComponent)();
      };

      ApiGuideComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: ApiGuideComponent,
        selectors: [["toc-api-guide"]],
        decls: 76,
        vars: 0,
        consts: [[1, "container"], [1, "card"], [1, "lead"], ["src", "/img/zapier/Picture1.png", "alt", "creating an api key", 1, "img-fluid"], ["src", "/img/zapier/Picture2.png", "alt", "add api key", 1, "img-fluid"], ["src", "/img/zapier/Picture3.png", "alt", "testing the api", 1, "img-fluid"], ["src", "/img/zapier/Picture4.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture5.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture6.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture7.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture8.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture9.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture10.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture10_2.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture11.png", "alt", "using the api key", 1, "img-fluid"], ["href", "https://teamorgchart.com/v1/data/CHART_ID"], ["src", "/img/zapier/Picture12.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture13.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture14.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture15.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture16.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture17.png", "alt", "using the api key", 1, "img-fluid"], ["src", "/img/zapier/Picture18.png", "alt", "using the api key", 1, "img-fluid"]],
        template: function ApiGuideComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "h1");
            i0.ɵɵtext(3, "Zapier Integration Guide");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 2);
            i0.ɵɵtext(5, "This guide shows how to create a simple Zap to update a chart from a Google Sheets document.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "h2");
            i0.ɵɵtext(7, "Creating an API key");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p");
            i0.ɵɵtext(9, "In order to authenticate API requests the caller needs to provide an API key in an HTTP header \u201CX-API-Key\u201D. API keys can be issued and revoked on \u201CAdmin\u201D-\u201CAPI\u201D page.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "img", 3);
            i0.ɵɵelementStart(11, "p");
            i0.ɵɵtext(12, "Click \u201CAdd API Key\u201D button to issue a new API key. The new key will appear in the table below. Please copy the key value immediately \u2013 it will only be displayed once since it\u2019s not being stored on TeamOrgChart\u2019s servers in plain text.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "img", 4);
            i0.ɵɵelementStart(14, "h2");
            i0.ɵɵtext(15, "Testing the API");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "p");
            i0.ɵɵtext(17, "Click the \u201CAPI Documentation\u201D link to open Swagger UI page. This page allows you to make calls to the API directly from your web browser.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "img", 5);
            i0.ɵɵelementStart(19, "p");
            i0.ɵɵtext(20, "Paste the value of created API key into the \u201Capi_key\u201D field. Click \u201CChartsApi\u201D to open a list of operations available in this category.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "img", 6);
            i0.ɵɵelementStart(22, "p");
            i0.ɵɵtext(23, "We\u2019re going to use GET all charts call, the first in the list. Click on the operation to open detailed information.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(24, "img", 7);
            i0.ɵɵelementStart(25, "p");
            i0.ɵɵtext(26, "The only required parameter for this operation is \u201Cversion\u201D, enter \u201C1\u201D as the value and click \u201CTry it out!\u201D. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "p");
            i0.ɵɵtext(28, "Upon successful request you\u2019ll see the response body, code and headers. Response body contains JSON representation of the list of charts available in your organization.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(29, "img", 8);
            i0.ɵɵelementStart(30, "h2");
            i0.ɵɵtext(31, "Creating a Zapier integration to update a chart from a Google Spreadsheet.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "p");
            i0.ɵɵtext(33, "First, let\u2019s create a chart to hold imported data. Go to \u201CCreate new org chart\u201D screen. Enter a name for the new chart and choose \u201CLoad from a spreadsheet\u201D as chart type: ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(34, "img", 9);
            i0.ɵɵelementStart(35, "p");
            i0.ɵɵtext(36, "Get chart ID from the URL of the view chart page:");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(37, "img", 10);
            i0.ɵɵelementStart(38, "p");
            i0.ɵɵtext(39, "In my case it\u2019s \u201C5765a62a-11a0-49f4-9ca9-88020ec3b10c\u201D. Save this value for later. Go to Zapier.com\u2019s dashboard and open My Zaps. Click Make a Zap! to create a new integration. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(40, "img", 11);
            i0.ɵɵelementStart(41, "p");
            i0.ɵɵtext(42, "Choose Google Sheets as a source event. Choose \u201CNew spreadsheet row\u201D as a trigger event.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(43, "img", 12);
            i0.ɵɵelementStart(44, "p");
            i0.ɵɵtext(45, "Press continue and log in to Google, choose a source spreadsheet and and a worksheet inside the spreadsheet. The spreadsheet should contain a header row with fields for Unique item ID, Manager ID, Display name, job title and any other data required.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(46, "img", 13);
            i0.ɵɵelementStart(47, "p");
            i0.ɵɵtext(48, "Press \u201CEdit\u201D next to \u201CDo this \u2026\u201D. Select \u201CWebhooks by Zapier\u201D as an App and POST as an action event: ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(49, "img", 14);
            i0.ɵɵelementStart(50, "p");
            i0.ɵɵtext(51, " Press continue and enter TeamOrgChart API call data: URL \u2013 ");
            i0.ɵɵelementStart(52, "a", 15);
            i0.ɵɵtext(53, "https://teamorgchart.com/v1/data/CHART_ID");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(54, ".");
            i0.ɵɵelement(55, "br");
            i0.ɵɵtext(56, " Substitute CHART_ID with the ID of the chart you wish to use as a sync target. Choose JSON as payload type. Map your spreadsheet columns data to JSON using Data table: ");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(57, "img", 16);
            i0.ɵɵelementStart(58, "p");
            i0.ɵɵtext(59, "At the bottom of the settings panel enter a new header name \u201CX-API-Key\u201D and paste your API key as a value.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(60, "img", 17);
            i0.ɵɵelementStart(61, "p");
            i0.ɵɵtext(62, "That\u2019s it! Turn you Zap on and add a row to your spreadsheet.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(63, "img", 18);
            i0.ɵɵelementStart(64, "p");
            i0.ɵɵtext(65, "Add a row to your spreadsheet and check previously created chart on teamorgchart.com:");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(66, "img", 19);
            i0.ɵɵelementStart(67, "p");
            i0.ɵɵtext(68, "The box is there but it\u2019s empty since TeamOrgChart doesn\u2019t know which columns to display. Pick \u201CChoose box contents\u201D in the menu above the chart.");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(69, "img", 20);
            i0.ɵɵelementStart(70, "p");
            i0.ɵɵtext(71, "Choose columns you whish to be displayed in the chart box and click Save:");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(72, "img", 21);
            i0.ɵɵelementStart(73, "p");
            i0.ɵɵtext(74, "Go back to the chart:");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(75, "img", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(ApiGuideComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'toc-api-guide',
            templateUrl: 'api-guide.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/admin/components/api.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/admin/components/api.component.ts ***!
    \***************************************************/

  /*! no static exports found */

  /***/
  function srcAppAdminComponentsApiComponentTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(
    /*! ../../strings */
    "./src/app/strings/index.ts"), __webpack_require__(
    /*! ../admin.reducers */
    "./src/app/admin/admin.reducers.ts"), __webpack_require__(
    /*! ../admin.actions */
    "./src/app/admin/admin.actions.ts"), __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! src/app/shared/shared.models */
    "./src/app/shared/shared.models.ts"), __webpack_require__(
    /*! src/app/shared/shared.actions */
    "./src/app/shared/shared.actions.ts"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"), __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"), __webpack_require__(
    /*! ngx-clipboard */
    "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js"), __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, angular_l10n_1, Resources, fromAdmin, AdminActions, rxjs_1, store_1, shared_models_1, shared_actions_1, i0, i1, i2, i3, i4, i5, i6) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function ApiComponent_tr_29_span_6_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "span");
          i0.ɵɵtext(1, "******");
          i0.ɵɵelementEnd();
        }
      }

      function ApiComponent_tr_29_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r1351 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "button", 23, 24);
          i0.ɵɵlistener("cbOnSuccess", function ApiComponent_tr_29_button_8_Template_button_cbOnSuccess_0_listener($event) {
            i0.ɵɵrestoreView(_r1351);

            var _r1349 = i0.ɵɵreference(1);

            return _r1349.show();
          })("mouseleave", function ApiComponent_tr_29_button_8_Template_button_mouseleave_0_listener($event) {
            i0.ɵɵrestoreView(_r1351);

            var _r1349 = i0.ɵɵreference(1);

            return _r1349.hide();
          });
          i0.ɵɵpipe(2, "translate");
          i0.ɵɵelement(3, "i", 25);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var key_r1344 = i0.ɵɵnextContext().$implicit;
          var ctx_r1347 = i0.ɵɵnextContext();
          i0.ɵɵpropertyInterpolate("tooltip", i0.ɵɵpipeBind2(2, 2, "UXChart.TXT_Clipboard", ctx_r1347.locale.language));
          i0.ɵɵproperty("cbContent", key_r1344.Value);
        }
      }

      function ApiComponent_tr_29_span_9_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "span", 26);
          i0.ɵɵpipe(1, "translate");
          i0.ɵɵelement(2, "i", 27);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1348 = i0.ɵɵnextContext(2);
          i0.ɵɵpropertyInterpolate("tooltip", i0.ɵɵpipeBind2(1, 1, ctx_r1348.Resources.AdminStrings.TXT.ValueDisplayWarning, ctx_r1348.locale.language));
        }
      }

      function ApiComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r1355 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "tr");
          i0.ɵɵelementStart(1, "th", 18);
          i0.ɵɵtext(2);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(3, "td");
          i0.ɵɵtext(4);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(5, "td");
          i0.ɵɵtemplate(6, ApiComponent_tr_29_span_6_Template, 2, 0, "span", 19);
          i0.ɵɵtext(7);
          i0.ɵɵtemplate(8, ApiComponent_tr_29_button_8_Template, 4, 5, "button", 20);
          i0.ɵɵtemplate(9, ApiComponent_tr_29_span_9_Template, 3, 4, "span", 21);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(10, "td");
          i0.ɵɵtext(11);
          i0.ɵɵpipe(12, "date");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(13, "td");
          i0.ɵɵelementStart(14, "button", 22);
          i0.ɵɵlistener("click", function ApiComponent_tr_29_Template_button_click_14_listener($event) {
            i0.ɵɵrestoreView(_r1355);
            var key_r1344 = ctx.$implicit;
            var ctx_r1354 = i0.ɵɵnextContext();
            return ctx_r1354.revoke(key_r1344.Id);
          });
          i0.ɵɵtext(15);
          i0.ɵɵpipe(16, "translate");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var key_r1344 = ctx.$implicit;
          var i_r1345 = ctx.index;
          var ctx_r1343 = i0.ɵɵnextContext();
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate(i_r1345 + 1);
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate(key_r1344.Prefix);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngIf", !key_r1344.Value);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", key_r1344.Value, " ");
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", key_r1344.Value);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", key_r1344.Value);
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(12, 8, key_r1344.IssuedDateTime, "short"));
          i0.ɵɵadvance(4);
          i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 11, ctx_r1343.Resources.AdminStrings.BTN.Revoke, ctx_r1343.locale.language));
        }
      }

      var ApiComponent =
      /*#__PURE__*/
      function () {
        function ApiComponent(locale, store) {
          _classCallCheck(this, ApiComponent);

          this.locale = locale;
          this.store = store;
          this.Resources = Resources;
          this.unsubscribe = new rxjs_1.Subject();
          this.apiKeys$ = this.store.pipe(store_1.select(fromAdmin.selectApiKeys));
        }

        _createClass(ApiComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.store.dispatch(AdminActions.loadApiKeys());
          }
        }, {
          key: "createApiKey",
          value: function createApiKey() {
            this.store.dispatch(AdminActions.createApiKey());
          }
        }, {
          key: "revoke",
          value: function revoke(id) {
            var confirmationOptions = {
              cancelButtonText: Resources.Strings.BUTTON.Cancel,
              text: Resources.AdminStrings.DLG.ConfirmRevokeTxt,
              title: Resources.AdminStrings.DLG.ConfirmRevokeTitle,
              successButtonText: Resources.AdminStrings.BTN.Revoke,
              successAction: AdminActions.revokeApiKey({
                id: id
              })
            };
            this.store.dispatch(new shared_actions_1.DialogShow({
              dialogName: shared_models_1.SharedModals.ConfirmationDialog,
              options: {
                options: confirmationOptions
              }
            }));
          }
        }]);

        return ApiComponent;
      }();

      exports.ApiComponent = ApiComponent;

      ApiComponent.ɵfac = function ApiComponent_Factory(t) {
        return new (t || ApiComponent)(i0.ɵɵdirectiveInject(angular_l10n_1.L10N_LOCALE), i0.ɵɵdirectiveInject(i1.Store));
      };

      ApiComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: ApiComponent,
        selectors: [["toc-api"]],
        decls: 71,
        vars: 47,
        consts: [[1, "container"], [1, "card"], [1, "btn", "btn-warning", "col-2", "mb-2", 3, "click"], [1, "table", "table-striped"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "row", "table"], [1, "col-sm-6"], ["href", "/swagger", "target", "_blank"], ["routerLink", "/admin/api-guide", "target", "_blank"], [1, "row"], [1, "col-sm-4"], ["href", "https://www.nuget.org/packages/TocApiLibrary"], ["src", "/img/netlogo.png"], ["href", "https://pypi.org/project/tocapilibrarypython/"], ["width", "128", "height", "128", "src", "/img/python.png"], ["href", "https://www.npmjs.com/package/tocapilibraryts"], ["src", "/img/typescriptlogo.png"], ["scrope", "row"], [4, "ngIf"], ["class", "btn btn-sm", "ngxClipboard", "", "triggers", "", 3, "cbContent", "tooltip", "cbOnSuccess", "mouseleave", 4, "ngIf"], ["class", "ml-2", 3, "tooltip", 4, "ngIf"], [1, "btn", "btn-danger", 3, "click"], ["ngxClipboard", "", "triggers", "", 1, "btn", "btn-sm", 3, "cbContent", "tooltip", "cbOnSuccess", "mouseleave"], ["cpBtn", "bs-tooltip"], [1, "fa", "fa-clipboard"], [1, "ml-2", 3, "tooltip"], [1, "fa", "fa-info-circle"]],
        template: function ApiComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "h3");
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "p");
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "button", 2);
            i0.ɵɵlistener("click", function ApiComponent_Template_button_click_8_listener($event) {
              return ctx.createApiKey();
            });
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "table", 3);
            i0.ɵɵelementStart(12, "thead");
            i0.ɵɵelementStart(13, "tr");
            i0.ɵɵelementStart(14, "th", 4);
            i0.ɵɵtext(15, "#");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "th", 4);
            i0.ɵɵtext(17);
            i0.ɵɵpipe(18, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "th", 4);
            i0.ɵɵtext(20);
            i0.ɵɵpipe(21, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "th", 4);
            i0.ɵɵtext(23);
            i0.ɵɵpipe(24, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "th", 4);
            i0.ɵɵtext(26);
            i0.ɵɵpipe(27, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "tbody");
            i0.ɵɵtemplate(29, ApiComponent_tr_29_Template, 17, 14, "tr", 5);
            i0.ɵɵpipe(30, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div", 1);
            i0.ɵɵelementStart(32, "h3");
            i0.ɵɵtext(33);
            i0.ɵɵpipe(34, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(35, "br");
            i0.ɵɵelementStart(36, "div", 6);
            i0.ɵɵelementStart(37, "div", 7);
            i0.ɵɵelementStart(38, "a", 8);
            i0.ɵɵtext(39);
            i0.ɵɵpipe(40, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div", 7);
            i0.ɵɵelementStart(42, "a", 9);
            i0.ɵɵtext(43);
            i0.ɵɵpipe(44, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "div", 1);
            i0.ɵɵelementStart(46, "h3");
            i0.ɵɵtext(47);
            i0.ɵɵpipe(48, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(49, "br");
            i0.ɵɵelementStart(50, "div", 0);
            i0.ɵɵelementStart(51, "div", 10);
            i0.ɵɵelementStart(52, "div", 11);
            i0.ɵɵelementStart(53, "h2");
            i0.ɵɵtext(54, ".Net");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(55, "div", 11);
            i0.ɵɵelementStart(56, "h2");
            i0.ɵɵtext(57, "Python");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "div", 11);
            i0.ɵɵelementStart(59, "h2");
            i0.ɵɵtext(60, "Typescript");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "div", 10);
            i0.ɵɵelementStart(62, "div", 11);
            i0.ɵɵelementStart(63, "a", 12);
            i0.ɵɵelement(64, "img", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "div", 11);
            i0.ɵɵelementStart(66, "a", 14);
            i0.ɵɵelement(67, "img", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "div", 11);
            i0.ɵɵelementStart(69, "a", 16);
            i0.ɵɵelement(70, "img", 17);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(4, 12, ctx.Resources.AdminStrings.TXT.ManageApiKeys, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 15, ctx.Resources.AdminStrings.TXT.ManageApiKeysDesc, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 18, ctx.Resources.AdminStrings.BTN.AddApiKey, ctx.locale.language));
            i0.ɵɵadvance(8);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(18, 21, ctx.Resources.AdminStrings.TXT.Prefix, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(21, 24, ctx.Resources.AdminStrings.TXT.Value, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(24, 27, ctx.Resources.AdminStrings.TXT.IssuedAt, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(27, 30, ctx.Resources.AdminStrings.TXT.Revoke, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(30, 33, ctx.apiKeys$));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(34, 35, ctx.Resources.AdminStrings.TXT.GettingStarted, ctx.locale.language));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(40, 38, ctx.Resources.AdminStrings.LNK.ApiDocumentationLink, ctx.locale.language));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(44, 41, ctx.Resources.AdminStrings.LNK.ApiTutorialLink, ctx.locale.language));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(48, 44, ctx.Resources.AdminStrings.TXT.ClientLibraries, ctx.locale.language));
          }
        },
        directives: [i2.NgForOf, i3.RouterLinkWithHref, i2.NgIf, i4.ClipboardDirective, i5.TooltipDirective],
        pipes: [i6.L10nTranslatePipe, i2.AsyncPipe, i2.DatePipe],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(ApiComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'toc-api',
            templateUrl: 'api.component.html'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: core_1.Inject,
              args: [angular_l10n_1.L10N_LOCALE]
            }]
          }, {
            type: i1.Store
          }];
        }, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/admin/components/appearance.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/components/appearance.component.ts ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function srcAppAdminComponentsAppearanceComponentTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"), __webpack_require__(
    /*! ../admin.reducers */
    "./src/app/admin/admin.reducers.ts"), __webpack_require__(
    /*! ../admin.actions */
    "./src/app/admin/admin.actions.ts"), __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"), __webpack_require__(
    /*! ngrx-forms */
    "./node_modules/ngrx-forms/__ivy_ngcc__/fesm2015/ngrx-forms.js"), __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js"), __webpack_require__(
    /*! src/app/shared/shared.actions */
    "./src/app/shared/shared.actions.ts"), __webpack_require__(
    /*! ../services/admin.service */
    "./src/app/admin/services/admin.service.ts"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! ../services/admin.service */
    "./src/app/admin/services/admin.service.ts"), __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"), __webpack_require__(
    /*! ngrx-forms */
    "./node_modules/ngrx-forms/__ivy_ngcc__/fesm2015/ngrx-forms.js"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js"), __webpack_require__(
    /*! ng2-file-upload */
    "./node_modules/ng2-file-upload/__ivy_ngcc__/fesm2015/ng2-file-upload.js"), __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, angular_l10n_1, store_1, rxjs_1, fromAdmin, AdminActions, operators_1, ngrx_forms_1, ng2_file_upload_1, shared_actions_1, admin_service_1, i0, i1, i2, i3, i4, i5, i6, i7, i8) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function AppearanceComponent_div_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r1268 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div");
          i0.ɵɵelementStart(1, "button", 31);
          i0.ɵɵlistener("click", function AppearanceComponent_div_59_Template_button_click_1_listener($event) {
            i0.ɵɵrestoreView(_r1268);
            var ctx_r1267 = i0.ɵɵnextContext();
            return ctx_r1267.removeLogo();
          });
          i0.ɵɵtext(2, "admin.BUTTON_RemoveLogo");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }
      }

      function AppearanceComponent_img_61_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelement(0, "img", 32);
        }

        if (rf & 2) {
          var ctx_r1264 = i0.ɵɵnextContext();
          i0.ɵɵproperty("src", ctx_r1264.href, i0.ɵɵsanitizeUrl);
        }
      }

      function AppearanceComponent_div_72_Template(rf, ctx) {
        if (rf & 1) {
          var _r1270 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div");
          i0.ɵɵelementStart(1, "h5");
          i0.ɵɵtext(2, "Remove Custom CSS");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(3, "button", 33);
          i0.ɵɵlistener("click", function AppearanceComponent_div_72_Template_button_click_3_listener($event) {
            i0.ɵɵrestoreView(_r1270);
            var ctx_r1269 = i0.ɵɵnextContext();
            return ctx_r1269.removeCss();
          });
          i0.ɵɵtext(4, "admin.TXT_RemoveCSS");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }
      }

      function AppearanceComponent_div_74_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelement(0, "div", 34);
        }
      }

      var AppearanceComponent =
      /*#__PURE__*/
      function () {
        function AppearanceComponent(locale, store, adminService) {
          var _this3 = this;

          _classCallCheck(this, AppearanceComponent);

          this.locale = locale;
          this.store = store;
          this.adminService = adminService;
          this.brandColor$ = new rxjs_1.Subject();
          this.colorErrorMessage = '';
          this.href = '';
          this.csshref = '';
          this.showRemoveLogo = false;
          this.logoUploader = new ng2_file_upload_1.FileUploader({
            isHTML5: true,
            allowedMimeType: ['image/*', 'image/jpeg', 'image/png', 'image/bmp'],
            url: '/api/admin/logoblobux'
          });
          this.cssUploader = new ng2_file_upload_1.FileUploader({
            isHTML5: true,
            allowedMimeType: ['text/*', 'text/css', 'text/plain', 'text/html'],
            url: '/api/admin/customcss'
          });
          this.unsubscribe = new rxjs_1.Subject();
          this.model$ = store.pipe(store_1.select(fromAdmin.selectCompositeModel));
          this.model$.pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(function (model) {
            if (model === null) {
              _this3.store.dispatch(AdminActions.loadCompositeModel());

              return;
            }

            _this3.store.dispatch(AdminActions.setAppearanceFormFromCompositeModel({
              model: model
            }));

            _this3.showRemoveLogo = model.Settings.HasCustomLogo;
            _this3.csshref = model.CustomCssPath;
            _this3.href = model.LogoPath;

            if (_this3.href) {
              _this3.href = _this3.href + '?decache=' + Math.random();
            }
          });
          this.appearanceFormState$ = store.pipe(store_1.select(fromAdmin.selectAppearanceFormState));
          this.brandColor$.pipe(operators_1.takeUntil(this.unsubscribe), operators_1.debounceTime(50)).subscribe(function (color) {
            _this3.store.dispatch(new ngrx_forms_1.SetValueAction(fromAdmin.initialAppearanceFormState.controls.brandColor.id, color));
          });
        }

        _createClass(AppearanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.logoUploader.onCompleteItem = function (item, response, status, headers) {
              console.log(item, response, status, headers);
              var resp = JSON.parse(response);

              if (resp['status'] === 'OK') {
                _this4.href = resp['href'] + '?decache=' + Math.random();
                _this4.showRemoveLogo = true;

                _this4.store.dispatch(new shared_actions_1.ToastSuccess(''));
              }
            };

            this.cssUploader.onCompleteItem = function (item, response, status, headers) {
              console.log(item, response, status, headers);
              var resp = JSON.parse(response);

              if (resp['status'] === 'OK') {
                _this4.csshref = resp['href'] + '?decache=' + Math.random();

                _this4.store.dispatch(new shared_actions_1.ToastSuccess(''));
              }
            };
          }
        }, {
          key: "updateBrandColor",
          value: function updateBrandColor($event) {
            this.brandColor$.next($event);
          }
        }, {
          key: "saveAppearance",
          value: function saveAppearance() {
            var _this5 = this;

            this.appearanceFormState$.pipe(operators_1.take(1), operators_1.map(function (appearanceForm) {
              var isOk = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(appearanceForm.controls.brandColor.value);

              if (!isOk) {
                _this5.colorErrorMessage = 'Please enter a valid brand color value';
                return;
              }

              _this5.colorErrorMessage = '';

              _this5.store.dispatch(AdminActions.saveAppearance({
                form: appearanceForm.value
              }));

              _this5.store.dispatch(new shared_actions_1.ToastSuccess(""));
            })).subscribe();
          }
        }, {
          key: "uploadLogo",
          value: function uploadLogo() {
            this.href = '';
            this.logoUploader.uploadAll();
          }
        }, {
          key: "uploadCss",
          value: function uploadCss() {
            this.csshref = '';
            this.cssUploader.uploadAll();
          }
        }, {
          key: "removeLogo",
          value: function removeLogo() {
            var _this6 = this;

            this.adminService.removeLogo().pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(function () {
              _this6.href = '';
              _this6.showRemoveLogo = false;

              _this6.store.dispatch(new shared_actions_1.ToastSuccess(''));

              _this6.saveAppearance();
            });
          }
        }, {
          key: "saveLogo",
          value: function saveLogo() {
            this.saveAppearance();
          }
        }, {
          key: "removeCss",
          value: function removeCss() {
            var _this7 = this;

            this.adminService.removeCss().pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(function () {
              _this7.store.dispatch(new shared_actions_1.ToastSuccess(''));

              _this7.csshref = '';
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe.next();
            this.unsubscribe.complete();
          }
        }]);

        return AppearanceComponent;
      }();

      exports.AppearanceComponent = AppearanceComponent;

      AppearanceComponent.ɵfac = function AppearanceComponent_Factory(t) {
        return new (t || AppearanceComponent)(i0.ɵɵdirectiveInject(angular_l10n_1.L10N_LOCALE), i0.ɵɵdirectiveInject(i1.Store), i0.ɵɵdirectiveInject(i2.AdminService));
      };

      AppearanceComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: AppearanceComponent,
        selectors: [["toc-admin-appearance"]],
        decls: 75,
        vars: 49,
        consts: [[1, "container"], [1, "card", 3, "ngrxFormState"], [1, "section-heading"], ["translate", "", 1, "btn", "btn-success", 3, "click"], ["l10nTranslate", "", 1, "suffix"], [1, "row", "horizontal-form"], [1, "col-3"], ["l10nTranslate", ""], [1, "col-9"], [1, "form-control", 3, "ngrxFormControlState"], ["translate", "admin.TXT_Light", "value", "Light"], ["translate", "admin.TXT_Dark", "value", "Dark"], ["ng-if", "colorErrorMessage", 1, "row", "horizontal-form", "has-error"], [1, "col-12"], [1, "row"], ["translate", "admin.TXT_Brand"], [1, "color-swatch"], ["type", "text", 1, "form-control", 3, "colorPicker", "value", "readonly", "cpWidth", "cpOutputFormat", "cpPosition", "colorPickerChange"], [1, "card"], ["translate", "common.SAVE_CHANGES", 1, "btn", "btn-success", 3, "click"], ["translate", "admin.TXT_FooterDesc", 1, "suffix"], ["rows", "2", 1, "form-control", 3, "ngrxFormControlState"], ["type", "file", "ngf-max-size", "5MB", "accept", "image/*", "name", "fileLogo", "ng2FileSelect", "", 3, "uploader", "onFileSelected"], ["ng-show", "model.showError", 1, "alert-error"], [4, "ngIf"], [1, "col-2"], ["style", "max-width: 100%", 3, "src", 4, "ngIf"], ["ng-click", "saveColor()", "translate", "common.SAVE_CHANGES", 1, "btn", "btn-success"], ["translate", "admin.TXT_CustomCSSDesc", 1, "suffix"], ["type", "file", "ngf-max-size", "5MB", "accept", "text/*", "name", "fileCss", "ng2FileSelect", "", 3, "uploader", "onFileSelected"], ["class", "col-md-3", 4, "ngIf"], ["translate", "admin.BUTTON_RemoveLogo", 1, "btn", "btn-danger", "btn-sm", 3, "click"], [2, "max-width", "100%", 3, "src"], ["translate", "admin.TXT_RemoveCSS", 1, "btn", "btn-danger", 3, "click"], [1, "col-md-3"]],
        template: function AppearanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "form", 1);
            i0.ɵɵpipe(2, "async");
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "translate");
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵlistener("click", function AppearanceComponent_Template_button_click_6_listener($event) {
              return ctx.saveAppearance();
            });
            i0.ɵɵtext(7, "common.SAVE_CHANGES");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵtext(9, "admin.TXT_Desc");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 5);
            i0.ɵɵelementStart(11, "div", 6);
            i0.ɵɵelementStart(12, "label", 7);
            i0.ɵɵtext(13, "admin.TXT_Theme");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "div", 8);
            i0.ɵɵelementStart(15, "select", 9);
            i0.ɵɵpipe(16, "async");
            i0.ɵɵelementStart(17, "option", 10);
            i0.ɵɵtext(18, "admin.TXT_Light");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "option", 11);
            i0.ɵɵtext(20, "admin.TXT_Dark");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 12);
            i0.ɵɵelementStart(22, "div", 13);
            i0.ɵɵelementStart(23, "span");
            i0.ɵɵtext(24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "div", 14);
            i0.ɵɵelementStart(26, "div", 6);
            i0.ɵɵelementStart(27, "label", 15);
            i0.ɵɵtext(28, "admin.TXT_Brand");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 8);
            i0.ɵɵelement(30, "a", 16);
            i0.ɵɵpipe(31, "async");
            i0.ɵɵelementStart(32, "input", 17);
            i0.ɵɵlistener("colorPickerChange", function AppearanceComponent_Template_input_colorPickerChange_32_listener($event) {
              return ctx.updateBrandColor($event);
            });
            i0.ɵɵpipe(33, "async");
            i0.ɵɵpipe(34, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 18);
            i0.ɵɵelementStart(36, "div", 2);
            i0.ɵɵtext(37);
            i0.ɵɵpipe(38, "translate");
            i0.ɵɵelementStart(39, "button", 19);
            i0.ɵɵlistener("click", function AppearanceComponent_Template_button_click_39_listener($event) {
              return ctx.saveAppearance();
            });
            i0.ɵɵtext(40, "common.SAVE_CHANGES");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(41, "div", 20);
            i0.ɵɵtext(42, "admin.TXT_FooterDesc");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(43, "textarea", 21);
            i0.ɵɵpipe(44, "async");
            i0.ɵɵelement(45, "br");
            i0.ɵɵelementStart(46, "span");
            i0.ɵɵtext(47);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "div", 18);
            i0.ɵɵelementStart(49, "div", 2);
            i0.ɵɵtext(50);
            i0.ɵɵpipe(51, "translate");
            i0.ɵɵelementStart(52, "button", 19);
            i0.ɵɵlistener("click", function AppearanceComponent_Template_button_click_52_listener($event) {
              return ctx.saveLogo();
            });
            i0.ɵɵtext(53, " common.SAVE_CHANGES ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "div", 14);
            i0.ɵɵelementStart(55, "div", 6);
            i0.ɵɵelementStart(56, "input", 22);
            i0.ɵɵlistener("onFileSelected", function AppearanceComponent_Template_input_onFileSelected_56_listener($event) {
              return ctx.uploadLogo();
            });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(57, "br");
            i0.ɵɵelement(58, "div", 23);
            i0.ɵɵtemplate(59, AppearanceComponent_div_59_Template, 3, 0, "div", 24);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(60, "div", 25);
            i0.ɵɵtemplate(61, AppearanceComponent_img_61_Template, 1, 1, "img", 26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(62, "div", 18);
            i0.ɵɵelementStart(63, "div", 2);
            i0.ɵɵtext(64);
            i0.ɵɵpipe(65, "translate");
            i0.ɵɵelementStart(66, "button", 27);
            i0.ɵɵtext(67, " common.SAVE_CHANGES ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "div", 28);
            i0.ɵɵtext(69, "admin.TXT_CustomCSSDesc");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "input", 29);
            i0.ɵɵlistener("onFileSelected", function AppearanceComponent_Template_input_onFileSelected_70_listener($event) {
              return ctx.uploadCss();
            });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(71, "br");
            i0.ɵɵtemplate(72, AppearanceComponent_div_72_Template, 5, 0, "div", 24);
            i0.ɵɵelement(73, "div", 23);
            i0.ɵɵtemplate(74, AppearanceComponent_div_74_Template, 1, 0, "div", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngrxFormState", i0.ɵɵpipeBind1(2, 25, ctx.appearanceFormState$));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(5, 27, "admin.CUSTOMIZE_APPEARANCE", ctx.locale.language), " ");
            i0.ɵɵadvance(11);
            i0.ɵɵproperty("ngrxFormControlState", i0.ɵɵpipeBind1(16, 30, ctx.appearanceFormState$).controls.theme);
            i0.ɵɵadvance(9);
            i0.ɵɵtextInterpolate(ctx.colorErrorMessage);
            i0.ɵɵadvance(6);
            i0.ɵɵstyleProp("background-color", i0.ɵɵpipeBind1(31, 32, ctx.appearanceFormState$).controls.brandColor.value || "#000000");
            i0.ɵɵadvance(2);
            i0.ɵɵstyleProp("width", 100, "px");
            i0.ɵɵproperty("colorPicker", i0.ɵɵpipeBind1(33, 34, ctx.appearanceFormState$).controls.brandColor.value)("value", i0.ɵɵpipeBind1(34, 36, ctx.appearanceFormState$).controls.brandColor.value)("readonly", false)("cpWidth", 200)("cpOutputFormat", "hex")("cpPosition", "bottom");
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(38, 38, "admin.TXT_Footer", ctx.locale.language), " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngrxFormControlState", i0.ɵɵpipeBind1(44, 41, ctx.appearanceFormState$).controls.footerText);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.colorErrorMessage);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(51, 43, "admin.TXT_Logo", ctx.locale.language), " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("uploader", ctx.logoUploader);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.showRemoveLogo);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.href);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(65, 46, "admin.TXT_CustomCSS", ctx.locale.language), " ");
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("uploader", ctx.cssUploader);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.csshref);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.csshref);
          }
        },
        directives: [i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i4.NgrxFormDirective, i4.NgrxStatusCssClassesDirective, i5.L10nTranslateDirective, i4.NgrxSelectViewAdapter, i4.NgrxFormControlDirective, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i4.NgrxSelectMultipleOption, i4.NgrxSelectOption, i4.NgrxFallbackSelectOption, i6.ColorPickerDirective, i4.NgrxDefaultViewAdapter, i7.FileSelectDirective, i8.NgIf],
        pipes: [i8.AsyncPipe, i5.L10nTranslatePipe],
        styles: [".color-swatch[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  margin-right: 0.75rem;\n  border-radius: 50%;\n  vertical-align: middle;\n}\n.color-swatch[_ngcontent-%COMP%]    + input[_ngcontent-%COMP%] {\n  display: inline-block;\n}"]
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(AppearanceComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'toc-admin-appearance',
            styleUrls: ['./appearance.component.scss'],
            templateUrl: './appearance.component.html'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: core_1.Inject,
              args: [angular_l10n_1.L10N_LOCALE]
            }]
          }, {
            type: i1.Store
          }, {
            type: i2.AdminService
          }];
        }, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/admin/components/information-sources.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/admin/components/information-sources.component.ts ***!
    \*******************************************************************/

  /*! no static exports found */

  /***/
  function srcAppAdminComponentsInformationSourcesComponentTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"), __webpack_require__(
    /*! ../admin.reducers */
    "./src/app/admin/admin.reducers.ts"), __webpack_require__(
    /*! ../admin.actions */
    "./src/app/admin/admin.actions.ts"), __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"), __webpack_require__(
    /*! src/app/shared/shared.actions */
    "./src/app/shared/shared.actions.ts"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"), __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"), __webpack_require__(
    /*! ngrx-forms */
    "./node_modules/ngrx-forms/__ivy_ngcc__/fesm2015/ngrx-forms.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, angular_l10n_1, store_1, rxjs_1, fromAdmin, AdminActions, operators_1, shared_actions_1, i0, i1, i2, i3, i4, i5) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function InformationSourcesComponent_div_14_tr_18_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r1322 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "button", 17);
          i0.ɵɵlistener("click", function InformationSourcesComponent_div_14_tr_18_button_11_Template_button_click_0_listener($event) {
            i0.ɵɵrestoreView(_r1322);
            var source_r1318 = i0.ɵɵnextContext().$implicit;
            var ctx_r1320 = i0.ɵɵnextContext(2);
            return ctx_r1320.removeSource(source_r1318.InformationSourceId);
          });
          i0.ɵɵtext(1, "\xD7");
          i0.ɵɵelementEnd();
        }
      }

      function InformationSourcesComponent_div_14_tr_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r1324 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "tr", 14);
          i0.ɵɵlistener("click", function InformationSourcesComponent_div_14_tr_18_Template_tr_click_0_listener($event) {
            i0.ɵɵrestoreView(_r1324);
            var source_r1318 = ctx.$implicit;
            var ctx_r1323 = i0.ɵɵnextContext(2);
            return source_r1318.CanEdit && ctx_r1323.editSource(source_r1318.InformationSourceId);
          });
          i0.ɵɵelementStart(1, "td");
          i0.ɵɵtext(2);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(3, "td");
          i0.ɵɵtext(4);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(5, "td");
          i0.ɵɵtext(6);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(7, "td");
          i0.ɵɵelementStart(8, "button", 15);
          i0.ɵɵlistener("click", function InformationSourcesComponent_div_14_tr_18_Template_button_click_8_listener($event) {
            i0.ɵɵrestoreView(_r1324);
            var source_r1318 = ctx.$implicit;
            var ctx_r1325 = i0.ɵɵnextContext(2);
            return ctx_r1325.testInformationSource(source_r1318.InformationSourceId);
          });
          i0.ɵɵtext(9, " admin.TXT_ISTestConnection ");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(10, "td");
          i0.ɵɵtemplate(11, InformationSourcesComponent_div_14_tr_18_button_11_Template, 2, 0, "button", 16);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var source_r1318 = ctx.$implicit;
          i0.ɵɵstyleProp("cursor", source_r1318.CanEdit ? "pointer" : "");
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate(source_r1318.SourceName);
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate(source_r1318.FriendlyTypeName);
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate(source_r1318.Description);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("ngIf", source_r1318.CanEdit);
        }
      }

      function InformationSourcesComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "div", 11);
          i0.ɵɵelementStart(1, "table", 12);
          i0.ɵɵelementStart(2, "thead");
          i0.ɵɵelementStart(3, "tr");
          i0.ɵɵelementStart(4, "th");
          i0.ɵɵtext(5);
          i0.ɵɵpipe(6, "translate");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(7, "th");
          i0.ɵɵtext(8);
          i0.ɵɵpipe(9, "translate");
          i0.ɵɵelementEnd();
          i0.ɵɵelement(10, "th");
          i0.ɵɵelementStart(11, "th");
          i0.ɵɵtext(12);
          i0.ɵɵpipe(13, "translate");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(14, "th");
          i0.ɵɵtext(15);
          i0.ɵɵpipe(16, "translate");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(17, "tbody");
          i0.ɵɵtemplate(18, InformationSourcesComponent_div_14_tr_18_Template, 12, 6, "tr", 13);
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1315 = i0.ɵɵnextContext();
          i0.ɵɵadvance(5);
          i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(6, 5, "admin.TXT_ISSource", ctx_r1315.locale.language));
          i0.ɵɵadvance(3);
          i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 8, "admin.TXT_ISSourceType", ctx_r1315.locale.language));
          i0.ɵɵadvance(4);
          i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(13, 11, "admin.TXT_ISTestSource", ctx_r1315.locale.language));
          i0.ɵɵadvance(3);
          i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 14, "admin.TXT_ISDelete", ctx_r1315.locale.language));
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngForOf", ctx_r1315.sources);
        }
      }

      function InformationSourcesComponent_div_18_div_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r1329 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div");
          i0.ɵɵelementStart(1, "label", 29);
          i0.ɵɵtext(2, "Connection String");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(3, "input", 21);
          i0.ɵɵlistener("ngModelChange", function InformationSourcesComponent_div_18_div_20_Template_input_ngModelChange_3_listener($event) {
            i0.ɵɵrestoreView(_r1329);
            var ctx_r1328 = i0.ɵɵnextContext(2);
            return ctx_r1328.selectedSource.ConnectionString = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(4, "label", 30);
          i0.ɵɵtext(5, "Query");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(6, "textarea", 21);
          i0.ɵɵlistener("ngModelChange", function InformationSourcesComponent_div_18_div_20_Template_textarea_ngModelChange_6_listener($event) {
            i0.ɵɵrestoreView(_r1329);
            var ctx_r1330 = i0.ɵɵnextContext(2);
            return ctx_r1330.selectedSource.Query = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1326 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngModel", ctx_r1326.selectedSource.ConnectionString);
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngModel", ctx_r1326.selectedSource.Query);
        }
      }

      function InformationSourcesComponent_div_18_div_21_option_6_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "option", 38);
          i0.ɵɵtext(1);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var option_r1333 = ctx.$implicit;
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", option_r1333.Name, "");
        }
      }

      function InformationSourcesComponent_div_18_div_21_option_12_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelement(0, "option", 39);
        }

        if (rf & 2) {
          var field_r1334 = ctx.$implicit;
          i0.ɵɵproperty("value", field_r1334.value);
        }
      }

      function InformationSourcesComponent_div_18_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r1336 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div");
          i0.ɵɵelementStart(1, "div", 7);
          i0.ɵɵelementStart(2, "div", 31);
          i0.ɵɵelementStart(3, "label", 32);
          i0.ɵɵtext(4, "SharePoint Lists");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(5, "select", 33);
          i0.ɵɵlistener("ngModelChange", function InformationSourcesComponent_div_18_div_21_Template_select_ngModelChange_5_listener($event) {
            i0.ɵɵrestoreView(_r1336);
            var ctx_r1335 = i0.ɵɵnextContext(2);
            return ctx_r1335.updateFieldList();
          });
          i0.ɵɵtemplate(6, InformationSourcesComponent_div_18_div_21_option_6_Template, 2, 1, "option", 34);
          i0.ɵɵpipe(7, "async");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(8, "div", 31);
          i0.ɵɵelementStart(9, "label", 35);
          i0.ɵɵtext(10, "Field");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(11, "select", 36);
          i0.ɵɵlistener("ngModelChange", function InformationSourcesComponent_div_18_div_21_Template_select_ngModelChange_11_listener($event) {
            i0.ɵɵrestoreView(_r1336);
            var ctx_r1337 = i0.ɵɵnextContext(2);
            return ctx_r1337.selectedSharePointFieldId = $event;
          });
          i0.ɵɵtemplate(12, InformationSourcesComponent_div_18_div_21_option_12_Template, 1, 1, "option", 37);
          i0.ɵɵpipe(13, "keyvalue");
          i0.ɵɵpipe(14, "async");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1327 = i0.ɵɵnextContext(2);
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("ngModel", ctx_r1327.selectedListId);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(7, 4, ctx_r1327.sharePointLists$));
          i0.ɵɵadvance(5);
          i0.ɵɵproperty("ngModel", ctx_r1327.selectedSharePointFieldId);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(13, 6, i0.ɵɵpipeBind1(14, 8, ctx_r1327.sharePointListFields$)));
        }
      }

      function InformationSourcesComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r1339 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 8);
          i0.ɵɵelementStart(1, "div");
          i0.ɵɵelementStart(2, "div", 18);
          i0.ɵɵelementStart(3, "div", 7);
          i0.ɵɵelementStart(4, "div", 19);
          i0.ɵɵelementStart(5, "label", 20);
          i0.ɵɵtext(6, "Source Name");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(7, "input", 21);
          i0.ɵɵlistener("ngModelChange", function InformationSourcesComponent_div_18_Template_input_ngModelChange_7_listener($event) {
            i0.ɵɵrestoreView(_r1339);
            var ctx_r1338 = i0.ɵɵnextContext();
            return ctx_r1338.selectedSource.SourceName = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(8, "div", 22);
          i0.ɵɵelementStart(9, "label");
          i0.ɵɵtext(10, "SQL or List");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(11, "div", 23);
          i0.ɵɵelementStart(12, "div", 24);
          i0.ɵɵelementStart(13, "label");
          i0.ɵɵelementStart(14, "input", 25);
          i0.ɵɵlistener("ngModelChange", function InformationSourcesComponent_div_18_Template_input_ngModelChange_14_listener($event) {
            i0.ɵɵrestoreView(_r1339);
            var ctx_r1340 = i0.ɵɵnextContext();
            return ctx_r1340.selectedSource.SourceType = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵtext(15, " SQL Server ");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(16, "div", 24);
          i0.ɵɵelementStart(17, "label");
          i0.ɵɵelementStart(18, "input", 26);
          i0.ɵɵlistener("ngModelChange", function InformationSourcesComponent_div_18_Template_input_ngModelChange_18_listener($event) {
            i0.ɵɵrestoreView(_r1339);
            var ctx_r1341 = i0.ɵɵnextContext();
            return ctx_r1341.selectedSource.SourceType = $event;
          });
          i0.ɵɵelementEnd();
          i0.ɵɵtext(19, " SharePoint List ");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵtemplate(20, InformationSourcesComponent_div_18_div_20_Template, 7, 2, "div", 27);
          i0.ɵɵtemplate(21, InformationSourcesComponent_div_18_div_21_Template, 15, 10, "div", 27);
          i0.ɵɵelementEnd();
          i0.ɵɵelement(22, "br");
          i0.ɵɵelementStart(23, "button", 28);
          i0.ɵɵlistener("click", function InformationSourcesComponent_div_18_Template_button_click_23_listener($event) {
            i0.ɵɵrestoreView(_r1339);
            var ctx_r1342 = i0.ɵɵnextContext();
            return ctx_r1342.saveSource();
          });
          i0.ɵɵtext(24, " common.SAVE_CHANGES ");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1316 = i0.ɵɵnextContext();
          i0.ɵɵadvance(7);
          i0.ɵɵproperty("ngModel", ctx_r1316.selectedSource.SourceName);
          i0.ɵɵadvance(7);
          i0.ɵɵproperty("ngModel", ctx_r1316.selectedSource.SourceType);
          i0.ɵɵadvance(4);
          i0.ɵɵproperty("ngModel", ctx_r1316.selectedSource.SourceType);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngIf", ctx_r1316.selectedSource.SourceType == "SQLServer");
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngIf", ctx_r1316.selectedSource.SourceType == "SharePointList");
        }
      }

      var InformationSourcesComponent =
      /*#__PURE__*/
      function () {
        function InformationSourcesComponent(locale, store) {
          var _this8 = this;

          _classCallCheck(this, InformationSourcesComponent);

          this.locale = locale;
          this.store = store;
          this.sources = [];
          this.selectedSource = null;
          this.selectedListId = null;
          this.selectedSharePointFieldId = null;
          this.unsubscribe = new rxjs_1.Subject();
          this.store.pipe(store_1.select(fromAdmin.selectCompositeModel), operators_1.takeUntil(this.unsubscribe)).subscribe(function (model) {
            if (model === null) {
              _this8.store.dispatch(AdminActions.loadCompositeModel());

              return;
            }

            _this8.sources = model.InformationSources.map(function (x) {
              return Object.assign({}, x);
            });
          });
          this.store.pipe(store_1.select(fromAdmin.selectSelectedSourceInfo), operators_1.takeUntil(this.unsubscribe), operators_1.filter(function (x) {
            return x !== null;
          })).subscribe(function (info) {
            if (_this8.selectedSource.InformationSourceId === info.InformationSourceId) {
              _this8.selectedSource = Object.assign({}, info);
            }
          });
          this.store.pipe(store_1.select(fromAdmin.selectDeletedSourceId), operators_1.takeUntil(this.unsubscribe), operators_1.filter(function (x) {
            return x !== null;
          })).subscribe(function (id) {
            _this8.sources = _this8.sources.filter(function (x) {
              return x.InformationSourceId !== id;
            });

            _this8.store.dispatch(AdminActions.loadCompositeModel());
          });
          this.store.pipe(store_1.select(fromAdmin.selecteSavedSourceId), operators_1.takeUntil(this.unsubscribe), operators_1.filter(function (x) {
            return x !== null;
          })).subscribe(function (id) {
            if (_this8.selectedSource) {
              var idx = _this8.sources.findIndex(function (x) {
                return x.InformationSourceId === id;
              });

              if (idx === -1) {
                _this8.sources.push(Object.assign(Object.assign({}, _this8.selectedSource), {
                  InformationSourceId: id
                }));

                _this8.selectedSource = Object.assign({}, _this8.sources.find(function (x) {
                  return x.InformationSourceId === id;
                }));
              } else {
                _this8.sources[idx] = Object.assign({}, _this8.selectedSource);
                _this8.selectedSource = Object.assign({}, _this8.sources[idx]);
              }
            }

            _this8.store.dispatch(AdminActions.clearSavedSourceId());
          });
          this.sharePointLists$ = this.store.pipe(store_1.select(fromAdmin.selectSharePointLists));
          this.sharePointListFields$ = this.store.pipe(store_1.select(fromAdmin.selectSharePointListFields));
        }

        _createClass(InformationSourcesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "testInformationSource",
          value: function testInformationSource(id) {
            this.store.dispatch(AdminActions.testInformationSource({
              id: id
            }));
          }
        }, {
          key: "newSource",
          value: function newSource() {
            this.selectedSource = {
              CanEdit: false,
              ConnectionString: '',
              Description: '',
              FriendlyTypeName: '',
              InformationSourceId: '',
              Query: '',
              SharePointList: '',
              SharePointListColumn: '',
              SourceName: '',
              SourceType: 'SQLServer'
            };
          }
        }, {
          key: "editSource",
          value: function editSource(sourceId) {
            var source = this.sources.find(function (x) {
              return x.InformationSourceId === sourceId;
            });

            if (source) {
              this.selectedSource = Object.assign({}, source);
            }

            this.store.dispatch(AdminActions.loadInformationSource({
              sourceId: sourceId
            }));
          }
        }, {
          key: "removeSource",
          value: function removeSource(id) {
            this.store.dispatch(AdminActions.deleteInformationSource({
              id: id
            }));
          }
        }, {
          key: "saveSource",
          value: function saveSource() {
            if (this.selectedSource === null) {
              this.store.dispatch(new shared_actions_1.ToastError('Please select an existing or create a new source first'));
              return;
            }

            this.store.dispatch(AdminActions.saveInformationSource({
              source: this.selectedSource
            }));
          }
        }, {
          key: "updateFieldList",
          value: function updateFieldList() {
            if (this.selectedListId) {
              this.store.dispatch(AdminActions.getSharePointListFields({
                id: this.selectedListId
              }));
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe.next();
            this.unsubscribe.complete();
          }
        }]);

        return InformationSourcesComponent;
      }();

      exports.InformationSourcesComponent = InformationSourcesComponent;

      InformationSourcesComponent.ɵfac = function InformationSourcesComponent_Factory(t) {
        return new (t || InformationSourcesComponent)(i0.ɵɵdirectiveInject(angular_l10n_1.L10N_LOCALE), i0.ɵɵdirectiveInject(i1.Store));
      };

      InformationSourcesComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: InformationSourcesComponent,
        selectors: [["toc-admin-information-sources"]],
        decls: 19,
        vars: 10,
        consts: [[1, "container"], [1, "card"], [1, "section-heading"], [1, "suffix"], [1, "row", "mb-2"], [1, "col-12", "col-sm-6", "col-md-4", "col-xl-3"], ["translate", "admin.TXT_ISAddNew", 1, "btn", "btn-success", 3, "click"], [1, "row"], [1, "col-12"], ["class", "table-responsive", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "table-responsive"], [1, "table", "table-striped", "table-bordered", "table-hover"], [3, "cursor", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["translate", "admin.TXT_ISTestConnection", 1, "btn", "btn-success", 3, "click"], ["type", "button", "class", "close", 3, "click", 4, "ngIf"], ["type", "button", 1, "close", 3, "click"], ["ng-form", "form"], ["bs-has-error", "", 1, "col-12", "col-sm-6", "form-group"], ["translate", "admin.TXT_ISSource"], ["type", "text", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-12", "col-sm-6"], [1, "form-group"], [1, "radio"], ["type", "radio", "name", "sourceType", "value", "SQLServer", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "sourceType", "value", "SharePointList", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["translate", "common.SAVE_CHANGES", 1, "btn", "btn-success", 3, "click"], ["translate", "admin.TXT_ISSourceCon"], ["translate", "admin.TXT_ISQuery"], [1, "col"], ["translate", "admin.TXT_ISSharePointLists"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["ng-value", "option.Id", 4, "ngFor", "ngForOf"], ["translate", "admin.TXT_ISSharePointListFields"], ["ng-change", "updateSelectedField(SharePointFieldId)", "ng-options", "key as value  for (key, value) in SharePointListFields", 1, "form-control", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["ng-value", "option.Id"], [3, "value"]],
        template: function InformationSourcesComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtext(3);
            i0.ɵɵpipe(4, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "div", 3);
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 4);
            i0.ɵɵelementStart(9, "div", 5);
            i0.ɵɵelementStart(10, "button", 6);
            i0.ɵɵlistener("click", function InformationSourcesComponent_Template_button_click_10_listener($event) {
              return ctx.newSource();
            });
            i0.ɵɵtext(11, "admin.TXT_ISAddNew");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 7);
            i0.ɵɵelementStart(13, "div", 8);
            i0.ɵɵtemplate(14, InformationSourcesComponent_div_14_Template, 19, 17, "div", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "br");
            i0.ɵɵelement(16, "br");
            i0.ɵɵelementStart(17, "div", 7);
            i0.ɵɵtemplate(18, InformationSourcesComponent_div_18_Template, 25, 5, "div", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(4, 4, "admin.TXT_InformationSource", ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(7, 7, "admin.TXT_InformationSourceDesc", ctx.locale.language));
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("ngIf", ctx.sources.length > 0);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.selectedSource);
          }
        },
        directives: [i2.L10nTranslateDirective, i3.NgIf, i3.NgForOf, i4.DefaultValueAccessor, i4.RequiredValidator, i4.NgControlStatus, i4.NgModel, i4.RadioControlValueAccessor, i4.SelectControlValueAccessor, i4.NgSelectOption, i4.ɵangular_packages_forms_forms_x, i5.NgrxSelectMultipleOption, i5.NgrxSelectOption, i5.NgrxFallbackSelectOption],
        pipes: [i2.L10nTranslatePipe, i3.AsyncPipe, i3.KeyValuePipe],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(InformationSourcesComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'toc-admin-information-sources',
            templateUrl: 'information-sources.component.html'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: core_1.Inject,
              args: [angular_l10n_1.L10N_LOCALE]
            }]
          }, {
            type: i1.Store
          }];
        }, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/admin/components/security.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/admin/components/security.component.ts ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function srcAppAdminComponentsSecurityComponentTs(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! ../admin.reducers */
    "./src/app/admin/admin.reducers.ts"), __webpack_require__(
    /*! ../admin.actions */
    "./src/app/admin/admin.actions.ts"), __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"), __webpack_require__(
    /*! ../../strings */
    "./src/app/strings/index.ts"), __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"), __webpack_require__(
    /*! src/app/core/services/chart.service */
    "./src/app/core/services/chart.service.ts"), __webpack_require__(
    /*! ../services/admin.service */
    "./src/app/admin/services/admin.service.ts"), __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"), __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(
    /*! src/app/core/services/chart.service */
    "./src/app/core/services/chart.service.ts"), __webpack_require__(
    /*! ../services/admin.service */
    "./src/app/admin/services/admin.service.ts"), __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"), __webpack_require__(
    /*! angular-l10n */
    "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"), __webpack_require__(
    /*! ngx-bootstrap/typeahead */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js"), __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"), __webpack_require__(
    /*! ngrx-forms */
    "./node_modules/ngrx-forms/__ivy_ngcc__/fesm2015/ngrx-forms.js"), __webpack_require__(
    /*! ../../shared/shared.pipes */
    "./src/app/shared/shared.pipes.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, core_1, angular_l10n_1, store_1, fromAdmin, AdminActions, rxjs_1, Resources, operators_1, chart_service_1, admin_service_1, platform_browser_1, i0, i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      function SecurityComponent_li_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r1279 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "li", 42);
          i0.ɵɵelementStart(1, "span");
          i0.ɵɵtext(2);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(3, "button", 43);
          i0.ɵɵlistener("click", function SecurityComponent_li_17_Template_button_click_3_listener($event) {
            i0.ɵɵrestoreView(_r1279);
            var creator_r1277 = ctx.$implicit;
            var ctx_r1278 = i0.ɵɵnextContext();
            return ctx_r1278.removeCreator(creator_r1277.id);
          });
          i0.ɵɵtext(4, "\xD7");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var creator_r1277 = ctx.$implicit;
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate(creator_r1277.name);
        }
      }

      function SecurityComponent_option_39_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "option", 44);
          i0.ɵɵtext(1);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var securityGroup_r1280 = ctx.$implicit;
          i0.ɵɵproperty("ngValue", securityGroup_r1280);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", securityGroup_r1280.Name, "");
        }
      }

      function SecurityComponent_button_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r1282 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "button", 45);
          i0.ɵɵlistener("click", function SecurityComponent_button_43_Template_button_click_0_listener($event) {
            i0.ɵɵrestoreView(_r1282);
            var ctx_r1281 = i0.ɵɵnextContext();
            return ctx_r1281.removeSecurityGroup(ctx_r1281.selectedSecurityGroup.Id);
          });
          i0.ɵɵelement(1, "i", 46);
          i0.ɵɵtext(2);
          i0.ɵɵpipe(3, "translate");
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1273 = i0.ɵɵnextContext();
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 1, "admin.TXT_RemoveGroup", ctx_r1273.locale.language), " ");
        }
      }

      function SecurityComponent_div_44_option_23_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "option", 44);
          i0.ɵɵtext(1);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var group_r1288 = ctx.$implicit;
          i0.ɵɵproperty("ngValue", group_r1288);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", group_r1288.value, "");
        }
      }

      function SecurityComponent_div_44_li_37_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "li", 56);
          i0.ɵɵtext(1, "admin.TXT_None");
          i0.ɵɵelementEnd();
        }
      }

      function SecurityComponent_div_44_li_38_Template(rf, ctx) {
        if (rf & 1) {
          var _r1291 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "li", 57);
          i0.ɵɵtext(1);
          i0.ɵɵelementStart(2, "button", 43);
          i0.ɵɵlistener("click", function SecurityComponent_div_44_li_38_Template_button_click_2_listener($event) {
            i0.ɵɵrestoreView(_r1291);
            var entry_r1289 = ctx.$implicit;
            var ctx_r1290 = i0.ɵɵnextContext(2);
            return ctx_r1290.removeSecurityGroupEntry(entry_r1289.Id);
          });
          i0.ɵɵtext(3, "\xD7");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var entry_r1289 = ctx.$implicit;
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1("", entry_r1289.UserName, " ");
        }
      }

      function SecurityComponent_div_44_li_44_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "li", 58);
          i0.ɵɵtext(1, " admin.TXT_NoGroups");
          i0.ɵɵelementEnd();
        }
      }

      function SecurityComponent_div_44_li_45_Template(rf, ctx) {
        if (rf & 1) {
          var _r1294 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "li", 42);
          i0.ɵɵtext(1);
          i0.ɵɵelementStart(2, "button", 43);
          i0.ɵɵlistener("click", function SecurityComponent_div_44_li_45_Template_button_click_2_listener($event) {
            i0.ɵɵrestoreView(_r1294);
            var entry_r1292 = ctx.$implicit;
            var ctx_r1293 = i0.ɵɵnextContext(2);
            return ctx_r1293.removeSecurityGroupEntry(entry_r1292.Id);
          });
          i0.ɵɵtext(3, "\xD7");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var entry_r1292 = ctx.$implicit;
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", entry_r1292.GroupName, " ");
        }
      }

      function SecurityComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r1296 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "div", 47);
          i0.ɵɵelementStart(1, "div", 4);
          i0.ɵɵelementStart(2, "div", 14);
          i0.ɵɵelementStart(3, "b", 48);
          i0.ɵɵtext(4, "Add Users to Security Group");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(5, "div", 14);
          i0.ɵɵelementStart(6, "b", 49);
          i0.ɵɵtext(7, " Add Groups to Security Group");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(8, "div", 4);
          i0.ɵɵelementStart(9, "div", 14);
          i0.ɵɵelementStart(10, "input", 6);
          i0.ɵɵlistener("ngModelChange", function SecurityComponent_div_44_Template_input_ngModelChange_10_listener($event) {
            i0.ɵɵrestoreView(_r1296);
            var ctx_r1295 = i0.ɵɵnextContext();
            return ctx_r1295.securityUserPickerString = $event;
          })("typeaheadOnSelect", function SecurityComponent_div_44_Template_input_typeaheadOnSelect_10_listener($event) {
            i0.ɵɵrestoreView(_r1296);
            var ctx_r1297 = i0.ɵɵnextContext();
            return ctx_r1297.onSelectSecurityPerson($event);
          });
          i0.ɵɵpipe(11, "translate");
          i0.ɵɵelementEnd();
          i0.ɵɵelement(12, "p");
          i0.ɵɵelement(13, "div", 50);
          i0.ɵɵelementStart(14, "button", 7);
          i0.ɵɵlistener("click", function SecurityComponent_div_44_Template_button_click_14_listener($event) {
            i0.ɵɵrestoreView(_r1296);
            var ctx_r1298 = i0.ɵɵnextContext();
            return ctx_r1298.addToSecurityGroup("user");
          });
          i0.ɵɵelement(15, "i", 8);
          i0.ɵɵtext(16);
          i0.ɵɵpipe(17, "translate");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(18, "div", 14);
          i0.ɵɵelementStart(19, "select", 19);
          i0.ɵɵlistener("ngModelChange", function SecurityComponent_div_44_Template_select_ngModelChange_19_listener($event) {
            i0.ɵɵrestoreView(_r1296);
            var ctx_r1299 = i0.ɵɵnextContext();
            return ctx_r1299.addedGroup = $event;
          });
          i0.ɵɵelementStart(20, "option", 44);
          i0.ɵɵtext(21);
          i0.ɵɵpipe(22, "translate");
          i0.ɵɵelementEnd();
          i0.ɵɵtemplate(23, SecurityComponent_div_44_option_23_Template, 2, 2, "option", 21);
          i0.ɵɵpipe(24, "async");
          i0.ɵɵelementEnd();
          i0.ɵɵelement(25, "p");
          i0.ɵɵelement(26, "div", 50);
          i0.ɵɵelementStart(27, "button", 7);
          i0.ɵɵlistener("click", function SecurityComponent_div_44_Template_button_click_27_listener($event) {
            i0.ɵɵrestoreView(_r1296);
            var ctx_r1300 = i0.ɵɵnextContext();
            return ctx_r1300.addToSecurityGroup("group");
          });
          i0.ɵɵelement(28, "i", 8);
          i0.ɵɵtext(29);
          i0.ɵɵpipe(30, "translate");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelement(31, "p");
          i0.ɵɵelementStart(32, "div", 4);
          i0.ɵɵelementStart(33, "div", 14);
          i0.ɵɵelementStart(34, "b", 51);
          i0.ɵɵtext(35, "Users in Security Group");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(36, "ul", 10);
          i0.ɵɵtemplate(37, SecurityComponent_div_44_li_37_Template, 2, 0, "li", 52);
          i0.ɵɵtemplate(38, SecurityComponent_div_44_li_38_Template, 4, 1, "li", 53);
          i0.ɵɵpipe(39, "callback");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(40, "div", 14);
          i0.ɵɵelementStart(41, "b", 54);
          i0.ɵɵtext(42, "Groups in Security Group");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(43, "ul", 10);
          i0.ɵɵtemplate(44, SecurityComponent_div_44_li_44_Template, 2, 0, "li", 55);
          i0.ɵɵtemplate(45, SecurityComponent_div_44_li_45_Template, 4, 1, "li", 11);
          i0.ɵɵpipe(46, "callback");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var ctx_r1274 = i0.ɵɵnextContext();
          var tmp_11_0 = null;
          var currVal_11 = (tmp_11_0 = i0.ɵɵpipeBind1(24, 27, ctx_r1274.availableEntries$)) == null ? null : tmp_11_0.groups;
          i0.ɵɵadvance(10);
          i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind2(11, 18, ctx_r1274.Resources.AuditStrings.SelectStartingPersonPlaceholder, ctx_r1274.locale.language));
          i0.ɵɵproperty("ngModel", ctx_r1274.securityUserPickerString)("typeahead", ctx_r1274.securityUserPickerSource$)("typeaheadAsync", true)("typeaheadScrollable", true)("typeaheadOptionsInScrollableView", 8);
          i0.ɵɵadvance(4);
          i0.ɵɵproperty("disabled", ctx_r1274.addedUser === null);
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(17, 21, "admin.TXT_AddUser", ctx_r1274.locale.language), "");
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngModel", ctx_r1274.addedGroup);
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngValue", null);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(22, 24, "admin.TXT_SelectAGroup", ctx_r1274.locale.language));
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngForOf", currVal_11);
          i0.ɵɵadvance(4);
          i0.ɵɵproperty("disabled", ctx_r1274.addedGroup === null);
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(30, 29, "admin.TXT_AddGroup", ctx_r1274.locale.language), "");
          i0.ɵɵadvance(8);
          i0.ɵɵproperty("ngIf", !ctx_r1274.hasItems("user"));
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(39, 32, ctx_r1274.selectedSecurityGroup.SecurityGroupEntries, ctx_r1274.userEntry));
          i0.ɵɵadvance(6);
          i0.ɵɵproperty("ngIf", !ctx_r1274.hasItems("group"));
          i0.ɵɵadvance(1);
          i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(46, 35, ctx_r1274.selectedSecurityGroup.SecurityGroupEntries, ctx_r1274.groupEntry));
        }
      }

      function SecurityComponent_tr_63_option_8_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "option", 44);
          i0.ɵɵtext(1);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var group_r1305 = ctx.$implicit;
          i0.ɵɵproperty("ngValue", group_r1305.Id);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", group_r1305.Name, "");
        }
      }

      function SecurityComponent_tr_63_option_15_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "option", 44);
          i0.ɵɵtext(1);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var group_r1306 = ctx.$implicit;
          i0.ɵɵproperty("ngValue", group_r1306.Id);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", group_r1306.Name, "");
        }
      }

      function SecurityComponent_tr_63_option_22_Template(rf, ctx) {
        if (rf & 1) {
          i0.ɵɵelementStart(0, "option", 44);
          i0.ɵɵtext(1);
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var group_r1307 = ctx.$implicit;
          i0.ɵɵproperty("ngValue", group_r1307.Id);
          i0.ɵɵadvance(1);
          i0.ɵɵtextInterpolate1(" ", group_r1307.Name, "");
        }
      }

      function SecurityComponent_tr_63_Template(rf, ctx) {
        if (rf & 1) {
          var _r1309 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "tr");
          i0.ɵɵelementStart(1, "td");
          i0.ɵɵtext(2);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(3, "td");
          i0.ɵɵelementStart(4, "select", 59);
          i0.ɵɵlistener("ngModelChange", function SecurityComponent_tr_63_Template_select_ngModelChange_4_listener($event) {
            i0.ɵɵrestoreView(_r1309);
            var chart_r1301 = ctx.$implicit;
            var ctx_r1308 = i0.ɵɵnextContext();
            return ctx_r1308.saveChart(chart_r1301, "viewGroupId", $event);
          });
          i0.ɵɵpipe(5, "async");
          i0.ɵɵelementStart(6, "option", 60);
          i0.ɵɵtext(7, "admin.TXT_Everybody");
          i0.ɵɵelementEnd();
          i0.ɵɵtemplate(8, SecurityComponent_tr_63_option_8_Template, 2, 2, "option", 21);
          i0.ɵɵpipe(9, "async");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(10, "td");
          i0.ɵɵelementStart(11, "select", 59);
          i0.ɵɵlistener("ngModelChange", function SecurityComponent_tr_63_Template_select_ngModelChange_11_listener($event) {
            i0.ɵɵrestoreView(_r1309);
            var chart_r1301 = ctx.$implicit;
            var ctx_r1310 = i0.ɵɵnextContext();
            return ctx_r1310.saveChart(chart_r1301, "adminGroupId", $event);
          });
          i0.ɵɵpipe(12, "async");
          i0.ɵɵelementStart(13, "option", 61);
          i0.ɵɵtext(14, "admin.TXT_Creators");
          i0.ɵɵelementEnd();
          i0.ɵɵtemplate(15, SecurityComponent_tr_63_option_15_Template, 2, 2, "option", 21);
          i0.ɵɵpipe(16, "async");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(17, "td");
          i0.ɵɵelementStart(18, "select", 59);
          i0.ɵɵlistener("ngModelChange", function SecurityComponent_tr_63_Template_select_ngModelChange_18_listener($event) {
            i0.ɵɵrestoreView(_r1309);
            var chart_r1301 = ctx.$implicit;
            var ctx_r1311 = i0.ɵɵnextContext();
            return ctx_r1311.saveChart(chart_r1301, "denyGroupId", $event);
          });
          i0.ɵɵpipe(19, "async");
          i0.ɵɵelementStart(20, "option", 62);
          i0.ɵɵtext(21, "admin.TXT_Nobody");
          i0.ɵɵelementEnd();
          i0.ɵɵtemplate(22, SecurityComponent_tr_63_option_22_Template, 2, 2, "option", 21);
          i0.ɵɵpipe(23, "async");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var chart_r1301 = ctx.$implicit;
          var ctx_r1275 = i0.ɵɵnextContext();
          var tmp_4_0 = null;
          var currVal_4 = (tmp_4_0 = i0.ɵɵpipeBind1(9, 15, ctx_r1275.model$)) == null ? null : tmp_4_0.SecurityGroups;
          var tmp_8_0 = null;
          var currVal_8 = (tmp_8_0 = i0.ɵɵpipeBind1(16, 19, ctx_r1275.model$)) == null ? null : tmp_8_0.SecurityGroups;
          var tmp_12_0 = null;
          var currVal_12 = (tmp_12_0 = i0.ɵɵpipeBind1(23, 23, ctx_r1275.model$)) == null ? null : tmp_12_0.SecurityGroups;
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate(chart_r1301.name);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngModel", chart_r1301.viewGroupId)("disabled", i0.ɵɵpipeBind1(5, 13, ctx_r1275.chartRequests$)[chart_r1301.id]);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngValue", 0);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngForOf", currVal_4);
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngModel", chart_r1301.adminGroupId)("disabled", i0.ɵɵpipeBind1(12, 17, ctx_r1275.chartRequests$)[chart_r1301.id]);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngValue", 0);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngForOf", currVal_8);
          i0.ɵɵadvance(3);
          i0.ɵɵproperty("ngModel", chart_r1301.denyGroupId)("disabled", i0.ɵɵpipeBind1(19, 21, ctx_r1275.chartRequests$)[chart_r1301.id]);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngValue", 0);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngForOf", currVal_12);
        }
      }

      function SecurityComponent_tr_92_Template(rf, ctx) {
        if (rf & 1) {
          var _r1314 = i0.ɵɵgetCurrentView();

          i0.ɵɵelementStart(0, "tr");
          i0.ɵɵelementStart(1, "td");
          i0.ɵɵtext(2);
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(3, "td");
          i0.ɵɵelementStart(4, "select", 63);
          i0.ɵɵlistener("ngModelChange", function SecurityComponent_tr_92_Template_select_ngModelChange_4_listener($event) {
            i0.ɵɵrestoreView(_r1314);
            var chart_r1312 = ctx.$implicit;
            var ctx_r1313 = i0.ɵɵnextContext();
            return ctx_r1313.saveExternalUsersSetting(chart_r1312, $event);
          });
          i0.ɵɵpipe(5, "async");
          i0.ɵɵelementStart(6, "option", 39);
          i0.ɵɵtext(7, "Not allowed");
          i0.ɵɵelementEnd();
          i0.ɵɵelementStart(8, "option", 39);
          i0.ɵɵtext(9, "Allowed");
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
          i0.ɵɵelementEnd();
        }

        if (rf & 2) {
          var chart_r1312 = ctx.$implicit;
          var ctx_r1276 = i0.ɵɵnextContext();
          i0.ɵɵadvance(2);
          i0.ɵɵtextInterpolate(chart_r1312.name);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("ngModel", chart_r1312.areExternalUsersAllowed)("disabled", i0.ɵɵpipeBind1(5, 5, ctx_r1276.chartExternalRequests$)[chart_r1312.id] || !ctx_r1276.globalExternalUsersSetting);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("value", false);
          i0.ɵɵadvance(2);
          i0.ɵɵproperty("value", true);
        }
      }

      var SecurityComponent =
      /*#__PURE__*/
      function () {
        function SecurityComponent(locale, store, chartService, adminService, title) {
          var _this9 = this;

          _classCallCheck(this, SecurityComponent);

          this.locale = locale;
          this.store = store;
          this.chartService = chartService;
          this.adminService = adminService;
          this.title = title;
          this.Resources = Resources;
          this.newCreator = null;
          this.addedUser = null;
          this.addedGroup = null;
          this.newSecurityGroupName = '';
          this.selectedSecurityGroup = null;
          this.globalExternalUsersSetting = false;
          this.unsubscribe = new rxjs_1.Subject();

          this.userEntry = function (entry) {
            return !!entry.UserId || !!entry.UserName;
          };

          this.groupEntry = function (entry) {
            return !!entry.GroupName;
          };

          this.model$ = store.pipe(store_1.select(fromAdmin.selectCompositeModel));
          this.model$.pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(function (model) {
            if (model === null) {
              _this9.store.dispatch(AdminActions.loadCompositeModel());

              return;
            }

            _this9.creators = model.Creators ? model.Creators.map(function (x) {
              return {
                id: x,
                name: x
              };
            }) : [];

            _this9.updateCreatorInfo();

            if (_this9.selectedSecurityGroup !== null) {
              _this9.selectedSecurityGroup = model.SecurityGroups.find(function (x) {
                return x.Id === _this9.selectedSecurityGroup.Id;
              });
            }

            _this9.globalExternalUsersSetting = model.GlobalExternalUsersSetting;
          });
          this.availableEntries$ = store.pipe(store_1.select(fromAdmin.selectAvailableEntries));
          this.availableEntries$.pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(function (entries) {
            if (entries === null) {
              _this9.store.dispatch(AdminActions.loadCompanyGroups());

              return;
            }
          });
          this.charts$ = store.pipe(store_1.select(fromAdmin.selectCharts));
          this.charts$.pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(function (charts) {
            if (charts === null) {
              _this9.store.dispatch(AdminActions.loadCharts());

              return;
            }
          });
          title.setTitle('Settings - Security');
          this.chartRequests$ = this.store.pipe(store_1.select(fromAdmin.selectChartRequests));
          this.chartExternalRequests$ = this.store.pipe(store_1.select(fromAdmin.selectChartExternalRequests));
        }

        _createClass(SecurityComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.store.pipe(store_1.select(fromAdmin.selectSelectedSecurityGroupId), operators_1.withLatestFrom(this.model$), operators_1.takeUntil(this.unsubscribe)).subscribe(function (_ref25) {
              var _ref26 = _slicedToArray(_ref25, 2),
                  id = _ref26[0],
                  model = _ref26[1];

              if (id !== 0 && model && model.SecurityGroups && model.SecurityGroups.length > 0) {
                var group = model.SecurityGroups.find(function (x) {
                  return x.Id === id;
                });

                if (group) {
                  _this10.selectedSecurityGroup = group;
                  _this10.newSecurityGroupName = '';
                }
              }
            });
            this.peoplePickerSource$ = new rxjs_1.Observable(function (observer) {
              observer.next(_this10.peoplePickerSearchString);
            }).pipe(operators_1.mergeMap(function (x) {
              return _this10.chartService.searchOrganization(x).pipe( //tap(y => console.log(y)),
              operators_1.map(function (data) {
                return data.map(function (item) {
                  if (item.JobTitle) {
                    item.TypeaheadTitle = "".concat(item.DisplayName, " - ").concat(item.JobTitle);
                  } else {
                    item.TypeaheadTitle = item.DisplayName;
                  }

                  return item;
                });
              }));
            }));
            this.securityUserPickerSource$ = new rxjs_1.Observable(function (observer) {
              observer.next(_this10.securityUserPickerString);
            }).pipe(operators_1.mergeMap(function (x) {
              return _this10.chartService.searchOrganization(x).pipe( //tap(y => console.log(y)),
              operators_1.map(function (data) {
                return data.map(function (item) {
                  if (item.JobTitle) {
                    item.TypeaheadTitle = "".concat(item.DisplayName, " - ").concat(item.JobTitle);
                  } else {
                    item.TypeaheadTitle = item.DisplayName;
                  }

                  return item;
                });
              }));
            }));
          }
        }, {
          key: "onSelectPerson",
          value: function onSelectPerson($event) {
            console.log($event);
            this.newCreator = $event.item;
          }
        }, {
          key: "onSelectSecurityPerson",
          value: function onSelectSecurityPerson($event) {
            console.log($event);
            this.addedUser = $event.item;
          }
        }, {
          key: "addCreator",
          value: function addCreator() {
            var _this11 = this;

            if (this.newCreator === null) {
              return;
            }

            this.model$.pipe(operators_1.take(1), operators_1.map(function (model) {
              if (model.Creators.findIndex(function (x) {
                return x === _this11.newCreator.UniqueId;
              }) !== -1) {
                return;
              }

              _this11.store.dispatch(AdminActions.saveCreators({
                creators: [].concat(_toConsumableArray(model.Creators), [_this11.newCreator.UniqueId])
              }));

              _this11.newCreator = null;
              _this11.peoplePickerSearchString = '';
            })).subscribe();
          }
        }, {
          key: "removeCreator",
          value: function removeCreator(id) {
            var _this12 = this;

            this.model$.pipe(operators_1.take(1), operators_1.map(function (model) {
              _this12.store.dispatch(AdminActions.saveCreators({
                creators: model.Creators.filter(function (x) {
                  return x !== id;
                })
              }));

              _this12.newCreator = null;
              _this12.peoplePickerSearchString = '';
            })).subscribe();
          }
        }, {
          key: "updateCreatorInfo",
          value: function updateCreatorInfo() {
            var _this13 = this;

            this.creators.forEach(function (creator) {
              _this13.adminService.getPersonName(creator.id).subscribe(function (name) {
                creator.name = name;
              });
            });
          }
        }, {
          key: "addSecurityGroup",
          value: function addSecurityGroup() {
            if (this.newSecurityGroupName === '' || this.newSecurityGroupName === null) {
              return;
            }

            this.store.dispatch(AdminActions.createSecurityGroup({
              name: this.newSecurityGroupName
            }));
          }
        }, {
          key: "removeSecurityGroup",
          value: function removeSecurityGroup(groupId) {
            this.store.dispatch(AdminActions.removeSecurityGroup({
              id: groupId
            }));
          }
        }, {
          key: "addToSecurityGroup",
          value: function addToSecurityGroup(type) {
            console.log('adding', type);

            if (!this.selectedSecurityGroup) {
              return;
            }

            var securityGroupEntry = {
              Id: 0,
              SecurityGroupId: this.selectedSecurityGroup.Id
            };

            if (type === 'group') {
              securityGroupEntry.GroupName = this.addedGroup.value;
            }

            if (type === 'user') {
              securityGroupEntry.UserId = this.addedUser.UniqueId;
              securityGroupEntry.UserName = this.addedUser.DisplayName;
              this.securityUserPickerString = '';
            }

            this.store.dispatch(AdminActions.addSecurityGroupEntry({
              entry: securityGroupEntry
            }));
            this.addedUser = null;
            this.addedGroup = null;
          }
        }, {
          key: "removeSecurityGroupEntry",
          value: function removeSecurityGroupEntry(id) {
            this.store.dispatch(AdminActions.removeSecurityGroupEntry({
              id: id
            }));
          }
        }, {
          key: "hasItems",
          value: function hasItems(type) {
            if (this.selectedSecurityGroup === null || this.selectedSecurityGroup.SecurityGroupEntries == null) {
              return false;
            }

            if (type === 'user') {
              return this.selectedSecurityGroup.SecurityGroupEntries.findIndex(function (x) {
                return !!x.UserId || !!x.UserName;
              }) !== -1;
            }

            if (type === 'group') {
              return this.selectedSecurityGroup.SecurityGroupEntries.findIndex(function (x) {
                return !!x.GroupName;
              }) !== -1;
            }
          }
        }, {
          key: "saveGlobalExternalSetting",
          value: function saveGlobalExternalSetting(value) {
            this.store.dispatch(AdminActions.saveGlobalExternalSetting({
              value: value
            }));
          }
        }, {
          key: "saveExternalUsersSetting",
          value: function saveExternalUsersSetting(chart, $event) {
            this.store.dispatch(AdminActions.saveExternalUsersSetting({
              chart: Object.assign(Object.assign({}, chart), {
                areExternalUsersAllowed: $event
              })
            }));
          }
        }, {
          key: "saveChart",
          value: function saveChart(chart, prop, $event) {
            console.log($event);
            var newChart = Object.assign({}, chart);
            newChart[prop] = $event;
            this.store.dispatch(AdminActions.saveChart({
              chart: newChart
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.unsubscribe.next();
            this.unsubscribe.complete();
          }
        }]);

        return SecurityComponent;
      }();

      exports.SecurityComponent = SecurityComponent;

      SecurityComponent.ɵfac = function SecurityComponent_Factory(t) {
        return new (t || SecurityComponent)(i0.ɵɵdirectiveInject(angular_l10n_1.L10N_LOCALE), i0.ɵɵdirectiveInject(i1.Store), i0.ɵɵdirectiveInject(i2.ChartService), i0.ɵɵdirectiveInject(i3.AdminService), i0.ɵɵdirectiveInject(i4.Title));
      };

      SecurityComponent.ɵcmp = i0.ɵɵdefineComponent({
        type: SecurityComponent,
        selectors: [["toc-admin-security"]],
        decls: 94,
        vars: 41,
        consts: [[1, "container"], [1, "card"], ["translate", "admin.TXT_ManageAdmin", 1, "section-heading"], ["translate", "admin.TXT_ManageAdminDesc", 1, "suffix"], [1, "row"], [1, "col-12", "col-md-6"], ["typeaheadOptionsLimit", "20", "container", "body", "typeaheadWaitMs", "200", "typeaheadOptionField", "TypeaheadTitle", 1, "form-control", 3, "ngModel", "typeahead", "typeaheadAsync", "typeaheadScrollable", "typeaheadOptionsInScrollableView", "placeholder", "ngModelChange", "typeaheadOnSelect"], [1, "btn", "btn-success", 3, "disabled", "click"], [1, "fa", "fa-plus-circle", "fa-lg"], [1, "col-12", "col-md-6", "mt-2", "mt-md-0"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["translate", "admin.TXT_ManageGroups", 1, "section-heading"], ["translate", "admin.TXT_ManageGroupsDesc", 1, "suffix"], [1, "col-md-4"], [1, "input-group"], ["type", "text", 1, "form-control", 3, "ngModel", "placeholder", "ngModelChange"], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "form-control", 3, "ngModel", "ngModelChange"], ["translate", "admin.TXT_SelectGroup", "selected", "", 3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], ["id", "manage-security-group", 4, "ngIf"], ["translate", "admin.TXT_AssignTitle", 1, "section-heading"], ["translate", "admin.TXT_AssignDesc", 1, "suffix"], [1, "table-responsive", "col-md-12"], [1, "table", "table-hover"], [1, "theader"], ["translate", "admin.TXT_OrgChart"], ["translate", "admin.TXT_ViewGroup"], ["translate", "admin.TXT_AdminGroup"], ["translate", "admin.TXT_DenyGroup"], [4, "ngFor", "ngForOf"], ["translate", "admin.TXT_ExternalTitle", 1, "section-heading"], ["translate", "admin.TXT_ExternalDesc", 1, "suffix"], ["translate", "admin.TXT_GlobalSetting", 1, "subheading", "mb-0", "mt-1"], ["translate", "admin.TXT_GlobalDesc", 1, "mt-1"], ["ng-disabled", "saving", 1, "form-control", 3, "ngModel", "ngModelChange", "change"], [3, "value"], ["translate", "admin.TXT_ChartSetting", 1, "subheading"], ["translate", "admin.TXT_ChartExternalUser"], [1, "list-group-item"], ["type", "button", 1, "close", 3, "click"], [3, "ngValue"], [1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-trash", "fa-lg"], ["id", "manage-security-group"], ["translate", "admin.TXT_AddUserToGroup"], ["translate", "admin.TXT_AddGroupToGroup"], [1, "clearfix"], ["translate", "admin.TXT_UsersInGroup"], ["class", "list-group-item", "ng-if", "(security.currentGroup.SecurityGroupEntries|users).length == 0", "translate", "admin.TXT_None", 4, "ngIf"], ["class", "list-group-item", "ng-repeat", "user in security.currentGroup.SecurityGroupEntries|users", 4, "ngFor", "ngForOf"], ["translate", "admin.TXT_GroupsInGroup"], ["class", "list-group-item", "translate", "admin.TXT_NoGroups", 4, "ngIf"], ["ng-if", "(security.currentGroup.SecurityGroupEntries|users).length == 0", "translate", "admin.TXT_None", 1, "list-group-item"], ["ng-repeat", "user in security.currentGroup.SecurityGroupEntries|users", 1, "list-group-item"], ["translate", "admin.TXT_NoGroups", 1, "list-group-item"], ["ng-options", "group.Id as group.Name for group in securityGroups", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["translate", "admin.TXT_Everybody", 3, "ngValue"], ["translate", "admin.TXT_Creators", 3, "ngValue"], ["translate", "admin.TXT_Nobody", 3, "ngValue"], ["ng-options", "o.v as o.n for o in [{ n: 'Not allowed', v: false }, { n: 'Allowed', v: true }]", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"]],
        template: function SecurityComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵtext(3, "Manage chart administrators");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵtext(5, "Control the list of users who have administrator privileges to all charts");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 4);
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵelementStart(8, "input", 6);
            i0.ɵɵlistener("ngModelChange", function SecurityComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.peoplePickerSearchString = $event;
            })("typeaheadOnSelect", function SecurityComponent_Template_input_typeaheadOnSelect_8_listener($event) {
              return ctx.onSelectPerson($event);
            });
            i0.ɵɵpipe(9, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "br");
            i0.ɵɵelementStart(11, "button", 7);
            i0.ɵɵlistener("click", function SecurityComponent_Template_button_click_11_listener($event) {
              return ctx.addCreator();
            });
            i0.ɵɵelement(12, "i", 8);
            i0.ɵɵtext(13);
            i0.ɵɵpipe(14, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 9);
            i0.ɵɵelementStart(16, "ul", 10);
            i0.ɵɵtemplate(17, SecurityComponent_li_17_Template, 5, 1, "li", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "div", 1);
            i0.ɵɵelementStart(19, "div", 12);
            i0.ɵɵtext(20, "Manage Security Groups");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "div", 13);
            i0.ɵɵtext(22, "Use this page to control access to charts, define groups of people who can view or administrate specific charts and restrict access to charts to certain groups of people within the organisation.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "div", 4);
            i0.ɵɵelementStart(24, "div", 14);
            i0.ɵɵelementStart(25, "div", 15);
            i0.ɵɵelementStart(26, "input", 16);
            i0.ɵɵlistener("ngModelChange", function SecurityComponent_Template_input_ngModelChange_26_listener($event) {
              return ctx.newSecurityGroupName = $event;
            });
            i0.ɵɵpipe(27, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "span", 17);
            i0.ɵɵelementStart(29, "button", 18);
            i0.ɵɵlistener("click", function SecurityComponent_Template_button_click_29_listener($event) {
              return ctx.addSecurityGroup();
            });
            i0.ɵɵelement(30, "i", 8);
            i0.ɵɵtext(31);
            i0.ɵɵpipe(32, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(33, "br");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "div", 4);
            i0.ɵɵelementStart(35, "div", 14);
            i0.ɵɵelementStart(36, "select", 19);
            i0.ɵɵlistener("ngModelChange", function SecurityComponent_Template_select_ngModelChange_36_listener($event) {
              return ctx.selectedSecurityGroup = $event;
            });
            i0.ɵɵelementStart(37, "option", 20);
            i0.ɵɵtext(38, "Select existing group");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(39, SecurityComponent_option_39_Template, 2, 2, "option", 21);
            i0.ɵɵpipe(40, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(41, "br");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "div", 14);
            i0.ɵɵtemplate(43, SecurityComponent_button_43_Template, 4, 4, "button", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(44, SecurityComponent_div_44_Template, 47, 38, "div", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(45, "div", 1);
            i0.ɵɵelementStart(46, "div", 24);
            i0.ɵɵtext(47, "Assign Groups to Charts");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(48, "div", 25);
            i0.ɵɵtext(49, "Manage which charts each admin group can access here");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(50, "div", 4);
            i0.ɵɵelementStart(51, "div", 26);
            i0.ɵɵelementStart(52, "table", 27);
            i0.ɵɵelementStart(53, "thead", 28);
            i0.ɵɵelementStart(54, "tr");
            i0.ɵɵelementStart(55, "th", 29);
            i0.ɵɵtext(56, "Organization Chart");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "th", 30);
            i0.ɵɵtext(58, "View Only Group");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(59, "th", 31);
            i0.ɵɵtext(60, "Admin Group");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(61, "th", 32);
            i0.ɵɵtext(62, "Deny Access To");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(63, SecurityComponent_tr_63_Template, 24, 25, "tr", 33);
            i0.ɵɵpipe(64, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(65, "div", 1);
            i0.ɵɵelementStart(66, "div", 34);
            i0.ɵɵtext(67, "External user access");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "div", 35);
            i0.ɵɵtext(69, "Control whether charts can be shared outside of TeamOrgChart");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(70, "div", 36);
            i0.ɵɵtext(71, "Global setting");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(72, "p", 37);
            i0.ɵɵtext(73, "Disallowing access globally overrides all chart specific settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(74, "div", 4);
            i0.ɵɵelementStart(75, "div", 14);
            i0.ɵɵelementStart(76, "select", 38);
            i0.ɵɵlistener("ngModelChange", function SecurityComponent_Template_select_ngModelChange_76_listener($event) {
              return ctx.globalExternalUsersSetting = $event;
            })("change", function SecurityComponent_Template_select_change_76_listener($event) {
              return ctx.saveGlobalExternalSetting(ctx.globalExternalUsersSetting);
            });
            i0.ɵɵelementStart(77, "option", 39);
            i0.ɵɵtext(78, "Not allowed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(79, "option", 39);
            i0.ɵɵtext(80, "Allowed");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(81, "div", 40);
            i0.ɵɵtext(82, "Chart specific settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(83, "div", 4);
            i0.ɵɵelementStart(84, "div", 26);
            i0.ɵɵelementStart(85, "table", 27);
            i0.ɵɵelementStart(86, "thead", 28);
            i0.ɵɵelementStart(87, "tr");
            i0.ɵɵelementStart(88, "th", 29);
            i0.ɵɵtext(89, "Organization Chart");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(90, "th", 41);
            i0.ɵɵtext(91, "External users access");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(92, SecurityComponent_tr_92_Template, 10, 7, "tr", 33);
            i0.ɵɵpipe(93, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
          }

          if (rf & 2) {
            var tmp_15_0 = null;
            var currVal_15 = (tmp_15_0 = i0.ɵɵpipeBind1(40, 35, ctx.model$)) == null ? null : tmp_15_0.SecurityGroups;
            i0.ɵɵadvance(8);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind2(9, 23, ctx.Resources.AuditStrings.SelectStartingPersonPlaceholder, ctx.locale.language));
            i0.ɵɵproperty("ngModel", ctx.peoplePickerSearchString)("typeahead", ctx.peoplePickerSource$)("typeaheadAsync", true)("typeaheadScrollable", true)("typeaheadOptionsInScrollableView", 8);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.newCreator === null);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(14, 26, "admin.BUTTON_AddAdmin", ctx.locale.language), " ");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx.creators);
            i0.ɵɵadvance(9);
            i0.ɵɵpropertyInterpolate("placeholder", i0.ɵɵpipeBind2(27, 29, "admin.TXT_NewGroup", ctx.locale.language));
            i0.ɵɵproperty("ngModel", ctx.newSecurityGroupName);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", ctx.newSecurityGroupName.length === 0);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(32, 32, "admin.TXT_AddNewGroup", ctx.locale.language), "");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.selectedSecurityGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngValue", null);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", currVal_15);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.selectedSecurityGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.selectedSecurityGroup);
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(64, 37, ctx.charts$));
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("ngModel", ctx.globalExternalUsersSetting);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", false);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", true);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(93, 39, ctx.charts$));
          }
        },
        directives: [i5.L10nTranslateDirective, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i7.TypeaheadDirective, i8.NgForOf, i6.SelectControlValueAccessor, i6.NgSelectOption, i6.ɵangular_packages_forms_forms_x, i9.NgrxSelectMultipleOption, i9.NgrxSelectOption, i9.NgrxFallbackSelectOption, i8.NgIf],
        pipes: [i5.L10nTranslatePipe, i8.AsyncPipe, i10.CallbackPipe],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(SecurityComponent, [{
          type: core_1.Component,
          args: [{
            selector: 'toc-admin-security',
            templateUrl: './security.component.html'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: core_1.Inject,
              args: [angular_l10n_1.L10N_LOCALE]
            }]
          }, {
            type: i1.Store
          }, {
            type: i2.ChartService
          }, {
            type: i3.AdminService
          }, {
            type: i4.Title
          }];
        }, null);
      })();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /***/
  },

  /***/
  "./src/app/admin/services/admin.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/admin/services/admin.service.ts ***!
    \*************************************************/

  /*! no static exports found */

  /***/
  function srcAppAdminServicesAdminServiceTs(module, exports, __webpack_require__) {
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

      var AdminService =
      /*#__PURE__*/
      function () {
        function AdminService(http) {
          _classCallCheck(this, AdminService);

          this.http = http;
          this.API_PATH = '/api/admin';
        }

        _createClass(AdminService, [{
          key: "loadAdminCompositeData",
          value: function loadAdminCompositeData() {
            return this.http.get("".concat(this.API_PATH, "/composite"));
          }
        }, {
          key: "loadCompanyGroups",
          value: function loadCompanyGroups() {
            return this.http.get("/api/security/availableentries");
          }
        }, {
          key: "loadSecurityCharts",
          value: function loadSecurityCharts() {
            return this.http.get("/api/security/charts");
          }
        }, {
          key: "loadCacheSetting",
          value: function loadCacheSetting() {
            return this.http.get("".concat(this.API_PATH, "/disablecache"));
          }
        }, {
          key: "saveAppearance",
          value: function saveAppearance(form) {
            return this.http.post("".concat(this.API_PATH, "/settings"), {
              CustomColour: form.brandColor,
              CustomFooterText: form.footerText,
              CustomThemeName: form.theme
            });
          }
        }, {
          key: "removeLogo",
          value: function removeLogo() {
            return this.http.post("".concat(this.API_PATH, "/logo/remove"), {});
          }
        }, {
          key: "removeCss",
          value: function removeCss() {
            return this.http.delete("".concat(this.API_PATH, "/customcss"));
          }
        }, {
          key: "postCreators",
          value: function postCreators(creators) {
            return this.http.post("".concat(this.API_PATH, "/creators"), creators);
          }
        }, {
          key: "getPersonName",
          value: function getPersonName(id) {
            return this.http.get("/api/picker/personname/?id=".concat(encodeURIComponent(id)));
          }
        }, {
          key: "addSecurityGroup",
          value: function addSecurityGroup(name) {
            return this.http.post("/api/security/securitygroups", {
              primitive: name
            });
          }
        }, {
          key: "removeSecurityGroup",
          value: function removeSecurityGroup(id) {
            return this.http.delete("/api/security/securitygroups/".concat(id));
          }
        }, {
          key: "getSecurityCharts",
          value: function getSecurityCharts() {
            return this.http.get("/api/security/charts");
          }
        }, {
          key: "addSecurityGroupEntry",
          value: function addSecurityGroupEntry(entry) {
            return this.http.post("/api/security/securitygroupentry", entry);
          }
        }, {
          key: "removeSecurityGroupEntry",
          value: function removeSecurityGroupEntry(id) {
            return this.http.delete("/api/security/securitygroupentry/".concat(id));
          }
        }, {
          key: "saveSecurityChart",
          value: function saveSecurityChart(chart) {
            return this.http.post("/api/security/chartsecuritygroups/".concat(chart.id), chart);
          }
        }, {
          key: "saveExternalUsersSetting",
          value: function saveExternalUsersSetting(chart) {
            return this.http.post("/api/security/externalusers/".concat(chart.id), Object.assign(Object.assign({}, chart), {
              viewGroupId: 0,
              adminGroupId: 0,
              denyGroupId: 0
            }));
          }
        }, {
          key: "saveGlobalExternalUsersSetting",
          value: function saveGlobalExternalUsersSetting(value) {
            return this.http.post("/api/security/externalusers/global", {
              areExternalUsersAllowed: value
            });
          }
        }, {
          key: "saveAdminEmail",
          value: function saveAdminEmail(AdminEmail, CompanyName) {
            return this.http.post("".concat(this.API_PATH, "/adminemail"), {
              AdminEmail: AdminEmail,
              CompanyName: CompanyName
            });
          }
        }, {
          key: "saveCacheSetting",
          value: function saveCacheSetting(value) {
            return this.http.post("".concat(this.API_PATH, "/disablecache"), {
              DisableCache: value
            });
          }
        }, {
          key: "getInfoSource",
          value: function getInfoSource(sourceId) {
            return this.http.get("".concat(this.API_PATH, "/informationsource?sourceId=").concat(sourceId));
          }
        }, {
          key: "getSharePointLists",
          value: function getSharePointLists() {
            return this.http.get('/api/sharepoint/alllists');
          }
        }, {
          key: "getSharePointListFields",
          value: function getSharePointListFields(id) {
            return this.http.get("/api/sharepoint/fields/".concat(id, "/Host"));
          }
        }, {
          key: "saveInformationSource",
          value: function saveInformationSource(source) {
            return this.http.post("/api/admin/saveinformationsource", source);
          }
        }, {
          key: "deleteInformationSource",
          value: function deleteInformationSource(sourceId) {
            return this.http.get("".concat(this.API_PATH, "/removeinformationsource?sourceId=").concat(sourceId));
          }
        }, {
          key: "testInformationSource",
          value: function testInformationSource(sourceId) {
            return this.http.get("/api/info/test?sourceId=".concat(sourceId));
          }
        }, {
          key: "loadApiKeys",
          value: function loadApiKeys() {
            return this.http.get("".concat(this.API_PATH, "/apikeys"));
          }
        }, {
          key: "createApiKey",
          value: function createApiKey() {
            return this.http.post("".concat(this.API_PATH, "/apikeys"), {});
          }
        }, {
          key: "revokeApiKey",
          value: function revokeApiKey(id) {
            return this.http.delete("".concat(this.API_PATH, "/apikeys/").concat(id));
          }
        }]);

        return AdminService;
      }();

      exports.AdminService = AdminService;

      AdminService.ɵfac = function AdminService_Factory(t) {
        return new (t || AdminService)(i0.ɵɵinject(i1.HttpClient));
      };

      AdminService.ɵprov = i0.ɵɵdefineInjectable({
        token: AdminService,
        factory: AdminService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        i0.ɵsetClassMetadata(AdminService, [{
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