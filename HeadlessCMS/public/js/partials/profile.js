"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[845],{1706:(e,s,t)=>{t.d(s,{Z:()=>a});const a={props:{type:{type:String,default:"submit"},color:{type:String,default:"gray-800"},hover:{type:String,default:null},padding:{type:String,default:null},disabled:{type:Boolean,default:!1}},computed:{bgColor:function(){var e="";if(this.disabled)e="bg-indigo-200 cursor-not-allowed";else{var s="bg-"+this.color,t=this.color.split("-"),a=null==this.hover?"bg-"+t[0]+"-"+(parseInt(t[1])+100):"bg-"+this.hover,r="bg-"+t[0]+"-"+(parseInt(t[1])+100);t[0],parseInt(t[1]),t[0];e=s+" hover:"+a+" active:"+r}return null===this.padding?e+=" p-3 ":e+=" "+this.padding+" ",e}}}},7901:(e,s,t)=>{t.d(s,{s:()=>a,x:()=>r});var a=function(){var e=this;return(0,e._self._c)("button",{staticClass:"items-center border border-transparent rounded-sm text-sm text-white focus:outline-none transition ease-in-out duration-150",class:e.bgColor,attrs:{type:e.type,disabled:e.disabled}},[e._t("default")],2)},r=[]},4487:(e,s,t)=>{t.d(s,{Z:()=>o});var a=t(7901),r=t(9);const o=(0,t(1900).Z)(r.Z,a.s,a.x,!1,null,null,null).exports},675:(e,s,t)=>{t.r(s),t.d(s,{default:()=>i});var a=t(4487),r=t(4655);const o={components:{UiButton:a.Z},data:function(){return{user:{name:r.Z.state.user.name,email:r.Z.state.user.email,errors:{}}}},methods:{saveName:function(){var e=this;axios.post("/admin/user/update_name",this.user).then((function(s){e.$toast.success("Saved."),e.user.errors={}}),(function(s){422==s.response.status&&(e.user.errors=s.response.data.errors)}))},saveEmail:function(){var e=this;this.user.email!==r.Z.state.user.email?this.$swal.fire({title:"Are you sure",text:"you want to change your e-mail address"}).then((function(s){s.value&&axios.post("/admin/user/update_email",e.user).then((function(s){e.$toast.success("Saved."),e.user.errors={}}),(function(s){422==s.response.status&&(e.user.errors=s.response.data.errors)}))})):axios.post("/admin/user/update_email",this.user).then((function(s){e.$toast.success("Saved."),e.user.errors={}}),(function(s){422==s.response.status&&(e.user.errors=s.response.data.errors)}))},savePassword:function(){var e=this;axios.post("/admin/user/update_password",this.user).then((function(s){e.$toast.success("Saved."),e.user.errors={},e.user.password="",e.user.password_confirmation=""}),(function(s){422==s.response.status&&(e.user.errors=s.response.data.errors)}))}}};const i=(0,t(1900).Z)(o,(function(){var e=this,s=e._self._c;return s("div",{staticClass:"app__profile"},[s("div",{staticClass:"w-full lg:w-3/4 m-auto mt-5"},[e._m(0),e._v(" "),s("div",{staticClass:"bg-white mt-2 rounded-md p-4 w-full"},[s("form",{staticClass:"space-y-6"},[s("div",[s("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("Name")]),e._v(" "),s("div",{staticClass:"mt-1 relative"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"},{name:"forminput",rawName:"v-forminput"}],attrs:{type:"text",autofocus:""},domProps:{value:e.user.name},on:{input:function(s){s.target.composing||e.$set(e.user,"name",s.target.value)}}}),e._v(" "),e.user.errors.name?s("p",{staticClass:"text-sm text-red-600 mt-1"},[e._v(e._s(e.user.errors.name[0]))]):e._e()])]),e._v(" "),s("div",[s("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]}),e._v(" "),s("div",{staticClass:"mt-1 relative"},[s("ui-button",{attrs:{color:"indigo-500"},nativeOn:{click:function(s){return e.saveName()}}},[e._v("Update Name")])],1)])])]),e._v(" "),s("div",{staticClass:"bg-white mt-2 rounded-md p-4 w-full"},[s("form",{staticClass:"space-y-6"},[s("div",[s("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("E-mail")]),e._v(" "),s("div",{staticClass:"mt-1 relative"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"},{name:"forminput",rawName:"v-forminput"}],attrs:{type:"text",autofocus:""},domProps:{value:e.user.email},on:{input:function(s){s.target.composing||e.$set(e.user,"email",s.target.value)}}}),e._v(" "),e.user.errors.email?s("p",{staticClass:"text-sm text-red-600 mt-1"},[e._v(e._s(e.user.errors.email[0]))]):e._e()])]),e._v(" "),s("div",[s("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]}),e._v(" "),s("div",{staticClass:"mt-1 relative"},[s("ui-button",{attrs:{color:"indigo-500"},nativeOn:{click:function(s){return e.saveEmail()}}},[e._v("Update E-mail")])],1)])])]),e._v(" "),s("div",{staticClass:"bg-white mt-2 rounded-md p-4"},[s("div",[s("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("Password")]),e._v(" "),s("div",{staticClass:"mt-1 relative"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"},{name:"forminput",rawName:"v-forminput"}],attrs:{type:"password",autofocus:""},domProps:{value:e.user.password},on:{input:function(s){s.target.composing||e.$set(e.user,"password",s.target.value)}}}),e._v(" "),e.user.errors.password?s("p",{staticClass:"text-sm text-red-600 mt-1"},[e._v(e._s(e.user.errors.password[0]))]):e._e()])]),e._v(" "),s("div",{staticClass:"mt-2"},[s("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]},[e._v("Confirm Password")]),e._v(" "),s("div",{staticClass:"mt-1 relative"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password_confirmation,expression:"user.password_confirmation"},{name:"forminput",rawName:"v-forminput"}],attrs:{type:"password",autofocus:""},domProps:{value:e.user.password_confirmation},on:{input:function(s){s.target.composing||e.$set(e.user,"password_confirmation",s.target.value)}}})])]),e._v(" "),s("div",[s("label",{directives:[{name:"formlabel",rawName:"v-formlabel"}]}),e._v(" "),s("div",{staticClass:"mt-1 relative"},[s("ui-button",{attrs:{color:"indigo-500"},nativeOn:{click:function(s){return e.savePassword()}}},[e._v("Update Password")])],1)])])])])}),[function(){var e=this._self._c;return e("div",{staticClass:"p-4 flex border-b"},[e("div",{staticClass:"w-full"},[e("div",{staticClass:"text-xl font-bold"},[this._v("\n                    My Profile\n                ")])])])}],!1,null,null,null).exports},9:(e,s,t)=>{t.d(s,{Z:()=>a});const a=t(1706).Z}}]);