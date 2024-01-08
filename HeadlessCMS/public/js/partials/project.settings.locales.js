"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["project.settings.locales"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Button.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Button.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    type: {
      type: String,
      "default": 'submit'
    },
    color: {
      type: String,
      "default": 'gray-800'
    },
    hover: {
      type: String,
      "default": null
    },
    padding: {
      type: String,
      "default": null
    },
    disabled: {
      type: Boolean,
      "default": false
    }
  },
  computed: {
    bgColor: function bgColor() {
      var cls = '';
      if (this.disabled) {
        cls = 'bg-indigo-200 cursor-not-allowed';
      } else {
        var bgcolor = 'bg-' + this.color;
        var arr = this.color.split('-');
        var hover = this.hover == null ? 'bg-' + arr[0] + '-' + (parseInt(arr[1]) + 100) : 'bg-' + this.hover;
        var active = 'bg-' + arr[0] + '-' + (parseInt(arr[1]) + 100);
        var focus = 'border-' + arr[0] + '-' + (parseInt(arr[1]) - 100);
        var focusShadow = 'shadow-outline-' + arr[0];
        cls = bgcolor + ' hover:' + hover + ' active:' + active;
      }
      if (this.padding === null) cls += ' p-3 ';else {
        cls += ' ' + this.padding + ' ';
      }
      return cls;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Locales.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Locales.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI_Button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../UI/Button.vue */ "./resources/js/UI/Button.vue");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../locales */ "./resources/js/locales.json");
/* harmony import */ var _Sections_ProjectHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_Sections_/ProjectHeader.vue */ "./resources/js/pages/Projects/_Sections_/ProjectHeader.vue");
/* harmony import */ var _Sections_SettingsNav_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Sections_/SettingsNav.vue */ "./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ProjectHeader: _Sections_ProjectHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SettingsNav: _Sections_SettingsNav_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    UiButton: _UI_Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      project: {},
      locales: [],
      addLocaleData: null
    };
  },
  methods: {
    getProject: function getProject() {
      var _this = this;
      axios.get('/admin/projects/settings/locales/' + this.$route.params.project_id).then(function (response) {
        _this.project = response.data;
        if (_this.project.locales !== null) _this.project.locales = response.data.locales.split(',');
      });
    },
    getLocale: function getLocale(locale) {
      return _locales__WEBPACK_IMPORTED_MODULE_1__[locale];
    },
    addLocale: function addLocale() {
      var _this2 = this;
      axios.post('/admin/projects/settings/locales/add/' + this.$route.params.project_id, {
        locale: this.addLocaleData
      }).then(function (response) {
        _this2.$toast.success('Locale added to the project.');
        _this2.getProject();
        _this2.addLocaleData = null;
      }, function (error) {
        if (error.response.status == 422) {
          _this2.$toast.error('Locale has already added.');
        }
      });
    },
    setDefaultLocale: function setDefaultLocale(locale) {
      var _this3 = this;
      this.$swal.fire({
        title: 'Are you sure',
        text: "you want to change the default locale for this project?"
      }).then(function (result) {
        if (result.value) {
          axios.post('/admin/projects/settings/locales/change-default-locale/' + _this3.project.id, {
            locale: locale
          }).then(function (response) {
            _this3.$toast.success('Default locale has been changed.');
            _this3.getProject();
          });
        }
      });
    },
    deleteLocale: function deleteLocale(locale) {
      var _this4 = this;
      this.$swal.fire({
        title: 'Are you sure',
        text: "you want to delete this locale?"
      }).then(function (result) {
        if (result.value) {
          axios.post('/admin/projects/settings/locales/delete-locale/' + _this4.project.id, {
            locale: locale
          }).then(function (response) {
            _this4.$toast.success('Locale deleted.');
            _this4.getProject();
          }, function (error) {
            if (error.response.status == 422) {
              _this4.$toast.error('Default locale can not be deleted.');
            }
          });
        }
      });
    }
  },
  mounted: function mounted() {
    var _this5 = this;
    this.getProject();
    Object.entries(_locales__WEBPACK_IMPORTED_MODULE_1__).forEach(function (item, key) {
      _this5.locales.push({
        id: item[0],
        name: item[1]
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkrole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../checkrole */ "./resources/js/checkrole.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['project'],
  methods: {
    checkRole: _checkrole__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _checkrole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../checkrole */ "./resources/js/checkrole.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['project'],
  methods: {
    checkRole: _checkrole__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Button.vue?vue&type=template&id=923437c2":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Button.vue?vue&type=template&id=923437c2 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "items-center border border-transparent rounded-sm text-sm text-white focus:outline-none transition ease-in-out duration-150",
    "class": _vm.bgColor,
    attrs: {
      type: _vm.type,
      disabled: _vm.disabled
    }
  }, [_vm._t("default")], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Locales.vue?vue&type=template&id=5d204629":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Locales.vue?vue&type=template&id=5d204629 ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "app__project-locales h-full relative"
  }, [_c("project-header", {
    staticClass: "bg-white",
    attrs: {
      project: _vm.project
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "flex h-full pt-20 overflow-hidden"
  }, [_c("div", {
    staticClass: "w-3/12 h-full bg-white overflow-x-hidden"
  }, [_c("settings-nav", {
    attrs: {
      project: _vm.project
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-9/12 overflow-x-hidden"
  }, [_c("div", {
    staticClass: "p-4"
  }, [_c("h4", {
    staticClass: "mb-2 p-2 font-bold text-xl"
  }, [_vm._v("Localization")]), _vm._v(" "), _c("div", {
    staticClass: "w-full bg-white mt-2 rounded-md p-4"
  }, [_c("div", [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "overflow-x-auto mt-1 flex rounded-sm"
  }, [_c("table", {
    staticClass: "min-w-full divide-y divide-gray-200 border"
  }, [_c("tbody", {
    staticClass: "bg-white divide-y divide-gray-200"
  }, _vm._l(_vm.project.locales, function (locale) {
    return _c("tr", {
      key: locale
    }, [_c("td", {
      staticClass: "px-6 py-3 text-sm align-top"
    }, [_vm._v("\n                                            " + _vm._s(locale) + "\n                                        ")]), _vm._v(" "), _c("td", {
      staticClass: "px-6 py-3 text-sm align-top"
    }, [_vm._v("\n                                            " + _vm._s(_vm.getLocale(locale)) + "\n                                        ")]), _vm._v(" "), _c("td", {
      staticClass: "px-6 py-3 text-sm w-px text-center font-bold whitespace-nowrap"
    }, [locale == _vm.project.default_locale ? _c("div", [_vm._v("Default")]) : _c("div", {
      staticClass: "ml-2 cursor-pointer text-indigo-500 py-1 px-3 rounded-sm hover:bg-gray-100",
      on: {
        click: function click($event) {
          return _vm.setDefaultLocale(locale);
        }
      }
    }, [_vm._v("Set as default")])]), _vm._v(" "), _c("td", {
      staticClass: "px-6 py-3 text-sm w-px text-center"
    }, [locale != _vm.project.default_locale ? _c("div", {
      staticClass: "ml-2 cursor-pointer text-red-500 py-1 px-3 rounded-sm hover:bg-gray-100",
      on: {
        click: function click($event) {
          return _vm.deleteLocale(locale);
        }
      }
    }, [_c("i", {
      staticClass: "fa fa-trash-alt"
    })]) : _vm._e()])]);
  }), 0)])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-10"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "flex"
  }, [_c("div", {
    staticClass: "w-1/2 mr-2"
  }, [_c("v-select", {
    staticClass: "v-select",
    attrs: {
      options: _vm.locales,
      "get-option-key": function getOptionKey(o) {
        return o.id;
      },
      "get-option-label": function getOptionLabel(o) {
        return o.id + " - " + o.name;
      },
      reduce: function reduce(o) {
        return o.id;
      },
      clearable: false,
      value: function value(option) {
        return option[0];
      },
      placeholder: "Select Locale"
    },
    model: {
      value: _vm.addLocaleData,
      callback: function callback($$v) {
        _vm.addLocaleData = $$v;
      },
      expression: "addLocaleData"
    }
  })], 1), _vm._v(" "), _c("ui-button", {
    attrs: {
      color: "indigo-500"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.addLocale.apply(null, arguments);
      }
    }
  }, [_vm._v("+ Add")])], 1)])])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "w-full flex justify-between"
  }, [_c("div", {
    staticClass: "text-lg font-bold"
  }, [_vm._v("Available Locales")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "w-full flex justify-between"
  }, [_c("div", {
    staticClass: "text-lg font-bold"
  }, [_vm._v("Add a Locale")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=template&id=518514e3":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=template&id=518514e3 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "app__project-nav p-4 bg-white"
  }, [_c("h4", {
    staticClass: "mb-2 p-2 font-bold text-lg"
  }, [_vm._v("Settings")]), _vm._v(" "), _c("ul", [_c("li", {
    staticClass: "mb-2"
  }, [typeof _vm.project.id !== "undefined" ? _c("router-link", {
    staticClass: "block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",
    attrs: {
      to: {
        name: "projects.settings",
        params: {
          project_id: _vm.project.id
        }
      }
    }
  }, [_vm._v("Project")]) : _vm._e()], 1), _vm._v(" "), _c("li", {
    staticClass: "mb-2"
  }, [typeof _vm.project.id !== "undefined" && _vm.checkRole(["super_admin"]) ? _c("router-link", {
    staticClass: "block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",
    attrs: {
      to: {
        name: "projects.settings.locales",
        params: {
          project_id: _vm.project.id
        }
      }
    }
  }, [_vm._v("Localization")]) : _vm._e()], 1), _vm._v(" "), _c("li", {
    staticClass: "mb-2"
  }, [typeof _vm.project.id !== "undefined" && _vm.checkRole(["super_admin"]) ? _c("router-link", {
    staticClass: "block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",
    attrs: {
      to: {
        name: "projects.settings.users",
        params: {
          project_id: _vm.project.id
        }
      }
    }
  }, [_vm._v("Users & Roles")]) : _vm._e()], 1), _vm._v(" "), _c("li", {
    staticClass: "mb-2"
  }, [typeof _vm.project.id !== "undefined" && _vm.checkRole(["super_admin"]) ? _c("router-link", {
    staticClass: "block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",
    attrs: {
      to: {
        name: "projects.settings.api",
        params: {
          project_id: _vm.project.id
        }
      }
    }
  }, [_vm._v("API Access")]) : _vm._e()], 1), _vm._v(" "), _c("li", {
    staticClass: "mb-2"
  }, [typeof _vm.project.id !== "undefined" && _vm.checkRole(["super_admin"]) ? _c("router-link", {
    staticClass: "block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",
    attrs: {
      to: {
        name: "projects.settings.webhooks",
        params: {
          project_id: _vm.project.id
        }
      }
    }
  }, [_vm._v("Webhooks")]) : _vm._e()], 1)])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=template&id=a42c32b6":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=template&id=a42c32b6 ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "app__project-common-header fixed w-full flex p-4 border-b bg-white"
  }, [_c("span", {
    staticClass: "flex items-center pr-4"
  }, [_c("router-link", {
    attrs: {
      to: {
        name: "projects"
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-arrow-left"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "w-full"
  }, [_c("div", {
    staticClass: "text-xl font-bold"
  }, [_c("router-link", {
    attrs: {
      to: {
        name: "projects.index",
        params: {
          project_id: _vm.project.id
        }
      }
    }
  }, [_vm._v("\n                Project: " + _vm._s(_vm.project.name) + "\n            ")])], 1), _vm._v(" "), _c("div", {
    staticClass: "text-sm"
  }, [_vm._v(_vm._s(_vm.project.description))])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/UI/Button.vue":
/*!************************************!*\
  !*** ./resources/js/UI/Button.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Button_vue_vue_type_template_id_923437c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button.vue?vue&type=template&id=923437c2 */ "./resources/js/UI/Button.vue?vue&type=template&id=923437c2");
/* harmony import */ var _Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.vue?vue&type=script&lang=js */ "./resources/js/UI/Button.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Button_vue_vue_type_template_id_923437c2__WEBPACK_IMPORTED_MODULE_0__.render,
  _Button_vue_vue_type_template_id_923437c2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/UI/Button.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Projects/Settings/Locales.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/Locales.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Locales_vue_vue_type_template_id_5d204629__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Locales.vue?vue&type=template&id=5d204629 */ "./resources/js/pages/Projects/Settings/Locales.vue?vue&type=template&id=5d204629");
/* harmony import */ var _Locales_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Locales.vue?vue&type=script&lang=js */ "./resources/js/pages/Projects/Settings/Locales.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Locales_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Locales_vue_vue_type_template_id_5d204629__WEBPACK_IMPORTED_MODULE_0__.render,
  _Locales_vue_vue_type_template_id_5d204629__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Projects/Settings/Locales.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SettingsNav_vue_vue_type_template_id_518514e3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingsNav.vue?vue&type=template&id=518514e3 */ "./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=template&id=518514e3");
/* harmony import */ var _SettingsNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingsNav.vue?vue&type=script&lang=js */ "./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SettingsNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SettingsNav_vue_vue_type_template_id_518514e3__WEBPACK_IMPORTED_MODULE_0__.render,
  _SettingsNav_vue_vue_type_template_id_518514e3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Projects/_Sections_/ProjectHeader.vue":
/*!******************************************************************!*\
  !*** ./resources/js/pages/Projects/_Sections_/ProjectHeader.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectHeader_vue_vue_type_template_id_a42c32b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectHeader.vue?vue&type=template&id=a42c32b6 */ "./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=template&id=a42c32b6");
/* harmony import */ var _ProjectHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectHeader.vue?vue&type=script&lang=js */ "./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectHeader_vue_vue_type_template_id_a42c32b6__WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectHeader_vue_vue_type_template_id_a42c32b6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Projects/_Sections_/ProjectHeader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/UI/Button.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./resources/js/UI/Button.vue?vue&type=script&lang=js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Button.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Projects/Settings/Locales.vue?vue&type=script&lang=js":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/Locales.vue?vue&type=script&lang=js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Locales_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Locales.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Locales.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Locales_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsNav.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsNav_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=script&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=script&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectHeader.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/UI/Button.vue?vue&type=template&id=923437c2":
/*!******************************************************************!*\
  !*** ./resources/js/UI/Button.vue?vue&type=template&id=923437c2 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_923437c2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_923437c2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_923437c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=template&id=923437c2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Button.vue?vue&type=template&id=923437c2");


/***/ }),

/***/ "./resources/js/pages/Projects/Settings/Locales.vue?vue&type=template&id=5d204629":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/Locales.vue?vue&type=template&id=5d204629 ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Locales_vue_vue_type_template_id_5d204629__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Locales_vue_vue_type_template_id_5d204629__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Locales_vue_vue_type_template_id_5d204629__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Locales.vue?vue&type=template&id=5d204629 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Locales.vue?vue&type=template&id=5d204629");


/***/ }),

/***/ "./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=template&id=518514e3":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=template&id=518514e3 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsNav_vue_vue_type_template_id_518514e3__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsNav_vue_vue_type_template_id_518514e3__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SettingsNav_vue_vue_type_template_id_518514e3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SettingsNav.vue?vue&type=template&id=518514e3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=template&id=518514e3");


/***/ }),

/***/ "./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=template&id=a42c32b6":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=template&id=a42c32b6 ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_template_id_a42c32b6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_template_id_a42c32b6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_template_id_a42c32b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectHeader.vue?vue&type=template&id=a42c32b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=template&id=a42c32b6");


/***/ }),

/***/ "./resources/js/locales.json":
/*!***********************************!*\
  !*** ./resources/js/locales.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"af":"Afrikaans","af_NA":"Afrikaans (Namibia)","af_ZA":"Afrikaans (South Africa)","ak":"Akan","ak_GH":"Akan (Ghana)","sq":"Albanian","sq_AL":"Albanian (Albania)","sq_XK":"Albanian (Kosovo)","sq_MK":"Albanian (Macedonia)","am":"Amharic","am_ET":"Amharic (Ethiopia)","ar":"Arabic","ar_DZ":"Arabic (Algeria)","ar_BH":"Arabic (Bahrain)","ar_TD":"Arabic (Chad)","ar_KM":"Arabic (Comoros)","ar_DJ":"Arabic (Djibouti)","ar_EG":"Arabic (Egypt)","ar_ER":"Arabic (Eritrea)","ar_IQ":"Arabic (Iraq)","ar_IL":"Arabic (Israel)","ar_JO":"Arabic (Jordan)","ar_KW":"Arabic (Kuwait)","ar_LB":"Arabic (Lebanon)","ar_LY":"Arabic (Libya)","ar_MR":"Arabic (Mauritania)","ar_MA":"Arabic (Morocco)","ar_OM":"Arabic (Oman)","ar_PS":"Arabic (Palestinian Territories)","ar_QA":"Arabic (Qatar)","ar_SA":"Arabic (Saudi Arabia)","ar_SO":"Arabic (Somalia)","ar_SS":"Arabic (South Sudan)","ar_SD":"Arabic (Sudan)","ar_SY":"Arabic (Syria)","ar_TN":"Arabic (Tunisia)","ar_AE":"Arabic (United Arab Emirates)","ar_EH":"Arabic (Western Sahara)","ar_YE":"Arabic (Yemen)","hy":"Armenian","hy_AM":"Armenian (Armenia)","as":"Assamese","as_IN":"Assamese (India)","az":"Azerbaijani","az_AZ":"Azerbaijani (Azerbaijan)","az_Cyrl_AZ":"Azerbaijani (Cyrillic, Azerbaijan)","az_Cyrl":"Azerbaijani (Cyrillic)","az_Latn_AZ":"Azerbaijani (Latin, Azerbaijan)","az_Latn":"Azerbaijani (Latin)","bm":"Bambara","bm_Latn_ML":"Bambara (Latin, Mali)","bm_Latn":"Bambara (Latin)","eu":"Basque","eu_ES":"Basque (Spain)","be":"Belarusian","be_BY":"Belarusian (Belarus)","bn":"Bengali","bn_BD":"Bengali (Bangladesh)","bn_IN":"Bengali (India)","bs":"Bosnian","bs_BA":"Bosnian (Bosnia & Herzegovina)","bs_Cyrl_BA":"Bosnian (Cyrillic, Bosnia & Herzegovina)","bs_Cyrl":"Bosnian (Cyrillic)","bs_Latn_BA":"Bosnian (Latin, Bosnia & Herzegovina)","bs_Latn":"Bosnian (Latin)","br":"Breton","br_FR":"Breton (France)","bg":"Bulgarian","bg_BG":"Bulgarian (Bulgaria)","my":"Burmese","my_MM":"Burmese (Myanmar (Burma))","ca":"Catalan","ca_AD":"Catalan (Andorra)","ca_FR":"Catalan (France)","ca_IT":"Catalan (Italy)","ca_ES":"Catalan (Spain)","zh":"Chinese","zh_CN":"Chinese (China)","zh_HK":"Chinese (Hong Kong SAR China)","zh_MO":"Chinese (Macau SAR China)","zh_Hans_CN":"Chinese (Simplified, China)","zh_Hans_HK":"Chinese (Simplified, Hong Kong SAR China)","zh_Hans_MO":"Chinese (Simplified, Macau SAR China)","zh_Hans_SG":"Chinese (Simplified, Singapore)","zh_Hans":"Chinese (Simplified)","zh_SG":"Chinese (Singapore)","zh_TW":"Chinese (Taiwan)","zh_Hant_HK":"Chinese (Traditional, Hong Kong SAR China)","zh_Hant_MO":"Chinese (Traditional, Macau SAR China)","zh_Hant_TW":"Chinese (Traditional, Taiwan)","zh_Hant":"Chinese (Traditional)","kw":"Cornish","kw_GB":"Cornish (United Kingdom)","hr":"Croatian","hr_BA":"Croatian (Bosnia & Herzegovina)","hr_HR":"Croatian (Croatia)","cs":"Czech","cs_CZ":"Czech (Czech Republic)","da":"Danish","da_DK":"Danish (Denmark)","da_GL":"Danish (Greenland)","nl":"Dutch","nl_AW":"Dutch (Aruba)","nl_BE":"Dutch (Belgium)","nl_BQ":"Dutch (Caribbean Netherlands)","nl_CW":"Dutch (Curaçao)","nl_NL":"Dutch (Netherlands)","nl_SX":"Dutch (Sint Maarten)","nl_SR":"Dutch (Suriname)","dz":"Dzongkha","dz_BT":"Dzongkha (Bhutan)","en":"English","en_AS":"English (American Samoa)","en_AI":"English (Anguilla)","en_AG":"English (Antigua & Barbuda)","en_AU":"English (Australia)","en_BS":"English (Bahamas)","en_BB":"English (Barbados)","en_BE":"English (Belgium)","en_BZ":"English (Belize)","en_BM":"English (Bermuda)","en_BW":"English (Botswana)","en_IO":"English (British Indian Ocean Territory)","en_VG":"English (British Virgin Islands)","en_CM":"English (Cameroon)","en_CA":"English (Canada)","en_KY":"English (Cayman Islands)","en_CX":"English (Christmas Island)","en_CC":"English (Cocos (Keeling) Islands)","en_CK":"English (Cook Islands)","en_DG":"English (Diego Garcia)","en_DM":"English (Dominica)","en_ER":"English (Eritrea)","en_FK":"English (Falkland Islands)","en_FJ":"English (Fiji)","en_GM":"English (Gambia)","en_GH":"English (Ghana)","en_GI":"English (Gibraltar)","en_GD":"English (Grenada)","en_GU":"English (Guam)","en_GG":"English (Guernsey)","en_GY":"English (Guyana)","en_HK":"English (Hong Kong SAR China)","en_IN":"English (India)","en_IE":"English (Ireland)","en_IM":"English (Isle of Man)","en_JM":"English (Jamaica)","en_JE":"English (Jersey)","en_KE":"English (Kenya)","en_KI":"English (Kiribati)","en_LS":"English (Lesotho)","en_LR":"English (Liberia)","en_MO":"English (Macau SAR China)","en_MG":"English (Madagascar)","en_MW":"English (Malawi)","en_MY":"English (Malaysia)","en_MT":"English (Malta)","en_MH":"English (Marshall Islands)","en_MU":"English (Mauritius)","en_FM":"English (Micronesia)","en_MS":"English (Montserrat)","en_NA":"English (Namibia)","en_NR":"English (Nauru)","en_NZ":"English (New Zealand)","en_NG":"English (Nigeria)","en_NU":"English (Niue)","en_NF":"English (Norfolk Island)","en_MP":"English (Northern Mariana Islands)","en_PK":"English (Pakistan)","en_PW":"English (Palau)","en_PG":"English (Papua New Guinea)","en_PH":"English (Philippines)","en_PN":"English (Pitcairn Islands)","en_PR":"English (Puerto Rico)","en_RW":"English (Rwanda)","en_WS":"English (Samoa)","en_SC":"English (Seychelles)","en_SL":"English (Sierra Leone)","en_SG":"English (Singapore)","en_SX":"English (Sint Maarten)","en_SB":"English (Solomon Islands)","en_ZA":"English (South Africa)","en_SS":"English (South Sudan)","en_SH":"English (St. Helena)","en_KN":"English (St. Kitts & Nevis)","en_LC":"English (St. Lucia)","en_VC":"English (St. Vincent & Grenadines)","en_SD":"English (Sudan)","en_SZ":"English (Swaziland)","en_TZ":"English (Tanzania)","en_TK":"English (Tokelau)","en_TO":"English (Tonga)","en_TT":"English (Trinidad & Tobago)","en_TC":"English (Turks & Caicos Islands)","en_TV":"English (Tuvalu)","en_UM":"English (U.S. Outlying Islands)","en_VI":"English (U.S. Virgin Islands)","en_UG":"English (Uganda)","en_GB":"English (United Kingdom)","en_US":"English (United States)","en_VU":"English (Vanuatu)","en_ZM":"English (Zambia)","en_ZW":"English (Zimbabwe)","eo":"Esperanto","et":"Estonian","et_EE":"Estonian (Estonia)","ee":"Ewe","ee_GH":"Ewe (Ghana)","ee_TG":"Ewe (Togo)","fo":"Faroese","fo_FO":"Faroese (Faroe Islands)","fi":"Finnish","fi_FI":"Finnish (Finland)","fr":"French","fr_DZ":"French (Algeria)","fr_BE":"French (Belgium)","fr_BJ":"French (Benin)","fr_BF":"French (Burkina Faso)","fr_BI":"French (Burundi)","fr_CM":"French (Cameroon)","fr_CA":"French (Canada)","fr_CF":"French (Central African Republic)","fr_TD":"French (Chad)","fr_KM":"French (Comoros)","fr_CG":"French (Congo - Brazzaville)","fr_CD":"French (Congo - Kinshasa)","fr_CI":"French (Côte d’Ivoire)","fr_DJ":"French (Djibouti)","fr_GQ":"French (Equatorial Guinea)","fr_FR":"French (France)","fr_GF":"French (French Guiana)","fr_PF":"French (French Polynesia)","fr_GA":"French (Gabon)","fr_GP":"French (Guadeloupe)","fr_GN":"French (Guinea)","fr_HT":"French (Haiti)","fr_LU":"French (Luxembourg)","fr_MG":"French (Madagascar)","fr_ML":"French (Mali)","fr_MQ":"French (Martinique)","fr_MR":"French (Mauritania)","fr_MU":"French (Mauritius)","fr_YT":"French (Mayotte)","fr_MC":"French (Monaco)","fr_MA":"French (Morocco)","fr_NC":"French (New Caledonia)","fr_NE":"French (Niger)","fr_RE":"French (Réunion)","fr_RW":"French (Rwanda)","fr_SN":"French (Senegal)","fr_SC":"French (Seychelles)","fr_BL":"French (St. Barthélemy)","fr_MF":"French (St. Martin)","fr_PM":"French (St. Pierre & Miquelon)","fr_CH":"French (Switzerland)","fr_SY":"French (Syria)","fr_TG":"French (Togo)","fr_TN":"French (Tunisia)","fr_VU":"French (Vanuatu)","fr_WF":"French (Wallis & Futuna)","ff":"Fulah","ff_CM":"Fulah (Cameroon)","ff_GN":"Fulah (Guinea)","ff_MR":"Fulah (Mauritania)","ff_SN":"Fulah (Senegal)","gl":"Galician","gl_ES":"Galician (Spain)","lg":"Ganda","lg_UG":"Ganda (Uganda)","ka":"Georgian","ka_GE":"Georgian (Georgia)","de":"German","de_AT":"German (Austria)","de_BE":"German (Belgium)","de_DE":"German (Germany)","de_LI":"German (Liechtenstein)","de_LU":"German (Luxembourg)","de_CH":"German (Switzerland)","el":"Greek","el_CY":"Greek (Cyprus)","el_GR":"Greek (Greece)","gu":"Gujarati","gu_IN":"Gujarati (India)","ha":"Hausa","ha_GH":"Hausa (Ghana)","ha_Latn_GH":"Hausa (Latin, Ghana)","ha_Latn_NE":"Hausa (Latin, Niger)","ha_Latn_NG":"Hausa (Latin, Nigeria)","ha_Latn":"Hausa (Latin)","ha_NE":"Hausa (Niger)","ha_NG":"Hausa (Nigeria)","he":"Hebrew","he_IL":"Hebrew (Israel)","hi":"Hindi","hi_IN":"Hindi (India)","hu":"Hungarian","hu_HU":"Hungarian (Hungary)","is":"Icelandic","is_IS":"Icelandic (Iceland)","ig":"Igbo","ig_NG":"Igbo (Nigeria)","id":"Indonesian","id_ID":"Indonesian (Indonesia)","ga":"Irish","ga_IE":"Irish (Ireland)","it":"Italian","it_IT":"Italian (Italy)","it_SM":"Italian (San Marino)","it_CH":"Italian (Switzerland)","ja":"Japanese","ja_JP":"Japanese (Japan)","kl":"Kalaallisut","kl_GL":"Kalaallisut (Greenland)","kn":"Kannada","kn_IN":"Kannada (India)","ks":"Kashmiri","ks_Arab_IN":"Kashmiri (Arabic, India)","ks_Arab":"Kashmiri (Arabic)","ks_IN":"Kashmiri (India)","kk":"Kazakh","kk_Cyrl_KZ":"Kazakh (Cyrillic, Kazakhstan)","kk_Cyrl":"Kazakh (Cyrillic)","kk_KZ":"Kazakh (Kazakhstan)","km":"Khmer","km_KH":"Khmer (Cambodia)","ki":"Kikuyu","ki_KE":"Kikuyu (Kenya)","rw":"Kinyarwanda","rw_RW":"Kinyarwanda (Rwanda)","ko":"Korean","ko_KP":"Korean (North Korea)","ko_KR":"Korean (South Korea)","ky":"Kyrgyz","ky_Cyrl_KG":"Kyrgyz (Cyrillic, Kyrgyzstan)","ky_Cyrl":"Kyrgyz (Cyrillic)","ky_KG":"Kyrgyz (Kyrgyzstan)","lo":"Lao","lo_LA":"Lao (Laos)","lv":"Latvian","lv_LV":"Latvian (Latvia)","ln":"Lingala","ln_AO":"Lingala (Angola)","ln_CF":"Lingala (Central African Republic)","ln_CG":"Lingala (Congo - Brazzaville)","ln_CD":"Lingala (Congo - Kinshasa)","lt":"Lithuanian","lt_LT":"Lithuanian (Lithuania)","lu":"Luba-Katanga","lu_CD":"Luba-Katanga (Congo - Kinshasa)","lb":"Luxembourgish","lb_LU":"Luxembourgish (Luxembourg)","mk":"Macedonian","mk_MK":"Macedonian (Macedonia)","mg":"Malagasy","mg_MG":"Malagasy (Madagascar)","ms":"Malay","ms_BN":"Malay (Brunei)","ms_Latn_BN":"Malay (Latin, Brunei)","ms_Latn_MY":"Malay (Latin, Malaysia)","ms_Latn_SG":"Malay (Latin, Singapore)","ms_Latn":"Malay (Latin)","ms_MY":"Malay (Malaysia)","ms_SG":"Malay (Singapore)","ml":"Malayalam","ml_IN":"Malayalam (India)","mt":"Maltese","mt_MT":"Maltese (Malta)","gv":"Manx","gv_IM":"Manx (Isle of Man)","mr":"Marathi","mr_IN":"Marathi (India)","mn":"Mongolian","mn_Cyrl_MN":"Mongolian (Cyrillic, Mongolia)","mn_Cyrl":"Mongolian (Cyrillic)","mn_MN":"Mongolian (Mongolia)","ne":"Nepali","ne_IN":"Nepali (India)","ne_NP":"Nepali (Nepal)","nd":"North Ndebele","nd_ZW":"North Ndebele (Zimbabwe)","se":"Northern Sami","se_FI":"Northern Sami (Finland)","se_NO":"Northern Sami (Norway)","se_SE":"Northern Sami (Sweden)","no":"Norwegian","no_NO":"Norwegian (Norway)","nb":"Norwegian Bokmål","nb_NO":"Norwegian Bokmål (Norway)","nb_SJ":"Norwegian Bokmål (Svalbard & Jan Mayen)","nn":"Norwegian Nynorsk","nn_NO":"Norwegian Nynorsk (Norway)","or":"Oriya","or_IN":"Oriya (India)","om":"Oromo","om_ET":"Oromo (Ethiopia)","om_KE":"Oromo (Kenya)","os":"Ossetic","os_GE":"Ossetic (Georgia)","os_RU":"Ossetic (Russia)","ps":"Pashto","ps_AF":"Pashto (Afghanistan)","fa":"Persian","fa_AF":"Persian (Afghanistan)","fa_IR":"Persian (Iran)","pl":"Polish","pl_PL":"Polish (Poland)","pt":"Portuguese","pt_AO":"Portuguese (Angola)","pt_BR":"Portuguese (Brazil)","pt_CV":"Portuguese (Cape Verde)","pt_GW":"Portuguese (Guinea-Bissau)","pt_MO":"Portuguese (Macau SAR China)","pt_MZ":"Portuguese (Mozambique)","pt_PT":"Portuguese (Portugal)","pt_ST":"Portuguese (São Tomé & Príncipe)","pt_TL":"Portuguese (Timor-Leste)","pa":"Punjabi","pa_Arab_PK":"Punjabi (Arabic, Pakistan)","pa_Arab":"Punjabi (Arabic)","pa_Guru_IN":"Punjabi (Gurmukhi, India)","pa_Guru":"Punjabi (Gurmukhi)","pa_IN":"Punjabi (India)","pa_PK":"Punjabi (Pakistan)","qu":"Quechua","qu_BO":"Quechua (Bolivia)","qu_EC":"Quechua (Ecuador)","qu_PE":"Quechua (Peru)","ro":"Romanian","ro_MD":"Romanian (Moldova)","ro_RO":"Romanian (Romania)","rm":"Romansh","rm_CH":"Romansh (Switzerland)","rn":"Rundi","rn_BI":"Rundi (Burundi)","ru":"Russian","ru_BY":"Russian (Belarus)","ru_KZ":"Russian (Kazakhstan)","ru_KG":"Russian (Kyrgyzstan)","ru_MD":"Russian (Moldova)","ru_RU":"Russian (Russia)","ru_UA":"Russian (Ukraine)","sg":"Sango","sg_CF":"Sango (Central African Republic)","gd":"Scottish Gaelic","gd_GB":"Scottish Gaelic (United Kingdom)","sr":"Serbian","sr_BA":"Serbian (Bosnia & Herzegovina)","sr_Cyrl_BA":"Serbian (Cyrillic, Bosnia & Herzegovina)","sr_Cyrl_XK":"Serbian (Cyrillic, Kosovo)","sr_Cyrl_ME":"Serbian (Cyrillic, Montenegro)","sr_Cyrl_RS":"Serbian (Cyrillic, Serbia)","sr_Cyrl":"Serbian (Cyrillic)","sr_XK":"Serbian (Kosovo)","sr_Latn_BA":"Serbian (Latin, Bosnia & Herzegovina)","sr_Latn_XK":"Serbian (Latin, Kosovo)","sr_Latn_ME":"Serbian (Latin, Montenegro)","sr_Latn_RS":"Serbian (Latin, Serbia)","sr_Latn":"Serbian (Latin)","sr_ME":"Serbian (Montenegro)","sr_RS":"Serbian (Serbia)","sh":"Serbo-Croatian","sh_BA":"Serbo-Croatian (Bosnia & Herzegovina)","sn":"Shona","sn_ZW":"Shona (Zimbabwe)","ii":"Sichuan Yi","ii_CN":"Sichuan Yi (China)","si":"Sinhala","si_LK":"Sinhala (Sri Lanka)","sk":"Slovak","sk_SK":"Slovak (Slovakia)","sl":"Slovenian","sl_SI":"Slovenian (Slovenia)","so":"Somali","so_DJ":"Somali (Djibouti)","so_ET":"Somali (Ethiopia)","so_KE":"Somali (Kenya)","so_SO":"Somali (Somalia)","es":"Spanish","es_AR":"Spanish (Argentina)","es_BO":"Spanish (Bolivia)","es_IC":"Spanish (Canary Islands)","es_EA":"Spanish (Ceuta & Melilla)","es_CL":"Spanish (Chile)","es_CO":"Spanish (Colombia)","es_CR":"Spanish (Costa Rica)","es_CU":"Spanish (Cuba)","es_DO":"Spanish (Dominican Republic)","es_EC":"Spanish (Ecuador)","es_SV":"Spanish (El Salvador)","es_GQ":"Spanish (Equatorial Guinea)","es_GT":"Spanish (Guatemala)","es_HN":"Spanish (Honduras)","es_MX":"Spanish (Mexico)","es_NI":"Spanish (Nicaragua)","es_PA":"Spanish (Panama)","es_PY":"Spanish (Paraguay)","es_PE":"Spanish (Peru)","es_PH":"Spanish (Philippines)","es_PR":"Spanish (Puerto Rico)","es_ES":"Spanish (Spain)","es_US":"Spanish (United States)","es_UY":"Spanish (Uruguay)","es_VE":"Spanish (Venezuela)","sw":"Swahili","sw_KE":"Swahili (Kenya)","sw_TZ":"Swahili (Tanzania)","sw_UG":"Swahili (Uganda)","sv":"Swedish","sv_AX":"Swedish (Åland Islands)","sv_FI":"Swedish (Finland)","sv_SE":"Swedish (Sweden)","tl":"Tagalog","tl_PH":"Tagalog (Philippines)","ta":"Tamil","ta_IN":"Tamil (India)","ta_MY":"Tamil (Malaysia)","ta_SG":"Tamil (Singapore)","ta_LK":"Tamil (Sri Lanka)","te":"Telugu","te_IN":"Telugu (India)","th":"Thai","th_TH":"Thai (Thailand)","bo":"Tibetan","bo_CN":"Tibetan (China)","bo_IN":"Tibetan (India)","ti":"Tigrinya","ti_ER":"Tigrinya (Eritrea)","ti_ET":"Tigrinya (Ethiopia)","to":"Tongan","to_TO":"Tongan (Tonga)","tr":"Turkish","tr_CY":"Turkish (Cyprus)","tr_TR":"Turkish (Turkey)","uk":"Ukrainian","uk_UA":"Ukrainian (Ukraine)","ur":"Urdu","ur_IN":"Urdu (India)","ur_PK":"Urdu (Pakistan)","ug":"Uyghur","ug_Arab_CN":"Uyghur (Arabic, China)","ug_Arab":"Uyghur (Arabic)","ug_CN":"Uyghur (China)","uz":"Uzbek","uz_AF":"Uzbek (Afghanistan)","uz_Arab_AF":"Uzbek (Arabic, Afghanistan)","uz_Arab":"Uzbek (Arabic)","uz_Cyrl_UZ":"Uzbek (Cyrillic, Uzbekistan)","uz_Cyrl":"Uzbek (Cyrillic)","uz_Latn_UZ":"Uzbek (Latin, Uzbekistan)","uz_Latn":"Uzbek (Latin)","uz_UZ":"Uzbek (Uzbekistan)","vi":"Vietnamese","vi_VN":"Vietnamese (Vietnam)","cy":"Welsh","cy_GB":"Welsh (United Kingdom)","fy":"Western Frisian","fy_NL":"Western Frisian (Netherlands)","yi":"Yiddish","yo":"Yoruba","yo_BJ":"Yoruba (Benin)","yo_NG":"Yoruba (Nigeria)","zu":"Zulu","zu_ZA":"Zulu (South Africa)"}');

/***/ })

}]);