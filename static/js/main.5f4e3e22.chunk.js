(this["webpackJsonponline-profile"]=this["webpackJsonponline-profile"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),l=a.n(o),c=(a(51),a(52),a(1)),s=a(8),i=a(4),m=a(5),h=a(7),d=a(6),u=a(42),p=a.n(u),b=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",margin:"auto"}},r.a.createElement(c.Grid,{className:"landing-grid"},r.a.createElement(c.Cell,{col:12},r.a.createElement("img",{src:p.a,alt:"Avatar",className:"avatar-img"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"letters"},"Zubair De vries"),r.a.createElement("hr",null),r.a.createElement("p",{className:"letters"},"HTML/CSS || React || Python || JavaScript || WordPress"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://github.com/zubairdv10",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))))))}}]),a}(n.Component),E=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(c.Grid,null,r.a.createElement(c.Cell,{col:4},r.a.createElement("p",null,this.props.Hobby)),r.a.createElement(c.Cell,{col:8},r.a.createElement("h4",{style:{marginTop:"0px",fontfamily:"uni-sans"}},this.props.hobby),r.a.createElement("p",null,this.props.schoolDisc)))}}]),a}(n.Component),g=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-background"},r.a.createElement(c.Grid,null,r.a.createElement(c.Cell,{col:7},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2017/08/25/13/36/code-geek-2680204_1280.png",alt:"avatar",style:{height:"230px"}})),r.a.createElement("h2",{style:{paddingTop:"2em",fontFamily:"uni-sans"}},"Zubair De vries"),r.a.createElement("h4",{style:{color:"white",fontFamily:"uni-sans"}},"Jr Web Developer"),r.a.createElement("hr",{style:{borderTop:"3px solid white",width:"100%"}}),r.a.createElement("p",{style:{fontSize:"20px",fontFamily:"uni-sans"}},"Hi there, my name is Zubair I am 19 years old and this is my online portfolio . I would describe myself as a soft and gentle person , I'm always willing to help when I'm needed or even offering to help , I believe if you set your mind on something you will be able to achieve it with hard work and patience. I can be shy at first but if you get to know me you won't get me to stop talking, I love meeting new people and getting to know them. I'm willing to try new things and go to places I've never been , I think of it as a kind of adventure"),r.a.createElement("h4",{style:{color:"white",fontFamily:"uni-sans"}},"Where my interest came from:"),r.a.createElement("hr",{style:{borderTop:"3px solid white",width:"100%"}}),r.a.createElement("p",{style:{fontSize:"20px",fontFamily:"uni-sans"}},"I've never known how a person makes games or websites and I always wanted to find out , I did a tech support course last year but that didn't work out , i was interested in what they were doing but it just wasn't what I wanted to do , but one day my friend came to my house and we spoke and he showed me what his doing at university , I was intrigued, he showed the different coding languages and did examples of a few , I told him I had to apply to a course that does this , but unfortunately no university accepted and then I came across Life Choices Academy and I knew this was my chance to get a little taste of what coding is and how it works , by my surprise I learnt allot more that I bargained for and I am really happy that they accepted me and showed the different languages and how to code.")),r.a.createElement(c.Cell,{className:"about-right-col",col:5},r.a.createElement("h2",{className:"font1"},"Hobbies"),r.a.createElement(E,{Hobby:r.a.createElement("img",{src:"https://thumbs.dreamstime.com/b/rugby-ball-icon-dark-background-label-rugby-ball-icon-178556999.jpg",alt:"",className:"img"}),hobby:"Rugby"}),r.a.createElement(E,{Hobby:r.a.createElement("img",{src:"https://previews.123rf.com/images/pxlprostudio/pxlprostudio1904/pxlprostudio190401940/120469142-gaming-icon-on-background-for-graphic-and-web-design-simple-vector-sign-internet-concept-symbol-for-.jpg",alt:"",className:"img"}),hobby:"Gaming"}),r.a.createElement(E,{Hobby:r.a.createElement("img",{src:"https://www.pngkit.com/png/detail/233-2331668_get-reading-icon.png",alt:"",className:"img"}),hobby:"Reading"}),r.a.createElement(E,{Hobby:r.a.createElement("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8SNMGUy6MGfbM1K4RR7uSs7rRsMLLC4jUaw&usqp=CAU",alt:"",className:"img"}),hobby:"Swimming"}))))}}]),a}(n.Component),y=a(23),f=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).submitForm=n.submitForm.bind(Object(y.a)(n)),n.state={status:""},n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.state.status;return r.a.createElement("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/mwkwylzk",method:"POST"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",name:"email"}),r.a.createElement("br",null),r.a.createElement("label",null,"Message:"),r.a.createElement("input",{type:"text",name:"message"}),"SUCCESS"===e?r.a.createElement("p",null,"Thanks!"):r.a.createElement("button",{className:"submitbutton"},"Submit"),"ERROR"===e&&r.a.createElement("p",null,"Ooops! There was an error."))}},{key:"submitForm",value:function(e){var t=this;e.preventDefault();var a=e.target,n=new FormData(a),r=new XMLHttpRequest;r.open(a.method,a.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(a.reset(),t.setState({status:"SUCCESS"})):t.setState({status:"ERROR"}))},r.send(n)}}]),a}(r.a.Component),w=a(43),v=a.n(w),k=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-body"},r.a.createElement(c.Grid,{className:"contact-grid"},r.a.createElement(c.Cell,{col:5},r.a.createElement("h2",{className:"font1-1"},"Aspiring Web Developer"),r.a.createElement("p",{style:{width:"75%",margin:"auto",paddingTop:"1em"}},"Feel free to give me a call or send me a message"),r.a.createElement("img",{src:v.a,alt:"Avatar",className:"imgSize"})),r.a.createElement(c.Cell,{col:4},r.a.createElement("h2",{className:"font1-1"},"Contact Me"),r.a.createElement("hr",null),r.a.createElement("div",{className:"contact-list"},r.a.createElement(c.List,null,r.a.createElement(c.ListItem,null,r.a.createElement(c.ListItemContent,{style:{fontSize:"25px",fontFamily:"Anton"}},r.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}),"(081) 4333 665")),r.a.createElement(c.ListItem,null,r.a.createElement(c.ListItemContent,{style:{fontSize:"25px",fontFamily:"Anton"}},r.a.createElement("i",{className:"fa fa-whatsapp","aria-hidden":"true"}),"(081) 4333 665")),r.a.createElement(c.ListItem,null,r.a.createElement(c.ListItemContent,{style:{fontSize:"25px",fontFamily:"Anton"}},r.a.createElement("i",{className:"fa fa-phone","aria-hidden":"true"}),"(021) 704 2835")),r.a.createElement(c.ListItem,null,r.a.createElement(c.ListItemContent,{style:{fontSize:"20px",fontFamily:"Anton"}})),r.a.createElement(c.Cell,{col:2},r.a.createElement(f,null)))))))}}]),a}(n.Component),C=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(c.Grid,null,r.a.createElement(c.Cell,{col:12,className:"font2"},r.a.createElement("div",null,this.props.skill,this.props.number,r.a.createElement(c.ProgressBar,{style:{margin:"auto",width:"75%"},progress:this.props.progress}))))}}]),a}(n.Component),N=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(c.Grid,null,r.a.createElement(c.Cell,{col:4,className:"font1"},r.a.createElement("p",null,this.props.yearStart," - ",this.props.yearEnd)),r.a.createElement(c.Cell,{col:8,className:"font4"},r.a.createElement("h4",{style:{marginTop:"0px",fontFamily:"uni-sans"}},this.props.schoolName)))}}]),a}(n.Component),j=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(c.Grid,null,r.a.createElement(c.Cell,{col:4,className:"font4"},r.a.createElement("p",null,this.props.company)),r.a.createElement(c.Cell,{col:8,className:"font2"},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.duties)))}}]),a}(n.Component),T=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"div-Background"},r.a.createElement(c.Grid,null,r.a.createElement(c.Cell,{style:{width:"100%"},className:"cell-Background"},r.a.createElement("h1",{className:"font2"},"Education"),r.a.createElement("hr",{style:{borderTop:"3px solid white",width:"95%"},className:"HR"}),r.a.createElement(N,{yearStart:2020,yearEnd:2020,schoolName:"Life Choices Coding Academy"}),r.a.createElement(N,{yearStart:2014,yearEnd:2018,schoolName:"South Peninsula High School"}),r.a.createElement(N,{yearStart:2007,yearEnd:2013,schoolName:"Sunlands Primary School"}))),r.a.createElement(c.Grid,null,r.a.createElement(c.Cell,{style:{width:"100%"},className:"cell-Background"},r.a.createElement("h1",{className:"font2"},"Work Experience"),r.a.createElement("hr",{style:{borderTop:"3px solid white",width:"90%"},className:"HR"}),r.a.createElement(j,{company:"Beit-Ul-Amaan",duties:" My duties included : I had to serve the residents breakfast, lunch and supper.\r I had to interact with them , like playing a game of chess or just getting to know them in\r general.There were sometimes when I had to wash dishes or hang up washing.I went on walks with some of residents around the neighborhood for some exercise"}),r.a.createElement(j,{company:"Life Choices Studios",duties:"Frontend web design and WordPress site building"}))),r.a.createElement(c.Grid,null,r.a.createElement(c.Cell,{style:{width:"100%"},className:"cell-Background"},r.a.createElement("h1",{className:"font2"},"Skills"),r.a.createElement("hr",{style:{borderTop:"3px solid white",width:"90%"},className:"HR"}),r.a.createElement(C,{skill:r.a.createElement("h2",{className:"font2"},"HTML / CSS"),progress:80,number:80}),r.a.createElement(C,{skill:r.a.createElement("h2",{className:"font2"},"Python"),progress:75,number:75}),r.a.createElement(C,{skill:r.a.createElement("h2",{className:"font2"},"React"),progress:75,number:75}),r.a.createElement(C,{skill:r.a.createElement("h2",{className:"font2"},"JavaScript"),progress:70,number:70}),r.a.createElement(C,{skill:r.a.createElement("h2",{className:"font2"},"WordPress"),progress:85,number:85}))))}}]),a}(n.Component),O=a(44),x=a.n(O),I=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={activeTab:0},n}return Object(m.a)(a,[{key:"toggleCatergories",value:function(){return 0===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},r.a.createElement(c.Card,{shadow:6,style:{minWidth:"450",margin:"auto"}},r.a.createElement(c.CardTitle,{style:{color:"black",height:"280px",background:"url(https://repository-images.githubusercontent.com/201285961/937d5100-e144-11e9-9286-699d727d95ad) center / cover"}},"Github Finder"),r.a.createElement(c.CardText,null,"This is a GitHub Finder made with React"),r.a.createElement(c.CardActions,{border:!0},r.a.createElement("a",{href:"https://github.com/zubairdv10/React-project",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(c.Button,{colored:!0},"GitHub")),r.a.createElement("a",{href:"https://githubfinder23456777.netlify.app/",target:"_blank"},r.a.createElement(c.Button,{colored:!0},"Live Demo")))),r.a.createElement(c.Card,{shadow:6,style:{minWidth:"450",margin:"auto"}},r.a.createElement(c.CardTitle,{style:{color:"black",height:"280px",background:"url(https://cdn3.f-cdn.com//files/download/112987293/8f646a.jpg) center / cover"}},"Contact Keeper"),r.a.createElement(c.CardText,null,"This is a Contact Keeper made with React"),r.a.createElement(c.CardActions,{border:!0},r.a.createElement("a",{href:"https://github.com/zubairdv10/Contact-Keeper",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(c.Button,{colored:!0},"GitHub")),r.a.createElement("a",{href:"https://remembrance-sorry-47084.herokuapp.com/register",target:"_blank"},r.a.createElement(c.Button,{colored:!0},"Live Demo")))),r.a.createElement(c.Card,{shadow:6,style:{minWidth:"450",margin:"auto"}},r.a.createElement(c.CardTitle,{style:{color:"black",height:"280px",background:"url(https://camo.githubusercontent.com/90e3174d4ccc00e68eebec577d56a256bf7f8ad6bfccf6236a7148eefa58c82f/68747470733a2f2f692e696d6775722e636f6d2f46484f444249322e676966) center / cover"}},"IT Logger"),r.a.createElement(c.CardText,null,"This is a IT-Logger made with react"),r.a.createElement(c.CardActions,{border:!0},r.a.createElement("a",{href:"https://github.com/zubairdv10/IT-Logger",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(c.Button,{colored:!0},"GitHub")))),r.a.createElement(c.Card,{shadow:6,style:{minWidth:"450",margin:"auto"}},r.a.createElement(c.CardTitle,{style:{color:"black",height:"280px",background:r.a.createElement("img",{src:x.a,alt:"Avatar",className:"turbo-chat"})}},"Chatting app"),r.a.createElement(c.CardText,null,"This is a Chatting app"),r.a.createElement(c.CardActions,{border:!0},r.a.createElement("a",{href:"https://github.com/zubairdv10/Final-Project",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(c.Button,{colored:!0},"GitHub")),r.a.createElement("a",{href:"https://5f1dc697e0fedb82c336cbc7--hopeful-beaver-144e30.netlify.app/",target:"_blank"},r.a.createElement(c.Button,{colored:!0},"Live Demo"))))):1===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},r.a.createElement(c.Card,{shadow:6,style:{minWidth:"450",margin:"auto"}},r.a.createElement(c.CardTitle,{style:{color:"black",height:"280px",background:"url(https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png) center / cover"}},"HTML Project"),r.a.createElement(c.CardText,null,"This is a Contact project"),r.a.createElement(c.CardActions,{border:!0},r.a.createElement("a",{href:"https://github.com/zubairdv10/HTML-and-CSS-project",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(c.Button,{colored:!0},"GitHub"))))):2===this.state.activeTab?r.a.createElement("div",{className:"projects-grid"},r.a.createElement(c.Card,{shadow:6,style:{minWidth:"450",margin:"auto"}},r.a.createElement(c.CardTitle,{style:{color:"black",height:"280px",background:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover"}},"Python Project #1"),r.a.createElement(c.CardText,null,"This is a Lotto project"),r.a.createElement(c.CardActions,{border:!0},r.a.createElement("a",{href:"https://github.com/zubairdv10/PYTHON",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(c.Button,{colored:!0},"GitHub")),r.a.createElement("a",{href:"https://repl.it/talk/share/Lotto-Project/120317",target:"_blank"},r.a.createElement(c.Button,{colored:!0},"Live Demo")))),r.a.createElement(c.Card,{shadow:6,style:{minWidth:"450",margin:"auto"}},r.a.createElement(c.CardTitle,{style:{color:"black",height:"280px",background:"url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover"}},"Python Project #2"),r.a.createElement(c.CardText,null,"This is a Login project"),r.a.createElement(c.CardActions,{border:!0},r.a.createElement("a",{href:"https://github.com/zubairdv10/PythonProject2",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(c.Button,{colored:!0},"GitHub"))))):void 0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"category-tabs"},r.a.createElement(c.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},r.a.createElement(c.Tab,null,"React"),r.a.createElement(c.Tab,null,"HTML/CSS"),r.a.createElement(c.Tab,null,"Python")),r.a.createElement(c.Grid,null,r.a.createElement(c.Cell,{col:12},r.a.createElement("div",{className:"content"},this.toggleCatergories()))))}}]),a}(n.Component),S=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(c.Grid,null,r.a.createElement(c.Cell,{col:4},r.a.createElement("p",{className:"font2"},this.props.co_worker," ")),r.a.createElement(c.Cell,{col:8,className:"font1"},r.a.createElement("h4",{style:{marginTop:"0px"}},this.props.statement)))}}]),a}(n.Component),H=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"div-Background"},r.a.createElement(c.Grid,null,r.a.createElement(c.Cell,{style:{width:"100%"},className:"cell-Background"},r.a.createElement("h1",{className:"font1"},"Testimonials"),r.a.createElement("hr",{style:{borderTop:"3px solid white",width:"90%"},className:"HR"}),r.a.createElement(S,{co_worker:"Godwin Dzvapatsva (Head of Curriculum and Learning) -",statement:"Zubair  has a gentle personality and has shown great interest in programming as displayed by his steady progress. He has good determination to succeed."}),r.a.createElement("hr",{style:{borderTop:"3px solid white",width:"90%"},className:"HR"}),r.a.createElement(S,{co_worker:"Joshua Davids (Peer and Frontend Developer) -",statement:"Zubair is a hardworking individual, who strives to achieve his goals, he shown commitment toward his projects. With critical thinking and a keen eye for design he has shown great improvement under pressure and the ability to work in a group and alone"}),r.a.createElement("hr",{style:{borderTop:"3px solid white",width:"90%"},className:"HR"}),r.a.createElement(S,{co_worker:"Jaabir Esau -",statement:"To whom it may concern it's a great privilege to work with Zubair. He is one aspiring man , Zubair has exponential talent in his work and ethics. He has brought the best out of his team members.I truly would recommend Zubair to any working environment."}),r.a.createElement("hr",{style:{borderTop:"3px solid white",width:"90%"},className:"HR"}),r.a.createElement(S,{co_worker:"Imtiyaaz Temoore -",statement:"Zubair De vries is one of the most hardworking learners at lifechoice academy, he always make sure that he does his best and nothing but best"}),r.a.createElement("hr",{style:{borderTop:"3px solid white",width:"90%"},className:"HR"}),r.a.createElement(S,{co_worker:"Sajjaad Francis -",statement:"You're a hard working individual who excels at everything you do, I am sure you'll be a valuable asset to any and every company out there"}),r.a.createElement("hr",{style:{borderTop:"3px solid white",width:"90%"},className:"HR"}),r.a.createElement(S,{co_worker:"Usama Gierdien -",statement:"Zubair, one of the most talented individuals I've ever encountered. With extreme determination , he make sure that he completes his task and that it's 100% proper. Very hardworking as well , very often working through the night as I have witnessed this for myself."}))))}}]),a}(n.Component),L=function(){return r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/ONLINE-PORTFOLIO-2/",component:b}),r.a.createElement(s.a,{path:"/aboutme",component:g}),r.a.createElement(s.a,{path:"/contact",component:k}),r.a.createElement(s.a,{path:"/projects",component:I}),r.a.createElement(s.a,{path:"/resume",component:T}),r.a.createElement(s.a,{path:"/Testamonials2",component:H}))},R=a(10);var P=function(){return r.a.createElement("div",{className:"demo-big-content"},r.a.createElement(c.Layout,null,r.a.createElement(c.Header,{className:"header-color",title:r.a.createElement(R.b,{style:{textDecoration:"none",color:"white"},to:"/ONLINE-PORTFOLIO-2/",className:"letters"},"My Portfolio"),scroll:!0},r.a.createElement(c.Navigation,{className:"letters"},r.a.createElement(R.b,{to:"/aboutme"},"About Me"),r.a.createElement(R.b,{to:"/resume"},"My Resume"),r.a.createElement(R.b,{to:"/projects"},"Projects"),r.a.createElement(R.b,{to:"/Testamonials2"},"Testimonials"),r.a.createElement(R.b,{to:"/contact"},"Contact Info"))),r.a.createElement(c.Drawer,{title:r.a.createElement(R.b,{style:{color:"black"},to:"/ONLINE-PORTFOLIO-2/"},"Home")},r.a.createElement(c.Navigation,null,r.a.createElement(R.b,{to:"/resume"},"My Resume"),r.a.createElement(R.b,{to:"/aboutme"},"About Me"),r.a.createElement(R.b,{to:"/projects"},"Projects"),r.a.createElement(R.b,{to:"/contact"},"Contact Info"))),r.a.createElement(c.Content,null,r.a.createElement("div",{className:"page-content"}),r.a.createElement(L,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(103),a(104);l.a.render(r.a.createElement(R.a,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,a){e.exports=a.p+"static/media/pic.83f00375.png"},43:function(e,t,a){e.exports=a.p+"static/media/laptop.5ab66f3b.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/Capture.1fa60d43.PNG"},46:function(e,t,a){e.exports=a(105)},51:function(e,t,a){},52:function(e,t,a){}},[[46,1,2]]]);
//# sourceMappingURL=main.5f4e3e22.chunk.js.map