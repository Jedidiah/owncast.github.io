(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9522],{55583:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/chat/users",function(){return n(83952)}])},83952:function(e,t,n){"use strict";n.r(t),n.d(t,{FETCH_INTERVAL:function(){return C},default:function(){return v}});var a=n(85893),r=n(67294),s=n(32839),l=n(84443),d=n(6925),o=n(99706),c=n(43795),i=n(43796),u=n(45938),h=n(5152),m=n.n(h),g=n(64096),p=n(65021),y=n(9507);let x=m()(()=>Promise.all([n.e(7298),n.e(3145)]).then(n.t.bind(n,23145,23)),{loadableGenerated:{webpack:()=>[23145]},ssr:!1}),f=e=>{let{data:t}=e,n=[{title:"Display Name",key:"username",render:e=>{let{user:t,connectedAt:n,messageCount:r,userAgent:s}=e;return(0,a.jsx)(g.Z,{user:t,connectionInfo:{connectedAt:n,messageCount:r,userAgent:s},children:(0,a.jsx)("span",{className:"display-name",children:t.displayName})})},sorter:(e,t)=>t.user.displayName.localeCompare(e.user.displayName),filterIcon:(0,a.jsx)(x,{}),filterDropdown:e=>{let{setSelectedKeys:t,selectedKeys:n,confirm:r}=e;return 0===n.length?null:(0,a.jsx)("div",{style:{padding:8},children:(0,a.jsx)(c.default,{placeholder:"Search display names...",value:n[0].toString(),onChange:e=>{t(e.target.value?[e.target.value]:[]),r({closeDropdown:!1})}})})},onFilter:(e,t)=>t.user.displayName.includes(e),sortDirections:["descend","ascend"]},{title:"Messages sent",dataIndex:"messageCount",key:"messageCount",className:"number-col",width:"12%",sorter:(e,t)=>e.messageCount-t.messageCount,sortDirections:["descend","ascend"],render:e=>(0,a.jsx)("div",{style:{textAlign:"center"},children:e})},{title:"Connected Time",dataIndex:"connectedAt",key:"connectedAt",defaultSortOrder:"ascend",render:e=>(0,u.Z)(new Date(e)),sorter:(e,t)=>new Date(t.connectedAt).getTime()-new Date(e.connectedAt).getTime(),sortDirections:["descend","ascend"]},{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:e=>(0,y.AB)(e)},{title:"Location",dataIndex:"geo",key:"geo",render:e=>e?"".concat(e.regionName,", ").concat(e.countryCode):"-"},{title:"",key:"block",className:"actions-col",render:(e,t)=>(0,a.jsx)(p.e,{user:t.user,isEnabled:!t.user.disabledAt})}];return(0,a.jsx)(i.Z,{className:"table-container",pagination:{hideOnSinglePage:!0},columns:n,dataSource:t,size:"small",rowKey:"id"})};var w=n(90622),b=n(58091);let k=m()(()=>Promise.all([n.e(7298),n.e(2550)]).then(n.t.bind(n,82550,23)),{loadableGenerated:{webpack:()=>[82550]},ssr:!1});async function j(e){try{await (0,d.rQ)(d.RB,{data:{value:e},method:"POST",auth:!0})}catch(e){console.error(e)}}let A=e=>{let{data:t}=e,n=[{title:"IP Address",dataIndex:"ipAddress",key:"ipAddress"},{title:"Reason",dataIndex:"notes",key:"notes"},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:e=>(0,b.Z)(new Date(e),"MMM d H:mma"),sorter:(e,t)=>new Date(e.createdAt).getTime()-new Date(t.createdAt).getTime(),sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:(e,t)=>(0,a.jsx)(w.Z,{title:"Remove IP Address Ban",onClick:()=>j(t.ipAddress),icon:(0,a.jsx)(k,{twoToneColor:"#ff4d4f"}),className:"block-user-button"})}];return(0,a.jsx)(i.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:n,dataSource:t,size:"large",rowKey:"ipAddress"})};var N=n(695);let C=1e4;function v(){let{online:e}=(0,r.useContext)(l.a)||{},[t,n]=(0,r.useState)([]),[c,i]=(0,r.useState)([]),[u,h]=(0,r.useState)([]),[m,g]=(0,r.useState)([]),p=async()=>{try{let e=await (0,d.rQ)(d.qk);n(e)}catch(e){console.log("==== error",e)}try{let e=await (0,d.rQ)(d.Kp);h(e)}catch(e){console.log("==== error",e)}try{let e=await (0,d.rQ)(d.GC);g(e)}catch(e){console.error("error fetching moderators",e)}try{let e=await (0,d.rQ)(d.Bu);i(e)}catch(e){console.error("error fetching banned ips",e)}};(0,r.useEffect)(()=>{let e=null;return p(),e=setInterval(p,C),()=>{clearInterval(e)}},[e]);let y=e?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f,{data:u}),(0,a.jsxs)("p",{className:"description",children:["Visit the"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/viewers/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"documentation"})," ","to configure additional details about your viewers."]})]}):(0,a.jsx)("p",{className:"description",children:"When a stream is active and chat is enabled, connected chat clients will be displayed here."}),x=(0,a.jsxs)("span",{children:["Connected ",e?"(".concat(u.length,")"):"(offline)"]}),w=(0,a.jsxs)("span",{children:["Banned Users (",t.length,")"]}),b=(0,a.jsx)(o.K,{data:t}),k=(0,a.jsxs)("span",{children:["IP Bans (",c.length,")"]}),j=(0,a.jsx)(A,{data:c}),N=(0,a.jsxs)("span",{children:["Moderators (",m.length,")"]}),v=(0,a.jsx)(o.K,{data:m});return(0,a.jsx)(s.Z,{defaultActiveKey:"1",items:[{label:x,key:"1",children:y},{label:w,key:"2",children:b},{label:k,key:"3",children:j},{label:N,key:"4",children:v}]})}v.getLayout=function(e){return(0,a.jsx)(N.l,{page:e})}}},function(e){e.O(0,[6410,8768,5414,6906,7406,4716,2862,5063,7271,811,5386,9974,8625,3796,2839,773,5938,695,9686,2888,9774,179],function(){return e(e.s=55583)}),_N_E=e.O()}]);