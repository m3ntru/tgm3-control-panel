(this["webpackJsonptgm3-control-panel"]=this["webpackJsonptgm3-control-panel"]||[]).push([[0],{21:function(n,e,t){},30:function(n,e){},40:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var c=t(0),o=t.n(c),a=t(4),i=t.n(a),r=(t(21),t(10)),s=t(11),u=t(15),l=t(14),d=t(61),h=t(12),f=t.n(h),p=(t(40),t(3)),g=new URLSearchParams(window.location.search).get("id"),j=new URLSearchParams(window.location.search).get("token"),m=new f.a.Client({options:{debug:!0,messagesLogLevel:"info"},connection:{reconnect:!0,secure:!0},identity:{username:g||"justinfan123456",password:j||""},channels:["zatd93"]}),b=function(n){Object(u.a)(t,n);var e=Object(l.a)(t);function t(){var n;Object(r.a)(this,t);for(var c=arguments.length,o=new Array(c),a=0;a<c;a++)o[a]=arguments[a];return(n=e.call.apply(e,[this].concat(o))).tmiInit=function(){m.connect().then((function(n){})).catch((function(n){console.log(n)})),m.on("message",(function(n,e,t,c){}))},n.handleClick=function(n){m.say("zatd93","!LP")},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.tmiInit()}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("header",{className:"App-header",children:Object(p.jsx)(d.a,{variant:"contained",onClick:this.handleClick,children:"LP Count"})})})}}]),t}(c.Component),w=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,62)).then((function(e){var t=e.getCLS,c=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;t(n),c(n),o(n),a(n),i(n)}))};i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root")),w()},9:function(n,e){}},[[46,1,2]]]);
//# sourceMappingURL=main.78f60802.chunk.js.map