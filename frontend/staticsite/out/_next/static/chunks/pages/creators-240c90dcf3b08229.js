(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{71889:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creators",function(){return n(19675)}])},19675:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var s=n(85893),r=n(67294),i=n(41120),a=n(41749),l=n(11163),o=n.n(l),c=n(86554),d=n(97520);let u=e=>{var t,n;let{creator:r}=e,i=(null===(t=(0,d.e)())||void 0===t?void 0:t.width)<(null===(n=(0,d.e)())||void 0===n?void 0:n.height);return(0,s.jsx)(s.Fragment,{children:r.username?(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("section",{className:i?"creatorCardMobile":"creatorCard pointer",onClick:()=>o().push({pathname:"/creatorprofile",query:{address:r.username}}),children:[(0,s.jsx)("div",{className:"creatorCardImage",children:(0,s.jsx)(c.Z,{creator:r.username,height:125,width:125})}),(0,s.jsxs)("div",{style:{textAlign:"center"},children:[(0,s.jsx)("h2",{style:{marginBottom:"5px",fontWeight:"bold"},children:r.username}),(0,s.jsx)("h2",{style:{fontSize:"16px",fontWeight:"bold"},children:r.fname+" "+r.lname})]})]})}):(0,s.jsx)(s.Fragment,{})})},h=(0,i.Z)(e=>({paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary}})),m=e=>{let{creator:t,classes:n}=e;return(0,s.jsx)(a.Z,{item:!0,xs:12,sm:6,md:3,children:(0,s.jsx)(u,{creator:t})})},x=e=>{var t,n;let{creatorsList:r}=e,i=h(),l=(null===(t=(0,d.e)())||void 0===t?void 0:t.width)<(null===(n=(0,d.e)())||void 0===n?void 0:n.height);return(0,s.jsx)("div",{className:l?"blueTextBlackBackgroundMobile":"blueTextBlackBackground",children:(0,s.jsx)(a.Z,{container:!0,spacing:1,children:null==r?void 0:r.map(e=>(0,s.jsx)(m,{creator:e,classes:i},e.username))})})};var g=n(52135),f=n(9008),v=n.n(f),j=n(38196),p=n(97650);function w(){var e,t;let[n,i]=(0,r.useState)(!1),[a,l]=(0,r.useState)(""),[o,c]=(0,r.useState)(0),u=(null===(e=(0,d.e)())||void 0===e?void 0:e.width)<(null===(t=(0,d.e)())||void 0===t?void 0:t.height);(0,r.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await g.Z.refresh()),i(g.Z.validateCurrentUserRefreshToken()&&g.Z.validateCurrentUserAccessToken())}()},[]),(0,r.useEffect)(()=>{l(g.Z.getUsername())},[n]);let[h,m]=(0,r.useState)([{username:"",fname:"",lname:"",displaypicture:"",bio:""}]);(0,r.useEffect)(()=>{!async function(){let e=await (0,j.W_)(o);console.log(e),m(e)}()},[a]);let f=e=>{!async function(){let t;console.log(t=""!=e?await (0,j.gK)(e):await (0,j.W_)(o)),m(t)}()},[w,k]=(0,r.useState)([{username:"",fname:"",lname:"",displaypicture:"",bio:""}]),y=(e,t)=>{f(e),console.log(e,t)},_=e=>{console.log(e)},b=e=>{console.log(e)},C=()=>{console.log("Focused")},S=e=>(0,s.jsx)(s.Fragment,{});return(0,s.jsxs)("div",{children:[(0,s.jsxs)(v(),{children:[(0,s.jsx)("title",{children:"Kigzag: Creators"}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,s.jsx)("div",{children:""!=a&&n?(0,s.jsxs)("div",{className:u?"blueTextBlackBackgroundMobile":"blueTextBlackBackground",style:{justifyContent:"center",fontSize:25},children:[(0,s.jsx)("div",{style:{width:u?"80vw":400,zIndex:-1},children:(0,s.jsx)(p.R,{items:w,onSearch:y,onHover:_,onSelect:b,onFocus:C,autoFocus:!0,formatResult:S})}),(0,s.jsx)("div",{style:{marginTop:25,marginLeft:0},children:(0,s.jsx)(x,{creatorsList:h})})]}):(0,s.jsx)(s.Fragment,{})})]})}}},function(e){e.O(0,[186,14,774,888,179],function(){return e(e.s=71889)}),_N_E=e.O()}]);