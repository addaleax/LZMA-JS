var e=function(){"use strict";function r(e){function r(){}return tt=r.prototype=e||new ut,r}function t(e,r){postMessage({action:it,cbn:r,result:e})}function n(e){return Array(e)}function i(e,r){var t,n;return t=e[1]+r[1],n=e[0]+r[0],_(n,t)}function s(e,r){return m(~~Math.max(Math.min(e[1]/ot,2147483647),-2147483648)&~~Math.max(Math.min(r[1]/ot,2147483647),-2147483648),u(e)&u(r))}function o(e,r){var t,n;return e[0]==r[0]&&e[1]==r[1]?0:(t=0>e[1],n=0>r[1],t&&!n?-1:!t&&n?1:v(e,r)[1]<0?-1:1)}function _(e,r){var t,n;for(r%=0x10000000000000000,e%=0x10000000000000000,t=r%ot,n=Math.floor(e/ot)*ot,r=r-t+n,e=e-n+t;0>e;)e+=ot,r-=ot;for(;e>4294967295;)e-=ot,r+=ot;for(r%=0x10000000000000000;r>0x7fffffff00000000;)r-=0x10000000000000000;for(;-0x8000000000000000>r;)r+=0x10000000000000000;return[e,r]}function a(e,r){return e[0]==r[0]&&e[1]==r[1]}function c(e){var r,t;return e>-129&&128>e?(r=e+128,t=mt[r],null==t&&(t=mt[r]=f(e)),t):f(e)}function f(e){return e>=0?[e,0]:[e+ot,-ot]}function u(e){return e[0]>=2147483648?~~Math.max(Math.min(e[0]-ot,2147483647),-2147483648):~~Math.max(Math.min(e[0],2147483647),-2147483648)}function m(e,r){var t,n;return t=e*ot,n=r,0>r&&(n+=ot),[n,t]}function p(e){var r,t;return a(e,at)?at:(r=-e[1],t=-e[0],t>4294967295&&(t-=ot,r+=ot),0>t&&(t+=ot,r-=ot),[t,r])}function d(e){return 30>=e?1<<e:d(30)*d(e-30)}function h(e,r){var t,n,i,s;return r&=63,a(e,at)?0==r?e:ct:0>e[1]?p(h(p(e),r)):(s=d(r),n=e[1]*s%0x10000000000000000,i=e[0]*s,t=i-i%ot,n+=t,i-=t,n>=0x8000000000000000&&(n-=0x10000000000000000),[i,n])}function P(e,r){var t,n,i;return r&=63,i=d(r),t=e[1]/i,n=Math.floor(e[0]/i),_(n,t)}function l(e,r){var t;return r&=63,t=P(e,r),0>e[1]&&(t=i(t,h([2,0],63-r))),t}function v(e,r){var t,n;return t=e[1]-r[1],n=e[0]-r[0],_(n,t)}function B(e,r){return e.gc=r,e.dc=0,e.Db=r.length,e}function S(e,r,t,n){return e.dc>=e.Db?-1:(n=Math.min(n,e.Db-e.dc),y(e.gc,e.dc,r,t,n),e.dc+=n,n)}function k(e){return e.gc=n(32),e}function b(e){var r=e.gc;return r.length=e.Db,r}function M(e,r){e.gc[e.Db++]=r<<24>>24}function E(e,r,t,n){y(r,t,e.gc,e.Db,n),e.Db+=n}function g(e,r,t,n,i){var s;for(s=r;t>s;++s)n[i++]=e.charCodeAt(s)}function y(e,r,t,n,i){for(var s=0;i>s;++s)t[n+s]=e[r+s]}function F(e,r){if(!(pr(r,1<<e.dicSize)&&Pr(r,e.fb)&&hr(r,e.matchFinder)&&dr(r,e.lc,e.lp,e.pb)))throw Error("unknown error")}function R(e,r,t,n,i){var s,_;if(o(n,_t)<0)throw Error("invalid length "+n);for(e.hc=n,s=er(new Et),F(i,s),s.Yb=!0,lr(s,t),_=0;64>_;_+=8)M(t,255&u(P(n,_)));e.bc=(s.P=!1,s.Jb=r,s.Mb=!1,$(s),s.c.fc=t,ar(s),tr(s),rr(s),s.U._=s.i+1-2,Rr(s.U,1<<s.D),s.h._=s.i+1-2,Rr(s.h,1<<s.D),void(s.x=ct),j(new bt,s))}function L(e,r,t){return e.ec=k(new Pt),R(e,B(new dt,r),e.ec,c(r.length),t),e}function z(e,r,t,i){var s;e.Cb=r,e.qb=t,s=r+t+i,(null==e.d||e.nb!=s)&&(e.d=null,e.nb=s,e.d=n(e.nb)),e.z=e.nb-t}function w(e,r){return e.d[e.e+e.v+r]}function C(e,r,t,n){var i,s;for(e.R&&e.v+r+n>e.q&&(n=e.q-(e.v+r)),++t,s=e.e+e.v+r,i=0;n>i&&e.d[s+i]==e.d[s+i-t];++i);return i}function x(e){return e.q-e.v}function D(e){var r,t,n;for(n=e.e+e.v-e.Cb,n>0&&--n,t=e.e+e.q-n,r=0;t>r;++r)e.d[r]=e.d[n+r];e.e-=n}function A(e){var r;++e.v,e.v>e.gb&&(r=e.e+e.v,r>e.z&&D(e),O(e))}function O(e){var r,t,n;if(!e.R)for(;;){if(n=-e.e+e.nb-e.q,0==n)return;if(r=S(e.ac,e.d,e.e+e.q,n),-1==r)return e.gb=e.q,t=e.e+e.gb,t>e.z&&(e.gb=e.z-e.e),void(e.R=1);e.q+=r,e.q>=e.v+e.qb&&(e.gb=e.q-e.qb)}}function I(e,r){e.e+=r,e.gb-=r,e.v-=r,e.q-=r}function H(e,r,t,i,s){var o,_,a;return r>1073741567?!1:(e.Lb=16+(i>>1),a=~~((r+t+i+s)/2)+256,z(e,r+t,i+s,a),e.kb=i,o=r+1,e.k!=o&&(e.K=n(2*(e.k=o))),_=65536,e.Y&&(_=r-1,_|=_>>1,_|=_>>2,_|=_>>4,_|=_>>8,_>>=1,_|=65535,_>16777216&&(_>>=1),e.Xb=_,++_,_+=e.E),_!=e.yb&&(e.jb=n(e.yb=_)),!0)}function N(e,r){var t,n,i,s,o,_,a,c,f,u,m,p,d,h,P,l,v,B,S,k,b;if(e.q>=e.v+e.kb)h=e.kb;else if(h=e.q-e.v,e.Z>h)return T(e),0;for(v=0,P=e.v>e.k?e.v-e.k:0,n=e.e+e.v,l=1,c=0,f=0,e.Y?(b=St[255&e.d[n]]^255&e.d[n+1],c=1023&b,b^=(255&e.d[n+2])<<8,f=65535&b,u=(b^St[255&e.d[n+3]]<<5)&e.Xb):u=255&e.d[n]^(255&e.d[n+1])<<8,i=e.jb[e.E+u]||0,e.Y&&(s=e.jb[c]||0,o=e.jb[1024+f]||0,e.jb[c]=e.v,e.jb[1024+f]=e.v,s>P&&e.d[e.e+s]==e.d[n]&&(r[v++]=l=2,r[v++]=e.v-s-1),o>P&&e.d[e.e+o]==e.d[n]&&(o==s&&(v-=2),r[v++]=l=3,r[v++]=e.v-o-1,s=o),0!=v&&s==i&&(v-=2,l=1)),e.jb[e.E+u]=e.v,S=(e.g<<1)+1,k=e.g<<1,p=d=e.p,0!=e.p&&i>P&&e.d[e.e+i+e.p]!=e.d[n+e.p]&&(r[v++]=l=e.p,r[v++]=e.v-i-1),t=e.Lb;;){if(P>=i||0==t--){e.K[S]=e.K[k]=0;break}if(a=e.v-i,_=(e.g>=a?e.g-a:e.g-a+e.k)<<1,B=e.e+i,m=d>p?p:d,e.d[B+m]==e.d[n+m]){for(;++m!=h&&e.d[B+m]==e.d[n+m];);if(m>l&&(r[v++]=l=m,r[v++]=a-1,m==h)){e.K[k]=e.K[_],e.K[S]=e.K[_+1];break}}(255&e.d[n+m])>(255&e.d[B+m])?(e.K[k]=i,k=_+1,i=e.K[k],d=m):(e.K[S]=i,S=_,i=e.K[S],p=m)}return T(e),v}function G(e){e.e=0,e.v=0,e.q=0,e.R=0,O(e),e.g=0,I(e,-1)}function T(e){var r;++e.g>=e.k&&(e.g=0),A(e),1073741823==e.v&&(r=e.v-e.k,W(e.K,2*e.k,r),W(e.jb,e.yb,r),I(e,r))}function W(e,r,t){var n,i;for(n=0;r>n;++n)i=e[n]||0,t>=i?i=0:i-=t,e[n]=i}function Y(e,r){e.Y=r>2,e.Y?(e.p=0,e.Z=4,e.E=66560):(e.p=2,e.Z=3,e.E=0)}function Z(e,r){var t,n,i,s,o,_,a,c,f,u,m,p,d,h,P,l,v;do{if(e.q>=e.v+e.kb)p=e.kb;else if(p=e.q-e.v,e.Z>p){T(e);continue}for(d=e.v>e.k?e.v-e.k:0,n=e.e+e.v,e.Y?(v=St[255&e.d[n]]^255&e.d[n+1],_=1023&v,e.jb[_]=e.v,v^=(255&e.d[n+2])<<8,a=65535&v,e.jb[1024+a]=e.v,c=(v^St[255&e.d[n+3]]<<5)&e.Xb):c=255&e.d[n]^(255&e.d[n+1])<<8,i=e.jb[e.E+c],e.jb[e.E+c]=e.v,P=(e.g<<1)+1,l=e.g<<1,u=m=e.p,t=e.Lb;;){if(d>=i||0==t--){e.K[P]=e.K[l]=0;break}if(o=e.v-i,s=(e.g>=o?e.g-o:e.g-o+e.k)<<1,h=e.e+i,f=m>u?u:m,e.d[h+f]==e.d[n+f]){for(;++f!=p&&e.d[h+f]==e.d[n+f];);if(f==p){e.K[l]=e.K[s],e.K[P]=e.K[s+1];break}}(255&e.d[n+f])>(255&e.d[h+f])?(e.K[l]=i,l=s+1,i=e.K[l],m=f):(e.K[P]=i,P=s,i=e.K[P],u=f)}T(e)}while(0!=--r)}function V(e){return e-=2,4>e?e:3}function J(e){return 4>e?0:10>e?e-3:e-6}function j(e,r){return e.eb=r,e.jc=null,e.cc=!0,e}function K(e){if(!e.cc)throw Error("bad state");if(!e.eb)throw Error("No decoding");return q(e),e.cc}function q(e){X(e.eb,e.eb.Eb,e.eb.Rb,e.eb._b),e.Qb=e.eb.Eb[0],e.eb._b[0]&&(mr(e.eb),e.cc=!1)}function Q(e,r){var t,n,i,s;e.O=r,i=e.a[r].n,n=e.a[r].f;do e.a[r].r&&(Or(e.a[i]),e.a[i].n=i-1,e.a[r].Ub&&(e.a[i-1].r=0,e.a[i-1].n=e.a[r].n2,e.a[i-1].f=e.a[r].f2)),s=i,t=n,n=e.a[s].f,i=e.a[s].n,e.a[s].f=t,e.a[s].n=r,r=s;while(r>0);return e.fb=e.a[0].f,e.l=e.a[0].n}function U(e){var r;for(e.j=0,e.C=0,r=0;4>r;++r)e.t[r]=0}function X(e,r,t,n){var s,_,f,m,p,d,h,P,l,B,S,k,b,M,E;if(r[0]=ct,t[0]=ct,n[0]=!0,e.Jb&&(e.b.ac=e.Jb,G(e.b),e.P=!0,e.Jb=null),!e.Mb){if(e.Mb=!0,M=e.x,a(e.x,ct)){if(0==x(e.b))return void nr(e,u(e.x));fr(e),b=u(e.x)&e.s,Jr(e.c,e.A,(e.j<<4)+b,0),e.j=J(e.j),f=w(e.b,-e.o),Cr(zr(e.y,u(e.x),e.C),e.c,f),e.C=f,--e.o,e.x=i(e.x,ft)}if(0==x(e.b))return void nr(e,u(e.x));for(;;){if(h=ir(e,u(e.x)),B=e.fb,b=u(e.x)&e.s,_=(e.j<<4)+b,1==h&&-1==B)Jr(e.c,e.A,_,0),f=w(e.b,-e.o),E=zr(e.y,u(e.x),e.C),7>e.j?Cr(E,e.c,f):(l=w(e.b,-e.t[0]-1-e.o),xr(E,e.c,l,f)),e.C=f,e.j=J(e.j);else{if(Jr(e.c,e.A,_,1),4>B){if(Jr(e.c,e.W,e.j,1),0==B?(Jr(e.c,e.ab,e.j,0),1==h?Jr(e.c,e.T,_,0):Jr(e.c,e.T,_,1)):(Jr(e.c,e.ab,e.j,1),1==B?Jr(e.c,e.vb,e.j,0):(Jr(e.c,e.vb,e.j,1),Jr(e.c,e.Pb,e.j,B-2))),1==h?e.j=7>e.j?9:11:(gr(e.h,e.c,h-2,b),e.j=7>e.j?8:11),m=e.t[B],0!=B){for(d=B;d>=1;--d)e.t[d]=e.t[d-1];e.t[0]=m}}else{for(Jr(e.c,e.W,e.j,0),e.j=7>e.j?7:10,gr(e.U,e.c,h-2,b),B-=4,k=Br(B),P=V(h),Nr(e.I[P],e.c,k),k>=4&&(p=(k>>1)-1,s=(2|1&k)<<p,S=B-s,14>k?Yr(e.tb,s-k-1,e.c,p,S):(jr(e.c,S>>4,p-4),Tr(e.Q,e.c,15&S),++e.db)),m=B,d=3;d>=1;--d)e.t[d]=e.t[d-1];e.t[0]=m,++e.bb}e.C=w(e.b,h-1-e.o)}if(e.o-=h,e.x=i(e.x,c(h)),0==e.o){if(e.bb>=128&&tr(e),e.db>=16&&rr(e),r[0]=e.x,t[0]=qr(e.c),0==x(e.b))return void nr(e,u(e.x));if(o(v(e.x,M),[4096,0])>=0)return e.Mb=!1,void(n[0]=!1)}}}}function $(e){var r,t;e.b||(r=new kt,t=4,0==e.S&&(t=2),Y(r,t),e.b=r),Lr(e.y,e.F,e.J),(e.H!=e.V||e.sb!=e.i)&&(H(e.b,e.H,4096,e.i,274),e.V=e.H,e.sb=e.i)}function er(e){var r;for(e.t=[0,0,0,0],e.a=n(4096),e.c=new Ct,e.A=n(192),e.W=n(12),e.ab=n(12),e.vb=n(12),e.Pb=n(12),e.T=n(192),e.I=[0,0,0,0],e.tb=n(114),e.Q=Hr(new zt,4),e.U=yr(new yt),e.h=yr(new yt),e.y=new Ft,e.m=n(548),e.M=n(256),e.cb=n(512),e.Nb=n(16),e.w=[0,0,0,0],e.L=[0,0,0,0],e.Eb=[ct],e.Rb=[ct],e._b=[!1],e.Gb=n(5),e.Sb=n(128),r=0;4096>r;++r)e.a[r]=new Lt;for(r=0;4>r;++r)e.I[r]=Hr(new zt,6);return e}function rr(e){var r;for(r=0;16>r;++r)e.Nb[r]=Wr(e.Q,r);e.db=0}function tr(e){var r,t,n,i,s,o,_,a;for(i=4;128>i;++i)o=Br(i),n=(o>>1)-1,r=(2|1&o)<<n,e.Sb[i]=Zr(e.tb,r-o-1,n,i-r);for(s=0;4>s;++s){for(t=e.I[s],_=s<<6,o=0;e.pb>o;++o)e.M[_+o]=Gr(t,o);for(o=14;e.pb>o;++o)e.M[_+o]+=(o>>1)-1-4<<6;for(a=128*s,i=0;4>i;++i)e.cb[a+i]=e.M[_+i];for(;128>i;++i)e.cb[a+i]=e.M[_+Br(i)]+e.Sb[i]}e.bb=0}function nr(e,r){ur(e),vr(e,r&e.s),Kr(e.c)}function ir(e,r){var t,n,i,s,o,_,a,c,f,u,m,p,d,h,P,l,v,B,S,k,b,M,E,g,y,F,R,L,z,D,A,O,I,H,N,G,T,W,Y,Z,V,j,K,q,U,X,$,er,rr,tr;if(e.O!=e.l)return d=e.a[e.l].n-e.l,e.fb=e.a[e.l].f,e.l=e.a[e.l].n,d;if(e.l=e.O=0,e.N?(p=e.ob,e.N=!1):p=fr(e),R=e.B,y=x(e.b)+1,2>y)return e.fb=-1,1;for(y>273&&(y=273),Z=0,f=0;4>f;++f)e.w[f]=e.t[f],e.L[f]=C(e.b,-1,e.w[f],273),e.L[f]>e.L[Z]&&(Z=f);if(e.L[Z]>=e.i)return e.fb=Z,d=e.L[Z],cr(e,d-1),d;if(p>=e.i)return e.fb=e.m[R-1]+4,cr(e,p-1),p;if(a=w(e.b,-1),v=w(e.b,-e.t[0]-1-1),2>p&&a!=v&&2>e.L[Z])return e.fb=-1,1;if(e.a[0].Tb=e.j,H=r&e.s,e.a[1].u=wt[e.A[(e.j<<4)+H]>>>2]+Ar(zr(e.y,r,e.C),e.j>=7,v,a),Or(e.a[1]),B=wt[2048-e.A[(e.j<<4)+H]>>>2],Y=B+wt[2048-e.W[e.j]>>>2],v==a&&(V=Y+_r(e,e.j,H),e.a[1].u>V&&(e.a[1].u=V,Ir(e.a[1]))),m=p>=e.L[Z]?p:e.L[Z],2>m)return e.fb=e.a[1].f,1;e.a[1].n=0,e.a[0].wb=e.w[0],e.a[0].ub=e.w[1],e.a[0].xb=e.w[2],e.a[0].Fb=e.w[3],u=m;do e.a[u--].u=268435455;while(u>=2);for(f=0;4>f;++f)if(W=e.L[f],!(2>W)){G=Y+or(e,f,e.j,H);do s=G+Fr(e.h,W-2,H),A=e.a[W],A.u>s&&(A.u=s,A.n=0,A.f=f,A.r=0);while(--W>=2)}if(g=B+wt[e.W[e.j]>>>2],u=e.L[0]>=2?e.L[0]+1:2,p>=u){for(L=0;u>e.m[L];)L+=2;for(;c=e.m[L+1],s=g+sr(e,c,u,H),A=e.a[u],A.u>s&&(A.u=s,A.n=0,A.f=c+4,A.r=0),u!=e.m[L]||(L+=2,L!=R);++u);}for(t=0;;){if(++t,t==m)return Q(e,t);if(S=fr(e),R=e.B,S>=e.i)return e.ob=S,e.N=!0,Q(e,t);if(++r,I=e.a[t].n,e.a[t].r?(--I,e.a[t].Ub?(K=e.a[e.a[t].n2].Tb,K=4>e.a[t].f2?7>K?8:11:7>K?7:10):K=e.a[I].Tb,K=J(K)):K=e.a[I].Tb,I==t-1?K=0==e.a[t].f?7>K?9:11:J(K):(e.a[t].r&&e.a[t].Ub?(I=e.a[t].n2,O=e.a[t].f2,K=7>K?8:11):(O=e.a[t].f,K=4>O?7>K?8:11:7>K?7:10),D=e.a[I],4>O?0==O?(e.w[0]=D.wb,e.w[1]=D.ub,e.w[2]=D.xb,e.w[3]=D.Fb):1==O?(e.w[0]=D.ub,e.w[1]=D.wb,e.w[2]=D.xb,e.w[3]=D.Fb):2==O?(e.w[0]=D.xb,e.w[1]=D.wb,e.w[2]=D.ub,e.w[3]=D.Fb):(e.w[0]=D.Fb,e.w[1]=D.wb,e.w[2]=D.ub,e.w[3]=D.xb):(e.w[0]=O-4,e.w[1]=D.wb,e.w[2]=D.ub,e.w[3]=D.xb)),e.a[t].Tb=K,e.a[t].wb=e.w[0],e.a[t].ub=e.w[1],e.a[t].xb=e.w[2],e.a[t].Fb=e.w[3],_=e.a[t].u,a=w(e.b,-1),v=w(e.b,-e.w[0]-1-1),H=r&e.s,n=_+wt[e.A[(K<<4)+H]>>>2]+Ar(zr(e.y,r,w(e.b,-2)),K>=7,v,a),M=e.a[t+1],k=!1,M.u>n&&(M.u=n,M.n=t,M.f=-1,M.r=0,k=!0),B=_+wt[2048-e.A[(K<<4)+H]>>>2],Y=B+wt[2048-e.W[K]>>>2],v!=a||t>M.n&&0==M.f||(V=Y+(wt[e.ab[K]>>>2]+wt[e.T[(K<<4)+H]>>>2]),M.u>=V&&(M.u=V,M.n=t,M.f=0,M.r=0,k=!0)),F=x(e.b)+1,F=F>4095-t?4095-t:F,y=F,!(2>y)){if(y>e.i&&(y=e.i),!k&&v!=a&&(U=Math.min(F-1,e.i),P=C(e.b,0,e.w[0],U),P>=2)){for(q=J(K),N=r+1&e.s,E=n+wt[2048-e.A[(q<<4)+N]>>>2]+wt[2048-e.W[q]>>>2],z=t+1+P;z>m;)e.a[++m].u=268435455;s=E+(X=Fr(e.h,P-2,N),X+or(e,0,q,N)),A=e.a[z],A.u>s&&(A.u=s,A.n=t+1,A.f=0,A.r=1,A.Ub=0)}for(j=2,T=0;4>T;++T)if(h=C(e.b,-1,e.w[T],y),!(2>h)){l=h;do{for(;t+h>m;)e.a[++m].u=268435455;s=Y+($=Fr(e.h,h-2,H),$+or(e,T,K,H)),A=e.a[t+h],A.u>s&&(A.u=s,A.n=t,A.f=T,A.r=0)}while(--h>=2);if(h=l,0==T&&(j=h+1),F>h&&(U=Math.min(F-1-h,e.i),P=C(e.b,h,e.w[T],U),P>=2)){for(q=7>K?8:11,N=r+h&e.s,i=Y+(er=Fr(e.h,h-2,H),er+or(e,T,K,H))+wt[e.A[(q<<4)+N]>>>2]+Ar(zr(e.y,r+h,w(e.b,h-1-1)),!0,w(e.b,h-1-(e.w[T]+1)),w(e.b,h-1)),q=J(q),N=r+h+1&e.s,b=i+wt[2048-e.A[(q<<4)+N]>>>2],E=b+wt[2048-e.W[q]>>>2],z=h+1+P;t+z>m;)e.a[++m].u=268435455;s=E+(rr=Fr(e.h,P-2,N),rr+or(e,0,q,N)),A=e.a[t+z],A.u>s&&(A.u=s,A.n=t+h+1,A.f=0,A.r=1,A.Ub=1,A.n2=t,A.f2=T)}}if(S>y){for(S=y,R=0;S>e.m[R];R+=2);e.m[R]=S,R+=2}if(S>=j){for(g=B+wt[e.W[K]>>>2];t+S>m;)e.a[++m].u=268435455;for(L=0;j>e.m[L];)L+=2;for(h=j;;++h)if(o=e.m[L+1],s=g+sr(e,o,h,H),A=e.a[t+h],A.u>s&&(A.u=s,A.n=t,A.f=o+4,A.r=0),h==e.m[L]){if(F>h&&(U=Math.min(F-1-h,e.i),P=C(e.b,h,o,U),P>=2)){for(q=7>K?7:10,N=r+h&e.s,i=s+wt[e.A[(q<<4)+N]>>>2]+Ar(zr(e.y,r+h,w(e.b,h-1-1)),!0,w(e.b,h-(o+1)-1),w(e.b,h-1)),q=J(q),N=r+h+1&e.s,b=i+wt[2048-e.A[(q<<4)+N]>>>2],E=b+wt[2048-e.W[q]>>>2],z=h+1+P;t+z>m;)e.a[++m].u=268435455;s=E+(tr=Fr(e.h,P-2,N),tr+or(e,0,q,N)),A=e.a[t+z],A.u>s&&(A.u=s,A.n=t+h+1,A.f=0,A.r=1,A.Ub=1,A.n2=t,A.f2=o+4)}if(L+=2,L==R)break}}}}}function sr(e,r,t,n){var i,s;return i=V(t),s=128>r?e.cb[128*i+r]:e.M[(i<<6)+Sr(r)]+e.Nb[15&r],s+Fr(e.U,t-2,n)}function or(e,r,t,n){var i;return 0==r?(i=wt[e.ab[t]>>>2],i+=wt[2048-e.T[(t<<4)+n]>>>2]):(i=wt[2048-e.ab[t]>>>2],1==r?i+=wt[e.vb[t]>>>2]:(i+=wt[2048-e.vb[t]>>>2],i+=Xr(e.Pb[t],r-2))),i}function _r(e,r,t){return wt[e.ab[r]>>>2]+wt[e.T[(r<<4)+t]>>>2]}function ar(e){var r;for(U(e),Qr(e.c),Vr(e.A),Vr(e.T),Vr(e.W),Vr(e.ab),Vr(e.vb),Vr(e.Pb),Vr(e.tb),wr(e.y),r=0;4>r;++r)Vr(e.I[r].hb);Mr(e.U,1<<e.D),Mr(e.h,1<<e.D),Vr(e.Q.hb),e.N=!1,e.O=0,e.l=0,e.o=0}function cr(e,r){r>0&&(Z(e.b,r),e.o+=r)}function fr(e){var r;return r=0,e.B=N(e.b,e.m),e.B>0&&(r=e.m[e.B-2],r==e.i&&(r+=C(e.b,r-1,e.m[e.B-1],273-r))),++e.o,r}function ur(e){e.b&&e.P&&(e.b.ac=null,e.P=!1)}function mr(e){ur(e),e.c.fc=null}function pr(e,r){var t;if(1>r||r>536870912)return!1;for(e.H=r,t=0;r>1<<t;++t);return e.pb=2*t,!0}function dr(e,r,t,n){return 0>t||t>4||0>r||r>8||0>n||n>4?!1:(e.F=t,e.J=r,e.D=n,e.s=(1<<e.D)-1,!0)}function hr(e,r){var t;return 0>r||r>2?!1:(t=e.S,e.S=r,e.b&&t!=e.S&&(e.V=-1,e.b=null),!0)}function Pr(e,r){return 5>r||r>273?!1:(e.i=r,!0)}function lr(e,r){var t;for(e.Gb[0]=9*(5*e.D+e.F)+e.J<<24>>24,t=0;4>t;++t)e.Gb[1+t]=e.H>>8*t<<24>>24;E(r,e.Gb,0,5)}function vr(e,r){var t;e.Yb&&(Jr(e.c,e.A,(e.j<<4)+r,1),Jr(e.c,e.W,e.j,0),e.j=7>e.j?7:10,gr(e.U,e.c,0,r),t=V(2),Nr(e.I[t],e.c,63),jr(e.c,67108863,26),Tr(e.Q,e.c,15))}function Br(e){return 2048>e?Mt[e]:2097152>e?Mt[e>>10]+20:Mt[e>>20]+40}function Sr(e){return 131072>e?Mt[e>>6]+12:134217728>e?Mt[e>>16]+32:Mt[e>>26]+52}function kr(e,r,t,n){8>t?(Jr(r,e.$,0,0),Nr(e.zb[n],r,t)):(t-=8,Jr(r,e.$,0,1),8>t?(Jr(r,e.$,1,0),Nr(e.Ab[n],r,t)):(Jr(r,e.$,1,1),Nr(e.Ib,r,t-8)))}function br(e){var r;for(e.$=[0,0],e.zb=n(16),e.Ab=n(16),e.Ib=Hr(new zt,8),r=0;16>r;++r)e.zb[r]=Hr(new zt,3),e.Ab[r]=Hr(new zt,3);return e}function Mr(e,r){var t;for(Vr(e.$),t=0;r>t;++t)Vr(e.zb[t].hb),Vr(e.Ab[t].hb);Vr(e.Ib.hb)}function Er(e,r,t,n,i){var s,o,_,a,c;for(s=wt[e.$[0]>>>2],o=wt[2048-e.$[0]>>>2],_=o+wt[e.$[1]>>>2],a=o+wt[2048-e.$[1]>>>2],c=0,c=0;8>c;++c){if(c>=t)return;n[i+c]=s+Gr(e.zb[r],c)}for(;16>c;++c){if(c>=t)return;n[i+c]=_+Gr(e.Ab[r],c-8)}for(;t>c;++c)n[i+c]=a+Gr(e.Ib,c-8-8)}function gr(e,r,t,n){kr(e,r,t,n),0==--e.Kb[n]&&(Er(e,n,e._,e.Vb,272*n),e.Kb[n]=e._)}function yr(e){return br(e),e.Vb=n(4352),e.Kb=n(16),e}function Fr(e,r,t){return e.Vb[272*t+r]}function Rr(e,r){var t;for(t=0;r>t;++t)Er(e,t,e._,e.Vb,272*t),e.Kb[t]=e._}function Lr(e,r,t){var i,s;if(null==e.Hb||e.G!=t||e.lb!=r)for(e.lb=r,e.Wb=(1<<r)-1,e.G=t,s=1<<e.G+e.lb,e.Hb=n(s),i=0;s>i;++i)e.Hb[i]=Dr(new Rt)}function zr(e,r,t){return e.Hb[((r&e.Wb)<<e.G)+((255&t)>>>8-e.G)]}function wr(e){var r,t;for(t=1<<e.G+e.lb,r=0;t>r;++r)Vr(e.Hb[r].ib)}function Cr(e,r,t){var n,i,s;for(i=1,s=7;s>=0;--s)n=t>>s&1,Jr(r,e.ib,i,n),i=i<<1|n}function xr(e,r,t,n){var i,s,o,_,a,c;for(s=1,a=!0,o=7;o>=0;--o)i=n>>o&1,c=s,a&&(_=t>>o&1,c+=1+_<<8,a=_==i),Jr(r,e.ib,c,i),s=s<<1|i}function Dr(e){return e.ib=n(768),e}function Ar(e,r,t,n){var i,s,o,_,a;if(a=0,s=1,o=7,r)for(;o>=0;--o)if(_=t>>o&1,i=n>>o&1,a+=Xr(e.ib[(1+_<<8)+s],i),s=s<<1|i,_!=i){--o;break}for(;o>=0;--o)i=n>>o&1,a+=Xr(e.ib[s],i),s=s<<1|i;return a}function Or(e){e.f=-1,e.r=0}function Ir(e){e.f=0,e.r=0}function Hr(e,r){return e.X=r,e.hb=n(1<<r),e}function Nr(e,r,t){var n,i,s;for(s=1,i=e.X;0!=i;)--i,n=t>>>i&1,Jr(r,e.hb,s,n),s=s<<1|n}function Gr(e,r){var t,n,i,s;for(s=0,i=1,n=e.X;0!=n;)--n,t=r>>>n&1,s+=Xr(e.hb[i],t),i=(i<<1)+t;return s}function Tr(e,r,t){var n,i,s;for(s=1,i=0;e.X>i;++i)n=1&t,Jr(r,e.hb,s,n),s=s<<1|n,t>>=1}function Wr(e,r){var t,n,i,s;for(s=0,i=1,n=e.X;0!=n;--n)t=1&r,r>>>=1,s+=Xr(e.hb[i],t),i=i<<1|t;return s}function Yr(e,r,t,n,i){var s,o,_;for(_=1,o=0;n>o;++o)s=1&i,Jr(t,e,r+_,s),_=_<<1|s,i>>=1}function Zr(e,r,t,n){var i,s,o,_;for(_=0,o=1,s=t;0!=s;--s)i=1&n,n>>>=1,_+=wt[(2047&(e[r+o]-i^-i))>>>2],o=o<<1|i;return _}function Vr(e){var r;for(r=e.length-1;r>=0;--r)e[r]=1024}function Jr(e,r,t,n){var o,_;_=r[t],o=(e.rb>>>11)*_,0==n?(e.rb=o,r[t]=_+(2048-_>>>5)<<16>>16):(e.Ob=i(e.Ob,s(c(o),[4294967295,0])),e.rb-=o,r[t]=_-(_>>>5)<<16>>16),0==(-16777216&e.rb)&&(e.rb<<=8,Ur(e))}function jr(e,r,t){var n;for(n=t-1;n>=0;--n)e.rb>>>=1,1==(r>>>n&1)&&(e.Ob=i(e.Ob,c(e.rb))),0==(-16777216&e.rb)&&(e.rb<<=8,Ur(e))}function Kr(e){var r;for(r=0;5>r;++r)Ur(e)}function qr(e){return i(i(c(e.mb),e.Bb),[4,0])}function Qr(e){e.Bb=ct,e.Ob=ct,e.rb=-1,e.mb=1,e.Zb=0}function Ur(e){var r,t;if(r=u(l(e.Ob,32)),0!=r||o(e.Ob,[4278190080,0])<0){e.Bb=i(e.Bb,c(e.mb)),t=e.Zb;do M(e.fc,t+r),t=255;while(0!=--e.mb);e.Zb=u(e.Ob)>>>24}++e.mb,e.Ob=h(s(e.Ob,[16777215,0]),8)}function Xr(e,r){return wt[(2047&(e-r^-r))>>>2]}function $r(e){var r,t,i,s,o,_,a,c=e.length;if("object"==typeof e)if(e instanceof Array)t=e;else if(e.toJSON)t=e.toJSON();else for(t=[],o=0;e.length>o;o+=1)t[o]=e[o];else a=e.length,_=n(a),g(e,0,a,_,0),t=_;for(s=0,o=0;c>o;++o)r=t[o],r>=1&&127>=r?++s:s+=0==r||r>=128&&2047>=r?2:3;for(i=n(s),s=0,o=0;c>o;++o)r=t[o],r>=1&&127>=r?i[s++]=r<<24>>24:0==r||r>=128&&2047>=r?(i[s++]=(192|r>>6&31)<<24>>24,i[s++]=(128|63&r)<<24>>24):(i[s++]=(224|r>>12&15)<<24>>24,i[s++]=(128|r>>6&63)<<24>>24,i[s++]=(128|63&r)<<24>>24);return i}function et(e){return e[1]+e[0]}function rt(e,r,n,i){function s(){for(var e,r=(new Date).getTime();K(a.c.bc);)if(o=et(a.c.bc.Qb)/et(a.c.hc),(new Date).getTime()-r>200)return i?i(o):void 0!==_&&t(o,_),st(s,0),!1;i?i(1):void 0!==_&&t(1,_),e=b(a.c.ec),n?n(e):void 0!==_&&postMessage({action:nt,cbn:_,result:e.slice(0)})}var o,_,a={};"function"!=typeof n&&(_=n,n=i=0),a.ic=xt(r),a.c=L(new vt,$r(e),a.ic),i?i(0):void 0!==_&&t(0,_),st(s,0)}var tt,nt=1,it=3,st="function"==typeof setImmediate?setImmediate:setTimeout,ot=4294967296,_t=[4294967295,-ot],at=[0,-0x8000000000000000],ct=[0,0],ft=[1,0],ut=r({}),mt=n(256),pt=r(),dt=r(new pt);tt.Db=0,tt.dc=0;var ht=r(),Pt=r(new ht);tt.Db=0;var lt=r(),vt=r(new lt),Bt=r();tt.nb=0,tt.e=0,tt.qb=0,tt.Cb=0,tt.z=0,tt.v=0,tt.gb=0,tt.q=0;var St=function(){var e,r,t,i=n(256);for(e=0;256>e;++e){for(t=e,r=0;8>r;++r)0!=(1&t)?t=t>>>1^-306674912:t>>>=1;i[e]=t}return i}(),kt=r(new Bt);tt.Y=!0,tt.Lb=255,tt.g=0,tt.k=0,tt.yb=0,tt.E=66560,tt.Z=4,tt.p=0;var bt=r(),Mt=function(){var e,r,t,i,s=n(2048);for(e=2,s[0]=0,s[1]=1,i=2;22>i;++i)for(t=1<<(i>>1)-1,r=0;t>r;++r,++e)s[e]=i<<24>>24;return s}(),Et=r();tt.o=0,tt.db=0,tt.H=4194304,tt.V=-1,tt.pb=44,tt.ob=0,tt.S=1,tt.bb=0,tt.B=0,tt.i=32,tt.sb=-1,tt.J=3,tt.F=0,tt.l=0,tt.O=0,tt.D=2,tt.s=3,tt.C=0,tt.j=0,tt.fb=0,tt.x=ct;var gt=r(),yt=r(new gt);tt._=0;var Ft=r();tt.lb=0,tt.G=0,tt.Wb=0;var Rt=r(),Lt=r();tt.f=0,tt.f2=0,tt.wb=0,tt.ub=0,tt.xb=0,tt.Fb=0,tt.n=0,tt.n2=0,tt.u=0,tt.Tb=0;var zt=r();tt.X=0;var wt=function(){var e,r,t,i,s=n(512);for(r=8;r>=0;--r)for(i=1<<9-r-1,e=1<<9-r,t=i;e>t;++t)s[t]=(r<<6)+(e-t<<6>>>9-r-1);return s}(),Ct=r();tt.Ob=ct,tt.rb=0,tt.Zb=0,tt.mb=0,tt.Bb=ct;var xt=function(){var e=[{dicSize:16,fb:64,matchFinder:0,lc:3,lp:0,pb:2},{dicSize:20,fb:64,matchFinder:0,lc:3,lp:0,pb:2},{dicSize:19,fb:64,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:20,fb:64,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:21,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:22,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:23,fb:128,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:24,fb:255,matchFinder:1,lc:3,lp:0,pb:2},{dicSize:25,fb:255,matchFinder:1,lc:3,lp:0,pb:2}];return function(r){return e[r-1]||e[6]}}();return"undefined"==typeof onmessage||"undefined"!=typeof window&&void 0!==window.document||!function(){onmessage=function(r){r&&r.$b&&r.$b.action==nt&&e.compress(r.$b.$b,r.$b.ic,r.$b.cbn)}}(),{compress:rt}}();this.LZMA=this.LZMA_WORKER=e;