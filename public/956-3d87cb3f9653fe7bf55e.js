"use strict";(self.webpackChunkgatsby_dicer=self.webpackChunkgatsby_dicer||[]).push([[956,744],{4956:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var r=n(1721),a=n(7294),l=n(8348),c=n(2531),o=n(7368),s=n(5616),u=n(9308),h=n(9211),i=(n(1862),n(2599),n(9834)),m=n(4575),g=n(8953),p=n(4382),d=(n(4506),["Bounty","Clear","EscortPerson","EscortCargo","Hunt"]);function v(e,t){var n=[],r=(e=parseInt(e),2);switch(console.log("New Board setup with size: "+e+" and location: "+t),e){case 1:r+=1;break;case 2:r+=2;break;case 3:r+=3;break;case 4:r+=4;break;case 5:r+=10}console.log("Quests to SHow: "+r);for(var a=0;a<r;a++){var l=d[Math.floor(Math.random()*d.length)];n.push(l)}return n}(0,l.ZP)(g.Z)((function(e){var t=e.theme;return Object.assign({},t.typography.body2,{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));var E=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={currentStrongholdType:0,currentStrongholdLevel:0,currentQuests:[]},t.handleInputChange=function(e){var n,r=e.target,a=r.value,l=r.name;t.setState(((n={})[l]=a,n))},t.rollQuests=function(e){e.preventDefault(),t.setState({currentQuests:[]});var n=v(t.state.currentStrongholdType,t.state.currentStrongholdLevel);t.setState({currentQuests:n}),t.forceUpdate()},t}return(0,r.Z)(t,e),t.prototype.render=function(){return a.createElement(s.Z,{maxWidth:"lg"},a.createElement(s.Z,{maxWidth:"md"},a.createElement(h.Z,null,a.createElement(p.Z,{spacing:3},a.createElement(s.Z,{maxWidth:"sm"},a.createElement(h.Z,{sx:{my:4}},a.createElement(u.Z,{variant:"h4",component:"h1",gutterBottom:!0},"Stronghold Tracker 🏰")),a.createElement(p.Z,{spacing:3},a.createElement(m.Z,null,a.createElement(p.Z,{direction:"row",spacing:1},a.createElement(o.Z,{id:"select-currentStrongholdType",name:"currentStrongholdType",value:this.state.currentStrongholdType,label:"Stonghold",onChange:this.handleInputChange},a.createElement(c.Z,{value:"0"},"Keep"),a.createElement(c.Z,{value:"1"},"Tower"),a.createElement(c.Z,{value:"2"},"Temple"),a.createElement(c.Z,{value:"3"},"Establishment")),a.createElement(o.Z,{id:"select-currentStrongholdLevel",name:"currentStrongholdLevel",value:this.state.currentStrongholdLevel,label:"Level",onChange:this.handleInputChange},a.createElement(c.Z,{value:"0"},"1"),a.createElement(c.Z,{value:"1"},"2"),a.createElement(c.Z,{value:"2"},"3"),a.createElement(c.Z,{value:"3"},"4")))),a.createElement(p.Z,{spacing:3},a.createElement(h.Z,null,"Toughness : 20 Upgrade Cost: 6,000 Time to Upgrade: 120 Settlement Actions: Derp, Terp, Slerp"))))))),a.createElement(i.Z,null))},t}(a.Component)}}]);
//# sourceMappingURL=956-3d87cb3f9653fe7bf55e.js.map