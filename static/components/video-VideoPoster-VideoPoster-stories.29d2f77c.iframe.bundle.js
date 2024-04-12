"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[1404],{"./components/video/VideoPoster/VideoPoster.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example1:()=>Example1,Example2:()=>Example2,Offline:()=>Offline,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"owncast/Player/Video poster",component:__webpack_require__("./components/video/VideoPoster/VideoPoster.tsx").v,parameters:{docs:{description:{component:"\n- Sits on top of the video player when playback is not taking place.\n- Shows the instance logo when the video is offline.\n- Initial image is the logo when online.\n- When the stream is online, will transition, via cross-fades, through the thumbnail.\n- Will be removed when playback starts."}}}};var Example1={args:{initialSrc:"https://watch.owncast.online/logo",src:"https://watch.owncast.online/thumbnail.jpg",online:!0}},Example2={args:{initialSrc:"https://listen.batstationrad.io/logo",src:"https://listen.batstationrad.io//thumbnail.jpg",online:!0}},Offline={args:{initialSrc:"https://watch.owncast.online/logo",src:"https://watch.owncast.online/thumbnail.jpg",online:!1}};Example1.parameters={...Example1.parameters,docs:{...Example1.parameters?.docs,source:{originalSource:"{\n  args: {\n    initialSrc: 'https://watch.owncast.online/logo',\n    src: 'https://watch.owncast.online/thumbnail.jpg',\n    online: true\n  }\n}",...Example1.parameters?.docs?.source}}},Example2.parameters={...Example2.parameters,docs:{...Example2.parameters?.docs,source:{originalSource:"{\n  args: {\n    initialSrc: 'https://listen.batstationrad.io/logo',\n    src: 'https://listen.batstationrad.io//thumbnail.jpg',\n    online: true\n  }\n}",...Example2.parameters?.docs?.source}}},Offline.parameters={...Offline.parameters,docs:{...Offline.parameters?.docs,source:{originalSource:"{\n  args: {\n    initialSrc: 'https://watch.owncast.online/logo',\n    src: 'https://watch.owncast.online/thumbnail.jpg',\n    online: false\n  }\n}",...Offline.parameters?.docs?.source}}};const __namedExportsOrder=["Example1","Example2","Offline"]},"./components/video/VideoPoster/VideoPoster.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>VideoPoster});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),__jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var imgStyle={position:"absolute",width:"100%",height:"100%"},CrossfadeImage=function CrossfadeImage(_ref){var _ref$src=_ref.src,src=void 0===_ref$src?"":_ref$src,width=_ref.width,height=_ref.height,_ref$objectFit=_ref.objectFit,objectFit=void 0===_ref$objectFit?"fill":_ref$objectFit,_ref$duration=_ref.duration,duration=void 0===_ref$duration?"1s":_ref$duration,className=_ref.className,spanStyle=(0,react.useMemo)((function(){return{display:"inline-block",position:"relative",width,height}}),[width,height]),imgStyles=(0,react.useMemo)((function(){return[_objectSpread(_objectSpread({},imgStyle),{},{objectFit,opacity:0,transition:"opacity ".concat(duration)}),_objectSpread(_objectSpread({},imgStyle),{},{objectFit,opacity:1,transition:"opacity ".concat(duration)}),_objectSpread(_objectSpread({},imgStyle),{},{objectFit,opacity:0})]}),[objectFit,duration]),_useState=(0,react.useState)(0),key=_useState[0],setKey=_useState[1],_useState2=(0,react.useState)(["",""]),srcs=_useState2[0],setSrcs=_useState2[1],nextSrc=src!==srcs[1]?src:"",onLoadImg=function onLoadImg(){setKey((key+1)%3),setSrcs([srcs[1],nextSrc])};return __jsx("span",{style:spanStyle,className},[].concat((0,toConsumableArray.A)(srcs),[nextSrc]).map((function(singleSrc,index){return""!==singleSrc&&__jsx("img",{key:singleSrc,src:singleSrc,alt:"",style:imgStyles[index],onLoad:2===index?onLoadImg:void 0})})))};CrossfadeImage.displayName="CrossfadeImage",CrossfadeImage.defaultProps={objectFit:"fill",duration:"3s"};try{CrossfadeImage.displayName="CrossfadeImage",CrossfadeImage.__docgenInfo={description:"",displayName:"CrossfadeImage",props:{src:{defaultValue:{value:""},description:"",name:"src",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"string"}},objectFit:{defaultValue:{value:"fill"},description:"",name:"objectFit",required:!1,type:{name:"enum",value:[{value:'"-moz-initial"'},{value:'"inherit"'},{value:'"initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"contain"'},{value:'"cover"'},{value:'"fill"'},{value:'"none"'},{value:'"scale-down"'}]}},duration:{defaultValue:{value:"3s"},description:"",name:"duration",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/CrossfadeImage/CrossfadeImage.tsx#CrossfadeImage"]={docgenInfo:CrossfadeImage.__docgenInfo,name:"CrossfadeImage",path:"components/ui/CrossfadeImage/CrossfadeImage.tsx#CrossfadeImage"})}catch(__react_docgen_typescript_loader_error){}var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),VideoPoster_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/video/VideoPoster/VideoPoster.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(VideoPoster_module.Ay,options);const VideoPoster_VideoPoster_module=VideoPoster_module.Ay&&VideoPoster_module.Ay.locals?VideoPoster_module.Ay.locals:void 0;var VideoPoster_jsx=react.createElement,VideoPoster=function VideoPoster(_ref){var timer,online=_ref.online,initialSrc=_ref.initialSrc,base=_ref.src,_useState=(0,react.useState)(initialSrc),src=_useState[0],setSrc=_useState[1],_useState2=(0,react.useState)("0s"),duration=_useState2[0],setDuration=_useState2[1];return(0,react.useEffect)((function(){clearInterval(timer),timer=setInterval((function(){"0s"===duration&&setDuration("3s"),setSrc("".concat(base,"?").concat(Date.now()))}),2e4)}),[]),VideoPoster_jsx("div",{className:VideoPoster_VideoPoster_module.poster},!online&&VideoPoster_jsx("img",{src:initialSrc,alt:"logo"}),online&&VideoPoster_jsx(CrossfadeImage,{src,duration,objectFit:"contain",height:"auto",width:"100%",className:VideoPoster_VideoPoster_module.image}))};VideoPoster.displayName="VideoPoster";try{VideoPoster.displayName="VideoPoster",VideoPoster.__docgenInfo={description:"",displayName:"VideoPoster",props:{initialSrc:{defaultValue:null,description:"",name:"initialSrc",required:!0,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},online:{defaultValue:null,description:"",name:"online",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/video/VideoPoster/VideoPoster.tsx#VideoPoster"]={docgenInfo:VideoPoster.__docgenInfo,name:"VideoPoster",path:"components/video/VideoPoster/VideoPoster.tsx#VideoPoster"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/video/VideoPoster/VideoPoster.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".DTNU2jdU0tV2hPD9L9Pl{display:flex;justify-content:center;width:100%;height:100%}.J6sTBT7T1RZrBS56nENI{background-color:#000}","",{version:3,sources:["webpack://./components/video/VideoPoster/VideoPoster.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CACA,sBAAA,CACA,UAAA,CACA,WAAA,CAGF,sBACE,qBAAA",sourcesContent:[".poster {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n.image {\n  background-color: black;\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);