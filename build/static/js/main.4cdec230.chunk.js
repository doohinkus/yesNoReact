(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){e.exports=a(39)},18:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(10),r=a.n(o),l=(a(18),a(2)),i=a(11),s=a.n(i),h="09ySYIkP0gd9DG6f2IwPfa8G7iYE1arP";a(38);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(function(){var e=Object(c.useState)(["?","??"]),t=Object(l.a)(e,2),a=t[0],o=t[1],r=Object(c.useState)(["Yes","No"]),i=Object(l.a)(r,2),m=i[0],u=i[1],d=Object(c.useState)(""),p=Object(l.a)(d,2),v=p[0],w=p[1],g="http://yesornooracle.com",E="https://twitter.com/intent/tweet?text=Your answer is ".concat(a,"&hashtags=").concat(["rafaelIsCoding","yesOrNoOracle","yesNoOracle"],"&url=").concat(g),f={backgroundImage:"url(".concat(v,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"};function b(e){var t=e.target.value.split("-");u([t[0],t[1]])}return Object(c.useEffect)(function(){document.title="\ud83d\ude00: ".concat("?"===a[0]?"???":a)},[]),n.a.createElement("div",{className:"App",style:f},n.a.createElement("h1",null,"Yes No Oracle"),n.a.createElement("h1",{className:"answer"},a),n.a.createElement("h3",null,"Choice: ",m[0]," or ",m[1]),n.a.createElement("button",{onClick:function(){var e,t,a=(e=m[0],t=m[1],1===Math.round(Math.random())?e:t);o(a);var c=Math.round(25*Math.random());s.a.get("".concat("https://api.giphy.com/v1/gifs/search?","q=").concat(a,"&api_key=").concat(h)).then(function(e){var t=e.data.data[c].images.fixed_width.url;w(t)}).catch(function(e){console.log(e),w("")})}},"Get Answer"),n.a.createElement("div",{className:"choices"},n.a.createElement("div",{className:"choice"},n.a.createElement("input",{type:"radio",name:"choice",value:"Yes-No",onChange:b}),n.a.createElement("p",null,"Yes or No")),n.a.createElement("div",{className:"choice"},n.a.createElement("input",{type:"radio",name:"choice",value:"Stop-Go",onChange:b}),n.a.createElement("p",null,"Stop or Go")),n.a.createElement("div",{className:"choice"},n.a.createElement("input",{type:"radio",name:"choice",value:"Heads-Tails",onChange:b}),n.a.createElement("p",null,"Heads or Tails"))),n.a.createElement("div",{className:"footer"},n.a.createElement("a",{href:E,target:"_blank"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",class:"twtr-icon"},n.a.createElement("path",{opacity:"0",d:"M0 0h24v24H0z"}),n.a.createElement("path",{d:"M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"}))),n.a.createElement("a",{href:"https://www.facebook.com/sharer/sharer.php?u=".concat(g)},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30px",height:"30px",viewBox:"0 0 266.893 266.895",class:"fcbk-icon"},n.a.createElement("path",{id:"Blue_1_",fill:"#3C5A99",d:"M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812 c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225 H248.082z"}),n.a.createElement("path",{id:"f",fill:"#FFFFFF",d:"M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935 l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585 v99.803H182.409z"})))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.4cdec230.chunk.js.map