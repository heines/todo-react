(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{19:function(e,t,n){e.exports=n(32)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=(n(24),n(10)),i=n(11),l=n(17),u=n(12),s=n(18);n(25);function d(e){var t=e.date.getHours()>12?30*(e.date.getHours()-12):30*e.date.getHours();return t+=.5*e.date.getMinutes(),a.a.createElement("div",null,a.a.createElement("div",{className:"Clock__hourhand",style:{transform:"rotate(".concat(t,"deg)"),transformOrigin:"center bottom"}}),a.a.createElement("div",{className:"Clock__hour-center"}))}function m(e){var t=6*e.date.getMinutes();return a.a.createElement("div",null,a.a.createElement("div",{className:"Clock__minutehand",style:{transform:"rotate(".concat(t,"deg)"),transformOrigin:"center bottom"}}),a.a.createElement("div",{className:"Clock__minutehand-center"}))}function f(e){var t=6*e.date.getSeconds();return a.a.createElement("div",null,a.a.createElement("div",{className:"Clock__secondhand",style:{transform:"rotate(".concat(t,"deg)"),transformOrigin:"center 13vw"}}),a.a.createElement("div",{className:"Clock__secondhand-center"}))}var v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={date:new Date},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){for(var e=[],t=1;t<13;t++)e.push(a.a.createElement("div",{className:"Clock__".concat(t),key:"".concat(t)},t));return a.a.createElement("div",{className:"Clock"},e,a.a.createElement(d,{date:this.state.date}),a.a.createElement(m,{date:this.state.date}),a.a.createElement(f,{date:this.state.date}))}}]),t}(a.a.Component),p=(n(26),n(3)),E=0,O="SHOW_ALL",b="SHOW_COMPLETED",h="SHOW_ACTIVE",y=Object(p.b)()((function(e){var t,n=e.dispatch;return a.a.createElement("div",null,a.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r=t.value.trim();t.value="",r&&n(function(e){return{type:"ADD_TODO",id:E++,text:e}}(r))}},a.a.createElement("input",{ref:function(e){return t=e}}),a.a.createElement("button",{type:"submit"},"Add Todo")))})),g=n(14),_=n.n(g),k=n(1),j=n.n(k),C=function(e){var t=e.onClick,n=e.completed,r=e.text;return a.a.createElement("li",{onClick:t,className:_()("todo-item__text",{"todo-item__text--completed":n})},n?"\u2714\ufe0e":"\u25fb\ufe0f"," ",a.a.createElement("span",null,r))};C.propsTypes={onClick:j.a.func.isRequired,completed:j.a.bool.isRequired,text:j.a.string.isRequired};var D=C,w=function(e){var t=e.todos,n=e.toggleTodo;return a.a.createElement("ul",{className:"todo-list"},t.map((function(e){return a.a.createElement(D,Object.assign({key:e.id},e,{onClick:function(){return n(e.id)}}))})))},T=function(e,t){switch(t){case O:return e;case b:return e.filter((function(e){return e.completed}));case h:return e.filter((function(e){return!e.completed}));default:throw new Error("Unknown filter: "+t)}},I=Object(p.b)((function(e){return{todos:T(e.todos,e.visibilityFilter)}}),(function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))}}}))(w),S=function(e){var t=e.active,n=e.children,r=e.onClick;return a.a.createElement("button",{onClick:r,disabled:t,style:{marginLeft:"4px"}},n)},L=Object(p.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){return e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(S),N=function(){return a.a.createElement("div",null,a.a.createElement("span",null,"Show: "),a.a.createElement(L,{filter:O},"All"),a.a.createElement(L,{filter:h},"Active"),a.a.createElement(L,{filter:b},"Completed"))},x=function(){return a.a.createElement("div",null,a.a.createElement(v,null),a.a.createElement(y,null),a.a.createElement(I,null),a.a.createElement(N,null))},P=n(4),A=n(15),H=n(16);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(n,!0).forEach((function(t){Object(A.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(H.a)(e),[{id:t.id,text:t.text,completed:!1}]);case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?R({},e,{completed:!e.completed}):e}));default:return e}},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},W=Object(P.b)({todos:G,visibilityFilter:M}),q=Object(P.c)(W);Object(c.render)(a.a.createElement(p.a,{store:q},a.a.createElement(x,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.e38757e6.chunk.js.map