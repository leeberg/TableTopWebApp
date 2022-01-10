"use strict";(self.webpackChunkgatsby_dicer=self.webpackChunkgatsby_dicer||[]).push([[326],{4320:function(e,t,r){r.d(t,{ZP:function(){return T}});var a=r(2982),n=r(4942),c=r(3366),i=r(7462),l=r(7294),o=r(5505),s=r(2692),u=r(8297),m=r(9408),p=r(8348),v=r(2371);var d=l.createContext(),g=r(8416);function h(e){return(0,g.Z)("MuiGrid",e)}var f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],x=(0,r(2194).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,a.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,a.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,a.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,a.Z)(f.map((function(e){return"grid-xs-".concat(e)}))),(0,a.Z)(f.map((function(e){return"grid-sm-".concat(e)}))),(0,a.Z)(f.map((function(e){return"grid-md-".concat(e)}))),(0,a.Z)(f.map((function(e){return"grid-lg-".concat(e)}))),(0,a.Z)(f.map((function(e){return"grid-xl-".concat(e)}))))),Z=r(5893),S=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function b(e){var t=parseFloat(e);return"".concat(t).concat(String(e).replace(String(t),"")||"px")}function w(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t||!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[r["spacing-xs-".concat(String(e))]||"spacing-xs-".concat(String(e))];var a=e.xs,n=e.sm,c=e.md,i=e.lg,l=e.xl;return[Number(a)>0&&(r["spacing-xs-".concat(String(a))]||"spacing-xs-".concat(String(a))),Number(n)>0&&(r["spacing-sm-".concat(String(n))]||"spacing-sm-".concat(String(n))),Number(c)>0&&(r["spacing-md-".concat(String(c))]||"spacing-md-".concat(String(c))),Number(i)>0&&(r["spacing-lg-".concat(String(i))]||"spacing-lg-".concat(String(i))),Number(l)>0&&(r["spacing-xl-".concat(String(l))]||"spacing-xl-".concat(String(l)))]}var E=(0,p.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState,n=r.container,c=r.direction,i=r.item,l=r.lg,o=r.md,s=r.sm,u=r.spacing,m=r.wrap,p=r.xl,v=r.xs,d=r.zeroMinWidth;return[t.root,n&&t.container,i&&t.item,d&&t.zeroMinWidth].concat((0,a.Z)(w(u,n,t)),["row"!==c&&t["direction-xs-".concat(String(c))],"wrap"!==m&&t["wrap-xs-".concat(String(m))],!1!==v&&t["grid-xs-".concat(String(v))],!1!==s&&t["grid-sm-".concat(String(s))],!1!==o&&t["grid-md-".concat(String(o))],!1!==l&&t["grid-lg-".concat(String(l))],!1!==p&&t["grid-xl-".concat(String(p))]])}})((function(e){var t=e.ownerState;return(0,i.Z)({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},"nowrap"===t.wrap&&{flexWrap:"nowrap"},"reverse"===t.wrap&&{flexWrap:"wrap-reverse"})}),(function(e){var t=e.theme,r=e.ownerState,a=(0,s.P$)({values:r.direction,breakpoints:t.breakpoints.values});return(0,s.k9)({theme:t},a,(function(e){var t={flexDirection:e};return 0===e.indexOf("column")&&(t["& > .".concat(x.item)]={maxWidth:"none"}),t}))}),(function(e){var t=e.theme,r=e.ownerState,a=r.container,c=r.rowSpacing,i={};if(a&&0!==c){var l=(0,s.P$)({values:c,breakpoints:t.breakpoints.values});i=(0,s.k9)({theme:t},l,(function(e){var r=t.spacing(e);return"0px"!==r?(0,n.Z)({marginTop:"-".concat(b(r))},"& > .".concat(x.item),{paddingTop:b(r)}):{}}))}return i}),(function(e){var t=e.theme,r=e.ownerState,a=r.container,c=r.columnSpacing,i={};if(a&&0!==c){var l=(0,s.P$)({values:c,breakpoints:t.breakpoints.values});i=(0,s.k9)({theme:t},l,(function(e){var r=t.spacing(e);return"0px"!==r?(0,n.Z)({width:"calc(100% + ".concat(b(r),")"),marginLeft:"-".concat(b(r))},"& > .".concat(x.item),{paddingLeft:b(r)}):{}}))}return i}),(function(e){var t,r=e.theme,a=e.ownerState;return r.breakpoints.keys.reduce((function(e,n){var c={};if(a[n]&&(t=a[n]),!t)return e;if(!0===t)c={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===t)c={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var l=(0,s.P$)({values:a.columns,breakpoints:r.breakpoints.values}),o="object"==typeof l?l[n]:l;if(null==o)return e;var u="".concat(Math.round(t/o*1e8)/1e6,"%"),m={};if(a.container&&a.item&&0!==a.columnSpacing){var p=r.spacing(a.columnSpacing);if("0px"!==p){var v="calc(".concat(u," + ").concat(b(p),")");m={flexBasis:v,maxWidth:v}}}c=(0,i.Z)({flexBasis:u,flexGrow:0,maxWidth:u},m)}return 0===r.breakpoints.values[n]?Object.assign(e,c):e[r.breakpoints.up(n)]=c,e}),{})})),T=l.forwardRef((function(e,t){var r,n=(0,v.Z)({props:e,name:"MuiGrid"}),s=(0,u.Z)(n),p=s.className,g=s.columns,f=s.columnSpacing,x=s.component,b=void 0===x?"div":x,T=s.container,y=void 0!==T&&T,k=s.direction,P=void 0===k?"row":k,H=s.item,M=void 0!==H&&H,C=s.lg,I=void 0!==C&&C,D=s.md,W=void 0!==D&&D,z=s.rowSpacing,N=s.sm,G=void 0!==N&&N,B=s.spacing,O=void 0===B?0:B,R=s.wrap,j=void 0===R?"wrap":R,F=s.xl,L=void 0!==F&&F,$=s.xs,A=void 0!==$&&$,K=s.zeroMinWidth,V=void 0!==K&&K,U=(0,c.Z)(s,S),_=z||O,q=f||O,J=l.useContext(d),Q=g||J||12,X=(0,i.Z)({},s,{columns:Q,container:y,direction:P,item:M,lg:I,md:W,sm:G,rowSpacing:_,columnSpacing:q,wrap:j,xl:L,xs:A,zeroMinWidth:V}),Y=function(e){var t=e.classes,r=e.container,n=e.direction,c=e.item,i=e.lg,l=e.md,o=e.sm,s=e.spacing,u=e.wrap,p=e.xl,v=e.xs,d={root:["root",r&&"container",c&&"item",e.zeroMinWidth&&"zeroMinWidth"].concat((0,a.Z)(w(s,r)),["row"!==n&&"direction-xs-".concat(String(n)),"wrap"!==u&&"wrap-xs-".concat(String(u)),!1!==v&&"grid-xs-".concat(String(v)),!1!==o&&"grid-sm-".concat(String(o)),!1!==l&&"grid-md-".concat(String(l)),!1!==i&&"grid-lg-".concat(String(i)),!1!==p&&"grid-xl-".concat(String(p))])};return(0,m.Z)(d,h,t)}(X);return r=(0,Z.jsx)(E,(0,i.Z)({ownerState:X,className:(0,o.Z)(Y.root,p),as:b,ref:t},U)),12!==Q?(0,Z.jsx)(d.Provider,{value:Q,children:r}):r}))},2599:function(e,t,r){var a=r(7294),n=r(6190),c=r(5444),i=a.forwardRef((function(e,t){return a.createElement(n.Z,Object.assign({component:c.rU,ref:t},e))}));t.Z=i},1862:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(7294),n=r(7648),c=r(9308);function i(e){return a.createElement(n.Z,e,a.createElement("path",{d:"M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"}))}function l(){return a.createElement(c.Z,{sx:{mt:6,mb:3},color:"text.secondary"},a.createElement(i,{sx:{mr:1,verticalAlign:"middle"}}),"Pro tip: Have a nice day! 🎲🐲")}},4506:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(7294),n=r(8348),c=r(9211),i=r(8953),l=r(4320),o=r(9308),s=(0,n.ZP)(i.Z)((function(e){var t=e.theme;return Object.assign({},t.typography.body2,{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})}));function u(e){var t=e.props.rolls;return a.createElement(c.Z,{sx:{flexGrow:1}},a.createElement(l.ZP,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3}},t.map((function(e){return a.createElement(l.ZP,{item:!0,xs:2,key:e.value,style:{width:"20px"}},a.createElement(s,null,a.createElement(o.Z,{variant:"h4",display:"block",gutterBottom:!0},e)))}))))}},7997:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var a=r(1721),n=r(7294),c=r(2531),i=r(7368),l=r(5616),o=r(9308),s=r(9211),u=(r(1862),r(2599),r(1476)),m=r(4575),p=r(4382);r(4506);function v(e,t,r,a){console.log(e+" "+t+" "+r+" "+a);var n=0,c=1;switch(parseInt(e)){case 1:case 3:n=3;break;case 2:n=4;break;case 4:n=5}switch(parseInt(t)){case 0:c=.666;break;case 1:c=1;break;case 2:c=1.333}var i=1;switch(parseInt(a)){case 1:i=.8;break;case 2:i=.5;break;case 3:i=.25}return n*c*i}function d(e,t){var r="1";switch(parseInt(t)){case 0:r=e;break;case 1:r=(e/5).toFixed(2);break;case 2:r=(e/6).toFixed(2);break;case 3:r=(e/60).toFixed(2)}return r}function g(e,t,r,a){var n=2,c="Sustainable";if(console.log("Calculating Stress for: "+e+" pace: "+t+" bushwhack: "+r+" hours per day:"+a),0===parseInt(t))switch(parseInt(a)){case 4:n=0;break;case 8:n=1;break;case 12:n=2}if(1===parseInt(t))switch(parseInt(a)){case 4:n=1;break;case 8:n=2;break;case 12:n=3}if(2===parseInt(t))switch(parseInt(a)){case 4:n=2;break;case 8:n=3;break;case 12:n=4}switch(3===parseInt(r)&&(n+=1),4===parseInt(e)&&(n-=1),parseInt(n)){case 0:c="Relaxing";break;case 1:c="Easy";break;case 2:c="Sustainable";break;case 3:c="Stressful";break;case 4:c="Exhausting"}return c}var h=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(t=e.call.apply(e,[this].concat(a))||this).state={currentPartyHumanoidSize:0,totalDistanceTraveled:0,currentTravelPace:1,currentTravelMethod:1,currentTreavelTerrainType:1,currentDistanceToGo:0,currentTravelSpeed:3,currentPartySize:1,currentTravelVehicle:0,supplyUsagePerDay:0,TravelPace:"Normal",currentHexType:0,currentTerrainTravelDifficulty:0,currentShipType:0,isOnShip:!1,calculatedHexPerHour:3,calculatedHexPerDay:8,currentTravelHoursPerDay:8,currentTravelStress:"Sustainable"},t.handleInputChange=function(e){var r,a=e.target,n=a.value,c=a.name,i=t.state.isOnShip,l=t.state.currentTravelMethod,o=t.state.currentTravelPace,s=t.state.currentHexType,u=t.state.currentTerrainTravelDifficulty,m=t.state.currentTravelHoursPerDay;"currentTravelMethod"===c&&(i=4===parseInt(n),l=n),"currentTravelPace"===c&&(o=n),"currentTerrainTravelDifficulty"===c&&(u=n),"currentHexType"===c&&(s=n),"currentTravelHoursPerDay"===c&&(m=n);var p=v(l,o,s,u),h=d(p,s),f=h*m;4.8===f&&(f=5);var x=g(l,o,u,m);t.setState(((r={})[c]=n,r.isOnShip=i,r.currentTerrainTravelDifficulty=u,r.currentTravelMethod=l,r.currentTravelSpeed=p,r.calculatedHexPerHour=h,r.calculatedHexPerDay=f,r.currentTravelHoursPerDay=m,r.currentTravelStress=x,r))},t}return(0,a.Z)(t,e),t.prototype.render=function(){return n.createElement(l.Z,{maxWidth:"lg"},n.createElement(l.Z,{maxWidth:"md"},n.createElement(s.Z,null,n.createElement(p.Z,{spacing:3},n.createElement(l.Z,{maxWidth:"sm"},n.createElement(s.Z,{sx:{my:4}},n.createElement(o.Z,{variant:"h4",component:"h1",gutterBottom:!0},"Travel Helper ✈")),n.createElement(p.Z,{spacing:3},n.createElement(m.Z,null,n.createElement(p.Z,{direction:"row",spacing:1},n.createElement(i.Z,{labelId:"select-pace-method",id:"select-method",name:"currentTravelMethod",value:this.state.currentTravelMethod,label:"TravelPace",onChange:this.handleInputChange},n.createElement(c.Z,{value:"1"},"Foot 🚶‍♀️"),n.createElement(c.Z,{value:"2"},"Horseback 🐎 "),n.createElement(c.Z,{value:"3"},"Wagon 🛷 "),n.createElement(c.Z,{value:"4"},"Ship 🚢")),this.state.isOnShip?n.createElement(i.Z,{id:"select-currentShipType",name:"currentShipType",value:this.state.currentShipType,label:"Ship Type",onChange:this.handleInputChange},n.createElement(c.Z,{value:"0"},"Keelboat"),n.createElement(c.Z,{value:"1"},"Rowboat"),n.createElement(c.Z,{value:"2"},"Canoe"),n.createElement(c.Z,{value:"3"},"Keelboat "),n.createElement(c.Z,{value:"4"},"Longship"),n.createElement(c.Z,{value:"5"},"Small Sailboat"),n.createElement(c.Z,{value:"6"},"Large Sailboat"),n.createElement(c.Z,{value:"7"},"Galley"),n.createElement(c.Z,{value:"8"},"Warshipp")):null,n.createElement(i.Z,{labelId:"select-pace-label",id:"select-pace",name:"currentTravelPace",value:this.state.currentTravelPace,label:"TravelPace",onChange:this.handleInputChange},n.createElement(c.Z,{value:"0"},"Slow 🐱‍👤"),n.createElement(c.Z,{value:"1"},"Normal 🚶‍♀️"),n.createElement(c.Z,{value:"2"},"Fast 🏃‍♀️")),n.createElement(i.Z,{labelId:"select-perday-label",id:"select-hours",name:"currentTravelHoursPerDay",value:this.state.currentTravelHoursPerDay,label:"Traveling Hours",onChange:this.handleInputChange},n.createElement(c.Z,{value:"4"},"Casual - 4 Hours"),n.createElement(c.Z,{value:"8"},"Normal - 8 Hours"),n.createElement(c.Z,{value:"12"},"Grueling - 12 Hours")))),n.createElement(p.Z,{spacing:3},n.createElement(m.Z,null,n.createElement(p.Z,{direction:"row",spacing:1},n.createElement(i.Z,{id:"select-hex-size",name:"currentHexType",value:this.state.currentHexType,label:"Hex Scale",onChange:this.handleInputChange},n.createElement(c.Z,{value:"0"},"Province 🏡 - 1 Mile"),n.createElement(c.Z,{value:"1"},"Region 🚵‍♀️ - 5 Miles"),n.createElement(c.Z,{value:"2"},"Kingdom 👑 - 6 Miles"),n.createElement(c.Z,{value:"3"},"Continent 🌎 - 60 Miles ")),n.createElement(i.Z,{id:"select-hex-type",name:"currentTerrainTravelDifficulty",value:this.state.currentTerrainTravelDifficulty,label:"Terrain Travel Difficulty",onChange:this.handleInputChange},n.createElement(c.Z,{value:"0"},"None"),n.createElement(c.Z,{value:"1"},"Bushwhacking Easy "),n.createElement(c.Z,{value:"2"},"Bushwhacking Moderate"),n.createElement(c.Z,{value:"3"},"Bushwhacking Difficult")))),n.createElement(s.Z,null,"Speed:  ",this.state.currentTravelSpeed," MPH",n.createElement("br",null),"Hexes Per Hour:  ",this.state.calculatedHexPerHour,n.createElement("br",null),"Hexes Per Day:  ",this.state.calculatedHexPerDay,n.createElement("br",null),"Daily Travel Stress:  ",this.state.currentTravelStress))))))),n.createElement(u.Z,null))},t}(n.Component)}}]);
//# sourceMappingURL=component---src-pages-travel-js-10c42faf91a8340935ef.js.map