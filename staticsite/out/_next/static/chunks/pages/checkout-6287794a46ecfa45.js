(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{57250:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return r(63034)}])},37878:function(e,t){"use strict";t.Z={src:"/_next/static/media/green-tick.c86f07ad.gif",height:498,width:494}},63034:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return W}});var n=r(85893),a=r(67294),s=r(48448),o=r(41120),i=r(22318),l=r(282),c=r(52135),d=r(33562),u=r(11163),h=r.n(u),f=r(53199);let p=(0,o.Z)(e=>({paper:{backgroundColor:e.palette.background.paper,borderRadius:"5px",boxShadow:e.shadows[5],color:"white",display:"flex",flexDirection:"column",justifyContent:"center",margin:"0 20px 20px 20px",padding:e.spacing(3,4,3)},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"20px 20px 10px 0px"},title:{fontWeight:"bold",margin:"10px 0 20px 0",color:"#3B82F6",textAlign:"center"}})),x=e=>{let{stage:t,refresh:r}=e,s=p(),[o,u]=(0,a.useState)(""),[x,g]=(0,a.useState)(!1),[m,y]=(0,a.useState)(0),[j,v]=(0,a.useState)(0),[b,w]=(0,a.useState)(!0),[S,Z]=(0,a.useState)(""),[k,z]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{(async function(){console.log("AuthService.refresh()"),console.log(await c.Z.refresh()),g(c.Z.validateCurrentUserRefreshToken()&&c.Z.validateCurrentUserAccessToken())})()},[]),(0,a.useEffect)(()=>{u(c.Z.getUsername())},[x]),(0,a.useEffect)(()=>{(async function(){let e=await (0,d.Q2)();e[0]&&y(e[0]),e[1]&&v(e[1])})()},[o,r]),(0,a.useEffect)(()=>{(async function(){let e=await (0,d.fq)();if(e[0]){for(let t=0;t<e.length;t++)if(2===e[t].feature){z(!0);break}}})()},[o]),(0,a.useEffect)(()=>{async function e(){let e=await (0,f.cX)();e[0]?w(!0):w(!1)}"0"===t?w(!0):e()},[o]),(0,n.jsxs)("div",{className:s.paper,children:[(0,n.jsx)(i.Z,{style:{fontSize:"20px",color:"black",fontWeight:"bold"},children:"Order Summary"}),(0,n.jsx)("hr",{}),(0,n.jsx)("hr",{}),(0,n.jsxs)(i.Z,{style:{fontSize:"18px",color:"black",padding:"5px 0 5px 0"},children:["Items: ₹",m]}),(0,n.jsx)("hr",{}),(0,n.jsxs)(i.Z,{style:{fontSize:"18px",color:"black",padding:"5px 0 5px 0"},children:["Delivery: ₹",j]}),(0,n.jsx)("hr",{}),(0,n.jsxs)(i.Z,{style:{fontSize:"18px",color:"black",padding:"5px 0 5px 0"},children:["Total: ₹",m+j]}),(0,n.jsx)("hr",{}),(0,n.jsx)(l.Z,{style:{background:"#3B82F6",color:"white",marginBottom:"2px"},variant:"contained",onClick(){b?h().push({pathname:"/checkout",query:{stage:"0"===t&&k?1:2}}):Z("Please add address")},children:"0"===t&&k?"Proceed To Buy":"Buy"}),(0,n.jsx)(i.Z,{style:{color:"red",textAlign:"center"},children:S})]})};var g=r(17563),m=r(8519),y=r(41470),j=r(22841),v=r(55343),b=r(83559),w=r(85161),S=r(70832),Z=r(25675),k=r.n(Z),z=r(37878),N=r(93789),C=r(23953);let A=(0,o.Z)(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center",overflowY:"scroll"},paper:{backgroundColor:e.palette.background.paper,borderRadius:"5px",boxShadow:e.shadows[5],color:"white",display:"flex",flexDirection:"column",justifyContent:"center",margin:"0 20px 20px 20px",padding:e.spacing(0,4,3)},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"20px 20px 10px 0px"},title:{fontWeight:"bold",margin:"10px 0 20px 0",color:"#3B82F6",textAlign:"center"},label:{fontWeight:"bold",margin:"5px 0 5px 0",color:"#3B82F6"},edit:{margin:"10px","&:hover":{color:"rgb(76, 175, 80)"}},error:{color:"red",fontSize:"16px",backgroundColor:"white",borderRadius:"5px"},textfield:{margin:"5px 0 5px 0","& .MuiFormLabel-root":{fontSize:"18px"},"& .MuiInput-underline:after":{borderBottomColor:"#3b82f6"}}}));(0,b.Z)({overrides:{MuiTooltip:{tooltip:{fontSize:"15px"}}}});let I=()=>{let e=A(),[t,r]=(0,a.useState)(""),[s,o]=(0,a.useState)(!1),[i,d]=(0,a.useState)(""),[u,h]=(0,a.useState)(!1);(0,a.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await c.Z.refresh()),o(c.Z.validateCurrentUserRefreshToken()&&c.Z.validateCurrentUserAccessToken())}()},[]),(0,a.useEffect)(()=>{r(c.Z.getUsername())},[s]);let[p,x]=(0,a.useState)("Home"),[g,m]=(0,a.useState)(""),[y,j]=(0,a.useState)(""),[v,b]=(0,a.useState)(""),[Z,I]=(0,a.useState)(0),[_,E]=(0,a.useState)("India"),[L,W]=(0,a.useState)(0),T=async()=>{let e;(e=await (0,f.N9)(p,g,y,v,Z,_,L))[0]?h(!0):d(e)};return(0,n.jsxs)("div",{className:e.paper,children:[u?(0,n.jsx)("div",{children:(0,n.jsx)(k(),{src:z.Z,alt:"",width:200,height:200})}):(0,n.jsxs)("div",{children:[(0,n.jsxs)(N.Z,{component:"form",sx:{minWidth:150,margin:"20px 5px 15px 5px"},children:[(0,n.jsx)(w.Z,{className:e.title,children:"ADD NEW ADDRESSLINE"}),(0,n.jsx)(w.Z,{className:e.label,children:"Type"}),(0,n.jsxs)(C.Z,{id:"type",name:"type",className:"mb-4 border-b-2 form inputSingleLineText",style:{color:"black",resize:"both",width:"20vw",overflow:"none"},onChange(e){x(e.target.value)},required:!0,children:[(0,n.jsx)("option",{value:"Home",children:"Home"}),(0,n.jsx)("option",{value:"Work",children:"Work"}),(0,n.jsx)("option",{value:"Home2",children:"Home2"}),(0,n.jsx)("option",{value:"Work2",children:"Work2"}),(0,n.jsx)("option",{value:"Home3",children:"Home3"}),(0,n.jsx)("option",{value:"Work3",children:"Work3"}),(0,n.jsx)("option",{value:"Home4",children:"Home4"}),(0,n.jsx)("option",{value:"Work4",children:"Work4"})]}),(0,n.jsx)(w.Z,{className:e.label,children:"Address Line 1"}),(0,n.jsx)(S.Z,{className:e.textfield,type:"string",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:"",onChange(e){m(e.target.value)}}),(0,n.jsx)(w.Z,{className:e.label,children:"Address Line 2"}),(0,n.jsx)(S.Z,{className:e.textfield,type:"string",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:"",onChange(e){j(e.target.value)}}),(0,n.jsx)(w.Z,{className:e.label,children:"City"}),(0,n.jsx)(S.Z,{className:e.textfield,type:"string",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:"",onChange(e){b(e.target.value)}}),(0,n.jsx)(w.Z,{className:e.label,children:"Postal Code"}),(0,n.jsx)(S.Z,{className:e.textfield,type:"number",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:0,onChange(e){I(parseInt(e.target.value))}}),(0,n.jsx)(w.Z,{className:e.label,children:"Country"}),(0,n.jsx)(S.Z,{className:e.textfield,type:"string",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:"India",onChange(e){E(e.target.value)}}),(0,n.jsx)(w.Z,{className:e.label,children:"Contact Number"}),(0,n.jsx)(S.Z,{className:e.textfield,type:"number",InputLabelProps:{shrink:!0},variant:"outlined",defaultValue:0,onChange(e){W(parseInt(e.target.value))}})]}),(0,n.jsx)(l.Z,{style:{background:"#3B82F6",color:"white",marginBottom:"2px"},variant:"contained",onClick:T,children:"Add"})]}),(0,n.jsx)("p",{className:e.error,children:i})]})};var _=r(81760);let E=(0,o.Z)(e=>({paper:{backgroundColor:e.palette.background.paper,borderRadius:"5px",boxShadow:e.shadows[5],color:"white",display:"flex",flexDirection:"column",justifyContent:"center",margin:"0 20px 20px 20px",padding:e.spacing(3,4,3)},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"20px 20px 10px 0px"},title:{fontWeight:"bold",margin:"10px 0 20px 0",color:"#3B82F6",textAlign:"center"}})),L=e=>{let{setAddress:t}=e,r=E(),[s,o]=(0,a.useState)(""),[l,d]=(0,a.useState)(!1),[u,h]=(0,a.useState)([{addressid:"",username:"",type:"",addressline1:"",addressline2:"",city:"",postalcode:0,country:"",mobileno:0}]);(0,a.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await c.Z.refresh()),d(c.Z.validateCurrentUserRefreshToken()&&c.Z.validateCurrentUserAccessToken())}()},[]),(0,a.useEffect)(()=>{o(c.Z.getUsername())},[l]),(0,a.useEffect)(()=>{!async function(){let e=await (0,f.cX)();e[0]&&(h(e),t(e[0]))}()},[s]);let p=e=>{t(u[parseInt(e.target.value)])};return(0,n.jsxs)("div",{className:r.paper,children:[""!=u[0].addressid?(0,n.jsx)(v.Z,{children:(0,n.jsx)(y.Z,{"aria-labelledby":"demo-radio-buttons-group-label",defaultValue:0,name:"radio-buttons-group",onChange:p,children:u.map((e,t)=>(0,n.jsxs)("div",{style:{paddingBottom:"20px"},children:[(0,n.jsx)(j.Z,{value:t,control:(0,n.jsx)(m.Z,{}),label:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{style:{fontSize:"18px",color:"black",fontWeight:"bold"},children:e.type}),(0,n.jsxs)(i.Z,{style:{fontSize:"18px",color:"black",padding:"5px 0 5px 0"},children:[e.addressline1,", ",e.addressline2,", ",e.city,","," ",e.country," - ",e.postalcode]}),(0,n.jsx)(i.Z,{style:{fontSize:"18px",color:"black",padding:"5px 0 5px 0"},children:e.mobileno})]})}),(0,n.jsx)("hr",{}),(0,n.jsx)("hr",{})]}))})}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)(_.Z,{modalButtonText:"Add New Address",modalBody:(0,n.jsx)(I,{})})]})};function W(){let e=(0,u.useRouter)(),{stage:t}=e.query;if(!t){var r,o;let i=e.asPath;t=null===(r=g.parseUrl(i))||void 0===r?void 0:null===(o=r.query)||void 0===o?void 0:o.stage}let[l,d]=(0,a.useState)({addressid:"",username:"",type:"",addressline1:"",addressline2:"",city:"",postalcode:0,country:"",mobileno:0}),[h,f]=(0,a.useState)([]),[p,m]=(0,a.useState)(""),[y,j]=(0,a.useState)(!1),[v,b]=(0,a.useState)(Math.random().toString(36).slice(2));return(0,a.useEffect)(()=>{(async function(){console.log("AuthService.refresh()"),console.log(await c.Z.refresh()),j(c.Z.validateCurrentUserRefreshToken()&&c.Z.validateCurrentUserAccessToken())})()},[]),(0,a.useEffect)(()=>{m(c.Z.getUsername())},[y]),(0,n.jsxs)("div",{children:["0"===t?(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,n.jsx)("div",{style:{width:"70vw",margin:"5%"},children:(0,n.jsx)(s.Z,{showContinueToCheckoutButton:!1,setCartItemsUp:f,setRefresh:b})}),(0,n.jsx)("div",{style:{width:"30vw",margin:"5%"},children:h.length>0?(0,n.jsx)(x,{stage:"0",refresh:v}):(0,n.jsx)(n.Fragment,{})})]}):(0,n.jsx)(n.Fragment,{}),"1"===t?(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[(0,n.jsx)("div",{style:{width:"60vw",margin:"5%"},children:(0,n.jsx)(L,{setAddress:d})}),(0,n.jsx)("div",{style:{width:"30vw",margin:"5%"},children:(null==h?void 0:h.length)>0?(0,n.jsx)(x,{stage:"1",refresh:v}):(0,n.jsx)(n.Fragment,{})})]}):(0,n.jsx)(n.Fragment,{}),"2"===t?(0,n.jsx)("div",{}):(0,n.jsx)(n.Fragment,{})]})}},53199:function(e,t,r){"use strict";r.d(t,{Ew:function(){return g},N9:function(){return d},Up:function(){return l},aW:function(){return p},cX:function(){return u},ce:function(){return c},et:function(){return i},fV:function(){return x},pS:function(){return f},sp:function(){return h}});var n=r(9669),a=r.n(n),s=r(76095);let o="http://localhost:5000/";async function i(){try{if(!(0,s.z)().Authorization)return"Not Logged In";{let e=await a().get(o+"user_merchandise/allmyorders",{headers:(0,s.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(t){console.log(t)}}async function l(e){try{if(!(0,s.z)().Authorization)return"Not Logged In";{let t=await a().get(o+"user_merchandise/productid/"+e,{headers:(0,s.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(r){console.log(r)}}async function c(e){try{if(!(0,s.z)().Authorization)return"Not Logged In";{let t=await a().get(o+"user_merchandise/alluserdata/forcreator/"+e,{headers:(0,s.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(r){console.log(r)}}async function d(e,t,r,n,i,l,c){try{if(!(0,s.z)().Authorization)return"Not Logged In";{let d=await a().post(o+"user_merchandise/useraddress",{type:e,addressline1:t,addressline2:r,city:n,postalcode:i,country:l,mobileno:c},{headers:(0,s.z)()});if(d.data.isSuccessful)return d.data.result;return d.data.errorMsg}}catch(u){console.log(u)}}async function u(){try{if(!(0,s.z)().Authorization)return"Not Logged In";{let e=await a().get(o+"user_merchandise/useraddress",{headers:(0,s.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(t){console.log(t)}}async function h(e,t,r,n,i){try{if(!(0,s.z)().Authorization)return"Not Logged In";{let l=await a().post(o+"user_merchandise/reviews",{productid:e,orderid:t,ratings:r,commenttitle:n,commentdescription:i},{headers:(0,s.z)()});if(l.data.isSuccessful)return l.data.result;return l.data.errorMsg}}catch(c){console.log(c)}}async function f(e){try{if(!(0,s.z)().Authorization)return"Not Logged In";{let t=await a().get(o+"user_merchandise/reviews/"+e,{headers:(0,s.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(r){console.log(r)}}async function p(e){try{if(!(0,s.z)().Authorization)return"Not Logged In";{let t=await a().get(o+"user_merchandise/reviews/ratings/"+e,{headers:(0,s.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(r){console.log(r)}}async function x(e){try{if(!(0,s.z)().Authorization)return"Not Logged In";{let t=await a().get(o+"user_merchandise/reviews/check/"+e,{headers:(0,s.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(r){console.log(r)}}async function g(e,t,r,n){try{if(!(0,s.z)().Authorization)return"Not Logged In";{let i=await a().put(o+"user_merchandise/reviews/"+e,{commenttitle:t,commentdescription:r,ratings:n},{headers:(0,s.z)()});if(i.data.isSuccessful)return i.data.result;return i.data.errorMsg}}catch(l){console.log(l)}}}},function(e){e.O(0,[608,34,774,888,179],function(){return e(e.s=57250)}),_N_E=e.O()}]);