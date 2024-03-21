"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4675],{14675:function(t,e,n){n.d(e,{WU:function(){return O}});var r=n(27745),a=n(63583),i=n(59034),o=n(32841),u=n(22181),c=n(81853);function s(t,e){let n=(0,a.j)(),r=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,i=(0,o.Q)(t),u=i.getDay();return i.setDate(i.getDate()-((u<r?7:0)+u-r)),i.setHours(0,0,0,0),i}function l(t){return s(t,{weekStartsOn:1})}function d(t){let e=(0,o.Q)(t),n=e.getFullYear(),r=(0,u.L)(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);let a=l(r),i=(0,u.L)(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);let c=l(i);return e.getTime()>=a.getTime()?n+1:e.getTime()>=c.getTime()?n:n-1}function h(t,e){let n=(0,o.Q)(t),r=n.getFullYear(),i=(0,a.j)(),c=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,l=(0,u.L)(t,0);l.setFullYear(r+1,0,c),l.setHours(0,0,0,0);let d=s(l,e),h=(0,u.L)(t,0);h.setFullYear(r,0,c),h.setHours(0,0,0,0);let f=s(h,e);return n.getTime()>=d.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function f(t,e){let n=Math.abs(t).toString().padStart(e,"0");return(t<0?"-":"")+n}let g={y(t,e){let n=t.getFullYear(),r=n>0?n:1-n;return f("yy"===e?r%100:r,e.length)},M(t,e){let n=t.getMonth();return"M"===e?String(n+1):f(n+1,2)},d:(t,e)=>f(t.getDate(),e.length),a(t,e){let n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(t,e)=>f(t.getHours()%12||12,e.length),H:(t,e)=>f(t.getHours(),e.length),m:(t,e)=>f(t.getMinutes(),e.length),s:(t,e)=>f(t.getSeconds(),e.length),S(t,e){let n=e.length;return f(Math.trunc(t.getMilliseconds()*Math.pow(10,n-3)),e.length)}},w={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},m={G:function(t,e,n){let r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){let e=t.getFullYear();return n.ordinalNumber(e>0?e:1-e,{unit:"year"})}return g.y(t,e)},Y:function(t,e,n,r){let a=h(t,r),i=a>0?a:1-a;return"YY"===e?f(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):f(i,e.length)},R:function(t,e){return f(d(t),e.length)},u:function(t,e){return f(t.getFullYear(),e.length)},Q:function(t,e,n){let r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return f(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){let r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return f(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){let r=t.getMonth();switch(e){case"M":case"MM":return g.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){let r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return f(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){let i=function(t,e){let n=(0,o.Q)(t);return Math.round((+s(n,e)-+function(t,e){let n=(0,a.j)(),r=e?.firstWeekContainsDate??e?.locale?.options?.firstWeekContainsDate??n.firstWeekContainsDate??n.locale?.options?.firstWeekContainsDate??1,i=h(t,e),o=(0,u.L)(t,0);return o.setFullYear(i,0,r),o.setHours(0,0,0,0),s(o,e)}(n,e))/c.jE)+1}(t,r);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):f(i,e.length)},I:function(t,e,n){let r=function(t){let e=(0,o.Q)(t);return Math.round((+l(e)-+function(t){let e=d(t),n=(0,u.L)(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),l(n)}(e))/c.jE)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):f(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getDate(),{unit:"date"}):g.d(t,e)},D:function(t,e,n){let r=function(t){let e=(0,o.Q)(t);return(0,i.w)(e,function(t){let e=(0,o.Q)(t),n=(0,u.L)(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}(e))+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):f(r,e.length)},E:function(t,e,n){let r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){let a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return f(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){let a=t.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return f(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(t,e,n){let r=t.getDay(),a=0===r?7:r;switch(e){case"i":return String(a);case"ii":return f(a,e.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){let r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){let r;let a=t.getHours();switch(r=12===a?w.noon:0===a?w.midnight:a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){let r;let a=t.getHours();switch(r=a>=17?w.evening:a>=12?w.afternoon:a>=4?w.morning:w.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){let e=t.getHours()%12;return 0===e&&(e=12),n.ordinalNumber(e,{unit:"hour"})}return g.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getHours(),{unit:"hour"}):g.H(t,e)},K:function(t,e,n){let r=t.getHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):f(r,e.length)},k:function(t,e,n){let r=t.getHours();return(0===r&&(r=24),"ko"===e)?n.ordinalNumber(r,{unit:"hour"}):f(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):g.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getSeconds(),{unit:"second"}):g.s(t,e)},S:function(t,e){return g.S(t,e)},X:function(t,e,n){let r=t.getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return y(r);case"XXXX":case"XX":return p(r);default:return p(r,":")}},x:function(t,e,n){let r=t.getTimezoneOffset();switch(e){case"x":return y(r);case"xxxx":case"xx":return p(r);default:return p(r,":")}},O:function(t,e,n){let r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+b(r,":");default:return"GMT"+p(r,":")}},z:function(t,e,n){let r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+b(r,":");default:return"GMT"+p(r,":")}},t:function(t,e,n){return f(Math.trunc(t.getTime()/1e3),e.length)},T:function(t,e,n){return f(t.getTime(),e.length)}};function b(t,e=""){let n=t>0?"-":"+",r=Math.abs(t),a=Math.trunc(r/60),i=r%60;return 0===i?n+String(a):n+String(a)+e+f(i,2)}function y(t,e){return t%60==0?(t>0?"-":"+")+f(Math.abs(t)/60,2):p(t,e)}function p(t,e=""){let n=Math.abs(t);return(t>0?"-":"+")+f(Math.trunc(n/60),2)+e+f(n%60,2)}let x=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},k=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},M={p:k,P:(t,e)=>{let n;let r=t.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return x(t,e);switch(a){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",x(a,e)).replace("{{time}}",k(i,e))}},D=/^D+$/,T=/^Y+$/,Y=["D","DD","YY","YYYY"],S=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,P=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,v=/^'([^]*?)'?$/,E=/''/g,L=/[a-zA-Z]/;function O(t,e,n){let i=(0,a.j)(),u=n?.locale??i.locale??r._,c=n?.firstWeekContainsDate??n?.locale?.options?.firstWeekContainsDate??i.firstWeekContainsDate??i.locale?.options?.firstWeekContainsDate??1,s=n?.weekStartsOn??n?.locale?.options?.weekStartsOn??i.weekStartsOn??i.locale?.options?.weekStartsOn??0,l=(0,o.Q)(t);if(!((l instanceof Date||"object"==typeof l&&"[object Date]"===Object.prototype.toString.call(l)||"number"==typeof l)&&!isNaN(Number((0,o.Q)(l)))))throw RangeError("Invalid time value");let d=e.match(P).map(t=>{let e=t[0];return"p"===e||"P"===e?(0,M[e])(t,u.formatLong):t}).join("").match(S).map(t=>{if("''"===t)return{isToken:!1,value:"'"};let e=t[0];if("'"===e)return{isToken:!1,value:function(t){let e=t.match(v);return e?e[1].replace(E,"'"):t}(t)};if(m[e])return{isToken:!0,value:t};if(e.match(L))throw RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return{isToken:!1,value:t}});u.localize.preprocessor&&(d=u.localize.preprocessor(l,d));let h={firstWeekContainsDate:c,weekStartsOn:s,locale:u};return d.map(r=>{if(!r.isToken)return r.value;let a=r.value;return(!n?.useAdditionalWeekYearTokens&&T.test(a)||!n?.useAdditionalDayOfYearTokens&&D.test(a))&&function(t,e,n){let r=function(t,e,n){let r="Y"===t[0]?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(t,e,n);if(console.warn(r),Y.includes(t))throw RangeError(r)}(a,e,String(t)),(0,m[a[0]])(l,a,u.localize,h)}).join("")}}}]);