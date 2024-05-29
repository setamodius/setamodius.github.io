(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{5640:function(e,t,a){"use strict";a("f5b4")},"693f":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"q-pa-none"},[a("q-table",{staticClass:"q_table_style",attrs:{"card-class":" text-white","table-class":"text-grey-2",dense:"",data:e.filteredAlarm,columns:e.columnsI18n,"row-key":"id+1",dark:"",color:"blue",filter:e.filter,selection:"single",selected:e.selected,pagination:e.pagination},on:{"update:selected":function(t){e.selected=t},"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"body-selection",fn:function(t){return[a("q-btn",{staticClass:"confirm_btn_style",attrs:{size:"sm",color:"green",dense:"",label:e.$t("alarm_ack")},on:{click:function(a){return e.ackAlarm(t.row)}},model:{value:t.selected,callback:function(a){e.$set(t,"selected",a)},expression:"scope.selected"}})]}},{key:"body-cell",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("div",{class:5==t.row.priority?"priority-5":4==t.row.priority?"priority-4":3==t.row.priority?"priority-3":2==t.row.priority?"priority-2":1==t.row.priority?"priority-1":"text-white"},[e._v("\n            "+e._s(t.value)+"\n          ")])])]}},{key:"top",fn:function(){return[a("q-space"),a("q-input",{staticClass:"input_style",attrs:{borderless:"",dense:"",debounce:"300",color:"primary"},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0}])})],1)])},r=[],s=(a("4e82"),a("ded3")),n=a.n(s),i=a("2f62"),o=a("bd4c"),c=a("6afc"),m={name:"AlarmList",props:{msg:String},data(){return{isAlarmListOpen:!1,faStart:"",selected:[],filter:"",pagination:{rowsPerPage:100}}},components:{},methods:{ackAlarm(e){var t={Username:this.CurrentUser,Target:e.target};console.log(t),this.rpcackalarm=c["c"].callrpc("Alarm","AckAlarm",JSON.stringify(t))}},computed:n()(n()(n()({},Object(i["c"])("scadadata",["getAlarmList"])),Object(i["c"])("auth",["CurrentUser"])),{},{firstAlarm:function(){let e=this.getAlarmList.filter((e=>0==e.status));if(this.faStart="",void 0===this.getAlarmList[0])return null;if(e.length>0){const t=e.sort((function(e,t){return e.priority-t.priortiy}))[0];return this.faStart=o["a"].formatDate(t.start,"DD-MM-YYYY HH:mm:ss"),t}return{}},filteredAlarm:function(){return this.getAlarmList.filter((e=>4!=e.status))},columnsI18n(){let e=[{name:"start",required:!0,label:this.$t("alarm_start"),align:"left",field:"start",format:e=>""+o["a"].formatDate(e,"DD-MM-YYYY HH:mm:ss"),sortable:!0},{name:"systemname",align:"left",label:this.$t("alarm_system_name"),field:"systemname",sortable:!0},{name:"devicename",label:this.$t("alarm_device_name"),field:"devicename",align:"left",sortable:!0},{name:"location",label:this.$t("alarm_location"),field:"location",align:"left",sortable:!0},{name:"message",label:this.$t("alarm_message"),field:"message",align:"left",sortable:!0},{name:"ackdate",label:this.$t("alarm_acknowledge_date"),field:"ackdate",align:"left",format:e=>""+o["a"].formatDate(e,"DD-MM-YYYY HH:mm:ss"),sortable:!0},{name:"ackby",label:this.$t("alarm_acknowledge_by"),field:"ackby",align:"left",sortable:!0},{name:"enddate",label:this.$t("alarm_end_date"),field:"enddate",align:"left",format:e=>""+o["a"].formatDate(e,"DD-MM-YYYY HH:mm:ss"),sortable:!0},{name:"status",label:this.$t("alarm_status"),field:"status",align:"right",format:e=>""+Object(c["a"])(e),sortable:!0}];return e}})},d=m,f=(a("5640"),a("2877")),u=a("eaac"),g=a("9c40"),b=a("db86"),p=a("2c91"),y=a("27f9"),h=a("0016"),v=a("eebe"),C=a.n(v),A=Object(f["a"])(d,l,r,!1,null,"3a7eade6",null);t["default"]=A.exports;C()(A,"components",{QTable:u["a"],QBtn:g["a"],QTd:b["a"],QSpace:p["a"],QInput:y["a"],QIcon:h["a"]})},"71e2":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-pa-sm"},[a("div",{staticClass:"q-pb-sm"},[a("q-btn",{staticClass:"q-ml-sm q-pr-sm",attrs:{dense:"",color:"primary",icon:"refresh",label:"Load All VDs List"},on:{click:e.getprojects}}),a("q-btn",{staticClass:"q-ml-sm q-pr-sm",attrs:{dense:"",color:"primary",icon:"refresh",label:"Calculate"},on:{click:e.loadallalarmvds}})],1),a("div",{staticClass:"q-pa-md"},[a("q-table",{attrs:{dense:"","row-key":"Address",pagination:e.pagination,data:e.alarmvdlist,columns:e.tablecolumns},scopedSlots:e._u([{key:"body-cell-Address",fn:function(t){return[a("q-td",{attrs:{props:t}},[e._v("\n          "+e._s(t.row.Address)+"\n        ")])]}},{key:"body-cell-GenerateVDAlarms",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-btn",{attrs:{flat:"",size:"sm",color:"green",dense:"",icon:"save_as",label:"Generate"},on:{click:function(a){return e.generateVDalarms(t.row.Address)}}})],1)]}},{key:"body-cell-DeleteVDAlarms",fn:function(t){return[a("q-td",{attrs:{props:t}},[a("q-btn",{attrs:{flat:"",size:"sm",color:"negative",dense:"",icon:"delete",label:"Delete"},on:{click:function(a){return e.deleteVDalarms(t.row.Address)}}})],1)]}}])})],1)])},r=[],s=(a("4e82"),a("6afc")),n={name:"AlarmManager",data(){return{pagination:{sortBy:"Name",descending:!1,page:1,rowsPerPage:50},alarmvdlist:[],tablecolumns:[{name:"Address",required:!0,label:"Address",align:"left",field:"Address",sortable:!0},{name:"EstimatedCount",required:!0,label:"Estimated Count",align:"left",field:"EstimatedCount",sortable:!0},{name:"CurrentCount",required:!0,label:"Current Count",align:"left",field:"CurrentCount",sortable:!0},{name:"GenerateVDAlarms",required:!0,label:"Generate VD Alarms",align:"center",field:"GenerateVDAlarms",sortable:!0},{name:"DeleteVDAlarms",required:!0,label:"Delete VD Alarms",align:"left",field:"DeleteVDAlarms",sortable:!0}],projecttree:[{children:[]}]}},components:{},methods:{generateVDalarms:function(e){s["c"].callrpccallback("Alarm","GenerateVDAlarms",JSON.stringify({Address:e}),(e=>{202!==e.message.Id&&this.$q.notify({message:"Could not get virtual device information",color:"negative"}),this.loadallalarmvds()}))},deleteVDalarms:function(e){s["c"].callrpccallback("Alarm","DeleteVDAlarms",JSON.stringify({Address:e}),(e=>{202!==e.message.Id&&this.$q.notify({message:"Could not get virtual device information",color:"negative"}),this.loadallalarmvds()}))},loadallalarmvds:function(){this.alarmvdlist.forEach((e=>{e.EstimatedCount=0,e.CurrentCount=0})),s["c"].callrpccallback("Alarm","GetAllAlarmItems",JSON.stringify({}),(e=>{200===e.message.Id?(e.message.Content.forEach((e=>{let t=e.split("/").slice(0,-3).join("/"),a=this.alarmvdlist.filter((function(e){return e.Address===t}));0==a.length?console.log("olmayan",t):a[0].CurrentCount++})),this.alarmvdlist.forEach((e=>{s["c"].callrpccallback("Project","GetVirtualDevice",JSON.stringify({Address:e.Address}),(t=>{if(200!==t.message.Id)return void this.$q.notify({message:"Could not get virtual device information",color:"negative"});let a=t.message.Content.Alarms,l=t.message.Content.Devices;e.EstimatedCount=a.length*l.length}))}))):this.$q.notify({message:"Could not get virtual device information",color:"negative"})}))},getprojects:function(){this.alarmvdlist=[],this.projecttree[0].children=[],s["c"].callrpccallback("Project","Get",JSON.stringify({Command:"+"}),(e=>{if(200===e.message.Id)for(var t in e.message.Content.sort(((e,t)=>e.Name.localeCompare(t.Name)))){let a=e.message.Content[t].Name,l={children:[],key:a};this.projecttree[0].children.push(l),s["c"].callrpccallback("Project","Get",JSON.stringify({Command:l.key+"/+"}),(e=>{if(200===e.message.Id)for(var t in e.message.Content.sort(((e,t)=>e.Name.localeCompare(t.Name)))){let l=this.projecttree[0].children.filter((e=>e.key===a)),r=e.message.Content[t].Name,n={children:[],key:a+"/"+r};l[0].children.push(n),s["c"].callrpccallback("Project","Get",JSON.stringify({Command:n.key+"/+"}),(e=>{if(200===e.message.Id)for(var t in e.message.Content.sort(((e,t)=>e.Name.localeCompare(t.Name)))){let l=e.message.Content[t].Name;this.alarmvdlist.push({Address:a+"/"+r+"/"+l,EstimatedCount:0,CurrentCount:0})}else this.$q.notify({message:"Could not get virtual device information - "+n.key,color:"warning"})}))}else this.$q.notify({message:"Could not get systems information - "+l.key,color:"warning"})}))}else this.$q.notify({message:"Could not get project information",color:"warning"})}))}},created:function(){}},i=n,o=a("2877"),c=a("9c40"),m=a("eaac"),d=a("db86"),f=a("eebe"),u=a.n(f),g=Object(o["a"])(i,l,r,!1,null,"ecd1a782",null);t["default"]=g.exports;u()(g,"components",{QBtn:c["a"],QTable:m["a"],QTd:d["a"]})},"7f76":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"q-pa-none"},[a("div",[a("q-card",[a("q-tabs",{attrs:{dense:"",align:"left","narrow-indicator":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab",{attrs:{name:"alarmlist",label:"Alarm List"}}),a("q-tab",{attrs:{name:"alarmmanagement",label:"Alarm Management"}})],1),a("q-tab-panels",{attrs:{animated:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"alarmlist"}},[a("alarmlist")],1),a("q-tab-panel",{staticClass:"q-pa-none",attrs:{name:"alarmmanagement"}},[a("alarmmanager")],1)],1)],1)],1)])])},r=[],s=(a("6afc"),{name:"AlarmManagement",components:{alarmlist:a("693f").default,alarmmanager:a("71e2").default},data(){return{tab:"alarmlist"}}}),n=s,i=a("2877"),o=a("9989"),c=a("f09f"),m=a("429bb"),d=a("7460"),f=a("adad"),u=a("823b"),g=a("eebe"),b=a.n(g),p=Object(i["a"])(n,l,r,!1,null,"13f37378",null);t["default"]=p.exports;b()(p,"components",{QPage:o["a"],QCard:c["a"],QTabs:m["a"],QTab:d["a"],QTabPanels:f["a"],QTabPanel:u["a"]})},f5b4:function(e,t,a){}}]);