"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{774:function(t,e){e.Z={src:"/_next/static/media/coming_soon.acba7764.png",height:3928,width:3953,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAAAcHBwEBAQ7OztPT09mZmYREREtLS16enqXTMCHAAAACXBIWXMAAJnKAACZygHjkaQiAAAALElEQVQImWNggAMmKMHEwszIyMwCYrCysnKAGGzM7OzMbCB5RkZGRrBCNAAADqcAYITRmVEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},405:function(t,e){e.Z={src:"/_next/static/media/instagram.2bef5ba5.png",height:1850,width:1850,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEVMaXHPCXOaFa2uDZqLIrbGAIHQB3J9LsFsRszhP1TobD34ugCZGKutCppdTNTxlBTmUkmzBpfgPVOcF6nymg7thCX1rABYUdfDAITbGF/NAHZ2NcRpQc1kRc/EzZZWAAAAHnRSTlMAhE8QWnhXXQleXAx2oE91UX6DWlhRoKZQYENWkIxwy9oCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVQImQXBgwHAQAAAsXubtfZfswl4qZ/qwZfs3Hd4ToMZ8q3YS1g5nKOH2W+hNVtjCvJC2lsMpihIawxW8QNgMQKYllQULgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},4855:function(t,e){e.Z={src:"/_next/static/media/twitter.67a0edbf.png",height:851,width:1034,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAALVBMVEUdm/Acm/AcmvAcm/Adm/AcmvAcmvAdm/Acm/Adm/Acmu8dm/Adm/Adm/Acm/AruKjLAAAADnRSTlMCF/FY+bDeu3DQNo89l7MCS9kAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAxSURBVAiZBcGFAcAwDMAwB0oD/39uJT5g5yjWiEgd/Obpttiq7QPHbhdQqTOgjvMNuC2aAXMwfKEbAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}},3457:function(t,e){e.Z={src:"/_next/static/media/youtube.da867d95.png",height:1686,width:2400,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAGFBMVEXNIB/NIB/MHx7PLi3mlJP00dHMGxrttrb+nIKYAAAABnRSTlP9uKz+/v6PwKXMAAAACXBIWXMAAA4sAAAOLAH5m+4QAAAAJ0lEQVQImTXKwQ0AIAjAwFMU9t/YKPHXtDVJDIi8iF3RVKsFL/35AAiOAE7rUpnNAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}},3458:function(t,e,a){a.d(e,{Z:function(){return Z}});var r=a(5893),s=a(7294),n=a(774),o=a(5675),i=a.n(o),l=a(1120),u=a(1749),c=a(162),A=a(2461),d=a(353),h=a(1163),g=a.n(h),p=a(4855),m=a(405),x=a(3457),f=a(3559),b=a(8538),w=a(8196);let y=(0,l.Z)(t=>({modal:{display:"flex",alignItems:"center",justifyContent:"center",overflowY:"scroll"},paper:{backgroundColor:t.palette.background.paper,borderRadius:"5%",boxShadow:t.shadows[5],color:"black",margin:"5px",padding:t.spacing(2,4,3)},button:{fontSize:20,fontWeight:"bold",textAlign:"center",width:"40%",margin:"70px 20px 10px 0px"},edit:{margin:"10px","&:hover":{color:"rgb(76, 175, 80)"}},error:{color:"red",fontSize:"16px",backgroundColor:"white",borderRadius:"5px"},textfield:{minWidth:"100%","& .MuiFormLabel-root":{fontSize:"18px"}}}));(0,f.Z)({overrides:{MuiTooltip:{tooltip:{fontSize:"15px"}}}});let j=t=>{let{request:e}=t,a=y(),[n,o]=(0,s.useState)(!1),l=e.usermessage.split("###--###"),u=e.creatorresponse.split("###--###"),c=Date.now()-Date.parse(e.lastupdatedat);m.Z,x.Z,p.Z;let[A,h]=(0,s.useState)("");return(0,s.useEffect)(()=>{(async function(){if(""!=e.creator){var t;let a=await (0,w.A)(e.creator,"displaypicture");h(null===(t=a[0])||void 0===t?void 0:t.displaypicture)}})()},[e.creator]),(0,r.jsx)(r.Fragment,{children:e.creator?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("section",{className:"purchaseCard",style:{width:"100%"},children:[(0,r.jsxs)("div",{className:"reqImage",children:[""!=A?(0,r.jsx)(i(),{src:A,alt:"",width:50,height:50,className:"creatorDP"}):(0,r.jsx)(d.Z,{size:50,value:e.creator}),(0,r.jsx)("h2",{className:"hovergreen viewMore pointer",style:{fontSize:"18px",fontWeight:"bold",textAlign:"center",padding:"5px 0 0 15px",margin:"5px 40px 5px 20px"},onClick:()=>g().push({pathname:"/creatorprofile",query:{address:e.creator}}),children:e.creator}),(0,r.jsxs)("div",{style:{margin:"5px 0 5px 40px"},children:[(0,r.jsxs)("p",{className:0==e.status?"Pending":1==e.status?"AcceptedAndWaiting":2==e.status?"Completed":"Rejected",style:{fontSize:"15px",marginRight:"15px",textAlign:"center",borderRadius:"35%",padding:"5px"},children:[0==e.status?"Pending":1==e.status?"Approved":2==e.status?"Completed":"Rejected"," "]})," "]})]}),(0,r.jsxs)("div",{style:{width:"100%",float:"left",paddingLeft:"20px",paddingRight:"20px",fontSize:16,justifyContent:"center",textAlign:"center",marginTop:"5px"},children:[(0,r.jsxs)("p",{style:{fontSize:"13px",color:"white",margin:"10px 0 15px 0"},children:["Updated"," ",c>864e5?new Date(Date.parse(e.lastupdatedat)).getDate()+" "+["January","February","March","April","May","June","July","August","September","October","November","December"][new Date(Date.parse(e.lastupdatedat)).getMonth()]+" "+new Date(Date.parse(e.lastupdatedat)).getFullYear():c>36e5?Math.round(c/36e5)+"h ago":c>6e4?Math.round(c/6e4)+"m ago":c>1e3?Math.round(c/1e3)+"s ago":""]}),(0,r.jsxs)("div",{className:a.paper,children:[(0,r.jsxs)("div",{style:{margin:"10px"},children:[(0,r.jsx)("p",{style:{color:"#3B82F6",fontWeight:"bold"},children:"Message To Creator"}),(0,r.jsx)(b.Z,{value:l[0],className:a.textfield,placeholder:"Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",type:"text",multiline:!0,rows:5,InputLabelProps:{shrink:!0},variant:"outlined",onChange(t){}})]}),l.map((t,e)=>0!=e?(0,r.jsxs)("div",{style:{margin:"10px"},children:[(0,r.jsxs)("p",{style:{color:"#3B82F6",fontWeight:"bold"},children:["Link ",e]}),(0,r.jsx)(b.Z,{value:t,className:a.textfield,placeholder:"Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",type:"url",InputLabelProps:{shrink:!0},variant:"outlined",onChange(t){}})]}):(0,r.jsx)(r.Fragment,{})),(0,r.jsxs)("div",{style:{margin:"10px"},children:[(0,r.jsx)("p",{style:{color:"#3B82F6",fontWeight:"bold"},children:"Creator Response"}),(0,r.jsx)(b.Z,{value:u[0],className:a.textfield,placeholder:"No Response From Creator Yet..",type:"text",multiline:!0,rows:5,InputLabelProps:{shrink:!0},variant:"outlined",onChange(t){}})]}),u.map((t,e)=>0!=e?(0,r.jsxs)("div",{style:{margin:"10px"},children:[(0,r.jsxs)("p",{style:{color:"#3B82F6",fontWeight:"bold"},children:["Link ",e]}),(0,r.jsx)(b.Z,{value:t,className:a.textfield,placeholder:"Type you shoutout request here, usually it should contain what the creator has to share amongst their social media followers. It can be a photo or a video and describing what it is about. This can be used for individual shoutouts as well as for brand promotions ...",type:"url",InputLabelProps:{shrink:!0},variant:"outlined",onChange(t){}})]}):(0,r.jsx)(r.Fragment,{}))]})]}),(0,r.jsx)("div",{style:{fontSize:"15px",width:"100%",color:"black"},children:"Nothing To See Here"})]})}):(0,r.jsx)(r.Fragment,{})})};var v=a(7054),C=a(5390);let M=(0,l.Z)(t=>({paper:{textAlign:"center",backgroundColor:t.palette.background.paper,justifyContent:"center",borderRadius:"5px"}})),N=t=>{let{request:e}=t;return(0,r.jsx)(u.Z,{item:!0,xs:12,sm:12,md:12,children:(0,r.jsx)(j,{request:e})})},S=t=>{let{category:e,type:a,platform:o,creator:l}=t,d=M(),[h,g]=s.useState(0);var p=0,m=0,x=0,f=0;let b=(t,e)=>{g(e)},[w,y]=(0,s.useState)([{creator:"",platform:0,usermessage:"",creatorresponse:"",status:0,lastupdatedat:""}]);(0,s.useEffect)(()=>{!async function(){let t=[];"user"==a?("shoutout"==e?t=await (0,A.rE)():"collab"==e&&(t=await (0,c.sL)()),y(t)):"creator"==a&&("shoutout"==e?t=await (0,A.Mn)(l):"collab"==e&&(t=await (0,c.kJ)(l)),y(t)),console.log("result"),console.log(t)}()},[]);for(var j=0;j<w.length;j++)0==w[j].status&&w[j].platform.toString()==o?p+=1:1==w[j].status&&w[j].platform.toString()==o?m+=1:2==w[j].status&&w[j].platform.toString()==o?x+=1:3==w[j].status&&w[j].platform.toString()==o&&(f+=1);return(0,r.jsx)("div",{className:"blueTextBlackBackground",style:{justifyContent:"center"},children:"perq"==e||"merch"==e?(0,r.jsx)("div",{className:"blueTextBlackBackground",style:{justifyContent:"center",textAlign:"center"},children:(0,r.jsx)(i(),{src:n.Z,alt:"",width:500,height:500})}):(0,r.jsxs)("div",{style:{marginLeft:"10%",marginRight:"10%"},children:[(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsxs)(C.Z,{value:h,exclusive:!0,onChange:b,className:d.paper,children:[(0,r.jsxs)(v.Z,{value:0,children:["Pending (",p,")"]}),(0,r.jsxs)(v.Z,{value:1,children:["Approved (",m,")"]}),(0,r.jsxs)(v.Z,{value:2,children:["Completed (",x,")"]}),(0,r.jsxs)(v.Z,{value:3,children:["Rejected (",f,")"]})]})}),(0,r.jsx)(u.Z,{container:!0,spacing:2,children:w.map((t,e)=>(0,r.jsx)(r.Fragment,{children:t.platform==parseInt(o)&&t.status==h?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(N,{request:t},e)}):(0,r.jsx)(r.Fragment,{})}))})]})})};var Z=S},162:function(t,e,a){a.d(e,{ij:function(){return u},kJ:function(){return l},sL:function(){return i}});var r=a(9669),s=a.n(r),n=a(6095);let o="http://localhost:5000/";async function i(){try{if(!(0,n.z)().Authorization)return"Not Logged In";{let t=await s().get(o+"user_colab/allcreators",{headers:(0,n.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(e){console.log(e)}}async function l(t){try{if(!(0,n.z)().Authorization)return"Not Logged In";{let e=await s().get(o+"user_colab/"+t,{headers:(0,n.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(a){console.log(a)}}async function u(){try{if(!(0,n.z)().Authorization)return"Not Logged In";{let t=await s().get(o+"user_colab/creator",{headers:(0,n.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(e){console.log(e)}}},2461:function(t,e,a){a.d(e,{Mn:function(){return l},Nn:function(){return u},rE:function(){return i}});var r=a(9669),s=a.n(r),n=a(6095);let o="http://localhost:5000/";async function i(){try{if(!(0,n.z)().Authorization)return"Not Logged In";{let t=await s().get(o+"user_shoutout/allcreators",{headers:(0,n.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(e){console.log(e)}}async function l(t){try{if(!(0,n.z)().Authorization)return"Not Logged In";{let e=await s().get(o+"user_shoutout/"+t,{headers:(0,n.z)()});if(e.data.isSuccessful)return e.data.result;return e.data.errorMsg}}catch(a){console.log(a)}}async function u(){try{if(!(0,n.z)().Authorization)return"Not Logged In";{let t=await s().get(o+"user_shoutout/creator",{headers:(0,n.z)()});if(t.data.isSuccessful)return t.data.result;return t.data.errorMsg}}catch(e){console.log(e)}}}}]);