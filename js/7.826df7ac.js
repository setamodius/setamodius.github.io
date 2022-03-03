(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"01bc":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-card",[s("q-card-section",[s("div",{staticClass:"q-gutter-sm row"},[s("q-checkbox",{staticClass:"col-auto",attrs:{label:"Is Active?"},model:{value:e.isActiveStatus,callback:function(t){e.isActiveStatus=t},expression:"isActiveStatus"}}),s("q-input",{staticClass:"col",attrs:{dense:"",filled:"",label:"Device Address"},model:{value:e.snmpdevicedata.Ip,callback:function(t){e.$set(e.snmpdevicedata,"Ip",t)},expression:"snmpdevicedata.Ip"}}),s("q-input",{staticClass:"col-1",attrs:{dense:"",filled:"",label:"Device Port"},model:{value:e.snmpdevicedata.Port,callback:function(t){e.$set(e.snmpdevicedata,"Port",t)},expression:"snmpdevicedata.Port"}}),s("q-select",{staticClass:"col-1",attrs:{dense:"",filled:"",options:e.options,"option-value":"id","option-label":"desc","option-disable":"inactive","emit-value":"","map-options":""},model:{value:e.snmpdevicedata.SnmpVersion,callback:function(t){e.$set(e.snmpdevicedata,"SnmpVersion",t)},expression:"snmpdevicedata.SnmpVersion"}}),s("q-input",{staticClass:"col-2",attrs:{dense:"",filled:"",label:"Read Commmunity"},model:{value:e.snmpdevicedata.ReadCommunity,callback:function(t){e.$set(e.snmpdevicedata,"ReadCommunity",t)},expression:"snmpdevicedata.ReadCommunity"}}),s("q-input",{staticClass:"col-2",attrs:{dense:"",filled:"",label:"Write Commmunity"},model:{value:e.snmpdevicedata.WriteCommunity,callback:function(t){e.$set(e.snmpdevicedata,"WriteCommunity",t)},expression:"snmpdevicedata.WriteCommunity"}}),s("q-input",{staticClass:"col-1",attrs:{dense:"",filled:"",label:"Pooling Rate"},model:{value:e.snmpdevicedata.PoolingRate,callback:function(t){e.$set(e.snmpdevicedata,"PoolingRate",t)},expression:"snmpdevicedata.PoolingRate"}}),s("q-input",{staticClass:"col-1",attrs:{dense:"",filled:"",label:"Timeout"},model:{value:e.snmpdevicedata.Timeout,callback:function(t){e.$set(e.snmpdevicedata,"Timeout",t)},expression:"snmpdevicedata.Timeout"}}),s("div",[s("q-btn",{attrs:{color:"accent"},on:{click:function(t){e.card=!0,e.modbusresult={}}}},[e._v("Test")])],1)],1),s("div",{staticClass:"q-pt-md q-pt-xs"},[e._v("\n      "+e._s(e.snmpdevicedata.SnmpVersion)+"\n      "),s("q-input",{attrs:{dense:"",filled:"",label:"Target"},model:{value:e.snmpdevicedata.Target,callback:function(t){e.$set(e.snmpdevicedata,"Target",t)},expression:"snmpdevicedata.Target"}})],1)]),s("q-card-section",{staticClass:"q-pt-xs"},[s("q-dialog",{model:{value:e.card,callback:function(t){e.card=t},expression:"card"}},[s("q-card",{staticClass:"my-card"},[s("q-card-section",[s("q-card-section",{staticClass:"row items-center q-pa-none"},[s("div",{staticClass:"text-h6"},[e._v("SNMP Test Tool")]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",dense:"",color:"negative"}})],1),s("div",{staticClass:"row"},[s("q-input",{attrs:{dense:"",label:"OID",type:"string",rules:[function(e){return!!e||"Field is required"}]},model:{value:e.Oid,callback:function(t){e.Oid=t},expression:"Oid"}}),s("q-input",{attrs:{dense:"",label:"Number of points",type:"number",rules:[function(e){return e>0||"Address range error"}]},model:{value:e.numberofpoints,callback:function(t){e.numberofpoints=t},expression:"numberofpoints"}})],1)],1),s("q-separator"),void 0!==e.snmpresult.Result?s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:" q-pb-sm text-subtitle1"},[e._v("\n            "+e._s(e.snmpresult.Request.Ip)+":"+e._s(e.snmpresult.Request.Port)+"\n          ")]),s("div",{staticClass:" bg-grey-9",staticStyle:{padding:"2px"}},[s("div",{staticClass:"fit  ",staticStyle:{overflow:"hidden"}},e._l(e.snmpresult.Result,(function(t,a){return s("div",{key:a,staticClass:"row  q-pa-xs",staticStyle:{overflow:"auto","min-width":"70px"}},[s("div",{staticClass:"text-weight-bold"},[e._v(e._s(a)+" :")]),s("div",[e._v(e._s(t))])])})),0)])]):e._e(),s("q-separator"),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{attrs:{color:"accent",label:"Get Values"},on:{click:e.getSnmpValues}})],1)],1)],1),s("div",[s("q-splitter",{staticStyle:{height:"400px"},attrs:{dense:""},scopedSlots:e._u([{key:"before",fn:function(){return[s("div",{staticClass:"q-pd-sm "},[s("q-tree",{attrs:{nodes:e.simple,"node-key":"id","selected-color":"primary",selected:e.selected,"default-expand-all":""},on:{"update:selected":function(t){e.selected=t}}})],1)]},proxy:!0},{key:"after",fn:function(){return[s("q-tab-panels",{attrs:{animated:"","transition-prev":"jump-up","transition-next":"jump-up"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[s("q-tab-panel",{attrs:{name:"read"}},[s("div",{staticClass:"text-h6 "},[e._v("\n                Read Address Map\n              ")]),s("vue-excel-editor",{ref:"rgrid",staticClass:"exceltable",attrs:{"no-header-edit":!0},model:{value:e.snmpdevicedata.ReadVariables,callback:function(t){e.$set(e.snmpdevicedata,"ReadVariables",t)},expression:"snmpdevicedata.ReadVariables"}},[s("vue-excel-column",{attrs:{field:"Target",label:"Target",width:"600px",type:"string","key-field":!0}}),s("vue-excel-column",{attrs:{field:"Oid",label:"OID",width:"300px",type:"string"}})],1),s("div",{staticClass:"row"},[s("q-btn",{on:{click:function(t){return e.addnewrowread()}}},[e._v("Add New Row")]),s("q-btn",{on:{click:function(t){return e.deletereadselected()}}},[e._v("Delete Selected Row")])],1)],1),s("q-tab-panel",{attrs:{name:"write"}},[s("div",{staticClass:"text-h6 "},[e._v("\n                Write Address Map\n              ")]),s("vue-excel-editor",{ref:"wgrid",staticClass:"exceltable",attrs:{"no-header-edit":!0},model:{value:e.snmpdevicedata.WriteVariables,callback:function(t){e.$set(e.snmpdevicedata,"WriteVariables",t)},expression:"snmpdevicedata.WriteVariables"}},[s("vue-excel-column",{attrs:{field:"Target",label:"Target",width:"600px",type:"string","key-field":!0}}),s("vue-excel-column",{attrs:{field:"Oid",label:"OID",width:"300px",type:"string"}})],1),s("div",{staticClass:"row"},[s("q-btn",{on:{click:function(t){return e.addnewrowwrite()}}},[e._v("Add New Row")]),s("q-btn",{on:{click:function(t){return e.deletewriteselected()}}},[e._v("Delete Selected Row")])],1)],1)],1)]},proxy:!0}]),model:{value:e.splitterModel,callback:function(t){e.splitterModel=t},expression:"splitterModel"}})],1)],1),s("q-card-section")],1)},i=[],n=s("ded3"),d=s.n(n),c=(s("bd4c"),s("6afc")),l=s("2f62"),r=(s("13ab"),{name:"SnmpDevice",props:{snmpdevicedata:Object,workername:String},data(){return{card:!1,Oid:"1.3.6.1.2.1.1.1.0",numberofpoints:10,snmpresult:{},rpcgetsnmpvalues:"",splitterModel:25,selected:"coilstatusread",simple:[{label:"Address",id:"address",children:[{label:"Read",id:"read"},{label:"Write",id:"write"}]}],options:[{id:"0",desc:"V1"},{id:"1",desc:"V2"},{id:"2",desc:"V2U"},{id:"3",desc:"V3"}]}},methods:{getSnmpValues:function(){let e={Ip:this.snmpdevicedata.Ip,Port:this.snmpdevicedata.Port,Oid:this.Oid,MaxRepetitions:Number(this.numberofpoints),Timeout:3e3,SnmpVersion:this.snmpdevicedata.SnmpVersion,ReadCommunity:this.snmpdevicedata.ReadCommunity};this.rpcgetsnmpvalues=c["c"].callrpc(this.workername,"ReadSnmpData",JSON.stringify(e))},deletereadselected(){this.$refs.rgrid.deleteSelectedRecords()},addnewrowread(){const e={IsActive:0,Target:"-Target-",Ip:"localhost",Frequency:"2000",Timeout:"4000"};this.$refs.rgrid.newRecord(e)},deletewriteselected(){this.$refs.wgrid.deleteSelectedRecords()},addnewrowwrite(){const e={IsActive:0,Target:"-Target-",Ip:"localhost",Frequency:"2000",Timeout:"4000"};this.$refs.wgrid.newRecord(e)}},computed:d()(d()({},Object(l["c"])("scadadata",["bindToVD"])),{},{titleMessage:function(){return this.snmpdevicedata.Ip+":"+this.snmpdevicedata.Port+(this.isActiveStatus?" (Enabled)":"")},isActiveStatus:{get:function(){return 1===this.snmpdevicedata.IsActive},set:function(e){this.snmpdevicedata.IsActive=e?1:0}}}),created:function(){c["b"].$on("RpcResult",(e=>{e.uid===this.rpcgetsnmpvalues&&(this.snmpresult=e.message)}))},components:{singleaddress:s("32a2").default,multiaddress:s("6209").default,valuetable:s("13ab").default}}),o=r,p=(s("b164"),s("2877")),u=s("f09f"),m=s("a370"),v=s("8f8e"),b=s("27f9"),f=s("ddd8"),g=s("9c40"),h=s("24e8"),q=s("2c91"),C=s("eb85"),w=s("4b7e"),y=s("8562"),x=s("7f41"),k=s("adad"),S=s("823b"),R=s("7f67"),_=s("eebe"),I=s.n(_),T=Object(p["a"])(o,a,i,!1,null,"57e169b8",null);t["default"]=T.exports;I()(T,"components",{QCard:u["a"],QCardSection:m["a"],QCheckbox:v["a"],QInput:b["a"],QSelect:f["a"],QBtn:g["a"],QDialog:h["a"],QSpace:q["a"],QSeparator:C["a"],QCardActions:w["a"],QSplitter:y["a"],QTree:x["a"],QTabPanels:k["a"],QTabPanel:S["a"]}),I()(T,"directives",{ClosePopup:R["a"]})},"92db":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",[s("div",{staticClass:"q-pa-md q-gutter-md"},[s("q-btn-group",{attrs:{push:""}},[s("q-btn",{attrs:{push:"",color:"secondary",label:"Get Settings",icon:"get_app"},on:{click:e.getsettings}}),s("q-btn",{attrs:{push:"",color:"secondary",label:"Put Settings",icon:"publish"},on:{click:e.putsettings}})],1),s("q-expansion-item",{attrs:{icon:"list",label:"SNMP Settings","header-class":"bg-primary text-white","default-opened":"",dense:""}},[e._l(e.SnmpDevices,(function(t,a){return s("q-card",{key:a,staticClass:"my-card row q-pt-xs"},[s("q-expansion-item",{staticClass:"col",attrs:{icon:"video_label",flat:"",dense:"","header-class":"bg-secondary text-white",label:e.gettitle(t.Ip,t.Port,t.IsActive)}},[s("snmpdevice",{attrs:{snmpdevicedata:t,workername:e.WorkerName}})],1),s("q-btn",{attrs:{icon:"delete",flat:"",dense:"",color:"negative"},on:{click:function(s){return e.deletedevice(t)}}})],1)})),s("div",{staticClass:"q-ma-sm text-right"},[s("q-btn",{attrs:{round:"",dense:"",color:"secondary",icon:"add"},on:{click:e.addsnmpdevice}})],1)],2)],1)])},i=[],n=s("6afc"),d=s("ee8f"),c=s("2b0e"),l=s("07b2");const r=new c["default"];c["default"].use(l["a"]);var o={name:"SnmpAdaptor",data(){return{WorkerName:"",SnmpDevices:[],selected:{}}},methods:{getsettings:async function(){this.WorkerName=d["a"].getResponseWebConfig().snpmAdapter.workername;let e=d["a"].getResponseWebConfig().snpmAdapter.uniquekey,t=await d["a"].getRequestConfigAPI("config",this.WorkerName,e);t[0]?(this.SnmpDevices=t[2].value.SnmpDevices,this.$q.notify({type:"positive",message:this.$t("get_request_success_message")+"\t(Status Code : "+t[1]+")",actions:[{label:"ok",color:"gray",handler:()=>{}}]})):this.$q.notify({type:"negative",message:this.$t("get_request_error_message")+"\t(Status Code : "+t[1]+")",actions:[{label:"ok",color:"gray",handler:()=>{}}]})},putsettings:async function(){this.WorkerName=d["a"].getResponseWebConfig().snpmAdapter.workername;let e=d["a"].getResponseWebConfig().snpmAdapter.uniquekey;const t={SnmpDevices:this.SnmpDevices};let s=await d["a"].putRequestConfigAPI("config",this.WorkerName,e,t);s[0]?this.$q.notify({type:"positive",message:this.$t("put_request_success_message")+"\t(Status Code : "+s[1]+")",actions:[{label:"ok",color:"gray",handler:()=>{}}]}):this.$q.notify({type:"negative",message:this.$t("put_request_error_message")+"\t(Status Code : "+s[1]+")",actions:[{label:"ok",color:"gray",handler:()=>{}}]})},gettitle(e,t,s){return e+":"+t+(1===s?" (Enabled)":"")},addsnmpdevice(){let e={Ip:"localhost",Port:502,SlaveID:1,PoolingRate:1e3,Target:"IsOnline",IsActive:0,Timeout:1e4,ReadVariables:[],WriteVariables:[]};this.SnmpDevices.push(e)},deletedevice(e){var t=this.SnmpDevices.indexOf(e);this.SnmpDevices.splice(t,1)}},created:function(){r.$on("settingreceived",(e=>{this.SnmpDevices=e})),n["b"].$on("RpcResult",(e=>{if(e.uid===this.rpcgetallusers)for(var t in this.users=[],e.message)this.users.push(e.message[t]);e.uid===this.rpccreateuser&&201==e.message.Id&&this.refresh(),e.uid===this.rpcdeleteuser&&200==e.message.Id&&this.refresh(),e.uid===this.rpcedituser&&200==e.message.Id&&this.refresh()}))},components:{snmpdevice:s("01bc").default}},p=o,u=s("2877"),m=s("9989"),v=s("e7a9"),b=s("9c40"),f=s("3b73"),g=s("f09f"),h=s("eebe"),q=s.n(h),C=Object(u["a"])(p,a,i,!1,null,"0c3475ee",null);t["default"]=C.exports;q()(C,"components",{QPage:m["a"],QBtnGroup:v["a"],QBtn:b["a"],QExpansionItem:f["a"],QCard:g["a"]})},b164:function(e,t,s){"use strict";s("e090")},e090:function(e,t,s){}}]);