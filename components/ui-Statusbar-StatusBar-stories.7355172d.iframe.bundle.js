"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[2297],{"./components/ui/Statusbar/StatusBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DaysAgo:()=>DaysAgo,Minutes:()=>Minutes,Offline:()=>Offline,Online:()=>Online,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _barrel_optimize_names_subHours_subMinutes_subSeconds_date_fns__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/date-fns/subSeconds.js"),_barrel_optimize_names_subHours_subMinutes_subSeconds_date_fns__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/date-fns/subMinutes.js"),_barrel_optimize_names_subHours_subMinutes_subSeconds_date_fns__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/date-fns/subHours.js");const __WEBPACK_DEFAULT_EXPORT__={title:"owncast/Player/Status bar",component:__webpack_require__("./components/ui/Statusbar/Statusbar.tsx").A,parameters:{}},Online={args:{online:!0,viewerCount:42,lastConnectTime:(0,_barrel_optimize_names_subHours_subMinutes_subSeconds_date_fns__WEBPACK_IMPORTED_MODULE_1__.W)((0,_barrel_optimize_names_subHours_subMinutes_subSeconds_date_fns__WEBPACK_IMPORTED_MODULE_2__.Y)((0,_barrel_optimize_names_subHours_subMinutes_subSeconds_date_fns__WEBPACK_IMPORTED_MODULE_3__.O)(new Date,3),17),22)}},Minutes={args:{online:!0,viewerCount:42,lastConnectTime:(0,_barrel_optimize_names_subHours_subMinutes_subSeconds_date_fns__WEBPACK_IMPORTED_MODULE_1__.W)((0,_barrel_optimize_names_subHours_subMinutes_subSeconds_date_fns__WEBPACK_IMPORTED_MODULE_2__.Y)(new Date,17),22)}},DaysAgo={args:{online:!0,viewerCount:42,lastConnectTime:(0,_barrel_optimize_names_subHours_subMinutes_subSeconds_date_fns__WEBPACK_IMPORTED_MODULE_3__.O)(new Date,17)}},Offline={args:{online:!1,lastDisconnectTime:(0,_barrel_optimize_names_subHours_subMinutes_subSeconds_date_fns__WEBPACK_IMPORTED_MODULE_3__.O)(new Date,3)}},__namedExportsOrder=["Online","Minutes","DaysAgo","Offline"];Online.parameters={...Online.parameters,docs:{...Online.parameters?.docs,source:{originalSource:"{\n  args: {\n    online: true,\n    viewerCount: 42,\n    lastConnectTime: subSeconds(subMinutes(subHours(new Date(), 3), 17), 22)\n  }\n}",...Online.parameters?.docs?.source}}},Minutes.parameters={...Minutes.parameters,docs:{...Minutes.parameters?.docs,source:{originalSource:"{\n  args: {\n    online: true,\n    viewerCount: 42,\n    lastConnectTime: subSeconds(subMinutes(new Date(), 17), 22)\n  }\n}",...Minutes.parameters?.docs?.source}}},DaysAgo.parameters={...DaysAgo.parameters,docs:{...DaysAgo.parameters?.docs,source:{originalSource:"{\n  args: {\n    online: true,\n    viewerCount: 42,\n    lastConnectTime: subHours(new Date(), 17)\n  }\n}",...DaysAgo.parameters?.docs?.source}}},Offline.parameters={...Offline.parameters,docs:{...Offline.parameters?.docs,source:{originalSource:"{\n  args: {\n    online: false,\n    lastDisconnectTime: subHours(new Date(), 3)\n  }\n}",...Offline.parameters?.docs?.source}}}},"./components/ui/Statusbar/Statusbar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Statusbar});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),intervalToDuration=__webpack_require__("./node_modules/date-fns/intervalToDuration.js"),formatDuration=__webpack_require__("./node_modules/date-fns/formatDuration.js"),formatDistanceToNow=__webpack_require__("./node_modules/date-fns/formatDistanceToNow.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Statusbar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/Statusbar/Statusbar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Statusbar_module.A,options);const Statusbar_Statusbar_module=Statusbar_module.A&&Statusbar_module.A.locals?Statusbar_module.A.locals:void 0,EyeFilled=dynamic_default()((()=>Promise.all([__webpack_require__.e(5367),__webpack_require__.e(3827),__webpack_require__.e(5417)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/EyeFilled.js",23))),{loadableGenerated:{webpack:()=>["./node_modules/@ant-design/icons/EyeFilled.js"]},ssr:!1});const Statusbar=({online,lastConnectTime,lastDisconnectTime,viewerCount,className})=>{const[,setNow]=(0,react.useState)(new Date);(0,react.useEffect)((()=>{const interval=setInterval((()=>setNow(new Date)),1e3);return()=>{clearInterval(interval)}}),[]);let rightSideMessage,onlineMessage="";if(online&&lastConnectTime){const duration=function makeDurationString(lastConnectTime){const diff=(0,intervalToDuration.F)({start:lastConnectTime,end:new Date});return diff.days>=1?(0,formatDuration.a)({days:diff.days,hours:diff.hours>0?diff.hours:0}):diff.hours>=1?(0,formatDuration.a)({hours:diff.hours,minutes:diff.minutes>0?diff.minutes:0}):(0,formatDuration.a)({minutes:diff.minutes>0?diff.minutes:0,seconds:diff.seconds>0?diff.seconds:0})}(new Date(lastConnectTime));onlineMessage=`Live for  ${duration}`,rightSideMessage=viewerCount>0&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:Statusbar_Statusbar_module.viewerIcon,children:(0,jsx_runtime.jsx)(EyeFilled,{})}),(0,jsx_runtime.jsx)("span",{children:` ${viewerCount}`})]})}else online||(onlineMessage="Offline",lastDisconnectTime&&(rightSideMessage=`Last live ${(0,formatDistanceToNow.m)(new Date(lastDisconnectTime))} ago.`));return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(Statusbar_Statusbar_module.statusbar,className),role:"status",children:[(0,jsx_runtime.jsx)("span",{"aria-live":"off",className:Statusbar_Statusbar_module.onlineMessage,children:onlineMessage}),(0,jsx_runtime.jsx)("span",{className:Statusbar_Statusbar_module.viewerCount,children:rightSideMessage})]})};Statusbar.defaultProps={lastConnectTime:null,lastDisconnectTime:null};try{Statusbar.displayName="Statusbar",Statusbar.__docgenInfo={description:"",displayName:"Statusbar",props:{online:{defaultValue:null,description:"",name:"online",required:!0,type:{name:"Boolean"}},lastConnectTime:{defaultValue:{value:"null"},description:"",name:"lastConnectTime",required:!1,type:{name:"Date"}},lastDisconnectTime:{defaultValue:{value:"null"},description:"",name:"lastDisconnectTime",required:!1,type:{name:"Date"}},viewerCount:{defaultValue:null,description:"",name:"viewerCount",required:!0,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Statusbar/Statusbar.tsx#Statusbar"]={docgenInfo:Statusbar.__docgenInfo,name:"Statusbar",path:"components/ui/Statusbar/Statusbar.tsx#Statusbar"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/Statusbar/Statusbar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".d6zNHZPWXqmZdWi707ef{display:flex;align-items:center;justify-content:space-between;height:var(--status-bar-height);width:100%;max-height:4vh;padding:var(--content-padding);color:var(--theme-color-components-video-status-bar-foreground);background-color:var(--theme-color-components-video-status-bar-background);font-family:var(--theme-text-display-font-family);font-size:11px;font-weight:400}.VIYg_kodPbYbghyTDaaw{letter-spacing:.5px}.WBaVnsY9QEjW73VNB0sV{vertical-align:middle}.pl2b1q2qAqvDNxDViyuP{display:inline-block;margin-right:.5rem}","",{version:3,sources:["webpack://./components/ui/Statusbar/Statusbar.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,kBAAA,CACA,6BAAA,CACA,+BAAA,CACA,UAAA,CACA,cAAA,CACA,8BAAA,CACA,+DAAA,CACA,0EAAA,CACA,iDAAA,CACA,cAAA,CACA,eAAA,CAGF,sBACE,mBAAA,CAGF,sBACE,qBAAA,CAGF,sBACE,oBAAA,CACA,kBAAA",sourcesContent:[".statusbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: var(--status-bar-height);\n  width: 100%;\n  max-height: 4vh;\n  padding: var(--content-padding);\n  color: var(--theme-color-components-video-status-bar-foreground);\n  background-color: var(--theme-color-components-video-status-bar-background);\n  font-family: var(--theme-text-display-font-family);\n  font-size: 11px;\n  font-weight: 400;\n}\n\n.onlineMessage {\n  letter-spacing: 0.5px;\n}\n\n.viewerCount {\n  vertical-align: middle;\n}\n\n.viewerIcon {\n  display: inline-block;\n  margin-right: 0.5rem;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={statusbar:"d6zNHZPWXqmZdWi707ef",onlineMessage:"VIYg_kodPbYbghyTDaaw",viewerCount:"WBaVnsY9QEjW73VNB0sV",viewerIcon:"pl2b1q2qAqvDNxDViyuP"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);