(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{11:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var c,s=n(5),o=n.n(s),a=n(3),i=n(1),l=(n(10),n(11),n(2)),u=n.n(l),r=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.Default=0]="Default",t[t.Alphabet=1]="Alphabet",t[t.Length=2]="Length"}(c||(c={}));var h=function(){var t=Object(i.useState)(b),e=Object(a.a)(t,2),n=e[0],s=e[1],o=Object(i.useState)(c.Default),l=Object(a.a)(o,2),h=l[0],j=l[1],f=Object(i.useState)(!1),g=Object(a.a)(f,2),d=g[0],p=g[1];Object(i.useEffect)((function(){!function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[].concat(b);switch(t){case c.Length:n.sort((function(t,e){return t.length-e.length}));break;case c.Alphabet:n.sort((function(t,e){return t.localeCompare(e)}))}e&&n.reverse(),s(n)}(h,d)}),[d,h]);return Object(r.jsxs)("div",{className:"section content",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":h!==c.Alphabet}),onClick:function(){j(c.Alphabet)},children:"Sort alphabetically"}),Object(r.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":h!==c.Length}),onClick:function(){j(c.Length)},children:"Sort by length"}),Object(r.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!d}),onClick:function(){p(!d)},children:"Reverse"}),d||h!==c.Default?Object(r.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){p(!1),j(c.Default)},children:"Reset"}):Object(r.jsx)(r.Fragment,{})]}),Object(r.jsx)("ul",{children:n.map((function(t){return Object(r.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a42ab8f0.chunk.js.map