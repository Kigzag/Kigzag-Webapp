(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[661],{52234:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/discordplans",function(){return c(13790)}])},37878:function(a,b){"use strict";b.Z={src:"/_next/static/media/green-tick.c86f07ad.gif",height:498,width:494}},13790:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return Q}});var d=c(28520),e=c.n(d),f=c(85893),g=c(11163),h=c(25675),i=c(67294),j=c(95477),k=c(69795),l=c(99344),m=c(87357),n=c(48514),o=c(44073),p=c(62023),q=c(44267),r=c(78445),s=c(66720),t=c(86886),u=c(43329),v=c(15861),w=c(50122),x=c(42287),y=c(27948),z=c(6785),A=c(17563);c(40821);var B=JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_creator\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"ctoken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"_of\",\"type\":\"address\"}],\"name\":\"tokensBurnt\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"ctoken\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"}],\"name\":\"tokensMinted\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"burnMyTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_basetoken\",\"type\":\"address\"}],\"name\":\"buyTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"creator\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"dao\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_dao\",\"type\":\"address\"}],\"name\":\"initialize\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mintTokens\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]"),C=c(45307);c(72781);var D=c(35919),E=c(51295),F=c(41120),G=c(857),H=c(32692),I=c(87253),J={src:"/_next/static/media/waiting.e38f3720.gif",height:1140,width:885},K=c(37878),L=c(72739),M=c(9008);function N(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(j){c(j);return}h.done?b(i):Promise.resolve(i).then(d,e)}function O(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){var f=a.apply(b,c);function g(a){N(f,d,e,g,h,"next",a)}function h(a){N(f,d,e,g,h,"throw",a)}g(void 0)})}}var P=(0,F.Z)(function(a){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{borderRadius:"5px",boxShadow:a.shadows[5],color:"white",backgroundColor:"#ffff",padding:a.spacing(2,4,3)}}});function Q(){var a,b,c=(0,g.useRouter)(),d=(0,k.Ge)(),F=d.chainId,N=d.account,Q=d.library,R=c.query.linkid;if(!R){var S=c.asPath;R=A.parseUrl(S).query.linkid}var T=(0,i.useState)({linkid:"",user_discord_id:"",serverid:"",starttime:"",creator:"",symbol:"",name:"","1month":0,"3months":0,"1year":0}),U=T[0],V=T[1],W=(0,i.useState)(!1),X=W[0],Y=W[1],Z=(0,i.useState)("NOT_STARTED"),$=Z[0],_=Z[1],aa=(0,i.useState)(""),ba=aa[0],ca=aa[1];!function(){(0,i.useEffect)(function(){function a(){return(a=O(e().mark(function a(){var b;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,l.GG)(N,Q,(null!=R?R:"").toString());case 2:"Link Not Available"==(b=a.sent)?Y(!0):(Y(!1),V(b));case 4:case"end":return a.stop()}},a)}))).apply(this,arguments)}!function(){return a.apply(this,arguments)}()},[N,F])}();var da,ea=null!==(b=(0,D.lD)(E.v7[F],null!==(a=U.creator)&& void 0!==a?a:"").data)&& void 0!==b?b:"",fa=(da=ea,(0,C.Z)(da,B));function ga(a){return ha.apply(this,arguments)}function ha(){return(ha=O(e().mark(function a(b){var c;return e().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fa.burnMyTokens(b.toString()).then(function(a){_("WAITING"),ca(a.hash),ma(),Q.getTransactionReceipt(ba).then(function(a){if(null===a)throw console.debug("Retrying tranasaction receipt for ".concat(ba)),new L.s1();setTimeout(function(){_("COMPLETED"),setTimeout(function(){return na(),console.log("receipt"),console.log(a),a},1000)},10e3)})}).catch(function(a){return console.log(a)});case 2:c=a.sent;case 3:case"end":return a.stop()}},a)}))).apply(this,arguments)}var ia=P(),ja=(0,i.useState)(!1),ka=ja[0],la=ja[1],ma=function(){return la(!0)},na=function(){return la(!1)},oa=[{title:"1 Month",price:U["1month"],description:[],buttonText:"Buy Now",buttonVariant:"outlined"},{title:"3 Months",subheader:"Most popular",price:U["3months"],description:[],buttonText:"Buy Now",buttonVariant:"outlined"},{title:"1 Year",price:U["1year"],description:[],buttonText:"Buy Now",buttonVariant:"outlined"},];return(0,f.jsxs)("div",{children:[(0,f.jsxs)(M.default,{children:[(0,f.jsx)("title",{children:"Discord Plans"}),(0,f.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,f.jsx)("div",{children:R&&!X?(0,f.jsx)(f.Fragment,{children:N?(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(x.Z,{styles:{ul:{margin:0,padding:0,listStyle:"none"}}}),(0,f.jsx)(s.ZP,{}),(0,f.jsx)(y.Z,{className:"blueTextBlackBackground",children:(0,f.jsxs)(y.Z,{disableGutters:!0,maxWidth:"sm",component:"main",sx:{pt:8,pb:6},children:[(0,f.jsxs)(v.Z,{component:"h6",variant:"h5",align:"center",color:"#3b82f6",gutterBottom:!0,children:[U.name," Discord Plans"]}),(0,f.jsx)(v.Z,{variant:"h6",align:"center",color:"white",component:"p",children:"Exclusive interaction directly with me and my top fans."})]})}),(0,f.jsxs)(y.Z,{maxWidth:"md",component:"main",children:[(0,f.jsx)(t.ZP,{container:!0,spacing:5,alignItems:"flex-end",children:oa.map(function(a){return(0,f.jsx)(t.ZP,{item:!0,xs:12,sm:"1 Year"===a.title?12:6,md:4,children:(0,f.jsxs)(o.Z,{children:[(0,f.jsx)(r.Z,{title:a.title,subheader:a.subheader,titleTypographyProps:{align:"center"},action:"3 Months"===a.title?(0,f.jsx)(u.Z,{}):null,subheaderTypographyProps:{align:"center"},sx:{backgroundColor:function(a){return"light"===a.palette.mode?a.palette.grey[200]:a.palette.grey[700]}}}),(0,f.jsxs)(q.Z,{children:[(0,f.jsx)(m.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"baseline",mb:2},children:(0,f.jsxs)(v.Z,{component:"h2",variant:"h3",color:"#3b82f6",children:[a.price," ",U.symbol]})}),(0,f.jsx)("ul",{children:a.description.map(function(a){return(0,f.jsx)(v.Z,{component:"li",variant:"subtitle1",align:"center",children:a},a)})})]}),(0,f.jsx)(p.Z,{children:(0,f.jsx)(n.Z,{fullWidth:!0,variant:a.buttonVariant,onClick:O(e().mark(function b(){return e().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return b.next=2,ga(10e17*a.price);case 2:case"end":return b.stop()}},b)})),children:a.buttonText})})]})},a.title)})}),(0,f.jsx)(G.Z,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:ia.modal,open:ka,onClose:na,closeAfterTransition:!0,BackdropComponent:H.Z,BackdropProps:{timeout:500},children:(0,f.jsx)(I.Z,{in:ka,children:(0,f.jsx)("div",{className:ia.paper,children:"NOT_STARTED"===$?(0,f.jsx)(f.Fragment,{}):(0,f.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,f.jsx)("p",{style:{color:"#3b82f6",fontWeight:"bold",fontSize:20,textAlign:"center"},children:"WAITING"===$?"Processing, Please Wait!":"Succesful !!!"}),"WAITING"===$?(0,f.jsx)(h.default,{src:J,alt:"",width:200,height:200}):(0,f.jsx)(h.default,{src:K.Z,alt:"",width:200,height:200}),(0,f.jsx)(w.Z,{children:(0,f.jsx)("a",{href:(0,L.D4)("Transaction",[F,ba,"",]),target:"_blank",rel:"noopener noreferrer",style:{fontSize:20,fontWeight:"bold"},children:(0,L.pm)(ba,10)})})]})})})}),(0,f.jsxs)(y.Z,{disableGutters:!0,maxWidth:"sm",component:"main",sx:{pt:4,pb:2},children:[(0,f.jsx)(v.Z,{variant:"h6",align:"center",color:"white",component:"p",children:(0,f.jsxs)(n.Z,{fullWidth:!0,variant:"contained",style:{width:"40%",backgroundColor:"#3b82f6"},onClick:function(){g.default.push({pathname:"/creatorprofile",query:{address:U.creator}})},children:["Get ",U.symbol," here"]})}),(0,f.jsxs)(v.Z,{variant:"body2",align:"center",color:"white",component:"p",style:{marginTop:"10px"},children:["For Accepted Payments refer"," ",(0,f.jsx)(w.Z,{children:(0,f.jsx)("a",{href:"https://kigzag.com/#payments",target:"_blank",rel:"noreferrer",children:"here"})})]})]})]})]}):(0,f.jsx)(f.Fragment,{children:"string"!=typeof N?(0,f.jsx)(z.Z,{}):(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(j.Z,{style:{display:"flex",margin:"auto",height:"80vh"}})})})}):(0,f.jsxs)(y.Z,{disableGutters:!0,maxWidth:"lg",component:"main",sx:{pt:8,pb:6},children:[(0,f.jsx)(v.Z,{component:"h1",variant:"h3",align:"center",color:"#3b82f6",gutterBottom:!0,style:{marginBottom:"40px",marginTop:"40px"},children:"Invalid or Expired Link!!!"}),(0,f.jsx)(v.Z,{variant:"h6",align:"center",color:"white",component:"p",style:{marginBottom:"20px"},children:"⇰ Check if the link is same as shared by Kigzag Bot."}),(0,f.jsx)(v.Z,{variant:"h6",align:"center",color:"white",component:"p",style:{marginBottom:"20px"},children:"⇰ Generated links are valid only for 30 mins."}),(0,f.jsx)(v.Z,{variant:"h6",align:"center",color:"white",component:"p",style:{marginBottom:"20px"},children:"`⇰` If it's beyond 30 mins please rejoin the Discord server, Kigzag Bot will generate new link for you."})]})})]})}}},function(a){a.O(0,[791,294,735,156,919,774,888,179],function(){return a(a.s=52234)}),_N_E=a.O()}])