(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,function(e,t,n){e.exports=n.p+"static/media/reactLogo.cf227adb.svg"},function(e,t,n){e.exports=n.p+"static/media/kenanRustamov.6f576ee8.jpg"},function(e,t,n){e.exports=n.p+"static/media/partify.c310efed.png"},function(e,t,n){e.exports=n.p+"static/media/snackcheck.8d2afbe9.png"},function(e,t,n){e.exports=n.p+"static/media/BentleyPhoto.1b920709.jpeg"},function(e,t,n){e.exports=n.p+"static/media/bnymellon.b71a8a62.png"},function(e,t,n){e.exports=n.p+"static/media/krLogo.edf16145.svg"},function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),l=n.n(o),r=(n(16),n(17),n(1)),c=(n(18),n(4)),s=n.n(c),m=(n(19),function(e){function t(e){var t=0;if(e){do{t+=e.offsetTop}while(e=e.offsetParent);return void 0!==t?t:0}return 0}return i.a.createElement("a",{onClick:function(){window.scrollTo({top:t(document.getElementById(e.id)),behavior:"smooth"}),e.onClick&&e.onClick()},className:"App-link",href:e.href,target:"_blank",rel:"noopener noreferrer"},e.text)}),p=function(e){return e.links.map((function(t){return i.a.createElement(m,{text:t.text,px:t.px,onClick:e.onClick,id:t.id})}))},u=(n(20),function(e){var t=Object(a.useState)(!1),n=Object(r.a)(t,2),o=n[0],l=n[1];return i.a.createElement("div",{className:"navMenu"},i.a.createElement("div",{className:"lineWrapper ".concat(o?"lineWrapper-animation":""),onClick:function(){l(!o)}},i.a.createElement("div",{className:"topLine"}),i.a.createElement("div",{className:"middleLine"}),i.a.createElement("div",{className:"bottomLine"})),i.a.createElement("div",{className:"slate ".concat(o?"slate-animation":"")},o?i.a.createElement("div",{className:"exitIcon",onClick:function(){l(!o)}},i.a.createElement("div",{className:"leftLine"}),i.a.createElement("div",{className:"rightLine"})):null,i.a.createElement("div",{className:"linksWrapper"},i.a.createElement(p,{links:e.links,onClick:function(){l(!o)},id:e.id}))))}),f=function(e){var t=Object(a.useState)(window.pageYOffset),n=Object(r.a)(t,2),o=n[0],l=n[1],c=Object(a.useState)("down"),m=Object(r.a)(c,2),f=m[0],h=m[1],d=Object(a.useState)(window.innerWidth),g=Object(r.a)(d,2),v=g[0],w=g[1];return Object(a.useEffect)((function(){var e=function(){w(window.innerWidth)};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){var e=window.scrollY,t=function(){l(window.scrollY);var t=window.scrollY;h(t>e?"down":"up")};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[o]),i.a.createElement("header",{className:"App-header clearfix ".concat(o<1?"headerBigger":void 0," ").concat(o>75&&"down"===f?"hideHeader":void 0)},i.a.createElement("div",{className:"Title"},i.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),i.a.createElement("svg",{className:"krLogo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 932.86 468.67"},i.a.createElement("path",{d:"M250.67 425.11H44.13V333.9h29.04V135.3H43.31V44.08h207.36v91.22h-30.13v198.6h30.13v91.21zm236.94 0H290.39V333.9h18.35l-83.55-108.47 96.97-90.12h-30.95V44.08h187.64v91.22h-29.58l-77.79 72.32 97.24 126.28h18.9v91.21z"}),i.a.createElement("path",{d:"M625.46 425.11H418.38V333.9h30.95V135.3h-30.95V44.08h207.09c18.63 0 35.88.32 51.77.96 15.89.64 29.49 1.55 40.81 2.74 11.32 1.19 21.73 2.79 31.23 4.79 26.66 5.66 48.3 17.99 64.92 36.98 16.8 19.36 25.2 42.18 25.2 68.48 0 19.72-5.12 37.62-15.34 53.69-10.23 15.89-23.65 27.58-40.27 35.06l52.59 87.11h27.39v91.22H726.54l-83-155.59H596.7v64.37h28.76v91.22zM596.7 127.63v72.59h16.44c21.55 0 36.16-.64 43.83-1.92 8.22-1.28 15.16-4.93 20.82-10.96 5.66-5.66 8.49-13.42 8.49-23.28s-2.83-17.71-8.49-23.56c-5.66-6.03-12.87-9.68-21.64-10.96-8.4-1.28-23.74-1.92-46.02-1.92H596.7z"}))),v<600?i.a.createElement(u,{links:e.links}):i.a.createElement(p,{links:e.links}))},h=(n(21),n(22),function(e){var t=i.a.createRef();return i.a.createElement("div",{ref:t,className:"dataBlock",id:e.id},i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"text"},e.propInput.title),i.a.createElement("div",{className:"bottomBorder"})),null==e.propInput.ignoreInfo?i.a.createElement("div",{className:"info"},null!=e.propInput.infoTitle?i.a.createElement("div",{className:"infoTitle"},e.propInput.infoTitle,i.a.createElement("div",{className:"subtitle"},e.propInput.infoSubtitle),i.a.createElement("div",{className:"infoText"},e.propInput.infoText),i.a.createElement("div",{className:"dataBlock-icons"},e.github?i.a.createElement("a",{href:e.github},i.a.createElement("svg",{height:"25",className:"dynamicLogo",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))):null,e.link?i.a.createElement("a",{href:e.link},i.a.createElement("svg",{className:"dynamicLogo linkLogo",xmlns:"http://www.w3.org/2000/svg",height:"25",viewBox:"0 0 24 24",width:"25"},i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),i.a.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}))):null)):null,e.icon?null:e.propInput.infoImg&&e.link?i.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"image clickable",src:e.propInput.infoImg,alt:e.propInput.alt})):i.a.createElement("img",{className:e.textOnly?"line":"image",src:e.propInput.infoImg,alt:e.propInput.alt}),e.propInput.other):null)}),d=n(5),g=n.n(d),v=n(6),w=n.n(v),E=n(7),k=n.n(E),b=n(8),x=n.n(b),I=n(9),y=n.n(I),N=n(10),S=n.n(N),T=function(e){return i.a.createElement("div",{className:"data"},i.a.createElement(h,{id:"1",github:"https://github.com/KenanRustamov",link:"https://www.linkedin.com/in/kenanrustamov/",propInput:{title:"Profile",infoTitle:"Kenan Rustamov",infoSubtitle:"Full Stack Developer",infoText:"I currently major in Computer Science with a minor in Chemistry at the University of Pittsburgh. I am currently the fundraising chair for Oakland Outreach, a volunteering club at Pitt, and am in the process of creating a club for underrepresented minorities at pitt.",infoImg:g.a,alt:"Professionalish looking photo at the beach"}}),i.a.createElement(h,{id:"2",link:"https://bnymellon.com",propInput:{title:"Work Experience",infoTitle:"BNY Mellon",infoSubtitle:"Full-Stack Software Engineering Intern",infoText:"Worked on a project to allow internal users to communicate with Fircosoft to verify large transactions.  Specifically worked on creating CRUD operations for the project and project setup.",infoImg:y.a,alt:"image of bnymellon"}}),i.a.createElement(h,{link:"https://www.bentley.com/en",propInput:{title:"",infoTitle:"Bentley Systems",infoSubtitle:"Full-Stack Software Engineering Intern",infoText:"Created the ability for end users of the application to add and remove users from projects, persisted in the backend.",infoImg:x.a,alt:"Yes, that is my favorite shirt"}}),i.a.createElement(h,{id:"3",github:"https://github.com/KenanRustamov/Partify",link:"http://www.partify-us.com/",propInput:{title:"Projects",infoTitle:"Partify",infoSubtitle:"React TypeScript Scss",infoText:"Partify is an app that allows you to create a custom tailored playlist for any occasion based on the user and their friends' music tastes.",infoImg:w.a,alt:"Image of my partify application"}}),i.a.createElement(h,{link:"https://github.com/KenanRustamov/SnackCheck",propInput:{title:"",infoTitle:"SnackCheck",infoSubtitle:"JavaScript React-Native Expo",infoText:"SnackCheck allows users to find recipes based on dietary preferences such as veganism or allergies such as shellfish.",infoImg:k.a,alt:"Image of my snackcheck application"}}),i.a.createElement(h,{link:"https://github.com/KenanRustamov/Portfolio",github:"https://github.com/KenanRustamov/Portfolio",propInput:{title:"",infoTitle:"Portfolio",infoSubtitle:"TypeScript Scss React HTML",infoText:"This portfolio was created from scratch using the skills I learned as a web developer at my summer internship.  The designs, logo, and code were all done by me.",infoImg:S.a,alt:"Logo created in photoshop"}}),i.a.createElement(h,{id:"4",propInput:{title:"Skills",ignoreInfo:"",infoTitle:null,infoSubtitle:"",infoText:"",infoImg:null}}),i.a.createElement(h,{textOnly:!0,propInput:{title:"",infoTitle:"Languages:",infoSubtitle:"Java, Javascript, Python, and C, HTML/CSS",infoText:"",infoImg:""}}),i.a.createElement(h,{textOnly:!0,propInput:{title:"",infoTitle:"Other Technologies:",infoSubtitle:"React, Redux, MongoDB, Node.js,Spring, MySQL, JPA, Android Studios",infoText:"",infoImg:""}}),i.a.createElement(h,{icon:!0,id:"5",propInput:{title:"Contact",infoTitle:null,infoSubtitle:"",infoText:"",infoImg:null,other:i.a.createElement("a",{href:"mailto:ker108@pitt.edu",className:"emailButton"},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"})))}}))},C=(n(23),function(e){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"logoLinks"},i.a.createElement("a",{href:"https://github.com/KenanRustamov"},i.a.createElement("svg",{height:"25",className:"dynamicLogo",role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))),i.a.createElement("a",{href:"https://www.linkedin.com/in/kenanrustamov/"},i.a.createElement("svg",{className:"dynamicLogo",xmlns:"http://www.w3.org/2000/svg",height:"25",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"}))),i.a.createElement("a",{href:"https://www.instagram.com/kenanrustamov1/"},i.a.createElement("svg",{className:"dynamicLogo",role:"img",height:"25",viewBox:"0 0 24 24"},i.a.createElement("path",{d:"M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"})))),i.a.createElement("div",{className:"bottomText"},"Created By Kenan Rustamov"))});var L=function(){var e=[{text:"PROFILE",href:"#dataBlock",px:150,id:"1"},{text:"WORK EXPERIENCE",href:"https://www.google.com/",px:625,id:"2"},{text:"PROJECTS",href:"https://www.google.com/",px:1125,id:"3"},{text:"SKILLS",href:"https://www.google.com/",px:2200,id:"4"},{text:"CONTACT",href:"https://www.google.com/",px:2200,id:"5"}];return i.a.createElement("div",{className:"App"},i.a.createElement("main",null,i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{links:e}),i.a.createElement(T,null),i.a.createElement(C,{links:e}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.654695ad.chunk.js.map