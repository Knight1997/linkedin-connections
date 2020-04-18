(this["webpackJsonplinkedin-connections"]=this["webpackJsonplinkedin-connections"]||[]).push([[0],{12:function(e,t,n){e.exports=n(22)},17:function(e,t,n){},18:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},19:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(9),c=n.n(r),o=(n(17),n(11)),i=n(7),m=n(2);n(18),n(19);function s(e){var t=e.type,n=e.text;return l.a.createElement("div",{className:"alert alert-".concat(t)},n)}var u=n(3);function d(e){var t=e.PersonName,n=e.CompanyName,a=e.handlePersonName,r=e.handleCompanyName,c=e.handleOnSubmit,o=e.handleExperience,i=e.handleURL,m=e.url,s=e.experience,d=e.edit;return l.a.createElement("form",{autocomplete:"off",onSubmit:c},l.a.createElement("div",{className:"form-center"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"PersonName"},"Person Name"),l.a.createElement("input",{type:"text",className:"form-control",id:"PersonName",name:"PersonName",placeholder:"e.g. Utkarsh",value:t,onChange:a})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"CompanyName"},"Company"),l.a.createElement("input",{type:"text",className:"form-control",id:"CompanyName",name:"CompanyName",placeholder:"e.g. Amazon",value:n,onChange:r}))),l.a.createElement("div",{className:"form-center"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"LinkedInURL"},"LinkedIn Profile"),l.a.createElement("input",{type:"text",className:"form-control",id:"LinkedInURL",name:"LinkedInURL",placeholder:"profile url",value:m,onChange:i})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"Experience"},"Experience(Years)"),l.a.createElement("input",{type:"text",className:"form-control",id:"Experience",name:"Experience",placeholder:"e.g. 2",value:s,onChange:o}))),l.a.createElement("button",{type:"submit",className:"btn"},d?"edit":"submit",l.a.createElement(u.c,{className:"btn-icon"})))}var p=n(10);function f(e){var t=e.connection,n=e.handleEditProfile,a=e.handleDeleteProfile,r=e.handleClickURL,c=t.id,o=t.Name,i=t.Company,m=(t.experience,t.url);return l.a.createElement("li",{className:"item"},l.a.createElement("div",{className:"info"},l.a.createElement("span",{className:"expense"},o,l.a.createElement("button",{className:"linkedIn-btn","aria-label":"Edit Button",onClick:function(){return r(m)}},l.a.createElement(p.a,null))),l.a.createElement("span",{className:"company"},i)),l.a.createElement("div",null,l.a.createElement("button",{className:"edit-btn","aria-label":"Edit Button",onClick:function(){return n(c)}},l.a.createElement(u.b,null)),l.a.createElement("button",{className:"clear-btn","aria-label":"Clear Button",onClick:function(){return a(c)}},l.a.createElement(u.a,null))))}function h(e){var t=e.Connections,n=e.handleClearList,a=e.handleEditProfile,r=e.handleDeleteProfile,c=e.handleClickURL,o=e.handleSort;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("button",{type:"submit",className:"btn sort-btn",onClick:o},"Sort by exp",l.a.createElement(u.c,{className:"btn-icon"}))),l.a.createElement("br",null),l.a.createElement("ul",{className:"list"},t.map((function(e){return l.a.createElement(f,{key:e.id,connection:e,handleDeleteProfile:r,handleEditProfile:a,handleClickURL:c})}))),t.length>0&&l.a.createElement("button",{className:"btn",onClick:function(){return n()}},"Clear List",l.a.createElement(u.a,{className:"btn-icons"})))}var E=n(5),b=n.n(E),N=[{id:b()(),Name:"Ram",Company:"Tower",experience:1,url:"https://www.linkedin.com/in/utkarshsinha97/"},{id:b()(),Name:"jam",Company:"Estee",experience:5,url:"https://www.linkedin.com/in/utkarshsinha97/"},{id:b()(),Name:"sam",Company:"De Shaw",experience:3,url:"https://www.linkedin.com/in/utkarshsinha97/"}];var v=function(){var e=Object(a.useState)(N),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),u=Object(m.a)(c,2),p=u[0],f=u[1],E=Object(a.useState)(""),v=Object(m.a)(E,2),y=v[0],x=v[1],C=Object(a.useState)({show:!1}),k=Object(m.a)(C,2),g=k[0],w=k[1],O=Object(a.useState)(!1),j=Object(m.a)(O,2),S=j[0],L=j[1],P=Object(a.useState)(0),I=Object(m.a)(P,2),R=I[0],U=I[1],D=Object(a.useState)(""),B=Object(m.a)(D,2),F=B[0],A=B[1],J=Object(a.useState)(""),T=Object(m.a)(J,2),M=T[0],W=T[1];Object(a.useEffect)((function(){localStorage.setItem("MyConnections",JSON.stringify(n))}),[n]);var z=function(e){var t=e.type,n=e.text;w({show:!0,type:t,text:n}),setTimeout((function(){w({show:!1})}),7e3)};return l.a.createElement(l.a.Fragment,null,g.show&&l.a.createElement(s,{type:g.type,text:g.text}),l.a.createElement(s,null),l.a.createElement("h1",null,"Linked",l.a.createElement("span",{style:{background:"#0e76a8"}},"In")," ","Connections"),l.a.createElement("main",{className:"App"},l.a.createElement(d,{PersonName:p,CompanyName:y,url:F,experience:M,handleCompanyName:function(e){x(e.target.value)},handlePersonName:function(e){f(e.target.value)},handleURL:function(e){A(e.target.value)},handleOnSubmit:function(e){if(e.preventDefault(),""!==p&&""!==y&&""!==F){if(S){var t=n.map((function(e){return e.id===R?Object(o.a)({},e,{Name:p,Company:y,url:F,experience:M}):e}));r(t),L(!1)}else{var a={id:b()(),Name:p,Company:y,experience:M,url:F};r([a].concat(Object(i.a)(n)))}x(""),f(""),A(""),W(""),z(S?{type:"success",text:"Item Edited!"}:{type:"success",text:"Item added!"})}else z({type:"danger",text:"Item Can't be added!"})},handleExperience:function(e){W(e.target.value)},edit:S}),n.length>0&&l.a.createElement(h,{Connections:n,handleClearList:function(){r([]),z({type:"success",text:"All Connections Deleted!"})},handleDeleteProfile:function(e){var t=n.filter((function(t){return t.id!==e}));r(t),z({type:"success",text:"Item Deleted!"})},handleEditProfile:function(e){L(!0),U(e);var t=n.find((function(t){return t.id===e}));f(t.Name),x(t.Company),A(t.url),W(t.experience)},handleClickURL:function(e){window.open(e,"_blank").focus()},handleSort:function(){var e=Object(i.a)(n);e.sort((function(e,t){return parseInt(e.experience)-parseInt(t.experience)}),r(e))}})),l.a.createElement("h1",null,"Total Experience:"," ",l.a.createElement("span",{className:"total"},n.reduce((function(e,t){return e+(t.experience?parseInt(t.experience):0)}),0))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.2189f1e6.chunk.js.map