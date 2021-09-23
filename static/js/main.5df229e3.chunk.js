(this.webpackJsonpmoviecomp=this.webpackJsonpmoviecomp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(6),s=n.n(c),i=n(0),o=function(){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("div",{className:"logo",children:"MovieComp"}),Object(i.jsx)("div",{className:"desc",children:"It's easy, pick two movies, see which made more!"})]})},l=n(2),u=n.n(l),p=n(4),m=n(3),j=function(e){var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});""===e.adjEarnings||t.format(e.adjEarnings);return Object(i.jsxs)("div",{className:"movieSelection",children:[Object(i.jsx)("div",{className:"name",children:e.title}),Object(i.jsx)("div",{className:"poster",children:Object(i.jsx)("img",{src:e.poster,alt:e.title})}),Object(i.jsxs)("div",{className:"moviedetails",children:[Object(i.jsxs)("div",{className:"year",children:["Released:",e.year]}),Object(i.jsxs)("div",{className:"revenue",children:["Box Office: ",void 0===e.earnings?"Not reported":e.earnings]}),Object(i.jsxs)("div",{className:"calcRev",children:["Today's earnings:",Object(i.jsx)("br",{})," ",e.adjEarnings]})]})]})},h=function(){var e=Object(r.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(m.a)(c,2),o=s[0],l=s[1],h=Object(r.useState)(""),d=Object(m.a)(h,2),b=d[0],g=d[1],f=Object(r.useState)(""),v=Object(m.a)(f,2),O=v[0],x=v[1],y=Object(r.useState)({title:"",year:"",earnings:"",poster:""}),w=Object(m.a)(y,2),S=w[0],N=w[1],k=Object(r.useState)({title:"",year:"",earnings:"",poster:""}),A=Object(m.a)(k,2),F=A[0],D=A[1];function E(e){return T.apply(this,arguments)}function T(){return(T=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,I();case 4:e.sent,I(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}Object(r.useEffect)((function(){C(S),P(F)}),[S,F]);var I=function(){var e=Object(p.a)(u.a.mark((function e(){var t,r,a,c,s,i,l,p,m;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(t="'d67ac574';").replaceAll("'","").replace(";",""),r=n.replaceAll(" ","+"),a=o.replaceAll(" ","+"),c="https://www.omdbapi.com/?t=".concat(r,"&apikey=").concat(t),s="https://www.omdbapi.com/?t=".concat(a,"&apikey=").concat(t),e.next=8,fetch(c);case 8:return i=e.sent,e.next=11,i.json();case 11:return l=e.sent,console.log(l),N({title:l.Title,year:l.Year,poster:l.Poster,earnings:l.BoxOffice}),e.next=16,fetch(s);case 16:return p=e.sent,e.next=19,p.json();case 19:m=e.sent,console.log(m),D({title:m.Title,year:m.Year,poster:m.Poster,earnings:m.BoxOffice});case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,r,a,c,s,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.earnings?Number(t.earnings.replace("$","").replaceAll(",","")):"0.00",r=Number(t.year),a="https://cors-anywhere.herokuapp.com/https://inflation-api.herokuapp.com/api/?value=".concat(n,"&year=").concat(r),e.next=5,fetch(a);case 5:return c=e.sent,e.next=8,c.json();case 8:return s=e.sent,i=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),o=i.format(s.response.adjustedValue),g(o),e.abrupt("return",b);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),P=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,r,a,c,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.earnings?Number(t.earnings.replace("$","").replaceAll(",","")):"0.00",r=Number(t.year),a="https://cors-anywhere.herokuapp.com/https://inflation-api.herokuapp.com/api/?value=".concat(n,"&year=").concat(r),e.next=5,fetch(a);case 5:return c=e.sent,e.next=8,c.json();case 8:return s=e.sent,i=B.format(s.response.adjustedValue),x(i),e.abrupt("return",O);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log(S.earnings,F.earnings),Object(i.jsxs)("div",{className:"choicearea",children:[Object(i.jsx)("div",{className:"desc",children:"Welcome! This is a simple app - pick two movies and see how stand up to eachother to box office earnings after inflation is considered. This app is brought to you by the OMDB API & the inflation-app API. "}),Object(i.jsx)("div",{div:!0,className:"title",children:"Choose two movies below"}),Object(i.jsxs)("div",{className:"moviebout",children:[Object(i.jsxs)("div",{className:"movie",children:[Object(i.jsx)("form",{onSubmit:E,children:Object(i.jsx)("input",{type:"text",placeholder:"Enter movie title",value:n,onChange:function(e){return a(e.target.value)}})}),Object(i.jsx)(j,{title:S.title,year:S.year,earnings:S.earnings,poster:S.poster,adjEarnings:b})]}),Object(i.jsxs)("div",{className:"movie",children:[Object(i.jsx)("form",{onSubmit:E,children:Object(i.jsx)("input",{type:"text",placeholder:"Enter movie title",value:o,onChange:function(e){return l(e.target.value)}})}),Object(i.jsx)(j,{title:F.title,year:F.year,earnings:F.earnings,poster:F.poster,adjEarnings:O})]})]}),Object(i.jsx)("div",{className:"winner",children:function(e,t){var n=Number(Math.floor(e.replace("$","").replaceAll(",",""))),r=Number(Math.floor(t.replace("$","").replaceAll(",",""))),a="",c="";if(n&&r){if(n>r){var s=n-r;s.toString().length>6?(a=" million",c=s.toString().slice(0,s.toString().length-6),console.log(c),console.log(a)):s.toString().length>3?(a=",000",c=s.toString().slice(0,s.toString().length-3),console.log(a)):a="";return"After inflation, ".concat(S.title," brought in $").concat(c).concat(a," more income. ")}var i=r-n;return i.toString().length>6?(a=" million",c=i.toString().slice(0,i.toString().length-6)):i.toString().length>3?(a=",000",c=i.toString().slice(0,i.toString().length-3)):(c=i,a=""),"After inflation, ".concat(F.title," brought in $").concat(c).concat(a," more income. ")}if(void 0===S.earnings||void 0===F.earnings)return"There's an issue with an amount not being reported. Try another movie!"}(b,O)})]})},d=function(){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)(h,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(13);s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.5df229e3.chunk.js.map