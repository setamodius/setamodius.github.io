(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{7367:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",[s("div",{staticClass:"q-pa-md q-gutter-sm"},[s("q-breadcrumbs",[s("q-breadcrumbs-el",{attrs:{icon:"home",to:"/"}}),s("q-breadcrumbs-el",{attrs:{label:e.$t("breadcrumbs_user_management"),icon:"navigation",to:"/vue-components/breadcrumbs"}})],1)],1),s("div",{staticClass:"q-pa-md q-gutter-md"},[s("q-list",{staticClass:"rounded-borders",attrs:{bordered:"",padding:""}},[s("div",{staticClass:"row q-ml-sm q-mb-sm"},[s("q-item-section",{attrs:{avatar:""}},[s("q-btn",{attrs:{size:"md",flat:"",round:"",icon:"refresh"},on:{click:function(t){return e.refresh()}}})],1),s("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("scada_users")))])],1),s("q-separator"),e._l(e.users,(function(t){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.Username,staticClass:"item-design",attrs:{clickable:""}},[s("q-item-section",{attrs:{avatar:"",top:""}},[s("q-avatar",{attrs:{size:"md",color:"blue","text-color":"white"}},[e._v(e._s(t.Fullname.getInitials())+"\n          ")])],1),s("q-item-section",[s("q-item-label",{attrs:{lines:"1"}},[e._v(e._s(t.Fullname))]),s("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.Username))])],1),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"row"},[s("q-btn",{attrs:{dense:"","text-color":"green",flat:"",icon:"create"},on:{click:function(s){return e.openEditUserModel({open:!0,user:t})}}}),s("q-btn",{attrs:{"text-color":"red",flat:"",dense:"",icon:"delete"},on:{click:function(s){return e.deleteUser(t)}}})],1)])],1)})),s("q-separator"),s("div",{staticClass:"row q-mt-sm q-mr-sm"},[s("q-space"),s("q-btn",{attrs:{round:"",color:"secondary",icon:"add"},on:{click:function(t){return e.openCreateUserModel(!0)}}})],1)],2),s("q-dialog",{model:{value:e.showEditModal,callback:function(t){e.showEditModal=t},expression:"showEditModal"}},[s("q-card",{staticClass:"q-card-design",staticStyle:{"background-color":"#2b2b2b"}},[s("q-card-section",{staticClass:"q-pb-none"},[s("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("user_edit")))])]),s("q-separator"),s("q-card-section",[s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",label:e.$t("user_name"),readonly:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"face"}})]},proxy:!0}]),model:{value:e.editModel.Username,callback:function(t){e.$set(e.editModel,"Username",t)},expression:"editModel.Username"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",label:e.$t("full_name"),rules:[function(t){return!!t||e.$t("field_is_required")}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"perm_contact_calendar"}})]},proxy:!0}]),model:{value:e.editModel.Fullname,callback:function(t){e.$set(e.editModel,"Fullname",t)},expression:"editModel.Fullname"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",label:e.$t("privilege"),rules:[function(t){return!!t||e.$t("field_is_required")}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"edit_attributes"}})]},proxy:!0}]),model:{value:e.editModel.Privilege,callback:function(t){e.$set(e.editModel,"Privilege",t)},expression:"editModel.Privilege"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",type:"password",label:e.$t("password"),rules:[function(t){return!!t||e.$t("field_is_required")}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:e.editModel.Password,callback:function(t){e.$set(e.editModel,"Password",t)},expression:"editModel.Password"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",type:"password",label:e.$t("password_verification"),rules:[function(t){return!!t||e.$t("field_is_required")}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:e.editModel.confirm,callback:function(t){e.$set(e.editModel,"confirm",t)},expression:"editModel.confirm"}})],1)]),s("q-card-actions",{staticClass:"text-primary q-pt-none",attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"secondary","icon-right":"send",label:e.$t("update")},on:{click:function(t){return e.updateUser()}}})],1)],1)],1),s("q-dialog",{model:{value:e.showCreateModal,callback:function(t){e.showCreateModal=t},expression:"showCreateModal"}},[s("q-card",{staticClass:"q-card-design",staticStyle:{"background-color":"#2b2b2b"}},[s("q-card-section",{staticClass:"q-pb-none"},[s("div",{staticClass:"text-h6"},[e._v(e._s(e.$t("create_user")))])]),s("q-separator"),s("q-card-section",[s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",label:e.$t("user_name"),rules:[function(t){return!!t||e.$t("field_is_required")}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"face"}})]},proxy:!0}]),model:{value:e.createModel.Username,callback:function(t){e.$set(e.createModel,"Username",t)},expression:"createModel.Username"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",label:e.$t("full_name"),rules:[function(t){return!!t||e.$t("field_is_required")}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"perm_contact_calendar"}})]},proxy:!0}]),model:{value:e.createModel.Fullname,callback:function(t){e.$set(e.createModel,"Fullname",t)},expression:"createModel.Fullname"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",label:e.$t("privilege"),rules:[function(t){return!!t||e.$t("field_is_required")}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"edit_attributes"}})]},proxy:!0}]),model:{value:e.createModel.Privilege,callback:function(t){e.$set(e.createModel,"Privilege",t)},expression:"createModel.Privilege"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",type:"password",label:e.$t("password"),rules:[function(t){return!!t||e.$t("field_is_required")}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:e.createModel.Password,callback:function(t){e.$set(e.createModel,"Password",t)},expression:"createModel.Password"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",type:"password",label:e.$t("password_verification"),rules:[function(t){return!!t||e.$t("field_is_required")}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:e.createModel.confirm,callback:function(t){e.$set(e.createModel,"confirm",t)},expression:"createModel.confirm"}})],1)]),s("q-card-actions",{staticClass:"text-primary q-pt-none",attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"secondary","icon-right":"send",label:e.$t("create")},on:{click:function(t){return e.createUser()}}})],1)],1)],1)],1)])},r=[],i=s("6afc"),n={name:"UserManagement",data(){return{users:[],myvalue:"",rpcdeleteuser:"",responsejson:"",showCreateModal:!1,showEditModal:!1,createModel:{Username:"",Fullname:"",Privilege:"",Password:"",confirm:""},editModel:{Username:"",Fullname:"",Privilege:"",Password:"",confirm:""},card:!0}},methods:{refresh:function(){i["c"].callrpccallback("Access","GetAllUsers","{}",(e=>{if(200!==e.message.Id)this.$q.notify({message:"Could not get users",color:"negative"});else for(var t in this.users=[],e.message.Content)this.users.push(e.message.Content[t])}))},openCreateUserModel:function(e){this.showCreateModal=e},openEditUserModel:function(e){this.showEditModal=e.open,e.open&&(this.editModel.Username=e.user.Username,this.editModel.Fullname=e.user.Fullname,this.editModel.Privilege=e.user.Privilege)},createUser(){""!==this.createModel.Username&&""!==this.createModel.Fullname&&""!==this.createModel.Privilege&&""!==this.createModel.Password&&""!==this.createModel.confirm&&this.createModel.Password==this.createModel.confirm&&(this.showCreateModal=!1,i["c"].callrpccallback("Access","CreateUser",JSON.stringify(this.createModel),(e=>{201!==e.message.Id?this.$q.notify({message:"Could not create user",color:"negative"}):(this.$q.notify({message:"User created",color:"positive"}),this.refresh())})))},updateUser(){""!==this.editModel.Username&&""!==this.editModel.Fullname&&""!==this.editModel.Privilege&&""!==this.editModel.Password&&""!==this.editModel.confirm&&this.editModel.Password==this.editModel.confirm&&(this.showEditModal=!1,i["c"].callrpccallback("Access","ChangeUser",JSON.stringify(this.editModel),(e=>{200!==e.message.Id?this.$q.notify({message:"Could not edit user",color:"negative"}):(this.$q.notify({message:"User changed",color:"positive"}),this.refresh())})))},deleteUser(e){this.$q.dialog({title:"Confirm",message:"Would you like delete '"+e.Fullname+"'?",cancel:!0,persistent:!0}).onOk((()=>{this.rpcdeleteuser=i["c"].callrpccallback("Access","DeleteUser",JSON.stringify(e),(e=>{200!==e.message.Id?this.$q.notify({message:"Could not delete user",color:"negative"}):(this.$q.notify({message:"User deleted",color:"positive"}),this.refresh())}))}))}},created:function(){this.refresh()}},o=n,l=s("2877"),c=s("9989"),d=s("ead5"),u=s("079eb"),m=s("1c1c"),p=s("4074"),f=s("9c40"),q=s("0170"),b=s("eb85"),v=s("66e5"),h=s("cb32"),M=s("2c91"),_=s("24e8"),g=s("f09f"),y=s("a370"),C=s("27f9"),w=s("0016"),k=s("4b7e"),$=s("714f"),U=s("7f67"),x=s("eebe"),P=s.n(x),S=Object(l["a"])(o,a,r,!1,null,"65fc7135",null);t["default"]=S.exports;P()(S,"components",{QPage:c["a"],QBreadcrumbs:d["a"],QBreadcrumbsEl:u["a"],QList:m["a"],QItemSection:p["a"],QBtn:f["a"],QItemLabel:q["a"],QSeparator:b["a"],QItem:v["a"],QAvatar:h["a"],QSpace:M["a"],QDialog:_["a"],QCard:g["a"],QCardSection:y["a"],QInput:C["a"],QIcon:w["a"],QCardActions:k["a"]}),P()(S,"directives",{Ripple:$["a"],ClosePopup:U["a"]})}}]);