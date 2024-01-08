"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["project.settings.users"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Modal.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Modal.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Users.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Users.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UI_Button_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../UI/Button.vue */ "./resources/js/UI/Button.vue");
/* harmony import */ var _UI_Modal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../UI/Modal.vue */ "./resources/js/UI/Modal.vue");
/* harmony import */ var _Sections_ProjectHeader_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_Sections_/ProjectHeader.vue */ "./resources/js/pages/Projects/_Sections_/ProjectHeader.vue");
/* harmony import */ var _Sections_SettingsNav_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_Sections_/SettingsNav.vue */ "./resources/js/pages/Projects/Settings/_Sections_/SettingsNav.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ProjectHeader: _Sections_ProjectHeader_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    SettingsNav: _Sections_SettingsNav_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    UiButton: _UI_Button_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    UiModal: _UI_Modal_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      project: {},
      super_admins: {},
      admins: {},
      editors: {},
      users: {},
      current_assign_role: null,
      openAssignUserModal: false,
      createNewUser: false,
      new_user: {
        password: null,
        errors: {}
      },
      passwordShow: false
    };
  },
  methods: {
    getProject: function getProject() {
      var _this = this;
      axios.get('/admin/projects/settings/users/' + this.$route.params.project_id).then(function (response) {
        _this.project = response.data.project;
        _this.super_admins = response.data.super_admins;
        _this.admins = response.data.admins;
        _this.editors = response.data.editors;
        _this.users = response.data.users;
      });
    },
    getUserNameInitials: function getUserNameInitials(name) {
      var initials = name.split(' ');
      if (initials.length > 1) {
        initials = initials.shift().charAt(0) + initials.pop().charAt(0);
      } else {
        initials = name.substring(0, 2);
      }
      return initials.toUpperCase();
    },
    assignUser: function assignUser(role) {
      this.openAssignUserModal = true;
      this.current_assign_role = role;
      this.createNewUser = false;
    },
    selectUser: function selectUser(user) {
      var _this2 = this;
      var assignUserData = {
        role: this.current_assign_role,
        user_id: user.id
      };
      axios.post('/admin/projects/settings/users/assign/' + this.project.id, assignUserData).then(function (response) {
        _this2.$toast.success('User has assigned!');
        _this2.getProject();
        _this2.closeAssignUserModal();
      });
    },
    removeUser: function removeUser(user, role) {
      var _this3 = this;
      var removeUserData = {
        role: role,
        user_id: user.id
      };
      this.$swal.fire({
        title: 'Are you sure',
        text: "you want to remove this user from the project? User account will not be deleted."
      }).then(function (result) {
        if (result.value) {
          axios.post('/admin/projects/settings/users/remove-user/' + _this3.project.id, removeUserData).then(function (response) {
            _this3.$toast.success('User removed.');
            _this3.getProject();
            _this3.closeAssignUserModal();
          });
        }
      });
    },
    closeAssignUserModal: function closeAssignUserModal() {
      this.openAssignUserModal = false;
      this.createNewUser = false;
    },
    showPassword: function showPassword() {
      this.passwordShow = !this.passwordShow;
    },
    generatePassword: function generatePassword() {
      var CharacterSet = '';
      var password = '';
      CharacterSet += 'abcdefghijklmnopqrstuvwxyz';
      CharacterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      CharacterSet += '0123456789';
      CharacterSet += '![]{}()%&*$#^<>~@|';
      for (var i = 0; i < 12; i++) {
        password += CharacterSet.charAt(Math.floor(Math.random() * CharacterSet.length));
      }
      this.new_user.password = password;
      this.passwordShow = true;
    },
    createNewUserSubmit: function createNewUserSubmit() {
      var _this4 = this;
      axios.post('/admin/projects/settings/users/new/' + this.project.id, this.new_user).then(function (response) {
        _this4.$toast.success('User created!');
        _this4.getProject();
        _this4.createNewUser = false;
        _this4.new_user = {
          password: null,
          errors: {}
        };
      }, function (error) {
        if (error.response.status == 422) {
          _this4.new_user.errors = error.response.data.errors;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Modal.vue?vue&type=template&id=33e55cd0":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Modal.vue?vue&type=template&id=33e55cd0 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Users.vue?vue&type=template&id=3fd07558":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Users.vue?vue&type=template&id=3fd07558 ***!
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
    staticClass: "app__project-users h-full relative"
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
  }, [_vm._v("Users & Roles")]), _vm._v(" "), _c("div", {
    staticClass: "w-full bg-white mt-2 rounded-md p-4"
  }, [_c("div", {
    staticClass: "overflow-x-auto w-full border clear-both mt-2"
  }, [_c("table", {
    staticClass: "min-w-full divide-y divide-gray-200"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", {
    staticClass: "bg-white divide-y divide-gray-200"
  }, [_c("tr", [_vm._m(1), _vm._v(" "), _c("td", {
    staticClass: "px-6 py-3 text-sm"
  }, [_vm._l(_vm.super_admins, function (user) {
    return _c("div", {
      key: user.id,
      staticClass: "border border-gray-100 mb-2 block w-full p-2"
    }, [_c("div", {
      staticClass: "flex items-center"
    }, [_c("div", [_c("div", {
      staticClass: "flex bg-green-500 text-white p-2 text-md rounded-full text-center mr-2 w-9"
    }, [_c("div", {
      staticClass: "w-full text-center"
    }, [_vm._v(_vm._s(_vm.getUserNameInitials(user.name)))])])]), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "block"
    }, [_vm._v(_vm._s(user.name))]), _vm._v(" "), _c("div", {
      staticClass: "block text-sm"
    }, [_vm._v(_vm._s(user.email))])])])]);
  }), _vm._v(" "), _vm._l(_vm.admins, function (user) {
    return _c("div", {
      key: user.id,
      staticClass: "border border-gray-100 mb-2 block w-full p-2"
    }, [_c("div", {
      staticClass: "flex flex-start w-full items-center"
    }, [_c("div", [_c("div", {
      staticClass: "flex bg-green-500 text-white p-2 text-md rounded-full text-center mr-2 w-9"
    }, [_c("div", {
      staticClass: "w-full text-center"
    }, [_vm._v(_vm._s(_vm.getUserNameInitials(user.name)))])])]), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "block"
    }, [_vm._v(_vm._s(user.name))]), _vm._v(" "), _c("div", {
      staticClass: "block text-sm"
    }, [_vm._v(_vm._s(user.email))])]), _vm._v(" "), _c("div", {
      staticClass: "ml-auto"
    }, [_c("i", {
      staticClass: "fa fa-minus-circle text-red-400 cursor-pointer hover:text-red-500 text-lg ml-2",
      on: {
        click: function click($event) {
          return _vm.removeUser(user, "admin");
        }
      }
    })])])]);
  })], 2), _vm._v(" "), _c("td", {
    staticClass: "px-6 py-3 text-sm text-right align-top"
  }, [_c("ui-button", {
    attrs: {
      color: "indigo-500"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.assignUser("admin");
      }
    }
  }, [_vm._v("\n                                            + Assign User\n                                        ")])], 1)]), _vm._v(" "), _c("tr", [_vm._m(2), _vm._v(" "), _c("td", {
    staticClass: "px-6 py-3 text-sm"
  }, _vm._l(_vm.editors, function (user) {
    return _c("div", {
      key: user.id,
      staticClass: "border border-gray-100 mb-2 block w-full p-2"
    }, [_c("div", {
      staticClass: "flex flex-start w-full items-center"
    }, [_c("div", [_c("div", {
      staticClass: "flex bg-green-500 text-white p-2 text-md rounded-full text-center mr-2 w-9"
    }, [_c("div", {
      staticClass: "w-full text-center"
    }, [_vm._v(_vm._s(_vm.getUserNameInitials(user.name)))])])]), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "block"
    }, [_vm._v(_vm._s(user.name))]), _vm._v(" "), _c("div", {
      staticClass: "block text-sm"
    }, [_vm._v(_vm._s(user.email))])]), _vm._v(" "), _c("div", {
      staticClass: "ml-auto"
    }, [_c("i", {
      staticClass: "fa fa-minus-circle text-red-400 cursor-pointer hover:text-red-500 text-lg ml-2",
      on: {
        click: function click($event) {
          return _vm.removeUser(user, "editor");
        }
      }
    })])])]);
  }), 0), _vm._v(" "), _c("td", {
    staticClass: "px-6 py-3 text-sm text-right align-top"
  }, [_c("ui-button", {
    attrs: {
      color: "indigo-500"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.assignUser("editor");
      }
    }
  }, [_vm._v("\n                                            + Assign User\n                                        ")])], 1)])])])])])])])]), _vm._v(" "), _c("ui-modal", {
    attrs: {
      show: _vm.openAssignUserModal
    },
    on: {
      close: _vm.closeAssignUserModal
    },
    scopedSlots: _vm._u([{
      key: "title",
      fn: function fn() {
        return [_c("div", {
          staticClass: "flex justify-between"
        }, [_c("div", [_vm._v("\n                    Assign User\n                ")]), _vm._v(" "), _c("div", [!_vm.createNewUser ? _c("ui-button", {
          attrs: {
            color: "indigo-500"
          },
          nativeOn: {
            click: function click($event) {
              _vm.createNewUser = true;
            }
          }
        }, [_vm._v("\n                        Create New User\n                    ")]) : _vm._e(), _vm._v(" "), _vm.createNewUser ? _c("ui-button", {
          attrs: {
            color: "green-500"
          },
          nativeOn: {
            click: function click($event) {
              _vm.createNewUser = false;
            }
          }
        }, [_c("i", {
          staticClass: "fas fa-chevron-left text-white mr-3"
        }), _vm._v(" Back\n                    ")]) : _vm._e()], 1)])];
      },
      proxy: true
    }, {
      key: "content",
      fn: function fn() {
        return [_c("div", {
          staticClass: "mt-4"
        }, [!_vm.createNewUser ? _c("div", [_c("table", {
          staticClass: "min-w-full divide-y divide-gray-200"
        }, [_c("thead", {
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
        }, [_vm._v("E-mail")]), _vm._v(" "), _c("th", {
          staticClass: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-px",
          attrs: {
            scope: "col"
          }
        })])]), _vm._v(" "), _c("tbody", {
          staticClass: "bg-white divide-y divide-gray-200"
        }, _vm._l(_vm.users, function (user) {
          return _c("tr", {
            key: user.id
          }, [_c("td", {
            staticClass: "px-6 py-3 text-sm"
          }, [_vm._v(_vm._s(user.name))]), _vm._v(" "), _c("td", {
            staticClass: "px-6 py-3 text-sm"
          }, [_vm._v(_vm._s(user.email))]), _vm._v(" "), _c("td", {
            staticClass: "py-3 text-sm text-right items-right"
          }, [_c("ui-button", {
            attrs: {
              color: "indigo-500"
            },
            nativeOn: {
              click: function click($event) {
                return _vm.selectUser(user);
              }
            }
          }, [_vm._v("\n                                        Select\n                                    ")])], 1)]);
        }), 0)])]) : _vm._e(), _vm._v(" "), _vm.createNewUser ? _c("div", [_c("form", {
          on: {
            submit: function submit($event) {
              $event.preventDefault();
              return _vm.createNewUserSubmit.apply(null, arguments);
            }
          }
        }, [_c("div", {
          staticClass: "mt-2"
        }, [_c("label", {
          directives: [{
            name: "formlabel",
            rawName: "v-formlabel"
          }]
        }, [_vm._v("Name")]), _vm._v(" "), _c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.new_user.name,
            expression: "new_user.name"
          }, {
            name: "forminput",
            rawName: "v-forminput"
          }],
          attrs: {
            type: "text",
            autofocus: ""
          },
          domProps: {
            value: _vm.new_user.name
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.new_user, "name", $event.target.value);
            }
          }
        }), _vm._v(" "), _vm.new_user.errors.name ? _c("p", {
          staticClass: "text-sm text-red-600 mt-1"
        }, [_vm._v(_vm._s(_vm.new_user.errors.name[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
          staticClass: "mt-2"
        }, [_c("label", {
          directives: [{
            name: "formlabel",
            rawName: "v-formlabel"
          }]
        }, [_vm._v("E-mail")]), _vm._v(" "), _c("div", {
          staticClass: "mt-1 flex rounded-sm"
        }, [_c("span", {
          staticClass: "inline-flex items-center px-3 rounded-l-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
        }, [_c("i", {
          staticClass: "fa fa-at"
        })]), _vm._v(" "), _c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.new_user.email,
            expression: "new_user.email"
          }, {
            name: "forminput",
            rawName: "v-forminput"
          }],
          staticClass: "rounded-l-none",
          attrs: {
            type: "email"
          },
          domProps: {
            value: _vm.new_user.email
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.new_user, "email", $event.target.value);
            }
          }
        })]), _vm._v(" "), _vm.new_user.errors.email ? _c("p", {
          staticClass: "text-sm text-red-600 mt-1"
        }, [_vm._v(_vm._s(_vm.new_user.errors.email[0]))]) : _vm._e()]), _vm._v(" "), _c("div", {
          staticClass: "mt-2"
        }, [_c("label", {
          directives: [{
            name: "formlabel",
            rawName: "v-formlabel"
          }]
        }, [_vm._v("Password")]), _vm._v(" "), _c("div", {
          staticClass: "mt-1 flex rounded-sm"
        }, [_c("span", {
          staticClass: "inline-flex items-center px-3 rounded-l-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"
        }, [_c("i", {
          staticClass: "fa fa-lock"
        })]), _vm._v(" "), (_vm.passwordShow ? "text" : "password") === "checkbox" ? _c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.new_user.password,
            expression: "new_user.password"
          }, {
            name: "forminput",
            rawName: "v-forminput"
          }],
          staticClass: "rounded-l-none",
          attrs: {
            type: "checkbox"
          },
          domProps: {
            checked: Array.isArray(_vm.new_user.password) ? _vm._i(_vm.new_user.password, null) > -1 : _vm.new_user.password
          },
          on: {
            change: function change($event) {
              var $$a = _vm.new_user.password,
                $$el = $event.target,
                $$c = $$el.checked ? true : false;
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v);
                if ($$el.checked) {
                  $$i < 0 && _vm.$set(_vm.new_user, "password", $$a.concat([$$v]));
                } else {
                  $$i > -1 && _vm.$set(_vm.new_user, "password", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
                }
              } else {
                _vm.$set(_vm.new_user, "password", $$c);
              }
            }
          }
        }) : (_vm.passwordShow ? "text" : "password") === "radio" ? _c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.new_user.password,
            expression: "new_user.password"
          }, {
            name: "forminput",
            rawName: "v-forminput"
          }],
          staticClass: "rounded-l-none",
          attrs: {
            type: "radio"
          },
          domProps: {
            checked: _vm._q(_vm.new_user.password, null)
          },
          on: {
            change: function change($event) {
              return _vm.$set(_vm.new_user, "password", null);
            }
          }
        }) : _c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.new_user.password,
            expression: "new_user.password"
          }, {
            name: "forminput",
            rawName: "v-forminput"
          }],
          staticClass: "rounded-l-none",
          attrs: {
            type: _vm.passwordShow ? "text" : "password"
          },
          domProps: {
            value: _vm.new_user.password
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.$set(_vm.new_user, "password", $event.target.value);
            }
          }
        }), _vm._v(" "), _c("span", {
          staticClass: "inline-flex items-center px-3 rounded-r-sm border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer",
          on: {
            click: function click($event) {
              return _vm.showPassword();
            }
          }
        }, [_c("i", {
          staticClass: "fa fa-eye"
        })]), _vm._v(" "), _c("span", {
          staticClass: "inline-flex items-center px-3 rounded-r-sm border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer",
          on: {
            click: function click($event) {
              return _vm.generatePassword();
            }
          }
        }, [_vm._v("Generate")])]), _vm._v(" "), _vm.new_user.errors.password ? _c("p", {
          staticClass: "text-sm text-red-600 mt-1"
        }, [_vm._v(_vm._s(_vm.new_user.errors.password[0]))]) : _vm._e()])])]) : _vm._e()])];
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
              return _vm.closeAssignUserModal.apply(null, arguments);
            }
          }
        }, [_c("span", {
          staticClass: "text-gray-800"
        }, [_vm._v("Cancel")])]), _vm._v(" "), _vm.createNewUser ? _c("ui-button", {
          attrs: {
            color: "indigo-500"
          },
          nativeOn: {
            click: function click($event) {
              return _vm.createNewUserSubmit.apply(null, arguments);
            }
          }
        }, [_vm._v("\n                Create User\n            ")]) : _vm._e()];
      },
      proxy: true
    }])
  })], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("thead", {
    staticClass: "bg-gray-100"
  }, [_c("tr", [_c("th", {
    staticClass: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Role")]), _vm._v(" "), _c("th", {
    staticClass: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Users")]), _vm._v(" "), _c("th", {
    staticClass: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-64",
    attrs: {
      scope: "col"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "px-6 py-3 text-sm align-top"
  }, [_vm._v("\n                                        Admin\n                                        "), _c("small", {
    staticClass: "block text-gray-600 text-xs"
  }, [_vm._v("Can create and edit collections and content")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("td", {
    staticClass: "px-6 py-3 text-sm align-top"
  }, [_vm._v("\n                                        Editor\n                                        "), _c("small", {
    staticClass: "block text-gray-600 text-xs"
  }, [_vm._v("Can create and edit content")])]);
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

/***/ "./resources/js/UI/Modal.vue":
/*!***********************************!*\
  !*** ./resources/js/UI/Modal.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/pages/Projects/Settings/Users.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/Users.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_vue_vue_type_template_id_3fd07558__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=3fd07558 */ "./resources/js/pages/Projects/Settings/Users.vue?vue&type=template&id=3fd07558");
/* harmony import */ var _Users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js */ "./resources/js/pages/Projects/Settings/Users.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_3fd07558__WEBPACK_IMPORTED_MODULE_0__.render,
  _Users_vue_vue_type_template_id_3fd07558__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Projects/Settings/Users.vue"
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

/***/ "./resources/js/UI/Modal.vue?vue&type=script&lang=js":
/*!***********************************************************!*\
  !*** ./resources/js/UI/Modal.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modal.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Modal.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Projects/Settings/Users.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/Users.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Users.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/UI/Modal.vue?vue&type=template&id=33e55cd0":
/*!*****************************************************************!*\
  !*** ./resources/js/UI/Modal.vue?vue&type=template&id=33e55cd0 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_33e55cd0__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_33e55cd0__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_33e55cd0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modal.vue?vue&type=template&id=33e55cd0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/UI/Modal.vue?vue&type=template&id=33e55cd0");


/***/ }),

/***/ "./resources/js/pages/Projects/Settings/Users.vue?vue&type=template&id=3fd07558":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Projects/Settings/Users.vue?vue&type=template&id=3fd07558 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_3fd07558__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_3fd07558__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_3fd07558__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=3fd07558 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Settings/Users.vue?vue&type=template&id=3fd07558");


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