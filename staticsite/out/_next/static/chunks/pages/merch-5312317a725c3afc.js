(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[502],{47650:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/merch",function(){return r(60411)}])},37878:function(e,t){"use strict";t.Z={src:"/_next/static/media/green-tick.c86f07ad.gif",height:498,width:494}},93225:function(e,t){"use strict";t.Z={src:"/_next/static/media/uploading.80a35203.gif",height:256,width:256}},87927:function(e,t){"use strict";t.Z=["January","February","March","April","May","June","July","August","September","October","November","December"]},60411:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ee}});var n=r(85893),i=r(67294),a=r(11163),s=r.n(a),o=r(17563),c=r(9008),l=r.n(c),d=r(52135),u=r(13056),p=r.n(u),h=r(37497),x=r(87633),g=r(74065),f=r(47028),m=r(29618),y=r(29630),j=r(23508),v=r(38196),w=r(17709),b=r(1645),S=r(97097),Z=r(80087),z=r(41664),C=r.n(z),N=r(81760),k=r(89057),I=r(87822),_=r(41120),A=r(48448),D=r(86554),E=r(53199);let L=(0,_.Z)(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center",overflowY:"scroll"},paper:{backgroundColor:e.palette.background.paper,borderRadius:"5px",boxShadow:e.shadows[5],color:"white",padding:e.spacing(2,4,3)},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"70px 20px 10px 0px"},edit:{margin:"10px","&:hover":{color:"rgb(76, 175, 80)"}},error:{color:"red",fontSize:"16px",backgroundColor:"white",borderRadius:"5px"},textfield:{minWidth:"50vw","& .MuiFormLabel-root":{fontSize:"18px"}}})),M=e=>{let{merchDetails:t,rating:r}=e;L();let[a,o]=(0,i.useState)({fname:"",lname:"",bio:"",displaypicture:"",twitterhandle:"",instagram:"",youtube:"",website:""});var[c,l]=(0,i.useState)(1),[d,u]=(0,i.useState)(0);let[p,h]=(0,i.useState)(!1),x=e=>(t,r)=>{h(!!r&&e)};return(0,i.useEffect)(()=>{(async function(){if(""!=t.creator){let e=await (0,v.is)(t.creator);o(e[0])}})()},[t.creator]),(0,i.useEffect)(()=>{(async function(){if(""!=t.creator){let e=await (0,E.aW)(t.productid);"number"==typeof e&&u(e)}})()},[t.creator]),(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"merchAccordianDetails text-white",children:(0,n.jsxs)("div",{style:{textAlign:"center"},children:[(0,n.jsx)(g.Z,{expanded:!0,children:(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(y.Z,{style:{fontSize:"24px",fontWeight:"bold"},children:t.title})," ",(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around"},children:[(0,n.jsxs)("section",{onClick(){s().push({pathname:"/creatorprofile",query:{address:t.creator}})},className:"creatorIdent pointer",children:[(0,n.jsx)("div",{className:"creatorCardImage",children:(0,n.jsx)(D.Z,{creator:t.creator,height:125,width:125})}),(0,n.jsx)(y.Z,{className:"usernameLink",style:{fontSize:"15px",color:"#3B82F6",display:"flex",flexDirection:"row",paddingTop:"10%"},children:t.creator})]}),(0,n.jsx)("section",{onClick(){},className:"creatorIdent pointer",children:(0,n.jsx)(y.Z,{className:"usernameLink",style:{fontSize:"15px",color:"#3B82F6",paddingTop:"10%"},children:(0,n.jsx)(C(),{href:"#review-section",children:(0,n.jsx)("div",{style:{display:"flex",flexDirection:"row",paddingTop:"2%"},children:(0,n.jsx)(k.Z,{name:"hover-feedback",value:r,precision:1,readOnly:!0})})})})})]}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:[(0,n.jsxs)(y.Z,{style:{fontSize:"20px",fontWeight:"bold"},children:["₹",t.price]}),(0,n.jsxs)(y.Z,{style:{fontSize:"16px",color:"grey",marginLeft:"10px",marginTop:"5px",textDecoration:"line-through"},children:["₹",Math.round(t.price/(1-t.discountpercentage/100))]}),(0,n.jsxs)(y.Z,{style:{fontSize:"17px",color:"green",marginLeft:"10px",marginTop:"3px"},children:[t.discountpercentage,"% off"]})]}),(0,n.jsx)("br",{}),(0,n.jsx)(y.Z,{children:t.description}),(0,n.jsxs)("div",{style:{color:"grey",fontSize:"15px",margin:"10px 0px 10px 0px",fontWeight:"bold"},children:[t.inventory>5?"In Stock | Ready To Ship":"Only "+t.inventory+" left | Hurry !!!","."]}),(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",height:"10%"},children:[(0,n.jsx)(I.Z,{type:"number",size:"small",InputLabelProps:{shrink:!0},variant:"outlined",inputProps:{min:1,max:9},value:c,onChange(e){if(""===e.target.value){l(1);return}let t=+e.target.value;t<1?l(1):l(t)},style:{width:"5vw",padding:"5px",marginRight:"10px"}}),(0,n.jsx)(N.Z,{modalButtonText:"Add to Cart",modalBody:(0,n.jsx)(A.Z,{creator:t.creator,feature:2,productid:t.productid,seriesid:"",qty:c,showContinueToCheckoutButton:!0})})]}),(0,n.jsxs)("div",{style:{color:"green",fontSize:"15px",marginTop:"10px"},children:["Free shipping charges on orders above ₹"," ",t.freeshippingabove,"."]})]})}),(0,n.jsxs)(g.Z,{expanded:"panel1"===p,onChange:x("panel1"),children:[(0,n.jsx)(m.Z,{expandIcon:(0,n.jsx)(j.Z,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:(0,n.jsx)(y.Z,{children:(0,n.jsx)("div",{style:{fontWeight:"bold"},children:"Other Details"})})}),(0,n.jsx)(f.Z,{children:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"},children:[(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(w.Z,{}),(0,n.jsxs)("div",{children:[t.warrantyperiod," ",1==t.warrantyperiod?"month":"months"," ","Warranty"]})]}),(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(b.Z,{}),(0,n.jsxs)("div",{children:["₹ ",t.shippingcharges," shipping charge."]})]}),(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(S.Z,{}),(0,n.jsxs)("div",{children:["7dayReturn"==t.return_refund_policy?"7 Days Return":"7 Days Replacement"," "]})]}),(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(Z.Z,{})," ",(0,n.jsxs)("div",{children:["Made in ",t.country_of_origin.split("|")[1]]})]})]})})]}),(0,n.jsxs)(g.Z,{expanded:"panel2"===p,onChange:x("panel2"),children:[(0,n.jsx)(m.Z,{expandIcon:(0,n.jsx)(j.Z,{}),"aria-controls":"panel2a-content",id:"panel2a-header",children:(0,n.jsx)(y.Z,{children:(0,n.jsxs)("div",{style:{fontWeight:"bold"},children:["About ",a.fname+" "+a.lname]})})}),(0,n.jsx)(f.Z,{children:(0,n.jsx)(y.Z,{children:""!=a.bio?(0,n.jsx)("div",{children:a.bio}):(0,n.jsx)(n.Fragment,{})})})]})]})})})};var R=r(41749),F=r(87927),T=r(59382);let B=e=>{let{merchReview:t}=e;return d.Z.getUsername(),(0,n.jsxs)("div",{className:"reviewCard pointer",style:{display:"flex",flexDirection:"row",backgroundColor:"white"},children:[(0,n.jsx)("section",{className:"videoCard MerchReviewCardImageElement",children:(0,n.jsx)("div",{className:"videoCardImage"})}),(0,n.jsxs)("div",{style:{padding:"10px 5px 8px 0px"},children:[(0,n.jsx)(D.Z,{creator:t.username,height:70,width:70}),(0,n.jsxs)("h1",{style:{fontSize:"14px",color:"grey"},children:[(0,n.jsx)(T.Z,{}),"Verified"]}),(0,n.jsx)("h1",{style:{fontSize:"12px",fontWeight:"bold",color:"#3B82F6"},children:t.username})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:(0,n.jsx)(k.Z,{name:"hover-feedback",value:t.ratings,precision:1,readOnly:!0})}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{style:{fontSize:"16px",fontWeight:"bold"},children:t.commenttitle}),(0,n.jsxs)("h1",{style:{fontSize:"14px",color:"grey"},children:["Reviewed in India on"," ",new Date(Date.parse(t.updatedat)).getDate()+" "+F.Z[new Date(Date.parse(t.updatedat)).getMonth()]+" "+new Date(Date.parse(t.updatedat)).getFullYear()]}),(0,n.jsx)("h1",{style:{fontSize:"15px"},children:t.commentdescription})]})]})]})};var W=r(16208),P=r(25675),U=r.n(P),O=r(37878),H=r(22318),V=r(93789),q=r(75084),X=r(14957);let J=(0,_.Z)(e=>({modal:{display:"flex",alignItems:"center",justifyContent:"center",overflowY:"scroll"},paper:{backgroundColor:e.palette.background.paper,borderRadius:"5px",boxShadow:e.shadows[5],color:"white",display:"flex",flexDirection:"column",justifyContent:"center",margin:"0 20px 20px 20px",padding:e.spacing(0,4,3)},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"20px 20px 10px 0px"},title:{fontWeight:"bold",margin:"10px 0 20px 0",color:"#3B82F6",textAlign:"center"},label:{fontWeight:"bold",margin:"5px 0 5px 0",color:"#3B82F6"},edit:{margin:"10px","&:hover":{color:"rgb(76, 175, 80)"}},error:{color:"red",fontSize:"16px",backgroundColor:"white",borderRadius:"5px"},textfield:{width:"100%",margin:"5px 0 5px 0","& .MuiFormLabel-root":{fontSize:"18px"},"& .MuiInput-underline:after":{borderBottomColor:"#3b82f6"}}})),Y=e=>{let{productid:t,addorupdate:r,review:a,orderid:s}=e,o=J(),[c,l]=(0,i.useState)(2==r?parseInt(a.ratings.toString()):0),[d,u]=(0,i.useState)(-1),[p,h]=(0,i.useState)(2==r?a.commenttitle:""),[x,g]=(0,i.useState)(2==r?a.commentdescription:""),[f,m]=(0,i.useState)(""),[y,j]=(0,i.useState)(!1),v={1:"Useless",2:"Poor",3:"Ok",4:"Good",5:"Excellent"},w=async()=>{let e;"string"==typeof(e=await (0,E.sp)(t,s,c,p,x))?m(e):j(!0)},b=async()=>{let e;"string"==typeof(e=await (0,E.Ew)(a.reviewid,p,x,c))?m(e):j(!0)};return(0,n.jsxs)("div",{className:o.paper,children:[y?(0,n.jsx)("div",{children:(0,n.jsx)(U(),{src:O.Z,alt:"",width:200,height:200})}):(0,n.jsxs)("div",{children:[(0,n.jsxs)(V.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,n.jsxs)(H.Z,{style:{fontSize:"20px",fontWeight:"bold",paddingTop:"10px",color:"black"},children:[1==r?"Add":"Update"," Review"]}),(0,n.jsx)(k.Z,{name:"hover-feedback",value:c,defaultValue:2==r?parseInt(a.ratings.toString()):c,precision:1,getLabelText:function(e){return"".concat(e," Star").concat(1!==e?"s":"",", ").concat(v[e])},onChange(e,t){l(t)},onChangeActive(e,t){u(t)},size:"large",emptyIcon:(0,n.jsx)(X.Z,{style:{opacity:.55},fontSize:"inherit"})}),null!==c&&(0,n.jsx)(V.Z,{sx:{color:"grey",padding:"5px 0px 5px 0px"},children:v[-1!==d?d:c]}),(0,n.jsx)(V.Z,{sx:{padding:"5px 0px 15px 0px"},children:(0,n.jsx)(I.Z,{className:o.textfield,type:"string",label:"Title",placeholder:"Enter Review Title Here ...",InputLabelProps:{shrink:!0},multiline:!0,rows:2,variant:"outlined",defaultValue:2==r?a.commenttitle:"",onChange(e){h(e.target.value)}})}),(0,n.jsx)(V.Z,{sx:{padding:"15px 0px 5px 0px"},children:(0,n.jsx)(I.Z,{className:o.textfield,type:"string",label:"Description",placeholder:"Enter Review Description Here ...",InputLabelProps:{shrink:!0},multiline:!0,rows:5,variant:"outlined",defaultValue:2==r?a.commentdescription:"",onChange(e){g(e.target.value)}})})]}),(0,n.jsx)(q.Z,{style:{background:"#3B82F6",color:"white",marginBottom:"2px"},variant:"contained",onClick:()=>1==r?w():b(),children:1==r?"Add":"Update"})]}),(0,n.jsx)("p",{className:o.error,children:f})]})},G=(0,_.Z)(e=>({paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"20px 20px 10px 0px"}})),K=e=>{let{mid:t,classes:r}=e;return(0,n.jsx)(R.Z,{item:!0,xs:11,children:(0,n.jsx)(B,{merchReview:t})})},Q=e=>{var t;let{merchReviews:r}=e,a=G(),[s,o]=(0,i.useState)(0),[c,l]=(0,i.useState)(""),[d,u]=(0,i.useState)("");return(0,i.useEffect)(()=>{(async function(){var e,t;if((null===(e=r[0])||void 0===e?void 0:e.productid)!=""){let n=await (0,E.fV)(null===(t=r[0])||void 0===t?void 0:t.productid);"string"!=typeof n&&(o(n[0]),""!=n[1]&&l(n[1]),""!=n[2]&&u(n[2]))}})()},[r]),(0,n.jsxs)("div",{className:"blueTextBlackBackground",children:[0!=s?(0,n.jsx)(N.Z,{modalButtonText:(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(W.Z,{})," ",1==s?"Add":"Update"," ","Review"]}),modalBody:(0,n.jsx)(Y,{productid:null===(t=r[0])||void 0===t?void 0:t.productid,addorupdate:s,review:r.filter(e=>e.reviewid==c)[0],orderid:d})}):(0,n.jsx)(n.Fragment,{}),(0,n.jsx)(R.Z,{container:!0,spacing:1,children:null==r?void 0:r.map(e=>(0,n.jsx)(n.Fragment,{children:(null==e?void 0:e.productid)?(0,n.jsx)(K,{mid:e,classes:a},e.productid):(0,n.jsx)(n.Fragment,{})}))})]})},$={autoPlay:!0,animation:"fade",indicators:!1,duration:500,navButtonsAlwaysVisible:!0,navButtonsAlwaysInvisible:!1,cycleNavigation:!0,fullHeightHover:!0,swipe:!1};function ee(){let e=(0,a.useRouter)(),{productid:t}=e.query;if(!t){let r=e.asPath;t=o.parseUrl(r).query.productid}var s,[c,u]=(0,i.useState)([]),[g,f]=(0,i.useState)(-1);let[m,y]=(0,i.useState)(!1),[j,v]=(0,i.useState)(""),[w,b]=(0,i.useState)($),[S,Z]=(0,i.useState)(-1),[z,C]=(0,i.useState)({title:"",description:"",creator:"",productid:"",inventory:0,return_refund_policy:"",country_of_origin:"",price:0,variants:0,variantname:"",discountpercentage:0,warrantyperiod:0,shippingcharges:0,freeshippingabove:0}),[N,k]=(0,i.useState)([{reviewid:"",productid:"",username:"",ratings:-1,commenttitle:"",commentdescription:"",createdat:"",updatedat:""}]);function I(e,t){return e.createdat>t.createdat?-1:e.createdat<t.createdat?1:0}function _(){if((null==c?void 0:c.length)>0){for(let e=0;e<c.length;e++){var t=new XMLHttpRequest;t.open("HEAD",c[e]),t.onreadystatechange=function(){this.readyState==this.DONE&&403==this.status&&-1==g&&f(e)},t.send()}return -1!=g&&(c.length=g),!0}return!1}return(0,i.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await d.Z.refresh()),y(d.Z.validateCurrentUserRefreshToken()&&d.Z.validateCurrentUserAccessToken())}()},[]),(0,i.useEffect)(()=>{v(d.Z.getUsername())},[m]),(0,i.useEffect)(()=>{!async function(){if(t){let e=await (0,h.n9)(t.toString());C(e[0])}}()},[t]),(0,i.useEffect)(()=>{!async function(){let e=await (0,E.pS)(t.toString());console.log(e),e&&"string"!=typeof e&&k(e.sort(I))}()},[t]),(0,i.useEffect)(()=>{(async function(){if(t){let e=await (0,E.aW)(t.toString());"string"!=typeof e&&Z(e)}})()},[t]),_(),(0,i.useEffect)(()=>{(async function(){if(t){let e=await (0,h.sr)(t.toString());u(e[0].signedurl)}})()},[t]),(0,n.jsxs)("div",{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:null==z?void 0:z.title}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,n.jsx)("div",{className:"videoDiv",children:m&&t&&(null===(s=N[0])||void 0===s?void 0:s.ratings)!=-1?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"merchPageImage",children:_()?(0,n.jsx)(p(),{className:"merchCarousel",...w,navButtonsProps:{style:{backgroundColor:"cornflowerblue",borderRadius:5}},children:c.map((e,t)=>(0,n.jsx)("img",{src:e,alt:"Loading ...",width:"100%",height:"100%",onError:()=>c.length=t}))}):(0,n.jsx)(n.Fragment,{})}),(null==z?void 0:z.productid)&&_()?(0,n.jsx)(M,{merchDetails:z,rating:S}):(0,n.jsx)(n.Fragment,{})]}),(0,n.jsx)("div",{children:(0,n.jsx)(x.Z,{creator:z.creator,onCreatorProfile:!1,ignoreProductId:t.toString(),onMerchPage:!0})}),(0,n.jsx)("div",{children:(0,n.jsx)(Q,{merchReviews:N})})]}):(0,n.jsx)(n.Fragment,{})})]})}},53199:function(e,t,r){"use strict";r.d(t,{Ew:function(){return f},N9:function(){return d},Up:function(){return c},aW:function(){return x},cX:function(){return u},ce:function(){return l},et:function(){return o},fV:function(){return g},pS:function(){return h},sp:function(){return p}});var n=r(9669),i=r.n(n),a=r(76095);let s="http://localhost:5000/";async function o(){try{if(!(0,a.z)().Authorization)return"Not Logged In";{let e=await i().get(s+"user_merchandise/allmyorders",{headers:(0,a.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(t){console.log(t)}}async function c(e){try{if(!(0,a.z)().Authorization)return"Not Logged In";{let t=await i().get(s+"user_merchandise/productid/"+e,{headers:(0,a.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(r){console.log(r)}}async function l(e){try{if(!(0,a.z)().Authorization)return"Not Logged In";{let t=await i().get(s+"user_merchandise/alluserdata/forcreator/"+e,{headers:(0,a.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(r){console.log(r)}}async function d(e,t,r,n,o,c,l){try{if(!(0,a.z)().Authorization)return"Not Logged In";{let d=await i().post(s+"user_merchandise/useraddress",{type:e,addressline1:t,addressline2:r,city:n,postalcode:o,country:c,mobileno:l},{headers:(0,a.z)()});if(d.data.isSuccessful)return d.data.result;return d.data.errorMsg}}catch(u){console.log(u)}}async function u(){try{if(!(0,a.z)().Authorization)return"Not Logged In";{let e=await i().get(s+"user_merchandise/useraddress",{headers:(0,a.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(t){console.log(t)}}async function p(e,t,r,n,o){try{if(!(0,a.z)().Authorization)return"Not Logged In";{let c=await i().post(s+"user_merchandise/reviews",{productid:e,orderid:t,ratings:r,commenttitle:n,commentdescription:o},{headers:(0,a.z)()});if(c.data.isSuccessful)return c.data.result;return c.data.errorMsg}}catch(l){console.log(l)}}async function h(e){try{if(!(0,a.z)().Authorization)return"Not Logged In";{let t=await i().get(s+"user_merchandise/reviews/"+e,{headers:(0,a.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(r){console.log(r)}}async function x(e){try{if(!(0,a.z)().Authorization)return"Not Logged In";{let t=await i().get(s+"user_merchandise/reviews/ratings/"+e,{headers:(0,a.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(r){console.log(r)}}async function g(e){try{if(!(0,a.z)().Authorization)return"Not Logged In";{let t=await i().get(s+"user_merchandise/reviews/check/"+e,{headers:(0,a.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(r){console.log(r)}}async function f(e,t,r,n){try{if(!(0,a.z)().Authorization)return"Not Logged In";{let o=await i().put(s+"user_merchandise/reviews/"+e,{commenttitle:t,commentdescription:r,ratings:n},{headers:(0,a.z)()});if(o.data.isSuccessful)return o.data.result;return o.data.errorMsg}}catch(c){console.log(c)}}}},function(e){e.O(0,[319,608,565,822,279,633,774,888,179],function(){return e(e.s=47650)}),_N_E=e.O()}]);