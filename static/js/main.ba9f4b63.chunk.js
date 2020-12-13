(this["webpackJsonpreact-i18next-redux"]=this["webpackJsonpreact-i18next-redux"]||[]).push([[1],{27:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i}));var c=t(4),r=t(16),i=Object(r.b)({name:"counter",initialState:0,reducers:{increment:function(e,n){return e+n.payload},decrement:function(e){return e-1}}}),o=Object(c.c)({counter:i.reducer})},34:function(e){e.exports=JSON.parse('{"title":"Willkommen zu React"}')},35:function(e){e.exports=JSON.parse('{"title":"Welcome to React"}')},54:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var c=t(2),r=t(0),i=t(10),o=t.n(i),a=t(8),l=t(3);function u(){return Object(c.jsx)("nav",{children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/login",children:"Login"})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/counter",children:"Counter"})}),Object(c.jsx)("li",{children:Object(c.jsx)(a.b,{to:"/user",children:"User"})})]})})}var s=t(28),j=t(29),b=t(37),d=t(36),h=function(e){Object(b.a)(t,e);var n=Object(d.a)(t);function t(e){var c;return Object(s.a)(this,t),(c=n.call(this,e)).state={hasError:!1},c}return Object(j.a)(t,[{key:"componentDidCatch",value:function(e,n){console.log("error: "+e),console.log("errorInfo: "+JSON.stringify(n)),console.log("componentStack: "+n.componentStack)}},{key:"render",value:function(){return this.state.hasError?Object(c.jsx)("h1",{children:"Something went wrong!"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.Component),O=t(19);function x(e){var n=new O.a;return Object(c.jsx)(O.b,{queryCache:n,children:e.children})}var f=t(16),p=t(26),g=t(27),m=Object(f.a)({reducer:g.b});function v(e){return Object(c.jsx)(p.a,{store:m,children:e.children})}var y=t(56);function k(){var e=Object(y.a)().i18n;function n(n){e.changeLanguage(n)}return Object(c.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(c.jsx)("button",{onClick:function(){return n("de")},children:"DE"}),Object(c.jsx)("button",{onClick:function(){return n("en")},children:"EN"})]})}var S=t(24),C=t(13),E={de:{translation:t(34)},en:{translation:t(35)}};S.a.use(C.e).init({resources:E,lng:"en",keySeparator:".",interpolation:{escapeValue:!1},debug:!1});S.a;function F(e){return Object(c.jsxs)(c.Fragment,{children:[e.children,Object(c.jsx)(k,{})]})}var w=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,87))})),z=Object(r.lazy)((function(){return t.e(7).then(t.bind(null,89))})),J=Object(r.lazy)((function(){return t.e(5).then(t.bind(null,90))})),L=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,88))}));function D(){return Object(c.jsx)(h,{children:Object(c.jsx)(v,{children:Object(c.jsx)(x,{children:Object(c.jsx)(F,{children:Object(c.jsxs)(a.a,{children:[Object(c.jsx)(u,{}),Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)("div",{children:'"Loading.."'}),children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:w}),Object(c.jsx)(l.a,{exact:!0,path:"/login",component:z}),Object(c.jsx)(l.a,{exact:!0,path:"/counter",component:J}),Object(c.jsx)(l.a,{exact:!0,path:"/user",component:L})]})})]})})})})})}t(54);var N=function(e){e&&e instanceof Function&&t.e(8).then(t.bind(null,86)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;t(e),c(e),r(e),i(e),o(e)}))};o.a.render(Object(c.jsx)(r.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root")),N()}},[[55,2,3]]]);
//# sourceMappingURL=main.ba9f4b63.chunk.js.map