import{s as k,f as y,n as m,o as z}from"../chunks/scheduler.a7e64d23.js";import{S as C,i as x,g as _,s as b,e as v,h,c as g,k as f,a as u,f as p,y as d,z as j}from"../chunks/index.08a9bea1.js";function w(r){let e,n="Osiemnaście listków? Mam nadzieję, że umiesz dbać o swoje drzewko.",l,s,c="Podlej",i,a;return{c(){e=_("p"),e.textContent=n,l=b(),s=_("button"),s.textContent=c,this.h()},l(t){e=h(t,"P",{class:!0,["data-svelte-h"]:!0}),d(e)!=="svelte-pdatw"&&(e.textContent=n),l=g(t),s=h(t,"BUTTON",{class:!0,["data-svelte-h"]:!0}),d(s)!=="svelte-1p96qno"&&(s.textContent=c),this.h()},h(){f(e,"class","svelte-ig339h"),f(s,"class","svelte-ig339h")},m(t,o){u(t,e,o),u(t,l,o),u(t,s,o),i||(a=j(s,"click",r[1]),i=!0)},p:m,d(t){t&&(p(e),p(l),p(s)),i=!1,a()}}}function S(r){let e,n=`No dobrze, już wystarczająco nakapałeś. Teraz daj mi chwilę ochłonąć po tym
    złotym deszczu.`;return{c(){e=_("p"),e.textContent=n,this.h()},l(l){e=h(l,"P",{class:!0,["data-svelte-h"]:!0}),d(e)!=="svelte-fqupv1"&&(e.textContent=n),this.h()},h(){f(e,"class","svelte-ig339h")},m(l,s){u(l,e,s)},p:m,d(l){l&&p(e)}}}function q(r){let e,n,l,s;function c(t,o){return t[0]?S:w}let i=c(r),a=i(r);return{c(){e=_("img"),l=b(),a.c(),s=v(),this.h()},l(t){e=h(t,"IMG",{src:!0,alt:!0,class:!0}),l=g(t),a.l(t),s=v(),this.h()},h(){y(e.src,n="https://i.ibb.co/CVBFzZJ/tree2-1.png")||f(e,"src",n),f(e,"alt","tree2-1"),f(e,"class","svelte-ig339h")},m(t,o){u(t,e,o),u(t,l,o),a.m(t,o),u(t,s,o)},p(t,[o]){i===(i=c(t))&&a?a.p(t,o):(a.d(1),a=i(t),a&&(a.c(),a.m(s.parentNode,s)))},i:m,o:m,d(t){t&&(p(e),p(l),p(s)),a.d(t)}}}function N(r,e,n){let l=null,s=0,c=!1;z(()=>{n(0,c=JSON.parse(localStorage.getItem("success")||"false"))});function i(){l||(l=setTimeout(()=>{s===18&&(localStorage.setItem("success","true"),n(0,c=!0)),s=0,l=null},1e4)),s++}return[c,i]}class I extends C{constructor(e){super(),x(this,e,N,q,k,{})}}export{I as component};
