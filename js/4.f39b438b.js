(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{1195:function(t,e,a){t.exports=a.p+"img/avatar.10691648.png"},"130f":function(t,e,a){"use strict";a("ddce")},"438e":function(t,e,a){t.exports=a.p+"img/logosav.bdc620f4.png"},7126:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-center items-center",staticStyle:{background:"linear-gradient(#545454, #0b0b0b)","min-width":"100%","min-height":"100%"}},[a("div",{staticClass:"column q-pa-lg"},[a("div",{staticClass:"row"},[a("q-card",{staticClass:"shadow-24",staticStyle:{"background-color":"#282829",width:"300px",height:"485px"},attrs:{square:""}},[a("q-card-section",{staticClass:"bg-primary"},[a("h4",{staticClass:"text-h5 text-white q-my-md"},[t._v(t._s(t.$t("login_text")))])]),a("q-card-section",[a("div",{staticClass:"q-mb-sm"},[a("q-input",{attrs:{square:"",clearable:"",dense:"",label:t.$t("login_config_endpoint"),rules:[function(e){return!!e||t.$t("field_is_required")}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"dns"}})]},proxy:!0}]),model:{value:t.LoginData.Endpoint,callback:function(e){t.$set(t.LoginData,"Endpoint",e)},expression:"LoginData.Endpoint"}})],1),a("div",{staticClass:"q-mb-sm"},[a("q-input",{attrs:{square:"",clearable:"",dense:"",type:"password",label:t.$t("login_config_uniquekey"),rules:[function(e){return!!e||t.$t("field_is_required")}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:t.LoginData.ConfigUniqueKey,callback:function(e){t.$set(t.LoginData,"ConfigUniqueKey",e)},expression:"LoginData.ConfigUniqueKey"}})],1),a("div",{staticClass:"q-mb-sm"},[a("q-input",{attrs:{square:"",clearable:"",dense:"",label:t.$t("login_pool"),rules:[function(e){return!!e||t.$t("field_is_required")}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"face"}})]},proxy:!0}]),model:{value:t.LoginData.Pool,callback:function(e){t.$set(t.LoginData,"Pool",e)},expression:"LoginData.Pool"}})],1),a("div",{staticClass:"q-mb-sm"},[a("q-input",{attrs:{square:"",clearable:"",dense:"",type:"password",label:t.$t("login_pool_unique_id"),rules:[function(e){return!!e||t.$t("field_is_required")}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"vpn_key"}})]},proxy:!0}]),model:{value:t.LoginData.PoolUniqueKey,callback:function(e){t.$set(t.LoginData,"PoolUniqueKey",e)},expression:"LoginData.PoolUniqueKey"}})],1)]),a("q-card-actions",{staticClass:"text-primary q-pt-none",attrs:{align:"right"}},[a("q-btn",{staticClass:"primary-button",attrs:{"icon-right":"send",color:"primary",label:t.$t("login")},on:{click:function(e){return t.submit()}}})],1)],1)],1)])])},s=[],i=a("ded3"),o=a.n(i),r=a("2f62"),l=a("ee8f"),c={name:"LoginCard",data(){return{LoginData:{Endpoint:"",ConfigUniqueKey:"123",Pool:"scada",PoolUniqueKey:"123",Username:"",Password:""}}},mounted(){void 0!==this.$q.localStorage.getItem("endpoint")&&(this.LoginData.Endpoint=this.$q.localStorage.getItem("endpoint"))},methods:o()(o()({},Object(r["b"])("auth",["updateStatus","login","updateLoginStatus"])),{},{openLoginModel:function(t){this.showLoginModal=t,this.errordata=""},submit:async function(){await l["a"].connectPool(this.LoginData.Endpoint,this.LoginData.Pool,this.LoginData.PoolUniqueKey);let t=l["a"].getConnectionPool();t?(this.login(),this.updateLoginStatus(!1)):(this.$q.notify({type:"negative",message:this.$t("alert_message"),actions:[{label:"ok",color:"gray",handler:()=>{}}]}),this.updateLoginStatus(!0)),await l["a"].getRequestWebConfig(this.LoginData.ConfigUniqueKey)},test:function(){this.updateStatus()}})},d=c,u=a("2877"),p=a("f09f"),m=a("a370"),f=a("27f9"),g=a("0016"),b=a("4b7e"),q=a("9c40"),h=a("eebe"),k=a.n(h),v=Object(u["a"])(d,n,s,!1,null,"43c91857",null);e["default"]=v.exports;k()(v,"components",{QCard:p["a"],QCardSection:m["a"],QInput:f["a"],QIcon:g["a"],QCardActions:b["a"],QBtn:q["a"]})},"713b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{attrs:{elevated:""}},[n("q-toolbar",{staticClass:"glossy"},[n("q-btn",{staticClass:"menu",attrs:{onclick:"this.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'))","aria-label":"Menu",flat:"",dense:"",round:""},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[n("svg",{attrs:{width:"30",height:"30",viewBox:"0 0 100 100"}},[n("path",{staticClass:"line line1",attrs:{d:"M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"}}),n("path",{staticClass:"line line2",attrs:{d:"M 20,50 H 80"}}),n("path",{staticClass:"line line3",attrs:{d:"M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"}})])]),n("q-btn",{attrs:{icon:t.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen",label:(t.$q.fullscreen.isActive,"")},on:{click:function(e){return t.$q.fullscreen.toggle()}}}),n("q-dialog",{attrs:{persistent:"",dense:""},model:{value:t.loginStatus,callback:function(e){t.loginStatus=e},expression:"loginStatus"}},[n("logincard")],1),n("q-toolbar-title"),n("q-item",{staticClass:"q-pl-none q-pr-none"},[n("q-select",{attrs:{options:[{label:"Türkçe",value:"tr-tr"},{label:"English",value:"en-us"}],dense:"",borderless:"","emit-value":"","map-options":"","options-dense":""},on:{input:t.setLocale},model:{value:t.locale,callback:function(e){t.locale=e},expression:"locale"}}),n("q-item-section",[n("q-chip",{style:t.isConnected?"background-color: green":"background-color: red"},[n("q-avatar",{attrs:{size:"40px"}},[n("img",{staticClass:"logo",style:t.isConnected?"background-color: green":"background-color: red",attrs:{src:a("1195")}})]),t._v("\n            "+t._s(t.CurrentUserFullname)+"\n            "),n("q-menu",[n("div",{staticClass:"row no-wrap q-pa-md"},[n("div",{staticClass:"column"},[n("div",{staticClass:"text-h9 q-mb-md"},[n("q-list",{staticStyle:{"min-width":"100px"}},[n("q-item",{attrs:{clickable:""}},[n("q-item-section",{staticStyle:{"min-width":"106px"}},[t._v(t._s(t.$t("edit_user")))])],1),n("q-item",{attrs:{clickable:""}},[n("q-item-section",{staticStyle:{"min-width":"106px"}},[t._v(t._s(t.$t("generalsettings")))])],1)],1)],1)]),n("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),n("div",{staticClass:"column items-center"},[n("q-avatar",{attrs:{size:"60px"}},[n("img",{staticClass:"logo",attrs:{src:a("1195")}})]),n("div",{staticClass:"text-subtitle1 q-mt-md q-mb-xs"},[t._v("\n                    "+t._s(t.$t("user"))+"\n                  ")]),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{color:"red",label:t.$t("logout"),push:"",size:"sm"},on:{click:t.logoutclicked}})],1)],1)])],1)],1)],1)],1)],1),n("q-drawer",{staticClass:"sidebar",attrs:{"show-if-above":"",bordered:"",width:250,breakpoint:600},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("div",{staticClass:"q-pa-sm glossy"},[n("img",{staticClass:"logo",attrs:{src:a("438e")}})]),n("q-separator"),n("q-list",t._l(t.menuitems,(function(e){return n("div",{key:e.title},[e.children?n("div",[n("q-expansion-item",{attrs:{"expand-separator":"",icon:e.icon,label:t.$t("adaptors"),"content-inset-level":.2}},t._l(e.children,(function(e){return n("q-item",{key:e.title,staticClass:"menu-items",attrs:{to:e.link,exact:"",clickable:""}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$t(e.title)))])],1)],1)})),1)],1):n("q-item",{staticClass:"menu-items",attrs:{to:e.link,exact:"",clickable:""}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$t(e.title)))])],1)],1)],1)})),0)],1),n("q-page-container",{staticClass:"container"},[n("router-view")],1)],1)},s=[],i=a("ded3"),o=a.n(i),r=a("2f62"),l={name:"MainLayout",data(){return{locale:this.$q.lang.isoName,darkMode:!1,leftDrawerOpen:!1,menuitems:[{title:"dashboard",icon:"dashboard",link:"/"},{title:"messenger",icon:"markunread_mailbox",link:"/messenger"},{title:"configuration",icon:"business_center",link:"/configurations"},{title:"usermanagement",icon:"people",link:"/usermanagement"},{title:"projectmanagement",icon:"perm_media",link:"/projectmanagement"},{title:"alarmmanagement",icon:"notification_important",link:"/alarmmanagement"},{title:"adaptors",icon:"account_tree",children:[{title:"modbusadaptor",icon:"account_tree",link:"/modbusadaptor"},{title:"ipcheckadaptor",icon:"account_tree",link:"/ipcheckadaptor"},{title:"snmpadaptor",icon:"account_tree",link:"/snmpadaptor"}]}]}},components:{logincard:a("7126").default},computed:o()(o()(o()({},Object(r["c"])("auth",["isConnected","isDisconnected","CurrentUser","CurrentUserFullname","loginStatus"])),Object(r["c"])("scadadata",["getAllConstantValue"])),{},{currentRouteName(){return this.$route.name},darkDark(){return this.darkMode&&"darkmode-toggled"}}),watch:{},methods:o()(o()({},Object(r["b"])("auth",["updateLoginStatus"])),{},{setLocale(t){this.$i18n.locale=t,a("8488")("./"+t).then((({default:t})=>{this.$q.lang.set(t)}))},logoutclicked(){this.updateLoginStatus(!0)}})},c=l,d=(a("130f"),a("2877")),u=a("4d5a"),p=a("e359"),m=a("65c6"),f=a("9c40"),g=a("24e8"),b=a("6ac5"),q=a("66e5"),h=a("ddd8"),k=a("4074"),v=a("b047"),j=a("cb32"),C=a("4e73"),_=a("1c1c"),y=a("eb85"),x=a("9404"),w=a("3b73"),L=a("0016"),$=a("0170"),D=a("09e3"),S=a("7f67"),Q=a("eebe"),P=a.n(Q),O=Object(d["a"])(c,n,s,!1,null,"285133ba",null);e["default"]=O.exports;P()(O,"components",{QLayout:u["a"],QHeader:p["a"],QToolbar:m["a"],QBtn:f["a"],QDialog:g["a"],QToolbarTitle:b["a"],QItem:q["a"],QSelect:h["a"],QItemSection:k["a"],QChip:v["a"],QAvatar:j["a"],QMenu:C["a"],QList:_["a"],QSeparator:y["a"],QDrawer:x["a"],QExpansionItem:w["a"],QIcon:L["a"],QItemLabel:$["a"],QPageContainer:D["a"]}),P()(O,"directives",{ClosePopup:S["a"]})},8488:function(t,e,a){var n={"./":["a6d8",3,0],"./ar":["13ef",9,0],"./ar.js":["13ef",9,0],"./az-latn":["4336",9,0],"./az-latn.js":["4336",9,0],"./bg":["a6b2",9,0],"./bg.js":["a6b2",9,0],"./ca":["8378",9,0],"./ca.js":["8378",9,0],"./cs":["5ddc",9,0],"./cs.js":["5ddc",9,0],"./da":["d3e4",9,0],"./da.js":["d3e4",9,0],"./de":["215a",9,0],"./de.js":["215a",9,0],"./el":["83bc",9,0],"./el.js":["83bc",9,0],"./en-gb":["17f5",9,0],"./en-gb.js":["17f5",9,0],"./en-us":["1f91",9],"./en-us.js":["1f91",9],"./eo":["b25b",9,0],"./eo.js":["b25b",9,0],"./es":["df1a",9,0],"./es.js":["df1a",9,0],"./et":["c3ad",9,0],"./et.js":["c3ad",9,0],"./fa":["a0f3",9,0],"./fa-ir":["b67a",9,0],"./fa-ir.js":["b67a",9,0],"./fa.js":["a0f3",9,0],"./fi":["10c0",9,0],"./fi.js":["10c0",9,0],"./fr":["34fe",9,0],"./fr.js":["34fe",9,0],"./gn":["3c87",9,0],"./gn.js":["3c87",9,0],"./he":["36eb",9,0],"./he.js":["36eb",9,0],"./hr":["007f",9,0],"./hr.js":["007f",9,0],"./hu":["a9af",9,0],"./hu.js":["a9af",9,0],"./id":["7e40",9,0],"./id.js":["7e40",9,0],"./index":["a6d8",3,0],"./index.json":["a6d8",3,0],"./is":["e41d",9,0],"./is.js":["e41d",9,0],"./it":["a745",9,0],"./it.js":["a745",9,0],"./ja":["5521",9,0],"./ja.js":["5521",9,0],"./km":["726e",9,0],"./km.js":["726e",9,0],"./ko-kr":["187f",9,0],"./ko-kr.js":["187f",9,0],"./kur-ckb":["d9db",9,0],"./kur-ckb.js":["d9db",9,0],"./lu":["1ee2",9,0],"./lu.js":["1ee2",9,0],"./lv":["004e",9,0],"./lv.js":["004e",9,0],"./ml":["c454",9,0],"./ml.js":["c454",9,0],"./ms":["bf26",9,0],"./ms.js":["bf26",9,0],"./nb-no":["dacc",9,0],"./nb-no.js":["dacc",9,0],"./nl":["8cf4",9,0],"./nl.js":["8cf4",9,0],"./pl":["700f",9,0],"./pl.js":["700f",9,0],"./pt":["37ed",9,0],"./pt-br":["f476",9,0],"./pt-br.js":["f476",9,0],"./pt.js":["37ed",9,0],"./ro":["fecf",9,0],"./ro.js":["fecf",9,0],"./ru":["14c0",9,0],"./ru.js":["14c0",9,0],"./sk":["15e6",9,0],"./sk.js":["15e6",9,0],"./sl":["5e5a",9,0],"./sl.js":["5e5a",9,0],"./sr":["78dc",9,0],"./sr.js":["78dc",9,0],"./sv":["7107",9,0],"./sv.js":["7107",9,0],"./ta":["3572",9,0],"./ta.js":["3572",9,0],"./th":["c9b0",9,0],"./th.js":["c9b0",9,0],"./tr":["c1a5",9,0],"./tr.js":["c1a5",9,0],"./ug":["c290",9,0],"./ug.js":["c290",9,0],"./uk":["6464",9,0],"./uk.js":["6464",9,0],"./vi":["1fb0",9,0],"./vi.js":["1fb0",9,0],"./zh-hans":["bf69",9,0],"./zh-hans.js":["bf69",9,0],"./zh-hant":["db10",9,0],"./zh-hant.js":["db10",9,0]};function s(t){if(!a.o(n,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=n[t],s=e[0];return Promise.all(e.slice(2).map(a.e)).then((function(){return a.t(s,e[1])}))}s.keys=function(){return Object.keys(n)},s.id="8488",t.exports=s},ddce:function(t,e,a){}}]);