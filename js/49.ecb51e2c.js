(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[49],{d537:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",{staticClass:"q-pa-sm bg-white"},[a("div",{staticClass:"row q-col-gutter-sm"},[a("div",{staticClass:"col-lg-7 col-md-7 col-sm-12 col-xs-12"},[a("q-stepper",{ref:"stepper",attrs:{"header-nav":"",color:"primary",animated:""},model:{value:t.step,callback:function(s){t.step=s},expression:"step"}},[a("q-step",{attrs:{name:1,title:"Shipping address",icon:"shopping_cart",done:t.step>1,"header-nav":t.step>1}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("q-item",[a("q-input",{staticClass:"full-width",attrs:{dense:"",outlined:"",label:"First Name *"},model:{value:t.address_detail.first_name,callback:function(s){t.$set(t.address_detail,"first_name",s)},expression:"address_detail.first_name"}})],1)],1),a("div",{staticClass:"col-6"},[a("q-item",[a("q-input",{staticClass:"full-width",attrs:{dense:"",outlined:"",label:"Last Name *"},model:{value:t.address_detail.last_name,callback:function(s){t.$set(t.address_detail,"last_name",s)},expression:"address_detail.last_name"}})],1)],1),a("div",{staticClass:"col-12"},[a("q-item",[a("q-input",{staticClass:"full-width",attrs:{dense:"",autogrow:"",outlined:"",label:"Address line 1 *"},model:{value:t.address_detail.address_line_1,callback:function(s){t.$set(t.address_detail,"address_line_1",s)},expression:"address_detail.address_line_1"}})],1)],1),a("div",{staticClass:"col-12"},[a("q-item",[a("q-input",{staticClass:"full-width",attrs:{dense:"",autogrow:"",outlined:"",label:"Address line 2 *"},model:{value:t.address_detail.address_line_2,callback:function(s){t.$set(t.address_detail,"address_line_2",s)},expression:"address_detail.address_line_2"}})],1)],1),a("div",{staticClass:"col-6"},[a("q-item",[a("q-input",{staticClass:"full-width",attrs:{dense:"",outlined:"",label:"City *"},model:{value:t.address_detail.city,callback:function(s){t.$set(t.address_detail,"city",s)},expression:"address_detail.city"}})],1)],1),a("div",{staticClass:"col-6"},[a("q-item",[a("q-input",{staticClass:"full-width",attrs:{dense:"",outlined:"",label:"State"},model:{value:t.address_detail.state,callback:function(s){t.$set(t.address_detail,"state",s)},expression:"address_detail.state"}})],1)],1),a("div",{staticClass:"col-6"},[a("q-item",[a("q-input",{staticClass:"full-width",attrs:{dense:"",outlined:"",label:"Zip Code"},model:{value:t.address_detail.zip_code,callback:function(s){t.$set(t.address_detail,"zip_code",s)},expression:"address_detail.zip_code"}})],1)],1),a("div",{staticClass:"col-6"},[a("q-item",[a("q-input",{staticClass:"full-width",attrs:{dense:"",outlined:"",label:"Country *"},model:{value:t.address_detail.country,callback:function(s){t.$set(t.address_detail,"country",s)},expression:"address_detail.country"}})],1)],1),a("div",{staticClass:"col-6"},[a("q-item",[a("q-checkbox",{staticClass:"full-width",attrs:{dense:"",outlined:"",label:"Use this address for payment details"},model:{value:t.address_detail.checkbox,callback:function(s){t.$set(t.address_detail,"checkbox",s)},expression:"address_detail.checkbox"}})],1)],1)]),a("q-stepper-navigation",[a("q-btn",{staticClass:"float-right q-mr-md q-mb-md",attrs:{rounded:"",color:"blue",label:"Next"},on:{click:function(){t.done1=!0,t.step=2}}})],1)],1),a("q-step",{attrs:{name:2,title:"Payment details",icon:"shopping_cart",done:t.step>2,"header-nav":t.step>2}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("q-item",[a("q-input",{staticClass:"full-width",attrs:{dense:"",outlined:"",label:"Name on Card*"},model:{value:t.card_detail.name,callback:function(s){t.$set(t.card_detail,"name",s)},expression:"card_detail.name"}})],1)],1),a("div",{staticClass:"col-6"},[a("q-item",[a("q-input",{staticClass:"full-width",attrs:{dense:"",outlined:"",label:"Card Number *"},model:{value:t.address_detail.card_number,callback:function(s){t.$set(t.address_detail,"card_number",s)},expression:"address_detail.card_number"}})],1)],1),a("div",{staticClass:"col-6"},[a("q-item",[a("q-input",{staticClass:"full-width",attrs:{dense:"",autogrow:"",outlined:"",label:"Expiry Date *"},model:{value:t.address_detail.expiry_date,callback:function(s){t.$set(t.address_detail,"expiry_date",s)},expression:"address_detail.expiry_date"}})],1)],1),a("div",{staticClass:"col-6"},[a("q-item",[a("q-input",{staticClass:"full-width",attrs:{dense:"",autogrow:"",outlined:"",label:"CVV *"},model:{value:t.address_detail.cvv,callback:function(s){t.$set(t.address_detail,"cvv",s)},expression:"address_detail.cvv"}})],1)],1),a("div",{staticClass:"col-6"},[a("q-item",[a("q-checkbox",{staticClass:"full-width",attrs:{dense:"",outlined:"",label:"Remember credit card details for next time"},model:{value:t.address_detail.checkbox,callback:function(s){t.$set(t.address_detail,"checkbox",s)},expression:"address_detail.checkbox"}})],1)],1)]),a("q-stepper-navigation",[a("q-btn",{staticClass:"float-right q-mr-md q-mb-md",attrs:{rounded:"",color:"blue",label:"Next"},on:{click:function(){t.done2=!0,t.step=3}}}),a("q-btn",{staticClass:"q-mr-sm float-right",attrs:{flat:"",color:"primary",flat:"",rounded:"",label:"Back"},on:{click:function(s){t.step=1}}})],1)],1),a("q-step",{attrs:{name:3,title:"Review your order",icon:"shopping_cart","header-nav":t.step>3}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("q-item-label",{staticClass:"text-h6",attrs:{header:""}},[t._v("Order summary")]),a("q-item",{staticClass:"full-width"},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("Product 1")]),a("q-item-label",{attrs:{caption:""}},[t._v("Caption")])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n                  $10.99\n                ")])],1),a("q-separator"),a("q-item",{staticClass:"full-width"},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("Product 2")]),a("q-item-label",{attrs:{caption:""}},[t._v("Caption Product 2")])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n                  $19.99\n                ")])],1),a("q-separator"),a("q-item",{staticClass:"full-width"},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("Product 3")]),a("q-item-label",{attrs:{caption:""}},[t._v("Caption Product 3")])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n                  $78.99\n                ")])],1),a("q-separator"),a("q-item",{staticClass:"full-width"},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("Product 4")]),a("q-item-label",{attrs:{caption:""}},[t._v("Caption Product 4")])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n                  $178.99\n                ")])],1),a("q-separator"),a("q-item",{staticClass:"full-width"},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("Shipping")])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n                  Free\n                ")])],1),a("q-separator"),a("q-item",{staticClass:"full-width",staticStyle:{"border-top":"3px dotted blue"}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[t._v("Total")])],1),a("q-item-section",{attrs:{side:""}},[t._v("\n                  $288.96\n                ")])],1)],1)]),a("q-card",{staticClass:"rounded-borders"},[a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-5 q-pt-xs"},[a("div",{staticClass:"text-h6 text-center"},[t._v("Shipping")]),a("div",{staticClass:"text-subtitle1 "},[t._v("Pratik Patel")]),a("div",{staticClass:"text-subtitle2"},[t._v("\n                  4841 Johnston Locks\n                ")])]),a("q-card-section",{staticClass:"col-7 q-pt-xs"},[a("div",{staticClass:"text-h6 text-center"},[t._v("Payment details")]),a("div",{staticClass:"text-subtitle1 q-mb-xs"},[t._v("Card type  - Visa")]),a("div",{staticClass:"text-subtitle1 q-mb-xs"},[t._v("Card holder  - P***ik Patel")]),a("div",{staticClass:"text-subtitle1 q-mb-xs"},[t._v("Card Number  - xxxx-xxxx-xxxx-1234")]),a("div",{staticClass:"text-subtitle1 q-mb-xs"},[t._v("Expiry date - 04/2012")])])],1)],1),a("q-stepper-navigation",[a("q-btn",{staticClass:"float-right q-mr-md q-mb-md",attrs:{rounded:"",color:"blue",label:"Place Order"},on:{click:function(s){t.done3=!0}}}),a("q-btn",{staticClass:"q-mr-sm float-right",attrs:{flat:"",color:"primary",flat:"",rounded:"",label:"Back"},on:{click:function(s){t.step=2}}})],1)],1)],1)],1),a("div",{staticClass:"col-lg-5 col-md-5 col-sm-12 col-xs-12"},[a("q-card",{staticClass:"bg-grey-2"},[a("q-card-section",{staticClass:"text-center text-h6 text-black "},[a("q-icon",{staticClass:"q-mr-sm",attrs:{name:"shopping_cart"}}),t._v("\n          Order Summary\n        ")],1),a("q-card-section",{attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-5 flex flex-center"},[a("q-img",{staticClass:"rounded-borders",attrs:{height:"80px",src:"https://cdn.quasar.dev/img/parallax2.jpg"}})],1),a("q-card-section",{},[a("div",{staticClass:"text-subtitle2 q-mt-sm"},[t._v("Product 1")]),a("div",{staticClass:"text-subtitle2  q-mb-xs"},[t._v("$10.99")])])],1),a("q-separator"),a("q-card-section",{staticClass:"q-pa-none",attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-5 flex flex-center"},[a("q-img",{staticClass:"rounded-borders",attrs:{height:"80px",src:"https://cdn.quasar.dev/img/parallax2.jpg"}})],1),a("q-card-section",{},[a("div",{staticClass:"text-subtitle2 q-mt-md"},[t._v("Product 2")]),a("div",{staticClass:"text-subtitle2  q-mb-xs"},[t._v("$19.99")])])],1),a("q-separator"),a("q-card-section",{staticClass:"q-pa-none",attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-5 flex flex-center"},[a("q-img",{staticClass:"rounded-borders",attrs:{height:"80px",src:"https://cdn.quasar.dev/img/parallax2.jpg"}})],1),a("q-card-section",{},[a("div",{staticClass:"text-subtitle2 q-mt-md"},[t._v("Product 3")]),a("div",{staticClass:"text-subtitle2 q-mb-xs"},[t._v("$78.99")])])],1),a("q-separator"),a("q-card-section",{staticClass:"q-pa-none",attrs:{horizontal:""}},[a("q-card-section",{staticClass:"col-5 flex flex-center"},[a("q-img",{staticClass:"rounded-borders",attrs:{height:"80px",src:"https://cdn.quasar.dev/img/parallax2.jpg"}})],1),a("q-card-section",{},[a("div",{staticClass:"text-subtitle2 q-mt-md"},[t._v("Product 4\n            ")]),a("div",{staticClass:"text-subtitle2 q-mb-xs"},[t._v("$178.99\n            ")])])],1),a("q-separator"),a("q-card-section",{staticClass:"row"},[a("div",{staticClass:"  col-12 text-h6 full-width"},[a("div",{staticClass:"float-right q-mr-md"},[t._v("\n              Total : "),a("span",{staticClass:"text-blue"},[t._v("$288.96")])])])])],1)],1)])])},i=[],l={name:"Checkout",data:function(){return{step:1,address_detail:{},card_detail:{}}}},d=l,c=a("2877"),r=a("9989"),n=a("f531"),o=a("87fe"),u=a("66e5"),m=a("27f9"),p=a("8f8e"),q=a("b19c"),_=a("9c40"),b=a("0170"),v=a("4074"),C=a("eb85"),x=a("f09f"),f=a("a370"),h=a("0016"),g=a("068f"),k=a("eebe"),w=a.n(k),y=Object(c["a"])(d,e,i,!1,null,"f9d48858",null);s["default"]=y.exports;w()(y,"components",{QPage:r["a"],QStepper:n["a"],QStep:o["a"],QItem:u["a"],QInput:m["a"],QCheckbox:p["a"],QStepperNavigation:q["a"],QBtn:_["a"],QItemLabel:b["a"],QItemSection:v["a"],QSeparator:C["a"],QCard:x["a"],QCardSection:f["a"],QIcon:h["a"],QImg:g["a"]})}}]);