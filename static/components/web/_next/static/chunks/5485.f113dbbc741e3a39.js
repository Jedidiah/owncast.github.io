(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5485],{25330:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"}},57096:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"}},71961:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=_interopRequireDefault(n(79686));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=r,e.exports=r},20054:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=_interopRequireDefault(n(32615));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=r,e.exports=r},79686:function(e,t,n){"use strict";var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(42122)),o=_interopRequireWildcard(n(67294)),l=r(n(25330)),u=r(n(92074));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var CheckOutlined=function(e,t){return o.createElement(u.default,(0,i.default)((0,i.default)({},e),{},{ref:t,icon:l.default}))};CheckOutlined.displayName="CheckOutlined";var d=o.forwardRef(CheckOutlined);t.default=d},32615:function(e,t,n){"use strict";var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(42122)),o=_interopRequireWildcard(n(67294)),l=r(n(57096)),u=r(n(92074));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(r,o,l):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var PlusOutlined=function(e,t){return o.createElement(u.default,(0,i.default)((0,i.default)({},e),{},{ref:t,icon:l.default}))};PlusOutlined.displayName="PlusOutlined";var d=o.forwardRef(PlusOutlined);t.default=d},89552:function(e,t,n){"use strict";var r=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(10434)),o=a(n(38416)),l=a(n(27424)),u=a(n(94184)),d=a(n(23279)),s=a(n(18475)),c=r(n(67294)),f=n(31929),p=n(47419),h=n(66764),__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};(0,h.tuple)("small","default","large");var v=null;function renderIndicator(e,t){var n=t.indicator,r="".concat(e,"-dot");return null===n?null:(0,p.isValidElement)(n)?(0,p.cloneElement)(n,{className:(0,u.default)(n.props.className,r)}):(0,p.isValidElement)(v)?(0,p.cloneElement)(v,{className:(0,u.default)(v.props.className,r)}):c.createElement("span",{className:(0,u.default)(r,"".concat(e,"-dot-spin"))},c.createElement("i",{className:"".concat(e,"-dot-item")}),c.createElement("i",{className:"".concat(e,"-dot-item")}),c.createElement("i",{className:"".concat(e,"-dot-item")}),c.createElement("i",{className:"".concat(e,"-dot-item")}))}function shouldDelay(e,t){return!!e&&!!t&&!isNaN(Number(t))}var Spin=function(e){var t=e.spinPrefixCls,n=e.spinning,r=void 0===n||n,a=e.delay,p=e.className,h=e.size,v=void 0===h?"default":h,m=e.tip,y=e.wrapperClassName,b=e.style,g=e.children,j=__rest(e,["spinPrefixCls","spinning","delay","className","size","tip","wrapperClassName","style","children"]),x=c.useState(function(){return r&&!shouldDelay(r,a)}),O=(0,l.default)(x,2),_=O[0],w=O[1];return c.useEffect(function(){var e=(0,d.default)(function(){w(r)},a);return e(),function(){var t;null===(t=null==e?void 0:e.cancel)||void 0===t||t.call(e)}},[a,r]),c.createElement(f.ConfigConsumer,null,function(n){var r=n.direction,a=(0,u.default)(t,(0,o.default)((0,o.default)((0,o.default)((0,o.default)((0,o.default)({},"".concat(t,"-sm"),"small"===v),"".concat(t,"-lg"),"large"===v),"".concat(t,"-spinning"),_),"".concat(t,"-show-text"),!!m),"".concat(t,"-rtl"),"rtl"===r),p),l=(0,s.default)(j,["indicator","prefixCls"]),d=c.createElement("div",(0,i.default)({},l,{style:b,className:a,"aria-live":"polite","aria-busy":_}),renderIndicator(t,e),m?c.createElement("div",{className:"".concat(t,"-text")},m):null);if(void 0!==g){var f=(0,u.default)("".concat(t,"-container"),(0,o.default)({},"".concat(t,"-blur"),_));return c.createElement("div",(0,i.default)({},l,{className:(0,u.default)("".concat(t,"-nested-loading"),y)}),_&&c.createElement("div",{key:"loading"},d),c.createElement("div",{className:f,key:"container"},g))}return d})},SpinFC=function(e){var t=e.prefixCls,n=(0,c.useContext(f.ConfigContext).getPrefixCls)("spin",t),r=(0,i.default)((0,i.default)({},e),{spinPrefixCls:n});return c.createElement(Spin,(0,i.default)({},r))};SpinFC.setDefaultIndicator=function(e){v=e},t.default=SpinFC},42698:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=function(){return null}},1286:function(e,t,n){"use strict";var r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=useAnimateConfig;var a=r(n(18698)),i=r(n(10434)),o=n(53683),l={motionAppear:!1,motionEnter:!0,motionLeave:!0};function useAnimateConfig(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{inkBar:!0,tabPane:!1};return(t=!1===n?{inkBar:!1,tabPane:!1}:!0===n?{inkBar:!0,tabPane:!0}:(0,i.default)({inkBar:!0},"object"===(0,a.default)(n)?n:{})).tabPane&&(t.tabPaneMotion=(0,i.default)((0,i.default)({},l),{motionName:(0,o.getTransitionName)(e,"switch")})),t}},47397:function(e,t,n){"use strict";var r=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=useLegacyItems;var i=a(n(10434)),o=r(n(67294)),l=a(n(45598));a(n(13594));var __rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function filter(e){return e.filter(function(e){return e})}function useLegacyItems(e,t){return e||filter((0,l.default)(t).map(function(e){if(o.isValidElement(e)){var t=e.key,n=e.props||{},r=n.tab,a=__rest(n,["tab"]);return(0,i.default)((0,i.default)({key:String(t)},a),{label:r})}return null}))}},20838:function(e,t,n){"use strict";var r=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(38416)),o=a(n(10434)),l=a(n(40753)),u=a(n(26937)),d=a(n(20054)),s=a(n(94184)),c=a(n(93068)),f=r(n(67294)),p=n(31929),h=a(n(3236));a(n(13594));var v=a(n(1286)),m=a(n(47397)),y=a(n(42698)),__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};function Tabs(e){var t,n=e.type,r=e.className,a=e.size,y=e.onEdit,b=e.hideAdd,g=e.centered,j=e.addIcon,x=e.children,O=e.items,_=e.animated,w=__rest(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),P=w.prefixCls,E=w.moreIcon,C=void 0===E?f.createElement(u.default,null):E,k=f.useContext(p.ConfigContext),M=k.getPrefixCls,N=k.direction,A=k.getPopupContainer,I=M("tabs",P);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,r=t.event;null==y||y("add"===e?r:n,e)},removeIcon:f.createElement(l.default,null),addIcon:j||f.createElement(d.default,null),showAdd:!0!==b});var S=M(),T=(0,m.default)(O,x),R=(0,v.default)(I,_);return f.createElement(h.default.Consumer,null,function(e){var l=void 0!==a?a:e;return f.createElement(c.default,(0,o.default)({direction:N,getPopupContainer:A,moreTransitionName:"".concat(S,"-slide-up")},w,{items:T,className:(0,s.default)((0,i.default)((0,i.default)((0,i.default)((0,i.default)({},"".concat(I,"-").concat(l),l),"".concat(I,"-card"),["card","editable-card"].includes(n)),"".concat(I,"-editable-card"),"editable-card"===n),"".concat(I,"-centered"),g),r),editable:t,moreIcon:C,prefixCls:I,animated:R}))})}Tabs.TabPane=y.default,t.default=Tabs},89277:function(e,t,n){"use strict";var r=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(10434));a(n(18698));var o=r(n(67294));a(n(13594));var l=a(n(28460)),__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n},u=o.forwardRef(function(e,t){var n=e.ellipsis,r=e.rel,a=__rest(e,["ellipsis","rel"]),u=(0,i.default)((0,i.default)({},a),{rel:void 0===r&&"_blank"===a.target?"noopener noreferrer":r});return delete u.navigate,o.createElement(l.default,(0,i.default)({},u,{ref:t,ellipsis:!!n,component:"a"}))});t.default=u},21987:function(e,t,n){"use strict";var r=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(10434)),o=r(n(67294)),l=a(n(28460)),u=o.forwardRef(function(e,t){return o.createElement(l.default,(0,i.default)({ref:t},e,{component:"div"}))});t.default=u},15394:function(e,t,n){"use strict";var r=n(75263).default,a=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(10434)),o=a(n(18698)),l=a(n(18475)),u=r(n(67294));a(n(13594));var d=a(n(28460)),__rest=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n};t.default=u.forwardRef(function(e,t){var n=e.ellipsis,r=__rest(e,["ellipsis"]),a=u.useMemo(function(){return n&&"object"===(0,o.default)(n)?(0,l.default)(n,["expandable","rows"]):n},[n]);return u.createElement(d.default,(0,i.default)({ref:t},r,{ellipsis:a,component:"span"}))})},53740:function(e,t,n){"use strict";var r=n(64836).default;t.default=void 0;var a=r(n(89277)),i=r(n(21987)),o=r(n(15394)),l=r(n(34528)),u=r(n(89652)).default;u.Text=o.default,u.Link=a.default,u.Title=l.default,u.Paragraph=i.default,t.default=u},27561:function(e,t,n){var r=n(67990),a=/^\s+/;function baseTrim(e){return e?e.slice(0,r(e)+1).replace(a,""):e}e.exports=baseTrim},67990:function(e){var t=/\s/;function trimmedEndIndex(e){for(var n=e.length;n--&&t.test(e.charAt(n)););return n}e.exports=trimmedEndIndex},23279:function(e,t,n){var r=n(13218),a=n(7771),i=n(14841),o=Math.max,l=Math.min;function debounce(e,t,n){var u,d,s,c,f,p,h=0,v=!1,m=!1,y=!0;if("function"!=typeof e)throw TypeError("Expected a function");function invokeFunc(t){var n=u,r=d;return u=d=void 0,h=t,c=e.apply(r,n)}function leadingEdge(e){return h=e,f=setTimeout(timerExpired,t),v?invokeFunc(e):c}function remainingWait(e){var n=e-p,r=e-h,a=t-n;return m?l(a,s-r):a}function shouldInvoke(e){var n=e-p,r=e-h;return void 0===p||n>=t||n<0||m&&r>=s}function timerExpired(){var e=a();if(shouldInvoke(e))return trailingEdge(e);f=setTimeout(timerExpired,remainingWait(e))}function trailingEdge(e){return(f=void 0,y&&u)?invokeFunc(e):(u=d=void 0,c)}function cancel(){void 0!==f&&clearTimeout(f),h=0,u=p=d=f=void 0}function flush(){return void 0===f?c:trailingEdge(a())}function debounced(){var e=a(),n=shouldInvoke(e);if(u=arguments,d=this,p=e,n){if(void 0===f)return leadingEdge(p);if(m)return clearTimeout(f),f=setTimeout(timerExpired,t),invokeFunc(p)}return void 0===f&&(f=setTimeout(timerExpired,t)),c}return t=i(t)||0,r(n)&&(v=!!n.leading,s=(m="maxWait"in n)?o(i(n.maxWait)||0,t):s,y="trailing"in n?!!n.trailing:y),debounced.cancel=cancel,debounced.flush=flush,debounced}e.exports=debounce},13218:function(e){function isObject(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=isObject},7771:function(e,t,n){var r=n(55639);e.exports=function(){return r.Date.now()}},14841:function(e,t,n){var r=n(27561),a=n(13218),i=n(33448),o=0/0,l=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,d=/^0o[0-7]+$/i,s=parseInt;function toNumber(e){if("number"==typeof e)return e;if(i(e))return o;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=u.test(e);return n||d.test(e)?s(e.slice(2),n?2:8):l.test(e)?o:+e}e.exports=toNumber},36531:function(e,t,n){"use strict";n.r(t),n.d(t,{AuthModal:function(){return AuthModal}});var r=n(85893),a=n(20838),i=n(4480),o=n(4511),l=n(4863),u=n(51024),d=n(74048),s=n(89552),c=n(68469),f=n(53740),p=n(65400),h=n(5152),v=n.n(h),m=n(67294),y=n(89105);let{Panel:b}=c.default,{Link:g}=f.default,j=v()(()=>Promise.resolve().then(n.t.bind(n,67996,23)),{loadableGenerated:{webpack:()=>[67996]},ssr:!1}),IndieAuthModal=e=>{let{authenticated:t,displayName:n,accessToken:a}=e,[i,o]=(0,m.useState)(null),[f,h]=(0,m.useState)(!1),[v,x]=(0,m.useState)(!1),[O,_]=(0,m.useState)(""),w=t?(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,r.jsxs)("span",{children:["Use your own domain to authenticate ",(0,r.jsx)("span",{children:n})," or login as a previously"," ","authenticated chat user using IndieAuth."]}),P=i;P&&P.includes("url does not support indieauth")&&(P="The provided URL is either invalid or does not support IndieAuth.");let validate=e=>{if(!(0,y.jv)(e)||!e.includes(".")){x(!1);return}x(!0)},submitButtonPressed=async()=>{if(v){h(!0);try{let e=await fetch("/api/auth/indieauth?accessToken=".concat(a),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({authHost:"https://".concat(O)})}),t=await e.json();if(t.message){o(t.message),h(!1);return}if(!t.redirect){o("Auth provider did not return a redirect URL."),h(!1);return}if(t.redirect){let{redirect:e}=t;window.location=e}}catch(e){o(e.message)}h(!1)}};return(0,r.jsx)(s.default,{spinning:f,children:(0,r.jsxs)(d.default,{direction:"vertical",children:[w,P&&(0,r.jsx)(l.default,{message:"Error",description:P,type:"error",showIcon:!0}),(0,r.jsx)("div",{children:"Your domain"}),(0,r.jsx)(u.default.Search,{addonBefore:"https://",onInput:e=>{let t=e.nativeEvent.data;if(":"===t)return;_(e.target.value);let n="https://".concat(e.target.value);validate(n)},type:"url",value:O,placeholder:"yoursite.com",status:!v&&O.length>0?"error":void 0,onSearch:submitButtonPressed,enterButton:(0,r.jsx)(p.default,{type:v?"primary":"default",disabled:!v||0===O.length,children:(0,r.jsx)(j,{})})}),(0,r.jsx)(c.default,{ghost:!0,children:(0,r.jsxs)(b,{header:"Learn more about using IndieAuth to authenticate with chat.",children:[(0,r.jsx)("p",{children:"IndieAuth allows for a completely independent and decentralized way of identifying yourself using your own domain."}),(0,r.jsxs)("p",{children:["If you run an Owncast instance, you can use that domain here. Otherwise,"," ",(0,r.jsx)(g,{href:"https://indieauth.net/#providers",children:"learn more about how you can support IndieAuth"}),"."]})]},"header")}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};var x=n(38711),O=n.n(x);let{Panel:_}=c.default,w=v()(()=>Promise.resolve().then(n.t.bind(n,67996,23)),{loadableGenerated:{webpack:()=>[67996]},ssr:!1}),FediAuthModal=e=>{let{authenticated:t,displayName:n,accessToken:a}=e,[i,o]=(0,m.useState)(null),[f,h]=(0,m.useState)(!1),[v,b]=(0,m.useState)(!1),[g,j]=(0,m.useState)(""),[x,P]=(0,m.useState)(""),[E,C]=(0,m.useState)(!1),k=t?(0,r.jsxs)("span",{children:[(0,r.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,r.jsxs)("span",{children:["Receive a direct message on the Fediverse to link your account to"," ",(0,r.jsx)("strong",{children:n}),", or login as a previously linked chat user."]}),M=i;M&&M.includes("url does not support indieauth")&&(M="The provided URL is either invalid or does not support IndieAuth.");let validate=e=>{b((0,y.ME)(e))},makeRequest=async(e,t)=>{let n=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}),r=await n.json();r.message&&(o(r.message),h(!1))},submitCodePressed=async()=>{h(!0);try{await makeRequest("/api/auth/fediverse/verify?accessToken=".concat(a),{code:x}),window.location.href="/"}catch(e){console.error(e),o(e)}h(!1)},submitAccountPressed=async()=>{if(!v)return;h(!0),o(null);let e=g.replace(/^@+/,"");try{await makeRequest("/api/auth/fediverse?accessToken=".concat(a),{account:e}),C(!0)}catch(e){console.error(e),o(e)}h(!1)},N=(0,r.jsxs)("div",{children:["Paste in the code that was sent to your Fediverse account. If you did not receive a code, make sure you can accept direct messages.",(0,r.jsxs)("div",{className:O().codeInputContainer,children:[(0,r.jsx)(u.default,{value:x,onChange:e=>P(e.target.value),className:O().codeInput,placeholder:"123456",maxLength:6}),(0,r.jsx)(p.default,{type:"primary",onClick:submitCodePressed,disabled:x.length<6,className:O().submitButton,children:"Verify Code"})]})]}),A=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:"Your Fediverse Account"}),(0,r.jsx)(u.default.Search,{addonBefore:"@",onInput:e=>{j(e.target.value),validate(e.target.value)},value:g,placeholder:"youraccount@yourserver.com",status:!v&&g.length>0?"error":void 0,onSearch:submitAccountPressed,enterButton:(0,r.jsx)(p.default,{type:v?"primary":"default",disabled:!v||0===g.length,children:(0,r.jsx)(w,{})})})]});return(0,r.jsx)(s.default,{spinning:f,children:(0,r.jsxs)(d.default,{direction:"vertical",children:[k,M&&(0,r.jsx)(l.default,{message:"Error",description:M,type:"error",showIcon:!0}),E?N:A,(0,r.jsx)(c.default,{ghost:!0,children:(0,r.jsx)(_,{header:"Learn more about using the Fediverse to authenticate with chat.",children:(0,r.jsx)("p",{children:"You can link your chat identity with your Fediverse identity. Next time you want to use this chat identity you can again go through the Fediverse authentication."})},"header")}),(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};var P=n(49524),E=n.n(P),C=n(73580),k=n(50057);let AuthModal=e=>{let{forceTabs:t}=e,n=(0,i.sJ)(C.L4),l=(0,i.sJ)(C.FI),u=(0,i.sJ)(C.db),d=(0,i.sJ)(C.g1);if(!u)return null;let{displayName:s}=u,{federation:c}=d,{enabled:f}=c,p=(0,r.jsxs)("span",{className:E().tabContent,children:[(0,r.jsx)("img",{className:E().icon,src:"/img/indieauth.png",alt:"IndieAuth"}),"IndieAuth"]}),h=(0,r.jsx)(IndieAuthModal,{authenticated:n,displayName:s,accessToken:l}),v=(0,r.jsxs)("span",{className:E().tabContent,children:[(0,r.jsx)("img",{className:E().icon,src:"/img/fediverse-black.png",alt:"Fediverse auth"}),"FediAuth"]}),m=(0,r.jsx)(FediAuthModal,{authenticated:n,displayName:s,accessToken:l});return(0,r.jsx)(o.SV,{fallbackRender:e=>{let{error:t,resetErrorBoundary:n}=e;return(0,r.jsx)(k.A,{componentName:"AuthModal",message:t.message,retryFunction:n})},children:(0,r.jsx)("div",{children:(0,r.jsx)(a.default,{defaultActiveKey:"1",items:[{label:p,key:"1",children:h},{label:v,key:"2",children:m}],type:"card",size:"small",renderTabBar:f||t?null:()=>null})})})}},89105:function(e,t,n){"use strict";n.d(t,{Kf:function(){return isValidAccount},ME:function(){return isValidFediverseAccount},ax:function(){return r},bu:function(){return isValidMatrixAccount},jv:function(){return isValidUrl}});let r="https?://.*";function isValidUrl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["http:","https:"];try{let n=new URL(e);if(""===n.protocol||""===n.hostname||!t.includes(n.protocol))return!1}catch(e){return!1}return!0}function isValidAccount(e,t){e.startsWith("@")&&(e=e.slice(1));let n=e.split(/:|@/),[r,a,i]=n;return r===t&&3===n.length&&!!r&&!!a&&!!i}function isValidMatrixAccount(e){e.startsWith("matrix:")&&(e=e.slice(7)),e.startsWith("@")&&(e=e.slice(1));let t=e.split(":"),[n,r]=t;return 2===t.length&&!!n&&!!r}function isValidFediverseAccount(e){let t=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}},49524:function(e){e.exports={tabContent:"AuthModal_tabContent__sQX_a",icon:"AuthModal_icon__624lg"}},38711:function(e){e.exports={codeInputContainer:"FediAuthModal_codeInputContainer__LheQq",codeInput:"FediAuthModal_codeInput__TbAom",submitButton:"FediAuthModal_submitButton__n9SbC"}},96774:function(e){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var d=i[u];if(!l(d))return!1;var s=e[d],c=t[d];if(!1===(a=n?n.call(r,s,c,d):void 0)||void 0===a&&s!==c)return!1}return!0}}}]);