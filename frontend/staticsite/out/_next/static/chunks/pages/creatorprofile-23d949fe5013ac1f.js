(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[893],{44020:function(e){"use strict";var r="%[a-f0-9]{2}",t=RegExp(r,"gi"),n=RegExp("("+r+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(r){return function(e){for(var r={"%FE%FF":"��","%FF%FE":"��"},i=n.exec(e);i;){try{r[i[0]]=decodeURIComponent(i[0])}catch(a){var o=function(e){try{return decodeURIComponent(e)}catch(i){for(var r=e.match(t),n=1;n<r.length;n++)r=(e=(function e(r,t){try{return decodeURIComponent(r.join(""))}catch(n){}if(1===r.length)return r;t=t||1;var i=r.slice(0,t),o=r.slice(t);return Array.prototype.concat.call([],e(i),e(o))})(r,n).join("")).match(t);return e}}(i[0]);o!==i[0]&&(r[i[0]]=o)}i=n.exec(e)}r["%C2"]="�";for(var s=Object.keys(r),l=0;l<s.length;l++){var c=s[l];e=e.replace(RegExp(c,"g"),r[c])}return e}(e)}}},92806:function(e){"use strict";e.exports=function(e,r){for(var t={},n=Object.keys(e),i=Array.isArray(r),o=0;o<n.length;o++){var a=n[o],s=e[a];(i?-1!==r.indexOf(a):r(a,s,e))&&(t[a]=s)}return t}},16034:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creatorprofile",function(){return t(67788)}])},67788:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return k}});var n=t(85893),i=t(52135),o=t(67294),a=t(38196),s=t(11163),l=t(9008),c=t.n(l),u=t(17563),d=t(40103),f=t(99030),p=t(31763),y=t(86554),m=t(74287),g=t(79934),h=t(85476),x=t(81760),j=t(98378),b=t(97520);let v={root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:3,border:0,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white"},copyContainer:{border:"1px solid blue",background:"rgb(0,0,0,0.7)"},title:{textAlign:"center",color:"white",fontStyle:"italic"}};function k(){var e,r;let t=(0,s.useRouter)(),{address:l}=t.query;if(!l){let k=t.asPath;l=u.parseUrl(k).query.address}let[w,S]=(0,o.useState)(""),[F,E]=(0,o.useState)(!1),N=(null===(e=(0,b.e)())||void 0===e?void 0:e.width)<(null===(r=(0,b.e)())||void 0===r?void 0:r.height);(0,o.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await i.Z.refresh()),E(i.Z.validateCurrentUserRefreshToken()&&i.Z.validateCurrentUserAccessToken())}()},[]),(0,o.useEffect)(()=>{S(i.Z.getUsername())},[F]);let[C,O]=(0,o.useState)({username:"",fname:"",lname:"",bio:"",iscreator:!0,displaypicture:"",twitterhandle:"",instagram:"",youtube:"",website:""});return(0,o.useEffect)(()=>{(async function(){if(""!=l){let e=await (0,a.is)(null==l?void 0:l.toString());O(e[0])}})()},[l]),(0,n.jsxs)("div",{children:[(0,n.jsxs)(c(),{children:[(0,n.jsx)("title",{children:C?(null==C?void 0:C.fname)+" "+(null==C?void 0:C.lname):"Profile"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("div",{children:F&&w&&C.fname?(0,n.jsxs)("div",{className:N?"blueTextBlackBackgroundMobile":"blueTextBlackBackground",style:{fontSize:25},children:[(0,n.jsx)(f.Z,{creator:C}),(0,n.jsxs)("div",{style:{display:"flex"},children:[(0,n.jsx)("div",{className:"creatorImageDiv",children:(0,n.jsx)(y.Z,{creator:C.username,height:125,width:125})}),N?(0,n.jsx)("div",{className:"description",children:(0,n.jsx)("div",{style:{minWidth:"25vw",justifyContent:"center"}})}):(0,n.jsx)("div",{className:"description",children:(0,n.jsxs)("div",{style:{minWidth:"25vw",justifyContent:"center"},children:[(0,n.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold",color:"white"},children:C.username}),(0,n.jsx)("div",{style:{fontSize:"16px",color:"white"},children:C.fname+" "+C.lname}),""!=C.bio?(0,n.jsx)("div",{style:{fontSize:"16px",color:"white"},children:C.bio}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)(p.Z,{creator:C})]})}),(0,n.jsx)(x.Z,{modalButtonText:(0,n.jsx)(g.Z,{title:"Share Kigzag",children:(0,n.jsx)(m.Z,{className:"pointer",style:{fontSize:"30px",color:"lightgrey"}})}),modalBody:(0,n.jsx)(h.Z,{title:"Share "+C.fname+"'s Kigzag",url:"crezalo.com/@"+C.username,socialTypes:["whatsapp","telegram","twitter","linkedin","facebook","reddit"],onSocialButtonClicked:e=>console.log(e),style:v}),formatting:!0})]}),N?(0,n.jsx)("div",{className:"descriptionMobile",children:(0,n.jsxs)("div",{style:{minWidth:"25vw",justifyContent:"center"},children:[(0,n.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold",color:"white"},children:C.username}),(0,n.jsx)("div",{style:{fontSize:"16px",color:"white"},children:C.fname+" "+C.lname}),""!=C.bio?(0,n.jsx)("div",{style:{fontSize:"16px",color:"white"},children:C.bio}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)(p.Z,{creator:C}),(0,n.jsx)("br",{})]})}):(0,n.jsx)(n.Fragment,{}),N?(0,n.jsx)(j.Z,{onCreatorProfile:!0,creator:C.username,isCreator:!0}):(0,n.jsx)(d.Z,{onCreatorProfile:!0,creator:C.username,isCreator:!0})]}):(0,n.jsx)(n.Fragment,{})})]})}},17563:function(e,r,t){"use strict";let n=t(70610),i=t(44020),o=t(80500),a=t(92806),s=e=>null==e,l=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function u(e,r){return r.encode?r.strict?n(e):encodeURIComponent(e):e}function d(e,r){return r.decode?i(e):e}function f(e){let r=e.indexOf("#");return -1!==r&&(e=e.slice(0,r)),e}function p(e){e=f(e);let r=e.indexOf("?");return -1===r?"":e.slice(r+1)}function y(e,r){return r.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):r.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function m(e,r){c((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);let t=function(e){let r;switch(e.arrayFormat){case"index":return(e,t,n)=>{if(r=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!r){n[e]=t;return}void 0===n[e]&&(n[e]={}),n[e][r[1]]=t};case"bracket":return(e,t,n)=>{if(r=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!r){n[e]=t;return}if(void 0===n[e]){n[e]=[t];return}n[e]=[].concat(n[e],t)};case"colon-list-separator":return(e,t,n)=>{if(r=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!r){n[e]=t;return}if(void 0===n[e]){n[e]=[t];return}n[e]=[].concat(n[e],t)};case"comma":case"separator":return(r,t,n)=>{let i="string"==typeof t&&t.includes(e.arrayFormatSeparator),o="string"==typeof t&&!i&&d(t,e).includes(e.arrayFormatSeparator);t=o?d(t,e):t;let a=i||o?t.split(e.arrayFormatSeparator).map(r=>d(r,e)):null===t?t:d(t,e);n[r]=a};case"bracket-separator":return(r,t,n)=>{let i=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),!i){n[r]=t?d(t,e):t;return}let o=null===t?[]:t.split(e.arrayFormatSeparator).map(r=>d(r,e));if(void 0===n[r]){n[r]=o;return}n[r]=[].concat(n[r],o)};default:return(e,r,t)=>{if(void 0===t[e]){t[e]=r;return}t[e]=[].concat(t[e],r)}}}(r),n=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return n;for(let i of e.split("&")){if(""===i)continue;let[a,s]=o(r.decode?i.replace(/\+/g," "):i,"=");s=void 0===s?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?s:d(s,r),t(d(a,r),s,n)}for(let l of Object.keys(n)){let u=n[l];if("object"==typeof u&&null!==u)for(let f of Object.keys(u))u[f]=y(u[f],r);else n[l]=y(u,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((e,r)=>{let t=n[r];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[r]=function e(r){return Array.isArray(r)?r.sort():"object"==typeof r?e(Object.keys(r)).sort((e,r)=>Number(e)-Number(r)).map(e=>r[e]):r}(t):e[r]=t,e},Object.create(null))}r.extract=p,r.parse=m,r.stringify=(e,r)=>{if(!e)return"";c((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);let t=t=>r.skipNull&&s(e[t])||r.skipEmptyString&&""===e[t],n=function(e){switch(e.arrayFormat){case"index":return r=>(t,n)=>{let i=t.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[u(r,e),"[",i,"]"].join("")]:[...t,[u(r,e),"[",u(i,e),"]=",u(n,e)].join("")]};case"bracket":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[u(r,e),"[]"].join("")]:[...t,[u(r,e),"[]=",u(n,e)].join("")];case"colon-list-separator":return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,[u(r,e),":list="].join("")]:[...t,[u(r,e),":list=",u(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let r="bracket-separator"===e.arrayFormat?"[]=":"=";return t=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:(i=null===i?"":i,0===n.length)?[[u(t,e),r,u(i,e)].join("")]:[[n,u(i,e)].join(e.arrayFormatSeparator)]}default:return r=>(t,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?t:null===n?[...t,u(r,e)]:[...t,[u(r,e),"=",u(n,e)].join("")]}}(r),i={};for(let o of Object.keys(e))t(o)||(i[o]=e[o]);let a=Object.keys(i);return!1!==r.sort&&a.sort(r.sort),a.map(t=>{let i=e[t];return void 0===i?"":null===i?u(t,r):Array.isArray(i)?0===i.length&&"bracket-separator"===r.arrayFormat?u(t,r)+"[]":i.reduce(n(t),[]).join("&"):u(t,r)+"="+u(i,r)}).filter(e=>e.length>0).join("&")},r.parseUrl=(e,r)=>{r=Object.assign({decode:!0},r);let[t,n]=o(e,"#");return Object.assign({url:t.split("?")[0]||"",query:m(p(e),r)},r&&r.parseFragmentIdentifier&&n?{fragmentIdentifier:d(n,r)}:{})},r.stringifyUrl=(e,t)=>{t=Object.assign({encode:!0,strict:!0,[l]:!0},t);let n=f(e.url).split("?")[0]||"",i=r.extract(e.url),o=r.parse(i,{sort:!1}),a=Object.assign(o,e.query),s=r.stringify(a,t);s&&(s=`?${s}`);let c=function(e){let r="",t=e.indexOf("#");return -1!==t&&(r=e.slice(t)),r}(e.url);return e.fragmentIdentifier&&(c=`#${t[l]?u(e.fragmentIdentifier,t):e.fragmentIdentifier}`),`${n}${s}${c}`},r.pick=(e,t,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[l]:!1},n);let{url:i,query:o,fragmentIdentifier:s}=r.parseUrl(e,n);return r.stringifyUrl({url:i,query:a(o,t),fragmentIdentifier:s},n)},r.exclude=(e,t,n)=>{let i=Array.isArray(t)?e=>!t.includes(e):(e,r)=>!t(e,r);return r.pick(e,i,n)}},80500:function(e){"use strict";e.exports=(e,r)=>{if(!("string"==typeof e&&"string"==typeof r))throw TypeError("Expected the arguments to be of type `string`");if(""===r)return[e];let t=e.indexOf(r);return -1===t?[e]:[e.slice(0,t),e.slice(t+r.length)]}},70610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)}},function(e){e.O(0,[319,642,565,461,762,418,53,54,374,794,774,888,179],function(){return e(e.s=16034)}),_N_E=e.O()}]);