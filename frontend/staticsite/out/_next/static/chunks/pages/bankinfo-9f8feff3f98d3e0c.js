(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2496],{3511:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bankinfo",function(){return t(80279)}])},25797:function(e,n){"use strict";n.Z=["Bank of Baroda","Bank of India","Bank of Maharashtra","Canara Bank","Central Bank of India","Indian Bank","Indian Overseas Bank","Punjab & Sind Bank","Punjab National Bank","State Bank of India","UCO Bank","Union Bank of India","Axis Bank Ltd.","Bandhan Bank Ltd.","CSB Bank Ltd.","City Union Bank Ltd.","DCB Bank Ltd.","Dhanlaxmi Bank Ltd.","Federal Bank Ltd.","HDFC Bank Ltd","ICICI Bank Ltd.","Induslnd Bank Ltd","IDFC First Bank Ltd.","Jammu & Kashmir Bank Ltd.","Karnataka Bank Ltd.","Karur Vysya Bank Ltd.","Kotak Mahindra Bank Ltd","Nainital Bank Ltd.","RBL Bank Ltd.","South Indian Bank Ltd.","Tamilnad Mercantile Bank Ltd.","YES Bank Ltd.","IDBI Bank Ltd.","Au Small Finance Bank Limited","Capital Small Finance Bank Limited","Equitas Small Finance Bank Limited","Suryoday Small Finance Bank Limited","Ujjivan Small Finance Bank Limited","Utkarsh Small Finance Bank Limited","ESAF Small Finance Bank Limited","Fincare Small Finance Bank Limited","Jana Small Finance Bank Limited","North East Small Finance Bank Limited","Shivalik Small Finance Bank Limited"]},80279:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return k}});var a=t(85893),i=t(67294),r=t(41120),o=t(83559),l=t(282),c=t(9008),s=t.n(c),d=t(52135),u=t(33057),f=t(25797),h=t(97520);let m=(0,r.Z)(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center",overflowY:"scroll"},paper:{borderRadius:"5px",boxShadow:e.shadows[5],color:"white",display:"flex",flexDirection:"column",width:"50%",justifyContent:"center",margin:"0 20px 20px 20px",padding:e.spacing(0,4,3)},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"20px 20px 10px 0px"},edit:{margin:"10px","&:hover":{color:"rgb(76, 175, 80)"}},error:{color:"red",fontSize:"16px",borderRadius:"5px",textAlign:"center"},successful:{color:"green",fontSize:"16px",borderRadius:"5px",textAlign:"center"},textfield:{width:"80%",margin:"10px 0 10px 0","& .MuiFormLabel-root":{fontSize:"18px"},"& label.Mui-focused":{color:"white"},"& .MuiInput-underline:after":{borderBottomColor:"#3b82f6"},"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"white"},"&:hover fieldset":{borderColor:"white"},"&.Mui-focused fieldset":{borderColor:"#3b82f6"}}}}));function k(){var e,n;let t=m(),[r,o]=(0,i.useState)(""),[c,k]=(0,i.useState)(!1),[g,p]=(0,i.useState)(""),[b,B]=(0,i.useState)(""),[x,v]=(0,i.useState)(""),[w,L]=(0,i.useState)(""),[S,y]=(0,i.useState)(""),z=(null===(e=(0,h.e)())||void 0===e?void 0:e.width)<(null===(n=(0,h.e)())||void 0===n?void 0:n.height);(0,i.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await d.Z.refresh()),k(d.Z.validateCurrentUserRefreshToken()&&d.Z.validateCurrentUserAccessToken())}()},[]),(0,i.useEffect)(()=>{o(d.Z.getUsername())},[c]);let[C,_]=(0,i.useState)({bank_name:"",ifsc_code:"",acc_number:""});(0,i.useEffect)(()=>{!async function(){if(""!=r){let e=await (0,u.V7)();console.log(e),_(e[0])}}()},[r]);let j=async()=>{y(""),L("");let e=await (0,u.u3)(g,b,x);"string"!=typeof e?y("Successful"):L(e)};return(0,a.jsxs)("div",{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"Crezalo: Bank Details"}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,a.jsx)("div",{children:c&&r&&(null==C?void 0:C.bank_name)?(0,a.jsxs)("div",{className:z?"blueTextBlackBackgroundMobile":"blueTextBlackBackground",style:{color:"white",fontSize:"18px"},children:[(0,a.jsxs)("div",{className:"form",style:{padding:z?"5vh 0vw 0vh 5vw":"5vh 0vw 0vh 35vw"},children:[(0,a.jsx)("label",{children:"Bank Name"}),(0,a.jsx)("select",{id:"bank_name",name:"bank_name",className:"mb-4 border-b-2 form inputSingleLineText",defaultValue:C.bank_name,style:{color:"black",resize:"both",width:z?"80vw":"20vw",overflow:"none"},onChange(e){p(e.target.value)},children:f.Z.map(e=>(0,a.jsx)("option",{value:e,children:e}))}),(0,a.jsx)("label",{children:"IFSC Code"}),(0,a.jsx)("input",{className:"mb-4 border-b-2 form inputSingleLineText",type:"text",id:"ifsccode",name:"ifsccode",minLength:11,maxLength:11,defaultValue:C.ifsc_code,style:{color:"black",resize:"both",width:z?"80vw":"20vw",overflow:"none"},onChange(e){B(e.target.value)}}),(0,a.jsx)("label",{children:"Account Number"}),(0,a.jsx)("input",{className:"mb-4 border-b-2 form inputSingleLineText",type:"text",id:"aacnumber",name:"aacnumber",minLength:18,maxLength:18,defaultValue:C.acc_number,onChange(e){e.target.value=e.target.value.replace(/[^0-9.]/g,"").replace(/(\..*?)\..*/g,"$1"),v(e.target.value)},style:{color:"black",resize:"both",width:z?"80vw":"20vw",overflow:"none"},required:!0}),(0,a.jsx)(l.Z,{style:{background:"#3B82F6",color:"white",marginBottom:"2px",width:z?"80vw":"20vw",textAlign:z?"center":"left",justifyContent:"center"},className:t.button,variant:"contained",onClick(){j()},children:"Update"})]}),(0,a.jsx)("p",{className:t.error,children:w}),(0,a.jsx)("p",{className:t.successful,children:S})]}):(0,a.jsx)("div",{})})]})}(0,o.Z)({overrides:{MuiTooltip:{tooltip:{fontSize:"15px"}}}})},33057:function(e,n,t){"use strict";t.d(n,{V7:function(){return u},Zl:function(){return l},Zw:function(){return c},eW:function(){return d},tf:function(){return s},u3:function(){return f}});var a=t(9669),i=t.n(a),r=t(76095);let o="https://crezalo.com/api/";async function l(e,n,t,a,l){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let c=await i().post(o+"fininfo/kyc",{aadharnumber:e,pannumber:n,bank_name:t,ifsc_code:a,acc_number:l},{headers:(0,r.z)()});if(c.data.isSuccessful)return c.data.result;return c.data.errorMsg}}catch(s){console.log(s)}}async function c(){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let e=await i().get(o+"fininfo/kyc/alldetailsforadmin",{headers:(0,r.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(n){console.log(n)}}async function s(){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let e=await i().get(o+"fininfo/kyc/applied",{headers:(0,r.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(n){console.log(n)}}async function d(e){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let n=await i().post(o+"fininfo",{creator:e},{headers:(0,r.z)()});if(n.data.isSuccessful)return n.data.result;return n.data.errorMsg}}catch(t){console.log(t)}}async function u(){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let e=await i().get(o+"fininfo/alldetails",{headers:(0,r.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(n){console.log(n)}}async function f(e,n,t){try{if(!(0,r.z)().Authorization)return"Not Logged In";{let a=await i().put(o+"FinInfo",{bank_name:e,ifsc_code:n,acc_number:t},{headers:(0,r.z)()});if(a.data.isSuccessful)return a.data.result;return a.data.errorMsg}}catch(l){console.log(l)}}},9008:function(e,n,t){e.exports=t(83121)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=3511)}),_N_E=e.O()}]);