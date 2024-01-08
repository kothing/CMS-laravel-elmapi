"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["project.settings"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI_Button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../UI/Button.vue */ "./resources/js/UI/Button.vue");
/* harmony import */ var _checkrole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../checkrole */ "./resources/js/checkrole.js");
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
      editProjectData: {
        errors: {
          name: ''
        }
      }
    };
  },
  methods: {
    checkRole: _checkrole__WEBPACK_IMPORTED_MODULE_1__["default"],
    getProject: function getProject() {
      var _this = this;
      axios.get('/admin/projects/' + this.$route.params.project_id).then(function (response) {
        _this.project = response.data;
        _this.editProjectData.id = response.data.id;
        _this.editProjectData.name = response.data.name;
        _this.editProjectData.description = response.data.description;
        _this.editProjectData.disk = response.data.disk;
      });
    },
    saveEdit: function saveEdit() {
      var _this2 = this;
      axios.post('/admin/projects/update/' + this.project.id, this.editProjectData).then(function (response) {
        _this2.$toast.success('Project updated!');
        _this2.editProjectData = {
          errors: {
            name: ''
          }
        };
        _this2.getProject();
      }, function (error) {
        if (error.response.status == 422) {
          _this2.editProjectData.errors = error.response.data.errors;
        }
      });
    },
    deleteProject: function deleteProject() {
      var _this3 = this;
      this.$swal.fire({
        title: 'Are you sure',
        text: "you want to delete this project? All the collections and the content will be lost. You won't be able to revert this!"
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('/admin/projects/delete/' + _this3.project.id).then(function (response) {
            _this3.$toast.success('Project deleted.');
            _this3.$router.push({
              name: 'dashboard'
            });
          });
        }
      });
    }
  },
  mounted: function mounted() {
    this.getProject();
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Index.vue?vue&type=template&id=0b32c9bc":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Index.vue?vue&type=template&id=0b32c9bc ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "app__project-detail h-full relative"
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
  }, [_vm._v("Project Details")]), _vm._v(" "), _c("div", {
    staticClass: "w-full bg-white mt-2 rounded-md p-4"
  }, [_c("div", {
    staticClass: "grid grid-cols-1 gap-4"
  }, [_c("div", [_c("label", {
    directives: [{
      name: "formlabel",
      rawName: "v-formlabel"
    }]
  }, [_vm._v("Project Name")]), _vm._v(" "), _c("div", {
    staticClass: "mt-1 relative"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editProjectData.name,
      expression: "editProjectData.name"
    }, {
      name: "forminput",
      rawName: "v-forminput"
    }],
    attrs: {
      type: "text",
      autofocus: ""
    },
    domProps: {
      value: _vm.editProjectData.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.editProjectData, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "text-sm text-red-600 mt-2"
  }, [_vm._v(_vm._s(_vm.editProjectData.errors.name[0]))])])]), _vm._v(" "), _c("div", [_c("label", {
    directives: [{
      name: "formlabel",
      rawName: "v-formlabel"
    }]
  }, [_vm._v("Description")]), _vm._v(" "), _c("div", {
    staticClass: "mt-1 relative"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editProjectData.description,
      expression: "editProjectData.description"
    }, {
      name: "forminput",
      rawName: "v-forminput"
    }],
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.editProjectData.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.editProjectData, "description", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm.project.s3 ? _c("div", [_c("label", {
    directives: [{
      name: "formlabel",
      rawName: "v-formlabel"
    }]
  }, [_vm._v("Default Upload Disk")]), _vm._v(" "), _c("div", {
    staticClass: "grid grid-cols-4 space-x-2"
  }, [_c("div", {
    staticClass: "col-span-1"
  }, [_c("label", {
    staticClass: "p-5 border border-gray-300 rounded-sm text-sm flex items-center space-x-2 cursor-pointer",
    attrs: {
      "for": "default_disk_local"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editProjectData.disk,
      expression: "editProjectData.disk"
    }],
    attrs: {
      name: "default_disk",
      id: "default_disk_local",
      type: "radio",
      value: "local"
    },
    domProps: {
      checked: _vm._q(_vm.editProjectData.disk, "local")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.editProjectData, "disk", "local");
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v("Local (storage folder)")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-span-1"
  }, [_c("label", {
    staticClass: "p-5 border border-gray-300 rounded-sm text-sm flex items-center space-x-2 cursor-pointer",
    attrs: {
      "for": "default_disk_s3"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.editProjectData.disk,
      expression: "editProjectData.disk"
    }],
    attrs: {
      name: "default_disk",
      id: "default_disk_s3",
      type: "radio",
      value: "s3"
    },
    domProps: {
      checked: _vm._q(_vm.editProjectData.disk, "s3")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.editProjectData, "disk", "s3");
      }
    }
  }), _vm._v(" "), _c("span", [_vm._v("AWS S3")])])])])]) : _vm._e(), _vm._v(" "), _c("div", [_c("label", {
    directives: [{
      name: "formlabel",
      rawName: "v-formlabel"
    }]
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-1 relative"
  }, [_c("ui-button", {
    attrs: {
      color: "indigo-500"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.saveEdit();
      }
    }
  }, [_vm._v("Update Project")])], 1)])]), _vm._v(" "), _c("hr", {
    staticClass: "clear-both mt-5 mb-5"
  }), _vm._v(" "), _vm.checkRole(["super_admin"]) ? _c("ui-button", {
    staticClass: "float-right",
    attrs: {
      color: "red-500"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.deleteProject();
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-exclamation-triangle"
  }), _vm._v(" Delete Project\n                    ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "clear-both"
  })], 1)])])])], 1);
};
var staticRenderFns = [];
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

/***/ "./resources/js/pages/Projects/Settings/Index.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/Index.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_0b32c9bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0b32c9bc */ "./resources/js/pages/Projects/Settings/Index.vue?vue&type=template&id=0b32c9bc");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/pages/Projects/Settings/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_0b32c9bc__WEBPACK_IMPORTED_MODULE_0__.render,
  _Index_vue_vue_type_template_id_0b32c9bc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Projects/Settings/Index.vue"
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

/***/ "./resources/js/pages/Projects/Settings/Index.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/Index.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Index.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/pages/Projects/Settings/Index.vue?vue&type=template&id=0b32c9bc":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/Index.vue?vue&type=template&id=0b32c9bc ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0b32c9bc__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0b32c9bc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_0b32c9bc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Index.vue?vue&type=template&id=0b32c9bc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Index.vue?vue&type=template&id=0b32c9bc");


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


/***/ })

}]);