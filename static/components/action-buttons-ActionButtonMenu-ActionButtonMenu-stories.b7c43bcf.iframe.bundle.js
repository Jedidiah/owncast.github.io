"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[3129],{"./components/action-buttons/ActionButtonMenu/ActionButtonMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,ShowFollowExample:()=>ShowFollowExample,ShowNotifyAndFollowExample:()=>ShowNotifyAndFollowExample,ShowNotifyExample:()=>ShowNotifyExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _tmp_tmp_bgyCRYcL4B_owncast_web_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_ActionButtonMenu__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/action-buttons/ActionButtonMenu/ActionButtonMenu.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"owncast/Components/Action Buttons/Action Menu",component:_ActionButtonMenu__WEBPACK_IMPORTED_MODULE_2__.C,parameters:{}};var Template=function Template(args){return __jsx(_ActionButtonMenu__WEBPACK_IMPORTED_MODULE_2__.C,(0,_tmp_tmp_bgyCRYcL4B_owncast_web_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.A)({},args,{externalActionSelected:function externalActionSelected(a){return function itemSelected(a){console.log("itemSelected",a),(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.XI)(a.title)}(a)}}))};Template.displayName="Template";var actions=[{url:"https://owncast.online/docs",title:"Documentation",description:"Owncast Documentation",icon:"https://owncast.online/images/logo.svg",color:"#5232c8",openExternally:!1},{url:"https://opencollective.com/embed/owncast/donate",title:"Support Owncast",description:"Contribute to Owncast",icon:"https://opencollective.com/static/images/opencollective-icon.svg",color:"#2b4863",openExternally:!1}],Example={render:Template,args:{actions}},ShowFollowExample={render:Template,args:{actions,showFollowItem:!0}},ShowNotifyExample={render:Template,args:{actions,showNotifyItem:!0}},ShowNotifyAndFollowExample={render:Template,args:{actions,showNotifyItem:!0,showFollowItem:!0}};Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    actions\n  }\n}",...Example.parameters?.docs?.source}}},ShowFollowExample.parameters={...ShowFollowExample.parameters,docs:{...ShowFollowExample.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    actions,\n    showFollowItem: true\n  }\n}",...ShowFollowExample.parameters?.docs?.source}}},ShowNotifyExample.parameters={...ShowNotifyExample.parameters,docs:{...ShowNotifyExample.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    actions,\n    showNotifyItem: true\n  }\n}",...ShowNotifyExample.parameters?.docs?.source}}},ShowNotifyAndFollowExample.parameters={...ShowNotifyAndFollowExample.parameters,docs:{...ShowNotifyAndFollowExample.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    actions,\n    showNotifyItem: true,\n    showFollowItem: true\n  }\n}",...ShowNotifyAndFollowExample.parameters?.docs?.source}}};const __namedExportsOrder=["Example","ShowFollowExample","ShowNotifyExample","ShowNotifyAndFollowExample"]},"./components/action-buttons/ActionButtonMenu/ActionButtonMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>ActionButtonMenu});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dropdown=__webpack_require__("./node_modules/antd/es/dropdown/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ActionButtonMenu_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/action-buttons/ActionButtonMenu/ActionButtonMenu.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ActionButtonMenu_module.A,options);const ActionButtonMenu_ActionButtonMenu_module=ActionButtonMenu_module.A&&ActionButtonMenu_module.A.locals?ActionButtonMenu_module.A.locals:void 0;var __jsx=react.createElement,EllipsisOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(5887)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/EllipsisOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/EllipsisOutlined.js"]}}}),HeartOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(9210)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/HeartOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/HeartOutlined.js"]}}}),BellOutlined=dynamic_default()((function(){return Promise.all([__webpack_require__.e(3827),__webpack_require__.e(7297)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/BellOutlined.js",23))}),{ssr:!1,loadableGenerated:{webpack:function webpack(){return["./node_modules/@ant-design/icons/BellOutlined.js"]}}}),ActionButtonMenu=function ActionButtonMenu(_ref){var actions=_ref.actions,externalActionSelected=_ref.externalActionSelected,notifyItemSelected=_ref.notifyItemSelected,followItemSelected=_ref.followItemSelected,showFollowItem=_ref.showFollowItem,showNotifyItem=_ref.showNotifyItem,className=_ref.className,items=actions.map((function(action){return{key:action.url,label:__jsx("span",{className:ActionButtonMenu_ActionButtonMenu_module.item},action.icon&&__jsx("img",{className:ActionButtonMenu_ActionButtonMenu_module.icon,src:action.icon,alt:action.title})," ",action.title)}}));showFollowItem&&items.unshift({key:"follow",label:__jsx("span",{className:ActionButtonMenu_ActionButtonMenu_module.item},__jsx(HeartOutlined,{className:ActionButtonMenu_ActionButtonMenu_module.icon})," Follow this stream")}),showNotifyItem&&items.unshift({key:"notify",label:__jsx("span",{className:ActionButtonMenu_ActionButtonMenu_module.item},__jsx(BellOutlined,{className:ActionButtonMenu_ActionButtonMenu_module.icon}),"Notify when live")});var dropdownClasses=classnames_default()([ActionButtonMenu_ActionButtonMenu_module.menu,className]);return __jsx(dropdown.A,{menu:{items,onClick:function onClick(a){if("notify"!==a.key)if("follow"!==a.key){var action=actions.find((function(x){return x.url===a.key}));externalActionSelected(action)}else followItemSelected();else notifyItemSelected()}},placement:"bottomRight",trigger:["click"],className:dropdownClasses},__jsx("div",{className:ActionButtonMenu_ActionButtonMenu_module.buttonWrap},__jsx(es_button.A,{type:"default",onClick:function onClick(e){return e.preventDefault()},size:"large",icon:__jsx(EllipsisOutlined,{size:6,style:{rotate:"90deg"}}),className:ActionButtonMenu_ActionButtonMenu_module.menuButton})))};ActionButtonMenu.displayName="ActionButtonMenu";try{ActionButtonMenu.displayName="ActionButtonMenu",ActionButtonMenu.__docgenInfo={description:"",displayName:"ActionButtonMenu",props:{actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"ExternalAction[]"}},showFollowItem:{defaultValue:null,description:"",name:"showFollowItem",required:!1,type:{name:"boolean"}},showNotifyItem:{defaultValue:null,description:"",name:"showNotifyItem",required:!1,type:{name:"boolean"}},externalActionSelected:{defaultValue:null,description:"",name:"externalActionSelected",required:!0,type:{name:"(action: ExternalAction) => void"}},notifyItemSelected:{defaultValue:null,description:"",name:"notifyItemSelected",required:!0,type:{name:"() => void"}},followItemSelected:{defaultValue:null,description:"",name:"followItemSelected",required:!0,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/action-buttons/ActionButtonMenu/ActionButtonMenu.tsx#ActionButtonMenu"]={docgenInfo:ActionButtonMenu.__docgenInfo,name:"ActionButtonMenu",path:"components/action-buttons/ActionButtonMenu/ActionButtonMenu.tsx#ActionButtonMenu"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/action-buttons/ActionButtonMenu/ActionButtonMenu.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".A4p8a1bdXFwVOWHjEhKy{display:flex;align-items:center}.SvTt9QO_9xz3P8uoT1TL{display:flex;align-items:center;height:100%}.SvTt9QO_9xz3P8uoT1TL button{height:100%}.r19f08qs0Xbkbn1DJ_Bz{height:15px;margin-right:5px}.ll2OrgyFDfJ86dMDXiOD{color:currentcolor}.iFN1j5b6wtiK0B546G0s{border-color:var(--theme-color-components-content-background)}","",{version:3,sources:["webpack://./components/action-buttons/ActionButtonMenu/ActionButtonMenu.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,kBAAA,CAGF,sBACE,YAAA,CACA,kBAAA,CACA,WAAA,CAEA,6BACE,WAAA,CAIJ,sBACE,WAAA,CACA,gBAAA,CAGF,sBACE,kBAAA,CAGF,sBACE,6DAAA",sourcesContent:[".item {\n  display: flex;\n  align-items: center;\n}\n\n.buttonWrap {\n  display: flex;\n  align-items: center;\n  height: 100%;\n\n  button {\n    height: 100%;\n  }\n}\n\n.icon {\n  height: 15px;\n  margin-right: 5px;\n}\n\n.menu {\n  color: currentcolor;\n}\n\n.menuButton {\n  border-color: var(--theme-color-components-content-background);\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={item:"A4p8a1bdXFwVOWHjEhKy",buttonWrap:"SvTt9QO_9xz3P8uoT1TL",icon:"r19f08qs0Xbkbn1DJ_Bz",menu:"ll2OrgyFDfJ86dMDXiOD",menuButton:"iFN1j5b6wtiK0B546G0s"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);