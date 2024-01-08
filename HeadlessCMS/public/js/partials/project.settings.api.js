(self["webpackChunk"] = self["webpackChunk"] || []).push([["project.settings.api"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Button.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Button.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Modal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Modal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    show: {
      "default": false
    },
    maxWidth: {
      "default": '3xl'
    },
    closeable: {
      "default": true
    },
    disableHeader: {
      "default": false
    },
    disableFooter: {
      "default": false
    },
    noContenPadding: {
      "default": false
    }
  },
  methods: {
    close: function close() {
      if (this.closeable) {
        this.$emit('close');
      }
    }
  },
  watch: {
    show: {
      immediate: true,
      handler: function handler(show) {
        if (show) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = null;
        }
      }
    }
  },
  created: function created() {
    var _this = this;
    var closeOnEscape = function closeOnEscape(e) {
      if (e.key === 'Escape' && _this.show) {
        _this.close();
      }
    };
    document.addEventListener('keydown', closeOnEscape);
    this.$once('hook:destroyed', function () {
      document.removeEventListener('keydown', closeOnEscape);
    });
  },
  computed: {
    maxWidthClass: function maxWidthClass() {
      return {
        'sm': 'sm:max-w-sm',
        'md': 'sm:max-w-md',
        'lg': 'sm:max-w-lg',
        'xl': 'sm:max-w-xl',
        '2xl': 'sm:max-w-2xl',
        '3xl': 'sm:max-w-3xl',
        '4xl': 'sm:max-w-4xl',
        '5xl': 'sm:max-w-5xl',
        '6xl': 'sm:max-w-6xl',
        '7xl': 'sm:max-w-7xl'
      }[this.maxWidth];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/API.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/API.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var v_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-clipboard */ "./node_modules/v-clipboard/dist/index.min.js");
/* harmony import */ var v_clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UI_Button_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../UI/Button.vue */ "./resources/js/UI/Button.vue");
/* harmony import */ var _UI_Modal_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UI/Modal.vue */ "./resources/js/UI/Modal.vue");
/* harmony import */ var _Sections_ProjectHeader_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_Sections_/ProjectHeader.vue */ "./resources/js/pages/Projects/_Sections_/ProjectHeader.vue");
/* harmony import */ var _Sections_SettingsNav_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_Sections_/SettingsNav.vue */ "./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue");






vue__WEBPACK_IMPORTED_MODULE_5__["default"].use((v_clipboard__WEBPACK_IMPORTED_MODULE_0___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ProjectHeader: _Sections_ProjectHeader_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SettingsNav: _Sections_SettingsNav_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    UiButton: _UI_Button_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    UiModal: _UI_Modal_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      project: {},
      tokens: {},
      openNewTokenModal: false,
      new_token: {
        errors: {},
        permissions: ['read']
      },
      showToken: false,
      createdToken: null,
      editStatus: false,
      enable_public_access: false
    };
  },
  methods: {
    getProject: function getProject() {
      var _this = this;
      axios.get('/admin/projects/settings/api/' + this.$route.params.project_id).then(function (response) {
        _this.project = response.data.project;
        _this.tokens = response.data.tokens;
        _this.enable_public_access = response.data.project.public_api;
      });
    },
    copyToClipboard: function copyToClipboard(str) {
      this.$clipboard(str);
      this.$toast.success('Copied to clipboard');
    },
    closeNewTokenModal: function closeNewTokenModal() {
      this.openNewTokenModal = false;
      this.new_token = {
        errors: {},
        permissions: ['read']
      }, this.showToken = false, this.createdToken = null;
      this.editStatus = false;
    },
    createNewTokenSubmit: function createNewTokenSubmit() {
      var _this2 = this;
      if (this.editStatus) {
        axios.post('/admin/projects/settings/api/update-token/' + this.project.id, this.new_token).then(function (response) {
          _this2.$toast.success('Token updated!');
          _this2.getProject();
          _this2.closeNewTokenModal();
        }, function (error) {
          if (error.response.status == 422) {
            _this2.new_token.errors = error.response.data.errors;
          }
        });
      } else {
        axios.post('/admin/projects/settings/api/new-token/' + this.project.id, this.new_token).then(function (response) {
          _this2.$toast.success('Token created!');
          _this2.getProject();
          _this2.showToken = true;
          _this2.createdToken = response.data;
        }, function (error) {
          if (error.response.status == 422) {
            _this2.new_token.errors = error.response.data.errors;
          }
        });
      }
    },
    editToken: function editToken(token) {
      this.new_token = {
        id: token.id,
        name: token.name,
        errors: {},
        permissions: token.abilities
      };
      this.editStatus = true;
      this.openNewTokenModal = true;
    },
    deleteToken: function deleteToken(token) {
      var _this3 = this;
      this.$swal.fire({
        title: 'Are you sure',
        text: "you want to delete this token? Any applications using this token will not be able to connect to the API!"
      }).then(function (result) {
        if (result.value) {
          axios.post('/admin/projects/settings/api/delete-token/' + _this3.project.id, token).then(function (response) {
            _this3.$toast.success('Token deleted.');
            _this3.getProject();
          });
        }
      });
    },
    enablePublicAccess: function enablePublicAccess() {
      var _this4 = this;
      this.$swal.fire({
        title: 'Are you sure',
        text: "you want to enable public API access for get(read) requests in this project? You're still going to need an access token for post and delete (create, update, delete) requests."
      }).then(function (result) {
        if (result.value) {
          axios.post('/admin/projects/settings/api/enable_public_access/' + _this4.project.id).then(function (response) {
            _this4.$toast.success('Public API Access has been enabled.');
            _this4.getProject();
          });
        }
      });
    },
    disablePublicAccess: function disablePublicAccess() {
      var _this5 = this;
      this.$swal.fire({
        title: 'Are you sure',
        text: "you want to disable public API access for this project?"
      }).then(function (result) {
        if (result.value) {
          axios.post('/admin/projects/settings/api/disable_public_access/' + _this5.project.id).then(function (response) {
            _this5.$toast.success('Public API Access has been disabled.');
            _this5.getProject();
          });
        }
      });
    }
  },
  computed: {
    endpointUrl: function endpointUrl() {
      var APP_URL = document.querySelector('meta[name="APP_URL"]').content;
      return APP_URL + '/api/' + this.project.uuid;
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Modal.vue?vue&type=template&id=33e55cd0":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Modal.vue?vue&type=template&id=33e55cd0 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show,
      expression: "show"
    }],
    staticClass: "fixed z-10 inset-0 overflow-y-auto"
  }, [_c("div", {
    staticClass: "flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0"
  }, [_c("div", {
    staticClass: "fixed inset-0 transition-opacity",
    attrs: {
      "aria-hidden": "true"
    },
    on: {
      click: _vm.close
    }
  }, [_c("div", {
    staticClass: "absolute inset-0 bg-gray-500 opacity-75"
  })]), _vm._v(" "), _c("span", {
    staticClass: "hidden sm:inline-block sm:align-middle sm:h-screen",
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("​")]), _vm._v(" "), _c("div", {
    staticClass: "inline-block align-bottom bg-white rounded-sm text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full",
    "class": _vm.maxWidthClass,
    attrs: {
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "modal-headline"
    }
  }, [!_vm.disableHeader ? _c("div", {
    staticClass: "px-6 py-6 border-b border-gray-100 bg-white"
  }, [_c("h3", {
    staticClass: "text-lg leading-6 font-medium text-gray-900"
  }, [_vm._t("title")], 2)]) : _vm._e(), _vm._v(" "), _c("div", {
    "class": {
      "px-6 py-4": !_vm.noContenPadding
    }
  }, [_vm._t("content")], 2), _vm._v(" "), !_vm.disableFooter ? _c("div", {
    staticClass: "px-6 py-4 bg-gray-50 text-right mt-5"
  }, [_vm._t("footer")], 2) : _vm._e()])])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/API.vue?vue&type=template&id=35285b2c":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/API.vue?vue&type=template&id=35285b2c ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   staticRenderFns: () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "app__project-api h-full relative"
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
  }, [_vm._v("API Access")]), _vm._v(" "), _c("div", {
    staticClass: "w-full bg-white mt-2 rounded-md p-4"
  }, [_c("div", [_c("div", {
    staticClass: "text-lg font-bold"
  }, [_vm._v("Project ID")]), _vm._v(" "), _c("div", {
    staticClass: "mt-1 flex rounded-sm cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.copyToClipboard(_vm.project.uuid);
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "forminput",
      rawName: "v-forminput"
    }],
    staticClass: "rounded-l-none cursor-pointer",
    attrs: {
      type: "text",
      readonly: "",
      disabled: ""
    },
    domProps: {
      value: _vm.project.uuid
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_c("div", {
    staticClass: "text-lg font-bold"
  }, [_vm._v("Content API Endpoint")]), _vm._v(" "), _c("div", {
    staticClass: "mt-1 flex rounded-sm cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.copyToClipboard(_vm.endpointUrl);
      }
    }
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "forminput",
      rawName: "v-forminput"
    }],
    staticClass: "rounded-l-none cursor-pointer",
    attrs: {
      type: "text",
      readonly: "",
      disabled: ""
    },
    domProps: {
      value: _vm.endpointUrl
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mt-10"
  }, [_vm.project.public_api ? _c("label", {
    staticClass: "p-5 border border-gray-300 rounded-sm text-sm flex items-center space-x-2 cursor-pointer",
    attrs: {
      "for": "togglePublic"
    }
  }, [_c("div", {
    staticClass: "relative"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.enable_public_access,
      expression: "enable_public_access"
    }],
    staticClass: "sr-only",
    attrs: {
      type: "checkbox",
      id: "togglePublic"
    },
    domProps: {
      checked: Array.isArray(_vm.enable_public_access) ? _vm._i(_vm.enable_public_access, null) > -1 : _vm.enable_public_access
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.disablePublicAccess.apply(null, arguments);
      },
      change: function change($event) {
        var $$a = _vm.enable_public_access,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.enable_public_access = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.enable_public_access = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.enable_public_access = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "block bg-gray-600 w-14 h-8 rounded-full"
  }), _vm._v(" "), _c("div", {
    staticClass: "dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
  })]), _vm._v(" "), _c("span", [_vm._v("Disable Public API Access")])]) : !_vm.project.public_api ? _c("label", {
    staticClass: "p-5 border border-gray-300 rounded-sm text-sm flex items-center space-x-2 cursor-pointer",
    attrs: {
      "for": "togglePublic"
    }
  }, [_c("div", {
    staticClass: "relative"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.enable_public_access,
      expression: "enable_public_access"
    }],
    staticClass: "sr-only",
    attrs: {
      type: "checkbox",
      id: "togglePublic"
    },
    domProps: {
      checked: Array.isArray(_vm.enable_public_access) ? _vm._i(_vm.enable_public_access, null) > -1 : _vm.enable_public_access
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.enablePublicAccess.apply(null, arguments);
      },
      change: function change($event) {
        var $$a = _vm.enable_public_access,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.enable_public_access = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.enable_public_access = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.enable_public_access = $$c;
        }
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "block bg-gray-600 w-14 h-8 rounded-full"
  }), _vm._v(" "), _c("div", {
    staticClass: "dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
  })]), _vm._v(" "), _c("span", [_vm._v("Enable Public API Access")])]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "mt-10"
  }, [_c("div", {
    staticClass: "w-full flex justify-between"
  }, [_c("div", {
    staticClass: "text-lg font-bold"
  }, [_vm._v("Access Tokens")]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "cursor-pointer text-indigo-700",
    on: {
      click: function click($event) {
        _vm.openNewTokenModal = true;
      }
    }
  }, [_vm._v("Create New Token")])])]), _vm._v(" "), _c("div", {
    staticClass: "overflow-x-auto mt-1 flex rounded-sm"
  }, [_c("table", {
    staticClass: "min-w-full divide-y divide-gray-200 border"
  }, [_vm._m(2), _vm._v(" "), _c("tbody", {
    staticClass: "bg-white divide-y divide-gray-200"
  }, [_vm._l(_vm.tokens, function (token) {
    return _c("tr", {
      key: token.id
    }, [_c("td", {
      staticClass: "px-6 py-3 text-sm whitespace-nowrap"
    }, [_vm._v(_vm._s(token.name))]), _vm._v(" "), _c("td", {
      staticClass: "px-6 py-3 text-sm whitespace-nowrap"
    }, _vm._l(token.abilities, function (perm) {
      return _c("span", {
        key: perm,
        staticClass: "text-gray-500 text-sm rounded-sm bg-gray-100 py-1 px-3 mr-2"
      }, [_vm._v("\n                                                " + _vm._s(perm) + "\n                                            ")]);
    }), 0), _vm._v(" "), _c("td", {
      staticClass: "px-6 py-3 text-sm whitespace-nowrap"
    }, [_c("span", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: token.last_used_at !== null,
        expression: "token.last_used_at !== null"
      }]
    }, [_vm._v("\n                                                Last Used at " + _vm._s(_vm._f("date")(token.last_used_at, "D MMM YYYY, H:mm")) + "\n                                            ")])]), _vm._v(" "), _c("td", {
      staticClass: "px-6 py-3 text-sm"
    }, [_c("div", {
      staticClass: "cursor-pointer text-indigo-500",
      on: {
        click: function click($event) {
          return _vm.editToken(token);
        }
      }
    }, [_vm._v("Edit")])]), _vm._v(" "), _c("td", {
      staticClass: "px-6 py-3 text-sm"
    }, [_c("div", {
      staticClass: "cursor-pointer text-red-700",
      on: {
        click: function click($event) {
          return _vm.deleteToken(token);
        }
      }
    }, [_vm._v("Revoke")])])]);
  }), _vm._v(" "), _vm.tokens != undefined && _vm.tokens.length === 0 ? _c("tr", [_c("td", {
    staticClass: "text-center text-sm text-gray-500 p-5",
    attrs: {
      colspan: "100%"
    }
  }, [_vm._v("This project does not have tokens yet. In order to access to the API create a new token.")])]) : _vm._e()], 2)])])])])])])]), _vm._v(" "), _c("ui-modal", {
    attrs: {
      show: _vm.openNewTokenModal
    },
    on: {
      close: _vm.closeNewTokenModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_vm._v(_vm._s(!_vm.editStatus ? "Create New Token" : "Update Token"))];
      },
      proxy: true
    }, {
      key: "content",
      fn: function fn() {
        return [_c("div", {
          staticClass: "mt-4"
        }, [_vm.showToken ? _c("div", [_c("div", {
          staticClass: "rounded bg-orange-100 p-4 text-orange-800 flex items-center items-stretch text-sm leading-5"
        }, [_c("span", {
          staticClass: "mr-3"
        }, [_c("i", {
          staticClass: "fa fa-exclamation-circle"
        })]), _vm._v(" "), _c("span", [_vm._v("\n                            Please copy your new API token. For your security, it won't be shown again. If you lose this token you can generate a new one.\n                        ")])]), _vm._v(" "), _c("div", {
          staticClass: "mt-5 flex rounded-sm cursor-pointer",
          on: {
            click: function click($event) {
              return _vm.copyToClipboard(_vm.createdToken);
            }
          }
        }, [_c("span", {
          staticClass: "inline-flex items-center px-3 rounded-l-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer"
        }, [_c("i", {
          staticClass: "far fa-copy"
        })]), _vm._v(" "), _c("input", {
          directives: [{
            name: "forminput",
            rawName: "v-forminput"
          }],
          staticClass: "rounded-l-none cursor-pointer",
          attrs: {
            type: "text",
            readonly: "",
            disabled: ""
          },
          domProps: {
            value: _vm.createdToken
          }
        })])]) : _vm._e(), _vm._v(" "), !_vm.showToken ? _c("div", [_c("form", {
          on: {
            submit: function submit($event) {
              $event.preventDefault();
              return _vm.createNewTokenSubmit.apply(null, arguments);
            }
          }
        }, [_c("div", [_c("label", {
          directives: [{
            name: "formlabel",
            rawName: "v-formlabel"
          }]
        }, [_vm._v("Name")]), _vm._v(" "), _c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.new_token.name,
            expression: "new_token.name"
          }, {
            name: "forminput",
            rawName: "v-forminput"
          }],
          attrs: {
            type: "text"
          },
          domProps: {
            value: _vm.new_token.name
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.new_token, "name", $event.target.value);
            }
          }
        }), _vm._v(" "), _vm.new_token.errors.name ? _c("p", {
          staticClass: "text-sm text-red-600 mt-1"
        }, [_vm._v(_vm._s(_vm.new_token.errors.name[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
          staticClass: "mt-5"
        }, [_c("label", {
          directives: [{
            name: "formlabel",
            rawName: "v-formlabel"
          }]
        }, [_vm._v("Permissions")]), _vm._v(" "), _c("div", {
          staticClass: "grid grid-cols-2"
        }, [_c("div", {
          staticClass: "col-span-1"
        }, [_c("div", {
          staticClass: "flex items-start"
        }, [_c("div", {
          staticClass: "flex items-center h-5"
        }, [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.new_token.permissions,
            expression: "new_token.permissions"
          }, {
            name: "formcheckbox",
            rawName: "v-formcheckbox"
          }],
          attrs: {
            id: "create",
            type: "checkbox"
          },
          domProps: {
            value: "create",
            checked: Array.isArray(_vm.new_token.permissions) ? _vm._i(_vm.new_token.permissions, "create") > -1 : _vm.new_token.permissions
          },
          on: {
            change: function change($event) {
              var $$a = _vm.new_token.permissions,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = "create",
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(_vm.new_token, "permissions", $$a.concat([$$v]));
                } else {
                  $$i > -1 && _vm.$set(_vm.new_token, "permissions", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.$set(_vm.new_token, "permissions", $$c);
              }
            }
          }
        })]), _vm._v(" "), _c("div", {
          staticClass: "ml-3 text-sm"
        }, [_c("label", {
          staticClass: "font-medium text-gray-700",
          attrs: {
            "for": "create"
          }
        }, [_vm._v("Create")]), _vm._v(" "), _c("p", {
          staticClass: "text-gray-500"
        }, [_vm._v("Can create new content")])])]), _vm._v(" "), _c("div", {
          staticClass: "flex items-start mt-3"
        }, [_c("div", {
          staticClass: "flex items-center h-5"
        }, [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.new_token.permissions,
            expression: "new_token.permissions"
          }, {
            name: "formcheckbox",
            rawName: "v-formcheckbox"
          }],
          attrs: {
            id: "update",
            type: "checkbox"
          },
          domProps: {
            value: "update",
            checked: Array.isArray(_vm.new_token.permissions) ? _vm._i(_vm.new_token.permissions, "update") > -1 : _vm.new_token.permissions
          },
          on: {
            change: function change($event) {
              var $$a = _vm.new_token.permissions,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = "update",
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(_vm.new_token, "permissions", $$a.concat([$$v]));
                } else {
                  $$i > -1 && _vm.$set(_vm.new_token, "permissions", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.$set(_vm.new_token, "permissions", $$c);
              }
            }
          }
        })]), _vm._v(" "), _c("div", {
          staticClass: "ml-3 text-sm"
        }, [_c("label", {
          staticClass: "font-medium text-gray-700",
          attrs: {
            "for": "update"
          }
        }, [_vm._v("Update")]), _vm._v(" "), _c("p", {
          staticClass: "text-gray-500"
        }, [_vm._v("Can update existing content")])])])]), _vm._v(" "), _c("div", {
          staticClass: "col-span-1"
        }, [_c("div", {
          staticClass: "flex items-start"
        }, [_c("div", {
          staticClass: "flex items-center h-5"
        }, [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.new_token.permissions,
            expression: "new_token.permissions"
          }, {
            name: "formcheckbox",
            rawName: "v-formcheckbox"
          }],
          attrs: {
            id: "read",
            type: "checkbox"
          },
          domProps: {
            value: "read",
            checked: Array.isArray(_vm.new_token.permissions) ? _vm._i(_vm.new_token.permissions, "read") > -1 : _vm.new_token.permissions
          },
          on: {
            change: function change($event) {
              var $$a = _vm.new_token.permissions,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = "read",
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(_vm.new_token, "permissions", $$a.concat([$$v]));
                } else {
                  $$i > -1 && _vm.$set(_vm.new_token, "permissions", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.$set(_vm.new_token, "permissions", $$c);
              }
            }
          }
        })]), _vm._v(" "), _c("div", {
          staticClass: "ml-3 text-sm"
        }, [_c("label", {
          staticClass: "font-medium text-gray-700",
          attrs: {
            "for": "read"
          }
        }, [_vm._v("Read")]), _vm._v(" "), _c("p", {
          staticClass: "text-gray-500"
        }, [_vm._v("Can read content")])])]), _vm._v(" "), _c("div", {
          staticClass: "flex items-start mt-3"
        }, [_c("div", {
          staticClass: "flex items-center h-5"
        }, [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.new_token.permissions,
            expression: "new_token.permissions"
          }, {
            name: "formcheckbox",
            rawName: "v-formcheckbox"
          }],
          attrs: {
            id: "delete",
            type: "checkbox"
          },
          domProps: {
            value: "delete",
            checked: Array.isArray(_vm.new_token.permissions) ? _vm._i(_vm.new_token.permissions, "delete") > -1 : _vm.new_token.permissions
          },
          on: {
            change: function change($event) {
              var $$a = _vm.new_token.permissions,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = "delete",
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(_vm.new_token, "permissions", $$a.concat([$$v]));
                } else {
                  $$i > -1 && _vm.$set(_vm.new_token, "permissions", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.$set(_vm.new_token, "permissions", $$c);
              }
            }
          }
        })]), _vm._v(" "), _c("div", {
          staticClass: "ml-3 text-sm"
        }, [_c("label", {
          staticClass: "font-medium text-gray-700",
          attrs: {
            "for": "delete"
          }
        }, [_vm._v("Delete")]), _vm._v(" "), _c("p", {
          staticClass: "text-gray-500"
        }, [_vm._v("Can delete content")])])])])])])])]) : _vm._e()])];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function fn() {
        return [_c("ui-button", {
          attrs: {
            color: "gray-50",
            hover: "gray-200"
          },
          nativeOn: {
            click: function click($event) {
              return _vm.closeNewTokenModal.apply(null, arguments);
            }
          }
        }, [_c("span", {
          staticClass: "text-gray-800"
        }, [_vm._v("Cancel")])]), _vm._v(" "), !_vm.showToken ? _c("ui-button", {
          attrs: {
            color: "indigo-500"
          },
          nativeOn: {
            click: function click($event) {
              return _vm.createNewTokenSubmit.apply(null, arguments);
            }
          }
        }, [_vm._v("\n                " + _vm._s(!_vm.editStatus ? "Create Token" : "Save Changes") + "\n            ")]) : _vm._e()];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "inline-flex items-center px-3 rounded-l-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer"
  }, [_c("i", {
    staticClass: "far fa-copy"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "inline-flex items-center px-3 rounded-l-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer"
  }, [_c("i", {
    staticClass: "far fa-copy"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-gray-100"
  }, [_c("tr", [_c("th", {
    staticClass: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Name")]), _vm._v(" "), _c("th", {
    staticClass: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Permissions")]), _vm._v(" "), _c("th", {
    staticClass: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-px",
    attrs: {
      scope: "col"
    }
  }), _vm._v(" "), _c("th", {
    staticClass: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-px",
    attrs: {
      scope: "col"
    }
  }), _vm._v(" "), _c("th", {
    staticClass: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-px",
    attrs: {
      scope: "col"
    }
  })])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=template&id=518514e3":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=template&id=518514e3 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./node_modules/v-clipboard/dist/index.min.js":
/*!****************************************************!*\
  !*** ./node_modules/v-clipboard/dist/index.min.js ***!
  \****************************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=void 0;if("string"!=typeof e)try{t=JSON.stringify(e)}catch(e){throw"Failed to copy value to clipboard. Unknown type."}else t=e;var r=document.createElement("textarea");if(r.value=t,r.setAttribute("readonly",""),r.style.cssText="position:fixed;pointer-events:none;z-index:-9999;opacity:0;",document.body.appendChild(r),navigator.userAgent.match(/ipad|ipod|iphone/i)){r.contentEditable=!0,r.readOnly=!0;var n=document.createRange();n.selectNodeContents(r);var o=window.getSelection();o.removeAllRanges(),o.addRange(n),r.setSelectionRange(0,999999)}else r.select();var a=!1;try{a=document.execCommand("copy")}catch(e){console.warn(e)}return document.body.removeChild(r),a};t.default={install:function(e){e.prototype.$clipboard=n;var t=function(e){return function(){return"$"+e++}}(1),r={},o=function(e){e&&(r[e]=null,delete r[e])},a=function(e){var n=t();return r[n]=e,n};e.directive("clipboard",{bind:function(e,t){var o=t.arg,i=t.value;switch(o){case"error":var c=a(i);return void(e.dataset.clipboardErrorHandler=c);case"success":var d=a(i);return void(e.dataset.clipboardSuccessHandler=d);default:var l=function(o){if(t.hasOwnProperty("value")){var a={value:"function"==typeof i?i():i,event:o},c=n(a.value)?e.dataset.clipboardSuccessHandler:e.dataset.clipboardErrorHandler,d=r[c];d&&d(a)}},u=a(l);return e.dataset.clipboardClickHandler=u,void e.addEventListener("click",r[u])}},unbind:function(e){var t=e.dataset,n=t.clipboardSuccessHandler,a=t.clipboardErrorHandler,i=t.clipboardClickHandler;o(n),o(a),i&&(e.removeEventListener("click",r[i]),o(i))}})}}}])});
//# sourceMappingURL=index.min.js.map

/***/ }),

/***/ "./resources/js/UI/Button.vue":
/*!************************************!*\
  !*** ./resources/js/UI/Button.vue ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/UI/Modal.vue":
/*!***********************************!*\
  !*** ./resources/js/UI/Modal.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modal_vue_vue_type_template_id_33e55cd0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=33e55cd0 */ "./resources/js/UI/Modal.vue?vue&type=template&id=33e55cd0");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js */ "./resources/js/UI/Modal.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_33e55cd0__WEBPACK_IMPORTED_MODULE_0__.render,
  _Modal_vue_vue_type_template_id_33e55cd0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/UI/Modal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Projects/Settings/API.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/API.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _API_vue_vue_type_template_id_35285b2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API.vue?vue&type=template&id=35285b2c */ "./resources/js/pages/Projects/Settings/API.vue?vue&type=template&id=35285b2c");
/* harmony import */ var _API_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./API.vue?vue&type=script&lang=js */ "./resources/js/pages/Projects/Settings/API.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _API_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _API_vue_vue_type_template_id_35285b2c__WEBPACK_IMPORTED_MODULE_0__.render,
  _API_vue_vue_type_template_id_35285b2c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Projects/Settings/API.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Button.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/UI/Modal.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./resources/js/UI/Modal.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Modal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Projects/Settings/API.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/API.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_API_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./API.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/API.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_API_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=script&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_923437c2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_923437c2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Button_vue_vue_type_template_id_923437c2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Button.vue?vue&type=template&id=923437c2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Button.vue?vue&type=template&id=923437c2");


/***/ }),

/***/ "./resources/js/UI/Modal.vue?vue&type=template&id=33e55cd0":
/*!*****************************************************************!*\
  !*** ./resources/js/UI/Modal.vue?vue&type=template&id=33e55cd0 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_33e55cd0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_33e55cd0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_33e55cd0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modal.vue?vue&type=template&id=33e55cd0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Modal.vue?vue&type=template&id=33e55cd0");


/***/ }),

/***/ "./resources/js/pages/Projects/Settings/API.vue?vue&type=template&id=35285b2c":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/API.vue?vue&type=template&id=35285b2c ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_API_vue_vue_type_template_id_35285b2c__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_API_vue_vue_type_template_id_35285b2c__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_API_vue_vue_type_template_id_35285b2c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./API.vue?vue&type=template&id=35285b2c */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/API.vue?vue&type=template&id=35285b2c");


/***/ }),

/***/ "./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=template&id=518514e3":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue?vue&type=template&id=518514e3 ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_template_id_a42c32b6__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_template_id_a42c32b6__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectHeader_vue_vue_type_template_id_a42c32b6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectHeader.vue?vue&type=template&id=a42c32b6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/ProjectHeader.vue?vue&type=template&id=a42c32b6");


/***/ })

}]);