"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[6222],{"./components/chat/ChatModerationActionMenu/ChatModerationActionMenu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChatModerationActionMenu:()=>ChatModerationActionMenu});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Dropdown_Modal_Space_message_antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/antd/es/modal/index.js"),_barrel_optimize_names_Dropdown_Modal_Space_message_antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/message/index.js"),_barrel_optimize_names_Dropdown_Modal_Space_message_antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/dropdown/index.js"),_barrel_optimize_names_Dropdown_Modal_Space_message_antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/antd/es/space/index.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),next_dynamic__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dynamic.js"),next_dynamic__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__),_ui_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/ui/Modal/Modal.tsx"),_ChatModerationDetailsModal_ChatModerationDetailsModal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.tsx"),_services_moderation_service__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./services/moderation-service.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");const{confirm}=_barrel_optimize_names_Dropdown_Modal_Space_message_antd__WEBPACK_IMPORTED_MODULE_5__.A,CloseCircleOutlined=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((()=>Promise.all([__webpack_require__.e(3827),__webpack_require__.e(4746)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/CloseCircleOutlined.js",23))),{loadableGenerated:{webpack:()=>["./node_modules/@ant-design/icons/CloseCircleOutlined.js"]},ssr:!1}),ExclamationCircleOutlined=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((()=>Promise.all([__webpack_require__.e(3827),__webpack_require__.e(3595)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/ExclamationCircleOutlined.js",23))),{loadableGenerated:{webpack:()=>["./node_modules/@ant-design/icons/ExclamationCircleOutlined.js"]},ssr:!1}),EyeInvisibleOutlined=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((()=>Promise.all([__webpack_require__.e(3827),__webpack_require__.e(348)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/EyeInvisibleOutlined.js",23))),{loadableGenerated:{webpack:()=>["./node_modules/@ant-design/icons/EyeInvisibleOutlined.js"]},ssr:!1}),SmallDashOutlined=next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()((()=>Promise.all([__webpack_require__.e(3827),__webpack_require__.e(3257)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/SmallDashOutlined.js",23))),{loadableGenerated:{webpack:()=>["./node_modules/@ant-design/icons/SmallDashOutlined.js"]},ssr:!1}),ChatModerationActionMenu=({messageID,userID,userDisplayName,accessToken})=>{const[showUserDetailsModal,setShowUserDetailsModal]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),items=[{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(EyeInvisibleOutlined,{}),label:"Hide Message",key:"hide-message",onClick:async()=>{confirm({icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExclamationCircleOutlined,{}),content:`Are you sure you want to remove this message from ${userDisplayName}?`,onOk(){(async()=>{try{await _services_moderation_service__WEBPACK_IMPORTED_MODULE_6__.A.removeMessage(messageID,accessToken)}catch(e){console.error(e),_barrel_optimize_names_Dropdown_Modal_Space_message_antd__WEBPACK_IMPORTED_MODULE_7__.Ay.error(e)}})()}})}},{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CloseCircleOutlined,{}),label:"Ban User",key:"ban-user",onClick:async()=>{confirm({icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ExclamationCircleOutlined,{}),content:`Are you sure you want to ban ${userDisplayName} from chat?`,onOk(){(async()=>{try{await _services_moderation_service__WEBPACK_IMPORTED_MODULE_6__.A.banUser(userID,accessToken)}catch(e){console.error(e),_barrel_optimize_names_Dropdown_Modal_Space_message_antd__WEBPACK_IMPORTED_MODULE_7__.Ay.error(e)}})()}})}},{label:"More Info...",key:"more-info",onClick:()=>setShowUserDetailsModal(!0)}];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Dropdown_Modal_Space_message_antd__WEBPACK_IMPORTED_MODULE_8__.A,{menu:{items},trigger:["click"],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{type:"button","aria-label":"Chat moderation options",onClick:e=>e.preventDefault(),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Dropdown_Modal_Space_message_antd__WEBPACK_IMPORTED_MODULE_9__.A,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SmallDashOutlined,{})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__.Modal,{title:userDisplayName,open:showUserDetailsModal,handleCancel:()=>{setShowUserDetailsModal(!1)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ChatModerationDetailsModal_ChatModerationDetailsModal__WEBPACK_IMPORTED_MODULE_4__.q,{userId:userID,accessToken})})]})};try{ChatModerationActionMenu.displayName="ChatModerationActionMenu",ChatModerationActionMenu.__docgenInfo={description:"",displayName:"ChatModerationActionMenu",props:{accessToken:{defaultValue:null,description:"",name:"accessToken",required:!0,type:{name:"string"}},messageID:{defaultValue:null,description:"",name:"messageID",required:!0,type:{name:"string"}},userID:{defaultValue:null,description:"",name:"userID",required:!0,type:{name:"string"}},userDisplayName:{defaultValue:null,description:"",name:"userDisplayName",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/chat/ChatModerationActionMenu/ChatModerationActionMenu.tsx#ChatModerationActionMenu"]={docgenInfo:ChatModerationActionMenu.__docgenInfo,name:"ChatModerationActionMenu",path:"components/chat/ChatModerationActionMenu/ChatModerationActionMenu.tsx#ChatModerationActionMenu"})}catch(__react_docgen_typescript_loader_error){}},"./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>ChatModerationDetailsModal});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),collapse=__webpack_require__("./node_modules/antd/es/collapse/index.js"),row=__webpack_require__("./node_modules/antd/es/row/index.js"),col=__webpack_require__("./node_modules/antd/es/col/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),spin=__webpack_require__("./node_modules/antd/es/spin/index.js"),tag=__webpack_require__("./node_modules/antd/es/tag/index.js"),table=__webpack_require__("./node_modules/antd/es/table/index.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),format=__webpack_require__("./node_modules/date-fns/format.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),react_error_boundary_esm=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js"),moderation_service=__webpack_require__("./services/moderation-service.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ChatModerationDetailsModal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ChatModerationDetailsModal_module.A,options);const ChatModerationDetailsModal_ChatModerationDetailsModal_module=ChatModerationDetailsModal_module.A&&ChatModerationDetailsModal_module.A.locals?ChatModerationDetailsModal_module.A.locals:void 0;var utils_format=__webpack_require__("./utils/format.ts"),ComponentError=__webpack_require__("./components/ui/ComponentError/ComponentError.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js");const{Panel}=collapse.A,DeleteOutlined=dynamic_default()((()=>Promise.all([__webpack_require__.e(3827),__webpack_require__.e(8863)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/DeleteOutlined.js",23))),{loadableGenerated:{webpack:()=>["./node_modules/@ant-design/icons/DeleteOutlined.js"]},ssr:!1}),ValueRow=({label,value})=>(0,jsx_runtime.jsxs)(row.A,{justify:"space-around",align:"middle",children:[(0,jsx_runtime.jsx)(col.A,{span:12,children:label}),(0,jsx_runtime.jsx)(col.A,{span:12,children:value})]}),ConnectedClient=({client})=>{const{messageCount,connectedAt,geo}=client,connectedAtDate=(0,format.GP)(new Date(connectedAt),"PP pp");return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(ValueRow,{label:"Messages Sent",value:messageCount.toString()}),"N/A"!==geo&&(0,jsx_runtime.jsx)(ValueRow,{label:"Geo",value:geo}),(0,jsx_runtime.jsx)(ValueRow,{label:"Connected At",value:connectedAtDate})]})},UserColorBlock=({color})=>{const bg=`var(--theme-color-users-${color})`;return(0,jsx_runtime.jsxs)("div",{className:ChatModerationDetailsModal_ChatModerationDetailsModal_module.colorBlock,style:{backgroundColor:bg},children:["Color ",color]})},ChatModerationDetailsModal=({userId,accessToken})=>{const[userDetails,setUserDetails]=(0,react.useState)(null),[loading,setLoading]=(0,react.useState)(!0);if((0,react.useEffect)((()=>{(async()=>{try{const response=await(await fetch(`/api/moderation/chat/user/${userId}?accessToken=${accessToken}`)).json();setUserDetails(response),setLoading(!1)}catch(e){console.error(e)}})()}),[]),!userDetails)return null;const{user,connectedClients,messages}=userDetails,{displayColor,createdAt,previousNames,scopes,isBot,authenticated}=user,totalMessagesSent=connectedClients.reduce(((acc,client)=>acc+client.messageCount),0),createdAtDate=(0,format.GP)(new Date(createdAt),"PP pp"),chatMessageColumns=[{title:"Message",dataIndex:"body",key:"body"},{title:"Sent At",dataIndex:"timestamp",key:"timestamp",render:timestamp=>(0,format.GP)(new Date(timestamp),"PP pp")},{title:"Delete",key:"delete",render:(_text,record)=>(0,jsx_runtime.jsx)(es_button.A,{type:"primary",ghost:!0,icon:(0,jsx_runtime.jsx)(DeleteOutlined,{}),onClick:()=>(async(messageId,accessToken)=>{try{moderation_service.A.removeMessage(messageId,accessToken)}catch(e){console.error(e)}})(record.id,accessToken)})}];return(0,jsx_runtime.jsx)(react_error_boundary_esm.tH,{fallbackRender:({error,resetErrorBoundary})=>(0,jsx_runtime.jsx)(ComponentError.O,{componentName:"ChatModerationDetailsModal",message:error.message,retryFunction:resetErrorBoundary}),children:(0,jsx_runtime.jsxs)(spin.A,{spinning:loading,children:[(0,jsx_runtime.jsx)(UserColorBlock,{color:displayColor}),null==scopes?void 0:scopes.map((scope=>(0,jsx_runtime.jsx)(tag.A,{children:scope},scope))),authenticated&&(0,jsx_runtime.jsx)(tag.A,{children:"Authenticated"}),isBot&&(0,jsx_runtime.jsx)(tag.A,{children:"Bot"}),(0,jsx_runtime.jsx)(ValueRow,{label:"Messages Sent Across Clients",value:totalMessagesSent.toString()}),(0,jsx_runtime.jsx)(ValueRow,{label:"User Created",value:createdAtDate}),(0,jsx_runtime.jsx)(ValueRow,{label:"Known As",value:previousNames.join(",")}),(0,jsx_runtime.jsxs)(collapse.A,{accordion:!0,children:[(0,jsx_runtime.jsx)(Panel,{header:"Currently Connected Clients",children:(0,jsx_runtime.jsx)(collapse.A,{accordion:!0,children:connectedClients.map((client=>(0,jsx_runtime.jsx)(Panel,{header:(0,utils_format.Ld)(client.userAgent),children:(0,jsx_runtime.jsx)(ConnectedClient,{client})},client.id)))})},"connected-clients"),(0,jsx_runtime.jsx)(collapse.A,{accordion:!0,children:(0,jsx_runtime.jsx)(Panel,{header:"Recent Chat Messages",children:(0,jsx_runtime.jsx)(table.A,{size:"small",pagination:null,columns:chatMessageColumns,dataSource:messages,rowKey:"id"})},"chat-messages")})]})]})})};try{ChatModerationDetailsModal.displayName="ChatModerationDetailsModal",ChatModerationDetailsModal.__docgenInfo={description:"",displayName:"ChatModerationDetailsModal",props:{userId:{defaultValue:null,description:"",name:"userId",required:!0,type:{name:"string"}},accessToken:{defaultValue:null,description:"",name:"accessToken",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.tsx#ChatModerationDetailsModal"]={docgenInfo:ChatModerationDetailsModal.__docgenInfo,name:"ChatModerationDetailsModal",path:"components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.tsx#ChatModerationDetailsModal"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/ComponentError/ComponentError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ComponentError});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Alert_Button_antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/alert/index.js"),_barrel_optimize_names_Alert_Button_antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/button/index.js");const openBugReport=()=>{window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},ErrorContent=({message,componentName,details,canRetry})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."}),!!canRetry&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"You may optionally retry, however functionality might not work as expected."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("code",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:message&&`Error: ${message}`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:["Component: ",componentName]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:details&&details})]})]}),ComponentError=({message,componentName,details,retryFunction})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Button_antd__WEBPACK_IMPORTED_MODULE_1__.A,{message:"Error",showIcon:!0,description:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ErrorContent,{message,details,componentName,canRetry:!!retryFunction}),type:"error",action:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[retryFunction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Button_antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",onClick:retryFunction,children:"Retry"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Button_antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",danger:!0,onClick:openBugReport,children:"Report Error"})]})});try{ComponentError.displayName="ComponentError",ComponentError.__docgenInfo={description:"",displayName:"ComponentError",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},componentName:{defaultValue:null,description:"",name:"componentName",required:!0,type:{name:"string"}},details:{defaultValue:null,description:"",name:"details",required:!1,type:{name:"string"}},retryFunction:{defaultValue:null,description:"",name:"retryFunction",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/ComponentError/ComponentError.tsx#ComponentError"]={docgenInfo:ComponentError.__docgenInfo,name:"ComponentError",path:"components/ui/ComponentError/ComponentError.tsx#ComponentError"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:()=>Modal});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),modal=__webpack_require__("./node_modules/antd/es/modal/index.js"),spin=__webpack_require__("./node_modules/antd/es/spin/index.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_error_boundary_esm=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js"),ComponentError=__webpack_require__("./components/ui/ComponentError/ComponentError.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/Modal/Modal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal_module.A,options);const Modal_Modal_module=Modal_module.A&&Modal_module.A.locals?Modal_module.A.locals:void 0,Modal=({title,url,open,handleOk,handleCancel,afterClose,height,width,children})=>{const[loading,setLoading]=(0,react.useState)(!!url);let defaultHeight="100%",defaultWidth="520px";url&&(defaultHeight="70vh",defaultWidth="900px");const modalContentBodyStyle={padding:"0px",minHeight:height,height:null!=height?height:defaultHeight},iframe=url&&(0,jsx_runtime.jsx)("iframe",{title,src:url,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,style:{display:"block"},onLoad:()=>setLoading(!1)}),iframeDisplayStyle=loading?"none":"inline";return(0,jsx_runtime.jsx)(modal.A,{title,open,onOk:handleOk,onCancel:handleCancel,afterClose,bodyStyle:modalContentBodyStyle,width:null!=width?width:defaultWidth,zIndex:999,footer:null,centered:!0,destroyOnClose:!0,className:Modal_Modal_module.modal,children:(0,jsx_runtime.jsx)(react_error_boundary_esm.tH,{fallbackRender:({error,resetErrorBoundary})=>(0,jsx_runtime.jsx)(ComponentError.O,{componentName:"Modal",message:error.message,retryFunction:resetErrorBoundary}),children:(0,jsx_runtime.jsxs)("div",{id:"modal-container",style:{height:"100%"},children:[iframe&&(0,jsx_runtime.jsx)("div",{style:{display:iframeDisplayStyle},children:iframe}),children&&(0,jsx_runtime.jsx)("div",{className:Modal_Modal_module.content,children}),loading&&(0,jsx_runtime.jsx)(spin.A,{className:Modal_Modal_module.spinner,spinning:loading,size:"large",tip:title})]})})})};Modal.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0};try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},url:{defaultValue:{value:"undefined"},description:"",name:"url",required:!1,type:{name:"string"}},open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},handleOk:{defaultValue:{value:"undefined"},description:"",name:"handleOk",required:!1,type:{name:"() => void"}},handleCancel:{defaultValue:{value:"undefined"},description:"",name:"handleCancel",required:!1,type:{name:"() => void"}},afterClose:{defaultValue:{value:"undefined"},description:"",name:"afterClose",required:!1,type:{name:"() => void"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/Modal/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"components/ui/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./services/moderation-service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=class ChatModerationService{static async removeMessage(id,accessToken){const url=new URL("/api/chat/messagevisibility",window.location.toString());url.searchParams.append("accessToken",accessToken);const hideMessageUrl=url.toString(),options={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idArray:[id]})};await fetch(hideMessageUrl,options)}static async banUser(id,accessToken){const url=new URL("/api/chat/users/setenabled",window.location.toString());url.searchParams.append("accessToken",accessToken);const hideMessageUrl=url.toString(),options={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:id})};await fetch(hideMessageUrl,options)}}},"./utils/format.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ld:()=>formatUAstring,RW:()=>parseSecondsToDurationString});var ua_parser_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ua-parser-js/src/ua-parser.js"),ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(ua_parser_js__WEBPACK_IMPORTED_MODULE_0__);function padLeft(text,pad,size){return String(pad.repeat(size)+text).slice(-size)}function parseSecondsToDurationString(seconds=0){const finiteSeconds=Number.isFinite(+seconds)?Math.abs(seconds):0,days=Math.floor(finiteSeconds/86400),daysString=days>0?`${days} day${days>1?"s":""} `:"",hours=Math.floor(finiteSeconds/3600%24);return daysString+(hours||days?padLeft(`${hours}:`,"0",3):"")+padLeft(`${Math.floor(finiteSeconds/60%60)}:`,"0",3)+padLeft(`${Math.floor(finiteSeconds%60)}`,"0",2)}function formatUAstring(uaString){const parser=ua_parser_js__WEBPACK_IMPORTED_MODULE_0___default()(uaString),{device,os,browser}=parser,{major:browserVersion,name}=browser,{version:osVersion,name:osName}=os,{model,type}=device;if("libmpv"===uaString)return"mpv media player";if(!name||!browserVersion||!osName)return uaString;return`${name} ${browserVersion} on ${osName} ${osVersion}\n  ${model||type?` (${model||type})`:""}`}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".LLkMqCQ151QLthz6Jrm9{padding:10px}.tLPeuqwkaXHP5VCqtGlt{margin:10px;padding:15px;border:1px solid #ccc;border-radius:5px}.Ptcgm8bVQJo5oZiQCGGK{display:inline-block;width:60px;height:20px;border:1px solid #000;text-align:center;font-size:.8rem}.wwiXkMXh0rQl0JFi8jFw{font-weight:bold;padding-right:10px;font-size:1.2rem}","",{version:3,sources:["webpack://./components/chat/ChatModerationDetailsModal/ChatModerationDetailsModal.module.scss"],names:[],mappings:"AAAA,sBACE,YAAA,CAGF,sBACE,WAAA,CACA,YAAA,CACA,qBAAA,CACA,iBAAA,CAGF,sBACE,oBAAA,CACA,UAAA,CACA,WAAA,CACA,qBAAA,CACA,iBAAA,CACA,eAAA,CAGF,sBACE,gBAAA,CACA,kBAAA,CACA,gBAAA",sourcesContent:[".modalContainer {\n  padding: 10px;\n}\n\n.chatHistory {\n  margin: 10px;\n  padding: 15px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n}\n\n.colorBlock {\n  display: inline-block;\n  width: 60px;\n  height: 20px;\n  border: 1px solid #000;\n  text-align: center;\n  font-size: 0.8rem;\n}\n\n.displayName {\n  font-weight: bold;\n  padding-right: 10px;\n  font-size: 1.2rem;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={modalContainer:"LLkMqCQ151QLthz6Jrm9",chatHistory:"tLPeuqwkaXHP5VCqtGlt",colorBlock:"Ptcgm8bVQJo5oZiQCGGK",displayName:"wwiXkMXh0rQl0JFi8jFw"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/ui/Modal/Modal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Lt6Vg4guWZPhViFV8BR8{position:absolute;top:50%;left:50%}.Ep_XrhrWHWWaET4hDVIz{display:block;height:100%;padding:1.25rem;background-color:var(--theme-color-components-modal-content-background);color:var(--theme-color-components-modal-content-text)}.Ep_XrhrWHWWaET4hDVIz h1:first-child,.Ep_XrhrWHWWaET4hDVIz h2:first-child,.Ep_XrhrWHWWaET4hDVIz h3:first-child{margin-top:unset}.zqlLEpPjiWLlgRdtKyEt .ant-modal-header{color:var(--theme-color-components-modal-header-text);font-family:var(--theme-text-display-font-family);padding:1rem 1.25rem}.zqlLEpPjiWLlgRdtKyEt .ant-modal-title{color:var(--theme-color-components-modal-header-text);font-size:17px;font-weight:600}.zqlLEpPjiWLlgRdtKyEt .ant-modal-body{overflow:auto;border-radius:0 0 var(--theme-rounded-corners) var(--theme-rounded-corners)}.zqlLEpPjiWLlgRdtKyEt .ant-modal-close-x{font-size:12px}.zqlLEpPjiWLlgRdtKyEt .ant-modal{color:var(--theme-color-components-text-on-light)}.zqlLEpPjiWLlgRdtKyEt .ant-modal h1{color:var(--theme-color-components-text-on-light)}.zqlLEpPjiWLlgRdtKyEt .ant-modal-content{box-shadow:3px 15px 15px -3px rgba(0,0,0,.15),0 4px 6px -2px rgba(0,0,0,.08)}","",{version:3,sources:["webpack://./components/ui/Modal/Modal.module.scss"],names:[],mappings:"AACA,sBACE,iBAAA,CACA,OAAA,CACA,QAAA,CAGF,sBACE,aAAA,CACA,WAAA,CACA,eAAA,CACA,uEAAA,CACA,sDAAA,CAEA,+GAGE,gBAAA,CAKH,wCACC,qDAAA,CACA,iDAAA,CACA,oBAAA,CAGD,uCACC,qDAAA,CACA,cAAA,CACA,eAAA,CAGD,sCACC,aAAA,CACA,2EAAA,CAGD,yCACC,cAAA,CAGD,iCACC,iDAAA,CAEA,oCACC,iDAAA,CAIF,yCACC,4EAAA",sourcesContent:["\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n\n.content {\n  display: block;\n  height: 100%;\n  padding: 1.25rem;\n  background-color: var(--theme-color-components-modal-content-background);\n  color: var(--theme-color-components-modal-content-text);\n\n  h1:first-child,\n  h2:first-child,\n  h3:first-child {\n    margin-top: unset;\n  }\n}\n\n.modal {\n\t:global(.ant-modal-header) {\n\t\tcolor: var(--theme-color-components-modal-header-text);\n\t\tfont-family: var(--theme-text-display-font-family);\n\t\tpadding: 1rem 1.25rem;\n\t}\n\n\t:global(.ant-modal-title) {\n\t\tcolor: var(--theme-color-components-modal-header-text);\n\t\tfont-size: 17px;\n\t\tfont-weight: 600;\n\t}\n\n\t:global(.ant-modal-body) {\n\t\toverflow: auto;\n\t\tborder-radius: 0 0 var(--theme-rounded-corners) var(--theme-rounded-corners);\n\t}\n\n\t:global(.ant-modal-close-x) {\n\t\tfont-size: 12px;\n\t}\n\n\t:global(.ant-modal) {\n\t\tcolor: var(--theme-color-components-text-on-light);\n\n\t\th1 {\n\t\t\tcolor: var(--theme-color-components-text-on-light);\n\t\t}\n\t}\n\n\t:global(.ant-modal-content) {\n\t\tbox-shadow: 3px 15px 15px -3px rgb(0 0 0 / 15%), 0 4px 6px -2px rgb(0 0 0 / 8%);\n\t}\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={spinner:"Lt6Vg4guWZPhViFV8BR8",content:"Ep_XrhrWHWWaET4hDVIz",modal:"zqlLEpPjiWLlgRdtKyEt"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);