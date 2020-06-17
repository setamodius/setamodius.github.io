(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{7367:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",[s("div",{staticClass:"q-pa-md q-gutter-md"},[s("q-list",{staticClass:"rounded-borders",attrs:{bordered:"",padding:""}},[s("div",{staticClass:"row"},[s("q-item-section",{attrs:{avatar:""}},[s("q-btn",{attrs:{flat:"",round:"",icon:"refresh"},on:{click:function(t){return e.refresh()}}})],1),s("q-item-section",[s("b",[e._v("Scada Users")])])],1),s("q-separator"),e._l(e.users,(function(t){return s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.Username,attrs:{clickable:""}},[s("q-item-section",{attrs:{avatar:"",top:""}},[s("q-avatar",{attrs:{size:"lg",color:"blue","text-color":"white"}},[e._v(e._s(t.Fullname.getInitials())+"\n          ")])],1),s("q-item-section",[s("q-item-label",{attrs:{lines:"1"}},[e._v(e._s(t.Fullname))]),s("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.Username))])],1),s("q-item-section",{attrs:{side:""}},[s("div",{staticClass:"row"},[s("q-btn",{attrs:{dense:"","text-color":"amber",flat:"",icon:"create"},on:{click:function(s){return e.openEditUserModel({open:!0,user:t})}}}),s("q-btn",{attrs:{"text-color":"red",flat:"",dense:"",icon:"delete"},on:{click:function(s){return e.deleteUser(t)}}})],1)])],1)})),s("div",{staticClass:"q-mr-sm text-right"},[s("q-btn",{attrs:{round:"",color:"secondary",icon:"add"},on:{click:function(t){return e.openCreateUserModel(!0)}}})],1)],2),s("q-dialog",{model:{value:e.showEditModal,callback:function(t){e.showEditModal=t},expression:"showEditModal"}},[s("q-card",{staticStyle:{"min-width":"330px"}},[s("q-card-section",{staticClass:"q-pb-none"},[s("div",{staticClass:"text-h6"},[e._v("User Edit")])]),s("q-card-section",[s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",label:"Username",readonly:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"face"}})]},proxy:!0}]),model:{value:e.editModel.Username,callback:function(t){e.$set(e.editModel,"Username",t)},expression:"editModel.Username"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",label:"Full Name",rules:[function(e){return!!e||"Field is required"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"perm_contact_calendar"}})]},proxy:!0}]),model:{value:e.editModel.Fullname,callback:function(t){e.$set(e.editModel,"Fullname",t)},expression:"editModel.Fullname"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",label:"Privilege",rules:[function(e){return!!e||"Field is required"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"edit_attributes"}})]},proxy:!0}]),model:{value:e.editModel.Privilege,callback:function(t){e.$set(e.editModel,"Privilege",t)},expression:"editModel.Privilege"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",type:"password",label:"Password",rules:[function(e){return!!e||"Field is required"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:e.editModel.Password,callback:function(t){e.$set(e.editModel,"Password",t)},expression:"editModel.Password"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",type:"password",label:"Password",rules:[function(e){return!!e||"Field is required"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:e.editModel.confirm,callback:function(t){e.$set(e.editModel,"confirm",t)},expression:"editModel.confirm"}})],1)]),s("q-card-actions",{staticClass:"text-primary q-pt-none ",attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"secondary","icon-right":"send",label:"UPDATE"},on:{click:function(t){return e.updateUser()}}})],1)],1)],1),s("q-dialog",{model:{value:e.showCreateModal,callback:function(t){e.showCreateModal=t},expression:"showCreateModal"}},[s("q-card",{staticStyle:{"min-width":"330px"}},[s("q-card-section",{staticClass:"q-pb-none"},[s("div",{staticClass:"text-h6"},[e._v("Create User")])]),s("q-card-section",[s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",label:"Username",rules:[function(e){return!!e||"Field is required"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"face"}})]},proxy:!0}]),model:{value:e.createModel.Username,callback:function(t){e.$set(e.createModel,"Username",t)},expression:"createModel.Username"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",label:"Full Name",rules:[function(e){return!!e||"Field is required"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"perm_contact_calendar"}})]},proxy:!0}]),model:{value:e.createModel.Fullname,callback:function(t){e.$set(e.createModel,"Fullname",t)},expression:"createModel.Fullname"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",label:"Privilege",rules:[function(e){return!!e||"Field is required"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"edit_attributes"}})]},proxy:!0}]),model:{value:e.createModel.Privilege,callback:function(t){e.$set(e.createModel,"Privilege",t)},expression:"createModel.Privilege"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",type:"password",label:"Password",rules:[function(e){return!!e||"Field is required"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:e.createModel.Password,callback:function(t){e.$set(e.createModel,"Password",t)},expression:"createModel.Password"}})],1),s("div",{staticClass:"q-mb-sm"},[s("q-input",{attrs:{dense:"",type:"password",label:"Password",rules:[function(e){return!!e||"Field is required"}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:e.createModel.confirm,callback:function(t){e.$set(e.createModel,"confirm",t)},expression:"createModel.confirm"}})],1)]),s("q-card-actions",{staticClass:"text-primary q-pt-none ",attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"secondary","icon-right":"send",label:"CREATE"},on:{click:function(t){return e.createUser()}}})],1)],1)],1)],1)])},i=[],a=s("6afc"),n={name:"UserManagement",data:function(){return{users:[],myvalue:"",rpcgetallusers:"",rpccreateuser:"",rpcdeleteuser:"",rpcedituser:"",responsejson:"",showCreateModal:!1,showEditModal:!1,createModel:{Username:"",Fullname:"",Privilege:"",Password:"",confirm:""},editModel:{Username:"",Fullname:"",Privilege:"",Password:"",confirm:""},card:!0}},methods:{refresh:function(){console.log("refresh"),this.rpcgetallusers=a["b"].callrpc("Access","GetAllUsers","{}")},openCreateUserModel:function(e){console.log("clicked"),this.showCreateModal=e},openEditUserModel:function(e){this.showEditModal=e.open,e.open&&(this.editModel.Username=e.user.Username,this.editModel.Fullname=e.user.Fullname,this.editModel.Privilege=e.user.Privilege)},createUser:function(){""!==this.createModel.Username&&""!==this.createModel.Fullname&&""!==this.createModel.Privilege&&""!==this.createModel.Password&&""!==this.createModel.confirm&&this.createModel.Password==this.createModel.confirm&&(this.showCreateModal=!1,this.rpccreateuser=a["b"].callrpc("Access","CreateUser",JSON.stringify(this.createModel)))},updateUser:function(){""!==this.editModel.Username&&""!==this.editModel.Fullname&&""!==this.editModel.Privilege&&""!==this.editModel.Password&&""!==this.editModel.confirm&&this.editModel.Password==this.editModel.confirm&&(this.showEditModal=!1,this.rpcedituser=a["b"].callrpc("Access","ChangeUser",JSON.stringify(this.editModel)))},deleteUser:function(e){var t=this;this.$q.dialog({title:"Confirm",message:"Would you like delete '"+e.Fullname+"'?",cancel:!0,persistent:!0}).onOk((function(){t.rpcdeleteuser=a["b"].callrpc("Access","DeleteUser",JSON.stringify(e))}))}},created:function(){var e=this;this.refresh(),a["a"].$on("RpcResult",(function(t){if(t.uid===e.rpcgetallusers)for(var s in e.users=[],t.message)e.users.push(t.message[s]);t.uid===e.rpccreateuser&&201==t.message.Id&&e.refresh(),t.uid===e.rpcdeleteuser&&200==t.message.Id&&e.refresh(),t.uid===e.rpcedituser&&200==t.message.Id&&e.refresh()}))}},l=n,o=s("2877"),d=Object(o["a"])(l,r,i,!1,null,"51e94828",null);t["default"]=d.exports}}]);