(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{17:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),c=n(11),r=n.n(c),i=n(8),s=n(2),l=n(7),d=n(3),u=n(4),j=n(6),f=n(5),p=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={description:""},t.onDescriptionChange=function(e){t.setState({description:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.onAdded(t.state.description),t.setState({description:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsx)("form",{onSubmit:this.onSubmit,children:Object(o.jsx)("input",{className:"new-todo",type:"text",onChange:this.onDescriptionChange,placeholder:"\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0448\u0430\u0433 \u0432 \u0437\u0430\u0445\u0432\u0430\u0442\u0435 \u043c\u0438\u0440\u0430",autoFocus:!0,value:this.state.description})})}}]),n}(a.Component),b=n(9),h=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.description,n=t.onDeleted,a=t.id,c=t.onToggleDone,r=t.onToggleEdit,i=t.done,s=t.onEditTask,l="";return t.edit&&(l="editing"),i&&(l="completed"),Object(o.jsxs)("li",{className:l,children:[Object(o.jsxs)("div",{className:"view",children:[Object(o.jsx)("input",{className:"toggle",type:"checkbox",onClick:c}),Object(o.jsxs)("label",{children:[Object(o.jsx)("span",{className:"description",children:e}),Object(o.jsx)("span",{className:"created",children:"created 5 minutes ago"})]}),Object(o.jsx)("button",{className:"icon icon-edit",onClick:r}),Object(o.jsx)("button",{className:"icon icon-destroy",onClick:n})]}),Object(o.jsx)("input",{type:"text",className:"edit",defaultValue:e,onKeyDown:s})]},a)}}]),n}(a.Component),O=function(t){var e=t.todos,n=(t.all,t.active),a=t.completed,c=t.filter,r=t.onDeleted,i=t.onToggleDone,l=t.onToggleEdit,d=t.onEditTask,u=null;return c.all&&(u=e.map((function(t){var e=t.id,n=Object(b.a)(t,["id"]);return Object(o.jsx)(h,Object(s.a)(Object(s.a)({},n),{},{onDeleted:function(){return r(e)},onToggleDone:function(){return i(e)},onToggleEdit:function(){return l(e)},onEditTask:function(t){return d(e,t)}}),e)}))),c.active&&(u=n.map((function(t){var e=t.id,n=Object(b.a)(t,["id"]);return Object(o.jsx)(h,Object(s.a)(Object(s.a)({},n),{},{onDeleted:function(){return r(e)},onToggleDone:function(){return i(e)},onToggleEdit:function(){return l(e)},onEditTask:function(t){return d(e,t)}}),e)}))),c.completed&&(u=a.map((function(t){var e=t.id,n=Object(b.a)(t,["id"]);return Object(o.jsx)(h,Object(s.a)(Object(s.a)({},n),{},{onDeleted:function(){return r(e)},onToggleDone:function(){return i(e)},onToggleEdit:function(){return l(e)},onEditTask:function(t){return d(e,t)}}),e)}))),Object(o.jsx)("ul",{className:"todo-list",children:u})},m=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={all:!0,active:!1,completed:!1},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.onFilterTarget;return Object(o.jsxs)("ul",{className:"filters",onClick:t,children:[Object(o.jsx)("li",{children:Object(o.jsx)("button",{className:"selected",children:"All"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{children:"Active"})}),Object(o.jsx)("li",{children:Object(o.jsx)("button",{children:"Completed"})})]})}}]),n}(a.Component),g=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.doneCount,n=t.todoCount,a=t.showActiveTask,c=t.showCompletedTask,r=t.onFilterTarget,i=t.deleteCompletedTask;return Object(o.jsxs)("footer",{className:"footer",children:[Object(o.jsxs)("span",{className:"todo-count",children:[e," task completed"]}),Object(o.jsxs)("span",{className:"todo-count",children:[n," task left"]}),Object(o.jsx)(m,{showActiveTask:function(){return a("done")},showCompletedTask:function(){return c("done")},onFilterTarget:function(t){return r(t)}}),Object(o.jsx)("button",{className:"clear-completed",onClick:i,children:"Clear completed"})]})}}]),n}(a.Component),v=function(t){Object(j.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(d.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).maxId=100,t.state={taskData:[t.createTodoItem("\u043f\u043e\u043c\u044b\u0442\u044c \u043f\u043e\u043b"),t.createTodoItem("\u0441\u044a\u0435\u0441\u0442\u044c \u0432\u043a\u0443\u0441\u043d\u044f\u0448\u043a\u0443"),t.createTodoItem("\u043f\u043e\u0447\u0435\u0441\u0430\u0442\u044c \u043b\u043e\u043f\u0430\u0442\u043a\u0443")],filter:{all:!0,active:!1,completed:!1},all:[],active:[],completed:[]},t.deleteItem=function(e){t.setState((function(t){var n=t.taskData,o=n.findIndex((function(t){return t.id===e}));return{taskData:[].concat(Object(l.a)(n.slice(0,o)),Object(l.a)(n.slice(o+1)))}}))},t.addItem=function(e){var n=t.createTodoItem(e);t.setState((function(t){var e=t.taskData;return{taskData:[].concat(Object(l.a)(e),[n])}}))},t.onToggleDone=function(e){t.setState((function(n){var o=n.taskData;return{taskData:t.toggleProperty(o,e,"done")}}))},t.onToggleEdit=function(e){t.setState((function(n){var o=n.taskData;return{taskData:t.toggleProperty(o,e,"edit")}}))},t.onEditTask=function(e,n){"Enter"===n.key&&t.onToggleEdit(e),t.setState((function(t){var o=t.taskData,a=o.findIndex((function(t){return t.id===e})),c=o[a],r=Object(s.a)(Object(s.a)({},c),{},{description:n.target.value});return{taskData:[].concat(Object(l.a)(o.slice(0,a)),[r],Object(l.a)(o.slice(a+1)))}}))},t.deleteCompletedTask=function(){t.setState((function(t){return{taskData:t.taskData.filter((function(t){return!t.done}))}}))},t.showActiveTask=function(){t.setState((function(t){return{active:t.taskData.filter((function(t){return!t.done}))}}))},t.showCompletedTask=function(){t.setState((function(t){return{completed:t.taskData.filter((function(t){return t.done}))}}))},t.showAllTask=function(){t.setState((function(t){var e=t.taskData;return{all:Object(l.a)(e)}})),console.log(t.state.all)},t.onFilterTarget=function(e){var n=e.target.parentNode.parentNode.childNodes;e.target.className="selected";var o=0;n.forEach((function(t,n,a){t.firstChild!==e.target?t.firstChild.className="":o=n})),0===o&&(t.setState((function(t){var e=t.filter;e.all=!0,e.active=!1,e.completed=!1})),t.showAllTask()),1===o&&(t.setState((function(t){var e=t.filter;e.all=!1,e.active=!0,e.completed=!1})),t.showActiveTask()),2===o&&(t.setState((function(t){var e=t.filter;e.all=!1,e.active=!1,e.completed=!0})),t.showCompletedTask(),console.log(t.state)),console.log(o)},t}return Object(u.a)(n,[{key:"createTodoItem",value:function(t){return{description:t,done:!1,edit:!1,id:this.maxId++,text:this.props.description}}},{key:"toggleProperty",value:function(t,e,n){var o=t.findIndex((function(t){return t.id===e})),a=t[o],c=Object(s.a)(Object(s.a)({},a),{},Object(i.a)({},n,!a[n]));return[].concat(Object(l.a)(t.slice(0,o)),[c],Object(l.a)(t.slice(o+1)))}},{key:"render",value:function(){var t=this,e=this.state,n=e.taskData,a=e.filter,c=e.all,r=e.active,i=e.completed,s=n.filter((function(t){return t.done})).length,l=n.length-s;return Object(o.jsxs)("section",{className:"todoapp",children:[Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h1",{children:"\u0427\u0435 \u0434\u0435\u043b\u0430\u0442\u044c?"})}),Object(o.jsx)(p,{onAdded:this.addItem}),Object(o.jsx)(O,{todos:n,filter:a,all:c,active:r,completed:i,onDeleted:function(e){return t.deleteItem(e)},onToggleDone:this.onToggleDone,onToggleEdit:this.onToggleEdit,onEditTask:this.onEditTask}),Object(o.jsx)(g,{doneCount:s,todoCount:l,showActiveTask:this.showActiveTask,showCompletedTask:this.showCompletedTask,onFilterTarget:this.onFilterTarget,deleteCompletedTask:this.deleteCompletedTask})]})}}]),n}(a.Component);r.a.render(Object(o.jsx)(v,{}),document.querySelector(".root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f68092bd.chunk.js.map