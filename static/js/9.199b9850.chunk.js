(this["webpackJsonpcrypto-redux-router"]=this["webpackJsonpcrypto-redux-router"]||[]).push([[9],{534:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return x}));var r=n(493),a=n(1),o=n(14),c=n(483),i=n(700),l=n(616),u=n(494);function d(){var e=Object(r.a)(['\n    display:block;\n    animation: fade_in 1s ease-in-out forwards;\n    background-color: #759ae9;\n    background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #759ae9), color-stop(50%, #376fe0), color-stop(50%, #1a5ad9), color-stop(100%, #2463de));\n    background-image: -webkit-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);\n    background-image: -moz-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);\n    background-image: -ms-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);\n    background-image: -o-linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);\n    background-image: linear-gradient(top, #759ae9 0%, #376fe0 50%, #1a5ad9 50%, #2463de 100%);\n    border-top: 1px solid #1f58cc;\n    border-right: 1px solid #1b4db3;\n    border-bottom: 1px solid #174299;\n    border-left: 1px solid #1b4db3;\n    border-radius: 4px;\n    -webkit-box-shadow: inset 0 0 2px 0 rgba(57, 140, 255, 0.8);\n    box-shadow: inset 0 0 2px 0 rgba(57, 140, 255, 0.8);\n    color: #fff;\n//     font: bold 12px/1 "helvetica neue", helvetica, arial, sans-serif;\n    padding: 7px 0;\n    text-shadow: 0 -1px 1px #1a5ad9;\n    margin 2vh auto 1vh auto;\n    height: 40px;\n    font-size:1rem;\n    width: 150px; }\n    &:hover {\n      background-color: #5d89e8;\n      background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #5d89e8), color-stop(50%, #2261e0), color-stop(50%, #044bd9), color-stop(100%, #0d53de));\n      background-image: -webkit-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);\n      background-image: -moz-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);\n      background-image: -ms-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);\n      background-image: -o-linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);\n      background-image: linear-gradient(top, #5d89e8 0%, #2261e0 50%, #044bd9 50%, #0d53de 100%);\n      cursor: pointer; }\n    &:active {\n      border-top: 1px solid #1b4db3;\n      border-right: 1px solid #174299;\n      border-bottom: 1px solid #133780;\n      border-left: 1px solid #174299;\n      \n      -webkit-box-shadow: inset 0 0 5px 2px #1a47a0, 0 1px 0 #eeeeee;\n      box-shadow: inset 0 0 5px 2px #1a47a0, 0 1px 0 #eeeeee; }\n    &:focus {outline:none;}\n  \n']);return d=function(){return e},e}var s=Object(c.a)({root:{margin:"0 auto",display:"flex",flexDirection:"column",height:"100vh",alignItems:"center",background:"transparent",paddingTop:"10vh"}})(i.a),p=Object(c.a)({root:{justifyContent:"center"}})(s),b=Object(c.a)({root:{width:"100%",paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto"}})(i.a),f=Object(c.a)({root:{color:"rgba(122, 194, 33, 0.8);"}})(l.a),g=a.memo((function(){return a.createElement(p,null,a.createElement(f,{thickness:5,size:100}))})),x=(Object(o.g)(g),u.a.button(d()))},740:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(32),c=(n(566),n(620),n(621)),i=n.n(c),l=n(137),u=function(e){var t={};return t.value=e[0],t.label=e[1],t},d=Object(l.b)((function(e){return{cryptos:e.list_of_all_cryptos,selectedCrypto:e.selected_crypto}}),(function(e){return{setSelectedCrypto:function(t){return e(Object(o.u)(t))}}}))((function(e){var t=e.cryptos,n=e.selectedCrypto,a=e.setSelectedCrypto,o=t.map(u);return t&&t.length?r.createElement(i.a,{value:n,closeMenuOnSelect:!1,className:"selector-item virtualized",placeholder:"Wybierz kryptowalut\u0119",isClearable:!0,isSearchable:!0,onChange:function(e){a(e)},options:o}):null})),s=n(55);var p=n(589),b=n.n(p),f=n(590),g=n(223),x=function(e){var t=e.data.Data;for(var n in t)t.hasOwnProperty(n)&&(t[n]=t[n].CoinName);return g(t)};var m=n(701);var h,v=n(534),y=n(483),O=n(743),j=n(735),w=Object(y.a)({root:{background:"#FADC53",color:"#f44336",margin:"40px auto",fontWeight:"bold",maxWidth:"300px",boxShadow:"inset 0 0 5px #1E1F26, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)"}})(O.a),k=Object(l.b)((function(e){return{visible:e.validation_alert_visibility,message:"Nie wybrano waluty, kryptowaluty albo obu"}}),null)((function(e){var t=e.visible,n=e.message;return t?r.createElement(w,{severity:"error"},r.createElement(j.a,null,"Uwaga!!!"),n):null})),E=n(14),C=n(742),z=n(746),_=n(736),A=n(745),L=n(748),P=Object(y.a)({root:{borderRadius:"2px",animation:"fade_in 1s ease-in-out forwards",border:"2px solid #1E1F26",padding:"20px",width:"300px",margin:"2vh 0",boxShadow:"inset 0 0 5px #1E1F26, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)",backgroundColor:"#2C303A",color:"white","&:hover":{border:"2px solid #EE760A"},"& .MuiFormLabel-root":{color:"white",fontFamily:'"Lato", sans-serif',paddingBottom:"5px"},"& .MuiFormGroup-root":{flexDirection:"row",justifyContent:"space-around"},"& .MuiRadio-colorSecondary.Mui-checked":{color:"#EE760A"}}})(A.a),S=Object(l.b)((function(e){return{baseCurrency:e.baseCurrency}}),(function(e){return{setBaseCurrency:function(t){return e(Object(o.p)(t))}}}))((function(e){var t=e.baseCurrency,n=e.setBaseCurrency;return a.a.createElement(P,{component:"fieldset"},a.a.createElement(L.a,{component:"legend"},"Waluta odniesienia"),a.a.createElement(z.a,{"aria-label":"currency",name:"currency",value:t,onChange:function(e){n(e.target.value)}},a.a.createElement(_.a,{value:"PLN",control:a.a.createElement(C.a,null),label:"PLN"}),a.a.createElement(_.a,{value:"USD",control:a.a.createElement(C.a,null),label:"USD"}),a.a.createElement(_.a,{value:"EUR",control:a.a.createElement(C.a,null),label:"EUR"})))})),R=n(56),D=n(747),F=Object(y.a)({root:{background:"#688B69;",color:"#F5F2AA",fontSize:"1.25rem",border:"1px solid 4d684d",boxShadow:"inset 0 0 5px #4d684d, 0 1px 2px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.07), 0 4px 8px rgba(0,0,0,0.07), 0 8px 16px rgba(0,0,0,0.07), 0 16px 32px rgba(0,0,0,0.07), 0 32px 64px rgba(0,0,0,0.07)"}})(O.a),M=Object(l.b)((function(e){return{open:e.isLoadedListOfAllCryptos,count:Object(R.a)(e.list_of_all_cryptos).length}}),(function(e){return{close:function(){return e(Object(o.n)())}}}))((function(e){var t=e.open,n=e.close,a=e.count;return r.createElement(D.a,{open:t,autoHideDuration:6e3,onClose:n},r.createElement(F,{severity:"success",variant:"filled"},"Poprawnie pobrano tablic\u0119 z dost\u0119pnymi kryptowalutami.",r.createElement("br",null),"\u0141\u0105cznie znaleziono dane dla ",a," kryptowalut.",r.createElement("br",null)))})),B=Object(E.g)(Object(l.b)((function(e){return{searchResults:e.search_results}}),(function(e){return{reportError:function(t){return e(Object(o.o)(t))},setCurrentPrice:function(t){return e(Object(o.q)(t))},clearSearchResults:function(){return e(Object(o.m)())},validateAndGetHistoricalData:function(t,n){return e((r=t,a=n,function(e,t,n){var c=t(),i=c.selected_crypto,l=c.baseCurrency;if(i&&l){e(Object(o.v)(!1)),e(Object(o.l)()),r.connecting();for(var u=[],d=0;d<=s.e.reducedLength();d++)u.push(n.get(s.d.historicalPrice(i.value,l,s.e.getValue(d)),s.d.header));var p=[];n.all(u).then((function(t){t.forEach((function(e,t){var n=e.data[l]?e.data[l]:"n/a";p.push(Object(s.a)(s.e.getKey(t),n))})),p.push(a),e(Object(o.r)(p));var n=i,c=l;r.search(),e(Object(o.t)([n.value,c,n.label]))})).catch((function(t){r.error(),e(Object(o.o)({text:"Podczas pobierania historycznych danych dla "+i.label+" wyst\u0105pi\u0142 b\u0142\u0105d:",code:t.message}))}))}else e(Object(o.v)(!0))}));var r,a},getListOfAvailableCryptos:function(t){return e((n=t,function(){var e=Object(f.a)(b.a.mark((function e(t,r,a){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r().isLoadedListOfAllCryptos){e.next=8;break}return e.next=4,a.get("https://min-api.cryptocompare.com/data/all/coinlist").catch((function(e){var r={text:"Podczas pr\xf3by pobrania listy dost\u0119pnych kryptowalut wyst\u0105pi\u0142 b\u0142\u0105d",code:e.message};t(Object(o.o)(r)),n.error()}));case 4:(c=e.sent)&&t(Object(o.s)(x(c))),e.next=9;break;case 8:t(Object(o.n)());case 9:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()));var n},getCurrentCryptoPrice:function(t,n){return e((r=t,a=n,function(){var e=Object(f.a)(b.a.mark((function e(t,n,c){var i,l,u,d,p,f;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object(m.a)(r,3),l=i[0],u=i[1],d=i[2],e.next=3,c.get(s.d.currentPrice(l,u),s.d.header).catch((function(e){a.error(),t(Object(o.o)({text:"Podczas pobierania aktualnej warto\u015bci  dla "+l+"wystapi\u0142 b\u0142\u0105d:",code:e.message}))}));case 3:(p=e.sent)&&"Error"!==p.data.Response?(f=[Object.keys(p.data)[0],Object.values(p.data)[0],d],t(Object(o.q)(f)),a.data()):(a.error(),t(Object(o.o)({text:"Aktualnie pobierana warto\u015b\u0107 dla "+l+" jest nieprawid\u0142owa",code:p.data.Message})));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()));var r,a}}}))((function(e){var t=e.searchResults,n=e.clearSearchResults,o=e.validateAndGetHistoricalData,c=e.getCurrentCryptoPrice,i=e.getListOfAvailableCryptos,l=function(){n(),clearInterval(h)},u=Object(E.f)(),s=a.a.useMemo((function(){return{not_found:function(){u.push("/not_found")},error:function(){u.push("/error")},data:function(){u.push("/results")},connecting:function(){u.push("/connecting")},search:function(){u.push("/")}}}),[]);function p(){return c(t,s)}return Object(r.useEffect)((function(){t&&t.length&&(s.connecting(),l(),p(),h=setInterval(p,5e3))}),[t]),Object(r.useEffect)((function(){i(s)}),[]),a.a.createElement(v.b,null,a.a.createElement(v.a,{ID:"Button",onClick:function(){return o(s,l)}},"Poka\u017c dane"),a.a.createElement(S,null),a.a.createElement(d,null),a.a.createElement(k,null),a.a.createElement(M,null))})));t.default=B}}]);
//# sourceMappingURL=9.199b9850.chunk.js.map