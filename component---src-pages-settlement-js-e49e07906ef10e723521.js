"use strict";(self.webpackChunkgatsby_dicer=self.webpackChunkgatsby_dicer||[]).push([[744],{1862:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(7294),a=n(7648),l=n(9308);function c(e){return r.createElement(a.Z,e,r.createElement("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"}))}function o(){return r.createElement(l.Z,{sx:{mt:6,mb:3},color:"text.secondary"},r.createElement(c,{sx:{mr:1,verticalAlign:"middle"}}),"Pro tip: Have a nice day! 🎲🐲")}},4956:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(1721),a=n(7294),l=n(8348),c=n(2531),o=n(7368),u=n(5616),s=n(9308),m=n(9211),i=(n(1862),n(2599),n(1476)),h=n(4575),d=n(8953),g=n(4382),p=n(4755),v=["Bounty","Clear","EscortPerson","EscortCargo","Hunt"];function E(e,t){var n=[],r=(e=parseInt(e),2);switch(console.log("New Board setup with size: "+e+" and location: "+t),e){case 1:r+=1;break;case 2:r+=2;break;case 3:r+=3;break;case 4:r+=4;break;case 5:r+=10}console.log("Quests to SHow: "+r);for(var a=0;a<r;a++){var l=v[Math.floor(Math.random()*v.length)];n.push(l)}return n}(0,l.ZP)(d.Z)((function(e){var t=e.theme;return Object.assign({},t.typography.body2,{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));var Z=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={currentStrongholdType:0,currentStrongholdLevel:0,currentQuests:[]},t.handleInputChange=function(e){var n,r=e.target,a=r.value,l=r.name;t.setState(((n={})[l]=a,n))},t.rollQuests=function(e){e.preventDefault(),t.setState({currentQuests:[]});var n=E(t.state.currentStrongholdType,t.state.currentStrongholdLevel);t.setState({currentQuests:n}),t.forceUpdate()},t}return(0,r.Z)(t,e),t.prototype.render=function(){return a.createElement(u.Z,{maxWidth:"lg"},a.createElement(p.Z,null),a.createElement(u.Z,{maxWidth:"md"},a.createElement(m.Z,null,a.createElement(g.Z,{spacing:3},a.createElement(u.Z,{maxWidth:"sm"},a.createElement(m.Z,{sx:{my:4}},a.createElement(s.Z,{variant:"h4",component:"h1",gutterBottom:!0},"Stronghold Tracker 🏰")),a.createElement(g.Z,{spacing:3},a.createElement(h.Z,null,a.createElement(g.Z,{direction:"row",spacing:1},a.createElement(o.Z,{id:"select-currentStrongholdType",name:"currentStrongholdType",value:this.state.currentStrongholdType,label:"Stonghold",onChange:this.handleInputChange},a.createElement(c.Z,{value:"0"},"Keep"),a.createElement(c.Z,{value:"1"},"Tower"),a.createElement(c.Z,{value:"2"},"Temple"),a.createElement(c.Z,{value:"3"},"Establishment")),a.createElement(o.Z,{id:"select-currentStrongholdLevel",name:"currentStrongholdLevel",value:this.state.currentStrongholdLevel,label:"Level",onChange:this.handleInputChange},a.createElement(c.Z,{value:"0"},"1"),a.createElement(c.Z,{value:"1"},"2"),a.createElement(c.Z,{value:"2"},"3"),a.createElement(c.Z,{value:"3"},"4")))),a.createElement(g.Z,{spacing:3},a.createElement(m.Z,null,"Toughness : 20 Upgrade Cost: 6,000 Time to Upgrade: 120 Settlement Actions: Derp, Terp, Slerp"))))))),a.createElement(i.Z,null))},t}(a.Component)}}]);
//# sourceMappingURL=component---src-pages-settlement-js-e49e07906ef10e723521.js.map