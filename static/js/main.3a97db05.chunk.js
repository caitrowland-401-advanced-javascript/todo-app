(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),r=a.n(c);a(14),a(15);var o=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"header"},l.a.createElement("h1",null," To-Do List")))},i=a(2),u=a(7),s=a(8),m=a(4);a(16);var d=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(m.a)(r,2),d=(o[0],o[1]),f=Object(n.useState)({newTask:"",assignedTo:"",difficulty:0}),p=Object(m.a)(f,2),E=p[0],g=p[1],v=function(e){var t=e.target.value;g(Object(u.a)({},E,Object(i.a)({},e.target.name,t)))},h=function(e){e.target.checked?d({status:!0}):d({status:!1})};return l.a.createElement("div",{className:"toDoList"},l.a.createElement("h2",null,"Current List"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c([].concat(Object(s.a)(a),[E.newTask])),e.target.reset()}},l.a.createElement("input",{name:"newTask",value:E.newTask,onChange:v,type:"text",placeholder:"New Task"}),l.a.createElement("input",{name:"assignedTo",value:E.assignedTo,onChange:v,type:"text",placeholder:"Assigned To"}),l.a.createElement("input",{name:"difficulty",value:E.difficulty,onChange:v,type:"number",min:"1",max:"5"}),l.a.createElement("input",{type:"submit",value:"Add New Task"})),l.a.createElement("ul",null,a.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{class:"task",key:e},l.a.createElement("input",{onClick:h,type:"checkbox"}),l.a.createElement("span",null," Task: ",e," | Assigned To: ",E.assignedTo," | Difficulty: ",E.difficulty)))}))))};a(17);var f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer"},l.a.createElement("p",null,"To-Do App by Cait Rowland")))};var p=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(d,null),l.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.3a97db05.chunk.js.map