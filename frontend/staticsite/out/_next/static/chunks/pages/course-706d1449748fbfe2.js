(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{14957:function(e,i,t){"use strict";var r=t(64836);i.Z=void 0;var s=r(t(64938)),n=t(85893),o=(0,s.default)((0,n.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");i.Z=o},12909:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/course",function(){return t(18478)}])},18478:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return p}});var r=t(85893),s=t(67294),n=t(65550),o=t(11163),c=t.n(o),l=t(17563),a=t(9008),d=t.n(a),h=t(52135),u=t(25675),v=t.n(u),f=t(44054),x=t(86554),w=t(97520),j=t(50717);function p(){let e=(0,o.useRouter)(),{courseid:i}=e.query;if(!i){let t=e.asPath;i=l.parseUrl(t).query.courseid}var a,u,[p,y]=(0,s.useState)("");let[g,m]=(0,s.useState)(!1),[_,N]=(0,s.useState)(""),S=(null===(a=(0,w.eI)())||void 0===a?void 0:a.width)<(null===(u=(0,w.eI)())||void 0===u?void 0:u.height);(0,s.useEffect)(()=>{!async function(){console.log("AuthService.refresh()"),console.log(await h.Z.refresh()),m(h.Z.validateCurrentUserRefreshToken()&&h.Z.validateCurrentUserAccessToken())}()},[]),(0,s.useEffect)(()=>{N(h.Z.getUsername())},[g]),(0,s.useEffect)(()=>{!async function(){if(i){let e=await (0,n.sv)(i.toString());y(e[0].signedurl)}}()},[_]);let[k,C]=(0,s.useState)({title:"",description:"",creator:""});return(0,s.useEffect)(()=>{(async function(){if(i){let e=await (0,n.kS)(i.toString());C(e[0])}})()},[_]),(0,r.jsxs)("div",{children:[(0,r.jsxs)(d(),{children:[(0,r.jsx)("title",{children:k.title}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,r.jsx)("div",{style:{backgroundColor:"black"},children:g&&p?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:{display:"flex",flexDirection:"column"},children:(0,r.jsxs)("div",{className:"videoDiv",id:"DemoVideoAndCourseInfo",children:[(0,r.jsxs)("div",{style:{flexDirection:S?"column":"row",display:"flex"},children:[(0,r.jsx)("div",{children:(0,r.jsx)("video",{controls:!0,autoPlay:!0,crossOrigin:"anonymous",controlsList:"nodownload",style:{height:S?"60vw":"35vh",width:S?"90vw":"35vw",borderRadius:"5%"},children:(0,r.jsx)("source",{src:p,type:"video/mp4"})})}),(0,r.jsxs)("div",{style:{margin:S?"5px":"2vh 10vw 10vh 10vw",maxWidth:S?"100vw":"50vw"},children:[(0,r.jsx)("h1",{className:"videoDiv h1",children:k.title}),(0,r.jsxs)("div",{onClick(){c().push({pathname:"/creatorprofile",query:{address:k.creator}})},className:"creatorIdent pointer",children:[(0,r.jsx)("div",{className:"creatorImageMinor",children:(0,r.jsx)(x.Z,{creator:k.creator,height:50,width:50})}),(0,r.jsx)("h2",{className:"VideoDiv h2",children:k.creator})]}),(0,r.jsx)("h1",{className:"VideoDiv p",children:k.description})]})]}),(0,r.jsx)(f.Z,{creator:k.creator,onCreatorProfile:!1,category:"SeriesVideoGrid",seriesid:i.toString(),onVideoPlayer:!1,onCoursePage:!0})]})})}):(0,r.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",paddingTop:"30vh",height:"100vh",width:"100vw"},children:(0,r.jsx)(v(),{src:j.Z,height:"150",width:"150",alt:"",style:{width:"150px",height:"150px"}})})})]})}}},function(e){e.O(0,[7642,3461,4054,9774,2888,179],function(){return e(e.s=12909)}),_N_E=e.O()}]);