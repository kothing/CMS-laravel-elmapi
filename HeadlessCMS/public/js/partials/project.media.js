(self["webpackChunk"] = self["webpackChunk"] || []).push([["project.media"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Content/Media.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Content/Media.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Sections_ProjectHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_Sections_/ProjectHeader */ "./resources/js/pages/Projects/_Sections_/ProjectHeader.vue");
/* harmony import */ var _Sections_MediaLibrary_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_Sections_/MediaLibrary.vue */ "./resources/js/pages/Projects/_Sections_/MediaLibrary.vue");
/* harmony import */ var _Sections_ContentSidebar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Sections_/ContentSidebar.vue */ "./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ProjectHeader: _Sections_ProjectHeader__WEBPACK_IMPORTED_MODULE_0__["default"],
    ContentSidebar: _Sections_ContentSidebar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    MediaLibrary: _Sections_MediaLibrary_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      project: {}
    };
  },
  methods: {
    getProject: function getProject() {
      var _this = this;
      axios.get('/admin/projects/' + this.$route.params.project_id).then(function (response) {
        _this.project = response.data;
      });
    }
  },
  mounted: function mounted() {
    this.getProject();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      searchCollection: '',
      openSearchInput: false
    };
  },
  computed: {
    filterSearch: function filterSearch() {
      var _this = this;
      if (this.project.collections !== undefined) {
        return this.project.collections.filter(function (collection) {
          return !_this.searchCollection || collection.name.toLowerCase().indexOf(_this.searchCollection.toLowerCase()) > -1;
        });
      }
    }
  },
  props: ['project']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/MediaLibrary.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/MediaLibrary.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var v_clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! v-clipboard */ "./node_modules/v-clipboard/dist/index.min.js");
/* harmony import */ var v_clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(v_clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-upload-component */ "./node_modules/vue-upload-component/dist/vue-upload-component.js");
/* harmony import */ var vue_upload_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_upload_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Button_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../UI/Button.vue */ "./resources/js/UI/Button.vue");
/* harmony import */ var _checkrole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../checkrole */ "./resources/js/checkrole.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





vue__WEBPACK_IMPORTED_MODULE_4__["default"].use((v_clipboard__WEBPACK_IMPORTED_MODULE_0___default()));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    UiButton: _UI_Button_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    FileUpload: (vue_upload_component__WEBPACK_IMPORTED_MODULE_1___default())
  },
  props: {
    'project': {},
    'selected': {
      "default": function _default() {
        return [];
      }
    },
    'disableDelete': {
      "default": false
    },
    media_type: {
      type: Number
    }
  },
  data: function data() {
    return {
      media: {},
      search: null,
      selectedFiles: [],
      selectedFile: null,
      showUploader: false,
      selectAll: false,
      files: [],
      headers: {
        'X-Csrf-Token': document.head.querySelector('meta[name="csrf-token"]').content
      },
      uploadData: {
        project_id: null
      },
      upload_max_filesize: null,
      fileUpdateData: {}
    };
  },
  methods: {
    getMedia: function getMedia(page) {
      var _this = this;
      if (typeof page === 'undefined') {
        page = 1;
      }
      axios.get('/admin/media/get-files/' + this.project.id + '?page=' + page, {
        params: {
          search: this.search
        }
      }).then(function (response) {
        _this.media = response.data.media;
        _this.uploadData.project_id = _this.project.id;
        _this.upload_max_filesize = response.data.upload_max_filesize;
      });
      this.selectAll = false;
    },
    hideUploader: function hideUploader() {
      this.showUploader = false;
      for (var i = 0; i < this.files.length; i++) {
        var element = this.files[i];
        if (element.success && this.hasInsertListener) {
          this.selectedFiles.push(element.response.id);
        }
      }
      this.$forceUpdate();
      this.files = [];
      this.getMedia();
    },
    inputFilter: function inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent();
        }
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent();
        }
      }
      if (newFile && newFile.error === "" && newFile.file && (!oldFile || newFile.file !== oldFile.file)) {
        newFile.blob = '';
        var URL = window.URL || window.webkitURL;
        if (URL) {
          newFile.blob = URL.createObjectURL(newFile.file);
        }
        newFile.thumb = '';
        if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
          newFile.thumb = newFile.blob;
        }
      }
    },
    selectFile: function selectFile(file) {
      if (this.selectedFile !== null && this.selectedFile.id === file.id) {
        var lastFile = this.selectedFiles[this.selectedFiles.length - 2];
        if (lastFile !== undefined) {
          this.selectedFile = this.media.data.find(function (f) {
            return f.id === lastFile;
          });
          this.fileUpdateData = _objectSpread({}, this.selectedFile);
          this.fileUpdateData.name = this.fileUpdateData.name.split('.')[0];
        } else {
          this.selectedFile = null;
        }
      } else {
        if (!this.checkIfSelected(file)) {
          this.selectedFile = file;
          this.fileUpdateData = _objectSpread({}, file);
          this.fileUpdateData.name = this.fileUpdateData.name.split('.')[0];
        }
      }
      this.selectAll = false;
      if (this.media_type == 1) {
        if (this.selectedFiles.includes(file.id)) {
          this.selectedFiles.splice(this.selectedFiles.findIndex(function (v) {
            return v === file.id;
          }), 1);
        } else {
          this.selectedFiles = [];
          this.selectedFiles.push(file.id);
        }
      } else {
        if (this.selectedFiles.includes(file.id)) {
          this.selectedFiles.splice(this.selectedFiles.findIndex(function (v) {
            return v === file.id;
          }), 1);
        } else {
          this.selectedFiles.push(file.id);
        }
      }
    },
    selectAllFiles: function selectAllFiles() {
      if (!this.selectAll) {
        for (var i = 0; i < this.media.data.length; i++) {
          if (!this.selectedFiles.includes(this.media.data[i].id)) {
            this.selectedFiles.push(this.media.data[i].id);
          }
        }
        var lastFile = this.selectedFiles[this.selectedFiles.length - 1];
        if (lastFile !== undefined) {
          this.selectedFile = this.media.data.find(function (f) {
            return f.id === lastFile;
          });
          this.fileUpdateData = _objectSpread({}, this.selectedFile);
          this.fileUpdateData.name = this.fileUpdateData.name.split('.')[0];
        }
      } else {
        this.selectedFiles = [];
        this.selectedFile = null;
        this.fileUpdateData = {};
      }
    },
    checkIfSelected: function checkIfSelected(file) {
      return this.selectedFiles.includes(file.id);
    },
    insertFiles: function insertFiles() {
      this.$emit('insert', this.selectedFiles);
      this.selectAll = false;
    },
    deleteFile: function deleteFile(file, index) {
      var _this2 = this;
      this.$swal.fire({
        title: 'Are you sure',
        text: "you want to delete this file?"
      }).then(function (result) {
        if (result.value) {
          axios["delete"]('/admin/media/delete/' + _this2.$route.params.project_id + '/' + file.id, {
            params: {
              project_id: _this2.project.id
            }
          }).then(function (response) {
            var _this2$selectedFile;
            _this2.$toast.success('File deleted!');
            _this2.getMedia();
            for (var i = 0; i < _this2.selectedFiles.length; i++) {
              var element = _this2.selectedFiles[i];
              if (file.id === element) _this2.$delete(_this2.selectedFiles, i);
            }
            if (((_this2$selectedFile = _this2.selectedFile) === null || _this2$selectedFile === void 0 ? void 0 : _this2$selectedFile.id) == file.id) {
              _this2.selectedFile = null;
              _this2.fileUpdateData = {};
            }
          });
        }
      });
    },
    deleteSelected: function deleteSelected() {
      var _this3 = this;
      this.$swal.fire({
        title: 'Are you sure',
        text: "you want to delete these " + this.selectedFiles.length + " files?"
      }).then(function (result) {
        if (result.value) {
          axios.post('/admin/media/delete-selected/' + _this3.$route.params.project_id, {
            files: _this3.selectedFiles
          }).then(function (response) {
            _this3.$toast.success('Files deleted!');
            _this3.getMedia();
            _this3.selectedFiles = [];
            _this3.selectedFile = null;
            _this3.fileUpdateData = {};
          });
        }
      });
    },
    copyToClipboard: function copyToClipboard(str) {
      this.$clipboard(str);
      this.$toast.success('Copied to clipboard');
    },
    updateFileSubmit: function updateFileSubmit() {
      var _this4 = this;
      axios.post('/admin/media/update/' + this.$route.params.project_id + '/' + this.fileUpdateData.id, this.fileUpdateData).then(function (response) {
        _this4.$toast.success('File updated!');
        _this4.selectedFile = response.data;
        _this4.fileUpdateData = _objectSpread({}, response.data);
        _this4.fileUpdateData.name = _this4.fileUpdateData.name.split('.')[0];
        _this4.getMedia();
      });
    },
    checkRole: _checkrole__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    hasInsertListener: function hasInsertListener() {
      return this.$listeners && this.$listeners.insert;
    }
  },
  watch: {
    'project.id': function projectId(newId, oldId) {
      this.getMedia();
    },
    'selected': function selected(newD, oldD) {
      this.selectedFiles = newD;
    }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Content/Media.vue?vue&type=template&id=89fa93fc":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Content/Media.vue?vue&type=template&id=89fa93fc ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "app__content-media-library h-full relative overflow-hidden"
  }, [_c("project-header", {
    staticClass: "bg-white",
    attrs: {
      project: _vm.project
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "flex h-full pt-20 overflow-hidden"
  }, [_c("div", {
    staticClass: "w-3/12 overflow-x-hidden h-full bg-white"
  }, [_c("content-sidebar", {
    attrs: {
      project: _vm.project
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "w-9/12 p-4 overflow-x-auto"
  }, [_c("media-library", {
    attrs: {
      project: _vm.project
    }
  })], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue?vue&type=template&id=2b9d1b5e":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue?vue&type=template&id=2b9d1b5e ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "app__project-content-sidebar p-4 bg-white"
  }, [_c("div", {
    staticClass: "mb-4"
  }, [!_vm.openSearchInput ? _c("h4", {
    staticClass: "mb-2 p-2 font-bold text-lg flex justify-between items-center h-10"
  }, [_c("div", [_vm._v("\n                Content\n            ")]), _vm._v(" "), _c("div", [_c("a", {
    staticClass: "text-sm text-blue-500 p-1 px-3 cursor-pointer rounded-md hover:bg-gray-100",
    on: {
      click: function click($event) {
        _vm.openSearchInput = true;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-search"
  })])])]) : _vm._e(), _vm._v(" "), _vm.openSearchInput ? _c("div", {
    staticClass: "mb-2 relative flex w-full flex-wrap items-stretch mb-2 h-10"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.searchCollection,
      expression: "searchCollection"
    }],
    staticClass: "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-sm text-sm w-full pl-10 border-gray-200 focus:border-gray-300",
    attrs: {
      type: "text",
      placeholder: "Search...",
      autofocus: ""
    },
    domProps: {
      value: _vm.searchCollection
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.searchCollection = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "z-9 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded-sm text-base items-center justify-center w-8 py-3 right-0 pr-3 cursor-pointer",
    on: {
      click: function click($event) {
        ;
        _vm.searchCollection = "", _vm.openSearchInput = false;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-times-circle"
  })])]) : _vm._e()]), _vm._v(" "), _c("ul", [_vm._l(_vm.filterSearch, function (collection) {
    return _c("li", {
      key: collection.id,
      staticClass: "mb-2"
    }, [_c("router-link", {
      staticClass: "block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",
      attrs: {
        to: {
          name: "projects.content.list",
          params: {
            project_id: _vm.project.id,
            col_id: collection.id
          }
        }
      }
    }, [_vm._v(_vm._s(collection.name))])], 1);
  }), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("li", {
    staticClass: "mb-2"
  }, [typeof _vm.project.id !== "undefined" ? _c("router-link", {
    staticClass: "block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",
    attrs: {
      to: {
        name: "projects.media_library",
        params: {
          id: _vm.project.id
        }
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-images text-gray-600 mr-3"
  }), _vm._v(" Media Library")]) : _vm._e()], 1)], 2)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "z-9 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded-sm text-base items-center justify-center w-8 pl-3 py-3"
  }, [_c("i", {
    staticClass: "fas fa-search"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "mb-2"
  }, [_c("hr")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/MediaLibrary.vue?vue&type=template&id=a3f8fb30":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/MediaLibrary.vue?vue&type=template&id=a3f8fb30 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "app__media-library"
  }, [_c("h4", {
    staticClass: "mb-2 py-2 font-bold text-lg"
  }, [_c("i", {
    staticClass: "fas fa-images text-gray-600"
  }), _vm._v(" Media Library\n        "), !_vm.showUploader ? _c("ui-button", {
    staticClass: "float-right",
    attrs: {
      color: "indigo-500"
    },
    nativeOn: {
      click: function click($event) {
        _vm.showUploader = true;
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-upload text-white mr-3"
  }), _vm._v(" Upload Files")]) : _vm._e(), _vm._v(" "), !_vm.showUploader && _vm.selectedFiles.length !== 0 && !_vm.disableDelete ? _c("ui-button", {
    staticClass: "float-right mr-2",
    attrs: {
      color: "red-500"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.deleteSelected();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-trash text-white mr-3"
  }), _vm._v(" Delete (" + _vm._s(this.selectedFiles.length) + ")")]) : _vm._e(), _vm._v(" "), !_vm.showUploader && _vm.hasInsertListener ? _c("ui-button", {
    staticClass: "float-right mr-2",
    attrs: {
      color: "green-500"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.insertFiles();
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-plus text-white mr-3"
  }), _vm._v(" Insert Files (" + _vm._s(this.selectedFiles.length) + ")")]) : _vm._e(), _vm._v(" "), _vm.showUploader ? _c("ui-button", {
    staticClass: "float-right",
    attrs: {
      color: "green-500"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.hideUploader.apply(null, arguments);
      }
    }
  }, [_c("i", {
    staticClass: "fas fa-chevron-left text-white mr-3"
  }), _vm._v(" File List")]) : _vm._e(), _vm._v(" "), _vm.showUploader && _vm.files.length != 0 && (!_vm.$refs.upload || !_vm.$refs.upload.active) ? _c("ui-button", {
    staticClass: "float-right mr-2",
    attrs: {
      color: "indigo-500"
    },
    nativeOn: {
      click: function click($event) {
        _vm.$refs.upload.active = true;
      }
    }
  }, [_vm._v("  Start Upload ")]) : _vm._e()], 1), _vm._v(" "), !_vm.showUploader ? _c("div", [_c("div", {
    staticClass: "flex w-full mt-4 clear-both"
  }, [_c("div", {
    staticClass: "w-full"
  }, [_vm._m(0), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.search,
      expression: "search"
    }],
    staticClass: "px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-sm text-sm w-full pl-10 border-gray-200 focus:border-gray-300",
    attrs: {
      type: "text",
      placeholder: "Search for files..."
    },
    domProps: {
      value: _vm.search
    },
    on: {
      keyup: function keyup($event) {
        return _vm.getMedia();
      },
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.search = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "bg-white rounded-sm text-sm px-3 flex items-center text-center border border-gray-200 ml-2"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selectAll,
      expression: "selectAll"
    }],
    staticClass: "flex",
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.selectAll) ? _vm._i(_vm.selectAll, null) > -1 : _vm.selectAll
    },
    on: {
      click: function click($event) {
        return _vm.selectAllFiles();
      },
      change: function change($event) {
        var $$a = _vm.selectAll,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.selectAll = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.selectAll = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.selectAll = $$c;
        }
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "grid grid-cols-8"
  }, [_c("div", {
    staticClass: "col-span-6"
  }, [_c("div", [_c("div", {
    staticClass: "my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4"
  }, _vm._l(_vm.media.data, function (file, index) {
    return _c("div", {
      key: file.id,
      staticClass: "relative rounded-sm bg-white border-4",
      "class": {
        "border-indigo-500": _vm.selectedFile && _vm.selectedFile.id == file.id
      }
    }, [_c("input", {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.checkIfSelected(file),
        expression: "checkIfSelected(file)"
      }],
      staticClass: "absolute inset-0 m-3",
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: _vm.checkIfSelected(file)
      }
    }), _vm._v(" "), _c("div", [_c("div", {
      staticClass: "w-full h-32 absolute top-0 left-0 bg-black bg-opacity-70 items-center text-center flex opacity-0 hover:opacity-100 z-10"
    }, [_c("div", {
      staticClass: "absolute inset-0 w-full text-left z-10",
      on: {
        click: function click($event) {
          return _vm.selectFile(file);
        }
      }
    }, [_c("input", {
      staticClass: "m-3",
      attrs: {
        type: "checkbox"
      },
      domProps: {
        checked: _vm.checkIfSelected(file)
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "w-full z-20"
    }, [_c("div", {
      staticClass: "text-sm w-full"
    }, [_c("a", {
      attrs: {
        href: file.full_url,
        target: "_blank"
      }
    }, [file.type == "jpg" || file.type == "jpeg" || file.type == "png" || file.type == "bmp" || file.type == "gif" || file.type == "webp" ? _c("i", {
      staticClass: "fa fa-eye text-gray-100 cursor-pointer hover:text-gray-200 text-lg mr-2"
    }) : _c("i", {
      staticClass: "fa fa-file-download text-gray-100 cursor-pointer hover:text-gray-200 text-lg mr-2"
    })]), _vm._v(" "), !_vm.disableDelete ? _c("i", {
      staticClass: "fa fa-trash-alt text-gray-100 cursor-pointer hover:text-gray-200 text-lg ml-2",
      on: {
        click: function click($event) {
          return _vm.deleteFile(file, index);
        }
      }
    }) : _vm._e()])])]), _vm._v(" "), file.type == "jpg" || file.type == "jpeg" || file.type == "png" || file.type == "gif" || file.type == "webp" ? _c("span", [_c("img", {
      staticClass: "w-full h-32 object-cover",
      attrs: {
        src: file.full_url_thumb
      }
    })]) : _c("div", {
      staticClass: "w-full h-32 object-cover flex items-center text-center"
    }, [_c("div", {
      staticClass: "w-full"
    }, [file.type == "pdf" ? _c("i", {
      staticClass: "far fa-file-pdf text-5xl text-red-500"
    }) : file.type == "avi" || file.type == "mp4" || file.type == "mov" || file.type == "webm" ? _c("i", {
      staticClass: "far fa-file-video text-5xl text-blue-500"
    }) : file.type == "wav" || file.type == "ogg" || file.type == "mpeg" ? _c("i", {
      staticClass: "far fa-file-audio text-5xl text-yellow-500"
    }) : file.type == "xls" || file.type == "xlsx" ? _c("i", {
      staticClass: "far fa-file-excel text-5xl text-green-500"
    }) : file.type == "doc" || file.type == "docx" ? _c("i", {
      staticClass: "far fa-file-word text-5xl text-blue-500"
    }) : file.type == "zip" ? _c("i", {
      staticClass: "far fa-file-archive text-5xl text-yellow-300"
    }) : _c("i", {
      staticClass: "far fa-file text-5xl text-gray-400"
    })])])])]);
  }), 0), _vm._v(" "), _c("pagination", {
    staticClass: "float-left",
    attrs: {
      data: _vm.media,
      size: "small",
      limit: 3
    },
    on: {
      "pagination-change-page": _vm.getMedia
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "text-sm italic float-right text-gray-500"
  }, [_vm._v("\n                        total " + _vm._s(_vm.media.total) + " files, " + _vm._s(_vm.media.from) + " - " + _vm._s(_vm.media.to) + " showing\n                    ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "col-span-2 m-4 mt-5 p-4 border border-gray-200 rounded-sm bg-gray-100"
  }, [_vm.selectedFile !== null ? _c("div", [_c("h3", {
    staticClass: "font-semibold text-sm mb-4"
  }, [_vm._v("FILE DETAILS")]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "float-left mr-2 w-28 bg-white"
  }, [_vm.selectedFile.type == "jpg" || _vm.selectedFile.type == "jpeg" || _vm.selectedFile.type == "png" || _vm.selectedFile.type == "gif" || _vm.selectedFile.type == "webp" ? _c("span", [_c("img", {
    staticClass: "w-full h-28 object-cover rounded-sm border rounded-sm",
    attrs: {
      src: _vm.selectedFile.full_url_thumb
    }
  })]) : _c("div", {
    staticClass: "w-full h-28 object-cover flex items-center text-center border rounded-sm"
  }, [_c("div", {
    staticClass: "w-full"
  }, [_vm.selectedFile.type == "pdf" ? _c("i", {
    staticClass: "far fa-file-pdf text-5xl text-red-500"
  }) : _vm.selectedFile.type == "avi" || _vm.selectedFile.type == "mp4" || _vm.selectedFile.type == "mov" || _vm.selectedFile.type == "webm" ? _c("i", {
    staticClass: "far fa-file-video text-5xl text-blue-500"
  }) : _vm.selectedFile.type == "wav" || _vm.selectedFile.type == "ogg" || _vm.selectedFile.type == "mpeg" ? _c("i", {
    staticClass: "far fa-file-audio text-5xl text-yellow-500"
  }) : _vm.selectedFile.type == "xls" || _vm.selectedFile.type == "xlsx" ? _c("i", {
    staticClass: "far fa-file-excel text-5xl text-green-500"
  }) : _vm.selectedFile.type == "doc" || _vm.selectedFile.type == "docx" ? _c("i", {
    staticClass: "far fa-file-word text-5xl text-blue-500"
  }) : _vm.selectedFile.type == "zip" ? _c("i", {
    staticClass: "far fa-file-archive text-5xl text-yellow-300"
  }) : _c("i", {
    staticClass: "far fa-file text-5xl text-gray-400"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "float-left text-sm"
  }, [_c("div", {
    staticClass: "font-semibold"
  }, [_vm._v(_vm._s(_vm.selectedFile.name))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm._f("date")(_vm.selectedFile.created_at, "D MMM YYYY")))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm._f("prettyBytes")(_vm.selectedFile.size)))]), _vm._v(" "), _vm.selectedFile.width !== null && _vm.selectedFile.height !== null ? _c("div", [_vm._v("\n                                " + _vm._s(_vm.selectedFile.width) + " x " + _vm._s(_vm.selectedFile.height) + "\n                            ")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "clear-left"
  })]), _vm._v(" "), _c("div", {
    staticClass: "mt-6 clear-both"
  }, [_c("div", [_c("label", {
    directives: [{
      name: "formlabel",
      rawName: "v-formlabel"
    }]
  }, [_vm._v("File Name")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fileUpdateData.name,
      expression: "fileUpdateData.name"
    }],
    staticClass: "text-sm w-full rounded-sm border-gray-300",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.fileUpdateData.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.fileUpdateData, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("label", {
    directives: [{
      name: "formlabel",
      rawName: "v-formlabel"
    }]
  }, [_vm._v("Caption")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.fileUpdateData.caption,
      expression: "fileUpdateData.caption"
    }],
    staticClass: "text-sm w-full rounded-sm border-gray-300",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.fileUpdateData.caption
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.fileUpdateData, "caption", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("label", {
    directives: [{
      name: "formlabel",
      rawName: "v-formlabel"
    }]
  }, [_vm._v("File Path")]), _vm._v(" "), _c("div", {
    staticClass: "flex rounded-sm cursor-pointer",
    on: {
      click: function click($event) {
        return _vm.copyToClipboard(_vm.selectedFile.full_url);
      }
    }
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    staticClass: "text-sm w-full rounded-sm border-gray-300 rounded-l-none cursor-pointer",
    attrs: {
      type: "text",
      readonly: "",
      disabled: ""
    },
    domProps: {
      value: _vm.selectedFile.full_url
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "mt-4"
  }, [_c("ui-button", {
    attrs: {
      color: "indigo-500"
    },
    nativeOn: {
      click: function click($event) {
        return _vm.updateFileSubmit();
      }
    }
  }, [_vm._v("Update File")])], 1)])]) : _vm._e()])])]) : _vm._e(), _vm._v(" "), _vm.showUploader ? _c("div", [_c("div", {
    staticClass: "mt-4"
  }, [_c("div", {
    staticClass: "mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
  }, [_c("div", {
    staticClass: "space-y-1 text-center"
  }, [_c("svg", {
    staticClass: "mx-auto h-12 w-12 text-gray-400",
    attrs: {
      stroke: "currentColor",
      fill: "none",
      viewBox: "0 0 48 48",
      "aria-hidden": "true"
    }
  }, [_c("path", {
    attrs: {
      d: "M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "flex text-sm text-gray-600 text-center"
  }, [_c("label", {
    staticClass: "relative rounded-md font-medium text-indigo-600 hover:text-indigo-500 w-full",
    attrs: {
      "for": "file-upload"
    }
  }, [_c("file-upload", {
    ref: "upload",
    attrs: {
      "post-action": "/admin/media/upload/" + _vm.$route.params.project_id,
      multiple: true,
      size: _vm.upload_max_filesize,
      drop: true,
      "drop-directory": true,
      headers: _vm.headers,
      data: _vm.uploadData,
      thread: 4
    },
    on: {
      "input-filter": _vm.inputFilter
    },
    model: {
      value: _vm.files,
      callback: function callback($$v) {
        _vm.files = $$v;
      },
      expression: "files"
    }
  }, [_c("span", {
    staticClass: "cursor-pointer"
  }, [_vm._v("Select a file or drag and drop")])])], 1)]), _vm._v(" "), _vm.upload_max_filesize !== null ? _c("p", {
    staticClass: "text-xs text-gray-500"
  }, [_vm._v("\n                        Up to " + _vm._s(_vm._f("prettyBytes")(_vm.upload_max_filesize, 1024)) + "\n                    ")]) : _vm._e(), _vm._v(" "), typeof _vm.project.id !== "undefined" && _vm.checkRole(["admin" + _vm.project.id]) && _vm.project.s3 ? _c("p", {
    staticClass: "text-sm text-gray-500 pt-5 w-full text-center"
  }, [_c("i", {
    staticClass: "fas fa-hdd"
  }), _vm._v("\n                        Default upload disk is "), _c("strong", [_vm._v(_vm._s(_vm.project.disk == "s3" ? "AWS S3" : "Local"))]), _vm._v(". You can change it in "), _c("router-link", {
    staticClass: "font-bold text-indigo-500",
    attrs: {
      to: {
        name: "projects.settings",
        params: {
          project_id: _vm.project.id
        }
      }
    }
  }, [_vm._v("settings")]), _vm._v(".\n                    ")], 1) : _vm._e()])]), _vm._v(" "), _vm.files.length != 0 ? _c("div", {
    staticClass: "my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4"
  }, _vm._l(_vm.files, function (file) {
    return _c("div", {
      key: file.id,
      staticClass: "relative"
    }, [file.thumb ? _c("img", {
      staticClass: "w-full h-32 object-cover",
      attrs: {
        src: file.thumb
      }
    }) : _vm._e(), _vm._v(" "), !file.thumb ? _c("div", {
      staticClass: "w-full h-32 object-cover border border-gray-200 flex items-center text-center"
    }, [_c("div", {
      staticClass: "w-full"
    }, [file.type == "application/pdf" ? _c("i", {
      staticClass: "far fa-file-pdf text-5xl text-red-500"
    }) : file.type == "video/avi" || file.type == "video/mp4" || file.type == "video/quicktime" || file.type == "video/webm" ? _c("i", {
      staticClass: "far fa-file-video text-5xl text-blue-500"
    }) : file.type == "audio/wav" || file.type == "audio/ogg" || file.type == "audio/mpeg" ? _c("i", {
      staticClass: "far fa-file-audio text-5xl text-yellow-500"
    }) : file.type == "application/vnd.ms-excel" || file.type == "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ? _c("i", {
      staticClass: "far fa-file-excel text-5xl text-green-500"
    }) : file.type == "application/msword" || file.type == "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? _c("i", {
      staticClass: "far fa-file-word text-5xl text-blue-500"
    }) : file.type == "application/zip" ? _c("i", {
      staticClass: "far fa-file-archive text-5xl text-yellow-300"
    }) : _c("i", {
      staticClass: "far fa-file text-5xl text-gray-400"
    })])]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "w-full mt-1"
    }, [_c("div", {
      staticClass: "text-xs float-left",
      attrs: {
        title: file.name
      }
    }, [_vm._v("\n                            " + _vm._s(file.name.substring(0, 16)) + "\n                            "), file.name.length > 16 ? _c("span", [_vm._v("...")]) : _vm._e(), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm._f("prettyBytes")(file.size)))])]), _vm._v(" "), _c("div", {
      staticClass: "text-sm float-right"
    }, [!file.success ? _c("i", {
      staticClass: "fa fa-times-circle text-red-400 cursor-pointer hover:text-red-600",
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.$refs.upload.remove(file);
        }
      }
    }) : _vm._e()])]), _vm._v(" "), file.active || file.error || file.success ? _c("div", {
      staticClass: "absolute inset-0 bg-white bg-opacity-90 w-full h-32 p-4 flex items-center text-center border border-gray-200"
    }, [_c("div", {
      staticClass: "relative pt-1 w-full"
    }, [_c("div", {
      staticClass: "flex mb-2 items-center justify-between"
    }, [_c("div", [_c("span", {
      staticClass: "text-xs font-semibold inline-block py-1 rounded-sm",
      "class": {
        "text-green-500": file.success,
        "text-red-500": file.error,
        "text-blue-500": file.active
      }
    }, [file.error ? _c("span", [_vm._v(_vm._s(file.error))]) : file.success ? _c("span", [_vm._v("done")]) : file.active ? _c("span", [_vm._v("uploading")]) : _vm._e()])]), _vm._v(" "), _c("div", {
      staticClass: "text-right"
    }, [_c("span", {
      staticClass: "text-xs font-semibold inline-block",
      "class": {
        "text-green-500": file.success,
        "text-red-500": file.error,
        "text-blue-500": file.active
      }
    }, [_vm._v("\n                                        " + _vm._s(file.progress) + "%\n                                    ")])])]), _vm._v(" "), _c("div", {
      staticClass: "overflow-hidden h-2 mb-4 text-xs flex rounded",
      "class": {
        "bg-green-200": file.success,
        "bg-red-200": file.error,
        "bg-blue-200": file.active
      }
    }, [_c("div", {
      staticClass: "shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center",
      "class": {
        "bg-green-500": file.success,
        "bg-red-500": file.error,
        "bg-blue-500": file.active
      },
      style: {
        width: file.progress + "%"
      }
    })])])]) : _vm._e()]);
  }), 0) : _vm._e()])]) : _vm._e()]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded-sm text-base items-center justify-center w-8 pl-3 py-3"
  }, [_c("i", {
    staticClass: "fas fa-search"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "inline-flex items-center px-3 rounded-l-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer"
  }, [_c("i", {
    staticClass: "far fa-copy"
  })]);
}];
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

/***/ "./resources/js/pages/Projects/Content/Media.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/Projects/Content/Media.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Media_vue_vue_type_template_id_89fa93fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media.vue?vue&type=template&id=89fa93fc */ "./resources/js/pages/Projects/Content/Media.vue?vue&type=template&id=89fa93fc");
/* harmony import */ var _Media_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media.vue?vue&type=script&lang=js */ "./resources/js/pages/Projects/Content/Media.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Media_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Media_vue_vue_type_template_id_89fa93fc__WEBPACK_IMPORTED_MODULE_0__.render,
  _Media_vue_vue_type_template_id_89fa93fc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Projects/Content/Media.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ContentSidebar_vue_vue_type_template_id_2b9d1b5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentSidebar.vue?vue&type=template&id=2b9d1b5e */ "./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue?vue&type=template&id=2b9d1b5e");
/* harmony import */ var _ContentSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentSidebar.vue?vue&type=script&lang=js */ "./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContentSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentSidebar_vue_vue_type_template_id_2b9d1b5e__WEBPACK_IMPORTED_MODULE_0__.render,
  _ContentSidebar_vue_vue_type_template_id_2b9d1b5e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Projects/_Sections_/MediaLibrary.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/pages/Projects/_Sections_/MediaLibrary.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MediaLibrary_vue_vue_type_template_id_a3f8fb30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaLibrary.vue?vue&type=template&id=a3f8fb30 */ "./resources/js/pages/Projects/_Sections_/MediaLibrary.vue?vue&type=template&id=a3f8fb30");
/* harmony import */ var _MediaLibrary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MediaLibrary.vue?vue&type=script&lang=js */ "./resources/js/pages/Projects/_Sections_/MediaLibrary.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MediaLibrary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _MediaLibrary_vue_vue_type_template_id_a3f8fb30__WEBPACK_IMPORTED_MODULE_0__.render,
  _MediaLibrary_vue_vue_type_template_id_a3f8fb30__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Projects/_Sections_/MediaLibrary.vue"
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

/***/ "./resources/js/pages/Projects/Content/Media.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/Projects/Content/Media.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Media.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Content/Media.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue?vue&type=script&lang=js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContentSidebar.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentSidebar_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Projects/_Sections_/MediaLibrary.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/Projects/_Sections_/MediaLibrary.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLibrary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MediaLibrary.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/MediaLibrary.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLibrary_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/pages/Projects/Content/Media.vue?vue&type=template&id=89fa93fc":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/Projects/Content/Media.vue?vue&type=template&id=89fa93fc ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_89fa93fc__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_89fa93fc__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_89fa93fc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Media.vue?vue&type=template&id=89fa93fc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Content/Media.vue?vue&type=template&id=89fa93fc");


/***/ }),

/***/ "./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue?vue&type=template&id=2b9d1b5e":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue?vue&type=template&id=2b9d1b5e ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentSidebar_vue_vue_type_template_id_2b9d1b5e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentSidebar_vue_vue_type_template_id_2b9d1b5e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentSidebar_vue_vue_type_template_id_2b9d1b5e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ContentSidebar.vue?vue&type=template&id=2b9d1b5e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/Content/_Sections_/ContentSidebar.vue?vue&type=template&id=2b9d1b5e");


/***/ }),

/***/ "./resources/js/pages/Projects/_Sections_/MediaLibrary.vue?vue&type=template&id=a3f8fb30":
/*!***********************************************************************************************!*\
  !*** ./resources/js/pages/Projects/_Sections_/MediaLibrary.vue?vue&type=template&id=a3f8fb30 ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLibrary_vue_vue_type_template_id_a3f8fb30__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   staticRenderFns: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLibrary_vue_vue_type_template_id_a3f8fb30__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MediaLibrary_vue_vue_type_template_id_a3f8fb30__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MediaLibrary.vue?vue&type=template&id=a3f8fb30 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Projects/_Sections_/MediaLibrary.vue?vue&type=template&id=a3f8fb30");


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


/***/ }),

/***/ "./node_modules/vue-upload-component/dist/vue-upload-component.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-upload-component/dist/vue-upload-component.js ***!
  \************************************************************************/
/***/ (function(module) {

/*!
 * Name: vue-upload-component
 * Version: 2.8.22
 * Author: LianYue
 */
(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  /**
   * Creates a XHR request
   *
   * @param {Object} options
   */
  var createRequest = function createRequest(options) {
    var xhr = new XMLHttpRequest();
    xhr.open(options.method || 'GET', options.url);
    xhr.responseType = 'json';
    if (options.headers) {
      Object.keys(options.headers).forEach(function (key) {
        xhr.setRequestHeader(key, options.headers[key]);
      });
    }

    return xhr;
  };

  /**
   * Sends a XHR request with certain body
   *
   * @param {XMLHttpRequest} xhr
   * @param {Object} body
   */
  var sendRequest = function sendRequest(xhr, body) {
    return new Promise(function (resolve, reject) {
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var response;
          try {
            response = JSON.parse(xhr.response);
          } catch (err) {
            response = xhr.response;
          }
          resolve(response);
        } else {
          reject(xhr.response);
        }
      };
      xhr.onerror = function () {
        return reject(xhr.response);
      };
      xhr.send(JSON.stringify(body));
    });
  };

  /**
   * Sends a XHR request with certain form data
   *
   * @param {XMLHttpRequest} xhr
   * @param {Object} data
   */
  var sendFormRequest = function sendFormRequest(xhr, data) {
    var body = new FormData();
    for (var name in data) {
      body.append(name, data[name]);
    }

    return new Promise(function (resolve, reject) {
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          var response;
          try {
            response = JSON.parse(xhr.response);
          } catch (err) {
            response = xhr.response;
          }
          resolve(response);
        } else {
          reject(xhr.response);
        }
      };
      xhr.onerror = function () {
        return reject(xhr.response);
      };
      xhr.send(body);
    });
  };

  /**
   * Creates and sends XHR request
   *
   * @param {Object} options
   *
   * @returns Promise
   */
  function request (options) {
    var xhr = createRequest(options);

    return sendRequest(xhr, options.body);
  }

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var ChunkUploadHandler = function () {
    /**
     * Constructor
     *
     * @param {File} file
     * @param {Object} options
     */
    function ChunkUploadHandler(file, options) {
      _classCallCheck(this, ChunkUploadHandler);

      this.file = file;
      this.options = options;
      this.chunks = [];
      this.sessionId = null;
      this.chunkSize = null;
      this.speedInterval = null;
    }

    /**
     * Gets the max retries from options
     */


    _createClass(ChunkUploadHandler, [{
      key: 'createChunks',


      /**
       * Creates all the chunks in the initial state
       */
      value: function createChunks() {
        this.chunks = [];

        var start = 0;
        var end = this.chunkSize;
        while (start < this.fileSize) {
          this.chunks.push({
            blob: this.file.file.slice(start, end),
            startOffset: start,
            active: false,
            retries: this.maxRetries
          });
          start = end;
          end = start + this.chunkSize;
        }
      }

      /**
       * Updates the progress of the file with the handler's progress
       */

    }, {
      key: 'updateFileProgress',
      value: function updateFileProgress() {
        this.file.progress = this.progress;
      }

      /**
       * Paues the upload process
       * - Stops all active requests
       * - Sets the file not active
       */

    }, {
      key: 'pause',
      value: function pause() {
        this.file.active = false;
        this.stopChunks();
      }

      /**
       * Stops all the current chunks
       */

    }, {
      key: 'stopChunks',
      value: function stopChunks() {
        this.chunksUploading.forEach(function (chunk) {
          chunk.xhr.abort();
          chunk.active = false;
        });

        this.stopSpeedCalc();
      }

      /**
       * Resumes the file upload
       * - Sets the file active
       * - Starts the following chunks
       */

    }, {
      key: 'resume',
      value: function resume() {
        this.file.active = true;
        this.startChunking();
      }

      /**
       * Starts the file upload
       *
       * @returns Promise
       * - resolve  The file was uploaded
       * - reject   The file upload failed
       */

    }, {
      key: 'upload',
      value: function upload() {
        var _this = this;

        this.promise = new Promise(function (resolve, reject) {
          _this.resolve = resolve;
          _this.reject = reject;
        });
        this.start();

        return this.promise;
      }

      /**
       * Start phase
       * Sends a request to the backend to initialise the chunks
       */

    }, {
      key: 'start',
      value: function start() {
        var _this2 = this;

        request({
          method: 'POST',
          headers: Object.assign({}, this.headers, {
            'Content-Type': 'application/json'
          }),
          url: this.action,
          body: Object.assign(this.startBody, {
            phase: 'start',
            mime_type: this.fileType,
            size: this.fileSize,
            name: this.fileName
          })
        }).then(function (res) {
          if (res.status !== 'success') {
            _this2.file.response = res;
            return _this2.reject('server');
          }

          _this2.sessionId = res.data.session_id;
          _this2.chunkSize = res.data.end_offset;

          _this2.createChunks();
          _this2.startChunking();
        }).catch(function (res) {
          _this2.file.response = res;
          _this2.reject('server');
        });
      }

      /**
       * Starts to upload chunks
       */

    }, {
      key: 'startChunking',
      value: function startChunking() {
        for (var i = 0; i < this.maxActiveChunks; i++) {
          this.uploadNextChunk();
        }

        this.startSpeedCalc();
      }

      /**
       * Uploads the next chunk
       * - Won't do anything if the process is paused
       * - Will start finish phase if there are no more chunks to upload
       */

    }, {
      key: 'uploadNextChunk',
      value: function uploadNextChunk() {
        if (this.file.active) {
          if (this.hasChunksToUpload) {
            return this.uploadChunk(this.chunksToUpload[0]);
          }

          if (this.chunksUploading.length === 0) {
            return this.finish();
          }
        }
      }

      /**
       * Uploads a chunk
       * - Sends the chunk to the backend
       * - Sets the chunk as uploaded if everything went well
       * - Decreases the number of retries if anything went wrong
       * - Fails if there are no more retries
       *
       * @param {Object} chunk
       */

    }, {
      key: 'uploadChunk',
      value: function uploadChunk(chunk) {
        var _this3 = this;

        chunk.progress = 0;
        chunk.active = true;
        this.updateFileProgress();
        chunk.xhr = createRequest({
          method: 'POST',
          headers: this.headers,
          url: this.action
        });

        chunk.xhr.upload.addEventListener('progress', function (evt) {
          if (evt.lengthComputable) {
            chunk.progress = Math.round(evt.loaded / evt.total * 100);
          }
        }, false);

        sendFormRequest(chunk.xhr, Object.assign(this.uploadBody, {
          phase: 'upload',
          session_id: this.sessionId,
          start_offset: chunk.startOffset,
          chunk: chunk.blob
        })).then(function (res) {
          chunk.active = false;
          if (res.status === 'success') {
            chunk.uploaded = true;
          } else {
            if (chunk.retries-- <= 0) {
              _this3.stopChunks();
              return _this3.reject('upload');
            }
          }

          _this3.uploadNextChunk();
        }).catch(function () {
          chunk.active = false;
          if (chunk.retries-- <= 0) {
            _this3.stopChunks();
            return _this3.reject('upload');
          }

          _this3.uploadNextChunk();
        });
      }

      /**
       * Finish phase
       * Sends a request to the backend to finish the process
       */

    }, {
      key: 'finish',
      value: function finish() {
        var _this4 = this;

        this.updateFileProgress();
        this.stopSpeedCalc();

        request({
          method: 'POST',
          headers: Object.assign({}, this.headers, {
            'Content-Type': 'application/json'
          }),
          url: this.action,
          body: Object.assign(this.finishBody, {
            phase: 'finish',
            session_id: this.sessionId
          })
        }).then(function (res) {
          _this4.file.response = res;
          if (res.status !== 'success') {
            return _this4.reject('server');
          }

          _this4.resolve(res);
        }).catch(function (res) {
          _this4.file.response = res;
          _this4.reject('server');
        });
      }

      /**
       * Sets an interval to calculate and
       * set upload speed every 3 seconds
       */

    }, {
      key: 'startSpeedCalc',
      value: function startSpeedCalc() {
        var _this5 = this;

        this.file.speed = 0;
        var lastUploadedBytes = 0;
        if (!this.speedInterval) {
          this.speedInterval = window.setInterval(function () {
            var uploadedBytes = _this5.progress / 100 * _this5.fileSize;
            _this5.file.speed = uploadedBytes - lastUploadedBytes;
            lastUploadedBytes = uploadedBytes;
          }, 1000);
        }
      }

      /**
       * Removes the upload speed interval
       */

    }, {
      key: 'stopSpeedCalc',
      value: function stopSpeedCalc() {
        this.speedInterval && window.clearInterval(this.speedInterval);
        this.speedInterval = null;
        this.file.speed = 0;
      }
    }, {
      key: 'maxRetries',
      get: function get() {
        return parseInt(this.options.maxRetries, 10);
      }

      /**
       * Gets the max number of active chunks being uploaded at once from options
       */

    }, {
      key: 'maxActiveChunks',
      get: function get() {
        return parseInt(this.options.maxActive, 10);
      }

      /**
       * Gets the file type
       */

    }, {
      key: 'fileType',
      get: function get() {
        return this.file.type;
      }

      /**
       * Gets the file size
       */

    }, {
      key: 'fileSize',
      get: function get() {
        return this.file.size;
      }

      /**
       * Gets the file name
       */

    }, {
      key: 'fileName',
      get: function get() {
        return this.file.name;
      }

      /**
       * Gets action (url) to upload the file
       */

    }, {
      key: 'action',
      get: function get() {
        return this.options.action || null;
      }

      /**
       * Gets the body to be merged when sending the request in start phase
       */

    }, {
      key: 'startBody',
      get: function get() {
        return this.options.startBody || {};
      }

      /**
       * Gets the body to be merged when sending the request in upload phase
       */

    }, {
      key: 'uploadBody',
      get: function get() {
        return this.options.uploadBody || {};
      }

      /**
       * Gets the body to be merged when sending the request in finish phase
       */

    }, {
      key: 'finishBody',
      get: function get() {
        return this.options.finishBody || {};
      }

      /**
       * Gets the headers of the requests from options
       */

    }, {
      key: 'headers',
      get: function get() {
        return this.options.headers || {};
      }

      /**
       * Whether it's ready to upload files or not
       */

    }, {
      key: 'readyToUpload',
      get: function get() {
        return !!this.chunks;
      }

      /**
       * Gets the progress of the chunk upload
       * - Gets all the completed chunks
       * - Gets the progress of all the chunks that are being uploaded
       */

    }, {
      key: 'progress',
      get: function get() {
        var _this6 = this;

        var completedProgress = this.chunksUploaded.length / this.chunks.length * 100;
        var uploadingProgress = this.chunksUploading.reduce(function (progress, chunk) {
          return progress + (chunk.progress | 0) / _this6.chunks.length;
        }, 0);

        return Math.min(completedProgress + uploadingProgress, 100);
      }

      /**
       * Gets all the chunks that are pending to be uploaded
       */

    }, {
      key: 'chunksToUpload',
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !chunk.active && !chunk.uploaded;
        });
      }

      /**
       * Whether there are chunks to upload or not
       */

    }, {
      key: 'hasChunksToUpload',
      get: function get() {
        return this.chunksToUpload.length > 0;
      }

      /**
       * Gets all the chunks that are uploading
       */

    }, {
      key: 'chunksUploading',
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !!chunk.xhr && !!chunk.active;
        });
      }

      /**
       * Gets all the chunks that have finished uploading
       */

    }, {
      key: 'chunksUploaded',
      get: function get() {
        return this.chunks.filter(function (chunk) {
          return !!chunk.uploaded;
        });
      }
    }]);

    return ChunkUploadHandler;
  }();

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  var script = {
    methods: {
      change: function change(e) {
        this.$parent.addInputFile(e.target);
        if (e.target.files) {
          e.target.value = '';
          if (e.target.files.length && !/safari/i.test(navigator.userAgent)) {
            e.target.type = '';
            e.target.type = 'file';
          }
        } else {
          // ie9 fix #219
          this.$destroy();
          // eslint-disable-next-line
          new this.constructor({
            parent: this.$parent,
            el: this.$el
          });
        }
      }
    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('input', { attrs: { "type": "file", "name": _vm.$parent.name, "id": _vm.$parent.inputId || _vm.$parent.name, "accept": _vm.$parent.accept, "capture": _vm.$parent.capture, "disabled": _vm.$parent.disabled, "webkitdirectory": _vm.$parent.directory && _vm.$parent.features.directory ? true : undefined, "directory": _vm.$parent.directory && _vm.$parent.features.directory ? true : undefined, "multiple": _vm.$parent.multiple && _vm.$parent.features.html5 }, on: { "change": _vm.change } });
  };
  var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  var InputFile = normalizeComponent_1({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

  var CHUNK_DEFAULT_OPTIONS = {
    headers: {},
    action: '',
    minSize: 1048576,
    maxActive: 3,
    maxRetries: 5,

    handler: ChunkUploadHandler
  };

  var script$1 = {
    components: {
      InputFile: InputFile
    },
    props: {
      inputId: {
        type: String
      },

      name: {
        type: String,
        default: 'file'
      },

      accept: {
        type: String
      },

      capture: {},

      disabled: {},

      multiple: {
        type: Boolean
      },

      maximum: {
        type: Number,
        default: function _default() {
          return this.multiple ? 0 : 1;
        }
      },

      addIndex: {
        type: [Boolean, Number]
      },

      directory: {
        type: Boolean
      },

      postAction: {
        type: String
      },

      putAction: {
        type: String
      },

      customAction: {
        type: Function
      },

      headers: {
        type: Object,
        default: Object
      },

      data: {
        type: Object,
        default: Object
      },

      timeout: {
        type: Number,
        default: 0
      },

      drop: {
        default: false
      },

      dropDirectory: {
        type: Boolean,
        default: true
      },

      size: {
        type: Number,
        default: 0
      },

      extensions: {
        default: Array
      },

      value: {
        type: Array,
        default: Array
      },

      thread: {
        type: Number,
        default: 1
      },

      // Chunk upload enabled
      chunkEnabled: {
        type: Boolean,
        default: false
      },

      // Chunk upload properties
      chunk: {
        type: Object,
        default: function _default() {
          return CHUNK_DEFAULT_OPTIONS;
        }
      }
    },

    data: function data() {
      return {
        files: this.value,
        features: {
          html5: true,
          directory: false,
          drop: false
        },

        active: false,
        dropActive: false,

        uploading: 0,

        destroy: false
      };
    },


    /**
     * mounted
     * @return {[type]} [description]
     */
    mounted: function mounted() {
      var input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;

      // html5 特征
      if (window.FormData && input.files) {
        // 上传目录特征
        if (typeof input.webkitdirectory === 'boolean' || typeof input.directory === 'boolean') {
          this.features.directory = true;
        }

        // 拖拽特征
        if (this.features.html5 && typeof input.ondrop !== 'undefined') {
          this.features.drop = true;
        }
      } else {
        this.features.html5 = false;
      }

      // files 定位缓存
      this.maps = {};
      if (this.files) {
        for (var i = 0; i < this.files.length; i++) {
          var file = this.files[i];
          this.maps[file.id] = file;
        }
      }

      this.$nextTick(function () {
        var _this = this;

        // 更新下父级
        if (this.$parent) {
          this.$parent.$forceUpdate();
          // 拖拽渲染
          this.$parent.$nextTick(function () {
            _this.watchDrop(_this.drop);
          });
        } else {
          // 拖拽渲染
          this.watchDrop(this.drop);
        }
      });
    },


    /**
     * beforeDestroy
     * @return {[type]} [description]
     */
    beforeDestroy: function beforeDestroy() {
      // 已销毁
      this.destroy = true;

      // 设置成不激活
      this.active = false;

      // 销毁拖拽事件
      this.watchDrop(false);
    },


    computed: {
      /**
       * uploading 正在上传的线程
       * @return {[type]} [description]
       */

      /**
       * uploaded 文件列表是否全部已上传
       * @return {[type]} [description]
       */
      uploaded: function uploaded() {
        var file = void 0;
        for (var i = 0; i < this.files.length; i++) {
          file = this.files[i];
          if (file.fileObject && !file.error && !file.success) {
            return false;
          }
        }
        return true;
      },
      chunkOptions: function chunkOptions() {
        return Object.assign(CHUNK_DEFAULT_OPTIONS, this.chunk);
      },
      className: function className() {
        return ['file-uploads', this.features.html5 ? 'file-uploads-html5' : 'file-uploads-html4', this.features.directory && this.directory ? 'file-uploads-directory' : undefined, this.features.drop && this.drop ? 'file-uploads-drop' : undefined, this.disabled ? 'file-uploads-disabled' : undefined];
      }
    },

    watch: {
      active: function active(_active) {
        this.watchActive(_active);
      },
      dropActive: function dropActive(value) {
        this.watchDropActive(value);
        if (this.$parent) {
          this.$parent.$forceUpdate();
        }
      },
      drop: function drop(value) {
        this.watchDrop(value);
      },
      value: function value(files) {
        if (this.files === files) {
          return;
        }
        this.files = files;

        var oldMaps = this.maps;

        // 重写 maps 缓存
        this.maps = {};
        for (var i = 0; i < this.files.length; i++) {
          var file = this.files[i];
          this.maps[file.id] = file;
        }

        // add, update
        for (var key in this.maps) {
          var newFile = this.maps[key];
          var oldFile = oldMaps[key];
          if (newFile !== oldFile) {
            this.emitFile(newFile, oldFile);
          }
        }

        // delete
        for (var _key in oldMaps) {
          if (!this.maps[_key]) {
            this.emitFile(undefined, oldMaps[_key]);
          }
        }
      }
    },

    methods: {

      // 清空
      clear: function clear() {
        if (this.files.length) {
          var files = this.files;
          this.files = [];

          // 定位
          this.maps = {};

          // 事件
          this.emitInput();
          for (var i = 0; i < files.length; i++) {
            this.emitFile(undefined, files[i]);
          }
        }
        return true;
      },


      // 选择
      get: function get(id) {
        if (!id) {
          return false;
        }

        if ((typeof id === 'undefined' ? 'undefined' : _typeof(id)) === 'object') {
          return this.maps[id.id] || false;
        }

        return this.maps[id] || false;
      },


      // 添加
      add: function add(_files) {
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.addIndex;

        var files = _files;
        var isArray = files instanceof Array;

        // 不是数组整理成数组
        if (!isArray) {
          files = [files];
        }

        // 遍历规范对象
        var addFiles = [];
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          if (this.features.html5 && file instanceof Blob) {
            file = {
              file: file,
              size: file.size,
              name: file.webkitRelativePath || file.relativePath || file.name || 'unknown',
              type: file.type
            };
          }
          var fileObject = false;
          if (file.fileObject === false) ; else if (file.fileObject) {
            fileObject = true;
          } else if (typeof Element !== 'undefined' && file.el instanceof Element) {
            fileObject = true;
          } else if (typeof Blob !== 'undefined' && file.file instanceof Blob) {
            fileObject = true;
          }
          if (fileObject) {
            file = _extends({
              fileObject: true,
              size: -1,
              name: 'Filename',
              type: '',
              active: false,
              error: '',
              success: false,
              putAction: this.putAction,
              postAction: this.postAction,
              timeout: this.timeout
            }, file, {
              response: {},

              progress: '0.00', // 只读
              speed: 0 // 只读
              // xhr: false,                // 只读
              // iframe: false,             // 只读
            });

            file.data = _extends({}, this.data, file.data ? file.data : {});

            file.headers = _extends({}, this.headers, file.headers ? file.headers : {});
          }

          // 必须包含 id
          if (!file.id) {
            file.id = Math.random().toString(36).substr(2);
          }

          if (this.emitFilter(file, undefined)) {
            continue;
          }

          // 最大数量限制
          if (this.maximum > 1 && addFiles.length + this.files.length >= this.maximum) {
            break;
          }

          addFiles.push(file);

          // 最大数量限制
          if (this.maximum === 1) {
            break;
          }
        }

        // 没有文件
        if (!addFiles.length) {
          return false;
        }

        // 如果是 1 清空
        if (this.maximum === 1) {
          this.clear();
        }

        // 添加进去 files
        var newFiles = void 0;
        if (index === true || index === 0) {
          newFiles = addFiles.concat(this.files);
        } else if (index) {
          var _newFiles;

          newFiles = this.files.concat([]);
          (_newFiles = newFiles).splice.apply(_newFiles, [index, 0].concat(addFiles));
        } else {
          newFiles = this.files.concat(addFiles);
        }

        this.files = newFiles;

        // 定位
        for (var _i = 0; _i < addFiles.length; _i++) {
          var _file2 = addFiles[_i];
          this.maps[_file2.id] = _file2;
        }

        // 事件
        this.emitInput();
        for (var _i2 = 0; _i2 < addFiles.length; _i2++) {
          this.emitFile(addFiles[_i2], undefined);
        }

        return isArray ? addFiles : addFiles[0];
      },


      // 添加表单文件
      addInputFile: function addInputFile(el) {
        var files = [];
        if (el.files) {
          for (var i = 0; i < el.files.length; i++) {
            var file = el.files[i];
            files.push({
              size: file.size,
              name: file.webkitRelativePath || file.relativePath || file.name,
              type: file.type,
              file: file
            });
          }
        } else {
          var names = el.value.replace(/\\/g, '/').split('/');
          delete el.__vuex__;
          files.push({
            name: names[names.length - 1],
            el: el
          });
        }
        return this.add(files);
      },


      // 添加 DataTransfer
      addDataTransfer: function addDataTransfer(dataTransfer) {
        var _this2 = this;

        var files = [];
        if (dataTransfer.items && dataTransfer.items.length) {
          var items = [];
          for (var i = 0; i < dataTransfer.items.length; i++) {
            var item = dataTransfer.items[i];
            if (item.getAsEntry) {
              item = item.getAsEntry() || item.getAsFile();
            } else if (item.webkitGetAsEntry) {
              item = item.webkitGetAsEntry() || item.getAsFile();
            } else {
              item = item.getAsFile();
            }
            if (item) {
              items.push(item);
            }
          }

          return new Promise(function (resolve, reject) {
            var forEach = function forEach(i) {
              var item = items[i];
              // 结束 文件数量大于 最大数量
              if (!item || _this2.maximum > 0 && files.length >= _this2.maximum) {
                return resolve(_this2.add(files));
              }
              _this2.getEntry(item).then(function (results) {
                files.push.apply(files, _toConsumableArray(results));
                forEach(i + 1);
              });
            };
            forEach(0);
          });
        }

        if (dataTransfer.files.length) {
          for (var _i3 = 0; _i3 < dataTransfer.files.length; _i3++) {
            files.push(dataTransfer.files[_i3]);
            if (this.maximum > 0 && files.length >= this.maximum) {
              break;
            }
          }
          return Promise.resolve(this.add(files));
        }

        return Promise.resolve([]);
      },


      // 获得 entry
      getEntry: function getEntry(entry) {
        var _this3 = this;

        var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        return new Promise(function (resolve, reject) {
          if (entry.isFile) {
            entry.file(function (file) {
              resolve([{
                size: file.size,
                name: path + file.name,
                type: file.type,
                file: file
              }]);
            });
          } else if (entry.isDirectory && _this3.dropDirectory) {
            var files = [];
            var dirReader = entry.createReader();
            var readEntries = function readEntries() {
              dirReader.readEntries(function (entries) {
                var forEach = function forEach(i) {
                  if (!entries[i] && i === 0 || _this3.maximum > 0 && files.length >= _this3.maximum) {
                    return resolve(files);
                  }
                  if (!entries[i]) {
                    return readEntries();
                  }
                  _this3.getEntry(entries[i], path + entry.name + '/').then(function (results) {
                    files.push.apply(files, _toConsumableArray(results));
                    forEach(i + 1);
                  });
                };
                forEach(0);
              });
            };
            readEntries();
          } else {
            resolve([]);
          }
        });
      },
      replace: function replace(id1, id2) {
        var file1 = this.get(id1);
        var file2 = this.get(id2);
        if (!file1 || !file2 || file1 === file2) {
          return false;
        }
        var files = this.files.concat([]);
        var index1 = files.indexOf(file1);
        var index2 = files.indexOf(file2);
        if (index1 === -1 || index2 === -1) {
          return false;
        }
        files[index1] = file2;
        files[index2] = file1;
        this.files = files;
        this.emitInput();
        return true;
      },


      // 移除
      remove: function remove(id) {
        var file = this.get(id);
        if (file) {
          if (this.emitFilter(undefined, file)) {
            return false;
          }
          var files = this.files.concat([]);
          var index = files.indexOf(file);
          if (index === -1) {
            console.error('remove', file);
            return false;
          }
          files.splice(index, 1);
          this.files = files;

          // 定位
          delete this.maps[file.id];

          // 事件
          this.emitInput();
          this.emitFile(undefined, file);
        }
        return file;
      },


      // 更新
      update: function update(id, data) {
        var file = this.get(id);
        if (file) {
          var newFile = _extends({}, file, data);
          // 停用必须加上错误
          if (file.fileObject && file.active && !newFile.active && !newFile.error && !newFile.success) {
            newFile.error = 'abort';
          }

          if (this.emitFilter(newFile, file)) {
            return false;
          }

          var files = this.files.concat([]);
          var index = files.indexOf(file);
          if (index === -1) {
            console.error('update', file);
            return false;
          }
          files.splice(index, 1, newFile);
          this.files = files;

          // 删除  旧定位 写入 新定位 （已便支持修改id)
          delete this.maps[file.id];
          this.maps[newFile.id] = newFile;

          // 事件
          this.emitInput();
          this.emitFile(newFile, file);
          return newFile;
        }
        return false;
      },


      // 预处理 事件 过滤器
      emitFilter: function emitFilter(newFile, oldFile) {
        var isPrevent = false;
        this.$emit('input-filter', newFile, oldFile, function () {
          isPrevent = true;
          return isPrevent;
        });
        return isPrevent;
      },


      // 处理后 事件 分发
      emitFile: function emitFile(newFile, oldFile) {
        this.$emit('input-file', newFile, oldFile);
        if (newFile && newFile.fileObject && newFile.active && (!oldFile || !oldFile.active)) {
          this.uploading++;
          // 激活
          this.$nextTick(function () {
            var _this4 = this;

            setTimeout(function () {
              _this4.upload(newFile).then(function () {
                // eslint-disable-next-line
                newFile = _this4.get(newFile);
                if (newFile && newFile.fileObject) {
                  _this4.update(newFile, {
                    active: false,
                    success: !newFile.error
                  });
                }
              }).catch(function (e) {
                _this4.update(newFile, {
                  active: false,
                  success: false,
                  error: e.code || e.error || e.message || e
                });
              });
            }, parseInt(Math.random() * 50 + 50, 10));
          });
        } else if ((!newFile || !newFile.fileObject || !newFile.active) && oldFile && oldFile.fileObject && oldFile.active) {
          // 停止
          this.uploading--;
        }

        // 自动延续激活
        if (this.active && (Boolean(newFile) !== Boolean(oldFile) || newFile.active !== oldFile.active)) {
          this.watchActive(true);
        }
      },
      emitInput: function emitInput() {
        this.$emit('input', this.files);
      },


      // 上传
      upload: function upload(id) {
        var file = this.get(id);

        // 被删除
        if (!file) {
          return Promise.reject('not_exists');
        }

        // 不是文件对象
        if (!file.fileObject) {
          return Promise.reject('file_object');
        }

        // 有错误直接响应
        if (file.error) {
          return Promise.reject(file.error);
        }

        // 已完成直接响应
        if (file.success) {
          return Promise.resolve(file);
        }

        // 后缀
        var extensions = this.extensions;
        if (extensions && (extensions.length || typeof extensions.length === 'undefined')) {
          if ((typeof extensions === 'undefined' ? 'undefined' : _typeof(extensions)) !== 'object' || !(extensions instanceof RegExp)) {
            if (typeof extensions === 'string') {
              extensions = extensions.split(',').map(function (value) {
                return value.trim();
              }).filter(function (value) {
                return value;
              });
            }
            extensions = new RegExp('\\.(' + extensions.join('|').replace(/\./g, '\\.') + ')$', 'i');
          }
          if (file.name.search(extensions) === -1) {
            return Promise.reject('extension');
          }
        }

        // 大小
        if (this.size > 0 && file.size >= 0 && file.size > this.size) {
          return Promise.reject('size');
        }

        if (this.customAction) {
          return this.customAction(file, this);
        }

        if (this.features.html5) {
          if (this.shouldUseChunkUpload(file)) {
            return this.uploadChunk(file);
          }
          if (file.putAction) {
            return this.uploadPut(file);
          }
          if (file.postAction) {
            return this.uploadHtml5(file);
          }
        }
        if (file.postAction) {
          return this.uploadHtml4(file);
        }
        return Promise.reject('No action configured');
      },


      /**
       * Whether this file should be uploaded using chunk upload or not
       *
       * @param Object file
       */
      shouldUseChunkUpload: function shouldUseChunkUpload(file) {
        return this.chunkEnabled && !!this.chunkOptions.handler && file.size > this.chunkOptions.minSize;
      },


      /**
       * Upload a file using Chunk method
       *
       * @param File file
       */
      uploadChunk: function uploadChunk(file) {
        var HandlerClass = this.chunkOptions.handler;
        file.chunk = new HandlerClass(file, this.chunkOptions);

        return file.chunk.upload();
      },
      uploadPut: function uploadPut(file) {
        var querys = [];
        var value = void 0;
        for (var key in file.data) {
          value = file.data[key];
          if (value !== null && value !== undefined) {
            querys.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          }
        }
        var queryString = querys.length ? (file.putAction.indexOf('?') === -1 ? '?' : '&') + querys.join('&') : '';
        var xhr = new XMLHttpRequest();
        xhr.open('PUT', file.putAction + queryString);
        return this.uploadXhr(xhr, file, file.file);
      },
      uploadHtml5: function uploadHtml5(file) {
        var form = new window.FormData();
        var value = void 0;
        for (var key in file.data) {
          value = file.data[key];
          if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString !== 'function') {
            if (value instanceof File) {
              form.append(key, value, value.name);
            } else {
              form.append(key, JSON.stringify(value));
            }
          } else if (value !== null && value !== undefined) {
            form.append(key, value);
          }
        }
        form.append(this.name, file.file, file.file.filename || file.name);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', file.postAction);
        return this.uploadXhr(xhr, file, form);
      },
      uploadXhr: function uploadXhr(xhr, _file, body) {
        var _this5 = this;

        var file = _file;
        var speedTime = 0;
        var speedLoaded = 0;

        // 进度条
        xhr.upload.onprogress = function (e) {
          // 还未开始上传 已删除 未激活
          file = _this5.get(file);
          if (!e.lengthComputable || !file || !file.fileObject || !file.active) {
            return;
          }

          // 进度 速度 每秒更新一次
          var speedTime2 = Math.round(Date.now() / 1000);
          if (speedTime2 === speedTime) {
            return;
          }
          speedTime = speedTime2;

          file = _this5.update(file, {
            progress: (e.loaded / e.total * 100).toFixed(2),
            speed: e.loaded - speedLoaded
          });
          speedLoaded = e.loaded;
        };

        // 检查激活状态
        var interval = setInterval(function () {
          file = _this5.get(file);
          if (file && file.fileObject && !file.success && !file.error && file.active) {
            return;
          }

          if (interval) {
            clearInterval(interval);
            interval = false;
          }

          try {
            xhr.abort();
            xhr.timeout = 1;
          } catch (e) {}
        }, 100);

        return new Promise(function (resolve, reject) {
          var complete = void 0;
          var fn = function fn(e) {
            // 已经处理过了
            if (complete) {
              return;
            }
            complete = true;
            if (interval) {
              clearInterval(interval);
              interval = false;
            }

            file = _this5.get(file);

            // 不存在直接响应
            if (!file) {
              return reject('not_exists');
            }

            // 不是文件对象
            if (!file.fileObject) {
              return reject('file_object');
            }

            // 有错误自动响应
            if (file.error) {
              return reject(file.error);
            }

            // 未激活
            if (!file.active) {
              return reject('abort');
            }

            // 已完成 直接相应
            if (file.success) {
              return resolve(file);
            }

            var data = {};

            switch (e.type) {
              case 'timeout':
              case 'abort':
                data.error = e.type;
                break;
              case 'error':
                if (!xhr.status) {
                  data.error = 'network';
                } else if (xhr.status >= 500) {
                  data.error = 'server';
                } else if (xhr.status >= 400) {
                  data.error = 'denied';
                }
                break;
              default:
                if (xhr.status >= 500) {
                  data.error = 'server';
                } else if (xhr.status >= 400) {
                  data.error = 'denied';
                } else {
                  data.progress = '100.00';
                }
            }

            if (xhr.responseText) {
              var contentType = xhr.getResponseHeader('Content-Type');
              if (contentType && contentType.indexOf('/json') !== -1) {
                data.response = JSON.parse(xhr.responseText);
              } else {
                data.response = xhr.responseText;
              }
            }

            // 更新
            file = _this5.update(file, data);

            // 相应错误
            if (file.error) {
              return reject(file.error);
            }

            // 响应
            return resolve(file);
          };

          // 事件
          xhr.onload = fn;
          xhr.onerror = fn;
          xhr.onabort = fn;
          xhr.ontimeout = fn;

          // 超时
          if (file.timeout) {
            xhr.timeout = file.timeout;
          }

          // headers
          for (var key in file.headers) {
            xhr.setRequestHeader(key, file.headers[key]);
          }

          // 更新 xhr
          file = _this5.update(file, { xhr: xhr });

          // 开始上传
          xhr.send(body);
        });
      },
      uploadHtml4: function uploadHtml4(_file) {
        var _this6 = this;

        var file = _file;
        var onKeydown = function onKeydown(e) {
          if (e.keyCode === 27) {
            e.preventDefault();
          }
        };

        var iframe = document.createElement('iframe');
        iframe.id = 'upload-iframe-' + file.id;
        iframe.name = 'upload-iframe-' + file.id;
        iframe.src = 'about:blank';
        iframe.setAttribute('style', 'width:1px;height:1px;top:-999em;position:absolute; margin-top:-999em;');

        var form = document.createElement('form');

        form.action = file.postAction;

        form.name = 'upload-form-' + file.id;

        form.setAttribute('method', 'POST');
        form.setAttribute('target', 'upload-iframe-' + file.id);
        form.setAttribute('enctype', 'multipart/form-data');

        var value = void 0;
        var input = void 0;
        for (var key in file.data) {
          value = file.data[key];
          if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && typeof value.toString !== 'function') {
            value = JSON.stringify(value);
          }
          if (value !== null && value !== undefined) {
            input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value;
            form.appendChild(input);
          }
        }
        form.appendChild(file.el);

        document.body.appendChild(iframe).appendChild(form);

        var getResponseData = function getResponseData() {
          var doc = void 0;
          try {
            if (iframe.contentWindow) {
              doc = iframe.contentWindow.document;
            }
          } catch (err) {}
          if (!doc) {
            try {
              doc = iframe.contentDocument ? iframe.contentDocument : iframe.document;
            } catch (err) {
              doc = iframe.document;
            }
          }
          if (doc && doc.body) {
            return doc.body.innerHTML;
          }
          return null;
        };

        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            file = _this6.update(file, { iframe: iframe });

            // 不存在
            if (!file) {
              return reject('not_exists');
            }

            // 定时检查
            var interval = setInterval(function () {
              file = _this6.get(file);
              if (file && file.fileObject && !file.success && !file.error && file.active) {
                return;
              }

              if (interval) {
                clearInterval(interval);
                interval = false;
              }

              iframe.onabort({ type: file ? 'abort' : 'not_exists' });
            }, 100);

            var complete = void 0;
            var fn = function fn(e) {
              // 已经处理过了
              if (complete) {
                return;
              }
              complete = true;

              if (interval) {
                clearInterval(interval);
                interval = false;
              }

              // 关闭 esc 事件
              document.body.removeEventListener('keydown', onKeydown);

              file = _this6.get(file);

              // 不存在直接响应
              if (!file) {
                return reject('not_exists');
              }

              // 不是文件对象
              if (!file.fileObject) {
                return reject('file_object');
              }

              // 有错误自动响应
              if (file.error) {
                return reject(file.error);
              }

              // 未激活
              if (!file.active) {
                return reject('abort');
              }

              // 已完成 直接相应
              if (file.success) {
                return resolve(file);
              }

              var response = getResponseData();
              var data = {};
              switch (e.type) {
                case 'abort':
                  data.error = 'abort';
                  break;
                case 'error':
                  if (file.error) {
                    data.error = file.error;
                  } else if (response === null) {
                    data.error = 'network';
                  } else {
                    data.error = 'denied';
                  }
                  break;
                default:
                  if (file.error) {
                    data.error = file.error;
                  } else if (data === null) {
                    data.error = 'network';
                  } else {
                    data.progress = '100.00';
                  }
              }

              if (response !== null) {
                if (response && response.substr(0, 1) === '{' && response.substr(response.length - 1, 1) === '}') {
                  try {
                    response = JSON.parse(response);
                  } catch (err) {}
                }
                data.response = response;
              }

              // 更新
              file = _this6.update(file, data);

              if (file.error) {
                return reject(file.error);
              }

              // 响应
              return resolve(file);
            };

            // 添加事件
            iframe.onload = fn;
            iframe.onerror = fn;
            iframe.onabort = fn;

            // 禁止 esc 键
            document.body.addEventListener('keydown', onKeydown);

            // 提交
            form.submit();
          }, 50);
        }).then(function (res) {
          iframe.parentNode && iframe.parentNode.removeChild(iframe);
          return res;
        }).catch(function (res) {
          iframe.parentNode && iframe.parentNode.removeChild(iframe);
          return res;
        });
      },
      watchActive: function watchActive(active) {
        var file = void 0;
        var index = 0;
        while (file = this.files[index]) {
          index++;
          if (!file.fileObject) ; else if (active && !this.destroy) {
            if (this.uploading >= this.thread || this.uploading && !this.features.html5) {
              break;
            }
            if (!file.active && !file.error && !file.success) {
              this.update(file, { active: true });
            }
          } else {
            if (file.active) {
              this.update(file, { active: false });
            }
          }
        }
        if (this.uploading === 0) {
          this.active = false;
        }
      },
      watchDrop: function watchDrop(_el) {
        var el = _el;
        if (!this.features.drop) {
          return;
        }

        // 移除挂载
        if (this.dropElement) {
          try {
            document.removeEventListener('dragenter', this.onDocumentDragenter, false);
            document.removeEventListener('dragleave', this.onDocumentDragleave, false);
            document.removeEventListener('dragover', this.onDocumentDragover, false);
            document.removeEventListener('drop', this.onDocumentDrop, false);
            this.dropElement.removeEventListener('dragover', this.onDragover, false);
            this.dropElement.removeEventListener('drop', this.onDrop, false);
          } catch (e) {}
        }

        if (!el) {
          el = false;
        } else if (typeof el === 'string') {
          el = document.querySelector(el) || this.$root.$el.querySelector(el);
        } else if (el === true) {
          el = this.$parent.$el;
        }

        this.dropElement = el;

        if (this.dropElement) {
          document.addEventListener('dragenter', this.onDocumentDragenter, false);
          document.addEventListener('dragleave', this.onDocumentDragleave, false);
          document.addEventListener('dragover', this.onDocumentDragover, false);
          document.addEventListener('drop', this.onDocumentDrop, false);
          this.dropElement.addEventListener('dragover', this.onDragover, false);
          this.dropElement.addEventListener('drop', this.onDrop, false);
        }
      },
      watchDropActive: function watchDropActive(newDropActive, oldDropActive) {
        if (newDropActive === oldDropActive) {
          return;
        }
        if (this.dropTimeout) {
          clearTimeout(this.dropTimeout);
          this.dropTimeout = null;
        }
        if (newDropActive) {
          this.dropTimeout = setTimeout(this.onDocumentDrop, 1000);
        }
      },
      onDocumentDragenter: function onDocumentDragenter(e) {
        if (this.dropActive) {
          return;
        }
        if (!e.dataTransfer) {
          return;
        }
        var dt = e.dataTransfer;
        if (dt.files && dt.files.length) {
          this.dropActive = true;
        } else if (!dt.types) {
          this.dropActive = true;
        } else if (dt.types.indexOf && dt.types.indexOf('Files') !== -1) {
          this.dropActive = true;
        } else if (dt.types.contains && dt.types.contains('Files')) {
          this.dropActive = true;
        }
        if (this.dropActive) {
          this.watchDropActive(true);
        }
      },
      onDocumentDragleave: function onDocumentDragleave(e) {
        if (!this.dropActive) {
          return;
        }
        if (e.target === e.explicitOriginalTarget || !e.fromElement && (e.clientX <= 0 || e.clientY <= 0 || e.clientX >= window.innerWidth || e.clientY >= window.innerHeight)) {
          this.dropActive = false;
          this.watchDropActive(false);
        }
      },
      onDocumentDragover: function onDocumentDragover() {
        this.watchDropActive(true);
      },
      onDocumentDrop: function onDocumentDrop() {
        this.dropActive = false;
        this.watchDropActive(false);
      },
      onDragover: function onDragover(e) {
        e.preventDefault();
      },
      onDrop: function onDrop(e) {
        e.preventDefault();
        e.dataTransfer && this.addDataTransfer(e.dataTransfer);
      }
    }
  };

  var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
    return function (id, style) {
      return addStyle(id, style);
    };
  }
  var HEAD = document.head || document.getElementsByTagName('head')[0];
  var styles = {};

  function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = {
      ids: new Set(),
      styles: []
    });

    if (!style.ids.has(id)) {
      style.ids.add(id);
      var code = css.source;

      if (css.map) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

        code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
      }

      if (!style.element) {
        style.element = document.createElement('style');
        style.element.type = 'text/css';
        if (css.media) style.element.setAttribute('media', css.media);
        HEAD.appendChild(style.element);
      }

      if ('styleSheet' in style.element) {
        style.styles.push(code);
        style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
      } else {
        var index = style.ids.size - 1;
        var textNode = document.createTextNode(code);
        var nodes = style.element.childNodes;
        if (nodes[index]) style.element.removeChild(nodes[index]);
        if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
      }
    }
  }

  var browser = createInjector;

  /* script */
  var __vue_script__$1 = script$1;

  /* template */
  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('span', { class: _vm.className }, [_vm._t("default"), _vm._v(" "), _c('label', { attrs: { "for": _vm.inputId || _vm.name } }), _vm._v(" "), _c('input-file')], 2);
  };
  var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-939ffe40_0", { source: ".file-uploads{overflow:hidden;position:relative;text-align:center;display:inline-block}.file-uploads.file-uploads-html4 input,.file-uploads.file-uploads-html5 label{background:#fff;opacity:0;font-size:20em;z-index:1;top:0;left:0;right:0;bottom:0;position:absolute;width:100%;height:100%}.file-uploads.file-uploads-html4 label,.file-uploads.file-uploads-html5 input{background:rgba(255,255,255,0);overflow:hidden;position:fixed;width:1px;height:1px;z-index:-1;opacity:0}", map: undefined, media: undefined });
  };
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject SSR */

  var FileUpload = normalizeComponent_1({ render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, browser, undefined);

  var FileUpload$1 = /*#__PURE__*/Object.freeze({
    default: FileUpload
  });

  function getCjsExportFromNamespace (n) {
  	return n && n['default'] || n;
  }

  var require$$0 = getCjsExportFromNamespace(FileUpload$1);

  var src = require$$0;

  return src;

})));
//# sourceMappingURL=vue-upload-component.js.map


/***/ })

}]);