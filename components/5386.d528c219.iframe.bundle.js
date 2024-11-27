"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[5386],{"./components/modals/NameChangeModal/NameChangeModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NameChangeModal:()=>NameChangeModal});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),es_select=__webpack_require__("./node_modules/antd/es/select/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),es_form=__webpack_require__("./node_modules/antd/es/form/index.js"),input=__webpack_require__("./node_modules/antd/es/input/index.js"),socket_events=__webpack_require__("./interfaces/socket-events.ts"),ClientConfigStore=__webpack_require__("./components/stores/ClientConfigStore.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),NameChangeModal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/modals/NameChangeModal/NameChangeModal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(NameChangeModal_module.A,options);const NameChangeModal_NameChangeModal_module=NameChangeModal_module.A&&NameChangeModal_module.A.locals?NameChangeModal_module.A.locals:void 0,{Option}=es_select.A,UserColor=({color})=>{const style={textAlign:"center",backgroundColor:`var(--theme-color-users-${color})`,width:"100%",height:"100%"};return(0,jsx_runtime.jsx)("div",{style})},NameChangeModal=({closeModal})=>{const currentUser=(0,es.vc)(ClientConfigStore.gN),websocketService=(0,es.vc)(ClientConfigStore.W5),[newName,setNewName]=(0,react.useState)(null==currentUser?void 0:currentUser.displayName);if(!currentUser)return null;const{displayName,displayColor}=currentUser,saveEnabled=()=>{const count=void 0!==newName?Array.from(newName).length:0;return newName!==displayName&&count>0&&count<=30&&(null==websocketService?void 0:websocketService.isConnected())},handleNameChange=()=>{if(!saveEnabled())return;const nameChange={type:socket_events.G.NAME_CHANGE,newName};websocketService.send(nameChange),closeModal()},colorOptions=[...Array(8)].map(((_,i)=>i)),saveButton=(0,jsx_runtime.jsx)(es_button.A,{type:"primary",id:"name-change-submit",onClick:handleNameChange,disabled:!saveEnabled(),children:"Change name"});return(0,jsx_runtime.jsxs)("div",{children:["Your chat display name is what people see when you send chat messages.",(0,jsx_runtime.jsx)(es_form.A,{onSubmitCapture:handleNameChange,className:NameChangeModal_NameChangeModal_module.form,children:(0,jsx_runtime.jsx)(input.A.Search,{enterButton:saveButton,id:"name-change-field",value:newName,onChange:e=>setNewName(e.target.value),placeholder:"Your chat display name","aria-label":"Your chat display name",showCount:{formatter:info=>info.count>30?"Over limit":""},defaultValue:displayName,className:NameChangeModal_NameChangeModal_module.inputGroup})}),(0,jsx_runtime.jsx)(es_form.A.Item,{label:"Your Color",className:NameChangeModal_NameChangeModal_module.colorChange,children:(0,jsx_runtime.jsx)(es_select.A,{style:{width:120},onChange:color=>{const colorChange={type:socket_events.G.COLOR_CHANGE,newColor:Number(color)};websocketService.send(colorChange)},defaultValue:displayColor.toString(),className:NameChangeModal_NameChangeModal_module.colorDropdown,children:colorOptions.map((e=>(0,jsx_runtime.jsx)(Option,{title:e,children:(0,jsx_runtime.jsx)(UserColor,{color:e,"aria-label":e.toString()})},e.toString())))})}),'You can also authenticate an IndieAuth or Fediverse account via the "Authenticate" menu.']})};try{NameChangeModal.displayName="NameChangeModal",NameChangeModal.__docgenInfo={description:"",displayName:"NameChangeModal",props:{closeModal:{defaultValue:null,description:"",name:"closeModal",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/modals/NameChangeModal/NameChangeModal.tsx#NameChangeModal"]={docgenInfo:NameChangeModal.__docgenInfo,name:"NameChangeModal",path:"components/modals/NameChangeModal/NameChangeModal.tsx#NameChangeModal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/modals/NameChangeModal/NameChangeModal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Yl56PfYflGundGbKGLkA .ant-input-affix-wrapper{border-width:2px}.Yl56PfYflGundGbKGLkA .ant-input-show-count-suffix{font-size:11px}.Yl56PfYflGundGbKGLkA .ant-btn-primary{font-weight:600}.X8XeseeAQbqTyfvUrdjQ{padding-top:8px}.X8XeseeAQbqTyfvUrdjQ .ant-form-item-label{z-index:1000;margin-bottom:0}.X8XeseeAQbqTyfvUrdjQ .ant-form-item-label label{font-weight:600}.WMMRwWkSYPsPSaG2UdLN .ant-select:not(.Nvsp7DIWq3HCfVSMaH2u) .ant-select-selector{padding-left:0;border-width:2px}","",{version:3,sources:["webpack://./components/modals/NameChangeModal/NameChangeModal.module.scss"],names:[],mappings:"AAOC,+CACC,gBAAA,CAGD,mDACC,cAAA,CAGD,uCACC,eAAA,CAMF,sBACC,eAAA,CAEA,2CACC,YAAA,CACA,eAAA,CAEA,iDACC,eAAA,CAQD,kFACC,cAAA,CACA,gBAAA",sourcesContent:[".nameChangeModal {\n\n\n}\n\n\n.inputGroup {\n\t:global(.ant-input-affix-wrapper) {\n\t\tborder-width: 2px;\n\t}\n\n\t:global(.ant-input-show-count-suffix) {\n\t\tfont-size: 11px;\n\t}\n\n\t:global(.ant-btn-primary) {\n\t\tfont-weight: 600;\n\t}\n\n\n}\n\n.colorChange {\n\tpadding-top: 8px;\n\n\t:global(.ant-form-item-label) {\n\t\tz-index: 1000;\n\t\tmargin-bottom: 0;\n\n\t\tlabel {\n\t\t\tfont-weight: 600;\n\n\t\t}\n\t}\n}\n\n.colorDropdown {\n\t:global(.ant-select):not(.ant-select-customize-input) {\n\t\t:global(.ant-select-selector) {\n\t\t\tpadding-left:0;\n\t\t\tborder-width: 2px;\n\t\t}\n\t}\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={inputGroup:"Yl56PfYflGundGbKGLkA",colorChange:"X8XeseeAQbqTyfvUrdjQ",colorDropdown:"WMMRwWkSYPsPSaG2UdLN",antSelectCustomizeInput:"Nvsp7DIWq3HCfVSMaH2u"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);