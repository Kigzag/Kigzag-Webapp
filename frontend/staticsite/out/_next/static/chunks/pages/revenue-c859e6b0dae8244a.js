(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9525],{67139:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/revenue",function(){return i(80630)}])},80630:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ed}});var r=i(85893),n=i(79895),a=i(41120),s=i(81719),o=i(62097),l=i(93789),d=i(64631),c=i(20784),x=i(85214),p=i(14412),u=i(80562),h=i(326),g=i(19572),j=i(26215),m=i(81284),f=i(95309),v=i(29901),y=i(14548),w=i(47621),b=i(54167),Z=i(55406),S=i(71859),k=i(52135),C=i(67294),D=i(9008),F=i.n(D),M=i(22318),T=i(75445),z=i(73794),N=i(95366),P=i(74977),B=i(14195),E=i(3023),_=i(75358),q=i(14888),W=i(19264),V=i(56880),A=i(53199),I=i(30031),L=i(65550),R=i(37497),U=i(41749),X=i(50253),K=i(11163),O=i.n(K),H=i(86554),Y=i(97520),J=i(87822),Q=i(87927);let G=(0,a.Z)(e=>({textfieldMsg:{width:"65vw","& .MuiFormLabel-root":{fontSize:"18px"}}})),$=e=>{var t,i;let{order:n,title:a,variantname:s}=e,o=k.Z.getUsername(),[l,d]=(0,C.useState)(""),c=G(),x=(null===(t=(0,Y.e)())||void 0===t?void 0:t.width)<(null===(i=(0,Y.e)())||void 0===i?void 0:i.height);return(0,C.useEffect)(()=>{(async function(){if(3==n.ordertype){let e=await (0,R.KS)(n.productid);e[0]&&d(e[0].signedurl)}})()},[o]),(0,r.jsx)(r.Fragment,{children:-1!==n.ordertype&&(null==n?void 0:n.creator)!=""?(0,r.jsxs)("div",{className:x?"cartItemCardMobile":"cartItemCard pointer",style:{display:"flex",flexDirection:"row",justifyContent:"flex-start",width:x?"100vw":(null==n?void 0:n.ordertype)==2?"35vw":(null==n?void 0:n.ordertype)==3?"100vw":"25vw"},onClick(){O().push({pathname:(null==n?void 0:n.ordertype)==2?"/merch":(null==n?void 0:n.ordertype)==1?"/course":"/creatorprofile",query:(null==n?void 0:n.ordertype)==2?{productid:n.productid}:(null==n?void 0:n.ordertype)==1?{courseid:n.seriesid}:{address:n.creator}})},children:[3!==n.ordertype?(0,r.jsxs)("div",{style:{padding:"0px 5px 8px 15px",width:x&&2===n.ordertype?"50%":"65%"},children:[(0,r.jsx)("h1",{style:{fontSize:"14px"},children:(0,Y.a)(a,40)}),(0,r.jsx)("h1",{style:{fontSize:"13px",color:"grey",fontWeight:"bold"},children:(0,Y.a)(s,100)}),(0,r.jsxs)("h1",{style:{fontSize:"13px",color:"purple",fontWeight:"bold"},children:["Ordered on"," ",new Date(Date.parse(n.boughtat)).getDate()+" "+Q.Z[new Date(Date.parse(n.boughtat)).getMonth()]+" "+new Date(Date.parse(n.boughtat)).getFullYear()]}),(0,r.jsx)("h1",{style:{fontSize:"13px",color:"blue",fontWeight:"bold"},children:["Packing","Shipped","Delivered"][n.deliverystatus]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"cartItemCardImageElement",children:(0,r.jsx)(H.Z,{creator:n.username,height:90,width:90})}),(0,r.jsxs)("div",{style:{padding:"0px 5px 8px 15px"},children:[(0,r.jsx)("h1",{style:{fontWeight:"bold",marginTop:"5px",color:"#3B82F6"},children:n.username}),(0,r.jsxs)("h1",{style:{fontWeight:"bold",marginTop:"5px"},children:["₹ ",n.amount]}),(0,r.jsx)(J.Z,{className:c.textfieldMsg,label:"Message",type:"text",multiline:!0,variant:"filled",value:n.message}),(0,r.jsxs)("h1",{style:{fontSize:"13px",color:"blue",fontWeight:"bold",marginTop:"5px"},children:["Tipped on"," ",new Date(Date.parse(n.tippedat)).getDate()+" "+Q.Z[new Date(Date.parse(n.tippedat)).getMonth()]+" "+new Date(Date.parse(n.tippedat)).getFullYear()]})]})]}),2==n.ordertype?(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row",float:"right"},children:[(0,r.jsx)(J.Z,{label:"Qty",type:"number",size:"small",variant:"filled",value:n.quantity,style:{width:"5vw",padding:"5px",marginRight:"10px"}}),(0,r.jsxs)("h1",{style:{fontWeight:"bold",marginTop:"5px"},children:["₹",n.buyingprice]})]}):(0,r.jsx)(r.Fragment,{})]}):(0,r.jsx)(r.Fragment,{})})},ee=(0,a.Z)(e=>({paper:{backgroundColor:e.palette.background.paper,borderRadius:"5px",boxShadow:e.shadows[5],color:"white",justifyContent:"center",margin:"10px 20px 20px 20px",overflowX:"hidden",maxHeight:"80vh","&:hover":{boxShadow:"0 10px 18px 8px #173464",borderRadius:"2%"}}})),et=e=>{var t,i;let{category:n,productid:a,title:s,variantname:o}=e,l=k.Z.getUsername(),d=ee(),c=(null===(t=(0,Y.e)())||void 0===t?void 0:t.width)<(null===(i=(0,Y.e)())||void 0===i?void 0:i.height),[x,p]=(0,C.useState)([{username:"",ordertype:-1,creator:"",seriesid:"",productid:"",expiry_date:"",type:0,quantity:"0",buyingprice:0,deliverystatus:"",deliverystatuslink:"",returnstatus:"",amount:0,message:"",boughtat:"",tippedat:""}]);return(0,C.useEffect)(()=>{(async function(){if("all"!=a||"Perq"==n){let e=[];"Videos"==n?e=await (0,z.I$)():"Courses"==n?e=await (0,N.Nq)():"Merch"==n?e=await (0,A.Up)(a):"Perq"==n&&(e=await (0,I.pQ)()),console.log(e),"string"!=typeof e&&p(e)}})()},[l,a]),(0,C.useEffect)(()=>{var e=x,t="Videos"===n?0:"Courses"===n?1:"Merch"===n?2:"Perq"===n?3:-1;for(let i=0;i<x.length;i++)e[i].ordertype=t;p(e)},[x]),(0,r.jsx)("div",{className:c?"blueTextBlackBackgroundMobile":"blueTextBlackBackground",children:(0,r.jsx)(X.Z,{component:"form",sx:{minWidth:150,margin:"20px 5px 15px 5px"},children:(0,r.jsx)(U.Z,{container:!0,direction:"row",spacing:1,children:null==x?void 0:x.map((e,t)=>(0,r.jsx)(r.Fragment,{children:((null==e?void 0:e.creator)!=""||(null==e?void 0:e.productid))&&(null==e?void 0:e.ordertype)!=-1?(0,r.jsx)("div",{className:d.paper,children:(0,r.jsx)(U.Z,{item:!0,xs:4,children:(0,r.jsx)($,{order:e,title:s,variantname:o},t)})}):(0,r.jsx)(r.Fragment,{})}))})})})},ei=e=>{var t,i,n,a,s,o;let{category:l}=e,d=k.Z.getUsername(),[c,x]=(0,C.useState)(null),[p,u]=(0,C.useState)(Math.random().toString(36).slice(2)),h=(null===(t=(0,Y.e)())||void 0===t?void 0:t.width)<(null===(i=(0,Y.e)())||void 0===i?void 0:i.height),[g,j]=(0,C.useState)([{seriesid:"",title:"",productid:"",variantname:""}]),[m,f]=(0,C.useState)("all");return(0,C.useEffect)(()=>{(async function(){let e=[];if("Videos"==l)e=await (0,z.To)();else if("Courses"==l){e=await (0,N.eV)(m);let t=await (0,L.dG)(d);"string"!=typeof t&&j(t)}else if("Merch"==l){e=await (0,A.ce)(m);let i=await (0,R.r8)(d);"string"!=typeof i&&j(i)}else"Perq"==l&&(e=await (0,I.hD)());console.log(e),"string"!=typeof e&&x(e)})(),u(Math.random().toString(36).slice(2))},[d,m]),console.log("data"),console.log(c),console.log(g),console.log(m),(0,r.jsx)(r.Fragment,{children:c?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:h?"blueTextBlackBackgroundMobile":"blueTextBlackBackground",style:{display:"flex",flexDirection:"row"},children:[(0,r.jsx)(M.Z,{style:{marginTop:"10px",writingMode:"vertical-lr",textOrientation:"mixed",fontSize:h?"15px":"20px"},children:"Videos"===l?"Sales for Premium Video Memberships (in ₹)":"Courses"===l?"Sales for Course Memberships (in ₹)":"Merch"===l?"Sales for Merchandise (in ₹)":"Tips Received (in ₹)"}),(0,r.jsxs)(P.w,{width:h?325:800,height:h?300:500,data:c,children:[(0,r.jsx)(B.q,{strokeDasharray:"3 3"}),(0,r.jsx)(E.K,{dataKey:"date"}),(0,r.jsx)(_.B,{}),(0,r.jsx)(q.u,{}),(0,r.jsx)(W.D,{}),(0,r.jsx)(V.x,{type:"monotone",dataKey:"total",activeDot:{r:8}})]})]}),"Courses"===l&&(null===(n=g[0])||void 0===n?void 0:n.seriesid)!=""?(0,r.jsx)("div",{className:"blueTextBlackBackground",children:(0,r.jsxs)(T.Z,{id:"type",name:"type",className:"mb-4 border-b-2 form inputSingleLineText",style:{backgroundColor:"white",textAlign:"center",color:"black",resize:"both",textAlignLast:"center",overflow:"none"},onChange(e){f(e.target.value)},children:[(0,r.jsx)("option",{value:"all",children:"Aggregate"}),g.map(e=>(0,r.jsx)("option",{value:e.seriesid,children:e.title}))]})}):(0,r.jsx)(r.Fragment,{}),"Merch"===l&&(null===(a=g[0])||void 0===a?void 0:a.productid)!=""?(0,r.jsx)("div",{className:"blueTextBlackBackground",children:(0,r.jsxs)(T.Z,{id:"type",name:"type",className:"mb-4 border-b-2 form inputSingleLineText",style:{backgroundColor:"white",textAlign:"center",color:"black",resize:"both",textAlignLast:"center",overflow:"none"},onChange(e){f(e.target.value)},children:[(0,r.jsx)("option",{value:"all",children:"Aggregate"}),g.map(e=>(0,r.jsx)("option",{value:e.productid,children:e.title}))]})}):(0,r.jsx)(r.Fragment,{}),c[0]?"":(0,r.jsx)("div",{className:"blueTextBlackBackground",children:(0,r.jsx)(M.Z,{style:{fontSize:"20px",paddingLeft:"15vw"},children:"\uD83D\uDE14 No Sales Yet"})}),"Merch"===l||"Perq"===l?(0,r.jsx)(et,{category:l,productid:m,title:null===(s=g.filter(e=>e.productid==m)[0])||void 0===s?void 0:s.title,variantname:null===(o=g.filter(e=>e.productid==m)[0])||void 0===o?void 0:o.variantname}):(0,r.jsx)(r.Fragment,{})]}):(0,r.jsx)(r.Fragment,{})})};var er=i(35969);let en=(0,a.Z)({tab:{fontSize:"18px",fontWeight:600},background:{secondary:"black"},root:{position:"fixed",bottom:5,width:"100%",display:"flex",flexDirection:"row",zIndex:999,borderRadius:"5px"}}),ea=e=>({width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen}),overflowX:"hidden"}),es=e=>({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:"calc(".concat(e.spacing(7)," + 1px)"),[e.breakpoints.up("sm")]:{width:"calc(".concat(e.spacing(8)," + 1px)")}}),eo=(0,s.ZP)("div")(e=>{let{theme:t}=e;return{display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1),...t.mixins.toolbar}}),el=(0,s.ZP)(d.ZP,{shouldForwardProp:e=>"open"!==e})(e=>{let{theme:t,open:i}=e;return{width:240,flexShrink:0,whiteSpace:"nowrap",boxSizing:"border-box",...i&&{...ea(t),"& .MuiDrawer-paper":ea(t)},...!i&&{...es(t),"& .MuiDrawer-paper":es(t)}}});function ed(){var e,t;let i=(0,o.Z)(),[a,s]=C.useState(!1),d=en(),[D,M]=(0,C.useState)(!1),[T,z]=(0,C.useState)(""),N=(null===(e=(0,Y.e)())||void 0===e?void 0:e.width)<(null===(t=(0,Y.e)())||void 0===t?void 0:t.height);(0,C.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await k.Z.refresh()),M(k.Z.validateCurrentUserRefreshToken()&&k.Z.validateCurrentUserAccessToken())}()},[]),(0,C.useEffect)(()=>{z(k.Z.getUsername())},[D]);let[P,B]=C.useState(0),E=(e,t)=>{B(t)},_=[(0,r.jsx)(ei,{category:"Videos"},1),(0,r.jsx)(ei,{category:"Courses"},2),(0,r.jsx)(ei,{category:"Merch"},3),(0,r.jsx)(ei,{category:"Perq"},4)],q=()=>{s(!0)},W=()=>{s(!1)};return(0,r.jsxs)("div",{children:[(0,r.jsxs)(F(),{children:[(0,r.jsx)("title",{children:"Crezalo: My Purchases"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("div",{style:{backgroundColor:"black",display:"flex",flexDirection:"row"},children:""!=T&&D?(0,r.jsxs)(r.Fragment,{children:[N?(0,r.jsx)(er.Z,{value:P,onChange(e,t){B(t)},showLabels:!0,className:d.root,children:["Videos","Courses","Merch","Tip Jar"].map((e,t)=>(0,r.jsx)("div",{style:{display:"flex",color:t==P?"blue":"primary",justifyContent:"space-around"},onClick:()=>E(event,t),children:(0,r.jsxs)(f.Z,{sx:{minHeight:48,justifyContent:a?"initial":"center",px:2.5},children:[(0,r.jsxs)(v.Z,{sx:{minWidth:0,mr:a?3:"auto",justifyContent:"center",padding:"5px",color:t==P?"#3b82f6":"primary"},children:[0===t?(0,r.jsx)(w.Z,{fontSize:"large"}):(0,r.jsx)(r.Fragment,{}),1===t?(0,r.jsx)(b.Z,{fontSize:"large"}):(0,r.jsx)(r.Fragment,{}),2===t?(0,r.jsx)(Z.Z,{fontSize:"large"}):(0,r.jsx)(r.Fragment,{}),3===t?(0,r.jsx)(S.Z,{fontSize:"large"}):(0,r.jsx)(r.Fragment,{})]}),(0,r.jsx)(y.Z,{primary:e,sx:{opacity:a?1:0}})]})},e))}):(0,r.jsx)("div",{style:{paddingTop:"10vh"},children:(0,r.jsx)(l.Z,{sx:{display:"flex"},children:(0,r.jsxs)(el,{variant:"permanent",open:a,children:[a?(0,r.jsx)(eo,{children:(0,r.jsx)(u.Z,{onClick:W,children:"rtl"===i.direction?(0,r.jsx)(j.Z,{}):(0,r.jsx)(g.Z,{})})}):(0,r.jsx)(c.Z,{children:(0,r.jsx)(u.Z,{color:"inherit","aria-label":"open drawer",onClick:q,edge:"start",sx:{marginRight:5,...a&&{display:"none"}},children:(0,r.jsx)(h.Z,{})})}),(0,r.jsx)(p.Z,{}),(0,r.jsx)(x.Z,{children:["Videos","Courses","Merch","Tip Jar"].map((e,t)=>(0,r.jsx)(m.ZP,{disablePadding:!0,sx:{display:"block",color:t==P?"blue":"primary"},onClick:()=>E(event,t),children:(0,r.jsxs)(f.Z,{sx:{minHeight:48,justifyContent:a?"initial":"center",px:2.5},children:[(0,r.jsxs)(v.Z,{sx:{minWidth:0,mr:a?3:"auto",justifyContent:"center",padding:"5px",color:t==P?"#3b82f6":"primary"},children:[0===t?(0,r.jsx)(w.Z,{fontSize:"large"}):(0,r.jsx)(r.Fragment,{}),1===t?(0,r.jsx)(b.Z,{fontSize:"large"}):(0,r.jsx)(r.Fragment,{}),2===t?(0,r.jsx)(Z.Z,{fontSize:"large"}):(0,r.jsx)(r.Fragment,{}),3===t?(0,r.jsx)(S.Z,{fontSize:"large"}):(0,r.jsx)(r.Fragment,{})]}),(0,r.jsx)(y.Z,{primary:e,sx:{opacity:a?1:0}})]})},e))})]})})}),(0,r.jsx)("div",{style:{width:N?"100vw":"90vw"},children:(0,r.jsx)(n.Z,{children:_[P]})})]}):(0,r.jsx)(r.Fragment,{})})]})}}},function(e){e.O(0,[7642,1762,2213,3595,9774,2888,179],function(){return e(e.s=67139)}),_N_E=e.O()}]);