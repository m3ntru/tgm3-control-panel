(this["webpackJsonptgm3-control-panel"]=this["webpackJsonptgm3-control-panel"]||[]).push([[0],{39:function(e,t){},60:function(e,t,n){},69:function(e,t){},79:function(e,t,n){},86:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(9),l=n.n(c),r=(n(60),n(40)),s=n(41),o=n(50),d=n(49),x=n(118),h=n(121),p=n(122),j=n(125),m=n(124),g=n(123),b=n(48),u=n(117),y=n(42),f=n.n(y),O=(n(79),n(5)),C=new URLSearchParams(window.location.search).get("id"),k=new URLSearchParams(window.location.search).get("token"),v=new f.a.Client({options:{debug:!0,messagesLogLevel:"info"},connection:{reconnect:!0,secure:!0},identity:{username:C||"justinfan123456",password:k||""},channels:["tgm3backend"]}),w=Object(b.a)({palette:{primary:{main:"#009688"},secondary:{main:"#ff1744"}},typography:{fontFamily:"Noto Sans TC,sans-serif"}}),T=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={id:"",text:""},e.tmiInit=function(){v.connect().then((function(e){})).catch((function(e){console.log(e)})),v.on("message",(function(e,t,n,i){}))},e.handleClick=function(e){return function(t){v.say("tgm3backend",e)}},e.handleRecallClick=function(t){return function(n){e.state.id&&("!cheer"==t?e.state.text&&(v.say("tgm3backend",t+" "+e.state.id),v.say("tgm3backend",e.state.text)):e.state.text?(v.say("tgm3backend",t+" "+e.state.id),v.say("tgm3backend",e.state.text)):(v.say("tgm3backend",t+" "+e.state.id),v.say("tgm3backend","0")))}},e.handleIdChange=function(){return function(t){var n=t.target.value;e.setState({id:n})}},e.handleTextChange=function(){return function(t){var n=t.target.value;e.setState({text:n})}},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.tmiInit()}},{key:"render",value:function(){return Object(O.jsx)(u.a,{theme:w,children:Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("div",{style:{padding:"7px 0px"},children:Object(O.jsx)(x.a,{style:{margin:"7px auto",padding:"15px"},children:Object(O.jsxs)(h.a,{container:!0,spacing:4,children:[Object(O.jsx)(h.a,{item:!0,xs:12,children:Object(O.jsxs)(x.a,{style:{backgroundColor:"#e0f2f1",padding:"15px",height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(O.jsx)(p.a,{variant:"subtitle2",component:"p",style:{color:"#008076"},children:"\u97f3\u6548\u5340"}),Object(O.jsx)(j.a,{variant:"contained",color:"primary",style:{margin:"10px 10px"},onClick:this.handleClick("!LP"),children:"LP COUNT"})]})}),Object(O.jsx)(h.a,{item:!0,xs:8,children:Object(O.jsxs)(x.a,{style:{backgroundColor:"#e0f2f1",padding:"15px",height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(O.jsx)(p.a,{variant:"subtitle2",component:"p",style:{color:"#008076"},children:"\u901a\u77e5\u6e2c\u8a66"}),Object(O.jsxs)("div",{children:[Object(O.jsx)(j.a,{variant:"contained",color:"primary",style:{margin:"10px 10px"},onClick:this.handleClick("!\u5f69\u5b78\u597d\u5e25"),children:"Bit"}),Object(O.jsx)(j.a,{variant:"contained",color:"primary",style:{margin:"10px 10px"},onClick:this.handleClick("!\u5c0f\u72d7><"),children:"Donate"}),Object(O.jsx)(j.a,{variant:"contained",color:"primary",style:{margin:"10px 10px"},onClick:this.handleClick("!\u6234\u53e3\u7f69\u52e4\u6d17\u624b\u8981\u6d88\u6bd2"),children:"Tier1"}),Object(O.jsx)(j.a,{variant:"contained",color:"primary",style:{margin:"10px 10px"},onClick:this.handleClick("!\u5c0a\u7235\u4e0d\u51e1"),children:"Tier3"})]})]})}),Object(O.jsx)(h.a,{item:!0,xs:4,children:Object(O.jsxs)(x.a,{style:{backgroundColor:"#e0f2f1",padding:"15px",height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(O.jsx)(p.a,{variant:"subtitle2",component:"p",style:{color:"#008076"},children:"Basilisk Time"}),Object(O.jsxs)("div",{children:[Object(O.jsx)(j.a,{variant:"contained",color:"primary",style:{margin:"10px 10px"},onClick:this.handleClick("!basilisktime on"),children:"ON"}),Object(O.jsx)(j.a,{variant:"contained",style:{margin:"10px 10px"},onClick:this.handleClick("!basilisktime off"),children:"OFF"})]})]})}),Object(O.jsx)(h.a,{item:!0,xs:12,children:Object(O.jsxs)(x.a,{style:{backgroundColor:"#e0f2f1",padding:"15px"},children:[Object(O.jsx)(p.a,{variant:"subtitle2",component:"p",style:{color:"#008076"},children:"\u624b\u52d5 Recall"}),Object(O.jsx)(m.a,{component:g.a,label:"Twitch id",variant:"outlined",id:"outlined-size-normal",size:"small",style:{width:"85%",margin:"10px 0px"},onChange:this.handleIdChange()}),Object(O.jsx)(m.a,{component:g.a,multiline:!0,label:"Text",variant:"outlined",rows:7,id:"outlined-size-normal",size:"small",style:{width:"85%",margin:"5px 0px"},onChange:this.handleTextChange()}),Object(O.jsxs)("div",{style:{padding:"15px 0px"},children:[Object(O.jsx)(j.a,{variant:"contained",color:"primary",style:{margin:"0px 10px"},onClick:this.handleRecallClick("!sub"),children:"Sub Tier1"}),Object(O.jsx)(j.a,{variant:"contained",color:"primary",style:{margin:"0px 10px"},onClick:this.handleRecallClick("!subt3"),children:"Sub Tier3"}),Object(O.jsx)(j.a,{variant:"contained",color:"primary",style:{margin:"0px 10px"},onClick:this.handleRecallClick("!cheer"),children:"Cheer"})]})]})}),Object(O.jsx)(h.a,{item:!0,xs:4,children:Object(O.jsx)(x.a,{style:{backgroundColor:"#e0f2f1",padding:"15px",height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:Object(O.jsx)("img",{src:"https://cdn.discordapp.com/emojis/809889506089893888.png?v=1",alt:"logo"})})}),Object(O.jsx)(h.a,{item:!0,xs:4,children:Object(O.jsx)(x.a,{style:{backgroundColor:"#e0f2f1",padding:"15px",height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:Object(O.jsx)(j.a,{variant:"contained",color:"secondary",style:{margin:"10px 10px"},onClick:this.handleClick("!reload2.0"),children:"ALERTBOX Reload"})})}),Object(O.jsx)(h.a,{item:!0,xs:4,children:Object(O.jsx)(x.a,{style:{backgroundColor:"#e0f2f1",padding:"15px",height:"200px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:Object(O.jsx)("img",{src:"https://cdn.discordapp.com/emojis/809889506089893888.png?v=1",alt:"logo"})})})]})})})})})}}]),n}(i.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),i(e),a(e),c(e),l(e)}))};l.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root")),I()}},[[86,1,2]]]);
//# sourceMappingURL=main.0eff12b4.chunk.js.map