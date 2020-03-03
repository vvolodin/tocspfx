(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/app/create/components/create-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/create/components/create-chart.component.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js"), __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts"), __webpack_require__(/*! ../create.reducers */ "./src/app/create/create.reducers.ts"), __webpack_require__(/*! ../../strings */ "./src/app/strings/index.ts"), __webpack_require__(/*! ../create.models */ "./src/app/create/create.models.ts"), __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js"), __webpack_require__(/*! ../create.actions */ "./src/app/create/create.actions.ts"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"), __webpack_require__(/*! src/app/shared/shared.actions */ "./src/app/shared/shared.actions.ts"), __webpack_require__(/*! src/app/actions */ "./src/app/actions.ts"), __webpack_require__(/*! src/app/core/services/analytics.service */ "./src/app/core/services/analytics.service.ts"), __webpack_require__(/*! angular-l10n */ "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(/*! angular-l10n */ "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"), __webpack_require__(/*! src/app/core/services/analytics.service */ "./src/app/core/services/analytics.service.ts"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, store_1, rxjs_1, fromRoot, fromCreate, Resources, create_models_1, operators_1, create_actions_1, router_1, shared_actions_1, actions_1, analytics_service_1, angular_l10n_1, i0, i1, i2, i3, i4, i5, i6) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function CreateChartComponent_div_36_span_10_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span");
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r1243 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r1243.Resources.CreateChartStrings.TXT.NotEnabled, ctx_r1243.locale.language), "");
    } }
    function CreateChartComponent_div_36_div_11_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 28);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const source_r1241 = i0.ɵɵnextContext().$implicit;
        const ctx_r1244 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, source_r1241.desc, ctx_r1244.locale.language), "");
    } }
    function CreateChartComponent_div_36_div_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 29);
        i0.ɵɵelementStart(1, "a", 30);
        i0.ɵɵelement(2, "i", 31);
        i0.ɵɵtext(3);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const source_r1241 = i0.ɵɵnextContext().$implicit;
        const ctx_r1245 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("href", source_r1241.warningLink, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 2, source_r1241.warning, ctx_r1245.locale.language), "");
    } }
    function CreateChartComponent_div_36_div_13_a_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "a", 30);
        i0.ɵɵelement(1, "i", 31);
        i0.ɵɵtext(2);
        i0.ɵɵpipe(3, "translate");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r1251 = i0.ɵɵnextContext(3);
        i0.ɵɵproperty("href", ctx_r1251.preloadedData == null ? null : ctx_r1251.preloadedData.sharePointRedirectLink, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 2, ctx_r1251.Resources.CreateChartStrings.SPWarning, ctx_r1251.locale.language), "");
    } }
    function CreateChartComponent_div_36_div_13_span_2_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 35);
        i0.ɵɵelement(1, "i", 31);
        i0.ɵɵtext(2);
        i0.ɵɵpipe(3, "translate");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r1252 = i0.ɵɵnextContext(3);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(3, 1, ctx_r1252.Resources.CreateChartStrings.SPWarning, ctx_r1252.locale.language), " ");
    } }
    function CreateChartComponent_div_36_div_13_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 32);
        i0.ɵɵtemplate(1, CreateChartComponent_div_36_div_13_a_1_Template, 4, 5, "a", 33);
        i0.ɵɵtemplate(2, CreateChartComponent_div_36_div_13_span_2_Template, 4, 4, "span", 34);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r1246 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r1246.preloadedData == null ? null : ctx_r1246.preloadedData.sharePointRedirectLink);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !(ctx_r1246.preloadedData == null ? null : ctx_r1246.preloadedData.sharePointRedirectLink));
    } }
    function CreateChartComponent_div_36_p_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵelement(1, "i", 36);
        i0.ɵɵelementStart(2, "a", 37);
        i0.ɵɵtext(3);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const source_r1241 = i0.ɵɵnextContext().$implicit;
        const ctx_r1247 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("href", source_r1241.errorLink, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 2, ctx_r1247.Resources.CreateChartStrings.TXT.WhyAmISeeing, ctx_r1247.locale.language), " ");
    } }
    function CreateChartComponent_div_36_p_15_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵelement(1, "i", 38);
        i0.ɵɵelementStart(2, "a", 37);
        i0.ɵɵtext(3);
        i0.ɵɵpipe(4, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const source_r1241 = i0.ɵɵnextContext().$implicit;
        const ctx_r1248 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("href", source_r1241.guideLink, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 2, source_r1241.guideLinkText, ctx_r1248.locale.language), " ");
    } }
    function CreateChartComponent_div_36_Template(rf, ctx) { if (rf & 1) {
        const _r1256 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 14);
        i0.ɵɵlistener("mouseenter", function CreateChartComponent_div_36_Template_div_mouseenter_0_listener($event) { i0.ɵɵrestoreView(_r1256); const i_r1242 = ctx.index; const ctx_r1255 = i0.ɵɵnextContext(); return ctx_r1255.onMouseEnter($event, i_r1242); })("mouseleave", function CreateChartComponent_div_36_Template_div_mouseleave_0_listener($event) { i0.ɵɵrestoreView(_r1256); const ctx_r1257 = i0.ɵɵnextContext(); return ctx_r1257.onMouseLeave(); });
        i0.ɵɵelementStart(1, "div", 15);
        i0.ɵɵelementStart(2, "div", 16);
        i0.ɵɵelementStart(3, "div", 17);
        i0.ɵɵelement(4, "img", 18);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 19);
        i0.ɵɵelementStart(6, "div", 20);
        i0.ɵɵelementStart(7, "div", 21);
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "translate");
        i0.ɵɵtemplate(10, CreateChartComponent_div_36_span_10_Template, 3, 4, "span", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, CreateChartComponent_div_36_div_11_Template, 3, 4, "div", 23);
        i0.ɵɵtemplate(12, CreateChartComponent_div_36_div_12_Template, 5, 5, "div", 24);
        i0.ɵɵtemplate(13, CreateChartComponent_div_36_div_13_Template, 3, 2, "div", 25);
        i0.ɵɵtemplate(14, CreateChartComponent_div_36_p_14_Template, 5, 5, "p", 22);
        i0.ɵɵtemplate(15, CreateChartComponent_div_36_p_15_Template, 5, 5, "p", 22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "div", 26);
        i0.ɵɵelementStart(17, "button", 27);
        i0.ɵɵlistener("click", function CreateChartComponent_div_36_Template_button_click_17_listener($event) { i0.ɵɵrestoreView(_r1256); const source_r1241 = ctx.$implicit; const ctx_r1258 = i0.ɵɵnextContext(); return ctx_r1258.createChart(source_r1241.type); });
        i0.ɵɵpipe(18, "async");
        i0.ɵɵtext(19);
        i0.ɵɵpipe(20, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const source_r1241 = ctx.$implicit;
        const i_r1242 = ctx.index;
        const ctx_r1240 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("disabled", !source_r1241.isEnabled)("active", source_r1241.isEnabled)("inactive", ctx_r1240.dataSourcesHighlight[i_r1242]);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("src", source_r1241.imageUrl, i0.ɵɵsanitizeUrl);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 20, source_r1241.title, ctx_r1240.locale.language));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !source_r1241.isEnabled);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !source_r1241.warning && !source_r1241.isSharePointWarning);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", source_r1241.warning);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", source_r1241.isSharePointWarning);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", source_r1241.errorLink);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", source_r1241.guideLink);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("btn-success", source_r1241.isEnabled)("btn-default", !source_r1241.isEnabled);
        i0.ɵɵproperty("disabled", !source_r1241.isEnabled || i0.ɵɵpipeBind1(18, 23, ctx_r1240.isCreating$));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind2(20, 25, ctx_r1240.Resources.CreateChartStrings.BTN.ChooseThisSource, ctx_r1240.locale.language), " \u00BB");
    } }
    class CreateChartComponent {
        constructor(locale, store, translation, router, analytics) {
            this.locale = locale;
            this.store = store;
            this.translation = translation;
            this.router = router;
            this.analytics = analytics;
            this.Resources = Resources;
            this.dataSources = [];
            this.dataSourcesHighlight = [];
            this.createChartModel = {
                placeholder: '',
                isPublic: true,
                name: ''
            };
            this.placeholderName = 'Chart #{0}';
            this.unsubscribe = new rxjs_1.Subject();
            this.analytics.send('Create chart', {});
            rxjs_1.combineLatest([this.translation.onChange(), this.store.select(fromRoot.getPreloadedData)])
                .pipe(operators_1.takeUntil(this.unsubscribe))
                .subscribe(([_, data]) => {
                this.placeholderName = this.translation.translate(Resources.CreateChartStrings.TXT.ChartNamePlaceholder);
                this.preloadedData = data;
                const sources = [create_models_1.sqlSource, create_models_1.excelSource, create_models_1.manualSource, create_models_1.azureTableSource, create_models_1.demoSource];
                if (this.preloadedData.isSharePointOnline) {
                    sources.unshift(create_models_1.spListSource);
                    sources.unshift(create_models_1.upsSource);
                }
                else {
                    sources.unshift(create_models_1.spListSourceDisabled);
                    sources.unshift(create_models_1.upsSourceDisabled);
                }
                if (this.preloadedData.isWAADTenant) {
                    sources.unshift(create_models_1.waadSource);
                }
                else {
                    sources.unshift(create_models_1.waadSourceDisabled);
                }
                this.dataSources = sources;
                this.dataSourcesHighlight = this.dataSources.map(x => false);
                for (let i = 1; i < 256; i++) {
                    const placeholderName = this.placeholderName.replace('{0}', String(i));
                    if (this.preloadedData.fullChartList.findIndex(chart => chart.name === placeholderName) === -1) {
                        this.createChartModel = Object.assign(Object.assign({}, this.createChartModel), { placeholder: placeholderName });
                        break;
                    }
                }
            });
            this.store.pipe(operators_1.takeUntil(this.unsubscribe), store_1.select(fromCreate.selectCreatedChart), operators_1.filter(x => x !== null)).subscribe(chart => {
                //proceed further based on chart type
                this.store.dispatch(new actions_1.InsertChartDescription(chart));
                switch (chart.dataSourceType) {
                    case 13: { //JSON
                        this.router.navigateByUrl(`/chart/${chart.id}?EditMode=1`);
                        break;
                    }
                    case 2: { //SQL
                        this.router.navigate(['/create/sql', chart.id]);
                        break;
                    }
                    case 5: { //WAAD
                        window.location.href = `/PickTop/${chart.id}?create=create`;
                        break;
                    }
                    case 6: { //SP List
                        window.location.href = `/sharepointlist/${chart.id}`;
                        break;
                    }
                    case 7: { //UPS
                        window.location.href = `/PickTop/${chart.id}?create=create`;
                        break;
                    }
                    case 8: { //Demo
                        this.router.navigate(['/chart', chart.id]);
                        break;
                    }
                    case 12: { //Azure Table
                        window.location.href = `/CreateChart/AzureTable?OrgChartDefinitionId=${chart.id}`;
                        break;
                    }
                    default: {
                        this.store.dispatch(new shared_actions_1.ToastError('Unknown data source type'));
                    }
                }
                this.store.dispatch(create_actions_1.ResetSaveStatus());
            });
            this.isCreating$ = store.pipe(store_1.select(fromCreate.selectIsCreating));
        }
        ngOnInit() {
            console.log('on init');
            this.store.dispatch(create_actions_1.ResetSaveStatus());
        }
        createChart(type) {
            this.store.dispatch(create_actions_1.CreateChart({
                model: {
                    ChartName: this.createChartModel.name || this.createChartModel.placeholder,
                    IsPublic: this.createChartModel.isPublic,
                    DataSourceType: type
                }
            }));
        }
        onMouseEnter($event, index) {
            this.dataSourcesHighlight = this.dataSources.map((value, idx) => idx !== index);
        }
        onMouseLeave() {
            this.dataSourcesHighlight = this.dataSources.map(x => false);
        }
        ngOnDestroy() {
            this.unsubscribe.next();
            this.unsubscribe.complete();
        }
    }
    exports.CreateChartComponent = CreateChartComponent;
    CreateChartComponent.ɵfac = function CreateChartComponent_Factory(t) { return new (t || CreateChartComponent)(i0.ɵɵdirectiveInject(angular_l10n_1.L10N_LOCALE), i0.ɵɵdirectiveInject(i1.Store), i0.ɵɵdirectiveInject(i2.L10nTranslationService), i0.ɵɵdirectiveInject(i3.Router), i0.ɵɵdirectiveInject(i4.AnalyticsService)); };
    CreateChartComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CreateChartComponent, selectors: [["toc-create-chart"]], decls: 37, vars: 38, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "card"], [1, "section-heading"], [1, "suffix"], [1, "form-group"], ["type", "text", "autocomplete", "off", 1, "form-control", 3, "disabled", "ngModel", "placeholder", "ngModelChange"], [1, "form-group", "form-check"], ["type", "checkbox", "id", "ispublic-checkbox", 1, "form-check-input", 3, "disabled", "checked"], ["for", "ispublic-checkbox", 1, "form-check-label"], [1, "font-weight-bold"], [1, "dataSources"], ["class", "card p-3 flex-row align-items-center data-source", 3, "disabled", "active", "inactive", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [1, "card", "p-3", "flex-row", "align-items-center", "data-source", 3, "mouseenter", "mouseleave"], [1, "featured-content", "d-flex", "flex-grow-1", "flex-wrap", "flex-md-nowrap"], [1, "avatar-container", "fixed-width"], [1, "avatar", "large"], [3, "src"], [1, "content-container", "flex-grow-1", "align-items-center"], [1, ""], [1, "t-style-three", "title"], [4, "ngIf"], ["class", "t-style-four suffix", 4, "ngIf"], ["class", "t-style-four suffix errorText", 4, "ngIf"], ["class", "t-style-four suffix errorLink text-info", 4, "ngIf"], [1, "icon-container", "d-flex", "align-items-center", "flex-grow-1", "flex-md-grow-0"], [1, "btn", "btn-sm", "dSource", "flex-grow-1", "flex-md-grow-0", 3, "disabled", "click"], [1, "t-style-four", "suffix"], [1, "t-style-four", "suffix", "errorText"], [1, "text-info", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-info-circle"], [1, "t-style-four", "suffix", "errorLink", "text-info"], ["class", "text-info", 3, "href", 4, "ngIf"], ["class", "text-info", 4, "ngIf"], [1, "text-info"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle"], ["target", "_blank", 3, "href"], ["aria-hidden", "true", 1, "fa", "fa-paperclip"]], template: function CreateChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "section");
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵelementStart(5, "div", 4);
            i0.ɵɵtext(6);
            i0.ɵɵpipe(7, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 5);
            i0.ɵɵtext(9);
            i0.ɵɵpipe(10, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "div", 1);
            i0.ɵɵelementStart(12, "div", 2);
            i0.ɵɵelementStart(13, "div", 6);
            i0.ɵɵelementStart(14, "label");
            i0.ɵɵtext(15);
            i0.ɵɵpipe(16, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "input", 7);
            i0.ɵɵlistener("ngModelChange", function CreateChartComponent_Template_input_ngModelChange_17_listener($event) { return ctx.createChartModel.name = $event; });
            i0.ɵɵpipe(18, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "div", 8);
            i0.ɵɵelement(20, "input", 9);
            i0.ɵɵpipe(21, "async");
            i0.ɵɵelementStart(22, "label", 10);
            i0.ɵɵelementStart(23, "span", 11);
            i0.ɵɵtext(24);
            i0.ɵɵpipe(25, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(26);
            i0.ɵɵpipe(27, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "div", 3);
            i0.ɵɵelementStart(29, "div", 4);
            i0.ɵɵtext(30);
            i0.ɵɵpipe(31, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "div", 5);
            i0.ɵɵtext(33);
            i0.ɵɵpipe(34, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "div", 12);
            i0.ɵɵtemplate(36, CreateChartComponent_div_36_Template, 21, 28, "div", 13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(7, 13, ctx.Resources.CreateChartStrings.TXT.Title2, ctx.locale.language), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(10, 16, ctx.Resources.CreateChartStrings.TXT.TitleDesc, ctx.locale.language));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(16, 19, ctx.Resources.CreateChartStrings.TXT.ChartName, ctx.locale.language));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(18, 22, ctx.isCreating$))("ngModel", ctx.createChartModel.name)("placeholder", ctx.createChartModel.placeholder);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("disabled", i0.ɵɵpipeBind1(21, 24, ctx.isCreating$))("checked", ctx.createChartModel.isPublic);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(25, 26, ctx.Resources.CreateChartStrings.TXT.Published, ctx.locale.language));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" - ", i0.ɵɵpipeBind2(27, 29, ctx.Resources.CreateChartStrings.TXT.PublishedDesc, ctx.locale.language), "");
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(31, 32, ctx.Resources.CreateChartStrings.TXT.ChooseSource, ctx.locale.language), " ");
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(34, 35, ctx.Resources.CreateChartStrings.TXT.ChooseDesc, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.dataSources);
        } }, directives: [i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i6.NgForOf, i6.NgIf], pipes: [i2.L10nTranslatePipe, i6.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS9jb21wb25lbnRzL2NyZWF0ZS1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"] });
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CreateChartComponent, [{
            type: core_1.Component,
            args: [{
                    selector: 'toc-create-chart',
                    templateUrl: './create-chart.component.html',
                    styleUrls: ['./create-chart.component.scss']
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core_1.Inject,
                    args: [angular_l10n_1.L10N_LOCALE]
                }] }, { type: i1.Store }, { type: i2.L10nTranslationService }, { type: i3.Router }, { type: i4.AnalyticsService }]; }, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/create/components/sql-source.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/create/components/sql-source.component.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js"), __webpack_require__(/*! angular-l10n */ "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts"), __webpack_require__(/*! ../../strings */ "./src/app/strings/index.ts"), __webpack_require__(/*! ../create.reducers */ "./src/app/create/create.reducers.ts"), __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js"), __webpack_require__(/*! ../create.actions */ "./src/app/create/create.actions.ts"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"), __webpack_require__(/*! angular-l10n */ "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, rxjs_1, angular_l10n_1, fromRoot, Resources, fromCreate, store_1, operators_1, create_actions_1, router_1, i0, i1, i2, i3, i4, i5) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function SqlSourceComponent_div_45_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "div", 21);
    } }
    function SqlSourceComponent_div_46_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 22);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const ctx_r1261 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(2, 1, ctx_r1261.Resources.CreateChartStrings.SQL.ConnectionSuccess, ctx_r1261.locale.language), " ");
    } }
    const _c0 = function (a0, a1, a2, a3) { return { "btn-info": a0, "btn-danger": a1, "btn-success": a2, "disabled": a3 }; };
    class SqlSourceComponent {
        constructor(locale, store, router) {
            this.locale = locale;
            this.store = store;
            this.router = router;
            this.Resources = Resources;
            this.model = {
                ConnectionString: '',
                ParentColumn: '',
                PrimaryKeyColumn: '',
                SearchQuery: '',
                SelectQuery: ''
            };
            this.connectionFail = false;
            this.connectionSuccess = false;
            this.unsubscribe = new rxjs_1.Subject();
            this.chartId$ = this.store.pipe(store_1.select(fromRoot.getChartId));
            this.chartId$.pipe(operators_1.takeUntil(this.unsubscribe), operators_1.filter(x => x !== '')).subscribe(x => {
                store.dispatch(create_actions_1.LoadDataSource({ chartId: x }));
                this.chartId = x;
            });
            this.dataSource$ = this.store.pipe(store_1.select(fromCreate.selectDataSource));
            this.dataSource$.pipe(operators_1.takeUntil(this.unsubscribe)).subscribe(x => {
                this.model = Object.assign({}, x);
            });
            this.hasConnectionTestFailed$ = this.store.pipe(store_1.select(fromCreate.selectHasConnectionTestFailed));
            this.hasConnectionTestSucceeded$ = this.store.pipe(store_1.select(fromCreate.selectHasConnectionTestSucceeded));
            this.store.pipe(store_1.select(fromCreate.selectSaveSqlSourceSuccess), operators_1.takeUntil(this.unsubscribe), operators_1.filter(x => x), operators_1.withLatestFrom(this.chartId$)).subscribe(([_, chartId]) => {
                this.router.navigate(['/chart', chartId]);
                this.store.dispatch(create_actions_1.ResetSaveStatus());
            });
        }
        ngOnInit() {
        }
        testConnection() {
            this.store.dispatch(create_actions_1.TestSqlConnection({ dataSource: this.model }));
        }
        save() {
            this.store.dispatch(create_actions_1.SaveSqlDataSource({ chartId: this.chartId, dataSource: this.model }));
        }
        ngOnDestroy() {
            this.unsubscribe.next();
            this.unsubscribe.complete();
        }
    }
    exports.SqlSourceComponent = SqlSourceComponent;
    SqlSourceComponent.ɵfac = function SqlSourceComponent_Factory(t) { return new (t || SqlSourceComponent)(i0.ɵɵdirectiveInject(angular_l10n_1.L10N_LOCALE), i0.ɵɵdirectiveInject(i1.Store), i0.ɵɵdirectiveInject(i2.Router)); };
    SqlSourceComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SqlSourceComponent, selectors: [["toc-sql-source"]], decls: 61, vars: 61, consts: [[1, "container"], ["name", "sqlForm", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "card"], [1, "section-heading"], [1, "suffix"], [1, "row", "horizontal-form"], [1, "col-3"], [1, "col-9"], ["type", "text", "required", "", "name", "connectionString", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "selectQuery", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "primaryKey", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "required", "", "name", "parentKey", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "searchQuery", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "form-group hidden alert alert-danger", 4, "ngIf"], ["class", "form-group hidden alert alert-success", 4, "ngIf"], [1, "row", "pull-right"], [1, "col-12"], ["type", "submit", 1, "btn", 3, "ngClass", "click"], ["type", "submit", 1, "btn", "btn-success"], [1, "clearfix"], [1, "form-group", "hidden", "alert", "alert-danger"], [1, "form-group", "hidden", "alert", "alert-success"]], template: function SqlSourceComponent_Template(rf, ctx) { if (rf & 1) {
            const _r1262 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "form", 1, 2);
            i0.ɵɵlistener("ngSubmit", function SqlSourceComponent_Template_form_ngSubmit_1_listener($event) { i0.ɵɵrestoreView(_r1262); const _r1259 = i0.ɵɵreference(2); return _r1259.form.valid && ctx.save(); });
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵelementStart(4, "div", 4);
            i0.ɵɵtext(5);
            i0.ɵɵpipe(6, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 5);
            i0.ɵɵtext(8);
            i0.ɵɵpipe(9, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "div", 6);
            i0.ɵɵelementStart(11, "div", 7);
            i0.ɵɵelementStart(12, "label");
            i0.ɵɵtext(13);
            i0.ɵɵpipe(14, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 8);
            i0.ɵɵelementStart(16, "input", 9);
            i0.ɵɵlistener("ngModelChange", function SqlSourceComponent_Template_input_ngModelChange_16_listener($event) { return ctx.model.ConnectionString = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div", 6);
            i0.ɵɵelementStart(18, "div", 7);
            i0.ɵɵelementStart(19, "label");
            i0.ɵɵtext(20);
            i0.ɵɵpipe(21, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "div", 8);
            i0.ɵɵelementStart(23, "input", 10);
            i0.ɵɵlistener("ngModelChange", function SqlSourceComponent_Template_input_ngModelChange_23_listener($event) { return ctx.model.SelectQuery = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "div", 6);
            i0.ɵɵelementStart(25, "div", 7);
            i0.ɵɵelementStart(26, "label");
            i0.ɵɵtext(27);
            i0.ɵɵpipe(28, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "div", 8);
            i0.ɵɵelementStart(30, "input", 11);
            i0.ɵɵlistener("ngModelChange", function SqlSourceComponent_Template_input_ngModelChange_30_listener($event) { return ctx.model.PrimaryKeyColumn = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "div", 6);
            i0.ɵɵelementStart(32, "div", 7);
            i0.ɵɵelementStart(33, "label");
            i0.ɵɵtext(34);
            i0.ɵɵpipe(35, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(36, "div", 8);
            i0.ɵɵelementStart(37, "input", 12);
            i0.ɵɵlistener("ngModelChange", function SqlSourceComponent_Template_input_ngModelChange_37_listener($event) { return ctx.model.ParentColumn = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "div", 6);
            i0.ɵɵelementStart(39, "div", 7);
            i0.ɵɵelementStart(40, "label");
            i0.ɵɵtext(41);
            i0.ɵɵpipe(42, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(43, "div", 8);
            i0.ɵɵelementStart(44, "input", 13);
            i0.ɵɵlistener("ngModelChange", function SqlSourceComponent_Template_input_ngModelChange_44_listener($event) { return ctx.model.SearchQuery = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(45, SqlSourceComponent_div_45_Template, 1, 0, "div", 14);
            i0.ɵɵtemplate(46, SqlSourceComponent_div_46_Template, 3, 4, "div", 15);
            i0.ɵɵelementStart(47, "div", 16);
            i0.ɵɵelementStart(48, "div", 17);
            i0.ɵɵelementStart(49, "button", 18);
            i0.ɵɵlistener("click", function SqlSourceComponent_Template_button_click_49_listener($event) { return ctx.testConnection(); });
            i0.ɵɵpipe(50, "async");
            i0.ɵɵpipe(51, "async");
            i0.ɵɵpipe(52, "async");
            i0.ɵɵpipe(53, "async");
            i0.ɵɵpipe(54, "async");
            i0.ɵɵtext(55);
            i0.ɵɵpipe(56, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(57, "button", 19);
            i0.ɵɵtext(58);
            i0.ɵɵpipe(59, "translate");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelement(60, "div", 20);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            const _r1259 = i0.ɵɵreference(2);
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("submitted", _r1259.submitted);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(6, 19, ctx.Resources.CreateChartStrings.SQL.Title2, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(9, 22, ctx.Resources.CreateChartStrings.SQL.TitleDesc, ctx.locale.language));
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(14, 25, ctx.Resources.Strings.TXT.ConnectionString, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.model.ConnectionString);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(21, 28, ctx.Resources.Strings.TXT.SELECTquery, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.model.SelectQuery);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(28, 31, ctx.Resources.Strings.TXT.PrimaryKeyColumn, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.model.PrimaryKeyColumn);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(35, 34, ctx.Resources.Strings.TXT.ParentColumn, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.model.ParentColumn);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(42, 37, ctx.Resources.Strings.TXT.SearchQuery, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.model.SearchQuery);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.connectionFail);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.connectionSuccess);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction4(56, _c0, !i0.ɵɵpipeBind1(50, 40, ctx.hasConnectionTestFailed$) && !i0.ɵɵpipeBind1(51, 42, ctx.hasConnectionTestSucceeded$), i0.ɵɵpipeBind1(52, 44, ctx.hasConnectionTestFailed$), i0.ɵɵpipeBind1(53, 46, ctx.hasConnectionTestSucceeded$), i0.ɵɵpipeBind1(54, 48, ctx.isTestingConnection$)));
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(56, 50, ctx.Resources.CreateChartStrings.SQL.TestConnection, ctx.locale.language));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(59, 53, ctx.Resources.Strings.BUTTON.SAVE, ctx.locale.language));
        } }, directives: [i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i4.NgIf, i4.NgClass], pipes: [i5.L10nTranslatePipe, i4.AsyncPipe], styles: ["form.submitted[_ngcontent-%COMP%]   .ng-valid[required][_ngcontent-%COMP%], form.submitted[_ngcontent-%COMP%]   .ng-valid.required[_ngcontent-%COMP%] {\n  border-left: 5px solid #42a948;\n  \n}\nform.submitted[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}\n.ng-invalid[_ngcontent-%COMP%]:not(form) {\n  border: 1px solid #ccc;\n  \n}\n.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(form) {\n  border-left: 5px solid #a94442;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlL2NvbXBvbmVudHMvQzpcXGRldlxcY2hhcnRcXFRlYW1PcmdDaGFydC5XZWJVSS5EaXJlY3RvcnlBcHBcXFRlYW1PcmdDaGFydC5XZWJVSS5EaXJlY3RvcnlBcHBcXGNsaWVudC9zcmNcXGFwcFxcY3JlYXRlXFxjb21wb25lbnRzXFxzcWwtc291cmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jcmVhdGUvY29tcG9uZW50cy9zcWwtc291cmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJOztFQUVJLDhCQUFBO0VBQWdDLFVBQUE7QUNDeEM7QURFSTtFQUNJLDhCQUFBO0VBQWdDLFFBQUE7QUNDeEM7QURHQTtFQUNJLHNCQUFBO0VBQXdCLFNBQUE7QUNDNUI7QURFQTtFQUNJLDhCQUFBO0VBQWdDLFFBQUE7QUNFcEMiLCJmaWxlIjoic3JjL2FwcC9jcmVhdGUvY29tcG9uZW50cy9zcWwtc291cmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybS5zdWJtaXR0ZWQge1xyXG4gICAgLm5nLXZhbGlkW3JlcXVpcmVkXSxcclxuICAgIC5uZy12YWxpZC5yZXF1aXJlZCB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJhOTQ4OyAvKiBncmVlbiAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5uZy1pbnZhbGlkOm5vdChmb3JtKSB7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cclxuICAgIH1cclxufVxyXG5cclxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIGdyZXkgKi9cclxufVxyXG5cclxuLm5nLWludmFsaWQubmctdG91Y2hlZDpub3QoZm9ybSkge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyOyAvKiByZWQgKi9cclxufVxyXG4iLCJmb3JtLnN1Ym1pdHRlZCAubmctdmFsaWRbcmVxdWlyZWRdLFxuZm9ybS5zdWJtaXR0ZWQgLm5nLXZhbGlkLnJlcXVpcmVkIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJhOTQ4O1xuICAvKiBncmVlbiAqL1xufVxuZm9ybS5zdWJtaXR0ZWQgLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xuICAvKiByZWQgKi9cbn1cblxuLm5nLWludmFsaWQ6bm90KGZvcm0pIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgLyogZ3JleSAqL1xufVxuXG4ubmctaW52YWxpZC5uZy10b3VjaGVkOm5vdChmb3JtKSB7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgI2E5NDQ0MjtcbiAgLyogcmVkICovXG59Il19 */"] });
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SqlSourceComponent, [{
            type: core_1.Component,
            args: [{
                    selector: 'toc-sql-source',
                    templateUrl: './sql-source.component.html',
                    styleUrls: ['./sql-source.component.scss']
                }]
        }], function () { return [{ type: undefined, decorators: [{
                    type: core_1.Inject,
                    args: [angular_l10n_1.L10N_LOCALE]
                }] }, { type: i1.Store }, { type: i2.Router }]; }, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/create/create-chart.service.ts":
/*!************************************************!*\
  !*** ./src/app/create/create-chart.service.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, http_1, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CreateChartService {
        constructor(http) {
            this.http = http;
        }
        createChart(model) {
            return this.http.post('/api/create/chart', model);
        }
        getDataSource(chartId) {
            return this.http.get(`/api/create/sql/${chartId}`);
        }
        saveSqlDataSource(chartId, model) {
            return this.http.post(`/api/create/sql/${chartId}`, model);
        }
        testSqlConnection(dataSource) {
            return this.http.post('/api/testconnection', dataSource);
        }
    }
    exports.CreateChartService = CreateChartService;
    CreateChartService.ɵfac = function CreateChartService_Factory(t) { return new (t || CreateChartService)(i0.ɵɵinject(i1.HttpClient)); };
    CreateChartService.ɵprov = i0.ɵɵdefineInjectable({ token: CreateChartService, factory: CreateChartService.ɵfac });
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CreateChartService, [{
            type: core_1.Injectable
        }], function () { return [{ type: i1.HttpClient }]; }, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/create/create-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/create/create-routing.module.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"), __webpack_require__(/*! ./components/create-chart.component */ "./src/app/create/components/create-chart.component.ts"), __webpack_require__(/*! ./components/sql-source.component */ "./src/app/create/components/sql-source.component.ts"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, router_1, create_chart_component_1, sql_source_component_1, i0, i1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const routes = [
        { path: '', component: create_chart_component_1.CreateChartComponent },
        { path: 'sql/:chartId', component: sql_source_component_1.SqlSourceComponent }
    ];
    class CreateRoutingModule {
    }
    exports.CreateRoutingModule = CreateRoutingModule;
    CreateRoutingModule.ɵmod = i0.ɵɵdefineNgModule({ type: CreateRoutingModule });
    CreateRoutingModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CreateRoutingModule_Factory(t) { return new (t || CreateRoutingModule)(); }, imports: [[router_1.RouterModule.forChild(routes)],
            router_1.RouterModule] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CreateRoutingModule, { imports: [i1.RouterModule], exports: [router_1.RouterModule] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CreateRoutingModule, [{
            type: core_1.NgModule,
            args: [{
                    imports: [router_1.RouterModule.forChild(routes)],
                    exports: [router_1.RouterModule]
                }]
        }], null, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/create/create.actions.ts":
/*!******************************************!*\
  !*** ./src/app/create/create.actions.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, store_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LoadDataSource = store_1.createAction('[Create] Load data source', store_1.props());
    exports.LoadDataSourceSuccess = store_1.createAction('[Create] Load data source success', store_1.props());
    exports.LoadDataSourceFailure = store_1.createAction('[Create] Load data source failure');
    exports.SaveSqlDataSource = store_1.createAction('[Create] Save SQL data source', store_1.props());
    exports.SaveSqlDataSourceSuccess = store_1.createAction('[Create] Save SQL data source success', store_1.props());
    exports.SaveSqlDataSourceFailure = store_1.createAction('[Create] Save SQL data source failure');
    exports.TestSqlConnection = store_1.createAction('[Create] Test sql connection', store_1.props());
    exports.TestSqlConnectionSuccess = store_1.createAction('[Create] Test sql connection success');
    exports.TestSqlConnectionFailure = store_1.createAction('[Create] Test sql connection failure');
    exports.ResetSaveStatus = store_1.createAction('[Create] Reset save status');
    exports.CreateChart = store_1.createAction('[Create] Create chart', store_1.props());
    exports.CreateChartSuccess = store_1.createAction('[Create] Create chart success', store_1.props());
    exports.CreateChartFailure = store_1.createAction('[Create] Create chart failure');
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/create/create.effects.ts":
/*!******************************************!*\
  !*** ./src/app/create/create.effects.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"), __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js"), __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js"), __webpack_require__(/*! ./create-chart.service */ "./src/app/create/create-chart.service.ts"), __webpack_require__(/*! ./create.actions */ "./src/app/create/create.actions.ts"), __webpack_require__(/*! ../shared/shared.actions */ "./src/app/shared/shared.actions.ts"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"), __webpack_require__(/*! ./create-chart.service */ "./src/app/create/create-chart.service.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, effects_1, rxjs_1, operators_1, create_chart_service_1, create_actions_1, shared_actions_1, i0, i1, i2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CreateEffects {
        constructor(actions$, createChartService) {
            this.actions$ = actions$;
            this.createChartService = createChartService;
            this.createChart$ = effects_1.createEffect(() => this.actions$.pipe(effects_1.ofType(create_actions_1.CreateChart), operators_1.switchMap(action => this.createChartService.createChart(action.model).pipe(operators_1.map(data => create_actions_1.CreateChartSuccess(data)))), operators_1.catchError(error => rxjs_1.of(create_actions_1.CreateChartFailure()))));
            this.loadDataSource$ = effects_1.createEffect(() => this.actions$.pipe(effects_1.ofType(create_actions_1.LoadDataSource), operators_1.switchMap(action => this.createChartService.getDataSource(action.chartId).pipe(operators_1.map(data => create_actions_1.LoadDataSourceSuccess({ dataSource: data })))), operators_1.catchError(error => rxjs_1.of(create_actions_1.LoadDataSourceFailure()))));
            this.saveSqlDataSource$ = effects_1.createEffect(() => this.actions$.pipe(effects_1.ofType(create_actions_1.SaveSqlDataSource), operators_1.switchMap(action => this.createChartService.saveSqlDataSource(action.chartId, action.dataSource).pipe(operators_1.mergeMap(data => [create_actions_1.SaveSqlDataSourceSuccess({ dataSource: data }), new shared_actions_1.ToastSuccess('Data source saved.')]))), operators_1.catchError(error => rxjs_1.of(create_actions_1.SaveSqlDataSourceFailure()).pipe(operators_1.mergeMap(x => [x, new shared_actions_1.ToastError('Could not save data source.')])))));
            this.testSqlConnnection$ = effects_1.createEffect(() => this.actions$.pipe(effects_1.ofType(create_actions_1.TestSqlConnection), operators_1.switchMap(action => this.createChartService.testSqlConnection(action.dataSource).pipe(operators_1.mergeMap(data => {
                if (data === 'OK') {
                    return [create_actions_1.TestSqlConnectionSuccess(), new shared_actions_1.ToastSuccess('Connection test succeeded.')];
                }
                else {
                    return [create_actions_1.TestSqlConnectionFailure(), new shared_actions_1.ToastError('Connection test failed.')];
                }
            }))), operators_1.catchError(error => rxjs_1.of(create_actions_1.TestSqlConnectionFailure()).pipe(operators_1.mergeMap(x => [x, new shared_actions_1.ToastError('Connection test failed on the server.')])))));
        }
    }
    exports.CreateEffects = CreateEffects;
    CreateEffects.ɵfac = function CreateEffects_Factory(t) { return new (t || CreateEffects)(i0.ɵɵinject(i1.Actions), i0.ɵɵinject(i2.CreateChartService)); };
    CreateEffects.ɵprov = i0.ɵɵdefineInjectable({ token: CreateEffects, factory: CreateEffects.ɵfac });
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CreateEffects, [{
            type: core_1.Injectable
        }], function () { return [{ type: i1.Actions }, { type: i2.CreateChartService }]; }, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/create/create.models.ts":
/*!*****************************************!*\
  !*** ./src/app/create/create.models.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.waadSourceDisabled = {
        title: 'CreateChartStrings.TXT.SourceTitleAD',
        desc: 'CreateChartStrings.TXT.SourceDescAD',
        imageUrl: '/Images/ux/dataSources/WAAD.png',
        warning: 'CreateChartStrings.ADWarning',
        warningLink: '/Tenant/SimpleConsent',
        errorLink: '/website/guides/aad-offline-error.cshtml',
        isEnabled: false,
        type: 5
    };
    exports.waadSource = {
        title: 'CreateChartStrings.TXT.SourceTitleAD',
        desc: 'CreateChartStrings.TXT.SourceDescAD',
        imageUrl: '/Images/ux/dataSources/WAAD.png',
        guideLink: '/website/guides/creating-from-aad.cshtml',
        guideLinkText: 'View our Getting Started guide for Azure Active Directory',
        isEnabled: true,
        type: 5
    };
    exports.upsSourceDisabled = {
        title: 'CreateChartStrings.TXT.SourceTitleUPS',
        desc: 'CreateChartStrings.TXT.SourceDescUPS',
        imageUrl: '/Images/ux/dataSources/SharePointUPS.png',
        isSharePointWarning: true,
        errorLink: '/website/guides/sharepoint-offline-error.cshtml',
        errorText: 'Why am I seeing this error message and how do I resolve it?',
        isEnabled: false,
        type: 7
    };
    exports.upsSource = {
        title: 'CreateChartStrings.TXT.SourceTitleUPS',
        desc: 'CreateChartStrings.TXT.SourceDescUPS',
        imageUrl: '/Images/ux/dataSources/SharePointUPS.png',
        guideLink: '/website/guides/creating-from-ups.cshtml',
        guideLinkText: 'View our Getting Started guide for SharePoint User Profile Service',
        isEnabled: true,
        type: 7
    };
    exports.spListSourceDisabled = {
        title: 'CreateChartStrings.TXT.SourceTitleSPList',
        desc: 'CreateChartStrings.TXT.SourceDescSPList',
        imageUrl: '/Images/ux/dataSources/SharePointList.png',
        isSharePointWarning: true,
        errorLink: '/website/guides/sharepoint-offline-error.cshtml',
        errorText: 'Why am I seeing this error message and how do I resolve it?',
        isEnabled: false,
        type: 6
    };
    exports.spListSource = {
        title: 'CreateChartStrings.TXT.SourceTitleSPList',
        desc: 'CreateChartStrings.TXT.SourceDescSPList',
        imageUrl: '/Images/ux/dataSources/SharePointList.png',
        guideLink: '/website/guides/creating-from-sharepoint-list.cshtml',
        guideLinkText: 'View our Getting Started guide for SharePoint List',
        isEnabled: true,
        type: 6
    };
    exports.sqlSource = {
        title: 'CreateChartStrings.TXT.SourceTitleSQL',
        desc: 'CreateChartStrings.TXT.SourceDescSQL',
        imageUrl: '/Images/ux/dataSources/SQLServer.png',
        guideLink: '/website/guides/creating-from-database.cshtml',
        guideLinkText: 'View our Getting Started guide for the SQL server data source',
        isEnabled: true,
        type: 2
    };
    exports.excelSource = {
        title: 'CreateChartStrings.TXT.SourceTitleExcel',
        desc: 'CreateChartStrings.TXT.SourceDescExcel',
        imageUrl: '/Images/ux/dataSources/Excel.png',
        isEnabled: true,
        type: 13
    };
    exports.manualSource = {
        title: 'CreateChartStrings.TXT.SourceTitleManual',
        desc: 'CreateChartStrings.TXT.SourceDescManual',
        imageUrl: '/Images/ux/dataSources/manualChart.png',
        guideLink: '/website/guides/manually-drawing-an-orgchart.cshtml',
        guideLinkText: 'View our Getting Started guide for the Manual data source',
        isEnabled: true,
        type: 13
    };
    exports.azureTableSource = {
        title: 'Azure Table',
        desc: 'Create chart from Azure Table Storage',
        imageUrl: '/Images/ux/dataSources/AzureTable.png',
        guideLink: '/website/guides/creating-an-orgchart-from-azuretable.cshtml',
        guideLinkText: 'View our guide for the Azure Table source',
        isEnabled: true,
        type: 12
    };
    exports.demoSource = {
        title: 'CreateChartStrings.TXT.SourceTitleDemo',
        desc: 'CreateChartStrings.TXT.SourceDescDemo',
        imageUrl: '/Images/ux/dataSources/demochart.png',
        isEnabled: true,
        type: 8
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/create/create.module.ts":
/*!*****************************************!*\
  !*** ./src/app/create/create.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"), __webpack_require__(/*! ./create-routing.module */ "./src/app/create/create-routing.module.ts"), __webpack_require__(/*! ./components/create-chart.component */ "./src/app/create/components/create-chart.component.ts"), __webpack_require__(/*! angular-l10n */ "./node_modules/angular-l10n/__ivy_ngcc__/fesm2015/angular-l10n.js"), __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"), __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(/*! ./create.reducers */ "./src/app/create/create.reducers.ts"), __webpack_require__(/*! ./components/sql-source.component */ "./src/app/create/components/sql-source.component.ts"), __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js"), __webpack_require__(/*! ./create.effects */ "./src/app/create/create.effects.ts"), __webpack_require__(/*! ./create-chart.service */ "./src/app/create/create-chart.service.ts"), __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"), __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, core_1, common_1, create_routing_module_1, create_chart_component_1, angular_l10n_1, forms_1, store_1, fromCreate, sql_source_component_1, effects_1, create_effects_1, create_chart_service_1, i0, i1, i2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CreateModule {
    }
    exports.CreateModule = CreateModule;
    CreateModule.ɵmod = i0.ɵɵdefineNgModule({ type: CreateModule });
    CreateModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CreateModule_Factory(t) { return new (t || CreateModule)(); }, providers: [
            create_chart_service_1.CreateChartService
        ], imports: [[
                forms_1.FormsModule,
                angular_l10n_1.L10nTranslationModule,
                common_1.CommonModule,
                create_routing_module_1.CreateRoutingModule,
                store_1.StoreModule.forFeature(fromCreate.featureKey, fromCreate.reducer),
                effects_1.EffectsModule.forFeature([create_effects_1.CreateEffects])
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CreateModule, { declarations: [create_chart_component_1.CreateChartComponent, sql_source_component_1.SqlSourceComponent], imports: [forms_1.FormsModule,
            angular_l10n_1.L10nTranslationModule,
            common_1.CommonModule,
            create_routing_module_1.CreateRoutingModule, i1.StoreFeatureModule, i2.EffectsFeatureModule] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CreateModule, [{
            type: core_1.NgModule,
            args: [{
                    declarations: [create_chart_component_1.CreateChartComponent, sql_source_component_1.SqlSourceComponent],
                    imports: [
                        forms_1.FormsModule,
                        angular_l10n_1.L10nTranslationModule,
                        common_1.CommonModule,
                        create_routing_module_1.CreateRoutingModule,
                        store_1.StoreModule.forFeature(fromCreate.featureKey, fromCreate.reducer),
                        effects_1.EffectsModule.forFeature([create_effects_1.CreateEffects])
                    ],
                    providers: [
                        create_chart_service_1.CreateChartService
                    ]
                }]
        }], null, null); })();
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./src/app/create/create.reducers.ts":
/*!*******************************************!*\
  !*** ./src/app/create/create.reducers.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js"), __webpack_require__(/*! ./create.actions */ "./src/app/create/create.actions.ts")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, store_1, create_actions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.featureKey = 'create';
    exports.initialState = {
        dataSource: null,
        isTestingConnection: false,
        hasConnectionTestFailed: false,
        hasConnectionTestSucceeded: false,
        saveSqlSourceSuccess: false,
        createdChart: null,
        isCreating: false
    };
    const createChartReducer = store_1.createReducer(exports.initialState, store_1.on(create_actions_1.LoadDataSourceSuccess, (state, action) => (Object.assign(Object.assign({}, state), { dataSource: action.dataSource, hasConnectionTestFailed: false, hasConnectionTestSucceeded: false }))), store_1.on(create_actions_1.TestSqlConnection, (state) => (Object.assign(Object.assign({}, state), { isTestingConnection: true }))), store_1.on(create_actions_1.TestSqlConnectionSuccess, (state) => (Object.assign(Object.assign({}, state), { isTestingConnection: true, hasConnectionTestFailed: false, hasConnectionTestSucceeded: true }))), store_1.on(create_actions_1.TestSqlConnectionFailure, (state) => (Object.assign(Object.assign({}, state), { isTestingConnection: true, hasConnectionTestFailed: true, hasConnectionTestSucceeded: false }))), store_1.on(create_actions_1.SaveSqlDataSourceSuccess, (state) => (Object.assign(Object.assign({}, state), { saveSqlSourceSuccess: true }))), store_1.on(create_actions_1.CreateChart, (state) => (Object.assign(Object.assign({}, state), { isCreating: true }))), store_1.on(create_actions_1.CreateChartSuccess, (state, action) => (Object.assign(Object.assign({}, state), { createdChart: action }))), store_1.on(create_actions_1.CreateChartFailure, (state) => (Object.assign(Object.assign({}, state), { isCreating: false }))), store_1.on(create_actions_1.ResetSaveStatus, (state) => (Object.assign(Object.assign({}, state), { saveSqlSourceSuccess: false, createdChart: null, isCreating: false }))));
    function reducer(state, action) {
        return createChartReducer(state, action);
    }
    exports.reducer = reducer;
    exports.selectCreate = store_1.createFeatureSelector(exports.featureKey);
    exports.selectIsTestingConnection = store_1.createSelector(exports.selectCreate, state => state.isTestingConnection);
    exports.selectDataSource = store_1.createSelector(exports.selectCreate, state => state.dataSource);
    exports.selectHasConnectionTestFailed = store_1.createSelector(exports.selectCreate, state => state.hasConnectionTestFailed);
    exports.selectHasConnectionTestSucceeded = store_1.createSelector(exports.selectCreate, state => state.hasConnectionTestSucceeded);
    exports.selectSaveSqlSourceSuccess = store_1.createSelector(exports.selectCreate, s => s.saveSqlSourceSuccess);
    exports.selectCreatedChart = store_1.createSelector(exports.selectCreate, s => s.createdChart);
    exports.selectIsCreating = store_1.createSelector(exports.selectCreate, s => s.isCreating);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ })

}]);
//# sourceMappingURL=1-es2015.js.map