(this["webpackJsonpcrypto-redux-router"]=this["webpackJsonpcrypto-redux-router"]||[]).push([[0],{345:function(e,n,t){e.exports=t.p+"static/media/background.0424d5f5.jpg"},361:function(e,n,t){e.exports=t(692)},691:function(e,n,t){},692:function(e,n,t){"use strict";t.r(n),t.d(n,"store",(function(){return ve}));t(362),t(371);var a=t(0),r=t.n(a),o=t(17),c=t.n(o),i=t(134),l=t(332),u=t(35),s=t(66),d=t(50);function p(e){return{type:"SEND_ERROR",payload:e}}function b(e){return{type:"SEND_CURRENT",payload:e}}function f(e){return{type:"SET_SEARCH_RESULTS",payload:e}}function g(e){return{type:"TOGGLE_VALIDATION_ALERT_VISIBILITY",payload:e}}var m=t(105),x=t(106),h=t(139),y=t(95),_=t(334),E=t(335),v=(t(292),{content:[["1D",function(){return Object(y.a)(Object(_.a)())}],["1M",function(){return Object(y.a)(Object(h.a)(new Date,1))}],["5M",function(){return Object(y.a)(Object(h.a)(new Date,3))}],["12M",function(){return Object(y.a)(Object(h.a)(new Date,12))}],["30M",function(){return Object(y.a)(Object(h.a)(new Date,30))}],["YTD",function(){return Object(y.a)(Object(E.a)(new Date))}]],reducedLength:function(){return this.content.length-1},getValue:function(e){return this.content[e][1]()},getKey:function(e){return this.content[e][0]}});function O(e,n){if(arguments[0]&&arguments[1]&&"number"===typeof arguments[1]&&"number"===typeof arguments[0]){var t,a=100*(e-n)/n,r=a.toLocaleString("pl-PL",{useGrouping:"true",minimumFractionDigits:"2",maximumFractionDigits:"2"});return 0===a?t="no change":a>0?t="+".concat(r,"%"):a<0&&(t="".concat(r,"%")),t}return"n/a"}var w=function(e,n){return"https://min-api.cryptocompare.com/data/price?fsym="+e+"&tsyms="+n},j={Apikey:"feca5a4838bd3042b5340fb60de7c44aadd2d20a178514c44947c3736be3558e"},k=function(e,n,t){return"https://min-api.cryptocompare.com/data/dayAvg?fsym="+e+"&tsym="+n+"&toTs="+t+"&avgType=MidHighLow&tryConversion=true&extraParams=your_app_name"},S="Aktualna Cena";function C(e,n,t,a,r){return e.map((function(e){if(Object.keys(e)[0]!==n){var o=Object.keys(e)[0],c=Object.values(e)[0];return e=D(o,a(t,c))}var i=t.toString()+" "+r;return e=D(n,i)}))}function D(e,n){var t={};return t[e]=n,t}var A=function(){function e(n){var t=this;Object(m.a)(this,e),this.complement=function(e){var n;(n=t.data).push.apply(n,Object(s.a)(e))},this.format=function(e,n){var a=C(t.data,e,t.currentPrice,O,n);t.data=a},this.data=[n],this.currentPrice=Object.values(n)[0]}return Object(x.a)(e,[{key:"getData",get:function(){return this.data}}]),e}(),L={list_of_all_cryptos:[],list_of_all_cryptos_is_loaded:!1,list_of_all_cryptos_length:0,error:null,alert_visible:!1,alert_message:"",choice:"",currentCryptoName:null,currentCryptoValue:null,content:[],historical_data_received:!1,base_currency:null,selected_crypto:null,search_results:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SEND_LIST_OF_ALL_CRYPTOS":return Object(d.a)({},e,{list_of_all_cryptos:n.payload,list_of_all_cryptos_is_loaded:!0,list_of_all_cryptos_length:n.payload.length});case"TOGGLE_VALIDATION_ALERT_VISIBILITY":return Object(d.a)({},e,{validation_alert_visibility:n.payload});case"SEND CURRENCY":return Object(d.a)({},e,{base_currency:n.payload});case"SEND_SELECTED_CRYPTO":return Object(d.a)({},e,{selected_crypto:n.payload});case"SET_SEARCH_RESULTS":return Object(d.a)({},e,{search_results:Object(s.a)(n.payload)});case"CLEAR_SEARCH_RESULTS":return Object(d.a)({},e,{search_results:null});case"SEND_ERROR":return Object(d.a)({},e,{error:n.payload});case"HIDE_LOADED_COINS_MSG":return Object(d.a)({},e,{list_of_all_cryptos_is_loaded:n.payload});case"SEND_HISTORICAL":var t=n.payload.pop();return Object(d.a)({},e,{historical:n.payload,clear:t,historical_data_received:!0});case"CLEAR_HISTORICAL":return Object(d.a)({},e,{historical_data_received:!1,historical:null});case"SEND_CURRENT":if(null===e.currentCryptoValue||e.currentCryptoValue!=n.payload[1]){var a=new A(D(S,n.payload[1]));a.complement(Object(s.a)(e.historical)),a.format(S,n.payload[0]);var r=a.getData,o=r.shift();return Object(d.a)({},e,{currentCryptoValue:n.payload[1],currentCryptoID:n.payload[0],content:r,currentCryptoName:n.payload[2],first_content:o})}default:return e}},I=t(336),T=t.n(I),N=t(132),z=t(37),P=t(93),F=(t(309),t(614),t(343)),M=t.n(F),B=function(e){var n={};return n.value=e[0],n.label=e[1],n},U=Object(u.b)((function(e){return{cryptos:e.list_of_all_cryptos,selected_crypto:e.selected_crypto}}),(function(e){return{send_selected_crypto:function(n){return e(function(e){return{type:"SEND_SELECTED_CRYPTO",payload:e}}(n))}}}))((function(e){var n=e.cryptos,t=e.selected_crypto,r=e.send_selected_crypto,o=n.map(B);return n&&n.length?a.createElement(M.a,{value:t,closeMenuOnSelect:!1,className:"selector-item virtualized",placeholder:"Wybierz kryptowalut\u0119",isClearable:!0,isSearchable:!0,onChange:function(e){r(e)},options:o}):null}));var H=t(108),G=t.n(H),V=t(167),Y=t(292),W=function(e){var n=e.data.Data;for(var t in n)n.hasOwnProperty(t)&&(n[t]=n[t].CoinName);return Y(n)};var J=t(346);var K,$,q=t(736),Q=t(740),X=t(731),Z=t(737),ee=t(739),ne=t(7),te=Object(ne.a)({root:{borderRadius:"2px",animation:"fade_in 1s ease-in-out forwards",border:"2px solid #1E1F26",padding:"20px",width:"300px",margin:"2vh 0",boxShadow:"inset 0 0 5px #1E1F26, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",backgroundColor:"#2C303A",color:"white","&:hover":{border:"2px solid #EE760A"},"& .MuiFormLabel-root":{color:"white",fontFamily:'"Lato", sans-serif',paddingBottom:"5px"},"& .MuiFormGroup-root":{flexDirection:"row",justifyContent:"space-around"},"& .MuiRadio-colorSecondary.Mui-checked":{color:"#EE760A"}}})(Z.a),ae=Object(u.b)((function(e){return{base_currency:e.base_currency}}),(function(e){return{send_base_currency:function(n){return e(function(e){return{type:"SEND CURRENCY",payload:e}}(n))}}}))((function(e){var n=e.base_currency,t=e.send_base_currency;return r.a.createElement(te,{component:"fieldset"},r.a.createElement(ee.a,{component:"legend"},"Waluta odniesienia"),r.a.createElement(Q.a,{"aria-label":"currency",name:"currency",value:n,onChange:function(e){t(e.target.value)}},r.a.createElement(X.a,{value:"PLN",control:r.a.createElement(q.a,null),label:"PLN"}),r.a.createElement(X.a,{value:"USD",control:r.a.createElement(q.a,null),label:"USD"}),r.a.createElement(X.a,{value:"EUR",control:r.a.createElement(q.a,null),label:"EUR"})))})),re=t(67),oe=t(738),ce=t(697),ie=Object(ne.a)({root:(K={background:"rgba(122, 194, 33, 0.8);"},Object(re.a)(K,"background","#688B69;"),Object(re.a)(K,"color","#F5F2AA"),Object(re.a)(K,"fontSize","1.25rem"),Object(re.a)(K,"border","1px solid 4d684d"),Object(re.a)(K,"boxShadow","inset 0 0 5px #298B01"),Object(re.a)(K,"boxShadow","inset 0 0 5px #4d684d, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)"),K)})(ce.a),le=Object(u.b)((function(e){return{open:e.list_of_all_cryptos_is_loaded,count:Object(s.a)(e.list_of_all_cryptos).length}}),(function(e){return{close:function(){return e({type:"HIDE_LOADED_COINS_MSG"})}}}))((function(e){var n=e.open,t=e.close,r=e.count;return a.createElement(oe.a,{open:n,autoHideDuration:6e3,onClose:t},a.createElement(ie,{severity:"success",variant:"filled"},"Poprawnie pobrano tablic\u0119 z dost\u0119pnymi kryptowalutami.",a.createElement("br",null),"\u0141\u0105cznie znaleziono dane dla ",r," kryptowalut.",a.createElement("br",null)))})),ue=Object(z.g)(Object(u.b)((function(e){return{search_results:e.search_results}}),(function(e){return{send_error:function(n){return e(p(n))},send_current:function(n){return e(b(n))},clear_search_results:function(){return e({type:"CLEAR_SEARCH_RESULTS"})},validate_and_get_historical_data:function(n,t){return e((a=n,r=t,function(e,n,t){var o=n(),c=o.selected_crypto,i=o.base_currency;if(c&&i){e(g(!1)),e({type:"CLEAR_HISTORICAL"}),a.connecting();for(var l=[],u=0;u<=v.reducedLength();u++)l.push(t.get(k(c.value,i,v.getValue(u)),j));var s=[];t.all(l).then((function(n){n.forEach((function(e,n){var t=e.data[i]?e.data[i]:"n/a";s.push(D(v.getKey(n),t))})),s.push(r),e({type:"SEND_HISTORICAL",payload:s});var t=c,o=i;a.search(),e(f([t.value,o,t.label]))})).catch((function(n){a.error(),e(p({text:"Podczas pobierania historycznych danych dla "+c.label+" wyst\u0105pi\u0142 b\u0142\u0105d:",code:n.message}))}))}else e(g(!0))}));var a,r},getListOfAvailableCryptos:function(n){return e((t=n,function(){var e=Object(V.a)(G.a.mark((function e(n,a,r){var o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a().list_of_all_cryptos_is_loaded){e.next=8;break}return e.next=4,r.get("https://min-api.cryptocompare.com/data/all/coinlist").catch((function(e){var a={text:"Podczas pr\xf3by pobrania listy dost\u0119pnych kryptowalut wyst\u0105pi\u0142 b\u0142\u0105d",code:e.message};n(p(a)),t.error()}));case 4:(o=e.sent)&&n({type:"SEND_LIST_OF_ALL_CRYPTOS",payload:W(o)}),e.next=9;break;case 8:n({type:"HIDE_LOADED_COINS_MSG"});case 9:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}()));var t},getCurrentCryptoPrice:function(n,t){return e((a=n,r=t,function(){var e=Object(V.a)(G.a.mark((function e(n,t,o){var c,i,l,u,s,d;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(J.a)(a,3),i=c[0],l=c[1],u=c[2],e.next=3,o.get(w(i,l),j).catch((function(e){r.error(),n(p({text:"Podczas pobierania aktualnej warto\u015bci  dla "+i+"wystapi\u0142 b\u0142\u0105d:",code:e.message}))}));case 3:(s=e.sent)&&"Error"!==s.data.Response?(d=[Object.keys(s.data)[0],Object.values(s.data)[0],u],n(b(d)),r.data()):(r.error(),n(p({text:"Aktualnie pobierana warto\u015b\u0107 dla "+i+" jest nieprawid\u0142owa",code:s.data.Message})));case 6:case"end":return e.stop()}}),e)})));return function(n,t,a){return e.apply(this,arguments)}}()));var a,r}}}))((function(e){var n=e.search_results,t=e.clear_search_results,o=e.validate_and_get_historical_data,c=e.getCurrentCryptoPrice,i=e.getListOfAvailableCryptos,l=function(){t(),clearInterval($)},u=Object(z.f)(),s=r.a.useMemo((function(){return{not_found:function(){u.push("/not_found")},error:function(){u.push("/error")},data:function(){u.push("/results")},connecting:function(){u.push("/connecting")},search:function(){u.push("/")}}}),[]);function d(){return c(n,s)}return Object(a.useEffect)((function(){n&&n.length&&(s.connecting(),l(),d(),$=setInterval(d,5e3))}),[n]),Object(a.useEffect)((function(){i(s)}),[]),r.a.createElement(P.b,null,r.a.createElement(P.a,{ID:"Button",onClick:function(){return o(s,l)}},"Poka\u017c dane"),r.a.createElement(ae,null),r.a.createElement(U,null),r.a.createElement(P.e,null),r.a.createElement(le,null))}))),se=t(735),de=t(733),pe=t(732),be=Object(ne.a)({root:{"& .MuiPaper-root":{padding:"50px",border:"4px solid #A51D20",borderRadius:"4px",color:"#A51D20",textAlign:"center",boxShadow:"0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"},"& span":{padding:"10px 0"},"& #simple-dialog-title":{textAlign:"center"}}})(se.a),fe=Object(z.g)(Object(u.b)((function(e){return{error:e.error}}),null)((function(e){var n=e.error;return n?r.a.createElement(N.b,{to:"/",style:{textDecoration:"none"}},r.a.createElement(be,{open:!0},r.a.createElement(de.a,{id:"simple-dialog-title"},"UWAGA !!!"),r.a.createElement(pe.a,{in:!0,timeout:1e3},r.a.createElement("span",null,n.text)),r.a.createElement("br",null),r.a.createElement(pe.a,{in:!0,timeout:1e3},r.a.createElement("span",null,n.code)))):null}))),ge=r.a.lazy((function(){return t.e(3).then(t.bind(null,748))}));var me=function(){return r.a.createElement(N.a,{basename:"/crypto_redux_router"},r.a.createElement(z.c,null,r.a.createElement(z.a,{exact:!0,path:"/"},r.a.createElement(ue,null)),r.a.createElement(z.a,{path:"/results"},r.a.createElement(a.Suspense,{fallback:r.a.createElement(P.d,null)},r.a.createElement(ge,null))),r.a.createElement(z.a,{path:"/connecting"},r.a.createElement(P.d,null)),r.a.createElement(z.a,{path:"/error"},r.a.createElement(fe,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=t(140),he=t(141),ye=t(345),_e=t.n(ye);function Ee(){var e=Object(xe.a)(["\n\n\nbody {\n    overflow-y: scroll;\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  #root{min-height: 100vh; \n    display:flex; \n    align-items: center;\n    flex-direction: column;\n    background-image: url(","); \n    background-size: cover; \n    background-repeat: no-repeat;\n    color:white;\n    & *{box-sizing: border-box;}\n  }\n  \n  @keyframes fade_in {\n    0%   {opacity: 0;}\n    70%  {opacity: 0;}\n    100% {opacity: 1;}\n  }\n\n.selector-item__coin {\n    color: #1A86DB;\n    width:300px;\n    margin-bottom: 8px;\n    background-color:white; \n    border-radius: 2px; \n    border: 2px solid #1A86DB;\n    display: flex; \n    align-items: center; \n    justify-content: space-around; \n    padding: 7px 2px; }\n \n .selector-item {width: 300px;}\n     \n .virtualized {\n   background-color: #2C303A;\n   animation: fade_in 1s ease-in-out forwards;\n   box-shadow: inset 0 0 5px #1E1F26 , 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n   color: white;\n   padding: 20px;\n   font-size:1rem;\n   border: 2px solid #1E1F26;\n   border-radius: 2px;\n   margin: 2vh 0;\n   cursor:pointer;\n   &:hover{border: 2px solid #EE760A;} \n \n   & .Select-placeholder{color: white; margin-bottom:15px; font-family: 'Lato', sans-serif; };\n   \n   & input {\n     width: 90%;\n     margin: 0 auto;\n     display: block;\n     border: 1px solid white;\n     border-radius:1px;\n     background:transparent;\n     color: $mycolor;\n     font-size: 1rem;\n     padding: 0 2px;\n     box-shadow: inset 0px 0px 2px 1px rgba(255,255,255,0.54);\n   };\n   & .Select-menu-outer span:hover{background-color: white;  }\n }\n \n\n\n\n\n .DataContainer {///aktualny\n    margin: 0 auto;\n    height: 110px;\n    width: 100%;\n    max-width:1200px;\n    position:relative;\n    padding-top: 15px;\n    padding-bottom:15px;\n    margin-top:5px;\n    margin-bottom:5px;\n    background-color: transparent;\n    background:mintcream;\n    border-top: 2px solid  #4B7DE6;\n    border-right: 2px solid  #4B7DE6;\n    border-bottom: 2px solid  #4B7DE6;\n    color:#726B68 ;\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n    display: flex;\n    justify-content: space-between;\n    border-radius: 0.25rem;\n    align-items: center;\n    \n  \n    @include mobile {\n        height: 245px;\n        width: 100%;\n    }\n   \n  \n  }\n  \n  .DataContainer::before {\n    min-width: 110px;\n    content: 'ALTCOINS';\n  \n    @include mobile {\n        min-width: 246px;\n    }\n    height: 20px;\n    background-color: #2692C3;\n    background-color:#4B7DE6;\n    border-radius: 0.25rem 0.25rem 0 0;\n    display:flex;\n    flex-direction:column;\n    justify-content: center;\n    align-items:center;\n    position:absolute;\n    left: -45px;\n    @include mobile {\n        left: -112.5px;\n    }\n    color: white;\n    font-size: 10px;\n    transform: rotate(270deg);\n  }\n    \n  @media (max-width:1000px) {\n  .DataContainer{ \n    border:none;\n    flex-direction: column;\n    height:unset;\n    border-radius: 0 0 0.25rem 0.25rem;\n  };  \n    .DataContainer::before {\n      width: inherit;\n      left: 0;\n      top: -20px;\n      transform:none;\n    }\n  }\n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"]);return Ee=function(){return e},e}Object(he.a)(Ee(),_e.a),t(691);var ve=Object(i.c)(R,Object(i.a)(l.a.withExtraArgument(T.a)));c.a.render(r.a.createElement(u.a,{store:ve},r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},93:function(e,n,t){"use strict";t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return m})),t.d(n,"d",(function(){return y})),t.d(n,"a",(function(){return _})),t.d(n,"e",(function(){return v}));var a=t(140),r=t(0),o=t(37),c=t(35),i=t(7),l=t(697),u=t(696),s=t(349),d=t(695),p=t(141);function b(){var e=Object(a.a)(['\n    display:block;\n    animation: fade_in 1s ease-in-out forwards;\n    background-color: #759ae9;\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #759ae9), color-stop(50%, #376fe0), color-stop(50%, #1a5ad9), color-stop(100%, #2463de));\n    background-image: -webkit-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);\n    background-image: -moz-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);\n    background-image: -ms-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);\n    background-image: -o-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);\n    background-image: linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);\n    border-top: 1px solid #1f58cc;\n    border-right: 1px solid #1b4db3;\n    border-bottom: 1px solid #174299;\n    border-left: 1px solid #1b4db3;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 0 2px 0 rgba(57, 140, 255, 0.8);\n    box-shadow: inset 0 0 2px 0 rgba(57, 140, 255, 0.8);\n    color: #fff;\n//     font: bold 12px/1 "helvetica neue", helvetica, arial, sans-serif;\n    padding: 7px 0;\n    text-shadow: 0 -1px 1px #1a5ad9;\n    margin 2vh auto 1vh auto;\n    height: 40px;\n    font-size:1rem;\n    width: 150px; }\n    &:hover {\n      background-color: #5d89e8;\n      background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #5d89e8), color-stop(50%, #2261e0), color-stop(50%, #044bd9), color-stop(100%, #0d53de));\n      background-image: -webkit-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);\n      background-image: -moz-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);\n      background-image: -ms-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);\n      background-image: -o-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);\n      background-image: linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);\n      cursor: pointer; }\n    &:active {\n      border-top: 1px solid #1b4db3;\n      border-right: 1px solid #174299;\n      border-bottom: 1px solid #133780;\n      border-left: 1px solid #174299;\n      \n      -webkit-box-shadow: inset 0 0 5px 2px #1a47a0, 0 1px 0 #eeeeee;\n      box-shadow: inset 0 0 5px 2px #1a47a0, 0 1px 0 #eeeeee; }\n    &:focus {outline:none;}\n  \n']);return b=function(){return e},e}var f=Object(i.a)({root:{margin:"0 auto",display:"flex",flexDirection:"column",height:"100vh",alignItems:"center",background:"transparent",paddingTop:"10vh"}})(s.a),g=Object(i.a)({root:{justifyContent:"center"}})(f),m=Object(i.a)({root:{width:"100%",paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto"}})(s.a),x=Object(i.a)({root:{color:"rgba(122, 194, 33, 0.8);"}})(d.a),h=r.memo((function(){return r.createElement(g,null,r.createElement(x,{thickness:5,size:100}))})),y=Object(o.g)(h),_=p.b.button(b()),E=Object(i.a)({root:{background:"#FADC53",color:"#f44336",margin:"40px auto",fontWeight:"bold",maxWidth:"300px",boxShadow:"inset 0 0 5px #1E1F26, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)"}})(l.a),v=Object(c.b)((function(e){return{visible:e.validation_alert_visibility,message:"Nie wybrano waluty, kryptowaluty albo obu"}}),null)((function(e){var n=e.visible,t=e.message;return n?r.createElement(E,{severity:"error"},r.createElement(u.a,null,"Uwaga!!!"),t):null}))}},[[361,1,2]]]);
//# sourceMappingURL=main.98d7bac5.chunk.js.map