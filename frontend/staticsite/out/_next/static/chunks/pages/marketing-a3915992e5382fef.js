(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[760],{23953:function(e,t,r){"use strict";var n=r(87462),i=r(63366),o=r(67294),s=r(86010),a=r(94780),l=r(14127),c=r(56594),d=r(59711),u=r(69700),p=r(96480),h=r(78884),x=r(37133),g=r(85893);let f=["className","children","classes","IconComponent","input","inputProps","variant"],m=["root"],b=e=>{let{classes:t}=e;return(0,a.Z)({root:["root"]},x.f,t)},w=(0,g.jsx)(p.Z,{}),j=o.forwardRef(function(e,t){let r=(0,h.Z)({name:"MuiNativeSelect",props:e}),{className:a,children:p,classes:x={},IconComponent:j=u.Z,input:v=w,inputProps:y}=r,k=(0,i.Z)(r,f),Z=(0,d.Z)(),C=(0,c.Z)({props:r,muiFormControl:Z,states:["variant"]}),S=(0,n.Z)({},r,{classes:x}),N=b(S),_=(0,i.Z)(x,m);return(0,g.jsx)(o.Fragment,{children:o.cloneElement(v,(0,n.Z)({inputComponent:l.ZP,inputProps:(0,n.Z)({children:p,classes:_,IconComponent:j,variant:C.variant,type:void 0},y,v?v.props.inputProps:{}),ref:t},k,{className:(0,s.Z)(N.root,v.props.className,a)}))})});j.muiName="Select",t.Z=j},20014:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/marketing",function(){return r(86176)}])},86176:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=r(85893),i=r(52135),o=r(67294),s=r(9008),a=r.n(s),l=r(41120),c=r(58316),d=r(87822),u=r(23953),p=r(75084),h=r(9669),x=r.n(h),g=r(76095);let f="http://13.49.251.13/";async function m(e){try{if(!(0,g.z)().Authorization)return"Not Logged In";{let t=await x().get("http://crezalo.com/api/marketing/"+e,{headers:(0,g.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(r){console.log(r)}}async function b(e,t){try{if(!(0,g.z)().Authorization)return"Not Logged In";{console.log(f);let r=await x().post(f+"email/",{sqlquery:e,template:t},{headers:(0,g.z)()});if(r.data.isSuccessful)return r.data.result;return r.data.errorMsg}}catch(n){console.log(n)}}let w=(0,l.Z)(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center",overflowY:"scroll"},paper:{backgroundColor:e.palette.background.paper,borderRadius:"5px",boxShadow:e.shadows[5],color:"white",display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(0,4,3)},button:{},title:{fontWeight:"bold",margin:"10px 0 20px 0",color:"#3B82F6",textAlign:"center"},label:{},edit:{margin:"10px","&:hover":{color:"rgb(76, 175, 80)"}},error:{color:"red",fontSize:"16px",backgroundColor:"white",borderRadius:"5px"},textfield:{}})),j=()=>{w();let[e,t]=(0,o.useState)(""),[r,i]=(0,o.useState)("generic"),[s,a]=(0,o.useState)([{name:"",link:"",category:"",description:"",subcount:"",totalvideos:"",totalviews:"",emails:"",numbers:""}]),[l,h]=(0,o.useState)(""),x=async()=>{let t=await m(e);"string"!=typeof t?(a(t),h("")):h(t)},g=async()=>{let t=await b(e,r);"success"===t?h(""):h(t)};return(0,n.jsxs)("div",{style:{color:"white"},children:[(0,n.jsx)(c.Z,{style:{fontWeight:"bold",margin:"20px",color:"white",width:"90vw"},children:"SQL Query For Marketing Data"}),(0,n.jsx)(d.Z,{style:{width:"90vw",backgroundColor:"white",margin:"20px",borderRadius:"5px"},type:"string",placeholder:"SQL Query Here ...",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:"",onChange(e){t(e.target.value)}}),(0,n.jsx)("br",{}),(0,n.jsx)(u.Z,{id:"type",name:"type",style:{width:"90vw",backgroundColor:"white",margin:"20px",borderRadius:"5px"},onChange(e){i(e.target.value)},required:!0,children:(0,n.jsx)("option",{value:"generic",children:"Generic"})}),(0,n.jsx)("br",{}),(0,n.jsx)(p.Z,{style:{background:"#3B82F6",color:"white",marginBottom:"2px",fontWeight:"bold",textAlign:"center",margin:"20px"},variant:"contained",onClick:x,children:"Get Data"}),(0,n.jsx)(p.Z,{style:{background:"#3B82F6",color:"white",marginBottom:"2px",fontWeight:"bold",textAlign:"center",margin:"20px"},variant:"contained",onClick:g,children:"Send Email"}),(0,n.jsx)("div",{style:{width:"90vw",margin:"20px",height:"40vh",overflow:"scroll"},children:null==s?void 0:s.map((e,t)=>(0,n.jsxs)("div",{style:{backgroundColor:"white",color:"black",margin:"5px",padding:"1px",borderRadius:"5px",overflow:"scroll"},children:[(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"index:"})," ",t]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"name:"})," ",e.name]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"category:"})," ",e.category]}),(0,n.jsx)("a",{href:e.link,target:"_blank",style:{color:"blue",textDecoration:"underline"},children:e.link}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Description:"})," ",e.description]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Emails:"})," ",e.emails]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Numbers:"})," ",e.numbers]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"Subscribers:"})," ",e.subcount]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"TotalVideos:"})," ",e.totalvideos]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("b",{children:"TotalViews:"})," ",e.totalviews]})]}))}),(0,n.jsx)("p",{style:{color:"red"},children:l})]})};function v(){let[e,t]=(0,o.useState)(""),[r,s]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{(async function(){console.log("AuthService.refresh()"),console.log(await i.Z.refresh()),s(i.Z.validateCurrentUserRefreshToken()&&i.Z.validateCurrentUserAccessToken())})()},[]),(0,o.useEffect)(()=>{t(i.Z.getUsername())},[r]),(0,n.jsxs)("div",{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Crezalo: Marketing [Admin only]"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("div",{children:(0,n.jsx)(j,{})})]})}(0,l.Z)(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{borderRadius:"5px",boxShadow:e.shadows[5],color:"black",backgroundColor:"blue",padding:e.spacing(2,4,3),overflowY:"auto",overflowX:"hidden",maxHeight:"80vh",margin:"20px"}}))},9008:function(e,t,r){e.exports=r(83121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=20014)}),_N_E=e.O()}]);