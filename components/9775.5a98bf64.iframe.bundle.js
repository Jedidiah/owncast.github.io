"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[9775],{"./components/ui/NotifyReminderPopup/NotifyReminderPopup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NotifyReminderPopup:()=>NotifyReminderPopup});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),NotifyReminderPopup_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/NotifyReminderPopup/NotifyReminderPopup.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(NotifyReminderPopup_module.A,options);const NotifyReminderPopup_NotifyReminderPopup_module=NotifyReminderPopup_module.A&&NotifyReminderPopup_module.A.locals?NotifyReminderPopup_module.A.locals:void 0;var Popover_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/Popover/Popover.module.scss"),Popover_module_options={};Popover_module_options.styleTagTransform=styleTagTransform_default(),Popover_module_options.setAttributes=setAttributesWithoutAttributes_default(),Popover_module_options.insert=insertBySelector_default().bind(null,"head"),Popover_module_options.domAPI=styleDomAPI_default(),Popover_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Popover_module.A,Popover_module_options);const Popover_Popover_module=Popover_module.A&&Popover_module.A.locals?Popover_module.A.locals:void 0,Popover=({open,title,content,children})=>(0,jsx_runtime.jsxs)("div",{style:{width:"max-content",height:"max-content"},children:[open&&(0,jsx_runtime.jsx)("div",{className:Popover_Popover_module.anchor,children:(0,jsx_runtime.jsxs)("div",{className:Popover_Popover_module.popover,children:[(0,jsx_runtime.jsx)("div",{className:Popover_Popover_module.title,children:title}),(0,jsx_runtime.jsx)("hr",{style:{color:"var(--color-owncast-palette-4)"}}),(0,jsx_runtime.jsx)("div",{className:Popover_Popover_module.content,children:content})]})}),children]});try{Popover.displayName="Popover",Popover.__docgenInfo={description:"",displayName:"Popover",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Popover/Popover.tsx#Popover"]={docgenInfo:Popover.__docgenInfo,name:"Popover",path:"components/ui/Popover/Popover.tsx#Popover"})}catch(__react_docgen_typescript_loader_error){}const CloseOutlined=dynamic_default()((()=>Promise.all([__webpack_require__.e(5367),__webpack_require__.e(3827),__webpack_require__.e(8288)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/CloseOutlined.js",23))),{loadableGenerated:{webpack:()=>["./node_modules/@ant-design/icons/CloseOutlined.js"]},ssr:!1}),NotifyReminderPopup=({children,open,notificationClicked,notificationClosed})=>{const[openPopup,setOpenPopup]=(0,react.useState)(open),[mounted,setMounted]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setOpenPopup(open)}),[open]),(0,react.useEffect)((()=>{setMounted(!0)}),[]);const title=(0,jsx_runtime.jsx)("div",{className:NotifyReminderPopup_NotifyReminderPopup_module.title,children:"Stay updated!"}),popupClicked=e=>{e.stopPropagation(),notificationClicked()},content=(0,jsx_runtime.jsxs)("div",{onClick:popupClicked,onKeyDown:popupClicked,role:"menuitem",tabIndex:0,children:[(0,jsx_runtime.jsx)("button",{type:"button","aria-label":"Follow",className:NotifyReminderPopup_NotifyReminderPopup_module.closebutton,onClick:e=>{e.stopPropagation(),setOpenPopup(!1),notificationClosed()},children:(0,jsx_runtime.jsx)(CloseOutlined,{})}),(0,jsx_runtime.jsx)("div",{className:NotifyReminderPopup_NotifyReminderPopup_module.contentbutton,children:"Click and never miss future streams!"})]});return mounted&&(0,jsx_runtime.jsx)(Popover,{open:openPopup,title,content,children})};try{NotifyReminderPopup.displayName="NotifyReminderPopup",NotifyReminderPopup.__docgenInfo={description:"",displayName:"NotifyReminderPopup",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},notificationClicked:{defaultValue:null,description:"",name:"notificationClicked",required:!0,type:{name:"() => void"}},notificationClosed:{defaultValue:null,description:"",name:"notificationClosed",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/NotifyReminderPopup/NotifyReminderPopup.tsx#NotifyReminderPopup"]={docgenInfo:NotifyReminderPopup.__docgenInfo,name:"NotifyReminderPopup",path:"components/ui/NotifyReminderPopup/NotifyReminderPopup.tsx#NotifyReminderPopup"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/NotifyReminderPopup/NotifyReminderPopup.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".xf1EUvs5qfcTYEuvYAx6{width:150px;background-color:rgba(0,0,0,0);border:none;text-align:left;cursor:pointer;color:var(--theme-color-components-text-on-dark)}.tkxBxMJx2_LltUxqqwb_{position:absolute;right:0;top:0;background-color:rgba(0,0,0,0);border:none;font-size:1.3rem;cursor:pointer;color:var(--theme-color-components-text-on-dark)}.pKrV45PqRvBI84WclXt4{border-bottom:none;font-weight:bold;padding-left:5px;color:var(--theme-color-components-text-on-dark)}","",{version:3,sources:["webpack://./components/ui/NotifyReminderPopup/NotifyReminderPopup.module.scss"],names:[],mappings:"AAIA,sBACE,WAAA,CACA,8BAAA,CACA,WAAA,CACA,eAAA,CACA,cAAA,CACA,gDAAA,CAGF,sBACE,iBAAA,CACA,OAAA,CACA,KAAA,CACA,8BAAA,CACA,WAAA,CACA,gBAAA,CACA,cAAA,CACA,gDAAA,CAGF,sBACE,kBAAA,CACA,gBAAA,CACA,gBAAA,CACA,gDAAA",sourcesContent:[":export {\n  popupBackgroundColor: var(--theme-color-components-primary-button-background);\n}\n\n.contentbutton {\n  width: 150px;\n  background-color: transparent;\n  border: none;\n  text-align: left;\n  cursor: pointer;\n  color: var(--theme-color-components-text-on-dark);\n}\n\n.closebutton {\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: transparent;\n  border: none;\n  font-size: 1.3rem;\n  cursor: pointer;\n  color: var(--theme-color-components-text-on-dark);\n}\n\n.title {\n  border-bottom: none;\n  font-weight: bold;\n  padding-left: 5px;\n  color: var(--theme-color-components-text-on-dark);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={popupBackgroundColor:"var(--theme-color-components-primary-button-background)",contentbutton:"xf1EUvs5qfcTYEuvYAx6",closebutton:"tkxBxMJx2_LltUxqqwb_",title:"pKrV45PqRvBI84WclXt4"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/Popover/Popover.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.d46zxB7PiXN1p7m2upPw{position:relative;left:50%;width:0;height:0}.RVCzpWgIAXI4SftChbfN{background-color:var(--theme-color-components-primary-button-background);position:absolute;bottom:10px;right:-20px;border-radius:5px;width:max-content}.RVCzpWgIAXI4SftChbfN>.INRlPF8G45skCvWtRDW7{padding:10px;padding-bottom:0}.RVCzpWgIAXI4SftChbfN>.eJRBqUuz6IUJJW51AlZF{padding:10px;padding-top:0}.RVCzpWgIAXI4SftChbfN::after{content:"";border:10px solid rgba(0,0,0,0);border-top-color:var(--theme-color-components-primary-button-background);right:10px;position:absolute}',"",{version:3,sources:["webpack://./components/ui/Popover/Popover.module.scss"],names:[],mappings:"AACA,sBACE,iBAAA,CACA,QAAA,CACA,OAAA,CACA,QAAA,CAGF,sBACE,wEAAA,CACA,iBAAA,CACA,WAAA,CACA,WAAA,CACA,iBAAA,CACA,iBAAA,CAGF,4CACE,YAAA,CACA,gBAAA,CAGF,4CACE,YAAA,CACA,aAAA,CAIF,6BACE,UAAA,CACA,+BAAA,CACA,wEAAA,CACA,UAAA,CACA,iBAAA",sourcesContent:["\n.anchor {\n  position: relative;\n  left: 50%;\n  width: 0;\n  height: 0;\n}\n\n.popover {\n  background-color: var(--theme-color-components-primary-button-background);\n  position: absolute;\n  bottom: 10px;\n  right: -20px;\n  border-radius: 5px;\n  width: max-content;\n}\n\n.popover>.title {\n  padding: 10px;\n  padding-bottom: 0;\n}\n\n.popover>.content {\n  padding: 10px;\n  padding-top: 0;\n}\n\n// Popover tail\n.popover::after {\n  content: '';\n  border: 10px solid transparent;\n  border-top-color: var(--theme-color-components-primary-button-background);\n  right: 10px;\n  position: absolute;\n}\n\n\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={anchor:"d46zxB7PiXN1p7m2upPw",popover:"RVCzpWgIAXI4SftChbfN",title:"INRlPF8G45skCvWtRDW7",content:"eJRBqUuz6IUJJW51AlZF"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);