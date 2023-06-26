import { s as z, n as p, o as b } from "../chunks/scheduler.e108d1fd.js";
import {
  S as g,
  i as k,
  e as d,
  a as o,
  f as l,
  g as m,
  s as y,
  h as f,
  y as u,
  c as w,
  k as _,
} from "../chunks/index.0719bd3d.js";
function v(n) {
  let t,
    e = `<p>Brawo, brawo... Nie ma to jak rozwiązywanie zagadki po wieczorze chlania i
      grania w gry, prawda?</p> <p>Ale jak wiadomo, wszystko co dobre, wymaga czasu. Więc na kolejną część
      zagadki musisz poczekać.</p> <p>I nie myśl, że dasz radę mnie oszukać - o drzewko trzeba regularnie dbać.
      Albo będziesz je podlewać, albo nie uda Ci się zdobyć nagrody!</p>`,
    a,
    i,
    c = '<img src="https://i.ibb.co/dMGfVZZ/tree1-1.png" alt="tree1-1"/>';
  return {
    c() {
      (t = m("div")),
        (t.innerHTML = e),
        (a = y()),
        (i = m("div")),
        (i.innerHTML = c),
        this.h();
    },
    l(s) {
      (t = f(s, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
        u(t) !== "svelte-1b8b5lz" && (t.innerHTML = e),
        (a = w(s)),
        (i = f(s, "DIV", { class: !0, ["data-svelte-h"]: !0 })),
        u(i) !== "svelte-j8hnt4" && (i.innerHTML = c),
        this.h();
    },
    h() {
      _(t, "class", "text svelte-p22cmv"),
        _(i, "class", "picture svelte-p22cmv");
    },
    m(s, r) {
      o(s, t, r), o(s, a, r), o(s, i, r);
    },
    d(s) {
      s && (l(t), l(a), l(i));
    },
  };
}
function h(n) {
  let t,
    e = n[0] === 1 && v();
  return {
    c() {
      e && e.c(), (t = d());
    },
    l(a) {
      e && e.l(a), (t = d());
    },
    m(a, i) {
      e && e.m(a, i), o(a, t, i);
    },
    p(a, [i]) {
      a[0] === 1
        ? e || ((e = v()), e.c(), e.m(t.parentNode, t))
        : e && (e.d(1), (e = null));
    },
    i: p,
    o: p,
    d(a) {
      a && l(t), e && e.d(a);
    },
  };
}
function C(n, t, e) {
  let a = 0;
  return (
    b(() => {
      e(0, (a = parseInt(localStorage.getItem("visitCount") || "0") + 1)),
        localStorage.setItem("visitCount", a.toString());
    }),
    [a]
  );
}
class M extends g {
  constructor(t) {
    super(), k(this, t, C, h, z, {});
  }
}
export { M as component };
