(this["webpackJsonpcrypto-redux-router"]=this["webpackJsonpcrypto-redux-router"]||[]).push([[8],{504:function(e,t,n){"use strict";function o(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return o}))},621:function(e,t,n){"use strict";var o=n(480),r=n(7),a=n(1),i=(n(58),n(481)),c=n(483),l=a.forwardRef((function(e,t){var n=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,d=e.square,u=void 0!==d&&d,p=e.elevation,f=void 0===p?1:p,b=e.variant,h=void 0===b?"elevation":b,m=Object(o.a)(e,["classes","className","component","square","elevation","variant"]);return a.createElement(s,Object(r.a)({className:Object(i.default)(n.root,c,"outlined"===h?n.outlined:n["elevation".concat(f)],!u&&n.rounded),ref:t},m))}));t.a=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,n){t["elevation".concat(n)]={boxShadow:e}})),Object(r.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(l)},622:function(e,t,n){"use strict";var o=n(7),r=n(480),a=n(1),i=(n(58),n(481)),c=n(483),l=n(485),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=a.forwardRef((function(e,t){var n=e.align,c=void 0===n?"inherit":n,d=e.classes,u=e.className,p=e.color,f=void 0===p?"initial":p,b=e.component,h=e.display,m=void 0===h?"initial":h,v=e.gutterBottom,y=void 0!==v&&v,g=e.noWrap,x=void 0!==g&&g,E=e.paragraph,k=void 0!==E&&E,O=e.variant,j=void 0===O?"body1":O,w=e.variantMapping,C=void 0===w?s:w,R=Object(r.a)(e,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),S=b||(k?"p":C[j]||s[j])||"span";return a.createElement(S,Object(o.a)({className:Object(i.default)(d.root,u,"inherit"!==j&&d[j],"initial"!==f&&d["color".concat(Object(l.a)(f))],x&&d.noWrap,y&&d.gutterBottom,k&&d.paragraph,"inherit"!==c&&d["align".concat(Object(l.a)(c))],"initial"!==m&&d["display".concat(Object(l.a)(m))]),ref:t},R))}));t.a=Object(c.a)((function(e){return{root:{margin:0},body2:e.typography.body2,body1:e.typography.body1,caption:e.typography.caption,button:e.typography.button,h1:e.typography.h1,h2:e.typography.h2,h3:e.typography.h3,h4:e.typography.h4,h5:e.typography.h5,h6:e.typography.h6,subtitle1:e.typography.subtitle1,subtitle2:e.typography.subtitle2,overline:e.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorTextPrimary:{color:e.palette.text.primary},colorTextSecondary:{color:e.palette.text.secondary},colorError:{color:e.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},739:function(e,t,n){"use strict";var o=n(7),r=n(480),a=n(1),i=(n(58),n(481)),c=n(483),l=n(622),s=a.forwardRef((function(e,t){var n=e.children,c=e.classes,s=e.className,d=e.disableTypography,u=void 0!==d&&d,p=Object(r.a)(e,["children","classes","className","disableTypography"]);return a.createElement("div",Object(o.a)({className:Object(i.default)(c.root,s),ref:t},p),u?n:a.createElement(l.a,{component:"h2",variant:"h6"},n))}));t.a=Object(c.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},745:function(e,t,n){"use strict";var o=n(7),r=n(480),a=n(495),i=n(1),c=(n(58),n(481)),l=n(483),s=n(485),d=n(86),u=n(756),p=n(734),f=n(504),b=n(736),h=n(522),m=n(488),v=n(510),y=n(564);var g=n(560),x=n(506);function E(e){var t,n=Object(f.a)(e);return n.body===e?(t=n,Object(f.a)(t).defaultView||window).innerWidth>n.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function k(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function O(e){return parseInt(window.getComputedStyle(e)["padding-right"],10)||0}function j(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,a=[t,n].concat(Object(x.a)(o)),i=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(e.children,(function(e){1===e.nodeType&&-1===a.indexOf(e)&&-1===i.indexOf(e.tagName)&&k(e,r)}))}function w(e,t){var n=-1;return e.some((function(e,o){return!!t(e)&&(n=o,!0)})),n}function C(e,t){var n,o=[],r=[],a=e.container;if(!t.disableScrollLock){if(E(a)){var i=function(){var e=document.createElement("div");e.style.width="99px",e.style.height="99px",e.style.position="absolute",e.style.top="-9999px",e.style.overflow="scroll",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),t}();o.push({value:a.style.paddingRight,key:"padding-right",el:a}),a.style["padding-right"]="".concat(O(a)+i,"px"),n=Object(f.a)(a).querySelectorAll(".mui-fixed"),[].forEach.call(n,(function(e){r.push(e.style.paddingRight),e.style.paddingRight="".concat(O(e)+i,"px")}))}var c=a.parentElement,l="HTML"===c.nodeName&&"scroll"===window.getComputedStyle(c)["overflow-y"]?c:a;o.push({value:l.style.overflow,key:"overflow",el:l}),l.style.overflow="hidden"}return function(){n&&[].forEach.call(n,(function(e,t){r[t]?e.style.paddingRight=r[t]:e.style.removeProperty("padding-right")})),o.forEach((function(e){var t=e.value,n=e.el,o=e.key;t?n.style.setProperty(o,t):n.style.removeProperty(o)}))}}var R=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modals=[],this.containers=[]}return Object(g.a)(e,[{key:"add",value:function(e,t){var n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&k(e.modalRef,!1);var o=function(e){var t=[];return[].forEach.call(e.children,(function(e){e.getAttribute&&"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);j(t,e.mountNode,e.modalRef,o,!0);var r=w(this.containers,(function(e){return e.container===t}));return-1!==r?(this.containers[r].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblingNodes:o}),n)}},{key:"mount",value:function(e,t){var n=w(this.containers,(function(t){return-1!==t.modals.indexOf(e)})),o=this.containers[n];o.restore||(o.restore=C(o,t))}},{key:"remove",value:function(e){var t=this.modals.indexOf(e);if(-1===t)return t;var n=w(this.containers,(function(t){return-1!==t.modals.indexOf(e)})),o=this.containers[n];if(o.modals.splice(o.modals.indexOf(e),1),this.modals.splice(t,1),0===o.modals.length)o.restore&&o.restore(),e.modalRef&&k(e.modalRef,!0),j(o.container,e.mountNode,e.modalRef,o.hiddenSiblingNodes,!1),this.containers.splice(n,1);else{var r=o.modals[o.modals.length-1];r.modalRef&&k(r.modalRef,!1)}return t}},{key:"isTopModal",value:function(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}}]),e}();var S=function(e){var t=e.children,n=e.disableAutoFocus,o=void 0!==n&&n,r=e.disableEnforceFocus,a=void 0!==r&&r,c=e.disableRestoreFocus,l=void 0!==c&&c,s=e.getDoc,u=e.isEnabled,p=e.open,b=i.useRef(),h=i.useRef(null),v=i.useRef(null),y=i.useRef(),g=i.useRef(null),x=i.useCallback((function(e){g.current=d.findDOMNode(e)}),[]),E=Object(m.a)(t.ref,x),k=i.useRef();return i.useEffect((function(){k.current=p}),[p]),!k.current&&p&&"undefined"!==typeof window&&(y.current=s().activeElement),i.useEffect((function(){if(p){var e=Object(f.a)(g.current);o||!g.current||g.current.contains(e.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex",-1),g.current.focus());var t=function(){e.hasFocus()&&!a&&u()&&!b.current?g.current&&!g.current.contains(e.activeElement)&&g.current.focus():b.current=!1},n=function(t){!a&&u()&&9===t.keyCode&&e.activeElement===g.current&&(b.current=!0,t.shiftKey?v.current.focus():h.current.focus())};e.addEventListener("focus",t,!0),e.addEventListener("keydown",n,!0);var r=setInterval((function(){t()}),50);return function(){clearInterval(r),e.removeEventListener("focus",t,!0),e.removeEventListener("keydown",n,!0),l||(y.current&&y.current.focus&&y.current.focus(),y.current=null)}}}),[o,a,l,u,p]),i.createElement(i.Fragment,null,i.createElement("div",{tabIndex:0,ref:h,"data-test":"sentinelStart"}),i.cloneElement(t,{ref:E}),i.createElement("div",{tabIndex:0,ref:v,"data-test":"sentinelEnd"}))},W={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},B=i.forwardRef((function(e,t){var n=e.invisible,a=void 0!==n&&n,c=e.open,l=Object(r.a)(e,["invisible","open"]);return c?i.createElement("div",Object(o.a)({"aria-hidden":!0,ref:t},l,{style:Object(o.a)({},W.root,a?W.invisible:{},l.style)})):null}));var T=new R,P=i.forwardRef((function(e,t){var n=Object(u.a)(),a=Object(p.a)({name:"MuiModal",props:Object(o.a)({},e),theme:n}),c=a.BackdropComponent,l=void 0===c?B:c,s=a.BackdropProps,g=a.children,x=a.closeAfterTransition,E=void 0!==x&&x,O=a.container,j=a.disableAutoFocus,w=void 0!==j&&j,C=a.disableBackdropClick,R=void 0!==C&&C,W=a.disableEnforceFocus,P=void 0!==W&&W,N=a.disableEscapeKeyDown,D=void 0!==N&&N,M=a.disablePortal,A=void 0!==M&&M,I=a.disableRestoreFocus,F=void 0!==I&&I,K=a.disableScrollLock,L=void 0!==K&&K,H=a.hideBackdrop,$=void 0!==H&&H,z=a.keepMounted,Y=void 0!==z&&z,q=a.manager,J=void 0===q?T:q,X=a.onBackdropClick,U=a.onClose,V=a.onEscapeKeyDown,_=a.onRendered,G=a.open,Q=Object(r.a)(a,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),Z=i.useState(!0),ee=Z[0],te=Z[1],ne=i.useRef({}),oe=i.useRef(null),re=i.useRef(null),ae=Object(m.a)(re,t),ie=function(e){return!!e.children&&e.children.props.hasOwnProperty("in")}(a),ce=function(){return Object(f.a)(oe.current)},le=function(){return ne.current.modalRef=re.current,ne.current.mountNode=oe.current,ne.current},se=function(){J.mount(le(),{disableScrollLock:L}),re.current.scrollTop=0},de=Object(v.a)((function(){var e=function(e){return e="function"===typeof e?e():e,d.findDOMNode(e)}(O)||ce().body;J.add(le(),e),re.current&&se()})),ue=i.useCallback((function(){return J.isTopModal(le())}),[J]),pe=Object(v.a)((function(e){oe.current=e,e&&(_&&_(),G&&ue()?se():k(re.current,!0))})),fe=i.useCallback((function(){J.remove(le())}),[J]);if(i.useEffect((function(){return function(){fe()}}),[fe]),i.useEffect((function(){G?de():ie&&E||fe()}),[G,fe,ie,E,de]),!Y&&!G&&(!ie||ee))return null;var be=function(e){return{root:{position:"fixed",zIndex:e.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(n||{zIndex:y.a}),he={};return void 0===g.props.tabIndex&&(he.tabIndex=g.props.tabIndex||"-1"),ie&&(he.onEnter=Object(h.a)((function(){te(!1)}),g.props.onEnter),he.onExited=Object(h.a)((function(){te(!0),E&&fe()}),g.props.onExited)),i.createElement(b.a,{ref:pe,container:O,disablePortal:A},i.createElement("div",Object(o.a)({ref:ae,onKeyDown:function(e){"Escape"===e.key&&ue()&&(V&&V(e),D||(e.stopPropagation(),U&&U(e,"escapeKeyDown")))},role:"presentation"},Q,{style:Object(o.a)({},be.root,!G&&ee?be.hidden:{},Q.style)}),$?null:i.createElement(l,Object(o.a)({open:G,onClick:function(e){e.target===e.currentTarget&&(X&&X(e),!R&&U&&U(e,"backdropClick"))}},s)),i.createElement(S,{disableEnforceFocus:P,disableAutoFocus:w,disableRestoreFocus:F,getDoc:ce,isEnabled:ue,open:G},i.cloneElement(g,he))))})),N=n(507),D=n(758),M=n(520),A=n(532),I=n(566),F={entering:{opacity:1},entered:{opacity:1}},K={enter:M.b.enteringScreen,exit:M.b.leavingScreen},L=i.forwardRef((function(e,t){var n=e.children,a=e.disableStrictModeCompat,c=void 0!==a&&a,l=e.in,s=e.onEnter,d=e.onEntered,u=e.onEntering,p=e.onExit,f=e.onExited,b=e.onExiting,h=e.style,v=e.TransitionComponent,y=void 0===v?D.a:v,g=e.timeout,x=void 0===g?K:g,E=Object(r.a)(e,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","TransitionComponent","timeout"]),k=Object(A.a)(),O=k.unstable_strictMode&&!c,j=i.useRef(null),w=Object(m.a)(n.ref,t),C=Object(m.a)(O?j:void 0,w),R=function(e){return function(t,n){if(e){var o=O?[j.current,t]:[t,n],r=Object(N.a)(o,2),a=r[0],i=r[1];void 0===i?e(a):e(a,i)}}},S=R(u),W=R((function(e,t){Object(I.b)(e);var n=Object(I.a)({style:h,timeout:x},{mode:"enter"});e.style.webkitTransition=k.transitions.create("opacity",n),e.style.transition=k.transitions.create("opacity",n),s&&s(e,t)})),B=R(d),T=R(b),P=R((function(e){var t=Object(I.a)({style:h,timeout:x},{mode:"exit"});e.style.webkitTransition=k.transitions.create("opacity",t),e.style.transition=k.transitions.create("opacity",t),p&&p(e)})),M=R(f);return i.createElement(y,Object(o.a)({appear:!0,in:l,nodeRef:O?j:void 0,onEnter:W,onEntered:B,onEntering:S,onExit:P,onExited:M,onExiting:T,timeout:x},E),(function(e,t){return i.cloneElement(n,Object(o.a)({style:Object(o.a)({opacity:0,visibility:"exited"!==e||l?void 0:"hidden"},F[e],h,n.props.style),ref:C},t))}))})),H=i.forwardRef((function(e,t){var n=e.children,a=e.classes,l=e.className,s=e.invisible,d=void 0!==s&&s,u=e.open,p=e.transitionDuration,f=e.TransitionComponent,b=void 0===f?L:f,h=Object(r.a)(e,["children","classes","className","invisible","open","transitionDuration","TransitionComponent"]);return i.createElement(b,Object(o.a)({in:u,timeout:p},h),i.createElement("div",{className:Object(c.default)(a.root,l,d&&a.invisible),"aria-hidden":!0,ref:t},n))})),$=Object(l.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(H),z=n(621),Y={enter:M.b.enteringScreen,exit:M.b.leavingScreen},q=i.forwardRef((function(e,t){var n=e.BackdropProps,a=e.children,l=e.classes,d=e.className,u=e.disableBackdropClick,p=void 0!==u&&u,f=e.disableEscapeKeyDown,b=void 0!==f&&f,h=e.fullScreen,m=void 0!==h&&h,v=e.fullWidth,y=void 0!==v&&v,g=e.maxWidth,x=void 0===g?"sm":g,E=e.onBackdropClick,k=e.onClose,O=e.onEnter,j=e.onEntered,w=e.onEntering,C=e.onEscapeKeyDown,R=e.onExit,S=e.onExited,W=e.onExiting,B=e.open,T=e.PaperComponent,N=void 0===T?z.a:T,D=e.PaperProps,M=void 0===D?{}:D,A=e.scroll,I=void 0===A?"paper":A,F=e.TransitionComponent,K=void 0===F?L:F,H=e.transitionDuration,q=void 0===H?Y:H,J=e.TransitionProps,X=e["aria-describedby"],U=e["aria-labelledby"],V=Object(r.a)(e,["BackdropProps","children","classes","className","disableBackdropClick","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","onEnter","onEntered","onEntering","onEscapeKeyDown","onExit","onExited","onExiting","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps","aria-describedby","aria-labelledby"]),_=i.useRef();return i.createElement(P,Object(o.a)({className:Object(c.default)(l.root,d),BackdropComponent:$,BackdropProps:Object(o.a)({transitionDuration:q},n),closeAfterTransition:!0,disableBackdropClick:p,disableEscapeKeyDown:b,onEscapeKeyDown:C,onClose:k,open:B,ref:t},V),i.createElement(K,Object(o.a)({appear:!0,in:B,timeout:q,onEnter:O,onEntering:w,onEntered:j,onExit:R,onExiting:W,onExited:S,role:"none presentation"},J),i.createElement("div",{className:Object(c.default)(l.container,l["scroll".concat(Object(s.a)(I))]),onMouseUp:function(e){e.target===e.currentTarget&&e.target===_.current&&(_.current=null,E&&E(e),!p&&k&&k(e,"backdropClick"))},onMouseDown:function(e){_.current=e.target}},i.createElement(N,Object(o.a)({elevation:24,role:"dialog","aria-describedby":X,"aria-labelledby":U},M,{className:Object(c.default)(l.paper,l["paperScroll".concat(Object(s.a)(I))],l["paperWidth".concat(Object(s.a)(String(x)))],M.className,m&&l.paperFullScreen,y&&l.paperFullWidth)}),a))))}));t.a=Object(l.a)((function(e){return{root:{"@media print":{position:"absolute !important"}},scrollPaper:{display:"flex",justifyContent:"center",alignItems:"center"},scrollBody:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}},container:{height:"100%","@media print":{height:"auto"},outline:0},paper:{margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},paperScrollPaper:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},paperScrollBody:{display:"inline-block",verticalAlign:"middle",textAlign:"left"},paperWidthFalse:{maxWidth:"calc(100% - 64px)"},paperWidthXs:{maxWidth:Math.max(e.breakpoints.values.xs,444),"&$paperScrollBody":Object(a.a)({},e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64),{maxWidth:"calc(100% - 64px)"})},paperWidthSm:{maxWidth:e.breakpoints.values.sm,"&$paperScrollBody":Object(a.a)({},e.breakpoints.down(e.breakpoints.values.sm+64),{maxWidth:"calc(100% - 64px)"})},paperWidthMd:{maxWidth:e.breakpoints.values.md,"&$paperScrollBody":Object(a.a)({},e.breakpoints.down(e.breakpoints.values.md+64),{maxWidth:"calc(100% - 64px)"})},paperWidthLg:{maxWidth:e.breakpoints.values.lg,"&$paperScrollBody":Object(a.a)({},e.breakpoints.down(e.breakpoints.values.lg+64),{maxWidth:"calc(100% - 64px)"})},paperWidthXl:{maxWidth:e.breakpoints.values.xl,"&$paperScrollBody":Object(a.a)({},e.breakpoints.down(e.breakpoints.values.xl+64),{maxWidth:"calc(100% - 64px)"})},paperFullWidth:{width:"calc(100% - 64px)"},paperFullScreen:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,"&$paperScrollBody":{margin:0,maxWidth:"100%"}}}}),{name:"MuiDialog"})(q)}}]);
//# sourceMappingURL=8.26e81a8a.chunk.js.map