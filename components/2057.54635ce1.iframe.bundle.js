(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[2057],{"./components/ui/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:()=>Modal});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),modal=__webpack_require__("./node_modules/antd/es/modal/index.js"),spin=__webpack_require__("./node_modules/antd/es/spin/index.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_error_boundary_esm=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js"),ComponentError=__webpack_require__("./components/ui/ComponentError/ComponentError.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/Modal/Modal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_module.A,options);const Modal_Modal_module=Modal_module.A&&Modal_module.A.locals?Modal_module.A.locals:void 0,Modal=({title,url,open,handleOk,handleCancel,afterClose,height,width,children})=>{const[loading,setLoading]=(0,react.useState)(!!url);let defaultHeight="100%",defaultWidth="520px";url&&(defaultHeight="70vh",defaultWidth="900px");const modalContentBodyStyle={padding:"0px",minHeight:height,height:null!=height?height:defaultHeight},iframe=url&&(0,jsx_runtime.jsx)("iframe",{title,src:url,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>setLoading(!1)}),iframeDisplayStyle=loading?"none":"inline";return(0,jsx_runtime.jsx)(modal.A,{title,open,onOk:handleOk,onCancel:handleCancel,afterClose,bodyStyle:modalContentBodyStyle,width:null!=width?width:defaultWidth,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,className:Modal_Modal_module.modal,children:(0,jsx_runtime.jsx)(react_error_boundary_esm.tH,{fallbackRender:({error,resetErrorBoundary})=>(0,jsx_runtime.jsx)(ComponentError.O,{componentName:"Modal",message:error.message,retryFunction:resetErrorBoundary}),children:(0,jsx_runtime.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[iframe&&(0,jsx_runtime.jsx)("div",{style:{display:iframeDisplayStyle},children:iframe}),children&&(0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.content,children}),loading&&(0,jsx_runtime.jsx)(spin.A,{className:Modal_Modal_module.spinner,spinning:loading,size:"large",tip:title})]})})})};Modal.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},url:{defaultValue:{value:"undefined"},description:"",name:"url",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleOk:{defaultValue:{value:"undefined"},description:"",name:"handleOk",required:!1,type:{name:"() => void"}},handleCancel:{defaultValue:{value:"undefined"},description:"",name:"handleCancel",required:!1,type:{name:"() => void"}},afterClose:{defaultValue:{value:"undefined"},description:"",name:"afterClose",required:!1,type:{name:"() => void"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"components/ui/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/antd/es/spin/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),lodash_debounce__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/debounce.js"),lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__),rc_util_es_omit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rc-util/es/omit.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_config_provider__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/antd/es/config-provider/context.js"),_util_reactNode__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/_util/reactNode.js"),_util_type__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/_util/type.js"),__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t},defaultIndicator=((0,_util_type__WEBPACK_IMPORTED_MODULE_3__.P)("small","default","large"),null);var Spin=function Spin(props){var prefixCls=props.spinPrefixCls,_props$spinning=props.spinning,customSpinning=void 0===_props$spinning||_props$spinning,delay=props.delay,className=props.className,_props$size=props.size,size=void 0===_props$size?"default":_props$size,tip=props.tip,wrapperClassName=props.wrapperClassName,style=props.style,children=props.children,restProps=__rest(props,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),_React$useState=react__WEBPACK_IMPORTED_MODULE_2__.useState((function(){return customSpinning&&!function shouldDelay(spinning,delay){return!!spinning&&!!delay&&!isNaN(Number(delay))}(customSpinning,delay)})),_React$useState2=(0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__.A)(_React$useState,2),spinning=_React$useState2[0],setSpinning=_React$useState2[1];react__WEBPACK_IMPORTED_MODULE_2__.useEffect((function(){var updateSpinning=lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()((function(){setSpinning(customSpinning)}),delay);return updateSpinning(),function(){var _a;null===(_a=null==updateSpinning?void 0:updateSpinning.cancel)||void 0===_a||_a.call(updateSpinning)}}),[delay,customSpinning]);var renderSpin=function renderSpin(_ref){var direction=_ref.direction,spinClassName=classnames__WEBPACK_IMPORTED_MODULE_0___default()(prefixCls,(0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.A)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.A)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.A)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.A)((0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.A)({},"".concat(prefixCls,"-sm"),"small"===size),"".concat(prefixCls,"-lg"),"large"===size),"".concat(prefixCls,"-spinning"),spinning),"".concat(prefixCls,"-show-text"),!!tip),"".concat(prefixCls,"-rtl"),"rtl"===direction),className),divProps=(0,rc_util_es_omit__WEBPACK_IMPORTED_MODULE_7__.A)(restProps,["indicator","prefixCls"]),spinElement=react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.A)({},divProps,{style,className:spinClassName,"aria-live":"polite","aria-busy":spinning}),function renderIndicator(prefixCls,props){var indicator=props.indicator,dotClassName="".concat(prefixCls,"-dot");return null===indicator?null:(0,_util_reactNode__WEBPACK_IMPORTED_MODULE_4__.zO)(indicator)?(0,_util_reactNode__WEBPACK_IMPORTED_MODULE_4__.Ob)(indicator,{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(indicator.props.className,dotClassName)}):(0,_util_reactNode__WEBPACK_IMPORTED_MODULE_4__.zO)(defaultIndicator)?(0,_util_reactNode__WEBPACK_IMPORTED_MODULE_4__.Ob)(defaultIndicator,{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(defaultIndicator.props.className,dotClassName)}):react__WEBPACK_IMPORTED_MODULE_2__.createElement("span",{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(dotClassName,"".concat(prefixCls,"-dot-spin"))},react__WEBPACK_IMPORTED_MODULE_2__.createElement("i",{className:"".concat(prefixCls,"-dot-item")}),react__WEBPACK_IMPORTED_MODULE_2__.createElement("i",{className:"".concat(prefixCls,"-dot-item")}),react__WEBPACK_IMPORTED_MODULE_2__.createElement("i",{className:"".concat(prefixCls,"-dot-item")}),react__WEBPACK_IMPORTED_MODULE_2__.createElement("i",{className:"".concat(prefixCls,"-dot-item")}))}(prefixCls,props),tip?react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{className:"".concat(prefixCls,"-text")},tip):null);if(function isNestedPattern(){return void 0!==children}()){var containerClassName=classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls,"-container"),(0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__.A)({},"".concat(prefixCls,"-blur"),spinning));return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.A)({},divProps,{className:classnames__WEBPACK_IMPORTED_MODULE_0___default()("".concat(prefixCls,"-nested-loading"),wrapperClassName)}),spinning&&react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{key:"loading"},spinElement),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{className:containerClassName,key:"container"},children))}return spinElement};return react__WEBPACK_IMPORTED_MODULE_2__.createElement(_config_provider__WEBPACK_IMPORTED_MODULE_9__.TG,null,renderSpin)},SpinFC=function SpinFC(props){var customizePrefixCls=props.prefixCls,spinPrefixCls=(0,react__WEBPACK_IMPORTED_MODULE_2__.useContext(_config_provider__WEBPACK_IMPORTED_MODULE_9__.QO).getPrefixCls)("spin",customizePrefixCls),spinClassProps=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.A)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.A)({},props),{spinPrefixCls});return react__WEBPACK_IMPORTED_MODULE_2__.createElement(Spin,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_8__.A)({},spinClassProps))};SpinFC.setDefaultIndicator=function(indicator){defaultIndicator=indicator};const __WEBPACK_DEFAULT_EXPORT__=SpinFC},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/Modal/Modal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Lt6Vg4guWZPhViFV8BR8{position:absolute;top:50%;left:50%}.Ep_XrhrWHWWaET4hDVIz{display:block;height:100%;padding:1.25rem;background-color:var(--theme-color-components-modal-content-background);color:var(--theme-color-components-modal-content-text)}.Ep_XrhrWHWWaET4hDVIz h1:first-child,.Ep_XrhrWHWWaET4hDVIz h2:first-child,.Ep_XrhrWHWWaET4hDVIz h3:first-child{margin-top:unset}.zqlLEpPjiWLlgRdtKyEt .ant-modal-header{color:var(--theme-color-components-modal-header-text);font-family:var(--theme-text-display-font-family);padding:1rem 1.25rem}.zqlLEpPjiWLlgRdtKyEt .ant-modal-title{color:var(--theme-color-components-modal-header-text);font-size:17px;font-weight:600}.zqlLEpPjiWLlgRdtKyEt .ant-modal-body{overflow:auto;border-radius:0 0 var(--theme-rounded-corners) var(--theme-rounded-corners)}.zqlLEpPjiWLlgRdtKyEt .ant-modal-close-x{font-size:12px}.zqlLEpPjiWLlgRdtKyEt .ant-modal{color:var(--theme-color-components-text-on-light)}.zqlLEpPjiWLlgRdtKyEt .ant-modal h1{color:var(--theme-color-components-text-on-light)}.zqlLEpPjiWLlgRdtKyEt .ant-modal-content{box-shadow:3px 15px 15px -3px rgba(0,0,0,.15),0 4px 6px -2px rgba(0,0,0,.08)}","",{version:3,sources:["webpack://./components/ui/Modal/Modal.module.scss"],names:[],mappings:"AACA,sBACE,iBAAA,CACA,OAAA,CACA,QAAA,CAGF,sBACE,aAAA,CACA,WAAA,CACA,eAAA,CACA,uEAAA,CACA,sDAAA,CAEA,+GAGE,gBAAA,CAKH,wCACC,qDAAA,CACA,iDAAA,CACA,oBAAA,CAGD,uCACC,qDAAA,CACA,cAAA,CACA,eAAA,CAGD,sCACC,aAAA,CACA,2EAAA,CAGD,yCACC,cAAA,CAGD,iCACC,iDAAA,CAEA,oCACC,iDAAA,CAIF,yCACC,4EAAA",sourcesContent:["\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.content {\n  display: block;\n  height: 100%;\n  padding: 1.25rem;\n  background-color: var(--theme-color-components-modal-content-background);\n  color: var(--theme-color-components-modal-content-text);\n\n  h1:first-child,\n  h2:first-child,\n  h3:first-child {\n    margin-top: unset;\n  }\n}\n\n.modal {\n\t:global(.ant-modal-header) {\n\t\tcolor: var(--theme-color-components-modal-header-text);\n\t\tfont-family: var(--theme-text-display-font-family);\n\t\tpadding: 1rem 1.25rem;\n\t}\n\n\t:global(.ant-modal-title) {\n\t\tcolor: var(--theme-color-components-modal-header-text);\n\t\tfont-size: 17px;\n\t\tfont-weight: 600;\n\t}\n\n\t:global(.ant-modal-body) {\n\t\toverflow: auto;\n\t\tborder-radius: 0 0 var(--theme-rounded-corners) var(--theme-rounded-corners);\n\t}\n\n\t:global(.ant-modal-close-x) {\n\t\tfont-size: 12px;\n\t}\n\n\t:global(.ant-modal) {\n\t\tcolor: var(--theme-color-components-text-on-light);\n\n\t\th1 {\n\t\t\tcolor: var(--theme-color-components-text-on-light);\n\t\t}\n\t}\n\n\t:global(.ant-modal-content) {\n\t\tbox-shadow: 3px 15px 15px -3px rgb(0 0 0 / 15%), 0 4px 6px -2px rgb(0 0 0 / 8%);\n\t}\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={spinner:"Lt6Vg4guWZPhViFV8BR8",content:"Ep_XrhrWHWWaET4hDVIz",modal:"zqlLEpPjiWLlgRdtKyEt"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/lodash/_baseTrim.js":(module,__unused_webpack_exports,__webpack_require__)=>{var trimmedEndIndex=__webpack_require__("./node_modules/lodash/_trimmedEndIndex.js"),reTrimStart=/^\s+/;module.exports=function baseTrim(string){return string?string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,""):string}},"./node_modules/lodash/_trimmedEndIndex.js":module=>{var reWhitespace=/\s/;module.exports=function trimmedEndIndex(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}},"./node_modules/lodash/debounce.js":(module,__unused_webpack_exports,__webpack_require__)=>{var isObject=__webpack_require__("./node_modules/lodash/isObject.js"),now=__webpack_require__("./node_modules/lodash/now.js"),toNumber=__webpack_require__("./node_modules/lodash/toNumber.js"),nativeMax=Math.max,nativeMin=Math.min;module.exports=function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args)}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime;return void 0===lastCallTime||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&time-lastInvokeTime>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,function remainingWait(time){var timeWaiting=wait-(time-lastCallTime);return maxing?nativeMin(timeWaiting,maxWait-(time-lastInvokeTime)):timeWaiting}(time))}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(void 0===timerId)return function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}(lastCallTime);if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return void 0===timerId&&(timerId=setTimeout(timerExpired,wait)),result}return wait=toNumber(wait)||0,isObject(options)&&(leading=!!options.leading,maxWait=(maxing="maxWait"in options)?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing),debounced.cancel=function cancel(){void 0!==timerId&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0},debounced.flush=function flush(){return void 0===timerId?result:trailingEdge(now())},debounced}},"./node_modules/lodash/isObject.js":module=>{module.exports=function isObject(value){var type=typeof value;return null!=value&&("object"==type||"function"==type)}},"./node_modules/lodash/now.js":(module,__unused_webpack_exports,__webpack_require__)=>{var root=__webpack_require__("./node_modules/lodash/_root.js");module.exports=function(){return root.Date.now()}},"./node_modules/lodash/toNumber.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseTrim=__webpack_require__("./node_modules/lodash/_baseTrim.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js"),isSymbol=__webpack_require__("./node_modules/lodash/isSymbol.js"),reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;module.exports=function toNumber(value){if("number"==typeof value)return value;if(isSymbol(value))return NaN;if(isObject(value)){var other="function"==typeof value.valueOf?value.valueOf():value;value=isObject(other)?other+"":other}if("string"!=typeof value)return 0===value?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NaN:+value}}}]);