import{S as F,i as J,s as K,e as m,c as g,a as v,d as _,b as u,g as V,n as ie,F as fe,p as oe,q as k,o as w,l as se,G as O,t as ue,h as ce,H as h,j as _e,I as de,J as he,K as pe,L as ve,M as ae,N as me,O as ge,P as $e,Q as N,k as M,w as q,R as S,m as C,x as G,T as j,y as P,B as R,U as be,V as ke,W as Ee,X as ye,v as ze}from"../chunks/vendor-7aa51e73.js";import{a as je,i as we,s as Ie}from"../chunks/stores-2f9f97e3.js";import{b as Le}from"../chunks/paths-4b3c6e7e.js";function re(n,t,e){const s=n.slice();return s[1]=t[e].id,s[2]=t[e].message,s}function le(n){let t,e=[],s=new Map,l,c=n[0];const o=a=>a[1];for(let a=0;a<c.length;a+=1){let r=re(n,c,a),i=o(r);s.set(i,e[a]=ne(i,r))}return{c(){t=m("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=g(a,"DIV",{class:!0});var r=v(t);for(let i=0;i<e.length;i+=1)e[i].l(r);r.forEach(_),this.h()},h(){u(t,"class","container svelte-1dyffrd")},m(a,r){V(a,t,r);for(let i=0;i<e.length;i+=1)e[i].m(t,null);l=!0},p(a,r){r&1&&(c=a[0],ie(),e=fe(e,r,o,1,a,c,s,t,ve,ne,null,re),oe())},i(a){if(!l){for(let r=0;r<c.length;r+=1)k(e[r]);l=!0}},o(a){for(let r=0;r<e.length;r+=1)w(e[r]);l=!1},d(a){a&&_(t);for(let r=0;r<e.length;r+=1)e[r].d()}}}function ne(n,t){let e,s=t[2]+"",l,c,o,a;return{key:n,first:null,c(){e=m("div"),l=ue(s),this.h()},l(r){e=g(r,"DIV",{class:!0});var i=v(e);l=ce(i,s),i.forEach(_),this.h()},h(){u(e,"class","message svelte-1dyffrd"),this.first=e},m(r,i){V(r,e,i),h(e,l),a=!0},p(r,i){t=r,(!a||i&1)&&s!==(s=t[2]+"")&&_e(l,s)},i(r){a||(de(()=>{o&&o.end(1),c=he(e,ae,{duration:500}),c.start()}),a=!0)},o(r){c&&c.invalidate(),o=pe(e,ae,{duration:1e3}),a=!1},d(r){r&&_(e),r&&o&&o.end()}}}function Ae(n){let t,e,s=n[0].length>0&&le(n);return{c(){s&&s.c(),t=se()},l(l){s&&s.l(l),t=se()},m(l,c){s&&s.m(l,c),V(l,t,c),e=!0},p(l,[c]){l[0].length>0?s?(s.p(l,c),c&1&&k(s,1)):(s=le(l),s.c(),k(s,1),s.m(t.parentNode,t)):s&&(ie(),w(s,1,1,()=>{s=null}),oe())},i(l){e||(k(s),e=!0)},o(l){w(s),e=!1},d(l){s&&s.d(l),l&&_(t)}}}function Be(n,t,e){let s;return O(n,je,l=>e(0,s=l)),[s]}class He extends F{constructor(t){super();J(this,t,Be,Ae,K,{})}}const Me=()=>{const n=me("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session,updated:n.updated}},Ce={subscribe(n){return Me().page.subscribe(n)}};function Ve(n){let t,e,s,l,c,o,a,r,i,f,d,$,I,U,E,b,L,Z,y,A,D;return I=new ge({props:{size:"1.5x"}}),L=new $e({props:{size:"1.5x"}}),{c(){t=m("header"),e=m("nav"),s=N("svg"),l=N("path"),c=M(),o=m("ul"),a=m("li"),r=m("a"),i=ue("Hexordle"),f=M(),d=m("li"),$=m("a"),q(I.$$.fragment),U=M(),E=m("li"),b=m("a"),q(L.$$.fragment),Z=M(),y=N("svg"),A=N("path"),this.h()},l(p){t=g(p,"HEADER",{class:!0});var z=v(t);e=g(z,"NAV",{class:!0});var B=v(e);s=S(B,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var Q=v(s);l=S(Q,"path",{d:!0,class:!0}),v(l).forEach(_),Q.forEach(_),c=C(B),o=g(B,"UL",{class:!0});var H=v(o);a=g(H,"LI",{class:!0});var T=v(a);r=g(T,"A",{"sveltekit:prefetch":!0,href:!0,class:!0});var W=v(r);i=ce(W,"Hexordle"),W.forEach(_),T.forEach(_),f=C(H),d=g(H,"LI",{class:!0});var X=v(d);$=g(X,"A",{"sveltekit:prefetch":!0,href:!0,"aria-label":!0,class:!0});var Y=v($);G(I.$$.fragment,Y),Y.forEach(_),X.forEach(_),U=C(H),E=g(H,"LI",{class:!0});var x=v(E);b=g(x,"A",{"sveltekit:prefetch":!0,href:!0,"aria-label":!0,class:!0});var ee=v(b);G(L.$$.fragment,ee),ee.forEach(_),x.forEach(_),H.forEach(_),Z=C(B),y=S(B,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var te=v(y);A=S(te,"path",{d:!0,class:!0}),v(A).forEach(_),te.forEach(_),B.forEach(_),z.forEach(_),this.h()},h(){u(l,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),u(l,"class","svelte-joumzp"),u(s,"viewBox","0 0 2 3"),u(s,"aria-hidden","true"),u(s,"class","svelte-joumzp"),u(r,"sveltekit:prefetch",""),u(r,"href",n[1]),u(r,"class","svelte-joumzp"),u(a,"class","svelte-joumzp"),j(a,"active",n[0].url.pathname===n[1]),u($,"sveltekit:prefetch",""),u($,"href",n[2]),u($,"aria-label","stats"),u($,"class","svelte-joumzp"),u(d,"class","svelte-joumzp"),j(d,"active",n[0].url.pathname===n[2]),u(b,"sveltekit:prefetch",""),u(b,"href",n[3]),u(b,"aria-label","settings"),u(b,"class","svelte-joumzp"),u(E,"class","svelte-joumzp"),j(E,"active",n[0].url.pathname===n[3]),u(o,"class","svelte-joumzp"),u(A,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),u(A,"class","svelte-joumzp"),u(y,"viewBox","0 0 2 3"),u(y,"aria-hidden","true"),u(y,"class","svelte-joumzp"),u(e,"class","svelte-joumzp"),u(t,"class","svelte-joumzp")},m(p,z){V(p,t,z),h(t,e),h(e,s),h(s,l),h(e,c),h(e,o),h(o,a),h(a,r),h(r,i),h(o,f),h(o,d),h(d,$),P(I,$,null),h(o,U),h(o,E),h(E,b),P(L,b,null),h(e,Z),h(e,y),h(y,A),D=!0},p(p,[z]){z&3&&j(a,"active",p[0].url.pathname===p[1]),z&5&&j(d,"active",p[0].url.pathname===p[2]),z&9&&j(E,"active",p[0].url.pathname===p[3])},i(p){D||(k(I.$$.fragment,p),k(L.$$.fragment,p),D=!0)},o(p){w(I.$$.fragment,p),w(L.$$.fragment,p),D=!1},d(p){p&&_(t),R(I),R(L)}}}function De(n,t,e){let s;O(n,Ce,r=>e(0,s=r));const l=r=>Le+r,c=l("/"),o=l("/stats"),a=l("/settings");return[s,c,o,a]}class Ne extends F{constructor(t){super();J(this,t,De,Ve,K,{})}}function Se(n){let t,e,s,l,c,o,a;e=new Ne({}),l=new He({});const r=n[3].default,i=be(r,n,n[2],null);return{c(){t=m("div"),q(e.$$.fragment),s=M(),q(l.$$.fragment),c=M(),o=m("main"),i&&i.c(),this.h()},l(f){t=g(f,"DIV",{class:!0});var d=v(t);G(e.$$.fragment,d),s=C(d),G(l.$$.fragment,d),c=C(d),o=g(d,"MAIN",{class:!0});var $=v(o);i&&i.l($),$.forEach(_),d.forEach(_),this.h()},h(){u(o,"class","svelte-1ro29o8"),u(t,"class","body"),j(t,"dark",n[0])},m(f,d){V(f,t,d),P(e,t,null),h(t,s),P(l,t,null),h(t,c),h(t,o),i&&i.m(o,null),a=!0},p(f,[d]){i&&i.p&&(!a||d&4)&&ke(i,r,f,f[2],a?ye(r,f[2],d,null):Ee(f[2]),null),d&1&&j(t,"dark",f[0])},i(f){a||(k(e.$$.fragment,f),k(l.$$.fragment,f),k(i,f),a=!0)},o(f){w(e.$$.fragment,f),w(l.$$.fragment,f),w(i,f),a=!1},d(f){f&&_(t),R(e),R(l),i&&i.d(f)}}}function qe(n,t,e){let s,l;O(n,Ie,a=>e(1,l=a));let{$$slots:c={},$$scope:o}=t;return ze(()=>we()),n.$$set=a=>{"$$scope"in a&&e(2,o=a.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&e(0,s=l.dark)},[s,l,o,c]}class Ue extends F{constructor(t){super();J(this,t,qe,Se,K,{})}}export{Ue as default};