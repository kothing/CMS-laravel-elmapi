(self.webpackChunk=self.webpackChunk||[]).push([[70],{1706:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});const o={props:{type:{type:String,default:"submit"},color:{type:String,default:"gray-800"},hover:{type:String,default:null},padding:{type:String,default:null},disabled:{type:Boolean,default:!1}},computed:{bgColor:function(){var e="";if(this.disabled)e="bg-indigo-200 cursor-not-allowed";else{var t="bg-"+this.color,s=this.color.split("-"),o=null==this.hover?"bg-"+s[0]+"-"+(parseInt(s[1])+100):"bg-"+this.hover,a="bg-"+s[0]+"-"+(parseInt(s[1])+100);s[0],parseInt(s[1]),s[0];e=t+" hover:"+o+" active:"+a}return null===this.padding?e+=" p-3 ":e+=" "+this.padding+" ",e}}}},7901:(e,t,s)=>{"use strict";s.d(t,{s:()=>o,x:()=>a});var o=function(){var e=this;return(0,e._self._c)("button",{staticClass:"items-center border border-transparent rounded-sm text-sm text-white focus:outline-none transition ease-in-out duration-150",class:e.bgColor,attrs:{type:e.type,disabled:e.disabled}},[e._t("default")],2)},a=[]},7906:function(e){e.exports=function(e){function t(o){if(s[o])return s[o].exports;var a=s[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var s={};return t.m=e,t.c=s,t.i=function(e){return e},t.d=function(e,s,o){t.o(e,s)||Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(s,"a",s),s},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=0)}([function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){var t=void 0;if("string"!=typeof e)try{t=JSON.stringify(e)}catch(e){throw"Failed to copy value to clipboard. Unknown type."}else t=e;var s=document.createElement("textarea");if(s.value=t,s.setAttribute("readonly",""),s.style.cssText="position:fixed;pointer-events:none;z-index:-9999;opacity:0;",document.body.appendChild(s),navigator.userAgent.match(/ipad|ipod|iphone/i)){s.contentEditable=!0,s.readOnly=!0;var o=document.createRange();o.selectNodeContents(s);var a=window.getSelection();a.removeAllRanges(),a.addRange(o),s.setSelectionRange(0,999999)}else s.select();var r=!1;try{r=document.execCommand("copy")}catch(e){console.warn(e)}return document.body.removeChild(s),r};t.default={install:function(e){e.prototype.$clipboard=o;var t=function(e){return function(){return"$"+e++}}(1),s={},a=function(e){e&&(s[e]=null,delete s[e])},r=function(e){var o=t();return s[o]=e,o};e.directive("clipboard",{bind:function(e,t){var a=t.arg,n=t.value;switch(a){case"error":var i=r(n);return void(e.dataset.clipboardErrorHandler=i);case"success":var l=r(n);return void(e.dataset.clipboardSuccessHandler=l);default:var c=function(a){if(t.hasOwnProperty("value")){var r={value:"function"==typeof n?n():n,event:a},i=o(r.value)?e.dataset.clipboardSuccessHandler:e.dataset.clipboardErrorHandler,l=s[i];l&&l(r)}},d=r(c);return e.dataset.clipboardClickHandler=d,void e.addEventListener("click",s[d])}},unbind:function(e){var t=e.dataset,o=t.clipboardSuccessHandler,r=t.clipboardErrorHandler,n=t.clipboardClickHandler;a(o),a(r),n&&(e.removeEventListener("click",s[n]),a(n))}})}}}])},4487:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var o=s(7901),a=s(9);const r=(0,s(1900).Z)(a.Z,o.s,o.x,!1,null,null,null).exports},4935:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const o={props:{show:{default:!1},maxWidth:{default:"3xl"},closeable:{default:!0},disableHeader:{default:!1},disableFooter:{default:!1},noContenPadding:{default:!1}},methods:{close:function(){this.closeable&&this.$emit("close")}},watch:{show:{immediate:!0,handler:function(e){document.body.style.overflow=e?"hidden":null}}},created:function(){var e=this,t=function(t){"Escape"===t.key&&e.show&&e.close()};document.addEventListener("keydown",t),this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",t)}))},computed:{maxWidthClass:function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl","3xl":"sm:max-w-3xl","4xl":"sm:max-w-4xl","5xl":"sm:max-w-5xl","6xl":"sm:max-w-6xl","7xl":"sm:max-w-7xl"}[this.maxWidth]}}};const a=(0,s(1900).Z)(o,(function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"fixed z-10 inset-0 overflow-y-auto"},[t("div",{staticClass:"flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0"},[t("div",{staticClass:"fixed inset-0 transition-opacity",attrs:{"aria-hidden":"true"},on:{click:e.close}},[t("div",{staticClass:"absolute inset-0 bg-gray-500 opacity-75"})]),e._v(" "),t("span",{staticClass:"hidden sm:inline-block sm:align-middle sm:h-screen",attrs:{"aria-hidden":"true"}},[e._v("​")]),e._v(" "),t("div",{staticClass:"inline-block align-bottom bg-white rounded-sm text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-full",class:e.maxWidthClass,attrs:{role:"dialog","aria-modal":"true","aria-labelledby":"modal-headline"}},[e.disableHeader?e._e():t("div",{staticClass:"px-6 py-6 border-b border-gray-100 bg-white"},[t("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[e._t("title")],2)]),e._v(" "),t("div",{class:{"px-6 py-4":!e.noContenPadding}},[e._t("content")],2),e._v(" "),e.disableFooter?e._e():t("div",{staticClass:"px-6 py-4 bg-gray-50 text-right mt-5"},[e._t("footer")],2)])])])}),[],!1,null,null,null).exports},1541:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var o=s(538),a=s(7906),r=s.n(a),n=s(4487),i=s(4935),l=s(4623),c=s(6295);o.default.use(r());const d={components:{ProjectHeader:l.Z,SettingsNav:c.Z,UiButton:n.Z,UiModal:i.Z},data:function(){return{project:{},webhooks:{},progress:!1,openNewWebhookModal:!1,new_webhook:{data:{secret:null,collection_ids:[],events:[],sources:[],payload:!0,status:!0},errors:{}},secretShow:!1,events:["content.created","content.updated","content.trashed","content.deleted","content.published","content.unpublished","content.restored","form.submitted"],sources:["User","API"],editStatus:!1}},methods:{getProject:function(){var e=this;axios.get("/admin/projects/settings/webhooks/"+this.$route.params.project_id).then((function(t){e.project=t.data,e.webhooks=t.data.webhooks}))},copyToClipboard:function(e){this.$clipboard(e),this.$toast.success("Copied to clipboard")},closeNewWebhookModal:function(){this.openNewWebhookModal=!1,this.new_webhook={data:{secret:null,collection_ids:[],events:[],sources:[],payload:!0,status:!0},errors:{}},this.editStatus=!1},createNewWebhookSubmit:function(){var e=this;this.progress=!0,this.editStatus?axios.post("/admin/projects/settings/webhooks/update/"+this.project.id,this.new_webhook.data).then((function(t){e.$toast.success("Webhook updated!"),e.getProject(),e.closeNewWebhookModal(),e.progress=!1}),(function(t){422==t.response.status&&(e.new_webhook.errors=t.response.data.errors),e.progress=!1})):axios.post("/admin/projects/settings/webhooks/new/"+this.project.id,this.new_webhook.data).then((function(t){e.$toast.success("Webhook created!"),e.getProject(),e.closeNewWebhookModal(),e.progress=!1}),(function(t){422==t.response.status&&(e.new_webhook.errors=t.response.data.errors),e.progress=!1}))},editWebhook:function(e){this.new_webhook={data:JSON.parse(JSON.stringify(e)),errors:{}},this.editStatus=!0,this.openNewWebhookModal=!0},deleteWebhook:function(e){var t=this;this.$swal.fire({title:"Are you sure",text:"you want to delete this webhook?"}).then((function(s){s.value&&axios.post("/admin/projects/settings/webhooks/delete/"+t.project.id,e).then((function(e){t.$toast.success("Webhook deleted."),t.getProject()}))}))},generateSecret:function(){var e="",t="";e+="abcdefghijklmnopqrstuvwxyz",e+="ABCDEFGHIJKLMNOPQRSTUVWXYZ",e+="0123456789",e+="![]{}()%&*$#^<>~@|";for(var s=0;s<12;s++)t+=e.charAt(Math.floor(Math.random()*e.length));this.new_webhook.data.secret=t,this.secretShow=!0}},mounted:function(){this.getProject()}};const u=(0,s(1900).Z)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"app__project-webhooks h-full relative"},[t("project-header",{staticClass:"bg-white",attrs:{project:e.project}}),e._v(" "),t("div",{staticClass:"flex h-full pt-20 overflow-hidden"},[t("div",{staticClass:"w-3/12 h-full bg-white overflow-x-hidden"},[t("settings-nav",{attrs:{project:e.project}})],1),e._v(" "),t("div",{staticClass:"w-9/12 overflow-x-hidden"},[t("div",{staticClass:"p-4"},[t("div",{staticClass:"flex justify-between p-2 items-center"},[t("h4",{staticClass:"mb-2 font-bold text-xl"},[e._v("Webhooks")]),e._v(" "),t("ui-button",{attrs:{color:"indigo-500"},nativeOn:{click:function(t){e.openNewWebhookModal=!0}}},[e._v(" + Create a New Webhook")])],1),e._v(" "),t("div",{staticClass:"bg-white mt-2 rounded-md p-4 w-full"},[t("div",{staticClass:"mt-2"},[t("div",{staticClass:"overflow-x-auto mt-1 flex rounded-sm"},[null!=e.webhooks?t("table",{staticClass:"w-full divide-y divide-gray-200 border"},[e._m(0),e._v(" "),t("tbody",{staticClass:"bg-white divide-y divide-gray-200"},[e._l(e.webhooks,(function(s){return t("tr",{key:s.id},[t("td",{staticClass:"px-6 py-3 text-sm whitespace-nowrap"},[e._v(e._s(s.name))]),e._v(" "),t("td",{staticClass:"px-6 py-3 text-sm whitespace-nowrap"},[e._v(e._s(s.url))]),e._v(" "),t("td",{staticClass:"px-6 py-3 text-sm"},e._l(s.collections,(function(s,o){return t("div",{key:o,staticClass:"text-gray-500 text-sm rounded-sm bg-gray-100 py-1 px-3 mb-1"},[e._v("\n                                                "+e._s(s.name)+"\n                                            ")])})),0),e._v(" "),t("td",{staticClass:"px-6 py-3 text-sm"},e._l(s.events,(function(s){return t("div",{key:s,staticClass:"text-gray-500 text-sm rounded-sm bg-gray-100 py-1 px-3 mb-1"},[e._v("\n                                                "+e._s(s)+"\n                                            ")])})),0),e._v(" "),t("td",{staticClass:"px-6 py-3 text-sm"},e._l(s.sources,(function(s){return t("div",{key:s,staticClass:"text-gray-500 text-sm rounded-sm bg-gray-100 py-1 px-3 mb-1"},[e._v("\n                                                "+e._s(s)+"\n                                            ")])})),0),e._v(" "),t("td",{staticClass:"px-6 py-3 text-sm whitespace-nowrap text-center text-xl"},[s.status?t("i",{staticClass:"fas fa-toggle-on text-green-500"}):t("i",{staticClass:"fas fa-toggle-off text-gray-500"})]),e._v(" "),t("td",{staticClass:"px-6 py-3 text-sm whitespace-nowrap"},[t("router-link",{staticClass:"text-yellow-500 flex items-center",attrs:{to:{name:"projects.settings.webhooks.logs",params:{project_id:e.project.id,webhook_id:s.id}}}},[t("i",{staticClass:"fas fa-history mr-2"}),e._v(" View Logs")])],1),e._v(" "),t("td",{staticClass:"px-6 py-3 text-sm"},[t("div",{staticClass:"cursor-pointer text-indigo-500",on:{click:function(t){return e.editWebhook(s)}}},[e._v("Edit")])]),e._v(" "),t("td",{staticClass:"px-6 py-3 text-sm"},[t("div",{staticClass:"cursor-pointer text-red-700",on:{click:function(t){return e.deleteWebhook(s)}}},[e._v("Delete")])])])})),e._v(" "),null!=e.webhooks&&0===e.webhooks.length?t("tr",[t("td",{staticClass:"text-center text-sm text-gray-500 p-5",attrs:{colspan:"100%"}},[e._v("This project does not have webhooks yet.")])]):e._e()],2)]):e._e()])])])])])]),e._v(" "),t("ui-modal",{attrs:{show:e.openNewWebhookModal},on:{close:e.closeNewWebhookModal},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(e._s(e.editStatus?"Update Webhook":"Create New Webhook"))]},proxy:!0},{key:"content",fn:function(){return[t("div",{staticClass:"mt-4"},[t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),e.createNewWebhookSubmit.apply(null,arguments)}}},[t("div",[t("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("Name")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_webhook.data.name,expression:"new_webhook.data.name"},{name:"forminput",rawName:"v-forminput"}],attrs:{type:"text"},domProps:{value:e.new_webhook.data.name},on:{input:function(t){t.target.composing||e.$set(e.new_webhook.data,"name",t.target.value)}}}),e._v(" "),e.new_webhook.errors.name?t("p",{staticClass:"text-sm text-red-600 mt-1"},[e._v(e._s(e.new_webhook.errors.name[0]))]):e._e()]),e._v(" "),t("div",{staticClass:"mt-5"},[t("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("Description")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_webhook.data.description,expression:"new_webhook.data.description"},{name:"forminput",rawName:"v-forminput"}],attrs:{type:"text"},domProps:{value:e.new_webhook.data.description},on:{input:function(t){t.target.composing||e.$set(e.new_webhook.data,"description",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"mt-5"},[t("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("URL")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_webhook.data.url,expression:"new_webhook.data.url"},{name:"forminput",rawName:"v-forminput"}],attrs:{type:"text",placeholder:"https://"},domProps:{value:e.new_webhook.data.url},on:{input:function(t){t.target.composing||e.$set(e.new_webhook.data,"url",t.target.value)}}}),e._v(" "),e.new_webhook.errors.url?t("p",{staticClass:"text-sm text-red-600 mt-1"},[e._v(e._s(e.new_webhook.errors.url[0]))]):e._e()]),e._v(" "),t("div",{staticClass:"mt-5"},[t("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("Secret")]),e._v(" "),t("div",{staticClass:"mt-1 flex rounded-sm"},[t("span",{staticClass:"inline-flex items-center px-3 rounded-l-sm border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"},[t("i",{staticClass:"fa fa-lock"})]),e._v(" "),"checkbox"==(e.secretShow?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_webhook.data.secret,expression:"new_webhook.data.secret"},{name:"forminput",rawName:"v-forminput"}],staticClass:"rounded-l-none",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.new_webhook.data.secret)?e._i(e.new_webhook.data.secret,null)>-1:e.new_webhook.data.secret},on:{change:function(t){var s=e.new_webhook.data.secret,o=t.target,a=!!o.checked;if(Array.isArray(s)){var r=e._i(s,null);o.checked?r<0&&e.$set(e.new_webhook.data,"secret",s.concat([null])):r>-1&&e.$set(e.new_webhook.data,"secret",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.new_webhook.data,"secret",a)}}}):"radio"==(e.secretShow?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_webhook.data.secret,expression:"new_webhook.data.secret"},{name:"forminput",rawName:"v-forminput"}],staticClass:"rounded-l-none",attrs:{type:"radio"},domProps:{checked:e._q(e.new_webhook.data.secret,null)},on:{change:function(t){return e.$set(e.new_webhook.data,"secret",null)}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_webhook.data.secret,expression:"new_webhook.data.secret"},{name:"forminput",rawName:"v-forminput"}],staticClass:"rounded-l-none",attrs:{type:e.secretShow?"text":"password"},domProps:{value:e.new_webhook.data.secret},on:{input:function(t){t.target.composing||e.$set(e.new_webhook.data,"secret",t.target.value)}}}),e._v(" "),t("span",{staticClass:"inline-flex items-center px-3 rounded-r-sm border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer",on:{click:function(t){e.secretShow=!e.secretShow}}},[t("i",{staticClass:"fa fa-eye"})]),e._v(" "),t("span",{staticClass:"inline-flex items-center px-3 rounded-r-sm border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm cursor-pointer",on:{click:function(t){return e.generateSecret()}}},[e._v("Generate")])]),e._v(" "),e.new_webhook.errors.secret?t("p",{staticClass:"text-sm text-red-600 mt-1"},[e._v(e._s(e.new_webhook.errors.secret[0]))]):e._e()]),e._v(" "),t("div",{staticClass:"mt-5"},[t("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("Collections")]),e._v(" "),t("v-select",{staticClass:"v-select",attrs:{options:e.project.collections,"get-option-key":function(e){return e.id},"get-option-label":function(e){return e.name},reduce:function(e){return e.id},value:function(e){return e[0]},placeholder:"Select Collections",multiple:"",clearable:!0,selectable:function(t){return!e.new_webhook.data.collection_ids.includes(t.id)}},model:{value:e.new_webhook.data.collection_ids,callback:function(t){e.$set(e.new_webhook.data,"collection_ids",t)},expression:"new_webhook.data.collection_ids"}}),e._v(" "),e.new_webhook.errors.collection_ids?t("p",{staticClass:"text-sm text-red-600 mt-1"},[e._v(e._s(e.new_webhook.errors.collection_ids[0]))]):e._e()],1),e._v(" "),t("div",{staticClass:"mt-5"},[t("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("Events")]),e._v(" "),t("v-select",{staticClass:"v-select",attrs:{options:e.events,value:function(e){return e[0]},placeholder:"Select Events",multiple:"",clearable:!0,selectable:function(t){return!e.new_webhook.data.events.includes(t)}},model:{value:e.new_webhook.data.events,callback:function(t){e.$set(e.new_webhook.data,"events",t)},expression:"new_webhook.data.events"}}),e._v(" "),e.new_webhook.errors.events?t("p",{staticClass:"text-sm text-red-600 mt-1"},[e._v(e._s(e.new_webhook.errors.events[0]))]):e._e()],1),e._v(" "),t("div",{staticClass:"mt-5"},[t("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("Source")]),e._v(" "),t("v-select",{staticClass:"v-select",attrs:{options:e.sources,value:function(e){return e[0]},placeholder:"Select Sources",multiple:"",clearable:!0,selectable:function(t){return!e.new_webhook.data.sources.includes(t)}},model:{value:e.new_webhook.data.sources,callback:function(t){e.$set(e.new_webhook.data,"sources",t)},expression:"new_webhook.data.sources"}}),e._v(" "),e.new_webhook.errors.sources?t("p",{staticClass:"text-sm text-red-600 mt-1"},[e._v(e._s(e.new_webhook.errors.sources[0]))]):e._e()],1),e._v(" "),t("div",{staticClass:"mt-5"},[t("label",{staticClass:"flex w-64 items-center cursor-pointer",attrs:{for:"togglePayload"}},[t("div",{staticClass:"relative"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_webhook.data.payload,expression:"new_webhook.data.payload"}],staticClass:"sr-only",attrs:{type:"checkbox",id:"togglePayload"},domProps:{checked:Array.isArray(e.new_webhook.data.payload)?e._i(e.new_webhook.data.payload,null)>-1:e.new_webhook.data.payload},on:{change:function(t){var s=e.new_webhook.data.payload,o=t.target,a=!!o.checked;if(Array.isArray(s)){var r=e._i(s,null);o.checked?r<0&&e.$set(e.new_webhook.data,"payload",s.concat([null])):r>-1&&e.$set(e.new_webhook.data,"payload",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.new_webhook.data,"payload",a)}}}),e._v(" "),t("div",{staticClass:"block bg-gray-600 w-14 h-8 rounded-full"}),e._v(" "),t("div",{staticClass:"dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"})]),e._v(" "),t("span",{staticClass:"ml-2"},[e._v("Include payload")])])]),e._v(" "),t("div",{staticClass:"mt-5"},[t("label",{staticClass:"flex w-64 items-center cursor-pointer",attrs:{for:"toggleActive"}},[t("div",{staticClass:"relative"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.new_webhook.data.status,expression:"new_webhook.data.status"}],staticClass:"sr-only",attrs:{type:"checkbox",id:"toggleActive"},domProps:{checked:Array.isArray(e.new_webhook.data.status)?e._i(e.new_webhook.data.status,null)>-1:e.new_webhook.data.status},on:{change:function(t){var s=e.new_webhook.data.status,o=t.target,a=!!o.checked;if(Array.isArray(s)){var r=e._i(s,null);o.checked?r<0&&e.$set(e.new_webhook.data,"status",s.concat([null])):r>-1&&e.$set(e.new_webhook.data,"status",s.slice(0,r).concat(s.slice(r+1)))}else e.$set(e.new_webhook.data,"status",a)}}}),e._v(" "),t("div",{staticClass:"block bg-gray-600 w-14 h-8 rounded-full"}),e._v(" "),t("div",{staticClass:"dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"})]),e._v(" "),t("span",{staticClass:"ml-2"},[e._v("Active")])])])])])])]},proxy:!0},{key:"footer",fn:function(){return[t("ui-button",{attrs:{color:"gray-50",hover:"gray-200"},nativeOn:{click:function(t){return e.closeNewWebhookModal.apply(null,arguments)}}},[t("span",{staticClass:"text-gray-800"},[e._v("Cancel")])]),e._v(" "),t("ui-button",{attrs:{color:"indigo-500",disabled:e.progress},nativeOn:{click:function(t){return e.createNewWebhookSubmit.apply(null,arguments)}}},[e._v("\n                "+e._s(e.editStatus?"Save Changes":"Create Webhook")+"\n            ")])]},proxy:!0}])})],1)}),[function(){var e=this,t=e._self._c;return t("thead",{staticClass:"bg-gray-100"},[t("tr",[t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[e._v("Name")]),e._v(" "),t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[e._v("URL")]),e._v(" "),t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[e._v("Collections")]),e._v(" "),t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[e._v("Events")]),e._v(" "),t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[e._v("Sources")]),e._v(" "),t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",attrs:{scope:"col"}},[e._v("Status")]),e._v(" "),t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-px",attrs:{scope:"col"}}),e._v(" "),t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-px",attrs:{scope:"col"}}),e._v(" "),t("th",{staticClass:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-px",attrs:{scope:"col"}})])])}],!1,null,null,null).exports},6295:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const o={props:["project"],methods:{checkRole:s(3787).Z}};const a=(0,s(1900).Z)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"app__project-nav p-4 bg-white"},[t("h4",{staticClass:"mb-2 p-2 font-bold text-lg"},[e._v("Settings")]),e._v(" "),t("ul",[t("li",{staticClass:"mb-2"},[void 0!==e.project.id?t("router-link",{staticClass:"block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",attrs:{to:{name:"projects.settings",params:{project_id:e.project.id}}}},[e._v("Project")]):e._e()],1),e._v(" "),t("li",{staticClass:"mb-2"},[void 0!==e.project.id&&e.checkRole(["super_admin"])?t("router-link",{staticClass:"block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",attrs:{to:{name:"projects.settings.locales",params:{project_id:e.project.id}}}},[e._v("Localization")]):e._e()],1),e._v(" "),t("li",{staticClass:"mb-2"},[void 0!==e.project.id&&e.checkRole(["super_admin"])?t("router-link",{staticClass:"block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",attrs:{to:{name:"projects.settings.users",params:{project_id:e.project.id}}}},[e._v("Users & Roles")]):e._e()],1),e._v(" "),t("li",{staticClass:"mb-2"},[void 0!==e.project.id&&e.checkRole(["super_admin"])?t("router-link",{staticClass:"block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",attrs:{to:{name:"projects.settings.api",params:{project_id:e.project.id}}}},[e._v("API Access")]):e._e()],1),e._v(" "),t("li",{staticClass:"mb-2"},[void 0!==e.project.id&&e.checkRole(["super_admin"])?t("router-link",{staticClass:"block w-full p-2 cursor-pointer hover:bg-gray-100 rounded",attrs:{to:{name:"projects.settings.webhooks",params:{project_id:e.project.id}}}},[e._v("Webhooks")]):e._e()],1)])])}),[],!1,null,null,null).exports},4623:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const o={props:["project"],methods:{checkRole:s(3787).Z}};const a=(0,s(1900).Z)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"app__project-common-header fixed w-full flex p-4 border-b bg-white"},[t("span",{staticClass:"flex items-center pr-4"},[t("router-link",{attrs:{to:{name:"projects"}}},[t("i",{staticClass:"fas fa-arrow-left"})])],1),e._v(" "),t("div",{staticClass:"w-full"},[t("div",{staticClass:"text-xl font-bold"},[t("router-link",{attrs:{to:{name:"projects.index",params:{project_id:e.project.id}}}},[e._v("\n                Project: "+e._s(e.project.name)+"\n            ")])],1),e._v(" "),t("div",{staticClass:"text-sm"},[e._v(e._s(e.project.description))])])])}),[],!1,null,null,null).exports},9:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});const o=s(1706).Z}}]);