var e=function(){"use strict";function r(e,r){postMessage({action:St,cbn:r,result:e})}function t(e,r){return e.Fc=new Uint8Array(r),e.Mc=0,e.ic=r.length,e}function n(e){return e.Mc>=e.ic?-1:e.Fc[e.Mc++]}function o(e,r,t,n){return e.Mc>=e.ic?-1:(n=Math.min(n,e.ic-e.Mc),r.set(e.Fc.subarray(e.Mc,e.Mc+n),t),e.Mc+=n,n)}function s(e){return e.Fcfers=[],e.ic=0,e.currentByteBuffer=new Uint8Array(1024),e.currentByteCount=0,e}function i(e){0!=e.currentByteCount&&(e.Fcfers.push(e.currentByteBuffer.subarray(0,e.currentByteCount)),e.currentByteBuffer=new Uint8Array(1024),e.currentByteCount=0)}function _(e){i(e);for(var r=new Uint8Array(e.ic),t=0,n=0;e.Fcfers.length>t;++t){var o=e.Fcfers[t].length;r.set(e.Fcfers[t],n),n+=o}return r}function a(e,r){e.currentByteBuffer[e.currentByteCount++]=r,e.ic++,e.currentByteCount==e.currentByteBuffer.length-1&&i(e)}function c(e,r,t,n){i(e),e.Fcfers.push(new Uint8Array(r.subarray(t,t+n))),e.ic+=n}function u(e,r,t,n,o){var s;for(s=r;t>s;++s)n[o++]=e.charCodeAt(s)}function f(e,r){kr(r,1<<e.s),r.m=e.f,Rr(r,e.m),r.eb=0,r.fb=3,r.Y=2,r.y=3}function m(e,r,t,n,o){var s,i;if(-1>n||n>=4294967296)throw Error("invalid length "+n);for(e.Rb=n,s=fr({}),f(o,s),s.Gc=1,br(s,t),i=0;64>i;i+=8)a(t,n>>>i);e.bc=(s.V=0,s.rc=r,s.lc=0,ur(s),s.c.zb=t,vr(s),dr(s),mr(s),s.Z.sb=s.m+1-2,Nr(s.Z,1<<s.Y),s.h.sb=s.m+1-2,Nr(s.h,1<<s.Y),void(s.n=0),H({},s))}function d(e,r,n){return e.mc=s({}),m(e,t({},r),e.mc,r.length,n),e}function p(e,r,t){var o,s,i,_,a="",c=new Uint8Array(5);for(s=0;5>s;++s){if(i=n(r),-1==i)throw Error("truncated input");c[s]=i}if(o=V({}),!$(o,c))throw Error("corrupted input");for(s=0;64>s;s+=8){if(i=n(r),-1==i)throw Error("truncated input");i=i.toString(16),1==i.length&&(i="0"+i),a=i+""+a}/^0+$|^f+$/i.test(a)?e.Rb=-1:(_=parseInt(a,16),e.Rb=_>4294967295?-1:_),e.bc=Y(o,r,t,e.Rb)}function h(e,r){return e.mc=s({}),p(e,t({},r),e.mc),e}function P(e,r,t,n){var o;e.yc=r,e.Yb=t,o=r+t+n,(null==e.d||e.Hb!=o)&&(e.Hb=o,e.d=new Uint8Array(e.Hb)),e.H=e.Hb-t}function l(e,r){return e.d[e.f+e.o+r]}function B(e,r,t,n){var o,s;for(e.T&&e.o+r+n>e.g&&(n=e.g-(e.o+r)),++t,s=e.f+e.o+r,o=0;n>o&&e.d[s+o]==e.d[s+o-t];++o);return o}function v(e){return e.g-e.o}function S(e){var r,t;t=e.f+e.o-e.yc,t>0&&--t,r=e.f+e.g-t,e.d.set(e.d.subarray(t,t+r),0),e.f-=t}function y(e){var r;++e.o,e.o>e.yb&&(r=e.f+e.o,r>e.H&&S(e),g(e))}function g(e){var r,t,n;if(!e.T)for(;;){if(n=-e.f+e.Hb-e.g,!n)return;if(r=o(e.$b,e.d,e.f+e.g,n),-1==r)return e.yb=e.g,t=e.f+e.yb,t>e.H&&(e.yb=e.H-e.f),void(e.T=1);e.g+=r,e.g>=e.o+e.Yb&&(e.yb=e.g-e.Yb)}}function w(e,r){e.f+=r,e.yb-=r,e.o-=r,e.g-=r}function k(e,r,t,n,o){var s,i,_;1073741567>r&&(e.Cc=16+(n>>1),_=~~((r+t+n+o)/2)+256,P(e,r+t,n+o,_),e.pb=n,s=r+1,e.p!=s&&(e.M=new Int32Array(2*(e.p=s))),i=65536,e.ob&&(i=r-1,i|=i>>1,i|=i>>2,i|=i>>4,i|=i>>8,i>>=1,i|=65535,i>16777216&&(i>>=1),e.Dc=i,++i,i+=e.O),i!=e.qc&&(e.qb=new Int32Array(e.qc=i)))}function R(e,r){var t,n,o,s,i,_,a,c,u,f,m,d,p,h,P,l,B,v,S,y,g;if(e.g>=e.o+e.pb)h=e.pb;else if(h=e.g-e.o,e.xb>h)return D(e),0;for(B=0,P=e.o>e.p?e.o-e.p:0,n=e.f+e.o,l=1,c=0,u=0,e.ob?(g=gt[e.d[n]]^e.d[n+1],c=1023&g,g^=e.d[n+2]<<8,u=65535&g,f=(g^gt[e.d[n+3]]<<5)&e.Dc):f=e.d[n]^e.d[n+1]<<8,o=e.qb[e.O+f]||0,e.ob&&(s=e.qb[c]||0,i=e.qb[1024+u]||0,e.qb[c]=e.o,e.qb[1024+u]=e.o,s>P&&e.d[e.f+s]==e.d[n]&&(r[B++]=l=2,r[B++]=e.o-s-1),i>P&&e.d[e.f+i]==e.d[n]&&(i==s&&(B-=2),r[B++]=l=3,r[B++]=e.o-i-1,s=i),0!=B&&s==o&&(B-=2,l=1)),e.qb[e.O+f]=e.o,S=(e.i<<1)+1,y=e.i<<1,d=p=e.w,0!=e.w&&o>P&&e.d[e.f+o+e.w]!=e.d[n+e.w]&&(r[B++]=l=e.w,r[B++]=e.o-o-1),t=e.Cc;;){if(P>=o||0==t--){e.M[S]=e.M[y]=0;break}if(a=e.o-o,_=(e.i>=a?e.i-a:e.i-a+e.p)<<1,v=e.f+o,m=p>d?d:p,e.d[v+m]==e.d[n+m]){for(;++m!=h&&e.d[v+m]==e.d[n+m];);if(m>l&&(r[B++]=l=m,r[B++]=a-1,m==h)){e.M[y]=e.M[_],e.M[S]=e.M[_+1];break}}e.d[n+m]>e.d[v+m]?(e.M[y]=o,y=_+1,o=e.M[y],p=m):(e.M[S]=o,S=_,o=e.M[S],d=m)}return D(e),B}function b(e){e.f=0,e.o=0,e.g=0,e.T=0,g(e),e.i=0,w(e,-1)}function D(e){var r;++e.i>=e.p&&(e.i=0),y(e),1073741823==e.o&&(r=e.o-e.p,M(e.M,2*e.p,r),M(e.qb,e.qc,r),w(e,r))}function M(e,r,t){var n,o;for(n=0;r>n;++n)o=e[n]||0,t>=o?o=0:o-=t,e[n]=o}function C(e,r){e.ob=r>2,e.ob?(e.w=0,e.xb=4,e.O=66560):(e.w=2,e.xb=3,e.O=0)}function E(e,r){var t,n,o,s,i,_,a,c,u,f,m,d,p,h,P,l,B;do{if(e.g>=e.o+e.pb)d=e.pb;else if(d=e.g-e.o,e.xb>d){D(e);continue}for(p=e.o>e.p?e.o-e.p:0,n=e.f+e.o,e.ob?(B=gt[e.d[n]]^e.d[n+1],_=1023&B,e.qb[_]=e.o,B^=e.d[n+2]<<8,a=65535&B,e.qb[1024+a]=e.o,c=(B^gt[e.d[n+3]]<<5)&e.Dc):c=e.d[n]^e.d[n+1]<<8,o=e.qb[e.O+c],e.qb[e.O+c]=e.o,P=(e.i<<1)+1,l=e.i<<1,f=m=e.w,t=e.Cc;;){if(p>=o||0==t--){e.M[P]=e.M[l]=0;break}if(i=e.o-o,s=(e.i>=i?e.i-i:e.i-i+e.p)<<1,h=e.f+o,u=m>f?f:m,e.d[h+u]==e.d[n+u]){for(;++u!=d&&e.d[h+u]==e.d[n+u];);if(u==d){e.M[l]=e.M[s],e.M[P]=e.M[s+1];break}}e.d[n+u]>e.d[h+u]?(e.M[l]=o,l=s+1,o=e.M[l],m=u):(e.M[P]=o,P=s,o=e.M[P],f=u)}D(e)}while(0!=--r)}function L(e,r,t){var n=e.o-r-1;for(0>n&&(n+=e.L);0!=t;--t)n>=e.L&&(n=0),e.Kb[e.o++]=e.Kb[n++],e.o>=e.L&&A(e)}function I(e,r){(null==e.Kb||e.L!=r)&&(e.Kb=new Uint8Array(r)),e.L=r,e.o=0,e.g=0}function A(e){var r=e.o-e.g;r&&(c(e.$b,e.Kb,e.g,r),e.o>=e.L&&(e.o=0),e.g=e.o)}function z(e,r){var t=e.o-r-1;return 0>t&&(t+=e.L),e.Kb[t]}function F(e,r){e.Kb[e.o++]=r,e.o>=e.L&&A(e)}function O(e){A(e),e.$b=null}function N(e){return e-=2,4>e?e:3}function x(e){return 4>e?0:10>e?e-3:e-6}function H(e,r){return e.db=r,e.$=null,e.wc=1,e}function G(e,r){return e.$=r,e.db=null,e.wc=1,e}function T(e){if(!e.wc)throw Error("bad state");return e.db?U(e):W(e),e.wc}function W(e){var r=Z(e.$);if(-1==r)throw Error("corrupted input");e.Sb=-1,e.Pc=e.$.n,(r||e.$.Nc>=0&&e.$.n>=e.$.Nc)&&(A(e.$.B),O(e.$.B),e.$.e.zb=null,e.wc=0)}function U(e){cr(e.db,e.db.Ub,e.db.vc,e.db.Lc),e.Sb=e.db.Ub[0],e.db.Lc[0]&&(wr(e.db),e.wc=0)}function Y(e,r,t,n){return e.e.zb=r,O(e.B),e.B.$b=t,j(e),e.S=0,e.jb=0,e.Kc=0,e.Jc=0,e.Qc=0,e.Nc=n,e.n=0,e.fc=0,G({},e)}function Z(e){var r,t,n,o,s,i;if(i=e.n&e.Ac,ot(e.e,e.Gb,(e.S<<4)+i)){if(ot(e.e,e.Vb,e.S))n=0,ot(e.e,e.Bb,e.S)?(ot(e.e,e.Db,e.S)?(ot(e.e,e.Cb,e.S)?(t=e.Qc,e.Qc=e.Jc):t=e.Jc,e.Jc=e.Kc):t=e.Kc,e.Kc=e.jb,e.jb=t):ot(e.e,e.tb,(e.S<<4)+i)||(e.S=7>e.S?9:11,n=1),n||(n=Q(e.rb,e.e,i)+2,e.S=7>e.S?8:11);else if(e.Qc=e.Jc,e.Jc=e.Kc,e.Kc=e.jb,n=2+Q(e.Pb,e.e,i),e.S=7>e.S?7:10,s=$r(e.gb[N(n)],e.e),s>=4){if(o=(s>>1)-1,e.jb=(2|1&s)<<o,14>s)e.jb+=qr(e.jc,e.jb-s-1,e.e,o);else if(e.jb+=st(e.e,o-4)<<4,e.jb+=Kr(e.Eb,e.e),0>e.jb)return-1==e.jb?1:-1}else e.jb=s;if(e.jb>=e.n||e.jb>=e.mb)return-1;L(e.B,e.jb,n),e.n+=n,e.fc=z(e.B,0)}else r=tr(e.kb,e.n,e.fc),e.fc=7>e.S?or(r,e.e):sr(r,e.e,z(e.B,e.jb)),F(e.B,e.fc),e.S=x(e.S),e.n++;return 0}function V(e){e.B={},e.e={},e.Gb=new Int16Array(192),e.Vb=new Int16Array(12),e.Bb=new Int16Array(12),e.Db=new Int16Array(12),e.Cb=new Int16Array(12),e.tb=new Int16Array(192),e.gb=[],e.jc=new Int16Array(114),e.Eb=jr({},4),e.Pb=X({}),e.rb=X({}),e.kb={};for(var r=0;4>r;++r)e.gb[r]=jr({},6);return e}function j(e){e.B.g=0,e.B.o=0,_t(e.Gb),_t(e.tb),_t(e.Vb),_t(e.Bb),_t(e.Db),_t(e.Cb),_t(e.jc),nr(e.kb);for(var r=0;4>r;++r)_t(e.gb[r].F);er(e.Pb),er(e.rb),_t(e.Eb.F),it(e.e)}function $(e,r){var t,n,o,s,i,_,a;if(5>r.length)return 0;for(a=r[0],o=a%9,_=~~(a/9),s=_%5,i=~~(_/5),t=0,n=0;4>n;++n)t+=r[1+n]<<8*n;return t>99999999||!q(e,o,s,i)?0:K(e,t)}function K(e,r){return 0>r?0:(e.Ob!=r&&(e.Ob=r,e.mb=Math.max(e.Ob,1),I(e.B,Math.max(e.mb,4096))),1)}function q(e,r,t,n){if(r>8||t>4||n>4)return 0;rr(e.kb,t,r);var o=1<<n;return J(e.Pb,o),J(e.rb,o),e.Ac=o-1,1}function J(e,r){for(;r>e.N;++e.N)e.cc[e.N]=jr({},3),e.ec[e.N]=jr({},3)}function Q(e,r,t){if(!ot(r,e.uc,0))return $r(e.cc[t],r);var n=8;return n+=ot(r,e.uc,1)?8+$r(e.sc,r):$r(e.ec[t],r)}function X(e){return e.uc=new Int16Array(2),e.cc=[],e.ec=[],e.sc=jr({},8),e.N=0,e}function er(e){_t(e.uc);for(var r=0;e.N>r;++r)_t(e.cc[r].F),_t(e.ec[r].F);_t(e.sc.F)}function rr(e,r,t){var n,o;if(null==e.U||e.u!=t||e.I!=r)for(e.I=r,e.oc=(1<<r)-1,e.u=t,o=1<<e.u+e.I,e.U=[],n=0;o>n;++n)e.U[n]=ir({})}function tr(e,r,t){return e.U[((r&e.oc)<<e.u)+((255&t)>>>8-e.u)]}function nr(e){var r,t;for(t=1<<e.u+e.I,r=0;t>r;++r)_t(e.U[r].Ib)}function or(e,r){var t=1;do t=t<<1|ot(r,e.Ib,t);while(256>t);return t<<24>>24}function sr(e,r,t){var n,o,s=1;do if(o=t>>7&1,t<<=1,n=ot(r,e.Ib,(1+o<<8)+s),s=s<<1|n,o!=n){for(;256>s;)s=s<<1|ot(r,e.Ib,s);break}while(256>s);return s<<24>>24}function ir(e){return e.Ib=new Int16Array(768),e}function _r(e,r){var t,n,o,s;e.lb=r,o=e.a[r].r,n=e.a[r].j;do e.a[r].t&&(Zr(e.a[o]),e.a[o].r=o-1,e.a[r].zc&&(e.a[o-1].t=0,e.a[o-1].r=e.a[r].r2,e.a[o-1].j=e.a[r].j2)),s=o,t=n,n=e.a[s].j,o=e.a[s].r,e.a[s].j=t,e.a[s].r=r,r=s;while(r>0);return e.nb=e.a[0].j,e.q=e.a[0].r}function ar(e){e.k=0,e.J=0;for(var r=0;4>r;++r)e.v[r]=0}function cr(e,r,t,n){var o,s,i,_,a,c,u,f,m,d,p,h,P,B,S;if(r[0]=0,t[0]=0,n[0]=1,e.rc&&(e.b.$b=e.rc,b(e.b),e.V=1,e.rc=null),!e.lc){if(e.lc=1,B=e.n,0==e.n){if(!v(e.b))return void pr(e,e.n);yr(e),P=e.n&e.y,at(e.c,e.C,(e.k<<4)+P,0),e.k=x(e.k),i=l(e.b,-e.s),Tr(Hr(e.A,e.n,e.J),e.c,i),e.J=i,--e.s,e.n++}if(!v(e.b))return void pr(e,e.n);for(;;){if(u=hr(e,e.n),d=e.nb,P=e.n&e.y,s=(e.k<<4)+P,1==u&&-1==d)at(e.c,e.C,s,0),i=l(e.b,-e.s),S=Hr(e.A,e.n,e.J),7>e.k?Tr(S,e.c,i):(m=l(e.b,-e.v[0]-1-e.s),Wr(S,e.c,m,i)),e.J=i,e.k=x(e.k);else{if(at(e.c,e.C,s,1),4>d){if(at(e.c,e.bb,e.k,1),d?(at(e.c,e.hb,e.k,1),1==d?at(e.c,e.Qb,e.k,0):(at(e.c,e.Qb,e.k,1),at(e.c,e.tc,e.k,d-2))):(at(e.c,e.hb,e.k,0),1==u?at(e.c,e._,s,0):at(e.c,e._,s,1)),1==u?e.k=7>e.k?9:11:(zr(e.h,e.c,u-2,P),e.k=7>e.k?8:11),_=e.v[d],0!=d){for(c=d;c>=1;--c)e.v[c]=e.v[c-1];e.v[0]=_}}else{for(at(e.c,e.bb,e.k,0),e.k=7>e.k?7:10,zr(e.Z,e.c,u-2,P),d-=4,h=Mr(d),f=N(u),Qr(e.K[f],e.c,h),h>=4&&(a=(h>>1)-1,o=(2|1&h)<<a,p=d-o,14>h?tt(e.Mb,o-h-1,e.c,a,p):(ct(e.c,p>>4,a-4),et(e.W,e.c,15&p),++e.Nb)),_=d,c=3;c>=1;--c)e.v[c]=e.v[c-1];e.v[0]=_,++e.Lb}e.J=l(e.b,u-1-e.s)}if(e.s-=u,e.n+=u,!e.s){if(e.Lb>=128&&dr(e),e.Nb>=16&&mr(e),r[0]=e.n,t[0]=ut(e.c),!v(e.b))return void pr(e,e.n);if(e.n-B>=4096)return e.lc=0,void(n[0]=0)}}}}function ur(e){var r,t;e.b||(r={},t=4,e.X||(t=2),C(r,t),e.b=r),xr(e.A,e.eb,e.fb),(e.ab!=e.vb||e.Fb!=e.m)&&(k(e.b,e.ab,4096,e.m,274),e.vb=e.ab,e.Fb=e.m)}function fr(e){var r;for(e.v=new Int32Array(4),e.a=[],e.c={},e.C=new Int16Array(192),e.bb=new Int16Array(12),e.hb=new Int16Array(12),e.Qb=new Int16Array(12),e.tc=new Int16Array(12),e._=new Int16Array(192),e.K=[],e.Mb=new Int16Array(114),e.W=Jr({},4),e.Z=Fr({}),e.h=Fr({}),e.A={},e.l=new Int32Array(548),e.P=new Int32Array(256),e.ib=new Int32Array(512),e.pc=new Int32Array(16),e.x=new Int32Array(4),e.R=new Int32Array(4),e.Ub=[0],e.vc=[0],e.Lc=[0],e.hc=new Uint8Array(5),e.xc=new Int32Array(128),e.wb=0,e.X=1,e.D=0,e.Fb=-1,e.nb=0,r=0;4096>r;++r)e.a[r]={};for(r=0;4>r;++r)e.K[r]=Jr({},6);return e}function mr(e){for(var r=0;16>r;++r)e.pc[r]=rt(e.W,r);e.Nb=0}function dr(e){var r,t,n,o,s,i,_,a;for(o=4;128>o;++o)i=Mr(o),n=(i>>1)-1,r=(2|1&i)<<n,e.xc[o]=nt(e.Mb,r-i-1,n,o-r);for(s=0;4>s;++s){for(t=e.K[s],_=s<<6,i=0;e.Xb>i;++i)e.P[_+i]=Xr(t,i);for(i=14;e.Xb>i;++i)e.P[_+i]+=(i>>1)-1-4<<6;for(a=128*s,o=0;4>o;++o)e.ib[a+o]=e.P[_+o];for(;128>o;++o)e.ib[a+o]=e.P[_+Mr(o)]+e.xc[o]}e.Lb=0}function pr(e,r){gr(e),Dr(e,r&e.y);for(var t=0;5>t;++t)mt(e.c)}function hr(e,r){var t,n,o,s,i,_,a,c,u,f,m,d,p,h,P,S,y,g,w,k,R,b,D,M,C,E,L,I,A,z,F,O,N,H,G,T,W,U,Y,Z,V,j,$,K,q,J,Q,X,er,rr;if(e.lb!=e.q)return p=e.a[e.q].r-e.q,e.nb=e.a[e.q].j,e.q=e.a[e.q].r,p;if(e.q=e.lb=0,e.Q?(d=e.wb,e.Q=0):d=yr(e),L=e.D,C=v(e.b)+1,2>C)return e.nb=-1,1;for(C>273&&(C=273),Z=0,u=0;4>u;++u)e.x[u]=e.v[u],e.R[u]=B(e.b,-1,e.x[u],273),e.R[u]>e.R[Z]&&(Z=u);if(e.R[Z]>=e.m)return e.nb=Z,p=e.R[Z],Sr(e,p-1),p;if(d>=e.m)return e.nb=e.l[L-1]+4,Sr(e,d-1),d;if(a=l(e.b,-1),y=l(e.b,-e.v[0]-1-1),2>d&&a!=y&&2>e.R[Z])return e.nb=-1,1;if(e.a[0].Hc=e.k,H=r&e.y,e.a[1].z=kt[e.C[(e.k<<4)+H]>>>2]+Yr(Hr(e.A,r,e.J),e.k>=7,y,a),Zr(e.a[1]),g=kt[2048-e.C[(e.k<<4)+H]>>>2],Y=g+kt[2048-e.bb[e.k]>>>2],y==a&&(V=Y+Br(e,e.k,H),e.a[1].z>V&&(e.a[1].z=V,Vr(e.a[1]))),m=d>=e.R[Z]?d:e.R[Z],2>m)return e.nb=e.a[1].j,1;e.a[1].r=0,e.a[0]._b=e.x[0],e.a[0].Zb=e.x[1],e.a[0].ac=e.x[2],e.a[0].nc=e.x[3],f=m;do e.a[f--].z=268435455;while(f>=2);for(u=0;4>u;++u)if(U=e.R[u],!(2>U)){T=Y+lr(e,u,e.k,H);do s=T+Or(e.h,U-2,H),F=e.a[U],F.z>s&&(F.z=s,F.r=0,F.j=u,F.t=0);while(--U>=2)}if(M=g+kt[e.bb[e.k]>>>2],f=e.R[0]>=2?e.R[0]+1:2,d>=f){for(I=0;f>e.l[I];)I+=2;for(;c=e.l[I+1],s=M+Pr(e,c,f,H),F=e.a[f],F.z>s&&(F.z=s,F.r=0,F.j=c+4,F.t=0),f!=e.l[I]||(I+=2,I!=L);++f);}for(t=0;;){if(++t,t==m)return _r(e,t);if(w=yr(e),L=e.D,w>=e.m)return e.wb=w,e.Q=1,_r(e,t);if(++r,N=e.a[t].r,e.a[t].t?(--N,e.a[t].zc?($=e.a[e.a[t].r2].Hc,$=4>e.a[t].j2?7>$?8:11:7>$?7:10):$=e.a[N].Hc,$=x($)):$=e.a[N].Hc,N==t-1?$=e.a[t].j?x($):7>$?9:11:(e.a[t].t&&e.a[t].zc?(N=e.a[t].r2,O=e.a[t].j2,$=7>$?8:11):(O=e.a[t].j,$=4>O?7>$?8:11:7>$?7:10),z=e.a[N],4>O?O?1==O?(e.x[0]=z.Zb,e.x[1]=z._b,e.x[2]=z.ac,e.x[3]=z.nc):2==O?(e.x[0]=z.ac,e.x[1]=z._b,e.x[2]=z.Zb,e.x[3]=z.nc):(e.x[0]=z.nc,e.x[1]=z._b,e.x[2]=z.Zb,e.x[3]=z.ac):(e.x[0]=z._b,e.x[1]=z.Zb,e.x[2]=z.ac,e.x[3]=z.nc):(e.x[0]=O-4,e.x[1]=z._b,e.x[2]=z.Zb,e.x[3]=z.ac)),e.a[t].Hc=$,e.a[t]._b=e.x[0],e.a[t].Zb=e.x[1],e.a[t].ac=e.x[2],e.a[t].nc=e.x[3],_=e.a[t].z,a=l(e.b,-1),y=l(e.b,-e.x[0]-1-1),H=r&e.y,n=_+kt[e.C[($<<4)+H]>>>2]+Yr(Hr(e.A,r,l(e.b,-2)),$>=7,y,a),b=e.a[t+1],k=0,b.z>n&&(b.z=n,b.r=t,b.j=-1,b.t=0,k=1),g=_+kt[2048-e.C[($<<4)+H]>>>2],Y=g+kt[2048-e.bb[$]>>>2],y!=a||t>b.r&&!b.j||(V=Y+(kt[e.hb[$]>>>2]+kt[e._[($<<4)+H]>>>2]),b.z>=V&&(b.z=V,b.r=t,b.j=0,b.t=0,k=1)),E=v(e.b)+1,E=E>4095-t?4095-t:E,C=E,!(2>C)){if(C>e.m&&(C=e.m),!k&&y!=a&&(q=Math.min(E-1,e.m),P=B(e.b,0,e.x[0],q),P>=2)){for(K=x($),G=r+1&e.y,D=n+kt[2048-e.C[(K<<4)+G]>>>2]+kt[2048-e.bb[K]>>>2],A=t+1+P;A>m;)e.a[++m].z=268435455;s=D+(J=Or(e.h,P-2,G),J+lr(e,0,K,G)),F=e.a[A],F.z>s&&(F.z=s,F.r=t+1,F.j=0,F.t=1,F.zc=0)}for(j=2,W=0;4>W;++W)if(h=B(e.b,-1,e.x[W],C),!(2>h)){S=h;do{for(;t+h>m;)e.a[++m].z=268435455;s=Y+(Q=Or(e.h,h-2,H),Q+lr(e,W,$,H)),F=e.a[t+h],F.z>s&&(F.z=s,F.r=t,F.j=W,F.t=0)}while(--h>=2);if(h=S,W||(j=h+1),E>h&&(q=Math.min(E-1-h,e.m),P=B(e.b,h,e.x[W],q),P>=2)){for(K=7>$?8:11,G=r+h&e.y,o=Y+(X=Or(e.h,h-2,H),X+lr(e,W,$,H))+kt[e.C[(K<<4)+G]>>>2]+Yr(Hr(e.A,r+h,l(e.b,h-1-1)),1,l(e.b,h-1-(e.x[W]+1)),l(e.b,h-1)),K=x(K),G=r+h+1&e.y,R=o+kt[2048-e.C[(K<<4)+G]>>>2],D=R+kt[2048-e.bb[K]>>>2],A=h+1+P;t+A>m;)e.a[++m].z=268435455;s=D+(er=Or(e.h,P-2,G),er+lr(e,0,K,G)),F=e.a[t+A],F.z>s&&(F.z=s,F.r=t+h+1,F.j=0,F.t=1,F.zc=1,F.r2=t,F.j2=W)}}if(w>C){for(w=C,L=0;w>e.l[L];L+=2);e.l[L]=w,L+=2}if(w>=j){for(M=g+kt[e.bb[$]>>>2];t+w>m;)e.a[++m].z=268435455;for(I=0;j>e.l[I];)I+=2;for(h=j;;++h)if(i=e.l[I+1],s=M+Pr(e,i,h,H),F=e.a[t+h],F.z>s&&(F.z=s,F.r=t,F.j=i+4,F.t=0),h==e.l[I]){if(E>h&&(q=Math.min(E-1-h,e.m),P=B(e.b,h,i,q),P>=2)){for(K=7>$?7:10,G=r+h&e.y,o=s+kt[e.C[(K<<4)+G]>>>2]+Yr(Hr(e.A,r+h,l(e.b,h-1-1)),1,l(e.b,h-(i+1)-1),l(e.b,h-1)),K=x(K),G=r+h+1&e.y,R=o+kt[2048-e.C[(K<<4)+G]>>>2],D=R+kt[2048-e.bb[K]>>>2],A=h+1+P;t+A>m;)e.a[++m].z=268435455;s=D+(rr=Or(e.h,P-2,G),rr+lr(e,0,K,G)),F=e.a[t+A],F.z>s&&(F.z=s,F.r=t+h+1,F.j=0,F.t=1,F.zc=1,F.r2=t,F.j2=i+4)}if(I+=2,I==L)break}}}}}function Pr(e,r,t,n){var o,s=N(t);return o=128>r?e.ib[128*s+r]:e.P[(s<<6)+Cr(r)]+e.pc[15&r],o+Or(e.Z,t-2,n)}function lr(e,r,t,n){var o;return r?(o=kt[2048-e.hb[t]>>>2],1==r?o+=kt[e.Qb[t]>>>2]:(o+=kt[2048-e.Qb[t]>>>2],o+=dt(e.tc[t],r-2))):(o=kt[e.hb[t]>>>2],o+=kt[2048-e._[(t<<4)+n]>>>2]),o}function Br(e,r,t){return kt[e.hb[r]>>>2]+kt[e._[(r<<4)+t]>>>2]}function vr(e){ar(e),ft(e.c),_t(e.C),_t(e._),_t(e.bb),_t(e.hb),_t(e.Qb),_t(e.tc),_t(e.Mb),Gr(e.A);for(var r=0;4>r;++r)_t(e.K[r].F);Ir(e.Z,1<<e.Y),Ir(e.h,1<<e.Y),_t(e.W.F),e.Q=0,e.lb=0,e.q=0,e.s=0}function Sr(e,r){r>0&&(E(e.b,r),e.s+=r)}function yr(e){var r=0;return e.D=R(e.b,e.l),e.D>0&&(r=e.l[e.D-2],r==e.m&&(r+=B(e.b,r-1,e.l[e.D-1],273-r))),++e.s,r}function gr(e){e.b&&e.V&&(e.b.$b=null,e.V=0)}function wr(e){gr(e),e.c.zb=null}function kr(e,r){e.ab=r;for(var t=0;r>1<<t;++t);e.Xb=2*t}function Rr(e,r){var t=e.X;e.X=r,e.b&&t!=e.X&&(e.vb=-1,e.b=null)}function br(e,r){e.hc[0]=9*(5*e.Y+e.eb)+e.fb<<24>>24;for(var t=0;4>t;++t)e.hc[1+t]=e.ab>>8*t;c(r,e.hc,0,5)}function Dr(e,r){if(e.Gc){at(e.c,e.C,(e.k<<4)+r,1),at(e.c,e.bb,e.k,0),e.k=7>e.k?7:10,zr(e.Z,e.c,0,r);var t=N(2);Qr(e.K[t],e.c,63),ct(e.c,67108863,26),et(e.W,e.c,15)}}function Mr(e){return 2048>e?wt[e]:2097152>e?wt[e>>10]+20:wt[e>>20]+40}function Cr(e){return 131072>e?wt[e>>6]+12:134217728>e?wt[e>>16]+32:wt[e>>26]+52}function Er(e,r,t,n){8>t?(at(r,e.cb,0,0),Qr(e.Wb[n],r,t)):(t-=8,at(r,e.cb,0,1),8>t?(at(r,e.cb,1,0),Qr(e.Tb[n],r,t)):(at(r,e.cb,1,1),Qr(e.dc,r,t-8)))}function Lr(e){e.cb=new Int16Array(2),e.Wb=[],e.Tb=[],e.dc=Jr({},8);for(var r=0;16>r;++r)e.Wb[r]=Jr({},3),e.Tb[r]=Jr({},3);return e}function Ir(e,r){_t(e.cb);for(var t=0;r>t;++t)_t(e.Wb[t].F),_t(e.Tb[t].F);_t(e.dc.F)}function Ar(e,r,t,n,o){var s,i,_,a,c;for(s=kt[e.cb[0]>>>2],i=kt[2048-e.cb[0]>>>2],_=i+kt[e.cb[1]>>>2],a=i+kt[2048-e.cb[1]>>>2],c=0,c=0;8>c;++c){if(c>=t)return;n[o+c]=s+Xr(e.Wb[r],c)}for(;16>c;++c){if(c>=t)return;n[o+c]=_+Xr(e.Tb[r],c-8)}for(;t>c;++c)n[o+c]=a+Xr(e.dc,c-8-8)}function zr(e,r,t,n){Er(e,r,t,n),0==--e.kc[n]&&(Ar(e,n,e.sb,e.Bc,272*n),e.kc[n]=e.sb)}function Fr(e){return Lr(e),e.Bc=[],e.kc=[],e}function Or(e,r,t){return e.Bc[272*t+r]}function Nr(e,r){for(var t=0;r>t;++t)Ar(e,t,e.sb,e.Bc,272*t),e.kc[t]=e.sb}function xr(e,r,t){var n,o;if(null==e.U||e.u!=t||e.I!=r)for(e.I=r,e.oc=(1<<r)-1,e.u=t,o=1<<e.u+e.I,e.U=[],n=0;o>n;++n)e.U[n]=Ur({})}function Hr(e,r,t){return e.U[((r&e.oc)<<e.u)+((255&t)>>>8-e.u)]}function Gr(e){var r,t=1<<e.u+e.I;for(r=0;t>r;++r)_t(e.U[r].ub)}function Tr(e,r,t){var n,o,s=1;for(o=7;o>=0;--o)n=t>>o&1,at(r,e.ub,s,n),s=s<<1|n}function Wr(e,r,t,n){var o,s,i,_,a=1,c=1;for(s=7;s>=0;--s)o=n>>s&1,_=c,a&&(i=t>>s&1,_+=1+i<<8,a=i==o),at(r,e.ub,_,o),c=c<<1|o}function Ur(e){return e.ub=new Int16Array(768),e}function Yr(e,r,t,n){var o,s,i=1,_=7,a=0;if(r)for(;_>=0;--_)if(s=t>>_&1,o=n>>_&1,a+=dt(e.ub[(1+s<<8)+i],o),i=i<<1|o,s!=o){--_;break}for(;_>=0;--_)o=n>>_&1,a+=dt(e.ub[i],o),i=i<<1|o;return a}function Zr(e){e.j=-1,e.t=0}function Vr(e){e.j=0,e.t=0}function jr(e,r){return e.G=r,e.F=new Int16Array(1<<r),e}function $r(e,r){var t,n=1;for(t=e.G;0!=t;--t)n=(n<<1)+ot(r,e.F,n);return n-(1<<e.G)}function Kr(e,r){var t,n,o=1,s=0;for(n=0;e.G>n;++n)t=ot(r,e.F,o),o<<=1,o+=t,s|=t<<n;return s}function qr(e,r,t,n){var o,s,i=1,_=0;for(s=0;n>s;++s)o=ot(t,e,r+i),i<<=1,i+=o,_|=o<<s;return _}function Jr(e,r){return e.G=r,e.F=new Int16Array(1<<r),e}function Qr(e,r,t){var n,o,s=1;for(o=e.G;0!=o;)--o,n=t>>>o&1,at(r,e.F,s,n),s=s<<1|n}function Xr(e,r){var t,n,o=1,s=0;for(n=e.G;0!=n;)--n,t=r>>>n&1,s+=dt(e.F[o],t),o=(o<<1)+t;return s}function et(e,r,t){var n,o,s=1;for(o=0;e.G>o;++o)n=1&t,at(r,e.F,s,n),s=s<<1|n,t>>=1}function rt(e,r){var t,n,o=1,s=0;for(n=e.G;0!=n;--n)t=1&r,r>>>=1,s+=dt(e.F[o],t),o=o<<1|t;return s}function tt(e,r,t,n,o){var s,i,_=1;for(i=0;n>i;++i)s=1&o,at(t,e,r+_,s),_=_<<1|s,o>>=1}function nt(e,r,t,n){var o,s,i=1,_=0;for(s=t;0!=s;--s)o=1&n,n>>>=1,_+=kt[(2047&(e[r+i]-o^-o))>>>2],i=i<<1|o;return _}function ot(e,r,t){var o,s=r[t];return o=(e.E>>>11)*s|0,(2147483648^o)>(2147483648^e.Ab)?(e.E=o,r[t]=s+(2048-s>>>5),4278190080&e.E||(e.Ab=e.Ab<<8|n(e.zb),e.E<<=8),0):(e.E-=o,e.Ab-=o,r[t]=s-(s>>>5),4278190080&e.E||(e.Ab=e.Ab<<8|n(e.zb),e.E<<=8),1)}function st(e,r){var t,o,s=0;for(t=r;0!=t;--t)e.E>>>=1,o=e.Ab-e.E>>>31,e.Ab-=e.E&o-1,s=s<<1|1-o,4278190080&e.E||(e.Ab=e.Ab<<8|n(e.zb),e.E<<=8);return s}function it(e){e.Ab=0,e.E=-1;for(var r=0;5>r;++r)e.Ab=e.Ab<<8|n(e.zb)}function _t(e){for(var r=e.length-1;r>=0;--r)e[r]=1024}function at(e,r,t,n){var o,s=r[t];o=(e.E>>>11)*s,n?(e.Ic+=o,e.E-=o,r[t]=s-(s>>>5)):(e.E=o,r[t]=s+(2048-s>>>5)),4278190080&e.E||(e.E<<=8,mt(e))}function ct(e,r,t){for(var n=t-1;n>=0;--n)e.E>>>=1,1==(r>>>n&1)&&(e.Ic+=e.E),4278190080&e.E||(e.E<<=8,mt(e))}function ut(e){return e.Jb+e.Ec+4}function ft(e){e.Ec=0,e.Ic=0,e.E=-1,e.Jb=1,e.Oc=0}function mt(e){var r,t=e.Ic/4294967296|0;if(0!=t||4278190080>e.Ic){e.Ec+=e.Jb,r=e.Oc;do a(e.zb,r+t),r=255;while(0!=--e.Jb);e.Oc=e.Ic>>>24}++e.Jb,e.Ic=256*(16777215&e.Ic)}function dt(e,r){return kt[(2047&(e-r^-r))>>>2]}function pt(e){if("undefined"!=typeof TextDecoder)try{return new TextDecoder("utf-8",{fatal:!0}).decode(e)}catch(r){return e}for(var t,n,o,s=0,i=0,_=e.length,a=[],c=[];_>s;++s,++i){if(t=e[s],128&t)if(192==(224&t)){if(s+1>=_)return e;if(n=e[++s],128!=(192&n))return e;c[i]=(31&t)<<6|63&n}else{if(224!=(240&t))return e;if(s+2>=_)return e;if(n=e[++s],128!=(192&n))return e;if(o=e[++s],128!=(192&o))return e;c[i]=(15&t)<<12|(63&n)<<6|63&o}else{if(!t)return e;c[i]=t}16383==i&&(a.push(String.fromCharCode.apply(String,c)),i=-1)}return i>0&&(c.length=i,a.push(String.fromCharCode.apply(String,c))),a.join("")}function ht(e){var r,t,n,o=[],s=0,i=e.length;if("object"==typeof e)return e;if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);if("undefined"!=typeof Buffer)return new Buffer(e);for(u(e,0,i,o,0),n=0;i>n;++n)r=o[n],r>=1&&127>=r?++s:s+=!r||r>=128&&2047>=r?2:3;for(t=[],s=0,n=0;i>n;++n)r=o[n],r>=1&&127>=r?t[s++]=r:!r||r>=128&&2047>=r?(t[s++]=192|r>>6&31,t[s++]=128|63&r):(t[s++]=224|r>>12&15,t[s++]=128|r>>6&63,t[s++]=128|63&r);return new Uint8Array(t)}function Pt(e,t,n,o){function s(){try{for(var e,r=(new Date).getTime();T(c.c.bc);)if(i=c.c.bc.Sb/c.c.Rb,(new Date).getTime()-r>200)return o(i),yt(s,0),0;
o(1),e=_(c.c.mc),yt(n.bind(null,e),0)}catch(t){n(null,t)}}var i,a,c={};"function"!=typeof n&&(a=n,n=o=0),o=o||function(e){return void 0!==a?r(e,a):void 0},n=n||function(e,r){return void 0!==a?postMessage({action:Bt,cbn:a,result:e,error:r}):void 0};try{c.c=d({},ht(e),Rt(t)),o(0)}catch(u){return n(null,u)}yt(s,0)}function lt(e,t,n){function o(){try{for(var e,r=0,i=(new Date).getTime();T(u.d.bc);)if(++r%1e3==0&&(new Date).getTime()-i>200)return a&&(s=u.d.bc.$.n/c,n(s)),yt(o,0),0;n(1),e=pt(_(u.d.mc)),yt(t.bind(null,e),0)}catch(f){t(null,f)}}var s,i,a,c,u={};"function"!=typeof t&&(i=t,t=n=0),n=n||function(e){return void 0!==i?r(a?e:-1,i):void 0},t=t||function(e,r){return void 0!==i?postMessage({action:vt,cbn:i,result:e,error:r}):void 0};try{u.d=h({},e),c=u.d.Rb,a=c>-1,n(0)}catch(f){return t(null,f)}yt(o,0)}var Bt=1,vt=2,St=3,yt="function"==typeof setImmediate?setImmediate:setTimeout,gt=function(){var e,r,t,n=[];for(e=0;256>e;++e){for(t=e,r=0;8>r;++r)0!=(1&t)?t=t>>>1^-306674912:t>>>=1;n[e]=t}return n}(),wt=function(){var e,r,t,n=2,o=new Uint8Array(2048);for(o[0]=0,o[1]=1,t=2;22>t;++t)for(r=1<<(t>>1)-1,e=0;r>e;++e,++n)o[n]=t;return o}(),kt=function(){var e,r,t,n,o=[];for(r=8;r>=0;--r)for(n=1<<9-r-1,e=1<<9-r,t=n;e>t;++t)o[t]=(r<<6)+(e-t<<6>>>9-r-1);return o}(),Rt=function(){var e=[{s:16,f:64,m:0},{s:20,f:64,m:0},{s:19,f:64,m:1},{s:20,f:64,m:1},{s:21,f:128,m:1},{s:22,f:128,m:1},{s:23,f:128,m:1},{s:24,f:255,m:1},{s:25,f:255,m:1}];return function(r){return e[r-1]||e[6]}}();return"undefined"==typeof onmessage||"undefined"!=typeof window&&void 0!==window.document||!function(){onmessage=function(r){r&&r.gc&&(r.gc.action==vt?e.decompress(r.gc.gc,r.gc.cbn):r.gc.action==Bt&&e.compress(r.gc.gc,r.gc.Rc,r.gc.cbn))}}(),{compress:Pt,decompress:lt,worker:function(){return null}}}();this.LZMA=this.LZMA_WORKER=e;