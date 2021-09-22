(this.webpackJsonpmoviecomp=this.webpackJsonpmoviecomp||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(6),i=n.n(c),s=n(0),o=function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"logo",children:"MovieComp"}),Object(s.jsx)("div",{className:"desc",children:"It's easy, pick two movies, see which made more!"})]})},l=n(2),u=n.n(l),p=n(4),j=n(3),m=function(e){var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});""===e.adjEarnings||t.format(e.adjEarnings);return Object(s.jsxs)("div",{className:"movieSelection",children:[Object(s.jsx)("div",{className:"name",children:e.title}),Object(s.jsx)("div",{className:"poster",children:Object(s.jsx)("img",{src:e.poster,alt:e.title})}),Object(s.jsxs)("div",{className:"moviedetails",children:[Object(s.jsxs)("div",{className:"year",children:["Released:",e.year]}),Object(s.jsxs)("div",{className:"revenue",children:["Box Office: ",void 0===e.earnings?"Not reported":e.earnings]}),Object(s.jsxs)("div",{className:"calcRev",children:["Today's earnings:",Object(s.jsx)("br",{})," ",e.adjEarnings]})]})]})},d=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(j.a)(c,2),o=i[0],l=i[1],d=Object(r.useState)(""),h=Object(j.a)(d,2),b=h[0],f=h[1],g=Object(r.useState)(""),v=Object(j.a)(g,2),O=v[0],x=v[1],y=Object(r.useState)({title:"",year:"",earnings:"",poster:""}),S=Object(j.a)(y,2),N=S[0],w=S[1],k=Object(r.useState)({title:"",year:"",earnings:"",poster:""}),A=Object(j.a)(k,2),F=A[0],D=A[1];function E(e){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,C();case 4:e.sent,C(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}Object(r.useEffect)((function(){T(N),P(F)}),[N,F]);var C=function(){var e=Object(p.a)(u.a.mark((function e(){var t,r,a,c,i,s,l,p,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="d67ac574",r=n.replaceAll(" ","+"),a=o.replaceAll(" ","+"),c="http://www.omdbapi.com/?t=".concat(r,"&apikey=").concat(t),i="http://www.omdbapi.com/?t=".concat(a,"&apikey=").concat(t),e.next=7,fetch(c);case 7:return s=e.sent,e.next=10,s.json();case 10:return l=e.sent,console.log(l),w({title:l.Title,year:l.Year,poster:l.Poster,earnings:l.BoxOffice}),e.next=15,fetch(i);case 15:return p=e.sent,e.next=18,p.json();case 18:j=e.sent,console.log(j),D({title:j.Title,year:j.Year,poster:j.Poster,earnings:j.BoxOffice});case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,r,a,c,i,s,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.earnings?Number(t.earnings.replace("$","").replaceAll(",","")):"0.00",r=Number(t.year),a="https://inflation-api.herokuapp.com/api/?value=".concat(n,"&year=").concat(r),e.next=5,fetch(a);case 5:return c=e.sent,e.next=8,c.json();case 8:return i=e.sent,s=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),o=s.format(i.response.adjustedValue),f(o),e.abrupt("return",b);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),P=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,r,a,c,i,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.earnings?Number(t.earnings.replace("$","").replaceAll(",","")):"0.00",r=Number(t.year),a="https://inflation-api.herokuapp.com/api/?value=".concat(n,"&year=").concat(r),e.next=5,fetch(a);case 5:return c=e.sent,e.next=8,c.json();case 8:return i=e.sent,s=B.format(i.response.adjustedValue),x(s),e.abrupt("return",O);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{className:"choicearea",children:[Object(s.jsx)("div",{className:"desc",children:"Welcome! This is a simple app - pick two movies and see how stand up to eachother to box office earnings after inflation is considered. This app is brought to you by the OMDB API & the inflation-app API. "}),Object(s.jsx)("div",{div:!0,className:"title",children:"Choose two movies below"}),Object(s.jsxs)("div",{className:"moviebout",children:[Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("form",{onSubmit:E,children:Object(s.jsx)("input",{type:"text",placeholder:"Enter movie title",value:n,onChange:function(e){return a(e.target.value)}})}),Object(s.jsx)(m,{title:N.title,year:N.year,earnings:N.earnings,poster:N.poster,adjEarnings:b})]}),Object(s.jsxs)("div",{className:"movie",children:[Object(s.jsx)("form",{onSubmit:E,children:Object(s.jsx)("input",{type:"text",placeholder:"Enter movie title",value:o,onChange:function(e){return l(e.target.value)}})}),Object(s.jsx)(m,{title:F.title,year:F.year,earnings:F.earnings,poster:F.poster,adjEarnings:O})]})]}),Object(s.jsx)("div",{className:"winner",children:function(e,t){var n=Number(Math.floor(e.replace("$","").replaceAll(",",""))),r=Number(Math.floor(t.replace("$","").replaceAll(",",""))),a="",c="";if(n>r){var i=n-r;i.toString().length>6?(a=" million",c=i.toString().slice(0,i.toString().length-6),console.log(c),console.log(a)):i.toString().length>3?(a=",000",c=i.toString().slice(0,i.toString().length-3),console.log(a)):a="";return"After inflation, ".concat(N.title," brought in $").concat(c).concat(a," more income. ")}var s=r-n;return s.toString().length>6?(a=" million",c=s.toString().slice(0,s.toString().length-6)):s.toString().length>3?(a=",000",c=s.toString().slice(0,s.toString().length-3)):(c=s,a=""),"After inflation, ".concat(F.title," brought in $").concat(c).concat(a," more income. ")}(b,O)})]})},h=function(){return Object(s.jsxs)("div",{className:"app",children:[Object(s.jsx)(o,{}),Object(s.jsx)(d,{})]})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};n(13);i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(h,{})}),document.getElementById("root")),b()}},[[14,1,2]]]);
//# sourceMappingURL=main.49a0e25b.chunk.js.map