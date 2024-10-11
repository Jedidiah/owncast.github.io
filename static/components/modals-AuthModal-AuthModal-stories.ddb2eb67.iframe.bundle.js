"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[1649],{"./components/modals/AuthModal/AuthModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),recoil__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/recoil/es/index.js"),_AuthModal__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/modals/AuthModal/AuthModal.tsx"),_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/stores/ClientConfigStore.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Example=function Example(){var setCurrentUser=(0,recoil__WEBPACK_IMPORTED_MODULE_1__.lZ)(_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_3__.gN);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return setCurrentUser({id:"1",displayName:"Test User",displayColor:3,isModerator:!1})}),[]),__jsx("div",null,__jsx(_AuthModal__WEBPACK_IMPORTED_MODULE_2__.AuthModal,{forceTabs:!0}))};Example.displayName="Example";const __WEBPACK_DEFAULT_EXPORT__={title:"owncast/Modals/Auth",component:_AuthModal__WEBPACK_IMPORTED_MODULE_2__.AuthModal,parameters:{}};var Template=function Template(){return __jsx(recoil__WEBPACK_IMPORTED_MODULE_1__.bi,null,__jsx(Example,null))};Template.displayName="Template";var Basic={render:Template};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Basic"]},"./components/ui/ComponentError/ComponentError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ComponentError});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/alert/index.js"),antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/button/index.js"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,openBugReport=function openBugReport(){window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},ErrorContent=function ErrorContent(_ref){var message=_ref.message,componentName=_ref.componentName,details=_ref.details,canRetry=_ref.canRetry;return __jsx("div",null,__jsx("p",null,"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."),!!canRetry&&__jsx("p",null,"You may optionally retry, however functionality might not work as expected."),__jsx("code",null,__jsx("div",null,message&&"Error: ".concat(message)),__jsx("div",null,"Component: ",componentName),__jsx("div",null,details&&details)))};ErrorContent.displayName="ErrorContent";var ComponentError=function ComponentError(_ref2){var message=_ref2.message,componentName=_ref2.componentName,details=_ref2.details,retryFunction=_ref2.retryFunction;return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__.A,{message:"Error",showIcon:!0,description:__jsx(ErrorContent,{message,details,componentName,canRetry:!!retryFunction}),type:"error",action:__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,retryFunction&&__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",onClick:retryFunction},"Retry"),__jsx(antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",danger:!0,onClick:openBugReport},"Report Error"))})};ComponentError.displayName="ComponentError";try{ComponentError.displayName="ComponentError",ComponentError.__docgenInfo={description:"",displayName:"ComponentError",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},componentName:{defaultValue:null,description:"",name:"componentName",required:!0,type:{name:"string"}},details:{defaultValue:null,description:"",name:"details",required:!1,type:{name:"string"}},retryFunction:{defaultValue:null,description:"",name:"retryFunction",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/ComponentError/ComponentError.tsx#ComponentError"]={docgenInfo:ComponentError.__docgenInfo,name:"ComponentError",path:"components/ui/ComponentError/ComponentError.tsx#ComponentError"})}catch(__react_docgen_typescript_loader_error){}}}]);