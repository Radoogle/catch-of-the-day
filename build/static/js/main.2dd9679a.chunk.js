(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),r=a(20),i=a(65),c=a(66),o=a(67),l=a(7),h=a(8),u=a(10),d=a(9);function p(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}function j(e){return e[Math.floor(Math.random()*e.length)]}function f(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(j(e),"-").concat(j(e),"-").concat(j(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var b=a(1),m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).myInput=n.a.createRef(),e.goToStore=function(t){t.preventDefault();var a=e.myInput.current.value;e.props.history.push("/store/".concat(a))},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"store-selector",onSubmit:this.goToStore,children:[Object(b.jsx)("h2",{children:"Please Enter A Store"}),Object(b.jsx)("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store Name",defaultValue:f()}),Object(b.jsx)("button",{type:"submit",children:"Visit Store"})]})}}]),a}(n.a.Component),O=a(11),v=function(e){return Object(b.jsxs)("header",{className:"top",children:[Object(b.jsxs)("h1",{children:["Catch",Object(b.jsxs)("span",{className:"ofThe",children:[Object(b.jsx)("span",{className:"of",children:"Of"}),Object(b.jsx)("span",{className:"the",children:"The"})]}),"Day"]}),Object(b.jsx)("h3",{className:"tagline",children:Object(b.jsx)("span",{children:e.tagline})})]})},g=a(17),x=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).renderOrder=function(t){var a=e.props.fishes[t],s=e.props.order[t],n=a&&"available"===a.status,r={classNames:"order",key:t,timeout:{enter:500,exit:500}};return a?n?Object(b.jsx)(g.CSSTransition,Object(O.a)(Object(O.a)({},r),{},{children:Object(b.jsx)("li",{children:Object(b.jsxs)("span",{children:[Object(b.jsx)(g.TransitionGroup,{component:"span",className:"count",children:Object(b.jsx)(g.CSSTransition,{classNames:"count",timeout:{enter:500,exit:500},children:Object(b.jsx)("span",{children:s})},s)}),"lbs ",a.name,p(s*a.price),Object(b.jsx)("button",{onClick:function(){return e.props.removeFromOrder(t)},children:"\xd7"})]})},t)})):Object(b.jsx)(g.CSSTransition,Object(O.a)(Object(O.a)({},r),{},{children:Object(b.jsxs)("li",{children:["Sorry ",a.name?a.name:"fish"," is no longer available"]},t)})):null},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var s=e.props.fishes[a],n=e.props.order[a];return s&&"available"===s.status?t+n*s.price:t}),0);return Object(b.jsxs)("div",{className:"order-wrap",children:[Object(b.jsx)("h2",{children:"Order"}),Object(b.jsx)(g.TransitionGroup,{component:"ul",className:"order",children:t.map(this.renderOrder)}),Object(b.jsxs)("div",{className:"total",children:["Total:",Object(b.jsx)("strong",{children:p(a)})]})]})}}]),a}(n.a.Component),y=a(18),S=a.n(y),w=a(24),k=a(21),F=a(16),C=a.n(F),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).nameRef=n.a.createRef(),e.priceRef=n.a.createRef(),e.statusRef=n.a.createRef(),e.descRef=n.a.createRef(),e.imageRef=n.a.createRef(),e.createFish=function(t){t.preventDefault();var a={name:e.nameRef.current.value,price:parseFloat(e.priceRef.current.value),status:e.statusRef.current.value,desc:e.descRef.current.value,image:e.imageRef.current.value};e.props.addFish(a),t.currentTarget.reset()},e}return Object(h.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("form",{className:"fish-edit",onSubmit:this.createFish,children:[Object(b.jsx)("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"Name"}),Object(b.jsx)("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"Price"}),Object(b.jsxs)("select",{name:"status",ref:this.statusRef,children:[Object(b.jsx)("option",{value:"available",children:"Fresh!"}),Object(b.jsx)("option",{value:"unavailable",children:"Sold Out!"})]}),Object(b.jsx)("textarea",{name:"desc",ref:this.descRef,placeholder:"Desc"}),Object(b.jsx)("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"Image"}),Object(b.jsx)("button",{type:"submit",children:"+ Add Fish"})]})}}]),a}(n.a.Component),R=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).handleChange=function(t){var a=Object(O.a)(Object(O.a)({},e.props.fish),{},{[t.currentTarget.name]:t.currentTarget.value});e.props.updateFish(e.props.index,a)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"fish-edit",children:[Object(b.jsx)("input",{type:"text",name:"name",onChange:this.handleChange,value:this.props.fish.name}),Object(b.jsx)("input",{type:"text",name:"price",onChange:this.handleChange,value:this.props.fish.price}),Object(b.jsxs)("select",{type:"text",name:"status",onChange:this.handleChange,value:this.props.fish.status,children:[Object(b.jsx)("option",{value:"available",children:"Fresh!"}),Object(b.jsx)("option",{value:"unavailable",children:"Sold Out!"})]}),Object(b.jsx)("textarea",{name:"desc",onChange:this.handleChange,value:this.props.fish.desc}),Object(b.jsx)("input",{type:"text",name:"image",onChange:this.handleChange,value:this.props.fish.image}),Object(b.jsx)("button",{onClick:function(){return e.props.deleteFish(e.props.index)},children:"Remove Fish"})]})}}]),a}(n.a.Component),T=function(e){return Object(b.jsxs)("nav",{className:"login",children:[Object(b.jsx)("h2",{children:"Inventory Login"}),Object(b.jsx)("p",{children:"Sign in to manage your store's inventory"}),Object(b.jsx)("button",{className:"github",onClick:function(){return e.authenticate("Github")},children:"Login with Github"}),Object(b.jsx)("button",{className:"facebook",onClick:function(){return e.authenticate("Facebook")},children:"Login with Facebook"})]})},I=a(31),A=a.n(I),D=C.a.initializeApp({apiKey:"AIzaSyD3L85_gyP4TzXbZyxzC6J6IdZqaWtVeQU",authDomain:"catch-of-the-day-radude.firebaseapp.com",projectId:"catch-of-the-day-radude",databaseURL:"https://catch-of-the-day-radude-default-rtdb.europe-west1.firebasedatabase.app"}),L=A.a.createClass(D.database()),M=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={uid:null,owner:null},e.authHandler=function(){var t=Object(w.a)(S.a.mark((function t(a){var s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L.fetch(e.props.storeId,{context:Object(k.a)(e)});case 2:if(s=t.sent,console.log(s),s.owner){t.next=7;break}return t.next=7,L.post("".concat(e.props.storeId,"/owner"),{data:a.user.uid});case 7:e.setState({uid:a.user.uid,owner:s.owner||a.user.uid}),console.log(a);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.authenticate=function(t){var a=new(C.a.auth["".concat(t,"AuthProvider")]);D.auth().signInWithPopup(a).then(e.authHandler)},e.logout=Object(w.a)(S.a.mark((function t(){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("logging out"),t.next=3,C.a.auth().signOut();case 3:e.setState({uid:null});case 4:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;C.a.auth().onAuthStateChanged((function(t){t&&e.authHandler({user:t})}))}},{key:"render",value:function(){var e=this,t=Object(b.jsx)("button",{onClick:this.logout,children:"Log Out!"});return this.state.uid?this.state.uid!==this.state.owner?Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"Sorry you are not the owner"}),t]}):Object(b.jsxs)("div",{className:"inventory",children:[Object(b.jsx)("h2",{children:"Inventory"}),t,Object.keys(this.props.fishes).map((function(t){return Object(b.jsx)(R,{index:t,fish:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish},t)})),Object(b.jsx)(N,{addFish:this.props.addFish}),Object(b.jsx)("button",{onClick:this.props.loadSampleFishes,children:"Load Sample Fishes"})]}):Object(b.jsx)(T,{authenticate:this.authenticate})}}]),a}(n.a.Component),P={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},z=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this,t=this.props.details,a=t.image,s=t.name,n=t.price,r=t.desc,i="available"===t.status;return Object(b.jsxs)("li",{className:"menu-fish",children:[Object(b.jsx)("img",{src:a,alt:s}),Object(b.jsxs)("h3",{className:"fish-name",children:[s,Object(b.jsx)("span",{className:"price",children:p(n)})]}),Object(b.jsx)("p",{children:r}),Object(b.jsx)("button",{disabled:!i,onClick:function(){return e.props.addToOrder(e.props.index)},children:i?"Add To Cart":"Sold out!"})]})}}]),a}(n.a.Component),J=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={fishes:{},order:{}},e.addFish=function(t){var a=Object(O.a)({},e.state.fishes);a["fish".concat(Date.now())]=t,e.setState({fishes:a})},e.updateFish=function(t,a){var s=Object(O.a)({},e.state.fishes);s[t]=a,e.setState({fishes:s})},e.deleteFish=function(t){var a=Object(O.a)({},e.state.fishes);a[t]=null,e.setState({fishes:a})},e.loadSampleFishes=function(){e.setState({fishes:P})},e.addToOrder=function(t){var a=Object(O.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.removeFromOrder=function(t){var a=Object(O.a)({},e.state.order);delete a[t],e.setState({order:a})},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=L.syncState("".concat(e.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentDidUpdate",value:function(){localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order))}},{key:"componentWillUnmount",value:function(){L.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"catch-of-the-day",children:[Object(b.jsxs)("div",{className:"menu",children:[Object(b.jsx)(v,{tagline:"Fresh Seafood Market"}),Object(b.jsx)("ul",{className:"fishes",children:Object.keys(this.state.fishes).map((function(t){return Object(b.jsx)(z,{index:t,details:e.state.fishes[t],addToOrder:e.addToOrder},t)}))})]}),Object(b.jsx)(x,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),Object(b.jsx)(M,{addFish:this.addFish,updateFish:this.updateFish,deleteFish:this.deleteFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,storeId:this.props.match.params.storeId})]})}}]),a}(n.a.Component),U=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:"Not Found!!!"})})},W=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)(c.a,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(b.jsx)(o.a,{path:"/store/:storeId",component:J}),Object(b.jsx)(o.a,{component:U})]})})};a(61);Object(r.render)(Object(b.jsx)(W,{}),document.getElementById("main"))}},[[62,1,2]]]);
//# sourceMappingURL=main.2dd9679a.chunk.js.map