(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({77:"chat-ChatJoinMessage-ChatJoinMessage-stories",336:"screenshots-android-Screenshots-android-stock-browser-landscape-stories",508:"common-OwncastLogo-OwncastLogo-stories",523:"Images-mdx",972:"screenshots-android-Screenshots-android-stock-browser-portrait-stories",1001:"chat-ChatUserBadge-ChatUserBadge-stories",1145:"chat-ChatNameChangeMessage-ChatNameChangeMessage-stories",1379:"screenshots-iphone-Screenshots-iPhone-safari-landscape-stories",1404:"video-VideoPoster-VideoPoster-stories",1411:"colors-ComponentColors-mdx",1425:"modals-FediAuthModal-FediAuthModal-stories",1490:"Typography-mdx",1649:"modals-AuthModal-AuthModal-stories",1973:"chat-ChatUserMessage-ChatUserMessage-stories",2065:"ProductDefinition-mdx",2297:"ui-Statusbar-StatusBar-stories",2687:"Design-mdx",2735:"modals-IndieAuthModal-IndieAuthModal-stories",3129:"action-buttons-ActionButtonMenu-ActionButtonMenu-stories",3473:"modals-NameChangeModal-NameChangeModal-stories",3559:"ui-OfflineEmbed-OfflineEmbed-stories",3641:"WebComponents-mdx",3679:"colors-UserColors-mdx",3757:"chat-ChatSystemMessage-ChatSystemMessage-stories",3860:"common-ContentHeader-ContentHeader-stories",3901:"ui-Modal-Modal-stories",4193:"modals-FollowModal-FollowModal-stories",4294:"screenshots-macos-Screenshots-macOS-firefox-stories",4397:"screenshots-windows-Screenshots-windows-chrome-stories",4429:"ui-followers-FollowerCollection-FollowerCollection-stories",4593:"chat-ChatPartMessage-ChatPartMessage-stories",4797:"ui-SocialLinks-SocialLinks-stories",4805:"screenshots-iphone-Screenshots-iPhone-safari-portrait-stories",4821:"screenshots-ipad-Screenshots-iPad-portrait-safari-stories",4829:"ui-Header-Header-stories",5137:"chat-ChatSocialMessage-ChatSocialMessage-stories",5255:"screenshots-macos-Screenshots-macOS-safari-stories",5581:"chat-ChatModerationDetailsModal-ChatModerationDetailsModal-stories",5689:"Emoji-mdx",5704:"video-OwncastPlayer-OwncastPlayer-stories",5877:"modals-ChatModal-ChatModal-stories",6029:"ui-CustomPageContent-CustomPageContent-stories",6113:"screenshots-ipad-Screenshots-iPad-landscape-safari-stories",6165:"ui-OfflineBanner-OfflineBanner-stories",6270:"screenshots-windows-Screenshots-windows-firefox-stories",6472:"layouts-Main-Main-stories",6541:"chat-ChatContainer-ChatContainer-stories",6677:"config-federation-stories",7361:"Tshirt-mdx",7596:"Development-mdx",7638:"ReadwriteChat-stories",7647:"PageLogo-stories",7685:"screenshots-macos-Screenshots-macOS-chrome-stories",7761:"colors-OwncastColorPalette-mdx",8125:"chat-ChatActionMessage-ChatActionMessage-stories",8447:"modals-FatalErrorStateModal-FatalErrorStateModal-stories",8929:"ui-ComponentError-ComponentError-stories",8934:"common-UserDropdown-UserDropdown-stories",8965:"ui-NotifyReminderPopup-NotifyReminderPopup-stories",9079:"SocialPlatformImages-mdx",9127:"action-buttons-ActionButton-ActionButton-stories",9129:"chat-ChatTextField-ChatTextField-stories",9245:"action-buttons-ActionButtonRow-ActionButtonRow-stories",9343:"ReadonlyChat-stories",9403:"modals-BrowserNotifyModal-BrowserNotifyModal-stories",9461:"ui-followers-SingleFollower-SingleFollower-stories",9721:"chat-ChatModerationActionMenu-ChatModerationActionMenu-stories",9885:"ui-Footer-Footer-stories",9933:"LogosAndGraphics-mdx",9961:"chat-ChatModeratorNotification-ChatModeratorNotification-stories"}[chunkId]||chunkId)+"."+{77:"45e4d95b",118:"55d53516",192:"050d308f",284:"8dbbbf6b",336:"eb3bfb98",347:"c0c6bd1d",348:"51fa8619",400:"9a902992",461:"5851a445",508:"0e16b0a7",511:"ddfc1df0",523:"04d774c3",710:"d434c0d1",740:"86a88382",753:"8e8dd072",972:"45b4b5a1",1001:"954c4209",1052:"0f1306bd",1062:"77e28ea3",1085:"9bc897a3",1106:"f5ea30eb",1145:"6f425a9d",1294:"3f85c355",1342:"cc05960a",1379:"1c0e4209",1404:"2c218d1d",1411:"7c1ad313",1421:"0b6cbf8b",1425:"13d10279",1450:"a538e115",1490:"51a7abcb",1511:"da01e381",1516:"0da5f50f",1629:"9050fede",1649:"151bcb6b",1721:"e4f4171f",1918:"c5a1b570",1971:"640b7cf2",1973:"60e00b1a",2057:"54635ce1",2065:"b22fa3f3",2166:"a20ec5ed",2297:"7355172d",2454:"11810fdd",2687:"796950fc",2735:"9dce2b3f",2818:"36038201",2904:"4ceed980",2936:"5760a468",3002:"0bcb6dab",3037:"b5786865",3100:"2daa405a",3129:"b54131a2",3184:"27bd7030",3191:"f8865fd1",3192:"a18e2ec6",3257:"39adb84a",3367:"ba85ced5",3473:"347e7fa0",3519:"f92b0902",3559:"2b7019c8",3595:"cbb6d1c5",3641:"7d1c0f84",3679:"a4ef1168",3757:"2b5c08c4",3812:"eb432941",3827:"6573e19f",3860:"3e16f419",3901:"01833e2e",3902:"1316d251",4067:"b5234d62",4068:"2a9bb983",4070:"3ea065d6",4084:"7ba5f564",4193:"0253e60d",4241:"dca0284a",4291:"73d3e64c",4294:"78a3159a",4311:"2837dd05",4397:"b4135388",4429:"7f6eeb9e",4444:"6938a5f4",4487:"33c8c10a",4523:"94c35097",4548:"142d3e32",4593:"18d94aa9",4614:"d0518f1e",4746:"c93e405b",4797:"26e01c52",4805:"081163a7",4821:"daf7ea7e",4829:"da9841a9",4880:"9fcf912f",5017:"4098bf7d",5137:"42d6d15a",5153:"03211ce3",5243:"e844f921",5255:"13d99cda",5367:"2ccf2208",5386:"d528c219",5417:"e8142253",5453:"56a7f948",5581:"e15b3878",5633:"bebc30c0",5689:"7e3614f8",5704:"88c6d386",5732:"583ff133",5792:"baec9956",5877:"afa2aa4f",5887:"9f3b4ae9",6029:"a4187763",6036:"fefd2ac5",6113:"3cc1b80f",6165:"c6269ed4",6222:"ae975451",6230:"86f14a0c",6270:"0065c30a",6405:"dca9aee4",6472:"a571bc12",6492:"abbf33d9",6541:"f4c04bba",6677:"9f858afd",6742:"3178c7c2",6869:"325eb6da",6875:"0e35964a",6897:"876df2d5",7016:"50481639",7075:"09277b42",7107:"39c901b1",7114:"d97432f8",7142:"09bb5762",7145:"eba3ae44",7161:"18104dec",7192:"f59767db",7211:"0102f7dd",7232:"28c69bc5",7285:"32bfd750",7297:"f06f0871",7329:"251094c6",7361:"13a0eca9",7364:"e5b1dbf7",7404:"9a914ed5",7405:"bb293fa7",7437:"4dd8b093",7444:"853809a2",7503:"aa2b9364",7590:"ca27fe37",7596:"9cb73f83",7597:"434b4ce8",7604:"253b4daa",7628:"7d098aab",7638:"220617ad",7647:"d4ad35d6",7652:"f9981847",7685:"77060089",7732:"50bd9c32",7761:"3cb73910",7997:"f3515646",8086:"87769d2f",8125:"8c0e0d34",8275:"ddf77fe3",8288:"f3f6b01a",8329:"97cd6a55",8331:"2e295208",8447:"f04f3f81",8609:"98ba0736",8644:"4a990e23",8784:"053ce0c1",8805:"6a237a3d",8863:"c9a1cc59",8929:"0ccf69ca",8934:"295c2a7e",8965:"8f7ab225",9079:"46b64f22",9105:"ab4d583a",9127:"d4fa7f95",9129:"77883456",9209:"9e5fb443",9210:"52da8752",9215:"0689ffe1",9245:"8a76fd6c",9343:"f23ef86e",9360:"fc5b5d0f",9403:"2faa65e2",9461:"e43098a6",9479:"044a8cf6",9537:"15a27139",9552:"e90a4704",9670:"b1bf333c",9721:"4d9a2a12",9757:"c3050766",9775:"5a98bf64",9885:"6e823a63",9933:"730d9791",9961:"f442d252",9965:"87b5bbd0",9973:"4ff9b528",9980:"e7429bdb"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="owncast-web:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","owncast-web:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={5354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(5354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunkowncast_web=self.webpackChunkowncast_web||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();