(this["webpackJsonpcrypto-redux-router"]=this["webpackJsonpcrypto-redux-router"]||[]).push([[3],{138:function(e,t,a){"use strict";a.d(t,"h",(function(){return _})),a.d(t,"i",(function(){return D})),a.d(t,"b",(function(){return w})),a.d(t,"f",(function(){return P})),a.d(t,"a",(function(){return T})),a.d(t,"g",(function(){return H})),a.d(t,"j",(function(){return z})),a.d(t,"d",(function(){return M})),a.d(t,"e",(function(){return B}));var n=a(81),r=a.n(n),c=a(224),o=a(134),i=a(102),u=a(219),l=a(220),s=a(82),d=a(55),p=a(221),f=a(222),b=a(19),y=a(427);function h(e,t){if(arguments[0]&&arguments[1]&&"number"===typeof arguments[1]&&"number"===typeof arguments[0]){var a,n=100*(e-t)/t,r=n.toLocaleString("pl-PL",{useGrouping:"true",minimumFractionDigits:"2",maximumFractionDigits:"2"});return 0===n?a="no change":n>0?a="+".concat(r,"%"):n<0&&(a="".concat(r,"%")),a}return"n/a"}var m=function(){function e(t){var a=this;Object(u.a)(this,e),this.complement=function(e){var t;(t=a.data).push.apply(t,Object(i.a)(e))},this.format=function(e,t){var n=function(e,t,a,n,r){return e.map((function(e){if(Object.keys(e)[0]!==t){var c=Object.keys(e)[0],o=Object.values(e)[0];return e=g(c,n(a,o))}var i=a.toString().length>10?a.toExponential(2):a.toString();return e=g(t,i+" "+r)}))}(a.data,e,a.currentPrice,h,t);a.data=n},this.data=[t],this.currentPrice=Object.values(t)[0]}return Object(l.a)(e,[{key:"getData",get:function(){return this.data}}]),e}(),O=function(e,t){return"https://min-api.cryptocompare.com/data/price?fsym="+e+"&tsyms="+t},C={Apikey:"feca5a4838bd3042b5340fb60de7c44aadd2d20a178514c44947c3736be3558e"},E=function(e,t,a){return"https://min-api.cryptocompare.com/data/dayAvg?fsym="+e+"&tsym="+t+"&toTs="+a+"&avgType=MidHighLow&tryConversion=true&extraParams=your_app_name"},j="Aktualna Cena";function g(e,t){var a={};return a[e]=t,a}var v={content:[["1D",function(){return Object(d.a)(Object(p.a)())}],["1M",function(){return Object(d.a)(Object(s.a)(new Date,1))}],["5M",function(){return Object(d.a)(Object(s.a)(new Date,3))}],["12M",function(){return Object(d.a)(Object(s.a)(new Date,12))}],["30M",function(){return Object(d.a)(Object(s.a)(new Date,30))}],["YTD",function(){return Object(d.a)(Object(f.a)(new Date))}]],reducedLength:function(){return this.content.length-1},getValue:function(e){return this.content[e][1]()},getKey:function(e){return this.content[e][0]}},S=function(e){var t=e.data.Data;for(var a in t)t.hasOwnProperty(a)&&(t[a]=t[a].CoinName);return y(t)},A=Object(b.a)("SEND_LIST_OF_ALL_CRYPTOS"),L=Object(b.a)("SEND_ERROR"),_=Object(b.a)("SEND_BASE_CURRENCY"),D=Object(b.a)("SEND_SELECTED_CRYPTO"),w=Object(b.a)("CLEAR_SELECTIONS"),R=Object(b.a)("CLEAR_HISTORICAL"),k=Object(b.a)("SEND_CURRENT"),x=Object(b.a)("SET_SEARCH_RESULTS"),P=Object(b.a)("HIDE_LOADED_COINS_MSG"),I=Object(b.a)("TOGGLE_VALIDATION_ALERT_VISIBILITY"),T=Object(b.a)("CLEAR_SEARCH_RESULTS"),N=Object(b.a)("SEND_HISTORICAL"),H=Object(b.a)("HIDE_PRICE_HAS_CHANGED_SNACKBAR"),V=Object(b.b)({listOfAllCryptos:[],isLoadedListOfAllCryptos:!1,lenghtOfListOfAllCryptos:0,error:null,isValidationAlertVisibile:!1,alert_message:"",choice:"",currentCryptoName:null,currentCryptoValue:null,content:[],isHistoricalDataReceived:!1,baseCurrency:null,selectedCrypto:null,searchResults:[],priceHasChanged:!1,isVisiblePriceChangedSnackbar:!1},(function(e){e.addCase(A,(function(e,t){e.listOfAllCryptos=t.payload,e.isLoadedListOfAllCryptos=!0,e.lenghtOfListOfAllCryptos=t.payload.length})).addCase(L,(function(e,t){e.error=t.payload})).addCase(_,(function(e,t){e.baseCurrency=t.payload})).addCase(D,(function(e,t){e.selectedCrypto=t.payload})).addCase(w,(function(e){e.selectedCrypto=null,e.baseCurrency=null})).addCase(R,(function(e){e.isHistoricalDataReceived=!1,e.historical=null})).addCase(k,(function(e,t){if(e.isVisiblePriceChangedSnackbar=!0,null===e.currentCryptoValue||e.currentCryptoValue!==t.payload[1]){var a=new m(g(j,t.payload[1]));a.complement(Object(i.a)(e.historical)),a.format(j,t.payload[0]);var n=a.getData,r=n.shift();e.currentCryptoValue=t.payload[1],e.currentCryptoID=t.payload[0],e.content=n,e.currentCryptoName=t.payload[2],e.currentPrice=r,e.priceHasChanged=!0}else e.priceHasChanged=!1})).addCase(x,(function(e,t){e.searchResults=Object(i.a)(t.payload)})).addCase(P,(function(e,t){e.isLoadedListOfAllCryptos=t.payload})).addCase(I,(function(e,t){e.isValidationAlertVisibile=t.payload})).addCase(T,(function(e,t){e.searchResults=null})).addCase(N,(function(e,t){var a=t.payload.pop();e.historical=t.payload,e.clear=a,e.isHistoricalDataReceived=!0})).addCase(H,(function(e,t){e.isVisiblePriceChangedSnackbar=!1})).addDefaultCase((function(){}))}));t.c=V;function z(e,t){return function(a,n,r){var c=n(),o=c.selectedCrypto,i=c.baseCurrency;if(o&&i){a(I(!1)),a(R()),e.connecting();for(var u=[],l=0;l<=v.reducedLength();l++)u.push(r.get(E(o.value,i,v.getValue(l)),C));var s=[];r.all(u).then((function(n){n.forEach((function(e,t){var a=e.data[i]?e.data[i]:"n/a";s.push(g(v.getKey(t),a))})),s.push(t),a(N(s));var r=o,c=i;e.search(),a(x([r.value,c,r.label]))})).catch((function(t){e.error(),a(L({text:"Podczas pobierania historycznych danych dla "+o.label+" wyst\u0105pi\u0142 b\u0142\u0105d:",code:t.message}))}))}else a(I(!0))}}function M(e,t,a){return function(){var n=Object(o.a)(r.a.mark((function n(o,i,u){var l,s,d,p,f,b;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=Object(c.a)(e,3),s=l[0],d=l[1],p=l[2],n.next=3,u.get(O(s,d),C).catch((function(e){t.error(),o(L({text:"Podczas pobierania aktualnej warto\u015bci  dla "+s+"wystapi\u0142 b\u0142\u0105d:",code:e.message}))}));case 3:(f=n.sent)&&"Error"!==f.data.Response?(b=[Object.keys(f.data)[0],Object.values(f.data)[0],p],o(k(b)),t.data()):(t.error(),a(),o(L({text:"Aktualnie pobierana warto\u015b\u0107 dla "+s+" jest nieprawid\u0142owa",code:f.data.Message})));case 5:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}()}function B(e){return function(){var t=Object(o.a)(r.a.mark((function t(a,n,c){var o,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=n(),o.isLoadedListOfAllCryptos){t.next=8;break}return t.next=4,c.get("https://min-api.cryptocompare.com/data/all/coinlist").catch((function(t){var n={text:"Podczas pr\xf3by pobrania listy dost\u0119pnych kryptowalut wyst\u0105pi\u0142 b\u0142\u0105d",code:t.message};a(L(n)),e.error()}));case 4:(i=t.sent)&&a(A(S(i))),t.next=9;break;case 8:a(P());case 9:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}()}},226:function(e,t,a){e.exports=a(481)},480:function(e,t,a){},481:function(e,t,a){"use strict";a.r(t),a.d(t,"store",(function(){return j}));a(227),a(236);var n=a(1),r=a.n(n),c=a(83),o=a.n(c),i=a(24),u=a(79),l=a(137),s=a(138),d=a(223),p=a.n(d),f=a(139),b=a(14),y=function(){return r.a.createElement("div",null)},h=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(7)]).then(a.bind(null,745))})),m=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(10),a.e(11)]).then(a.bind(null,738))})),O=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(6),a.e(8)]).then(a.bind(null,748))})),C=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,742))}));var E=function(){return n.createElement(f.a,{basename:"/crypto_redux_router"},n.createElement(b.c,null,n.createElement(b.a,{exact:!0,path:"/"},n.createElement(n.Suspense,{fallback:y()},n.createElement(O,null))),n.createElement(b.a,{path:"/results"},n.createElement(n.Suspense,{fallback:y()},n.createElement(h,null))),n.createElement(b.a,{path:"/connecting"},n.createElement(n.Suspense,{fallback:y()},n.createElement(C,null))),n.createElement(b.a,{path:"/error"},n.createElement(n.Suspense,{fallback:y()},n.createElement(m,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(480);var j=Object(i.e)(s.c,Object(i.a)(u.a.withExtraArgument(p.a)));o.a.render(r.a.createElement(l.a,{store:j},r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[226,4,5]]]);
//# sourceMappingURL=main.48f50f0b.chunk.js.map