(this["webpackJsonpreact-video-call"]=this["webpackJsonpreact-video-call"]||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(53),r=n.n(i),l=(n(59),n(14)),s=n.n(l),o=n(7),j=n(54),d=n(27),u=n.n(d),b=n(0),O=Object(c.createContext)(),v=Object(j.io)("https://praneeth-video-call.glitch.me/"),m=function(e){var t=e.children,n=Object(c.useState)(null),a=Object(o.a)(n,2),i=a[0],r=a[1],l=Object(c.useState)(""),s=Object(o.a)(l,2),j=s[0],d=s[1],m=Object(c.useState)({}),h=Object(o.a)(m,2),x=h[0],f=h[1],p=Object(c.useState)(!1),g=Object(o.a)(p,2),C=g[0],_=g[1],y=Object(c.useState)(!1),I=Object(o.a)(y,2),w=I[0],N=I[1],D=Object(c.useState)(""),S=Object(o.a)(D,2),k=S[0],R=S[1],E=Object(c.useRef)(),V=Object(c.useRef)(),A=Object(c.useRef)();Object(c.useEffect)((function(){navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){r(e),E.current.srcObject=e})),v.on("me",(function(e){return d(e)})),v.on("calluser",(function(e){var t=e.from,n=e.name,c=e.signal;f({isReceivedCall:!0,from:t,name:n,signal:c})}))}),[]);return Object(b.jsx)(O.Provider,{value:{call:x,callAccepted:C,myVideo:E,userVideo:V,stream:i,name:k,setName:R,callEnded:w,me:j,callUser:function(e){var t=new u.a({initiator:!0,trickle:!1,stream:i});t.on("signal",(function(t){v.emit("calluser",{userToCall:e,signalData:t,from:j,name:k})})),t.on("stream",(function(e){V.current.srcObject=e})),v.on("callaccepted",(function(e){_(!0),t.signal(e)})),A.current=t},leaveCall:function(){N(!0),A.current.destroy(),window.location.reload()},answerCall:function(){_(!0);var e=new u.a({initiator:!1,trickle:!1,stream:i});e.on("signal",(function(e){v.emit("answercall",{signal:e,to:x.from})})),e.on("stream",(function(e){V.current.srcObject=e})),e.signal(x.signal),A.current=e}},children:t})};var h=function(){var e=Object(c.useContext)(O),t=e.name,n=e.callAccepted,a=e.myVideo,i=e.userVideo,r=e.callEnded,l=e.stream,o=e.call;return Object(b.jsxs)("div",{className:s.a.mainDiv,children:[l&&Object(b.jsxs)("div",{className:s.a.videoGridItem,children:[Object(b.jsx)("h1",{children:t||"Me"}),Object(b.jsx)("video",{playsInline:!0,muted:!0,ref:a,autoPlay:!0})]}),n&&!r&&Object(b.jsxs)("div",{className:s.a.videoGridItem,children:[Object(b.jsx)("h1",{children:o.name||"Name"}),Object(b.jsx)("video",{playsInline:!0,ref:i,autoPlay:!0})]})]})};var x=function(){var e=Object(c.useContext)(O),t=e.me,n=e.callAccepted,a=e.name,i=e.setName,r=e.callEnded,l=e.leaveCall,j=e.callUser,d=e.answerCall,u=e.call,v=Object(c.useState)(""),m=Object(o.a)(v,2),h=m[0],x=m[1];return Object(b.jsxs)("div",{className:s.a.optionsDiv,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",placeholder:"Your Name",value:a,onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("button",{onClick:function(){return navigator.clipboard.writeText(t)},children:"Copy ID"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",placeholder:"ID to call",value:h,onChange:function(e){return x(e.target.value)}}),n&&!r?Object(b.jsx)("button",{onClick:l,children:"Hang Up"}):Object(b.jsx)("button",{onClick:function(){return j(h)},children:"Call"})]}),u.isReceivedCall&&!n&&Object(b.jsxs)("div",{children:[u.name," is callng:",Object(b.jsx)("button",{onClick:d,children:"Answer"})]})]})},f=n(15),p=n(21),g=n.n(p);var C=function(e){var t=e.children;return Object(b.jsxs)("div",{className:g.a.bgContainer,children:[Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"Call Me"}),Object(b.jsx)("div",{className:g.a.headerIconContainer,children:Object(b.jsx)(f.d,{})})]}),t,Object(b.jsxs)("footer",{children:[Object(b.jsx)("div",{children:Object(b.jsx)(f.e,{})}),Object(b.jsx)("div",{children:Object(b.jsx)(f.b,{})}),Object(b.jsx)("div",{className:g.a.bgRed,children:Object(b.jsx)(f.c,{})}),Object(b.jsx)("div",{children:Object(b.jsx)(f.a,{})})]})]})};var _=function(){return Object(b.jsxs)(C,{children:[Object(b.jsx)(h,{}),Object(b.jsx)(x,{})]})};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(m,{children:Object(b.jsx)(_,{})})}),document.getElementById("root"))},14:function(e,t,n){e.exports={mainDiv:"components_mainDiv__1ShOV",videoGridItem:"components_videoGridItem__2zBQu",optionsDiv:"components_optionsDiv__3tr06"}},21:function(e,t,n){e.exports={bgContainer:"layout_bgContainer__2rEjF",headerIconContainer:"layout_headerIconContainer__2ggJE",bgRed:"layout_bgRed__erId6"}},59:function(e,t,n){},90:function(e,t){},92:function(e,t){}},[[101,1,2]]]);
//# sourceMappingURL=main.e66d1556.chunk.js.map