(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"59a5":function(e,t,s){},9183:function(e,t,s){"use strict";s("59a5")},caf2:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"q-pa-md q-gutter-md row"},[s("q-select",{staticClass:"col-2",attrs:{dense:"",options:e.workerlist},on:{input:e.workernamechanged},model:{value:e.selectedworker,callback:function(t){e.selectedworker=t},expression:"selectedworker"}}),e.functions.length>0?s("q-select",{staticClass:"col-2",attrs:{dense:"",options:e.functions},model:{value:e.selectedfunction,callback:function(t){e.selectedfunction=t},expression:"selectedfunction"}}):e._e(),e.functions.length>0?s("q-btn",{attrs:{color:"secondary",dense:""},on:{click:function(t){return e.callinfo()}}},[e._v("\n      Get Info\n    ")]):e._e(),s("q-space"),e.functions.length>0?s("q-btn",{attrs:{color:"primary",dense:""},on:{click:function(t){return e.callfunction()}}},[e._v("\n      Call Function\n    ")]):e._e()],1),s("div",{staticClass:"q-pr-md q-pl-md q-gutter-md row"},[s("vue-json-editor",{staticClass:"q-pr-md",attrs:{height:"400px",options:e.options},model:{value:e.json,callback:function(t){e.json=t},expression:"json"}}),s("q-separator"),s("div",{staticClass:"row"},[e._v("\n      "+e._s(e.responseresult)+"\n      "),s("q-space")],1),s("q-separator"),s("vue-json-pretty",{staticClass:"q-pr-md",attrs:{data:e.responsejson}})],1)])},o=[],c=(s("4e82"),s("ded3")),r=s.n(c),i=s("2b0e"),l=s("2f62"),a=s("6afc"),u=s("838b"),d=s.n(u),f=s("bcb2"),p=s.n(f);s("b83f");i["default"].use(p.a);var h={name:"Messenger",props:{msg:String},data(){return{options:{mode:"code"},optionsres:{mode:"preview"},functions:[],json:{},myvalue:"",selectedworker:"",selectedfunction:"",functioncalluid:"",responseresult:"",responsejson:{}}},components:{VueJsonPretty:d.a,vueJsonEditor:p.a},computed:r()(r()({},Object(l["c"])("scadadata",["getAllWorkers"])),{},{workerlist:function(){var e=[];for(let t in this.getAllWorkers)"online"===this.getAllWorkers[t].status&&e.push(this.getAllWorkers[t].workername);return e.sort()}}),methods:{getfunctions:function(){if(""!==this.selectedworker){let e=this;e.functions=[],this.selectedfunction="",a["c"].callrpccallback(this.selectedworker,"GetRpcFunctions","{}",(t=>{if(200!==t.message.Id)return this.$q.notify({message:"Could not get functions for "+e.selectedworker+" Error: "+t.message,color:"negative"}),void(e.functions=[]);let s=[];for(var n in t.message.Content)s.push(t.message.Content[n]);e.functions=s.sort()}))}},callfunction:function(){if(""!==this.selectedworker&&this.selectedfunction){let e=this;a["c"].callrpccallback(this.selectedworker,this.selectedfunction,JSON.stringify(this.json),(t=>{e.responseresult=t.message.Id+":"+t.message.Result,e.responsejson=t.message.Content}))}},callinfo:function(){if(""!==this.selectedworker&&this.selectedfunction){let e=this;a["c"].callrpccallback(this.selectedworker,"GetRpcFunctionInput",JSON.stringify({Name:this.selectedfunction}),(t=>{e.json=t.message.Content}))}},workernamechanged:function(){this.getfunctions()}},mounted:function(){for(var e in this.workers=[],a["c"].getworkers())this.workers.push(a["c"].getworkers()[e])}},m=h,k=(s("9183"),s("2877")),g=s("ddd8"),w=s("9c40"),v=s("2c91"),b=s("eb85"),q=s("eebe"),j=s.n(q),C=Object(k["a"])(m,n,o,!1,null,"3b505c60",null);t["default"]=C.exports;j()(C,"components",{QSelect:g["a"],QBtn:w["a"],QSpace:v["a"],QSeparator:b["a"]})}}]);