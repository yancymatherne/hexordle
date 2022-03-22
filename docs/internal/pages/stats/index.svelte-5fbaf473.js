import{S as Me,i as Te,s as we,e as h,t as p,c as g,a as b,h as k,d as f,b as C,K as Se,g as j,L as i,a0 as Oe,j as H,V as qe,a1 as Ae,w as Be,x as Ne,y as ze,q as X,o as te,B as He,k as E,a2 as Ke,m as V,p as Re,M as Ue,n as Fe}from"../../chunks/vendor-ddc51e67.js";import{f as Je,h as Qe,j as Xe,k as Ye,W as Ze,l as $e}from"../../chunks/stores-4e90ffbc.js";import{G as xe}from"../../chunks/Guess-ae42788d.js";function Ge(l,t,s){const e=l.slice();return e[4]=t[s],e}function Pe(l){let t,s=l[4]+"",e,a,r;function u(){return l[3](l[4])}return{c(){t=h("button"),e=p(s),this.h()},l(o){t=g(o,"BUTTON",{class:!0});var D=b(t);e=k(D,s),D.forEach(f),this.h()},h(){C(t,"class","svelte-jttuc8"),Se(t,"active",l[1]===l[4])},m(o,D){j(o,t,D),i(t,e),a||(r=Oe(t,"click",u),a=!0)},p(o,D){l=o,D&1&&s!==(s=l[4]+"")&&H(e,s),D&3&&Se(t,"active",l[1]===l[4])},d(o){o&&f(t),a=!1,r()}}}function et(l){let t,s=l[0],e=[];for(let a=0;a<s.length;a+=1)e[a]=Pe(Ge(l,s,a));return{c(){t=h("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=g(a,"DIV",{class:!0});var r=b(t);for(let u=0;u<e.length;u+=1)e[u].l(r);r.forEach(f),this.h()},h(){C(t,"class","svelte-jttuc8")},m(a,r){j(a,t,r);for(let u=0;u<e.length;u+=1)e[u].m(t,null)},p(a,[r]){if(r&7){s=a[0];let u;for(u=0;u<s.length;u+=1){const o=Ge(a,s,u);e[u]?e[u].p(o,r):(e[u]=Pe(o),e[u].c(),e[u].m(t,null))}for(;u<e.length;u+=1)e[u].d(1);e.length=s.length}},i:qe,o:qe,d(a){a&&f(t),Ae(e,a)}}}function tt(l,t,s){let{buttons:e=[]}=t,{active:a=""}=t,{onClick:r=o=>{}}=t;const u=o=>r(o);return l.$$set=o=>{"buttons"in o&&s(0,e=o.buttons),"active"in o&&s(1,a=o.active),"onClick"in o&&s(2,r=o.onClick)},[e,a,r,u]}class st extends Me{constructor(t){super();Te(this,t,tt,et,we,{buttons:0,active:1,onClick:2})}}function We(l,t,s){const e=l.slice();return e[9]=t[s],e[11]=s,e}function je(l){let t,s;return t=new xe({props:{guess:l[4](l[11],l[0]),evaluation:l[9],submitted:!0}}),{c(){Be(t.$$.fragment)},l(e){Ne(t.$$.fragment,e)},m(e,a){ze(t,e,a),s=!0},p(e,a){const r={};a&1&&(r.guess=e[4](e[11],e[0])),a&4&&(r.evaluation=e[9]),t.$set(r)},i(e){s||(X(t.$$.fragment,e),s=!0)},o(e){te(t.$$.fragment,e),s=!1},d(e){He(t,e)}}}function lt(l){let t;return{c(){t=p("Number of guesses to find each solution.")},l(s){t=k(s,"Number of guesses to find each solution.")},m(s,e){j(s,t,e)},d(s){s&&f(t)}}}function at(l){let t;return{c(){t=p("Average number of guesses to find each column.")},l(s){t=k(s,"Average number of guesses to find each column.")},m(s,e){j(s,t,e)},d(s){s&&f(t)}}}function nt(l){let t,s,e,a,r,u,o,D,c,I,L,y,W,S=l[1].gamesWon+"",M,se,O,le,ae,B,K=l[1].gamesPlayed+"",Y,ne,R,oe,ie,T,Z,re,ue,U,ce,fe,N,F=l[1].currentStreak+"",$,de,J,ve,_e,z,Q=l[1].maxStreak+"",x,q,w=l[2],d=[];for(let n=0;n<w.length;n+=1)d[n]=je(We(l,w,n));const Le=n=>te(d[n],1,1,()=>{d[n]=null});function ge(n,v){return n[0]==="Column"?at:lt}let ee=ge(l),G=ee(l);return o=new st({props:{buttons:l[5],active:l[0],onClick:l[6]}}),{c(){t=E(),s=h("div");for(let n=0;n<d.length;n+=1)d[n].c();e=E(),a=h("div"),r=h("div"),G.c(),u=E(),Be(o.$$.fragment),D=E(),c=h("div"),I=h("div"),L=p("Games Won"),y=E(),W=h("div"),M=p(S),se=E(),O=h("div"),le=p("Games Played"),ae=E(),B=h("div"),Y=p(K),ne=E(),R=h("div"),oe=p("Win Percentage"),ie=E(),T=h("div"),Z=p(l[3]),re=p("%"),ue=E(),U=h("div"),ce=p("Current Streak"),fe=E(),N=h("div"),$=p(F),de=E(),J=h("div"),ve=p("Max Streak"),_e=E(),z=h("div"),x=p(Q),this.h()},l(n){Ke('[data-svelte="svelte-m9esa4"]',document.head).forEach(f),t=V(n),s=g(n,"DIV",{class:!0});var P=b(s);for(let he=0;he<d.length;he+=1)d[he].l(P);P.forEach(f),e=V(n),a=g(n,"DIV",{class:!0});var _=b(a);r=g(_,"DIV",{class:!0});var A=b(r);G.l(A),u=V(A),Ne(o.$$.fragment,A),A.forEach(f),D=V(_),c=g(_,"DIV",{class:!0});var m=b(c);I=g(m,"DIV",{});var be=b(I);L=k(be,"Games Won"),be.forEach(f),y=V(m),W=g(m,"DIV",{class:!0});var pe=b(W);M=k(pe,S),pe.forEach(f),se=V(m),O=g(m,"DIV",{});var ke=b(O);le=k(ke,"Games Played"),ke.forEach(f),ae=V(m),B=g(m,"DIV",{class:!0});var De=b(B);Y=k(De,K),De.forEach(f),ne=V(m),R=g(m,"DIV",{});var Ee=b(R);oe=k(Ee,"Win Percentage"),Ee.forEach(f),ie=V(m),T=g(m,"DIV",{class:!0});var me=b(T);Z=k(me,l[3]),re=k(me,"%"),me.forEach(f),ue=V(m),U=g(m,"DIV",{});var Ve=b(U);ce=k(Ve,"Current Streak"),Ve.forEach(f),fe=V(m),N=g(m,"DIV",{class:!0});var ye=b(N);$=k(ye,F),ye.forEach(f),de=V(m),J=g(m,"DIV",{});var Ce=b(J);ve=k(Ce,"Max Streak"),Ce.forEach(f),_e=V(m),z=g(m,"DIV",{class:!0});var Ie=b(z);x=k(Ie,Q),Ie.forEach(f),m.forEach(f),_.forEach(f),this.h()},h(){document.title="Hexordle Stats",C(s,"class","game-board"),C(r,"class","description svelte-q6p5uu"),C(W,"class","right svelte-q6p5uu"),C(B,"class","right svelte-q6p5uu"),C(T,"class","right svelte-q6p5uu"),C(N,"class","right svelte-q6p5uu"),C(z,"class","right svelte-q6p5uu"),C(c,"class","stats svelte-q6p5uu"),C(a,"class","bottom-section svelte-q6p5uu")},m(n,v){j(n,t,v),j(n,s,v);for(let P=0;P<d.length;P+=1)d[P].m(s,null);j(n,e,v),j(n,a,v),i(a,r),G.m(r,null),i(r,u),ze(o,r,null),i(a,D),i(a,c),i(c,I),i(I,L),i(c,y),i(c,W),i(W,M),i(c,se),i(c,O),i(O,le),i(c,ae),i(c,B),i(B,Y),i(c,ne),i(c,R),i(R,oe),i(c,ie),i(c,T),i(T,Z),i(T,re),i(c,ue),i(c,U),i(U,ce),i(c,fe),i(c,N),i(N,$),i(c,de),i(c,J),i(J,ve),i(c,_e),i(c,z),i(z,x),q=!0},p(n,[v]){if(v&21){w=n[2];let _;for(_=0;_<w.length;_+=1){const A=We(n,w,_);d[_]?(d[_].p(A,v),X(d[_],1)):(d[_]=je(A),d[_].c(),X(d[_],1),d[_].m(s,null))}for(Fe(),_=w.length;_<d.length;_+=1)Le(_);Re()}ee!==(ee=ge(n))&&(G.d(1),G=ee(n),G&&(G.c(),G.m(r,u)));const P={};v&1&&(P.active=n[0]),o.$set(P),(!q||v&2)&&S!==(S=n[1].gamesWon+"")&&H(M,S),(!q||v&2)&&K!==(K=n[1].gamesPlayed+"")&&H(Y,K),(!q||v&8)&&H(Z,n[3]),(!q||v&2)&&F!==(F=n[1].currentStreak+"")&&H($,F),(!q||v&2)&&Q!==(Q=n[1].maxStreak+"")&&H(x,Q)},i(n){if(!q){for(let v=0;v<w.length;v+=1)X(d[v]);X(o.$$.fragment,n),q=!0}},o(n){d=d.filter(Boolean);for(let v=0;v<d.length;v+=1)te(d[v]);te(o.$$.fragment,n),q=!1},d(n){n&&f(t),n&&f(s),Ae(d,n),n&&f(e),n&&f(a),G.d(),He(o)}}}function ot(l,t,s){let e,a,r,u,o;Ue(l,$e,y=>s(1,o=y));const D=(y,W)=>W==="Column"?a.map(S=>y===S-1?S:" ").join(""):new Array(Ze).fill(" ").map((S,M)=>(M&&M+1)===r[y]?o.guessDistribution[y+1]:" ").join(""),c=["Column","Guess"];let I=c[0];const L=y=>{s(0,I=y)};return l.$$.update=()=>{l.$$.dirty&2&&s(3,e=Math.trunc((o.gamesPlayed?o.gamesWon/o.gamesPlayed:0)*100)),l.$$.dirty&2&&s(8,a=Je(o.columnDistribution,o.gamesPlayed)),l.$$.dirty&2&&s(7,r=Qe(o.guessDistribution)),l.$$.dirty&385&&s(2,u=I==="Column"?Xe(a):Ye(r))},[I,o,u,e,D,c,L,r,a]}class ct extends Me{constructor(t){super();Te(this,t,ot,nt,we,{})}}export{ct as default};
