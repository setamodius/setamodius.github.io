(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"1e5b":function(t,e,a){},"2da0":function(t,e,a){"use strict";a("1e5b")},"713b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$auth.isAuthenticated||t.$auth.loading?a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}),a("q-toolbar-title",[t._v("\n        My App\n      ")]),a("q-space"),a("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[t.$q.screen.gt.sm?a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"white",icon:t.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen"},on:{click:function(e){return t.$q.fullscreen.toggle()}}}):t._e(),a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"white",icon:"notifications"}},[a("q-badge",{attrs:{color:"red","text-color":"white",floating:""}},[t._v("\n            5\n          ")]),a("q-menu",[a("q-list",{staticStyle:{"min-width":"100px"}},[a("messages"),a("q-card",{staticClass:"text-center no-shadow no-border"},[a("q-btn",{staticClass:"text-indigo-8",staticStyle:{"max-width":"120px !important"},attrs:{label:"View All",flat:"",dense:""}})],1)],1)],1)],1),a("q-btn",{attrs:{round:"",flat:""}},[a("q-avatar",{attrs:{size:"26px"}},[a("img",{attrs:{src:t.$auth.user.picture}})])],1),t._v("\n        "+t._s(t.$auth.user.user_metadata)+"\n        "),a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"white",icon:"logout"},on:{click:function(e){return e.preventDefault(),t.logout(e)}}}),a("q-btn",{attrs:{round:"",dense:"",flat:"",color:"white",icon:"logout"},on:{click:t.callApi}})],1)],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-primary text-white"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item",{attrs:{to:"/","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"dashboard"}})],1),a("q-item-section",[a("q-item-label",[t._v("Dashboard")])],1)],1),a("q-item",{attrs:{to:"/Dashboard2","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"dashboard"}})],1),a("q-item-section",[a("q-item-label",[t._v("CRM Dashboard")])],1)],1),a("q-expansion-item",{attrs:{icon:"pages",label:"Pages"}},[a("q-list",{staticClass:"q-pl-lg"},[a("q-item",{attrs:{to:"/Login-1","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"email"}})],1),a("q-item-section",[a("q-item-label",[t._v("Login-1")])],1)],1),a("q-item",{attrs:{to:"/Lock","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"lock"}})],1),a("q-item-section",[a("q-item-label",[t._v("Lock Screen")])],1)],1),a("q-item",{attrs:{to:"/Lock-2","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"lock"}})],1),a("q-item-section",[a("q-item-label",[t._v("Lock Screen - 2")])],1)],1),a("q-item",{attrs:{to:"/Pricing","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"list"}})],1),a("q-item-section",[a("q-item-label",[t._v("Pricing")])],1)],1),a("q-item-label",{staticClass:"text-weight-bolder text-white",attrs:{header:""}},[t._v("Generic")]),a("q-item",{attrs:{to:"/Profile","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"person"}})],1),a("q-item-section",[a("q-item-label",[t._v("User Profile")])],1)],1),a("q-item",{attrs:{to:"/Maintenance","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"settings"}})],1),a("q-item-section",[a("q-item-label",[t._v("Maintenance")])],1)],1)],1)],1),a("q-expansion-item",{attrs:{icon:"map",label:"Maps"}},[a("q-list",{staticClass:"q-pl-lg"},[a("q-item",{attrs:{to:"/Map","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"map"}})],1),a("q-item-section",[a("q-item-label",[t._v("Map")])],1)],1),a("q-item",{attrs:{to:"/MapMarker","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"location_on"}})],1),a("q-item-section",[a("q-item-label",[t._v("Map Marker")])],1)],1),a("q-item",{attrs:{to:"/StreetView","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"streetview"}})],1),a("q-item-section",[a("q-item-label",[t._v("Street View")])],1)],1)],1)],1),a("q-item",{attrs:{to:"/Mail","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"email"}})],1),a("q-item-section",[a("q-item-label",[t._v("Mail")])],1)],1),a("q-item",{attrs:{to:"/TreeTable","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"list"}})],1),a("q-item-section",[a("q-item-label",[t._v("TreeTable")])],1)],1),a("q-item",{attrs:{to:"/Charts","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"insert_chart"}})],1),a("q-item-section",[a("q-item-label",[t._v("Charts")])],1)],1),a("q-item",{attrs:{to:"/Cards","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"card_giftcard"}})],1),a("q-item-section",[a("q-item-label",[t._v("Cards")])],1)],1),a("q-item",{attrs:{to:"/Tables","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"table_chart"}})],1),a("q-item-section",[a("q-item-label",[t._v("Tables")])],1)],1),a("q-item",{attrs:{to:"/Contact","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"person"}})],1),a("q-item-section",[a("q-item-label",[t._v("Contact")])],1)],1),a("q-item",{attrs:{to:"/Checkout","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"check_circle_outline"}})],1),a("q-item-section",[a("q-item-label",[t._v("Checkout")])],1)],1),a("q-item",{attrs:{to:"/Calendar","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"date_range"}})],1),a("q-item-section",[a("q-item-label",[t._v("Calendar")])],1)],1),a("q-item",{attrs:{to:"/Taskboard","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"done"}})],1),a("q-item-section",[a("q-item-label",[t._v("Taskboard")])],1)],1),a("q-item",{attrs:{to:"/Pagination","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"date_range"}})],1),a("q-item-section",[a("q-item-label",[t._v("Pagination")])],1)],1),a("q-item",{attrs:{to:"/Ecommerce","active-class":"q-item-no-link-highlighting"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"shopping_cart"}})],1),a("q-item-section",[a("q-item-label",[t._v("Product Catalogues")])],1)],1),a("q-expansion-item",{attrs:{icon:"menu_open",label:"Menu Levels"}},[a("q-item",{staticClass:"q-ml-xl",attrs:{"active-class":"q-item-no-link-highlighting"}},[a("q-item-section",[a("q-item-label",[t._v("Level 1")])],1)],1),a("q-expansion-item",{attrs:{"header-inset-level":.85,label:"Level 2"}},[a("q-item",{staticClass:"q-ml-xl",staticStyle:{"margin-left":"55px  !important"},attrs:{"active-class":"q-item-no-link-highlighting"}},[a("q-item-section",[a("q-item-label",[t._v("Level 2.1")])],1)],1),a("q-expansion-item",{attrs:{"header-inset-level":1,label:"Level 2.2"}},[a("q-item",{staticStyle:{"margin-left":"65px  !important"},attrs:{"active-class":"q-item-no-link-highlighting"}},[a("q-item-section",[a("q-item-label",[t._v("Level 2.2.1")])],1)],1),a("q-item",{staticStyle:{"margin-left":"65px  !important"},attrs:{"active-class":"q-item-no-link-highlighting"}},[a("q-item-section",[a("q-item-label",[t._v("Level 2.2.2")])],1)],1)],1)],1)],1)],1)],1),a("q-page-container",{staticClass:"bg-grey-2"},[a("router-view")],1)],1):a("q-layout",{staticClass:"bg-image"},[a("q-page-container",[a("q-page",{staticClass:"flex flex-center"},[a("q-btn",{attrs:{push:"",label:"Login",color:"primary"},on:{click:function(e){return e.preventDefault(),t.login(e)}}})],1)],1)],1)},n=[],s=a("c973"),r=a.n(s),o=(a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",to:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.caption))])],1)],1)}),l=[],c={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},m=c,q=a("2877"),g=a("66e5"),h=a("4074"),v=a("0016"),u=a("0170"),b=a("eebe"),d=a.n(b),p=Object(q["a"])(m,o,l,!1,null,null,null),f=p.exports;d()(p,"components",{QItem:g["a"],QItemSection:h["a"],QIcon:v["a"],QItemLabel:u["a"]});var _=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._l(t.messages,(function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticStyle:{"max-width":"420px"},attrs:{clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-avatar",[a("img",{attrs:{src:e.avatar}})])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(e.name))]),a("q-item-label",{attrs:{caption:"",lines:"1"}},[t._v(t._s(e.msg))])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n      "+t._s(e.time)+"\n    ")])],1)})),1)},k=[],w={name:"Messages",data:function(){return{messages:[{id:5,name:"Pratik Patel",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://avatars2.githubusercontent.com/u/34883558?s=400&v=4",time:"10:42 PM"},{id:6,name:"Winfield Stapforth",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://cdn.quasar.dev/img/avatar6.jpg",time:"11:17 AM"},{id:1,name:"Boy",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://cdn.quasar.dev/img/boy-avatar.png",time:"5:17 AM"},{id:2,name:"Jeff Galbraith",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://cdn.quasar.dev/team/jeff_galbraith.jpg",time:"5:17 AM"},{id:3,name:"Razvan Stoenescu",msg:" -- I'll be in your neighborhood doing errands this\n            weekend. Do you want to grab brunch?",avatar:"https://cdn.quasar.dev/team/razvan_stoenescu.jpeg",time:"5:17 AM"}]}}},x=w,y=a("cb32"),Q=a("714f"),C=Object(q["a"])(x,_,k,!1,null,"6257c7c9",null),M=C.exports;d()(C,"components",{QItem:g["a"],QItemSection:h["a"],QAvatar:y["a"],QItemLabel:u["a"]}),d()(C,"directives",{Ripple:Q["a"]});var L=a("bc3a"),S=a.n(L),D={name:"MainLayout",components:{Messages:M,EssentialLink:f},methods:{login:function(){this.$auth.loginWithRedirect()},logout:function(){this.$auth.logout()},callApi:function(){var t=this;return r()(regeneratorRuntime.mark((function e(){var a,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.getTokenSilently();case 2:return a=e.sent,console.log(a),e.next=6,S.a.get("/ker/api/external",{headers:{Authorization:"Bearer ".concat(a)}});case 6:i=e.sent,n=i.data,console.log(n);case 9:case"end":return e.stop()}}),e)})))()}},data:function(){return{leftDrawerOpen:!1}}},I=D,A=(a("2da0"),a("4d5a")),P=a("09e3"),$=a("9989"),T=a("9c40"),O=a("e359"),j=a("65c6"),E=a("6ac5"),R=a("2c91"),z=a("58a81"),B=a("4e73"),J=a("1c1c"),V=a("f09f"),G=a("9404"),H=a("3b73"),W=Object(q["a"])(I,i,n,!1,null,null,null);e["default"]=W.exports;d()(W,"components",{QLayout:A["a"],QPageContainer:P["a"],QPage:$["a"],QBtn:T["a"],QHeader:O["a"],QToolbar:j["a"],QToolbarTitle:E["a"],QSpace:R["a"],QBadge:z["a"],QMenu:B["a"],QList:J["a"],QCard:V["a"],QAvatar:y["a"],QDrawer:G["a"],QItem:g["a"],QItemSection:h["a"],QIcon:v["a"],QItemLabel:u["a"],QExpansionItem:H["a"]})}}]);