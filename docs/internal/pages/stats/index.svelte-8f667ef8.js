import{S as We,i as je,s as Me,e as m,t as k,c as g,a as b,h as D,d as _,b as I,K as Ie,g as T,L as o,a0 as Le,j as z,V as ye,a1 as Te,w as we,x as Ae,y as Be,q as Q,o as ee,B as Ne,k as E,m as V,p as Oe,M as He,n as Ke}from"../../chunks/vendor-b66e214f.js";import{f as Re,h as Ue,j as Fe,k as Je,W as Qe,l as Xe}from"../../chunks/stores-10c4fef9.js";import{G as Ye}from"../../chunks/Guess-50f52229.js";function Ge(l,t,s){const e=l.slice();return e[4]=t[s],e}function Se(l){let t,s=l[4]+"",e,a,c;function i(){return l[3](l[4])}return{c(){t=m("button"),e=k(s),this.h()},l(r){t=g(r,"BUTTON",{class:!0});var u=b(t);e=D(u,s),u.forEach(_),this.h()},h(){I(t,"class","svelte-jttuc8"),Ie(t,"active",l[1]===l[4])},m(r,u){T(r,t,u),o(t,e),a||(c=Le(t,"click",i),a=!0)},p(r,u){l=r,u&1&&s!==(s=l[4]+"")&&z(e,s),u&3&&Ie(t,"active",l[1]===l[4])},d(r){r&&_(t),a=!1,c()}}}function Ze(l){let t,s=l[0],e=[];for(let a=0;a<s.length;a+=1)e[a]=Se(Ge(l,s,a));return{c(){t=m("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=g(a,"DIV",{class:!0});var c=b(t);for(let i=0;i<e.length;i+=1)e[i].l(c);c.forEach(_),this.h()},h(){I(t,"class","svelte-jttuc8")},m(a,c){T(a,t,c);for(let i=0;i<e.length;i+=1)e[i].m(t,null)},p(a,[c]){if(c&7){s=a[0];let i;for(i=0;i<s.length;i+=1){const r=Ge(a,s,i);e[i]?e[i].p(r,c):(e[i]=Se(r),e[i].c(),e[i].m(t,null))}for(;i<e.length;i+=1)e[i].d(1);e.length=s.length}},i:ye,o:ye,d(a){a&&_(t),Te(e,a)}}}function $e(l,t,s){let{buttons:e=[]}=t,{active:a=""}=t,{onClick:c=r=>{}}=t;const i=r=>c(r);return l.$$set=r=>{"buttons"in r&&s(0,e=r.buttons),"active"in r&&s(1,a=r.active),"onClick"in r&&s(2,c=r.onClick)},[e,a,c,i]}class xe extends We{constructor(t){super();je(this,t,$e,Ze,Me,{buttons:0,active:1,onClick:2})}}function qe(l,t,s){const e=l.slice();return e[9]=t[s],e[11]=s,e}function Pe(l){let t,s;return t=new Ye({props:{guess:l[4](l[11],l[0]),evaluation:l[9],submitted:!0}}),{c(){we(t.$$.fragment)},l(e){Ae(t.$$.fragment,e)},m(e,a){Be(t,e,a),s=!0},p(e,a){const c={};a&1&&(c.guess=e[4](e[11],e[0])),a&4&&(c.evaluation=e[9]),t.$set(c)},i(e){s||(Q(t.$$.fragment,e),s=!0)},o(e){ee(t.$$.fragment,e),s=!1},d(e){Ne(t,e)}}}function et(l){let t;return{c(){t=k("Number of guesses to find each solution.")},l(s){t=D(s,"Number of guesses to find each solution.")},m(s,e){T(s,t,e)},d(s){s&&_(t)}}}function tt(l){let t;return{c(){t=k("Average number of guesses to find each column.")},l(s){t=D(s,"Average number of guesses to find each column.")},m(s,e){T(s,t,e)},d(s){s&&_(t)}}}function st(l){let t,s,e,a,c,i,r,u,S,P,L,p,W=l[1].gamesWon+"",q,w,O,te,se,A,H=l[1].gamesPlayed+"",X,le,K,ae,ne,j,Y,ie,oe,R,re,ue,B,U=l[1].currentStreak+"",Z,ce,F,fe,ve,N,J=l[1].maxStreak+"",$,y,M=l[2],v=[];for(let n=0;n<M.length;n+=1)v[n]=Pe(qe(l,M,n));const ze=n=>ee(v[n],1,1,()=>{v[n]=null});function he(n,f){return n[0]==="Column"?tt:et}let x=he(l),G=x(l);return i=new xe({props:{buttons:l[5],active:l[0],onClick:l[6]}}),{c(){t=m("div");for(let n=0;n<v.length;n+=1)v[n].c();s=E(),e=m("div"),a=m("div"),G.c(),c=E(),we(i.$$.fragment),r=E(),u=m("div"),S=m("div"),P=k("Games Won"),L=E(),p=m("div"),q=k(W),w=E(),O=m("div"),te=k("Games Played"),se=E(),A=m("div"),X=k(H),le=E(),K=m("div"),ae=k("Win Percentage"),ne=E(),j=m("div"),Y=k(l[3]),ie=k("%"),oe=E(),R=m("div"),re=k("Current Streak"),ue=E(),B=m("div"),Z=k(U),ce=E(),F=m("div"),fe=k("Max Streak"),ve=E(),N=m("div"),$=k(J),this.h()},l(n){t=g(n,"DIV",{class:!0});var f=b(t);for(let _e=0;_e<v.length;_e+=1)v[_e].l(f);f.forEach(_),s=V(n),e=g(n,"DIV",{class:!0});var C=b(e);a=g(C,"DIV",{class:!0});var h=b(a);G.l(h),c=V(h),Ae(i.$$.fragment,h),h.forEach(_),r=V(C),u=g(C,"DIV",{class:!0});var d=b(u);S=g(d,"DIV",{});var me=b(S);P=D(me,"Games Won"),me.forEach(_),L=V(d),p=g(d,"DIV",{class:!0});var ge=b(p);q=D(ge,W),ge.forEach(_),w=V(d),O=g(d,"DIV",{});var be=b(O);te=D(be,"Games Played"),be.forEach(_),se=V(d),A=g(d,"DIV",{class:!0});var pe=b(A);X=D(pe,H),pe.forEach(_),le=V(d),K=g(d,"DIV",{});var ke=b(K);ae=D(ke,"Win Percentage"),ke.forEach(_),ne=V(d),j=g(d,"DIV",{class:!0});var de=b(j);Y=D(de,l[3]),ie=D(de,"%"),de.forEach(_),oe=V(d),R=g(d,"DIV",{});var De=b(R);re=D(De,"Current Streak"),De.forEach(_),ue=V(d),B=g(d,"DIV",{class:!0});var Ee=b(B);Z=D(Ee,U),Ee.forEach(_),ce=V(d),F=g(d,"DIV",{});var Ve=b(F);fe=D(Ve,"Max Streak"),Ve.forEach(_),ve=V(d),N=g(d,"DIV",{class:!0});var Ce=b(N);$=D(Ce,J),Ce.forEach(_),d.forEach(_),C.forEach(_),this.h()},h(){I(t,"class","game-board"),I(a,"class","description svelte-q6p5uu"),I(p,"class","right svelte-q6p5uu"),I(A,"class","right svelte-q6p5uu"),I(j,"class","right svelte-q6p5uu"),I(B,"class","right svelte-q6p5uu"),I(N,"class","right svelte-q6p5uu"),I(u,"class","stats svelte-q6p5uu"),I(e,"class","bottom-section svelte-q6p5uu")},m(n,f){T(n,t,f);for(let C=0;C<v.length;C+=1)v[C].m(t,null);T(n,s,f),T(n,e,f),o(e,a),G.m(a,null),o(a,c),Be(i,a,null),o(e,r),o(e,u),o(u,S),o(S,P),o(u,L),o(u,p),o(p,q),o(u,w),o(u,O),o(O,te),o(u,se),o(u,A),o(A,X),o(u,le),o(u,K),o(K,ae),o(u,ne),o(u,j),o(j,Y),o(j,ie),o(u,oe),o(u,R),o(R,re),o(u,ue),o(u,B),o(B,Z),o(u,ce),o(u,F),o(F,fe),o(u,ve),o(u,N),o(N,$),y=!0},p(n,[f]){if(f&21){M=n[2];let h;for(h=0;h<M.length;h+=1){const d=qe(n,M,h);v[h]?(v[h].p(d,f),Q(v[h],1)):(v[h]=Pe(d),v[h].c(),Q(v[h],1),v[h].m(t,null))}for(Ke(),h=M.length;h<v.length;h+=1)ze(h);Oe()}x!==(x=he(n))&&(G.d(1),G=x(n),G&&(G.c(),G.m(a,c)));const C={};f&1&&(C.active=n[0]),i.$set(C),(!y||f&2)&&W!==(W=n[1].gamesWon+"")&&z(q,W),(!y||f&2)&&H!==(H=n[1].gamesPlayed+"")&&z(X,H),(!y||f&8)&&z(Y,n[3]),(!y||f&2)&&U!==(U=n[1].currentStreak+"")&&z(Z,U),(!y||f&2)&&J!==(J=n[1].maxStreak+"")&&z($,J)},i(n){if(!y){for(let f=0;f<M.length;f+=1)Q(v[f]);Q(i.$$.fragment,n),y=!0}},o(n){v=v.filter(Boolean);for(let f=0;f<v.length;f+=1)ee(v[f]);ee(i.$$.fragment,n),y=!1},d(n){n&&_(t),Te(v,n),n&&_(s),n&&_(e),G.d(),Ne(i)}}}function lt(l,t,s){let e,a,c,i,r;He(l,Xe,p=>s(1,r=p));const u=(p,W)=>W==="Column"?a.map(q=>p===q-1?q:" ").join(""):new Array(Qe).fill(" ").map((q,w)=>(w&&w+1)===c[p]?r.guessDistribution[p+1]:" ").join(""),S=["Column","Guess"];let P=S[0];const L=p=>{s(0,P=p)};return l.$$.update=()=>{l.$$.dirty&2&&s(3,e=Math.trunc((r.gamesPlayed?r.gamesWon/r.gamesPlayed:0)*100)),l.$$.dirty&2&&s(8,a=Re(r.columnDistribution,r.gamesPlayed)),l.$$.dirty&2&&s(7,c=Ue(r.guessDistribution)),l.$$.dirty&385&&s(2,i=P==="Column"?Fe(a):Je(c))},[P,r,i,e,u,S,L,c,a]}class ot extends We{constructor(t){super();je(this,t,lt,st,Me,{})}}export{ot as default};
