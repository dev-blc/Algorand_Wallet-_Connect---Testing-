(this["webpackJsonpalgorand-wallet-walletconnect-redux"]=this["webpackJsonpalgorand-wallet-walletconnect-redux"]||[]).push([[0],{229:function(n,e,t){},230:function(n,e,t){},232:function(n,e){},283:function(n,e){},285:function(n,e){},295:function(n,e){},297:function(n,e){},324:function(n,e){},325:function(n,e){},330:function(n,e){},332:function(n,e){},339:function(n,e){},358:function(n,e){},432:function(n,e,t){"use strict";t.r(e);var c=t(0),a=t.n(c),o=t(32),s=t.n(o),i=t(22),r=(t(229),t(447)),l=t(69),u=(t(230),t(448));function d(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return"".concat(n.slice(0,e),"...").concat(n.slice(-e))}function f(n,e){var t=BigInt("1"+"0".repeat(e)),c=n%t;return(n/t).toString()+"."+c.toString().padStart(e,"0")}var j,b=t(2),h=t.n(b),p=t(5),O=t(44),g=t(218),m=t(213),w=t.n(m),x=t(80),v=t.n(x);!function(n){n.MainNet="mainnet",n.TestNet="testnet"}(j||(j={}));var C=new v.a.Algodv2("","https://algoexplorerapi.io",""),N=new v.a.Algodv2("","https://testnet.algoexplorerapi.io","");function y(n){switch(n){case j.MainNet:return C;case j.TestNet:return N;default:throw new Error("Unknown chain type: ".concat(n))}}function k(n,e){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(h.a.mark((function n(e,t){var c,a,o,s,i;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=y(e),n.next=3,c.accountInformation(t).setIntDecoding(v.a.IntDecoding.BIGINT).do();case 3:return a=n.sent,o=a.amount,s=a.assets,(i=s.map((function(n){var e=n["asset-id"],t=n.amount,c=n.creator,a=n.frozen;return{id:Number(e),amount:t,creator:c,frozen:a,decimals:0}}))).sort((function(n,e){return n.id-e.id})),n.next=10,Promise.all(i.map(function(){var n=Object(p.a)(h.a.mark((function n(e){var t,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.getAssetByID(e.id).do();case 2:t=n.sent,a=t.params,e.name=a.name,e.unitName=a["unit-name"],e.url=a.url,e.decimals=a.decimals;case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 10:return i.unshift({id:0,amount:o,creator:"",frozen:!1,decimals:6,name:"Algo",unitName:"Algo"}),n.abrupt("return",i);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var S={accounts:[],address:"",assets:[],connected:!1,connector:null,chain:j.TestNet,fetching:!1},A=Object(O.b)("walletConnect/getAccountAssets",function(){var n=Object(p.a)(h.a.mark((function n(e){var t,c,a;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.chain,c=e.address,a=k(t,c),n.abrupt("return",a);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),M=Object(O.c)({name:"walletConnect",initialState:S,reducers:{setFetching:function(n,e){console.log("setFetching: ",e.payload),n.fetching=e.payload},switchChain:function(n,e){console.log("switchChain chain: ",e.payload),n.chain=e.payload},reset:function(n){n.accounts=[],n.address="",n.assets=[],n.connected=!1,n.connector=null,console.log("reset state",n)},walletConnectInit:function(n){n.connector=new g.a({bridge:"https://bridge.walletconnect.org",qrcodeModal:w.a})},setConnected:function(n,e){n.connected=e.payload},onConnect:function(n,e){var t=e.payload.params[0].accounts;n.accounts=t,n.address=t[0]},onSessionUpdate:function(n,e){n.accounts=e.payload,n.address=e.payload[0]},setAccountAssets:function(n,e){n.assets=e.payload},killSession:function(n){n.connected&&n.connector.killSession()}},extraReducers:function(n){n.addCase(A.fulfilled,(function(n,e){n.assets=e.payload}))}}),T=function(n){return n.walletConnect&&n.walletConnect.fetching},E=function(n){return n.walletConnect&&n.walletConnect.chain},B=function(n){return n.walletConnect&&n.walletConnect.connected},D=function(n){return n.walletConnect&&n.walletConnect.connector},F=function(n){return n.walletConnect&&n.walletConnect.assets},z=function(n){return n.walletConnect&&n.walletConnect.address},P=M.actions,U=P.setFetching,_=P.switchChain,J=P.reset,L=P.walletConnectInit,W=P.setConnected,q=P.onConnect,G=P.onSessionUpdate,R=P.killSession,V=M.reducer,H=Object(O.c)({name:"application",initialState:{isModalOpen:!1},reducers:{setIsModalOpen:function(n,e){n.isModalOpen=e.payload}}}),K=function(n){return n.application&&n.application.isModalOpen},Q=H.actions.setIsModalOpen,X=H.reducer,Y=t(4),Z=function(){var n=Object(i.c)(T),e=Object(i.c)(D),t=Object(i.c)(B),a=Object(i.c)(F),o=Object(i.c)(z),s=Object(i.c)(E),r=a&&a.find((function(n){return n&&0===n.id}))||{id:0,amount:BigInt(0),creator:"",frozen:!1,decimals:6,name:"Algo",unitName:"Algo"},b=Object(i.b)();Object(c.useEffect)((function(){null!=window.localStorage.getItem("walletconnect")&&b(L())}),[]),Object(c.useEffect)((function(){t&&b(Q(!1))}),[t]),Object(c.useEffect)((function(){if(e){h(e),b(W(!0)),e.connected||e.createSession();var n=e.accounts;b(G(n))}}),[e]),Object(c.useEffect)((function(){e&&o&&o.length>0&&(console.log("chain: ",s),b(A({chain:s,address:o})),b(U(!0)))}),[o,s]),Object(c.useEffect)((function(){b(U(!1))}),[a]);var h=function(n){console.log("%cin subscribeToEvents","background: yellow"),n&&(n.on("connect",(function(n,e){if(console.log("%cOn connect","background: yellow"),n)throw n;b(q(e))})),n.on("session_update",(function(n,e){if(console.log("%cOn session_update","background: yellow"),n)throw n;var t=e.params[0].accounts;b(G(t))})),n.on("disconnect",(function(n,e){if(console.log("%cOn disconnect","background: yellow"),n)throw n;b(J())})))};return Object(Y.jsx)("div",{className:"site-layout-background site-header",children:Object(Y.jsxs)("div",{className:"site-header-inner",children:[Object(Y.jsxs)("div",{children:[Object(Y.jsx)("span",{children:"Connected to "}),Object(Y.jsxs)(u.a,{defaultValue:j.TestNet,onChange:function(n){return b(_(n.target.value))},children:[Object(Y.jsx)("option",{value:j.TestNet,children:"Testnet"}),Object(Y.jsx)("option",{value:j.MainNet,children:"Mainnet"})]})]}),o?Object(Y.jsxs)("div",{className:"header-address-info",children:[n?null:Object(Y.jsxs)("span",{children:[f(r.amount,r.decimals)," ",r.unitName||"units"]}),Object(Y.jsx)("span",{className:"header-account",children:d(o)}),Object(Y.jsx)(l.a,{className:"disconnect-button",onClick:function(){return b(R())},children:"Disconnect"})]}):Object(Y.jsx)(l.a,{onClick:function(){return b(Q(!0))},children:"Connect Wallet"})]})})},$=t(53),nn=function(n){var e=n.src,t=n.fallback;return Object(Y.jsx)("img",Object($.a)(Object($.a)({},n),{},{src:e,className:"icon",onError:function(n){t&&(n.target.src=t)}}))};nn.defaultProps={src:null,fallback:"",size:20};var en=nn,tn=function(n){var e="https://algoexplorer.io/images/assets/big/light/".concat(n.assetID,".png");return Object(Y.jsx)(en,{src:e})};tn.defaultProps={assetID:0};var cn=tn,an=t.p+"static/media/algo.ecbc85e5.svg",on=function(n){var e=n.asset,t=0===e.id?an:null;return Object(Y.jsxs)("div",Object($.a)(Object($.a)({className:"asset-row"},n),{},{children:[Object(Y.jsxs)("div",{className:"asset-info",children:[t?Object(Y.jsx)(en,{src:t}):Object(Y.jsx)(cn,{assetID:e.id}),Object(Y.jsx)("span",{children:e.name})]}),Object(Y.jsx)("div",{children:Object(Y.jsx)("div",{children:"".concat(f(e.amount,e.decimals)," ").concat(e.unitName||"units")})})]}))},sn=function(n){var e=n.assets,t=e.find((function(n){return n&&0===n.id}))||{id:0,amount:BigInt(0),creator:"",frozen:!1,decimals:6,name:"Algo",unitName:"Algo"},c=e.filter((function(n){return n&&0!==n.id}));return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("h2",{children:"Account Balance"}),Object(Y.jsx)(on,{asset:t},t.id),c.map((function(n){return Object(Y.jsx)(on,{asset:n},n.id)}))]})},rn=function(){return Object(Y.jsx)("div",{className:"loading-icon",children:Object(Y.jsx)("span",{})})},ln=function(){var n=Object(i.c)(F),e=Object(i.c)(T);return Object(Y.jsx)("div",{className:"site-body",children:Object(Y.jsx)("div",{className:"site-body-inner",children:e?Object(Y.jsx)(rn,{}):Object(Y.jsx)(sn,{assets:n})})})},un=function(){var n=Object(i.c)(K),e=Object(i.b)();return Object(Y.jsx)("div",{children:Object(Y.jsxs)("div",{className:"site-layout",children:[Object(Y.jsx)(Z,{}),Object(Y.jsx)(ln,{}),Object(Y.jsxs)("div",{className:"footer",children:["Made with \ud83d\udc96 by ",Object(Y.jsx)("a",{href:"https://github.com/fionnachan",target:"_blank",children:"@fionnachan"})]}),Object(Y.jsx)(r.a,{isShown:n,title:"Connect to a wallet",hasFooter:!1,onCloseComplete:function(){return e(Q(!1))},children:Object(Y.jsxs)(l.a,{className:"wallet-button",onClick:function(){return e(L())},children:[Object(Y.jsx)("img",{className:"wallet-icon",src:"/wallet/algorandwallet.svg"}),Object(Y.jsx)("span",{children:"Algorand Wallet"})]})})]})})},dn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,449)).then((function(e){var t=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;t(n),c(n),a(n),o(n),s(n)}))},fn=Object(O.a)({reducer:{walletConnect:V,application:X},preloadedState:{},middleware:function(n){return n({serializableCheck:!1})}});s.a.render(Object(Y.jsx)(a.a.StrictMode,{children:Object(Y.jsx)(i.a,{store:fn,children:Object(Y.jsx)(un,{})})}),document.getElementById("root")),dn()}},[[432,1,2]]]);
//# sourceMappingURL=main.bfa45b11.chunk.js.map