(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1893],{16034:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/creatorprofile",function(){return i(67788)}])},67788:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return k}});var r=i(85893),n=i(52135),o=i(25675),l=i.n(o),s=i(67294),a=i(38196),d=i(11163),c=i(9008),u=i.n(c),h=i(17563),x=i(40103),f=i(99030),m=i(31763),v=i(86554),j=i(74287),g=i(79934),p=i(85476),y=i(81760),w=i(98378),b=i(97520),S=i(50717);let C={root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:3,border:0,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white"},copyContainer:{border:"1px solid blue",background:"rgb(0,0,0,0.7)"},title:{textAlign:"center",color:"white",fontStyle:"italic"}};function k(){var e,t;let i=(0,d.useRouter)(),{address:o,tab:c}=i.query;if(!o){let k=i.asPath;o=h.parseUrl(k).query.address}if(!c){let Z=i.asPath;c=h.parseUrl(Z).query.tab}let[z,_]=(0,s.useState)(""),[E,N]=(0,s.useState)(!1),[T,B]=(0,s.useState)(!0),F=(null===(e=(0,b.eI)())||void 0===e?void 0:e.width)<(null===(t=(0,b.eI)())||void 0===t?void 0:t.height);(0,s.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await n.Z.refresh()),N(n.Z.validateCurrentUserRefreshToken()&&n.Z.validateCurrentUserAccessToken())}()},[]),(0,s.useEffect)(()=>{_(n.Z.getUsername())},[E]);let[P,D]=(0,s.useState)({username:"",fname:"",lname:"",bio:"",iscreator:!0,displaypicture:"",twitterhandle:"",instagram:"",youtube:"",website:""});return(0,s.useEffect)(()=>{(async function(){if(""!=o){let e=await (0,a.is)(null==o?void 0:o.toString());e[0]&&"string"!=typeof e?D(e[0]):B(!1)}})()},[o]),console.log(T),(0,r.jsxs)("div",{children:[(0,r.jsxs)(u(),{children:[(0,r.jsx)("title",{children:(null==P?void 0:P.fname)?(null==P?void 0:P.fname)+" "+(null==P?void 0:P.lname):"Crezalo: Creator Profile"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("div",{style:{backgroundColor:"black"},children:E&&z?(0,r.jsx)("div",{className:F?"blueTextBlackBackgroundMobile":"blueTextBlackBackground",style:{fontSize:25},children:T?(0,r.jsx)(r.Fragment,{children:(null==P?void 0:P.username)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{creator:P}),(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{className:"creatorImageDiv",children:(0,r.jsx)(v.Z,{creator:P.username,height:125,width:125})}),F?(0,r.jsx)("div",{className:"description",children:(0,r.jsx)("div",{style:{minWidth:"25vw",justifyContent:"center"}})}):(0,r.jsx)("div",{className:"description",children:(0,r.jsxs)("div",{style:{minWidth:"25vw",justifyContent:"center"},children:[(0,r.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold",color:"white"},children:P.username}),(0,r.jsx)("div",{style:{fontSize:"16px",color:"white"},children:P.fname+" "+P.lname}),""!=P.bio?(0,r.jsx)("div",{style:{fontSize:"16px",color:"white"},children:P.bio}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)(m.Z,{creator:P})]})}),(0,r.jsx)(y.Z,{modalButtonText:(0,r.jsx)(g.Z,{title:"Share Crezalo",children:(0,r.jsx)(j.Z,{className:"pointer",style:{fontSize:"30px",color:"lightgrey"}})}),modalBody:(0,r.jsx)(p.Z,{title:"Share "+P.fname+"'s Crezalo",url:"crezalo.com/@"+P.username,socialTypes:["whatsapp","telegram","twitter","linkedin","facebook","reddit"],linkTypes:["normal","videos","course","merch","tip"],onSocialButtonClicked:e=>console.log(e),style:C,onCreatorProfile:!0}),formatting:!0})]}),F?(0,r.jsx)("div",{className:"descriptionMobile",children:(0,r.jsxs)("div",{style:{minWidth:"25vw",justifyContent:"center"},children:[(0,r.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold",color:"white"},children:P.username}),(0,r.jsx)("div",{style:{fontSize:"16px",color:"white"},children:P.fname+" "+P.lname}),""!=P.bio?(0,r.jsx)("div",{style:{fontSize:"16px",color:"white"},children:P.bio}):(0,r.jsx)(r.Fragment,{}),(0,r.jsx)(m.Z,{creator:P}),(0,r.jsx)("br",{})]})}):(0,r.jsx)(r.Fragment,{}),F?(0,r.jsx)(w.Z,{onCreatorProfile:!0,creator:P.username,isCreator:!0,tab:null==c?void 0:c.toString()}):(0,r.jsx)(x.Z,{onCreatorProfile:!0,creator:P.username,isCreator:!0,tab:null==c?void 0:c.toString()})]}):(0,r.jsx)(r.Fragment,{})}):(0,r.jsxs)("div",{style:{textAlign:"center",marginTop:"15vh"},children:["\uD83D\uDE14 ",o," not found"]})}):(0,r.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",paddingTop:"30vh",height:"100vh",width:"100vw"},children:(0,r.jsx)(l(),{src:S.Z,height:"150",width:"150",alt:"",style:{width:"150px",height:"150px"}})})})]})}}},function(e){e.O(0,[6319,7642,9565,3461,1762,9418,4010,4054,6374,9794,9774,2888,179],function(){return e(e.s=16034)}),_N_E=e.O()}]);