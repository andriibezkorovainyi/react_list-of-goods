(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var s,r=n(5),o=n.n(r),c=n(8),a=n(4),i=n(6),l=n(7),u=n(10),d=n(9),h=n(1),b=(n(15),n(16),n(2)),j=n.n(b),p=n(0),g=function(e){var t=e.good;return Object(p.jsx)("li",{"data-cy":"Good",children:t})},O=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={isReversed:!1,sortType:s.NONE},e.handleAlphabetSort=function(){return e.setState((function(e){return Object(a.a)(Object(a.a)({},e),{},{sortType:s.ALPHABET})}))},e.handleLengthSort=function(){return e.setState({sortType:s.LENGTH})},e.handleReverse=function(){return e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleReset=function(){return e.setState({sortType:s.NONE,isReversed:!1})},e.getReorderedGoods=function(e,t){var n=t.sortType,r=t.isReversed,o=Object(c.a)(e);return o.sort((function(e,t){switch(n){case s.ALPHABET:return e.localeCompare(t);case s.LENGTH:return e.length-t.length;default:return 0}})),r?o.reverse():o},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.getReorderedGoods(O,this.state),t=this.state,n=t.sortType,r=t.isReversed,o=n!==s.NONE||r;return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:j()("button","is-info",{"is-light":n!==s.ALPHABET}),onClick:this.handleAlphabetSort,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:j()("button","is-success",{"is-light":n!==s.LENGTH}),onClick:this.handleLengthSort,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:j()("button","is-warning",{"is-light":!r}),onClick:this.handleReverse,children:"Reverse"}),o&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(p.jsx)("ul",{children:e.map((function(e){return Object(p.jsx)(g,{good:e},e)}))})]})}}]),n}(h.PureComponent);o.a.render(Object(p.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7472a1af.chunk.js.map