(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5371],{77643:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/collab",function(){return l(67352)}])},67352:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return b}});var r=l(85893),o=l(67294),a=l(41120),n=l(57821),s=l(41423),i=l(79895),c=l(9008),u=l.n(c),d=l(11163),v=l(52135),f=l(17563),h=l(67044);let x=(0,a.Z)({tab:{fontSize:"16px",fontWeight:500}});function b(){var e,t,l,a,c,b;let p;let g=(0,d.useRouter)(),{type:j,platform:y,creator:m}=g.query,w=g.asPath;j||(j=null===(e=f.parseUrl(w))||void 0===e?void 0:null===(t=e.query)||void 0===t?void 0:t.type),y||(y=null===(l=f.parseUrl(w))||void 0===l?void 0:null===(a=l.query)||void 0===a?void 0:a.platform),m||(m=null===(c=f.parseUrl(w))||void 0===c?void 0:null===(b=c.query)||void 0===b?void 0:b.creator);let[Z,_]=(0,o.useState)(""),[k,N]=(0,o.useState)(!1),S=x();(0,o.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await v.Z.refresh()),N(v.Z.validateCurrentUserRefreshToken()&&v.Z.validateCurrentUserAccessToken())}()},[]),(0,o.useEffect)(()=>{_(v.Z.getUsername())},[k]),j||(j="user"),y||(y="0"),m||(m=Z);let[C,T]=o.useState(parseInt(null==y?void 0:y.toString())),E=(e,t)=>{T(t)};return("creator"==j||"user"==j)&&(p=[(0,r.jsx)(h.Z,{type:j,category:"collab",platform:"0",creator:null==m?void 0:m.toString()},1),(0,r.jsx)(h.Z,{type:j,category:"collab",platform:"1",creator:null==m?void 0:m.toString()},2),(0,r.jsx)(h.Z,{type:j,category:"collab",platform:"2",creator:null==m?void 0:m.toString()},3)]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(u(),{children:[(0,r.jsx)("title",{children:"Crezalo: Shoutout Requests"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("div",{className:"blueTextBlackBackground",children:k&&("0"==y||"1"==y||"2"==y)?(0,r.jsxs)("div",{style:{backgroundColor:"black",display:"flex",flexDirection:"row",width:"100%"},children:[(0,r.jsx)("div",{children:(0,r.jsxs)(n.Z,{value:C,onChange:E,centered:!0,TabIndicatorProps:{style:{backgroundColor:"#3B82F6"}},className:"nftTabs",orientation:"vertical",children:[(0,r.jsx)(s.Z,{label:"Instagram",className:S.tab}),(0,r.jsx)(s.Z,{label:"Youtube",className:S.tab}),(0,r.jsx)(s.Z,{label:"Twitter",className:S.tab})]})}),(0,r.jsx)("div",{style:{width:"100%"},children:(0,r.jsx)(i.Z,{children:p[C]})})]}):(0,r.jsx)(r.Fragment,{})})]})}}},function(e){e.O(0,[4571,7044,9774,2888,179],function(){return e(e.s=77643)}),_N_E=e.O()}]);