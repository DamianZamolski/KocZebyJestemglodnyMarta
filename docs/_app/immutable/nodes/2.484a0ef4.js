import{s as _,f as g,n as p,o as b}from"../chunks/scheduler.a7e64d23.js";import{S as f,i as j,g as m,s as h,h as k,c as v,j as C,f as l,k as d,a as c,m as y,n as w}from"../chunks/index.243aeee3.js";function I(n){let e;return{c(){e=y(`Drzewko już podlane - nie ma się co śpieszyć. Teraz zostaje tylko cierpliwie
    czekać...`)},l(a){e=w(a,`Drzewko już podlane - nie ma się co śpieszyć. Teraz zostaje tylko cierpliwie
    czekać...`)},m(a,i){c(a,e,i)},d(a){a&&l(e)}}}function S(n){let e;return{c(){e=y(`Brawo, brawo... Nie ma to jak rozwiązywanie zagadki po wieczorze chlania i
    grania w gry, prawda? Ale jak wiadomo, wszystko co dobre, wymaga czasu. Więc
    na kolejną część zagadki musisz poczekać. I nie myśl, że dasz radę mnie
    oszukać - o drzewko trzeba regularnie dbać. Albo będziesz je podlewać, albo
    nie uda Ci się zdobyć nagrody!`)},l(a){e=w(a,`Brawo, brawo... Nie ma to jak rozwiązywanie zagadki po wieczorze chlania i
    grania w gry, prawda? Ale jak wiadomo, wszystko co dobre, wymaga czasu. Więc
    na kolejną część zagadki musisz poczekać. I nie myśl, że dasz radę mnie
    oszukać - o drzewko trzeba regularnie dbać. Albo będziesz je podlewać, albo
    nie uda Ci się zdobyć nagrody!`)},m(a,i){c(a,e,i)},d(a){a&&l(e)}}}function x(n){let e,a,i,s;function u(t,r){return t[0]<2?S:I}let z=u(n),o=z(n);return{c(){e=m("img"),i=h(),s=m("p"),o.c(),this.h()},l(t){e=k(t,"IMG",{src:!0,alt:!0,class:!0}),i=v(t),s=k(t,"P",{class:!0});var r=C(s);o.l(r),r.forEach(l),this.h()},h(){g(e.src,a="https://i.ibb.co/dMGfVZZ/tree1-1.png")||d(e,"src",a),d(e,"alt","tree1-1"),d(e,"class","svelte-1yetyp"),d(s,"class","svelte-1yetyp")},m(t,r){c(t,e,r),c(t,i,r),c(t,s,r),o.m(s,null)},p(t,[r]){z!==(z=u(t))&&(o.d(1),o=z(t),o&&(o.c(),o.m(s,null)))},i:p,o:p,d(t){t&&(l(e),l(i),l(s)),o.d()}}}function A(n,e,a){let i=0;return b(()=>{a(0,i=parseInt(localStorage.getItem("visitCount")||"0")+1),localStorage.setItem("visitCount",i.toString())}),[i]}class q extends f{constructor(e){super(),j(this,e,A,x,_,{})}}export{q as component};
